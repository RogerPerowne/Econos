/* ============================================================
   ECONOS — Link It · It Depends On station data
   Behavioural Economics: evaluate nudges vs Pigouvian taxes claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Behavioural Economics',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether nudges outperform Pigouvian taxes for correcting irrational overconsumption.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 4,

  scenarios: [
    {
      id: 'nudge-vs-tax-depends',
      claim: {
        icon:   '🥤',
        prompt: 'Policy claim',
        text:   'Nudges beat Pigouvian taxes for correcting irrational overconsumption.'
      },
      factors: [
        {
          id:    'present-bias-strength',
          icon:  '⏱️',
          label: 'Strength of present bias in the target population',
          why:   'Nudges are most effective when present bias is mild to moderate — consumers need only be reminded of future costs to adjust. Where present bias is severe (addiction to high-sugar products, habitual consumption), making costs salient has minimal effect. In these cases, more coercive instruments (Pigouvian taxes, quantity restrictions) are needed to overcome the behavioural barrier.'
        },
        {
          id:    'salience-design',
          icon:  '👁️',
          label: 'Salience and design quality of the nudge',
          why:   'Traffic light labelling only works if consumers notice, process and respond to the red label at the point of decision. Eye-tracking research shows 40% of shoppers do not look at nutritional labels when making purchase decisions. Nudge effectiveness depends heavily on choice architecture quality — where the information is displayed, how large it is, and whether it is in intuitive format (% traffic light vs calorie counts).'
        },
        {
          id:    'regressivity',
          icon:  '💰',
          label: 'Regressive distributional impact of Pigouvian taxes vs nudges',
          why:   'A Pigouvian sugar tax raises prices for all consumers — imposing a proportionally larger burden on lower-income households (who spend a larger share of income on these goods). Nudges do not raise prices and are therefore non-regressive. Where equity concerns are paramount, nudges are preferred even if they achieve smaller demand corrections — because the welfare cost is distributed more fairly.'
        },
        {
          id:    'substitution',
          icon:  '🔄',
          label: 'Availability of healthier substitutes',
          why:   'Nudges shift demand from high-sugar to lower-sugar products only if acceptable substitutes exist. Reformulation (SDIL effect) creates those substitutes within the same product range — Coca-Cola Zero is a near-perfect substitute for regular Coca-Cola. Where substitutes are unavailable or less acceptable, nudges cause consumers to sacrifice welfare without achieving the health outcome.'
        },
        {
          id:    'habit',
          icon:  '🔁',
          label: 'Role of habit and status quo bias',
          why:   'Many soft drink consumption patterns are habitual — consumers do not actively choose at each purchase but repeat the same decision. Status quo bias means habitual choices persist even when nudges are present. Breaking habits requires stronger interventions than information nudges — default changes (making water the default drink in school vending machines) exploit status quo bias in the opposite direction.'
        },
        {
          id:    'political-feasibility',
          icon:  '🗳️',
          label: 'Political feasibility of tax vs nudge',
          why:   'Pigouvian taxes on food and drink face strong political opposition (accused of paternalism, regressivity, nanny state). The Denmark fat tax was repealed after 15 months. Nudges (labelling, reformulation incentives) face less political opposition because they preserve consumer choice. In practice, political feasibility often determines which instruments are adopted regardless of theoretical efficiency.'
        },
        {
          id:    'cross-border',
          icon:  '🌍',
          label: 'Cross-border substitution (purchase abroad or online)',
          why:   'A Pigouvian consumption tax on domestically-sold products can be circumvented by cross-border shopping (buying in Ireland, France, etc.) or online imports. This reduces effectiveness and introduces equity issues (wealthier consumers can afford to travel or bulk-buy abroad). Nudges embedded in UK product labelling requirements apply to all products sold in UK retail and are harder to circumvent.'
        },
        {
          id:    'long-run',
          icon:  '📅',
          label: 'Long-run vs short-run effectiveness of each instrument',
          why:   'Nudges may produce lasting changes in consumer habits if they shift norms (e.g., water becomes the expected default drink at school meals). Pigouvian taxes produce lasting effects while maintained but demand rebounds if taxes are removed. Reformulation under SDIL is potentially permanent — once recipes are changed, they tend to remain lower in sugar. Long-run effectiveness favours structural interventions (reformulation) over price signals that can be reversed.'
        }
      ],
      modelRanking: ['present-bias-strength', 'salience-design', 'regressivity'],
      judgement: '"Nudges outperform Pigouvian taxes when present bias is mild enough to be corrected by salient information (so labelling works), when equity concerns make price increases undesirable, and when political feasibility favours non-coercive instruments. The SDIL is a hybrid: a producer-side levy that funds reformulation (structural nudge) rather than a consumption tax — combining price incentives for producers with non-regressive consumer outcomes. It works best where reformulation creates acceptable substitutes, as with carbonated drinks."'
    }
  ]
};
