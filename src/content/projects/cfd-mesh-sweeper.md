---
title: 'CFD Mesh Sweeper'
description: 'A CLI that runs grid-convergence studies across an OpenFOAM case matrix and reports Richardson extrapolation.'
date: 2026-02-09
categories: ['research']
featured: true
tags: ['Python', 'OpenFOAM', 'Automation']
skills:
  - 'Computational fluid dynamics (OpenFOAM)'
  - 'Grid convergence & Richardson extrapolation'
  - 'CLI design and developer tooling'
  - 'Job orchestration on HPC schedulers'
  - 'Data analysis and reporting (Pandas)'
  - 'Reproducible research workflows'
highlight:
  value: '8×'
  label: 'faster studies'
links:
  - label: 'GitHub'
    href: 'https://github.com/VasistaR/mesh-sweeper'
---

I ran one grid convergence study by hand and decided never to do it again.

## The problem

Verifying a CFD result means showing the answer stops changing as the mesh gets finer. Doing that properly means generating several meshes, running each to convergence, extracting the same quantities from every run, and computing a grid convergence index. Done manually it takes a day per configuration, and every step is somewhere a mistake can hide silently.

Worse, the manual process is boring, so people skip it — which means results get published on a single mesh with no verification at all.

## What it does

One command takes a base OpenFOAM case and a refinement schedule, then:

1. Generates each mesh level and records its cell count
2. Queues the solver runs, on a local machine or through Slurm
3. Extracts the requested quantities once every run has converged
4. Computes observed order of convergence and GCI values
5. Emits a single report with the convergence table and plots

## What I learned

**Failing loudly matters more than succeeding quickly.** The first version silently skipped runs that diverged, which produced a convergence table that looked fine and was meaningless. Now a diverged run aborts the study and says which level failed.

**Reproducibility is mostly bookkeeping.** Every report embeds the case hash, the solver version, and the exact refinement parameters. That turned "which mesh produced this plot?" from a research question into a lookup.

## Adoption

Three people in the lab use it now. The most useful feedback was that the default report was too long — nobody read past the first table — so the detail moved to an appendix section.
