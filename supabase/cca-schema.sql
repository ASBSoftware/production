-- Additive migration for Athletics and CCA. It does not alter academic tables.
create table if not exists public.cca_activities (
  id text primary key,
  activity_name text not null,
  category text not null check (category in ('Athletics', 'Activities')),
  season text not null check (season in ('Season 1', 'Season 2', 'Season 3')),
  start_date date not null,
  end_date date not null,
  days text[] not null,
  morning_time text not null,
  afternoon_time text not null,
  space text not null,
  coaches text not null,
  review_note text,
  created_at timestamptz not null default now()
);

create table if not exists public.cca_captures (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  activity_id text not null references public.cca_activities(id) on delete restrict,
  capture_date date not null,
  created_at timestamptz not null default now(),
  constraint cca_one_visit_per_activity_per_day unique (user_id, activity_id, capture_date)
);

create index if not exists cca_captures_user_date_idx on public.cca_captures (user_id, capture_date desc);
create index if not exists cca_captures_user_activity_idx on public.cca_captures (user_id, activity_id);

alter table public.cca_activities enable row level security;
alter table public.cca_captures enable row level security;

drop policy if exists "Authenticated users can read CCA activities" on public.cca_activities;
create policy "Authenticated users can read CCA activities" on public.cca_activities for select to authenticated using (true);
drop policy if exists "Users can read their own CCA captures" on public.cca_captures;
create policy "Users can read their own CCA captures" on public.cca_captures for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can create their own CCA captures" on public.cca_captures;
create policy "Users can create their own CCA captures" on public.cca_captures for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Users can delete their own CCA captures" on public.cca_captures;
create policy "Users can delete their own CCA captures" on public.cca_captures for delete to authenticated using ((select auth.uid()) = user_id);

insert into public.cca_activities (id, activity_name, category, season, start_date, end_date, days, morning_time, afternoon_time, space, coaches, review_note) values
('cca-s1-boys-soccer','ASIAC Boys Soccer','Athletics','Season 1','2026-08-18','2026-10-11',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','Field','Aggie Fernandes (HC) · Jason Fernandes (AC)',null),
('cca-s1-girls-soccer','ASIAC Girls Soccer','Athletics','Season 1','2026-08-18','2026-10-11',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','Field','Dave Nicholson (HC) · Schubert Fernandes (AC)',null),
('cca-s1-badminton','ASIAC Badminton','Athletics','Season 1','2026-08-18','2026-10-11',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','MPH','Kevin Dsouza (HC) · Cecilia Fernando (AC)',null),
('cca-s1-table-tennis','Table Tennis','Activities','Season 1','2026-08-18','2026-10-11',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','OCC2','Mario Fishery (HC) · Audrey Haldankar (AC)',null),
('cca-s2-boys-volleyball','ASIAC Boys Volleyball','Athletics','Season 2','2026-10-14','2027-02-21',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','MPH / OCC','Agnelo Fernandes · Arvind? (AC)','Head coach is blank in the source; Arvind? is unconfirmed.'),
('cca-s2-girls-volleyball','ASIAC Girls Volleyball','Athletics','Season 2','2026-10-14','2027-02-21',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','MPH / OCC','Diana Soule (HC) · Schubert (AC)',null),
('cca-s2-tennis','ASIAC Tennis','Athletics','Season 2','2026-10-14','2027-02-21',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','Tennis Courts','Kevin Dsouza (HC) · Pravin Shete (AC)',null),
('cca-s3-boys-basketball','ASIAC Boys Basketball','Athletics','Season 3','2027-02-24','2027-05-15',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','MPH / OCC','Dana Abizaid (HC) · Tanya Boye (AC)',null),
('cca-s3-girls-basketball','ASIAC Girls Basketball','Athletics','Season 3','2027-02-24','2027-05-15',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','MPH / OCC','Dave Nicholson (HC) · Schubert Fernandes (AC)',null),
('cca-s3-swimming','ASIAC Swimming','Athletics','Season 3','2027-02-24','2027-05-15',array['Monday','Tuesday','Friday'],'6:30–7:45 AM','3:45–5:00 PM','Pool','Pravin Shete (AC) · Sekai Chitaukire (AC)',null)
on conflict (id) do update set activity_name=excluded.activity_name, category=excluded.category, season=excluded.season, start_date=excluded.start_date, end_date=excluded.end_date, days=excluded.days, morning_time=excluded.morning_time, afternoon_time=excluded.afternoon_time, space=excluded.space, coaches=excluded.coaches, review_note=excluded.review_note;
