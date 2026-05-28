---
title: "Consumer and producer surplus — A-level economics explained"
description: "Consumer and producer surplus for A-level economics. The two welfare areas every diagram needs, how taxes and subsidies shift them, and why the deadweight triangle is the policy-cost number examiners reward."
lede: "The two triangles every welfare diagram lives on. Get the labels right, identify before-and-after areas when policy moves the price, and the deadweight loss writes itself."
theme: "Microeconomics"
spec:
  edexcel_a: "1.2.8"
  edexcel_b: null
  aqa: "4.1.5.11"
  ocr: "2.4"
keywords: [consumer surplus, producer surplus, welfare triangle, deadweight loss, allocative efficiency, indirect tax incidence, subsidy welfare, price ceiling, price floor]
read_minutes: 9
status: live
published: 2026-05-28
modified: 2026-05-28
spa_topic: consumer-and-producer-surplus
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics" }
  - { label: "Consumer and producer surplus" }

friction:
  - "Most students name 'the area below the demand curve and above the price' for consumer surplus — and stop. The mark scheme wants the BEFORE-and-AFTER comparison when a tax, subsidy, or price control changes the market. Identifying the AREAS that switch hands (consumer → producer, consumer → government, lost entirely) is where the analysis marks live."
  - "And the deadweight triangle from a tax is NOT the whole consumer surplus loss. It's the BIT that nobody captures — the trade that no longer happens. The bit that goes to government as tax revenue isn't a loss to society, it's a transfer."

glance:
  - { label: "Consumer surplus", value: "Area below the demand curve and above the market price. The difference between what consumers WOULD pay and what they DO pay." }
  - { label: "Producer surplus", value: "Area above the supply curve and below the market price. The difference between what producers RECEIVE and the minimum they would accept." }
  - { label: "Total surplus", value: "CS + PS — the area between supply and demand from zero to equilibrium quantity. Maximised at the competitive equilibrium (allocative efficiency)." }
  - { label: "Deadweight loss", value: "The total surplus LOST when output sits below the competitive equilibrium — taxes, subsidies, monopoly, or externalities all create one." }
glance_cta:
  href: /edexcel_a/theme-1/consumer-and-producer-surplus/learn-it
  label: "Want more depth? Explore the full topic →"

questions:
  - difficulty: easy
    type: mcq
    q: "Consumer surplus on a standard supply-and-demand diagram is shown by..."
    opts: ["The area below the supply curve up to equilibrium quantity", "The area above the demand curve and below the price", "The area below the demand curve and above the market price, up to equilibrium quantity", "The full rectangle Price × Quantity"]
    ans: 2
    exp: "Consumer surplus is what consumers WOULD have paid (under the demand curve) minus what they DID pay (the market price), summed across all units bought up to equilibrium. The triangle below D and above P*."
  - difficulty: medium
    type: mcq
    q: "An indirect tax is imposed on cigarettes. Demand is inelastic. What happens to the surplus areas?"
    opts: ["Consumer surplus is unchanged", "Producers bear most of the tax burden", "Consumers bear most of the tax burden; the deadweight triangle is small", "The deadweight triangle is unusually large"]
    ans: 2
    exp: "Inelastic demand means quantity barely falls when price rises. The tax is mostly passed through to consumers (high CS loss → government revenue), with a small deadweight triangle because few trades are lost. The mirror image holds for elastic demand."
  - difficulty: hard
    type: short
    q: "A government introduces a maximum price (price ceiling) below the competitive equilibrium for rented accommodation. Outline the welfare effects on consumer surplus, producer surplus, and total welfare."
    ans: "The maximum price sets P_max below P*. At P_max planned demand exceeds planned supply — persistent shortage. The quantity actually exchanged falls to Q_max (where the supply curve meets P_max). Consumer surplus on the units that STILL get exchanged rises (lower price per unit), but consumers who can no longer find a flat lose the surplus they would have had — net CS effect is ambiguous. Producer surplus unambiguously FALLS (lower price + lower quantity). Total welfare falls by the deadweight triangle between supply and demand across the lost quantity Q_max to Q*. Add the rent-dissipating costs of non-price rationing (queueing, search, bribery, key money) and the actual welfare loss is larger than the triangle alone. Standard evaluation: distributional gains for current tenants come at the cost of future tenants who can't find a flat — a classic insider/outsider problem."

want_more:
  title: "Want more depth?"
  subtitle: "Master consumer and producer surplus with Econos."
  primary_href: /edexcel_a/theme-1/consumer-and-producer-surplus/learn-it
  primary_label: "Explore the full topic"
  secondary_href: /edexcel_a/theme-1/consumer-and-producer-surplus/learn-it
  secondary_label: "Sign up free"
---

::: section eyebrow="Learn it in 90 seconds" color="green" icon="bulb"

## Surplus is the gap between willingness and payment

A consumer who would happily pay £3 for a coffee but pays only £2 is £1 better off — they captured £1 of **consumer surplus**. A barista who would supply the coffee for £1.50 but receives £2 captures £0.50 of **producer surplus**. Both sides of the trade are better off; that £1.50 of surplus is the joint gain from the trade.

Scale that up across every unit traded at the market price, and you get two triangular areas on the supply-and-demand diagram:

- **Consumer surplus** = the area below the demand curve and above the market price, from zero to the equilibrium quantity.
- **Producer surplus** = the area above the supply curve and below the market price, from zero to the equilibrium quantity.

The total of the two is **total surplus** (or social welfare) and it's maximised at the competitive equilibrium — that's the formal meaning of *allocative efficiency*. Any policy that pushes the market away from competitive equilibrium reduces total surplus.

:::

::: econos-diagram svgKey="cpsSvg" interactive="true" label="Consumer and producer surplus on the supply-and-demand diagram" caption="Build the welfare picture step by step: the equilibrium, the consumer-surplus triangle, the producer-surplus triangle, total surplus, and the deadweight loss when output is restricted below Q*."
:::

::: section eyebrow="Indirect taxes — surplus changes hands" color="purple" icon="target"

## Where the tax revenue, deadweight loss, and pass-through come from

When a per-unit tax is added on the supply side, the effective supply curve shifts up by the tax amount. The new equilibrium has a higher price for consumers (P_c) and a lower price received by producers (P_p), with a wedge equal to the tax between them. Quantity falls from Q\* to Q_t.

Track the surplus changes:

- **Consumer surplus** falls (P_c is above P\*, fewer units bought) — the area between P_c and P\* across Q_t plus the lost-trades triangle on the consumer side.
- **Producer surplus** falls (P_p is below P\*, fewer units sold) — the area between P\* and P_p across Q_t plus the lost-trades triangle on the producer side.
- **Government revenue** gains the rectangle (tax) × Q_t — the wedge between P_c and P_p across Q_t.
- **Deadweight loss** is what's left over — the triangle between supply and demand across the LOST quantity (Q_t to Q\*).

The split between consumer and producer loss depends on relative ELASTICITIES. Inelastic demand (cigarettes, fuel) means consumers bear most of the tax — the SDIL case for soft drinks is the textbook policy designed around this. Inelastic supply (residential land) means producers bear most of the tax — the case Henry George built for land-value taxation.

:::

::: econos-diagram svgKey="taxIncidenceInteractive" label="Tax incidence and surplus areas" caption="The tax wedge separates the price consumers pay from the price producers receive. The rectangle is government revenue (a transfer); the triangle is deadweight loss (a true social cost)."
:::

::: section eyebrow="Subsidies — the mirror image" color="blue" icon="scale"

## Why subsidies also create deadweight loss

The same surplus framework explains a subsidy. The supply curve shifts DOWN by the subsidy amount. Consumers pay a lower P_c, producers receive a higher P_p, quantity rises to Q_s above Q\*.

Track the surplus changes:

- **Consumer surplus** rises (lower price + more units bought).
- **Producer surplus** rises (higher effective price + more units sold).
- **Government cost** is the rectangle (subsidy) × Q_s — paid out of tax revenue.
- **Deadweight loss** is the triangle between supply and demand across the EXTRA quantity (Q\* to Q_s) — the trades happening only because of the subsidy, where the true social cost exceeds the true social benefit.

Wait — surely a subsidy that ENCOURAGES a positive externality REDUCES welfare loss? Yes, but only if the subsidy is set at exactly the marginal external benefit. A subsidy SET ABOVE MEB creates over-consumption past Q\*\* and adds a deadweight triangle of its own. A subsidy SET BELOW MEB under-corrects but still helps. The exam point is that subsidies are NOT free, even when the externality justifies them — picking the right rate matters.

:::

::: econ-insight portraitKey="economistMarshall" tone="amber" label="Economist insight: Marshall on the gains from trade" attribution="Alfred Marshall, <em>Principles of Economics</em> (1890)"
The excess of the price which he would be willing to pay rather than go without the thing, over that which he actually does pay, is the economic measure of this surplus satisfaction.
:::

::: section eyebrow="Price controls — surplus and the missing trades" color="pink" icon="globe"

## Maximum and minimum prices on the surplus diagram

The same framework explains a price ceiling or floor.

**Maximum price (P_max < P\*).** Quantity exchanged falls to Q_max (where supply meets P_max). Consumers on the surviving units pay less — their CS per unit rises. But fewer units exchange, so excluded consumers lose surplus entirely. Producers receive less per unit AND sell fewer units — PS unambiguously falls. The deadweight triangle between supply and demand across Q_max to Q\* is the lost total welfare.

Add **non-price rationing costs** — queueing, search effort, black-market premiums, in-kind bribes (key money in rent-controlled markets) — and the welfare loss is larger than the triangle alone. The strongest essays cite this rent-dissipation effect by name.

**Minimum price (P_min > P\*).** Quantity exchanged falls to Q_min (where demand meets P_min). Producers on the surviving units receive more per unit (PS per unit rises) but supply more than is bought (excess supply). Consumers lose CS unambiguously (higher price, lower quantity). The deadweight triangle is between supply and demand across Q_min to Q\*.

The exam-ready point: a price control's welfare impact depends on (a) how far it sits from equilibrium, (b) the elasticities on each side, and (c) how the excess (demand or supply) is rationed.

:::

::: section eyebrow="Exam edge" color="green" icon="cap"

## What the mark scheme actually rewards

- **Label the surplus areas before AND after.** A diagram showing only the original CS/PS triangles earns a definition mark; one showing the changes earns the analysis marks.
- **Distinguish transfer from loss.** Tax revenue is a TRANSFER (society still has it). Deadweight loss is a true LOSS (the trade doesn't happen).
- **Use elasticity to predict incidence.** Whoever has the more inelastic curve bears more of the tax burden — and the deadweight triangle is smaller when at least one curve is inelastic.
- **Identify rent-dissipation in price controls.** Queueing, search, black-market premiums — the costs that don't appear in the basic triangle but matter to total welfare.
- **Link surplus to allocative efficiency.** Maximised at competitive equilibrium; eroded by anything that moves output away from it.

:::
