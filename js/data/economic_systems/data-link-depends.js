/* ============================================================
   ECONOS — Link It · It Depends On station data
   Economic Systems: evaluate the claim that free markets are more
   efficient than command economies
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Economic Systems',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether free markets actually outperform command economies on efficiency.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  scenarios: [
    {
      id: 'free-market-vs-command',
      claim: {
        icon:   '🏪',
        prompt: 'Core claim',
        text:   'Free markets are more efficient than command economies.'
      },
      factors: [
        {
          id:    'market-failure-extent',
          icon:  '⚠️',
          label: 'Extent of market failure',
          why:   'In markets with public goods, large externalities, or information asymmetry, free markets systematically fail to achieve allocative efficiency. The NHS case shows state provision can outperform markets in healthcare — a sector with significant positive externalities, information asymmetry between patients and providers, and merit good characteristics. Where market failures are pervasive, the efficiency argument for free markets collapses.'
        },
        {
          id:    'property-rights',
          icon:  '⚖️',
          label: 'Property rights',
          why:   'Free market efficiency requires secure, well-defined and enforced property rights. Without them, firms cannot capture the returns from investment and innovation — undermining the profit incentive. In countries with weak rule of law, markets become dominated by rent-seeking, corruption and short-termism rather than productive activity. The efficiency argument for free markets depends on an institutional framework that many economies lack.'
        },
        {
          id:    'income-distribution',
          icon:  '💰',
          label: 'Income distribution',
          why:   'Even a productively efficient free market may produce allocative outcomes that satisfy high-income preferences over basic needs of the poor. Consumer sovereignty only works if income is distributed sufficiently equally for preferences to translate into demand. Cuba\'s command economy achieves near-universal literacy and healthcare at the cost of consumer choice — a different efficiency trade-off that reflects different social priorities.'
        },
        {
          id:    'competition',
          icon:  '🏆',
          label: 'Degree of competition in the market',
          why:   'The efficiency case for free markets assumes competitive markets with many buyers and sellers. Where natural monopolies emerge — utilities, rail networks, broadband infrastructure — the price mechanism fails to deliver productive or allocative efficiency without regulation. A "free" market dominated by monopoly may produce worse outcomes than regulated state provision.'
        },
        {
          id:    'information',
          icon:  '📋',
          label: 'Information availability to consumers',
          why:   'Consumer sovereignty requires that buyers have sufficient information to make rational choices. In markets with significant information asymmetry — healthcare, financial services, legal advice — consumers cannot exercise informed choice, and markets systematically under- or over-allocate resources. Regulation or public provision may produce better outcomes than an unregulated price mechanism.'
        },
        {
          id:    'time-horizon',
          icon:  '📅',
          label: 'Time horizon of investment decisions',
          why:   'Free markets can underprovide long-term public investments — infrastructure, basic research, education — where returns are distant and uncertain. Private investors prefer shorter payback periods. Command economies can, in principle, direct resources into long-run strategic investments regardless of short-term profitability, as China\'s infrastructure programme demonstrates. The efficiency comparison depends on which time horizon matters most.'
        }
      ],
      modelRanking: ['market-failure-extent', 'property-rights', 'income-distribution'],
      judgement: '"Whether free markets are more efficient than command economies depends primarily on the extent of market failures present — in sectors with large externalities, public goods or information asymmetry, the price mechanism systematically misallocates resources. The efficiency argument also depends on the security of property rights, since without them the profit incentive that drives productive efficiency is undermined. Finally, even where free markets are productively efficient, the income distribution determines whether consumer sovereignty translates into socially optimal allocative outcomes."'
    }
  ]
};
