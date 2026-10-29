import fs from "node:fs/promises";
import { spawnSync } from "node:child_process";

const FILE = "src/data/games.js";
const args = process.argv.slice(2);
const approval = args.find(x => x.startsWith("--approve="))?.split("=")[1];
const requestedFile = args.find(x => x.startsWith("--file="))?.slice(7);

const key = value => String(value ?? "")
  .toLowerCase().replace(/[^a-z0-9]/g, "");

const sum = (rows, field) =>
  rows.reduce((total, row) => total + Number(row[field] ?? 0), 0);

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const escapeRe = text =>
  text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const loadGames = async source => {
  const encoded = Buffer.from(source).toString("base64");
  const module = await import(`data:text/javascript;base64,${encoded}`);
  return module.games;
};

function getNextSlot(games) {
  const latestSeries = Math.max(...games.map(g =>
    Number(String(g.series).match(/\d+/)?.[0] ?? 0)
  ));

  const seriesGames = games.filter(g =>
    g.series === `Series ${latestSeries}`
  );

  const wins = { barbaros: 0, heat: 0 };

  for (const game of seriesGames) {
    const team = key(game.winner);
    if (team in wins) wins[team]++;
  }

  const complete = Math.max(...Object.values(wins)) >= 3;

  return {
    series: complete ? latestSeries + 1 : latestSeries,
    game: complete
      ? 1
      : Math.max(...seriesGames.map(g => Number(g.game)), 0) + 1,
    wins
  };
}

function extractEvents(data) {
  const text = data.playByPlay || "";

  // MLB The Show does not always include "Inning N:"
  // before each team's batting section.
  const headers = [...text.matchAll(
    /\b(Barbaros|Heat)\s+batting\./gi
  )];

  assert(headers.length >= 2,
    "Could not identify both teams' batting sections.");

  const events = [];
  const patterns = [
    ["HR", "homered"],
    ["2B", "doubled"],
    ["3B", "tripled"],
    ["SB", "stole"],
    ["CS", "was caught stealing"],
    ["SF", "hit a sacrifice fly"],
    ["SH", "laid down a sacrifice bunt"]
  ];

  const rawHR = { barbaros: 0, heat: 0 };
  const innings = { barbaros: 0, heat: 0 };

  for (let i = 0; i < headers.length; i++) {
    const match = headers[i];
    const team = key(match[1]);
    innings[team]++;

    const start = match.index + match[0].length;
    const end = i + 1 < headers.length
      ? headers[i + 1].index
      : text.length;

    let section = text.slice(start, end);

    // Remove inning summaries and repeated highlights.
    const summary = section.search(
      /\bRuns:\s*\d+\s+Hits:\s*\d+\s+Walks:\s*\d+/i
    );

    assert(summary >= 0,
      `Missing inning summary for ${team}.`);

    section = section.slice(0, summary);

    rawHR[team] +=
      [...section.matchAll(/\bhomered\b/gi)].length;

    for (const batter of data.playerBox?.[team] || []) {
      for (const [type, phrase] of patterns) {
        const expression = new RegExp(
          `\\b${escapeRe(batter.player)}\\s+${escapeRe(phrase)}\\b`,
          "gi"
        );

        for (const occurrence of section.matchAll(expression)) {
          events.push({
            team,
            player: batter.player,
            type,
            inning: innings[team]
          });
        }
      }
    }
  }

  for (const team of ["barbaros", "heat"]) {
    assert(innings[team] > 0,
      `No batting sections found for ${team}.`);

    const identifiedHR = events.filter(
      event => event.team === team && event.type === "HR"
    ).length;

    assert(identifiedHR === rawHR[team],
      `${team}: HR count mismatch.`);
  }

  return events;
}

function cleanPitchers(rows, playByPlay) {
  const mentioned = [...playByPlay.matchAll(
    /\b([A-Za-z][A-Za-z.'-]*)\s+pitching\b/gi
  )].map(x => x[1]);

  return rows.map(row => {
    let name = String(row.player).trim();
    const decision = name.match(/\((W|L|SV|BS|H)\)$/i);

    if (decision) {
      name = name.replace(/\s*\((W|L|SV|BS|H)\)$/i, "").trim();
    }

    if (name.endsWith("...")) {
      const prefix = name.slice(0, -3).toLowerCase();
      const matches = [...new Set(mentioned.filter(
        candidate => candidate.toLowerCase().startsWith(prefix)
      ))];

      assert(matches.length === 1,
        `Cannot resolve abbreviated pitcher: ${name}`);

      name = matches[0];
    }

    // MLB sometimes displays initials before surnames.
    name = name.replace(/^[A-Z]\.\s+/, "");

    const cleaned = {
      player: name,
      ip: String(row.ip),
      h: Number(row.h),
      r: Number(row.r),
      er: Number(row.er),
      bb: Number(row.bb),
      so: Number(row.so)
    };

    if (decision) {
      cleaned.decision = decision[1].toUpperCase();
    }

    return cleaned;
  });
}

function validateTeam(data, team) {
  const totals = data[team];
  const batters = data.playerBox?.[team];
  const pitchers = data.pitchingBox?.[team];

  assert(totals && Array.isArray(batters) && Array.isArray(pitchers),
    `Missing box score for ${team}`);

  assert(batters.length > 0 && pitchers.length > 0,
    `Empty box score for ${team}`);

  for (const stat of ["runs", "hits", "errors", "rbi", "strikeouts"]) {
    assert(Number.isInteger(totals[stat]) && totals[stat] >= 0,
      `${team}: invalid ${stat}`);
  }

  const checks = [
    ["runs", "r"],
    ["hits", "h"],
    ["rbi", "rbi"],
    ["strikeouts", "so"]
  ];

  for (const [total, field] of checks) {
    assert(sum(batters, field) === totals[total],
      `${team}: ${total} does not match individual batters`);
  }
}

async function main() {
  const files = await fs.readdir("data");

  const candidates = files.filter(name =>
    /^show-game-parsed-\d+\.json$/.test(name)
  );

  assert(candidates.length,
    "No parsed games found. Run preview-show-page.mjs first.");

  let input;

  if (requestedFile) {
    assert(
      /^data\/show-game-parsed-\d+\.json$/.test(requestedFile),
      "Use --file=data/show-game-parsed-ID.json"
    );
    input = requestedFile;
  } else {
    const ranked = await Promise.all(candidates.map(async name => ({
      file: `data/${name}`,
      modified: (await fs.stat(`data/${name}`)).mtimeMs
    })));

    ranked.sort((a, b) => b.modified - a.modified);
    input = ranked[0].file;
  }

  const data = JSON.parse(await fs.readFile(input, "utf8"));
  const id = String(data.showGameId ?? "");

  assert(/^\d+$/.test(id), "Invalid official game ID.");
  assert(input.endsWith(`show-game-parsed-${id}.json`),
    "File name and official game ID do not match.");

  assert(
    ["barbaros", "heat"].includes(key(data.home)) &&
    ["barbaros", "heat"].includes(key(data.away)) &&
    key(data.home) !== key(data.away),
    "Incorrect rivalry team pairing."
  );

  for (const team of ["barbaros", "heat"]) {
    validateTeam(data, team);
  }

  const homeKey = key(data.home);
  const awayKey = key(data.away);
  const winner = data[homeKey].runs > data[awayKey].runs
    ? homeKey
    : awayKey;

  assert(data[homeKey].runs !== data[awayKey].runs,
    "A completed game cannot be tied.");

  assert(key(data.winner) === winner,
    "Winning team does not match the final score.");

  const events = extractEvents(data);

  const playerBox = data.playerBox;
  const pitchingBox = {
    barbaros: cleanPitchers(
      data.pitchingBox.barbaros, data.playByPlay || ""
    ),
    heat: cleanPitchers(
      data.pitchingBox.heat, data.playByPlay || ""
    )
  };

  // Confirm pitcher totals agree with opponent offense.
  for (const team of ["barbaros", "heat"]) {
    const opponent = team === "barbaros" ? "heat" : "barbaros";
    const pitchers = pitchingBox[team];

    assert(sum(pitchers, "h") === data[opponent].hits,
      `${team} pitchers: hits allowed do not reconcile`);

    assert(sum(pitchers, "r") === data[opponent].runs,
      `${team} pitchers: runs allowed do not reconcile`);

    assert(sum(pitchers, "so") === data[opponent].strikeouts,
      `${team} pitchers: strikeouts do not reconcile`);
  }

  const source = await fs.readFile(FILE, "utf8");
  const games = await loadGames(source);

  const existing = games.find(g =>
    String(g.showGameId ?? "") === id
  );

  const hrs = team => events.filter(
    event => event.team === team && event.type === "HR"
  ).length;

  const slot = getNextSlot(games);

  const record = {
    showGameId: id,
    id: Math.max(...games.map(g => Number(g.id))) + 1,
    series: `Series ${slot.series}`,
    game: slot.game,
    home: data.home,
    winner: winner === "barbaros" ? "Barbaros" : "Heat",
    barbaros: { ...data.barbaros, hrs: hrs("barbaros") },
    heat: { ...data.heat, hrs: hrs("heat") },
    mvp: "Pending review",
    notes: "Imported from MLB The Show game page. MVP and narrative pending review.",
    playerBox,
    pitchingBox,
    specialPlays: events
  };

  // Match the website's existing team-stat field order.
  for (const team of ["barbaros", "heat"]) {
    const t = record[team];
    record[team] = {
      runs: t.runs,
      hits: t.hits,
      errors: t.errors,
      hrs: t.hrs,
      rbi: t.rbi,
      strikeouts: t.strikeouts
    };
  }

  console.log("\n====== MLB SHOW IMPORT PREVIEW ======");
  console.log("Official ID:", id);
  console.log("Score: Barbaros", data.barbaros.runs,
    "- Heat", data.heat.runs);
  console.log("Batters:",
    playerBox.barbaros.length + playerBox.heat.length);
  console.log("Pitchers:",
    pitchingBox.barbaros.length + pitchingBox.heat.length);
  console.log("Home runs: Barbaros", hrs("barbaros"),
    "/ Heat", hrs("heat"));
  console.log("Special plays:", events.length);
  console.log("Pitcher names:",
    [...pitchingBox.barbaros, ...pitchingBox.heat]
      .map(p => p.player).join(", "));
  console.log("Input:", input);

  if (existing) {
    console.log("\nALREADY RECORDED:");
    console.log(existing.series, "Game", existing.game,
      "(local ID", existing.id + ")");
    console.log("No changes made.");
    return;
  }

  assert(slot.game <= 5, "Invalid series/game progression.");

  console.log("\nPROPOSED NEW RECORD:");
  console.log(record.series, "Game", record.game,
    "(local ID", record.id + ")");
  console.log("MVP and notes require review.");

  if (!approval) {
    console.log("\nPREVIEW ONLY. No changes made.");
    console.log("To approve this game, run:");
    console.log(
      `node scripts/import-show-page.mjs --approve=${id} --file=${input}`
    );
    return;
  }

  assert(approval === id,
    "Approval ID must match the exported game.");

  // Verify no other record already occupies the target slot.
  assert(!games.some(g =>
    g.series === record.series && Number(g.game) === record.game
  ), "The proposed series/game slot is already occupied.");

  const close = source.lastIndexOf("\n];");
  assert(close >= 0, "Unexpected games.js file ending.");

  const head = source.slice(0, close);
  assert(/\}\s*$/.test(head),
    "Could not locate the final game object.");

  const prefix = head.replace(/(\})(\s*)$/, "$1,$2");
  const block = JSON.stringify(record, null, 2)
    .split("\n")
    .map(line => "  " + line)
    .join("\n");

  const updated = prefix + "\n" + block + source.slice(close);

  const check = await loadGames(updated);
  assert(check.length === games.length + 1,
    "Validation failed: incorrect game count.");

  const backup = `data/backups/games-before-${id}.js`;
  await fs.mkdir("data/backups", { recursive: true });
  await fs.writeFile(backup, source);
  await fs.writeFile(FILE, updated);

  console.log("\nGame added. Checking website build...");

  const result = spawnSync("npm", ["run", "build"], {
    stdio: "inherit"
  });

  if (result.status !== 0) {
    await fs.writeFile(FILE, source);
    throw new Error(
      "Build failed. Original games.js restored from backup."
    );
  }

  console.log("\nSUCCESS: Game imported and build passed.");
  console.log("Backup:", backup);
  console.log("Review the website before committing.");
  console.log("To publish after review:");
  console.log(`git add ${FILE}`);
  console.log(`git commit -m "Import MLB The Show game ${id}"`);
  console.log("git push");
}

main().catch(error => {
  console.error("\nIMPORT STOPPED:", error.message);
  process.exitCode = 1;
});
