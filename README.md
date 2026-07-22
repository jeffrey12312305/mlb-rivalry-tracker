# MLB Rivalry Tracker refactor

Replace your current `src` folder contents with the included files. This refactor:

- moves all game data into `src/data/games.js`
- centralizes styling in `src/styles/global.css`
- centralizes team metadata and stat keys in `src/styles/theme.js`
- moves calculations into `src/utils/stats.js`
- splits the interface into focused components
- uses SVG flags consistently across Windows and other platforms
- adds the red/white/blue team gradients, 80px responsive italic title, larger flags, dark gray `vs`, text depth, and radial hero highlight

No additional npm packages are required.

## Test

```bash
npm run build
npm run dev
```

## Commit

```bash
git add src
git commit -m "Refactor rivalry tracker structure and styling"
git push origin main
```
