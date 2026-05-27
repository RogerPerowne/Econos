/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Positive Externalities: education and government subsidy
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Positive Externalities',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully. Use the economic concepts you have studied to interpret what the extract implies about market failure and policy.',

  passage: {
    title: 'Extract: University education and the social rate of return',
    source: 'Adapted from: IFS analysis of UK Higher Education (2020) and ONS Labour Market data',
    text: 'Research by the Institute for Fiscal Studies estimates that graduates earn, on average, £10,000 more per year than non-graduates – generating significantly higher lifetime income tax revenue. But the benefits of education are not confined to the individual. Educated workforces attract inward investment, generate innovation and technology spillovers, and are associated with lower crime rates and better civic participation. Despite this, UK students pay tuition fees of up to £9,250 per year. Economists argue that without government intervention, the private cost of university acts as a deterrent, producing a level of higher education below what is socially optimal.'
  },

  questions: [
    {
      id: 'pos-ext-extract-q1',
      question: 'The extract argues that university education generates benefits beyond those captured by the student. Which market failure does this describe?',
      options: [
        'A negative externality – graduates impose costs on society through higher graduate salaries',
        'A public good problem – education is non-excludable and non-rival, so the market under-provides it',
        'A positive externality – third parties (firms, society) benefit from the student\'s education without paying for it',
        'An information gap – students do not know the future value of their degree'
      ],
      correct: 2,
      explanation: 'The extract describes a positive externality: benefits that spill over to third parties who do not pay for them. Firms gain productive, innovative workers; society benefits from lower crime and higher tax revenues; communities gain from civic participation. These external benefits mean the Marginal Social Benefit (MSB) exceeds the Marginal Private Benefit (MPB). The free market only reflects MPB, so it under-produces education relative to the socially optimal quantity where MSB = MSC.'
    },
    {
      id: 'pos-ext-extract-q2',
      question: '"Without government intervention, the private cost of university acts as a deterrent, producing a level of higher education below what is socially optimal." What does "socially optimal" mean in this context?',
      options: [
        'The quantity of education that maximises government tax revenue from graduates',
        'The quantity where marginal social benefit equals marginal social cost – the allocatively efficient outcome',
        'The maximum possible quantity of graduates, regardless of cost',
        'The quantity that eliminates all unemployment among non-graduates'
      ],
      correct: 1,
      explanation: 'The socially optimal quantity is where MSB = MSC – this is the allocatively efficient outcome that maximises total welfare (consumer + producer + external benefits, minus total social costs). When education generates positive externalities, MSB > MPB. If the market only produces where MPB = MPC, it falls short of the socially optimal quantity. The gap between market output and socially optimal output represents the welfare loss from under-provision.'
    },
    {
      id: 'pos-ext-extract-q3',
      question: 'The UK government subsidises university education through student loans and Teaching Grant funding. Based on the extract, what is the economic justification for this subsidy?',
      options: [
        'The subsidy corrects for information failure by informing students of graduate wage premiums',
        'The subsidy reduces tuition fees, internalising the positive externality by bringing private cost closer to social cost – increasing consumption toward the socially optimal quantity',
        'The subsidy is justified because education is a public good that the free market cannot provide at all',
        'The subsidy eliminates the negative externality created by competition between graduates in the labour market'
      ],
      correct: 1,
      explanation: 'The economic justification for subsidising education is to bridge the gap between the high private cost (tuition fees + foregone earnings) and the lower effective cost needed to reach the socially optimal quantity. By reducing the private cost, the government makes it rational for more individuals to attend university – increasing provision toward the point where MSB = MSC. This is the standard Pigouvian subsidy argument: internalise the external benefit by reducing the private cost by an amount equal to the marginal external benefit.'
    }
  ]
};
