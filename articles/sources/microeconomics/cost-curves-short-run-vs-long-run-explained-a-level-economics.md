---
title: "Cost curves — short-run vs long-run explained for A-level economics"
description: "How to draw and read cost curves for A-level economics: U-shaped SAC and SMC, why SMC cuts SAC at its minimum, the LRAC envelope and minimum efficient scale."
lede: "Why short-run average cost is U-shaped, why the marginal curve always cuts the average at its lowest point, how the long-run envelope wraps a family of SAC curves, and the labels that earn the marks."
theme: "Microeconomics"
spec:
  edexcel_a: "3.3.2"
  edexcel_b: "1.6.1"
  aqa: "4.1.4.4"
  ocr: "3.2"
keywords: [cost curves, short run long run, SAC, SMC, LRAC envelope, minimum efficient scale, average cost, marginal cost, returns to scale, A-level economics]
read_minutes: 8
status: live
published: 2026-05-29
modified: 2026-05-29
spa_topic: costs
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics" }
  - { label: "Cost curves: short run vs long run" }

friction:
  - "Students draw the marginal cost curve crossing average cost somewhere on the way down or up — anywhere but the bottom. The marginal curve ALWAYS cuts the average at the average's lowest point. That's not a convention; it's arithmetic."
  - "And the long-run curve confuses everyone. The LRAC isn't a separate U drawn from scratch — it's the lower boundary, the 'envelope', that just touches a whole family of short-run average cost curves, one for each possible plant size."

glance:
  - { label: "Axes", value: "Cost per unit (£) on the vertical axis, output (quantity) on the horizontal axis." }
  - { label: "Short run", value: "At least one factor fixed. SAC is U-shaped from diminishing returns; SMC cuts SAC at its minimum." }
  - { label: "Long run", value: "All factors variable. LRAC is the envelope tangent to every SAC curve — one SAC per plant size." }
  - { label: "MES", value: "Minimum efficient scale: the lowest output at which LRAC reaches its minimum — the smallest size that exhausts economies of scale." }
glance_cta:
  href: /edexcel_a/theme-3/costs/learn-it
  label: "Want the full costs topic? Explore it →"

faq:
  - q: "Why does marginal cost cut average cost at its minimum point?"
    a: "It is pure averaging arithmetic. While the marginal cost of the next unit is below the current average, it drags the average down; once marginal cost rises above the average, it pulls the average up. The average can only stop falling and start rising at the point where marginal equals average — so the SMC curve must cross the SAC curve exactly at the bottom of the U."
  - q: "What is the difference between the short-run and long-run average cost curve?"
    a: "In the short run at least one factor (usually capital, the plant size) is fixed, so SAC is U-shaped because of the law of diminishing marginal returns. In the long run every factor is variable, so the firm can choose any plant size. The long-run average cost curve, LRAC, is the envelope that traces the lowest achievable cost across all those plant sizes — it wraps under the family of SAC curves."
  - q: "What is minimum efficient scale on the cost diagram?"
    a: "Minimum efficient scale (MES) is the lowest level of output at which the LRAC curve reaches its minimum — the smallest plant size at which all economies of scale have been exhausted. To the left of MES the firm still enjoys falling long-run average cost (economies of scale); a flat-bottomed LRAC means firms of many sizes can compete on equal cost terms."

want_more:
  title: "Want more depth?"
  subtitle: "Master costs with Econos."
  primary_href: /edexcel_a/theme-3/costs/learn-it
  primary_label: "Explore the full Costs topic"
---

::: section eyebrow="Read it in 90 seconds" color="green" icon="bulb"

## Two diagrams, one logic

Cost analysis splits into the short run (one factor fixed) and the long run (everything variable), and each has its own diagram.

- **Short run.** A U-shaped **SAC** (short-run average cost) and an **SMC** (short-run marginal cost) that cuts SAC at the bottom of the U. The U-shape comes from the law of diminishing marginal returns: adding more of the variable factor to a fixed factor eventually drives marginal cost up.
- **Long run.** A family of SAC curves — one for each plant size — with the **LRAC** drawn as the *envelope* just touching each one from below. The LRAC's shape reflects returns to scale: economies of scale on the way down, the **minimum efficient scale** at the bottom, diseconomies if it turns back up.

The recurring exam error sits in both diagrams: in the short run, drawing SMC crossing SAC away from the minimum; in the long run, drawing LRAC as a fresh U instead of a tangent envelope. Fix those two and the rest is labelling.

:::

::: diagram caption="Left: the short-run cost diagram. SAC is U-shaped and SMC cuts it at its minimum (the only point where marginal equals average). Right: the long-run envelope. The LRAC just touches a family of short-run average cost curves, one per plant size, and reaches its minimum at the minimum efficient scale (MES)."
<svg viewBox="0 0 720 420" class="cost-curves-svg" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" role="img" aria-label="Two panels of cost curves. Left panel shows a U-shaped short-run average cost curve SAC and a short-run marginal cost curve SMC that crosses SAC at the bottom of the U. Right panel shows three short-run average cost curves of increasing plant size and a long-run average cost LRAC envelope that lies just below and tangent to each of them, reaching its minimum at the minimum efficient scale labelled MES.">
  <rect width="720" height="420" fill="#F8FAFC" rx="12"/>
  <!-- LEFT PANEL: short run -->
  <text x="180" y="34" text-anchor="middle" font-size="14" font-weight="800" fill="#0B1426">Short run</text>
  <line x1="60" y1="50" x2="60" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <line x1="60" y1="350" x2="340" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <text transform="translate(34,210) rotate(-90)" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Cost per unit (£)</text>
  <text x="330" y="376" text-anchor="end" font-size="12" font-weight="700" fill="#475569">Output</text>
  <!-- SAC U-shaped -->
  <path d="M90,150 Q190,330 210,250 T320,120" fill="none" stroke="#2563EB" stroke-width="3"/>
  <text x="300" y="118" font-size="13" font-weight="800" fill="#2563EB">SAC</text>
  <!-- SMC steeper U, cuts SAC at its min -->
  <path d="M95,300 Q170,290 200,250 T310,80" fill="none" stroke="#E11D48" stroke-width="3"/>
  <text x="298" y="84" font-size="13" font-weight="800" fill="#E11D48">SMC</text>
  <!-- min of SAC at approx (200,250); SMC passes through same point -->
  <circle cx="200" cy="250" r="4.5" fill="#0B1426"/>
  <line x1="60" y1="250" x2="200" y2="250" stroke="#475569" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="200" y1="250" x2="200" y2="350" stroke="#475569" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="208" y="244" font-size="11" font-weight="700" fill="#0B1426">SMC cuts SAC</text>
  <text x="208" y="258" font-size="11" font-weight="700" fill="#0B1426">at min SAC</text>
  <text x="200" y="368" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Q&#8321;</text>
  <!-- divider -->
  <line x1="372" y1="50" x2="372" y2="360" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 5"/>
  <!-- RIGHT PANEL: long run -->
  <text x="545" y="34" text-anchor="middle" font-size="14" font-weight="800" fill="#0B1426">Long run</text>
  <line x1="410" y1="50" x2="410" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <line x1="410" y1="350" x2="700" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <text transform="translate(384,210) rotate(-90)" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Cost per unit (£)</text>
  <text x="690" y="376" text-anchor="end" font-size="12" font-weight="700" fill="#475569">Output</text>
  <!-- family of SAC curves (small, medium, large plant) -->
  <path d="M430,150 Q470,250 490,210 T540,170" fill="none" stroke="#CBD5E1" stroke-width="2"/>
  <path d="M500,160 Q545,240 560,200 T620,165" fill="none" stroke="#CBD5E1" stroke-width="2"/>
  <path d="M580,165 Q625,250 645,210 T695,185" fill="none" stroke="#CBD5E1" stroke-width="2"/>
  <text x="445" y="145" font-size="10" font-weight="700" fill="#64748B">SAC&#8321;</text>
  <text x="555" y="155" font-size="10" font-weight="700" fill="#64748B">SAC&#8322;</text>
  <text x="640" y="160" font-size="10" font-weight="700" fill="#64748B">SAC&#8323;</text>
  <!-- LRAC envelope, tangent below the family, min around x=560 -->
  <path d="M430,180 Q500,230 560,210 Q630,222 695,210" fill="none" stroke="#10B981" stroke-width="3.5"/>
  <text x="612" y="240" font-size="13" font-weight="800" fill="#047857">LRAC</text>
  <!-- MES at min of LRAC approx (560,210) -->
  <circle cx="560" cy="210" r="4.5" fill="#047857"/>
  <line x1="560" y1="210" x2="560" y2="350" stroke="#475569" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="560" y="368" text-anchor="middle" font-size="11" font-weight="800" fill="#0B1426">MES</text>
  <text x="430" y="300" font-size="11" font-weight="700" fill="#047857">economies</text>
  <text x="430" y="314" font-size="11" font-weight="700" fill="#047857">of scale</text>
</svg>
:::

::: section eyebrow="Why SAC is U-shaped" color="purple" icon="target"

## The short run, factor by factor

In the short run at least one factor of production is fixed — usually capital, the size of the plant. The firm can only vary the others, typically labour and raw materials.

As output rises from low levels, the fixed factor is spread over more units, so average cost falls — there is plenty of capital per worker, and each extra worker is productive. But because capital is fixed, adding ever more of the variable factor eventually runs into the **law of diminishing marginal returns**: each additional worker has less capital to work with, the marginal product falls, and the marginal cost of output rises. Average cost is dragged up in turn.

That two-sided story — spreading the fixed cost pulls SAC down, diminishing returns push it back up — is what gives **SAC** its U-shape. Write the cause (diminishing marginal returns), not just the shape, to convert an AO1 mark into AO2.

:::

::: section eyebrow="The averaging rule" color="blue" icon="scale"

## Why SMC always cuts SAC at the bottom

The single most testable feature of the short-run diagram is *where* the marginal curve crosses the average. The answer is always: at the minimum of the average. This is arithmetic, not artistic licence.

Think of a cricket batting average. If your next innings (the *marginal* score) is below your current average, your average falls. If the next innings is above, your average rises. Your average can only be at its lowest exactly when the next innings equals it.

Costs behave identically. While **SMC** lies below **SAC**, each extra unit costs less than the running average, so SAC falls. Once SMC rises above SAC, each extra unit costs more than the average, so SAC rises. The average therefore turns at precisely the output where SMC = SAC — the bottom of the U. Draw SMC cutting SAC anywhere else and you have contradicted the definition of an average. (The same logic puts SMC through the minimum of short-run *average variable* cost too.)

:::

::: section eyebrow="The long-run envelope" color="pink" icon="globe"

## Wrapping a family of plant sizes

In the long run, *every* factor is variable — the firm can build any size of plant it likes. Each possible plant size has its own short-run average cost curve. The diagram on the right shows three: SAC₁ (small), SAC₂ (medium), SAC₃ (large).

For any given output, the firm will eventually choose the plant size that produces it most cheaply. Join up the lowest achievable cost at every output and you trace the **LRAC** — the *envelope* curve. It does not pass through the minimum of each SAC; instead it lies tangent to each one, touching it from below at the output for which that plant size is optimal. That tangency point is the heart of the diagram, and the reason LRAC is sometimes called the "planning curve".

The LRAC's own shape reflects **returns to scale**. Falling LRAC = economies of scale (bulk-buying, specialisation, spreading indivisible costs). The lowest point is the **minimum efficient scale (MES)** — the smallest output that exhausts those economies. If LRAC eventually rises, that is diseconomies of scale (coordination and communication problems as the firm grows unwieldy). A long flat bottom means firms of many sizes can coexist at the same cost.

:::

::: section eyebrow="Earning the marks" color="green" icon="cap"

## The diagram checklist examiners reward

- **Label the axes:** cost per unit (£) up, output along.
- **SAC U-shaped**, and say *why* — diminishing marginal returns to the variable factor.
- **SMC cuts SAC at its minimum.** Never on the slope. This is the most common and most penalised slip.
- **LRAC as an envelope**, tangent to (not through the minimum of) a family of SAC curves — draw at least three SAC curves to make the point.
- **Mark MES** at the lowest point of LRAC, and link the downward portion to economies of scale.
- **Keep short run and long run on separate axes** (or clearly separate panels). Mixing them on one diagram is where answers get muddled.

:::
