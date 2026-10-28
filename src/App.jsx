import { useMemo, useState } from "react";
import { games } from "./data/games";
import { calculateStats } from "./utils/stats";
import TopBar from "./components/TopBar";
import PostseasonBracket from "./components/PostseasonBracket";
import StatCard from "./components/StatCard";
import SeriesCard from "./components/SeriesCard";
import GameCard from "./components/GameCard";
import TeamLabel from "./components/TeamLabel";
import { PlayerTotals, TeamTable } from "./components/Tables";
import "./styles/global.css";
import "./styles/postseason-additions.css";

const getSeriesNumber = (game) => Number(String(game.series).match(/\d+/)?.[0] ?? 0);

export default function App() {
  const [selectedTournament, setSelectedTournament] = useState(1);
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [expandedGameId, setExpandedGameId] = useState(null);
  const [showPlayerTotals, setShowPlayerTotals] = useState(false);

  const overallStats = useMemo(() => calculateStats(games), []);
  const currentGames = useMemo(() => games.filter((game) => {
    const number = getSeriesNumber(game);
    return selectedTournament === 1
      ? number >= 1 && number <= 6
      : number >= 7;
  }), [selectedTournament]);
  const stats = useMemo(() => calculateStats(currentGames), [currentGames]);
  const seriesNames = useMemo(() => Object.keys(stats.series).sort((a, b) => Number(a.match(/\d+/)?.[0] || 0) - Number(b.match(/\d+/)?.[0] || 0)), [stats.series]);
  const filteredGames = useMemo(() => currentGames.filter((game) => selectedSeries === "All" || game.series === selectedSeries).sort((a, b) => b.id - a.id), [currentGames, selectedSeries]);
  const runDifferential = stats.totals.barbaros.runs - stats.totals.heat.runs;

  function openSeries(number) {
    const name = `Series ${number}`;
    const seriesGames = games.filter((game) => game.series === name);
    const latest = [...seriesGames].sort((a, b) => b.id - a.id)[0];
    setSelectedSeries(name);
    setExpandedGameId(latest?.id ?? null);
    // Scroll to the game log once React has applied the filter.
    window.requestAnimationFrame(() => {
      document.getElementById("game-log")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function switchTournament(number) {
    setSelectedTournament(number);
    setSelectedSeries("All");
    setExpandedGameId(null);
    setShowPlayerTotals(false);
  }

  return (
    <div className="app-shell">
      <TopBar barbarosWins={overallStats.barbarosWins} heatWins={overallStats.heatWins} />
      <main className="page-container">
        <header className="rivalry-masthead">
          <p className="rivalry-masthead__eyebrow">DOMINICAN REPUBLIC <span>VS</span> PUERTO RICO</p>
          <h1>Mangu o Mofongo?</h1>
          <p className="rivalry-masthead__subtitle">BATALLA DE LAS ISLAS</p>
        </header>
        <nav className="postseason-tabs" aria-label="Select tournament">
          <button type="button" className={selectedTournament === 1 ? "is-active" : ""} onClick={() => switchTournament(1)} aria-pressed={selectedTournament === 1}>TOURNAMENT 1</button>
          <button type="button" className={selectedTournament === 2 ? "is-active" : ""} onClick={() => switchTournament(2)} aria-pressed={selectedTournament === 2}>TOURNAMENT 2</button>
        </nav>
        <PostseasonBracket games={games} tournament={selectedTournament} onSelectSeries={openSeries} />
        <div className="postseason-overall">
          <span>OVERALL RIVALRY · {games.length} GAMES</span>
          <div><TeamLabel team="Barbaros" flagSize={17} /><strong>{overallStats.barbarosWins}</strong><span>–</span><strong>{overallStats.heatWins}</strong><TeamLabel team="Heat" flagSize={17} /></div>
        </div>

        <section className="summary-grid" aria-label="Tournament summary">
          <StatCard title="Tournament Game Record" value={`${stats.barbarosWins}-${stats.heatWins}`} />
          <StatCard title="Run Differential" value={runDifferential > 0 ? `+${runDifferential}` : runDifferential} />
          <StatCard title={<><TeamLabel team="Barbaros" flagSize={13} /> Runs</>} value={stats.totals.barbaros.runs} />
          <StatCard title={<><TeamLabel team="Heat" flagSize={13} /> Runs</>} value={stats.totals.heat.runs} />
        </section>

        <section className="content-section">
          <div className="section-header"><div><p className="section-eyebrow">HEAD-TO-HEAD</p><h2 className="section-title">Series Results</h2></div></div>
          <div className="series-grid">{Object.entries(stats.series).sort(([a], [b]) => Number(a.match(/\d+/)?.[0] || 0) - Number(b.match(/\d+/)?.[0] || 0)).map(([name, record]) => <SeriesCard key={name} seriesName={name} record={record} />)}</div>
        </section>

        <section className="content-section">
          <div className="section-header"><div><p className="section-eyebrow">COMBINED RESULTS</p><h2 className="section-title">Team Totals</h2></div></div>
          <div className="table-card"><TeamTable stats={stats.totals} /></div>
        </section>

        <section className="content-section">
          <div className="section-header"><div><p className="section-eyebrow">PLAYER DATA</p><h2 className="section-title">Player Totals</h2></div><button type="button" className="secondary-button" onClick={() => setShowPlayerTotals((shown) => !shown)}>{showPlayerTotals ? "Hide totals" : "Show totals"}</button></div>
          {showPlayerTotals && <div className="table-card"><PlayerTotals players={stats.playerTotals} /></div>}
        </section>

        <section className="content-section" id="game-log">
          <div className="section-header"><div><p className="section-eyebrow">FINAL SCORES</p><h2 className="section-title">Game Log</h2></div><select className="series-select" value={selectedSeries} onChange={(event) => {setSelectedSeries(event.target.value);setExpandedGameId(null);}} aria-label="Filter games by series"><option value="All">All series</option>{selectedSeries !== "All" && !seriesNames.includes(selectedSeries) && <option value={selectedSeries}>{selectedSeries}</option>}{seriesNames.map((series) => <option key={series} value={series}>{series}</option>)}</select></div>
          <div className="game-list">{filteredGames.length === 0 && <p className="postseason-no-games">No games recorded for {selectedSeries} yet.</p>}{filteredGames.map((game) => <GameCard key={game.id} game={game} expanded={expandedGameId === game.id} onToggle={() => setExpandedGameId((current) => current === game.id ? null : game.id)} />)}</div>
        </section>
      </main>
    </div>
  );
}
