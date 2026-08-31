export type CcaStatus = "Confirmed" | "Unconfirmed" | "Cancelled" | "Possibility";
export type CcaActivity = {
  id: string;
  name: string;
  category: "Athletics" | "Activities" | "CCA";
  program: "Activities" | "ASIAC" | "SAISA";
  term: string;
  startDate: string;
  endDate: string;
  days: string[];
  timings: string;
  space: string;
  coaches: string;
  status: CcaStatus;
  sourceSheet: string;
  sourceNote?: string;
};

const na = "N/A";
const day = (value: string) => value.split(",").map((item) => item.trim()).filter(Boolean);
const row = (id: string, name: string, term: string, days: string, timings: string, space: string, coaches: string, status: CcaStatus = "Confirmed", sourceNote?: string): CcaActivity => ({ id, name, category: "Activities", program: "Activities", term, startDate: term.includes("1") ? "2026-08-24" : "2027-01-01", endDate: term.includes("1") ? "2026-12-11" : "2027-05-21", days: day(days), timings, space, coaches, status, sourceSheet: "Activities", sourceNote });

const semester1: CcaActivity[] = [
  row("activities-s1-hs-math-club", "HS Math Club", "Semester 1", "Monday", "Mon (07:00 am - 08:00 am)", "Math Rooms", "Katharina Dorn"),
  row("activities-s1-ms-math-club", "MS Math Club", "Semester 1", "Monday", "Mon (3:45 to 5:00PM)", "G15", "N/A", "Cancelled"),
  row("activities-s1-hs-consulting", "HS Student Consulting Club", "Semester 1", "Friday", "Fri (03:45 to 05:00 pm)", "CSR Office", "Aditi Parashar"),
  row("activities-s1-events-council", "Athletics & Activities Events Council", "Semester 1", "Tuesday", "Tue (7:00AM to 8:00AM)", "PE Office", "Dave Nicholson / Kevin D'Souza", "Confirmed", "No sign-up"),
  row("activities-s1-hs-student-council", "HS Student Council", "Semester 1", "Tuesday", "Tues (7:30AM to 8:30AM)", "409", "Tia Lazarus", "Confirmed", "No sign-up"),
  row("activities-s1-ms-student-council", "MS Student Council", "Semester 1", "Tuesday", "Tues (7:00AM to 8:00AM)", "G9", "Tony Martin / Julia Asmus"),
  row("activities-s1-robotics", "MS/HS Robotics", "Semester 1", "Tuesday", "Tue (3:45 to 5:00PM)", "B01", "Mark James / Nisha Singh"),
  row("activities-s1-business", "Business & Economics Society", "Semester 1", "Tuesday", "Tues (7:00AM to 8:00AM)", na, "Thomas Forsgren", "Confirmed", "Location is not provided in the source."),
  row("activities-s1-hs-production", "HS Production (Date TBD)", "Semester 1", "Tuesday,Thursday", "Tue & Thurs (3:45 to 5:00PM)", "Black Box", "Rob Russell", "Confirmed", "No sign-up"),
  row("activities-s1-boxing", "Intro to HS Boxing & Kickboxing", "Semester 1", "Tuesday", "Tue (3:45 to 5:00PM)", "Yoga Studio", "Tony Martin"),
  row("activities-s1-hs-mun", "HS MUN", "Semester 1", "Thursday", "Thur (7:30AM to 8:30AM)", "407", "Tom Forsgren / Tia Lazarus"),
  row("activities-s1-ms-mun", "MS MUN", "Semester 1", "Thursday", "Thurs (3:45 to 5:00PM)", "G17", "Mauricio / Maya Das / Susan Richey"),
  row("activities-s1-dance", "MS/HS Indian Classical Dance (Bharatnatyum)", "Semester 1", "Wednesday", "Wed 03:45 pm - 05:00pm", "Black Box", "Nandhini Ashok"),
  row("activities-s1-strings", "MS/HS Strings Orchestra Club", "Semester 1", "Thursday", "Thur (7:00 to 8:00AM)", "Band Room", "Jami Bolton"),
  row("activities-s1-guitar", "MS/HS Guitar", "Semester 1", "Friday", "Fri (3:45 to 5:00PM)", "Band Room", "Kunal (Liju)", "Confirmed", "(Kevin) appears in the source notes."),
  row("activities-s1-amis", "MS AMIS", "Semester 1", na, na, "Choir Room", "Joanna Guiterriez", "Unconfirmed"),
  row("activities-s1-pickup-football", "HS Pick-up Game Football", "Semester 1", "Monday", "MON (03:45 - 05:00PM)", "Field", "Dave Nicholson"),
  row("activities-s1-pickup-volleyball", "HS Pick-up Volleyball", "Semester 1", "Tuesday", "Tues (7:00AM to 8:00AM)", "OCC2", na),
  row("activities-s1-pickup-basketball", "HS Pick-up Game Basketball", "Semester 1", "Thursday", "Thur (6:30AM - 7:45AM)", "MPH", "Sam Barclay"),
  row("activities-s1-lap-swim", "MS/HS Off-Season Lap Swim", "Semester 1", "Wednesday,Friday,Saturday", "N/A", "Pool", na),
  row("activities-s1-sketchbook", "MS Sketchbook Club", "Semester 1", "Tuesday", "Tue (3:45 to 5:00PM)", "G3", "Gizelle Rodrigues"),
  row("activities-s1-mun-conference", "HS MUN Conference (Mar end)", "Semester 1", "Thursday", "Thurs (3:45 to 5:00PM) / Variable", "TBD", "Tia Lazarus", "Confirmed", "Date is retained as written in the source."),
  row("activities-s1-chess", "MS Chess", "Semester 1", "Wednesday", "Wed 07:00 am - 08:00 am", "G9", "Johny Shah"),
  row("activities-s1-cricket", "MS/HS Cricket", "Semester 1", "Wednesday", "Wed 03:45 pm - 05:00pm", "Field / OCC 1", "Schubert / Pravin"),
];

const semester2: CcaActivity[] = [
  row("activities-s2-hs-math-club", "HS Math Club", "Semester 2", "Monday", "Mon (07:00 am - 08:00 am)", "Math Rooms", "Katharina Dorn"),
  row("activities-s2-ms-math-club", "MS Math Club", "Semester 2", "Monday", "Mon (3:45 to 5:00PM)", "G15", na),
  row("activities-s2-hs-consulting", "HS Student Consulting Club", "Semester 2", na, na, na, "Aditi Parashar"),
  row("activities-s2-events-council", "Athletics & Activities Events Council", "Semester 2", "Tuesday", "Tue (7:00AM to 8:00AM)", "PE Office", "Dave Nicholson / Kevin D'Souza", "Confirmed", "No sign-up"),
  row("activities-s2-hs-student-council", "HS Student Council", "Semester 2", "Tuesday", "Tues (7:30AM to 8:30AM)", "409", "Tia Lazarus", "Confirmed", "No sign-up"),
  row("activities-s2-ms-student-council", "MS Student Council", "Semester 2", "Tuesday", "Tues (7:00AM to 8:00AM)", "G9", "Stephanie Bell / Maya Das?"),
  row("activities-s2-robotics", "MS/HS Robotics", "Semester 2", "Tuesday", "Tue (3:45 to 5:00PM)", "B01", "Mark James"),
  row("activities-s2-business", "Business & Economics Society", "Semester 2", "Tuesday", "Tues (7:00AM to 8:00AM)", na, na, "Unconfirmed", "Location and coach are not provided in the source."),
  row("activities-s2-ms-production", "MS Production (Date TBD)", "Semester 2", "Monday,Thursday", "Mon & Thurs (3:45 to 5:00PM)", "Drama Studio", "Kaleroy Zervos"),
  row("activities-s2-speech-debate", "Speech & Debate", "Semester 2", na, na, na, "Dana Abizaid / Dina Abizaid", "Unconfirmed"),
  row("activities-s2-hs-mun", "HS MUN", "Semester 2", "Thursday", "Thur (7:00AM to 8:00AM)", "407", "Tom Forsgren / Tia Lazarus"),
  row("activities-s2-ms-mun", "MS MUN", "Semester 2", "Thursday", "Thurs (3:45 to 5:00PM)", "G17", "Susan Richey"),
  row("activities-s2-baking", "MS Baking Club?", "Semester 2", na, na, na, na, "Unconfirmed"),
  row("activities-s2-strings", "MS/HS Strings Orchestra Club", "Semester 2", "Thursday", "Thur (7:00 to 8:00AM)", "Band Room", "Jami Bolton"),
  row("activities-s2-guitar", "MS/HS Guitar", "Semester 2", "Friday", "Fri (3:45 to 5:00PM)", "Band Room", "Jami Bolton", "Unconfirmed"),
  row("activities-s2-amis", "HS AMIS", "Semester 2", na, na, "Choir Room", "Joanna Guiterriez", "Unconfirmed"),
  row("activities-s2-pickup-football", "HS Pick-up Game Football", "Semester 2", "Monday", "MON (03:45 - 05:00PM)", "Field", "Dave Nicholson"),
  row("activities-s2-pickup-football-occ2", "HS Pick-up Game Football", "Semester 2", "Tuesday", "Tues (7:00AM to 8:00AM)", "OCC2", na, "Unconfirmed", "The source lists this where Semester 1 lists HS Pick-up Volleyball; preserved as written."),
  row("activities-s2-pickup-basketball", "HS Pick-up Game Basketball", "Semester 2", "Thursday", "Thur (6:30AM - 7:45AM)", "MPH", "Sam Barclay"),
  row("activities-s2-lap-swim", "MS/HS Off-Season Lap Swim", "Semester 2", "Wednesday,Friday,Saturday", "N/A", "Pool", na),
  row("activities-s2-newspaper", "MS/HS Newspaper Club", "Semester 2", "Tuesday", "Tuesday (3:45 to 5:00PM)", "MS/HS Upper Library", "Gizelle Rodrigues", "Unconfirmed"),
  row("activities-s2-dungeons", "MS/HS Dungeons & Dragons Club", "Semester 2", "Monday", "Mon (3:45 to 5:00PM)", "G3", "Ben Strever", "Unconfirmed"),
  row("activities-s2-touch-rugby", "Touch Rugby", "Semester 2", na, "????", "Field", "Pete Pallett", "Unconfirmed", "Timing is retained exactly as written."),
  row("activities-s2-cricket", "MS/HS Cricket", "Semester 2", "Wednesday", "Wed (3:45 to 5:00PM)", "OCC1", "Schubert?", "Unconfirmed"),
];

const sport = (id: string, name: string, program: "ASIAC" | "SAISA", term: string, startDate: string, endDate: string, days: string, timings: string, space: string, coaches: string, status: CcaStatus = "Confirmed", sourceNote?: string): CcaActivity => ({ id, name, category: "Athletics", program, term, startDate, endDate, days: day(days), timings, space, coaches, status, sourceSheet: program, sourceNote });
const asiac: CcaActivity[] = [
  sport("asiac-s1-boys-soccer", "ASIAC Boys Soccer", "ASIAC", "Season 1", "2026-08-18", "2026-10-11", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "Field", "Aggie Fernandes (HC) · Jason Fernandes (AC)"),
  sport("asiac-s1-girls-soccer", "ASIAC Girls Soccer", "ASIAC", "Season 1", "2026-08-18", "2026-10-11", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "Field", "Dave Nicholson (HC) · Schubert Fernandes (AC)"),
  sport("asiac-s1-badminton", "ASIAC Badminton", "ASIAC", "Season 1", "2026-08-18", "2026-10-11", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "MPH", "Kevin Dsouza (HC) · Cecilia Fernando (AC)"),
  sport("asiac-s1-table-tennis", "Table Tennis", "ASIAC", "Season 1", "2026-08-18", "2026-10-11", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "OCC2", "Mario Fishery (HC) Audrey Haldankar (AC)", "Confirmed", "Coach separator is absent in the source."),
  sport("asiac-s2-boys-volleyball", "ASIAC Boys Volleyball", "ASIAC", "Season 2", "2026-10-14", "2027-02-21", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "MPH / OCC", "N/A (HC) · Agnelo Fernandes · Arvind? (AC)", "Unconfirmed", "Head coach is blank; Arvind? is unconfirmed."),
  sport("asiac-s2-girls-volleyball", "ASIAC Girls Volleyball", "ASIAC", "Season 2", "2026-10-14", "2027-02-21", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "MPH / OCC", "Diana Soule (HC) · Schubert (AC)"),
  sport("asiac-s2-tennis", "ASIAC Tennis", "ASIAC", "Season 2", "2026-10-14", "2027-02-21", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5pm)", "Tennis Courts", "Kevin Dsouza (HC) · Pravin Shete (AC)"),
  sport("asiac-s3-boys-basketball", "ASIAC Boys Basketball", "ASIAC", "Season 3", "2027-02-24", "2027-05-15", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5PM)", "MPH / OCC", "Dana Abizaid (HC) · Tanya Boye (AC)"),
  sport("asiac-s3-girls-basketball", "ASIAC Girls Basketball", "ASIAC", "Season 3", "2027-02-24", "2027-05-15", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5PM)", "MPH / OCC", "Dave Nicholson (HC) · Schubert Fernandes (AC)"),
  sport("asiac-s3-swimming", "ASIAC Swimming", "ASIAC", "Season 3", "2027-02-24", "2027-05-15", "Monday,Tuesday,Friday", "Mon (06:30 to 07:45am), Tue, Fri (3:45 to 5PM)", "Pool", "Pravin Shete (AC) · Sekai Chitaukire (AC)"),
];
const saisa: CcaActivity[] = [
  sport("saisa-s1-boys-volleyball", "SAISA Boys Volleyball", "SAISA", "Season 1", "2026-08-19", "2026-11-01", "Monday,Wednesday,Friday,Saturday", "Mon (03:45 pm - 05:00pm), Wed/Fri (6:15 to 7:45AM), Sat (10:15 am to 12:15 pm)", "MPH / OCC", "Leroy Nunes (HC), Katharina Dorn (2 days) / David Nicholson"),
  sport("saisa-s1-girls-volleyball", "SAISA Girls Volleyball", "SAISA", "Season 1", "2026-08-19", "2026-11-01", "Monday,Wednesday,Friday,Saturday", "Mon (03:45 pm - 05:00pm), Wed/Fri (6:15 to 7:45AM), Sat (08:00 am to 10:00 am)", "MPH / OCC", "Diana Soule (HC), Rehan Ferzandi (AC - 3 days), Espi Rebello (AC - 3 days), Erica Barclay (AC - 1 day)"),
  sport("saisa-s1-swimming", "SAISA Swimming", "SAISA", "Season 1", "2026-08-19", "2026-11-01", "Monday,Wednesday,Friday,Saturday", "Mon (3:45 to 5PM), Wed & Fri (6:15 to 7:45AM), Sat (9:00 to 11:00AM)", "Pool", "Pravin Shete (HC), Kamlesh Rajput (AC), Tia Lazarus (AC), Kevin D'Souza (AC), Jennifer Swinehart (AC)"),
  sport("saisa-s2-boys-basketball", "SAISA Boys Basketball", "SAISA", "Season 2", "2026-11-05", "2027-02-16", "Monday,Wednesday,Friday,Saturday", "Mon (03:45 pm - 05:00pm), Wed/Fri (6:15 to 7:45AM), Sat (7:00 to 9:00AM MPH only)", "MPH / OCC", "Sam Barclay (HC), Dana Abizaid (AC)"),
  sport("saisa-s2-girls-football", "SAISA Girls Football", "SAISA", "Season 2", "2026-11-05", "2027-02-16", "Monday,Tuesday,Thursday,Saturday", "Mon/Tues/Thurs (6:15 to 7:45AM), Sat (09:00 - 11:00 AM)", "Field", "Oliver Jauk (HC), Espi Rebello (AC)"),
  sport("saisa-s2-track-field", "SAISA Track & Field", "SAISA", "Season 2", "2026-11-05", "2027-02-16", "Monday,Wednesday,Friday,Saturday", "Mon (3:45 to 5:00pm), Wed/Fri (6:15 to 7:45AM), Sat (10:30 - 12:30 AM)", "Field", "Leroy Nunes (HC), Tony Martin (AC), Schubert Fernandes (AC), Hannele Al Uariachi (ES-AC), Kim Strever?, Pravin Shete?", "Unconfirmed", "Kim Strever? and Pravin Shete? are unconfirmed."),
  sport("saisa-s2-tennis", "SAISA Tennis", "SAISA", "Season 2", "2026-11-05", "2027-02-16", "Monday,Wednesday,Friday,Saturday", "Mon (3:45 to 5:00pm), Wed/Fri (6:30 to 7:45AM), Sat TBD", "Tennis Courts", "Prerana Mallik (HC), Paul Richards (AC)"),
  sport("saisa-s3-boys-football", "SAISA Boys Football", "SAISA", "Season 3", "2027-02-24", "2027-04-19", "Monday,Wednesday,Friday,Saturday", "Mon (3:45 to 5PM), Wed/Fri (6:30 to 7:45AM), Sat (10:00 to 12:00)", "Field", "Dave Nicholson (HC), Leroy Nunes (AC)"),
  sport("saisa-s3-girls-basketball", "SAISA Girls Basketball", "SAISA", "Season 3", "2027-02-24", "2027-04-19", "Monday,Wednesday,Friday,Saturday", "Mon (03:45 pm - 05:00pm), Wed/Fri (6:30 to 7:45AM), Sat (7:30 to 9:00AM)", "OCC", "Sam Barclay (HC), Paul Skadsen (AC)"),
  sport("saisa-s3-badminton", "SAISA Badminton", "SAISA", "Season 3", "2027-02-24", "2027-04-19", "Monday,Wednesday,Friday,Saturday", "Mon (03:45 pm - 05:00pm), Wed/Fri (6:30 to 7:45AM), Sat (TBD)", "MPH", "Kevin D'Souza (HC), Tom Forsgren (AC), Espi Rebello (AC), Prerana Mallik (AC), Maya K (AC)", "Unconfirmed", "The source contains two Season 3 SAISA Badminton rows with different coach lists; retained as one activity with both lists combined."),
];

const possibilities: CcaActivity[] = [
  row("possible-french-club", "French Club", "Possibility", na, na, na, "Elaina Lloyd & Stephane Thos", "Possibility"),
  row("possible-dungeons", "MS/HS Dungeons & Dragons Club", "Possibility", "Monday", "Mon (3:45 to 5:00PM)", "G3", "Ben Strever", "Possibility"),
  row("possible-hs-mun-conference", "HS MUN Conference (Mar end)", "Possibility", "Thursday", "Thurs (3:45 to 5:00PM) / Variable", "TBD", "Tia Lazarus", "Possibility"),
  row("possible-hs-literature", "HS Literature Club", "Possibility", na, na, na, na, "Possibility"),
  row("possible-newspaper", "MS/HS Newspaper Club", "Possibility", "Tuesday", "Tuesday (3:45 to 5:00PM)", "MS/HS Upper Library", "Gizelle Rodrigues", "Possibility"),
  row("possible-speech-debate", "Speech & Debate", "Possibility", na, na, na, "Dana Abizaid / Dina Abizaid", "Possibility"),
  row("possible-touch-rugby", "Touch Rugby", "Possibility", na, "????", "Field", "Pete Pallett", "Possibility"),
  row("possible-ms-amis", "MS AMIS", "Possibility", na, na, "Choir Room", "Joanna Guiterriez", "Possibility"),
  row("possible-hs-amis", "HS AMIS", "Possibility", na, na, "Choir Room", "Joanna Guiterriez", "Possibility"),
  row("possible-cricket", "MS/HS Cricket", "Possibility", "Wednesday", "Wed (3:45 to 5:00PM)", "OCC1", "Schubert?", "Possibility"),
  row("possible-indian-classical-dance", "MS/HS Indian Classical Dance", "Possibility", "Wednesday", "Wed 03:45 pm - 05:00pm", "Black Box", "Nandhini Ashok", "Possibility"),
  row("possible-ms-math-count", "MS Math Count", "Possibility", na, na, na, na, "Possibility"),
];

for (const activity of possibilities) activity.sourceSheet = "Options";
for (const activity of [...semester1, ...semester2]) activity.category = "CCA";
export const ccaActivities: CcaActivity[] = [...semester1, ...semester2, ...asiac, ...saisa, ...possibilities];
export function ccaDayFor(date: string) { return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { weekday: "long" }); }
export function ccaActiveOn(activity: CcaActivity, date: string) { return date >= activity.startDate && date <= activity.endDate && activity.days.includes(ccaDayFor(date)); }
export type CcaTimeBand = "before" | "during" | "after" | "review";
const dayAliases: Record<string, string> = { mon: "Monday", monday: "Monday", tue: "Tuesday", tues: "Tuesday", tuesday: "Tuesday", wed: "Wednesday", weds: "Wednesday", wednesday: "Wednesday", thu: "Thursday", thur: "Thursday", thurs: "Thursday", thursday: "Thursday", fri: "Friday", friday: "Friday", sat: "Saturday", saturday: "Saturday", sun: "Sunday", sunday: "Sunday" };
function minutesFromTime(hourText: string, minuteText: string, meridiem?: string) { let hour = Number(hourText); const minute = Number(minuteText); const suffix = meridiem?.toLowerCase(); if (suffix === "am" && hour === 12) hour = 0; if (suffix === "pm" && hour < 12) hour += 12; return hour * 60 + minute; }
function bandForMinutes(minutes: number): CcaTimeBand { if (minutes < 9 * 60) return "before"; if (minutes >= 15 * 60 + 45) return "after"; return "during"; }
export function ccaBands(activity: CcaActivity, date?: string): CcaTimeBand[] {
  if (activity.timings === "N/A" || activity.timings.includes("TBD") || activity.timings.includes("????")) return ["review"];
  const targetDay = date ? ccaDayFor(date) : undefined;
  const bands: CcaTimeBand[] = [];
  const timePattern = /(\d{1,2}):(\d{2})\s*(am|pm)?/gi;
  const dayPattern = /\b(mon(?:day)?|tues?(?:day)?|wed(?:nesday|s)?|thu(?:rs?|r?day)?|fri(?:day)?|sat(?:urday)?|sun(?:day)?)\b/gi;
  const timeMatches = [...activity.timings.matchAll(timePattern)];
  for (let index = 0; index < timeMatches.length; index += 1) {
    const match = timeMatches[index];
    const previous = timeMatches[index - 1];
    const segmentStart = index === 0 ? 0 : (previous.index ?? 0) + previous[0].length;
    const segment = activity.timings.slice(segmentStart, match.index ?? activity.timings.length);
    const segmentDays = [...segment.matchAll(dayPattern)].map((dayMatch) => dayAliases[dayMatch[1].toLowerCase()]);
    if (targetDay && segmentDays.length && !segmentDays.includes(targetDay)) continue;
    if (targetDay && !segmentDays.length && index > 0) continue;
    bands.push(bandForMinutes(minutesFromTime(match[1], match[2], match[3])));
  }
  return bands.length ? [...new Set(bands)] : ["review"];
}
