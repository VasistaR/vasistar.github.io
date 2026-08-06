---
title: 'Flight Computer Firmware'
description: 'Bare-metal firmware for a high-power rocket: sensor fusion, apogee detection, and dual-deploy recovery.'
date: 2025-11-02
categories: ['leadership', 'personal']
featured: true
tags: ['C', 'STM32', 'Sensor Fusion']
skills:
  - 'Embedded C on ARM Cortex-M'
  - 'Complementary and Kalman filtering'
  - 'Real-time scheduling and interrupt design'
  - 'I2C / SPI sensor integration'
  - 'Hardware-in-the-loop test rigs'
  - 'Oscilloscope and logic analyzer debugging'
highlight:
  value: '200 Hz'
  label: 'control loop'
links:
  - label: 'GitHub'
    href: 'https://github.com/VasistaR/flight-computer'
# cover: '/images/projects/flight-computer-board.jpg'
# coverAlt: 'The assembled flight computer board with sensors and connectors'
---

The recovery system is the part of an amateur rocket that decides whether you get the vehicle back. This firmware runs it.

## What it does

It estimates altitude and vertical velocity in flight, detects apogee, and fires two pyrotechnic charges — a drogue at apogee and a main parachute at a set altitude during descent. Everything is logged to onboard flash so each flight produces a dataset.

## Design decisions

**Complementary filter over a full Kalman filter.** A Kalman filter would be marginally more accurate, but it needs a covariance model I could not honestly justify for these sensors. The complementary filter has one tuning parameter, and I can explain what it does. On a vehicle where a wrong deployment destroys the airframe, that legibility was worth more than the accuracy.

**200 Hz fixed loop.** Fast enough that the barometer's noise averages out over the detection window, slow enough to leave headroom for the flash writes.

**Apogee detection requires persistence.** A single sample showing negative velocity is noise. The state machine requires the condition to hold across consecutive samples before it will fire, which eliminated the false triggers that transonic pressure fluctuations were causing.

## Testing

Flying to test is expensive, so most validation happened on the bench:

- Recorded barometer traces from previous flights replayed into the filter
- A hardware-in-the-loop rig driving simulated sensor values over I2C
- Continuity checks on the pyro channels with the charges replaced by LEDs

The HIL rig caught a bug where the main charge would fire immediately if the vehicle was powered on above the main deployment altitude — which is exactly what happens when you test at a high-altitude launch site.

## Results

Three flights, three successful recoveries. Apogee estimates matched the barometric peak from the logged data to within 1.5%.
