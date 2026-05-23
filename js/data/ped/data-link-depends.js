/* ============================================================
   ECONOS — Link It · It Depends On station data
   PED: evaluate raising fuel duty as a carbon emissions policy
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Price Elasticity of Demand',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a fuel duty increase actually achieves its stated objective.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'fuel-duty-effectiveness',
      claim: {
        icon:   '⛽',
        prompt: 'Policy claim',
        text:   'Raising fuel duty is the most effective policy for reducing carbon emissions from road transport.'
      },
      factors: [
        {
          id:    'ped-short',
          icon:  '📉',
          label: 'Short-run PED for petrol',
          why:   'With PED ≈ −0.15, a large price rise cuts quantity demanded only a little in the short run — the revenue effect dominates the emissions-reduction effect. The externality is barely corrected. This is the single most important constraint on the policy\'s environmental effectiveness: inelastic short-run demand means the tax is primarily a fiscal tool, not an environmental one, in the near term.'
        },
        {
          id:    'ped-long',
          icon:  '⏱️',
          label: 'Long-run PED as substitutes become available',
          why:   'As EVs become affordable and charging infrastructure improves, PED rises toward −0.6. The same fuel duty becomes more effective at reducing emissions over time — but the question is whether the policy can be sustained politically during the low-effectiveness period when it imposes high costs on consumers with little environmental return.'
        },
        {
          id:    'regressive-impact',
          icon:  '💰',
          label: 'Distributional and regressive impact',
          why:   'Lowest-income households spend 3.8% of their disposable income on fuel duty versus 1.2% for the highest quintile. Unless the revenue is recycled to lower-income households through targeted rebates or public transport improvements, the policy imposes a disproportionate burden on those least able to absorb it — weakening its political sustainability and fairness.'
        },
        {
          id:    'alternatives',
          icon:  '⚡',
          label: 'Availability of alternative policies',
          why:   'EV subsidies, public transport investment, urban congestion charging and vehicle emission standards each tackle the problem from a different angle. Fuel duty targets the price signal but does nothing to address the structural absence of alternatives — in areas with poor public transport, higher petrol prices impose costs without enabling behaviour change.'
        },
        {
          id:    'ev-infrastructure',
          icon:  '🔌',
          label: 'Quality and availability of EV infrastructure',
          why:   'Raising petrol prices only shifts demand to EVs if EV charging is accessible and affordable. Without adequate infrastructure — particularly in rural areas and for flat-dwellers without home charging — the policy imposes costs on petrol users without providing a viable substitute, making behavioural change impossible regardless of the price signal.'
        },
        {
          id:    'revenue-recycling',
          icon:  '♻️',
          label: 'How the revenue is recycled',
          why:   'If the £25bn fuel duty revenue funds EV subsidies, rail electrification or targeted rebates for low-income drivers, the net emission reduction is amplified — a double dividend. If the revenue disappears into general spending unrelated to transport or climate, the environmental case for the tax is weakened because the fiscal cost is borne without a corresponding environmental gain.'
        },
        {
          id:    'regulation',
          icon:  '📋',
          label: 'Effectiveness vs vehicle emission standards',
          why:   'The UK phase-out of new petrol and diesel cars by 2035 directly reduces the stock of fossil-fuel vehicles regardless of price signals. This supply-side regulation may be more certain in its long-run emission effect than a price signal working through highly inelastic short-run demand — a strong argument that regulation, not price, is the primary instrument.'
        },
        {
          id:    'political',
          icon:  '🗣️',
          label: 'Political feasibility',
          why:   'Fuel duty has been frozen in real terms since 2011 due to political pressure — a government unable to raise it in line with inflation may not be able to deliver the large increases needed to significantly change behaviour through the price mechanism. The politically deliverable rate and the rate required for meaningful emissions reduction may diverge considerably.'
        }
      ],
      modelRanking: ['ped-short', 'regressive-impact', 'alternatives'],
      judgement: '"Whether raising fuel duty is the \'most effective\' policy depends primarily on the short-run PED for petrol — with PED ≈ −0.15, the tax raises revenue but barely reduces emissions, making it a limited environmental tool in the near term. The regressive distributional impact further weakens the case unless revenue is recycled to lower-income households, and the structural absence of affordable alternatives in many areas means a higher price signal cannot translate into lower-emission behaviour change without complementary investment."'
    }
  ]
};
