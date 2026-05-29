---
title: "Game theory payoff matrix explained — how to read the prisoner's dilemma (A-level economics)"
description: "Read the game theory payoff matrix for A-level economics. How payoffs are written, finding dominant strategies and the Nash equilibrium, and why collusion breaks down."
lede: "How payoffs are laid out in a 2x2 matrix, how to find each firm's dominant strategy, how to locate the Nash equilibrium, and why the prisoner's dilemma explains cartel breakdown."
theme: "Microeconomics"
spec:
  edexcel_a: "3.4.4"
  edexcel_b: null
  aqa: null
  ocr: null
keywords: [game theory payoff matrix, prisoner's dilemma, Nash equilibrium, dominant strategy, collusion, oligopoly, cartel breakdown, A-level economics diagram, reading a payoff matrix]
read_minutes: 7
status: live
published: 2026-05-29
modified: 2026-05-29
spa_topic: game-theory
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics", href: "/articles/?theme=micro" }
  - { label: "Game theory payoff matrix" }

friction:
  - "Most students can recite 'prisoner's dilemma' but freeze when handed an actual payoff matrix. They don't know which number belongs to which firm, so they can't find the dominant strategy or the Nash equilibrium — and those are exactly what the marks are for."
  - "And almost everyone jumps to 'they'll collude' because the joint payoff is highest there. That misses the point: each firm individually does better by cheating whatever the other does, so the stable outcome is the one where both compete — the worse-for-both Nash equilibrium."

glance:
  - { label: "What the matrix shows", value: "A 2x2 grid: each firm picks a strategy (collude or compete). Each of the four cells holds both firms' payoffs for that combination." }
  - { label: "Reading a cell", value: "By convention the row firm's payoff is written first, the column firm's second — (Row, Column). Always check the labelling." }
  - { label: "Dominant strategy", value: "A strategy that gives a firm a higher payoff no matter what the rival does. Compare cells column-by-column for one firm, row-by-row for the other." }
  - { label: "Nash equilibrium", value: "The cell where neither firm can improve its own payoff by switching unilaterally — so neither moves. Often worse for both than colluding." }
glance_cta:
  href: /edexcel_a/theme-3/game-theory/learn-it
  label: "Want more depth? Explore the full topic →"


want_more:
  title: "Want more depth?"
  subtitle: "Master game theory and oligopoly with Econos."
  primary_href: /edexcel_a/theme-3/game-theory/learn-it
  primary_label: "Explore the full game theory topic"
---

::: section eyebrow="Read it in 90 seconds" color="green" icon="bulb"

## The payoff matrix is a 2x2 grid of paired payoffs

Game theory looks intimidating until you see that the diagram is just a table. Two firms, each choosing between two strategies — say **collude** (keep prices high) or **compete** (cut prices) — produce four possible outcomes, one per cell.

Each cell holds **two** numbers: the payoff to the **row** firm and the payoff to the **column** firm. The universal convention is **(Row firm's payoff, Column firm's payoff)** — row first, column second. Before you analyse anything, check the matrix's labelling so you know whose number is whose.

That's the whole structure. Reading the matrix means asking, for each firm: *given what the other firm might do, what's my best move?* Do that for both and you've found the dominant strategies and the equilibrium.

:::

::: econos-diagram svgKey="prisonersDilemmaInteractive" state="efficiency" label="The prisoner's dilemma payoff matrix and the Nash equilibrium two firms reach by each acting in self-interest." caption="The prisoner's dilemma payoff matrix and the Nash equilibrium two firms reach by each acting in self-interest."
:::

::: section eyebrow="How to read it" color="blue" icon="target"

## Finding each firm's dominant strategy

The key skill is testing for a **dominant strategy** — one that pays more *whatever the rival does*. You do it one firm at a time, holding the rival's choice fixed.

Take **Firm A**. Suppose Firm B colludes (left column): A earns 10 by colluding but 14 by competing — so A prefers to compete. Now suppose Firm B competes (right column): A earns 2 by colluding but 5 by competing — so A prefers to compete again. Competing wins in *both* columns, so **competing is A's dominant strategy**.

By symmetry, run the same check for **Firm B** down each row: B earns more by competing whether A colludes or competes. So competing dominates for B too.

The reading move that earns marks: state the comparison explicitly. "Whatever B does, A's payoff from competing exceeds its payoff from colluding, so A competes." Show the working, don't just assert the answer.

:::

::: section eyebrow="The equilibrium" color="purple" icon="scale"

## Locating the Nash equilibrium

The **Nash equilibrium** is the cell where **neither firm can improve its own payoff by switching strategy on its own**, given what the other is doing. It's the stable resting point of the game.

Because competing dominates for both firms, both compete — the bottom-right cell, (5, 5). Check it's an equilibrium: if A unilaterally switched to collude, its payoff would fall from 5 to 2 (B is still competing), so A won't move; the same logic holds for B. Neither has an incentive to deviate, so (5, 5) is the Nash equilibrium.

Here's the punchline examiners want: the Nash equilibrium (5, 5) is **worse for both firms** than the collude–collude outcome (10, 10). The pursuit of individual self-interest produces a jointly inferior result. That tension between the privately rational choice and the collectively optimal one is the whole point of the **prisoner's dilemma**.

:::

::: section eyebrow="Why it matters for oligopoly" color="pink" icon="globe"

## What the matrix tells you about real markets

The prisoner's dilemma explains why **cartels and collusion are inherently unstable**. A handful of firms in an oligopoly would jointly maximise profit by colluding to keep prices high — that's the (10, 10) cell. But each firm individually has a dominant strategy to undercut the others and capture more market share — the road to (5, 5).

That's why explicit price-fixing needs enforcement to survive, and why competition authorities like the CMA watch oligopolies closely: the dominant-strategy logic constantly tempts firms to break ranks. Repeated games (the firms meet again and again), tit-for-tat retaliation, and price-leadership signalling are the real-world devices that can sometimes sustain collusion despite the one-shot dilemma. Naming those as the conditions under which the (10, 10) outcome *can* hold is a clean evaluation point.

:::

::: section eyebrow="Earning the diagram marks" color="green" icon="cap"

## The checklist examiners mark against

- **State the labelling** — (Row firm, Column firm) — and which number is whose before analysing.
- **Test for a dominant strategy** for each firm by comparing payoffs across the rival's two choices, and show the comparison.
- **Locate the Nash equilibrium** as the cell where neither firm gains by switching alone, and check it.
- **Contrast it with the collusive outcome** — the equilibrium is worse for both, which is the prisoner's dilemma.
- **Link to oligopoly** — explain why this makes collusion unstable without enforcement or repetition.

:::
