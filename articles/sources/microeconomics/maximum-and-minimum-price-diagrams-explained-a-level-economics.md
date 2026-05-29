---
title: "Maximum and minimum price diagrams explained — how to draw price controls (A-level economics)"
description: "Draw price ceiling and price floor diagrams for A-level economics. Where to put P_max and P_min, why one causes shortage and the other surplus, and the marks examiners reward."
lede: "Where to draw a price ceiling versus a price floor, why a max price below equilibrium creates a shortage and a min price above it creates a surplus, and how to label the gap."
theme: "Microeconomics"
spec:
  edexcel_a: "1.4.1"
  edexcel_b: "1.5.2"
  aqa: "3.1.5.8"
  ocr: "2.11"
keywords: [maximum price diagram, minimum price diagram, price ceiling, price floor, price controls, excess demand, excess supply, shortage, surplus, A-level economics diagram]
read_minutes: 7
status: live
published: 2026-05-29
modified: 2026-05-29
spa_topic: government-intervention-in-markets
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics", href: "/articles/?theme=micro" }
  - { label: "Max and min price diagrams" }

friction:
  - "Most students draw the price control line but forget that a binding maximum price must sit BELOW equilibrium and a binding minimum price ABOVE it. Draw them on the wrong side of the equilibrium and the policy does nothing — there's no shortage or surplus to analyse, and the diagram earns nothing."
  - "And almost everyone marks the gap wrong. At a max price the shortage is measured along the price-control line — quantity demanded minus quantity supplied. Reading it off the wrong axis, or labelling a surplus where there's a shortage, is the classic lost mark."

glance:
  - { label: "Maximum price (ceiling)", value: "A legal cap set BELOW equilibrium. At that low price, quantity demanded exceeds quantity supplied — a shortage (excess demand)." }
  - { label: "Minimum price (floor)", value: "A legal floor set ABOVE equilibrium. At that high price, quantity supplied exceeds quantity demanded — a surplus (excess supply)." }
  - { label: "The binding rule", value: "A ceiling only bites if it's below equilibrium; a floor only bites if it's above it. On the wrong side the control is non-binding and nothing happens." }
  - { label: "Reading the gap", value: "Measure the shortage or surplus horizontally along the control line — the distance between quantity demanded and quantity supplied at the controlled price." }
glance_cta:
  href: /edexcel_a/theme-1/government-intervention-in-markets/learn-it
  label: "Want more depth? Explore the full topic →"


want_more:
  title: "Want more depth?"
  subtitle: "Master price controls with Econos."
  primary_href: /edexcel_a/theme-1/government-intervention-in-markets/learn-it
  primary_label: "Explore the full government intervention topic"
---

::: section eyebrow="Draw it in 90 seconds" color="green" icon="bulb"

## Two controls, two diagrams, opposite problems

Both diagrams start from the same base: demand sloping down, supply sloping up, meeting at equilibrium price Pe and quantity Qe. Axes are **price (P)** vertical, **quantity (Q)** horizontal.

A **maximum price** (price ceiling) is a legal cap drawn as a horizontal line **below** Pe. At that artificially low price, buyers want more (quantity demanded rises) but sellers offer less (quantity supplied falls). The result is a **shortage** — excess demand.

A **minimum price** (price floor) is a legal floor drawn as a horizontal line **above** Pe. At that artificially high price, sellers offer more but buyers want less. The result is a **surplus** — excess supply.

The single rule that organises everything: **a ceiling bites below equilibrium and creates a shortage; a floor bites above equilibrium and creates a surplus.** Get the line on the wrong side and the control is non-binding — there's nothing to analyse.

:::

::: diagram caption="A **maximum price (P_max)** set below equilibrium. At the cap, quantity demanded (Qd) exceeds quantity supplied (Qs) — the horizontal gap is the **shortage** (excess demand)."
<svg class="maxprice-svg" viewBox="0 0 680 440" width="680" height="440" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" role="img" aria-label="A supply and demand diagram with a maximum price line drawn below the equilibrium. At the capped price quantity demanded exceeds quantity supplied, leaving a shortage shown as the horizontal gap between the supply and demand curves.">
  <rect width="680" height="440" fill="#F8FAFC" rx="12"/>
  <text x="340" y="36" text-anchor="middle" font-size="17" font-weight="800" fill="#0B1426">Maximum price (price ceiling)</text>
  <!-- axes -->
  <line x1="90" y1="70" x2="90" y2="380" stroke="#475569" stroke-width="2"/>
  <line x1="90" y1="380" x2="620" y2="380" stroke="#475569" stroke-width="2"/>
  <text x="70" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">P</text>
  <text x="615" y="405" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">Q</text>
  <!-- demand curve: top-left to bottom-right -->
  <line x1="120" y1="100" x2="560" y2="360" stroke="#2563EB" stroke-width="3"/>
  <text x="568" y="358" font-size="14" font-weight="800" fill="#2563EB">D</text>
  <!-- supply curve: bottom-left to top-right -->
  <line x1="120" y1="360" x2="560" y2="100" stroke="#10B981" stroke-width="3"/>
  <text x="568" y="108" font-size="14" font-weight="800" fill="#10B981">S</text>
  <!-- equilibrium at intersection (340,230) -->
  <line x1="90" y1="230" x2="340" y2="230" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="340" y1="230" x2="340" y2="380" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="340" cy="230" r="4.5" fill="#0B1426"/>
  <text x="56" y="234" font-size="13" font-weight="700" fill="#0B1426">Pe</text>
  <text x="332" y="398" font-size="13" font-weight="700" fill="#0B1426">Qe</text>
  <!-- max price line below equilibrium at y=300 -->
  <line x1="90" y1="300" x2="500" y2="300" stroke="#E11D48" stroke-width="2.5"/>
  <text x="44" y="304" font-size="13" font-weight="800" fill="#E11D48">P_max</text>
  <!-- Qs where supply meets y=300: supply line from (120,360)->(560,100), at y=300 x=222 -->
  <line x1="222" y1="300" x2="222" y2="380" stroke="#10B981" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="210" y="398" font-size="12.5" font-weight="700" fill="#047857">Qs</text>
  <!-- Qd where demand meets y=300: demand from (120,100)->(560,360), at y=300 x=458 -->
  <line x1="458" y1="300" x2="458" y2="380" stroke="#2563EB" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="446" y="398" font-size="12.5" font-weight="700" fill="#1D4ED8">Qd</text>
  <!-- shortage bracket along the control line -->
  <line x1="222" y1="300" x2="458" y2="300" stroke="#F39E0B" stroke-width="6" stroke-linecap="round"/>
  <text x="340" y="288" text-anchor="middle" font-size="13" font-weight="800" fill="#B45309">Shortage (excess demand)</text>
</svg>
:::

::: diagram caption="A **minimum price (P_min)** set above equilibrium. At the floor, quantity supplied (Qs) exceeds quantity demanded (Qd) — the horizontal gap is the **surplus** (excess supply)."
<svg class="minprice-svg" viewBox="0 0 680 440" width="680" height="440" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" role="img" aria-label="A supply and demand diagram with a minimum price line drawn above the equilibrium. At the floor price quantity supplied exceeds quantity demanded, leaving a surplus shown as the horizontal gap between the demand and supply curves.">
  <rect width="680" height="440" fill="#F8FAFC" rx="12"/>
  <text x="340" y="36" text-anchor="middle" font-size="17" font-weight="800" fill="#0B1426">Minimum price (price floor)</text>
  <!-- axes -->
  <line x1="90" y1="70" x2="90" y2="380" stroke="#475569" stroke-width="2"/>
  <line x1="90" y1="380" x2="620" y2="380" stroke="#475569" stroke-width="2"/>
  <text x="70" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">P</text>
  <text x="615" y="405" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">Q</text>
  <!-- demand curve -->
  <line x1="120" y1="100" x2="560" y2="360" stroke="#2563EB" stroke-width="3"/>
  <text x="568" y="358" font-size="14" font-weight="800" fill="#2563EB">D</text>
  <!-- supply curve -->
  <line x1="120" y1="360" x2="560" y2="100" stroke="#10B981" stroke-width="3"/>
  <text x="568" y="108" font-size="14" font-weight="800" fill="#10B981">S</text>
  <!-- equilibrium at (340,230) -->
  <line x1="90" y1="230" x2="340" y2="230" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="340" y1="230" x2="340" y2="380" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="340" cy="230" r="4.5" fill="#0B1426"/>
  <text x="56" y="234" font-size="13" font-weight="700" fill="#0B1426">Pe</text>
  <text x="332" y="398" font-size="13" font-weight="700" fill="#0B1426">Qe</text>
  <!-- min price line above equilibrium at y=160 -->
  <line x1="90" y1="160" x2="500" y2="160" stroke="#E11D48" stroke-width="2.5"/>
  <text x="44" y="164" font-size="13" font-weight="800" fill="#E11D48">P_min</text>
  <!-- Qd where demand meets y=160: demand (120,100)->(560,360), at y=160 x=222 -->
  <line x1="222" y1="160" x2="222" y2="380" stroke="#2563EB" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="210" y="398" font-size="12.5" font-weight="700" fill="#1D4ED8">Qd</text>
  <!-- Qs where supply meets y=160: supply (120,360)->(560,100), at y=160 x=458 -->
  <line x1="458" y1="160" x2="458" y2="380" stroke="#10B981" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="446" y="398" font-size="12.5" font-weight="700" fill="#047857">Qs</text>
  <!-- surplus bracket along the control line -->
  <line x1="222" y1="160" x2="458" y2="160" stroke="#F39E0B" stroke-width="6" stroke-linecap="round"/>
  <text x="340" y="148" text-anchor="middle" font-size="13" font-weight="800" fill="#B45309">Surplus (excess supply)</text>
</svg>
:::

::: section eyebrow="How to read the gap" color="blue" icon="target"

## Measure the shortage or surplus along the control line

The mistake to avoid is reading the gap vertically or off the price axis. The shortage or surplus is always **horizontal** — measured along the price-control line, between where it crosses demand and where it crosses supply.

For a **maximum price**, follow the cap rightwards. It meets supply first (at the low quantity sellers will offer, Qs) and demand further along (at the high quantity buyers want, Qd). The distance Qd − Qs is the **shortage**.

For a **minimum price**, follow the floor rightwards. It meets demand first (the low quantity buyers want, Qd) and supply further along (the high quantity sellers offer, Qs). The distance Qs − Qd is the **surplus**.

Mark that horizontal distance explicitly and label it "shortage / excess demand" or "surplus / excess supply". That single labelled bracket is what turns a drawn line into an answer the examiner can mark.

:::

::: section eyebrow="The exam chain" color="purple" icon="scale"

## Why the gap appears, step by step

The analysis marks come from explaining the *mechanism*, not just pointing at the gap.

For a ceiling: price is forced below equilibrium → at that lower price the quantity demanded rises *and* the quantity supplied falls → the two no longer match → a shortage opens up → the market can no longer ration by price, so it rations by queues, waiting lists, or informal (black) markets. Rent controls are the standard worked case.

For a floor: price is forced above equilibrium → quantity supplied rises *and* quantity demanded falls → a surplus opens up → someone (often the government) must buy up or store the excess, or the surplus goes unsold. Agricultural minimum prices and the alcohol minimum unit price are the standard cases.

The size of either gap depends on **elasticity**: flatter (more elastic) curves widen the gap for the same price control; steeper (inelastic) curves narrow it. Drawing elastic versus inelastic versions is a clean evaluation move.

:::

::: section eyebrow="Earning the diagram marks" color="green" icon="cap"

## The checklist examiners mark against

- **Label the axes** P and Q and the curves S and D, with equilibrium Pe / Qe marked.
- **Put the control on the right side**: P_max *below* equilibrium, P_min *above* it. A binding control or it does nothing.
- **Mark Qd and Qs** where the control line crosses each curve.
- **Bracket the horizontal gap** and label it shortage (excess demand) for a ceiling or surplus (excess supply) for a floor.
- **Explain the mechanism** — how the forced price drives Qd and Qs apart — rather than just naming the gap.

:::
