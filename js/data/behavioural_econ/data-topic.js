window.ECONOS_TOPIC = {
  id: 'behavioural_econ',
  topicNum: '1.21',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Behavioural Economics',
  estTime: '7-9 minutes',
  goal: 'Lock in the key cognitive biases, nudge theory, and how behavioural insights change the case for government intervention.',
  intro: {
    heroKey: 'heroBehavioural',
    summary: 'Traditional economics assumes rational, self-interested actors. Behavioural economics shows this is wrong in systematic, predictable ways. Loss aversion, present bias, and herd behaviour create market failures even without externalities — and nudge theory offers low-cost policy solutions.',
    doInThis: 'Work through 7 cards covering bounded rationality, the main cognitive biases, prospect theory, nudge theory, applications of behavioural insights to policy, and evaluation of behavioural economics as a framework.',
    outcomes: [
      'Explain bounded rationality and why it creates predictable departures from rational behaviour',
      'Identify and apply key biases: loss aversion, present bias, anchoring, herd behaviour',
      'Explain nudge theory and its policy applications',
      'Evaluate behavioural economics as a framework and its limitations'
    ],
    tip: 'Key biases: Loss aversion (losses hurt more than equivalent gains feel good). Present bias (overvalue now vs future). Anchoring (over-weight first number heard). Herd behaviour (follow the crowd). Status quo bias (prefer the default).',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'behavioural_econ_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Behavioural economics: the big picture',
      lede: 'Real people aren\'t perfectly rational — and the systematic patterns of how they go wrong open up new policy tools.',
      branches: [
        { tone: 'green',  label: 'Bounded rationality', sub: 'Simon: people use heuristics because full optimisation is cognitively impossible. Errors are systematic, not random.' },
        { tone: 'amber',  label: 'Cognitive biases',    sub: 'Anchoring, availability, herd behaviour, confirmation bias — predictable distortions in decision-making.' },
        { tone: 'rose',   label: 'Prospect theory',     sub: 'Kahneman & Tversky: losses hurt ~2x more than equivalent gains feel good. We weigh outcomes against a reference point.' },
        { tone: 'blue',   label: 'Nudge theory',        sub: 'Thaler & Sunstein: change the choice architecture (defaults, framing) to steer better outcomes without removing freedom.' },
        { tone: 'purple', label: 'Policy implications', sub: 'Auto-enrolment, plain packaging, default opt-ins — low-cost interventions where information campaigns alone fail.' }
      ],
      body: 'Traditional economics assumes agents are <em>homo economicus</em> — fully rational, self-interested, with stable preferences and perfect information processing. Behavioural economics (Kahneman, Tversky, Thaler) shows this is wrong.<br><br><strong>Bounded rationality</strong> (Herbert Simon): people are rational within limits — they use mental shortcuts (heuristics) because full optimisation is cognitively costly and often impossible. The result: systematic, predictable biases in decision-making.<br><br>This is not just about random errors — biases are systematic. The same person will make the same mistake in the same context repeatedly. This predictability means they can be modelled and addressed by policy.',
      keyTerms: [
        { term: 'Bounded rationality', def: 'Decision-making that is rational within cognitive limits — uses heuristics rather than full optimisation.' },
        { term: 'Heuristic', def: 'A mental shortcut or rule of thumb — efficient for most decisions but causes systematic errors in specific contexts.' },
        { term: 'Homo economicus', def: 'The theoretical perfectly rational, self-interested economic agent — challenged by behavioural economics.' }
      ],
      examEdge: 'Kahneman\'s System 1 and System 2 thinking: System 1 is fast, automatic, heuristic — used for most decisions. System 2 is slow, deliberate, analytical — rarely engaged. Cognitive biases arise when System 1 processes situations where System 2 would reach a different conclusion. This framework underpins all behavioural economics.'
    },
    {
      id: 'behavioural_econ_2',
      template: 'cause',
      title: 'Key Cognitive Biases',
      causes: [
        { head: 'Loss aversion', body: 'Losses feel approximately twice as painful as equivalent gains feel pleasurable (Kahneman and Tversky). "Don\'t lose \xa350" is more motivating than "Gain \xa350." Firms exploit this: framing a charge as "avoiding a fee" vs "getting a discount." Policy implication: frame messages in terms of what is lost from inaction.' },
        { head: 'Present bias (hyperbolic discounting)', body: 'People strongly prefer immediate rewards over future ones — more than a standard time preference would justify. "I\'ll start the diet Monday." Under-save for retirement; under-invest in health; fail to take up beneficial insurance. Market failure even with full information.' },
        { head: 'Anchoring', body: 'First piece of numerical information received disproportionately influences subsequent judgements. Initial salary offer → anchors negotiation. First house price seen → affects willingness to pay. Retailers use fake "was \xa3100, now \xa360" pricing.' },
        { head: 'Herd behaviour', body: 'People follow what others do — especially under uncertainty. Financial markets: investors buy when others buy → bubbles. Restaurants: follow the crowd to the busy one. Social proof marketing: "9 out of 10 dentists recommend." Policy: publish social norm data to alter behaviour.' }
      ],
      examEdge: 'Loss aversion is the most policy-relevant bias. HMRC used it: letters saying "Most people in your area have already paid their taxes" and "You owe tax that was due" (loss frame) significantly increased payment rates compared to standard reminders. Real, low-cost policy effect from behavioural insight.'
    },
    {
      id: 'behavioural_econ_3',
      template: 'framing',
      title: 'Prospect Theory',
      body: 'Kahneman and Tversky\'s <strong>prospect theory</strong> (1979, Nobel Prize 2002) describes how people actually make decisions under uncertainty — distinct from expected utility theory:<br><br>1. <strong>Reference dependence:</strong> outcomes are evaluated relative to a reference point (current state), not absolute levels.<br>2. <strong>Loss aversion:</strong> losses from the reference point weigh ~2x more than equivalent gains.<br>3. <strong>Diminishing sensitivity:</strong> the first \xa3100 lost hurts more than the next \xa3100 lost — declining marginal impact of further losses or gains.<br>4. <strong>Probability weighting:</strong> people overweight small probabilities (buy lottery tickets, fear plane crashes) and underweight large probabilities.',
      keyTerms: [
        { term: 'Prospect theory', def: 'Kahneman and Tversky\'s model of decision under uncertainty — incorporates reference points, loss aversion, and probability distortion.' },
        { term: 'Reference point', def: 'The status quo against which gains and losses are evaluated — determines whether an outcome feels like a gain or a loss.' },
        { term: 'Diminishing sensitivity', def: 'The marginal impact of further gains or losses decreases as you move further from the reference point.' }
      ],
      examEdge: 'Prospect theory explains insurance: people overweight small probabilities of large losses (buy insurance) and underweight large probabilities of moderate losses (under-insure for likely events like car theft in certain areas). Also explains why people hold losing investments too long (loss aversion prevents realising the loss) — relevant to financial market inefficiency.'
    },
    {
      id: 'behavioural_econ_4',
      template: 'framing',
      title: 'Nudge Theory',
      body: '<strong>Nudge theory</strong> (Thaler and Sunstein, 2008): small changes to the "choice architecture" — the way options are presented — can significantly alter behaviour without restricting choice or using financial incentives.<br><br>Key nudge techniques:<br>• <strong>Default options:</strong> make the desired behaviour the default (opt-out rather than opt-in). UK pension auto-enrolment: default is enrolled → participation rate rose from 55% to 87%.<br>• <strong>Social norms:</strong> inform people what others do. HMRC: "86% of people in your area have paid on time" → increased compliance.<br>• <strong>Simplification:</strong> reduce cognitive burden → fewer decisions to avoid procrastination.<br>• <strong>Framing:</strong> present information to activate desired response (loss frame vs gain frame).',
      keyTerms: [
        { term: 'Nudge', def: 'Any aspect of choice architecture that alters behaviour in a predictable way without forbidding options or changing incentives.' },
        { term: 'Choice architecture', def: 'The way options are presented to decision-makers — affects choices without changing the options themselves.' },
        { term: 'Libertarian paternalism', def: 'Thaler and Sunstein\'s philosophy: preserve freedom of choice (libertarian) while nudging toward better outcomes (paternalism).' }
      ],
      examEdge: 'Auto-enrolment pensions is the go-to UK nudge example: simple change from opt-in to opt-out default raised pension participation dramatically at near-zero cost. This is more cost-effective than a tax incentive for pension saving and respects individual choice. Nudges are the low-cost, politically acceptable alternative to regulation or taxation for many behaviour change goals.'
    },
    {
      id: 'behavioural_econ_5',
      template: 'cause',
      title: 'Behavioural Policy Applications',
      causes: [
        { head: 'Tax compliance (HMRC)', body: 'Behavioural Insights Team tested personalised letters. Social norm messages ("most people pay on time") increased compliance by 5.1 percentage points. Loss framing ("you owe tax that is now overdue") increased payments. Minimal cost intervention. Estimated yield: additional \xa3200m+ in tax revenue.' },
        { head: 'Organ donation (opt-out)', body: 'Max Bailey\'s campaign: switch from opt-in to opt-out donation default. England switched to soft opt-out 2020. Wales earlier (2015). Evidence: Wales saw significant increase in consent rates. Default matters hugely — same individual, different default → very different outcome.' },
        { head: 'Pension saving (NEST)', body: 'Auto-enrolment into pension at 8% (employer + employee). Default rate is 8% — most workers remain at default. Before: ~55% of private sector workers had workplace pension. After: ~87%. Largest behavioural intervention in UK economic history.' },
        { head: 'Energy efficiency', body: 'Smart meter displays show real-time energy usage (salience). Neighbour comparison letters from EDF/Ovo: "Your neighbours use 20% less energy" — social norm nudge. Both reduce energy consumption at low cost.' }
      ],
      examEdge: 'The BIT (Behavioural Insights Team, "Nudge Unit") was set up under Cameron government 2010. It demonstrated that small, low-cost changes in communication and defaults could achieve policy goals equivalent to expensive traditional interventions. This represents a genuine evolution in government policy toolkit — and is frequently examined.'
    },
    {
      id: 'behavioural_econ_6',
      template: 'paired',
      title: 'Behavioural Economics: Strengths vs Limitations',
      left: {
        label: 'Strengths of behavioural approach',
        points: [
          'Cost-effective: nudges achieve behaviour change at far lower cost than taxes or regulation',
          'Preserves freedom of choice — libertarian paternalism respects autonomy',
          'Evidence-based: rigorously tested via randomised controlled trials (RCTs)',
          'Addresses market failures from information gaps and biases that taxes/regulation cannot correct',
          'Politically acceptable: less controversial than tax rises or outright bans'
        ]
      },
      right: {
        label: 'Limitations of behavioural approach',
        points: [
          'Small effects for small nudges: nudges can only go so far — large structural change still needs traditional policy',
          'Paternalism concern: who decides what is "better"? Government nudging may reflect elite values',
          'Context-specific: nudges that work in one context may not transfer to another',
          'Manipulation concern: private sector uses same techniques to exploit consumers (dark patterns, addictive design)',
          'Does not address structural causes: nudging people to save more doesn\'t solve structural low wages'
        ]
      },
      examEdge: 'Top evaluation: nudges are complementary to, not substitutes for, traditional policy. For large-scale market failures (climate change, obesity), nudges help but are insufficient without price signals (carbon tax) or regulation (advertising standards). Behavioural economics enriches the policy toolkit; it doesn\'t replace it.'
    },
    {
      id: 'behavioural_econ_7',
      template: 'framing',
      title: 'Behavioural Insights and Market Failure',
      body: 'Behavioural economics identifies additional sources of market failure beyond externalities and public goods:<br><br><strong>Internalities:</strong> costs that individuals impose on their future selves through present-biased decisions — e.g. smoking, poor diet, under-saving. Markets provide the goods that satisfy present-biased demand (cigarettes, junk food) without correcting the internality. Justifies paternalistic intervention even without externalities.<br><br><strong>Sludge:</strong> choice architecture deliberately designed to make it hard to make good decisions (confusing contracts, difficult cancellation processes). The opposite of nudge. Financial services, subscription traps, complex energy tariffs all use sludge. Regulators increasingly focus on reducing sludge.',
      keyTerms: [
        { term: 'Internality', def: 'Costs a person imposes on their future self through present-biased decisions — like an externality but internal to the individual.' },
        { term: 'Sludge', def: 'Friction deliberately built into processes to discourage good decisions — the negative use of choice architecture.' },
        { term: 'Present bias', def: 'Tendency to overweight immediate rewards relative to future ones — beyond normal time preference.' }
      ],
      examEdge: 'Internalities extend the market failure rationale for intervention beyond externalities: even without spillover to others, an individual\'s present-biased decision imposes costs on their future self. This justifies sugar taxes, tobacco regulation, and pension auto-enrolment purely on grounds of protecting individuals from their own biases — not just protecting third parties. Strong evaluation point for any behaviour-change policy essay.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
