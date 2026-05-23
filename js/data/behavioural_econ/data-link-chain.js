/* ============================================================
   ECONOS — Link It · Chain station data
   Behavioural Economics: present bias → overconsumption → nudge correction
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Behavioural Economics',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'present-bias-correction',
      scenario: {
        icon:  '🥤',
        label: 'Scenario',
        text:  'UK consumers regularly buy high-sugar soft drinks. At the point of purchase, they focus on immediate taste enjoyment and do not account for the future health costs of diabetes and obesity. The government introduces the Soft Drinks Industry Levy (SDIL) in 2018 and extends mandatory traffic light nutritional labelling.'
      },
      anchor: 'Present bias: consumers systematically underweight future health costs (diabetes risk, obesity) relative to immediate taste enjoyment — so effective demand for high-sugar products exceeds the rational level.',
      tiles: [
        {
          id:  'step-failure',
          icon: '🧠',
          text: 'Behavioural market failure: present bias inflates demand from D_rational to D_biased → market equilibrium Q_biased > Q_rational → overconsumption of high-sugar products → welfare loss (future health costs borne by consumers and NHS)',
          pos:  0
        },
        {
          id:  'step-correction',
          icon: '↩️',
          text: 'Policy correction (nudge + SDIL): traffic light labelling makes health costs salient at point of decision → corrects present bias by making future cost present → SDIL incentivises producer reformulation → effective demand shifts left from D_biased toward D_rational',
          pos:  1
        },
        {
          id:  'step-outcome',
          icon: '✅',
          text: 'Outcome: Q falls toward Q_rational; NHS long-run health costs reduced; regressive distributional impact minimised (SDIL on producers, not a direct consumption tax); reformulation preserves consumer choice rather than restricting it',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '💰',
          text: 'Rising consumer incomes increase demand for premium low-sugar alternatives',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🏋️',
          text: 'Government subsidises sports facilities to encourage physical activity as a complement to diet change',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '📉',
          text: 'Bank of England raises interest rates, reducing consumer spending on discretionary goods',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Present bias operates through System 1 (Kahneman): at the point of purchase, the immediate sensory pleasure of a sugary drink is vivid and certain, while the health cost is distant, abstract, and discounted steeply. The rational consumer would weigh these correctly (D_rational); the actual consumer with present bias overweights the immediate pleasure (D_biased). The gap between D_biased and D_rational represents systematic overconsumption — a welfare loss as consumers impose costs on their future selves (internalities) and on the NHS (externalities).'
        },
        {
          pos:  1,
          text: 'Traffic light labelling works by making the future health cost salient at the exact moment of decision — the red label triggers System 2 processing and loss aversion, correcting the present bias in that moment. SDIL works as a supply-side nudge: by raising the cost of high-sugar recipes, it incentivises producers to reformulate without raising consumer prices — 50% reformulated before the levy took effect. Both mechanisms shift effective demand left from D_biased toward D_rational.'
        },
        {
          pos:  2,
          text: 'The joint outcome is a reduction in overconsumption (Q falls toward Q_rational) without the regressive burden of a direct consumption tax. Because the SDIL targets producers rather than consumers, lower-income households (who spend a larger share of income on soft drinks) do not face higher prices for reformulated products. Reformulation also preserves consumer choice — consumers can still buy high-sugar products if they choose, at a higher price, but the default available product is healthier. This is libertarian paternalism in practice.'
        }
      ],
      examBridge: '"Present bias inflated demand for high-sugar soft drinks above the rational level (D_biased > D_rational). The SDIL created a producer incentive to reformulate (50% of drinks reformulated before the levy took effect), effectively shifting the composition of available products toward lower-sugar alternatives — a supply-side nudge. Traffic light labelling corrected present bias at the point of purchase, shifting demand left toward D_rational. Together, these interventions reduced overconsumption without the regressivity of a direct Pigouvian consumption tax."',

      prompts: [
        'Why does present bias cause demand for high-sugar products to exceed the rational level?',
        'How do traffic light labelling and the SDIL each correct present bias?',
        'Why is the SDIL preferred over a direct consumer tax on soft drinks?'
      ],
      modelAnswers: [
        'Present bias means consumers discount future health costs (diabetes, obesity) too heavily relative to immediate taste enjoyment. At checkout, the health cost is distant and abstract — System 1 ignores it. So effective WTP for high-sugar products at the point of purchase (D_biased) exceeds what a fully rational consumer with correct time preferences would pay (D_rational). The gap is systematic and predictable, not random noise.',
        'Traffic light labelling makes the health cost salient at the point of decision — the red label activates System 2 processing and loss aversion, partially correcting the present bias in the moment (BIT: 15% purchase reduction for impulsive buyers). The SDIL works upstream: it raises the cost of producing high-sugar recipes, incentivising producers to reformulate — 50% did so before the levy took effect. Both mechanisms shift effective demand left from D_biased toward D_rational, but through different pathways (consumer information vs producer incentive).',
        'A direct consumer tax on soft drinks raises prices for all consumers — a regressive burden (lower-income households spend a higher proportion of income on soft drinks). Denmark\'s fat tax was repealed after 15 months due to cross-border shopping and political backlash. The SDIL targets producers: those who reformulate avoid the levy and can maintain prices, while those who don\'t pay the levy (which may or may not be passed on). The net outcome is reformulation (structural demand reduction) without regressive price effects — making the SDIL more equitable and more politically durable.'
      ],
      vocab: ['behavioural economics', 'present bias', 'status quo bias', 'nudge theory', 'libertarian paternalism', 'choice architecture', 'heuristics', 'bounded rationality', 'SDIL', 'Pigouvian tax', 'overconsumption', 'salience']
    }
  ]
};
