import TeamLabel from "./TeamLabel";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <p className="eyebrow">MLB THE SHOW</p>
      <h1 className="hero__title">
  <span className="hero__team">
    <span className="team-title team-title--barbaros">
      Barbaros
    </span>
  </span>

  <span className="hero__vs">vs</span>

  <span className="hero__team">
    <span className="team-title team-title--heat">
      Heat
    </span>
  </span>
</h1>
      <p className="hero__subtitle">
        Complete head-to-head results, series records, team totals, and box scores.
      </p>
    </section>
  );
}
