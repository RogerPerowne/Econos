(function () {

  window.ECONOS_QUIZ = {
    id:       'neg_externalities_main',
    topicId:  'neg_externalities_main',
    title:    'Negative Externalities',
    subtitle: 'Theme 1 &middot; Topic 3.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the MSC/MPC diagram, deadweight welfare loss, Coase theorem, Pigouvian taxes, cap-and-trade, regulation, and the carbon emissions case study. Mixed formats &#8212; diagram interpretation, calculation, sorting, evaluation multi-select, paragraph fill &#8212; aimed at the analysis and evaluation marks.',
    shortNames: {
      'neg_externalities_1': 'What is a negative externality?',
      'neg_externalities_2': 'The MSC/MPC diagram',
      'neg_externalities_3': 'Types of externalities',
      'neg_externalities_4': 'Coase theorem',
      'neg_externalities_5': 'Policy responses',
      'neg_externalities_6': 'Carbon case study',
      'neg_externalities_7': 'Taxes vs regulation'
    },

    questions: [

      /* 1 — MCQ: MSC framework */
      { type: 'mcq',
        stem: 'A steel plant emits pollutants that damage local rivers and raise healthcare costs for nearby residents. The plant produces 10,000 tonnes per year. Which statement correctly applies the MSC framework?',
        opts: [
          'The market overproduces steel: MPC is below MSC because the external cost (river damage + healthcare costs) is not borne by the firm, so the free market output exceeds the socially optimal output',
          'The market underproduces steel: MSC is below MPC because society values clean steel production, creating positive externalities for downstream manufacturers',
          'The market achieves the socially optimal output because the firm internalises all costs through its pricing decisions',
          'The externality is a positive production externality because the plant provides local employment benefits not captured in its private costs'
        ],
        ans: 0,
        exp: 'A negative production externality exists when <strong>MSC &gt; MPC</strong>. Here, the steel plant bears MPC (labour, energy, capital) but the external costs &#8212; river pollution harming fishermen, health costs for local residents &#8212; are borne by third parties, not the firm. MSC = MPC + MEC (marginal external cost). Since the firm produces where MPC = demand, it ignores the additional social cost and <em>overproduces</em> relative to the socially optimal output (where MSC = demand). The welfare loss is the triangle between market output and optimal output. The firm has no private incentive to reduce output unless a Pigouvian tax or regulation forces it to internalise the MEC.'
      },

      /* 2 — diagram_interp: negative production externality */
      { type: 'diagram_interp',
        stem: 'The diagram shows a market with a negative production externality.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="290" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="290" x2="400" y2="290" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="308" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="60" x2="380" y2="270" stroke="#2563EB" stroke-width="2.5"/><text x="383" y="270" fill="#2563EB" font-size="12" font-weight="700">MSB=D</text><line x1="80" y1="140" x2="360" y2="270" stroke="#1FB574" stroke-width="2.5"/><text x="363" y="270" fill="#1FB574" font-size="12" font-weight="700">MPC</text><line x1="80" y1="80" x2="360" y2="210" stroke="#EC2D68" stroke-width="2.5"/><text x="363" y="210" fill="#EC2D68" font-size="12" font-weight="700">MSC</text><circle cx="222" cy="196" r="5" fill="#F5B800"/><circle cx="262" cy="228" r="5" fill="#1FB574"/><line x1="55" y1="196" x2="222" y2="196" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><line x1="55" y1="228" x2="262" y2="228" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><line x1="222" y1="196" x2="222" y2="290" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><line x1="262" y1="228" x2="262" y2="290" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><text x="225" y="185" fill="#F5B800" font-size="11" font-weight="700">Opt</text><text x="265" y="240" fill="#1FB574" font-size="11" font-weight="700">Mkt</text></svg>',
        caption: 'MSB = demand (blue), MPC = supply (green), MSC = social cost (red). Opt = socially optimal equilibrium; Mkt = market equilibrium.',
        question: 'Which statement correctly identifies the deadweight welfare loss (DWL)?',
        opts: [
          'The DWL is the triangle between Q-optimal and Q-market, bounded above by MSC and below by MSB &#8212; representing net welfare lost from overproduction',
          'The DWL is the entire area below the MSC curve &#8212; representing the total social cost of production in this market',
          'The DWL is zero because the market is operating at the intersection of MPC and demand, which is the definition of allocative efficiency',
          'The DWL is the rectangle between Q-optimal and Q-market &#8212; equal to the difference in prices multiplied by the output gap'
        ],
        ans: 0,
        exp: 'The deadweight welfare loss (DWL) from overproduction is the <strong>triangle</strong> between Q-optimal and Q-market. At every unit between Q-optimal and Q-market, the marginal social cost (MSC) <em>exceeds</em> the marginal social benefit (MSB) &#8212; meaning society would be better off if those units were not produced. The DWL area represents the net loss in social welfare from producing those units. It is bounded above by MSC and below by MSB (demand), forming a triangle (assuming constant marginal external cost). A rectangle would be incorrect &#8212; the gap between MSC and MSB narrows as we move from Q-market back toward Q-optimal. Examinees must shade the correct triangle and label its vertices to score full diagram marks.'
      },

      /* 3 — elastic_sort: production vs consumption externalities */
      { type: 'elastic_sort',
        stem: 'Classify each as a <strong>negative production externality</strong> or <strong>negative consumption externality</strong>.',
        categories: ['production', 'consumption'],
        categoryLabels: ['Negative production externality', 'Negative consumption externality'],
        goods: [
          { icon: '&#127981;', label: 'Chemical factory discharges effluent into a river during the manufacturing process', note: '', ans: 'production' },
          { icon: '&#128661;', label: 'Traffic congestion caused by commuters driving to work', note: '', ans: 'consumption' },
          { icon: '&#128684;', label: 'Passive smoking from cigarettes consumed in a shared space', note: '', ans: 'consumption' },
          { icon: '&#9981;', label: 'Carbon dioxide emissions from a coal-fired power station generating electricity', note: '', ans: 'production' },
          { icon: '&#127758;', label: 'Noise pollution from an aircraft engine test facility at an airport', note: '', ans: 'production' },
          { icon: '&#127867;', label: 'Anti-social behaviour and noise from alcohol consumption in town centres', note: '', ans: 'consumption' }
        ],
        exp: '<strong>Negative production externalities</strong> arise from the process of making goods &#8212; the external cost is generated during production: factory effluent, power station emissions, aircraft noise at source. In the diagram, MSC lies <em>above</em> MPC. <strong>Negative consumption externalities</strong> arise from the act of using or consuming goods &#8212; the external cost falls on third parties due to consumption: traffic congestion, passive smoking, alcohol-fuelled disorder. For consumption externalities, the demand curve represents MPB, and the analysis involves MPB &gt; MSB (not directly applicable for negative consumption &#8212; but the principle is that social benefit of the marginal unit is <em>less</em> than the private benefit, or equivalently, social cost of marginal unit to third parties must be included). The diagram adjustment differs between the two &#8212; a key exam distinction.'
      },

      /* 4 — calculation: Pigouvian tax */
      { type: 'calculation',
        context: 'An oil refinery produces 500,000 barrels per day. The marginal private cost is <strong>&#163;45 per barrel</strong>. The marginal external cost (air pollution, health impacts) is estimated at <strong>&#163;12 per barrel</strong>.',
        working: [
          'MSC = MPC + MEC',
          '= &#163;45 + &#163;12 = &#163;57 per barrel',
          'Pigouvian tax to internalise externality = MEC at socially optimal output',
          '= &#163;12 per barrel',
          'After tax, effective MPC to firm = &#163;45 + &#163;12 = &#163;57 = MSC',
          'Firm now produces where MSC = demand &#8658; socially optimal output achieved'
        ],
        stem: 'What is the correct Pigouvian tax per barrel, and why does it achieve the socially optimal output?',
        opts: [
          { ped: '&#163;12 per barrel; the tax raises MPC to equal MSC, so the firm now faces the full social cost and chooses the socially optimal output', typ: 'Correct: tax = MEC shifts MPC up to MSC &#8658; market produces at Q-optimal where MSC = demand', rev: 'Pigouvian tax = MEC at the socially optimal output level' },
          { ped: '&#163;45 per barrel; the tax equals MPC to ensure firms bear all costs including private costs', typ: 'Confused MPC with MEC &#8212; the tax only needs to cover the external cost not already in the price', rev: 'Firms already bear MPC &#8212; tax only needs to add the external cost (MEC)' },
          { ped: '&#163;57 per barrel; the tax equals the full social cost to ensure all production is taxed at the MSC', typ: 'Would make MPC = 2&#215;MSC &#8212; over-corrects and reduces output below the socially optimal level', rev: 'Tax must equal MEC, not MSC &#8212; the firm already bears MPC' },
          { ped: 'No tax is needed; the refinery can negotiate directly with affected parties under the Coase theorem', typ: 'Coase theorem requires low transaction costs and clear property rights &#8212; large-scale air pollution rarely meets these conditions', rev: '500,000 barrels/day affecting many parties &#8212; transaction costs rule out private bargaining' }
        ],
        ans: 0,
        exp: 'The Pigouvian tax equals the <strong>marginal external cost (MEC) at the socially optimal output</strong>: &#163;12 per barrel. By adding &#163;12 to the firm\'s private cost (&#163;45), the after-tax MPC = &#163;57 = MSC. The firm, now facing the full social cost, reduces output to where MSC = demand &#8212; the socially optimal quantity. The tax "internalises" the externality &#8212; the firm now faces all the costs its production imposes on society. In practice, measuring MEC precisely is the main challenge: the social cost of carbon, for example, is estimated at $51&#8211;$185 per tonne (IPCC), reflecting genuine scientific and economic uncertainty. If the tax is set too low (MEC underestimated), output remains above optimal; if too high, output falls below optimal.'
      },

      /* 5 — multi_select: limitations of Pigouvian taxes */
      { type: 'multi_select',
        stem: 'Which of the following are genuine <strong>limitations of Pigouvian taxation</strong> as a policy to correct negative externalities?',
        opts: [
          'Measuring the MEC accurately is difficult &#8212; the social cost of carbon, for example, has a wide range of estimates',
          'A Pigouvian tax may be regressive &#8212; energy taxes consume a higher proportion of low-income households\' budgets',
          'A Pigouvian tax generates government revenue, which could be used for green investment &#8212; meaning it is not a pure cost',
          'The incentive function is preserved &#8212; firms can choose how to reduce pollution most cheaply, which is less efficient than uniform regulation',
          'Tax evasion is possible &#8212; firms may under-report emissions or shift production to countries without carbon taxes (carbon leakage)',
          'Demand for many polluting goods is price-inelastic &#8212; a tax raises prices significantly without achieving the desired output reduction'
        ],
        correct: [0, 1, 4, 5],
        exp: 'Genuine limitations: (A) <strong>Measurement difficulty</strong>: MEC must be estimated precisely for the tax to be set optimally &#8212; real-world uncertainty about climate damages, discount rates, etc. (B) <strong>Regressive effects</strong>: fuel and energy taxes take a higher share of lower incomes &#8212; a distributional objection. (D) <strong>Carbon leakage</strong>: if only some countries impose carbon taxes, production shifts to non-taxed jurisdictions &#8212; global emissions may not fall. (F) <strong>Inelastic demand</strong>: if demand is highly price-inelastic (cigarettes, fuel), a tax raises revenue but achieves limited reduction in the externality &#8212; the price rise is large but behavioural change is small. Option C is actually an <em>advantage</em> of taxation (revenue can be recycled), not a limitation. Option E &#8212; the "incentive function preserved" point &#8212; is also an advantage of taxation over regulation (firms choose the cheapest abatement method), not a limitation.'
      },

      /* 6 — para_fill: Coase theorem */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the Coase theorem and its limitations.',
        anchor: 'Coase argued that government intervention is not always necessary to correct externalities.',
        para: 'Ronald Coase argued that if [1] rights are well-defined and [2] costs are zero, private parties can bargain to an efficient outcome regardless of who holds the initial right. In this case, the polluter and the [3] will negotiate until the marginal benefit of pollution equals the marginal [4] cost &#8212; achieving the socially optimal outcome. However, this solution fails when there are many [5] parties (making negotiation impractical) or when transaction costs are [6]. In practice, most environmental externalities involve large numbers of affected parties, making [7] intervention necessary.',
        blanks: [
          { id: 1, opts: ['property', 'intellectual', 'residual', 'legal'], ans: 0 },
          { id: 2, opts: ['transaction', 'production', 'marginal', 'opportunity'], ans: 0 },
          { id: 3, opts: ['victim', 'consumer', 'producer', 'government'], ans: 0 },
          { id: 4, opts: ['external', 'private', 'social', 'marginal'], ans: 0 },
          { id: 5, opts: ['affected', 'productive', 'taxable', 'efficient'], ans: 0 },
          { id: 6, opts: ['high', 'low', 'zero', 'marginal'], ans: 0 },
          { id: 7, opts: ['government', 'private', 'market', 'corporate'], ans: 0 }
        ],
        exp: '(1) <strong>Property</strong> rights: Coase\'s theorem rests on the assumption that rights over resources (air, water, land) can be clearly assigned. (2) <strong>Transaction</strong> costs: costs of identifying, negotiating with, and contracting with all affected parties must be negligible for Coasian bargaining to work. (3) <strong>Victim</strong>: the party suffering the external cost bargains with the polluter. (4) <strong>External</strong> cost: negotiation continues until MEB of pollution = MEC &#8212; socially efficient amount of pollution. (5) <strong>Affected</strong> parties: climate change involves billions of affected parties &#8212; Coasian bargaining is impossible at this scale. (6) <strong>High</strong>: real-world transaction costs (legal fees, information costs) make private solutions unworkable for large-scale externalities. (7) <strong>Government</strong>: when Coase\'s conditions fail, only government action can correct the externality.'
      },

      /* 7 — odd_one_out: cap-and-trade advantages */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>advantages of cap-and-trade (emissions trading)</strong> over a simple Pigouvian tax. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127919;', label: 'Provides certainty about the total quantity of emissions &#8212; the cap guarantees an environmental outcome', note: '' },
          { icon: '&#128200;', label: 'Permits can be traded, so emissions are reduced where it is cheapest to do so &#8212; cost-effective abatement', note: '' },
          { icon: '&#128181;', label: 'Generates guaranteed government revenue equal to the tax rate times quantity of pollution', note: '' },
          { icon: '&#9881;', label: 'Firms have an ongoing incentive to innovate to reduce emissions below their permit allocation', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the claim that cap-and-trade <strong>generates guaranteed government revenue equal to tax &#215; quantity</strong>. This describes a Pigouvian <em>tax</em>, not cap-and-trade. Under cap-and-trade, government revenue from permit auctions is variable and depends on permit prices &#8212; it is not a fixed tax rate times a set quantity. Moreover, permits are sometimes given free to incumbent firms (grandfathering), generating no revenue at all. The genuine advantages of cap-and-trade over a tax are: (A) environmental certainty (the cap guarantees total emissions); (B) cost-effectiveness through permit trading (firms that can reduce cheaply do so; others buy permits); (D) dynamic innovation incentive (reducing emissions below the cap has value in a trading market). A Pigouvian tax, by contrast, gives price certainty but not quantity certainty.'
      },

      /* 8 — data_table: carbon pricing effectiveness */
      { type: 'data_table',
        stem: 'The table shows UK carbon pricing and emissions data.',
        headers: ['Year', 'UK ETS permit price (&#163;/tonne CO&#178;)', 'UK greenhouse gas emissions (MtCO&#178;e)', 'UK renewable energy share (%)'],
        rows: [
          ['2015', '6', '496', '25%'],
          ['2018', '12', '457', '33%'],
          ['2021', '50', '424', '40%'],
          ['2022', '68', '409', '42%'],
          ['2023', '45', '391', '48%']
        ],
        question: 'What do the data suggest about the effectiveness of carbon pricing in the UK?',
        opts: [
          'Rising carbon prices appear associated with falling emissions and rising renewable energy share &#8212; though attribution is difficult as multiple policies operate simultaneously',
          'The data conclusively prove that carbon pricing alone has reduced UK emissions &#8212; no other policies are needed',
          'The fall in carbon price in 2023 (from &#163;68 to &#163;45) shows carbon markets have failed &#8212; prices must continuously rise for the policy to be effective',
          'The data show that carbon pricing has increased emissions because firms pass costs to consumers who then reduce purchasing'
        ],
        ans: 0,
        exp: 'The data show a plausible positive association between higher carbon prices and falling emissions/rising renewables, consistent with carbon pricing theory. However, <strong>attribution is cautious</strong>: the 2021&#8211;23 period also saw post-COVID recovery, the Russia&#8211;Ukraine energy crisis accelerating renewable deployment, improved energy efficiency standards, and phase-out of coal power. Option B overstates the evidence &#8212; correlation is not causation, and multiple policies (offshore wind subsidies, efficiency standards) contributed to decarbonisation alongside the ETS. Option C misunderstands price volatility &#8212; the 2023 fall reflects permit supply/demand dynamics, and a price above zero still provides an incentive to reduce emissions. The key evaluation point: carbon pricing provides the right <em>direction</em> of incentive but its effectiveness depends on the price being above the marginal abatement cost for the relevant technologies.'
      },

      /* 9 — multi_select: evaluation of negative externality policy */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>negative externalities and government policy</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'A Pigouvian tax raises MPC to MSC, shifting the supply curve leftward to the socially optimal output and eliminating the deadweight welfare loss',
          'A carbon tax is most effective at reducing emissions when demand for the polluting good is price-elastic; when demand is inelastic &#8212; as with road fuel &#8212; the tax raises revenue but achieves only modest quantity reductions, so the policy instrument may need to be complemented by regulation or technology mandates',
          'Cap-and-trade provides quantity certainty (the cap guarantees total emissions) while a Pigouvian tax provides price certainty; the choice between them depends on whether the regulator is more confident about the socially optimal quantity or the correct price of carbon',
          'Pigouvian taxes can be used to correct negative externalities by internalising the external cost into the firm\'s private cost calculation',
          'The Coase theorem fails when transaction costs are high or affected parties are numerous, which describes most large-scale environmental externalities &#8212; making government intervention necessary rather than optional in such cases',
          'Negative production externalities arise when MSC exceeds MPC, causing the free market to overproduce relative to the socially optimal output'
        ],
        correct: [1, 2, 4],
        exp: '<strong>Options B, C, and E are evaluation.</strong> (B) qualifies the effectiveness of a carbon tax by specifying the condition (demand elasticity) that determines whether the quantity reduction is large or small, reaching the conclusion that inelastic demand may require complementary instruments &#8212; a genuine evaluative move that identifies when the policy fails and what should replace it. (C) compares the two instruments on a specific analytical criterion (quantity certainty vs price certainty) and reaches the evaluative conclusion that the choice depends on what the regulator is more confident about &#8212; this directly weighs the trade-off rather than asserting one is always superior. (E) applies the Coase theorem correctly by identifying the conditions for its failure (high transaction costs, many parties), reaching the directional conclusion that government intervention is necessary rather than a matter of choice for large-scale externalities. <strong>Options A, D, and F are not evaluation.</strong> (A) is accurate description of the Pigouvian tax mechanism &#8212; it describes the diagram correctly but makes no evaluative qualification and ignores any limitation. (D) is a generic description of what Pigouvian taxes do, with no weighing of conditions, limitations, or alternative instruments. (F) is textbook description of the negative production externality diagram (MSC &gt; MPC) with no evaluative content whatsoever.'
      },

      /* 10 — chain: Pigouvian tax transmission */
      { type: 'chain',
        stem: 'The UK government introduces a Pigouvian carbon tax on industrial emissions. Place the transmission sequence in the correct logical order.',
        items: [
          { label: 'Firms reduce production toward the socially optimal output level &#8212; overproduction eliminated', note: '' },
          { label: 'Industrial firms face higher production costs &#8212; supply curve shifts left', note: '' },
          { label: 'Government introduces carbon tax equal to estimated MEC (&#163;50/tonne CO&#178;)', note: '' },
          { label: 'Deadweight welfare loss from overproduction is reduced or eliminated', note: '' },
          { label: 'Firms innovate to reduce emissions &#8212; seeking to lower tax liability through cleaner technology', note: '' },
          { label: 'Tax revenue collected &#8212; government channels funds toward renewable energy subsidies', note: '' }
        ],
        correctOrder: [2, 1, 0, 3, 4, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Tax introduced at &#163;50/tonne CO&#178;.<br>2. Firms\' effective MPC rises → supply curve shifts left.<br>3. Output falls toward Q-optimal &#8212; MSC now equals demand at equilibrium.<br>4. DWL triangle is closed &#8212; overproduction corrected.<br>5. Dynamic: firms innovate to reduce emissions and cut tax liability &#8212; the incentive function drives clean technology investment.<br>6. Revenue recycled into renewable subsidies &#8212; "double dividend" (environmental improvement + clean energy).<br><br>The chain illustrates both the <em>static</em> correction (MSC = demand at new equilibrium) and the <em>dynamic</em> benefit (innovation incentive that taxes provide beyond simple regulation). This dynamic innovation incentive is why economists often prefer taxes to regulation &#8212; firms continually seek to innovate beyond the minimum requirement.'
      }

    ]
  };

})();
