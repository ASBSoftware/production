# ClassCapture security status

## Current state

The current `app/` build is a local static tracker. It does not send capture data to a server and stores counts in browser `localStorage`. It has no authentication, server-side authorization, database, or deployment boundary. Do not use this version for confidential personal, financial, business, or administrative data.

The schedule and grade metadata are static application data. Capture counts are local to the browser profile and are not a backup.

## Required production architecture

The production version should use:

- Next.js with TypeScript
- Supabase Auth with email/password login and future MFA support
- Supabase PostgreSQL with Row Level Security and an explicit `user_id` on private tables
- Server-side route handlers or server actions for all sensitive writes
- Vercel HTTPS deployment with separate development, preview, and production environments
- GitHub source control with secrets excluded from the repository
- A PWA manifest and service-worker strategy that does not cache private API responses

## Non-negotiable controls

- Never place passwords, service-role keys, database credentials, or `AUTH_SECRET` in client code.
- Never trust a client-supplied user ID; derive the user from the authenticated server session.
- Enforce ownership in PostgreSQL RLS policies, not only in UI route guards.
- Enforce one capture per class per date with a unique database constraint on `(user_id, class_id, capture_date)`.
- Validate class IDs, dates, and filter values on the server.
- Escape or safely render user-controlled text; do not inject untrusted HTML.
- Do not upload or store image files unless a separate encrypted storage design is approved.
- Back up the database independently of the application repository.

## Production readiness gate

The app is not production-ready until authentication, database persistence, RLS, server-side validation, HTTPS deployment, backups, and a security test pass are complete.
