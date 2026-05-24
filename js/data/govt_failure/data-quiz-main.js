(function () {

  window.ECONOS_QUIZ = {
    id:       'govt_failure_main',
    topicId:  'govt_failure_main',
    title:    'Government Failure',
    subtitle: 'Theme 1 &middot; Topic 4.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'govt_failure_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers government failure types, unintended consequences, regulatory capture, political incentives, and cost-benefit limitations',
    shortNames: [
      'Definition MCQ', 'Types categorise', 'Regulatory capture', 'Political incentives MCQ',
      'Unintended consequences', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 — MCQ: definition */
      { type: 'mcq',
        id: 'q_gf_1',
        stem: 'Which statement best defines <strong>government failure</strong>?',
        opts: [
          'Government intervention that causes resource misallocation — making the situation worse than the market outcome it was designed to correct',
          'A government that loses a democratic election after economic mismanagement',
          'Any situation in which the government fails to achieve all of its stated policy objectives',
          'A government that fails to collect enough tax revenue to fund public services'
        ],
        ans: 0,
        exp: '<strong>Government failure</strong> occurs when government intervention in markets produces outcomes that are <em>worse</em> than the market failure it was intended to correct — a net welfare loss from intervention. Types include: imperfect information (governments don\'t know the correct tax/subsidy level); unintended consequences (intervention has side effects not anticipated); regulatory capture (regulated industries influence regulators); policy myopia (short-run political incentives distort long-run decisions); bureaucratic inefficiency (public agencies are less efficient than private firms). The existence of market failure does not automatically justify intervention — government failure must also be assessed.'
      },

      /* 2 — Categorise: types of government failure */
      { type: 'categorise',
        id: 'q_gf_2',
        stem: 'Sort each example into the correct type of government failure.',
        categories: ['Information failure', 'Unintended consequences', 'Regulatory capture', 'Political myopia'],
        items: [
          { text: 'A carbon tax set too low fails to reach the social optimum because the government cannot measure the true marginal external cost', category: 'Information failure' },
          { text: 'Rent controls reduce housing supply as landlords withdraw properties rather than rent at controlled prices', category: 'Unintended consequences' },
          { text: 'The banking regulator is staffed by former bankers who are reluctant to impose strict capital requirements on their old employers', category: 'Regulatory capture' },
          { text: 'A government cuts infrastructure investment before an election to show a short-term budget surplus', category: 'Political myopia' },
          { text: 'Agricultural subsidies designed to support small farmers are disproportionately captured by large agribusiness', category: 'Unintended consequences' },
          { text: 'A government overestimates the social benefit of a new HS2-style railway, investing far more than the net present value justifies', category: 'Information failure' }
        ],
        exp: '<strong>Information failure</strong>: government cannot know the correct values for taxes, subsidies, or cost-benefit calculations. <strong>Unintended consequences</strong>: intervention produces unexpected side effects — often because price controls suppress the market\'s signalling function. <strong>Regulatory capture</strong>: regulated industries gain influence over their regulators — Stigler (1971): regulation serves the regulated industry, not consumers. <strong>Political myopia</strong>: democratic incentives create short time horizons — politicians favour policies with quick visible benefits and delayed costs.'
      },

      /* 3 — MCQ: regulatory capture */
      { type: 'mcq',
        id: 'q_gf_3',
        stem: '<strong>Regulatory capture</strong> best describes a situation where:',
        opts: [
          'Regulated firms or industries gain sufficient influence over their regulators that regulation serves the industry\'s interests rather than consumers\' or society\'s',
          'A government regulator takes control of a private firm to prevent its collapse',
          'A foreign government captures a regulatory agency through diplomatic pressure',
          'Strict regulation prevents new firms from entering a market, protecting incumbents from competition'
        ],
        ans: 0,
        exp: 'Regulatory capture (Stigler, 1971): over time, regulatory agencies may be "captured" by the industries they regulate through: <strong>revolving door</strong> (regulators come from or go to the industry — shared professional culture); <strong>lobbying</strong> (regulated industries have concentrated interest and high resources to influence regulators); <strong>information advantage</strong> (industry provides much of the data regulators use — can shape how it is presented). The captured regulator then sets regulations that protect incumbent firms, restrict entry, or allow prices above competitive levels — harming consumers. Examples: US financial regulators pre-2008, energy regulation in network industries.'
      },

      /* 4 — MCQ: unintended consequences of rent control */
      { type: 'mcq',
        id: 'q_gf_4',
        stem: 'A government imposes rent controls (a price ceiling below equilibrium) to help low-income tenants. What is the most likely <strong>unintended consequence</strong>?',
        opts: [
          'The supply of rental housing falls as landlords withdraw properties or convert them to other uses — the policy intended to help tenants worsens the long-run housing shortage',
          'Demand for rental housing falls as controlled rents are too low to attract quality tenants',
          'Landlords increase investment in their properties because controlled rents guarantee stable income',
          'Rent controls eliminate the housing shortage by ensuring all willing tenants can find accommodation at affordable rents'
        ],
        ans: 0,
        exp: 'Rent control creates excess demand (more tenants want flats at controlled price than landlords supply). Unintended consequences: <strong>supply reduction</strong> (landlords withdraw from the market, convert to AirBnB or owner-occupation — rational response to below-market return); <strong>quality deterioration</strong> (landlords have no incentive to maintain properties since they cannot raise rents); <strong>misallocation</strong> (sitting tenants remain in properties too large for their needs since they lose the subsidy if they move); <strong>black market rents</strong> (informal payments above controlled price). In the long run, rent control can make the housing shortage it was designed to alleviate significantly worse.'
      },

      /* 5 — MCQ: political myopia */
      { type: 'mcq',
        id: 'q_gf_5',
        stem: 'Which example best illustrates <strong>government failure from political short-termism</strong>?',
        opts: [
          'A government delays increasing the state pension age before an election, imposing higher future costs on taxpayers rather than current voters',
          'A government invests in infrastructure with a 50-year payback — rational long-run decision-making',
          'A central bank raises interest rates to control inflation despite political pressure to keep rates low',
          'A government consults extensively with economists before setting the carbon tax rate'
        ],
        ans: 0,
        exp: 'Political myopia arises from the electoral cycle: politicians face re-election every 4-5 years, incentivising decisions with short-run visible benefits and long-run hidden costs. Delaying pension age reform imposes costs on future taxpayers (not today\'s voters) and avoids unpopular announcements before elections. Other examples: pre-election spending booms (Nordhaus political business cycle); under-investment in maintenance (visible costs now, failure costs later); slow action on climate change (costs now, benefits in 50+ years). This creates a systematic bias in democratic systems toward present consumption at the expense of future investment.'
      },

      /* 6 — Cause & effect: government failure mechanisms */
      { type: 'cause_effect',
        id: 'q_gf_6',
        stem: 'Match each intervention to its government failure consequence.',
        pairs: [
          { cause: 'Agricultural subsidies introduced to support family farms', effect: 'Large agribusiness captures most of the subsidy through scale advantages; inequality worsens' },
          { cause: 'Government estimates social cost of carbon and sets tax accordingly', effect: 'If estimate is wrong, tax is too high or too low — missing the social optimum in either direction' },
          { cause: 'Financial regulator staffed primarily by former bankers', effect: 'Regulatory capture — reluctance to impose capital requirements that reduce bank profitability' },
          { cause: 'Government bails out failing banks in a crisis', effect: 'Future moral hazard — banks take more risk knowing bailout is likely' },
          { cause: 'Government sets minimum wage above market equilibrium', effect: 'Unintended unemployment among low-skill workers if demand for labour is elastic' },
          { cause: 'Government invests in infrastructure based on optimistic projections', effect: 'Optimism bias leads to cost overruns and lower returns than projected' }
        ],
        exp: 'Government failure takes many forms: <strong>distributional capture</strong> (subsidies benefit wrong groups); <strong>information failure</strong> (wrong tax rate); <strong>regulatory capture</strong> (regulated industry gains influence); <strong>moral hazard from intervention</strong> (bailout guarantees increase risk-taking); <strong>labour market unintended consequences</strong> (minimum wage employment effects — debated empirically); <strong>optimism bias</strong> (public sector tendency to underestimate costs and overestimate benefits — identified by HM Treasury as a systematic problem in UK public investment appraisal).'
      },

      /* 7 — Match pairs: government failure vocabulary */
      { type: 'match_pairs',
        id: 'q_gf_7',
        stem: 'Match each term to its definition.',
        pairs: [
          { a: 'Government failure', b: 'Intervention that worsens resource allocation compared to the market outcome' },
          { a: 'Regulatory capture', b: 'Regulated industry gains influence over its regulator — regulation serves the industry' },
          { a: 'Unintended consequences', b: 'Intervention produces unexpected side effects that undermine its goals' },
          { a: 'Political myopia', b: 'Electoral incentives create short time horizons — long-run costs deferred to future governments' },
          { a: 'Optimism bias', b: 'Systematic tendency to underestimate costs and overestimate benefits in public project appraisal' },
          { a: 'Cost-benefit analysis', b: 'Technique to evaluate public investment by weighing all social costs against all social benefits' }
        ],
        exp: 'Government failure vocabulary: the core concept is that intervention can make things worse, not just better — the market failure justification for intervention must be weighed against government failure risks. Each type has a different mechanism: regulatory capture → incentive alignment failure; unintended consequences → price mechanism suppressed or circumvented; political myopia → time horizon distortion; optimism bias → information distortion. CBA is the tool designed to overcome these biases — but is itself subject to measurement problems and can be manipulated by interested parties.'
      },

      /* 8 — Odd one out: government failure examples */
      { type: 'odd_one_out',
        id: 'q_gf_8',
        stem: 'Three of these are examples of <strong>government failure</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🏠', label: 'Rent controls cause a long-run housing shortage as landlords exit the market', note: '' },
          { icon: '🌾', label: 'EU agricultural subsidies benefit large agribusiness more than small family farms they were designed to help', note: '' },
          { icon: '💊', label: 'The NHS provides healthcare free at the point of use — eliminating the private market that would underprovide due to positive externalities', note: '' },
          { icon: '🏦', label: 'Bank bailouts create moral hazard — banks take excessive risk knowing the government will rescue them', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>the NHS providing free healthcare</strong>. This is an example of successful government intervention correcting a market failure (positive externality of healthcare, information asymmetry between doctors and patients, merit good undervaluation). It is not government failure — it is the government achieving its intended social outcome. The other three are government failures: rent controls causing supply reduction (unintended consequence); agricultural subsidies captured by large firms (distributional failure); bank bailouts creating moral hazard (intervention generating new market failure).'
      },

      /* 9 — Data table: UK public project cost overruns */
      { type: 'data_table',
        id: 'q_gf_9',
        stem: 'The table shows UK public infrastructure project cost overruns — a measure of optimism bias.',
        headers: ['Project', 'Initial budget (£bn)', 'Final cost (£bn)', 'Overrun (%)'],
        rows: [
          ['HS2 (2012 estimate)', '32.7', '88+ (2024 est.)', '+169%'],
          ['Hinkley Point C (2016)', '18.0', '32+ (2024 est.)', '+78%'],
          ['Crossrail / Elizabeth Line', '14.8', '18.9', '+28%'],
          ['Scottish Parliament Building', '0.04', '0.41', '+925%'],
          ['London 2012 Olympics', '2.4', '8.9', '+271%']
        ],
        question: 'What do the data most strongly suggest about government decision-making?',
        opts: [
          'Systematic optimism bias in public project appraisal — initial cost estimates consistently understate final costs, suggesting government failure through information distortion in project approval decisions',
          'Public projects are always more expensive than private projects — government should never invest in infrastructure',
          'The cost overruns prove all these projects were mistakes that should have been cancelled at the planning stage',
          'Overruns only occur in UK projects — international evidence shows government project appraisal is accurate in other countries'
        ],
        ans: 0,
        exp: 'The consistent pattern of cost overruns (all projects exceeded initial budget, some dramatically) is consistent with the "optimism bias" identified by HM Treasury and behavioural economist Bent Flyvbjerg: project promoters systematically underestimate costs and overestimate benefits in initial appraisals — either through genuine cognitive bias or strategic misrepresentation to secure approval. This is a specific form of government failure in public investment. Options B and C are too strong — many overrun projects still generate positive NPV. Option D is wrong: Flyvbjerg\'s global study found overruns are universal, with an average 45% overrun in large infrastructure projects worldwide.'
      },

      /* 10 — Multi-select: evaluation of government failure argument */
      { type: 'multi_select',
        id: 'q_gf_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the government failure argument?',
        opts: [
          'Government failure occurs when intervention makes resource allocation worse than the market outcome',
          'The government failure argument does not justify abandoning intervention where market failure is severe — it justifies improving intervention design (better information, independent regulation, long-term institutions) rather than simply removing government from the market',
          'Government failure is always worse than market failure',
          'The symmetry of the market failure/government failure argument cuts both ways: just as market failure does not automatically justify intervention, government failure does not automatically justify deregulation — the relevant question is which specific intervention, designed how, in which institutional context, produces the best outcome',
          'Political myopia is a type of government failure',
          'Delegating policy to independent institutions (central bank for monetary policy, independent regulators for utilities) partially addresses political myopia and regulatory capture government failures — but creates new accountability problems, since democratically unelected bodies make consequential distributive decisions'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: directly challenges the inference from government failure to "no intervention" — argues the appropriate response is better intervention design, reaching a qualified conclusion. D: applies the symmetry of the argument — government failure is the mirror image of market failure, but neither automatically resolves the policy question; the answer depends on context and institutional design. F: evaluates independent institutions as a partial solution to government failure while identifying a new accountability trade-off — a two-sided evaluation reaching a design implication. A and E are descriptions; C is an unsupported overclaim.'
      }

    ]
  };

})();
