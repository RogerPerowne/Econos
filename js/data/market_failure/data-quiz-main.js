(function () {

  window.ECONOS_QUIZ = {
    id:       'market_failure_main',
    topicId:  'market_failure_main',
    title:    'Market Failure',
    subtitle: 'Theme 1 &middot; Topic 3.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the definition of market failure and its link to allocative efficiency, the private-vs-social framework, the three routes to failure (externalities, public goods, information gaps), deadweight welfare loss, and real-world diagnosis. Mixed formats including diagnostic pair, sort, chain, paragraph fill, calculation, and data analysis.',
    shortNames: {
      'market_failure_1': 'What market failure is',
      'market_failure_2': 'Private vs social',
      'market_failure_3': 'Three routes',
      'market_failure_4': 'Welfare loss',
      'market_failure_5': 'Diagnosing failure'
    },

    questions: [

      /* 1 — mcq: definition of market failure */
      { type: 'mcq',
        stem: 'Which definition of <strong>market failure</strong> is most analytically precise?',
        opts: [
          'Market failure occurs when the free market produces a quantity that diverges from the social optimum &mdash; because private costs or benefits differ from social costs or benefits &mdash; resulting in misallocation of resources and a deadweight welfare loss',
          'Market failure occurs when a market collapses completely and no transactions take place between buyers and sellers',
          'Market failure refers only to cases where businesses exploit monopoly power to charge prices above marginal cost',
          'Market failure occurs whenever the government decides that a market outcome is unfair or distributes income unequally'
        ],
        ans: 0,
        exp: 'The economically precise definition is option A: market failure is a <strong>divergence between the private equilibrium and the social optimum</strong>. The market still functions &mdash; it is not absent or collapsed. The failure is that the price mechanism responds to private costs and benefits, missing spillover effects on third parties, public-good characteristics, or information gaps. Option B confuses market failure with market absence. Option C identifies only one cause (monopoly) and misses externalities, public goods, and information failures. Option D conflates allocative inefficiency with distributional concerns &mdash; inequality is a separate issue from whether Q* is being produced.'
      },

      /* 2 — elastic_sort: over- vs under-production */
      { type: 'elastic_sort',
        stem: 'Classify each example as a case of <strong>over-production</strong> (market produces too much) or <strong>under-production</strong> (market produces too little) relative to the social optimum.',
        categories: ['over', 'under'],
        categoryLabels: ['Over-production (too much)', 'Under-production (too little)'],
        goods: [
          { icon: '🏭', label: 'A steel factory emits carbon dioxide that imposes health costs on surrounding communities', note: '', ans: 'over' },
          { icon: '💉', label: 'The market provides fewer vaccinations than the socially optimal level because individuals ignore the herd-immunity benefit', note: '', ans: 'under' },
          { icon: '🚗', label: 'Congestion pricing is absent &mdash; drivers do not pay for the time delays they impose on other road users', note: '', ans: 'over' },
          { icon: '📚', label: 'University education raises social productivity and innovation beyond the benefits the graduate captures', note: '', ans: 'under' },
          { icon: '🌊', label: 'Deep-sea fishing fleets harvest at levels that deplete fish stocks, reducing future catches for all', note: '', ans: 'over' },
          { icon: '💡', label: 'Street lighting is under-provided because the free-rider problem means no private firm can profitably supply it', note: '', ans: 'under' }
        ],
        exp: '<strong>Over-production</strong> occurs when MSC &gt; MSB at the market quantity &mdash; typically driven by negative externalities (pollution, congestion, overfishing) where private agents ignore costs they impose on others. The market\'s private equilibrium lies to the <em>right</em> of Q*. <strong>Under-production</strong> occurs when MSB &gt; MSC at the market quantity &mdash; driven by positive externalities (vaccination, education), public goods (street lighting), or information gaps. The market\'s private equilibrium lies to the <em>left</em> of Q*. In both cases, the deviation from Q* generates a DWL triangle.'
      },

      /* 3 — multi_select: public good characteristics */
      { type: 'multi_select',
        stem: 'Which of the following correctly describe the defining characteristics of a <strong>pure public good</strong>?',
        opts: [
          'Non-rival: one person\'s consumption of the good does not reduce the amount available for others',
          'Non-excludable: it is impossible (or prohibitively costly) to prevent non-payers from consuming the good',
          'The good is produced and sold entirely by private firms without government involvement',
          'The free-rider problem arises: rational agents have no incentive to pay for the good if they can consume it for free',
          'Markets will over-provide public goods because of the high consumer surplus they generate',
          'National defence and flood defences are examples of pure public goods'
        ],
        correct: [0, 1, 3, 5],
        exp: 'Options A, B, D, and F correctly characterise pure public goods. <strong>Non-rival (A)</strong>: national defence protects everyone simultaneously &mdash; one person\'s protection does not reduce another\'s. <strong>Non-excludable (B)</strong>: once provided, exclusion is impossible or impractical. <strong>Free-rider problem (D)</strong>: because no-one can be excluded, rational individuals wait for others to pay &mdash; causing the good to be under-provided or not provided at all. <strong>National defence &amp; flood defences (F)</strong>: canonical examples. Option C is wrong &mdash; precisely because of the free-rider problem, private firms cannot profitably supply public goods. Option E is backwards: markets <em>under-provide</em> (not over-provide) public goods.'
      },

      /* 4 — para_fill: private vs social framework */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the private vs social cost-benefit framework.',
        anchor: 'Market failure begins when private and social values diverge.',
        para: 'The free market responds to [1] costs and benefits &mdash; the costs and benefits experienced by the [2] involved in a transaction. But a transaction can also affect [3] parties not party to the exchange. These spillover effects are called [4]. Social cost equals private cost plus [5] cost. When social cost exceeds private cost, the supply curve (which tracks [6]) lies below the true [7] curve. The market therefore produces at a quantity that is [8] the social optimum, generating a welfare loss from over-production.',
        blanks: [
          { id: 1, opts: ['private', 'social', 'external', 'marginal'], ans: 0 },
          { id: 2, opts: ['parties', 'firms', 'regulators', 'shareholders'], ans: 0 },
          { id: 3, opts: ['third', 'second', 'foreign', 'regulated'], ans: 0 },
          { id: 4, opts: ['externalities', 'subsidies', 'taxes', 'transfers'], ans: 0 },
          { id: 5, opts: ['external', 'average', 'fixed', 'variable'], ans: 0 },
          { id: 6, opts: ['MPC', 'MSC', 'AVC', 'AFC'], ans: 0 },
          { id: 7, opts: ['MSC', 'MPC', 'ATC', 'AFC'], ans: 0 },
          { id: 8, opts: ['above', 'below', 'equal to', 'approaching'], ans: 0 }
        ],
        exp: '(1) <strong>Private</strong>: the price mechanism reflects private costs/benefits only. (2) <strong>Parties</strong>: buyer and seller. (3) <strong>Third</strong>: people outside the transaction. (4) <strong>Externalities</strong>: the technical term for spillovers. (5) <strong>External</strong>: Social cost = MPC + MEC. (6) <strong>MPC</strong>: the supply curve represents marginal private cost. (7) <strong>MSC</strong>: the socially optimal supply schedule. (8) <strong>Above</strong>: if MSC &gt; MPC (negative externality), the market quantity is above Q*, creating over-production DWL. The framework is symmetric for the benefit side: when MSB &gt; MPB (positive externality), market quantity is <em>below</em> Q*.'
      },

      /* 5 — chain: four-step diagnosis method */
      { type: 'chain',
        stem: 'Place the four steps of the market failure diagnosis framework in the correct analytical order.',
        items: [
          { label: 'Identify the <strong>welfare loss</strong>: show the DWL triangle and state the direction of misallocation (over- or under-production)', note: '' },
          { label: 'Identify the <strong>divergence</strong>: state whether private and social costs or benefits differ, and explain why', note: '' },
          { label: 'State the <strong>quantity gap</strong>: locate Qm (market output) and Q* (social optimum) and show that they differ', note: '' },
          { label: 'Identify the <strong>direction</strong>: state whether social cost exceeds private cost (over-production) or social benefit exceeds private benefit (under-production)', note: '' }
        ],
        correctOrder: [1, 3, 2, 0],
        exp: '<strong>Correct sequence:</strong><br>1. Identify the divergence &mdash; this is the root cause of the failure. Without a cost-benefit divergence, there is no market failure.<br>2. Identify the direction &mdash; negative externality pushes toward over-production (MSC &gt; MPC); positive externality or public-good characteristics push toward under-production (MSB &gt; MPB).<br>3. State the quantity gap &mdash; locate Qm and Q* on the diagram to quantify the failure.<br>4. Identify the welfare loss &mdash; the DWL triangle is the measurable consequence. Its size depends on the elasticities of supply and demand and the magnitude of the externality.<br><br>This four-step structure earns the analysis marks on any market failure question, for any route (externality, public good, information gap).'
      },

      /* 6 — odd_one_out: which is NOT a market failure */
      { type: 'odd_one_out',
        stem: 'Three of these are genuine examples of market failure. Which is the ODD ONE OUT?',
        items: [
          { icon: '🚗', label: 'Road congestion: drivers do not pay for the time delays they impose on other motorists, leading to excessive car use', note: '' },
          { icon: '💊', label: 'A pharmaceutical company earns monopoly profits from a patented drug, charging a price above marginal cost', note: '' },
          { icon: '🌊', label: 'Deep-sea fishing: a fishing fleet harvests cod to the point of near-depletion, because each boat ignores the impact of its catch on future stock', note: '' },
          { icon: '🏫', label: 'A school raises its fees, reducing the number of pupils who can afford to attend, but remaining financially solvent and filling its places', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is option D. A private school raising fees and remaining solvent is a market functioning normally &mdash; it is a distributional outcome (fewer low-income students can attend), not a market failure in the technical sense. There is no externality, public-good problem, or information gap necessarily involved. Options A (road congestion &mdash; negative externality), B (monopoly pricing &mdash; a standard source of allocative inefficiency and market failure), and C (overfishing &mdash; a common-pool resource tragedy of the commons) are genuine market failures. Note: some economists also class monopoly pricing as a market structure problem rather than a \'failure\' in the externality sense, but at A-level it is typically classified as market failure because P &gt; MC creates allocative inefficiency and DWL.'
      },

      /* 7 — data_table: vaccination under-provision */
      { type: 'data_table',
        stem: 'The table shows UK childhood vaccination coverage rates and associated disease data.',
        headers: ['Vaccine', 'UK 2022/23 coverage', 'WHO target', 'Gap', 'Disease risk at this coverage'],
        rows: [
          ['MMR (measles, 2-dose)', '85.7%', '95%', '&minus;9.3pp', 'Herd immunity threshold not reached; measles outbreaks possible'],
          ['DTaP/IPV/Hib (5-in-1)', '92.7%', '95%', '&minus;2.3pp', 'Near-threshold; pertussis (whooping cough) still circulating'],
          ['MenACWY (meningitis)', '83.4%', '95%', '&minus;11.6pp', 'Significant shortfall; outbreaks in unvaccinated clusters'],
          ['Flu (2&ndash;3 year olds)', '42.6%', '75%', '&minus;32.4pp', 'Major shortfall; community transmission sustained']
        ],
        question: 'Which analysis of the vaccination data best illustrates the market failure concept?',
        opts: [
          'The data illustrates under-provision caused by a positive externality: individuals who are vaccinated protect others (herd immunity), but because this benefit accrues to non-payers, private demand lies below the socially optimal level. Without intervention, coverage falls short of Q*.',
          'The data shows government failure: NHS vaccine programmes are clearly ineffective at reaching the WHO 95% target, suggesting private markets would achieve better outcomes.',
          'The data illustrates a negative externality: unvaccinated individuals impose costs on the vaccinated population by requiring booster doses.',
          'The shortfall in coverage is irrelevant to market failure analysis because vaccines are provided by the NHS, not the free market.'
        ],
        ans: 0,
        exp: 'Option A is correct. Vaccination generates a <strong>positive externality</strong>: the benefit to society (herd immunity, reduced transmission) exceeds the benefit to the individual. Private individuals base their decision on private benefit (personal protection), ignoring the external benefit they provide to others by being vaccinated. This means private demand lies below social demand, and the free market (without subsidy or mandate) would under-provide vaccination relative to Q*. The WHO 95% herd immunity threshold is effectively Q* for measles. All four vaccines in the table show coverage below Q*, confirming the under-provision prediction. Option B confuses market failure with government failure (and is empirically unsound). Option C misidentifies the direction of the externality. Option D is wrong &mdash; NHS provision is precisely the <em>intervention</em> designed to correct the market failure; the shortfalls show even subsidised provision is insufficient.'
      },

      /* 8 — multi_select: evaluation of negative externalities and market failure */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>why the free market over-produces goods with negative externalities</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &mdash; as opposed to description or one-sided analysis?',
        opts: [
          'The standard externality diagram assumes the MEC is constant and easily measurable, but in practice (e.g. carbon emissions) the MEC is disputed, changes over time, and depends on cumulative stock rather than flow &mdash; which means the Pigouvian tax rate set today may be systematically too low, qualifying the claim that a tax can straightforwardly achieve Q*.',
          'When a firm produces a negative externality, MSC exceeds MPC, so the market over-produces relative to Q*.',
          'While Pigouvian taxation can theoretically internalise a negative externality, it is only allocatively efficient if the tax exactly equals the MEC at Q* &mdash; and governments rarely have the information needed to set this rate correctly, making the welfare gain from a poorly calibrated tax uncertain and potentially less than the DWL it is supposed to eliminate.',
          'The size of the DWL from over-production depends on both the magnitude of the MEC and the elasticities of supply and demand &mdash; industries with inelastic supply and demand (such as energy) generate larger welfare losses from a given externality than industries with elastic responses, qualifying any generalisation about whether market failure is severe.',
          'Carbon emissions cause global warming.',
          'The government can use taxes and regulations to correct market failures caused by negative externalities.'
        ],
        correct: [0, 2, 3],
        exp: '<strong>Option A</strong> is genuine evaluation: it challenges the implicit assumption of the standard model (constant, measurable MEC), uses carbon as a specific counter-example, and reaches the direction that real-world calibration of taxes may be systematically flawed &#8212; qualifying the policy prescription. <strong>Option C</strong> is evaluation: it identifies the precise condition under which Pigouvian taxation achieves the welfare gain (tax = MEC at Q*), then argues governments rarely meet this condition, reaching a sceptical qualified direction about the policy\'s effectiveness in practice. <strong>Option D</strong> is evaluation: it uses the relationship between elasticities and DWL size to make the evaluative point that the severity of market failure varies by industry &#8212; reaching a direction about when externalities are most damaging and when intervention is most urgent. <strong>Option B</strong> is description &#8212; restating the core model result (MSC &gt; MPC → over-production) with no qualification, no evidence, no direction beyond the model itself. <strong>Option E</strong> is description of an empirical fact with no analytical content. <strong>Option F</strong> is description of policy tools with no weighing of their effectiveness or conditions under which they work.'
      },

      /* 9 — calculation: DWL triangle size */
      { type: 'calculation',
        context: 'A market has a negative externality. The marginal external cost (MEC) is constant at <strong>&pound;10 per unit</strong>. At the free-market quantity of <strong>Qm = 200 units</strong>, the social optimum is <strong>Q* = 160 units</strong>.',
        working: [
          'Step 1: Identify the base of the DWL triangle',
          'Base = Qm &minus; Q* = 200 &minus; 160 = 40 units',
          'Step 2: Identify the height of the DWL triangle',
          'At Q*, MSC &minus; MSB = MEC = &pound;10 (the wedge between social cost and benefit)',
          'Height = &pound;10',
          'Step 3: Calculate DWL',
          'DWL = &frac12; &times; base &times; height = &frac12; &times; 40 &times; &pound;10 = &pound;200',
          'Step 4: Interpret',
          'This &pound;200 is lost surplus from units 161&ndash;200 that are produced even though their social cost exceeds their social benefit.'
        ],
        stem: 'What is the deadweight welfare loss from this externality?',
        opts: [
          { ped: '&pound;200, representing the lost social surplus from the 40 units of over-production', typ: 'Triangle: &frac12; &times; (Qm &minus; Q*) &times; MEC', rev: 'DWL = &frac12; &times; 40 &times; &pound;10' },
          { ped: '&pound;400, representing the total external cost imposed at the market quantity', typ: 'Uses rectangle not triangle: 40 &times; &pound;10 = &pound;400', rev: 'DWL is a triangle (the MEC tapers from &pound;10 to 0 between Qm and Q*)' },
          { ped: '&pound;2,000, representing the total MEC at the market equilibrium', typ: 'Uses total quantity, not overproduction: 200 &times; &pound;10', rev: 'DWL is only the triangle on the overproduced units' },
          { ped: '&pound;100, as only half the externality falls on third parties', typ: 'Halves the triangle again without justification', rev: 'The &frac12; is already in the triangle formula' }
        ],
        ans: 0,
        exp: 'DWL = &frac12; &times; (Qm &minus; Q*) &times; MEC = &frac12; &times; 40 &times; &pound;10 = <strong>&pound;200</strong>. The triangle arises because the gap between MSC and MSB is zero at Q* and widens to &pound;10 (the constant MEC) by Qm. This is only a triangle because the D (MPB) and S curves are straight lines. With constant MEC (a parallel shift of S to get MSC), the DWL is this neat triangle. Option B computes the rectangle of total external cost on the overproduced units &mdash; the wrong shape. Option C uses the total quantity. When the government imposes a Pigouvian tax of &pound;10/unit, it recovers this &pound;200 DWL for society.'
      },

      /* 10 — mcq: adverse selection vs moral hazard (bonus) */
      { type: 'mcq',
        stem: 'Which scenario correctly illustrates <strong>adverse selection</strong> (rather than moral hazard)?',
        opts: [
          'An insurance company cannot observe whether prospective customers are high-risk or low-risk, so it charges a single average premium. High-risk individuals are more likely to buy the policy; low-risk individuals find the premium too expensive and decline. The insurer ends up with a pool of customers riskier than average.',
          'A homeowner, having taken out comprehensive home insurance, decides not to install a burglar alarm because the insurance makes theft less costly to bear personally.',
          'A bank, knowing it is too important to be allowed to fail, takes on riskier investments than it would without the implicit government guarantee.',
          'A used-car dealer only offers cars of unknown quality, but buyers, unable to tell good cars from bad, reduce their bids &mdash; so sellers of good cars withdraw from the market.'
        ],
        ans: 0,
        exp: 'Option A is the cleanest illustration of <strong>adverse selection</strong>: the information asymmetry operates <em>before</em> the contract is signed. High-risk customers self-select into insurance at the average premium, producing a pool of customers whose expected claims exceed the premium, potentially causing the market to unravel (Akerlof\'s "market for lemons" applied to insurance). Options B and C describe <strong>moral hazard</strong>: the information asymmetry affects behaviour <em>after</em> the contract or guarantee is in place (the homeowner takes less care; the bank takes more risk). Option D &mdash; Akerlof\'s used-car market &mdash; is actually another example of adverse selection, but here the direction is sellers withdrawing when buyers cannot distinguish quality, leading to market thinning rather than adverse pooling. Option A is the most textbook-precise adverse selection example.'
      }

    ]
  };

})();
