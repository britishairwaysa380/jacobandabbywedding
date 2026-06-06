# Abby & Jacob — Wedding Weekend App

A mobile-first web app for the wedding party and family. Day-aware homepage,
full 6-day schedule, and a searchable people directory with group filters
(Groomsmen / Bridesmaids / Family). Installable to a phone home screen (PWA).

## Files
- `index.html` — the whole app (UI + logic)
- `data.js` — **all the wedding data** (people, events, schedule, locations, vehicles)
- `manifest.json` / `sw.js` / `icon-*.png` — make it installable + work offline

## Deploy on GitHub Pages
1. Push these files to the root of your repo (or a `/docs` folder).
2. Repo → **Settings → Pages** → Source: your branch, root (or `/docs`).
3. Open the published URL on a phone → browser menu → **Add to Home Screen**.

It then opens full-screen like a native app and works offline after first load.

## How to update info
Everything lives in `data.js` — no need to touch `index.html`.

- **A person's tasks:** find them in `people[]`, edit their `events` array.
  Each event is `{ day:"Fri", time:"2:00 PM", text:"..." }`. `day` must be one
  of `Wed Thu Fri Sat Sun Mon`.
- **A schedule row:** find the day in `days[]`, edit/add a row
  `{ time, event, who, vehicle, notes, highlight }`. Set `highlight:true` to
  gold-flag a marquee moment.
- **Locations / vehicles / key info:** edit `locations[]`, `vehicles[]`, or the
  "Good to know" block in `renderInfo()` inside `index.html`.

After editing, bump the cache name in `sw.js` (e.g. `abby-jacob-v1` → `v2`) so
phones pull the new version.

## Notes
- The homepage auto-detects the current date and shows that day. Before the
  weekend it shows a countdown + the wedding-day glance.
- Highlighted (gold ★) rows mark the special moments — ceremony, first touch,
  piano performance, sunset photos, grand exit, etc.
