window.ECONOS_TOPIC = {
  id: 'pos_externalities',
  topicNum: '1.13',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Positive Externalities',
  estTime: '9-11 minutes',
  goal: 'Lock in the positive externality diagram, why markets underprovide goods with external benefits, and how subsidies and regulation correct this.',
  intro: {
    heroKey: 'heroExternalities',
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
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'pos_externalities_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
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
      diagramKey: 'posExternalityDiagram',
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
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'pe-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: positive externalities',
      question: 'Evaluate the view that subsidies are the most effective government policy for correcting market failure caused by positive externalities. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define positive externalities, explain the market failure, and introduce the main policy options.',
          hint: 'Positive externality: third-party benefit not captured in the market price. Result: private MSB < social MSB → market under-produces relative to social optimum (Q_market < Q_optimal). Policy options: subsidies (reduce price, increase consumption to Q*), provision in-kind (state provision free at point of use), regulation (minimum consumption requirements). The question is whether subsidies are the MOST effective.',
          model: 'A positive externality arises when the consumption or production of a good generates benefits for third parties not reflected in the market price. Because consumers and producers base decisions on private costs and benefits only, the free market under-provides goods with positive externalities — consumption falls short of the socially optimal level where social marginal benefit equals social marginal cost. The government has several tools to correct this market failure: subsidies (shifting supply rightward to close the output gap), in-kind provision (direct state supply, free at point of use), and regulation (mandatory minimum consumption). This essay evaluates whether the subsidy is the most effective instrument.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How subsidies correct positive externality market failure',
          prompt: 'Explain the subsidy mechanism and how it moves the market toward the social optimum.',
          hint: 'Subsidy = per-unit payment to producer (or consumer) = size of the externality (MEB). Mechanism: subsidy reduces effective price → demand increases OR subsidy to producer shifts supply right → equilibrium output rises to Q*. At Q*, private MSB (=price) + MEB = SMB → efficient allocation. Education subsidy: private schools, university maintenance grants (UK 2000s), apprenticeship levy subsidies. Healthcare: NHS prescription subsidy (£9.90 vs full cost).',
          model: 'A Pigouvian subsidy equal to the marginal external benefit (MEB) at the social optimum corrects positive externality market failure by internalising the externality. For a consumer subsidy: the effective price to consumers falls, increasing the quantity demanded to Q* where P = SMC = SMB/person. For a producer subsidy: the supply curve shifts right by the subsidy amount, reducing the market price and increasing equilibrium output to Q*. At this point, the private marginal benefit plus the marginal external benefit equals the social marginal benefit — allocative efficiency is restored. UK examples include university education subsidies (student loans below market interest rates, maintenance grants), apprenticeship levy subsidies, and R&D tax credits — all designed to close the gap between private and social returns to investment in human capital and innovation.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — State provision and regulation as alternatives',
          prompt: 'Explain how direct state provision and regulation can address positive externalities, and their relative strengths.',
          hint: 'State provision (NHS, state schools): free at point of use → eliminates price barrier → consumption rises to at or near social optimum. Avoids the administrative complexity of calculating the optimal subsidy. Most effective when externalities are large and access inequality is a concern. Regulation: compulsory education (5-16 in UK), mandatory vaccination programmes. Eliminates underconsumption by legal requirement — most direct. But may over-correct (forces consumption on unwilling individuals).',
          model: 'State provision — supplying the good free or below cost at point of use — addresses positive externalities more directly than subsidies in markets where the barrier to consumption is price itself. The NHS provides healthcare free at the point of use, eliminating the price barrier that would cause underconsumption given the large positive externality of health (lower infection transmission, higher productivity, social cohesion). Compulsory education (ages 5-16 in the UK) uses regulation to mandate minimum consumption — ensuring the positive externality of an educated citizenry is fully captured. Regulation is the most direct remedy where the externality is large and society judges that consumption is essential: it eliminates the underconsumption problem by legal requirement, rather than relying on price incentives.'
        },
        {
          type: 'counter',
          label: 'Counter — Practical limitations of subsidies: information failure and deadweight subsidy cost',
          prompt: 'Evaluate the practical problems with subsidy design: measurement of MEB, over-subsidisation, and fiscal cost.',
          hint: 'Information problem: government must measure MEB accurately. If MEB underestimated → subsidy too small. If overestimated → over-production beyond Q* → welfare loss in other direction. Subsidies have fiscal cost (opportunity cost — money spent on subsidies not available for other public spending). May also cause moral hazard: subsidised firms invest less in innovation (protected from full market discipline). Evidence: industry subsidies have mixed records — UK steel subsidies 1970s, EU agricultural subsidies — often wasteful.',
          model: 'The critical limitation of subsidies is the information problem: to set the optimal subsidy, the government must accurately measure the marginal external benefit at the social optimum — which is unobservable. If the subsidy is too small, under-provision persists; if too large, over-production generates its own welfare loss. The Pigouvian ideal is theoretically precise but practically elusive. Subsidies also impose direct fiscal costs — money spent subsidising one activity cannot be used elsewhere (opportunity cost). UK experience with industrial subsidies (British Leyland in the 1970s, EU Common Agricultural Policy) illustrates how poorly-targeted subsidies can sustain inefficient producers, reduce market discipline, and generate deadweight losses exceeding the externality they were designed to correct. State provision avoids the calibration problem by supplying the good directly at zero price — but introduces the moral hazard of potentially unlimited demand.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Which instrument is best depends on the externality\'s size and the market context',
          prompt: 'Weigh subsidies vs state provision vs regulation with reference to specific positive externality contexts.',
          hint: 'Key judgement: subsidies work best for moderate externalities where price incentives can work (R&D, training). State provision works best for large externalities where access inequality is a concern and price barriers would leave large groups excluded (healthcare, primary education). Regulation works best where minimum consumption is socially essential (compulsory education, vaccination). No single instrument dominates across all contexts.',
          model: 'The most effective policy depends on the nature and magnitude of the positive externality. Subsidies are most effective for moderate externalities in markets where consumers are already engaged but are consuming sub-optimally due to price (R&D tax credits, apprenticeship subsidies) — the price mechanism is working, it just needs recalibration. State provision is most effective where the externality is very large, access inequality is a major concern, and price barriers would exclude significant parts of the population (NHS healthcare, universal primary education): in these cases, the subsidy would need to be so large that it effectively becomes provision, and direct supply is more administratively efficient. Regulation is most effective where consumption is a social necessity and voluntary underconsumption has severe external costs (compulsory vaccination, compulsory schooling): the external cost of non-consumption is too high to leave to individual choice. In practice, most positive externality markets use a mix of all three instruments.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a nuanced judgement: subsidies are effective for moderate externalities but state provision and regulation are superior where externalities are large or access inequality is severe.',
          hint: 'Subsidies are a good tool but not universally the best. Their strength — using price mechanisms — is also their weakness: they require accurate MEB measurement and work less well where price barriers are severe. State provision and regulation are superior in specific contexts. The best policy mixes instruments to context.',
          model: 'Subsidies are an effective policy tool for correcting positive externality market failure in markets where price incentives are operative and externalities are moderate — R&D, vocational training, and targeted social investment all benefit from subsidy instruments that preserve market mechanisms while correcting the divergence between private and social returns. However, the claim that subsidies are the most effective instrument universally overstates their advantages. Where positive externalities are very large, where access inequality is severe, or where minimum consumption is socially essential, direct state provision or compulsory regulation achieve the social optimum more reliably and without the information problems inherent in calculating optimal Pigouvian subsidy rates. The most effective real-world approach combines instruments: direct provision for essential services with large externalities, subsidies for markets with moderate externalities and functioning price mechanisms, and regulation where non-consumption has unacceptable social costs.'
        }
      ]
    }
  ]
};
