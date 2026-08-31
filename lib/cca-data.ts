export type CcaActivity = {
  id: string;
  name: string;
  category: "Athletics" | "Activities";
  season: "Season 1" | "Season 2" | "Season 3";
  startDate: string;
  endDate: string;
  days: string[];
  morningTime: string;
  afternoonTime: string;
  space: string;
  coaches: string;
  reviewNote?: string;
};

const standardDays = ["Monday", "Tuesday", "Friday"];

export const ccaActivities: CcaActivity[] = [
  { id: "cca-s1-boys-soccer", name: "ASIAC Boys Soccer", category: "Athletics", season: "Season 1", startDate: "2026-08-18", endDate: "2026-10-11", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "Field", coaches: "Aggie Fernandes (HC) · Jason Fernandes (AC)" },
  { id: "cca-s1-girls-soccer", name: "ASIAC Girls Soccer", category: "Athletics", season: "Season 1", startDate: "2026-08-18", endDate: "2026-10-11", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "Field", coaches: "Dave Nicholson (HC) · Schubert Fernandes (AC)" },
  { id: "cca-s1-badminton", name: "ASIAC Badminton", category: "Athletics", season: "Season 1", startDate: "2026-08-18", endDate: "2026-10-11", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "MPH", coaches: "Kevin Dsouza (HC) · Cecilia Fernando (AC)" },
  { id: "cca-s1-table-tennis", name: "Table Tennis", category: "Activities", season: "Season 1", startDate: "2026-08-18", endDate: "2026-10-11", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "OCC2", coaches: "Mario Fishery (HC) · Audrey Haldankar (AC)" },
  { id: "cca-s2-boys-volleyball", name: "ASIAC Boys Volleyball", category: "Athletics", season: "Season 2", startDate: "2026-10-14", endDate: "2027-02-21", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "MPH / OCC", coaches: "Agnelo Fernandes · Arvind? (AC)", reviewNote: "Head coach is blank in the source; Arvind? is unconfirmed." },
  { id: "cca-s2-girls-volleyball", name: "ASIAC Girls Volleyball", category: "Athletics", season: "Season 2", startDate: "2026-10-14", endDate: "2027-02-21", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "MPH / OCC", coaches: "Diana Soule (HC) · Schubert (AC)" },
  { id: "cca-s2-tennis", name: "ASIAC Tennis", category: "Athletics", season: "Season 2", startDate: "2026-10-14", endDate: "2027-02-21", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "Tennis Courts", coaches: "Kevin Dsouza (HC) · Pravin Shete (AC)" },
  { id: "cca-s3-boys-basketball", name: "ASIAC Boys Basketball", category: "Athletics", season: "Season 3", startDate: "2027-02-24", endDate: "2027-05-15", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "MPH / OCC", coaches: "Dana Abizaid (HC) · Tanya Boye (AC)" },
  { id: "cca-s3-girls-basketball", name: "ASIAC Girls Basketball", category: "Athletics", season: "Season 3", startDate: "2027-02-24", endDate: "2027-05-15", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "MPH / OCC", coaches: "Dave Nicholson (HC) · Schubert Fernandes (AC)" },
  { id: "cca-s3-swimming", name: "ASIAC Swimming", category: "Athletics", season: "Season 3", startDate: "2027-02-24", endDate: "2027-05-15", days: standardDays, morningTime: "6:30–7:45 AM", afternoonTime: "3:45–5:00 PM", space: "Pool", coaches: "Pravin Shete (AC) · Sekai Chitaukire (AC)" },
];

export function ccaSeasonFor(date: string) { return ccaActivities.find((activity) => date >= activity.startDate && date <= activity.endDate)?.season; }
export function ccaDayFor(date: string) { return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { weekday: "long" }); }
export function ccaActiveOn(activity: CcaActivity, date: string) { return date >= activity.startDate && date <= activity.endDate && activity.days.includes(ccaDayFor(date)); }
