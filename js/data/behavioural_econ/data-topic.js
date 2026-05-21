window.ECONOS_TOPIC = {
  id: 'behavioural_econ',
  topicNum: '2.10',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Behavioural Economics',
  estTime: '8-10 minutes',
  goal: 'Understand how real people depart from the rational ideal, and how UK policymakers exploit those patterns to nudge better outcomes at near-zero cost.',
  intro: {
    heroKey: 'heroBehavioural',
    summary: 'Traditional economics assumes rational, self-interested actors. In reality we use mental shortcuts that produce predictable biases. The UK government has built one of the world\'s most active behavioural policy machines on this insight — starting with the most successful nudge in economic history: pension auto-enrolment, which lifted workplace pension participation from ~55% to ~87% at near-zero cost.',
    doInThis: 'Work through 5 cards covering why people aren\'t rational, the four key biases (try each one on yourself), bounded self-control and present bias, four real UK nudges, and how to evaluate behavioural policy.',
    outcomes: [
      'Explain bounded rationality, bounded self-control and habitual behaviour',
      'Identify anchoring, availability, social norms and habit — and recognise each in real contexts',
      'Describe the UK\'s flagship behavioural policies (auto-enrolment, opt-out organ donation, HMRC letters, smart meters)',
      'Evaluate when nudges work, when they don\'t, and what they leave for taxes and regulation'
    ],
    tip: 'Two systems: System 1 fast / automatic / biased; System 2 slow / deliberate / rare. Biases happen when System 1 takes over jobs that need System 2. Nudges work by changing the choice architecture so System 1\'s default produces a better outcome.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'behavioural_econ_1',
      stepLabel: 'Learn: Step 1 of 5',
      title: 'Why people aren\'t rational',
      tip: { icon: '🧠', tone: 'amber', text: 'Two systems run your decisions. <strong>System 1</strong> is fast, automatic and dominant. <strong>System 2</strong> is slow, deliberate and rarely engaged. Almost every bias in this topic happens when System 1 takes over a job that needed System 2.' },
      diagramKey: 'twoSystemsDiagram',
      body: 'Traditional economics assumes <em>homo economicus</em> — fully rational, perfectly informed, with stable preferences. Behavioural economics shows real people depart from this in <strong>systematic, predictable</strong> ways. Daniel Kahneman won the 2002 Nobel for explaining why: two distinct mental systems share the workload, but the fast one dominates.<br><br>This topic builds outward from there. <strong>Card 2</strong> shows four specific biases System 1 produces; <strong>card 3</strong> shows how the present self over-rules the future self; <strong>card 4</strong> shows the UK policies built on these insights; <strong>card 5</strong> evaluates the toolkit.',
      keyTerms: [
        { term: 'Bounded rationality', def: 'Decision-making that is rational within cognitive limits — uses heuristics rather than full optimisation (Simon).' },
        { term: 'Bounded self-control', def: 'The gap between what we know we should do and what we actually do — present preferences override long-term interest.' },
        { term: 'Heuristic', def: 'A mental shortcut or rule of thumb — efficient for most decisions, but causes predictable errors in specific contexts.' },
        { term: 'Habitual behaviour', def: 'Repeating past choices automatically to avoid the cognitive cost of re-deciding — why most shoppers stay loyal to brands.' }
      ],
      examEdge: 'Kahneman\'s <strong>System 1 / System 2</strong> framework underpins all behavioural economics. System 1 handles most decisions because System 2 is cognitively expensive. Biases arise where System 1 confidently answers a question System 2 would have answered differently. Cite this framework once in any behavioural essay — it shows you grasp the underlying mechanism, not just the labels.'
    },

    {
      id: 'behavioural_econ_2',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'The four biases — try them on yourself',
      tip: { icon: '🎯', tone: 'rose', text: 'These four biases aren\'t quirks — they\'re predictable shortcuts. Click through each one and see if you would have fallen for it. Once you can <em>name</em> a bias you can design policy around it.' },
      interactiveDiagram: {
        svgKey: 'biasGalleryInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Anchoring',
            tone: 'blue',
            show: ['idl-1'],
            head: 'Anchoring — the first number sticks',
            body: 'Show a £100 "original" price next to a £60 sale and the £60 feels like a bargain — even if the item was never worth £100. The <strong>first number you see anchors</strong> every later judgement.',
            analysis: 'UK examples: estate agents list high to anchor offers; charity asks suggest "£20 / £50 / £100" (the middle one wins); "was £100, now £60" pricing is regulated by the ASA because retailers were inventing the anchor.'
          },
          {
            label: 'Availability',
            tone: 'amber',
            show: ['idl-2'],
            head: 'Availability — vivid examples warp risk',
            body: 'Plane crashes make headlines; car crashes barely make the local paper. So most people fear flying more — though UK road travel kills <strong>~1,700 a year</strong> while UK commercial aviation killed <strong>zero</strong> over the last decade.',
            analysis: 'We judge probability by how easily examples come to mind, not by frequency. This is why people fear terrorism more than heart disease, sharks more than vending machines, and house fires more than slipping in the bath.'
          },
          {
            label: 'Social norms',
            tone: 'green',
            show: ['idl-3'],
            head: 'Social norms — we do what others do',
            body: 'HMRC ran a famous trial. The control letter asked taxpayers to pay. The new letter added <strong>"9 of 10 people in your area have paid on time"</strong> — lifting on-time payment by ~5 percentage points and adding an estimated <strong>£200m+</strong> in revenue.',
            analysis: 'Telling people what others do beats appealing to duty or threatening fines. Used in everything from hotel towel reuse signs ("75% of guests reuse their towels") to energy bills ("your neighbours used 20% less").'
          },
          {
            label: 'Habit',
            tone: 'purple',
            show: ['idl-4'],
            head: 'Habitual behaviour — defaults win by inertia',
            body: 'Around <strong>60% of UK households</strong> have never switched energy supplier despite typical savings of <strong>£200+ a year</strong>. People stay on the same tariff, same bank account, same brand of cereal — System 1 prefers the familiar even when the familiar is worse.',
            analysis: 'Why Ofgem keeps regulating the energy market: a textbook competitive market should punish bad suppliers, but inertia gives them a captive customer base. Habitual behaviour is the bias that makes "do nothing" defaults so powerful — see card 4.'
          }
        ]
      },
      keyTerms: [
        { term: 'Anchoring', def: 'Over-weighting the first piece of numerical information when making a judgement — even if irrelevant.' },
        { term: 'Availability heuristic', def: 'Judging frequency or probability by how easily examples spring to mind — vivid examples beat statistical ones.' },
        { term: 'Social norm', def: 'A shared expectation about behaviour. People conform to perceived norms even when there is no enforcement.' },
        { term: 'Habitual behaviour', def: 'Repeating past choices automatically — saves cognitive effort but locks in suboptimal outcomes.' }
      ],
      examEdge: 'The UK Behavioural Insights Team (BIT, founded 2010, originally part of the Cabinet Office) systematically tests these biases via <strong>randomised controlled trials</strong>. The HMRC social-norm letter is the canonical example — a free, evidence-tested wording change that raised real revenue at zero marginal cost.'
    },

    {
      id: 'behavioural_econ_3',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Bounded self-control — we know but we don\'t do',
      tip: { icon: '⏳', tone: 'amber', text: '<strong>Bounded self-control</strong>: we genuinely want to act in our long-term interest, but in the moment the present self wins. This is not laziness — it is a structural feature of how humans weigh time. It is also why <strong>pension under-saving</strong> remained a problem for decades.' },
      interactiveDiagram: {
        svgKey: 'presentBiasInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'The set-up',
            tone: 'blue',
            head: 'Two pairs of choices, one week apart',
            body: 'A classic experiment offers two pairs of choices. Each pair has the <strong>same one-week gap</strong> between the smaller-sooner and the larger-later option. A perfectly rational person should answer both pairs the same way.'
          },
          {
            label: 'Choice A',
            tone: 'blue',
            head: 'Choice A — money now or next week?',
            body: '"<strong>£100 today</strong> or <strong>£110 in one week</strong>?" Most people pick £100 today. A week feels like a long time when the alternative is cash right now.',
            analysis: 'Picking £100 today means rejecting a 10% return over one week — an effective annual rate of about 14,000%. No rational agent would do this. But almost everyone does.'
          },
          {
            label: 'Choice B',
            tone: 'amber',
            head: 'Choice B — money in a year or a year and a week?',
            body: '"<strong>£100 in 52 weeks</strong> or <strong>£110 in 53 weeks</strong>?" Now most people happily wait the extra week for the extra £10. The same one-week gap, the same £10 reward — but a different answer.',
            analysis: 'When both rewards are far away, our preference reverses. We become patient again. The "weight" we place on the present is irrational — it shrinks once the present is no longer involved.'
          },
          {
            label: 'The reveal',
            tone: 'rose',
            head: 'Same gap, different decision — that is present bias',
            body: 'Same one-week gap, same £10 incentive — yet the same person flips. That is <strong>present bias</strong> (or hyperbolic discounting). And it is why <strong>pre-2012, only ~55% of UK private-sector workers had a pension</strong>, despite tax relief, employer matches, and decades of warnings.',
            analysis: 'Present bias creates <strong>internalities</strong> — costs we impose on our future selves. Smoking, junk food, missed dentist visits, under-saving. The market provides the goods that satisfy our present-biased demand without correcting the internality — which is why behavioural policy is justified even without externalities. Card 4 shows how the UK fixed pensions.'
          }
        ]
      },
      keyTerms: [
        { term: 'Present bias', def: 'Over-weighting immediate rewards relative to future ones — beyond any normal time preference.' },
        { term: 'Hyperbolic discounting', def: 'The technical name for present bias — the rate at which we discount future rewards is steeper for the near future than the far future.' },
        { term: 'Internality', def: 'A cost a person imposes on their future self through present-biased decisions — like an externality, but internal to the individual.' },
        { term: 'Time-inconsistent preferences', def: 'When the same person makes contradictory decisions about identical trade-offs depending on whether the trade-off is "now" or "later".' }
      ],
      examEdge: '<strong>Internalities</strong> are the strongest behavioural justification for paternalistic policy. A sugar tax, plain tobacco packaging, or pension auto-enrolment can be defended <strong>purely on the grounds of protecting people from their own future cost</strong> — no externality argument required. This is a powerful evaluation point in any policy essay.'
    },

    {
      id: 'behavioural_econ_4',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Nudges that worked — Britain\'s behavioural revolution',
      tip: { icon: '🇬🇧', tone: 'blue', text: 'Britain runs the world\'s most active behavioural government. The <strong>Behavioural Insights Team</strong> (BIT, founded 2010 under the Cameron government) has delivered measurable policy wins at near-zero cost. Click through four interventions that shaped UK policy.' },
      interactiveDiagram: {
        svgKey: 'ukNudgesInteractive',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Pension auto-enrolment',
            tone: 'green',
            show: ['idl-1'],
            head: 'Pension auto-enrolment (2012–2018) — the headline win',
            body: 'Pre-2012 pension participation was stuck at <strong>~55%</strong> despite tax relief and employer matches. From 2012 the default was <strong>flipped</strong>: every eligible worker is enrolled unless they opt out. Participation now sits at <strong>~87%</strong> — a 32 percentage-point jump.',
            analysis: 'The single most successful nudge in economic history. No regulation, no extra tax incentive — just switching the default from opt-in to opt-out. Estimated additional retirement saving: tens of billions of pounds per year by the late 2020s.'
          },
          {
            label: 'Organ donation',
            tone: 'rose',
            show: ['idl-2'],
            head: 'Opt-out organ donation (Wales 2015, England 2020)',
            body: 'Wales moved to <strong>"deemed consent"</strong> — adults are presumed to consent to organ donation unless they opt out. England followed in 2020 (<strong>Max and Keira\'s Law</strong>). Consent rates and registered donors rose in both nations.',
            analysis: 'Countries with opt-out systems (Austria ~99%, Spain ~85%) routinely have donor rates 25–30 percentage points higher than opt-in countries (UK pre-2015 ~37%, US ~40%). Same individuals, same beliefs — only the default differs.'
          },
          {
            label: 'HMRC letters',
            tone: 'amber',
            show: ['idl-3'],
            head: 'HMRC tax letters — the £0 intervention',
            body: 'BIT redesigned reminder letters to use <strong>social norms</strong>: "9 of 10 people in your area have already paid their tax." On-time payment rose by <strong>~5 percentage points</strong>. Estimated additional revenue: <strong>£200m+ a year</strong>.',
            analysis: 'A wording change costing nothing produced what would otherwise have required additional enforcement officers. This is the canonical proof-of-concept for behavioural government. Replicated in dozens of countries.'
          },
          {
            label: 'Smart meters',
            tone: 'purple',
            show: ['idl-4'],
            head: 'Smart meters and neighbour comparisons',
            body: 'Smart meter <strong>in-home displays</strong> show real-time energy spend — making the invisible visible. Suppliers (EDF, Ovo, British Gas) add <strong>neighbour comparison</strong> letters: "Your neighbours used 20% less". Both reduce consumption by <strong>2–3%</strong> on average.',
            analysis: 'A small per-household effect, multiplied across tens of millions of households, delivers material emissions and bill savings — at the marginal cost of a printed letter. The technique works precisely because <strong>social norms</strong> (card 2) beat moral appeals.'
          }
        ]
      },
      keyTerms: [
        { term: 'Nudge', def: 'Any aspect of choice architecture that alters behaviour in a predictable way without forbidding options or significantly changing financial incentives (Thaler & Sunstein, 2008).' },
        { term: 'Choice architecture', def: 'The way options are presented — the order, the default, the framing — which shapes choice without changing the options themselves.' },
        { term: 'Default option', def: 'The outcome that applies if a person does nothing. Defaults are powerful because of habitual behaviour and present bias.' },
        { term: 'Libertarian paternalism', def: 'Thaler & Sunstein\'s philosophy: preserve freedom of choice (libertarian) while steering toward better outcomes (paternalism).' }
      ],
      examEdge: 'The BIT was set up in 2010 under the Cameron government and has since been replicated worldwide. The four examples above all share three features: <strong>(1)</strong> near-zero implementation cost, <strong>(2)</strong> preservation of individual choice (you can still opt out), and <strong>(3)</strong> measured impact via randomised controlled trials. Cite these features as the <em>structural reason</em> nudges have become a mainstream policy tool — not just a list of successful examples.'
    },

    {
      id: 'behavioural_econ_5',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'When nudges work, and when they don\'t',
      tip: { icon: '⚖️', tone: 'slate', text: 'Nudges complement traditional policy — they do not replace taxes or regulation. The art is knowing which lever fits which market failure. For a sugar tax or carbon price, behavioural insight <em>supports</em> a tax; it does not substitute for it.' },
      verdict: {
        leftLabel: '✅ Strengths of the behavioural approach',
        rightLabel: '⚠️ Limitations of the behavioural approach',
        separator: 'VS',
        rows: [
          { aspect: 'Cost',     left: 'Near-zero implementation cost. Auto-enrolment, HMRC letters and smart-meter displays cost a fraction of a tax credit or regulator.', right: 'Small per-person effect for small nudges. Climate change, obesity at scale, gambling addiction need stronger tools than a wording change.' },
          { aspect: 'Freedom',  left: 'Preserves choice — every nudge above is opt-out, not mandated. Libertarian paternalism respects individual autonomy.', right: 'Whose "better"? A government nudge encodes a value judgement about which choice is "right" — open to political abuse and to "elite" framing.' },
          { aspect: 'Evidence', left: 'Rigorously tested. Most BIT interventions go through randomised controlled trials before national rollout — rare in policy.', right: 'Context-specific. A nudge that worked in HMRC may fail in DWP. Effects fade with familiarity ("nudge habituation").' },
          { aspect: 'Politics', left: 'Politically acceptable across parties. Hard to oppose "make the default better" the way taxes or bans attract opposition.', right: '<strong>Sludge</strong>: the private sector uses the same techniques to <em>harm</em> consumers — subscription traps, complex tariffs, dark patterns in apps.' }
        ]
      },
      keyTerms: [
        { term: 'Sludge', def: 'Choice architecture deliberately designed to obstruct good decisions — the opposite of a nudge. Examples: subscription traps, confusing energy tariffs, dark-pattern UX.' },
        { term: 'Internality', def: 'A cost a present-biased person imposes on their future self — justifies paternalistic intervention even without externalities.' },
        { term: 'Randomised controlled trial (RCT)', def: 'The gold-standard evaluation method — randomly assign participants to treatment and control, measure the difference. BIT uses RCTs to test nudges before rollout.' }
      ],
      examEdge: 'Top evaluation line: <strong>"Nudges complement but do not substitute for traditional policy."</strong> Pension auto-enrolment works because it solves a specific bias (present bias / habit). A carbon tax is still needed to price the externality — no nudge will deliver 78% emissions reductions by 2035. The strongest behavioural essays show <em>which</em> bias is being targeted and <em>why</em> a nudge is the right tool for that bias — while admitting where structural intervention is unavoidable.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
