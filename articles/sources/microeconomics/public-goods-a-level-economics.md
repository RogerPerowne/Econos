---
title: "Public goods — A-level economics explained"
description: "Public goods for A-level economics. Non-rivalry, non-excludability, the free-rider problem, and why defence is the textbook case but the BBC isn't quite."
lede: "The two technical properties students confuse, the free-rider problem that explains everything, and why students conflate 'public sector' with 'public good'. Get the four-cell matrix right and the topic is easy."
theme: "Microeconomics"
spec:
  edexcel_a: "1.3.3"
  edexcel_b: null
  aqa: "3.1.5.3"
  ocr: "2.10"
keywords: [public goods, private goods, non-rival, non-excludable, free-rider problem, missing market, quasi-public goods, defence, street lighting]
read_minutes: 9
status: live
published: 2026-05-28
modified: 2026-05-28
spa_topic: public-goods
breadcrumb:
  - { label: "Articles", href: "/articles/" }
  - { label: "Microeconomics" }
  - { label: "Public goods" }

friction:
  - "Most students treat 'public good' as a synonym for 'public sector' — the NHS, schools, anything paid for by tax. It isn't. The NHS is a *publicly provided private good* — your appointment is rival (only you sit in the chair) and excludable (passport check). True public goods (defence, street lighting) are a much narrower set."
  - "And almost nobody draws the four-cell matrix (rival/non-rival × excludable/non-excludable). It's the easiest mark on the paper and the structural map for every example."

glance:
  - { label: "Definition", value: "A good that is BOTH non-rival (my use doesn't reduce yours) AND non-excludable (the producer can't stop non-payers consuming)." }
  - { label: "Canonical examples", value: "National defence, street lighting, flood defences, lighthouses, broadcast TV (pre-encryption), open-source software." }
  - { label: "Why the market fails", value: "Non-excludability triggers the free-rider problem — rational consumers wait for someone else to pay. Private supply collapses; the good is under-provided or never appears." }
  - { label: "Policy fix", value: "State provision, funded through taxation. The government collects involuntarily so the free-rider problem can't form." }
glance_cta:
  href: /edexcel_a/theme-1/public-goods/learn-it
  label: "Want more depth? Explore the full topic →"

questions:
  - difficulty: easy
    type: mcq
    q: "Which is the textbook example of a pure public good?"
    opts: ["NHS appointments", "Public transport", "National defence", "State primary schools"]
    ans: 2
    exp: "Defence is both non-rival (one resident's protection doesn't reduce another's) and non-excludable (you can't defend Camden without also defending Islington). NHS appointments and schools are PRIVATELY consumed but PUBLICLY provided — different concept."
  - difficulty: medium
    type: mcq
    q: "Why does the free-rider problem cause market failure for pure public goods?"
    opts: ["The good is too expensive for private firms", "Non-excludability means rational consumers refuse to pay", "Public goods are always loss-making", "Consumers don't value them"]
    ans: 1
    exp: "If non-payers can't be excluded, every consumer's best response is to let someone else fund the good and consume it for free. Demand revealed in a private market is far below true social benefit, so the good is under-provided or never appears."
  - difficulty: hard
    type: short
    q: "Streetlights, the BBC and the open-source Linux operating system are all sometimes called public goods. Which one fits the textbook definition most cleanly, and why?"
    ans: "Streetlights are the cleanest fit: my using the light doesn't reduce yours (non-rival), and the council can't easily switch them off for non-paying residents (non-excludable). The BBC was a non-excludable broadcast good in the analogue era but became QUASI-public once encryption + iPlayer logins made exclusion technically feasible — the licence fee preserves a non-excludable model by political choice, not technical necessity. Linux is non-rival (copying costs ~0) and non-excludable in distribution, but its production model is voluntary contribution rather than state provision — it shows that some public goods CAN be supplied privately when contributors derive non-pecuniary returns (reputation, use-value). Streetlights satisfy both technical conditions AND the market-failure prediction; the BBC and Linux are public-good-LIKE under different assumptions."

want_more:
  title: "Want more depth?"
  subtitle: "Master public goods with Econos."
  primary_href: /edexcel_a/theme-1/public-goods/learn-it
  primary_label: "Explore the full topic"
  secondary_href: /edexcel_a/theme-1/public-goods/learn-it
  secondary_label: "Sign up free"
---

::: section eyebrow="Learn it in 90 seconds" color="green" icon="bulb"

## Public goods are defined by two technical properties

A pure **public good** has two simultaneous properties:

- **Non-rival** — one person's consumption doesn't reduce the amount available for everyone else. My benefit from street lighting on Oxford Street doesn't dim your benefit.
- **Non-excludable** — once supplied, the producer can't prevent non-payers from consuming. The streetlight can't tell who paid council tax and who didn't.

Both properties together change the supply problem. With non-rivalry alone, the optimal allocation is "let everyone use it" — the marginal cost of an extra user is zero. With non-excludability added, the producer can't charge per use — so a private firm cannot recover the fixed cost from voluntary payments.

That second property is what triggers market failure. Rational consumers know that if they don't pay, they can still consume. So they don't pay. Revealed demand collapses below true demand. The free-rider problem turns a socially valuable good into an unprofitable one — and the private market produces nothing.

:::

::: section eyebrow="The 2×2 matrix" color="blue" icon="target"

## Rival × excludable — four cells, four kinds of good

|  | **Excludable** | **Non-excludable** |
|---|---|---|
| **Rival** | Private good (a sandwich) | Common resource (Atlantic cod) |
| **Non-rival** | Club good (Netflix) | **Public good** (street lighting) |

The four-cell matrix is the structural map. Most A-level examples sit cleanly in one cell:

- **Private goods** dominate the economy. Markets work fine for sandwiches.
- **Club goods** are excludable but non-rival: subscription streaming, gym membership, encrypted satellite TV. Markets work, sometimes with monopoly pricing concerns.
- **Common resources** are rival but non-excludable: fish stocks in international waters, the atmosphere as a carbon sink. The textbook failure is the *tragedy of the commons* — overuse rather than under-provision.
- **Public goods** are the cell where markets fail completely without state provision.

Draw this matrix in your exam answer. It's worth 2 marks for the framework and pre-emptively shows the examiner you understand the *structural* nature of the problem.

:::

::: econ-insight tone="amber" label="Economist insight · ARPANET and the internet" attribution="Public goods and long-run value creation"
State-backed early network investment created huge future value that private firms may not have funded at the start because returns were uncertain and widely shared.
:::

::: section eyebrow="The free-rider problem in detail" color="purple" icon="scale"

## Why voluntary funding can't sustain a public good

Imagine a coastal town considering a £1 million flood defence. The defence is non-rival (it protects every house) and non-excludable (you can't take down the wall for non-payers). A private firm proposes to fund it through voluntary subscriptions.

Each household reasons: *if everyone else contributes, the wall gets built and I'm protected for free. If they don't, my contribution alone won't be enough anyway. Either way, contributing is a bad personal bet.*

In game-theory terms, every household has a dominant strategy of "don't contribute" — even though everyone is worse off if no one contributes. This is the classic prisoner's-dilemma structure that economists call **the free-rider problem**, and it's why coordination failures of this kind require collective action.

The state solves the coordination failure by *removing the choice*. Taxation is involuntary; the wall is funded; the free-rider problem can't form. The trade-off: government must guess the right level of provision without market prices to reveal demand. (Cost-benefit analysis, contingent valuation, and political voting are the rough substitutes.)

:::

::: section eyebrow="Quasi-public goods and edge cases" color="pink" icon="globe"

## Where the matrix gets fuzzy

Real-world examples often satisfy non-rivalry and non-excludability only *partially*, or only under certain conditions.

- **Roads.** Non-rival at low traffic, rival at congestion. Non-excludable in general, excludable through tolling (M6 Toll, Dartford Crossing).
- **Broadcast TV.** Non-rival once produced (one extra viewer costs nothing). Non-excludable in the analogue era; excludable after encryption (Sky, BBC iPlayer login). The licence fee is a political *choice* to fund the BBC as if it were still non-excludable.
- **Knowledge / R&D.** Non-rival (using an idea doesn't deplete it). Excludable through patents and copyrights — *partially*. Spillovers leak.
- **Lighthouses.** Long the textbook example. Ronald Coase pointed out that 18th-century English lighthouses were partly privately funded through harbour dues — i.e. excludability was achieved by charging at the dock, even if you couldn't charge per beam.

The examiner-friendly term for these is **quasi-public goods** — goods that exhibit one property fully and the other partially, or that *become* excludable as technology changes. Naming "quasi-public good" with a worked example is a Level 4 move.

:::

::: section eyebrow="Public good ≠ public sector" color="green" icon="check"

## The most common A-level confusion

Most A-level answers say "the NHS is a public good". It isn't, on the standard definition.

NHS care is:

- **Rival** — only one patient sits in the consultation room at a time; the surgeon's hour is finite. Demand exceeds supply (waiting lists).
- **Excludable** — at the point of registration. Eligibility checks exist. Non-residents are charged for non-emergency care.

The NHS is a **publicly provided private good** — funded through general taxation as a matter of policy choice, not because the market would fail to provide it. (Plenty of countries have functioning private health markets; the UK chose taxpayer funding for distributional reasons, not because health care is non-excludable.)

Conversely, plenty of pure public goods (open-source software, Linux, Wikipedia) are produced *outside* the public sector through voluntary contribution. The "public good ↔ public sector" mapping is loose at both ends.

The exam-ready habit: when you see "is X a public good?", check the two properties. Defence — yes. National parks — partly (excludability via fences and tickets). Health care — no, it's privately consumed.

:::

::: section eyebrow="Exam edge" color="green" icon="cap"

## What the mark scheme actually rewards

- **Define BOTH properties.** Non-rivalry AND non-excludability. Either one alone doesn't qualify.
- **Draw the 2×2 matrix.** Locate the example in the right cell. Two structural marks straight away.
- **Name the free-rider problem.** And explain *why* it causes market failure rather than just naming it.
- **Distinguish pure from quasi-public goods.** Roads, broadcast TV and R&D are the examiner's favourite quasi-public examples.
- **Don't say "public sector" when you mean "public good".** NHS hospitals are publicly funded but not technically public goods.

:::
