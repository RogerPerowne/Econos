(function () {

  window.ECONOS_QUIZ = {
    title:    'Positive Externalities',
    subtitle: 'Theme 1 &middot; Topic 3.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('pos_externalities_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers positive externalities of production and consumption, subsidies, MSB/MPB divergence, and merit goods',
    shortNames: [
      'MSB MCQ', 'Types categorise', 'Subsidy mechanism MCQ', 'Merit goods',
      'Para fill', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: underproduction from positive externality */
      { type: 'mcq',
        stem: 'In a market with a <strong>positive externality of consumption</strong>, the free market produces at Q<sub>M</sub> but the social optimum is at Q*. Which correctly describes the relationship?',
        opts: [
          'Q<sub>M</sub> < Q* – the free market underproduces because MPB < MSB; consumers only consider their private benefit, ignoring the benefit to third parties',
          'Q<sub>M</sub> > Q* – the free market overproduces because consumers value the good too highly due to positive social contagion',
          'Q<sub>M</sub> = Q* – positive externalities offset market failures from other sources, producing the social optimum',
          'Q<sub>M</sub> < Q* – the free market underproduces because MSC > MPC at the market equilibrium'
        ],
        ans: 0,
        exp: 'Positive externality of consumption: <strong>MSB = MPB + MEB</strong> (Marginal External Benefit). The market demand curve reflects only MPB – consumers ignore the benefit they confer on third parties. So market demand (MPB) lies below MSB. The market equilibrium (where S = MPB) has Q<sub>M</sub> < Q* (social optimum where S = MSB). The free market <strong>underproduces</strong> relative to the social optimum. A subsidy to consumers or producers shifts demand/supply to produce Q* – correcting the underproduction.'
      },

      /* 2 – Categorise: production vs consumption positive externalities */
      { type: 'categorise',
        stem: 'Classify each example as a <strong>positive externality of production</strong> or <strong>consumption</strong>.',
        categories: ['Positive externality of production', 'Positive externality of consumption'],
        items: [
          { text: 'A beekeeper\'s bees pollinate neighbouring farmers\' crops – benefit to farmers beyond the honey market', category: 'Positive externality of production' },
          { text: 'Getting vaccinated reduces disease transmission to others in the community', category: 'Positive externality of consumption' },
          { text: 'A firm\'s R&D creates knowledge that other firms can use (knowledge spillovers)', category: 'Positive externality of production' },
          { text: 'A person learning to read enables better communication with everyone they interact with', category: 'Positive externality of consumption' },
          { text: 'Restoring a historic building benefits the surrounding area and boosts local property values', category: 'Positive externality of production' },
          { text: 'Learning to drive creates economic benefits for employers who need mobile workers', category: 'Positive externality of consumption' }
        ],
        exp: '<strong>Positive externality of production</strong>: the benefit arises from the production process (beekeeper, R&D spillovers, building restoration) – MSC curve lies above MPC (external benefit to third parties from production). <strong>Positive externality of consumption</strong>: the benefit arises from the act of consuming (vaccination, education, learning to drive) – MSB curve lies above the demand (MPB) curve. In both cases, the market underproduces/underconsumes relative to the social optimum. Subsidies or direct provision can correct either type.'
      },

      /* 3 – MCQ: subsidy as correction */
      { type: 'mcq',
        stem: 'A government introduces a <strong>subsidy</strong> to correct a positive externality of consumption. The subsidy should be set equal to:',
        opts: [
          'The marginal external benefit at the social optimum – to shift the private demand (MPB) curve up to MSB',
          'The total social benefit of the good – a one-off payment to every consumer to encourage consumption',
          'The market price – to make the good free, maximising consumption regardless of social benefit',
          'The producer\'s marginal cost – to reduce the price to zero and eliminate all consumer charges'
        ],
        ans: 0,
        exp: 'A correctly set subsidy shifts the demand curve (or supply curve) so that the market produces the social optimum Q*. For a positive externality of consumption: subsidy = MEB at Q* lifts the effective demand from MPB to MSB. The new market equilibrium occurs at Q* where MSB = supply. Alternatively, a supply-side subsidy (per unit to producers) shifts the supply curve rightward until output reaches Q*. Setting the subsidy too high causes overconsumption (past Q*); too low leaves underproduction. The measurement challenge is the same as for Pigouvian taxes.'
      },

      /* 4 – MCQ: merit goods */
      { type: 'mcq',
        stem: 'Education is a <strong>merit good</strong>. Which statement best explains why the free market is likely to underprovide education?',
        opts: [
          'Individuals underestimate the long-run private and social benefits of education – imperfect information leads to demand being below the socially optimal level',
          'Education is a public good – it is non-excludable and non-rival, making private provision impossible',
          'Education is too expensive for firms to provide profitably – high fixed costs prevent market provision',
          'Individuals consume education for status reasons, leading to overconsumption rather than underconsumption'
        ],
        ans: 0,
        exp: '<strong>Merit goods</strong> have positive externalities AND information failure: consumers undervalue them because they don\'t fully understand the long-run benefits. A 16-year-old may underestimate the lifetime wage premium from staying in education – their MPB understates true benefit. Additionally, education generates positive externalities (skilled workforce, lower crime, better civic participation) – so MSB > MPB. Both information failure and positive externality point to market underprovision. Education is NOT a public good (it IS excludable and rival) – private schools demonstrate this. Government response: free/subsidised provision, compulsory attendance laws.'
      },

      /* 5 – Para fill: positive externality analysis */
      { type: 'para_fill',
        stem: 'Complete the paragraph analysing a positive externality of consumption.',
        anchor: 'Vaccination is one of the most important examples of a positive externality of consumption.',
        para: 'When a person is vaccinated, they generate an [1] benefit for others – they are less likely to transmit disease to those who cannot be vaccinated. Because individuals only consider their own [2] benefit when deciding whether to get vaccinated, the market demand curve lies [3] the marginal social benefit curve. The free market produces [4] vaccinations than is socially optimal. The resulting [5] welfare loss can be corrected by a [6] per vaccination – shifting consumption toward the social [7]. If vaccination rates reach sufficient levels, [8] immunity is achieved, conferring a collective benefit with no additional private cost.',
        blanks: [
          { id: 1, opts: ['external', 'internal', 'private', 'demand-side-policies-monetary'], ans: 0 },
          { id: 2, opts: ['private', 'social', 'external', 'marginal'], ans: 0 },
          { id: 3, opts: ['below', 'above', 'equal to', 'parallel to'], ans: 0 },
          { id: 4, opts: ['fewer', 'more', 'the same number of', 'no'], ans: 0 },
          { id: 5, opts: ['deadweight', 'consumer', 'producer', 'tax'], ans: 0 },
          { id: 6, opts: ['subsidy', 'tax', 'price ceiling', 'quota'], ans: 0 },
          { id: 7, opts: ['optimum', 'minimum', 'maximum', 'equilibrium'], ans: 0 },
          { id: 8, opts: ['herd', 'market', 'producer', 'allocative'], ans: 0 }
        ],
        exp: '(1) <strong>External</strong> benefit. (2) Own <strong>private</strong> benefit. (3) Market demand lies <strong>below</strong> MSB (MPB < MSB). (4) <strong>Fewer</strong> vaccinations – underproduction. (5) <strong>Deadweight</strong> welfare loss. (6) <strong>Subsidy</strong> per vaccination. (7) Social <strong>optimum</strong>. (8) <strong>Herd</strong> immunity – a pure public good property that emerges when vaccination coverage is high enough. This paragraph demonstrates the analytical structure for any positive externality question.'
      },

      /* 6 – Cause & effect: positive externalities and policy */
      { type: 'cause_effect',
        stem: 'Match each positive externality scenario to the appropriate policy response and its mechanism.',
        pairs: [
          { cause: 'Vaccination has large positive externalities – herd immunity benefits non-vaccinated', effect: 'Government subsidises vaccines or makes them free – shifts demand to social optimum' },
          { cause: 'R&D generates knowledge spillovers benefiting many firms beyond the inventor', effect: 'Patent protection and R&D tax credits – increase private incentive to invest' },
          { cause: 'Education generates skilled workforce benefits for employers not involved in training', effect: 'State-funded education and compulsory schooling laws – increase provision to social optimum' },
          { cause: 'Reforestation by one landowner benefits local biodiversity and reduces flooding for all', effect: 'Countryside stewardship grants – subsidise environmentally beneficial land use' },
          { cause: 'Apprenticeship training produces skills that benefit future employers', effect: 'Apprenticeship levy – forces firms to fund training that generates broader labour market benefits' },
          { cause: 'Cycling infrastructure benefits health, reduces congestion, and cuts NHS costs', effect: 'Government subsidises cycle lanes and bike purchase schemes' }
        ],
        exp: 'Positive externalities require policies that increase production/consumption toward the social optimum: <strong>subsidies</strong> (direct per-unit); <strong>free provision</strong> (government produces at zero price – fully corrects market underprovision); <strong>compulsory participation</strong> (school attendance laws bypass the information failure that causes undervaluation); <strong>intellectual property rights</strong> (make R&D profitable by creating temporary monopoly); <strong>levies</strong> (redistribute training costs to all beneficiaries). Each instrument addresses a slightly different dimension of the market failure.'
      },

      /* 7 – Match pairs: positive externality concepts */
      { type: 'match_pairs',
        stem: 'Match each term to its definition in the positive externality framework.',
        pairs: [
          { a: 'Marginal External Benefit (MEB)', b: 'Extra benefit received by third parties from one more unit consumed' },
          { a: 'Marginal Social Benefit (MSB)', b: 'Full benefit to society: MPB + MEB' },
          { a: 'Merit good', b: 'Good with positive externalities where consumers underestimate long-run benefit' },
          { a: 'Demerit good', b: 'Good with negative externalities where consumers underestimate long-run costs' },
          { a: 'Knowledge spillover', b: 'R&D by one firm creates freely available knowledge that raises productivity economy-wide' },
          { a: 'Herd immunity', b: 'High vaccination coverage reduces disease transmission even for the unvaccinated' }
        ],
        exp: 'Positive externality vocabulary: MEB is the vertical gap between MSB and MPB. <strong>Merit goods</strong> (education, healthcare, museums) have both positive externalities and information failure – double justification for government intervention. <strong>Demerit goods</strong> (cigarettes, alcohol, junk food) have both negative externalities and information failure. Knowledge spillovers are the most economically important positive externality in modern growth theory – justifying R&D subsidies, patent systems, and public funding of basic research. Herd immunity is a public good property that emerges from vaccination – making vaccines a fascinating good with both private and public good dimensions.'
      },

      /* 8 – Odd one out: positive externalities */
      { type: 'odd_one_out',
        stem: 'Three of these are goods with significant <strong>positive externalities</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '💉', label: 'Vaccination – reduces disease transmission to the wider community', note: '' },
          { icon: '🎓', label: 'Education – creates skilled workers who benefit employers and society beyond the individual', note: '' },
          { icon: '🚬', label: 'Cigarettes – generate healthcare costs and secondhand smoke harm to non-smokers', note: '' },
          { icon: '🌳', label: 'Urban tree planting – improves air quality, reduces flooding, benefits all residents nearby', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>cigarettes</strong>. Cigarettes generate <strong>negative</strong> externalities (secondhand smoke health costs, NHS costs from smoking-related illness, fire risks) – not positive externalities. The other three are classic examples of positive externalities: vaccination (herd immunity); education (skilled workforce, lower crime, civic benefits); urban trees (air quality, flood reduction, biodiversity). Cigarettes are the archetypal demerit good – justifying high tobacco duties as a corrective Pigouvian tax.'
      },

      /* 9 – Data table: UK education subsidies */
      { type: 'data_table',
        stem: 'The table shows UK education data.',
        headers: ['Indicator', '1960', '1990', '2022'],
        rows: [
          ['State education spending (% of GDP)', '3.5%', '4.4%', '5.8%'],
          ['School leaving age', '15', '16', '18'],
          ['Graduate premium (lifetime earnings above non-graduate)', 'n/a', '+40%', '+85%'],
          ['Adult literacy rate (%)', '85%', '95%', '99%'],
          ['R&D as % of GDP', '1.8%', '2.1%', '2.6%']
        ],
        question: 'Which conclusion about positive externalities and government intervention in education is <strong>best supported</strong> by the data?',
        opts: [
          'Sustained government investment in education (rising spending + raised school leaving age) correlates with large private and social returns – consistent with correcting positive externality underproduction',
          'Rising graduate premiums prove education is purely a private good – no positive externalities justify government provision',
          'Education spending rising to 5.8% of GDP shows government has over-corrected the externality and is now wasting public money',
          'The data prove that compulsory education is more effective than subsidies – the school leaving age rise is the only factor that matters'
        ],
        ans: 0,
        exp: 'The data show consistent expansion of education provision (spending and leaving age) alongside large returns: rising graduate premium (+85% lifetime earnings by 2022) demonstrates the private return, while rising R&D (a knowledge spillover proxy) and adult literacy suggest positive externalities are being realised. The correlation is consistent with positive externality theory – government intervention increasing provision toward the social optimum generates both private and social returns. Option B ignores externalities and only considers private returns. Option C assumes efficiency without evidence. Option D ignores the compound effect of spending, age, and curriculum changes.'
      },

      /* 10 – Multi-select: evaluation of positive externality policy */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of government intervention to correct positive externalities?',
        opts: [
          'Positive externalities cause market underproduction relative to the social optimum',
          'While subsidising education corrects the positive externality argument for underproduction, it may simultaneously create an information failure argument: subsidised degrees at zero marginal cost may lead students to make poor course choices without price signals to guide allocation – suggesting that free provision may correct one market failure while introducing another',
          'Education subsidies always increase economic growth',
          'The case for vaccinating the entire population rests on herd immunity – but this "natural public good" argument is strongest when vaccination coverage has high marginal returns to disease suppression and weakest when coverage is already near the herd immunity threshold, since marginal external benefit falls as coverage rises, making further subsidies progressively less cost-effective',
          'Positive externalities justify government intervention in education and healthcare',
          'R&D subsidies address knowledge spillover externalities, but the optimal subsidy level is unknowable in practice because the value of future knowledge spillovers cannot be measured ex ante – suggesting that flat-rate R&D tax credits (administratively simple) are the pragmatic second-best to an impossible first-best Pigouvian subsidy'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies a paradox – free education solves one failure but may introduce an allocation failure through absent price signals; this is a two-sided evaluation reaching a qualified conclusion. D: limits the vaccination subsidy argument to the specific context where marginal external benefit is high – noting it weakens as coverage rises; this is context-dependent evaluation. F: identifies the measurement impossibility as the key practical limitation of Pigouvian R&D subsidies and concludes that simple tax credits are the pragmatic second-best – a realistic policy conclusion. A and E are descriptions; C is an unsupported overclaim.'
      }

    ]
  };

})();
