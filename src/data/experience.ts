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
    role: 'Attitude Determination and Control Engineer',
    org: 'Colorado Center for Astrodynamics Research',
    period: 'Feb 2026 – Present',
    location: 'Boulder, Colorado',
    kind: 'Team',
    points: [
      'Built a telemetry ingestion pipeline that cut post-flight data turnaround from 4 hours to 15 minutes for a team of 12 engineers.',
      'Added regression tests around the guidance state machine, catching three integration bugs before hardware-in-the-loop testing.',
      'Wrote the internal documentation new hires now use to run their first simulation.',
    ],
    stack: ['C++', 'Embedded C', 'MATLAB/Simulink', 'Git', 'Linux'],
    href: 'https://www.colorado.edu/ccar',
  },
  {
    role: 'Autonomy and Controls Intern',
    org: 'Elodin (YC W24)',
    period: 'May 2026 – Aug 2026',
    location: 'San Francisco, California',
    kind: 'Internship',
    points: [
      'Automated CFD case setup and mesh convergence sweeps, replacing a manual workflow that previously took a full day per configuration.',
      'Analyzed wind tunnel data for a low-Reynolds airfoil study; results contributed to a conference abstract under review.',
    ],
    stack: ['Python', 'OpenCV', 'IsaacSim', 'ArduPilot', 'Linux',],
    href: 'https://elodin.systems'
  },
  {
    role: 'Computational Science and Machine Learning Researcher',
    org: 'ASDRP',
    period: 'Jan 2024 – May 2025',
    location: 'Fremont, California',
    kind: 'Research',
    points: [
      'Lead a subteam of six writing flight software for a two-stage vehicle targeting 30,000 ft.',
      'Rewrote the state estimation loop around a complementary filter, holding apogee detection error under 1.5% across 40 simulated flights.',
      'Introduced hardware-in-the-loop testing so the team can validate recovery logic without spending a launch.',
    ],
    stack: ['C', 'Linux', 'Kalman filtering', 'PlatformIO'],
  },
  {
    role: 'Intern',
    org: 'Macrometa',
    period: 'Jun 2024 – Aug 2025',
    location: 'Palo Alto, California',
    kind: 'Leadership',
    points: [
      'Ran weekly lab sections for 30 students and held office hours covering debugging, recursion, and data structures.',
      'Wrote supplementary practice problems that the course reused the following semester.',
    ],
    stack: ['Python', 'Java'],
    href: 'https://www.macrometa.com/'
  },
  {
    role: "Founder's Office Intern",
    org: 'Matriosh',
    period: 'Aug 2025 – Dec 2025',
    location: 'San Francisco, California',
    kind: 'Leadership',
    points: [
      'Ran weekly lab sections for 30 students and held office hours covering debugging, recursion, and data structures.',
      'Wrote supplementary practice problems that the course reused the following semester.',
    ],
    stack: ['Python', 'Java'],
    href: 'https://www.matriosh.com/'
  },
];

/* ---------------------------------------------------------------------------
 * COURSEWORK — shown as a compact grid at the bottom of /experience.
 * ------------------------------------------------------------------------- */
export const COURSEWORK: { group: string; courses: string[] }[] = [
  {
    group: 'Aerospace',
    courses: [
      'Aerospace Electronics',
      'Aerospace Computational Methods',
      'Aerospace Heat Transfer',
      'Aerospace Structures',
      'Aeronautics',
      'Astronautics',
      'Dynamics',
      'Thermodynamics',
      'Statics',
    ],
  },
  {
    group: 'Computer Science',
    courses: [
      'Data Structures & Abstraction',
      'Computer Systems',
      'Discrete Structures',
      'Differential Equations with Linear Algebra',
      'Calculus 3',
      'Calculus 2',
      'Calculus 1',
    ],
  },
];

/* ---------------------------------------------------------------------------
 * SKILLS
 * ------------------------------------------------------------------------- */
export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C/C++', 'Java', 'MATLAB', 'TypeScript', 'Arduino'] },
  {
    group: 'Engineering',
    items: ['Fusion 360', 'ANSYS Fluent', 'Simulink', 'CorelDraw'],
  },
  { group: 'Tools', items: ['Git', 'Linux', 'ArduPilot', 'IsaacSim', 'OpenCV', 'PyTorch', 'Docker', 'LaTeX'] },
];
