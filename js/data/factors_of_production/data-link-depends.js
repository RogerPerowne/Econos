/* ============================================================
   ECONOS – Link It · It Depends On station data
   Factors of Production: evaluate whether retraining policy raises UK output
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Factors of Production',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a large UK adult retraining scheme would actually raise GDP.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'retraining-output',
      claim: {
        icon:   '🎓',
        prompt: 'Policy claim',
        text:   'A large UK adult retraining scheme would substantially raise real GDP by improving the mobility and quality of labour.'
      },
      factors: [
        {
          id:    'skills-match',
          icon:  '🎯',
          label: 'How well the training matches actual employer demand',
          why:   'If retraining produces skills that employers are actively hiring for (HGV drivers, social care, construction trades), workers move into shortage vacancies and output rises. If training programmes teach the wrong skills, workers complete courses but still cannot find jobs in shortage sectors – occupational mobility does not improve and output gains evaporate. This is the single largest determinant of whether the policy works.'
        },
        {
          id:    'capital-investment',
          icon:  '🏭',
          label: 'Complementary capital investment',
          why:   'Skilled labour without modern capital still produces less output per hour. The UK\'s 25% capital-investment gap means even fully-retrained workers operate on outdated equipment. If retraining is paired with capital investment (machinery, software, infrastructure), output gains multiply. Without it, the productivity gain is modest. Labour and capital are complements, not substitutes.'
        },
        {
          id:    'geographic',
          icon:  '🏘️',
          label: 'Geographic mobility – can workers reach the jobs?',
          why:   'Retrained workers in low-productivity regions can only fill shortage vacancies if they can move to where those jobs are. High housing costs in productive regions (London, the South East) lock workers in place. Without parallel housing reform or transport investment, occupational mobility improves but geographic mobility remains a binding constraint on output gains.'
        },
        {
          id:    'participation',
          icon:  '👥',
          label: 'Whether the scheme attracts the right people',
          why:   'A scheme is only effective if economically inactive workers (long-term sick, early retirees, parents) actually enrol. If the scheme is taken up mainly by already-employed workers seeking a better job, total employment does not rise – workers simply reallocate within the existing labour force. Outreach, financial support and removing barriers to participation determine the headcount effect.'
        },
        {
          id:    'macro-demand',
          icon:  '📊',
          label: 'State of aggregate demand',
          why:   'Even perfectly-trained, mobile workers cannot raise output if there are no jobs for them. In a recession with weak AD, retrained workers join unemployment queues. The supply-side gain only materialises if AD is strong enough to absorb the additional labour. Timing the policy with the macro cycle matters.'
        },
        {
          id:    'cost-funding',
          icon:  '💷',
          label: 'Opportunity cost of public spending',
          why:   'A large retraining scheme is funded from taxation or borrowing, which has alternative uses (NHS, defence, debt repayment). If those alternatives have higher returns, the policy reduces overall welfare. Evaluating the scheme requires comparing its output gains against the next-best use of the same public money.'
        },
        {
          id:    'time-lag',
          icon:  '⏳',
          label: 'Time lag between training and productivity gains',
          why:   'Skills take time to develop and longer still to translate into productivity. Workers retrained today may not reach full effectiveness for 2–5 years; capital and management practices must catch up too. Short-term output effects are small even when long-term effects are large. Policy evaluation must distinguish horizon.'
        },
        {
          id:    'wage-rigidity',
          icon:  '🔒',
          label: 'Wage rigidity in shortage sectors',
          why:   'Shortage sectors like social care often pay low wages set by public funding or regulation. If wages can\'t rise to attract retrained workers, vacancies persist even as the supply of skilled workers grows. The mobility gain stalls at the sectoral wage barrier.'
        }
      ],
      hint: 'Look for the factors that most decide whether mobility gains translate into output gains, not just the ones that affect the cost of the policy.',
      pickN: 3,
      modelRanking: ['skills-match', 'capital-investment', 'geographic'],
      judgement: '"Whether a large UK adult retraining scheme substantially raises GDP depends primarily on three conditions: the extent to which training matches genuine employer demand for skills; whether complementary capital investment accompanies the upskilled labour; and whether geographic mobility constraints – driven by housing costs in productive regions – prevent retrained workers from reaching the jobs. If skills match demand, LRAS shifts right and real output rises. If capital is absent or workers cannot move, the mobility gain is incomplete and GDP growth is modest."',
      examBridge: '"The scheme\'s output effect depends most on how well the training matches genuine employer demand, whether complementary capital investment accompanies it, and whether geographic mobility constraints (housing, transport) let retrained workers reach the jobs. Without all three, the policy produces qualified workers but limited GDP gains."'
    }
  ]
};
