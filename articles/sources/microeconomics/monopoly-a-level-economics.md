---
title: "What is a monopoly? A-level economics explained"
description: "Monopoly explained for A-level economics. The diagram, why MR sits below AR, the deadweight loss, and how the CMA treats market power in the UK."
lede: "The diagram, the deadweight loss, and why monopoly sits in the middle of nearly every Edexcel essay on market failure."
theme: "Microeconomics"
spec:
  edexcel_a: "3.4.5"
  edexcel_b: "4.1.1"
  aqa: "4.1.5.6"
  ocr: "4.2"
keywords: [monopoly, monopoly diagram, deadweight loss, MR AR, market power, natural monopoly, Thames Water, CMA]
read_minutes: 10
status: live
published: 2026-05-27
modified: 2026-05-28
spa_topic: monopoly
questions:
  - difficulty: easy
    type: mcq
    q: "A profit-maximising monopolist produces where..."
    opts: ["AR = MC", "MR = MC", "AR = AC", "MR = AR"]
    ans: 1
    exp: "Every profit-maximising firm sets MR = MC. The DIFFERENCE for a monopoly is that the price (read from AR) is then HIGHER than MC — the source of the deadweight loss."
  - difficulty: medium
    type: mcq
    q: "Why does marginal revenue lie below average revenue for a monopoly but not for a perfectly competitive firm?"
    opts: ["Monopolies use absorption costing", "The monopolist faces the downward-sloping market demand curve", "MR is always negative for a monopolist", "MR is set by the regulator"]
    ans: 1
    exp: "A perfectly competitive firm is a price-taker — it can sell more at the going price, so MR = P = AR. A monopolist must cut price on ALL units to sell more, so MR < AR. The wedge widens as quantity rises."
  - difficulty: hard
    type: mcq
    q: "Why may a natural monopoly be more efficient than splitting it into competing firms, and why is regulation then needed?"
    opts: ["Competition always lowers average cost, so splitting it is efficient and no regulation is required", "A single firm faces rising long-run average cost, so it must be broken up and then price-capped", "One firm is more productively efficient, and being a monopoly it automatically sets P = MC", "Falling long-run AC over the relevant range means one firm supplies at lower cost than rivals duplicating fixed costs, but unregulated it sets P > MC, so a price cap captures the cost saving"]
    ans: 3
    exp: "High fixed and low marginal costs mean LRAC falls across the relevant output, so one firm avoids the wasteful duplication of fixed costs that competition would force. Left alone it sets P > MC with deadweight loss and supernormal profit, so price-cap regulation (e.g. RPI−X) substitutes for the missing competitor."
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics", href: "/articles/?theme=micro" }
  - { label: "Monopoly" }

friction:
  - "Most students set up the monopoly diagram correctly — MC, AC, AR, MR — then read the profit-max price off the wrong curve. They draw the dot where MR meets MC and quote the height of MR as the price."
  - "It isn't. The price is set by what consumers will pay — so you read it off AR, directly above the MR=MC quantity. Sort that out and the rest of the topic gets dramatically easier."

glance:
  - { label: "Definition", value: "A single seller of a good with no close substitutes." }
  - { label: "Profit max rule", value: "Produce where MR = MC, charge the price on AR above that quantity." }
  - { label: "UK threshold", value: "The CMA treats over 25% market share as indicative monopoly position." }
  - { label: "Why it matters", value: "Price above marginal cost destroys mutually beneficial trades — the deadweight loss." }
glance_cta:
  href: /edexcel_a/theme-3/monopoly/learn-it
  label: "Want more depth? Explore the full topic →"

faq:
  - q: "What is a monopoly in A-level economics?"
    a: "A monopoly is a single seller of a good with no close substitutes. In practice the UK Competition and Markets Authority treats a firm as having a monopoly position when it holds more than 25% market share."
  - q: "Why is marginal revenue below average revenue for a monopoly?"
    a: "Because the monopolist faces a downward-sloping demand curve. To sell one more unit it must lower the price on all units, so the marginal revenue from that extra sale is less than the price it charges."
  - q: "What is the deadweight loss of monopoly?"
    a: "It is the triangle of consumer and producer surplus lost when monopoly output sits below the allocatively efficient level where price equals marginal cost. The area represents mutually beneficial trades that never happen."

want_more:
  title: "Want more depth?"
  subtitle: "Master monopoly with Econos."
  primary_href: /edexcel_a/theme-3/monopoly/learn-it
  primary_label: "Explore the full Monopoly topic"
  secondary_href: /edexcel_a/theme-3/monopoly/learn-it
  secondary_label: "Sign up free"
---

::::: section eyebrow="Learn it in 90 seconds" color="green" icon="bulb"

## A monopoly is a price-maker behind barriers

Strip away the textbook language and the model says one thing. A monopolist is a firm that **faces the market demand curve on its own**, because there are no rivals to peel customers off. That single fact changes everything.

A firm in perfect competition takes the market price as given — it can sell as much as it likes at that price, so its marginal revenue equals the price. A monopolist cannot. To sell one more unit it has to lower the price on every unit it sells, so the revenue from that extra sale is the new price *minus* the income lost on all the units it could previously have sold at the higher price. That gap is why **marginal revenue lies below average revenue** on the diagram, and it is the source of every interesting result in the chapter.

:::: diagram caption="**Reading the diagram.** Find the quantity where MR meets MC (Q*). Go straight up to the AR curve. Read the price off the vertical axis (P*). The rectangle between P* and AC* over Q* is supernormal profit. The triangle between the monopoly point, the demand curve, and the competitive equilibrium where MC = AR is the deadweight loss."

<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;" role="img" aria-label="Monopoly profit-maximisation diagram showing AR, MR, MC and AC curves with the deadweight loss triangle">
  <defs>
    <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#F0EEE8" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="700" height="400" fill="url(#grid)"/>
  <line x1="80" y1="60" x2="80" y2="340" stroke="#0B1426" stroke-width="2"/>
  <line x1="80" y1="340" x2="640" y2="340" stroke="#0B1426" stroke-width="2"/>
  <text x="80" y="48" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0B1426">Price, Cost</text>
  <text x="650" y="358" text-anchor="end" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0B1426">Quantity</text>
  <line x1="80" y1="100" x2="600" y2="340" stroke="#2563EB" stroke-width="3"/>
  <text x="608" y="340" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#2563EB">AR = D</text>
  <line x1="80" y1="100" x2="340" y2="340" stroke="#7D23CB" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="252" y="328" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#7D23CB">MR</text>
  <path d="M 100 270 Q 200 230 280 220 Q 380 215 480 240 Q 560 260 600 290" stroke="#0B1426" stroke-width="2.5" fill="none"/>
  <text x="610" y="295" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#0B1426">MC</text>
  <path d="M 100 305 Q 200 270 290 255 Q 380 250 460 268 Q 540 285 600 310" stroke="#6B7280" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
  <text x="610" y="316" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#6B7280">AC</text>
  <line x1="260" y1="340" x2="260" y2="220" stroke="#E11D48" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="80" y1="180" x2="260" y2="180" stroke="#E11D48" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="80" y1="245" x2="260" y2="245" stroke="#6B7280" stroke-width="1" stroke-dasharray="3 3"/>
  <rect x="80" y="180" width="180" height="65" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="170" y="218" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#047857">Supernormal profit</text>
  <polygon points="260,220 260,180 400,255" fill="#E11D48" fill-opacity="0.2" stroke="#E11D48" stroke-width="1"/>
  <text x="320" y="225" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#9F1239">DWL</text>
  <circle cx="260" cy="220" r="5" fill="#7D23CB"/>
  <circle cx="260" cy="180" r="5" fill="#2563EB"/>
  <circle cx="400" cy="255" r="5" fill="#0B1426"/>
  <text x="72" y="184" text-anchor="end" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#0B1426">P*</text>
  <text x="72" y="249" text-anchor="end" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#6B7280">AC*</text>
  <text x="260" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#0B1426">Q*</text>
  <text x="400" y="358" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#6B7280">Q_pc</text>
</svg>

::::

:::::

::::: section eyebrow="The big picture · why MR sits below AR" color="purple" icon="target"

## Two ways to look at the same revenue problem

Examiners can ask the same point from either side. Treat them as two views of the same idea: a price-maker can never separate "what I charge the next customer" from "what I charge all the existing ones".

:::: two-col

::: card variant="mr" title="The marginal-revenue view"

Cutting price to sell one more unit also cuts revenue on every previous unit. The new sale only pays the new price; the old sales lose the difference. MR is what's left over.

<svg class="cause-card__diagram" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="80" x2="110" y2="80" stroke="#0B1426" stroke-width="1.5"/>
  <line x1="10" y1="10" x2="10" y2="80" stroke="#0B1426" stroke-width="1.5"/>
  <line x1="10" y1="20" x2="100" y2="78" stroke="#2563EB" stroke-width="2.5"/>
  <line x1="10" y1="20" x2="55" y2="78" stroke="#7D23CB" stroke-width="2.5" stroke-dasharray="4 3"/>
  <text x="102" y="76" font-family="Inter" font-size="9" font-weight="700" fill="#2563EB">AR</text>
  <text x="40" y="64" font-family="Inter" font-size="9" font-weight="700" fill="#7D23CB">MR</text>
</svg>

:::

::: card variant="ar" title="The demand-curve view"

The monopolist *is* the market — it faces the whole market demand curve. To sell more it must move down that curve, accepting a lower price for everyone. There's no separate "next customer" to charge.

<svg class="cause-card__diagram" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="80" x2="110" y2="80" stroke="#0B1426" stroke-width="1.5"/>
  <line x1="10" y1="10" x2="10" y2="80" stroke="#0B1426" stroke-width="1.5"/>
  <line x1="10" y1="20" x2="100" y2="78" stroke="#2563EB" stroke-width="2.5"/>
  <circle cx="50" cy="50" r="3" fill="#E11D48"/>
  <circle cx="80" cy="68" r="3" fill="#E11D48"/>
  <line x1="50" y1="50" x2="80" y2="68" stroke="#E11D48" stroke-width="1" stroke-dasharray="2 2"/>
  <text x="60" y="46" font-family="Inter" font-size="9" font-weight="700" fill="#E11D48">↓ P for all</text>
</svg>

:::

::::

<a href="/edexcel_a/theme-3/monopoly/learn-it" class="section__after-link">Walk through both views with worked numbers →</a>

:::::

::::: section eyebrow="Real world example" color="blue" icon="globe"

## Thames Water and the case for regulation

<div class="chain">

  <div class="chain-header">
    <div class="chain-img" aria-hidden="true">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2"><path d="M40 10c-12 18-20 30-20 42a20 20 0 0040 0c0-12-8-24-20-42z" fill="#F39E0B" fill-opacity="0.4"/><path d="M30 50c0 8 4 12 10 12" stroke="#B45309"/></svg>
    </div>
    <div>
      <p>Water supply is the classic UK natural monopoly. The fixed cost of laying pipes to every house is so vast, and the marginal cost of pumping an extra litre so small, that one firm serving a region is cheaper than two firms competing. Ofwat has regulated Thames Water as the sole supplier to fifteen million people in London and the Thames Valley since privatisation in 1989.</p>
      <p>Without regulation the model predicts exactly what monopoly theory says: the firm restricts output, charges a price above marginal cost, and extracts surplus from a customer base that cannot switch. Ofwat caps prices below the unregulated monopoly price — the policy fix the diagram implies.</p>
    </div>
  </div>

  <div class="chain-steps" aria-label="The natural monopoly chain">
    <div class="chain-step">
      <div class="chain-step__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10M12 21V3M21 21V8"/></svg></div>
      <div class="chain-step__label">High fixed cost, low marginal cost</div>
    </div>
    <div class="chain-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="chain-step">
      <div class="chain-step__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z"/><path d="M3 12h18"/></svg></div>
      <div class="chain-step__label">One firm cheaper than many</div>
    </div>
    <div class="chain-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="chain-step">
      <div class="chain-step__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg></div>
      <div class="chain-step__label">Price &gt; MC if unregulated</div>
    </div>
    <div class="chain-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="chain-step">
      <div class="chain-step__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M6 12h12M9 18h6"/></svg></div>
      <div class="chain-step__label">Ofwat caps prices</div>
    </div>
  </div>

  <p class="chain-note"><strong>The exam move.</strong> Don't just say "Thames Water is a natural monopoly". Walk the chain — cost structure → one firm efficient → unregulated price too high → regulator imposes price cap below P_monopoly. That sequence is the difference between a Level 2 and a Level 4 paragraph on natural monopoly regulation.</p>

</div>

:::::

::::: section eyebrow="Evaluation — the 'however'" color="pink" icon="scale"

## Monopoly is not always the villain

The standard diagram makes monopoly look unambiguously bad — higher price, lower quantity, deadweight loss, transfer from consumers to producers. The top-band evaluation paragraphs push back, with two main lines.

**The Schumpeterian defence.** Supernormal profit funds research and development. The pharmaceutical industry's case for patent protection is exactly this: without temporary monopoly profit on a successful drug, no firm would risk the £1bn+ cost of developing one. Static inefficiency (the deadweight loss triangle) buys dynamic efficiency (the next generation of drugs). Whether the trade is worth it depends on how productive the R&D actually is — and whether the patent length is calibrated to that.

**Natural monopoly economies of scale.** In industries with very large fixed costs, a single firm sliding far down its long-run average cost curve can produce at a lower unit cost than two firms competing — each duplicating the fixed cost. The Thames Water example above sits here. The question becomes not "competition vs monopoly" but "monopoly under what regulatory regime".

Both defences are conditional. A monopoly with no innovation pipeline and no scale advantage is just the textbook bad case. The evaluation move is to say what the defence depends on, not to assert that monopoly is sometimes fine.

:::::

::::: section eyebrow="What examiners actually want" color="purple" icon="cap"

## The two-mark moves that lift your essay

For AO3 (analysis), name the chain: "barriers to entry → no rival to compete profit away → P > MC sustained → allocative inefficiency, shown by the DWL triangle". Mark schemes reward the linked steps, not the individual facts.

For AO4 (evaluation), make the defence conditional: "Schumpeterian profit can fund innovation, *but only if* the industry has a credible R&D pipeline; otherwise the static loss is unrecovered." That single hedged sentence is worth more than a paragraph of unqualified counter-points.

:::::
