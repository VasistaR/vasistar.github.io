/* ---------------------------------------------------------------------------
 * EXPERIENCE — edit this list, the /experience page renders itself.
 * Entries appear in the order written, so keep the newest at the top.
 * ------------------------------------------------------------------------- */

export interface Experience {
  role: string;
  org: string;
  /** e.g. "Jun 2026 – Aug 2026" */
  period: string;
  location?: string;
  /** Grouping shown as a small label; use whatever categories fit you. */
  kind: 'Internship' | 'Research' | 'Team' | 'Leadership' | 'Coursework';
  /** 2–4 bullets. Lead with the outcome, then the method. */
  points: string[];
  stack?: string[];
  href?: string;
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineering Intern',
    org: 'Aerospace Company',
    period: 'Jun 2026 – Aug 2026',
    location: 'City, State',
    kind: 'Internship',
    points: [
      'Built a telemetry ingestion pipeline that cut post-flight data turnaround from 4 hours to 15 minutes for a team of 12 engineers.',
      'Added regression tests around the guidance state machine, catching three integration bugs before hardware-in-the-loop testing.',
      'Wrote the internal documentation new hires now use to run their first simulation.',
    ],
    stack: ['C++', 'Python', 'Docker', 'gRPC'],
    href: 'https://example.com',
  },
  {
    role: 'Undergraduate Research Assistant',
    org: 'Aerodynamics & Propulsion Lab',
    period: 'Jan 2026 – Present',
    location: 'Your University',
    kind: 'Research',
    points: [
      'Automated CFD case setup and mesh convergence sweeps, replacing a manual workflow that previously took a full day per configuration.',
      'Analyzed wind tunnel data for a low-Reynolds airfoil study; results contributed to a conference abstract under review.',
    ],
    stack: ['Python', 'OpenFOAM', 'NumPy', 'MATLAB'],
  },
  {
    role: 'Avionics Software Lead',
    org: 'Rocketry Team',
    period: 'Sep 2025 – Present',
    location: 'Your University',
    kind: 'Team',
    points: [
      'Lead a subteam of six writing flight software for a two-stage vehicle targeting 30,000 ft.',
      'Rewrote the state estimation loop around a complementary filter, holding apogee detection error under 1.5% across 40 simulated flights.',
      'Introduced hardware-in-the-loop testing so the team can validate recovery logic without spending a launch.',
    ],
    stack: ['C', 'Embedded Linux', 'Kalman filtering', 'PlatformIO'],
  },
  {
    role: 'Teaching Assistant — Intro to Programming',
    org: 'Department of Computer Science',
    period: 'Aug 2025 – Dec 2025',
    location: 'Your University',
    kind: 'Leadership',
    points: [
      'Ran weekly lab sections for 30 students and held office hours covering debugging, recursion, and data structures.',
      'Wrote supplementary practice problems that the course reused the following semester.',
    ],
    stack: ['Python', 'Java'],
  },
];

/* ---------------------------------------------------------------------------
 * COURSEWORK — shown as a compact grid at the bottom of /experience.
 * ------------------------------------------------------------------------- */
export const COURSEWORK: { group: string; courses: string[] }[] = [
  {
    group: 'Aerospace',
    courses: [
      'Aerodynamics I & II',
      'Orbital Mechanics',
      'Propulsion',
      'Flight Dynamics & Control',
      'Structural Analysis',
      'Thermodynamics',
    ],
  },
  {
    group: 'Computer Science',
    courses: [
      'Data Structures & Algorithms',
      'Computer Systems',
      'Operating Systems',
      'Linear Algebra',
      'Machine Learning',
      'Numerical Methods',
    ],
  },
];

/* ---------------------------------------------------------------------------
 * SKILLS
 * ------------------------------------------------------------------------- */
export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C/C++', 'Java', 'MATLAB', 'TypeScript', 'Rust'] },
  {
    group: 'Engineering',
    items: ['SolidWorks', 'ANSYS Fluent', 'OpenFOAM', 'Simulink', 'GMAT', 'LTspice'],
  },
  { group: 'Tools', items: ['Git', 'Linux', 'Docker', 'ROS 2', 'PlatformIO', 'LaTeX'] },
];
