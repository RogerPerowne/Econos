(function () {

  window.ECONOS_QUIZ = {
    id:       'environmental_econ_main',
    topicId:  'environmental_econ_main',
    title:    'Environmental Economics',
    subtitle: 'Theme 1.16 \xb7 Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering environmental market failure, carbon taxes, cap-and-trade, sustainability, the Stern Review, and the growth versus environment debate. Mixed formats designed to test both knowledge of mechanisms and evaluative depth on real policy dilemmas.',
    shortNames: {
      'environmental_econ_1': 'Environment as resource',
      'environmental_econ_2': 'Climate market failure',
      'environmental_econ_3': 'Carbon taxes',
      'environmental_econ_4': 'Cap-and-trade',
      'environmental_econ_5': 'Sustainability',
      'environmental_econ_6': 'Growth vs environment',
      'environmental_econ_7': 'International agreements'
    },

    questions: [

      /* 1 — elastic_sort: classify environmental services */
      { type: 'elastic_sort',
        stem: 'Classify each example as an illustration of the environment acting as a <strong>resource input</strong>, a <strong>waste sink</strong>, or an <strong>amenity service</strong>.',
        categories: ['resource', 'sink', 'amenity'],
        categoryLabels: ['Resource input', 'Waste sink', 'Amenity service'],
        goods: [
          { icon: '⛳', label: 'North Sea natural gas extracted for electricity generation', note: '', ans: 'resource' },
          { icon: '🌲', label: 'Forests absorbing CO2 emissions from industry', note: '', ans: 'sink' },
          { icon: '🏖️', label: 'Tourists visiting the Lake District for recreation', note: '', ans: 'amenity' },
          { icon: '🌾', label: 'Groundwater pumped for agricultural irrigation', note: '', ans: 'resource' },
          { icon: '🌊', label: 'Rivers receiving treated sewage discharge', note: '', ans: 'sink' },
          { icon: '🐝', label: 'Bees pollinating crops in the English countryside', note: '', ans: 'amenity' }
        ],
        exp: '<strong>Resource inputs</strong> are raw materials extracted from nature for production. <strong>Waste sink capacity</strong> is the environment\'s ability to absorb pollution and by-products &mdash; a finite service treated as free by markets. <strong>Amenity services</strong> are non-extractive benefits: biodiversity, scenery, recreational value &mdash; difficult to price because they are non-rival and often non-excludable. All three categories are systematically under-priced by markets, creating environmental market failure.'
      },

      /* 2 — mcq: Stern Review */
      { type: 'mcq',
        stem: 'Sir Nicholas Stern described climate change as "the greatest market failure the world has ever seen." Which combination of features makes climate change uniquely difficult to correct through market mechanisms?',
        opts: [
          'The externality is global (cannot be internalised by one nation), affects future generations who cannot participate in current markets, and some tipping points are irreversible',
          'Climate change only affects a small number of industries, so a targeted tax on those firms would fully internalise the externality at low cost',
          'The externality is entirely local, so national governments can correct it independently through standard Pigouvian taxes without international co-ordination',
          'Carbon emissions have low marginal external cost per tonne, so the required tax is small and easily administered'
        ],
        ans: 0,
        exp: 'Climate change combines several features that make it the hardest market failure to correct. <strong>Global spillover</strong>: CO2 emitted anywhere affects the climate everywhere &mdash; no single government can fully internalise the cost. <strong>Inter-generational externality</strong>: the heaviest costs fall on future generations who have no current market voice. <strong>Irreversibility</strong>: tipping points (ice sheet collapse, permafrost feedback) cannot be undone. <strong>Scale</strong>: virtually every economic activity generates emissions. This combination explains why market failure persists even where the science is unambiguous.'
      },

      /* 3 — diagram_interp: carbon tax effect */
      { type: 'diagram_interp',
        stem: 'The UK government introduces a carbon tax of &#163;50 per tonne of CO2 on electricity generators. The initial market equilibrium for electricity is at price P1, quantity Q1. MSC lies above MPC by the amount of the marginal external cost.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="280" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="280" x2="400" y2="280" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="298" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="250" x2="370" y2="70" stroke="#2563EB" stroke-width="2.5"/><text x="373" y="72" fill="#2563EB" font-size="12" font-weight="700">D=MSB</text><line x1="80" y1="200" x2="340" y2="70" stroke="#1FB574" stroke-width="2.5"/><text x="343" y="72" fill="#1FB574" font-size="12" font-weight="700">MPC</text><line x1="80" y1="160" x2="320" y2="50" stroke="#EC2D68" stroke-width="2.5"/><text x="323" y="52" fill="#EC2D68" font-size="12" font-weight="700">MSC</text><circle cx="230" cy="133" r="5" fill="#F5B800"/><text x="215" y="125" fill="#F5B800" font-size="10" font-weight="700">Q*</text><circle cx="265" cy="150" r="5" fill="#0B1426"/><text x="268" y="148" fill="#0B1426" font-size="10" font-weight="700">Q1</text><line x1="55" y1="133" x2="230" y2="133" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><line x1="55" y1="150" x2="265" y2="150" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/></svg>',
        caption: 'MPC = private marginal cost of electricity production. MSC = MPC + marginal external cost of CO2 emissions. D = MSB (no consumption externality).',
        question: 'If the carbon tax is set correctly at the optimal Pigouvian rate, what is the expected outcome?',
        opts: [
          'The tax shifts MPC up to equal MSC; equilibrium moves from Q1 to Q*, eliminating the deadweight welfare loss from the externality',
          'The tax reduces demand by shifting the demand curve left; quantity falls but the supply curve is unchanged',
          'The tax increases quantity produced because higher revenue incentivises generators to invest in new capacity',
          'A deadweight welfare loss is created at Q* because the tax prevents mutually beneficial transactions from occurring'
        ],
        ans: 0,
        exp: 'The Pigouvian tax adds the marginal external cost to each unit, shifting <strong>MPC upward to equal MSC</strong>. Equilibrium moves from Q1 (where MPC = MSB, ignoring the externality) to Q* (where MSC = MSB), which is the socially optimal output. The DWL triangle between Q* and Q1 &mdash; representing over-production relative to the social optimum &mdash; is eliminated. Option D confuses the issue: a DWL arises from the <em>uncorrected</em> externality at Q1, not from the corrective tax at Q*.'
      },

      /* 4 — multi_select: advantages of cap-and-trade */
      { type: 'multi_select',
        stem: 'Which of the following are genuine advantages of a cap-and-trade system (such as the UK ETS) compared with a simple carbon tax?',
        opts: [
          'Provides certainty over the total quantity of emissions &mdash; the cap guarantees the environmental target is met',
          'Emission reductions occur where they are cheapest across all covered firms &mdash; the market allocates abatement efficiently',
          'Automatically adjusts to changes in the cost of abatement &mdash; the permit price rises or falls with abatement costs',
          'Does not require firms to face any cost for their emissions &mdash; permits are always free',
          'Generates no government revenue, making it politically superior to a carbon tax in all circumstances',
          'Achieves zero emissions immediately in the year the cap is introduced'
        ],
        correct: [0, 1, 2],
        exp: 'Options A, B, and C are genuine advantages. <strong>Quantity certainty</strong>: unlike a tax (which provides price certainty but uncertain quantity outcome), a cap sets a hard limit on total emissions. <strong>Cost efficiency</strong>: trading ensures abatement happens where the marginal abatement cost is lowest &mdash; firms with cheap abatement reduce more and sell permits; firms with expensive abatement buy permits. <strong>Automatic adjustment</strong>: if abatement becomes cheaper (new technology), permit price falls; if costlier, price rises &mdash; the market responds without government repricing. Options D&ndash;F are false: permits can be auctioned (raising revenue); the cap is tightened gradually over time, not to zero immediately.'
      },

      /* 5 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these are features of <strong>strong sustainability</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🌳', label: 'Some natural capital (biodiversity, stable climate) cannot be substituted by man-made capital', note: '' },
          { icon: '📊', label: 'It is acceptable to deplete natural resources provided the proceeds are fully reinvested in equivalent man-made capital', note: '' },
          { icon: '⚠️', label: 'Breaching ecological tipping points is an irreversible loss that no amount of financial compensation can rectify', note: '' },
          { icon: '🌍', label: 'The total stock of natural capital must be preserved for future generations regardless of man-made capital investments', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B &mdash; this describes <strong>weak sustainability</strong>, not strong sustainability. Weak sustainability holds that natural and man-made capital are substitutable: you can deplete an oil field provided you invest the proceeds in renewable energy infrastructure or other capital. <strong>Strong sustainability</strong> insists that natural capital must be preserved in physical form because some ecosystem services (climatic stability, biodiversity, soil fertility) cannot be replicated by man-made alternatives. Options A, C, and D all reflect the strong sustainability position.'
      },

      /* 6 — para_fill: Environmental Kuznets Curve */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about the Environmental Kuznets Curve by selecting the correct word or phrase for each numbered blank.',
        anchor: 'The Environmental Kuznets Curve describes an inverted-U relationship between income and environmental degradation.',
        para: 'As a country first industrialises, environmental [1] tends to rise as production expands and environmental regulation is weak. However, above a certain income [2], environmental quality begins to improve: richer societies demand cleaner environments, can afford environmental [3], and shift from manufacturing toward [4]-intensive service sectors. Evidence: UK carbon emissions fell [5]% between 2000 and 2020 while GDP grew. However, critics argue the EKC reflects pollution [6] rather than true reduction &mdash; heavy manufacturing is outsourced to [7] countries.',
        blanks: [
          { id: 1, opts: ['degradation', 'improvement', 'taxation', 'efficiency'], ans: 0 },
          { id: 2, opts: ['threshold', 'ceiling', 'floor', 'target'], ans: 0 },
          { id: 3, opts: ['regulation', 'deregulation', 'subsidies', 'borrowing'], ans: 0 },
          { id: 4, opts: ['knowledge', 'capital', 'energy', 'labour'], ans: 0 },
          { id: 5, opts: ['44', '10', '5', '80'], ans: 0 },
          { id: 6, opts: ['displacement', 'reduction', 'measurement', 'pricing'], ans: 0 },
          { id: 7, opts: ['developing', 'neighbouring', 'oil-exporting', 'landlocked'], ans: 0 }
        ],
        exp: '(1) <strong>Degradation</strong>: early industrialisation prioritises output over environment. (2) <strong>Threshold</strong>: an income level above which environmental preferences strengthen. (3) <strong>Regulation</strong>: richer governments can fund and enforce environmental law. (4) <strong>Knowledge</strong>: services and technology are less energy/material-intensive than manufacturing. (5) <strong>44%</strong>: UK CO2 fell ~44% 2000&ndash;2020 &mdash; a key exam statistic. (6) <strong>Displacement</strong>: pollution shifts to developing countries as manufacturing is offshored. (7) <strong>Developing</strong>: the "pollution haven" hypothesis &mdash; lower environmental standards attract dirty industries.'
      },

      /* 7 — multi_select: evaluating environmental economics */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>environmental economics and the effectiveness of policy instruments for correcting carbon emissions</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'A Pigouvian carbon tax corrects the negative externality by shifting MPC up to MSC, reducing output to the social optimum Q*',
          'Carbon taxes are theoretically superior to uniform regulation because they achieve a given emissions reduction at lower total cost — firms with cheap abatement reduce more while those with expensive abatement pay the tax — but this efficiency advantage only holds if the tax rate is set equal to the social cost of carbon, which is deeply uncertain (the UK government\'s central estimate ranges from £51 to £185 per tonne)',
          'The relative effectiveness of a carbon tax versus cap-and-trade depends on whether policymakers face greater uncertainty about the social cost of carbon (favouring a cap, which provides quantity certainty) or about the marginal abatement cost curve (favouring a tax, which avoids large abatement cost shocks if the cap is set incorrectly)',
          'Cap-and-trade systems cap total emissions by issuing a fixed number of permits',
          'Carbon taxes are regressive because lower-income households spend a higher share of income on energy and transport, but this distributional problem can be addressed by recycling revenue as lump-sum transfers — which means regressivity is a design choice, not an inherent feature of carbon pricing',
          'Carbon leakage means that domestic emissions reductions may simply shift production to countries without carbon pricing, partially offsetting global benefits'
        ],
        correct: [1, 2, 4],
        exp: '<strong>Options B, C, and E are genuine evaluation moves.</strong> Option B qualifies the efficiency advantage of carbon taxes: it is real but conditional on the tax being set at the social cost of carbon, which is empirically uncertain — this is evaluation by identifying the precise condition on which the conclusion depends, with specific evidence (UK estimate range). Option C reaches a conditional verdict about which instrument is preferable, depending on what type of uncertainty dominates — this is the Weitzman (1974) insight applied to the specific case, showing that the "better" instrument depends on the structure of uncertainty. Option E identifies a distributional problem but then evaluates whether it is inherent or solvable: regressivity is a design choice, not a fundamental objection — this is evaluation by testing the robustness of a counterargument. <strong>Option A</strong> is pure mechanism description — it tells you what the tax does, not how good it is. <strong>Option D</strong> defines how cap-and-trade works — description. <strong>Option F</strong> states the carbon leakage concern without any analysis of its magnitude, conditions, or policy solutions — it is incomplete as an evaluative point.'
      },

      /* 8 — calculation: social cost of carbon */
      { type: 'calculation',
        context: 'A UK power station emits <strong>2 million tonnes of CO2 per year</strong>. The government introduces a carbon tax of <strong>&#163;50 per tonne</strong>. The power station\'s abatement cost curve shows that it costs <strong>&#163;30 per tonne</strong> to reduce emissions by installing carbon capture technology on <strong>500,000 tonnes</strong> of annual emissions.',
        working: [
          'Step 1: cost of paying the full carbon tax (no abatement)',
          '2,000,000 tonnes \xd7 &#163;50/tonne = &#163;100,000,000',
          'Step 2: cost if abating 500,000 tonnes and paying tax on the rest',
          'Abatement cost: 500,000 \xd7 &#163;30 = &#163;15,000,000',
          'Tax on remaining: 1,500,000 \xd7 &#163;50 = &#163;75,000,000',
          'Total with partial abatement: &#163;15m + &#163;75m = &#163;90,000,000',
          'Step 3: saving from partial abatement vs no abatement',
          '&#163;100m − &#163;90m = &#163;10,000,000 saving',
          'Step 4: should the firm abate? MAC (&#163;30) < tax (&#163;50) → yes, abate up to point where MAC = tax'
        ],
        stem: 'Given the carbon tax of &#163;50/tonne, what is the profit-maximising response for the power station, and what is the total cost saving from abating 500,000 tonnes versus paying full tax?',
        opts: [
          { ped: 'Abate 500,000 tonnes; saving = &#163;10 million', typ: 'Since MAC (&#163;30) < tax (&#163;50), it is cheaper to abate than to pay the tax on those units. Total cost with abatement &#163;90m vs without &#163;100m &mdash; saving &#163;10m.', rev: 'The firm should abate wherever MAC &lt; tax rate' },
          { ped: 'Do not abate; pay the full &#163;100 million tax', typ: 'Ignores that abatement is cheaper than paying the tax on 500,000 tonnes', rev: 'Compare MAC with tax rate: abate when MAC &lt; tax' },
          { ped: 'Abate all 2 million tonnes; total cost = &#163;60 million', typ: 'Assumes all emissions can be abated at &#163;30/tonne &mdash; but only 500,000 tonnes of abatement capacity exists at that cost', rev: 'Abatement cost applies only to the stated 500,000 tonnes' },
          { ped: 'Abate 500,000 tonnes; saving = &#163;25 million', typ: 'Calculates saving as 500,000 \xd7 (&#163;50 − &#163;30) = &#163;10m but also subtracts abatement cost incorrectly', rev: 'Saving = &#163;100m &minus; &#163;90m = &#163;10m' }
        ],
        ans: 0,
        exp: 'The carbon tax creates an incentive to abate whenever the <strong>marginal abatement cost (MAC) &lt; tax rate</strong>. Here MAC = &#163;30 &lt; &#163;50 = tax, so the firm reduces 500,000 tonnes using carbon capture. Cost with abatement: &#163;15m (abatement) + &#163;75m (tax on remaining 1.5m tonnes) = &#163;90m. Without abatement: &#163;100m. Saving: <strong>&#163;10 million</strong>. This illustrates the efficiency of carbon pricing: firms reduce emissions up to the point where MAC = tax, achieving abatement at lowest cost. This is why cap-and-trade achieves the same environmental outcome more cheaply than uniform regulation &mdash; trading equalises MAC across firms.'
      },

      /* 9 — data_table: Paris Agreement NDCs */
      { type: 'data_table',
        stem: 'The table shows selected country CO2 emissions and climate pledges data.',
        headers: ['Country', 'CO2 emissions (2022, GtCO2)', 'NDC pledge', 'Track record vs pledge'],
        rows: [
          ['China', '12.0', 'Peak by 2030, net zero by 2060', 'Emissions still rising'],
          ['USA', '4.8', '50-52% cut by 2030 vs 2005', 'Progress delayed by politics'],
          ['EU', '2.5', '55% cut by 2030 vs 1990', 'On track; ETS driving decarbonisation'],
          ['India', '2.7', 'Net zero by 2070', 'Significant coal dependence continues'],
          ['UK', '0.3', 'Net zero by 2050 (legally binding)', 'Progress made; offshore wind growth']
        ],
        question: 'Which interpretation is best supported by the data?',
        opts: [
          'The Paris Agreement faces a collective action problem: the largest emitters have the least ambitious near-term pledges, and voluntary NDCs without enforcement create strong free-rider incentives',
          'The data shows the Paris Agreement is working effectively because all major economies have made net-zero pledges and are on track to meet their targets',
          'The EU\'s binding ETS demonstrates that market mechanisms are entirely sufficient without any international co-ordination framework',
          'UK emissions are so small (0.3 GtCO2) that UK climate policy has no meaningful impact on global warming and resources would be better spent on adaptation'
        ],
        ans: 0,
        exp: 'The data supports option A. China (12.0 Gt, 37% of global emissions) has a 2030 peak target while emissions are still rising. The USA faces political uncertainty over its 2030 targets. NDCs are nationally determined &mdash; voluntary and without binding enforcement mechanisms. This creates a classic <strong>free-rider problem</strong>: countries benefit from others\' abatement (shared atmosphere) without matching cuts. Option B ignores the track-record column. Option C ignores the co-ordination problem. Option D commits the composition fallacy &mdash; global climate is a global commons; the UK\'s domestic credibility also influences international negotiations.'
      },

      /* 10 — chain: externality correction sequence */
      { type: 'chain',
        stem: 'A government introduces a carbon tax set at the social cost of carbon. Place the following events in the correct logical order from the initial policy to the long-run outcome.',
        items: [
          { label: 'Carbon tax shifts MPC up; market equilibrium moves from Q1 to Q* (socially optimal output)', note: '' },
          { label: 'Carbon tax of &#163;X per tonne CO2 is announced and implemented', note: '' },
          { label: 'Government recognises that CO2 emissions impose negative externalities &mdash; market price does not reflect social cost', note: '' },
          { label: 'Firms invest in low-carbon technology to reduce their tax liability; MAC falls over time', note: '' },
          { label: 'Tax revenue is used to fund household energy subsidies, addressing the regressive impact on low-income consumers', note: '' },
          { label: 'Long-run: lower MAC means firms can achieve greater emission reductions at the same tax rate &mdash; dynamic efficiency', note: '' }
        ],
        correctOrder: [2, 1, 0, 3, 4, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Government identifies the negative externality (market failure diagnosis).<br>2. Carbon tax introduced at the social cost of carbon.<br>3. Tax shifts MPC up to MSC &mdash; equilibrium moves to socially optimal Q*.<br>4. Firms invest in low-carbon technology to reduce tax liability.<br>5. Revenue recycled as household support (regressivity mitigation).<br>6. Dynamic efficiency: as technology improves, MAC falls, further reducing emissions at the same tax.<br><br>This sequence demonstrates both the <em>static efficiency</em> of Pigouvian taxes (correcting allocative inefficiency) and their <em>dynamic efficiency</em> (ongoing innovation incentive). Strong answers make both dimensions explicit.'
      }

    ]
  };

})();
