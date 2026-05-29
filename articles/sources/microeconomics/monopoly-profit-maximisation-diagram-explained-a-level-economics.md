---
title: "The monopoly profit-maximisation diagram explained — A-level economics"
description: "How to draw and read the monopoly diagram for A-level economics: AR=D, MR, MC, AC, the MC=MR rule, the supernormal profit rectangle and the deadweight loss."
lede: "Where the curves go, why MR is steeper than AR, the MC=MR rule that fixes Q* then P*, how to shade supernormal profit correctly, and the diagram slips that cost marks."
theme: "Microeconomics"
spec:
  edexcel_a: "3.4.5"
  edexcel_b: "4.1.1"
  aqa: "4.1.5.6"
  ocr: "4.2"
keywords: [monopoly diagram, profit maximisation, MC=MR, supernormal profit, deadweight loss, average revenue, marginal revenue, A-level economics, how to draw monopoly]
read_minutes: 8
status: live
published: 2026-05-29
modified: 2026-05-29
spa_topic: monopoly
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics" }
  - { label: "Monopoly profit-maximisation diagram" }

friction:
  - "Most students can recite 'a monopolist profit-maximises where MC=MR' but then read the wrong price off the diagram — they take the price at the MC=MR intersection instead of going up to the AR curve. The profit-maximising price is always on the demand curve, never on MR."
  - "The other recurring slip is the profit rectangle. Supernormal profit is the gap between price and average cost AT the profit-maximising output, drawn as a box — not the triangle, and not the area under MR."

glance:
  - { label: "Axes", value: "Price and cost (£) on the vertical axis, quantity (output) on the horizontal axis." }
  - { label: "Profit-max rule", value: "Produce where MC = MR. That fixes Q*; read the price up on the AR=D curve to get P*." }
  - { label: "Supernormal profit", value: "The rectangle between P* and AC at Q* — (P* − AC) × Q*. Shaded only when P* sits above AC." }
  - { label: "The MR trap", value: "MR is twice as steep as AR for a linear demand curve, so it hits the horizontal axis halfway along the demand curve." }
glance_cta:
  href: /edexcel_a/theme-3/monopoly/learn-it
  label: "Want the full monopoly topic? Explore it →"

faq:
  - q: "How do you find the monopoly price on the diagram?"
    a: "Find the output where MC crosses MR — that is the profit-maximising quantity Q*. Then draw a vertical line up from Q* until it meets the AR=D (demand) curve, and read across to the price axis. That point on demand is the price P*. The price is never read off the MR curve."
  - q: "Why is MR below AR for a monopoly?"
    a: "A monopolist faces a downward-sloping demand curve, so to sell one more unit it must cut the price on every unit, not just the last one. The revenue gained on the extra unit is partly offset by the lower price on all previous units, so marginal revenue is always below average revenue (the price). For a straight-line demand curve MR has twice the gradient and hits the quantity axis halfway along AR."
  - q: "How do you show deadweight loss on the monopoly diagram?"
    a: "Compare the monopoly output (where MC=MR) with the allocatively efficient output (where MC=AR, i.e. price=marginal cost). The monopolist restricts output below the efficient level, and the welfare triangle between the demand and MC curves over that missing output is the deadweight loss."

want_more:
  title: "Want more depth?"
  subtitle: "Master monopoly with Econos."
  primary_href: /edexcel_a/theme-3/monopoly/learn-it
  primary_label: "Explore the full Monopoly topic"
---

::: section eyebrow="Read it in 90 seconds" color="green" icon="bulb"

## The diagram is a four-step recipe

The monopoly diagram looks busy because it carries four curves, but you draw and read it in a fixed order. Get the order right and the marks follow.

1. **Axes.** Price and cost (£) up the side, quantity (output) along the bottom.
2. **Revenue curves.** A downward-sloping **AR=D** (the demand curve the monopolist faces, because it is the whole market) and a steeper **MR** below it.
3. **Cost curves.** A U-shaped **AC** and a **MC** that cuts AC at the bottom of the U.
4. **Equilibrium.** Find where **MC=MR** → that fixes the profit-maximising output **Q\***. Go straight up to the AR curve to read the price **P\***.

Everything else — the profit rectangle, the deadweight loss — is read off those four curves. The single most common error is reading P\* off the MR curve instead of the demand curve. The firm sells at the price consumers will pay, and that price lives on AR=D.

:::

::: diagram caption="The monopoly profit-maximisation diagram. Output is set where MC=MR (Q*), then the price P* is read up on the AR=D curve. The shaded green rectangle is supernormal profit: (P* − AC) × Q*. The rose triangle is the deadweight loss versus the allocatively efficient output where price would equal MC."
<svg viewBox="0 0 700 480" class="monopoly-profit-svg" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" role="img" aria-label="Monopoly profit-maximisation diagram. Downward-sloping average revenue equals demand curve, a steeper marginal revenue curve below it, a U-shaped average cost curve and a marginal cost curve. Output Q-star is set where marginal cost crosses marginal revenue. Price P-star is read up on the demand curve, above average cost, so the firm earns supernormal profit shown as a shaded rectangle. A deadweight loss triangle marks the output the monopolist withholds compared with the allocatively efficient point where price equals marginal cost.">
  <rect width="700" height="480" fill="#F8FAFC" rx="12"/>
  <!-- axes -->
  <line x1="90" y1="40" x2="90" y2="410" stroke="#CBD5E1" stroke-width="2"/>
  <line x1="90" y1="410" x2="650" y2="410" stroke="#CBD5E1" stroke-width="2"/>
  <text x="64" y="46" font-size="13" font-weight="700" fill="#475569" text-anchor="middle">£</text>
  <text transform="translate(30,225) rotate(-90)" text-anchor="middle" font-size="13" font-weight="700" fill="#475569">Price / Cost</text>
  <text x="640" y="438" text-anchor="end" font-size="13" font-weight="700" fill="#475569">Quantity</text>
  <!-- AR = D demand curve -->
  <line x1="110" y1="70" x2="600" y2="400" stroke="#2563EB" stroke-width="3"/>
  <text x="560" y="372" font-size="14" font-weight="800" fill="#2563EB">AR = D</text>
  <!-- MR: twice the gradient, hits axis halfway -->
  <line x1="110" y1="70" x2="355" y2="400" stroke="#0EA5E9" stroke-width="2.5" stroke-dasharray="2 0"/>
  <text x="300" y="330" font-size="14" font-weight="800" fill="#0EA5E9">MR</text>
  <!-- AC U-shaped -->
  <path d="M120,250 Q260,360 360,300 T600,200" fill="none" stroke="#F39E0B" stroke-width="3"/>
  <text x="600" y="195" font-size="14" font-weight="800" fill="#B45309">AC</text>
  <!-- MC cuts AC at its minimum -->
  <path d="M150,360 Q280,340 360,250 T560,90" fill="none" stroke="#E11D48" stroke-width="3"/>
  <text x="540" y="92" font-size="14" font-weight="800" fill="#E11D48">MC</text>
  <!-- key coordinates -->
  <!-- Q* where MC=MR. MC=MR intersection approx (300,300). Q* x=300 -->
  <!-- P* read up on AR=D at x=300: AR y at x=300 => slope (400-70)/(600-110)=330/490=0.673; y=70+0.673*(300-110)=70+128=198 -->
  <!-- AC at x=300 approx y=300 -->
  <!-- supernormal profit rectangle: P* (y=198) to AC (y=300), from x=90 to x=300 -->
  <rect x="90" y="198" width="210" height="102" fill="#10B981" fill-opacity="0.22" stroke="#10B981" stroke-width="1.5"/>
  <text x="150" y="252" font-size="13" font-weight="800" fill="#047857">Supernormal</text>
  <text x="150" y="270" font-size="13" font-weight="800" fill="#047857">profit</text>
  <!-- vertical from Q* -->
  <line x1="300" y1="198" x2="300" y2="410" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- horizontal P* -->
  <line x1="90" y1="198" x2="300" y2="198" stroke="#0B1426" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- horizontal AC level -->
  <line x1="90" y1="300" x2="300" y2="300" stroke="#475569" stroke-width="1" stroke-dasharray="3 4"/>
  <!-- MC=MR marker -->
  <circle cx="300" cy="300" r="4.5" fill="#0B1426"/>
  <text x="312" y="296" font-size="12" font-weight="700" fill="#0B1426">MC = MR</text>
  <!-- P* marker on AR -->
  <circle cx="300" cy="198" r="4.5" fill="#2563EB"/>
  <!-- labels P*, Q*, AC -->
  <text x="84" y="202" text-anchor="end" font-size="14" font-weight="800" fill="#0B1426">P*</text>
  <text x="84" y="304" text-anchor="end" font-size="13" font-weight="700" fill="#475569">AC</text>
  <text x="300" y="430" text-anchor="middle" font-size="14" font-weight="800" fill="#0B1426">Q*</text>
  <!-- allocatively efficient output where MC=AR (price=MC), approx (430,260) -->
  <circle cx="430" cy="260" r="4.5" fill="#E11D48"/>
  <line x1="430" y1="260" x2="430" y2="410" stroke="#E11D48" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="430" y="430" text-anchor="middle" font-size="12" font-weight="700" fill="#E11D48">Q(comp)</text>
  <!-- deadweight loss triangle between AR, MC over Q* to Qcomp -->
  <polygon points="300,198 300,300 430,260" fill="#E11D48" fill-opacity="0.25" stroke="#E11D48" stroke-width="1.2"/>
  <text x="360" y="246" font-size="11" font-weight="800" fill="#9F1239">DWL</text>
</svg>
:::

::: section eyebrow="Why MR sits below AR" color="purple" icon="target"

## The revenue curves, and the gradient trap

A monopolist *is* the market, so the demand curve it faces slopes downward — to sell more, it must lower the price. That single fact generates both revenue curves.

**AR=D.** Average revenue is total revenue divided by quantity, which equals the price. So the average revenue curve is just the demand curve relabelled. Mark it **AR=D** to bank the AO1 point in one stroke.

**MR below AR.** To sell one more unit, the monopolist cuts the price on *every* unit, not only the last. The extra unit adds revenue, but the price cut subtracts revenue on all the units it could have sold dearer. The net addition — marginal revenue — is therefore always less than the price. For a straight-line demand curve, MR has exactly twice the gradient, so it reaches the quantity axis halfway along the demand curve. Drawing MR parallel to AR, or above it, is an instant diagram error.

A neat self-check: if MR were equal to AR, you would be describing a price-taker (perfect competition), not a monopoly. The wedge between them is the whole point.

:::

::: section eyebrow="Reading the profit box" color="blue" icon="scale"

## Locating output, price and supernormal profit

Work strictly in order.

**Output first.** Drop to where **MC cuts MR** from below. The output beneath that intersection is **Q\***. Producing one more unit would add more to cost than to revenue; one fewer would forgo profit. So MC=MR is the profit-maximising condition — higher MR ➝ keep expanding; MC overtaking MR ➝ stop.

**Price second.** From Q\*, travel vertically *up to the AR=D curve* and read across to the axis. That is **P\***. The single biggest exam slip is stopping at the MC=MR point and reading the price there — that is far too low, because it ignores what consumers are actually willing to pay.

**Profit third.** Supernormal profit is `(P* − AC) × Q*`, where AC is read at Q\*. On the diagram it is the **rectangle** bounded by P\* on top, the AC level on the bottom, the price axis on the left and the vertical from Q\* on the right. Shade it. If AC sat *above* P\*, the box would represent a loss, and the firm would only continue in the short run while price covers average variable cost.

:::

::: section eyebrow="Where the monopoly costs society" color="pink" icon="globe"

## Adding deadweight loss

To show why monopoly is allocatively inefficient, mark the output where **price equals marginal cost** — where MC crosses AR=D, labelled `Q(comp)` on the diagram. That is the allocatively efficient output a competitive market would deliver, because at that point the value consumers place on the last unit (the price on demand) just equals its marginal cost.

The monopolist produces *less* than this, at Q\*, and charges *more*. Over the withheld output, demand lies above MC — there are units society values more than they cost to make, but the monopolist won't supply them because doing so would erode the price on existing sales. The welfare loss is the **triangle** between the demand and MC curves across that missing output, shaded rose and labelled **DWL**.

The exam framing: monopoly restricts output and raises price relative to the competitive benchmark, creating a deadweight welfare loss. That single comparison is the spine of any evaluation of monopoly.

:::

::: section eyebrow="Earning the marks" color="green" icon="cap"

## The diagram checklist examiners reward

- **Label every curve and axis.** AR=D, MR, AC, MC, P\*, Q\*, both axes. Unlabelled curves score nothing, however neat.
- **Find Q\* before P\*.** MC=MR fixes output; price is read *up on demand*. Never off MR.
- **MR steeper than AR**, hitting the axis halfway along a linear demand curve.
- **MC cuts AC at the minimum of AC.** If it doesn't, your cost curves are wrong by definition.
- **Shade the profit rectangle**, not a triangle, and only when P\* exceeds AC.
- **For evaluation, add Q(comp) and the DWL triangle** to show allocative inefficiency against the competitive benchmark.

Draw it the same way every time and the diagram becomes muscle memory — which is exactly what a timed exam rewards.

:::
