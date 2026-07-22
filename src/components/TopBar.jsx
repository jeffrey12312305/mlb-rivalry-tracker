import TeamLabel from "./TeamLabel";

export default function TopBar({ barbarosWins, heatWins }) {
  return (
    <header className="top-bar">
      <div className="top-bar__inner">
        <div className="top-bar__brand">RIVALRY TRACKER</div>
        <div className="top-bar__record">
          <span className="top-bar__team-record"><TeamLabel team="Barbaros" flagSize={14} /> {barbarosWins}</span>
          <span className="top-bar__divider">–</span>
          <span className="top-bar__team-record">{heatWins} <TeamLabel team="Heat" flagSize={14} /></span>
        </div>
      </div>
    </header>
  );
}
