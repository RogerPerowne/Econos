/* ============================================================
   ECONOS — Link It · It Depends On station data
   Demand: evaluate the income/confidence claim for UK leisure
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Demand',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether income is the primary driver of leisure demand.',
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
      id: 'demand-income-effectiveness',
      claim: {
        icon:   '🎭',
        prompt: 'Claim',
        text:   'Rising consumer income and confidence are the primary drivers of increased demand for UK leisure and hospitality services post-pandemic.'
      },
      factors: [
        {
          id:    'income-elasticity',
          icon:  '📊',
          label: 'Income elasticity of demand (YED)',
          why:   'Leisure services have YED > 1 (luxury/income-elastic). A given rise in income produces a more-than-proportional rise in demand — so income effects are amplified for restaurants and hospitality compared with necessities. Where YED is lower, income growth matters less for the demand shift.'
        },
        {
          id:    'confidence',
          icon:  '😊',
          label: 'Consumer confidence and expectations',
          why:   'Demand shifts right not just from current income but from expected future income. If confidence is high, households spend today even before income has fully recovered. If confidence is low, they precautionarily save even as current income rises — the confidence channel amplifies or dampens the income effect.'
        },
        {
          id:    'substitutes',
          icon:  '✈️',
          label: 'Availability and cost of substitute activities',
          why:   'Post-COVID recovery was partly driven by the unavailability of international holidays (substitutes). Once travel restrictions lifted, some of the excess demand for domestic leisure redirected abroad. The strength of the domestic demand shift depends on what substitute activities consumers can access — income alone does not explain this diversion.'
        },
        {
          id:    'saving-buffer',
          icon:  '💰',
          label: 'Distribution of accumulated savings',
          why:   'The £190bn savings buffer was concentrated among higher-income households. Lower-income groups, more likely to work in sectors that kept operating through the pandemic, did not accumulate savings to the same extent — limiting the generality of the income-driven demand surge and weakening the aggregate claim.'
        },
        {
          id:    'capacity',
          icon:  '🏢',
          label: 'Capacity constraints in the supply side',
          why:   'In the short run, restaurants and hotels have fixed capacity. When demand surges, prices rise rather than output expanding — limiting the quantity response and concentrating the income effect into higher prices rather than broader access for consumers. Supply-side constraints shape how the demand shift plays out.'
        },
        {
          id:    'price-expectations',
          icon:  '📈',
          label: 'Price expectations and inflation',
          why:   'Rising prices reduce the real income effect over time. If inflation in hospitality (menu price inflation hit 8.8% in 2023) outpaces wage growth, the demand stimulus is partially self-correcting — consumers reduce visits as real purchasing power falls, reversing part of the rightward shift.'
        },
        {
          id:    'habit',
          icon:  '🔄',
          label: 'Habit formation and brand loyalty',
          why:   'Some consumers had formed new habits during the pandemic (home cooking, online food delivery). Demand for dine-in restaurants partly shifted permanently to delivery platforms, so the post-COVID recovery in traditional hospitality was more muted than raw income data suggested — even where income had fully recovered.'
        },
        {
          id:    'demographics',
          icon:  '👥',
          label: 'Demographic structure of spending',
          why:   'Younger consumers (18–35) showed the strongest post-COVID leisure recovery, driven by social media influence and social reconnection. Older and more vulnerable groups remained more cautious regardless of income level. The aggregate demand shift masks significant demographic variation in the strength of the income effect.'
        }
      ],
      modelRanking: ['income-elasticity', 'confidence', 'substitutes'],
      judgement: '"Whether rising income is the primary driver of leisure demand depends critically on income elasticity — services with YED > 1 see amplified demand effects, while necessities barely respond. Consumer confidence determines whether households translate income gains into spending or precautionary saving. And the availability of substitutes (especially international holidays) shapes how much of any income gain flows into domestic hospitality rather than alternative activities."'
    }
  ]
};
