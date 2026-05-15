window.ECONOS_TOPIC = {
  id: 'behavioural_econ',
  topicNum: '1.21',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Behavioural Economics',
  estTime: '9-11 minutes',
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
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'behavioural_econ_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
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
      diagramKey: 'prospectTheoryDiagram',
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
      diagramKey: 'nudgeDefaultDiagram',
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
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'be-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: behavioural economics',
      question: 'Evaluate the view that nudge theory provides a better approach to correcting market failures than traditional government intervention. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define nudge theory and explain how it differs from traditional intervention. Introduce the market failures it addresses.',
          hint: 'Nudge (Thaler and Sunstein): altering choice architecture to steer people toward better decisions without restricting choice or changing financial incentives. Preserves freedom of choice (libertarian paternalism). Traditional intervention: taxes, subsidies, regulation, prohibition. Nudges address behavioural market failures: present bias, status quo bias, loss aversion, framing effects. Key question: are nudges sufficient or do they need to be backed by traditional tools?',
          model: 'Nudge theory, developed by Richard Thaler and Cass Sunstein, proposes altering the choice environment — the "choice architecture" — to steer individuals toward decisions that better serve their own long-run welfare, without restricting options or changing financial incentives. Unlike traditional interventions (taxes, subsidies, regulation), nudges exploit systematic biases in human decision-making: present bias, status quo bias, loss aversion, and social norm effects. They address a class of market failures rooted in behavioural economics rather than information asymmetry or externalities. This essay evaluates whether nudges provide a superior approach to correcting these market failures, or whether traditional intervention remains necessary.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How nudges work and their advantages over traditional intervention',
          prompt: 'Explain the mechanism of key nudges and their advantages: low cost, preserving choice, high effectiveness.',
          hint: 'Default rules (opt-out vs opt-in): pension auto-enrolment (UK 2012) → participation rates rose from 55% to 90% — exploits status quo bias at near-zero cost. Social norm information: "9/10 of your neighbours paid their tax on time" → HMRC test found 15% increase in tax compliance vs control. Loss framing: "you\'ll lose £400 if you don\'t insulate" more effective than "you\'ll save £400 if you do". Speed limits/food labelling: low-cost information nudges. Advantages: cheap to implement (vs subsidy costs), preserves individual freedom (vs regulation), can be A/B tested.',
          model: 'Nudges work by redesigning choice environments to align default options or information presentation with optimal long-run decisions. The UK\'s pension auto-enrolment reform (2012) is the most significant example: switching workplace pension default from opt-in to opt-out exploited status quo bias to raise participation rates from ~55% to over 90% — with no mandate, no subsidy, and at minimal cost. HMRC\'s "social norm" nudge — informing taxpayers that most of their neighbours had already paid — increased tax compliance by approximately 15% in randomised control trials, demonstrating that behavioural interventions can rival the effectiveness of financial penalties at a fraction of the enforcement cost. These examples illustrate nudging\'s key advantages: low implementation cost, no restriction of choice (preserving autonomy), testability via randomised controlled trials, and reversibility if the intervention proves ineffective.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — When traditional intervention is more effective than nudges',
          prompt: 'Explain why significant externalities, strong commercial counteracting forces, and deep market failures require traditional tools beyond nudges.',
          hint: 'Externalities: smoking generates external costs (NHS costs) that require Pigouvian tax as well as nudge. A £12 cigarette pack deters purchase in a way that no health warning alone achieves. Obesity: Sugar Levy (Soft Drinks Industry Levy, 2018) — manufacturers reformulated rather than just facing consumer nudge. Carbon emissions: nudge to buy EVs insufficient given price differential — subsidy plus regulation (2035 ICE ban) needed. Asymmetric power: commercial firms deploy massive counter-nudges (advertising, addictive product design) — health nudges are outgunned without stronger tools. Scale: nudge works at margin; significant market failures require instruments with large magnitude effects.',
          model: 'While nudges are effective for behavioural biases, they are insufficient for market failures that involve significant externalities or strong countervailing commercial forces. Smoking generates external costs to the NHS estimated at £2.5bn annually — these require a Pigouvian tax that raises the private price to reflect social marginal cost, not just a health warning. A cigarette pack priced at £12-15 due to taxation deters consumption in a way that no choice architecture adjustment can replicate. Carbon emissions from household energy use require not just smart meter energy usage nudges but a carbon price floor and appliance efficiency standards: the marginal deterrent of information alone is insufficient to overcome the cost differential with fossil fuels. Where large commercial forces systematically engineer counter-nudges — addictive product design, algorithmic engagement maximisation by social media platforms, deliberate food reformulation to maximise palatability over nutrition — regulatory tools to constrain these commercial practices are necessary to make nudges effective.'
        },
        {
          type: 'counter',
          label: 'Counter — Paternalism concerns and evidence limitations',
          prompt: 'Evaluate the philosophical and empirical critiques of nudge theory as a primary policy tool.',
          hint: 'Paternalism criticism: even "libertarian" paternalism assumes government knows better than individuals what is good for them. Individuals have diverse preferences — the right default is not the same for all people (different risk appetites, different time preferences). Manipulation concern: nudging is subliminal influence, not transparent choice. Effectiveness limitations: some nudges fade over time (salience effect wears off). Many behavioural interventions fail to replicate in systematic reviews. May address symptoms not causes: nudge to exercise doesn\'t address lack of safe open spaces, time poverty, or cost of gym membership.',
          model: 'Nudge theory faces philosophical and empirical challenges. The paternalism critique is substantive: even libertarian paternalism assumes that policymakers correctly identify the "right" choice that individuals would make if free from bias — but individual preferences vary, and what constitutes present bias versus genuine time preference is contested. Auto-enrolment in pensions at 8% contribution assumes this is the correct savings rate; for some low-income households with immediate consumption needs, it may not be. The manipulation concern is also serious: nudges operate below conscious awareness, influencing decisions through environmental design rather than transparent information — a form of influence that citizens cannot easily identify or resist. Empirically, many behavioural interventions show weak effects in systematic reviews (the "replication crisis" in behavioural science has undermined some celebrated findings), and effect sizes are often small in large heterogeneous populations even when positive in laboratory settings.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Nudges as complement, not substitute, for traditional policy',
          prompt: 'Weigh nudges against traditional tools and evaluate the conditions under which each is most appropriate.',
          hint: 'Best framing: nudges and traditional intervention are complements, not alternatives. Nudges work best for: behavioural biases where the externality is primarily to the individual (pension saving, organ donation, tax compliance), where freedom of choice is valued, and where cost-effectiveness is important. Traditional intervention works best for: large externalities to third parties, strong commercial counter-nudge forces, and market failures where the magnitude of the required correction is large. Optimal policy: use nudges at the margins, backed by traditional tools for large market failures.',
          model: 'The most accurate characterisation of the relationship between nudges and traditional intervention is complementarity rather than substitution. Nudges are most effective and most clearly justified when: the market failure is primarily an internality (cost to the individual\'s future self), freedom of choice is valued, cost-effectiveness is important, and behavioural biases are large and well-established. Pension auto-enrolment, organ donation registration, and tax compliance all meet these criteria. Traditional intervention (taxes, subsidies, regulation) is most effective when: externalities impose costs on third parties requiring Pigouvian correction, commercial counter-nudge forces are powerful, and the magnitude of required behaviour change is large. Climate change, tobacco, alcohol, and air pollution all require instruments with greater scale than nudges alone can deliver. The UK\'s most successful behaviour change programmes combine both: energy efficiency improvement combines a nudge (smart meter feedback) with subsidy (green homes grant) and regulation (energy efficiency standards) — a layered approach that nudge theory informs but does not replace.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a nuanced judgement: nudges are a valuable, cost-effective tool for behavioural market failures, but not a universal replacement for traditional intervention.',
          hint: 'Nudge theory is valuable: it identifies a class of market failures and low-cost remedies that traditional economics missed. Pension auto-enrolment and tax compliance nudges are genuine successes. But they are insufficient for large externalities, strong commercial counter-forces, or market failures requiring large-magnitude corrections. The best policy framework uses nudges where they are most effective, backed by traditional tools where the scale of market failure demands them.',
          model: 'Nudge theory represents a genuine advance in economic policy thinking: it identifies systematic behavioural biases as a source of market failure and provides cost-effective, freedom-preserving tools to address them. Pension auto-enrolment\'s transformation of UK workplace savings rates demonstrates that well-designed nudges can achieve at low cost what regulations and subsidies could not achieve efficiently. However, the view that nudges provide a better approach than traditional intervention is too broad. For large externalities — carbon emissions, public health costs of tobacco and alcohol, environmental pollution — the magnitude of Pigouvian correction required exceeds what nudges can deliver. For market failures generated by powerful commercial counter-nudge forces, regulatory constraints on commercial behaviour are necessary to make behavioural interventions effective. The most coherent policy framework uses nudges as a first-line, low-cost tool for behavioural biases, complemented by traditional Pigouvian taxes, subsidies, and regulation for market failures requiring larger-scale correction. Neither approach alone is universally superior: the optimal instrument depends on the nature and scale of the market failure being addressed.'
        }
      ]
    }
  ]
};
