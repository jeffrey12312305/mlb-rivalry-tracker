import TeamLabel from "./TeamLabel";

const TEAMS = ["Barbaros", "Heat"];

const SERIES_WINS_TO_CROWN_CHAMPION = 4;

// Every individual series remains best-of-five games.
function getSeriesNumber(game) {
  const match = String(game.series ?? "").match(/\d+/);

  return match ? Number(match[0]) : -1;
}

function getSeriesResult(games, number) {
  const played = games.filter(
    (game) => getSeriesNumber(game) === number
  );

  const wins = {
    Barbaros: played.filter(
      (game) => game.winner === "Barbaros"
    ).length,

    Heat: played.filter(
      (game) => game.winner === "Heat"
    ).length,
  };

  const winner =
    TEAMS.find((team) => wins[team] >= 3) ?? null;

  return {
    number,
    wins,
    played: played.length,
    winner,
  };
}

// A tournament is first to FOUR completed series victories.
function getTournament(games, tournament) {
  const firstSeries = tournament === 1 ? 1 : 7;

  const possibleSeries = Array.from(
    { length: 7 },
    (_, index) =>
      getSeriesResult(games, firstSeries + index)
  );

  const seriesWins = {
    Barbaros: 0,
    Heat: 0,
  };

  let champion = null;
  let clinchingSeries = null;

  for (const result of possibleSeries) {
    if (!result.winner) continue;

    seriesWins[result.winner] += 1;

    if (
      seriesWins[result.winner] ===
      SERIES_WINS_TO_CROWN_CHAMPION
    ) {
      champion = result.winner;
      clinchingSeries = result.number;
      break;
    }
  }

  // Completed tournaments end at the clinching series.
  // Active tournaments show up to seven series slots.
  const results = champion
    ? possibleSeries.filter(
        (result) => result.number <= clinchingSeries
      )
    : possibleSeries;

  const active = results.find(
    (result) => result.played && !result.winner
  );

  const next = results.find(
    (result) => !result.played
  );

  const linkSeries =
    clinchingSeries ??
    active?.number ??
    next?.number ??
    firstSeries;

  return {
    results,
    seriesWins,
    champion,
    clinchingSeries,
    active,
    linkSeries,
  };
}

function TeamLine({ team, score, winner }) {
  return (
    <div
      className={`postseason-team-line postseason-team-line--${team.toLowerCase()} ${
        winner ? "is-winner" : ""
      }`}
    >
      <TeamLabel
        team={team}
        flagSize={19}
      />

      <strong>{score}</strong>
    </div>
  );
}

function SeriesMatch({
  result,
  clinchingSeries,
  onSelect,
}) {
  const status =
    result.number === clinchingSeries
      ? "CLINCHER"
      : result.winner
        ? "FINAL"
        : result.played
          ? "LIVE"
          : "UPCOMING";

  return (
    <button
      type="button"
      className="postseason-match postseason-clickable"
      onClick={() => onSelect(result.number)}
      aria-label={`View Series ${result.number} games and box scores`}
      title={`View Series ${result.number} box scores`}
    >
      <div className="postseason-match__heading">
        <span>SERIES {result.number}</span>

        <span className="postseason-match__state">
          {status}
        </span>
      </div>

      <TeamLine
        team="Barbaros"
        score={
          result.played
            ? result.wins.Barbaros
            : "—"
        }
        winner={result.winner === "Barbaros"}
      />

      <TeamLine
        team="Heat"
        score={
          result.played
            ? result.wins.Heat
            : "—"
        }
        winner={result.winner === "Heat"}
      />
    </button>
  );
}

// Dynamically scale the bracket lines to six or seven rows.
function Connections({ count }) {
  const rowHeight = 98;
  const gap = 14;

  const height =
    count * rowHeight + (count - 1) * gap;

  const centers = Array.from(
    { length: count },
    (_, index) =>
      rowHeight / 2 +
      index * (rowHeight + gap)
  );

  const middle =
    (centers[0] + centers[centers.length - 1]) / 2;

  const paths = [
    `M74 ${centers[0]} V${centers[centers.length - 1]}`,

    ...centers.map(
      (y) => `M0 ${y} H74`
    ),

    `M74 ${middle} H120`,
  ];

  return (
    <svg
      className="postseason-connections"
      viewBox={`0 0 120 ${height}`}
      style={{ height: `${height}px` }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={paths.join(" ")} />
    </svg>
  );
}

// Championship card displays SERIES victories, not game wins.
function Championship({
  data,
  tournament,
  onSelect,
}) {
  const {
    seriesWins,
    champion,
    clinchingSeries,
    active,
    linkSeries,
  } = data;

  return (
    <button
      type="button"
      className={`postseason-final postseason-clickable ${
        champion ? "is-decided" : ""
      }`}
      onClick={() => onSelect(linkSeries)}
      aria-label={`View Series ${linkSeries} box scores`}
      title={`View Series ${linkSeries} box scores`}
    >
      <div
        className="postseason-final__trophy"
        aria-hidden="true"
      >
        🏆
      </div>

      <p className="postseason-final__round">
        TOURNAMENT {tournament} · FIRST TO FOUR SERIES
      </p>

      <div className="postseason-final__lines">
        <TeamLine
          team="Barbaros"
          score={seriesWins.Barbaros}
          winner={champion === "Barbaros"}
        />

        <TeamLine
          team="Heat"
          score={seriesWins.Heat}
          winner={champion === "Heat"}
        />
      </div>

      <div className="postseason-final__winner">
        <span>
          {champion
            ? `CLINCHED IN SERIES ${clinchingSeries}`
            : "TOURNAMENT CHAMPION"}
        </span>

        <strong>
          {champion ? (
            <TeamLabel
              team={champion}
              flagSize={27}
            />
          ) : (
            "TO BE DECIDED"
          )}
        </strong>
      </div>

      {!champion && active && (
        <p className="postseason-final__detail">
          Series {active.number} in progress:
          {" "}Barbaros {active.wins.Barbaros}
          –{active.wins.Heat} Heat
        </p>
      )}
    </button>
  );
}

export default function PostseasonBracket({
  games,
  tournament,
  onSelectSeries,
}) {
  const data = getTournament(games, tournament);
  const count = data.results.length;

  return (
    <section
      className={`postseason-board postseason-board--${tournament}`}
      aria-label={`Tournament ${tournament} best-of-seven series bracket`}
    >
      <div className="postseason-bracket">
        <div
          className="postseason-series-stack"
          style={{ "--bracket-rows": count }}
        >
          {data.results.map((result) => (
            <SeriesMatch
              key={result.number}
              result={result}
              clinchingSeries={data.clinchingSeries}
              onSelect={onSelectSeries}
            />
          ))}
        </div>

        <Connections count={count} />

        <Championship
          data={data}
          tournament={tournament}
          onSelect={onSelectSeries}
        />
      </div>

      <p className="postseason-board__note">
        {data.champion
          ? `Tournament ${tournament}: ${data.champion} won four series to claim the championship.`
          : `Tournament ${tournament} is active. First team to win four series takes the title.`}
      </p>
    </section>
  );
}
