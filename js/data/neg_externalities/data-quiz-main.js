(function () {

  window.ECONOS_QUIZ = {
    id:       'neg_externalities_main',
    topicId:  'neg_externalities_main',
    title:    'Negative Externalities',
    subtitle: 'Theme 1 &middot; Topic 3.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'neg_externalities_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers negative externalities of production and consumption, Pigouvian taxes, MSC/MPC divergence, and policy evaluation',
    shortNames: [
      'MSC MCQ', 'Types categorise', 'Pigouvian tax MCQ', 'Diagram interp',
      'Para fill', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 — MCQ: MSC and overproduction */
      { type: 'mcq',
        id: 'q_negext_1',
        stem: 'In a market with a <strong>negative externality of production</strong>, the free market produces at Q<sub>M</sub> but the social optimum is at Q<sub>S</sub>. Which correctly describes the relationship between these output levels and the curves?',
        opts: [
          'Q<sub>M</sub> > Q<sub>S</sub> — the free market overproduces because MPC < MSC; the gap between MSC and MPC equals the marginal external cost',
          'Q<sub>M</sub> < Q<sub>S</sub> — the free market underproduces because MPC > MSC; firms face costs that society does not',
          'Q<sub>M</sub> = Q<sub>S</sub> — negative externalities affect distribution but not the total level of output',
          'Q<sub>M</sub> > Q<sub>S</sub> — the free market overproduces because the demand curve lies above the MSC curve at the market price'
        ],
        ans: 0,
        exp: 'Negative externality of production: <strong>MSC = MPC + MEC</strong> (Marginal External Cost). At the free market equilibrium, only MPC = MSB — the firm ignores MEC. So MPC < MSC at the market output, and the firm produces more than the social optimum (where MSC = MSB). The market output Q<sub>M</sub> > social optimum Q<sub>S</sub>. The vertical gap between MSC and MPC equals the MEC at each output level. A Pigouvian tax of MEC per unit would shift MPC up to MSC, reducing output to Q<sub>S</sub>.'
      },

      /* 2 — Categorise: neg externalities of production vs consumption */
      { type: 'categorise',
        id: 'q_negext_2',
        stem: 'Classify each example as a <strong>negative externality of production</strong> or a <strong>negative externality of consumption</strong>.',
        categories: ['Negative externality of production', 'Negative externality of consumption'],
        items: [
          { text: 'A coal power station emits CO₂ — costs borne by global population through climate change', category: 'Negative externality of production' },
          { text: 'Smokers impose secondhand smoke health costs on those nearby', category: 'Negative externality of consumption' },
          { text: 'A cement factory\'s dust pollutes surrounding farmland, reducing crop yields', category: 'Negative externality of production' },
          { text: 'Motorists\' car exhaust fumes cause respiratory illness in urban pedestrians', category: 'Negative externality of consumption' },
          { text: 'A factory\'s noise pollution disrupts a nearby school', category: 'Negative externality of production' },
          { text: 'Excessive alcohol consumption leads to antisocial behaviour, imposing costs on police and healthcare', category: 'Negative externality of consumption' }
        ],
        exp: '<strong>Negative externality of production</strong>: the cost arises from the production process itself (pollution, noise, waste) — the MPC curve lies below MSC. <strong>Negative externality of consumption</strong>: the cost arises from the act of consuming (smoking, driving, drinking) — the MPB (demand) curve lies above the MSB curve (social demand adjusted for external costs). Both cause overproduction/overconsumption relative to the social optimum, but the policy instruments differ: production externality → production tax; consumption externality → consumption tax on the consumer.'
      },

      /* 3 — MCQ: Pigouvian tax */
      { type: 'mcq',
        id: 'q_negext_3',
        stem: 'A <strong>Pigouvian tax</strong> on a firm with a negative externality of production should be set equal to:',
        opts: [
          'The marginal external cost at the social optimum — to shift MPC up to MSC and reduce output to Q*',
          'The total external cost over all units produced — a one-off payment to compensate affected parties',
          'The firm\'s total profit — to deter production entirely and eliminate the externality',
          'The price of the good at the market equilibrium — to eliminate consumer surplus from the market'
        ],
        ans: 0,
        exp: 'A Pigouvian tax shifts the firm\'s marginal private cost curve upward by the amount of the marginal external cost (MEC) at the social optimum. This makes the firm internalise the external cost — effectively facing the full social cost. At the corrected equilibrium, MPC + tax = MSC, and the firm produces at the social optimum Q* (where MSC = MSB). If the tax is set too high, output falls below Q* (over-correction); too low, and overproduction continues. The challenge for policymakers is measuring MEC accurately — particularly difficult for diffuse externalities like CO₂.'
      },

      /* 4 — MCQ: negative externality diagram */
      { type: 'mcq',
        id: 'q_negext_4',
        stem: 'On a diagram showing a negative externality of production, the <strong>deadweight welfare loss</strong> is represented by:',
        opts: [
          'The triangle between the market output (Q<sub>M</sub>) and the social optimum (Q*) bounded by the MSC and MSB (demand) curves',
          'The entire area under the MSC curve up to the market output',
          'The rectangle representing the tax revenue from a Pigouvian tax',
          'The area of consumer surplus at the market price'
        ],
        ans: 0,
        exp: 'The DWL triangle lies between Q* and Q<sub>M</sub>, bounded above by MSC and below by MSB (demand). Each unit from Q* to Q<sub>M</sub> has MSC > MSB — the social cost exceeds the social benefit. The height of the triangle at any output level is (MSC − MSB) at that output. The area of this triangle represents the total welfare loss from overproduction due to the negative externality. A Pigouvian tax that shifts MPC up to MSC eliminates this triangle entirely — restoring allocative efficiency.'
      },

      /* 5 — Para fill: negative externality analysis */
      { type: 'para_fill',
        id: 'q_negext_5',
        stem: 'Complete the paragraph analysing a negative externality of production.',
        anchor: 'Factory pollution is the textbook example of a negative externality of production.',
        para: 'When a factory pollutes a river, it imposes [1] costs on local fishing communities and residents. These costs are [2] in the factory\'s private cost curve — the factory owner does not pay them. As a result, the factory\'s marginal [3] cost is lower than its marginal [4] cost. The free market produces [5] of the good than is socially optimal because the factory ignores the [6] cost in its profit maximisation. The resulting [7] is a triangle of welfare loss. A Pigouvian [8] equal to the marginal external cost would shift the MPC curve up to the MSC, correcting the overproduction.',
        blanks: [
          { id: 1, opts: ['external', 'internal', 'marginal', 'sunk'], ans: 0 },
          { id: 2, opts: ['not included', 'included', 'overstated', 'minimised'], ans: 0 },
          { id: 3, opts: ['private', 'social', 'average', 'total'], ans: 0 },
          { id: 4, opts: ['social', 'private', 'average', 'fixed'], ans: 0 },
          { id: 5, opts: ['more', 'less', 'the same amount', 'none'], ans: 0 },
          { id: 6, opts: ['external', 'internal', 'social', 'variable'], ans: 0 },
          { id: 7, opts: ['deadweight welfare loss', 'consumer surplus', 'producer surplus', 'total revenue'], ans: 0 },
          { id: 8, opts: ['tax', 'subsidy', 'price floor', 'price ceiling'], ans: 0 }
        ],
        exp: '(1) <strong>External</strong> costs — costs imposed on third parties. (2) <strong>Not included</strong> in the private cost curve. (3) Marginal <strong>private</strong> cost < (4) marginal <strong>social</strong> cost. (5) The market produces <strong>more</strong> (overproduction). (6) Ignores the <strong>external</strong> cost. (7) <strong>Deadweight welfare loss</strong> — the triangle of net social loss. (8) Pigouvian <strong>tax</strong> corrects overproduction. This sequence is the core analytical paragraph structure for any negative externality question.'
      },

      /* 6 — Cause & effect: pollution taxes */
      { type: 'cause_effect',
        id: 'q_negext_6',
        stem: 'Match each mechanism in a Pigouvian tax chain to its correct effect.',
        pairs: [
          { cause: 'Government imposes a tax equal to the marginal external cost on a polluting firm', effect: 'Firm\'s marginal private cost rises to equal marginal social cost' },
          { cause: 'Firm now faces full social cost of production', effect: 'Firm reduces output from Q<sub>M</sub> to Q* (social optimum)' },
          { cause: 'Output falls to the social optimum', effect: 'Deadweight welfare loss is eliminated' },
          { cause: 'Tax revenue is collected by government', effect: 'Government can compensate those harmed or fund public goods' },
          { cause: 'Firm faces higher production costs from Pigouvian tax', effect: 'Incentive to invest in cleaner technology to reduce tax liability' },
          { cause: 'Carbon tax makes fossil fuel electricity more expensive', effect: 'Renewable energy becomes relatively cheaper — market shifts toward cleaner generation' }
        ],
        exp: 'The Pigouvian tax mechanism has multiple effects: <strong>direct correction</strong> (output falls to social optimum); <strong>DWL elimination</strong>; <strong>revenue generation</strong> (can be used for compensation or public goods — "double dividend"); <strong>innovation incentive</strong> (firms invest in cleaner technology to reduce tax liability — a dynamic efficiency gain beyond the static correction). Carbon taxes demonstrate all these effects in the real-world context of climate change.'
      },

      /* 7 — Match pairs: negative externality concepts */
      { type: 'match_pairs',
        id: 'q_negext_7',
        stem: 'Match each term to its definition in the negative externality framework.',
        pairs: [
          { a: 'Marginal External Cost (MEC)', b: 'Extra cost imposed on third parties from producing one more unit' },
          { a: 'Marginal Social Cost (MSC)', b: 'Full cost to society of producing one more unit: MPC + MEC' },
          { a: 'Social optimum (Q*)', b: 'Output level where MSC = MSB — maximises total welfare' },
          { a: 'Market equilibrium (Q<sub>M</sub>)', b: 'Output level where MPC = MPB — ignores external cost' },
          { a: 'Internalising the externality', b: 'Making the producer bear the external cost through tax or regulation' },
          { a: 'Coase theorem', b: 'If property rights are well-defined and bargaining is costless, parties can negotiate to the social optimum without government intervention' }
        ],
        exp: 'Key concepts for diagram analysis: MEC is the vertical gap between MSC and MPC at each output. Social optimum Q* maximises net social welfare. Market equilibrium Q<sub>M</sub> overproduces. Internalising the externality can be done via Pigouvian taxes, tradeable permits, regulation, or (in the Coasian view) property rights + bargaining. The Coase theorem is theoretically elegant but requires zero transaction costs — difficult in practice with many affected parties.'
      },

      /* 8 — Odd one out: Pigouvian tax effects */
      { type: 'odd_one_out',
        id: 'q_negext_8',
        stem: 'Three of these are effects of a correctly set <strong>Pigouvian tax</strong> on a negative externality. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📉', label: 'Output falls from the free market level to the socially optimal level', note: '' },
          { icon: '💰', label: 'Government collects tax revenue that can be used to compensate those harmed', note: '' },
          { icon: '🌿', label: 'Firms gain an incentive to invest in cleaner technology to reduce their tax bill', note: '' },
          { icon: '🏭', label: 'All pollution is eliminated — firms stop production entirely to avoid the tax', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is <strong>all pollution is eliminated</strong>. A correctly set Pigouvian tax does not eliminate production — it reduces output to the <strong>social optimum</strong> Q*, where some externality still exists but at the level where MSC = MSB. Eliminating all production would be excessive and would destroy consumer and producer surplus from beneficial trades. The other three are genuine effects: output reduction to Q* (static correction); government revenue (potential double dividend); innovation incentive (dynamic efficiency gain). The goal is optimal pollution, not zero pollution.'
      },

      /* 9 — Data table: UK congestion charges */
      { type: 'data_table',
        id: 'q_negext_9',
        stem: 'The table shows transport data for London before and after the introduction of the Congestion Charge (2003).',
        headers: ['Indicator', 'Before (2002)', 'After (2004)', 'Change'],
        rows: [
          ['Average car traffic in charging zone (vehicles/day)', '195,000', '160,000', '−18%'],
          ['Average travel speed in charging zone (mph)', '8.2', '10.9', '+33%'],
          ['Revenue raised (£m/year)', '—', '97', 'New'],
          ['Bus journey times (minutes shorter on same routes)', '—', '14% faster', 'Improved'],
          ['Cycling in charging zone', 'Baseline', '+12%', '+12%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data in terms of negative externality theory?',
        opts: [
          'The congestion charge worked as a Pigouvian-style tax — it reduced the negative externality (congestion) by reducing car traffic 18%, improved speeds for all road users, raised revenue, and incentivised substitute transport modes',
          'The congestion charge failed — 82% of cars still entered the zone, showing the tax was set too low',
          'The data prove that congestion charges are always the best solution to traffic externalities in all city contexts',
          'Revenue of £97m proves the main goal was tax collection rather than externality correction'
        ],
        ans: 0,
        exp: 'The data show a textbook Pigouvian tax outcome: <strong>quantity reduced</strong> (car traffic fell 18%); <strong>externality reduced</strong> (congestion improved — average speeds rose 33%); <strong>positive spillovers</strong> to other road users (buses 14% faster, more space for cyclists); <strong>revenue raised</strong> (£97m for public transport investment). Option B: 82% still entering is not a failure — the social optimum allows some traffic (where MSC = MSB), not zero. Option C overclaims. Option D misidentifies the purpose — Pigouvian taxes are designed to correct behaviour AND raise revenue.'
      },

      /* 10 — Multi-select: evaluation of Pigouvian taxes */
      { type: 'multi_select',
        id: 'q_negext_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of Pigouvian taxes as a solution to negative externalities?',
        opts: [
          'Pigouvian taxes correct negative externalities by making firms internalise external costs',
          'While Pigouvian taxes are theoretically elegant, their practical effectiveness depends critically on accurately measuring the marginal external cost — which is notoriously difficult for diffuse externalities like CO₂, where costs vary by location, time, and affected population; mis-setting the tax rate leads to under- or over-correction',
          'Taxes are always better than regulation for correcting externalities',
          'Pigouvian taxes may have regressive distributional effects — a fuel duty or congestion charge takes a higher percentage of income from low-income households who are less able to reduce consumption or switch modes, creating a tension between efficiency and equity that revenue recycling (rebates to lower-income groups) can partially but not fully resolve',
          'Carbon taxes reduce CO₂ emissions',
          'The "double dividend" case for environmental taxes — that they can simultaneously improve efficiency (correct externality) and reduce distortionary labour or income taxes — is theoretically attractive but empirically uncertain: the dividend depends on how revenue is recycled, and tax interactions can reduce the net benefit'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies the measurement problem as the key practical limitation and explains why it matters — leading to a qualified conclusion (mis-setting the rate). D: identifies the regressive distributional consequence and evaluates a potential policy response (revenue recycling) while noting its limitation — a multi-step evaluation reaching a direction. F: evaluates the "double dividend" argument — acknowledges its theoretical appeal but qualifies it with empirical uncertainty about revenue recycling. A and E are descriptions; C is an unsupported assertion.'
      }

    ]
  };

})();
