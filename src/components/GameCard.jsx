import TeamLabel from "./TeamLabel";
import TeamScoreRow from "./TeamScoreRow";
import { GameTeamTable, PlayerBox } from "./Tables";

export default function GameCard({ game, expanded, onToggle }) {
  const barbarosWon = game.winner === "Barbaros";
  const heatWon = game.winner === "Heat";

  return (
    <article className="game-card">
      <div className="game-card__header">
        <div><span className="status-badge">FINAL</span><p className="game-card__meta">{game.series} · Game {game.game}</p></div>
        <span className="game-card__home">Home: <TeamLabel team={game.home} flagSize={14} /></span>
      </div>
      <div className="scoreboard">
        <TeamScoreRow team="Barbaros" score={game.barbaros.runs} winner={barbarosWon} />
        <TeamScoreRow team="Heat" score={game.heat.runs} winner={heatWon} />
      </div>
      <div className="game-card__info">
        <span><strong>Winner:</strong> <TeamLabel team={game.winner} flagSize={14} /></span>
        <span><strong>MVP:</strong> {game.mvp}</span>
      </div>
      <div className="table-card table-card--compact"><GameTeamTable game={game} /></div>
      <button className="box-score-button" onClick={onToggle} aria-expanded={expanded}>
        {expanded ? "Hide full box score" : "View full box score"}
      </button>
      {expanded && <div className="player-box-grid"><PlayerBox team="Barbaros" players={game.playerBox.barbaros} /><PlayerBox team="Heat" players={game.playerBox.heat} /></div>}
      <p className="game-card__notes">{game.notes}</p>
    </article>
  );
}
