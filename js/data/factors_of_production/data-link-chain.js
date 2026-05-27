/* ============================================================
   ECONOS – Link It · Chain station data
   Factors of Production: retraining policy → mobility → output
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:   'Factors of Production',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_diagram.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly and mechanically to the next.',

  chains: [
    {
      id: 'retraining-chain',
      scenario: {
        icon:  '🎓',
        label: 'Scenario',
        text:  'The UK government funds a large adult retraining scheme – paying for displaced workers in declining sectors to gain skills in shortage occupations (HGV driving, social care, construction).'
      },
      anchor: 'Retraining raises occupational mobility → reallocates labour to where it is most productive.',
      tiles: [
        {
          id:  'step-skills',
          icon: '🛠️',
          text: 'Workers gain new skills → quality of labour rises, occupational mobility improves',
          pos:  0
        },
        {
          id:  'step-reallocate',
          icon: '🔄',
          text: 'Labour moves from low-productivity sectors to shortage sectors → vacancies fall',
          pos:  1
        },
        {
          id:  'step-output',
          icon: '📈',
          text: 'More effective labour input + better factor allocation → LRAS shifts right, output rises',
          pos:  2
        },
        {
          id:  'dist-1',
          icon: '💷',
          text: 'Higher interest rates raise the cost of capital investment',
          pos:  null
        },
        {
          id:  'dist-2',
          icon: '🚪',
          text: 'Immigration controls reduce the inflow of overseas workers',
          pos:  null
        },
        {
          id:  'dist-3',
          icon: '🏘️',
          text: 'House prices rise in high-productivity regions, reducing geographic mobility',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'The retraining scheme directly raises the quality of labour by upgrading workers\' skills. A worker who can drive an HGV, deliver social care, or operate construction machinery is more productive – and more mobile between sectors – than the same worker without those skills. This is improvement in occupational mobility: the ability of labour to move between different uses.'
        },
        {
          pos:  1,
          text: 'With new skills, workers who were unemployed or stuck in declining roles can take up vacancies in shortage sectors. Persistent gaps in care, HGV driving and construction begin to close. Factor reallocation is the textbook supply-side benefit: the same total labour force produces more output because each worker is now in a higher-productivity use.'
        },
        {
          pos:  2,
          text: 'Better-skilled, better-allocated labour means the economy can produce more at every price level – long-run aggregate supply (LRAS) shifts right and the PPF moves outward. Real GDP rises, unemployment falls, and inflationary pressure from supply bottlenecks (e.g. wage pressure in shortage sectors) eases. This is the canonical supply-side policy outcome.'
        }
      ]
    }
  ],

  notes: [
    'Spot the difference between geographic mobility (moving between places) and occupational mobility (moving between jobs). Retraining mostly raises the latter.',
    'Quality vs quantity of labour: the workforce hasn\'t grown – the same workers are now more productive. That is a quality improvement.',
    'Distractors here include monetary policy (interest rates), immigration, and housing – all real factors, but not the mechanism this chain is about.'
  ]
};
