---
title: "Perfect competition — short-run vs long-run diagram explained for A-level economics"
description: "How to draw and read the perfect competition diagram for A-level economics: the horizontal AR=MR=P price line, short-run supernormal profit, and entry to normal profit."
lede: "Why the firm's demand curve is horizontal, how to shade short-run supernormal profit, why entry drives price down to the bottom of AC, and the labels that earn the marks."
theme: "Microeconomics"
spec:
  edexcel_a: "3.4.2"
  edexcel_b: "4.1.1"
  aqa: "4.1.5.3"
  ocr: "4.1"
keywords: [perfect competition diagram, short run long run, AR=MR=P, supernormal profit, normal profit, price taker, entry and exit, A-level economics, how to draw perfect competition]
read_minutes: 8
status: live
published: 2026-05-29
modified: 2026-05-29
spa_topic: perfect-competition
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics" }
  - { label: "Perfect competition: short run vs long run" }

friction:
  - "Students draw the perfectly competitive firm with a downward-sloping demand curve, copying the monopoly diagram. The firm is a price-taker: its demand curve is HORIZONTAL at the market price, and AR=MR=P all lie on that one line."
  - "The other slip is forgetting the long-run adjustment. Supernormal profit in the short run is not the end of the story — free entry shifts market supply, the price falls, and the firm ends at normal profit where P=AC=MC at the bottom of AC. If you don't show the price moving, you've missed the question."

glance:
  - { label: "Axes", value: "Price and cost (£) on the vertical axis, output (quantity) on the horizontal axis." }
  - { label: "The firm's demand", value: "A horizontal line at the market price: AR = MR = P. The firm is a price-taker." }
  - { label: "Short run", value: "Profit-max at MC=MR. If P > AC the firm earns supernormal profit (shaded rectangle)." }
  - { label: "Long run", value: "Free entry raises supply, price falls until P = AC = MC at the bottom of AC — normal profit only." }
glance_cta:
  href: /edexcel_a/theme-3/perfect-competition/learn-it
  label: "Want the full perfect competition topic? Explore it →"

faq:
  - q: "Why is the demand curve horizontal in perfect competition?"
    a: "Each firm is tiny relative to the market and sells a homogeneous product, so it cannot influence the market price — it is a price-taker. It can sell as much as it likes at the going price but nothing above it. The firm's demand curve is therefore a horizontal line at the market price, and because the price never changes with the firm's output, average revenue and marginal revenue both equal that price: AR = MR = P."
  - q: "How do you show supernormal profit in perfect competition?"
    a: "In the short run, find the profit-maximising output where MC = MR (which is the horizontal price line). Read the average cost at that output. If the price lies above AC, the firm earns supernormal profit equal to (P − AC) × Q, drawn as a rectangle between the price line and AC over that output. Shade it."
  - q: "What happens to profit in the long run under perfect competition?"
    a: "Short-run supernormal profit attracts new firms because there are no barriers to entry. As firms enter, market supply rises and the market price falls. The firm's horizontal demand line drops until price just equals the minimum of average cost, where P = AC = MC. At that point only normal profit is earned, so entry stops and the market is in long-run equilibrium."

want_more:
  title: "Want more depth?"
  subtitle: "Master perfect competition with Econos."
  primary_href: /edexcel_a/theme-3/perfect-competition/learn-it
  primary_label: "Explore the full Perfect competition topic"
---

::: section eyebrow="Read it in 90 seconds" color="green" icon="bulb"

## One firm, two time periods

The perfect competition question almost always asks you to show the firm in the **short run** and then the **long run** side by side. The story connecting the two panels is the whole answer.

- **Short run.** The firm is a **price-taker**, so its demand curve is a **horizontal line** at the market price: **AR = MR = P**. It profit-maximises where **MC = MR**. If that price sits above average cost, the firm earns **supernormal profit** — shade the rectangle.
- **Long run.** Supernormal profit attracts entrants (there are no barriers). Market supply rises, the price falls, and the firm's horizontal line drops until **P = AC = MC** at the **bottom of AC**. Now only **normal profit** remains, entry stops, and the market settles.

The recurring error is treating the firm like a monopoly and giving it a downward-sloping demand curve. It hasn't got one. The second error is stopping at the short-run profit without showing the price fall that competes it away. Show the price moving and you've answered the question.

:::

::: diagram caption="The dual perfect competition diagram. Left (short run): the firm is a price-taker on a horizontal AR=MR=P line; output is at MC=MR, and because P lies above AC the firm earns supernormal profit (shaded green). Right (long run): free entry has lowered the market price until P=AC=MC at the bottom of AC, so only normal profit is earned."
<svg viewBox="0 0 720 420" class="perfect-comp-svg" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" role="img" aria-label="Two panels for a firm in perfect competition. Left panel, short run: a horizontal average-revenue-equals-marginal-revenue-equals-price line above a U-shaped average cost curve and a marginal cost curve; output is where marginal cost crosses the price line; the price is above average cost so a shaded rectangle marks supernormal profit. Right panel, long run: the horizontal price line has fallen to just touch the minimum of the average cost curve where price equals average cost equals marginal cost, so only normal profit is earned and the profit rectangle has disappeared.">
  <rect width="720" height="420" fill="#F8FAFC" rx="12"/>
  <!-- LEFT PANEL: short run -->
  <text x="180" y="34" text-anchor="middle" font-size="14" font-weight="800" fill="#0B1426">Short run — supernormal profit</text>
  <line x1="60" y1="50" x2="60" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <line x1="60" y1="350" x2="340" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <text transform="translate(34,205) rotate(-90)" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Price / Cost (£)</text>
  <text x="330" y="376" text-anchor="end" font-size="12" font-weight="700" fill="#475569">Output</text>
  <!-- AC U-shaped (min around (215,230)) -->
  <path d="M90,150 Q200,310 215,230 T320,130" fill="none" stroke="#F39E0B" stroke-width="3"/>
  <text x="300" y="128" font-size="13" font-weight="800" fill="#B45309">AC</text>
  <!-- MC cuts AC at its min -->
  <path d="M100,300 Q180,285 215,230 T315,90" fill="none" stroke="#E11D48" stroke-width="3"/>
  <text x="300" y="92" font-size="13" font-weight="800" fill="#E11D48">MC</text>
  <!-- horizontal price line AR=MR=P above AC -->
  <line x1="60" y1="170" x2="335" y2="170" stroke="#2563EB" stroke-width="3"/>
  <text x="250" y="162" font-size="13" font-weight="800" fill="#2563EB">AR = MR = P</text>
  <!-- profit-max output where MC crosses price line: approx (273,170) -->
  <circle cx="273" cy="170" r="4.5" fill="#0B1426"/>
  <line x1="273" y1="170" x2="273" y2="350" stroke="#0B1426" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="273" y="368" text-anchor="middle" font-size="11" font-weight="800" fill="#0B1426">Q*</text>
  <!-- AC at Q*: read AC curve at x=273 approx y=215 -->
  <line x1="60" y1="215" x2="273" y2="215" stroke="#475569" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="55" y="174" text-anchor="end" font-size="12" font-weight="800" fill="#2563EB">P</text>
  <text x="55" y="219" text-anchor="end" font-size="11" font-weight="700" fill="#B45309">AC</text>
  <!-- supernormal profit rectangle P (170) to AC (215), x 60..273 -->
  <rect x="60" y="170" width="213" height="45" fill="#10B981" fill-opacity="0.25" stroke="#10B981" stroke-width="1.5"/>
  <text x="120" y="198" font-size="12" font-weight="800" fill="#047857">Supernormal profit</text>
  <!-- divider -->
  <line x1="372" y1="50" x2="372" y2="360" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4 5"/>
  <!-- RIGHT PANEL: long run -->
  <text x="545" y="34" text-anchor="middle" font-size="14" font-weight="800" fill="#0B1426">Long run — normal profit</text>
  <line x1="410" y1="50" x2="410" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <line x1="410" y1="350" x2="700" y2="350" stroke="#CBD5E1" stroke-width="2"/>
  <text transform="translate(384,205) rotate(-90)" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">Price / Cost (£)</text>
  <text x="690" y="376" text-anchor="end" font-size="12" font-weight="700" fill="#475569">Output</text>
  <!-- AC U-shaped, min around (565,235) -->
  <path d="M440,155 Q550,315 565,235 T670,135" fill="none" stroke="#F39E0B" stroke-width="3"/>
  <text x="650" y="133" font-size="13" font-weight="800" fill="#B45309">AC</text>
  <!-- MC cuts AC at min -->
  <path d="M450,305 Q530,290 565,235 T665,95" fill="none" stroke="#E11D48" stroke-width="3"/>
  <text x="650" y="97" font-size="13" font-weight="800" fill="#E11D48">MC</text>
  <!-- price line fallen to tangent at bottom of AC (y=235) -->
  <line x1="410" y1="235" x2="690" y2="235" stroke="#2563EB" stroke-width="3"/>
  <text x="600" y="227" font-size="12" font-weight="800" fill="#2563EB">AR = MR = P</text>
  <!-- equilibrium at min AC (565,235) -->
  <circle cx="565" cy="235" r="4.5" fill="#0B1426"/>
  <line x1="565" y1="235" x2="565" y2="350" stroke="#0B1426" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="565" y="368" text-anchor="middle" font-size="11" font-weight="800" fill="#0B1426">Q*</text>
  <text x="405" y="239" text-anchor="end" font-size="12" font-weight="800" fill="#2563EB">P</text>
  <text x="455" y="285" font-size="11" font-weight="800" fill="#0B1426">P = AC = MC</text>
  <!-- entry arrow showing price falling from SR to LR -->
  <text x="455" y="300" font-size="11" font-weight="700" fill="#047857">entry → price falls</text>
</svg>
:::

::: section eyebrow="Why the demand curve is flat" color="purple" icon="target"

## The price-taker and the AR=MR=P line

Perfect competition rests on many small firms, a homogeneous product, perfect information and freedom of entry and exit. The consequence that drives the diagram is that the individual firm is a **price-taker**: it is far too small to move the market price, so it accepts whatever the market sets.

That means the firm can sell *any* quantity it wants at the going price, but not a penny more — raise the price and buyers simply switch to an identical rival. So the demand curve *the firm faces* is a **horizontal line** at the market price. Because the price is constant whatever the firm produces, average revenue equals that price, and marginal revenue — the revenue from the next unit — also equals that price. Hence the single label **AR = MR = P** sitting on one horizontal line.

This is the make-or-break difference from monopoly. The monopolist *is* the market and faces the downward-sloping market demand; the perfectly competitive firm is a speck and faces a flat line. Drawing it sloping is the fastest way to lose the diagram marks.

:::

::: section eyebrow="The short-run panel" color="blue" icon="scale"

## Profit-max and the supernormal rectangle

Even a price-taker chooses its output: it profit-maximises where **MC = MR**. Since MR is the horizontal price line, that is simply where **MC crosses the price line**, giving output **Q\***.

Now read average cost at Q\*. Three cases:

- **P > AC** ➝ **supernormal profit**, the shaded rectangle between the price line and AC, area `(P − AC) × Q*`. This is the left panel.
- **P = AC** ➝ normal profit only (the long-run outcome).
- **P < AC** ➝ a loss; the firm stays open in the short run only while price covers average variable cost, and exits otherwise.

The exam habit is identical to the monopoly diagram in mechanics — MC=MR fixes output, the profit box is price minus AC times output — but the *price* is given to the firm rather than chosen on a demand curve. Make sure the rectangle's top edge is the price line and its bottom edge is AC at Q\*, not anywhere else.

:::

::: section eyebrow="The long-run adjustment" color="pink" icon="globe"

## How entry competes profit away

Here is the part weaker answers omit. Short-run supernormal profit is a *signal*. Because there are no barriers to entry, new firms are drawn into the industry. As they enter, **market supply shifts right**, and the market price falls.

For our single firm, that means the horizontal **AR=MR=P** line slides *down*. It keeps falling as long as any supernormal profit remains — which is exactly as long as the price sits above the minimum of AC. Entry only stops when the price has dropped to the **lowest point of the average cost curve**, where the firm earns just **normal profit**. At that tangency, **P = AC = MC** simultaneously: the price line is tangent to the bottom of AC, and MC passes through that same point.

That is long-run equilibrium, shown in the right panel. The supernormal rectangle has vanished. Note the efficiency payoff examiners love: producing at the minimum of AC is **productive efficiency**, and P = MC is **allocative efficiency** — perfect competition delivers both in the long run. (The mirror case: if firms were making losses, exit would *raise* the price back up to normal profit. The adjustment runs both ways.)

:::

::: section eyebrow="Earning the marks" color="green" icon="cap"

## The diagram checklist examiners reward

- **Two panels, clearly labelled** short run and long run, each with price/cost up and output along.
- **Horizontal AR=MR=P line** — the firm is a price-taker. Never downward-sloping.
- **Output at MC=MR** (where MC meets the price line) in both panels.
- **Short run: shade the supernormal-profit rectangle** between P and AC at Q\*, only when P > AC.
- **Long run: drop the price line to the bottom of AC** so P=AC=MC and only normal profit remains — and *say* entry caused the fall.
- **Name the efficiency outcome:** productive (min AC) and allocative (P=MC) efficiency in long-run equilibrium.

The story is the marks: short-run profit → entry → supply rises → price falls → normal profit. Draw the price moving, not just the curves sitting still.

:::
