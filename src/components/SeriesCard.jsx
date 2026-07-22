import TeamLabel from "./TeamLabel";
import TeamScoreRow from "./TeamScoreRow";

export default function SeriesCard({ seriesName, record }) {
  const barbarosWon = record.barbaros === 3;
  const heatWon = record.heat === 3;
  const winner = barbarosWon ? "Barbaros" : heatWon ? "Heat" : null;

  return (
    <article className="series-card">
      <div className="series-card__top">
        <span className="status-badge">{winner ? "FINAL" : "ACTIVE"}</span>
        <span className="series-card__name">{seriesName}</span>
      </div>
      <TeamScoreRow team="Barbaros" score={record.barbaros} winner={barbarosWon} />
      <TeamScoreRow team="Heat" score={record.heat} winner={heatWon} />
      <p className="series-card__status">{winner ? <><TeamLabel team={winner} flagSize={14} /> won</> : "In progress"}</p>
    </article>
  );
}
