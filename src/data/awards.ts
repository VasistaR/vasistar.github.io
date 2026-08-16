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
    title: 'Best Presentation Award — 17th International Conference on Bioinformatics and Biotechnology',
    issuer: 'IEEE',
    date: 'June 2025',
    kind: 'Research',
    detail:
      'Won the best presentation award for my presentation of my paper on a Time-Step Based Framework for Predicting Chaotic Systems.',
    href: 'https://www.icbbt.org/best.htm',
  },
  {
    title: "Chancellor's Achievement Scholarship",
    issuer: 'CU Boulder',
    date: 'Aug 2025',
    kind: 'Scholarship',
    detail:
      'Renewable award pf $25,000 to incoming students based on merit.',
  },
  {
    title: "Certificate of Recognition",
    issuer: "California State Legislative Assembly",
    date: "Apr 2025",
    kind: "Recognition",
    detail: "Recognized for my efforts in keeping my campus and community safe and connected using MapConnect, an innovative mapping application with emergency features integrated into the app for students, by the students."

  },
  {
    title: "Dean's List",
    issuer: 'University of Colorado Boulder, College of Engineering',
    date: 'Fall 2025',
    kind: 'Academic',
    detail: 'Awarded each semester for a term GPA of 3.6 or higher.',
  },
  {
    title: '3rd Place',
    issuer: 'Tests of Engineering Aptitude, Mathematics, and Science',
    date: 'Apr 2024',
    kind: 'Competition',
    detail:
      'Awarded for excellence in engineering in the state of California.',
  },
  {
    title: "President's Volunteer Service Award - Gold",
    issuer: 'AmeriCorps',
    date: '2025',
    kind: 'Volunteer',
    detail: 'Awarded for 250+ hours of community service.',
  },
  {
    title: "California State Seal of Biliteracy",
    issuer: 'State of California',
    date: 'Jun 2025',
    kind: 'Academic',
    detail: 'Awarded for fluency in a second language.',
  },
  {
    title: "Commendation from the Mayor",
    issuer: 'City of Milpitas',
    date: '2023',
    kind: 'Extracurricular',
    detail: 'Recognized for my efforts in keeping my campus and community safe and connected using MapConnect, an innovative mapping application with emergency features integrated into the app for students, by the students.',
  },
  {
    title: "AP Scholar with Distinction",
    issuer: 'CollegeBoard',
    date: '2025',
    kind: 'Academic',
    detail: 'Awarded for score of above 4 on 5 or more AP exams.',
  },
  {
    title: "AP Scholar with Distinction",
    issuer: 'CollegeBoard',
    date: '2024',
    kind: 'Academic',
    detail: 'Awarded for score of above 4 on 5 or more AP exams.',
  },
];
