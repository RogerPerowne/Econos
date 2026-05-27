/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Public Goods: non-rivalry, non-excludability, free rider problem
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Public Goods',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully. Apply the definitions of non-rivalry and non-excludability precisely – many goods appear "public" but fail one of the two tests.',

  passage: {
    title: 'Extract: UK public goods – lighthouses, defence and broadcast media',
    source: 'Adapted from: Trinity House Annual Report (2022); MOD Defence Statistics; DCMS Broadcasting Survey',
    text: 'Trinity House, the UK\'s General Lighthouse Authority, operates 66 lighthouses around England, Wales and the Channel Islands. Before state funding, private lighthouse provision was chronically under-supplied: shipowners could not be prevented from benefiting from a lighthouse\'s signal whether or not they had contributed to its upkeep, and one ship using the signal in no way reduced its availability to other ships. Economists classify this as a pure public good.<br><br>UK defence spending of £48.6bn (2022–23) provides national security: once the country is defended, every resident benefits regardless of their tax contribution, and one person\'s security does not reduce another\'s. BBC Radio 4, funded through the licence fee, can be received by any radio owner – the broadcaster cannot prevent non-payers from tuning in. However, unlike defence, BBC radio is now available via DAB and online streaming. Digital transmission could, in principle, be encrypted and made available only to paid subscribers – making excludability technically possible in a way it was not for analogue broadcasts.<br><br>Roads present a more complex case. A rural B-road at 2am is non-rival (no congestion) and, without toll booths, non-excludable – resembling a public good. The M25 at peak hours is rival (severely congested) but non-excludable. Economists classify congested roads as a "common resource" – non-excludable but rival.'
  },

  questions: [
    {
      id: 'pg-extract-q1',
      question: 'Which two characteristics of the lighthouse, described in the extract, make it a pure public good?',
      options: [
        'It is provided by the government and funded through taxation – making it available to everyone equally',
        'It is non-excludable (shipowners cannot be prevented from using the signal whether or not they paid) and non-rival (one ship using it does not reduce its availability to others)',
        'It is underprovided by the free market because shipping companies find it unprofitable, and it generates positive externalities for coastal communities',
        'Its benefits are non-excludable because the government has made it illegal to charge for lighthouse services'
      ],
      correct: 1,
      explanation: 'The two defining characteristics of a pure public good are non-excludability and non-rivalry. The extract states both explicitly: "shipowners could not be prevented from benefiting" (non-excludable) and "one ship using the signal in no way reduced its availability to other ships" (non-rival). These two properties together cause the free rider problem – rational individuals don\'t pay because they receive the benefit regardless. This is why the private market chronically under-supplied lighthouses before state funding.'
    },
    {
      id: 'pg-extract-q2',
      question: 'The extract notes that BBC Radio 4 "could, in principle, be encrypted and made available only to paid subscribers." What does this imply about its classification as a public good?',
      options: [
        'BBC Radio is a pure public good because it is funded by the state and available to all licence fee payers',
        'The encryption possibility means BBC Radio could be made excludable, making it closer to a quasi-public good or club good – its public good status depends on the technology and policy choice, not its inherent characteristics',
        'BBC Radio is a merit good, not a public good, because the government believes people would under-consume it if left to the market',
        'BBC Radio is a private good because it is non-rival – one person listening does not prevent another from doing so'
      ],
      correct: 1,
      explanation: 'This is a subtle but important distinction. A pure public good is inherently non-excludable – you cannot technically prevent non-payers from consuming it. BBC Radio\'s analogue broadcast was genuinely non-excludable (any radio could receive it). But digital encryption makes excludability technically possible. This means BBC Radio\'s classification as a public good is not inherent – it\'s a policy choice. If encrypted, it becomes a club good (excludable but non-rival). The fact that it\'s currently non-excludable is a regulatory and infrastructure choice, not an inherent property.'
    },
    {
      id: 'pg-extract-q3',
      question: 'The extract describes roads as having different characteristics at different times. A congested motorway (rival but non-excludable) is classified as a "common resource." Why does this classification matter for policy?',
      options: [
        'Common resources should be fully privatised, as the profit motive will ensure they are maintained efficiently',
        'Common resources generate positive externalities – congested roads benefit local businesses whose customers use them',
        'Because a common resource is rival, over-use imposes costs on other users (congestion slows everyone down), but non-excludability means no price mechanism rations it – creating the "tragedy of the commons" and justifying congestion charges as a corrective policy',
        'Roads should be reclassified as merit goods because the government has decided that car ownership is socially beneficial'
      ],
      correct: 2,
      explanation: 'Common resources are non-excludable (no one can be prevented from using them) but rival (one person\'s use imposes costs on others). On the M25 at peak hours, each additional car slows all other cars – imposing a negative externality on other road users. But without exclusion, no price signal rations access. The result is the "tragedy of the commons": over-use relative to the socially optimal level. Congestion charges (like the London ULEZ or planned road pricing) are the standard economic solution: make the resource effectively excludable by price so that users face the true social cost of their journey.'
    }
  ]
};
