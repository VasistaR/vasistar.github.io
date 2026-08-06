---
title: 'Trajectory Optimizer'
description: 'A direct-collocation solver that plans fuel-optimal ascent trajectories for a two-stage launch vehicle.'
date: 2026-04-18
categories: ['personal', 'research']
featured: true
tags: ['Python', 'Optimization', 'Orbital Mechanics']
skills:
  - 'Nonlinear programming (IPOPT / CasADi)'
  - 'Direct collocation & trajectory design'
  - 'Orbital mechanics and two-body dynamics'
  - 'Numerical conditioning and problem scaling'
  - 'Analytic gradient derivation'
  - 'Scientific Python (NumPy, SciPy, Matplotlib)'
highlight:
  value: '1.8s'
  label: 'solve time'
links:
  - label: 'GitHub'
    href: 'https://github.com/VasistaR/trajectory-optimizer'
  - label: 'Write-up'
    href: '/blog/designing-a-trajectory-optimizer'
# cover: '/images/projects/trajectory-cover.png'
# coverAlt: 'Optimized ascent trajectory plotted against altitude and downrange distance'
# gallery:
#   - src: '/images/projects/trajectory-convergence.png'
#     alt: 'Convergence plot showing objective value over solver iterations'
#     caption: 'Convergence history after rescaling the decision variables.'
---

I kept using trajectory tools whose failure modes I did not understand. That bothered me enough to write my own.

## What it does

Given a launch site, a target orbit, and a vehicle's mass and thrust properties, the solver returns the ascent trajectory that reaches orbit on the least propellant — along with the steering profile needed to fly it.

## How it works

It uses **direct collocation**. Rather than integrating the equations of motion forward and searching over initial conditions, the trajectory is discretized into segments. The state and control at every node become decision variables, and constraints enforce that adjacent nodes are consistent with the dynamics. The resulting nonlinear program goes to IPOPT.

The core is about 200 lines. Everything interesting was in making it converge reliably:

- **Scaling.** The first working version mixed altitudes in meters with masses in kilograms, spanning roughly twelve orders of magnitude. Solvers assume variables are comparably sized, because convergence criteria are relative. Normalizing everything to order 1 cut solve time from 40 seconds to under two.
- **Initial guess.** A nonlinear program finds *a* local minimum, and which one depends on where it starts. Zeros produced garbage; a straight line flew through the ground. Generating the guess from a crude gravity-turn integration — wrong in detail but right in shape — made convergence reliable.
- **Analytic gradients.** Finite differences worked but were slow and noisy near constraint boundaries. Supplying exact derivatives through CasADi's symbolic layer roughly halved iteration count.

## Validation

Before pointing it at anything hard, I checked it reproduced a Hohmann transfer, which has a known closed-form answer. It matched to within numerical tolerance. That test caught two sign errors I would otherwise have chased through the full ascent problem.

## What I would change

The dynamics model assumes a spherical, non-rotating Earth and a simple exponential atmosphere. Both are fine for comparing trajectories against each other and wrong enough that I would not fly anything on the output. Adding Earth rotation is the obvious next step.
