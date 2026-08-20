-- ClassCapture production schema.
-- Run this in Supabase SQL Editor after creating the project.

create table if not exists public.classes (
  id text primary key,
  subject text not null,
  grade_context text,
  school_band text,
  teacher text,
  block text not null check (block in ('A','B','C','D','E','F','G','H')),
  room text,
  trackable boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.rotations (
  rotation_date date primary key,
  rotation_day smallint not null check (rotation_day between 1 and 8),
  blocks text[] not null check (cardinality(blocks) = 4),
  created_at timestamptz not null default now()
);

create table if not exists public.captures (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  class_id text not null references public.classes(id) on delete restrict,
  capture_date date not null,
  created_at timestamptz not null default now(),
  constraint captures_one_per_class_per_day unique (user_id, class_id, capture_date)
);

create index if not exists captures_user_date_idx on public.captures (user_id, capture_date desc);
create index if not exists captures_user_class_idx on public.captures (user_id, class_id);

alter table public.classes enable row level security;
alter table public.rotations enable row level security;
alter table public.captures enable row level security;

drop policy if exists "Authenticated users can read classes" on public.classes;
create policy "Authenticated users can read classes" on public.classes
  for select to authenticated using (true);

drop policy if exists "Authenticated users can read rotations" on public.rotations;
create policy "Authenticated users can read rotations" on public.rotations
  for select to authenticated using (true);

drop policy if exists "Users can read their own captures" on public.captures;
create policy "Users can read their own captures" on public.captures
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own captures" on public.captures;
create policy "Users can create their own captures" on public.captures
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own captures" on public.captures;
create policy "Users can delete their own captures" on public.captures
  for delete to authenticated using ((select auth.uid()) = user_id);
