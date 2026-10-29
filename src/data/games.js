export const games = [
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
  },
  {
    id: 24,
    series: "Series 6",
    game: 1,
    home: "Barbaros",
    winner: "Heat",
    barbaros: {
      runs: 3,
      hits: 3,
      errors: 0,
      hrs: 1,
      rbi: 3,
      strikeouts: 6
    },
    heat: {
      runs: 4,
      hits: 5,
      errors: 0,
      hrs: 3,
      rbi: 4,
      strikeouts: 7
    },
    mvp: "Pete Crow-Armstrong",
    notes: "Heat opened Series 6 with a 4-3 win in 10 innings. Heat scored twice in the top of the 10th, and Barbaros answered with one run in the bottom half. Crow-Armstrong homered, scored twice, and stole a base. Felix Hernandez earned the win after pitching 9.1 innings.",
    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Ruiz", pos: "SS", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Lara", pos: "RF", ab: 4, r: 1, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Walker", pos: "DH", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 1, avg: ".250" },
        { player: "Anthony", pos: "LF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Griffin", pos: "PH", ab: 0, r: 0, h: 0, rbi: 1, bb: 0, so: 0, avg: ".000" },
        { player: "Freeman", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "PH", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Arenado", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Nunez", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" }
      ],
      heat: [
        { player: "Lara", pos: "RF", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Arroyo", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Baez", pos: "3B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Acuna Jr.", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 3, avg: ".000" },
        { player: "Anthony", pos: "LF", ab: 3, r: 0, h: 1, rbi: 0, bb: 1, so: 1, avg: ".333" },
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 2, h: 2, rbi: 1, bb: 0, so: 1, avg: ".500" },
        { player: "Lombard Jr.", pos: "SS", ab: 3, r: 1, h: 1, rbi: 2, bb: 1, so: 0, avg: ".333" },
        { player: "Freeman", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ]
    }
  },

  // =========================================
  // SERIES 6 — GAME 2
  // Barbaros 3, Heat 2
  // =========================================
  {
    id: 25,
    series: "Series 6",
    game: 2,
    date: "2026-10-04",
    home: "Barbaros",
    winner: "Barbaros",

    barbaros: {
      runs: 3,
      hits: 10,
      errors: 0,
      hrs: 1,
      rbi: 3,
      strikeouts: 8
    },

    heat: {
      runs: 2,
      hits: 8,
      errors: 0,
      hrs: 1,
      rbi: 2,
      strikeouts: 5
    },

    mvp: "Aiden Ruiz",

    notes:
      "Barbaros evened Series 6 with a 3-2 win. Aiden Ruiz homered and drove in all three Barbaros runs. Freddie Freeman and Nolan Arenado doubled. Pete Crow-Armstrong homered and drove in both Heat runs. Justin Wrobleski earned the win, Aroldis Chapman recorded the save, and Felix Hernandez took the loss.",

    playerBox: {
      barbaros: [
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Ruiz", pos: "SS", ab: 4, r: 1, h: 2, rbi: 3, bb: 0, so: 0, avg: ".500" },
        { player: "Lara", pos: "RF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Walker", pos: "DH", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Anthony", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Freeman", pos: "1B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Arenado", pos: "3B", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Nunez", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Mackey", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" }
      ],

      heat: [
        { player: "Lara", pos: "RF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Arroyo", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Acuna Jr.", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" },
        { player: "Anthony", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 1, avg: ".250" },
        { player: "Lombard Jr.", pos: "SS", ab: 3, r: 0, h: 0, rbi: 0, bb: 1, so: 0, avg: ".000" },
        { player: "Freeman", pos: "1B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Carrigg", pos: "C", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" }
      ]
    }
  },

  // =========================================
  // SERIES 6 — GAME 3
  // Heat 5, Barbaros 1
  // =========================================
  {
    id: 26,
    series: "Series 6",
    game: 3,
    date: "2026-10-04",
    home: "Barbaros",
    winner: "Heat",

    barbaros: {
      runs: 1,
      hits: 8,
      errors: 0,
      hrs: 0,
      rbi: 1,
      strikeouts: 6
    },

    heat: {
      runs: 5,
      hits: 12,
      errors: 0,
      hrs: 2,
      rbi: 5,
      strikeouts: 7
    },

    mvp: "Pete Crow-Armstrong",

    notes:
      "Heat won Game 3 of Series 6 by a 5-1 score to take a 2-1 series lead. Pete Crow-Armstrong and Ronald Acuna Jr. homered and each drove in two runs. Jake McCarthy, Freddie Freeman, and Jac Caglianone doubled. George Lombard Jr. drove in the lone Barbaros run. Felix Hernandez earned the win and Nolan McLean took the loss.",

    playerBox: {
      barbaros: [
        { player: "Simpson", pos: "LF", ab: 4, r: 0, h: 3, rbi: 0, bb: 0, so: 0, avg: ".750" },
        { player: "Lombard Jr.", pos: "SS", ab: 3, r: 0, h: 3, rbi: 1, bb: 0, so: 0, avg: "1.000" },
        { player: "Walker", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Freeman", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Beltre", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Carrigg", pos: "RF", ab: 3, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Nunez", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mackey", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ],

      heat: [
        { player: "McCarthy", pos: "RF", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Arroyo", pos: "2B", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Baez", pos: "3B", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Acuna Jr.", pos: "DH", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 2, avg: ".250" },
        { player: "Caglianone", pos: "LF", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".500" },
        { player: "Crow-Armstrong", pos: "CF", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".500" },
        { player: "Lombard Jr.", pos: "SS", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Freeman", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Carrigg", pos: "C", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" }
      ]
    }
  },

  // =========================================
  // SERIES 6 — GAME 4
  // Heat 2, Barbaros 1
  // Heat wins Series 6, 3-1
  // =========================================
  {
    id: 27,
    series: "Series 6",
    game: 4,
    date: "2026-10-04",
    home: "Barbaros",
    winner: "Heat",

    barbaros: {
      runs: 1,
      hits: 8,
      errors: 0,
      hrs: 1,
      rbi: 1,
      strikeouts: 5
    },

    heat: {
      runs: 2,
      hits: 5,
      errors: 0,
      hrs: 1,
      rbi: 2,
      strikeouts: 3
    },

    mvp: "Felix Hernandez",

    notes:
      "Heat won Game 4 by a 2-1 score to close Series 6 with a 3-1 series victory. Jordan Walker homered for Heat. Alan Trammell and Javier Baez doubled, with Baez driving in the other Heat run. Andruw Jones homered for the lone Barbaros run. Felix Hernandez earned the win, CC Sabathia took the loss, and Gabriel Hughes recorded the save.",

    playerBox: {
      barbaros: [
        { player: "Simpson", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Gonzalez", pos: "2B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Soriano", pos: "RF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Walker", pos: "DH", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Jones", pos: "CF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Beltre", pos: "3B", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
        { player: "Salas", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ],

      heat: [
        { player: "Keaschall", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Trammell", pos: "SS", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Baez", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Walker", pos: "DH", ab: 3, r: 1, h: 1, rbi: 1, bb: 1, so: 0, avg: ".333" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Freeman", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Kinsler", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ]
    }
  },

  // =========================================
  // SERIES 7 — GAME 1
  // Heat 9, Barbaros 1
  // =========================================
  {
    id: 28,
    series: "Series 7",
    game: 1,
    date: "2026-10-04",
    home: "Barbaros",
    winner: "Heat",

    barbaros: {
      runs: 1,
      hits: 8,
      errors: 0,
      hrs: 0,
      rbi: 1,
      strikeouts: 3
    },

    heat: {
      runs: 9,
      hits: 15,
      errors: 0,
      hrs: 5,
      rbi: 9,
      strikeouts: 7
    },

    mvp: "Dave Roberts",

    notes:
      "Heat opened Series 7 with a 9-1 win. Dave Roberts went 3-for-5 with three home runs, five RBI, and three runs scored. Andruw Jones added a home run and three RBI, and Jordan Walker also homered. Troy Tulowitzki drove in the lone Barbaros run.",

    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Gonzalez", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Soriano", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Walker", pos: "DH", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Roberts", pos: "PR", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Carrigg", pos: "PR", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Tulowitzki", pos: "SS", ab: 3, r: 0, h: 3, rbi: 1, bb: 0, so: 0, avg: "1.000" },
        { player: "Beltre", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Salas", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" }
      ],

      heat: [
        { player: "Keaschall", pos: "RF", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".400" },
        { player: "Tulowitzki", pos: "SS", ab: 5, r: 2, h: 3, rbi: 0, bb: 0, so: 0, avg: ".600" },
        { player: "Jones", pos: "CF", ab: 4, r: 2, h: 2, rbi: 3, bb: 0, so: 1, avg: ".500" },
        { player: "Roberts", pos: "LF", ab: 5, r: 3, h: 3, rbi: 5, bb: 0, so: 0, avg: ".600" },
        { player: "Walker", pos: "DH", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".400" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Kinsler", pos: "2B", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 2, avg: ".500" },
        { player: "Carrigg", pos: "C", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" }
      ]
    }
  },

  // =========================================
  // SERIES 7 — GAME 2
  // Barbaros 6, Heat 5
  // =========================================
  {
    id: 29,
    series: "Series 7",
    game: 2,
    date: "2026-10-04",
    home: "Barbaros",
    winner: "Barbaros",

    barbaros: {
      runs: 6,
      hits: 9,
      errors: 0,
      hrs: 2,
      rbi: 6,
      strikeouts: 9
    },

    heat: {
      runs: 5,
      hits: 15,
      errors: 1,
      hrs: 3,
      rbi: 5,
      strikeouts: 3
    },

    mvp: "Theo Gillen",

    notes:
      "Barbaros rallied from a 5-0 deficit to win 6-5 and even Series 7 at 1-1. Barbaros scored once in the sixth, three times in the seventh, and twice in the eighth. Theo Gillen went 3-for-5 with a home run, two RBI, and two stolen bases. Andruw Jones also homered. Tejay Antone earned the win and Keith Foulke recorded the save.",

    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 5, r: 1, h: 3, rbi: 2, bb: 0, so: 0, avg: ".600" },
        { player: "Gonzalez", pos: "2B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Soriano", pos: "RF", ab: 3, r: 0, h: 0, rbi: 1, bb: 0, so: 3, avg: ".000" },
        { player: "Walker", pos: "DH", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Roberts", pos: "PR-DH", ab: 1, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: "1.000" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 4, r: 2, h: 2, rbi: 2, bb: 0, so: 1, avg: ".500" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Beltre", pos: "3B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Salas", pos: "C", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" }
      ],

      heat: [
        { player: "Keaschall", pos: "RF", ab: 5, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".200" },
        { player: "Tulowitzki", pos: "SS", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 1, avg: ".400" },
        { player: "Roberts", pos: "LF", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Walker", pos: "DH", ab: 4, r: 1, h: 3, rbi: 0, bb: 0, so: 0, avg: ".750" },
        { player: "Baez", pos: "3B", ab: 4, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".500" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 4, rbi: 0, bb: 0, so: 0, avg: "1.000" },
        { player: "Kinsler", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" }
      ]
    }
  },

  // =========================================
  // SERIES 7 — GAME 3
  // Heat 11, Barbaros 7
  // =========================================
  {
    id: 30,
    series: "Series 7",
    game: 3,
    date: "2026-10-12",
    home: "Barbaros",
    winner: "Heat",

    barbaros: {
      runs: 7,
      hits: 8,
      errors: 0,
      hrs: 4,
      rbi: 7,
      strikeouts: 6
    },

    heat: {
      runs: 11,
      hits: 18,
      errors: 0,
      hrs: 2,
      rbi: 11,
      strikeouts: 5
    },

    mvp: "Dave Roberts",

    notes:
      "Heat defeated Barbaros 11-7 to take a 2-1 Series 7 lead. Dave Roberts and Ian Kinsler homered for Heat. Roberts drove in three runs, while Kinsler collected three hits and three RBI. Barbaros hit four home runs from Jordan Walker, Albert Pujols, Andruw Jones, and Ethan Salas. Barbaros scored three runs in the ninth but fell short. Felix Hernandez earned the win and Justin Wrobleski took the loss.",

    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Gonzalez", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Soriano", pos: "RF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Walker", pos: "DH", ab: 4, r: 2, h: 2, rbi: 2, bb: 0, so: 1, avg: ".500" },
        { player: "Pujols", pos: "1B", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 1, avg: ".250" },
        { player: "Jones", pos: "CF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Beltre", pos: "3B", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
        { player: "Salas", pos: "C", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" }
      ],

      heat: [
        { player: "Clemente", pos: "RF", ab: 5, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".200" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 1, h: 2, rbi: 0, bb: 1, so: 1, avg: ".500" },
        { player: "Roberts", pos: "LF", ab: 5, r: 1, h: 2, rbi: 3, bb: 0, so: 1, avg: ".400" },
        { player: "Jones", pos: "CF", ab: 5, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".400" },
        { player: "Walker", pos: "DH", ab: 5, r: 2, h: 2, rbi: 1, bb: 0, so: 2, avg: ".400" },
        { player: "Baez", pos: "3B", ab: 5, r: 2, h: 2, rbi: 2, bb: 0, so: 1, avg: ".400" },
        { player: "Pujols", pos: "1B", ab: 5, r: 1, h: 2, rbi: 2, bb: 0, so: 0, avg: ".400" },
        { player: "Kinsler", pos: "2B", ab: 4, r: 1, h: 3, rbi: 3, bb: 0, so: 0, avg: ".750" },
        { player: "Carrigg", pos: "C", ab: 4, r: 1, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" }
      ]
    }
  },

  // =========================================
  // SERIES 7 — GAME 4
  // Heat 2, Barbaros 1
  // Heat wins Series 7, 3-1
  // =========================================
  {
    id: 31,
    series: "Series 7",
    game: 4,
    date: "2026-10-12",
    home: "Barbaros",
    winner: "Heat",

    barbaros: {
      runs: 1,
      hits: 7,
      errors: 0,
      hrs: 1,
      rbi: 1,
      strikeouts: 6
    },

    heat: {
      runs: 2,
      hits: 5,
      errors: 0,
      hrs: 1,
      rbi: 2,
      strikeouts: 9
    },

    mvp: "Felix Hernandez",

    notes:
      "Heat won 2-1 to clinch Series 7, three games to one. Troy Tulowitzki homered and Dave Roberts drove in the other Heat run. Alfonso Soriano homered for Barbaros in the first inning. Both teams were held scoreless after the third inning. Felix Hernandez earned the win for Heat, Felix Hernandez took the loss for Barbaros, and Gabriel Hughes recorded the save.",

    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 4, r: 0, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Gonzalez", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Soriano", pos: "RF", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 2, avg: ".500" },
        { player: "Walker", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Roberts", pos: "PH-DH", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 3, r: 0, h: 2, rbi: 0, bb: 0, so: 0, avg: ".667" },
        { player: "Carrigg", pos: "PR-1B", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Tulowitzki", pos: "SS", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" },
        { player: "Beltre", pos: "3B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Salas", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" }
      ],

      heat: [
        { player: "Clemente", pos: "RF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Roberts", pos: "LF", ab: 4, r: 0, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Walker", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 1, so: 1, avg: ".000" },
        { player: "Baez", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Kinsler", pos: "2B", ab: 2, r: 1, h: 1, rbi: 0, bb: 1, so: 0, avg: ".500" },
        { player: "Carrigg", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" }
      ]
    }
  },

  // =========================================
  // SERIES 8 — GAME 1
  // Barbaros 4, Heat 3
  // =========================================
  {
    id: 32,
    series: "Series 8",
    game: 1,
    date: "2026-10-12",
    home: "Heat",
    winner: "Barbaros",

    barbaros: {
      runs: 4,
      hits: 7,
      errors: 1,
      hrs: 2,
      rbi: 4,
      strikeouts: 6
    },

    heat: {
      runs: 3,
      hits: 7,
      errors: 0,
      hrs: 1,
      rbi: 3,
      strikeouts: 6
    },

    mvp: "Alfonso Soriano",

    notes:
      "Barbaros opened Series 8 with a 4-3 road win. Alfonso Soriano went 3-for-4 with a home run, triple, and RBI. Theo Gillen also homered. Barbaros scored in the fourth, fifth, and sixth innings before Heat tied the game with three runs in the seventh. Barbaros regained the lead with a run in the ninth. Javier Baez drove in all three Heat runs with a home run and triple. Tyler Rogers earned the win and Gabriel Hughes took the loss.",

    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Gonzalez", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Soriano", pos: "RF", ab: 4, r: 2, h: 3, rbi: 1, bb: 0, so: 0, avg: ".750" },
        { player: "Walker", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Roberts", pos: "PH-DH", ab: 0, r: 0, h: 0, rbi: 1, bb: 0, so: 0, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 2, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Carrigg", pos: "PR-1B", ab: 2, r: 1, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Tulowitzki", pos: "SS", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" },
        { player: "Beltre", pos: "3B", ab: 2, r: 0, h: 0, rbi: 1, bb: 0, so: 1, avg: ".000" },
        { player: "Salas", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".333" }
      ],

      heat: [
        { player: "Clemente", pos: "RF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Roberts", pos: "LF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Walker", pos: "DH", ab: 4, r: 1, h: 3, rbi: 0, bb: 0, so: 1, avg: ".750" },
        { player: "Baez", pos: "3B", ab: 4, r: 1, h: 2, rbi: 3, bb: 0, so: 0, avg: ".500" },
        { player: "Pujols", pos: "1B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Kinsler", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 3, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".333" }
      ]
    }
  },

{
  showGameId: "1846898355",
  id: 33,
  series: "Series 8",
  game: 2,
  date: "2026-10-26",
  home: "Heat",
  winner: "Barbaros",

  barbaros: {
    runs: 4,
    hits: 10,
    errors: 0,
    hrs: 1,
    rbi: 4,
    strikeouts: 8
  },

  heat: {
    runs: 3,
    hits: 3,
    errors: 0,
    hrs: 2,
    rbi: 3,
    strikeouts: 9
  },

  mvp: "Adrian Beltre",

  notes:
    "Barbaros defeat Heat 4-3 in 11 innings to take a 2-0 series lead. " +
    "Adrian Beltre homered and drove in two runs, Ethan Salas added an RBI, " +
    "and Dave Roberts contributed a sacrifice fly. " +
    "Tyler Rogers earned the win, Tejay Antone recorded the save, " +
    "and Keith Foulke took the loss. " +
    "Heat's Dave Roberts drove in two runs and Chone Figgins hit a solo home run.",

  playerBox: {
    barbaros: [
      {
        player: "Gillen",
        pos: "LF",
        ab: 5,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 1,
        avg: ".000"
      },
      {
        player: "Gonzalez",
        pos: "2B",
        ab: 5,
        r: 1,
        h: 1,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".200"
      },
      {
        player: "Soriano",
        pos: "RF",
        ab: 5,
        r: 0,
        h: 2,
        rbi: 0,
        bb: 0,
        so: 1,
        avg: ".400"
      },
      {
        player: "Walker",
        pos: "DH",
        ab: 4,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 4,
        avg: ".000"
      },
      {
        player: "Roberts",
        pos: "PH-DH",
        ab: 0,
        r: 0,
        h: 0,
        rbi: 1,
        bb: 0,
        so: 0,
        avg: ".000"
      },
      {
        player: "Pujols",
        pos: "1B",
        ab: 5,
        r: 0,
        h: 1,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".200"
      },
      {
        player: "Jones",
        pos: "CF",
        ab: 5,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".000"
      },
      {
        player: "Tulowitzki",
        pos: "SS",
        ab: 4,
        r: 2,
        h: 3,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".750"
      },
      {
        player: "Beltre",
        pos: "3B",
        ab: 4,
        r: 1,
        h: 1,
        rbi: 2,
        bb: 0,
        so: 1,
        avg: ".250"
      },
      {
        player: "Salas",
        pos: "C",
        ab: 4,
        r: 0,
        h: 2,
        rbi: 1,
        bb: 0,
        so: 1,
        avg: ".500"
      }
    ],

    heat: [
      {
        player: "Clemente",
        pos: "RF",
        ab: 5,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 3,
        avg: ".000"
      },
      {
        player: "Tulowitzki",
        pos: "SS",
        ab: 5,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".000"
      },
      {
        player: "Bateman",
        pos: "LF",
        ab: 4,
        r: 1,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 1,
        avg: ".000"
      },
      {
        player: "Roberts",
        pos: "DH",
        ab: 4,
        r: 1,
        h: 1,
        rbi: 2,
        bb: 0,
        so: 2,
        avg: ".250"
      },
      {
        player: "Jones",
        pos: "CF",
        ab: 4,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 1,
        avg: ".000"
      },
      {
        player: "Figgins",
        pos: "3B",
        ab: 4,
        r: 1,
        h: 1,
        rbi: 1,
        bb: 0,
        so: 0,
        avg: ".250"
      },
      {
        player: "Pujols",
        pos: "1B",
        ab: 3,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 1,
        so: 1,
        avg: ".000"
      },
      {
        player: "Crow-Armstrong",
        pos: "PR",
        ab: 0,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".000"
      },
      {
        player: "Lowe",
        pos: "2B",
        ab: 4,
        r: 0,
        h: 1,
        rbi: 0,
        bb: 0,
        so: 0,
        avg: ".250"
      },
      {
        player: "Carrigg",
        pos: "C",
        ab: 4,
        r: 0,
        h: 0,
        rbi: 0,
        bb: 0,
        so: 1,
        avg: ".000"
      }
    ]
  }
},

// Series 8 - Game 3: Barbaros clinch Series 8, 3-0.
  {
    showGameId: "1875870225",
    id: 34,
    series: "Series 8",
    game: 3,
    home: "Heat",
    winner: "Barbaros",
    barbaros: { runs: 10, hits: 14, errors: 0, hrs: 2, rbi: 9, strikeouts: 6 },
    heat: { runs: 7, hits: 10, errors: 0, hrs: 4, rbi: 7, strikeouts: 3 },
    mvp: "Mickey Mantle",
    notes: "Barbaros won 10-7 and swept Series 8, 3-0. Mickey Mantle had 4 RBI, Honus Wagner had 3 RBI, and both homered. Gavin Williams earned the win and Tyler Rogers recorded the save. Heat hit four home runs.",
    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 5, r: 2, h: 3, rbi: 0, bb: 0, so: 0, avg: ".600" },
        { player: "Biggio", pos: "2B", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Mantle", pos: "RF", ab: 4, r: 1, h: 1, rbi: 4, bb: 0, so: 0, avg: ".250" },
        { player: "Noel", pos: "DH", ab: 5, r: 2, h: 3, rbi: 0, bb: 0, so: 2, avg: ".600" },
        { player: "Pujols", pos: "1B", ab: 3, r: 1, h: 0, rbi: 0, bb: 2, so: 1, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 5, r: 1, h: 2, rbi: 1, bb: 0, so: 1, avg: ".400" },
        { player: "Wagner", pos: "SS", ab: 5, r: 1, h: 2, rbi: 3, bb: 0, so: 0, avg: ".400" },
        { player: "Beltre", pos: "3B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 1, avg: ".250" },
        { player: "Salas", pos: "C", ab: 0, r: 0, h: 0, rbi: 0, bb: 1, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "PR-C", ab: 3, r: 1, h: 2, rbi: 0, bb: 0, so: 1, avg: ".667" }
      ],
      heat: [
        { player: "Clemente", pos: "RF", ab: 5, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".200" },
        { player: "Tulowitzki", pos: "SS", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" },
        { player: "Roberts", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 3, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".333" },
        { player: "Bateman", pos: "LF", ab: 4, r: 2, h: 2, rbi: 0, bb: 0, so: 0, avg: ".500" },
        { player: "Figgins", pos: "3B", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".250" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 2, avg: ".250" },
        { player: "Wagner", pos: "2B", ab: 4, r: 1, h: 1, rbi: 2, bb: 0, so: 0, avg: ".250" },
        { player: "Carrigg", pos: "C", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" }
      ]
    },
    battingNotes: {
      barbaros: "2B: T. Gillen, J. Noel. HR: M. Mantle, H. Wagner. SACF: M. Mantle. SB: T. Gillen, A. Jones, H. Wagner, A. Beltre, C. Carrigg (3). CS: M. Mantle.",
      heat: "3B: B. Bateman. HR: R. Clemente, T. Tulowitzki, A. Jones, H. Wagner. HBP: A. Jones."
    },
    pitchingBox: {
      barbaros: [
        { player: "Arrieta", ip: "0.2", h: 1, r: 1, er: 1, bb: 0, so: 1 },
        { player: "Williams (W)", ip: "3.1", h: 1, r: 1, er: 1, bb: 0, so: 1 },
        { player: "Antone (H)", ip: "4.2", h: 8, r: 5, er: 5, bb: 0, so: 1 },
        { player: "Rogers (S)", ip: "0.1", h: 0, r: 0, er: 0, bb: 0, so: 0 }
      ],
      heat: [
        { player: "Hernandez", ip: "2.0", h: 1, r: 1, er: 1, bb: 2, so: 1 },
        { player: "Hughes (L)", ip: "0.1", h: 3, r: 4, er: 4, bb: 0, so: 0 },
        { player: "Misiorowski", ip: "2.0", h: 3, r: 2, er: 2, bb: 1, so: 2 },
        { player: "R. Kerr", ip: "0.1", h: 3, r: 2, er: 2, bb: 0, so: 1 },
        { player: "W. Dion", ip: "2.1", h: 2, r: 1, er: 1, bb: 0, so: 2 },
        { player: "Phillips", ip: "1.2", h: 2, r: 0, er: 0, bb: 0, so: 0 },
        { player: "Iglesias", ip: "0.1", h: 0, r: 0, er: 0, bb: 0, so: 0 }
      ]
    }
  },
  // Series 9 - Game 1: Heat take a 1-0 lead in the Tournament 2 final.
  {
    showGameId: "1875944614",
    id: 35,
    series: "Series 9",
    game: 1,
    home: "Barbaros",
    winner: "Heat",
    barbaros: { runs: 1, hits: 5, errors: 0, hrs: 1, rbi: 1, strikeouts: 6 },
    heat: { runs: 2, hits: 5, errors: 0, hrs: 1, rbi: 2, strikeouts: 7 },
    mvp: "Carson Carrigg",
    notes: "Heat beat Barbaros 2-1 in 10 innings to open Series 9. Albert Pujols homered and Carson Carrigg drove in the other Heat run. Theo Gillen homered for Barbaros. Matt Strahm got the win, Tyler Rogers took the loss, and Darren O'Day recorded the save.",
    playerBox: {
      barbaros: [
        { player: "Gillen", pos: "LF", ab: 4, r: 1, h: 2, rbi: 1, bb: 0, so: 1, avg: ".500" },
        { player: "Biggio", pos: "2B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Mantle", pos: "RF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Noel", pos: "DH", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Roberts", pos: "PH-DH", ab: 1, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "PR", ab: 0, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 1, avg: ".250" },
        { player: "Wagner", pos: "SS", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 0, avg: ".000" },
        { player: "Beltre", pos: "3B", ab: 4, r: 0, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Salas", pos: "C", ab: 3, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" }
      ],
      heat: [
        { player: "Clemente", pos: "RF", ab: 5, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Tulowitzki", pos: "SS", ab: 3, r: 0, h: 1, rbi: 0, bb: 1, so: 0, avg: ".333" },
        { player: "Roberts", pos: "DH", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 2, avg: ".000" },
        { player: "Jones", pos: "CF", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 3, avg: ".000" },
        { player: "Bateman", pos: "LF", ab: 4, r: 1, h: 1, rbi: 0, bb: 0, so: 0, avg: ".250" },
        { player: "Figgins", pos: "3B", ab: 4, r: 0, h: 0, rbi: 0, bb: 0, so: 1, avg: ".000" },
        { player: "Pujols", pos: "1B", ab: 4, r: 1, h: 1, rbi: 1, bb: 0, so: 0, avg: ".250" },
        { player: "Wagner", pos: "2B", ab: 3, r: 0, h: 0, rbi: 0, bb: 1, so: 0, avg: ".000" },
        { player: "Carrigg", pos: "C", ab: 4, r: 0, h: 2, rbi: 1, bb: 0, so: 0, avg: ".500" }
      ]
    },
    battingNotes: {
      barbaros: "2B: T. Gillen. HR: T. Gillen.",
      heat: "HR: A. Pujols. RBI: A. Pujols, C. Carrigg."
    },
    pitchingBox: {
      barbaros: [
        { player: "Williams", ip: "7.0", h: 4, r: 1, er: 1, bb: 1, so: 7 },
        { player: "Rogers (L)", ip: "2.1", h: 0, r: 1, er: 0, bb: 0, so: 0 },
        { player: "Blackburn", ip: "0.1", h: 1, r: 0, er: 0, bb: 1, so: 0 },
        { player: "Franco", ip: "0.1", h: 0, r: 0, er: 0, bb: 0, so: 0 }
      ],
      heat: [
        { player: "G. Cole", ip: "5.0", h: 3, r: 1, er: 1, bb: 0, so: 1 },
        { player: "Hughes", ip: "2.0", h: 2, r: 0, er: 0, bb: 0, so: 1 },
        { player: "Strahm (W)", ip: "2.1", h: 0, r: 0, er: 0, bb: 0, so: 4 },
        { player: "O'Day (S)", ip: "0.2", h: 0, r: 0, er: 0, bb: 0, so: 0 }
      ]
    }
  },

// =========================================
  // SERIES 9 - GAME 2
  // BARBAROS 2, HEAT 1
  // SERIES TIED 1-1
  // =========================================
  {
    showGameId: "1878508116",
    id: 36,
    series: "Series 9",
    game: 2,
    home: "Barbaros",
    winner: "Barbaros",

    barbaros: {
      runs: 2,
      hits: 8,
      errors: 0,
      hrs: 1,
      rbi: 2,
      strikeouts: 2
    },

    heat: {
      runs: 1,
      hits: 2,
      errors: 0,
      hrs: 1,
      rbi: 1,
      strikeouts: 7
    },

    mvp: "Craig Biggio",

    notes:
      "Barbaros defeat Heat 2-1 in a walk-off victory to tie " +
      "the Tournament 2 championship series at 1-1. " +
      "Craig Biggio went 2-for-4 with a home run, two runs " +
      "scored, and an RBI. Jhonkensy Noel drove in the " +
      "winning run with a sacrifice fly. Theo Gillen added " +
      "two hits and a triple. Honus Wagner hit a solo home " +
      "run for Heat. Gavin Williams held Heat to one hit " +
      "over 6.2 scoreless innings. Keith Foulke was charged " +
      "with a blown save. Tyler Rogers earned the win " +
      "and Gabriel Hughes took the loss.",

    playerBox: {
      barbaros: [
        {
          player: "Gillen",
          pos: "LF",
          ab: 4,
          r: 0,
          h: 2,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".500"
        },
        {
          player: "Biggio",
          pos: "2B",
          ab: 4,
          r: 2,
          h: 2,
          rbi: 1,
          bb: 0,
          so: 0,
          avg: ".500"
        },
        {
          player: "Mantle",
          pos: "RF",
          ab: 4,
          r: 0,
          h: 1,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".250"
        },
        {
          player: "Noel",
          pos: "DH",
          ab: 3,
          r: 0,
          h: 1,
          rbi: 1,
          bb: 0,
          so: 1,
          avg: ".333"
        },
        {
          player: "Pujols",
          pos: "1B",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".000"
        },
        {
          player: "Jones",
          pos: "CF",
          ab: 3,
          r: 0,
          h: 1,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".333"
        },
        {
          player: "Wagner",
          pos: "SS",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".000"
        },
        {
          player: "Beltre",
          pos: "3B",
          ab: 3,
          r: 0,
          h: 1,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".333"
        },
        {
          player: "Salas",
          pos: "C",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 1,
          avg: ".000"
        }
      ],

      heat: [
        {
          player: "Clemente",
          pos: "RF",
          ab: 4,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 1,
          avg: ".000"
        },
        {
          player: "Tulowitzki",
          pos: "SS",
          ab: 4,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 1,
          avg: ".000"
        },
        {
          player: "Roberts",
          pos: "DH",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 1,
          avg: ".000"
        },
        {
          player: "Jones",
          pos: "CF",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 2,
          avg: ".000"
        },
        {
          player: "Bateman",
          pos: "LF",
          ab: 3,
          r: 0,
          h: 1,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".333"
        },
        {
          player: "Figgins",
          pos: "3B",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 0,
          avg: ".000"
        },
        {
          player: "Pujols",
          pos: "1B",
          ab: 3,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 0,
          so: 2,
          avg: ".000"
        },
        {
          player: "Wagner",
          pos: "2B",
          ab: 3,
          r: 1,
          h: 1,
          rbi: 1,
          bb: 0,
          so: 0,
          avg: ".333"
        },
        {
          player: "Carrigg",
          pos: "C",
          ab: 2,
          r: 0,
          h: 0,
          rbi: 0,
          bb: 1,
          so: 0,
          avg: ".000"
        }
      ]
    },

    pitchingBox: {
      barbaros: [
        {
          player: "Williams",
          ip: "6.2",
          h: 1,
          r: 0,
          er: 0,
          bb: 1,
          so: 4
        },
        {
          player: "Foulke",
          ip: "1.1",
          h: 1,
          r: 1,
          er: 1,
          bb: 0,
          so: 2,
          decision: "BS"
        },
        {
          player: "Rogers",
          ip: "1.0",
          h: 0,
          r: 0,
          er: 0,
          bb: 0,
          so: 1,
          decision: "W"
        }
      ],

      heat: [
        {
          player: "Misiorowski",
          ip: "2.1",
          h: 2,
          r: 1,
          er: 1,
          bb: 0,
          so: 0
        },
        {
          player: "Kerr",
          ip: "3.2",
          h: 3,
          r: 0,
          er: 0,
          bb: 0,
          so: 2
        },
        {
          player: "Hughes",
          ip: "2.0",
          h: 2,
          r: 1,
          er: 1,
          bb: 0,
          so: 0,
          decision: "L"
        },
        {
          player: "Strahm",
          ip: "0.1",
          h: 1,
          r: 0,
          er: 0,
          bb: 0,
          so: 0
        }
      ]
    }
  }
];

