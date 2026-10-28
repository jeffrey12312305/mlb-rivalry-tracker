import TeamLabel from "./TeamLabel";

const TEAMS = ["Barbaros", "Heat"];

const GAMES_TO_WIN_SERIES = 3;
const SERIES_TO_WIN_TOURNAMENT = 4;

// Determine which series each recorded game belongs to.
function getSeriesNumber(game) {
  const match = String(game.series || "").match(/\d+/);
  return match ? Number(match[0]) : -1;
}

// Every individual series is BEST OF 5 games.
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
    TEAMS.find(
      (team) => wins[team] >= GAMES_TO_WIN_SERIES
    ) || null;

  return {
    number,
    wins,
    winner,
    played: played.length,
  };
}

// Every tournament is BEST OF 7 series.
// First team to win 4 series becomes champion.
function getTournamentData(games, tournament) {
  const firstSeries = tournament === 1 ? 1 : 7;

  const possibleResults = Array.from(
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

  const results = [];

  for (const result of possibleResults) {
    results.push(result);

    if (result.winner) {
      seriesWins[result.winner] += 1;

      if (
        seriesWins[result.winner] ===
        SERIES_TO_WIN_TOURNAMENT
      ) {
        champion = result.winner;
        clinchingSeries = result.number;
        break;
      }
    }
  }

  const activeSeries = results.find(
    (result) => result.played > 0 && !result.winner
  );

  const upcomingSeries = results.find(
    (result) => result.played === 0
  );

  const selectedSeries =
    clinchingSeries ||
    activeSeries?.number ||
    upcomingSeries?.number ||
    firstSeries;

  return {
    results,
    opening: results.slice(0, 4),
    closing: results.slice(4),
    seriesWins,
    champion,
    clinchingSeries,
    selectedSeries,
    activeSeries,
  };
}

// Each team row inside a matchup card.
function TeamRow({ team, score, winner }) {
  return (
    <div
      className={[
        "postseason-team-line",
        `postseason-team-line--${team.toLowerCase()}`,
        winner ? "is-winner" : "",
      ].join(" ")}
    >
      <TeamLabel team={team} flagSize={19} />
      <strong>{score}</strong>
    </div>
  );
}

// Clickable individual series card.
function SeriesCard({ result, onSelect }) {
  const status = result.winner
    ? "Final"
    : result.played
      ? "In progress"
      : "Upcoming";

  return (
    <button
      type="button"
      className="postseason-match postseason-clickable"
      onClick={() => onSelect(result.number)}
      title={`View Series ${result.number} box scores`}
      aria-label={`Series ${result.number}, ${status}. View games.`}
    >
      <div className="postseason-match__heading">
        <span className="postseason-match__title">
          SERIES {result.number}
        </span>

        <span className="postseason-match__format">
          - BEST OF 5
        </span>
      </div>

      <TeamRow
        team="Barbaros"
        score={
          result.played ? result.wins.Barbaros : "—"
        }
        winner={result.winner === "Barbaros"}
      />

      <TeamRow
        team="Heat"
        score={
          result.played ? result.wins.Heat : "—"
        }
        winner={result.winner === "Heat"}
      />
    </button>
  );
}

// Four opening series connect to two middle series.
// Geometry mirrors the hand-drawn bracket.
function OpeningConnections() {
  return (
    <svg
      className="postseason-connector postseason-connector--opening"
      viewBox="0 0 120 506"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={[
          "M0 55 H43 V121 H120",
          "M0 187 H43 V121",
          "M0 319 H43 V385 H120",
          "M0 451 H43 V385",
        ].join(" ")}
      />
    </svg>
  );
}

// Two or three late series connect to the champion.
// The third middle card is the possible Game 7
// equivalent for a tournament still undecided.
function ChampionshipConnections({ hasThree }) {
  return (
    <svg
      className="postseason-connector postseason-connector--final"
      viewBox="0 0 120 506"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {hasThree ? (
        <path
          d={[
            "M0 121 H43 V385",
            "M0 253 H43",
            "M0 385 H43",
            "M43 253 H120",
          ].join(" ")}
        />
      ) : (
        <path
          d={[
            "M0 121 H43 V385",
            "M0 385 H43",
            "M43 253 H120",
          ].join(" ")}
        />
      )}
    </svg>
  );
}

// Far-right championship scoreboard.
// Its scores are SERIES victories, not game wins.
function ChampionshipCard({
  data,
  tournament,
  onSelect,
}) {
  const {
    champion,
    seriesWins,
    clinchingSeries,
    selectedSeries,
    activeSeries,
  } = data;

  return (
    <button
      type="button"
      className={[
        "postseason-final",
        "postseason-clickable",
        champion ? "is-decided" : "",
      ].join(" ")}
      onClick={() => onSelect(selectedSeries)}
      title={`View Series ${selectedSeries} box scores`}
      aria-label={`Tournament ${tournament} championship`}
    >
      <div
        className="postseason-final__trophy"
        aria-hidden="true"
      >
        🏆
      </div>

      <div className="postseason-championship-heading">
        <span>
          TOURNAMENT {tournament}
        </span>

        <small>
          - BEST OF 7
        </small>
      </div>

      <div className="postseason-final__lines">
        <TeamRow
          team="Barbaros"
          score={seriesWins.Barbaros}
          winner={champion === "Barbaros"}
        />

        <TeamRow
          team="Heat"
          score={seriesWins.Heat}
          winner={champion === "Heat"}
        />
      </div>

      <div className="postseason-final__winner">
        <span>
          TOURNAMENT {tournament} CHAMPION
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

      {champion ? (
        <p className="postseason-championship-detail">
          CLINCHED IN SERIES {clinchingSeries}
        </p>
      ) : activeSeries ? (
        <p className="postseason-championship-detail">
          SERIES {activeSeries.number} IN PROGRESS
          {" · "}
          {activeSeries.wins.Barbaros}
          –
          {activeSeries.wins.Heat}
        </p>
      ) : (
        <p className="postseason-championship-detail">
          FIRST TO FOUR SERIES WINS
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
  const data = getTournamentData(
    games,
    tournament
  );

  const hasThreeMiddle = data.closing.length === 3;

  return (
    <section
      className={`postseason-board postseason-board--${tournament}`}
      aria-label={`Tournament ${tournament} best of seven bracket`}
    >
      <div className="postseason-bracket">
        {/* LEFT: SERIES 1-4 OR 7-10 */}
        <div className="postseason-series-stack">
          {data.opening.map((result) => (
            <SeriesCard
              key={result.number}
              result={result}
              onSelect={onSelectSeries}
            />
          ))}
        </div>

        {/* FIRST PAIR OF GOLD CONNECTING LINES */}
        <OpeningConnections />

        {/* MIDDLE: SERIES 5-6 OR 11-13 */}
        <div
          className={`postseason-middle-stack ${
            hasThreeMiddle ? "has-three" : ""
          }`}
        >
          {data.closing.map((result) => (
            <SeriesCard
              key={result.number}
              result={result}
              onSelect={onSelectSeries}
            />
          ))}
        </div>

        {/* LINES LEADING TO THE CHAMPION */}
        <ChampionshipConnections
          hasThree={hasThreeMiddle}
        />

        {/* RIGHT: CHAMPIONSHIP CARD */}
        <ChampionshipCard
          data={data}
          tournament={tournament}
          onSelect={onSelectSeries}
        />
      </div>

      <p className="postseason-board__note">
        {data.champion
          ? `${data.champion} won Tournament ${tournament}, ${data.seriesWins.Barbaros}-${data.seriesWins.Heat} in completed series victories (Barbaros-Heat).`
          : `Tournament ${tournament} is in progress. First to four series victories wins the championship.`}
      </p>
    </section>
  );
}
