(function () {

  window.ECONOS_QUIZ = {
    id:       'govt_failure_main',
    topicId:  'govt_failure_main',
    title:    'Government Failure',
    subtitle: 'Theme 1 &middot; Topic 4.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the definition of government failure, information problems, regulatory capture, unintended consequences, the cobra effect, HS2, and when to prefer market solutions over intervention. Mixed formats including evaluation multi-selects, chains, and data analysis.',
    shortNames: {
      'govt_failure_1': 'What is govt failure',
      'govt_failure_2': 'Causes',
      'govt_failure_3': 'Regulatory capture',
      'govt_failure_4': 'Unintended consequences',
      'govt_failure_5': 'Market vs govt failure',
      'govt_failure_6': 'In practice',
      'govt_failure_7': 'Reducing failure'
    },

    questions: [

      /* 1 — mcq: definition */
      { type: 'mcq',
        stem: 'Which definition of <strong>government failure</strong> is most analytically precise?',
        opts: [
          'Government failure occurs when intervention produces a net welfare loss &mdash; the costs of intervention (including unintended consequences) exceed the benefits from correcting the market failure',
          'Government failure occurs whenever a government policy is unpopular or faces political opposition from voters or interest groups',
          'Government failure refers exclusively to cases where governments overspend on public services, creating budget deficits',
          'Government failure is when a government refuses to intervene in a market, allowing market failures to persist uncorrected'
        ],
        ans: 0,
        exp: 'The precise economic definition of government failure is a <strong>net welfare loss from intervention</strong>: the total costs of the intervention (DWL, fiscal cost, unintended consequences) exceed the welfare gain from correcting the original market failure. This is the relevant comparison for policy analysis. Option B confuses political unpopularity with economic failure. Option C is too narrow &mdash; government failure includes over-regulation, misallocation, and perverse incentives, not just fiscal deficits. Option D is the opposite &mdash; non-intervention allows market failure to persist (that is market failure, not government failure).'
      },

      /* 2 — elastic_sort: classify causes */
      { type: 'elastic_sort',
        stem: 'Classify each example as primarily a case of <strong>information failure</strong> or <strong>political incentive failure</strong> in government intervention.',
        categories: ['info', 'political'],
        categoryLabels: ['Information failure', 'Political incentive failure'],
        goods: [
          { icon: '🌡️', label: 'Government sets carbon tax at &#163;22/tonne when the true social cost of carbon is estimated at &#163;80&ndash;&#163;185/tonne', note: '', ans: 'info' },
          { icon: '🚂', label: 'Government commits to HS2 at &#163;37bn despite expert projections of &#163;100bn+ cost, because the announcement is popular pre-election', note: '', ans: 'political' },
          { icon: '⚗️', label: 'Biofuel mandate set without modelling food price effects &mdash; crop diversion to fuel causes global food price spike', note: '', ans: 'info' },
          { icon: '📅', label: 'Government delays pension reform for 15 years because raising retirement age is electorally costly despite long-run necessity', note: '', ans: 'political' },
          { icon: '🏗️', label: 'Public infrastructure project costs double because the government underestimated construction complexity', note: '', ans: 'info' },
          { icon: '📣', label: 'Fuel duty escalator abandoned due to fuel price protests, despite being economically optimal for carbon correction', note: '', ans: 'political' }
        ],
        exp: '<strong>Information failure</strong>: the government lacks the knowledge to set the correct policy level or predict indirect effects. This is distinct from market information failure &mdash; governments face their own information constraints (Hayek\'s knowledge problem applied to policy). <strong>Political incentive failure</strong>: governments face short-run electoral incentives that conflict with long-run welfare maximisation. Politicians on 4&ndash;5 year election cycles discount future costs; voters reward visible short-run benefits; lobbying distorts policy toward special interests.'
      },

      /* 3 — multi_select: unintended consequences */
      { type: 'multi_select',
        stem: 'Which of the following are genuine examples of <strong>unintended consequences</strong> of government interventions?',
        opts: [
          'UK Right to Buy: sale of council housing at discounts reduced social housing stock and worsened long-run supply shortage',
          'US biofuel mandates: corn diversion to ethanol raised global food prices and contributed to food insecurity in developing countries',
          'Sweden\'s carbon tax: Sweden\'s high carbon tax reduced emissions &mdash; this was the intended outcome of the policy',
          'EU CAP price supports: guaranteed minimum prices created "butter mountains" and "wine lakes" &mdash; costly surplus accumulation',
          'Sugary drinks levy: manufacturers reduced can sizes to stay below the 5g/100ml threshold, making consumers pay more per litre for less drink',
          'UK fuel duty: higher fuel prices reduce driving &mdash; this was the intended environmental outcome'
        ],
        correct: [0, 1, 3, 4],
        exp: 'Options A, B, D, and E are genuine unintended consequences. <strong>Right to Buy</strong>: intended to increase homeownership; unintended: permanently reduced social housing stock, councils could not fund replacements. <strong>Biofuel mandates</strong>: intended to reduce CO2; unintended: food price spikes harming the poorest globally. <strong>CAP surpluses</strong>: intended to support farm incomes; unintended: chronic over-production at great storage and disposal cost. <strong>Smaller cans</strong>: intended to reduce sugar consumption; unintended: consumers pay higher unit prices for reduced portions. Options C and F describe <em>intended</em> outcomes &mdash; the policies worked as designed.'
      },

      /* 4 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>government failure</strong> in practice. Which is the ODD ONE OUT?',
        items: [
          { icon: '🚆', label: 'HS2 costs rose from &#163;37bn (2010 estimate) to &#163;100bn+; Phase 2 (Manchester) cancelled 2023', note: '' },
          { icon: '🏦', label: 'Bank of England granted independence in 1997 to set interest rates free from electoral cycle pressure', note: '' },
          { icon: '🐍', label: 'Colonial India: cobra bounty scheme led to breeding of cobras, worsening the snake problem', note: '' },
          { icon: '📜', label: 'PFI contracts: expensive long-term agreements forced renationalisation of many NHS hospital projects', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B &mdash; Bank of England independence is an example of <strong>successful institutional reform to reduce</strong> government failure, not an example of government failure itself. By delegating interest rate decisions to an independent Monetary Policy Committee with a clear 2% inflation mandate, the government removed monetary policy from short-term electoral pressures &mdash; reducing political incentive failure. Options A (HS2 cost overruns), C (cobra bounty perverse incentive), and D (PFI poor contract design) are all classic cases of government failure: information failure, perverse incentive design, and principal-agent problems respectively.'
      },

      /* 5 — para_fill: Hayek's knowledge problem */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about Hayek\'s knowledge problem and its implications for government intervention.',
        anchor: 'Hayek\'s knowledge problem challenges the assumption that governments have sufficient information to improve on market outcomes.',
        para: 'Hayek argued that economic knowledge is [1] across millions of individuals &mdash; no central authority can [2] the information dispersed in price signals. Prices coordinate economic activity by aggregating [3] knowledge about preferences, costs, and resource availability. When governments intervene without this information &mdash; for example, setting a subsidy based on uncertain [4] estimates &mdash; they risk [5] or over-correcting the market failure. This is not an argument against all intervention: where market [6] are severe and consequences irreversible (climate change, pandemics), the case for intervention despite information limits is [7].',
        blanks: [
          { id: 1, opts: ['dispersed', 'concentrated', 'public', 'private'], ans: 0 },
          { id: 2, opts: ['aggregate', 'ignore', 'replace', 'suppress'], ans: 0 },
          { id: 3, opts: ['local', 'global', 'official', 'academic'], ans: 0 },
          { id: 4, opts: ['MEC', 'GDP', 'tax', 'wage'], ans: 0 },
          { id: 5, opts: ['under-correcting', 'over-producing', 'taxing', 'regulating'], ans: 0 },
          { id: 6, opts: ['failures', 'prices', 'costs', 'profits'], ans: 0 },
          { id: 7, opts: ['strong', 'weak', 'absent', 'uncertain'], ans: 0 }
        ],
        exp: '(1) <strong>Dispersed</strong>: Hayek\'s key insight &mdash; knowledge is not centralised. (2) <strong>Aggregate</strong>: no central planner can replicate what the price mechanism achieves. (3) <strong>Local</strong>: local knowledge of time and place &mdash; specific, contextual, tacit. (4) <strong>MEC</strong>: marginal external cost &mdash; the key input for Pigouvian tax calibration; uncertain and contested. (5) <strong>Under-correcting</strong>: information gaps lead to under- or over-correction. (6) <strong>Failures</strong>: market failures. (7) <strong>Strong</strong>: irreversible, catastrophic market failures strengthen the case for intervention despite imperfect information.'
      },

      /* 6 — data_table: HS2 cost escalation */
      { type: 'data_table',
        stem: 'The table shows HS2 cost estimates and scope at different points in time.',
        headers: ['Year', 'Official estimate', 'Scope', 'Key development'],
        rows: [
          ['2010', '&#163;37.5bn', 'London&ndash;Birmingham (Phase 1)', 'Project announced'],
          ['2015', '&#163;55.7bn', 'Phase 1 + Phase 2 (to Manchester/Leeds)', 'Phase 2 added'],
          ['2019', '&#163;88bn', 'Full Y-network', 'Independent review ordered'],
          ['2020', '&#163;100&ndash;106bn', 'Full Y-network', 'Oakervee Review published'],
          ['2023', '&#163;100bn+', 'Phase 1 only (Phase 2 cancelled)', 'Phase 2 scrapped; Phase 1 continues']
        ],
        question: 'Which analysis of HS2 is best supported by the data?',
        opts: [
          'HS2 illustrates optimism bias in government project appraisal: initial estimates were systematically underestimated; the sunk cost fallacy and political commitment made rational project revision difficult',
          'The cost escalation proves that all large infrastructure projects should be cancelled before construction begins to avoid waste',
          'HS2 represents successful government intervention: costs rose due to external supply chain factors beyond government control',
          'The data shows that independent reviews are ineffective: costs continued to rise after the 2019 review, suggesting reviews have no impact on project management'
        ],
        ans: 0,
        exp: 'Option A is best supported. Costs rose nearly three-fold (&#163;37.5bn to &#163;100bn+) over 13 years, consistent with Flyvbjerg\'s research on the "megaproject paradox" &mdash; systematic underestimation of costs and overestimation of benefits in major government projects. <strong>Optimism bias</strong>: the 2010 estimate was not a neutral forecast; it reflected political incentives to present a favourable cost-benefit ratio to secure approval. <strong>Sunk cost fallacy</strong>: by 2023, &#163;20bn+ had been spent &mdash; political difficulty of cancelling increased with sunk cost. Phase 2 was eventually cancelled, but the core project continues despite cost overruns. Option B is too absolute. Option C lacks evidence. Option D confuses review effectiveness with project management outcomes.'
      },

      /* 7 — calculation: cost-benefit of intervention */
      { type: 'calculation',
        context: 'A government is considering a regulation to reduce factory air pollution. The regulation costs industry <strong>&#163;500 million per year</strong> in compliance costs. Independent studies estimate the health benefits are between <strong>&#163;200 million and &#163;900 million per year</strong> (range due to valuation uncertainty).',
        working: [
          'Step 1: Net benefit using low estimate',
          '&#163;200m (benefit) - &#163;500m (cost) = -&#163;300m (net cost)',
          'Step 2: Net benefit using central estimate',
          '&#163;550m (mid-point benefit) - &#163;500m (cost) = +&#163;50m (net benefit)',
          'Step 3: Net benefit using high estimate',
          '&#163;900m (benefit) - &#163;500m (cost) = +&#163;400m (net benefit)',
          'Step 4: decision under uncertainty',
          'Regulation is only justified if expected benefit > &#163;500m. Given range &#163;200m-&#163;900m, outcome is ambiguous.',
          'Government failure risk: if true benefit is &#163;200m, regulation creates net welfare loss of &#163;300m'
        ],
        stem: 'Based on the cost-benefit analysis, which conclusion about the regulation is most justified?',
        opts: [
          { ped: 'The regulation is uncertain: justified if true health benefit exceeds &#163;500m; a net welfare loss if benefits are at the low end of estimates', typ: 'Break-even: benefit must exceed &#163;500m to justify regulation. Range spans both sides of this threshold.', rev: 'Compare compliance cost with each estimate; note the ambiguity' },
          { ped: 'The regulation is clearly justified because health benefits always outweigh costs', typ: 'Ignores that at the low estimate (&#163;200m) costs exceed benefits', rev: 'Benefits range &#163;200m&ndash;&#163;900m; at low end, cost (&#163;500m) > benefit' },
          { ped: 'The regulation is clearly unjustified because compliance costs (&#163;500m) are certain while benefits are uncertain', typ: 'Applies excessive risk aversion; ignores that central estimate suggests positive net benefit', rev: 'Uncertainty cuts both ways; expected value analysis is more appropriate' },
          { ped: 'The government should wait until it can estimate benefits precisely before deciding', typ: 'Ignores that delay is also a policy choice with costs (ongoing pollution harm)', rev: 'Cost of delay must be weighed against cost of regulatory error' }
        ],
        ans: 0,
        exp: 'The regulation is <strong>uncertain</strong>. At the low estimate (&#163;200m), costs (&#163;500m) exceed benefits &mdash; the regulation would create a net welfare loss (government failure). At the central estimate (&#163;550m), there is a modest net benefit. At the high estimate (&#163;900m), it is clearly justified. This illustrates why information failure is a key source of government failure: the optimal decision depends on MEC estimates that are genuinely uncertain. The Treasury Green Book requires sensitivity analysis across different assumptions for exactly this reason. The "correct" decision depends on risk preferences (how much weight to give the low-end scenario) and the cost of delay.'
      },

      /* 8 — Multi-select: evaluation of government failure */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>government failure</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'Government failure is not inevitable: Bank of England independence and OBR scrutiny show that institutional design can reduce political incentive failure, so the strength of the case against intervention depends on the quality of the regulatory architecture in place.',
          'The presence of government failure does not automatically justify non-intervention — the correct test is whether the net welfare loss from intervention is smaller than the net welfare loss from the uncorrected market failure, which must be assessed case by case.',
          'Government failure occurs when intervention produces a net welfare loss, and this means governments should never intervene in markets.',
          'HS2 cost escalation illustrates optimism bias, but this tendency can be partly corrected through independent appraisal and reference-class forecasting — suggesting reform of the appraisal process rather than abandonment of public infrastructure investment.',
          'Government failure is bad because it wastes taxpayers\' money and produces bad outcomes for society.',
          'It depends on the situation — sometimes government intervention works and sometimes it does not.'
        ],
        correct: [0, 1, 3],
        exp: '<strong>Option A</strong> is strong evaluation: it rejects a blanket conclusion (government failure is inevitable) using specific UK institutional evidence (BoE independence, OBR), reaching the qualified direction that quality of institutional design determines the severity of government failure. <strong>Option B</strong> is strong evaluation: it makes the evaluative move of rejecting the implied binary (government failure → no intervention) by identifying the correct comparative test — net welfare losses must be compared on both sides. This is a direction with a stated reasoning framework. <strong>Option D</strong> is strong evaluation: it accepts the HS2 evidence of optimism bias but qualifies the policy conclusion — the failure points to appraisal reform, not a blanket case against public investment. This is exactly the "nuanced conclusion based on evidence" that distinguishes Level 4. <strong>Option C</strong> overclaims certainty (\'should never intervene\') — one-sided analysis that ignores market failures requiring correction. <strong>Option E</strong> is vague description with no analytical framework or direction. <strong>Option F</strong> is a formulaic \'it depends\' with no analytical content — the most common low-scoring evaluation mistake.'
      },

      /* 9 — chain: regulatory capture sequence */
      { type: 'chain',
        stem: 'Place the sequence of events leading to regulatory capture in the correct logical order.',
        items: [
          { label: 'Regulator adopts industry\'s framework and arguments; regulatory standards become permissive', note: '' },
          { label: 'Government establishes independent regulator to protect public interest (e.g. financial regulator FSA)', note: '' },
          { label: 'Market failure identified: monopoly power or systemic risk requires regulatory oversight', note: '' },
          { label: 'Industry engages regulator intensively; regulators are recruited from (and later return to) industry; information asymmetry favours industry', note: '' },
          { label: 'Market failure recurs or worsens; regulator has failed its public interest mandate (e.g. 2008 financial crisis)', note: '' },
          { label: 'Post-failure: new regulatory architecture created; cycle risk remains', note: '' }
        ],
        correctOrder: [2, 1, 3, 0, 4, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Market failure identified (monopoly, systemic risk) &mdash; the original justification for regulation.<br>2. Independent regulator established to protect public interest.<br>3. Industry engages regulator; revolving door and information asymmetry operate.<br>4. Regulator adopts industry perspective; standards become permissive.<br>5. Market failure recurs or worsens &mdash; regulatory failure materialises.<br>6. Post-crisis reforms; new architecture; but structural incentives remain.<br><br>The pre-2008 FSA followed this pattern exactly. Awareness of this cycle is why post-2008 regulatory reform separated prudential regulation (PRA) from conduct regulation (FCA) and created the Financial Policy Committee (FPC) with a systemic-stability mandate.'
      },

      /* 10 — multi_select: institutional mechanisms to reduce government failure */
      { type: 'multi_select',
        stem: 'Which institutional mechanisms are specifically designed to <strong>reduce government failure</strong> by improving the quality of policy decisions?',
        opts: [
          'Bank of England independence: MPC sets interest rates free from electoral cycle pressure',
          'Office for Budget Responsibility (OBR): independent fiscal forecasting reduces government\'s ability to manipulate its own projections',
          'Sunset clauses on regulations and subsidies: automatic expiry forces reassessment of whether the original justification persists',
          'Parliamentary lobbying: allows businesses to communicate directly with ministers about policy impacts',
          'Treasury Green Book cost-benefit analysis: rigorous appraisal framework required before major government spending decisions',
          'First-past-the-post electoral system: gives governments strong mandates to push through long-term structural reform'
        ],
        correct: [0, 1, 2, 4],
        exp: 'Options A, B, C, and E are institutional mechanisms specifically designed to reduce government failure. <strong>BoE independence</strong> (A): removes short-term political incentive from monetary policy. <strong>OBR</strong> (B): prevents governments from manipulating economic forecasts for electoral advantage. <strong>Sunset clauses</strong> (C): prevent regulatory capture and vested interests from making temporary measures permanent. <strong>Green Book appraisal</strong> (E): forces explicit cost-benefit analysis and sensitivity testing before major expenditure. Option D (lobbying) is a mechanism that can <em>cause</em> regulatory capture and government failure, not reduce it. Option F is unrelated to government failure in economic policy &mdash; electoral systems affect political stability but not the specific incentive and information problems that cause government failure.'
      }

    ]
  };

})();
