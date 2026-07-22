import TeamLabel from "./TeamLabel";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <p className="eyebrow">MLB THE SHOW</p>
      <h1 className="hero__title">
        <TeamLabel
          team="Barbaros"
          flagSize={42}
          className="hero__team"
          nameClassName="team-title team-title--barbaros"
        />
        <span className="hero__vs">vs</span>
        <TeamLabel
          team="Heat"
          flagSize={42}
          className="hero__team"
          nameClassName="team-title team-title--heat"
        />
      </h1>
      <p className="hero__subtitle">
        Complete head-to-head results, series records, team totals, and box scores.
      </p>
    </section>
  );
}
