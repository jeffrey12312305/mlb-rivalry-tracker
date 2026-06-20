import { useMemo, useState } from "react";

const games = [
  {
    id: 14,
    series: "Series 4",
    game: 1,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 1, hits: 11, errors: 0, hrs: 0, rbi: 1, strikeouts: 6 },
    heat: { runs: 3, hits: 6, errors: 0, hrs: 3, rbi: 3, strikeouts: 0 },
    mvp: "Joe Mack",
    notes:
      "Heat won Series 4 Game 1, 3-1. Heat hit three solo home runs from Baez, Jones, and Mack. Barbaros outhit Heat 11-6 but only scored once.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "De La Cruz", pos: "SS", ab: 4, r: 0, h: 3, rbi: 0, bb: 0, so: 0 },
        { player: "Ortiz", pos: "DH", ab: 4, r: 0, h: 3, rbi: 1, bb: 0, so: 0 },
        { player: "Adell", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Guerrero Jr.", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 3, rbi: 0, bb: 0, so: 0 },
        { player: "Mackey", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0 }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 0 },
        { player: "Bazzana", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Baez", pos: "3B", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0 },
        { player: "Trout", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Murakami", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Taylor", pos: "LF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Griffin", pos: "SS", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Jones", pos: "RF", ab: 3, r: 1, h: 2, rbi: 1, bb: 0, so: 0 },
        { player: "Mack", pos: "C", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0 }
      ]
    },
    pitchingBox: {
      barbaros: [
        { player: "Buchholz", result: "", ip: "6.0", h: 3, r: 1, er: 1, bb: 0, so: 0 },
        { player: "Fingers", result: "L", ip: "1.1", h: 2, r: 2, er: 2, bb: 0, so: 0 },
        { player: "Williams", result: "", ip: "0.2", h: 1, r: 0, er: 0, bb: 0, so: 0 }
      ],
      heat: [
        { player: "Eckersley", result: "", ip: "6.1", h: 10, r: 1, er: 1, bb: 0, so: 4 },
        { player: "Morejon", result: "", ip: "1.0", h: 1, r: 0, er: 0, bb: 0, so: 0 },
        { player: "O'Day", result: "W", ip: "1.2", h: 0, r: 0, er: 0, bb: 0, so: 2 }
      ]
    }
  },
  {
    id: 15,
    series: "Series 4",
    game: 2,
    home: "Heat",
    winner: "Heat",
    barbaros: { runs: 2, hits: 7, errors: 0, hrs: 0, rbi: 2, strikeouts: 1 },
    heat: { runs: 4, hits: 7, errors: 0, hrs: 2, rbi: 4, strikeouts: 0 },
    mvp: "Mike Trout",
    notes:
      "Heat won Series 4 Game 2, 4-2. Barbaros scored first with 2 runs in the 7th, but Heat answered late with home runs from Trout and Lindor.",
    playerBox: {
      barbaros: [
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0 },
        { player: "Bellinger", pos: "LF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0 },
        { player: "Kurtz", pos: "1B", ab: 3, r: 0, h: 2, rbi: 2, bb: 0, so: 0 },
        { player: "Mackey", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0 }
      ],
      heat: [
        { player: "McGee", pos: "CF", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "Trout", pos: "DH", ab: 3, r: 1, h: 2, rbi: 2, bb: 0, so: 0 },
        { player: "Taylor", pos: "LF", ab: 3, r: 1, h: 2, rbi: 0, bb: 0, so: 0 },
        { player: "Lindor", pos: "SS", ab: 3, r: 1, h: 1, rbi: 2, bb: 0, so: 0 }
      ]
    },
    pitchingBox: {
      barbaros: [
        { player: "Misiorowski", result: "", ip: "7.0", h: 5, r: 2, er: 2, bb: 0, so: 0 },
        { player: "Bummer", result: "L", ip: "0.1", h: 2, r: 2, er: 2, bb: 0, so: 0 },
        { player: "Strahm", result: "", ip: "0.2", h: 0, r: 0, er: 0, bb: 0, so: 0 }
      ],
      heat: [
        { player: "Misiorowski", result: "", ip: "6.1", h: 6, r: 2, er: 2, bb: 0, so: 0 },
        { player: "Eckersley", result: "W", ip: "1.2", h: 0, r: 0, er: 0, bb: 0, so: 0 },
        { player: "O'Day", result: "SV", ip: "1.0", h: 1, r: 0, er: 0, bb: 0, so: 1 }
      ]
    }
  },
  {
    id: 16,
    series: "Series 4",
    game: 3,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 11, hits: 13, errors: 0, hrs: 4, rbi: 11, strikeouts: 3 },
    heat: { runs: 0, hits: 3, errors: 0, hrs: 0, rbi: 0, strikeouts: 2 },
    mvp: "Cody Bellinger",
    notes:
      "Barbaros won Series 4 Game 3, 11-0. Barbaros scored in every inning, hit four home runs, and Ubaldo Jimenez threw 4 shutout innings.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 1 },
        { player: "Lindor", pos: "SS", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Tatis Jr.", pos: "RF", ab: 3, r: 3, h: 3, rbi: 1, bb: 0, so: 0 },
        { player: "Judge", pos: "DH", ab: 2, r: 2, h: 1, rbi: 2, bb: 1, so: 0 },
        { player: "Bellinger", pos: "LF", ab: 3, r: 3, h: 3, rbi: 3, bb: 0, so: 0 },
        { player: "Kurtz", pos: "1B", ab: 3, r: 2, h: 3, rbi: 1, bb: 0, so: 0 },
        { player: "Emerson", pos: "3B", ab: 3, r: 0, h: 1, rbi: 2, bb: 0, so: 0 },
        { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1 },
        { player: "Mackey", pos: "C", ab: 2, r: 0, h: 1, rbi: 1, bb: 0, so: 1 }
      ],
      heat: [
        { player: "McGee", pos: "CF", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Arroyo", pos: "2B", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Baez", pos: "3B", ab: 2, r: 0, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "Trout", pos: "DH", ab: 2, r: 0, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "Bellinger", pos: "1B", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 1 },
        { player: "Taylor", pos: "LF", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Lindor", pos: "SS", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 0 },
        { player: "Jones", pos: "RF", ab: 1, r: 0, h: 1, rbi: 0, bb: 0, so: 0 },
        { player: "Carrigg", pos: "C", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 1 }
      ]
    },
    pitchingBox: {
      barbaros: [
        { player: "Jimenez", result: "W", ip: "4.0", h: 3, r: 0, er: 0, bb: 0, so: 2 }
      ],
      heat: [
        { player: "Fried", result: "L", ip: "1.0", h: 2, r: 2, er: 2, bb: 0, so: 1 },
        { player: "Eckersley", result: "", ip: "1.1", h: 3, r: 3, er: 3, bb: 1, so: 0 },
        { player: "Suarez", result: "", ip: "1.0", h: 3, r: 2, er: 2, bb: 0, so: 2 },
        { player: "Iglesias", result: "", ip: "0.1", h: 3, r: 3, er: 3, bb: 0, so: 0 },
        { player: "Sutter", result: "", ip: "0.1", h: 2, r: 1, er: 1, bb: 0, so: 0 }
      ]
    }
  }
];

const teams = ["barbaros", "heat"];

function App() {
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [expandedGame, setExpandedGame] = useState(games[games.length - 1]?.id);
  const [showPlayerTotals, setShowPlayerTotals] = useState(true);

  const seriesOptions = useMemo(() => {
    return ["All", ...Array.from(new Set(games.map((game) => game.series)))];
  }, []);

  const visibleGames = useMemo(() => {
    if (selectedSeries === "All") return games;
    return games.filter((game) => game.series === selectedSeries);
  }, [selectedSeries]);

  const totals = useMemo(() => {
    return visibleGames.reduce(
      (acc, game) => {
        teams.forEach((team) => {
          acc[team].wins += game.winner.toLowerCase() === team ? 1 : 0;
          acc[team].runs += game[team].runs;
          acc[team].hits += game[team].hits;
          acc[team].errors += game[team].errors;
          acc[team].hrs += game[team].hrs;
          acc[team].rbi += game[team].rbi;
          acc[team].strikeouts += game[team].strikeouts;
        });
        return acc;
      },
      {
        barbaros: emptyTeamTotals(),
        heat: emptyTeamTotals()
      }
    );
  }, [visibleGames]);

  const playerTotals = useMemo(() => {
    const map = new Map();

    visibleGames.forEach((game) => {
      teams.forEach((team) => {
        game.playerBox?.[team]?.forEach((line) => {
          const key = `${team}-${line.player}`;
          const current =
            map.get(key) || {
              team: titleCase(team),
              player: line.player,
              ab: 0,
              r: 0,
              h: 0,
              rbi: 0,
              bb: 0,
              so: 0
            };

          current.ab += line.ab || 0;
          current.r += line.r || 0;
          current.h += line.h || 0;
          current.rbi += line.rbi || 0;
          current.bb += line.bb || 0;
          current.so += line.so || 0;
          map.set(key, current);
        });
      });
    });

    return Array.from(map.values()).sort((a, b) => {
      const avgA = a.ab ? a.h / a.ab : 0;
      const avgB = b.ab ? b.h / b.ab : 0;
      return avgB - avgA || b.h - a.h || b.rbi - a.rbi;
    });
  }, [visibleGames]);

  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <div>
          <p style={styles.eyebrow}>MLB The Show</p>
          <h1 style={styles.title}>Barbaros vs Heat Rivalry Tracker</h1>
          <p style={styles.subtitle}>Series 4 now includes Game 3: Barbaros 11, Heat 0.</p>
        </div>

        <select
          value={selectedSeries}
          onChange={(event) => setSelectedSeries(event.target.value)}
          style={styles.select}
        >
          {seriesOptions.map((series) => (
            <option key={series} value={series}>
              {series}
            </option>
          ))}
        </select>
      </section>

      <section style={styles.statsGrid}>
        <StatCard title="Barbaros Wins" value={totals.barbaros.wins} />
        <StatCard title="Heat Wins" value={totals.heat.wins} />
        <StatCard title="Barbaros Runs" value={totals.barbaros.runs} />
        <StatCard title="Heat Runs" value={totals.heat.runs} />
        <StatCard title="Barbaros HR" value={totals.barbaros.hrs} />
        <StatCard title="Heat HR" value={totals.heat.hrs} />
      </section>

      <section style={styles.panel}>
        <div style={styles.panelHeader}>
          <h2 style={styles.sectionTitle}>Team Totals</h2>
        </div>
        <TeamTotals totals={totals} />
      </section>

      <section style={styles.panel}>
        <div style={styles.panelHeader}>
          <h2 style={styles.sectionTitle}>Game Log</h2>
        </div>

        <div style={styles.gameList}>
          {visibleGames.map((game) => (
            <article key={game.id} style={styles.gameCard}>
              <button
                type="button"
                onClick={() => setExpandedGame(expandedGame === game.id ? null : game.id)}
                style={styles.gameButton}
              >
                <span>
                  {game.series} Game {game.game}
                </span>
                <strong>
                  Barbaros {game.barbaros.runs}, Heat {game.heat.runs}
                </strong>
                <span style={styles.winner}>Winner: {game.winner}</span>
              </button>

              {expandedGame === game.id && (
                <div style={styles.gameDetails}>
                  <p style={styles.notes}>{game.notes}</p>
                  <p style={styles.mvp}>MVP: {game.mvp}</p>
                  <GameSummary game={game} />

                  <div style={styles.twoColumn}>
                    <BoxScore title="Barbaros Batting" rows={game.playerBox?.barbaros || []} />
                    <BoxScore title="Heat Batting" rows={game.playerBox?.heat || []} />
                  </div>

                  <div style={styles.twoColumn}>
                    <PitchingBox title="Barbaros Pitching" rows={game.pitchingBox?.barbaros || []} />
                    <PitchingBox title="Heat Pitching" rows={game.pitchingBox?.heat || []} />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section style={styles.panel}>
        <div style={styles.panelHeader}>
          <h2 style={styles.sectionTitle}>Player Totals</h2>
          <button
            type="button"
            onClick={() => setShowPlayerTotals((current) => !current)}
            style={styles.smallButton}
          >
            {showPlayerTotals ? "Hide" : "Show"}
          </button>
        </div>
        {showPlayerTotals && <PlayerTotals players={playerTotals} />}
      </section>
    </main>
  );
}

function emptyTeamTotals() {
  return { wins: 0, runs: 0, hits: 0, errors: 0, hrs: 0, rbi: 0, strikeouts: 0 };
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function avg(row) {
  if (!row.ab) return ".000";
  return (row.h / row.ab).toFixed(3).replace("0.", ".");
}

function StatCard({ title, value }) {
  return (
    <div style={styles.statCard}>
      <p style={styles.statTitle}>{title}</p>
      <p style={styles.statValue}>{value}</p>
    </div>
  );
}

function TeamTotals({ totals }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Team</th>
          <th style={styles.th}>W</th>
          <th style={styles.th}>R</th>
          <th style={styles.th}>H</th>
          <th style={styles.th}>E</th>
          <th style={styles.th}>HR</th>
          <th style={styles.th}>RBI</th>
          <th style={styles.th}>SO</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team}>
            <td style={styles.td}>{titleCase(team)}</td>
            <td style={styles.td}>{totals[team].wins}</td>
            <td style={styles.td}>{totals[team].runs}</td>
            <td style={styles.td}>{totals[team].hits}</td>
            <td style={styles.td}>{totals[team].errors}</td>
            <td style={styles.td}>{totals[team].hrs}</td>
            <td style={styles.td}>{totals[team].rbi}</td>
            <td style={styles.td}>{totals[team].strikeouts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function GameSummary({ game }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Team</th>
          <th style={styles.th}>R</th>
          <th style={styles.th}>H</th>
          <th style={styles.th}>E</th>
          <th style={styles.th}>HR</th>
          <th style={styles.th}>RBI</th>
          <th style={styles.th}>SO</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team}>
            <td style={styles.td}>{titleCase(team)}</td>
            <td style={styles.td}>{game[team].runs}</td>
            <td style={styles.td}>{game[team].hits}</td>
            <td style={styles.td}>{game[team].errors}</td>
            <td style={styles.td}>{game[team].hrs}</td>
            <td style={styles.td}>{game[team].rbi}</td>
            <td style={styles.td}>{game[team].strikeouts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function BoxScore({ title, rows }) {
  return (
    <div style={styles.tableWrap}>
      <h3 style={styles.tableTitle}>{title}</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Player</th>
            <th style={styles.th}>Pos</th>
            <th style={styles.th}>AB</th>
            <th style={styles.th}>R</th>
            <th style={styles.th}>H</th>
            <th style={styles.th}>RBI</th>
            <th style={styles.th}>BB</th>
            <th style={styles.th}>SO</th>
            <th style={styles.th}>AVG</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${title}-${row.player}-${row.pos}`}>
              <td style={styles.td}>{row.player}</td>
              <td style={styles.td}>{row.pos}</td>
              <td style={styles.td}>{row.ab}</td>
              <td style={styles.td}>{row.r}</td>
              <td style={styles.td}>{row.h}</td>
              <td style={styles.td}>{row.rbi}</td>
              <td style={styles.td}>{row.bb}</td>
              <td style={styles.td}>{row.so}</td>
              <td style={styles.td}>{avg(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PitchingBox({ title, rows }) {
  return (
    <div style={styles.tableWrap}>
      <h3 style={styles.tableTitle}>{title}</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Pitcher</th>
            <th style={styles.th}>Result</th>
            <th style={styles.th}>IP</th>
            <th style={styles.th}>H</th>
            <th style={styles.th}>R</th>
            <th style={styles.th}>ER</th>
            <th style={styles.th}>BB</th>
            <th style={styles.th}>SO</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${title}-${row.player}`}>
              <td style={styles.td}>{row.player}</td>
              <td style={styles.td}>{row.result}</td>
              <td style={styles.td}>{row.ip}</td>
              <td style={styles.td}>{row.h}</td>
              <td style={styles.td}>{row.r}</td>
              <td style={styles.td}>{row.er}</td>
              <td style={styles.td}>{row.bb}</td>
              <td style={styles.td}>{row.so}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PlayerTotals({ players }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Team</th>
          <th style={styles.th}>Player</th>
          <th style={styles.th}>AB</th>
          <th style={styles.th}>R</th>
          <th style={styles.th}>H</th>
          <th style={styles.th}>RBI</th>
          <th style={styles.th}>BB</th>
          <th style={styles.th}>SO</th>
          <th style={styles.th}>AVG</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={`${player.team}-${player.player}`}>
            <td style={styles.td}>{player.team}</td>
            <td style={styles.td}>{player.player}</td>
            <td style={styles.td}>{player.ab}</td>
            <td style={styles.td}>{player.r}</td>
            <td style={styles.td}>{player.h}</td>
            <td style={styles.td}>{player.rbi}</td>
            <td style={styles.td}>{player.bb}</td>
            <td style={styles.td}>{player.so}</td>
            <td style={styles.td}>{avg(player)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    padding: "32px",
    background: "#0f172a",
    color: "#e5e7eb",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    marginBottom: "24px"
  },
  eyebrow: {
    margin: "0 0 8px",
    color: "#38bdf8",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  },
  title: {
    margin: 0,
    fontSize: "34px",
    lineHeight: 1.1
  },
  subtitle: {
    margin: "10px 0 0",
    color: "#94a3b8"
  },
  select: {
    minWidth: "150px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#111827",
    color: "#e5e7eb"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "12px",
    marginBottom: "18px"
  },
  statCard: {
    border: "1px solid #1e293b",
    borderRadius: "8px",
    padding: "16px",
    background: "#111827"
  },
  statTitle: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "13px"
  },
  statValue: {
    margin: "8px 0 0",
    fontSize: "28px",
    fontWeight: 800
  },
  panel: {
    border: "1px solid #1e293b",
    borderRadius: "8px",
    padding: "18px",
    background: "#111827",
    marginBottom: "18px",
    overflowX: "auto"
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px"
  },
  sectionTitle: {
    margin: 0,
    fontSize: "20px"
  },
  gameList: {
    display: "grid",
    gap: "12px"
  },
  gameCard: {
    border: "1px solid #334155",
    borderRadius: "8px",
    overflow: "hidden"
  },
  gameButton: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: "16px",
    alignItems: "center",
    padding: "14px",
    border: 0,
    background: "#1f2937",
    color: "#e5e7eb",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "15px"
  },
  winner: {
    color: "#38bdf8",
    fontWeight: 700
  },
  gameDetails: {
    padding: "14px",
    background: "#0f172a"
  },
  notes: {
    margin: "0 0 8px",
    color: "#cbd5e1"
  },
  mvp: {
    margin: "0 0 14px",
    color: "#facc15",
    fontWeight: 800
  },
  twoColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "14px",
    marginTop: "14px"
  },
  tableWrap: {
    overflowX: "auto"
  },
  tableTitle: {
    margin: "0 0 8px",
    fontSize: "16px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "620px"
  },
  th: {
    padding: "9px",
    borderBottom: "1px solid #334155",
    color: "#93c5fd",
    textAlign: "left",
    fontSize: "13px"
  },
  td: {
    padding: "9px",
    borderBottom: "1px solid #1e293b",
    color: "#e5e7eb",
    fontSize: "13px"
  },
  smallButton: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#1f2937",
    color: "#e5e7eb",
    cursor: "pointer"
  }
};

export default App;
