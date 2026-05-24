/* ============================================================
   ECONOS — Link It · It Depends On station data
   Specialisation & Money: evaluate the claim that specialisation
   raises productivity
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Specialisation & Money',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether specialisation actually raises productivity.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict the Outcome', href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'specialisation-productivity',
      claim: {
        icon:   '⚙️',
        prompt: 'Core claim',
        text:   'Specialisation raises productivity.'
      },
      factors: [
        {
          id:    'task-divisibility',
          icon:  '🔧',
          label: 'Task divisibility',
          why:   'Adam Smith\'s pin factory had 18 distinct operations. A bespoke artist cannot subdivide their work the same way. Productivity gains depend on how many separate tasks the production process can be broken into. Where production is inherently creative or varies from unit to unit, the division of labour offers limited gains.'
        },
        {
          id:    'human-capital',
          icon:  '🎓',
          label: 'Human capital',
          why:   'Workers need skills to specialise effectively. UK apprenticeship completion rates fell after 2017 reforms, reducing the skilled workforce available for specialised manufacturing roles. Without adequate training and education, workers may lack the foundation to perform a specialised task to the standard required — limiting productivity gains.'
        },
        {
          id:    'exchange-systems',
          icon:  '💱',
          label: 'Exchange systems',
          why:   'Specialisation only raises living standards if surplus output can be exchanged. In barter economies or during payment system failures (e.g., 2023 UK banking outages), the gains from specialisation cannot be realised. Without functioning money and trade networks, increased output per worker delivers no benefit to the worker who cannot swap their surplus for other goods.'
        },
        {
          id:    'market-size',
          icon:  '🌍',
          label: 'Size of the market',
          why:   'The division of labour is limited by the extent of the market (Smith). A small local market cannot absorb the output of a highly specialised producer. As markets expand through trade — nationally and internationally — greater specialisation becomes viable, amplifying productivity gains. Trade barriers that shrink accessible markets also shrink the scope for specialisation.'
        },
        {
          id:    'repetitive-strain',
          icon:  '⚠️',
          label: 'Alienation and worker motivation',
          why:   'Highly repetitive specialised tasks can lead to worker alienation, reduced motivation and higher absenteeism — especially in low-wage manufacturing. Marx identified this as a fundamental tension of the division of labour. Where morale effects are significant, the predicted productivity gains may be partially offset by lower effort and higher turnover.'
        },
        {
          id:    'technology',
          icon:  '🤖',
          label: 'Availability of technology',
          why:   'Specialisation and technology are complementary. Automated assembly lines allow specialised operations to run far faster and more accurately than human workers alone. Where firms cannot access modern capital equipment — due to cost or supply constraints — the productivity gains from specialisation are limited by the human pace of production.'
        }
      ],
      modelRanking: ['task-divisibility', 'human-capital', 'exchange-systems'],
      judgement: '"Whether specialisation raises productivity depends primarily on whether the production process is sufficiently divisible into distinct tasks — if it cannot be subdivided, there are no gains to capture. Where task divisibility exists, the extent of the gain depends on the quality of human capital available to perform specialised roles. Finally, even strong productivity gains remain unrealised if functioning exchange systems — money and trade networks — do not exist to allow surplus output to be traded for other goods."'
    }
  ]
};
