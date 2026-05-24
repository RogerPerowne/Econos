/* ============================================================
   ECONOS — Link It · Context station data
   Market Equilibrium: classify evidence on rent controls in UK cities
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:   'Market Equilibrium',
  backUrl: TopicLoader.buildUrl('link_intro.html'),
  nextUrl: TopicLoader.buildUrl('link_chain.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'predict', label: 'Predict outcome',    href: TopicLoader.buildUrl('link_predict.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in this extract most change whether a price ceiling (rent control) is an effective policy for making housing more affordable in UK cities?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Think about what actually changes the conclusion — not just what sounds economic.',

    extract: [
      'Data from the Office for National Statistics confirms that [[shortage|London rents rose 11.2% in 2023; median rent now 46% of median earnings]] — above the 30% threshold economists typically consider affordable.',
      'Advocates of rent control point out that [[short-supply|London completions fell to 29,000 in 2023, below the 66,000 needed]], suggesting that supply-side responses to high prices are structurally constrained by planning restrictions and land costs.',
      'However, economic analysis shows that [[disincentive|Stockholm rent controls cut rental supply 15% over ten years]], as landlords withdrew properties — demonstrating how a price ceiling below equilibrium can shrink the very supply it is meant to make affordable.',
      'New modelling by the Resolution Foundation suggests that [[multiplier|every 10% London rent rise cuts net in-migration from UK regions by 6%]], indicating that high rents impose economic costs beyond individual households — reducing labour market flexibility and productivity.',
      'The London School of Economics notes that [[elastic|long-run PES of London housing ≈ 0.4 vs national 1.2]] — due to planning constraints, green belt restrictions and high land costs.'
    ],

    evidence: {
      'shortage':    { text: 'London rents rose 11.2% in 2023; median rent now 46% of median earnings' },
      'short-supply':{ text: 'London completions fell to 29,000 in 2023, below the 66,000 needed' },
      'disincentive':{ text: 'Stockholm rent controls cut rental supply 15% over ten years' },
      'multiplier':  { text: 'every 10% London rent rise cuts net in-migration from UK regions by 6%' },
      'elastic':     { text: 'long-run PES of London housing ≈ 0.4 vs national 1.2' }
    },

    buckets: [
      { id: 'supports',    label: 'Supports rent control',           tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against rent control',     tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way', tone: 'blue',  icon: '?' }
    ],

    correct: {
      'shortage':     'supports',
      'short-supply': 'complicates',
      'disincentive': 'against',
      'multiplier':   'supports',
      'elastic':      'complicates'
    },

    explain: {
      'shortage':     'A rent-to-earnings ratio of 46% — well above the 30% affordability threshold — confirms that housing costs are a genuine burden on renters. This is direct evidence of a market failure to deliver affordable housing, strengthening the case for intervention such as a rent ceiling.',
      'short-supply': 'With completions only 44% of the estimated need, the market is not generating enough new supply. This complicates the debate: on one hand it shows a genuine supply failure that rent control alone cannot fix; on the other it weakens the argument that high rents will automatically attract enough new supply to solve the problem over time.',
      'disincentive': 'The Stockholm evidence shows a concrete supply-side cost of rent control: landlords exited the market, cutting supply by 15% over ten years. A price ceiling that destroys the very supply it is meant to make affordable is a strong argument against the policy.',
      'multiplier':   'Every 10% rent rise reducing net in-migration by 6% shows that high rents impose economy-wide costs — reduced labour mobility and lower productivity — beyond just household budgets. These wider externalities strengthen the case for some form of intervention to reduce rents.',
      'elastic':      'With PES ≈ 0.4 — far below the national average — higher prices in London generate very little new supply anyway. This complicates the standard argument against rent control ("it kills supply"): if supply barely responds to price signals, the supply-destruction effect of a rent ceiling may be smaller than critics claim; but it also means there is no easy supply-side fix.'
    },

    bucketCue: 'Strong application changes the conclusion — it does not just describe what is in the extract.',

    examBridge: '"The ONS evidence of rents at 46% of median earnings and the Resolution Foundation\'s labour-mobility finding strongly support intervention, but the case for rent control is complicated by the Stockholm precedent — which shows supply can fall 15% under a ceiling — and by London\'s inelastic housing supply (PES ≈ 0.4), which means neither high prices nor rent controls will quickly change the quantity of housing available."',

    whatGoodLooksLike: [
      { icon: '🔍', text: 'Use specific figures from the extract'           },
      { icon: '❓', text: 'Ask which details change the conclusion'         },
      { icon: '⚖️', text: 'Separate supporting evidence from complications' }
    ]
  }
};
