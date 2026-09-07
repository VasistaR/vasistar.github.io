---
title: 'Economic Development and Trade Commission'
description: 'Served as a student commissioner on my city economic commission, instrumental in organizing engineering workshops.'
date: 2025-08-15
categories: ['industry', 'leadership']
featured: false
tags: ['Leadership', 'Communication', 'Active listening', 'Conflict resolution', 'Critical thinking', 'Complex problem-solving']
skills:
  - 'Leadership'
  - 'Communication'
  - 'Active listening'
  - 'Conflict resolution'
  - 'Critical thinking'
  - 'Complex problem-solving'
# highlight:
#   value: '200 Hz'
#   label: 'control loop'
links:
  - label: 'City appointments list'
    href: 'https://www.milpitas.gov/DocumentCenter/View/4971/Commission-Appointments-2024-PDF'
  - label: 'Workshops/Hackathon organized'
    href: 'https://1.milpitashacks.com/'
# cover: '/images/projects/flight-computer-board.jpg'
# coverAlt: 'The assembled flight computer board with sensors and connectors'
---


## My role

I was the student commissioner of the 

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
