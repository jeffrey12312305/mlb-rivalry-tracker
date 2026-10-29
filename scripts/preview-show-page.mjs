import fs from "node:fs/promises";
import path from "node:path";

const normalize = value =>
  String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

function asNumber(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`Invalid statistic: ${value}`);
  }

  return number;
}

function findHeader(table) {
  return table.rows[0]?.map(value =>
    String(value).trim().toUpperCase()
  ) ?? [];
}

function parseBatters(table) {
  return table.rows.slice(1)
    .filter(row =>
      row.length >= 8 &&
      row[0] &&
      !/^(batter|batting totals)$/i.test(row[0])
    )
    .map(row => {
      const label = row[0];
      const separator = label.lastIndexOf(",");

      return {
        player: separator >= 0
          ? label.slice(0, separator).trim()
          : label.trim(),
        pos: separator >= 0
          ? label.slice(separator + 1).trim()
          : "",
        ab: asNumber(row[1]),
        r: asNumber(row[2]),
        h: asNumber(row[3]),
        rbi: asNumber(row[4]),
        bb: asNumber(row[5]),
        so: asNumber(row[6]),
        avg: row[7]
      };
    });
}

function parsePitchers(table) {
  return table.rows.slice(1)
    .filter(row =>
      row.length >= 8 &&
      row[0] &&
      !/^(pitcher|pitching totals)$/i.test(row[0])
    )
    .map(row => ({
      player: row[0],
      ip: String(row[1]),
      h: asNumber(row[2]),
      r: asNumber(row[3]),
      er: asNumber(row[4]),
      bb: asNumber(row[5]),
      so: asNumber(row[6]),
      era: row[7]
    }));
}

function totals(table, type) {
  const label = type === "batting"
    ? "Batting Totals"
    : "Pitching Totals";

  const row = table.rows.find(
    row => normalize(row[0]) === normalize(label)
  );

  if (!row) {
    throw new Error(`Missing ${label}`);
  }

  return row;
}

async function main() {
  const files = await fs.readdir("data");

  const candidates = files.filter(file =>
    /^show-game-\d+\.json$/.test(file)
  );

  if (!candidates.length) {
    console.log("");
    console.log("No exported game files found.");
    console.log("Put show-game-1878508116.json in data/");
    console.log("Then run:");
    console.log("node scripts/preview-show-page.mjs");
    return;
  }

  const stats = await Promise.all(
    candidates.map(async file => ({
      file,
      modified: (
        await fs.stat(path.join("data", file))
      ).mtimeMs
    }))
  );

  stats.sort((a, b) => b.modified - a.modified);

  const input = path.join("data", stats[0].file);

  const exportData = JSON.parse(
    await fs.readFile(input, "utf8")
  );

  if (
    exportData.schema !== "mlb-show-web-gamelog-v1"
  ) {
    throw new Error("Unrecognized game export format.");
  }

  const tables = exportData.tables;

  if (!Array.isArray(tables)) {
    throw new Error("Missing box-score tables.");
  }

  const lineScore = tables.find(table =>
    findHeader(table).includes("R") &&
    findHeader(table).includes("H") &&
    findHeader(table).includes("E")
  );

  if (!lineScore || lineScore.rows.length < 3) {
    throw new Error("Could not identify the final scoreboard.");
  }

  const away = lineScore.rows[1];
  const home = lineScore.rows[2];

  const teams = [away[1], home[1]];

  if (
    !teams.some(team => normalize(team) === "barbaros") ||
    !teams.some(team => normalize(team) === "heat")
  ) {
    throw new Error("Not a Barbaros vs Heat game.");
  }

  if (
    ![...away, ...home].some(
      value => normalize(value) === "xromanx"
    )
  ) {
    throw new Error("Expected opponent xRomanx not found.");
  }

  const battingTables = tables.filter(table => {
    const header = findHeader(table);

    return (
      header[0] === "BATTER" &&
      header.includes("AB") &&
      header.includes("RBI")
    );
  });

  const pitchingTables = tables.filter(table => {
    const header = findHeader(table);

    return (
      header[0] === "PITCHER" &&
      header.includes("IP") &&
      header.includes("ER")
    );
  });

  if (
    battingTables.length !== 2 ||
    pitchingTables.length !== 2
  ) {
    throw new Error(
      "Expected two batting and two pitching tables."
    );
  }

  const awayKey = normalize(away[1]);
  const homeKey = normalize(home[1]);

  const playerBox = {
    [awayKey]: parseBatters(battingTables[0]),
    [homeKey]: parseBatters(battingTables[1])
  };

  const pitchingBox = {
    [awayKey]: parsePitchers(pitchingTables[0]),
    [homeKey]: parsePitchers(pitchingTables[1])
  };

  const totalsByTeam = {};
  const lineRows = [away, home];

  for (let i = 0; i < 2; i++) {
    const team = normalize(lineRows[i][1]);
    const row = lineRows[i];

    const battingTotals = totals(
      battingTables[i],
      "batting"
    );

    const [runs, hits, errors] = row.slice(-3)
      .map(asNumber);

    if (
      asNumber(battingTotals[2]) !== runs ||
      asNumber(battingTotals[3]) !== hits
    ) {
      throw new Error(
        `${team} batting totals do not match the scoreboard.`
      );
    }

    totalsByTeam[team] = {
      runs,
      hits,
      errors,
      rbi: asNumber(battingTotals[4]),
      strikeouts: asNumber(battingTotals[6])
    };
  }

  // Confirm pitcher hits/runs allowed match opponent's offense.
  for (let i = 0; i < 2; i++) {
    const thisTeam = normalize(lineRows[i][1]);
    const opponent = normalize(lineRows[1 - i][1]);

    const pitchingTotals = totals(
      pitchingTables[i],
      "pitching"
    );

    if (
      asNumber(pitchingTotals[2]) !==
        totalsByTeam[opponent].hits ||
      asNumber(pitchingTotals[3]) !==
        totalsByTeam[opponent].runs
    ) {
      throw new Error(
        `${thisTeam} pitching totals do not reconcile.`
      );
    }
  }

  const source = await fs.readFile(
    "src/data/games.js",
    "utf8"
  );

  const encoded = Buffer.from(source)
    .toString("base64");

  const { games } = await import(
    `data:text/javascript;base64,${encoded}`
  );

  const existing = games.find(
    game =>
      String(game.showGameId ?? "") ===
      String(exportData.gameId)
  );

  const parsed = {
    showGameId: String(exportData.gameId),
    home: home[1],
    away: away[1],
    winner:
      totalsByTeam[homeKey].runs >
      totalsByTeam[awayKey].runs
        ? home[1]
        : away[1],
    barbaros: totalsByTeam.barbaros,
    heat: totalsByTeam.heat,
    playerBox,
    pitchingBox,
    playByPlay: exportData.playByPlay || "",
    visibleTextForReview:
      exportData.visibleTextForReview || ""
  };

  const output =
    `data/show-game-parsed-${exportData.gameId}.json`;

  await fs.writeFile(
    output,
    JSON.stringify(parsed, null, 2)
  );

  console.log("");
  console.log("================================");
  console.log(" MLB THE SHOW BOX SCORE PREVIEW");
  console.log("================================");
  console.log("");

  console.log("Official ID:", exportData.gameId);
  console.log(
    "Result:",
    `${parsed.winner} wins`,
    `${parsed.barbaros.runs}-${parsed.heat.runs}`,
    "(Barbaros-Heat)"
  );

  console.log(
    "Batters:",
    playerBox.barbaros.length,
    "Barbaros /",
    playerBox.heat.length,
    "Heat"
  );

  console.log(
    "Pitchers:",
    pitchingBox.barbaros.length,
    "Barbaros /",
    pitchingBox.heat.length,
    "Heat"
  );

  console.log(
    "Play-by-play:",
    parsed.playByPlay
      ? "Captured"
      : "Not found"
  );

  console.log(
    "Existing tracker match:",
    existing
      ? `${existing.series}, Game ${existing.game}, ID ${existing.id}`
      : "Not recorded yet"
  );

  console.log("");
  console.log("Parsed data saved:", output);
  console.log("NO CHANGES MADE TO games.js");
}

main().catch(error => {
  console.error("IMPORT PREVIEW FAILED:", error.message);
  process.exitCode = 1;
});
