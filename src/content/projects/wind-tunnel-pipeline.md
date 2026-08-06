---
title: 'Wind Tunnel Data Pipeline'
description: 'Ingests raw load-cell and pressure-tap data, applies corrections, and outputs publication-ready plots.'
date: 2025-10-06
categories: ['research']
tags: ['Python', 'Pandas', 'Data']
skills:
  - 'Experimental aerodynamics and tunnel corrections'
  - 'Data pipeline design'
  - 'Pandas and NumPy'
  - 'Uncertainty propagation'
  - 'Automated validation against reference cases'
links:
  - label: 'GitHub'
    href: 'https://github.com/VasistaR/tunnel-pipeline'
---

This replaced a spreadsheet workflow that was quietly dropping blockage corrections.

## What it does

Takes raw load-cell voltages and pressure-tap readings from a tunnel run and produces corrected coefficients with uncertainty bounds, plus the plots that go into a report.

The corrections — solid blockage, wake blockage, streamline curvature — are individually simple. The problem with doing them in a spreadsheet is that there is no record of which ones were applied to which run, and a formula that gets dragged one row short fails silently.

## The validation step

The part I would keep in any future version: before it will emit results, the pipeline reprocesses a set of reference runs with known published values and checks it reproduces them. If a correction gets broken during a refactor, the run aborts instead of producing subtly wrong numbers.

This caught a real regression once, when a unit change in the pressure transducer configuration propagated into the blockage term.

## Outcome

A tunnel session that used to take an evening of spreadsheet work now produces its plots before we have finished packing up.
