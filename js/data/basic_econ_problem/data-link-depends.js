/* ============================================================
   ECONOS — Link It · It Depends On station data
   The Economic Problem: evaluate a scarcity and opportunity cost claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'The Economic Problem',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether the economic problem is more or less acute.',
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
      id: 'econ-problem-severity',
      claim: {
        icon:   '⚕️',
        prompt: 'Claim',
        text:   'Scarcity makes the economic problem unavoidable — all societies must prioritise among competing wants, and every choice involves an opportunity cost.'
      },
      factors: [
        {
          id:    'severity-scarcity',
          icon:  '📊',
          label: 'Severity of scarcity relative to wants',
          why:   'The economic problem is more acute when the gap between available resources and desired outputs is larger. UK NHS waiting lists (7.7m) vs a system with higher funding (Germany) illustrate that political choices affect the severity of scarcity — not just technology or population. Scarcity is always present but its intensity varies across systems.'
        },
        {
          id:    'technology',
          icon:  '🔬',
          label: 'State of technology and productive capacity',
          why:   'Advanced technology shifts the PPF outward — more can be produced from given resources. But technology also expands wants (new treatments, new devices) — so it may increase rather than reduce the economic problem. The net effect on scarcity depends on whether technology raises productive capacity faster than it expands human desires.'
        },
        {
          id:    'mixed-vs-command',
          icon:  '🏛️',
          label: 'How the economic system allocates scarce resources',
          why:   'Free markets use price signals to ration scarce goods — those willing and able to pay receive them. Command economies use central planning. Mixed economies (UK) use a combination. The mechanism for addressing scarcity differs, but no system eliminates it. The choice of mechanism determines who receives the scarce goods (for whom) and how efficiently they are produced.'
        },
        {
          id:    'public-vs-private',
          icon:  '⚕️',
          label: 'Whether goods are public, private or merit goods',
          why:   'Private goods are allocated through markets — price rations demand. Public goods cannot be withheld from non-payers. Merit goods (healthcare, education) are often provided publicly because market price would exclude those who need them most. The type of good determines which institution addresses scarcity and which trade-offs become explicit.'
        },
        {
          id:    'time-horizon',
          icon:  '⏳',
          label: 'Short-run vs long-run scarcity',
          why:   'Some scarcities are temporary — a shortage of PPE during COVID was resolved through supply chain expansion. Others are structural — the scarcity of NHS clinical staff reflects decades of undertraining. Long-run solutions (training more doctors) take years; short-run trade-offs (postponing non-urgent care) are immediate. The distinction affects what opportunity costs are most relevant.'
        },
        {
          id:    'preference-intensity',
          icon:  '❤️',
          label: 'Strength and distribution of individual preferences',
          why:   'The economic problem is more acute when preferences are strongly held and heterogeneous — each person prioritises differently, making collective allocation contentious. The NHS must weigh cancer treatment against mental health against preventive care — all strongly preferred by different groups. Where preferences are more homogeneous, allocation trade-offs are less contested.'
        },
        {
          id:    'political-economy',
          icon:  '🗳️',
          label: 'Political process for determining allocation',
          why:   'In democratic systems, the economic problem is partly a political problem: which trade-offs are politically acceptable? Cutting NHS cancer treatment to fund mental health would be politically contested even if QALYs were equated. The visibility and political salience of opportunity costs affects which trade-offs are actually made.'
        },
        {
          id:    'sustainability',
          icon:  '🌍',
          label: 'Environmental limits and natural resource scarcity',
          why:   'Human wants include not only current consumption but future security. Environmental scarcity (water, clean air, carbon budget) adds a sustainability dimension to the economic problem: using resources for current production creates opportunity costs for future generations. The economic problem is not just about allocating today\'s stock but about sustaining tomorrow\'s.'
        }
      ],
      modelRanking: ['severity-scarcity', 'technology', 'mixed-vs-command'],
      judgement: '"Whether scarcity is most severe depends on the gap between productive capacity and wants — which technology shapes on both sides simultaneously. How scarcity is addressed depends on the economic system: markets use price (efficient but inequitable), command economies use planning (equitable intent but information-poor), and mixed economies combine both. The economic problem is most analytically visible when opportunity costs are made explicit — as NICE\'s QALY threshold does for NHS decisions."'
    }
  ]
};
