/* ---------------------------------------------------------------------------
 * AWARDS & HONORS — edit this list, the /awards page renders itself.
 * Newest first. Delete the placeholders once you've added your own.
 * ------------------------------------------------------------------------- */

export interface Award {
  title: string;
  /** Who gave it to you. */
  issuer: string;
  /** e.g. 'May 2026' or '2025 – 2026' */
  date: string;
  /** Grouping label shown as a pill and used for the filter headings. */
  kind: 'Scholarship' | 'Award' | 'Competition' | 'Academic' | 'Recognition';
  /** Optional sentence of context — what it was for, or how selective it was. */
  detail?: string;
  /** Optional link to the announcement, certificate, or org page. */
  href?: string;
}

export const AWARDS: Award[] = [
  {
    title: "Dean's List",
    issuer: 'University of Colorado Boulder, College of Engineering',
    date: 'Fall 2024 – Spring 2026',
    kind: 'Academic',
    detail: 'Awarded each semester for a term GPA of 3.75 or higher.',
  },
  {
    title: 'Engineering Merit Scholarship',
    issuer: 'CU Boulder Ann and H.J. Smead Aerospace Engineering Sciences',
    date: 'Aug 2024',
    kind: 'Scholarship',
    detail:
      'Renewable award to incoming students in the aerospace program, based on academic record and demonstrated interest in flight systems.',
  },
  {
    title: 'First Place — Undergraduate Design Challenge',
    issuer: 'AIAA Rocky Mountain Section',
    date: 'Apr 2026',
    kind: 'Competition',
    detail:
      'Team award for a two-stage vehicle design; I led the avionics and recovery software portion of the submission.',
    href: 'https://example.com',
  },
  {
    title: 'Outstanding Teaching Assistant',
    issuer: 'Department of Computer Science',
    date: 'Dec 2025',
    kind: 'Recognition',
    detail:
      'Selected from the introductory programming course TA cohort on the basis of student evaluations.',
  },
];
