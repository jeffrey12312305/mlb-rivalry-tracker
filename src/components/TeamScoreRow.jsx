import TeamLabel from "./TeamLabel";

export default function TeamScoreRow({ team, score, winner }) {
  return (
    <div className="team-score-row">
      <div className="team-score-row__name-wrap">
        <span className={`result-dot ${winner ? "result-dot--winner" : "result-dot--loser"}`} />
        <TeamLabel
          team={team}
          flagSize={16}
          className={winner ? "team-score-row__team team-score-row__team--winner" : "team-score-row__team"}
        />
      </div>
      <span className={winner ? "team-score-row__score team-score-row__score--winner" : "team-score-row__score"}>
        {score}
      </span>
    </div>
  );
}
