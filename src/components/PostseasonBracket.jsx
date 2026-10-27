
import TeamLabel from "./TeamLabel";

const TEAM_NAMES = ["Barbaros", "Heat"];

function seriesNumber(game) {
  const match = String(game.series || "").match(/\d+/);
  return match ? Number(match[0]) : -1;
}

function getResult(allGames, number) {
  const played = allGames.filter(
    (game) => seriesNumber(game) === number
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
    TEAM_NAMES.find((team) => wins[team] >= 3) || null;

  return { number, wins, winner, played: played.length };
}

function TeamLine({ team, wins, champion }) {
  return (
    <div
      className={`postseason-team-line postseason-team-line--${team.toLowerCase()} ${
        champion ? "is-winner" : ""
      }`}
    >
      <TeamLabel team={team} flagSize={19} />
      <strong>{wins}</strong>
    </div>
  );
}

function SeriesMatch({ result, onSelect }) {
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
          {result.winner
            ? "FINAL"
            : result.played
              ? "LIVE"
              : "UPCOMING"}
        </span>
      </div>

      <TeamLine
        team="Barbaros"
        wins={result.wins.Barbaros}
        champion={result.winner === "Barbaros"}
      />

      <TeamLine
        team="Heat"
        wins={result.wins.Heat}
        champion={result.winner === "Heat"}
      />
    </button>
  );
}

function Connections() {
  return (
    <svg
      className="postseason-connections"
      viewBox="0 0 120 434"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 49 H38 V105 H80 M0 161 H38 V105" />
      <path d="M0 273 H38 V329 H80 M0 385 H38 V329" />
      <path d="M80 105 H86 V329 H80 M86 217 H120" />
    </svg>
  );
}

function FinalMatch({ result, tournament, onSelect }) {
  const isPlayed = result.played > 0;
  const resolved = Boolean(result.winner);

  return (
    <button
      type="button"
      className={`postseason-final postseason-clickable ${
        resolved ? "is-decided" : ""
      }`}
      onClick={() => onSelect(result.number)}
      aria-label={`View Series ${result.number} tournament final box scores`}
      title={`View Series ${result.number} box scores`}
    >
      <div
        className="postseason-final__trophy"
        aria-hidden="true"
      >
        🏆
      </div>

      <p className="postseason-final__round">
        SERIES {result.number} · TOURNAMENT FINAL
      </p>

      {isPlayed ? (
        <div className="postseason-final__lines">
          <TeamLine
            team="Barbaros"
            wins={result.wins.Barbaros}
            champion={result.winner === "Barbaros"}
          />
          <TeamLine
            team="Heat"
            wins={result.wins.Heat}
            champion={result.winner === "Heat"}
          />
        </div>
      ) : (
        <div className="postseason-final__pending">
          SERIES {result.number}
          <small>NOT STARTED</small>
        </div>
      )}

      <div className="postseason-final__winner">
        <span>
          TOURNAMENT {tournament} CHAMPION
        </span>

        <strong>
          {resolved ? (
            <TeamLabel
              team={result.winner}
              flagSize={27}
            />
          ) : (
            "TO BE DECIDED"
          )}
        </strong>
      </div>
    </button>
  );
}

export default function PostseasonBracket({
  games,
  tournament,
  onSelectSeries,
}) {
  const firstSeries = tournament === 1 ? 1 : 5;

  const seriesNumbers = [0, 1, 2, 3].map(
    (i) => firstSeries + i
  );

  const results = seriesNumbers.map(
    (number) => getResult(games, number)
  );

  const finalSeries = tournament === 1 ? 4 : 9;
  const finalResult = getResult(games, finalSeries);

  const record = results.reduce(
    (acc, result) => {
      if (result.winner) {
        acc[result.winner] += 1;
      }

      return acc;
    },
    { Barbaros: 0, Heat: 0 }
  );

  return (
    <section
      className={`postseason-board postseason-board--${tournament}`}
      aria-label={`Tournament ${tournament} postseason bracket`}
    >
      <div className="postseason-board__heading">
        <p>ROAD TO THE TITLE</p>
        <h2>TOURNAMENT {tournament}</h2>
        <span>
          SERIES {firstSeries}–{firstSeries + 3}
          {" · SERIES RECORD: BARBAROS "}
          {record.Barbaros}–{record.Heat} HEAT
        </span>
      </div>

      <div className="postseason-bracket">
        <div className="postseason-series-stack">
          {results.map((result) => (
            <SeriesMatch
              key={result.number}
              result={result}
              onSelect={onSelectSeries}
            />
          ))}
        </div>

        <Connections />

        <FinalMatch
          result={finalResult}
          tournament={tournament}
          onSelect={onSelectSeries}
        />
      </div>

      {tournament === 2 && !finalResult.winner && (
        <p className="postseason-board__note">
          Series 9 is the tournament finale.
          The bracket will update as new games are recorded.
        </p>
      )}
    </section>
  );
}
