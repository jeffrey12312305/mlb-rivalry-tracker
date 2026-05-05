import { useMemo, useState } from "react";

const games = [
  {
    id: 1,
    series: "Series 1",
    game: 1,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 3, hits: 11, errors: 0, hrs: 2, rbi: 3, strikeouts: 6 },
    heat: { runs: 5, hits: 12, errors: 0, hrs: 3, rbi: 5, strikeouts: 11 },
    mvp: "Ahn",
    notes: "Heat opened the real series with a 5-3 win. HRs: Heat: Harper, Ramirez, Ahn. Barbaros: Jones, Schwarber.",
    playerBox: {
      barbaros: [
        { player: "Willits", pos: "SS", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Buxton", pos: "CF", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 2, avg: ".500" },
        { player: "Machado", pos: "3B", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Jones", pos: "RF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 3, avg: ".250" },
        { player: "Muzik", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Antonacci", pos: "2B", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Schwarber", pos: "DH", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "De Paula", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Jensen", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Bazzana", pos: "2B", ab: 5, r: 0, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Arenado", pos: "3B", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 2, avg: ".200" },
        { player: "Arozarena", pos: "LF", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 2, avg: ".200" },
        { player: "Harper", pos: "1B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Gregorius", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 3, avg: ".000" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 2, avg: ".250" },
        { player: "Ahn", pos: "RF", ab: 4, r: 2, h: 3, rbi: 2, bb: 0, so: 0, avg: ".750" },
        { player: "Kirk", pos: "C", ab: 3, r: 0, h: 2, rbi: 0, bb: 1, so: 0, avg: ".667" }
      ]
    }
  },
  {
    id: 2,
    series: "Series 1",
    game: 2,
    home: "Barbaros",
    winner: "Barbaros",
    barbaros: { runs: 3, hits: 4, errors: 0, hrs: 2, rbi: 3, strikeouts: 3 },
    heat: { runs: 1, hits: 7, errors: 0, hrs: 0, rbi: 1, strikeouts: 6 },
    mvp: "Eduardo Rodriguez",
    notes: "Barbaros won a low-scoring game behind strong pitching. HRs: Schwarber, Jensen.",
    playerBox: {
      barbaros: [
        { player: "De Vries", pos: "SS", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Buxton", pos: "CF", ab: 3, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" },
        { player: "Machado", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Jones", pos: "RF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Muzik", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Antonacci", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Schwarber", pos: "DH", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" },
        { player: "De Paula", pos: "LF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jensen", pos: "C", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Bazzana", pos: "2B", ab: 3, r: 0, h: 1, rbi: 1, bb: 1, so: 0, avg: ".333" },
        { player: "Arenado", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Harper", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Gregorius", pos: "DH", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Ahn", pos: "RF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Kirk", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ]
    }
  },
  {
    id: 3,
    series: "Series 1",
    game: 3,
    home: "Barbaros",
    winner: "Barbaros",
    barbaros: { runs: 3, hits: 8, errors: 0, hrs: 3, rbi: 3, strikeouts: 4 },
    heat: { runs: 2, hits: 6, errors: 0, hrs: 1, rbi: 2, strikeouts: 6 },
    mvp: "D. Jones",
    notes: "Barbaros took a 2-1 series lead. HRs: Barbaros: De Vries, Clark, Jones. Heat: Arenado.",
    playerBox: {
      barbaros: [
        { player: "De Vries", pos: "SS", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Clark", pos: "CF", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Okamoto", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Jones", pos: "RF", ab: 4, r: 1, h: 3, rbi: 1, bb: 0, so: 0, avg: ".750" },
        { player: "Muzik", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Antonacci", pos: "2B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
        { player: "Schwarber", pos: "DH", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
        { player: "De Paula", pos: "LF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jensen", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Harper", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Gregorius", pos: "DH", ab: 3, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Ramirez", pos: "SS", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Ahn", pos: "RF", ab: 3, r: 0, h: 2, rbi: 1, bb: 0, so: 0, avg: ".667" },
        { player: "Kirk", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ]
    }
  },
  {
    id: 4,
    series: "Series 1",
    game: 4,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 7, hits: 13, errors: 0, hrs: 1, rbi: 7, strikeouts: 6 },
    heat: { runs: 8, hits: 10, errors: 0, hrs: 3, rbi: 8, strikeouts: 4 },
    mvp: "Randy Arozarena",
    notes: "Heat tied the series 2-2 in a high-scoring one-run game. HRs: Heat: Arozarena x2, Kirk. Barbaros: Bazzana.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Willits", pos: "SS", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Harper", pos: "1B", ab: 4, r: 1, h: 3, rbi: 1, bb: 0, so: 1, avg: ".750" },
        { player: "Soler", pos: "DH", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Bellinger", pos: "LF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Crawford", pos: "RF", ab: 4, r: 1, h: 3, rbi: 1, bb: 0, so: 1, avg: ".750" },
        { player: "Arenado", pos: "3B", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".250" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".500" },
        { player: "Varitek", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 1, rbi: 1, bb: 1, so: 0, avg: ".250" },
        { player: "Arenado", pos: "3B", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 2, avg: ".200" },
        { player: "Arozarena", pos: "LF", ab: 3, r: 3, h: 2, rbi: 3, bb: 2, so: 0, avg: ".667" },
        { player: "Harper", pos: "1B", ab: 5, r: 0, h: 2, rbi: 2, bb: 0, so: 0, avg: ".400" },
        { player: "Gregorius", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 2, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Ahn", pos: "RF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Kirk", pos: "C", ab: 3, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".333" }
      ]
    }
  },
  {
    id: 5,
    series: "Series 1",
    game: 5,
    home: "Heat",
    winner: "Heat",
    barbaros: { runs: 6, hits: 15, errors: 0, hrs: 2, rbi: 6, strikeouts: 6 },
    heat: { runs: 8, hits: 12, errors: 0, hrs: 3, rbi: 8, strikeouts: 6 },
    mvp: "A. Ramirez",
    notes: "Heat won Series 1, 3-2. Barbaros had more hits, but Heat turned chances into runs.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 2, h: 1, rbi: 1, bb: 0, so: 2, avg: ".200" },
        { player: "Willits", pos: "SS", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 2, avg: ".200" },
        { player: "Harper", pos: "1B", ab: 5, r: 1, h: 3, rbi: 1, bb: 0, so: 1, avg: ".600" },
        { player: "Soler", pos: "DH", ab: 5, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".200" },
        { player: "Bellinger", pos: "LF", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 4, r: 0, h: 4, rbi: 1, bb: 0, so: 0, avg: "1.000" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Varitek", pos: "C", ab: 4, r: 1, h: 3, rbi: 1, bb: 0, so: 1, avg: ".750" },
        { player: "Teel", pos: "PR-C", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".500" },
        { player: "Arenado", pos: "3B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
        { player: "Harper", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Griffin", pos: "DH", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 2, h: 3, rbi: 4, bb: 0, so: 0, avg: ".750" },
        { player: "Ahn", pos: "RF", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".500" },
        { player: "Kirk", pos: "C", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" }
      ]
    }
  },
  {
    id: 6,
    series: "Series 2",
    game: 1,
    home: "Heat",
    winner: "Heat",
    barbaros: { runs: 4, hits: 7, errors: 2, hrs: 0, rbi: 4, strikeouts: 7 },
    heat: { runs: 6, hits: 12, errors: 0, hrs: 2, rbi: 6, strikeouts: 6 },
    mvp: "Bryce Harper",
    notes: "Heat opened Series 2 with a 6-4 win. A 5-run 3rd inning swung the game.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Willits", pos: "SS", ab: 4, r: 2, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Harper", pos: "1B", ab: 4, r: 1, h: 3, rbi: 2, bb: 0, so: 0, avg: ".750" },
        { player: "Soler", pos: "DH", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 3, avg: ".250" },
        { player: "Bellinger", pos: "LF", ab: 3, r: 0, h: 0, rbi: 0, bb: 1, so: 0, avg: ".000" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Varitek", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 5, r: 0, h: 2, rbi: 0, bb: 0, so: 0, avg: ".400" },
        { player: "Bazzana", pos: "2B", ab: 5, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".200" },
        { player: "Arenado", pos: "3B", ab: 4, r: 1, h: 1, rbi: 0, bb: 1, so: 2, avg: ".250" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 1, h: 2, rbi: 1, bb: 1, so: 0, avg: ".500" },
        { player: "Harper", pos: "1B", ab: 4, r: 1, h: 1, rbi: 3, bb: 0, so: 0, avg: ".250" },
        { player: "Griffin", pos: "DH", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 0, h: 2, rbi: 1, bb: 0, so: 1, avg: ".500" },
        { player: "Ahn", pos: "RF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Kirk", pos: "C", ab: 3, r: 0, h: 2, rbi: 3, bb: 0, so: 0, avg: ".667" }
      ]
    }
  },
  {
    id: 7,
    series: "Series 2",
    game: 2,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 13, hits: 19, errors: 0, hrs: 5, rbi: 13, strikeouts: 6 },
    heat: { runs: 6, hits: 9, errors: 1, hrs: 3, rbi: 6, strikeouts: 4 },
    mvp: "Barbaros Offense",
    notes: "Barbaros evened Series 2 with a 13-6 blowout. Barbaros had 19 hits and scored in six different innings.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 6, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Willits", pos: "SS", ab: 5, r: 3, h: 3, rbi: 1, bb: 0, so: 1, avg: ".600" },
        { player: "Harper", pos: "1B", ab: 5, r: 0, h: 1, rbi: 2, bb: 0, so: 0, avg: ".200" },
        { player: "Soler", pos: "DH", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 2, avg: ".400" },
        { player: "Adell", pos: "LF", ab: 5, r: 2, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Tatis Jr.", pos: "RF", ab: 5, r: 3, h: 3, rbi: 2, bb: 0, so: 0, avg: ".600" },
        { player: "Arenado", pos: "3B", ab: 3, r: 2, h: 2, rbi: 0, bb: 0, so: 1, avg: ".667" },
        { player: "Fernandez", pos: "3B", ab: 2, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Bazzana", pos: "2B", ab: 5, r: 1, h: 2, rbi: 3, bb: 0, so: 1, avg: ".400" },
        { player: "Smith", pos: "C", ab: 5, r: 1, h: 3, rbi: 3, bb: 0, so: 0, avg: ".600" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Harper", pos: "1B", ab: 4, r: 1, h: 1, rbi: 3, bb: 0, so: 0, avg: ".250" },
        { player: "Griffin", pos: "DH", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Ahn", pos: "RF", ab: 4, r: 2, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
        { player: "Kirk", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ]
    }
  },
  {
    id: 8,
    series: "Series 2",
    game: 3,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 9, hits: 9, errors: 0, hrs: 4, rbi: 9, strikeouts: 5 },
    heat: { runs: 2, hits: 4, errors: 0, hrs: 2, rbi: 2, strikeouts: 12 },
    mvp: "Justin Verlander",
    notes: "Barbaros took control with a 9-2 win. Verlander struck out 12.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 3, r: 2, h: 2, rbi: 1, bb: 0, so: 0, avg: ".667" },
        { player: "Willits", pos: "SS", ab: 3, r: 2, h: 3, rbi: 1, bb: 0, so: 0, avg: "1.000" },
        { player: "Harper", pos: "1B", ab: 1, r: 1, h: 0, rbi: 0, bb: 2, so: 1, avg: ".000" },
        { player: "Soler", pos: "DH", ab: 2, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" },
        { player: "Adell", pos: "LF", ab: 2, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" },
        { player: "Tatis Jr.", pos: "RF", ab: 3, r: 2, h: 2, rbi: 1, bb: 0, so: 1, avg: ".667" },
        { player: "Correa", pos: "3B", ab: 3, r: 1, h: 1, rbi: 2, bb: 0, so: 1, avg: ".333" },
        { player: "Bazzana", pos: "2B", ab: 3, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".333" },
        { player: "Smith", pos: "C", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 2, avg: ".333" },
        { player: "Bazzana", pos: "2B", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Arozarena", pos: "LF", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Harper", pos: "1B", ab: 2, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".500" },
        { player: "Griffin", pos: "DH", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Ramirez", pos: "SS", ab: 2, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".500" },
        { player: "Ahn", pos: "RF", ab: 2, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Kirk", pos: "C", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ]
    }
  },
  {
    id: 9,
    series: "Series 2",
    game: 4,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 6, hits: 10, errors: 0, hrs: 3, rbi: 6, strikeouts: 7 },
    heat: { runs: 3, hits: 5, errors: 0, hrs: 1, rbi: 3, strikeouts: 7 },
    mvp: "Justin Verlander",
    notes: "Barbaros closed Series 2 with a 6-3 win. Heat tied it 3-3 in the 5th, but Barbaros answered late.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 1, h: 1, rbi: 1, bb: 0, so: 3, avg: ".200" },
        { player: "Willits", pos: "SS", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".200" },
        { player: "Harper", pos: "1B", ab: 4, r: 2, h: 2, rbi: 3, bb: 0, so: 0, avg: ".500" },
        { player: "Soler", pos: "DH", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Adell", pos: "LF", ab: 3, r: 0, h: 1, rbi: 0, bb: 1, so: 0, avg: ".333" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Correa", pos: "3B", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 3, avg: ".250" },
        { player: "Smith", pos: "C", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Bazzana", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Harper", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Griffin", pos: "DH", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Ramirez", pos: "SS", ab: 3, r: 1, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" },
        { player: "Ahn", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mack", pos: "C", ab: 3, r: 1, h: 2, rbi: 3, bb: 0, so: 0, avg: ".667" }
      ]
    }
  },
  {
    id: 10,
    series: "Series 3",
    game: 1,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 2, hits: 7, errors: 0, hrs: 1, rbi: 2, strikeouts: 4 },
    heat: { runs: 7, hits: 13, errors: 0, hrs: 3, rbi: 7, strikeouts: 2 },
    mvp: "Eduardo Rodriguez",
    notes: "Heat opened Series 3 with a 7-2 win. Heat scored 3 in the 1st and added 3 more in the 7th.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Willits", pos: "SS", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Harper", pos: "1B", ab: 4, r: 0, h: 2, rbi: 1, bb: 0, so: 1, avg: ".500" },
        { player: "Fernandez", pos: "PR", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Soler", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Adell", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Tatis Jr.", pos: "RF", ab: 3, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".667" },
        { player: "Correa", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Mackey", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Bazzana", pos: "2B", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".400" },
        { player: "Correa", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Trout", pos: "DH", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Harper", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arozarena", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Ramirez", pos: "SS", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Thompson", pos: "RF", ab: 4, r: 2, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Mack", pos: "C", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" }
      ]
    }
  }
];

function App() {
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [expandedGameId, setExpandedGameId] = useState(10);
  const [showPlayerTotals, setShowPlayerTotals] = useState(false);

  const filteredGames = selectedSeries === "All" ? games : games.filter((game) => game.series === selectedSeries);

  const stats = useMemo(() => {
    const barbarosWins = games.filter((game) => game.winner === "Barbaros").length;
    const heatWins = games.filter((game) => game.winner === "Heat").length;
    const totals = emptyTotals();
    const playerTotals = {};
    const series = {};

    games.forEach((game) => {
      ["runs", "hits", "errors", "hrs", "rbi", "strikeouts"].forEach((stat) => {
        totals.barbaros[stat] += game.barbaros[stat];
        totals.heat[stat] += game.heat[stat];
      });

      if (!series[game.series]) series[game.series] = { barbaros: 0, heat: 0 };
      if (game.winner === "Barbaros") series[game.series].barbaros += 1;
      if (game.winner === "Heat") series[game.series].heat += 1;

      ["barbaros", "heat"].forEach((team) => {
        game.playerBox[team].forEach((p) => {
          const key = `${team}-${p.player}`;
          if (!playerTotals[key]) {
            playerTotals[key] = { team: team === "barbaros" ? "Barbaros" : "Heat", player: p.player, ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0 };
          }
          playerTotals[key].ab += p.ab;
          playerTotals[key].r += p.r;
          playerTotals[key].h += p.h;
          playerTotals[key].rbi += p.rbi;
          playerTotals[key].bb += p.bb;
          playerTotals[key].so += p.so;
        });
      });
    });

    return { barbarosWins, heatWins, totals, series, playerTotals: Object.values(playerTotals) };
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>MLB Rivalry Tracker</h1>
      <p style={styles.subtitle}>Barbaros vs Loiza Heat</p>

      <div style={styles.grid}>
        <StatCard title="Game Record" value={`Barbaros ${stats.barbarosWins} - ${stats.heatWins} Heat`} />
        <StatCard title="Run Differential" value={stats.totals.barbaros.runs - stats.totals.heat.runs} />
        <StatCard title="Barbaros Runs" value={stats.totals.barbaros.runs} />
        <StatCard title="Heat Runs" value={stats.totals.heat.runs} />
      </div>

      <h2 style={styles.sectionTitle}>Series</h2>
      <div style={styles.seriesGrid}>
        {Object.entries(stats.series).map(([series, record]) => (
          <div key={series} style={styles.card}>
            <h3>{series}</h3>
            <p>Barbaros: {record.barbaros}</p>
            <p>Heat: {record.heat}</p>
            <p>Status: {record.barbaros === 3 ? "Barbaros won" : record.heat === 3 ? "Heat won" : "In progress"}</p>
          </div>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>Team Totals</h2>
      <div style={styles.tableWrap}><TeamTable stats={stats.totals} /></div>

      <h2 style={styles.sectionTitle}>Player Totals From Added Box Scores</h2>
      <button style={styles.button} onClick={() => setShowPlayerTotals(!showPlayerTotals)}>
        {showPlayerTotals ? "Hide Player Totals" : "Show Player Totals"}
      </button>
      {showPlayerTotals && <div style={styles.tableWrap}><PlayerTotals players={stats.playerTotals} /></div>}

      <h2 style={styles.sectionTitle}>Game Log</h2>
      <select value={selectedSeries} onChange={(event) => setSelectedSeries(event.target.value)} style={styles.select}>
        <option>All</option><option>Series 1</option><option>Series 2</option><option>Series 3</option>
      </select>

      <div style={styles.gameList}>
        {filteredGames.map((game) => {
          const expanded = expandedGameId === game.id;
          return (
            <div key={game.id} style={styles.gameCard}>
              <h3>{game.series}, Game {game.game}</h3>
              <p style={styles.score}>Barbaros {game.barbaros.runs} - {game.heat.runs} Heat</p>
              <p>Winner: {game.winner}</p><p>Home Team: {game.home}</p><p>MVP: {game.mvp}</p>
              <GameTeamTable game={game} />
              <button style={styles.button} onClick={() => setExpandedGameId(expanded ? null : game.id)}>
                {expanded ? "Hide Full Box Score" : "Show Full Box Score"}
              </button>
              {expanded && <div style={styles.playerBoxGrid}><PlayerBox title="Barbaros Batting" players={game.playerBox.barbaros} /><PlayerBox title="Heat Batting" players={game.playerBox.heat} /></div>}
              <p style={styles.notes}>{game.notes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function emptyTotals() {
  return { barbaros: { runs: 0, hits: 0, errors: 0, hrs: 0, rbi: 0, strikeouts: 0 }, heat: { runs: 0, hits: 0, errors: 0, hrs: 0, rbi: 0, strikeouts: 0 } };
}

function StatCard({ title, value }) { return <div style={styles.statCard}><p style={styles.statTitle}>{title}</p><p style={styles.statValue}>{value}</p></div>; }

function TeamTable({ stats }) {
  return <table style={styles.table}><thead><tr><th>Team</th><th>Runs</th><th>Hits</th><th>Errors</th><th>HR</th><th>RBI</th><th>Strikeouts</th></tr></thead><tbody><tr><td>Barbaros</td><td>{stats.barbaros.runs}</td><td>{stats.barbaros.hits}</td><td>{stats.barbaros.errors}</td><td>{stats.barbaros.hrs}</td><td>{stats.barbaros.rbi}</td><td>{stats.barbaros.strikeouts}</td></tr><tr><td>Heat</td><td>{stats.heat.runs}</td><td>{stats.heat.hits}</td><td>{stats.heat.errors}</td><td>{stats.heat.hrs}</td><td>{stats.heat.rbi}</td><td>{stats.heat.strikeouts}</td></tr></tbody></table>;
}

function PlayerTotals({ players }) {
  const sorted = [...players].sort((a, b) => {
    const avgA = a.ab ? a.h / a.ab : 0;
    const avgB = b.ab ? b.h / b.ab : 0;
    return avgB - avgA;
  });
  return <table style={styles.table}><thead><tr><th>Team</th><th>Player</th><th>AB</th><th>R</th><th>H</th><th>RBI</th><th>BB</th><th>SO</th><th>AVG</th></tr></thead><tbody>{sorted.map((p) => <tr key={`${p.team}-${p.player}`}><td>{p.team}</td><td>{p.player}</td><td>{p.ab}</td><td>{p.r}</td><td>{p.h}</td><td>{p.rbi}</td><td>{p.bb}</td><td>{p.so}</td><td>{p.ab ? (p.h / p.ab).toFixed(3).replace("0.", ".") : ".000"}</td></tr>)}</tbody></table>;
}

function GameTeamTable({ game }) { return <table style={styles.smallTable}><thead><tr><th>Team</th><th>R</th><th>H</th><th>E</th><th>HR</th><th>RBI</th><th>SO</th></tr></thead><tbody><tr><td>Barbaros</td><td>{game.barbaros.runs}</td><td>{game.barbaros.hits}</td><td>{game.barbaros.errors}</td><td>{game.barbaros.hrs}</td><td>{game.barbaros.rbi}</td><td>{game.barbaros.strikeouts}</td></tr><tr><td>Heat</td><td>{game.heat.runs}</td><td>{game.heat.hits}</td><td>{game.heat.errors}</td><td>{game.heat.hrs}</td><td>{game.heat.rbi}</td><td>{game.heat.strikeouts}</td></tr></tbody></table>; }

function PlayerBox({ title, players }) { return <div style={styles.playerBox}><h4>{title}</h4>{players.length === 0 ? <p style={styles.muted}>Player box score not added yet.</p> : <table style={styles.smallTable}><thead><tr><th>Player</th><th>POS</th><th>AB</th><th>R</th><th>H</th><th>RBI</th><th>BB</th><th>SO</th><th>AVG</th></tr></thead><tbody>{players.map((p, index) => <tr key={index}><td>{p.player}</td><td>{p.pos}</td><td>{p.ab}</td><td>{p.r}</td><td>{p.h}</td><td>{p.rbi}</td><td>{p.bb}</td><td>{p.so}</td><td>{p.avg}</td></tr>)}</tbody></table>}</div>; }

const styles = {
  page: { minHeight: "100vh", background: "#0f172a", color: "#e5e7eb", fontFamily: "Arial, sans-serif", padding: "32px" },
  title: { fontSize: "48px", margin: "0", textAlign: "center" },
  subtitle: { textAlign: "center", fontSize: "20px", color: "#94a3b8", marginBottom: "32px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" },
  statCard: { background: "#111827", border: "1px solid #334155", borderRadius: "14px", padding: "20px", textAlign: "center" },
  statTitle: { color: "#94a3b8", margin: "0 0 8px 0" },
  statValue: { fontSize: "28px", fontWeight: "bold", margin: "0" },
  sectionTitle: { marginTop: "32px", borderBottom: "1px solid #334155", paddingBottom: "8px" },
  seriesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" },
  card: { background: "#111827", border: "1px solid #334155", borderRadius: "14px", padding: "18px" },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", background: "#111827", borderRadius: "12px", overflow: "hidden" },
  smallTable: { width: "100%", borderCollapse: "collapse", marginTop: "12px", fontSize: "14px" },
  select: { padding: "10px", borderRadius: "8px", marginBottom: "16px" },
  gameList: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "16px" },
  gameCard: { background: "#111827", border: "1px solid #334155", borderRadius: "14px", padding: "18px" },
  score: { fontSize: "22px", fontWeight: "bold" },
  notes: { color: "#cbd5e1", lineHeight: "1.5" },
  button: { marginTop: "14px", padding: "10px 14px", borderRadius: "10px", border: "1px solid #64748b", background: "#1e293b", color: "#e5e7eb", cursor: "pointer" },
  playerBoxGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "12px", marginTop: "12px" },
  playerBox: { background: "#0f172a", border: "1px solid #334155", borderRadius: "12px", padding: "12px", overflowX: "auto" },
  muted: { color: "#94a3b8" }
};

export default App;
