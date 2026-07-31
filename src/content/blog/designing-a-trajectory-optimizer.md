---
title: 'What I learned writing a trajectory optimizer from scratch'
description: 'Direct collocation is conceptually simple and operationally fussy. Notes from getting a launch ascent problem to converge.'
pubDate: 2026-06-28
tags: ['orbital mechanics', 'optimization', 'python']
---

I spent most of the spring building a trajectory optimizer for a two-stage launch vehicle. Not because the world needs another one — it doesn't — but because I kept using tools whose failure modes I didn't understand, and that bothered me.

Here is what I wish someone had told me at the start.

## The math is the easy part

Direct collocation, in one paragraph: instead of integrating the equations of motion forward and searching over initial conditions, you chop the trajectory into `N` segments, treat the state and control at every node as decision variables, and add constraints saying that adjacent nodes are consistent with the dynamics. Then you hand the whole thing to a nonlinear program solver and ask for the minimum-fuel solution.

That is genuinely all of it. I implemented the core in about 200 lines.

The remaining three months were spent on everything else.

## Scaling is not optional

My first working version took 40 seconds to converge and frequently didn't. The problem was that my decision variables spanned about twelve orders of magnitude — altitudes in meters, masses in kilograms, and time in seconds all in the same vector.

Solvers assume your variables are roughly the same size. They are not being lazy; the convergence criteria are all relative, and when one variable is `7e6` and another is `3e-4`, "converged" stops meaning anything.

Normalizing everything to be `O(1)` took an afternoon and cut solve time to under two seconds:

```python
# Scale factors chosen so every normalized variable lands near unity.
R_EARTH = 6.371e6      # m
V_SCALE = 7.9e3        # m/s, roughly orbital velocity
M_SCALE = 5.0e5        # kg, roughly liftoff mass

def normalize(state):
    r, v, m = state
    return np.array([r / R_EARTH, v / V_SCALE, m / M_SCALE])
```

I have since been told this is the first thing anyone learns in a graduate optimization course. I believe it.

## Your initial guess is a design decision

A nonlinear program finds *a* local minimum, and which one it finds depends entirely on where it starts. Feeding it zeros produced garbage. Feeding it a straight line from launch pad to orbit produced something that converged but flew through the ground at one point.

What worked was generating the initial guess from a crude gravity-turn integration — physically wrong in the details, but the right shape. Once the guess had the right shape, the solver reliably cleaned it up.

The general lesson: the initial guess is not a formality you fill in to make the API happy. It is how you tell the solver which solution you actually want.

## Constraint violations lie about their causes

The most frustrating stretch was an infeasibility that appeared around 60 seconds into the ascent. I spent two days assuming the dynamics were wrong.

They weren't. My maximum dynamic pressure constraint was written as an inequality on `q`, but I had bounded it at a value the vehicle physically could not stay under with the thrust profile I had also constrained. Two individually reasonable constraints, jointly impossible.

The solver reported this as "infeasible near node 43," which is technically accurate and entirely unhelpful. Now the first thing I do with an infeasibility is relax constraints one at a time until it converges, and whichever one unlocked it is the real problem.

## What I would do differently

- **Write the validation case first.** I should have started with a problem that has a known analytic answer — a Hohmann transfer — and confirmed my solver reproduced it before pointing it at anything hard.
- **Log every iteration from day one.** I added convergence plots late, and they immediately explained behavior I had been guessing about for weeks.
- **Trust the residuals over your intuition.** Several times I was certain the physics was wrong when the numbers were telling me it was the setup.

The code is [on GitHub](https://github.com/yourusername/trajectory-optimizer). It is not production software, but it is honest about what it does, and I understand every line of it — which was the point.
