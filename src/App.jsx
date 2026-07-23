import { useMemo, useState } from "react";
import { games } from "./data/games";
import { calculateStats } from "./utils/stats";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import StatCard from "./components/StatCard";
import SeriesCard from "./components/SeriesCard";
import GameCard from "./components/GameCard";
import TeamLabel from "./components/TeamLabel";
import { PlayerTotals, TeamTable } from "./components/Tables";
import "./styles/global.css";

function calculateSeriesRecord(tournamentGames) {
  const seriesResults = {};

  tournamentGames.forEach((game) => {
    if (!seriesResults[game.series]) {
      seriesResults[game.series] = {
        barbarosWins: 0,
        heatWins: 0,
      };
    }

    if (game.winner === "Barbaros") {
      seriesResults[game.series].barbarosWins += 1;
    }

    if (game.winner === "Heat") {
      seriesResults[game.series].heatWins += 1;
    }
  });

  return Object.values(seriesResults).reduce(
    (record, series) => {
      if (series.barbarosWins >= 3) {
        record.barbaros += 1;
      } else if (series.heatWins >= 3) {
        record.heat += 1;
      }

      return record;
    },
    {
      barbaros: 0,
      heat: 0,
    }
  );
}

export default function App() {
  const [selectedTournament, setSelectedTournament] = useState("overall");
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [expandedGameId, setExpandedGameId] = useState(23);
  const [showPlayerTotals, setShowPlayerTotals] = useState(false);

  const tournament1Games = useMemo(
    () => games.filter((game) => game.id <= 18),
    []
  );

  const tournament2Games = useMemo(
    () => games.filter((game) => game.id >= 19),
    []
  );

  const overallStats = useMemo(() => calculateStats(games), []);

  const tournament1Stats = useMemo(
    () => calculateStats(tournament1Games),
    [tournament1Games]
  );

  const tournament2Stats = useMemo(
    () => calculateStats(tournament2Games),
    [tournament2Games]
  );

  const tournament1SeriesRecord = useMemo(
    () => calculateSeriesRecord(tournament1Games),
    [tournament1Games]
  );

  const tournament2SeriesRecord = useMemo(
    () => calculateSeriesRecord(tournament2Games),
    [tournament2Games]
  );

  const stats =
    selectedTournament === "overall"
      ? overallStats
      : selectedTournament === 1
        ? tournament1Stats
        : tournament2Stats;

  const currentGames =
    selectedTournament === "overall"
      ? games
      : selectedTournament === 1
        ? tournament1Games
        : tournament2Games;

  const seriesNames = useMemo(
    () => Object.keys(stats.series),
    [stats.series]
  );

  const filteredGames =
    selectedSeries === "All"
      ? currentGames
      : currentGames.filter((game) => game.series === selectedSeries);

  const runDifferential =
    stats.totals.barbaros.runs - stats.totals.heat.runs;

  const tournament2Leader =
    tournament2SeriesRecord.barbaros > tournament2SeriesRecord.heat
      ? "Barbaros"
      : tournament2SeriesRecord.heat > tournament2SeriesRecord.barbaros
        ? "Heat"
        : "Tied";

  const tournament2LeadingWins =
    tournament2Leader === "Barbaros"
      ? tournament2SeriesRecord.barbaros
      : tournament2SeriesRecord.heat;

  const tournament2TrailingWins =
    tournament2Leader === "Barbaros"
      ? tournament2SeriesRecord.heat
      : tournament2SeriesRecord.barbaros;

  return (
    <div className="app-shell">
      <TopBar
        barbarosWins={stats.barbarosWins}
        heatWins={stats.heatWins}
      />

      <main className="page-container">
        <Hero />

        <section
          className="tournament-selector"
          aria-label="Select rivalry tournament"
        >
          <button
            type="button"
            className={`tournament-banner tournament-banner--overall ${
              selectedTournament === "overall" ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTournament("overall");
              setSelectedSeries("All");
            }}
          >
            <span className="tournament-banner__eyebrow">
              Rivalry Archive
            </span>

            <span className="tournament-banner__title">
              Overall Rivalry
            </span>

            <span className="tournament-banner__description">
              All completed games
            </span>

            <span className="tournament-banner__record">
              {overallStats.barbarosWins}
              <span className="tournament-banner__dash">–</span>
              {overallStats.heatWins}
            </span>

            <span className="tournament-banner__footer">
              Game Record
            </span>
          </button>

          <button
            type="button"
            className={`tournament-banner tournament-banner--champion ${
              selectedTournament === 1 ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTournament(1);
              setSelectedSeries("All");
            }}
          >
            <span className="tournament-banner__eyebrow">
              Tournament 1
            </span>

            <span className="tournament-banner__title">
              Heat Champions
            </span>

            <span className="tournament-banner__description tournament-banner__description--gold">
              Tournament Complete
            </span>

            <span className="tournament-banner__record">
              {tournament1SeriesRecord.heat}
              <span className="tournament-banner__dash">–</span>
              {tournament1SeriesRecord.barbaros}
            </span>

            <span className="tournament-banner__footer">
              Series Record
            </span>
          </button>

          <button
            type="button"
            className={`tournament-banner tournament-banner--live ${
              selectedTournament === 2 ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTournament(2);
              setSelectedSeries("All");
            }}
          >
            <span className="tournament-banner__eyebrow">
              Tournament 2
            </span>

            <span className="tournament-banner__title">
              In Progress
            </span>

            <span className="tournament-banner__description tournament-banner__description--live">
              {tournament2Leader === "Tied"
                ? "Tournament Tied"
                : `${tournament2Leader} Leads`}
            </span>

            <span className="tournament-banner__record">
              {tournament2LeadingWins}
              <span className="tournament-banner__dash">–</span>
              {tournament2TrailingWins}
            </span>

            <span className="tournament-banner__footer">
              Series Record
            </span>
          </button>
        </section>

        <section className="summary-grid" aria-label="Rivalry summary">
          <StatCard
            title={
              selectedTournament === "overall"
                ? "Overall Record"
                : "Tournament Game Record"
            }
            value={`${stats.barbarosWins}-${stats.heatWins}`}
          />

          <StatCard
            title="Run Differential"
            value={
              runDifferential > 0
                ? `+${runDifferential}`
                : runDifferential
            }
          />

          <StatCard
            title={
              <>
                <TeamLabel team="Barbaros" flagSize={13} /> Runs
              </>
            }
            value={stats.totals.barbaros.runs}
          />

          <StatCard
            title={
              <>
                <TeamLabel team="Heat" flagSize={13} /> Runs
              </>
            }
            value={stats.totals.heat.runs}
          />
        </section>

        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">HEAD-TO-HEAD</p>
              <h2 className="section-title">Series Results</h2>
            </div>
          </div>

          <div className="series-grid">
            {Object.entries(stats.series).map(([name, record]) => (
              <SeriesCard
                key={name}
                seriesName={name}
                record={record}
              />
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">COMBINED RESULTS</p>
              <h2 className="section-title">Team Totals</h2>
            </div>
          </div>

          <div className="table-card">
            <TeamTable stats={stats.totals} />
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">PLAYER DATA</p>
              <h2 className="section-title">Player Totals</h2>
            </div>

            <button
              className="secondary-button"
              onClick={() =>
                setShowPlayerTotals((shown) => !shown)
              }
            >
              {showPlayerTotals ? "Hide totals" : "Show totals"}
            </button>
          </div>

          {showPlayerTotals && (
            <div className="table-card">
              <PlayerTotals players={stats.playerTotals} />
            </div>
          )}
        </section>

        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">FINAL SCORES</p>
              <h2 className="section-title">Game Log</h2>
            </div>

            <select
              className="series-select"
              value={selectedSeries}
              onChange={(event) =>
                setSelectedSeries(event.target.value)
              }
              aria-label="Filter games by series"
            >
              <option value="All">All series</option>

              {seriesNames.map((series) => (
                <option key={series} value={series}>
                  {series}
                </option>
              ))}
            </select>
          </div>

          <div className="game-list">
            {[...filteredGames].reverse().map((game) => (
              <GameCard
                key={game.id}
                game={game}
                expanded={expandedGameId === game.id}
                onToggle={() =>
                  setExpandedGameId((current) =>
                    current === game.id ? null : game.id
                  )
                }
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}