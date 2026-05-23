(function () {

  window.ECONOS_QUIZ = {
    id:       'taxes_subsidies_policy_main',
    topicId:  'taxes_subsidies_policy_main',
    title:    'Taxes &amp; Subsidies as Policy Tools',
    subtitle: 'Theme 1 &middot; Topic 4.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering Pigouvian logic (when taxes and subsidies are justified), five real UK case studies (SDIL, fuel duty, tobacco, CAP, Contracts for Difference), the three-axis evaluation framework (effectiveness, efficiency, equity), and exam technique for 25-mark essays. Mixed formats: mcq, sort, diagnostic pair, data table, chain, paragraph fill, and multi-select.',
    shortNames: {
      'taxes_subsidies_policy_1': 'When intervention is justified',
      'taxes_subsidies_policy_2': 'Five UK case studies',
      'taxes_subsidies_policy_3': 'Exam technique'
    },

    questions: [

      /* 1 — mcq: Pigouvian logic */
      { type: 'mcq',
        stem: 'Which explanation of <strong>when a tax is economically justified</strong> is most analytically precise?',
        opts: [
          'A tax is justified when the market produces a negative externality and the tax can be set equal to the marginal external cost (MEC), shifting supply to the socially optimal output Q* &mdash; provided the welfare gain from eliminating the externality DWL exceeds the DWL created by the tax itself',
          'A tax is justified whenever the government needs to raise revenue to fund public expenditure, because any tax on a functioning market is neutral in its welfare effects',
          'A tax is justified when the good being taxed is a luxury, because luxury consumers have high incomes and can afford to pay more without reducing their welfare',
          'A tax is always preferable to direct regulation because taxes raise revenue and regulations do not'
        ],
        ans: 0,
        exp: 'Option A states the Pigouvian logic precisely. A tax in an otherwise efficient market creates a DWL &mdash; it destroys welfare. The only justification is that the market failure (externality) is causing a <em>larger</em> DWL from over-production, and the tax corrects this by shifting supply up to MSC. The net welfare effect is positive only if the externality DWL eliminated &gt; the policy DWL created. Option B is wrong: a revenue-raising tax in an efficient market purely destroys welfare (no externality to correct). Option C conflates equity (ability to pay) with efficiency (correcting externalities) &mdash; the relevant criterion is the size of the MEC, not whether buyers are wealthy. Option D overstates the case: taxes have higher transaction costs in some settings and may generate avoidance behaviour that direct regulation avoids.'
      },

      /* 2 — elastic_sort: justified vs unjustified intervention */
      { type: 'elastic_sort',
        stem: 'Classify each tax or subsidy as either <strong>Pigouvian/merit-based (justified)</strong> or <strong>revenue-raising without clear externality justification</strong>.',
        categories: ['justified', 'unjustified'],
        categoryLabels: ['Pigouvian / merit-based (justified)', 'Revenue-raising without externality justification'],
        goods: [
          { icon: '🥤', label: 'UK Soft Drinks Industry Levy, designed to reduce sugar consumption and correct information failure / negative externality from excess sugar', note: '', ans: 'justified' },
          { icon: '💎', label: 'A 1% surcharge on diamond jewellery purchases to raise funds for the government\'s general budget', note: '', ans: 'unjustified' },
          { icon: '☀️', label: 'UK Contracts for Difference: guaranteed prices for offshore wind to subsidise deployment and correct under-provision of low-carbon energy (positive externality)', note: '', ans: 'justified' },
          { icon: '🎫', label: 'VAT applied uniformly to all consumer services, primarily to raise government revenue', note: '', ans: 'unjustified' },
          { icon: '🚗', label: 'A congestion charge on driving in central London, set to internalise the external costs of congestion and pollution imposed on other road users', note: '', ans: 'justified' },
          { icon: '💊', label: 'NHS subsidy on vaccines, provided free at point of use to correct under-consumption caused by the positive externality of herd immunity', note: '', ans: 'justified' }
        ],
        exp: '<strong>Pigouvian/justified</strong>: SDIL (corrects sugar externality / information failure), Contracts for Difference (corrects under-provision of low-carbon energy, a positive externality), congestion charge (internalises external congestion and pollution costs), NHS vaccines (corrects under-consumption from herd-immunity externality). Each has a specific market failure it targets. <strong>Revenue-raising/unjustified (in the Pigouvian sense)</strong>: the diamond surcharge and uniform VAT are primarily fiscal instruments. They create DWL without correcting a pre-existing externality DWL. This does not make them wrong in policy terms &mdash; governments must raise revenue &mdash; but they cannot claim an efficiency justification in the same way Pigouvian instruments can.'
      },

      /* 3 — diagnostic_pair: evaluating the sugar levy */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the effectiveness of the UK Soft Drinks Industry Levy (SDIL) as a Pigouvian tax."</em> Which student provides the stronger evaluation?',
        students: [
          { name: 'Amara', badge: 'Candidate A',
            answer: 'The SDIL (2018&ndash;) is a tiered tax on soft drinks by sugar content: 24p/litre for &gt;8g per 100ml, 18p/litre for 5&ndash;8g/100ml, with pure fruit juices and drinks under 5g untaxed.<br><br><strong>Effectiveness:</strong> The levy produced strong reformulation effects &mdash; average sugar content in taxed drinks fell sharply before the tax came into force, because producers had an elastic response on the supply side (reformulating costs less than paying the duty). Sales of taxed drinks fell ~21%. The tiered structure created an incentive to reduce sugar below the 8g/100ml threshold &mdash; a design feature that maximises Pigouvian effectiveness.<br><br><strong>Efficiency:</strong> Admin costs are low (collected from a small number of manufacturers). Revenue (&asymp;&pound;330m/yr) was earmarked for school sports and breakfast clubs. The welfare question is whether the DWL from the levy is smaller than the externality DWL from excess sugar consumption &mdash; the reformulation evidence suggests the tax largely avoided creating its own DWL by shifting production rather than destroying it.<br><br><strong>Equity:</strong> There is a genuine tension here. Sugary drinks taxes tend to be regressive in incidence (lower-income households spend a higher share of income on affected goods). However, health benefits from reduced sugar consumption are progressive in impact (lower-income groups bear a disproportionate burden of diet-related illness). Which effect dominates is an empirical question &mdash; but the equity case is stronger than for fuel duty, where health externalities do not similarly offset the regressive incidence.<br><br><strong>Evaluation:</strong> SDIL is close to the Pigouvian ideal &mdash; targeted, behaviour-changing, and low-cost to administer. Its main limitation is that it targets drinks, not overall sugar consumption; a broader levy or nutrient tax might be more complete. Overall: a welfare-improving tax because the externality DWL eliminated likely exceeds the policy\'s own DWL.'
          },
          { name: 'Finn', badge: 'Candidate B',
            answer: 'The UK sugar levy is a tax on sugary drinks introduced in 2018. It was meant to reduce sugar consumption and improve health in the UK. The tax works by raising the price of sugary drinks, making them more expensive, so people buy less of them. This is like a Pigouvian tax because it tries to correct a negative externality from unhealthy eating. The levy has been successful because many companies reformulated their drinks to avoid the tax, and sales of taxed drinks have gone down. This shows the tax changed behaviour, which is what a Pigouvian tax is supposed to do. However, the tax is regressive because poor people spend a higher percentage of their income on these drinks. This means it is unfair even if it reduces sugar consumption. Also, people might just switch to other sugary foods, which the levy does not cover, so the overall health benefit might be smaller than expected. Overall, the levy has been effective at reducing sugar in drinks but might not have fully solved the health problem.'
          }
        ],
        ans: 0,
        exp: '<strong>Amara</strong> gives the analytically stronger answer. She applies all three evaluation axes (effectiveness, efficiency, equity) with specific evidence: reformulation before the levy came into force (elastic producer response), ~&pound;330m revenue, and the distributional tension between regressive incidence and progressive health impact. Her final judgement &mdash; the externality DWL eliminated likely exceeds the policy DWL &mdash; is the Pigouvian welfare test applied explicitly. Finn covers the main points but lacks the technical structure. He does not distinguish Pigouvian welfare logic (externality DWL vs policy DWL), does not apply the effectiveness-efficiency-equity framework explicitly, and his equity section does not resolve the tension between incidence and health impact. Finn accesses Level 3; Amara Level 4.'
      },

      /* 4 — multi_select: criticisms of the EU Common Agricultural Policy */
      { type: 'multi_select',
        stem: 'Which of the following are valid economic criticisms of the EU Common Agricultural Policy (CAP)?',
        opts: [
          'Price support and output subsidies create chronic over-production (&ldquo;butter mountains&rdquo;, &ldquo;wine lakes&rdquo;), generating a DWL from overproduction in an already efficient market',
          'The CAP is fully Pigouvian: it corrects a positive externality from food security and rural land management, so the subsidy is welfare-enhancing',
          'Land subsidies capitalise into farmland values &mdash; roughly 30&ndash;50% of CAP support ends up as higher land prices, captured by landowners rather than active farmers',
          'The CAP harms developing-country farmers by depressing world prices for agricultural commodities, reducing export revenues for low-income countries',
          'The CAP correctly raises total welfare by transferring surplus from consumers (via higher food prices) to producers, with no deadweight loss',
          'Income support is distributed highly unequally &mdash; large landowners and agribusinesses capture disproportionate shares of payments'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F are valid criticisms. <strong>A</strong>: Historic price supports produced chronic over-supply &mdash; a classic example of overproduction DWL when the externality justification (food security) is insufficient to justify the scale of support. <strong>C</strong>: Subsidy capitalisation means farmers who sell or rent land capture the benefit, not necessarily those producing food &mdash; this is a misallocation of the intended support. <strong>D</strong>: CAP depresses world food prices, harming developing-country exports and undermining comparative advantage in agriculture. <strong>F</strong>: CAP payments are area-based, so large landholdings receive the most &mdash; a highly unequal distribution. Option B is too strong: CAP has a partial food-security justification, but the scale of subsidy far exceeds any externality correction, making it at best partially Pigouvian. Option E is directly wrong &mdash; price supports create higher consumer prices (transferring surplus from consumers to producers) AND create DWL from over-production.'
      },

      /* 5 — chain: 4-step exam method */
      { type: 'chain',
        stem: 'Place the four steps of the exam technique for a tax or subsidy question in the correct order.',
        items: [
          { label: 'Reach a context-aware judgement: weigh effectiveness, efficiency, and equity to conclude whether the policy improves net welfare &mdash; use the specific good or market in the question', note: '' },
          { label: 'Draw the diagram accurately: correct shift direction, shaded DWL triangle, revenue or cost rectangle, all labels (Pc, Pp, Qt/Qs, Qe)', note: '' },
          { label: 'Explain the mechanism: link the supply shift to the externality or merit-good justification. State which market failure the policy corrects.', note: '' },
          { label: 'Analyse who gains and who loses: use the incidence rule (cite PED/PES) to identify the burden or benefit split. State redistribution effects.', note: '' }
        ],
        correctOrder: [1, 2, 3, 0],
        exp: '<strong>Correct sequence:</strong><br>1. Draw the diagram accurately &mdash; this is your evidence. Without a correct diagram you cannot analyse surplus areas or incidence.<br>2. Explain the mechanism &mdash; connect the diagram to the economic logic. Why does the market fail? How does the tax/subsidy correct it? This earns analysis marks.<br>3. Analyse who gains and who loses &mdash; use PED/PES to show incidence. Name the redistribution effect.<br>4. Reach a judgement &mdash; this must be context-aware. "It depends on elasticity" earns no marks. State which direction elasticity pushes the outcome for this specific good and reach a conclusion using all three evaluation axes (effectiveness, efficiency, equity).<br><br>Exam alert: most students lose marks on step 4. "On balance, the welfare gain is likely positive because the externality DWL eliminated (e.g. &pound;X bn) exceeds the policy\'s own DWL" is the target statement.'
      },

      /* 6 — data_table: offshore wind strike prices */
      { type: 'data_table',
        stem: 'The table shows UK Contracts for Difference (CfD) strike prices for offshore wind energy.',
        headers: ['CfD allocation round', 'Year', 'Strike price (2012 £/MWh)', 'Capacity awarded (MW)'],
        rows: [
          ['Round 1', '2015', '&pound;119.89', '1,162 MW'],
          ['Round 2', '2017', '&pound;57.50', '3,196 MW'],
          ['Round 3', '2019', '&pound;39.65', '5,500 MW'],
          ['Round 4', '2022', '&pound;37.35', '7,028 MW'],
          ['Round 5', '2023', '&pound;44.00 (reserve; no bids)', '&mdash;']
        ],
        question: 'Which analysis of the CfD data is best supported by economic theory?',
        opts: [
          'The CfD illustrates how a targeted subsidy can harness market competition to drive cost reductions: by guaranteeing a price floor that corrects the positive externality of low-carbon generation, the scheme created investor confidence that allowed the offshore wind industry to reach economies of scale &mdash; strike prices fell ~69% between 2015 and 2022',
          'The falling strike prices show that offshore wind no longer needs subsidies, so the CfD scheme should be immediately abolished to avoid further distorting the energy market',
          'The 2023 failure to attract bids (Round 5) proves that the CfD has completely failed as a policy instrument and that subsidies never work for renewable energy',
          'The CfD strike prices are above wholesale electricity prices, which proves the subsidy is Pigouvian and fully corrects the negative externality of fossil fuel generation'
        ],
        ans: 0,
        exp: 'Option A is the most analytically complete. The CfD scheme addresses a genuine market failure: low-carbon energy generates positive externalities (reduced CO&sup2;, avoided climate damage) that the market price does not capture. The CfD provides a guaranteed revenue floor ("strike price"), eliminating investors\' revenue uncertainty and allowing deployment at scale. As scale increased, learning-by-doing and economies of scale drove costs down sharply &mdash; from &pound;119/MWh (2015) to &pound;37/MWh (2022), a 69% fall. This is a case where the subsidy\'s own DWL may be small relative to the climate externality it corrects. Option B ignores that the market would under-provide even at lower cost without the certainty mechanism. Option C draws a sweeping conclusion from a single round &mdash; Round 5 failed because construction inflation pushed costs above the reserve price, not because the policy failed. Option D confuses the incidence of the strike price with the Pigouvian logic; the relevant comparison is the strike price vs the social cost of carbon in fossil-fuel generation.'
      },

      /* 7 — odd_one_out: which is NOT an exam error */
      { type: 'odd_one_out',
        stem: 'Three of the following are common exam errors when answering tax or subsidy questions. Which is the ODD ONE OUT?',
        items: [
          { icon: '❌', label: 'Labelling the consumer price (Pc) and producer net price (Pp) on the diagram and showing the wedge between them equals the tax per unit', note: '' },
          { icon: '❌', label: 'Drawing a subsidy as an upward shift of the supply curve (as if it were a tax) rather than a downward shift', note: '' },
          { icon: '❌', label: 'Concluding that a tax is justified purely because "demand is inelastic" without identifying the underlying market failure', note: '' },
          { icon: '❌', label: 'Stating that the seller remits the tax to HMRC and therefore bears all of the economic burden', note: '' }
        ],
        ans: 0,
        exp: 'The odd one out is option A. Correctly labelling Pc, Pp, and the tax wedge on the diagram is <em>good</em> exam technique, not an error &mdash; it earns marks. It is specifically what the exam marking scheme requires. Options B, C, and D are genuine errors. <strong>B</strong>: A subsidy shifts S downward (down/right), not upward. Drawing it upward is the same as drawing a tax &mdash; a common mark-losing error. <strong>C</strong>: Inelastic demand tells you who bears the tax burden; it does not justify imposing the tax. Justification requires a market failure. Conflating these two ideas is a Level 3 &rarr; Level 4 boundary error. <strong>D</strong>: Legal incidence (who hands the cash to HMRC) does not determine economic incidence (who bears the cost). This is one of the most frequently examined distinctions.'
      },

      /* 8 — para_fill: Pigouvian tax logic */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the Pigouvian tax and when it raises welfare.',
        anchor: 'Arthur Pigou argued that a corrective tax could internalise a negative externality and improve social welfare.',
        para: 'In a market with a negative externality, the supply curve reflects [1] cost only. The socially optimal supply curve includes the [2] external cost, so it lies above the market supply. The market over-produces at Qm; the social optimum is [3]. A Pigouvian tax sets the tax rate equal to the [4] per unit at Q*, shifting supply up to the [5] curve. This moves the market to Q*, eliminating the [6] triangle from over-production. A Pigouvian tax raises [7] if and only if the externality DWL eliminated exceeds the [8] the tax itself creates.',
        blanks: [
          { id: 1, opts: ['marginal private', 'marginal social', 'average variable', 'total'], ans: 0 },
          { id: 2, opts: ['marginal', 'average', 'total', 'fixed'], ans: 0 },
          { id: 3, opts: ['Q*', 'Qm', 'Qt', 'Qs'], ans: 0 },
          { id: 4, opts: ['MEC', 'MPC', 'MSC', 'MEB'], ans: 0 },
          { id: 5, opts: ['MSC', 'MPC', 'ATC', 'MEB'], ans: 0 },
          { id: 6, opts: ['deadweight welfare loss', 'consumer surplus', 'producer surplus', 'tax revenue'], ans: 0 },
          { id: 7, opts: ['welfare', 'revenue', 'consumer surplus', 'producer surplus'], ans: 0 },
          { id: 8, opts: ['DWL', 'revenue', 'consumer burden', 'producer burden'], ans: 0 }
        ],
        exp: '(1) <strong>Marginal private</strong>: the supply curve = MPC, ignoring external costs. (2) <strong>Marginal</strong>: marginal external cost. (3) <strong>Q*</strong>: the social optimum where MSB = MSC. (4) <strong>MEC</strong>: the tax rate must equal the marginal external cost at Q* to precisely internalise the externality. (5) <strong>MSC</strong>: the tax shifts MPC up to MSC, so the market now responds to social costs. (6) <strong>Deadweight welfare loss</strong>: the triangle between Q* and Qm is eliminated. (7) <strong>Welfare</strong>: total social welfare (CS + PS + externality effects). (8) <strong>DWL</strong>: the tax creates its own DWL by reducing output from Qm to Q* &mdash; but this is smaller than the externality DWL eliminated, so the net effect is positive.'
      },

      /* 9 — multi_select: the three-axis evaluation framework */
      { type: 'multi_select',
        stem: 'A student is answering a 25-mark essay: <em>"Evaluate the use of indirect taxes to correct negative externalities."</em> Which of the following would earn evaluation marks?',
        opts: [
          'Assessing <strong>effectiveness</strong>: did the tax change behaviour? This depends on the PED of the taxed good &mdash; inelastic demand (e.g. tobacco) reduces quantity by little; elastic demand produces stronger behavioural response',
          'Assessing <strong>efficiency</strong>: comparing the DWL the tax eliminates (externality correction) with the DWL it creates (policy distortion). A well-targeted Pigouvian tax nets a welfare gain; a tax on a good with no externality is purely welfare-reducing',
          'Noting that taxes are always more efficient than direct regulation because regulation never raises revenue',
          'Assessing <strong>equity</strong>: most indirect taxes are regressive in incidence but the distributional impact depends on whether health or environmental benefits partially offset this for lower-income groups',
          'Concluding that "it depends on elasticity" is sufficient as a final judgement without specifying the direction of the dependency',
          'Reaching a context-aware conclusion: e.g., for carbon taxes, effectiveness is high (long-run PED for fossil fuels is more elastic than short-run), efficiency is positive (climate externality DWL is very large), and equity concerns can be addressed by recycling revenue to lower-income households'
        ],
        correct: [0, 1, 3, 5],
        exp: 'Options A, B, D, and F earn evaluation marks. <strong>A</strong>: Evaluating effectiveness requires naming the elasticity assumption &mdash; this is the Edexcel mark scheme trigger. <strong>B</strong>: The Pigouvian welfare test (comparing externality DWL eliminated with policy DWL created) is the core efficiency evaluation &mdash; essential for Level 4. <strong>D</strong>: Equity assessment must identify both incidence and impact &mdash; not just "it\'s regressive." <strong>F</strong>: A context-specific conclusion with all three axes applied to a named example is the target Level 4 response. Option C is an overstatement &mdash; direct regulation can be more cost-effective than taxes in some settings (e.g. a total ban on CFCs was more effective than a CFC tax). Option E is explicitly an error: "it depends" without specifying the direction earns no marks on Edexcel. Always state which way the elasticity pushes the outcome and for what specific good.'
      },

      /* 10 — mcq: when does a tax raise welfare */
      { type: 'mcq',
        stem: 'In which of the following circumstances does an indirect tax <em>most clearly raise</em> total social welfare?',
        opts: [
          'The market has a large negative externality; the Pigouvian tax is set close to the MEC at Q*; and the DWL created by the tax is smaller than the DWL eliminated from the externality',
          'The government needs additional revenue; demand for the good is inelastic; and there is no negative externality associated with the good\'s consumption',
          'The good is a luxury item consumed mainly by high-income individuals; the tax improves the distribution of income; and no substitutes exist',
          'The government wants to protect domestic producers from foreign competition; it imposes a tariff that raises the domestic price above the world price'
        ],
        ans: 0,
        exp: 'Option A is the only circumstance where an indirect tax <em>unambiguously raises</em> total social welfare in the Pigouvian framework. Three conditions must hold: (1) a market failure (negative externality) exists, so the market is already allocatively inefficient; (2) the tax is calibrated to the MEC so the supply shift moves the market to Q*; (3) the externality DWL removed is larger than the policy DWL created. When all three hold, the net welfare effect is positive &mdash; the tax does more good than harm. Option B describes a scenario with no externality: the tax creates a DWL (quantity below Qe) with no offsetting correction, so welfare falls. Option C raises equity but the efficiency case requires an externality, not distributional grounds. Option D describes a protectionist tariff: it transfers surplus from consumers (higher domestic prices) to producers and government, creating two DWL triangles, with no externality to correct &mdash; welfare unambiguously falls relative to free trade.'
      }

    ]
  };

})();
