import { teamTheme } from "../styles/theme";

function normalizeTeam(team) {
  if (typeof team !== "string") return team;
  if (team.toLowerCase().startsWith("barbaros")) return "Barbaros";
  if (team.toLowerCase().startsWith("heat")) return "Heat";
  return team;
}

export default function TeamLabel({
  team,
  flagPosition = "after",
  flagSize = 18,
  className = "",
  nameClassName = "",
  showFlag = true,
}) {
  const normalizedTeam = normalizeTeam(team);
  const config = teamTheme[normalizedTeam];

  if (!config) return <span className={className}>{team}</span>;

  const flag = showFlag ? (
    <img
      className="team-label__flag"
      src={config.flagUrl}
      alt={`${config.country} flag`}
      width={flagSize}
      height={flagSize}
      loading="lazy"
    />
  ) : null;

  return (
    <span className={`team-label ${className}`.trim()}>
      {flagPosition === "before" && flag}
      <span className={nameClassName}>{normalizedTeam}</span>
      {flagPosition === "after" && flag}
    </span>
  );
}
