# Econos diagram spec sheet

The canonical reference for every analytical diagram family on Econos. It is
the ground truth that both the automated audit (`npm run audit:diagrams`) and
manual/vision review check against. Seeded from authoritative A-level sources
(see "Sources") plus the standard exam conventions; refine as boards or house
style evolve.

Curated diagrams live in `js/icons.js` and are **shared** by the Learn It SPA
and the static articles — fix a diagram here once and both surfaces update.

Conventions that apply to every chart:

- **Axes**: price/cost on the vertical, quantity/output on the horizontal,
  both with an arrowhead and a label. Origin marked `O` where shown.
- **Labels** sit clear of the axes, the curves they name, and each other — no
  collisions, nothing clipped outside the viewBox. Curve labels go at the
  open end of the curve, not over another line.
- **Equilibrium points** sit exactly on the relevant curve *intersection*,
  never floating. Dashed guide lines drop to the axes to read off P and Q.
- **Shifts** show the original curve (often dimmed/dashed) and the new curve,
  with a direction arrow and re-labelled equilibria.
- A static snapshot must depict what its caption claims (a shift caption needs
  two curves; a "welfare loss" caption needs the shaded triangle).

---

## Supply & demand

- D downward-sloping, S upward-sloping, equilibrium dot at D∩S → read P*, Q*.
- **Shift**: move the whole curve; new equilibrium on the new intersection.
- **Price floor** (e.g. min price / MUP): horizontal line *above* P*; at it
  Qs > Qd → surplus bracket. **Price ceiling**: line *below* P* → shortage.
- **Indirect tax**: S shifts up by the tax per unit (parallel for specific);
  incidence split by relative elasticity; show consumer vs producer burden.
- **Surplus**: CS = area under D above P*; PS = area above S below P*.

## Cost & revenue curves (the firm)

- **MC, AC (ATC), AVC are U-shaped**; AFC falls continuously toward zero.
- **MC cuts AVC and AC at their minimum points** (from below). This is the
  single most-failed convention — MC must pass through the trough of each
  average curve, never an ∩ ("hill") shape.
- AVC and AC converge as output rises (AFC shrinks); AVC always below AC.
- Profit-max output where **MC = MR**.

## Market structures

- **Perfect competition (firm)**: horizontal AR = MR = P (price taker).
  Short run can show super/subnormal profit; long run P = min AC (normal
  profit). Allocative + productive efficiency at min AC.
- **Monopoly**: downward AR (= D); **MR below AR with the same price-intercept
  and twice the slope** (MR hits the x-axis at half AR's quantity). U-shaped
  MC/AC. Output Qm at MR=MC; price Pm read **up on AR**; supernormal profit =
  rectangle (Pm − AC at Qm) × Qm. Allocative inefficiency: P > MC.
- **Natural monopoly**: continuously falling LRAC over the relevant range with
  MC below it; show unregulated (MR=MC), AC-pricing (P=AC, normal profit) and
  MC-pricing (P=MC, allocatively efficient but loss as P<LRAC).
- **Oligopoly (kinked demand)**: demand kinked at the current price — elastic
  above, inelastic below; MR discontinuous (vertical step) under the kink, so
  price is sticky to MC changes within the gap.

## Externalities (welfare)

- **Negative production**: MPC (private supply) below **MSC**; D = MPB = MSB.
  Market at MPC=MPB (Qm, Pm); social optimum at **MSC=MSB** (Q* < Qm, P* > Pm).
  Vertical gap MSC−MPC = MEC. **Welfare-loss triangle** between Q* and Qm,
  bounded by MSC above and MSB below.
- **Negative consumption**: MPB above **MSB**; D=MPB, optimum at MSB=MSC.
- **Positive (production/consumption)**: the social curve sits *above* the
  private one on the benefit/cost side; market **under**-provides; welfare loss
  is the gain forgone between Qm and the higher Q*.

## AD-AS

- AD downward-sloping; SRAS upward-sloping; **LRAS vertical at full-employment
  output Y_FE** (Classical) or the **Keynesian reverse-L** (flat with spare
  capacity, steepening to vertical at Y_FE). Equilibrium at AD∩SRAS (and on
  LRAS in long-run equilibrium).
- **Demand-pull**: AD shifts right along SRAS → P↑ and Y↑; both equilibria on
  AD∩SRAS intersections.
- **Cost-push**: SRAS shifts left → P↑ and Y↓ (stagflation).
- **Monetary/fiscal**: name the AD component that moves; show the new
  equilibrium and the direction on P and Y.

## PPF

- Concave-to-origin (bowed out) → increasing opportunity cost; points on the
  curve are efficient, inside attainable-but-inefficient, outside unattainable.
- **Shift**: whole frontier moves out (growth) / in. **Trade/specialisation**:
  show the consumption point beyond the PPF achievable through trade.

## Phillips curve

- Short-run: downward-sloping trade-off (lower U ↔ higher inflation). Long-run:
  **vertical at the natural rate (NAIRU)**. Stagflation shifts SRPC outward.

## Macro flows

- **Circular flow / national income**: balanced injections (I, G, X) and
  leakages (S, T, M) around the household–firm loop.
- **Multiplier**: successive diminishing rounds of induced spending.

---

## Sources

- [Diagram of Monopoly — Economics Help](https://www.economicshelp.org/microessays/markets/monopoly-diagram/)
- [Key Diagrams: Monopoly Supernormal Profit — tutor2u](https://www.tutor2u.net/economics/reference/key-diagrams-monopoly-supernormal-profit)
- [Monopoly Model: Profit Maximisation & Diagrams — TutorChase (AQA)](https://www.tutorchase.com/notes/aqa-a-level/economics/5-6-1-monopoly-model-profit-maximisation-and-diagrams)
- [Externalities and Welfare Effects — TutorChase (Edexcel)](https://www.tutorchase.com/notes/edexcel-a-level/economics/1-3-2-externalities-and-welfare-effects)
- [Diagram Analysis: MSC/MSB and MPB — TutorChase (AQA)](https://www.tutorchase.com/notes/aqa-a-level/economics/8-4-4-diagram-analysis-mscmsc-and-mpbmsb)
- [Externality Diagrams — The Curious Economist](https://thecuriouseconomist.com/externality-diagrams/)
