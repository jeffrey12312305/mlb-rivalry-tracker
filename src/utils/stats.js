import { statKeys } from "../styles/theme";

export function createEmptyTotals() {
  return {
    barbaros: Object.fromEntries(statKeys.map((stat) => [stat, 0])),
    heat: Object.fromEntries(statKeys.map((stat) => [stat, 0])),
  };
}

export function calculateStats(games) {
  const totals = createEmptyTotals();
  const series = {};
  const playerTotals = {};
  let barbarosWins = 0;
  let heatWins = 0;

  games.forEach((game) => {
    if (game.winner === "Barbaros") barbarosWins += 1;
    if (game.winner === "Heat") heatWins += 1;

    statKeys.forEach((stat) => {
      totals.barbaros[stat] += game.barbaros[stat];
      totals.heat[stat] += game.heat[stat];
    });

    if (!series[game.series]) series[game.series] = { barbaros: 0, heat: 0 };
    if (game.winner === "Barbaros") series[game.series].barbaros += 1;
    if (game.winner === "Heat") series[game.series].heat += 1;

    ["barbaros", "heat"].forEach((team) => {
      game.playerBox[team].forEach((player) => {
        const key = `${team}-${player.player}`;

        if (!playerTotals[key]) {
          playerTotals[key] = {
            team: team === "barbaros" ? "Barbaros" : "Heat",
            player: player.player,
            ab: 0,
            r: 0,
            h: 0,
            rbi: 0,
            bb: 0,
            so: 0,
          };
        }

        playerTotals[key].ab += player.ab;
        playerTotals[key].r += player.r;
        playerTotals[key].h += player.h;
        playerTotals[key].rbi += player.rbi;
        playerTotals[key].bb += player.bb;
        playerTotals[key].so += player.so;
      });
    });
  });

  return {
    barbarosWins,
    heatWins,
    totals,
    series,
    playerTotals: Object.values(playerTotals),
  };
}

export function formatAverage(hits, atBats) {
  if (!atBats) return ".000";
  return (hits / atBats).toFixed(3).replace(/^0/, "");
}
