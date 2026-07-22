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

export default function App() {
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [expandedGameId, setExpandedGameId] = useState(23);
  const [showPlayerTotals, setShowPlayerTotals] = useState(false);

  const stats = useMemo(() => calculateStats(games), []);
  const seriesNames = useMemo(() => Object.keys(stats.series), [stats.series]);
  const filteredGames = selectedSeries === "All" ? games : games.filter((game) => game.series === selectedSeries);
  const runDifferential = stats.totals.barbaros.runs - stats.totals.heat.runs;

  return (
    <div className="app-shell">
      <TopBar barbarosWins={stats.barbarosWins} heatWins={stats.heatWins} />
      <main className="page-container">
        <Hero />

        <section className="summary-grid" aria-label="Rivalry summary">
          <StatCard title="Overall Record" value={`${stats.barbarosWins}-${stats.heatWins}`} />
          <StatCard title="Run Differential" value={runDifferential > 0 ? `+${runDifferential}` : runDifferential} />
          <StatCard title={<><TeamLabel team="Barbaros" flagSize={13} /> Runs</>} value={stats.totals.barbaros.runs} />
          <StatCard title={<><TeamLabel team="Heat" flagSize={13} /> Runs</>} value={stats.totals.heat.runs} />
        </section>

        <section className="content-section">
          <div className="section-header"><div><p className="section-eyebrow">HEAD-TO-HEAD</p><h2 className="section-title">Series Results</h2></div></div>
          <div className="series-grid">{Object.entries(stats.series).map(([name, record]) => <SeriesCard key={name} seriesName={name} record={record} />)}</div>
        </section>

        <section className="content-section">
          <div className="section-header"><div><p className="section-eyebrow">COMBINED RESULTS</p><h2 className="section-title">Team Totals</h2></div></div>
          <div className="table-card"><TeamTable stats={stats.totals} /></div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <div><p className="section-eyebrow">PLAYER DATA</p><h2 className="section-title">Player Totals</h2></div>
            <button className="secondary-button" onClick={() => setShowPlayerTotals((shown) => !shown)}>{showPlayerTotals ? "Hide totals" : "Show totals"}</button>
          </div>
          {showPlayerTotals && <div className="table-card"><PlayerTotals players={stats.playerTotals} /></div>}
        </section>

        <section className="content-section">
          <div className="section-header">
            <div><p className="section-eyebrow">FINAL SCORES</p><h2 className="section-title">Game Log</h2></div>
            <select className="series-select" value={selectedSeries} onChange={(event) => setSelectedSeries(event.target.value)} aria-label="Filter games by series">
              <option value="All">All series</option>
              {seriesNames.map((series) => <option key={series} value={series}>{series}</option>)}
            </select>
          </div>
          <div className="game-list">{[...filteredGames].reverse().map((game) => <GameCard key={game.id} game={game} expanded={expandedGameId === game.id} onToggle={() => setExpandedGameId((current) => current === game.id ? null : game.id)} />)}</div>
        </section>
      </main>
    </div>
  );
}
