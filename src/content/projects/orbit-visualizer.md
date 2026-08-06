---
title: 'Orbit Visualizer'
description: 'An interactive web tool for propagating and comparing satellite orbits from TLE data.'
date: 2025-08-21
categories: ['personal']
tags: ['TypeScript', 'Three.js', 'WebGL']
skills:
  - 'SGP4 orbit propagation'
  - 'TypeScript and modern web tooling'
  - '3D rendering with Three.js / WebGL'
  - 'Web Workers and browser performance'
  - 'Coordinate frame transformations (ECI ↔ ECEF)'
links:
  - label: 'Live demo'
    href: 'https://example.com'
  - label: 'GitHub'
    href: 'https://github.com/VasistaR/orbit-visualizer'
---

A friend wanted to explain constellation coverage without making people install STK. This is that, in a browser tab.

## What it does

Paste in two-line element sets and it propagates them with SGP4, drawing ground tracks on a flat map and orbits in a 3D view. You can scrub time forward and back, and compare several satellites at once.

## Implementation notes

Propagation runs in a **Web Worker**. Rendering a smooth 3D scene while propagating a few dozen satellites at 60 fps does not fit in one thread, and the dropped frames were obvious. Moving the math off the main thread fixed it, at the cost of having to think carefully about what gets transferred each tick — the answer was a single packed `Float32Array` rather than an array of objects.

The other genuine difficulty was **coordinate frames**. SGP4 outputs positions in an Earth-centered inertial frame; ground tracks need Earth-centered Earth-fixed. Getting the sidereal time conversion slightly wrong produces tracks that look plausible but drift westward over a day, which is exactly the kind of bug that survives a casual review.

## Limitations

SGP4 is a general perturbations model. It is accurate to roughly a kilometer for a few days past epoch and degrades from there. This is a visualization aid, not a conjunction analysis tool, and the interface says so.
