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
  },
  {
  id: 11,
  series: "Series 3",
  game: 2,
  home: "Barbaros",
  winner: "Heat",
  barbaros: { runs: 3, hits: 6, errors: 0, hrs: 1, rbi: 3, strikeouts: 4 },
  heat: { runs: 6, hits: 10, errors: 0, hrs: 3, rbi: 6, strikeouts: 5 },
  mvp: "Jackson Chourio",
  notes: "Heat won Series 3 Game 2, 6-3. Chourio hit 2 HRs and drove in 2. Simpson added a HR and 2 RBI. Delgado homered for Barbaros.",
  playerBox: {
    barbaros: [
      { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
      { player: "De La Cruz", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
      { player: "Rice", pos: "1B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
      { player: "Fernandez", pos: "PR-1B", ab: 1, r: 1, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
      { player: "Delgado", pos: "DH", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
      { player: "Adell", pos: "LF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
      { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
      { player: "Correa", pos: "3B", ab: 3, r: 0, h: 1, rbi: 1, bb: 0, so: 1, avg: ".333" },
      { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
      { player: "Mackey", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
    ],
    heat: [
      { player: "Chourio", pos: "CF", ab: 5, r: 2, h: 3, rbi: 2, bb: 0, so: 1, avg: ".600" },
      { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
      { player: "Correa", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
      { player: "Trout", pos: "DH", ab: 4, r: 0, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
      { player: "Harper", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
      { player: "Thompson", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
      { player: "Griffin", pos: "SS", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
      { player: "Simpson", pos: "LF", ab: 3, r: 1, h: 1, rbi: 2, bb: 1, so: 0, avg: ".333" },
      { player: "Mack", pos: "C", ab: 3, r: 1, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" }
    ]
  }
},
{
  id: 12,
  series: "Series 3",
  game: 3,
  home: "Barbaros",
  winner: "Barbaros",
  barbaros: { runs: 10, hits: 14, errors: 0, hrs: 2, rbi: 10, strikeouts: 3 },
  heat: { runs: 6, hits: 10, errors: 0, hrs: 2, rbi: 6, strikeouts: 7 },
  mvp: "Shohei Ohtani",
  notes: "Barbaros won Series 3 Game 3, 10-6. Ohtani drove in 4. De La Cruz went 4-for-5 with a triple. Barbaros scored 7 runs in the first two innings.",
  playerBox: {
    barbaros: [
      { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 2, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
      { player: "De La Cruz", pos: "SS", ab: 5, r: 3, h: 4, rbi: 0, bb: 0, so: 0, avg: ".800" },
      { player: "Kurtz", pos: "1B", ab: 3, r: 2, h: 2, rbi: 2, bb: 1, so: 0, avg: ".667" },
      { player: "Ohtani", pos: "DH", ab: 4, r: 1, h: 1, rbi: 4, bb: 0, so: 0, avg: ".250" },
      { player: "Adell", pos: "LF", ab: 4, r: 0, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
      { player: "Tatis Jr.", pos: "RF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
      { player: "Guerrero Jr.", pos: "3B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
      { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
      { player: "Mackey", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
    ],
    heat: [
      { player: "Simpson", pos: "LF", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
      { player: "Bazzana", pos: "2B", ab: 3, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" },
      { player: "Correa", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
      { player: "Trout", pos: "DH", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 1, avg: ".500" },
      { player: "Harper", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
      { player: "Chourio", pos: "CF", ab: 4, r: 2, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
      { player: "Griffin", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
      { player: "Gwynn", pos: "RF", ab: 4, r: 2, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
      { player: "Mack", pos: "C", ab: 3, r: 0, h: 2, rbi: 1, bb: 0, so: 1, avg: ".667" },
      { player: "Roberts", pos: "PR", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
    ]
  }
}
  ,
  {
    id: 13,
    series: "Series 3",
    game: 4,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 3, hits: 11, errors: 0, hrs: 1, rbi: 3, strikeouts: 3 },
    heat: { runs: 7, hits: 11, errors: 0, hrs: 5, rbi: 7, strikeouts: 5 },
    mvp: "Travis Bazzana",
    notes: "Heat won Series 3 Game 4, 7-3, and closed the series 3-1. Heat hit five home runs: Bazzana, Correa, Trout, Griffin, and Mack. Barbaros had 11 hits but only scored 3 runs.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "De La Cruz", pos: "SS", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Kurtz", pos: "1B", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Ohtani", pos: "DH", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Adell", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Guerrero Jr.", pos: "3B", ab: 3, r: 0, h: 2, rbi: 1, bb: 0, so: 0, avg: ".667" },
        { player: "Fernandez", pos: "PR-3B", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Mackey", pos: "C", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Bazzana", pos: "2B", ab: 5, r: 2, h: 3, rbi: 1, bb: 0, so: 0, avg: ".600" },
        { player: "Correa", pos: "3B", ab: 5, r: 1, h: 1, rbi: 2, bb: 0, so: 2, avg: ".200" },
        { player: "Trout", pos: "DH", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Murakami", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Taylor", pos: "LF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Griffin", pos: "SS", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
        { player: "Jones", pos: "RF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Mack", pos: "C", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" }
      ]
    }
  }
,
  {
    id: 14,
    series: "Series 4",
    game: 1,
    home: "Heat",
    winner: "Heat",
    barbaros: { runs: 1, hits: 11, errors: 0, hrs: 0, rbi: 1, strikeouts: 6 },
    heat: { runs: 3, hits: 6, errors: 0, hrs: 3, rbi: 3, strikeouts: 5 },
    mvp: "Darren O'Day",
    notes: "Heat opened Series 4 with a 3-1 win. Heat scored all 3 runs on solo HRs by Baez, Jones, and Mack. Barbaros outhit Heat 11-6 but only scored once.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "De La Cruz", pos: "SS", ab: 4, r: 1, h: 3, rbi: 0, bb: 0, so: 0, avg: ".750" },
        { player: "Kurtz", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Ortiz", pos: "DH", ab: 4, r: 0, h: 3, rbi: 1, bb: 0, so: 0, avg: ".750" },
        { player: "Eaton", pos: "PR", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Adell", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 3, avg: ".000" },
        { player: "Guerrero Jr.", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 3, rbi: 0, bb: 0, so: 0, avg: ".750" },
        { player: "Mackey", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],
      heat: [
        { player: "Chourio", pos: "CF", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Baez", pos: "3B", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" },
        { player: "Trout", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Murakami", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Taylor", pos: "LF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Griffin", pos: "SS", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jones", pos: "RF", ab: 3, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".667" },
        { player: "Mack", pos: "C", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" }
      ]
    }
  },
  {
    id: 15,
    series: "Series 4",
    game: 2,
    home: "Heat",
    winner: "Heat",
    barbaros: { runs: 2, hits: 7, errors: 0, hrs: 0, rbi: 2, strikeouts: 2 },
    heat: { runs: 4, hits: 7, errors: 0, hrs: 2, rbi: 4, strikeouts: 5 },
    mvp: "Mike Trout",
    notes: "Heat took a 2-0 Series 4 lead with a 4-2 win. Barbaros scored first with 2 in the 7th, but Heat answered with 2 in the 7th and 2 more in the 8th. HRs: Trout and Lindor.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Lindor", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Judge", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Bellinger", pos: "LF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Kurtz", pos: "1B", ab: 3, r: 0, h: 2, rbi: 2, bb: 0, so: 1, avg: ".667" },
        { player: "Emerson", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ],
      heat: [
        { player: "McGee", pos: "CF", ab: 3, r: 0, h: 1, rbi: 0, bb: 1, so: 0, avg: ".333" },
        { player: "Bazzana", pos: "2B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Baez", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Trout", pos: "DH", ab: 3, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".667" },
        { player: "Murakami", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Taylor", pos: "LF", ab: 3, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".667" },
        { player: "Lindor", pos: "SS", ab: 3, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".333" },
        { player: "Jones", pos: "RF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mack", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ]
    }
  }
,
  {
    id: 16,
    series: "Series 4",
    game: 3,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 11, hits: 13, errors: 0, hrs: 4, rbi: 11, strikeouts: 3 },
    heat: { runs: 0, hits: 3, errors: 0, hrs: 0, rbi: 0, strikeouts: 2 },
    mvp: "Cody Bellinger",
    notes: "Barbaros won Series 4 Game 3, 11-0. Barbaros jumped out fast with 1 in the 1st, 2 in the 2nd, 3 in the 3rd, and 5 in the 4th. HRs: Crow-Armstrong, Tatis Jr., Judge, Bellinger. Jimenez threw 4 shutout innings and allowed only 3 hits.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".333" },
        { player: "Lindor", pos: "SS", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Tatis Jr.", pos: "RF", ab: 3, r: 3, h: 3, rbi: 1, bb: 0, so: 0, avg: "1.000" },
        { player: "Judge", pos: "DH", ab: 2, r: 2, h: 1, rbi: 2, bb: 1, so: 0, avg: ".500" },
        { player: "Bellinger", pos: "LF", ab: 3, r: 3, h: 3, rbi: 3, bb: 0, so: 0, avg: "1.000" },
        { player: "Kurtz", pos: "1B", ab: 3, r: 2, h: 3, rbi: 1, bb: 0, so: 0, avg: "1.000" },
        { player: "Emerson", pos: "3B", ab: 3, r: 0, h: 1, rbi: 2, bb: 0, so: 0, avg: ".333" },
        { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 2, r: 0, h: 1, rbi: 1, bb: 0, so: 1, avg: ".500" }
      ],
      heat: [
        { player: "McGee", pos: "CF", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arroyo", pos: "2B", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Baez", pos: "3B", ab: 2, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Trout", pos: "DH", ab: 2, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Bellinger", pos: "1B", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Taylor", pos: "LF", ab: 2, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Lindor", pos: "SS", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jones", pos: "RF", ab: 1, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: "1.000" },
        { player: "Carrigg", pos: "C", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ]
    }
  }

,
  {
    id: 17,
    series: "Series 4",
    game: 4,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 6, hits: 11, errors: 0, hrs: 1, rbi: 6, strikeouts: 5 },
    heat: { runs: 2, hits: 8, errors: 0, hrs: 1, rbi: 2, strikeouts: 4 },
    mvp: "Pete Crow-Armstrong",
    notes: "Barbaros tied Series 4 at 2-2 with a 6-2 win. Crow-Armstrong homered and drove in 2. Mackey collected 3 hits, and Tatis Jr. tripled.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".400" },
        { player: "Lindor", pos: "SS", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Judge", pos: "DH", ab: 3, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" },
        { player: "Bellinger", pos: "LF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Kurtz", pos: "1B", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Emerson", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Doerr", pos: "2B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Mackey", pos: "C", ab: 4, r: 1, h: 3, rbi: 0, bb: 0, so: 0, avg: ".750" }
      ],
      heat: [
        { player: "McGee", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Arroyo", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Trout", pos: "DH", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Bellinger", pos: "1B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Taylor", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Lindor", pos: "SS", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Jones", pos: "RF", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
        { player: "Carrigg", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ]
    }
  },
  {
    id: 18,
    series: "Series 4",
    game: 5,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 2, hits: 5, errors: 0, hrs: 1, rbi: 2, strikeouts: 6 },
    heat: { runs: 3, hits: 8, errors: 0, hrs: 1, rbi: 3, strikeouts: 6 },
    mvp: "Ozzie Smith",
    notes: "Heat won Series 4 in five games with a 3-2 victory. Ozzie Smith homered, while Bellinger supplied both Barbaros runs with a 2-run homer.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Lindor", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Tatis Jr.", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Judge", pos: "DH", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Bellinger", pos: "LF", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 1, avg: ".250" },
        { player: "Kurtz", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Emerson", pos: "3B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ],
      heat: [
        { player: "McGee", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Arroyo", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Trout", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 1, so: 0, avg: ".000" },
        { player: "Taylor", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Lindor", pos: "SS", ab: 4, r: 2, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Smith", pos: "RF", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Jones", pos: "1B", ab: 3, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 3, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" }
      ]
    }
  },
  {
    id: 19,
    series: "Series 5",
    game: 1,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 3, hits: 7, errors: 1, hrs: 1, rbi: 3, strikeouts: 6 },
    heat: { runs: 9, hits: 11, errors: 1, hrs: 1, rbi: 9, strikeouts: 6 },
    mvp: "Taylor",
    notes: "Heat opened Series 5 with a 9-3 win. Taylor homered and drove in 3. Heat scored early and Gaylord Perry finished four scoreless innings.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 1, avg: ".250" },
        { player: "Lindor", pos: "SS", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Judge", pos: "RF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Anthony", pos: "DH", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Kurtz", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Tatis Jr.", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Emerson", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Mackey", pos: "C", ab: 3, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ],
      heat: [
        { player: "Smith", pos: "SS", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".200" },
        { player: "Carrigg", pos: "C", ab: 5, r: 2, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Baez", pos: "3B", ab: 5, r: 1, h: 1, rbi: 3, bb: 0, so: 1, avg: ".200" },
        { player: "Trout", pos: "DH", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".400" },
        { player: "Freeman", pos: "1B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Taylor", pos: "LF", ab: 4, r: 2, h: 2, rbi: 3, bb: 0, so: 1, avg: ".500" },
        { player: "Montgomery", pos: "RF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Lindor", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Arroyo", pos: "CF", ab: 3, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" }
      ]
    }
  },
  {
    id: 20,
    series: "Series 5",
    game: 2,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 7, hits: 13, errors: 0, hrs: 1, rbi: 7, strikeouts: 5 },
    heat: { runs: 6, hits: 13, errors: 1, hrs: 4, rbi: 6, strikeouts: 5 },
    mvp: "Colt Emerson",
    notes: "Barbaros won 7-6 in 10 innings to tie Series 5. Emerson homered and drove in 3. Barbaros erased a late deficit and Tyler Rogers earned the win.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Lindor", pos: "SS", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 1, avg: ".400" },
        { player: "Judge", pos: "RF", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Anthony", pos: "DH", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Freeman", pos: "1B", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".400" },
        { player: "Tatis Jr.", pos: "LF", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Emerson", pos: "3B", ab: 4, r: 1, h: 2, rbi: 3, bb: 0, so: 0, avg: ".500" },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" }
      ],
      heat: [
        { player: "Smith", pos: "SS", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".200" },
        { player: "Carrigg", pos: "C", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Baez", pos: "3B", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".400" },
        { player: "Trout", pos: "DH", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Freeman", pos: "1B", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Taylor", pos: "LF", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Montgomery", pos: "RF", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 1, avg: ".400" },
        { player: "Lindor", pos: "2B", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Acuna Jr.", pos: "CF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" }
      ]
    }
  },
  {
    id: 21,
    series: "Series 5",
    game: 3,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 7, hits: 11, errors: 0, hrs: 2, rbi: 7, strikeouts: 5 },
    heat: { runs: 11, hits: 16, errors: 0, hrs: 4, rbi: 11, strikeouts: 4 },
    mvp: "Ronald Acuna Jr.",
    notes: "Heat took a 2-1 Series 5 lead with an 11-7 win. Acuna Jr. went 3-for-3 with a homer, 3 runs, and 2 RBI. Arroyo drove in 3.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 2, h: 3, rbi: 2, bb: 0, so: 0, avg: ".600" },
        { player: "Lindor", pos: "SS", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Judge", pos: "RF", ab: 5, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".200" },
        { player: "Anthony", pos: "DH", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Freeman", pos: "1B", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Tatis Jr.", pos: "LF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Emerson", pos: "3B", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Mackey", pos: "C", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".250" }
      ],
      heat: [
        { player: "Smith", pos: "SS", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".400" },
        { player: "Carrigg", pos: "C", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Baez", pos: "3B", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 1, avg: ".400" },
        { player: "Trout", pos: "DH", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Freeman", pos: "1B", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".400" },
        { player: "Taylor", pos: "LF", ab: 5, r: 1, h: 3, rbi: 1, bb: 0, so: 0, avg: ".600" },
        { player: "Montgomery", pos: "RF", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
        { player: "Arroyo", pos: "2B", ab: 4, r: 2, h: 2, rbi: 3, bb: 0, so: 1, avg: ".500" },
        { player: "Acuna Jr.", pos: "CF", ab: 3, r: 3, h: 3, rbi: 2, bb: 0, so: 0, avg: "1.000" }
      ]
    }
  },
  {
    id: 22,
    series: "Series 5",
    game: 4,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 5, hits: 7, errors: 0, hrs: 3, rbi: 5, strikeouts: 6 },
    heat: { runs: 1, hits: 4, errors: 1, hrs: 1, rbi: 1, strikeouts: 4 },
    mvp: "Pete Crow-Armstrong",
    notes: "Barbaros forced Game 5 with a 5-1 win. Crow-Armstrong homered and drove in 3. Tatis Jr. and Emerson also homered.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 1, h: 1, rbi: 3, bb: 0, so: 1, avg: ".250" },
        { player: "Lindor", pos: "SS", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Judge", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Anthony", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Freeman", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Tatis Jr.", pos: "LF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Emerson", pos: "3B", ab: 3, r: 2, h: 2, rbi: 1, bb: 0, so: 0, avg: ".667" },
        { player: "Doerr", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 3, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" }
      ],
      heat: [
        { player: "Smith", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Trout", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Freeman", pos: "1B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Taylor", pos: "LF", ab: 3, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
        { player: "Montgomery", pos: "RF", ab: 3, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" },
        { player: "Arroyo", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Acuna Jr.", pos: "CF", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ]
    }
  },
  {
    id: 23,
    series: "Series 5",
    game: 5,
    home: "Barbaros",
    winner: "Barbaros",
    barbaros: { runs: 8, hits: 17, errors: 0, hrs: 3, rbi: 8, strikeouts: 4 },
    heat: { runs: 1, hits: 6, errors: 0, hrs: 1, rbi: 1, strikeouts: 6 },
    mvp: "Andy Ruiz",
    notes: "Barbaros won Series 5, 3-2, with an 8-1 Game 5 victory. Ruiz hit two homers and drove in 3. Freeman added a homer and 3 RBI.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Lindor", pos: "SS", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Ruiz", pos: "RF", ab: 5, r: 2, h: 3, rbi: 3, bb: 0, so: 0, avg: ".600" },
        { player: "Anthony", pos: "DH", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Freeman", pos: "1B", ab: 4, r: 2, h: 3, rbi: 3, bb: 0, so: 0, avg: ".750" },
        { player: "Tatis Jr.", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Emerson", pos: "3B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Doerr", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Mackey", pos: "C", ab: 4, r: 1, h: 3, rbi: 1, bb: 0, so: 0, avg: ".750" }
      ],
      heat: [
        { player: "Smith", pos: "SS", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Carrigg", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Trout", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Freeman", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Taylor", pos: "LF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Montgomery", pos: "RF", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Arroyo", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Acuna Jr.", pos: "CF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ]
    }
  }


];

function App() {}
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [expandedGameId, setExpandedGameId] = useState(23);
  const [showPlayerTotals, setShowPlayerTotals] = useState(false);

  const filteredGames =
    selectedSeries === "All"
      ? games
      : games.filter((game) => game.series === selectedSeries);

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
            playerTotals[key] = {
              team: team === "barbaros" ? "Barbaros" : "Heat",
              player: p.player,
              ab: 0,
              r: 0,
              h: 0,
              rbi: 0,
              bb: 0,
              so: 0,
            };
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

    return {
      barbarosWins,
      heatWins,
      totals,
      series,
      playerTotals: Object.values(playerTotals),
    };
  }, []);

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f5f5f3; }
        table th {
          padding: 12px 14px;
          border-bottom: 1px solid #dededb;
          color: #777;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .07em;
          text-transform: uppercase;
          text-align: right;
          white-space: nowrap;
        }
        table td {
          padding: 12px 14px;
          border-bottom: 1px solid #ececea;
          text-align: right;
          white-space: nowrap;
        }
        table tbody tr:last-child td { border-bottom: 0; }
        table tbody tr:hover { background: #fafaf8; }
        button, select { font: inherit; }
        @media (max-width: 640px) {
          table th, table td { padding: 10px 9px; }
        }
      `}</style>
      <header style={styles.topBar}>
        <div style={styles.topBarInner}>
          <div style={styles.brand}>RIVALRY TRACKER</div>
          <div style={styles.topRecord}>
            <span>Barbaros 🇩🇴 {stats.barbarosWins}</span>
            <span style={styles.recordDivider}>–</span>
            <span>{stats.heatWins} Heat 🇵🇷</span>
          </div>
        </div>
      </header>

      <main style={styles.container}>
        <section style={styles.hero}>
          <p style={styles.eyebrow}>MLB THE SHOW</p>
          <h1 style={styles.title}>Barbaros 🇩🇴 vs Heat 🇵🇷</h1>
          <p style={styles.subtitle}>
            Complete head-to-head results, series records, team totals, and box scores.
          </p>
        </section>

        <section style={styles.summaryGrid}>
          <StatCard title="Overall Record" value={`${stats.barbarosWins}-${stats.heatWins}`} />
          <StatCard
            title="Run Differential"
            value={
              stats.totals.barbaros.runs - stats.totals.heat.runs > 0
                ? `+${stats.totals.barbaros.runs - stats.totals.heat.runs}`
                : stats.totals.barbaros.runs - stats.totals.heat.runs
            }
          />
          <StatCard title="Barbaros 🇩🇴 Runs" value={stats.totals.barbaros.runs} />
          <StatCard title="Heat 🇵🇷 Runs" value={stats.totals.heat.runs} />
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.sectionEyebrow}>HEAD-TO-HEAD</p>
              <h2 style={styles.sectionTitle}>Series Results</h2>
            </div>
          </div>

          <div style={styles.seriesGrid}>
            {Object.entries(stats.series).map(([seriesName, record]) => {
              const barbarosWon = record.barbaros === 3;
              const heatWon = record.heat === 3;
              const winnerLabel = barbarosWon
                ? "Barbaros 🇩🇴 won"
                : heatWon
                  ? "Heat 🇵🇷 won"
                  : "In progress";

              return (
                <article key={seriesName} style={styles.seriesCard}>
                  <div style={styles.seriesCardTop}>
                    <span style={styles.finalBadge}>
                      {barbarosWon || heatWon ? "FINAL" : "ACTIVE"}
                    </span>
                    <span style={styles.seriesName}>{seriesName}</span>
                  </div>

                  <TeamScoreRow
                    team="Barbaros 🇩🇴"
                    score={record.barbaros}
                    winner={barbarosWon}
                  />
                  <TeamScoreRow
                    team="Heat 🇵🇷"
                    score={record.heat}
                    winner={heatWon}
                  />

                  <p style={styles.seriesStatus}>{winnerLabel}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.sectionEyebrow}>COMBINED RESULTS</p>
              <h2 style={styles.sectionTitle}>Team Totals</h2>
            </div>
          </div>
          <div style={styles.tableCard}>
            <TeamTable stats={stats.totals} />
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.sectionEyebrow}>PLAYER DATA</p>
              <h2 style={styles.sectionTitle}>Player Totals</h2>
            </div>
            <button
              style={styles.secondaryButton}
              onClick={() => setShowPlayerTotals(!showPlayerTotals)}
            >
              {showPlayerTotals ? "Hide totals" : "Show totals"}
            </button>
          </div>

          {showPlayerTotals && (
            <div style={styles.tableCard}>
              <PlayerTotals players={stats.playerTotals} />
            </div>
          )}
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.sectionEyebrow}>FINAL SCORES</p>
              <h2 style={styles.sectionTitle}>Game Log</h2>
            </div>

            <select
              value={selectedSeries}
              onChange={(event) => setSelectedSeries(event.target.value)}
              style={styles.select}
              aria-label="Filter games by series"
            >
              <option>All</option>
              <option>Series 1</option>
              <option>Series 2</option>
              <option>Series 3</option>
              <option>Series 4</option>
              <option>Series 5</option>
            </select>
          </div>

          <div style={styles.gameList}>
            {[...filteredGames].reverse().map((game) => {
              const expanded = expandedGameId === game.id;
              const barbarosWon = game.winner === "Barbaros";
              const heatWon = game.winner === "Heat";

              return (
                <article key={game.id} style={styles.gameCard}>
                  <div style={styles.gameCardHeader}>
                    <div>
                      <span style={styles.finalBadge}>FINAL</span>
                      <p style={styles.gameMeta}>
                        {game.series} · Game {game.game}
                      </p>
                    </div>
                    <span style={styles.homeLabel}>Home: {teamLabel(game.home)}</span>
                  </div>

                  <div style={styles.scoreboard}>
                    <TeamScoreRow
                      team="Barbaros 🇩🇴"
                      score={game.barbaros.runs}
                      winner={barbarosWon}
                    />
                    <TeamScoreRow
                      team="Heat 🇵🇷"
                      score={game.heat.runs}
                      winner={heatWon}
                    />
                  </div>

                  <div style={styles.gameInfo}>
                    <span><strong>Winner:</strong> {teamLabel(game.winner)}</span>
                    <span><strong>MVP:</strong> {game.mvp}</span>
                  </div>

                  <div style={styles.compactTableCard}>
                    <GameTeamTable game={game} />
                  </div>

                  <button
                    style={styles.boxScoreButton}
                    onClick={() => setExpandedGameId(expanded ? null : game.id)}
                  >
                    {expanded ? "Hide full box score" : "View full box score"}
                  </button>

                  {expanded && (
                    <div style={styles.playerBoxGrid}>
                      <PlayerBox
                        title="Barbaros 🇩🇴 Batting"
                        players={game.playerBox.barbaros}
                      />
                      <PlayerBox
                        title="Heat 🇵🇷 Batting"
                        players={game.playerBox.heat}
                      />
                    </div>
                  )}

                  <p style={styles.notes}>{game.notes}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
function teamLabel(team) {
  return team === "Barbaros" ? "Barbaros 🇩🇴" : "Heat 🇵🇷";
}

function formatTeam(team) {
  switch (team) {
    case "Barbaros":
      return "Barbaros 🇩🇴";
    case "Heat":
      return "Heat 🇵🇷";
    default:
      return team;
  }
}

function emptyTotals() {
  return {
    "Barbaros 🇩🇴": {
      runs: 0,
      hits: 0,
      errors: 0,
      hrs: 0,
      rbi: 0,
      strikeouts: 0,
    },
    "Heat 🇵🇷": {
      runs: 0,
      hits: 0,
      errors: 0,
      hrs: 0,
      rbi: 0,
      strikeouts: 0,
    },
  };
}

function StatCard({ title, value }) {
  return (
    <div style={styles.statCard}>
      <p style={styles.statTitle}>{title}</p>
      <p style={styles.statValue}>{value}</p>
    </div>
  );
}

function TeamScoreRow({ team, score, winner }) {
  return (
    <div style={styles.teamScoreRow}>
      <div style={styles.teamNameWrap}>
        <span style={winner ? styles.winnerDot : styles.loserDot} />
        <span style={winner ? styles.winnerTeam : styles.teamName}>{team}</span>
      </div>
      <span style={winner ? styles.winnerScore : styles.teamScore}>{score}</span>
    </div>
  );
}

function TeamTable({ stats }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.leftHeader}>Team</th>
          <th>Runs</th>
          <th>Hits</th>
          <th>Errors</th>
          <th>HR</th>
          <th>RBI</th>
          <th>Strikeouts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.teamCell}>Barbaros 🇩🇴</td>
          <td>{stats["Barbaros 🇩🇴"].runs}</td>
          <td>{stats["Barbaros 🇩🇴"].hits}</td>
          <td>{stats["Barbaros 🇩🇴"].errors}</td>
          <td>{stats["Barbaros 🇩🇴"].hrs}</td>
          <td>{stats["Barbaros 🇩🇴"].rbi}</td>
          <td>{stats["Barbaros 🇩🇴"].strikeouts}</td>
        </tr>
        <tr>
          <td style={styles.teamCell}>Heat 🇵🇷</td>
          <td>{stats["Heat 🇵🇷"].runs}</td>
          <td>{stats["Heat 🇵🇷"].hits}</td>
          <td>{stats["Heat 🇵🇷"].errors}</td>
          <td>{stats["Heat 🇵🇷"].hrs}</td>
          <td>{stats["Heat 🇵🇷"].rbi}</td>
          <td>{stats["Heat 🇵🇷"].strikeouts}</td>
        </tr>
      </tbody>
    </table>
  );
}

function PlayerTotals({ players }) {
  const sorted = [...players].sort((a, b) => {
    const avgA = a.ab ? a.h / a.ab : 0;
    const avgB = b.ab ? b.h / b.ab : 0;
    return avgB - avgA;
  });

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.leftHeader}>Team</th>
          <th style={styles.leftHeader}>Player</th>
          <th>AB</th>
          <th>R</th>
          <th>H</th>
          <th>RBI</th>
          <th>BB</th>
          <th>SO</th>
          <th>AVG</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((p) => (
          <tr key={`${p.team}-${p.player}`}>
            <td style={styles.teamCell}>{teamLabel(p.team)}</td>
            <td style={styles.playerCell}>{p.player}</td>
            <td>{p.ab}</td>
            <td>{p.r}</td>
            <td>{p.h}</td>
            <td>{p.rbi}</td>
            <td>{p.bb}</td>
            <td>{p.so}</td>
            <td>{p.ab ? (p.h / p.ab).toFixed(3).replace("0.", ".") : ".000"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function GameTeamTable({ game }) {
  return (
    <table style={styles.smallTable}>
      <thead>
        <tr>
          <th style={styles.leftHeader}>Team</th>
          <th>R</th>
          <th>H</th>
          <th>E</th>
          <th>HR</th>
          <th>RBI</th>
          <th>SO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.teamCell}>Barbaros 🇩🇴</td>
          <td>{game["Barbaros 🇩🇴"].runs}</td>
          <td>{game["Barbaros 🇩🇴"].hits}</td>
          <td>{game["Barbaros 🇩🇴"].errors}</td>
          <td>{game["Barbaros 🇩🇴"].hrs}</td>
          <td>{game["Barbaros 🇩🇴"].rbi}</td>
          <td>{game["Barbaros 🇩🇴"].strikeouts}</td>
        </tr>
        <tr>
          <td style={styles.teamCell}>Heat 🇵🇷</td>
          <td>{game["Heat 🇵🇷"].runs}</td>
          <td>{game["Heat 🇵🇷"].hits}</td>
          <td>{game["Heat 🇵🇷"].errors}</td>
          <td>{game["Heat 🇵🇷"].hrs}</td>
          <td>{game["Heat 🇵🇷"].rbi}</td>
          <td>{game["Heat 🇵🇷"].strikeouts}</td>
        </tr>
      </tbody>
    </table>
  );
}

function PlayerBox({ title, players }) {
  return (
    <div style={styles.playerBox}>
      <h4 style={styles.playerBoxTitle}>{title}</h4>
      {players.length === 0 ? (
        <p style={styles.muted}>Player box score not added yet.</p>
      ) : (
        <table style={styles.smallTable}>
          <thead>
            <tr>
              <th style={styles.leftHeader}>Player</th>
              <th>POS</th>
              <th>AB</th>
              <th>R</th>
              <th>H</th>
              <th>RBI</th>
              <th>BB</th>
              <th>SO</th>
              <th>AVG</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p, index) => (
              <tr key={`${p.player}-${index}`}>
                <td style={styles.playerCell}>{p.player}</td>
                <td>{p.pos}</td>
                <td>{p.ab}</td>
                <td>{p.r}</td>
                <td>{p.h}</td>
                <td>{p.rbi}</td>
                <td>{p.bb}</td>
                <td>{p.so}</td>
                <td>{p.avg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f3",
    color: "#171717",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  topBar: {
    background: "#111111",
    color: "#ffffff",
    borderBottom: "1px solid #262626",
    position: "sticky",
    top: 0,
    zIndex: 20,
  },
  topBarInner: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "14px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  brand: {
    fontWeight: 900,
    letterSpacing: "0.08em",
    fontSize: "15px",
  },
  topRecord: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    fontWeight: 700,
  },
  recordDivider: { color: "#737373" },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "34px 22px 72px",
  },
  hero: {
    background: "#ffffff",
    border: "1px solid #dededb",
    borderRadius: "18px",
    padding: "34px",
    marginBottom: "18px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
  },
  eyebrow: {
    margin: "0 0 10px",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "0.14em",
    color: "#737373",
  },
  title: {
    fontSize: "clamp(34px, 6vw, 62px)",
    lineHeight: 1,
    letterSpacing: "-0.045em",
    margin: 0,
    fontWeight: 900,
    color: "#252525",
  },
  subtitle: {
    maxWidth: "700px",
    margin: "16px 0 0",
    fontSize: "17px",
    lineHeight: 1.55,
    color: "#606060",
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "12px",
    marginBottom: "38px",
  },
  statCard: {
    background: "#ffffff",
    border: "1px solid #dededb",
    borderRadius: "14px",
    padding: "20px",
  },
  statTitle: {
    color: "#737373",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 10px",
  },
  statValue: {
    fontSize: "30px",
    fontWeight: 900,
    letterSpacing: "-0.03em",
    margin: 0,
  },
  section: { marginTop: "38px" },
  sectionHeader: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "18px",
    marginBottom: "14px",
    flexWrap: "wrap",
  },
  sectionEyebrow: {
    color: "#858585",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "0.14em",
    margin: "0 0 5px",
  },
  sectionTitle: {
    fontSize: "28px",
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    margin: 0,
  },
  seriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "12px",
  },
  seriesCard: {
    background: "#ffffff",
    border: "1px solid #dededb",
    borderRadius: "14px",
    padding: "18px",
  },
  seriesCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  },
  finalBadge: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: "22px",
    padding: "0 8px",
    borderRadius: "999px",
    background: "#eeeeeb",
    color: "#555555",
    fontSize: "10px",
    fontWeight: 900,
    letterSpacing: "0.1em",
  },
  seriesName: { fontSize: "13px", fontWeight: 800, color: "#5e5e5e" },
  seriesStatus: {
    margin: "14px 0 0",
    paddingTop: "12px",
    borderTop: "1px solid #ececea",
    color: "#6a6a6a",
    fontSize: "13px",
    fontWeight: 700,
  },
  teamScoreRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    minHeight: "42px",
  },
  teamNameWrap: { display: "flex", alignItems: "center", gap: "10px", minWidth: 0 },
  winnerDot: {
    width: "7px",
    height: "7px",
    borderRadius: "999px",
    background: "#1ba300",
    flexShrink: 0,
  },
  loserDot: {
    width: "7px",
    height: "7px",
    borderRadius: "999px",
    background: "#c50000",
    flexShrink: 0,
  },
  teamName: { color: "#676767", fontWeight: 650 },
  winnerTeam: { color: "#111111", fontWeight: 900 },
  teamScore: { color: "#777777", fontSize: "24px", fontWeight: 750 },
  winnerScore: { color: "#111111", fontSize: "28px", fontWeight: 950 },
  tableCard: {
    background: "#ffffff",
    border: "1px solid #dededb",
    borderRadius: "14px",
    overflowX: "auto",
  },
  compactTableCard: {
    borderTop: "1px solid #ececea",
    borderBottom: "1px solid #ececea",
    overflowX: "auto",
    marginTop: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  smallTable: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  },
  leftHeader: { textAlign: "left" },
  teamCell: { textAlign: "left", fontWeight: 800, whiteSpace: "nowrap" },
  playerCell: { textAlign: "left", fontWeight: 750, whiteSpace: "nowrap" },
  select: {
    minWidth: "150px",
    padding: "10px 36px 10px 12px",
    borderRadius: "9px",
    border: "1px solid #cacac6",
    background: "#ffffff",
    color: "#171717",
    fontSize: "14px",
    fontWeight: 750,
  },
  secondaryButton: {
    padding: "10px 14px",
    borderRadius: "9px",
    border: "1px solid #222222",
    background: "#ffffff",
    color: "#111111",
    cursor: "pointer",
    fontWeight: 800,
  },
  gameList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 430px), 1fr))",
    gap: "14px",
  },
  gameCard: {
    background: "#ffffff",
    border: "1px solid #dededb",
    borderRadius: "16px",
    padding: "19px",
    boxShadow: "0 5px 18px rgba(0,0,0,0.035)",
  },
  gameCardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "10px",
  },
  gameMeta: {
    color: "#777777",
    fontSize: "13px",
    fontWeight: 750,
    margin: "8px 0 0",
  },
  homeLabel: {
    color: "#858585",
    fontSize: "12px",
    textAlign: "right",
  },
  scoreboard: {
    padding: "4px 0 8px",
  },
  gameInfo: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
    marginTop: "10px",
    color: "#5e5e5e",
    fontSize: "13px",
  },
  boxScoreButton: {
    marginTop: "14px",
    padding: "10px 0",
    border: 0,
    borderBottom: "2px solid #111111",
    background: "transparent",
    color: "#111111",
    cursor: "pointer",
    fontWeight: 900,
  },
  playerBoxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
    gap: "12px",
    marginTop: "16px",
  },
  playerBox: {
    border: "1px solid #dededb",
    borderRadius: "12px",
    padding: "12px",
    overflowX: "auto",
    background: "#fafaf8",
  },
  playerBoxTitle: { margin: "2px 0 10px", fontSize: "15px" },
  notes: {
    color: "#666666",
    lineHeight: 1.55,
    margin: "16px 0 0",
    fontSize: "13px",
  },
  muted: { color: "#888888" },
};

export default App;