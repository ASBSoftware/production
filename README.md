# ClassCapture

ClassCapture is a daily school-class coverage tracker. It uses the 2026–27 rotation calendar, tracks four teaching periods, keeps advisory separate, supports grade/school filters, provides a 4- or 6-class randomized capture route, and records at most one capture count per class per day.

## Current local version

Open [app/index.html](app/index.html) in a browser. This version is intentionally local-only: capture counts are stored in that browser's `localStorage`, no images are stored, and no account or cloud sync exists.

Local storage is not an adequate security boundary or backup. Do not enter confidential data into this version.

## Data sources

- `app/data.js` contains the published schedule and rotation calendar.
- `app/grade-metadata.js` contains authoritative grade corrections and duplicate-ID migration rules from the supplied 224-record class list.

## Production migration

The target production stack is Next.js + TypeScript, Supabase Auth/PostgreSQL, GitHub, and Vercel. The migration must add authentication, server-side authorization, Row Level Security, database uniqueness for daily captures, HTTPS, environment variables, backups, and a security review before deployment.

See [SECURITY.md](SECURITY.md) for the security gate and required controls. `.env.example` lists variable names only; never commit real secrets.
