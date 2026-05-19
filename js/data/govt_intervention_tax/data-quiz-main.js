(function () {

  window.ECONOS_QUIZ = {
    id:       'govt_intervention_tax_main',
    topicId:  'govt_intervention_tax_main',
    title:    'Government Intervention: Taxes',
    subtitle: 'Theme 1.17 \xb7 Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering indirect tax mechanics, the tax diagram, Pigouvian taxes, tax incidence, real-world UK examples, and evaluation of taxation as a market failure correction tool. Mixed formats testing both diagram analysis and evaluative writing skills.',
    shortNames: {
      'govt_intervention_tax_1': 'How taxes work',
      'govt_intervention_tax_2': 'Tax diagram',
      'govt_intervention_tax_3': 'Pigouvian taxes',
      'govt_intervention_tax_4': 'Real-world examples',
      'govt_intervention_tax_5': 'Tax incidence',
      'govt_intervention_tax_6': 'Evaluation',
      'govt_intervention_tax_7': 'Tax vs other tools'
    },

    questions: [

      /* 1 — mcq: specific vs ad valorem */
      { type: 'mcq',
        stem: 'The UK government levies a <strong>specific tax</strong> of 53p per litre of petrol and a <strong>20% ad valorem tax</strong> (VAT) on most consumer goods. Which statement correctly distinguishes the effect of each tax on a supply-and-demand diagram?',
        opts: [
          'A specific tax causes a parallel leftward shift of the supply curve; an ad valorem tax causes the supply curve to pivot (rotating leftward, with a larger shift at higher prices)',
          'Both taxes cause an identical parallel leftward shift; the only difference is the name given to each tax',
          'A specific tax shifts the demand curve left; an ad valorem tax shifts the supply curve right',
          'An ad valorem tax has no effect on the supply curve because it is a percentage; only specific taxes change supply'
        ],
        ans: 0,
        exp: 'A <strong>specific (unit) tax</strong> adds a fixed money amount to every unit, regardless of price &mdash; this produces a <em>parallel</em> leftward shift: the new supply curve is exactly the same shape, displaced upward by the tax amount. An <strong>ad valorem tax</strong> is a percentage of the price: the absolute tax is larger at higher prices and smaller at lower prices. This causes the supply curve to <em>pivot</em> (rotate outward) rather than shift uniformly. For exam diagrams, specific taxes are usually simpler to draw and examine. VAT at 20% means a good costing &#163;100 bears &#163;20 tax; one costing &#163;10 bears only &#163;2.'
      },

      /* 2 — diagram_interp: tax diagram areas */
      { type: 'diagram_interp',
        stem: 'A specific tax of &#163;t is imposed on cigarettes. Before the tax: equilibrium at P1, Q1. After the tax: new equilibrium at P2, Q2. Producers receive P3 = P2 &minus; t.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="280" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="280" x2="400" y2="280" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="298" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="240" x2="360" y2="80" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="80" fill="#2563EB" font-size="12" font-weight="700">D</text><line x1="80" y1="80" x2="370" y2="240" stroke="#1FB574" stroke-width="2.5"/><text x="373" y="240" fill="#1FB574" font-size="12" font-weight="700">S</text><line x1="80" y1="55" x2="360" y2="215" stroke="#EC2D68" stroke-width="2.5" stroke-dasharray="5,3"/><text x="363" y="215" fill="#EC2D68" font-size="12" font-weight="700">S+t</text><circle cx="220" cy="160" r="5" fill="#0B1426"/><text x="225" y="158" fill="#0B1426" font-size="10">Q1,P1</text><circle cx="195" cy="140" r="5" fill="#F5B800"/><text x="200" y="138" fill="#F5B800" font-size="10">Q2,P2</text><line x1="55" y1="140" x2="195" y2="140" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="55" y1="165" x2="195" y2="165" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="195" y1="140" x2="195" y2="280" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><text x="38" y="144" fill="#F5B800" font-size="10" text-anchor="end" font-weight="700">P2</text><text x="38" y="162" fill="#0B1426" font-size="10" text-anchor="end" font-weight="700">P1</text><text x="38" y="170" fill="#EC2D68" font-size="10" text-anchor="end" font-weight="700">P3</text></svg>',
        caption: 'P2 = price paid by consumers after tax. P3 = price received by producers after tax. P1 = original equilibrium price. Q2 = post-tax quantity.',
        question: 'Which area on the diagram represents the <strong>deadweight welfare loss</strong> caused by the tax?',
        opts: [
          'The triangle between Q2 and Q1, bounded above by the demand curve and below by the original supply curve &mdash; surplus that neither consumers, producers, nor the government receive',
          'The rectangle between P2 and P3 up to quantity Q2 &mdash; this is the government\'s tax revenue',
          'The entire area between the two supply curves from zero to Q2 &mdash; this represents consumer losses from higher prices',
          'The triangle above P2 under the demand curve &mdash; this is the remaining consumer surplus after the tax'
        ],
        ans: 0,
        exp: 'The <strong>deadweight welfare loss (DWL)</strong> is the value of transactions that no longer occur because the tax has raised the price. It is the triangle between Q2 and Q1, bounded by the demand curve (consumer willingness to pay) above and the original supply curve (producer marginal cost) below. These are trades that would have been mutually beneficial but are prevented by the tax. The rectangle between P2 and P3 up to Q2 is <strong>tax revenue</strong> &mdash; transferred to the government, not lost. The DWL is the only area that disappears entirely from the economy.'
      },

      /* 3 — elastic_sort: tax incidence */
      { type: 'elastic_sort',
        stem: 'For each market scenario, classify who bears the <strong>greater share</strong> of a tax &mdash; consumers or producers.',
        categories: ['consumers', 'producers'],
        categoryLabels: ['Consumers bear more', 'Producers bear more'],
        goods: [
          { icon: '🚬', label: 'Cigarettes: inelastic demand (PED = -0.3), elastic supply', note: '', ans: 'consumers' },
          { icon: '💎', label: 'Luxury watches: elastic demand (PED = -2.1), inelastic supply', note: '', ans: 'producers' },
          { icon: '⛽', label: 'Petrol: very inelastic demand (PED = -0.1), global supply (very elastic)', note: '', ans: 'consumers' },
          { icon: '🌹', label: 'Cut flowers: elastic demand (PED = -1.8), elastic supply', note: '', ans: 'consumers' },
          { icon: '🏠', label: 'Rental property: inelastic demand, inelastic supply (PES = 0.2)', note: '', ans: 'consumers' },
          { icon: '✈️', label: 'Business-class flights: highly elastic demand (PED = -3.0), capacity-constrained supply', note: '', ans: 'producers' }
        ],
        exp: 'The <strong>general incidence rule</strong>: the less price-elastic side of the market bears a greater share of the tax burden. <strong>Consumers bear more</strong> when demand is inelastic (they cannot easily substitute) and supply is elastic (producers can exit freely). <strong>Producers bear more</strong> when demand is elastic (consumers switch at higher prices) and supply is inelastic (producers cannot easily exit). Cut flowers: even though both curves are elastic, with equal elasticities the split is roughly 50:50 &mdash; consumers still bear slightly more if supply is marginally more elastic. Business-class: airlines cannot easily fill seats; elastic demand forces them to absorb much of the tax.'
      },

      /* 4 — calculation: sugar levy revenue */
      { type: 'calculation',
        context: 'The UK Soft Drinks Industry Levy charges <strong>18p per litre</strong> for drinks with 5&ndash;8g sugar/100ml and <strong>24p per litre</strong> for drinks above 8g/100ml. In 2022, UK consumers bought <strong>1.2 billion litres</strong> at the higher tier and <strong>0.8 billion litres</strong> at the lower tier.',
        working: [
          'Step 1: revenue from the higher tier (>8g/100ml)',
          '1,200,000,000 \xd7 &#163;0.24 = &#163;288,000,000',
          'Step 2: revenue from the lower tier (5-8g/100ml)',
          '800,000,000 \xd7 &#163;0.18 = &#163;144,000,000',
          'Step 3: total levy revenue',
          '&#163;288m + &#163;144m = &#163;432,000,000',
          'Note: many producers reformulated below the 5g threshold to pay zero levy'
        ],
        stem: 'Based on the data, what is the approximate total annual revenue raised by the Soft Drinks Industry Levy?',
        opts: [
          { ped: '&#163;432 million', typ: 'Higher tier: 1.2bn \xd7 &#163;0.24 = &#163;288m. Lower tier: 0.8bn \xd7 &#163;0.18 = &#163;144m. Total = &#163;432m.', rev: 'Multiply volumes by the respective levy rates' },
          { ped: '&#163;288 million', typ: 'Only counted the higher tier revenue; omitted the lower tier', rev: 'Add both tier revenues together' },
          { ped: '&#163;336 million', typ: 'Applied an average rate of 21p/litre to total 1.6bn litres &mdash; incorrect averaging', rev: 'Apply each rate to its own volume, then sum' },
          { ped: '&#163;504 million', typ: 'Applied the 24p rate to all 2bn litres &mdash; did not use the lower tier rate', rev: 'Use the correct rate for each tier separately' }
        ],
        ans: 0,
        exp: 'Higher tier (above 8g/100ml): 1.2 billion litres &times; &#163;0.24 = <strong>&#163;288 million</strong>. Lower tier (5&ndash;8g/100ml): 0.8 billion litres &times; &#163;0.18 = <strong>&#163;144 million</strong>. Total levy revenue: <strong>&#163;432 million</strong>. In practice, the levy raised less than projected because many manufacturers reformulated drinks below the 5g/100ml threshold (zero levy) &mdash; this reformulation was the intended behavioural effect. The sugar levy is an unusual tax where the revenue-maximising outcome (no reformulation) conflicts with the policy-maximising outcome (full reformulation). Success is measured partly by how much revenue it does <em>not</em> raise.'
      },

      /* 5 — multi_select: Pigouvian tax conditions */
      { type: 'multi_select',
        stem: 'Which of the following conditions must hold for an indirect tax to function as an <strong>optimal Pigouvian tax</strong> that fully corrects a negative externality?',
        opts: [
          'The tax rate must equal the marginal external cost (MEC) at the socially optimal level of output Q*',
          'The tax must be levied on the exact activity generating the externality, not on a proxy good',
          'The government must be able to accurately measure the MEC &mdash; which may vary by location and firm',
          'The demand for the good must be perfectly elastic so the tax reduces quantity significantly',
          'The tax should be set as high as possible to maximise government revenue',
          'Revenue from the tax must be spent on correcting the externality to make the tax "optimal"'
        ],
        correct: [0, 1, 2],
        exp: 'Options A, B, and C are necessary conditions. <strong>Tax rate = MEC at Q*</strong>: this precisely offsets the externality, shifting MPC up to MSC and achieving the social optimum. <strong>Taxing the externality-generating activity</strong>: a tax on output when only some output is polluting over-taxes clean production and under-taxes dirty production. <strong>Accurate MEC measurement</strong>: if MEC is mis-measured, the tax corrects too little (under-tax) or over-corrects (over-tax) &mdash; both create welfare loss. Option D is wrong: inelastic demand limits quantity reduction but the tax can still be Pigouvian if set at MEC. Options E and F are wrong: revenue maximisation and hypothecation are separate considerations unrelated to theoretical optimality.'
      },

      /* 6 — odd_one_out */
      { type: 'odd_one_out',
        stem: 'Three of these are valid <strong>criticisms of using indirect taxes</strong> to correct negative externalities. Which is the ODD ONE OUT?',
        items: [
          { icon: '📉', label: 'Regressive: energy and fuel taxes take a higher share of income from low-income households', note: '' },
          { icon: '🎯', label: 'Difficulty setting the optimal rate: MEC is uncertain and varies by context and firm', note: '' },
          { icon: '🔄', label: 'Dynamic efficiency: firms continually seek to innovate to reduce their tax liability', note: '' },
          { icon: '🚫', label: 'Risk of evasion and black markets, particularly for high-tax goods such as tobacco', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is option C &mdash; <strong>dynamic efficiency is an advantage, not a criticism</strong> of indirect taxes. Because firms face a continuing cost per unit, they have an ongoing incentive to invest in cleaner technology that reduces their tax liability. This makes taxes more efficient than equivalent regulations in the long run. Options A, B, and D are all genuine criticisms: <strong>regressivity</strong> (equity problem), <strong>information requirement</strong> (setting the optimal rate), and <strong>evasion risk</strong> (especially for goods with high per-unit tax like cigarettes).'
      },

      /* 7 — para_fill: tax incidence paragraph */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about tax incidence by selecting the correct word or phrase.',
        anchor: 'The economic incidence of a tax differs from its legal incidence — what matters is who ultimately bears the cost.',
        para: 'When a specific tax is imposed on a good, the [1] curve shifts leftward by the amount of the tax. The new equilibrium price is [2] than the pre-tax price, but by [3] than the full tax. The difference between what consumers now pay and what producers now receive is the [4] amount per unit. The proportion of the tax borne by consumers depends on the relative [5] of demand and supply. If demand is very [6], consumers bear most of the tax because they [7] find a substitute when prices rise.',
        blanks: [
          { id: 1, opts: ['supply', 'demand', 'marginal cost', 'marginal revenue'], ans: 0 },
          { id: 2, opts: ['higher', 'lower', 'unchanged', 'negative'], ans: 0 },
          { id: 3, opts: ['less', 'more', 'exactly the same', 'twice'], ans: 0 },
          { id: 4, opts: ['tax', 'subsidy', 'profit', 'cost'], ans: 0 },
          { id: 5, opts: ['elasticities', 'incomes', 'preferences', 'costs'], ans: 0 },
          { id: 6, opts: ['inelastic', 'elastic', 'unit elastic', 'perfectly elastic'], ans: 0 },
          { id: 7, opts: ['cannot', 'can easily', 'always', 'never want to'], ans: 0 }
        ],
        exp: '(1) <strong>Supply</strong>: the tax raises the cost of production, shifting supply left. (2) <strong>Higher</strong>: the consumer price rises. (3) <strong>Less</strong>: price rises by less than the full tax &mdash; producers absorb some of it. (4) <strong>Tax</strong>: the gap between consumer price and producer price equals the per-unit tax. (5) <strong>Elasticities</strong>: incidence depends on relative price responsiveness. (6) <strong>Inelastic</strong>: if consumers cannot substitute, they absorb the tax as a price rise. (7) <strong>Cannot</strong>: lack of alternatives means consumers must continue buying despite higher prices.'
      },

      /* 8 — diagnostic_pair */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"To what extent is taxation the most effective policy for correcting negative externalities?"</em> Which student gives the stronger answer?',
        students: [
          { name: 'Fatima', badge: 'Candidate A',
            answer: 'Taxation is effective because it internalises the externality through price signals, preserves consumer choice, and raises revenue for green investment. The UK\'s landfill tax (&#163;102.10/tonne) has driven a significant reduction in landfill use as firms found it cheaper to reduce and recycle waste than pay the tax &mdash; the price signal worked. However, taxation may be less effective than regulation when: (1) the MEC is steeply rising near dangerous thresholds (tipping point risk justifies quantity certainty via cap-and-trade or regulation over price certainty from a tax); (2) demand is highly inelastic (cigarettes PED &#8776; -0.3) &mdash; a large tax is needed to achieve a small quantity reduction. Regulation offers a firm standard (e.g. banning petrol cars by 2035) &mdash; certain outcome but inflexible and may be inefficient. On balance, for large-scale externalities like CO2, a hybrid approach &mdash; carbon tax plus regulatory floor &mdash; is likely most effective. Taxation alone is unlikely to be sufficient for irreversible, catastrophic externalities.'
          },
          { name: 'Ben', badge: 'Candidate B',
            answer: 'Taxation is a good way to correct negative externalities because it makes the person creating the pollution pay for it. This is the polluter pays principle. Taxes can also raise money for the government which can be used for public services. However, taxes are not always the best policy. Regulation can work better if you need to stop an activity completely, like banning a dangerous chemical. Subsidies can be used to encourage positive externalities instead. Information campaigns can change behaviour without using taxes. So whether taxation is most effective depends on the specific externality &mdash; for some things like cigarettes, taxes have successfully reduced consumption, while for others like plastic bags a simple charge of 5p was very effective. Overall, taxation is one of the best tools but should be used alongside other policies.'
          }
        ],
        ans: 0,
        exp: '<strong>Fatima</strong> gives the stronger answer. She applies analytical conditions to the effectiveness of taxation: tipping point logic, Weitzman\'s rule (implicit), and specific UK data (landfill tax rate, petrol ban). Critically, she identifies <em>when</em> regulation outperforms taxation &mdash; conditional evaluation is the hallmark of Level 4. Ben lists policies correctly but does not analyse the conditions under which each is superior. He uses examples (5p plastic bag charge) but without the analytical framework connecting elasticity, DWL, or irreversibility to the choice of instrument. Ben accesses Level 2&ndash;3; Fatima Level 4.'
      },

      /* 9 — data_table */
      { type: 'data_table',
        stem: 'The table shows data on UK tobacco duty and smoking prevalence.',
        headers: ['Year', 'Tobacco duty (per 20 cigarettes)', 'Average retail price', 'Adult smoking rate (%)'],
        rows: [
          ['2000', '&#163;2.49', '&#163;4.10', '27%'],
          ['2005', '&#163;3.28', '&#163;5.20', '24%'],
          ['2010', '&#163;4.51', '&#163;6.70', '20%'],
          ['2015', '&#163;5.89', '&#163;8.80', '18%'],
          ['2022', '&#163;7.90', '&#163;13.50', '13%']
        ],
        question: 'Which evaluation of the tobacco tax is most consistent with all the data in the table?',
        opts: [
          'Rising tobacco duty has contributed to a decline in smoking prevalence, but the increasingly large gap between duty and retail price in later years may reflect diminishing returns as remaining smokers have highly inelastic demand',
          'The tobacco tax has completely failed because smoking is still legal and 13% of adults still smoke in 2022',
          'Tobacco duty is regressive but this is irrelevant to its effectiveness as a corrective tax because health externalities are large',
          'The data proves that tobacco duty alone can eliminate smoking if the tax is raised high enough'
        ],
        ans: 0,
        exp: 'The data support option A. Smoking fell from 27% (2000) to 13% (2022) as prices rose sharply &mdash; consistent with some price elasticity. However, the gap between duty and retail price grew substantially (duty was ~61% of retail price in 2000; ~58% in 2022, with retail price more than trebling). This suggests that as the smoking rate falls, remaining smokers are increasingly addicted and price-inelastic &mdash; diminishing marginal effectiveness of further tax rises. Option B sets an unrealistic benchmark. Option C ignores the regressivity issue which is a valid policy concern even if the externality justification remains. Option D overstates the evidence; a small highly-addicted minority may remain.'
      },

      /* 10 — chain: Pigouvian tax transmission */
      { type: 'chain',
        stem: 'The government introduces a Pigouvian tax on a good that generates a negative externality. Place these events in the correct logical order.',
        items: [
          { label: 'Market equilibrium shifts from Q1 to Q* (socially optimal output); deadweight welfare loss eliminated', note: '' },
          { label: 'Tax raises production cost; supply curve shifts leftward by the tax amount', note: '' },
          { label: 'Government identifies negative externality: MPC &lt; MSC (market over-produces relative to social optimum)', note: '' },
          { label: 'Some firms invest in cleaner technology to reduce their per-unit tax liability', note: '' },
          { label: 'Tax set equal to MEC at Q*; producers now face full social cost', note: '' },
          { label: 'Government collects tax revenue; uses proceeds to fund affected households or clean technology', note: '' }
        ],
        correctOrder: [2, 4, 1, 0, 3, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Government identifies the market failure: MPC &lt; MSC &mdash; market over-produces.<br>2. Tax set equal to MEC at the social optimum Q*.<br>3. Supply shifts left by the tax amount &mdash; producers face higher cost per unit.<br>4. New equilibrium at Q* &mdash; socially optimal; DWL eliminated.<br>5. Firms invest in clean technology to reduce tax liability (dynamic efficiency).<br>6. Revenue recycled for welfare purposes.<br><br>Steps 5 and 6 can occur concurrently after step 4. The sequence demonstrates that Pigouvian taxation achieves both <em>static efficiency</em> (correct output level) and <em>dynamic efficiency</em> (innovation incentive) &mdash; two reasons it is theoretically superior to command-and-control regulation.'
      }

    ]
  };

})();
