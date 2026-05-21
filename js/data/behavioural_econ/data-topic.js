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
    doInThis: 'Work through 5 cards covering why people aren\'t rational, the four key biases (try each one on yourself), bounded self-control and commitment devices, four real UK nudges, and how to evaluate behavioural policy.',
    outcomes: [
      'Explain bounded rationality, bounded self-control and habitual behaviour',
      'Identify anchoring, loss aversion, availability and social norms — and recognise each in real contexts',
      'Describe the UK\'s flagship behavioural policies (auto-enrolment, opt-out organ donation, HMRC letters, NHS reminders)',
      'Place nudges on the policy spectrum (information → nudge → tax/subsidy → regulation) and judge when each fits'
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
      tip: { icon: '🧠', tone: 'amber', text: 'Kahneman\'s two-systems framework underpins all of behavioural economics. <strong>System 1</strong> is fast, automatic and biased. <strong>System 2</strong> is slow, deliberate and rarely engaged. Almost every bias in this topic happens when System 1 takes over a job that needed System 2.' },
      diagramKey: 'whyNotRationalDiagram',
      diagramLabel: 'Rational vs real',
      diagramEmoji: '🧠',
      keyPointsLabel: 'Three departures from rationality',
      keyPointsEmoji: '🔍',
      keyPoints: [
        { title: 'Limited attention', icon: '🔍', headline: 'We process what\'s easiest, not most relevant', body: 'System 1 filters ruthlessly — first numbers, familiar brands, vivid images. Whatever is most salient gets weighted, regardless of statistical importance.', tone: 'amber' },
        { title: 'Status & heuristics', icon: '👥', headline: 'We copy others and follow rules of thumb', body: 'Mental shortcuts work well most of the time and fail predictably in specific contexts. Social norms and default options exploit this directly.', tone: 'purple' },
        { title: 'Present bias', icon: '⏱️', headline: 'We overweight today vs every future day', body: 'The planner self sets intentions; the doer self acts in the moment. Pensions, diets and exercise routines all suffer from this structural gap.', tone: 'blue' }
      ],
      keyTerms: [
        { term: 'Bounded rationality', def: 'Decision-making that is rational within cognitive limits — uses heuristics rather than full optimisation (Simon).' },
        { term: 'Bounded self-control', def: 'The gap between what we know we should do and what we actually do — present preferences override long-term interest.' },
        { term: 'Heuristic', def: 'A mental shortcut or rule of thumb — efficient for most decisions, but causes predictable errors in specific contexts.' },
        { term: 'Habitual behaviour', def: 'Repeating past choices automatically to avoid the cognitive cost of re-deciding — why most shoppers stay loyal to brands.' }
      ],
      examEdge: 'Kahneman\'s <strong>System 1 / System 2</strong> framework is the most useful single sentence in any behavioural essay. Cite it once to show you grasp the underlying mechanism, not just the labels. Then point to <em>which</em> system is producing the behaviour you\'re analysing — and which policy lever (information, nudge, tax, regulation) targets it.'
    },

    {
      id: 'behavioural_econ_2',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'The four biases — try them on yourself',
      tip: { icon: '🎯', tone: 'rose', text: 'These four biases aren\'t quirks — they\'re predictable shortcuts. Click through each one, and read the <em>mini-test</em> at the bottom of every panel. If you would have fallen for it, you\'ve felt the bias in action.' },
      interactiveDiagram: {
        svgKey: 'biasGalleryInteractive',
        wide: true,
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Anchoring',
            tone: 'blue',
            show: ['idl-1'],
            head: 'Anchoring — the first number sticks',
            body: 'A £100 "original" price next to a £60 sale makes the £60 feel like a bargain — even if the item was never worth £100. The <strong>first number you see anchors</strong> every later judgement.',
            analysis: '<strong>Mini-test:</strong> a charity asks you to donate "£20, £50, or £100". Which feels reasonable? Now imagine they\'d listed "£5, £10, or £20". The "reasonable" amount has just moved. <br><br>UK examples: estate agents list high to anchor offers; ASA polices fake "was £100" prices precisely because the trick works.'
          },
          {
            label: 'Loss aversion',
            tone: 'rose',
            show: ['idl-4'],
            head: 'Loss aversion — losses hurt twice as much as gains feel good',
            body: 'Kahneman &amp; Tversky showed the pain of losing £100 is roughly twice the pleasure of gaining £100. We are <strong>not symmetric</strong> about the £0 reference point.',
            analysis: '<strong>Mini-test:</strong> would you rather (A) take £50 for sure, or (B) flip a coin for £100? Most people pick (A). Now reverse it: (A) lose £50 for sure, or (B) flip a coin to lose £100 or nothing? Most pick (B). <br><br>Same maths, opposite choice — because losses change everything. This is why people hold falling shares, stay in worse mortgages, and dodge any decision framed as a "loss".'
          },
          {
            label: 'Availability',
            tone: 'amber',
            show: ['idl-2'],
            head: 'Availability — vivid examples warp risk',
            body: 'Plane crashes make headlines; car crashes barely make the local paper. So most people fear flying more — though UK road travel kills <strong>~1,700 a year</strong> while UK commercial aviation killed <strong>zero</strong> over the last decade.',
            analysis: '<strong>Mini-test:</strong> which kills more people in the UK each year — terrorism or falling down stairs? (Stairs, by a factor of ~50.) Which feels riskier? <br><br>We judge probability by how easily examples come to mind. So vivid, recent, emotional events feel common — and policy that fights them is politically popular even when it doesn\'t save the most lives.'
          },
          {
            label: 'Social norms',
            tone: 'green',
            show: ['idl-3'],
            head: 'Social norms — we do what others do',
            body: 'HMRC ran a famous trial. The control letter asked taxpayers to pay. The new letter added <strong>"9 of 10 people in your area have paid on time"</strong> — lifting on-time payment by ~5 percentage points and adding an estimated <strong>£200m+</strong> in annual revenue.',
            analysis: '<strong>Mini-test:</strong> a busy restaurant with a queue vs an empty one next door — which feels safer to eat in? <br><br>Telling people what others do beats appealing to duty or threatening fines. The same lever runs hotel towel signs ("75% of guests reuse"), energy bills ("your neighbours used 20% less"), and now NHS appointment reminders (card 4).'
          }
        ]
      },
      causes: [
        { icon: '🏷️', head: 'Anchoring in retail & negotiation', tone: 'blue', body: 'Fake "was £100, now £60" prices work even when the original price was fictitious — why the ASA polices them. Salary negotiations are anchored by whoever names a number first; estate agents list high deliberately to shift expectations.' },
        { icon: '📉', head: 'Loss aversion in finance', tone: 'rose', body: 'Investors hold losing shares to avoid "crystallising" a loss, even when selling is rationally correct. Status-quo bias keeps households on worse energy tariffs and mortgages for years after better options appear.' },
        { icon: '📱', head: 'Social norms in compliance', tone: 'green', body: 'HMRC\'s "9 of 10 people in your area paid on time" added ~£200m+ in annual revenue at zero cost. Hotel towel reuse signs ("75% of guests reuse") consistently outperform environmental-appeal messaging.' }
      ],
      keyTerms: [
        { term: 'Anchoring', def: 'Over-weighting the first piece of numerical information when making a judgement — even if irrelevant.' },
        { term: 'Loss aversion', def: 'Losses feel about twice as bad as equivalent gains feel good. Underlies the endowment effect, status-quo bias, and disposition effect (Kahneman & Tversky).' },
        { term: 'Availability heuristic', def: 'Judging frequency or probability by how easily examples spring to mind — vivid examples beat statistical ones.' },
        { term: 'Social norm', def: 'A shared expectation about behaviour. People conform to perceived norms even when there is no enforcement.' }
      ],
      examEdge: 'Naming the right bias is worth real marks. <strong>Loss aversion</strong> in particular explains why people pay too much for warranties, why investors hold losing stocks, and why the status quo (including bad defaults) is so sticky. The UK Behavioural Insights Team (BIT, founded 2010) tests every nudge via <strong>randomised controlled trials</strong> — the HMRC social-norm letter is the canonical case.'
    },

    {
      id: 'behavioural_econ_3',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Bounded self-control — we know but we don\'t do',
      tip: { icon: '⏳', tone: 'amber', text: 'We genuinely want to act in our long-term interest — but in the moment the present self wins. This is <strong>not laziness</strong>. It is a structural feature of how humans weigh time. It is also why pension under-saving remained a problem for decades despite tax relief and employer matches.' },
      interactiveDiagram: {
        svgKey: 'boundedSelfControlInteractive',
        wide: true,
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Planner vs Doer',
            tone: 'green',
            show: ['idl-1'],
            head: 'Two voices inside one head',
            body: 'Thaler and Shefrin describe us as two selves sharing a body. The <strong>planner self</strong> wants the long-term best (revise, save, eat well). The <strong>doer self</strong> wants the easy option now (scroll, spend, snack). The doer almost always wins in the moment.',
            analysis: 'This is <strong>bounded self-control</strong>: the gap between knowing better and doing better. It produces <strong>internalities</strong> — costs we impose on our future selves. Smoking, junk food, under-saving, missed dentist visits. The market provides what the doer wants without correcting the cost to the planner — which is the strongest argument for paternalistic policy without any externality.'
          },
          {
            label: 'The experiment',
            tone: 'amber',
            show: ['idl-2'],
            head: 'The classic two-pair choice — same gap, different answer',
            body: 'Offered <strong>£100 today vs £110 in a week</strong>, most people take the £100. Offered <strong>£100 in 52 weeks vs £110 in 53 weeks</strong>, the same people happily wait. Same one-week gap. Same £10. Different decision.',
            analysis: '<strong>Picking £100 today means rejecting a 10% return over one week</strong> — an effective annual rate of ~14,000%. No rational agent would do this. But almost everyone does. <br><br>This is <strong>hyperbolic discounting</strong>: we discount the near future steeply, the far future barely. Pre-2012, only ~55% of UK private-sector workers had a pension. Tax relief was generous; employers matched contributions; the maths was obvious. None of it overrode the present self.'
          },
          {
            label: 'How to beat it',
            tone: 'purple',
            show: ['idl-3'],
            head: 'Commitment devices — bind your future self in advance',
            body: 'If the present self is unreliable, the planner can <strong>lock the choice in advance</strong> — when she has the willpower. Three families of tool: <strong>auto-defaults</strong> (decision pre-made), <strong>pre-commitment</strong> (irreversible promise), and <strong>removing temptation</strong> (take the option away).',
            analysis: 'Modern UK life is full of commitment devices, often without the label: direct debits for savings, gym contracts that auto-renew, phone-free study apps, NHS Stop Smoking quit-dates, supermarket online shops that prevent impulse buys. <br><br>Card 4 shows the most powerful commitment device of all: <strong>pension auto-enrolment</strong>, where the government locks in the planner\'s choice on the doer\'s behalf.'
          }
        ]
      },
      causes: [
        { icon: '🏋️', head: 'Gym contracts & quit-dates', tone: 'blue', body: 'NHS Stop Smoking quit-dates commit the planner\'s resolve before the doer can veto it. Gym auto-renewal contracts exploit the same mechanism in reverse — the doer\'s past self locks the present self in.' },
        { icon: '🧾', head: 'Direct debits & savings round-ups', tone: 'green', body: 'Standing orders for savings automate the planner\'s decision before payday — the doer never sees the money. App round-ups (Monzo, Revolut) turn every purchase into a micro-saving without any willpower required.' },
        { icon: '📵', head: 'Digital temptation removal', tone: 'purple', body: 'Phone-free study apps (Forest, Freedom) remove the temptation option rather than relying on willpower. Online supermarket shopping prevents impulse purchases in the snack aisle — changing the environment beats changing the person.' }
      ],
      keyTerms: [
        { term: 'Present bias', def: 'Over-weighting immediate rewards relative to future ones — beyond any normal time preference.' },
        { term: 'Hyperbolic discounting', def: 'The technical name for present bias — the rate at which we discount future rewards is steeper for the near future than the far future.' },
        { term: 'Internality', def: 'A cost a person imposes on their future self through present-biased decisions — like an externality, but internal to the individual.' },
        { term: 'Commitment device', def: 'A tool that locks in a choice in advance, so the future self cannot abandon the planner\'s preferred path.' }
      ],
      examEdge: '<strong>Internalities are the strongest behavioural justification for paternalism.</strong> A sugar tax, plain tobacco packaging, or pension auto-enrolment can be defended purely on the grounds of protecting people from their own future cost — no externality argument required. This is a powerful evaluation point in any policy essay.'
    },

    {
      id: 'behavioural_econ_4',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Nudges that worked — Britain\'s behavioural revolution',
      tip: { icon: '🇬🇧', tone: 'blue', text: 'Britain runs the world\'s most active behavioural government. The <strong>Behavioural Insights Team</strong> (BIT, founded 2010 under the Cameron government) has delivered measurable policy wins at near-zero cost. Four UK case studies below — each illustrating the framework in action.' },
      flowTitle: 'The BIT framework — small tweaks, big effects',
      flow: [
        { icon: '🏗️', title: 'Choose architecture', sub: 'Redesign the choice environment — defaults, framing, sequencing — without removing options.', tone: 'blue' },
        { icon: '🧭', title: 'Behaviour change', sub: 'Freedom is preserved and cost is near-zero. People stay on the default; the planner\'s choice wins.', tone: 'purple' },
        { icon: '📊', title: 'Test and scale', sub: 'Every BIT intervention runs as an RCT. Evidence-tested results are measured, refined and rolled out nationally.', tone: 'green' }
      ],
      interactiveDiagram: {
        svgKey: 'ukNudgesInteractive',
        wide: true,
        label: 'Four UK cases in action',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4', 'idl-6'],
        views: [
          {
            label: 'Pension auto-enrol',
            tone: 'green',
            show: ['idl-1'],
            head: 'Pension auto-enrolment (2012–2018) — the headline win',
            body: 'Pre-2012 pension participation was stuck at <strong>~55%</strong> despite tax relief and employer matches. From 2012 the default was <strong>flipped</strong>: every eligible worker is enrolled unless they opt out. Participation now sits at <strong>~87%</strong> — a 32 percentage-point jump.',
            analysis: 'The single most successful nudge in economic history. No new regulation, no extra tax incentive — just switching the default from opt-in to opt-out. Estimated additional retirement saving: tens of billions of pounds per year by the late 2020s. <br><br>Mechanism: <strong>loss aversion + status-quo bias</strong> mean people stay on whatever the default is.'
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
            analysis: 'A wording change costing nothing produced what would otherwise have required additional enforcement officers. The canonical proof-of-concept for behavioural government — replicated in dozens of countries.'
          },
          {
            label: 'NHS reminders',
            tone: 'purple',
            show: ['idl-4'],
            head: 'NHS appointment reminders — saving clinician time at scale',
            body: 'The UK NHS loses ~7m appointments a year to no-shows — costing around <strong>£300m</strong> in wasted clinician time. BIT-redesigned <strong>SMS reminders</strong> using social norms ("9 of 10 people attend their appointment") cut no-shows by roughly <strong>25-35%</strong> in trial settings.',
            analysis: 'Why it works: the SMS hits at the right moment (just before the appointment), is simple, costs pennies per message, and aligns with how patients decide — adding social-proof information that the standard reminder didn\'t carry. <br><br>This is the four-pillar test of card 4 in miniature: <strong>timely · simple · low cost · aligned</strong>.'
          },
          {
            label: 'Why they worked',
            tone: 'slate',
            show: ['idl-6'],
            head: 'The four-pillar test — and how to use it in an essay',
            body: 'Every successful UK nudge above shares four features: <strong>Timely · Simple · Low cost · Aligned</strong> with how people decide. When all four are present, nudges deliver outsized returns. When one is missing, they tend to fail.',
            analysis: 'Use this directly in essays: "The HMRC nudge worked because it was timely (at the point of payment), simple (six extra words), low cost (no implementation expense), and aligned with how people decide (social norms beat moral appeals)." That single sentence shows you understand the mechanism, not just the example.'
          }
        ]
      },
      keyTerms: [
        { term: 'Nudge', def: 'Any aspect of choice architecture that alters behaviour in a predictable way without forbidding options or significantly changing financial incentives (Thaler & Sunstein, 2008).' },
        { term: 'Choice architecture', def: 'The way options are presented — the order, the default, the framing — which shapes choice without changing the options themselves.' },
        { term: 'Default option', def: 'The outcome that applies if a person does nothing. Defaults are powerful because of habitual behaviour, loss aversion and present bias.' },
        { term: 'Libertarian paternalism', def: 'Thaler & Sunstein\'s philosophy: preserve freedom of choice (libertarian) while steering toward better outcomes (paternalism).' }
      ],
      examEdge: 'The BIT was set up in 2010 and has since been replicated worldwide. The four cases above all share the four-pillar structure (<strong>timely, simple, low cost, aligned</strong>). Cite these features as the <em>structural reason</em> nudges have become a mainstream policy tool — not just a list of successful examples.'
    },

    {
      id: 'behavioural_econ_5',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'When nudges work, and when they don\'t',
      tip: { icon: '⚖️', tone: 'slate', text: 'Nudges <strong>complement</strong> traditional policy — they do not replace taxes or regulation. The art is knowing which lever fits which market failure. For a carbon price or sugar tax, behavioural insight <em>supports</em> the tax; it does not substitute for it.' },
      continuum: {
        title: 'The policy spectrum — choosing the right lever',
        leftCap: 'Softest',
        rightCap: 'Strongest',
        items: [
          {
            icon: '💬',
            title: 'Information & Nudge',
            verdict: 'Bias is binding',
            verdictTone: 'blue',
            body: 'When the problem is knowledge gaps or cognitive bias. Near-zero cost; choice preserved. Default changes and social-norm messages sit here.'
          },
          {
            icon: '💰',
            title: 'Tax & Subsidy',
            verdict: 'Price is binding',
            verdictTone: 'amber',
            body: 'When behaviour persists despite awareness. Carbon taxes, sugar levies. Behavioural framing helps, but the price instrument is still required.'
          },
          {
            icon: '⛔',
            title: 'Regulation & Ban',
            verdict: 'Harm too severe',
            verdictTone: 'rose',
            body: 'When market failure is too large for price signals alone. Seatbelt laws, tobacco ad bans. Individual choice is overridden because harm extends beyond the individual.'
          }
        ]
      },
      keyPoints: [
        { title: 'Timely', icon: '⏱️', headline: 'Reaches people at the moment of decision', body: 'An NHS reminder lands just before an appointment; auto-enrolment fires at job-start. Timing is the mechanism.', tone: 'green' },
        { title: 'Simple', icon: '✏️', headline: 'One idea, delivered in a sentence', body: '"9 of 10 people in your area paid" — not a paragraph, not a threat. A single social fact.', tone: 'blue' },
        { title: 'Low cost', icon: '💰', headline: 'Near-zero marginal cost', body: 'A wording change, a default flip, an SMS — a fraction of the cost of a tax credit or enforcement team.', tone: 'amber' },
        { title: 'Aligned', icon: '🎯', headline: 'Works with how people actually decide', body: 'Targets System 1 directly — norms, loss aversion, inertia — rather than relying on System 2 deliberation.', tone: 'purple' }
      ],
      verdict: {
        leftLabel: '✅ Strengths of the behavioural approach',
        rightLabel: '⚠️ Limitations and risks',
        separator: 'VS',
        rows: [
          { aspect: 'Cost',     left: 'Near-zero implementation cost. Auto-enrolment, HMRC letters and NHS-reminder texts cost a fraction of a tax credit or enforcement team.', right: 'Small per-person effect. Climate change, obesity at scale and addiction need stronger tools than a wording change.' },
          { aspect: 'Freedom',  left: 'Preserves choice — every nudge above is opt-out, not mandated. Libertarian paternalism respects individual autonomy.', right: 'Whose "better"? A government nudge encodes a value judgement about which choice is right — open to political abuse and to "elite" framing.' },
          { aspect: 'Evidence', left: 'Rigorously tested. Most BIT interventions go through randomised controlled trials before national rollout — rare in policy.', right: 'Context-specific. A nudge that worked in HMRC may fail in DWP. Effects fade with familiarity ("nudge habituation").' },
          { aspect: 'Politics', left: 'Politically acceptable across parties. Hard to oppose "make the default better" the way taxes or bans attract opposition.', right: '<strong>Sludge</strong>: the private sector uses the same techniques to <em>harm</em> consumers — subscription traps, complex tariffs, dark patterns in apps.' }
        ]
      },
      keyTerms: [
        { term: 'Sludge', def: 'Choice architecture deliberately designed to obstruct good decisions — the opposite of a nudge. Examples: subscription traps, confusing energy tariffs, dark-pattern UX.' },
        { term: 'Policy spectrum', def: 'The range of behavioural tools from soft to hard: information → nudge → tax/subsidy → regulation. Choose by what is binding: knowledge, bias, price, or harm.' },
        { term: 'Randomised controlled trial (RCT)', def: 'The gold-standard evaluation method — randomly assign participants to treatment and control, measure the difference. BIT uses RCTs to test nudges before rollout.' }
      ],
      examEdge: 'Top evaluation line: <strong>"Nudges complement but do not substitute for traditional policy."</strong> Pension auto-enrolment works because the bias <em>is</em> the binding constraint (inertia). A carbon tax is still needed where the binding constraint is a market price (externality). The strongest behavioural essays state <em>which</em> bias is being targeted, <em>why</em> a nudge is the right tool for that bias, and where the policy spectrum demands a stronger lever instead.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
