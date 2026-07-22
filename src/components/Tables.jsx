import TeamLabel from "./TeamLabel";
import { formatAverage } from "../utils/stats";

const headers = ["Runs", "Hits", "Errors", "HR", "RBI", "Strikeouts"];

function TeamStatsRow({ team, stats }) {
  return (
    <tr>
      <td className="table__left table__team-cell"><TeamLabel team={team} flagSize={17} /></td>
      <td>{stats.runs}</td><td>{stats.hits}</td><td>{stats.errors}</td>
      <td>{stats.hrs}</td><td>{stats.rbi}</td><td>{stats.strikeouts}</td>
    </tr>
  );
}

export function TeamTable({ stats }) {
  return (
    <table className="data-table">
      <thead><tr><th className="table__left">Team</th>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
      <tbody>
        <TeamStatsRow team="Barbaros" stats={stats.barbaros} />
        <TeamStatsRow team="Heat" stats={stats.heat} />
      </tbody>
    </table>
  );
}

export function GameTeamTable({ game }) {
  return <TeamTable stats={{ barbaros: game.barbaros, heat: game.heat }} />;
}

export function PlayerTotals({ players }) {
  const sorted = [...players].sort((a, b) => {
    const averageDifference = (b.ab ? b.h / b.ab : 0) - (a.ab ? a.h / a.ab : 0);
    return averageDifference || b.h - a.h;
  });

  return (
    <table className="data-table">
      <thead><tr><th className="table__left">Team</th><th className="table__left">Player</th><th>AB</th><th>R</th><th>H</th><th>RBI</th><th>BB</th><th>SO</th><th>AVG</th></tr></thead>
      <tbody>{sorted.map((player) => (
        <tr key={`${player.team}-${player.player}`}>
          <td className="table__left"><TeamLabel team={player.team} flagSize={15} /></td>
          <td className="table__left table__player-cell">{player.player}</td>
          <td>{player.ab}</td><td>{player.r}</td><td>{player.h}</td><td>{player.rbi}</td>
          <td>{player.bb}</td><td>{player.so}</td><td>{formatAverage(player.h, player.ab)}</td>
        </tr>
      ))}</tbody>
    </table>
  );
}

export function PlayerBox({ team, players }) {
  return (
    <section className="player-box">
      <h4 className="player-box__title"><TeamLabel team={team} flagSize={16} /> Batting</h4>
      <table className="data-table data-table--small">
        <thead><tr><th className="table__left">Player</th><th>POS</th><th>AB</th><th>R</th><th>H</th><th>RBI</th><th>BB</th><th>SO</th><th>AVG</th></tr></thead>
        <tbody>{players.map((player, index) => (
          <tr key={`${player.player}-${player.pos}-${index}`}>
            <td className="table__left table__player-cell">{player.player}</td><td>{player.pos}</td>
            <td>{player.ab}</td><td>{player.r}</td><td>{player.h}</td><td>{player.rbi}</td>
            <td>{player.bb}</td><td>{player.so}</td><td>{player.avg}</td>
          </tr>
        ))}</tbody>
      </table>
    </section>
  );
}
