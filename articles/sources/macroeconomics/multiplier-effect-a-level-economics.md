---
title: "The multiplier effect explained — with worked numbers"
description: "The multiplier effect for A-level economics. The formula, why it works, the four leakages (MPS, MPT, MPM), and a worked UK example with real numbers."
lede: "The formula every student quotes and the application most students fluff. Work through an injection, the leakages it triggers, and the final change in GDP — with numbers."
theme: "Macroeconomics"
spec:
  edexcel_a: "2.4.4"
  edexcel_b: "4.4.1"
  aqa: "3.2.2.4"
  ocr: "1.5"
keywords: [multiplier, multiplier effect, MPC, MPS, MPT, MPM, marginal propensity to consume, fiscal multiplier, government spending, injection]
read_minutes: 11
status: live
published: 2026-05-28
modified: 2026-05-28
spa_topic: national-income-and-the-multiplier
questions:
  - difficulty: easy
    type: mcq
    q: "If the marginal propensity to consume (MPC) is 0.8, what is the value of the simple Keynesian multiplier (k)?"
    opts: ["1.25", "5", "8", "0.2"]
    ans: 1
    exp: "k = 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5. A £1bn injection raises national income by £5bn at full multiplier action."
  - difficulty: medium
    type: mcq
    q: "Which of the following would REDUCE the size of the UK fiscal multiplier?"
    opts: ["A fall in the marginal propensity to import", "A fall in the marginal rate of tax", "A rise in the average propensity to save", "A fall in the marginal propensity to save"]
    ans: 2
    exp: "Bigger leakages (saving, tax, imports) shrink the multiplier. A higher propensity to save means a smaller share of each injection passes through to the next round of spending, so k = 1 ÷ (MPS + MPT + MPM) falls."
  - difficulty: hard
    type: short
    q: "Explain why the fiscal multiplier in the UK is likely smaller than the textbook value of 5 suggests."
    ans: "The textbook k = 1 ÷ MPS assumes a closed, untaxed economy with no monetary offset. The UK is small, open and taxed: every round of induced spending leaks to imports (MPM ≈ 0.3+ in the UK), to direct + indirect tax (MPT ≈ 0.3), and to saving (MPS ≈ 0.1). The actual k = 1 ÷ (MPS+MPT+MPM) is around 1.4-1.5. Add monetary offset (the Bank may raise base rate in response, crowding out private spending) and time lags (income reaches the household, savings accumulate before spending), and the realised multiplier shrinks again. The number that matters is the SHORT-RUN OPEN-ECONOMY multiplier, which is far smaller than the closed-economy textbook value."
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Macroeconomics", href: "/articles/?theme=macro" }
  - { label: "Multiplier" }

friction:
  - "Students learn the formula k = 1/(1 − MPC) or k = 1/(MPS + MPT + MPM) and stop there. The mark scheme wants the formula plus the worked steps that show *why* it works — an injection becomes income, becomes spending, becomes income, becomes spending, with leakages at each round."
  - "Without the worked example, the formula is a magic trick. With the worked example, it's the mechanism by which a £10bn government spend ends up changing GDP by £15bn, £20bn, or any other figure — depending on the leakage rates."

glance:
  - { label: "Formula", value: "k = 1 / (1 − MPC) or, more generally, k = 1 / (MPS + MPT + MPM)." }
  - { label: "MPC", value: "Marginal propensity to consume — share of an extra £1 of income spent on domestic goods." }
  - { label: "Leakages", value: "MPS (savings), MPT (tax), MPM (imports). Higher leakages mean a smaller multiplier." }
  - { label: "UK multiplier", value: "Estimates range 0.5–1.5 for tax cuts, 0.8–2.0 for government spending. State-of-the-cycle matters." }
glance_cta:
  href: /edexcel_a/theme-2/national-income-and-the-multiplier/learn-it
  label: "Want more depth? Explore the full topic →"

faq:
  - q: "What is the multiplier effect in A-level economics?"
    a: "The multiplier effect is the principle that an initial injection of spending into the economy (government investment, exports, autonomous consumption) raises GDP by *more* than the injection itself. Each pound of injection becomes someone's income; that person spends a fraction of it, becoming someone else's income; and so on, with leakages at each round."
  - q: "How do you calculate the multiplier?"
    a: "In the simplest closed-economy model: k = 1 / (1 − MPC). With more realistic leakages: k = 1 / (MPS + MPT + MPM). MPS is the marginal propensity to save, MPT to tax, MPM to import. The total change in GDP is k × the initial injection."
  - q: "Why are real-world multipliers usually smaller than the textbook number?"
    a: "Three reasons. Leakages are larger than students often assume — UK MPM alone is around 0.3. Crowding out can offset government spending. Expectations can blunt the effect if households save rather than spend a tax cut. IMF / OBR estimates put UK fiscal multipliers in the 0.5–1.5 range, well below the 'pure' k of 2.5+ that the formula suggests for an MPC of 0.6."

want_more:
  title: "Want more depth?"
  subtitle: "Master the multiplier with Econos."
  primary_href: /edexcel_a/theme-2/national-income-and-the-multiplier/learn-it
  primary_label: "Explore the full Multiplier topic"
  secondary_href: /edexcel_a/theme-2/national-income-and-the-multiplier/learn-it
  secondary_label: "Sign up free"
---

::: section eyebrow="Learn it in 90 seconds" color="green" icon="bulb"

## An injection becomes income, becomes spending, becomes income…

The multiplier effect is the iterative consequence of a single fact: **one person's spending is another person's income.** Spend £1 and the £1 doesn't disappear — it becomes someone else's £1 of income. They keep some, spend some. Their spending is *another* person's income. And so on.

If at each round the recipient spends a fixed fraction *c* of their new income on UK-produced goods, the geometric series sums to:

> Total ΔGDP = Injection × (1 + c + c² + c³ + …) = Injection × 1 / (1 − c)

That **1 / (1 − c)** is the multiplier *k*. The fraction *c* is the **marginal propensity to consume** (MPC) out of an extra pound of income, on domestically-produced goods.

The fraction NOT spent on UK goods is the **leakage**: saved (MPS), paid in tax (MPT), or spent on imports (MPM). The general formula in the more realistic open-economy-with-government version is:

> k = 1 / (MPS + MPT + MPM)

That formula is what every Edexcel mark scheme rewards in the AO1 mark.

:::

::: section eyebrow="Worked example" color="purple" icon="target"

## £10bn of government investment, with realistic UK leakages

Suppose the UK Chancellor announces a £10bn one-off public investment programme (new schools, hospitals, transport). Assume realistic UK leakage rates for an average household:

- MPS (savings) = 0.10
- MPT (effective marginal tax rate) = 0.30
- MPM (imports) = 0.30
- So MPC on UK goods = 1 − 0.10 − 0.30 − 0.30 = **0.30**

The multiplier: k = 1 / (1 − 0.30) = **1.43**.

Total change in GDP ≈ £10bn × 1.43 = **£14.3bn**.

Walk the iterations to see where the £4.3bn of extra GDP comes from:

- **Round 1.** The government spends £10bn. Construction firms receive £10bn of revenue. Wages, profits and supplier payments distribute the £10bn as income.
- **Round 2.** Recipients of that £10bn spend 30% of it (their MPC on UK goods) — £3bn. The other £7bn leaks: £1bn saved, £3bn tax, £3bn imports.
- **Round 3.** The £3bn becomes income for the next round of recipients, who spend 30% of it: £0.9bn. £2.1bn leaks.
- **Round 4.** £0.9bn × 0.30 = £0.27bn.
- **Round 5.** £0.27bn × 0.30 = £0.08bn.
- And so on, geometrically converging.

Sum the series: 10 + 3 + 0.9 + 0.27 + 0.08 + … = 10 × (1 / 0.70) = £14.3bn. ✓

The exam mark for this section: show the iterations explicitly, then derive the formula. Don't just write *k* = 1.43 and the answer.

:::

::: section eyebrow="The friction · what makes the multiplier smaller in practice" color="pink" icon="scale"

## Three reasons real-world multipliers undershoot the textbook

Empirical UK multiplier estimates from the OBR, IMF and Bank of England cluster in the 0.5–1.5 range — well below the textbook figure of 2 or 3 that an MPC of 0.5 or 0.6 would imply. Three reasons examiners want you to evaluate.

**1. Leakages are bigger than students assume.** UK MPM alone is around 0.30 because a small open economy imports a lot of what households want to buy. Add MPT (around 0.30 for a higher-rate worker, lower for someone on benefits) and MPS (highly cyclical — close to 0 in booms, 0.10+ in recessions), and the denominator of *k* gets large fast. The 0.30 MPC on UK goods is realistic; the textbook 0.7 MPC is fantasy unless the question explicitly assumes a closed economy.

**2. Crowding out.** A government deficit funded by issuing gilts pushes up gilt yields, raising the cost of capital for private firms and households. Private investment and consumption fall to offset some of the public spend. The size of crowding out depends on the state of the cycle: high near full employment, near zero in deep recession with monetary accommodation.

**3. Ricardian equivalence.** If households expect today's borrowing-funded fiscal expansion to be paid back through future tax rises, they may save the tax-cut equivalent rather than spend it. The effect is debated empirically, but it's the standard top-band evaluation point: rational, forward-looking households partly undo today's stimulus by saving for tomorrow's bill.

The state of the cycle matters more than any of the above in isolation. The IMF's review of 2008-09 stimulus packages found multipliers were **larger than 1** in deep recession (slack capacity meant little crowding out, accommodative monetary policy) but **smaller than 1** in normal times. The same fiscal expansion has very different multipliers depending on whether the output gap is open or closed.

:::

::: econ-insight portraitKey="economistKeynes" tone="amber" label="Economist insight: Keynes and the multiplier" attribution="John Maynard Keynes, <em>The General Theory of Employment, Interest and Money</em> (1936)"
If the Treasury were to fill old bottles with banknotes, bury them at suitable depths in disused coalmines… and leave it to private enterprise to dig the notes up again, there need be no more unemployment and… the real income of the community… would probably become a good deal greater than it actually is.
:::

::: section eyebrow="Real world example" color="blue" icon="globe"

## The 2008-09 UK fiscal stimulus: a closed-economy multiplier in practice

The UK's response to the 2008 financial crisis included a temporary VAT cut from 17.5% to 15% (December 2008 to December 2009), at a cost of around £12bn, plus bring-forward of capital spending and other targeted measures.

The OBR's later evaluation estimated the fiscal multiplier for VAT cuts in that period at around **0.35**: every £1 of VAT cut translated into roughly 35p of additional GDP. Why so low?

Households facing income uncertainty in the depths of recession saved the VAT cut rather than spent it. The pass-through to retail prices was incomplete (retailers absorbed some of the cut as margin). And the policy was explicitly temporary, so didn't shift permanent-income expectations.

By contrast, the OBR estimated the multiplier on capital spending in the same period at **0.8 to 1.0** — closer to textbook because the money was spent directly on UK construction firms (low MPM in the first round) and the goods themselves were physical infrastructure that didn't depreciate the moment the recession ended.

The exam move on Covid / 2008: cite specific multipliers when you have them, and explain *why* tax cuts have smaller multipliers than direct spending. A £-for-£ comparison of "tax cut vs G increase" is a standard 12-mark question and the multiplier framework gives you the analytical edge.

:::

::: section eyebrow="What examiners actually want" color="purple" icon="cap"

## The four-mark sequence on any multiplier question

For **AO1**, state the formula. Both forms: k = 1 / (1 − MPC) and k = 1 / (MPS + MPT + MPM). One mark each.

For **AO2** (application), put the numbers in. Identify the injection size, identify or assume the MPC / leakages, calculate *k*, multiply. Two marks.

For **AO3** (analysis), walk at least three rounds of the iteration. Show *where* the extra GDP comes from. This is what separates a Level 2 from a Level 3 paragraph — the difference between quoting the formula and explaining the mechanism.

For **AO4** (evaluation), name the three reasons real-world multipliers are smaller: leakages bigger than assumed, crowding out, Ricardian equivalence — and the conditional that ties them: "the size of the multiplier depends on the state of the cycle. In a deep recession with spare capacity, multipliers are larger; near full employment, smaller." That single conditional sentence covers most of the mark scheme's evaluation criteria for this topic.

:::
