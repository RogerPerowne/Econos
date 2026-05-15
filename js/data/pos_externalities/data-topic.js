window.ECONOS_TOPIC = {
  id: 'pos_externalities',
  topicNum: '1.13',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Positive Externalities',
  estTime: '7-9 minutes',
  goal: 'Lock in the positive externality diagram, why markets underprovide goods with external benefits, and how subsidies and regulation correct this.',
  intro: {
    heroKey: 'environment',
    summary: 'Positive externalities create benefits for third parties not captured in market prices. The result is under-consumption or under-production relative to the socially optimal level — the opposite problem to negative externalities.',
    doInThis: 'Work through 7 cards covering the definition of positive externalities, the MSB/MPB diagram, merit goods, education and healthcare as key examples, government policy responses, and evaluation.',
    outcomes: [
      'Define positive externality and distinguish production from consumption externalities',
      'Draw the positive externality diagram showing MSB above MPB with underconsumption',
      'Explain why education and healthcare generate positive externalities',
      'Evaluate subsidies, regulation, and public provision as policy responses'
    ],
    tip: 'Positive externality → MSB > MPB → market underproduces/underconsumes. Policy: subsidy to shift MPB up to MSB (consumption side) or MPC down to MSC (production side). Socially optimal output > market output.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'pos_externalities_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Positive externalities: the big picture',
      lede: 'When private benefit ignores third-party gain, markets underproduce goods that society values most — like education and healthcare.',
      branches: [
        { tone: 'green',  label: 'The core concept',  sub: 'MSB = MPB + MEB. When MEB > 0, the market undervalues the good and output falls short of the social optimum.' },
        { tone: 'blue',   label: 'The diagram',       sub: 'MSB sits above MPB. Welfare loss is the triangle of forgone net benefit between Q_market and Q*.' },
        { tone: 'amber',  label: 'Education & healthcare', sub: 'The classic case studies: spillover benefits for productivity, public health, and social cohesion.' },
        { tone: 'purple', label: 'Merit goods',       sub: 'Goods under-consumed due to both information failure <em>and</em> positive externalities — overlapping but distinct concepts.' },
        { tone: 'rose',   label: 'Policy responses',  sub: 'Subsidies, direct public provision, regulation (compulsory schooling). Each trades efficiency against equity and cost.' }
      ],
      body: 'A <strong>positive externality</strong> occurs when economic activity generates benefits for third parties who are not party to the transaction and who do not pay for those benefits.<br><br>Key framework:<br>• <strong>Private benefit (MPB):</strong> the benefit received directly by the consumer.<br>• <strong>External benefit (MEB):</strong> additional benefit received by third parties.<br>• <strong>Social benefit (MSB):</strong> MSB = MPB + MEB — total benefit to society.<br><br>When positive externalities exist, MSB > MPB. The market, responding only to MPB, produces less than the socially optimal quantity where MSB = MSC. The result is <strong>underconsumption</strong> or <strong>underproduction</strong>.',
      keyTerms: [
        { term: 'Positive externality', def: 'External benefit to third parties from economic activity — not reflected in market price or private cost-benefit calculations.' },
        { term: 'MSB', def: 'Marginal Social Benefit = MPB + MEB. The total benefit to society of one more unit of consumption.' },
        { term: 'Underconsumption', def: 'Market output is below the socially optimal level because private benefits understate social benefits.' }
      ],
      examEdge: 'The positive externality diagram is the mirror of the negative one. For positive consumption externality: draw MPB (demand), then MSB above it (shift up by MEB), with MSC = MPC (supply). Market = MPB intersects MSC; optimal = MSB intersects MSC. Gap between them = underconsumption. DWL triangle is between Q-market and Q-optimal.'
    },
    {
      id: 'pos_externalities_2',
      template: 'mechanisms',
      title: 'The Positive Externality Diagram',
      intro: 'For a positive consumption externality, the demand curve (MPB) understates the true social benefit.',
      steps: [
        { label: 'Draw the framework', text: 'Axes: P vertical, Q horizontal. Draw MSC = MPC (supply — no production externality). Draw MPB (private demand) downward sloping. Draw MSB above MPB — the vertical gap is MEB at each quantity.' },
        { label: 'Market equilibrium', text: 'Where MPB = MSC. Mark this Q-market and P-market. This is what the free market produces — too little.' },
        { label: 'Social optimum', text: 'Where MSB = MSC. Mark Q-optimal > Q-market and P-optimal. Society would benefit from greater consumption than the free market provides.' },
        { label: 'Deadweight welfare loss', text: 'Triangle between Q-market and Q-optimal, bounded above by MSB and below by MSC. Represents the welfare loss from underconsumption — potential gains from expanding output that are not realised.' }
      ],
      examEdge: 'Positive production externality is less commonly examined but important. Example: a firm trains workers who then leave to work for rivals. Social benefit (training) exceeds private benefit to the firm → underinvestment in training. For production: MSB = MPB; draw MSC below MPC (MEC is a benefit, reducing social cost). Optimal output > market output.'
    },
    {
      id: 'pos_externalities_3',
      template: 'cause',
      title: 'Education as a Positive Externality',
      causes: [
        { head: 'Private benefit', body: 'Higher wages and lifetime earnings for educated individuals; greater personal fulfilment; improved health and cognitive function. These private benefits are reflected in demand for education.' },
        { head: 'External benefits — economic', body: 'A more educated workforce raises national productivity; technology adoption faster; innovation greater. Firms benefit from a skilled labour pool without paying for all the training. Tax base expands.' },
        { head: 'External benefits — social', body: 'Lower crime rates (more education → lower propensity to commit crime). Greater civic engagement, democracy quality, and institutional trust. Reduced health costs from better health literacy.' },
        { head: 'Market failure implication', body: 'Left to private markets, education is under-provided (especially for low-income households who cannot afford tuition). This justifies state-funded education, scholarships, and free nursery provision.' }
      ],
      examEdge: 'The positive externality from education is the strongest justification for state education. Key evaluation: does the state education system actually produce these external benefits? Evidence suggests returns to education (externality spillovers) are significant but not unlimited — they decline at higher education levels.'
    },
    {
      id: 'pos_externalities_4',
      template: 'framing',
      title: 'Healthcare as a Positive Externality',
      body: 'Healthcare generates positive externalities:<br><br><strong>Vaccinations:</strong> classic case — when an individual is vaccinated, they become immune AND reduce transmission to others (herd immunity). The external benefit to non-vaccinated individuals is not reflected in their private demand for vaccines → underconsumption → pandemic risk.<br><br><strong>Treatment:</strong> treating infectious diseases reduces transmission; treating mental health conditions reduces impact on carers and society.<br><br><strong>Policy implication:</strong> free or subsidised healthcare and vaccination programmes correct the market failure. NHS provides healthcare free at point of use — removes the underconsumption problem for most healthcare.',
      keyTerms: [
        { term: 'Herd immunity', def: 'When enough of a population is immune, disease transmission falls even for the unvaccinated — a classic positive externality of vaccination.' },
        { term: 'Free at point of use', def: 'NHS model: healthcare funded by taxation, provided free to users — removes price as a barrier and corrects underconsumption from positive externality.' },
        { term: 'Merit good', def: 'A good with positive externalities that would be underconsumed if left entirely to the market — education and healthcare are the canonical examples.' }
      ],
      examEdge: 'Vaccination is the best single positive externality example: clearly defined MEB (herd immunity), easily understood market failure (unvaccinated individuals benefit without paying), and strong policy justification (free or mandatory vaccination). Use this as your go-to when a specific example is requested.'
    },
    {
      id: 'pos_externalities_5',
      template: 'cause',
      title: 'Government Policies to Correct Positive Externalities',
      causes: [
        { head: 'Subsidies to producers', body: 'Government pays producers to lower costs → supply shifts right → output and consumption increase toward socially optimal level. Example: subsidy to renewable energy firms to expand green energy production. Shifts MSC (MPC + subsidy) down to correct under-provision.' },
        { head: 'Subsidies to consumers', body: 'Direct payment or voucher to consumers → demand (MPB) effectively shifts right → consumption increases. Example: free school meals, childcare subsidy, green home retrofit grants. Corrects underconsumption directly.' },
        { head: 'Public provision', body: 'Government provides the good free or below cost, funded by taxation. Example: NHS, state schools. Eliminates price barrier entirely — shifts consumption to socially optimal level if tax funding is sufficient.' },
        { head: 'Regulation', body: 'Compulsory consumption: mandatory education (ages 5-16), compulsory vaccination in some countries. Ensures socially optimal consumption regardless of individual willingness to pay.' }
      ],
      examEdge: 'Subsidy size should equal the MEB at the socially optimal output. In practice, measuring MEB is difficult (what is the precise external benefit of one extra year of education?). This is a key limitation: government cannot know the exact optimal subsidy without knowing the MEB — risks under- or over-correcting.'
    },
    {
      id: 'pos_externalities_6',
      template: 'framing',
      title: 'Merit Goods vs Positive Externalities',
      body: 'A <strong>merit good</strong> is a good that society judges should be consumed more than individuals would choose if left to their own devices. This may be due to:<br>1. Positive externalities (as above — others benefit)<br>2. Information failure — individuals underestimate the private benefit of education, healthcare, or exercise due to myopia or lack of information. Even without external benefits, the market underprovides.<br><br>Merit goods are different from pure externality cases because even the private benefit may be underestimated. This strengthens the case for government intervention — even if there were no external benefits, markets would under-supply due to information failure and present bias.',
      keyTerms: [
        { term: 'Merit good', def: 'A good with positive externalities or information failure that leads to underconsumption — society judges it should be consumed more than markets provide.' },
        { term: 'Present bias', def: 'Tendency to overweight immediate costs (school effort, medical procedures) relative to future benefits — leads to underinvestment in education and health.' },
        { term: 'Information failure', def: 'Consumers underestimate the benefits of merit goods — a separate justification for intervention from externalities.' }
      ],
      examEdge: 'The distinction between merit goods (information failure + externality) and pure positive externality goods (externality only) is important for evaluation. For merit goods, even a perfectly informed consumer might rationally underconsume — justifying stronger intervention than just correcting the externality.'
    },
    {
      id: 'pos_externalities_7',
      template: 'paired',
      title: 'Subsidies vs Public Provision: Evaluation',
      left: {
        label: 'Subsidies',
        points: [
          'Preserves market mechanism — still uses price signals and competition',
          'Can be targeted to those most likely to be excluded from market (means-tested)',
          'Flexible — size can be adjusted; allows consumer choice of provider',
          'Risk: subsidy may not be passed on to consumers; producer may pocket it (inelastic demand)',
          'Requires accurate MEB measurement to set optimal subsidy level'
        ]
      },
      right: {
        label: 'Public provision (free at point of use)',
        points: [
          'Eliminates price as barrier — maximum consumption of good',
          'Universal access regardless of income — addresses equity concerns',
          'Avoids need to measure MEB — just provide the good',
          'Risk: over-consumption if the marginal cost to consumers is zero (moral hazard)',
          'Fiscal cost: requires taxation which may have its own efficiency costs'
        ]
      },
      examEdge: 'NHS vs private healthcare debate is the definitive policy question here. Free at point of use eliminates underconsumption from positive externality but may create moral hazard (trivial GP appointments). Co-payments (small charges for prescriptions) attempt to limit this without re-creating access barriers. A nuanced evaluation.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
