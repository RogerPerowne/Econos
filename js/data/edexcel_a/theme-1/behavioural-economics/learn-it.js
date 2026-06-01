window.ECONOS_TOPIC = {
  id: 'behavioural-economics',
  topicNum: '2.10',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Behavioural Economics',
  estTime: '8-10 minutes',
  goal: 'Understand how real people depart from the rational ideal, and how UK policymakers exploit those patterns to nudge better outcomes at near-zero cost.',
  intro: {
    heroKey: 'heroBehavioural',
    summary: 'Traditional economics assumes rational, self-interested actors. In reality we use mental shortcuts that produce predictable biases. The UK government has built one of the world\'s most active behavioural policy machines on this insight – starting with the most successful nudge in economic history: pension auto-enrolment, which lifted workplace pension participation from ~55% to ~87% at near-zero cost.',
    doInThis: 'Work through 5 cards covering why people aren\'t rational, the four key biases (try each one on yourself), bounded self-control and commitment devices, four real UK nudges, and how to evaluate behavioural policy.',
    outcomes: [
      'Explain bounded rationality, bounded self-control and habitual behaviour',
      'Identify anchoring, loss aversion, availability and social norms – and recognise each in real contexts',
      'Describe the UK\'s flagship behavioural policies (auto-enrolment, opt-out organ donation, HMRC letters, NHS reminders)',
      'Place nudges on the policy spectrum (information → nudge → tax/subsidy → regulation) and judge when each fits'
    ],
    tip: 'Two systems: System 1 fast / automatic / biased; System 2 slow / deliberate / rare. Biases happen when System 1 takes over jobs that need System 2. Nudges work by changing the choice architecture so System 1\'s default produces a better outcome.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
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
        { title: 'Limited attention', icon: '🔍', headline: 'We process what\'s easiest, not most relevant', body: 'System 1 filters ruthlessly – first numbers, familiar brands, vivid images. Whatever is most salient gets weighted, regardless of statistical importance.', tone: 'amber' },
        { title: 'Status & heuristics', icon: '👥', headline: 'We copy others and follow rules of thumb', body: 'Mental shortcuts work well most of the time and fail predictably in specific contexts. Social norms and default options exploit this directly.', tone: 'purple' },
        { title: 'Present bias', icon: '⏱️', headline: 'We overweight today vs every future day', body: 'The planner self sets intentions; the doer self acts in the moment. Pensions, diets and exercise routines all suffer from this structural gap.', tone: 'blue' }
      ],
      economistQuote: {
        portraitKey: 'economistDanielKahneman',
        tone: 'amber',
        label: 'Economist insight on behavioural economics',
        quote: 'Nothing in life is as important as you think it is, while you are thinking about it.',
        attribution: 'Daniel Kahneman, <em>Thinking, Fast and Slow</em> (2011)'
      },
      keyTerms: [
        { term: 'Bounded rationality', def: 'Decision-making that is rational within cognitive limits – uses heuristics rather than full optimisation (Simon).' },
        { term: 'Bounded self-control', def: 'The gap between what we know we should do and what we actually do – present preferences override long-term interest.' },
        { term: 'Heuristic', def: 'A mental shortcut or rule of thumb – efficient for most decisions, but causes predictable errors in specific contexts.' },
        { term: 'Habitual behaviour', def: 'Repeating past choices automatically to avoid the cognitive cost of re-deciding – why most shoppers stay loyal to brands.' }
      ],
      examEdge: 'Kahneman\'s <strong>System 1 / System 2</strong> framework is the most useful single sentence in any behavioural essay. Cite it once to show you grasp the underlying mechanism, not just the labels. Then point to <em>which</em> system is producing the behaviour you\'re analysing – and which policy lever (information, nudge, tax, regulation) targets it.'
    },

    {
      id: 'behavioural_econ_2',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'The four biases – try them on yourself',
      tip: { icon: '🎯', tone: 'rose', text: 'These four biases aren\'t quirks – they\'re predictable shortcuts. Click through each one, and read the <em>mini-test</em> at the bottom of every panel. If you would have fallen for it, you\'ve felt the bias in action.' },
      interactiveDiagram: {
        svgKey: 'biasGalleryInteractive',
        wide: true,
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Anchoring',
            tone: 'blue',
            show: ['idl-1'],
            head: 'Anchoring – the first number sticks',
            body: 'A £100 "original" price next to a £60 sale makes the £60 feel like a bargain – even if the item was never worth £100. The <strong>first number you see anchors</strong> every later judgement.',
            analysis: '<strong>Mini-test:</strong> a charity asks you to donate "£20, £50, or £100". Which feels reasonable? Now imagine they\'d listed "£5, £10, or £20". The "reasonable" amount has just moved. <br><br>UK examples: estate agents list high to anchor offers; ASA polices fake "was £100" prices precisely because the trick works.'
          },
          {
            label: 'Loss aversion',
            tone: 'rose',
            show: ['idl-4'],
            head: 'Loss aversion – losses hurt twice as much as gains feel good',
            body: 'Kahneman &amp; Tversky showed the pain of losing £100 is roughly twice the pleasure of gaining £100. We are <strong>not symmetric</strong> about the £0 reference point.',
            analysis: '<strong>Mini-test:</strong> (A) take £50 for sure, or (B) flip a coin for £100? Most pick (A). Reverse it: (A) lose £50 for sure, or (B) flip to lose £100 or nothing? Most pick (B). <br><br>Same maths, opposite choice – losses change everything. It\'s why people hold falling shares and dodge any decision framed as a "loss".'
          },
          {
            label: 'Availability',
            tone: 'amber',
            show: ['idl-2'],
            head: 'Availability – vivid examples warp risk',
            body: 'Plane crashes make headlines; car crashes barely make the local paper. So most people fear flying more – though UK road travel kills <strong>~1,700 a year</strong> while UK commercial aviation killed <strong>zero</strong> over the last decade.',
            analysis: '<strong>Mini-test:</strong> which kills more people in the UK each year – terrorism or falling down stairs? (Stairs, by a factor of ~50.) Which feels riskier? <br><br>We judge probability by how easily examples come to mind. So vivid, recent, emotional events feel common – and policy that fights them is politically popular even when it doesn\'t save the most lives.'
          },
          {
            label: 'Social norms',
            tone: 'green',
            show: ['idl-3'],
            head: 'Social norms – we do what others do',
            body: 'HMRC ran a famous trial. The control letter asked taxpayers to pay. The new letter added <strong>"9 of 10 people in your area have paid on time"</strong> – lifting on-time payment by ~5 percentage points and adding an estimated <strong>£200m+</strong> in annual revenue.',
            analysis: '<strong>Mini-test:</strong> a busy restaurant with a queue vs an empty one next door – which feels safer to eat in? <br><br>Telling people what others do beats appealing to duty or threatening fines. The same lever runs hotel towel signs ("75% of guests reuse"), energy bills ("your neighbours used 20% less"), and now NHS appointment reminders (card 4).'
          }
        ]
      },
      keyPointsLabel: 'Biases in the wild',
      keyPointsEmoji: '🔎',
      keyPoints: [
        { title: 'Anchoring in retail & negotiation', icon: '🏷️', tone: 'blue', headline: 'Fake "was £100, now £60" prices work even if the original price was fictitious', body: 'That\'s why the ASA polices them. Salary negotiations are anchored by whoever names a number first; estate agents list high deliberately to shift expectations.' },
        { title: 'Loss aversion in finance', icon: '📉', tone: 'rose', headline: 'Investors hold losing shares to avoid "crystallising" the loss', body: 'Even when selling is rationally correct. Status-quo bias keeps households on worse energy tariffs and mortgages for years after better options appear.' },
        { title: 'Social norms in compliance', icon: '📱', tone: 'green', headline: 'HMRC\'s "9 of 10 paid on time" line added ~£200m+ at zero cost', body: 'Hotel towel-reuse signs ("75% of guests reuse") consistently outperform environmental-appeal messaging – and the underlying mechanism is identical.' }
      ],
      keyTerms: [
        { term: 'Anchoring', def: 'Over-weighting the first piece of numerical information when making a judgement – even if irrelevant.' },
        { term: 'Loss aversion', def: 'Losses feel about twice as bad as equivalent gains feel good. Underlies the endowment effect, status-quo bias, and disposition effect (Kahneman & Tversky).' },
        { term: 'Availability heuristic', def: 'Judging frequency or probability by how easily examples spring to mind – vivid examples beat statistical ones.' },
        { term: 'Social norm', def: 'A shared expectation about behaviour. People conform to perceived norms even when there is no enforcement.' }
      ],
      examEdge: 'Naming the right bias is worth real marks. <strong>Loss aversion</strong> in particular explains why people pay too much for warranties, why investors hold losing stocks, and why the status quo (including bad defaults) is so sticky. The UK Behavioural Insights Team (BIT, founded 2010) tests every nudge via <strong>randomised controlled trials</strong> – the HMRC social-norm letter is the canonical case.'
    },

    {
      id: 'behavioural_econ_3',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Bounded self-control – we know but we don\'t do',
      tip: { icon: '⏳', tone: 'amber', text: 'We genuinely want to act in our long-term interest – but in the moment the present self wins. This is <strong>not laziness</strong>. It is a structural feature of how humans weigh time. It is also why pension under-saving remained a problem for decades despite tax relief and employer matches.' },
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
            analysis: 'This is <strong>bounded self-control</strong>: the gap between knowing better and doing better. It produces <strong>internalities</strong> – costs we impose on our future selves (smoking, junk food, under-saving). The market gives the doer what they want without correcting the cost to the planner – the strongest case for paternalism without any externality.'
          },
          {
            label: 'The experiment',
            tone: 'amber',
            show: ['idl-2'],
            head: 'The classic two-pair choice – same gap, different answer',
            body: 'Offered <strong>£100 today vs £110 in a week</strong>, most people take the £100. Offered <strong>£100 in 52 weeks vs £110 in 53 weeks</strong>, the same people happily wait. Same one-week gap. Same £10. Different decision.',
            analysis: '<strong>Picking £100 today rejects a 10% return over one week</strong> – an effective annual rate of ~14,000%. No rational agent would; almost everyone does. <br><br>This is <strong>hyperbolic discounting</strong>: we discount the near future steeply, the far future barely. Pre-2012, only ~55% of UK private-sector workers had a pension despite generous tax relief – the present self won.'
          },
          {
            label: 'How to beat it',
            tone: 'purple',
            show: ['idl-3'],
            head: 'Commitment devices – bind your future self in advance',
            body: 'If the present self is unreliable, the planner can <strong>lock the choice in advance</strong> – when she has the willpower. Three families of tool: <strong>auto-defaults</strong> (decision pre-made), <strong>pre-commitment</strong> (irreversible promise), and <strong>removing temptation</strong> (take the option away).',
            analysis: 'Modern UK life is full of commitment devices, often unlabelled: direct debits for savings, auto-renewing gym contracts, phone-free study apps, NHS quit-dates. <br><br>Card 4 shows the most powerful of all: <strong>pension auto-enrolment</strong>, where the government locks in the planner\'s choice on the doer\'s behalf.'
          }
        ]
      },
      keyPointsLabel: 'Commitment devices in practice',
      keyPointsEmoji: '🔒',
      keyPoints: [
        { title: 'Gym contracts & quit-dates', icon: '🏋️', tone: 'blue', headline: 'Lock in the planner\'s resolve before the doer can veto', body: 'NHS Stop Smoking quit-dates commit you to a specific date in advance. Gym auto-renewal contracts exploit the same mechanism in reverse – the doer\'s past self locks the present self in.' },
        { title: 'Direct debits & savings round-ups', icon: '🧾', tone: 'green', headline: 'Automate the saving before payday – so the doer never sees the money', body: 'Standing orders move savings on payday. App round-ups (Monzo, Revolut) turn every purchase into a micro-saving without any willpower required.' },
        { title: 'Digital temptation removal', icon: '📵', tone: 'purple', headline: 'Remove the temptation rather than rely on willpower', body: 'Phone-free study apps (Forest, Freedom) take the doer\'s options away. Online supermarket shopping prevents impulse purchases in the snack aisle – changing the environment beats changing the person.' }
      ],
      keyTerms: [
        { term: 'Present bias', def: 'Over-weighting immediate rewards relative to future ones – beyond any normal time preference.' },
        { term: 'Hyperbolic discounting', def: 'The technical name for present bias – the rate at which we discount future rewards is steeper for the near future than the far future.' },
        { term: 'Internality', def: 'A cost a person imposes on their future self through present-biased decisions – like an externality, but internal to the individual.' },
        { term: 'Commitment device', def: 'A tool that locks in a choice in advance, so the future self cannot abandon the planner\'s preferred path.' }
      ],
      examEdge: '<strong>Internalities are the strongest behavioural justification for paternalism.</strong> A sugar tax, plain tobacco packaging, or pension auto-enrolment can be defended purely on the grounds of protecting people from their own future cost – no externality argument required. This is a powerful evaluation point in any policy essay.'
    },

    {
      id: 'behavioural_econ_4',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Nudges that worked – Britain\'s behavioural revolution',
      tip: { icon: '🇬🇧', tone: 'blue', text: 'Britain runs the world\'s most active behavioural government. The <strong>Behavioural Insights Team</strong> (BIT, founded 2010 under the Cameron government) has delivered measurable policy wins at near-zero cost. Four UK case studies below – each illustrating the framework in action.' },
      flowTitle: 'The BIT framework – small tweaks, big effects',
      flow: [
        { icon: '🏗️', title: 'Choose architecture', sub: 'Redesign the choice environment – defaults, framing, sequencing – without removing options.', tone: 'blue' },
        { icon: '🧭', title: 'Behaviour change', sub: 'Freedom is preserved and cost is near-zero. People stay on the default; the planner\'s choice wins.', tone: 'purple' },
        { icon: '📊', title: 'Test and scale', sub: 'Every BIT intervention runs as an RCT. Evidence-tested results are measured, refined and rolled out nationally.', tone: 'green' }
      ],
      interactiveDiagram: {
        svgKey: 'ukNudgesInteractive',
        wide: true,
        label: 'Four UK cases in action',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'Pension auto-enrol',
            tone: 'green',
            show: ['idl-1'],
            head: 'Pension auto-enrolment (2012–2018) – the headline win',
            body: 'Pre-2012 pension participation was stuck at <strong>~55%</strong> despite tax relief and employer matches. From 2012 the default was <strong>flipped</strong>: every eligible worker is enrolled unless they opt out. Participation now sits at <strong>~87%</strong> – a 32 percentage-point jump.',
            analysis: 'The single most successful nudge in economic history. No new regulation, no extra tax incentive – just switching the default from opt-in to opt-out. Estimated additional retirement saving: tens of billions of pounds per year by the late 2020s. <br><br>Mechanism: <strong>loss aversion + status-quo bias</strong> mean people stay on whatever the default is.'
          },
          {
            label: 'Organ donation',
            tone: 'rose',
            show: ['idl-2'],
            head: 'Opt-out organ donation (Wales 2015, England 2020)',
            body: 'Wales moved to <strong>"deemed consent"</strong> – adults are presumed to consent to organ donation unless they opt out. England followed in 2020 (<strong>Max and Keira\'s Law</strong>). Consent rates and registered donors rose in both nations.',
            analysis: 'Countries with opt-out systems (Austria ~99%, Spain ~85%) routinely have donor rates 25–30 percentage points higher than opt-in countries (UK pre-2015 ~37%, US ~40%). Same individuals, same beliefs – only the default differs.'
          },
          {
            label: 'HMRC letters',
            tone: 'amber',
            show: ['idl-3'],
            head: 'HMRC tax letters – the £0 intervention',
            body: 'BIT redesigned reminder letters to use <strong>social norms</strong>: "9 of 10 people in your area have already paid their tax." On-time payment rose by <strong>~5 percentage points</strong>. Estimated additional revenue: <strong>£200m+ a year</strong>.',
            analysis: 'A wording change costing nothing produced what would otherwise have required additional enforcement officers. The canonical proof-of-concept for behavioural government – replicated in dozens of countries.'
          },
          {
            label: 'NHS reminders',
            tone: 'purple',
            show: ['idl-4'],
            head: 'NHS appointment reminders – saving clinician time at scale',
            body: 'The UK NHS loses ~7m appointments a year to no-shows – costing around <strong>£300m</strong> in wasted clinician time. BIT-redesigned <strong>SMS reminders</strong> using social norms ("9 of 10 people attend their appointment") cut no-shows by roughly <strong>25-35%</strong> in trial settings.',
            analysis: 'Why it works: the SMS hits at the right moment (just before the appointment), is simple, costs pennies per message, and aligns with how patients decide – adding social-proof information that the standard reminder didn\'t carry. <br><br>This is the four-pillar test of card 4 in miniature: <strong>timely · simple · low cost · aligned</strong>.'
          }
        ]
      },
      keyPointsLabel: 'Why these four nudges actually worked',
      keyPointsEmoji: '🧪',
      keyPointsCols: 2,
      keyPoints: [
        { title: 'Timely', icon: '⏱️', headline: 'Right message at the right moment', body: 'The NHS SMS lands just before the appointment; auto-enrolment fires at job-start. Hit users when they\'re actively deciding – not weeks before.', tone: 'green' },
        { title: 'Simple', icon: '✏️', headline: 'One idea, delivered in a sentence', body: '"9 of 10 paid on time" – a single social fact, no forms, no comprehension cost. The HMRC letter is six extra words, not six extra paragraphs.', tone: 'amber' },
        { title: 'Low cost', icon: '💰', headline: 'Pennies per nudge, not millions per programme', body: 'A default flip, a wording change, an SMS. The HMRC line generated £200m+ at zero marginal cost – vs the price of an enforcement team.', tone: 'blue' },
        { title: 'Aligned', icon: '🎯', headline: 'Works with how people decide, not against', body: 'Pension auto-enrol exploits loss aversion and inertia. Organ donation rides defaults. The norm-letter borrows authority from peers. Each goes with the grain.', tone: 'purple' }
      ],
      keyTerms: [
        { term: 'Nudge', def: 'Any aspect of choice architecture that alters behaviour in a predictable way without forbidding options or significantly changing financial incentives (Thaler & Sunstein, 2008).' },
        { term: 'Choice architecture', def: 'The way options are presented – the order, the default, the framing – which shapes choice without changing the options themselves.' },
        { term: 'Default option', def: 'The outcome that applies if a person does nothing. Defaults are powerful because of habitual behaviour, loss aversion and present bias.' },
        { term: 'Libertarian paternalism', def: 'Thaler & Sunstein\'s philosophy: preserve freedom of choice (libertarian) while steering toward better outcomes (paternalism).' }
      ],
      examEdge: 'The BIT was set up in 2010 and has since been replicated worldwide. The four cases above all share the four-pillar structure (<strong>timely, simple, low cost, aligned</strong>). Cite these features as the <em>structural reason</em> nudges have become a mainstream policy tool – not just a list of successful examples.'
    },

    {
      id: 'behavioural_econ_5',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'When nudges work, and when they don\'t',
      tip: { icon: '⚖️', tone: 'slate', text: 'Nudges <strong>complement</strong> traditional policy – they do not replace taxes or regulation. The art is knowing which lever fits which market failure. For a carbon price or sugar tax, behavioural insight <em>supports</em> the tax; it does not substitute for it.' },
      continuum: {
        title: 'The policy spectrum – choosing the right lever',
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
      keyPointsLabel: 'Four features of an effective nudge',
      keyPointsEmoji: '✨',
      keyPointsCols: 2,
      keyPoints: [
        { title: 'Timely', icon: '⏱️', headline: 'Reaches people at the moment of decision', body: 'An NHS reminder lands just before an appointment; auto-enrolment fires at job-start. Timing is the mechanism.', tone: 'green' },
        { title: 'Simple', icon: '✏️', headline: 'One idea, delivered in a sentence', body: '"9 of 10 people in your area paid" – not a paragraph, not a threat. A single social fact.', tone: 'blue' },
        { title: 'Low cost', icon: '💰', headline: 'Near-zero marginal cost', body: 'A wording change, a default flip, an SMS – a fraction of the cost of a tax credit or enforcement team.', tone: 'amber' },
        { title: 'Aligned', icon: '🎯', headline: 'Works with how people actually decide', body: 'Targets System 1 directly – norms, loss aversion, inertia – rather than relying on System 2 deliberation.', tone: 'purple' }
      ],
      verdict: {
        leftLabel: '✅ Strengths of the behavioural approach',
        rightLabel: '⚠️ Limitations and risks',
        separator: 'VS',
        rows: [
          { aspect: 'Cost',     left: 'Near-zero implementation cost. Auto-enrolment, HMRC letters and NHS-reminder texts cost a fraction of a tax credit or enforcement team.', right: 'Small per-person effect. Climate change, obesity at scale and addiction need stronger tools than a wording change.' },
          { aspect: 'Freedom',  left: 'Preserves choice – every nudge above is opt-out, not mandated. Libertarian paternalism respects individual autonomy.', right: 'Whose "better"? A government nudge encodes a value judgement about which choice is right – open to political abuse and to "elite" framing.' },
          { aspect: 'Evidence', left: 'Rigorously tested. Most BIT interventions go through randomised controlled trials before national rollout – rare in policy.', right: 'Context-specific. A nudge that worked in HMRC may fail in DWP. Effects fade with familiarity ("nudge habituation").' },
          { aspect: 'Politics', left: 'Politically acceptable across parties. Hard to oppose "make the default better" the way taxes or bans attract opposition.', right: '<strong>Sludge</strong>: the private sector uses the same techniques to <em>harm</em> consumers – subscription traps, complex tariffs, dark patterns in apps.' }
        ]
      },
      keyTerms: [
        { term: 'Sludge', def: 'Choice architecture deliberately designed to obstruct good decisions – the opposite of a nudge. Examples: subscription traps, confusing energy tariffs, dark-pattern UX.' },
        { term: 'Policy spectrum', def: 'The range of behavioural tools from soft to hard: information → nudge → tax/subsidy → regulation. Choose by what is binding: knowledge, bias, price, or harm.' },
        { term: 'Randomised controlled trial (RCT)', def: 'The gold-standard evaluation method – randomly assign participants to treatment and control, measure the difference. BIT uses RCTs to test nudges before rollout.' }
      ],
      examEdge: 'Top evaluation line: <strong>"Nudges complement but do not substitute for traditional policy."</strong> Pension auto-enrolment works because the bias <em>is</em> the binding constraint (inertia). A carbon tax is still needed where the binding constraint is a market price (externality). The strongest behavioural essays state <em>which</em> bias is being targeted, <em>why</em> a nudge is the right tool for that bias, and where the policy spectrum demands a stronger lever instead.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Behavioural Economics',
    subtitle: 'Theme 1 &middot; Topic 2.10 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('behavioural_econ_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers bounded rationality, loss aversion, status quo bias, nudge theory, default options, and policy applications',
    shortNames: [
      'Bounded rationality MCQ', 'Biases categorise', 'Nudge theory MCQ', 'Default options',
      'Loss aversion', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: bounded rationality */
      { type: 'mcq',
        stem: 'Herbert Simon\'s concept of <strong>bounded rationality</strong> suggests that humans:',
        opts: [
          'Make decisions within the limits of their cognitive capacity and available information – using heuristics (mental shortcuts) to simplify choices, often reaching satisfactory rather than optimal decisions ("satisficing")',
          'Are completely irrational and make random decisions with no consistent pattern or preference',
          'Are perfectly rational in all contexts but choose to ignore information when it is too costly to process',
          'Make rational decisions in familiar situations but become irrational when faced with complex choices'
        ],
        ans: 0,
        exp: 'Simon (1955): human rationality is "bounded" by limited information, limited cognitive capacity, and limited time. Rather than optimising (finding the best solution), people <strong>satisfice</strong> – find a solution that is "good enough" given their constraints. This produces systematic, predictable deviations from standard rational choice theory, which behavioural economics documents through experimental evidence. The deviations include heuristics (availability, representativeness, anchoring), biases (loss aversion, status quo, optimism), and framing effects. These are not random errors but systematic patterns – allowing policy designers to "nudge" behaviour predictably.'
      },

      /* 2 – Categorise: behavioural biases */
      { type: 'categorise',
        stem: 'Sort each example into the correct behavioural bias category.',
        categories: ['Loss aversion', 'Present bias', 'Social norms', 'Anchoring'],
        items: [
          { text: 'People are more upset about losing £100 than they are happy about gaining £100', category: 'Loss aversion' },
          { text: 'A person chooses to eat unhealthily today despite intending to start dieting next month', category: 'Present bias' },
          { text: 'A hotel advertises a "normal" price of £200 then shows a "discount" of £150 – buyers feel they are getting a deal', category: 'Anchoring' },
          { text: 'A person pays into a pension more when they see that 90% of their colleagues also contribute', category: 'Social norms' },
          { text: 'A homeowner refuses to sell their house below what they paid for it even if the market has permanently fallen', category: 'Loss aversion' },
          { text: 'People opt for a restaurant dish described as "90% fat-free" over one described as "10% fat" despite identical content', category: 'Anchoring' }
        ],
        exp: '<strong>Loss aversion</strong>: losses loom larger than equivalent gains – Kahneman and Tversky (1979) estimated losses feel approximately 2× as painful as equivalent gains feel good. <strong>Present bias</strong>: overweighting immediate costs and benefits vs future ones – "hyperbolic discounting"; justifies mandatory saving (pensions), sin taxes on addictive goods. <strong>Social norms</strong>: behaviour influenced by what others do – powerful nudge mechanism; HMRC tax compliance letters using "most people in your area pay on time." <strong>Anchoring</strong>: first number encountered anchors subsequent judgements – salary negotiations, retail pricing, property valuations.'
      },

      /* 3 – MCQ: nudge theory */
      { type: 'mcq',
        stem: 'Thaler and Sunstein\'s <strong>nudge theory</strong> proposes that governments should:',
        opts: [
          'Design "choice architectures" that make beneficial choices easier or more salient, without removing freedom of choice – preserving individual liberty (libertarian paternalism)',
          'Replace all individual choices with government mandates to ensure optimal outcomes for all citizens',
          'Use financial incentives (taxes and subsidies) as the primary tool for changing behaviour – nudges are too weak to influence behaviour significantly',
          'Rely entirely on information provision – giving people all the relevant facts will lead them to rational choices'
        ],
        ans: 0,
        exp: 'Thaler (2017 Nobel Prize) and Sunstein\'s nudge theory: since humans are predictably irrational, governments can improve outcomes by designing choice environments more carefully, without mandating behaviour. The term "libertarian paternalism" captures the apparent paradox: paternalism (improving welfare) + libertarian (preserving choice). Examples: <strong>default options</strong> (opt-out rather than opt-in for pensions – auto-enrolment); <strong>simplification</strong> (fewer options to avoid choice overload); <strong>social norms</strong> information (HMRC compliance letters); <strong>framing</strong> (healthier food at eye level). Nudges are low-cost compared to taxes/regulations and preserve individual autonomy.'
      },

      /* 4 – MCQ: default options and auto-enrolment */
      { type: 'mcq',
        stem: 'UK pension auto-enrolment changed the <strong>default option</strong> from "opt in" to "opt out." This works because:',
        opts: [
          'Status quo bias and inertia mean most people accept whatever the default is – by making pension contribution the default, most workers remain enrolled without having to make an active decision',
          'Auto-enrolment forces all workers to contribute whether they want to or not – it removes individual choice entirely',
          'Workers rationally calculate that pension contribution is always optimal and choose to enrol when prompted',
          'The opt-out requirement makes it illegal for workers to leave the pension scheme without government approval'
        ],
        ans: 0,
        exp: 'Default options are one of the most powerful nudges. <strong>Status quo bias</strong>: people tend to stick with whatever the default option is – changing it requires an active decision. Before auto-enrolment (opt-in), workers had to actively sign up → 35-40% participation. After auto-enrolment (opt-out), workers remain enrolled unless they actively opt out → 85%+ participation. Workers\' preferences haven\'t changed – only the default has. This harnesses status quo bias to increase retirement savings. Workers retain freedom to opt out – libertarian paternalism. The UK auto-enrolment scheme has enrolled 10 million+ previously non-saving workers since 2012.'
      },

      /* 5 – MCQ: loss aversion in policy */
      { type: 'mcq',
        stem: 'Behavioural economics suggests that framing a policy as avoiding a <strong>loss</strong> rather than achieving a <strong>gain</strong> will make it more persuasive. Which example best applies this?',
        opts: [
          '"You will lose £1,200 per year by not having adequate home insulation" is more motivating than "You will save £1,200 per year by insulating your home" – even though both convey identical information',
          '"Gain £1,000 in tax rebates" is more motivating than "Avoid £1,000 in tax penalties" because gains feel better than avoiding losses',
          'Framing effects are only relevant in marketing, not in government policy design',
          'Loss aversion only applies to financial decisions – environmental and health messages are not subject to framing effects'
        ],
        ans: 0,
        exp: 'Loss aversion (Kahneman and Tversky): losses are psychologically more powerful than equivalent gains – typically by a factor of approximately 2. So framing the same information as a "loss avoided" rather than a "gain obtained" makes it more motivating, even though the objective outcomes are identical. This is a framing effect – a classic behavioural economics result. Applications: energy efficiency campaigns framing in terms of bills saved vs current losses; tax authority framing around penalties owed vs rebates earned; health messaging framing (lives lost rather than lives saved). Rational agents should be unaffected by framing – but humans systematically are.'
      },

      /* 6 – Cause & effect: behavioural biases and outcomes */
      { type: 'cause_effect',
        stem: 'Match each behavioural bias to its real-world market or policy implication.',
        pairs: [
          { cause: 'Present bias – people heavily discount future health risks from smoking', effect: 'Underinvestment in health prevention; sin taxes and health warnings partially corrective' },
          { cause: 'Status quo bias – people do not switch energy suppliers even if they would save money', effect: 'Energy market lacks effective competition; automatic switching or collective switching schemes' },
          { cause: 'Anchoring – estate agents show an overpriced house first to make the next house seem cheaper', effect: 'Housing market decisions influenced by irrelevant reference points; buyers overpay' },
          { cause: 'Overconfidence – entrepreneurs overestimate success probability of new businesses', effect: 'Excess business start-ups; creative destruction benefits economy but individuals suffer losses' },
          { cause: 'Social norms – people recycle more when told most of their neighbours do', effect: 'Norm-based nudges can increase pro-social behaviour without taxes or regulation' },
          { cause: 'Loss aversion – homeowners refuse to sell below purchase price', effect: 'Housing market liquidity falls in downturns; transaction volume collapses; price stickiness' }
        ],
        exp: 'Behavioural biases have systematic market consequences: <strong>present bias</strong> → underprovision of insurance, healthcare, pension saving; <strong>status quo bias</strong> → market failures in switching costs; <strong>anchoring</strong> → price distortions; <strong>overconfidence</strong> → excess risk-taking (entrepreneurship, financial markets); <strong>social norms</strong> → powerful lever for pro-social behaviour change; <strong>loss aversion</strong> → market illiquidity and price stickiness in downturns. Each suggests a specific policy response – nudges for inertia-related failures, information provision for anchoring, norm communication for social behaviour.'
      },

      /* 7 – Match pairs: behavioural economics concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Heuristic', b: 'Mental shortcut used to make quick decisions – often useful but systematically biased' },
          { a: 'Nudge', b: 'Change to choice architecture that steers behaviour without mandating it' },
          { a: 'Choice architecture', b: 'The design of the context in which choices are made – defaults, ordering, framing' },
          { a: 'Satisficing', b: 'Choosing the first option that meets a minimum threshold – "good enough" rather than optimal' },
          { a: 'Hyperbolic discounting', b: 'Over-weighting immediate outcomes vs future ones – time inconsistency in preferences' },
          { a: 'Libertarian paternalism', b: 'Improving welfare through nudges while preserving freedom of choice' }
        ],
        exp: 'Behavioural economics vocabulary: <strong>heuristic</strong> – availability (judge probability by ease of recall), representativeness (judge by similarity to stereotype), anchoring (first number biases estimates). <strong>Nudge</strong> – Thaler and Sunstein\'s policy tool. <strong>Choice architecture</strong> – the broader framework within which nudges operate (designed by BIT – UK Behavioural Insights Team). <strong>Satisficing</strong> – Simon\'s key concept: accept "good enough" rather than find the optimum. <strong>Hyperbolic discounting</strong> – the behavioural basis of present bias: the discount rate between now and next week is much higher than between next year and the year after.'
      },

      /* 8 – Odd one out: behavioural biases */
      { type: 'odd_one_out',
        stem: 'Three of these are well-established <strong>behavioural biases</strong> documented in experimental economics. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '😰', label: 'Loss aversion – people feel losses more strongly than equivalent gains', note: '' },
          { icon: '⏱️', label: 'Present bias – people prefer immediate rewards over larger future rewards at an irrational rate', note: '' },
          { icon: '📊', label: 'Perfect rationality – people always process all available information and optimise decisions', note: '' },
          { icon: '🔢', label: 'Anchoring – initial reference numbers disproportionately influence subsequent judgements', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>perfect rationality</strong>. This is the assumption of standard (neoclassical) economics – that agents process all information and optimise. Behavioural economics challenges this assumption with experimental evidence showing that humans systematically deviate from perfect rationality through biases, heuristics, and framing effects. Loss aversion (Kahneman & Tversky), present bias (Thaler), and anchoring (Tversky & Kahneman) are all well-documented behavioural phenomena that contradict perfect rationality. The recognition of these biases is what distinguishes behavioural economics from neoclassical theory.'
      },

      /* 9 – Data table: UK auto-enrolment pensions */
      { type: 'data_table',
        stem: 'The table shows UK workplace pension participation data before and after auto-enrolment (introduced 2012).',
        headers: ['Year', 'Private sector pension participation (%)', 'Opt-out rate (of auto-enrolled)'],
        rows: [
          ['2010 (opt-in default)', '38%', 'n/a'],
          ['2013 (auto-enrolment begins)', '45%', '9%'],
          ['2016', '62%', '8%'],
          ['2019', '77%', '8%'],
          ['2022', '80%', '8%']
        ],
        question: 'What do the data most strongly suggest about behavioural economics and policy design?',
        opts: [
          'Changing the default from opt-in to opt-out doubled pension participation from 38% to 80% – with a consistent 8% opt-out rate, showing that most workers accept the default; this is strong evidence of the power of default options and status quo bias in policy design',
          'The data show that workers prefer mandatory pension saving – they are willingly choosing to participate',
          'Auto-enrolment failed because 8% of workers opted out, proving the policy is unpopular',
          'The 80% participation rate proves workers are now making perfectly rational pension decisions'
        ],
        ans: 0,
        exp: 'The data powerfully demonstrate default effects: participation more than doubled (38% to 80%) with the same financial structure – only the default changed. The consistent 8% opt-out rate (those who actively choose not to participate) suggests that those who genuinely prefer not to save are exercising that freedom, while those who were previously inertially non-saving are now enrolled. This is precisely the "libertarian paternalism" Thaler and Sunstein advocated: improved outcomes (more retirement savings) without eliminating individual choice (workers can still opt out). The 10+ million newly enrolled workers represent a massive behavioural economics policy success.'
      },

      /* 10 – Multi-select: evaluation of behavioural economics in policy */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of behavioural economics as a policy framework?',
        opts: [
          'Behavioural economics identifies systematic deviations from rational behaviour through experimental evidence',
          'Nudge-based policies are less coercive than taxes and regulations, but their effectiveness is context-specific and often modest – the auto-enrolment pension success is exceptional rather than typical; many nudges produce small, temporary effects that fade as novelty wears off, suggesting they complement rather than replace traditional policy instruments',
          'Default options harness status quo bias to improve decisions without restricting choice',
          'The libertarian paternalism framework of nudge theory has a fundamental internal tension: if people\'s "true" preferences are unknown (that\'s why they need nudging), then the government is effectively imposing its view of what is best under the guise of preserving choice – which raises paternalism concerns that the "libertarian" label may obscure rather than resolve',
          'Loss aversion means people are more motivated by avoiding losses than achieving equivalent gains',
          'Behavioural interventions are most powerful at population scale but face an ethical problem: systematically exploiting cognitive biases to change behaviour, even for beneficial ends, treats citizens as objects to be manipulated rather than autonomous agents – and the same techniques used by government nudge units are also used by private firms to exploit consumers, suggesting that uncritical enthusiasm for behavioural policy overlooks the dark side of choice architecture'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the nudge effectiveness argument by noting that the pension default success is exceptional – most nudges produce smaller effects – reaching the conclusion that nudges complement rather than replace traditional instruments. D: identifies the internal philosophical tension in "libertarian paternalism" – the liberty claim may be thinner than it appears if the government is the one deciding what counts as the "better" default. F: identifies the ethical dimension of choice architecture exploitation and notes the symmetry with private sector manipulation – a broader critical evaluation of the framework. A, C, and E are descriptions.'
      }

    ]
  };

})();

