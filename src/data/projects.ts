/* ---------------------------------------------------------------------------
 * PROJECTS — edit this list, the /projects page renders itself.
 * Set `featured: true` on 2–3 of them to surface them on the home page.
 * ------------------------------------------------------------------------- */

export interface Project {
  title: string;
  /** One sentence. What it is and who it's for. */
  blurb: string;
  /** 2–3 sentences of detail shown on the projects page. */
  detail: string;
  year: string;
  tags: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
  /** Optional headline result, e.g. "3.2% apogee error". Renders as a stat. */
  highlight?: { value: string; label: string };
}

export const PROJECTS: Project[] = [
  {
    title: 'Trajectory Optimizer',
    blurb:
      'A direct-collocation solver that plans fuel-optimal ascent trajectories for a two-stage launch vehicle.',
    detail:
      'Written from scratch to understand what commercial tools do under the hood. Discretizes the ascent into collocation nodes and hands the nonlinear program to IPOPT, with analytic gradients for the dynamics. Converges on a realistic gravity-turn profile in under two seconds.',
    year: '2026',
    tags: ['Python', 'Optimization', 'Orbital Mechanics', 'CasADi'],
    featured: true,
    highlight: { value: '1.8s', label: 'solve time' },
    links: [
      { label: 'GitHub', href: 'https://github.com/yourusername/trajectory-optimizer' },
      { label: 'Write-up', href: '/blog/designing-a-trajectory-optimizer' },
    ],
  },
  {
    title: 'Flight Computer Firmware',
    blurb:
      'Bare-metal firmware for a high-power rocket: sensor fusion, apogee detection, and dual-deploy recovery.',
    detail:
      'Runs a complementary filter over barometric altitude and IMU acceleration at 200 Hz on an STM32. Logs to onboard flash at full rate so every flight produces a dataset. Flown three times with zero recovery failures.',
    year: '2025',
    tags: ['C', 'STM32', 'Sensor Fusion', 'RTOS'],
    featured: true,
    highlight: { value: '200 Hz', label: 'control loop' },
    links: [{ label: 'GitHub', href: 'https://github.com/yourusername/flight-computer' }],
  },
  {
    title: 'CFD Mesh Sweeper',
    blurb:
      'A CLI that runs grid-convergence studies across an OpenFOAM case matrix and reports Richardson extrapolation.',
    detail:
      'Built after running one convergence study by hand and deciding never to do it again. Generates meshes, queues solver runs, and produces a single report with GCI values per quantity of interest. Now used by three people in the lab.',
    year: '2026',
    tags: ['Python', 'OpenFOAM', 'CFD', 'Automation'],
    featured: true,
    highlight: { value: '8×', label: 'faster studies' },
    links: [{ label: 'GitHub', href: 'https://github.com/yourusername/mesh-sweeper' }],
  },
  {
    title: 'Orbit Visualizer',
    blurb: 'An interactive web tool for propagating and comparing satellite orbits from TLE data.',
    detail:
      'Pulls two-line elements, propagates with SGP4 in a web worker, and renders ground tracks and 3D orbits in the browser. Made for a friend who wanted to explain constellation coverage without opening STK.',
    year: '2025',
    tags: ['TypeScript', 'Three.js', 'SGP4', 'WebGL'],
    links: [
      { label: 'Live demo', href: 'https://example.com' },
      { label: 'GitHub', href: 'https://github.com/yourusername/orbit-visualizer' },
    ],
  },
  {
    title: 'Wind Tunnel Data Pipeline',
    blurb:
      'Ingests raw load-cell and pressure-tap data, applies corrections, and outputs publication-ready plots.',
    detail:
      'Replaced a spreadsheet workflow that was quietly dropping blockage corrections. Validates every run against known reference cases before it will emit results.',
    year: '2025',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data'],
    links: [{ label: 'GitHub', href: 'https://github.com/yourusername/tunnel-pipeline' }],
  },
  {
    title: 'This Website',
    blurb: 'A statically generated portfolio with a markdown blog, built with Astro.',
    detail:
      'No framework runtime ships to the browser — the whole site is HTML and about 8 KB of CSS. Posts are plain markdown files, and every push to main redeploys through GitHub Actions.',
    year: '2026',
    tags: ['Astro', 'TypeScript', 'CSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/yourusername/yourusername.github.io' }],
  },
];
