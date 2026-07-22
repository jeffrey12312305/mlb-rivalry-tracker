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
  }


];
