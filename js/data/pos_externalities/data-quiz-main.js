(function () {

  window.ECONOS_QUIZ = {
    id:       'pos_externalities_main',
    topicId:  'pos_externalities_main',
    title:    'Positive Externalities',
    subtitle: 'Theme 1.13 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the MSB/MPB diagram, underconsumption and DWL, education and vaccination as canonical examples, merit goods, subsidies versus public provision, and evaluation of government policy. Mixed formats designed to stretch analysis and evaluation skills.',
    shortNames: {
      'pos_externalities_1': 'What is a positive externality?',
      'pos_externalities_2': 'The positive externality diagram',
      'pos_externalities_3': 'Education externalities',
      'pos_externalities_4': 'Healthcare & vaccination',
      'pos_externalities_5': 'Policy responses',
      'pos_externalities_6': 'Merit goods',
      'pos_externalities_7': 'Subsidies vs public provision'
    },

    questions: [

      /* 1 — MCQ: MSB framework */
      { type: 'mcq',
        stem: 'A vaccination programme has a private benefit (protection for the individual) and an external benefit (herd immunity reducing transmission to unvaccinated third parties). Which statement correctly applies the MSB framework to vaccination demand?',
        opts: [
          'MSB &gt; MPB because the external benefit (herd immunity) is not captured by the individual; the free market produces less vaccination than the socially optimal level',
          'MSB = MPB because individuals who choose vaccination receive all the benefits; third parties gain nothing when only some people are vaccinated',
          'MSB &lt; MPB because the social cost of producing vaccines (MPC) exceeds the private benefit, creating a welfare loss from over-vaccination',
          'The free market achieves the socially optimal vaccination rate because individuals with rational expectations will internalise the external benefit of herd immunity'
        ],
        ans: 0,
        exp: 'Vaccination creates a positive consumption externality: when an individual is vaccinated, third parties (unvaccinated people, immunocompromised individuals who cannot be vaccinated) benefit through reduced transmission probability. This external benefit (MEB = herd immunity effect) means <strong>MSB &gt; MPB</strong>. The individual deciding whether to vaccinate considers only their private benefit &#8212; protection and health value to themselves. They do not account for the external benefit to others. The free market demand (MPB) understates total social demand (MSB), resulting in <strong>underconsumption</strong> relative to the socially optimal quantity (where MSB = MSC). This justifies free vaccination programmes, subsidies, or even compulsory vaccination.'
      },

      /* 2 — elastic_sort: education externalities */
      { type: 'elastic_sort',
        stem: 'Classify each benefit of education as a <strong>private benefit (MPB)</strong> or <strong>external benefit (MEB)</strong>.',
        categories: ['mpb', 'meb'],
        categoryLabels: ['Private benefit (MPB)', 'External benefit (MEB)'],
        goods: [
          { icon: '&#128181;', label: 'Higher lifetime earnings for the educated individual', note: '', ans: 'mpb' },
          { icon: '&#127968;', label: 'Increased national tax revenues from a more productive workforce', note: '', ans: 'meb' },
          { icon: '&#128218;', label: 'Greater personal fulfilment, critical thinking, and cognitive flexibility', note: '', ans: 'mpb' },
          { icon: '&#128200;', label: 'Faster adoption of new technology across the economy as skilled workers diffuse knowledge', note: '', ans: 'meb' },
          { icon: '&#9878;', label: 'Reduced crime rates associated with higher educational attainment', note: '', ans: 'meb' },
          { icon: '&#128138;', label: 'Improved health literacy and longer personal life expectancy', note: '', ans: 'mpb' }
        ],
        exp: '<strong>Private benefits (MPB)</strong> are enjoyed directly by the student: higher wages, personal fulfilment, health literacy. These are reflected in individuals\' willingness to pay for education. <strong>External benefits (MEB)</strong> flow to third parties not party to the education transaction: the state (higher tax revenues from more productive workers), other firms (knowledge spillovers from skilled labour), and society (lower crime, better civic institutions). Because individuals deciding on education consider only MPB, the free market produces below the socially optimal level (where MSB = MSC). The gap between MPB and MSB is the MEB &#8212; and this is what justifies state education funding, student subsidies, and free schooling.'
      },

      /* 3 — diagram_interp: positive consumption externality */
      { type: 'diagram_interp',
        stem: 'The diagram shows a market with a positive consumption externality.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="290" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="290" x2="400" y2="290" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="308" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="160" x2="380" y2="270" stroke="#1FB574" stroke-width="2.5"/><text x="383" y="270" fill="#1FB574" font-size="12" font-weight="700">MSC=MPC</text><line x1="350" y1="50" x2="80" y2="240" stroke="#2563EB" stroke-width="2.5"/><text x="70" y="240" fill="#2563EB" font-size="12" font-weight="700">MPB</text><line x1="390" y1="50" x2="120" y2="240" stroke="#EC2D68" stroke-width="2.5"/><text x="110" y="240" fill="#EC2D68" font-size="12" font-weight="700">MSB</text><circle cx="213" cy="231" r="5" fill="#2563EB"/><circle cx="254" cy="237" r="5" fill="#F5B800"/><line x1="213" y1="231" x2="213" y2="290" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><line x1="254" y1="237" x2="254" y2="290" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><text x="200" y="308" fill="#2563EB" font-size="11" font-weight="700">Qm</text><text x="244" y="308" fill="#F5B800" font-size="11" font-weight="700">Qo</text></svg>',
        caption: 'MSC = MPC (green), MPB = private demand (blue), MSB = social demand (red). Qm = market output; Qo = socially optimal output.',
        question: 'What does the gap between Qm and Qo represent, and how would a subsidy address it?',
        opts: [
          'The gap represents underconsumption &#8212; the free market produces too little because individuals ignore the external benefit (MEB). A subsidy to consumers shifts MPB rightward to MSB, raising market output to Qo.',
          'The gap represents overproduction &#8212; the market produces too much because MPC is below MSC. A tax is needed to shift supply left to the optimal level.',
          'The gap represents the deadweight welfare loss from a Pigouvian tax that has been imposed incorrectly on a positive externality good.',
          'The gap is zero &#8212; when MSC = MPC (no production externality), the market always achieves the socially optimal output regardless of the demand side.'
        ],
        ans: 0,
        exp: 'With a positive consumption externality, <strong>MSB &gt; MPB</strong>: the free market demand (MPB) lies below the true social demand (MSB). Market equilibrium (Qm) is where MPB = MSC &#8212; below the socially optimal output (Qo) where MSB = MSC. The gap Qm to Qo represents <strong>underconsumption</strong>: units between Qm and Qo have MSB &gt; MSC (society would benefit from producing them), but the market does not produce them because MPB &lt; MSC at those quantities. The <strong>deadweight welfare loss</strong> is the triangle between Qm and Qo, bounded above by MSB and below by MSC. A subsidy equal to MEB shifts the effective demand from MPB to MSB, closing the gap and achieving Qo. This is precisely the logic behind free school meals, vaccination campaigns, and student loan subsidies.'
      },

      /* 4 — multi_select: merit goods */
      { type: 'multi_select',
        stem: 'Which of the following correctly describe why a good is classified as a <strong>merit good</strong>?',
        opts: [
          'The good generates positive externalities &#8212; third parties benefit and MSB &gt; MPB',
          'Consumers systematically underestimate the private benefit due to present bias or information failure &#8212; true MPB exceeds perceived MPB',
          'The good is provided free by the government, which automatically makes it a merit good',
          'The good is non-rival and non-excludable &#8212; it is consumed simultaneously by all',
          'Society judges that consumption should be higher than individuals\' own choices would produce &#8212; a normative dimension to intervention',
          'The good is over-consumed relative to the social optimum &#8212; the government should tax it to reduce demand'
        ],
        correct: [0, 1, 4],
        exp: 'A merit good is characterised by: (A) <strong>Positive externalities</strong>: MSB &gt; MPB &#8212; market underprovides relative to social optimum. (B) <strong>Information failure / present bias</strong>: individuals underestimate the private benefit of education or healthcare (discounting future gains, insufficient information about complex medical decisions). This is a separate justification: even without externalities, information failure creates underconsumption. (E) <strong>Normative judgement</strong>: society collectively decides these goods should be consumed more &#8212; this is why merit goods are a contested concept (whose value judgement prevails?). Option C is incorrect: government provision is the <em>response</em> to the merit good problem, not the definition. Option D describes a public good (non-rival, non-excludable) &#8212; a different category. Option F describes a <em>demerit</em> good &#8212; the opposite.'
      },

      /* 5 — para_fill: vaccination and herd immunity */
      { type: 'para_fill',
        stem: 'Complete the paragraph about vaccination as a positive externality.',
        anchor: 'Vaccination is the clearest example of a positive consumption externality.',
        para: 'When an individual is vaccinated, they gain private [1] against a disease. Additionally, they become less likely to [2] the disease to others &#8212; an external benefit known as herd [3]. Because this benefit flows to [4] parties who do not pay for the vaccination, MSB [5] MPB. The free market will produce [6] vaccination than the socially optimal level. Government corrects this by providing vaccines [7] at point of use or through subsidies to achieve the level where MSB = MSC.',
        blanks: [
          { id: 1, opts: ['immunity', 'income', 'insurance', 'investment'], ans: 0 },
          { id: 2, opts: ['transmit', 'acquire', 'detect', 'produce'], ans: 0 },
          { id: 3, opts: ['immunity', 'identity', 'inertia', 'independence'], ans: 0 },
          { id: 4, opts: ['third', 'second', 'private', 'excluded'], ans: 0 },
          { id: 5, opts: ['exceeds', 'equals', 'falls below', 'doubles'], ans: 0 },
          { id: 6, opts: ['less', 'more', 'exactly the right amount of', 'no'], ans: 0 },
          { id: 7, opts: ['free', 'cheaply', 'expensively', 'slowly'], ans: 0 }
        ],
        exp: '(1) <strong>Immunity</strong>: the private benefit &#8212; the individual is protected from the disease. (2) <strong>Transmit</strong>: the external benefit mechanism &#8212; a vaccinated person is less likely to spread the disease to others. (3) <strong>Immunity</strong> (herd): when enough of the population is immune, transmission chains break down &#8212; even unvaccinated people benefit. (4) <strong>Third</strong> parties: people who did not pay for or receive the vaccination still benefit from reduced transmission risk. (5) <strong>Exceeds</strong>: MSB &gt; MPB &#8212; total social benefit includes external benefit of herd immunity. (6) <strong>Less</strong>: underconsumption &#8212; market output &lt; socially optimal output (where MSB = MSC). (7) <strong>Free</strong> at point of use: removing the price barrier is the most direct way to raise vaccination rates to the socially optimal level, as shown by NHS vaccination programmes.'
      },

      /* 6 — odd_one_out: positive externality goods */
      { type: 'odd_one_out',
        stem: 'Three of these goods generate <strong>significant positive externalities</strong> justifying government intervention. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127979;', label: 'Primary and secondary education &#8212; produces skilled workforce and civic benefits for all', note: '' },
          { icon: '&#128138;', label: 'Public vaccination programmes &#8212; creates herd immunity benefiting non-vaccinated individuals', note: '' },
          { icon: '&#128665;', label: 'Premium luxury cars &#8212; consumed by wealthy individuals with no spillover benefits to third parties', note: '' },
          { icon: '&#127807;', label: 'Urban parks and green spaces &#8212; provide clean air, wellbeing, and biodiversity benefits beyond park users', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>premium luxury cars</strong>. While car ownership may generate some network effects, luxury vehicles consumed by wealthy individuals generate negligible positive externalities &#8212; there is no significant MEB flowing to third parties. If anything, high-emissions vehicles generate negative externalities (pollution, congestion). Education, vaccination, and parks all have well-documented external benefits: education raises national productivity and reduces crime; vaccines create herd immunity; parks provide ecosystem services (air quality, flood management, biodiversity) and mental health benefits that extend far beyond paying visitors. These positive externalities provide the economic justification for public funding &#8212; which is absent for luxury cars.'
      },

      /* 7 — calculation: optimal subsidy */
      { type: 'calculation',
        context: 'In the market for apprenticeship training, the MPB to firms is &#163;8,000 per trainee per year. The MEB (external benefits from a more skilled workforce to other firms and the economy) is &#163;3,000 per trainee. The MSC (cost of training) is &#163;9,000 per trainee. The market provides 50,000 apprenticeships per year; the socially optimal level is 70,000.',
        working: [
          'MSB = MPB + MEB = &#163;8,000 + &#163;3,000 = &#163;11,000',
          'Market equilibrium: MPB = MSC &#8658; &#163;8,000 &lt; &#163;9,000, so market provides too few',
          'Actually: market provides where MPB (demand) = MSC (supply)',
          'Optimal subsidy to producer = MEB = &#163;3,000 per trainee',
          'This lowers effective MSC to &#163;9,000 &#8722; &#163;3,000 = &#163;6,000',
          'Or: subsidy to consumer = MEB &#8658; effective MPB rises to &#163;8,000 + &#163;3,000 = &#163;11,000 &#8658; market expands to 70,000'
        ],
        stem: 'What is the optimal subsidy per apprenticeship, and what does it achieve?',
        opts: [
          { ped: '&#163;3,000 per trainee; equal to MEB, the subsidy raises effective demand (or lowers effective cost) to achieve the socially optimal 70,000 apprenticeships', typ: 'Correct: subsidy = MEB bridges the gap between MPB and MSB', rev: 'Optimal subsidy = MEB at the socially optimal output level' },
          { ped: '&#163;9,000 per trainee; the full MSC must be subsidised to encourage firms to train at all', typ: 'Confuses the total cost with the external cost &#8212; firms already have incentive to train up to MPB = MSC; subsidy need only cover the external gap', rev: 'Firms will train if MPB covers their net cost; subsidy only needs to cover MEB' },
          { ped: '&#163;11,000 per trainee; the government should fund the full social benefit to maximise apprenticeship numbers', typ: 'Would over-correct: subsidising full MSB would encourage training beyond the optimal 70,000', rev: 'Optimal = where MSB = MSC after subsidy; not beyond' },
          { ped: '&#163;1,000 per trainee; the difference between MSC and MPB is all that is required', typ: '&#163;9,000 &#8722; &#163;8,000 = &#163;1,000 is the gap between MSC and MPB at market output &#8212; but optimal subsidy should equal MEB (&#163;3,000) to achieve Q-optimal', rev: 'The subsidy must shift the equilibrium to 70,000, not just make market output break even' }
        ],
        ans: 0,
        exp: 'The optimal Pigouvian subsidy equals <strong>MEB at the socially optimal output</strong>: &#163;3,000 per trainee. A producer subsidy of &#163;3,000 reduces the effective cost from &#163;9,000 to &#163;6,000, so firms now train where &#163;8,000 (MPB) &gt; &#163;6,000 (net MSC), expanding output toward 70,000. Alternatively, a consumer subsidy raises effective demand from &#163;8,000 to &#163;11,000 (= MSB), achieving the same outcome. In practice, the UK Apprenticeship Levy and government co-funding operate as producer subsidies of this type. The key economic principle: subsidy = MEB internalises the positive externality by making the market mimic what a social planner would choose.'
      },

      /* 8 — data_table: UK education spending and outcomes */
      { type: 'data_table',
        stem: 'The table shows data on UK education investment and economic outcomes.',
        headers: ['Cohort', 'State education spending (real, &#163;bn)', 'Graduate premium (&#163; lifetime earnings extra)', 'R&amp;D spending (% GDP)'],
        rows: [
          ['1980s cohort', '25', '150,000', '2.1%'],
          ['1990s cohort', '32', '200,000', '2.0%'],
          ['2000s cohort', '52', '280,000', '1.7%'],
          ['2010s cohort', '68', '320,000', '1.8%'],
          ['2020s cohort', '75', '350,000', '1.9%']
        ],
        question: 'What is the most analytically sound interpretation of these data in the context of positive externalities from education?',
        opts: [
          'Rising education spending is associated with a growing graduate premium (private benefit) and R&amp;D spending (a measure of the innovation externality) &#8212; consistent with positive externality theory, though causation is hard to establish',
          'The data conclusively prove that state education generates positive externalities &#8212; the graduate premium alone proves MSB &gt; MPB',
          'R&amp;D spending fell in the 2000s despite rising education spending &#8212; this definitively refutes the positive externality argument for education',
          'The graduate premium is an external benefit, not a private benefit &#8212; it flows to employers who benefit from a skilled workforce at no cost to them'
        ],
        ans: 0,
        exp: 'Option A is the most analytically sound. The <strong>graduate premium</strong> captures the <em>private</em> benefit of education (higher wages), not the external benefit &#8212; option D is incorrect. The R&amp;D share is an imperfect proxy for the <em>innovation spillover</em> externality from education &#8212; consistent with positive externality theory but affected by many other factors (tax incentives, sector mix). The R&amp;D dip in the 2000s (option C) likely reflects sector composition shifts (UK de-industrialisation) rather than a refutation of education externalities. Strong answers acknowledge: (i) the data show correlation, not causation; (ii) the graduate premium understates MSB because it excludes external benefits; (iii) measuring external benefits of education remains extremely difficult, which is why optimal subsidy calculation is inherently uncertain.'
      },

      /* 9 — diagnostic_pair: NHS as a response to positive externalities */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"To what extent is public provision the best policy response to positive externalities?"</em> Which student evaluates more effectively?',
        students: [
          { name: 'Olivia', badge: 'Candidate A',
            answer: 'Public provision (free at point of use, funded by taxation) directly solves underconsumption from positive externalities by removing the price barrier &#8212; maximising consumption toward the socially optimal level. The NHS illustrates this: by eliminating user charges for GP and hospital treatment, it avoids the underconsumption that characterised the pre-1948 UK healthcare market. The positive externalities from treating infectious diseases (preventing transmission) are fully internalised. However, public provision creates moral hazard: zero marginal cost to users encourages over-consumption of healthcare (trivial GP appointments; over-prescribing). This may push consumption <em>beyond</em> the social optimum, creating a welfare loss in the opposite direction. Subsidies (partial charges) can balance access and over-use. Moreover, public provision crowds out competition and innovation that private markets generate &#8212; evidence from US&#8211;UK comparisons suggests private healthcare sectors innovate faster in certain areas. The optimal policy depends on the size of the externality versus the moral hazard risk: for high-externality goods (vaccination), free provision clearly dominates; for complex elective procedures with smaller externalities, co-payments may be more efficient.'
          },
          { name: 'Harry', badge: 'Candidate B',
            answer: 'Public provision is a good policy for positive externalities because it means everyone can access the good regardless of their income. For healthcare, the NHS provides free treatment which means people will go to the doctor when they need to. This is better than a market system where poor people cannot afford healthcare. Subsidies could also be used but they might not help people who cannot afford to pay even the reduced price. Public provision ensures that everyone is included. However, there are some problems with public provision. It is expensive for the government and may lead to waiting lists. Taxes must rise to pay for it. Overall, public provision is usually the best policy for goods like healthcare and education because they have strong positive externalities and everyone should be able to access them.'
          }
        ],
        ans: 0,
        exp: '<strong>Olivia</strong> gives the stronger answer. She precisely links public provision to the mechanism (removing the price barrier &#8594; maximising consumption), uses the NHS as a specific institutional example, and then identifies the moral hazard counter-argument with the same rigour (zero marginal cost &#8594; over-consumption &#8594; welfare loss above optimal). She evaluates policy alternatives (subsidies with co-payments) and concludes conditionally &#8212; differentiating between high-externality goods (free provision optimal) and lower-externality goods (co-payments better). Harry makes valid points about equity but frames the argument as an equity issue rather than an efficiency one &#8212; not using the positive externality framework analytically. Olivia: Level 4; Harry: Level 2.'
      },

      /* 10 — chain: subsidy correcting underconsumption */
      { type: 'chain',
        stem: 'The government introduces a subsidy for university tuition fees to correct underconsumption from positive externalities. Place the sequence in the correct logical order.',
        items: [
          { label: 'Effective demand shifts from MPB toward MSB &#8212; more students find university financially viable', note: '' },
          { label: 'The external benefits of higher education (innovation, tax revenue, civic engagement) are better captured', note: '' },
          { label: 'Market underprovides university education: MPB &lt; MSB at market output; DWL triangle exists', note: '' },
          { label: 'Government introduces tuition fee subsidy equal to estimated MEB (external benefit per graduate)', note: '' },
          { label: 'University enrolment rises toward the socially optimal level; DWL is reduced', note: '' },
          { label: 'Long-run: higher graduate share of workforce raises national productivity; positive externalities materialise', note: '' }
        ],
        correctOrder: [2, 3, 0, 4, 1, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Market failure identified: MPB &lt; MSB &#8594; underconsumption and DWL.<br>2. Government introduces subsidy = MEB.<br>3. Effective demand rises (MPB + subsidy &#8594; MSB).<br>4. Enrolment rises toward Q-optimal; DWL closes.<br>5. External benefits (innovation, tax revenue) are realised.<br>6. Long-run productivity gains justify the subsidy cost.<br><br>This chain illustrates why the subsidy must be calibrated to MEB: too small and underconsumption persists (DWL remains); too large and over-consumption occurs (deadweight loss on the other side). The UK student loan system represents a partial subsidy &#8212; tuition is subsidised compared with full cost recovery, reflecting the positive externality argument, but students bear some private cost reflecting the large private benefit (graduate premium of &#163;300,000+).'
      }

    ]
  };

})();
