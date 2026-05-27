/* ============================================================
   ECONOS – Link It · It Depends On station data
   Indirect Taxes & Subsidies: evaluate a sugar levy claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Indirect Taxes &amp; Subsidies',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a sugar levy actually reduces obesity-related externalities.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'calc', label: 'Calculate It', href: TopicLoader.routes.link('calc') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'sugar-levy-effectiveness',
      claim: {
        icon:   '🍭',
        prompt: 'Policy claim',
        text:   'A sugar tax is the most effective way to cut obesity externalities.'
      },
      factors: [
        {
          id:    'price-elasticity-of-demand',
          icon:  '📉',
          label: 'Price elasticity of demand for the taxed good',
          why:   'If PED is inelastic (−0.3 for confectionery), a large price rise barely reduces consumption; the tax raises revenue but does little to correct the externality. The policy works best where demand is more elastic – as with soft drinks, where a 10% price rise produced a 12% fall in sales volume (PED ≈ −1.2). The effectiveness of the levy in reducing obesity critically depends on which goods are taxed and how responsive consumers are to price.'
        },
        {
          id:    'mec-size',
          icon:  '🔍',
          label: 'Size of the marginal external cost (MEC)',
          why:   'The tax rate should ideally equal the MEC at the socially optimal quantity. If the MEC from obesity is large (£6.1bn in annual NHS costs), a higher rate is theoretically justified. However, measuring the MEC precisely is difficult – costs like reduced productivity, informal care and mental health impacts are hard to quantify. A tax set below the true MEC under-corrects the externality; set above it, the market is distorted unnecessarily.'
        },
        {
          id:    'reformulation',
          icon:  '🏭',
          label: 'Producer reformulation response',
          why:   'If producers reduce sugar content to avoid the levy – as occurred with the existing soft drinks levy, where average sugar content fell by 28.8% – the externality falls without consumers paying more. This supply-side response is a powerful effect that the static incidence model misses. A levy that triggers reformulation may be far more effective at reducing harm than one that simply raises prices, because it changes the product rather than just deterring consumption.'
        },
        {
          id:    'regressive',
          icon:  '💰',
          label: 'Distributional (regressive) impact',
          why:   'Indirect taxes on food take a larger share of income from low-income households, who spend more of their budget on food including high-sugar goods. This regressive impact may be seen as unfair and reduces the political feasibility of extension. It also raises a welfare trade-off: the levy may correct one market failure (the obesity externality) while worsening distributional outcomes – undermining the overall case unless compensatory transfers are made.'
        },
        {
          id:    'substitutes',
          icon:  '🔄',
          label: 'Availability of substitutes',
          why:   'If low-sugar alternatives exist and are affordable, consumers can switch when the levy raises prices – reducing harm and supporting the policy\'s goal. If substitutes are unavailable or significantly more expensive (as may be the case for low-income households), the levy simply raises costs without reducing consumption. Cross-price elasticity of demand for healthier substitutes is therefore a key determinant of whether the levy achieves its corrective purpose.'
        },
        {
          id:    'regulation',
          icon:  '📋',
          label: 'Effectiveness vs direct regulation',
          why:   'Advertising bans, reformulation mandates or school food standards may change behaviour more directly than a price signal, especially for children who respond less to prices. Unlike a tax, regulation can guarantee a minimum standard (e.g. sugar caps per 100g) rather than relying on the price mechanism to shift behaviour. Where the externality arises from habitual consumption or information failure rather than rational price response, regulation may correct it more reliably than a levy.'
        },
        {
          id:    'international',
          icon:  '🌍',
          label: 'International evidence and precedent',
          why:   'Mexico, Denmark and France have implemented sugar or fat taxes with mixed results. Denmark reversed its fat tax due to cross-border shopping, which displaced sales to Germany rather than reducing consumption – showing that a unilateral national tax can fail when substitution across borders is easy. This complicates the claim that the tax is the "most effective" instrument, particularly where the taxed goods are easily sourced from untaxed jurisdictions.'
        },
        {
          id:    'revenue-use',
          icon:  '♻️',
          label: 'How the revenue is used',
          why:   'If levy revenue funds NHS obesity treatment, health education or food vouchers for low-income families, the net welfare effect is amplified – a "double dividend" that both corrects the externality and addresses its distributional impact. Revenue that disappears into general government spending without any link to the externality weakens the economic case for the levy over other instruments, since the corrective effect then relies entirely on the price signal.'
        }
      ],
      modelRanking: ['price-elasticity-of-demand', 'reformulation', 'regressive'],
      judgement: '"Whether an indirect tax is the \'most effective\' way to reduce obesity-related externalities depends primarily on the price elasticity of demand for the goods taxed – where PED is inelastic (as with confectionery), the tax raises prices significantly while doing little to reduce consumption or harm. Effectiveness is greatly enhanced if producers reformulate products to avoid the levy, since this reduces the externality through the supply side rather than through the price mechanism alone. And the regressive distributional impact on low-income households must be weighed against any gains in correcting the externality."'
    }
  ]
};
