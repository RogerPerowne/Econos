/* ============================================================
   ECONOS — Link It · Read the Extract station data
   Negative Externalities: diesel vehicles and air quality policy
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Negative Externalities',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully, then use economic theory to interpret each question. Link what the extract says to the concepts you\'ve studied.',

  passage: {
    title: 'Extract: Air pollution and diesel vehicles in UK cities',
    source: 'Adapted from: DEFRA Clean Air Strategy (2019) and PHE data',
    text: 'Diesel vehicles emit nitrogen oxides (NO<sub>x</sub>) and particulate matter (PM2.5) linked to approximately 28,000 premature deaths annually in the UK. The NHS spends an estimated £1.6 billion per year treating pollution-related respiratory conditions. Vehicle owners pay only the private cost of fuel, maintenance and time — they do not pay for the health damage their emissions impose on others. In response, London introduced the Ultra Low Emission Zone (ULEZ) in 2019, which charges the most polluting vehicles a daily fee to drive in central London.'
  },

  questions: [
    {
      id: 'neg-ext-extract-q1',
      question: 'According to the extract, why does the market for diesel vehicle use represent a case of market failure?',
      options: [
        'Diesel vehicles are a demerit good because consumers underestimate their own health risks from driving',
        'There is a divergence between private cost and social cost — third parties bear health costs that are not reflected in the driver\'s private cost',
        'The NHS is a public good that is under-provided by the free market',
        'There is asymmetric information between fuel companies and consumers about emissions levels'
      ],
      correct: 1,
      explanation: 'The extract describes a classic negative externality: "Vehicle owners pay only the private cost... they do not pay for the health damage their emissions impose on others." The social cost (MPC + external cost to NHS and residents) exceeds the private cost (MPC). This divergence causes the market to over-produce diesel vehicle use relative to the socially optimal quantity — the definition of negative externality market failure.'
    },
    {
      id: 'neg-ext-extract-q2',
      question: '"Vehicle owners do not pay for the health damage their emissions impose on others." Which economic concept does this sentence most precisely describe?',
      options: [
        'The free rider problem — some people use the NHS without contributing tax',
        'A negative consumption externality — the cost falls on third parties not party to the transaction',
        'Regulatory failure — the government has failed to set sufficient emission standards',
        'Information failure — drivers are not aware of the pollution their vehicles produce'
      ],
      correct: 1,
      explanation: 'This is the textbook definition of a negative externality: a cost imposed on a third party (here, people breathing polluted air and NHS patients) that is not reflected in the price or cost faced by those causing it (vehicle owners). The marginal social cost (MSC) exceeds the marginal private cost (MPC) by the value of the external health cost — approximately £1.6bn/year of NHS spending, plus lost life-years from 28,000 premature deaths.'
    },
    {
      id: 'neg-ext-extract-q3',
      question: 'The ULEZ charge is an example of which type of government intervention, and what is its theoretical effect on the externality?',
      options: [
        'A maximum price ceiling — it makes driving cheaper and more accessible for low-income drivers',
        'A regulation banning all diesel vehicles — removing the source of the externality entirely',
        'A Pigouvian tax — by charging polluting vehicles, it raises the private cost toward the social cost, reducing quantity driven toward the socially optimal level',
        'A subsidy to EV manufacturers — incentivising the production of cleaner vehicles as a long-run solution'
      ],
      correct: 2,
      explanation: 'The ULEZ charge is a Pigouvian tax (named after Arthur Pigou, 1920). By adding a charge equal to (or approximating) the external cost per journey, it internalises the externality — making drivers pay the full social cost of their trip. In theory, this shifts the effective private cost curve up to coincide with the social cost curve, reducing quantity toward the socially optimal level where MSB = MSC. In practice, setting the charge equal to the exact external cost is difficult — the £12.50/day ULEZ charge is an approximation.'
    }
  ]
};
