import fs from "node:fs/promises";

const SOURCE = "src/data/games.js";
const DEFAULT_JSON =
  "data/show-history-page1-populated.json";

const USERNAME = "X_CallMeDirty";
const OPPONENT = "x-_BlackDemon_-";

const args = process.argv.slice(2);

const applyLinks = args.includes("--apply-links");

const fileArg = args.find(arg =>
  arg.startsWith("--file=")
);

const filename = fileArg
  ? fileArg.slice("--file=".length)
  : DEFAULT_JSON;

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function numeric(value) {
  if (value == null || value === "") {
    return null;
  }

  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function isRivalry(game) {
  const teams = [
    normalize(game.home_full_name),
    normalize(game.away_full_name)
  ];

  const players = [
    normalize(game.home_name),
    normalize(game.away_name)
  ];

  return (
    teams.includes("barbaros") &&
    teams.includes("heat") &&
    ["xRomanx", OPPONENT].some(alias => players.includes(normalize(alias)))
  );
}

function fingerprint(home, barbaros, heat) {
  return [
    normalize(home),
    numeric(barbaros.runs),
    numeric(heat.runs),
    numeric(barbaros.hits),
    numeric(heat.hits),
    numeric(barbaros.errors),
    numeric(heat.errors)
  ].join("|");
}

function localFingerprint(game) {
  return fingerprint(
    game.home,
    game.barbaros,
    game.heat
  );
}

function apiFingerprint(game) {
  const barbarosHome =
    normalize(game.home_full_name) === "barbaros";

  const barbaros = barbarosHome
    ? {
        runs: game.home_runs,
        hits: game.home_hits,
        errors: game.home_errors
      }
    : {
        runs: game.away_runs,
        hits: game.away_hits,
        errors: game.away_errors
      };

  const heat = barbarosHome
    ? {
        runs: game.away_runs,
        hits: game.away_hits,
        errors: game.away_errors
      }
    : {
        runs: game.home_runs,
        hits: game.home_hits,
        errors: game.home_errors
      };

  return fingerprint(
    barbarosHome ? "Barbaros" : "Heat",
    barbaros,
    heat
  );
}

function resultText(game) {
  const homeIsBarbaros =
    normalize(game.home_full_name) === "barbaros";

  const b = homeIsBarbaros
    ? game.home_runs
    : game.away_runs;

  const h = homeIsBarbaros
    ? game.away_runs
    : game.home_runs;

  return `Barbaros ${b} - Heat ${h}`;
}

async function loadGames(source) {
  const encoded =
    Buffer.from(source).toString("base64");

  const module = await import(
    `data:text/javascript;base64,${encoded}`
  );

  if (!Array.isArray(module.games)) {
    throw new Error(
      "games.js does not export a games array."
    );
  }

  return module.games;
}

async function loadAPI() {
  const source = await fs.readFile(
    filename,
    "utf8"
  );

  const data = JSON.parse(source);

  if (!Array.isArray(data.game_history)) {
    throw new Error(
      "JSON file is missing game_history."
    );
  }

  if (data.game_history.length === 0) {
    throw new Error(
      "The saved API response contains zero games."
    );
  }

  return data.game_history;
}

async function main() {
  console.log("");
  console.log("====================================");
  console.log(" BARBAROS vs HEAT - SYNC V2");
  console.log("====================================");

  console.log("Mode:",
    applyLinks ? "APPROVE EXISTING LINKS" : "PREVIEW"
  );

  console.log("File:", filename);

  const source = await fs.readFile(
    SOURCE,
    "utf8"
  );

  const games = await loadGames(source);
  const history = await loadAPI();

  const localIDs = games.map(g => String(g.id));

  if (new Set(localIDs).size !== games.length) {
    throw new Error(
      "Duplicate local game IDs detected. No changes made."
    );
  }

  const uniqueAPI = new Map();

  for (const game of history) {
    if (game.id != null) {
      uniqueAPI.set(String(game.id), game);
    }
  }

  const rivalry = [...uniqueAPI.values()]
    .filter(isRivalry)
    .sort((a, b) =>
      Number(a.id) - Number(b.id)
    );

  const ready = [];
  const linked = [];
  const pending = [];
  const review = [];

  console.log("");
  console.log("Existing site games:", games.length);
  console.log("API games examined:", uniqueAPI.size);
  console.log("Rivalry games:", rivalry.length);
  console.log("");

  for (const api of rivalry) {
    const officialID = String(api.id);
    const key = apiFingerprint(api);

    const officialMatches = games.filter(
      game =>
        game.showGameId != null &&
        String(game.showGameId) === officialID
    );

    const scoreMatches = games.filter(
      game => localFingerprint(game) === key
    );

    let status;

    if (officialMatches.length > 1) {
      status = "REVIEW - DUPLICATE OFFICIAL ID";
      review.push({ api, reason: status });
    } else if (officialMatches.length === 1) {
      const game = officialMatches[0];

      if (localFingerprint(game) === key) {
        status = `LINKED - ${game.series} Game ${game.game}`;
        linked.push({ api, game });
      } else {
        status = "REVIEW - OFFICIAL ID SCORE CONFLICT";
        review.push({ api, reason: status });
      }
    } else if (scoreMatches.length === 1) {
      const game = scoreMatches[0];

      if (game.showGameId != null) {
        status = "REVIEW - MATCH HAS DIFFERENT OFFICIAL ID";
        review.push({ api, reason: status });
      } else {
        status = `READY TO LINK - ${game.series} Game ${game.game}`;
        ready.push({ api, game });
      }
    } else if (scoreMatches.length > 1) {
      status = "REVIEW - AMBIGUOUS SCORE MATCH";
      review.push({ api, reason: status });
    } else {
      status = "NEW GAME - NEEDS APPROVAL";
      pending.push(api);
    }

    console.log(
      `${officialID} | ${resultText(api)}`
    );

    console.log(`  ${status}`);
  }

  console.log("");
  console.log("------------- SUMMARY -------------");
  console.log("Already linked:", linked.length);
  console.log("Ready to link:", ready.length);
  console.log("Potential new:", pending.length);
  console.log("Needs review:", review.length);

  // Save new games to a separate review queue.
  // Never insert them into games.js automatically.
  if (pending.length > 0) {
    await fs.mkdir("data", {
      recursive: true
    });

    const queue = {
      createdAt: new Date().toISOString(),
      source: filename,
      username: USERNAME,
      opponent: OPPONENT,
      status: "PENDING_REVIEW",
      games: pending
    };

    await fs.writeFile(
      "data/show-history-pending.json",
      JSON.stringify(queue, null, 2)
    );

    console.log("");
    console.log(
      "Review queue saved: data/show-history-pending.json"
    );
  }

  if (applyLinks && ready.length > 0) {
    if (review.length > 0) {
      throw new Error(
        "Conflicting matches found. No links changed."
      );
    }

    let updated = source;

    for (const { api, game } of ready) {
      const pattern = new RegExp(
        `^([ \\t]*)id:[ \\t]*${game.id}[ \\t]*,`,
        "gm"
      );

      const matches = [
        ...updated.matchAll(pattern)
      ];

      if (matches.length !== 1) {
        throw new Error(
          `Could not safely locate local game ${game.id}`
        );
      }

      updated = updated.replace(
        pattern,
        (original, indent) =>
          `${indent}showGameId: "${api.id}",\n${original}`
      );
    }

    // Validate JavaScript before overwriting.
    const validated = await loadGames(updated);

    if (validated.length !== games.length) {
      throw new Error(
        "Validation failed: game count changed."
      );
    }

    for (const { api, game } of ready) {
      const found = validated.find(
        item => item.id === game.id
      );

      if (
        !found ||
        String(found.showGameId) !== String(api.id)
      ) {
        throw new Error(
          `Validation failed for game ${game.id}`
        );
      }
    }

    await fs.writeFile(SOURCE, updated);

    console.log("");
    console.log(
      `SUCCESS: Linked ${ready.length} existing games.`
    );
  }

  if (!applyLinks) {
    console.log("");
    console.log(
      "PREVIEW ONLY - games.js unchanged."
    );
  }

  if (applyLinks && ready.length === 0) {
    console.log("");
    console.log(
      "No additional game IDs needed linking."
    );
  }

  console.log("");
  console.log(
    "No new games were imported automatically."
  );
}

main().catch(error => {
  console.error("");
  console.error("SYNC ERROR:", error.message);
  process.exitCode = 1;
});
