(function () {

  window.ECONOS_QUIZ = {
    id:       'info_gaps_main',
    topicId:  'info_gaps_main',
    title:    'Information Gaps',
    subtitle: 'Theme 1 &middot; Topic 3.4 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('info_gaps_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers information asymmetry, adverse selection, moral hazard, signalling, and market responses to information gaps',
    shortNames: [
      'Asymmetry MCQ', 'Adverse selection MCQ', 'Moral hazard MCQ', 'Types categorise',
      'Signalling match', 'Cause & effect', 'Para fill', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: information asymmetry */
      { type: 'mcq',
        id: 'q_ig_1',
        stem: 'Which statement best defines <strong>information asymmetry</strong> as a source of market failure?',
        opts: [
          'One party to a transaction has significantly more or better information than the other – causing the less-informed party to make suboptimal decisions and potentially leading to market collapse or inefficient outcomes',
          'Markets lack sufficient information to set prices – requiring government to step in and set prices centrally',
          'Consumers always have less information than firms about product quality – so all markets fail due to information gaps',
          'Information asymmetry only occurs in financial markets – product markets are fully transparent'
        ],
        ans: 0,
        exp: 'Information asymmetry occurs when one party (buyer or seller) has significantly better information than the other about quality, risk, or value. This can cause: <strong>adverse selection</strong> (selection of the wrong counterparty before the transaction – used cars, insurance); <strong>moral hazard</strong> (changed behaviour after the transaction when one party is insulated from consequences – insurance, banking); <strong>market thinning or collapse</strong> (as in Akerlof\'s Market for Lemons). Information asymmetry does not require the government to set prices – it can be addressed through disclosure regulation, signalling, warranties, and compulsory insurance.'
      },

      /* 2 – MCQ: adverse selection */
      { type: 'mcq',
        id: 'q_ig_2',
        stem: 'In the <strong>health insurance market</strong>, adverse selection arises because:',
        opts: [
          'Individuals know their own health status better than insurers – those in poor health disproportionately buy insurance, raising costs and potentially causing the insurance pool to collapse as healthy people opt out',
          'Insurance companies deliberately select high-risk customers to charge higher premiums and increase profits',
          'Healthy individuals adversely affect others by raising insurance premiums for everyone through excessive healthcare use',
          'Insurance companies have more information than consumers – leading them to systematically underprice risk'
        ],
        ans: 0,
        exp: 'Adverse selection is a <strong>pre-contract</strong> information problem: customers self-select based on private information the insurer doesn\'t have. Those who know they are high-risk (poor health, dangerous occupation) disproportionately buy insurance; low-risk (healthy) individuals opt out as premiums rise. The insurer, facing an increasingly risky pool, raises premiums further – driving out more healthy customers – potential "death spiral." Solutions: <strong>compulsory insurance</strong> (forces healthy and sick into same pool – National Insurance); <strong>genetic testing disclosure</strong>; <strong>community rating</strong> (same premium for all in NHS-style systems).'
      },

      /* 3 – MCQ: moral hazard */
      { type: 'mcq',
        id: 'q_ig_3',
        stem: 'Which example best illustrates <strong>moral hazard</strong>?',
        opts: [
          'A driver insured against all damages drives more recklessly than they would without insurance – their actions are hidden from the insurer who cannot monitor behaviour after the contract is signed',
          'A healthy person refuses to buy health insurance because premiums are too high – they are selecting against the market',
          'A firm knows its product is defective but continues selling because it holds more information than the consumer',
          'A government bails out a failing bank – the decision is made with full public transparency and democratic consent'
        ],
        ans: 0,
        exp: 'Moral hazard is a <strong>post-contract</strong> information problem: once insured (or protected), the insured party takes more risk than they would otherwise, because they no longer bear the full consequences. The insurer cannot perfectly monitor behaviour. Examples: fully-insured drivers taking more risks; banks taking excessive risks because government bailouts are expected (too-big-to-fail moral hazard); employees shirking when it is hard for managers to observe effort. Solutions: <strong>co-payments and deductibles</strong> (restore incentive for care); <strong>no-claims bonuses</strong>; <strong>performance-related pay</strong>; <strong>bank capital requirements</strong>.'
      },

      /* 4 – Categorise: adverse selection vs moral hazard */
      { type: 'categorise',
        id: 'q_ig_4',
        stem: 'Classify each example as <strong>adverse selection</strong> (pre-contract) or <strong>moral hazard</strong> (post-contract).',
        categories: ['Adverse selection', 'Moral hazard'],
        items: [
          { text: 'People with a history of back problems are more likely to buy income protection insurance', category: 'Adverse selection' },
          { text: 'After taking out contents insurance, a homeowner becomes less careful about locking doors', category: 'Moral hazard' },
          { text: 'Risky borrowers are more willing to accept high-interest loans than safe borrowers', category: 'Adverse selection' },
          { text: 'A bank takes excessively risky investments knowing the government will bail it out if it fails', category: 'Moral hazard' },
          { text: 'Smokers are more likely to apply for life insurance than non-smokers', category: 'Adverse selection' },
          { text: 'A patient over-consumes medical services because their employer pays all healthcare costs', category: 'Moral hazard' }
        ],
        exp: '<strong>Adverse selection</strong>: self-selection BEFORE the transaction based on private information the other party lacks – high-risk individuals select into insurance/loans. <strong>Moral hazard</strong>: changed behaviour AFTER the transaction when one party is protected from consequences – insured parties take more risk because they no longer bear full costs. Both arise from information asymmetry but at different stages of the transaction, requiring different corrective mechanisms.'
      },

      /* 5 – Match pairs: signalling mechanisms */
      { type: 'match_pairs',
        id: 'q_ig_5',
        stem: 'Match each signalling mechanism to how it reduces information asymmetry.',
        pairs: [
          { a: 'University degree', b: 'Signals productivity and ability to employers – costly to fake (Spence\'s signalling model)' },
          { a: 'Car warranty', b: 'Signals seller confidence in quality – low-quality sellers cannot afford to offer it' },
          { a: 'Brand reputation', b: 'Signals consistent quality built over time – costly to acquire, costly to lose' },
          { a: 'HPI car history check', b: 'Third-party information disclosure – reduces asymmetry by revealing hidden defects' },
          { a: 'Accountant audit', b: 'Third-party verification of financial information – reduces information gap for investors' },
          { a: 'Star ratings / reviews', b: 'Peer-generated information sharing – aggregates dispersed quality information' }
        ],
        exp: 'Signalling theory (Spence, 1973): high-quality sellers can credibly signal quality through costly actions that low-quality sellers cannot afford to replicate. A degree signals ability only if the cost (time, tuition) is higher than the wage gain for someone with low ability. A warranty signals car quality only if repair costs would bankrupt a seller of a defective car. Third-party mechanisms (audits, HPI checks, star ratings) reduce asymmetry differently – by generating or aggregating independent information rather than relying on the seller\'s own costly signal.'
      },

      /* 6 – Cause & effect: information failure consequences */
      { type: 'cause_effect',
        id: 'q_ig_6',
        stem: 'Match each information asymmetry scenario to its market consequence.',
        pairs: [
          { cause: 'Sellers of used cars know defects; buyers do not', effect: 'Adverse selection – market may only trade lemons; good cars withdrawn' },
          { cause: 'Insurance company cannot observe whether insured exercises or eats healthily', effect: 'Moral hazard – insured reduces healthy behaviour after buying coverage' },
          { cause: 'Consumers cannot assess the quality of medical treatment before receiving it', effect: 'Consumers rely on doctors\' recommendations – supplier-induced demand' },
          { cause: 'Firms know their own risk level but banks cannot distinguish them', effect: 'Adverse selection in credit markets – risky firms borrow more; safe firms opt out' },
          { cause: 'Auditors are paid by the firms they audit', effect: 'Conflict of interest – auditors may not report all problems to please clients' },
          { cause: 'Financial product complexity prevents retail investors from assessing risk', effect: 'Mis-selling – financial firms exploit information advantage' }
        ],
        exp: 'Information asymmetry leads to systematic market distortions: <strong>adverse selection</strong> (wrong counterparties selected); <strong>moral hazard</strong> (wrong post-contract behaviour); <strong>supplier-induced demand</strong> (experts recommend more of their own services – GPs, dentists, lawyers); <strong>mis-selling</strong> (financial products, PPI scandal – UK firms mis-sold payment protection insurance worth £36bn in claims). Each case justifies different regulatory responses: disclosure requirements, cooling-off periods, fiduciary duties, licensing of advisers.'
      },

      /* 7 – Para fill: Akerlof's lemons model */
      { type: 'para_fill',
        id: 'q_ig_7',
        stem: 'Complete the paragraph explaining Akerlof\'s Market for Lemons.',
        anchor: 'George Akerlof\'s 1970 paper showed that information asymmetry can cause markets to collapse entirely.',
        para: 'In the used car market, sellers know [1] their car is a good car or a "lemon." Buyers do not have this information, so they offer a price that reflects their [2] of getting a good car. This average price is [3] for sellers of good cars – they withdraw from the market. With [4] good cars in the market, buyers\' average offer falls further. In the worst case, this [5] selection spiral leads to complete market [6]. The solution is to reduce information [7]: through warranties (which [8] quality), or third-party inspection services like HPI that reveal [9] car history.',
        blanks: [
          { id: 1, opts: ['whether', 'when', 'how', 'why'], ans: 0 },
          { id: 2, opts: ['probability', 'certainty', 'preference', 'income'], ans: 0 },
          { id: 3, opts: ['too low', 'too high', 'optimal', 'sufficient'], ans: 0 },
          { id: 4, opts: ['fewer', 'more', 'equal numbers of', 'no'], ans: 0 },
          { id: 5, opts: ['adverse', 'positive', 'reverse', 'perfect'], ans: 0 },
          { id: 6, opts: ['collapse', 'equilibrium', 'efficiency', 'surplus'], ans: 0 },
          { id: 7, opts: ['asymmetry', 'regulation', 'supply', 'demand'], ans: 0 },
          { id: 8, opts: ['signal', 'hide', 'reduce', 'eliminate'], ans: 0 },
          { id: 9, opts: ['hidden', 'public', 'irrelevant', 'future'], ans: 0 }
        ],
        exp: '(1) <strong>Whether</strong> (sellers know the quality). (2) <strong>Probability</strong> of getting a good car – weighted average. (3) Price is <strong>too low</strong> for good sellers. (4) <strong>Fewer</strong> good cars remain. (5) <strong>Adverse</strong> selection spiral. (6) Market <strong>collapse</strong> – only lemons, or nothing. (7) Reduce information <strong>asymmetry</strong>. (8) Warranties <strong>signal</strong> quality credibly. (9) Reveal <strong>hidden</strong> defects. Akerlof won the 2001 Nobel Prize in Economics (with Spence and Stiglitz) for this work on asymmetric information.'
      },

      /* 8 – Odd one out: causes of information asymmetry */
      { type: 'odd_one_out',
        id: 'q_ig_8',
        stem: 'Three of these are genuine causes or examples of <strong>information asymmetry</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🚗', label: 'Used car seller knows the car\'s history; buyer does not', note: '' },
          { icon: '💊', label: 'A doctor knows which treatment is needed; the patient does not', note: '' },
          { icon: '📊', label: 'A rise in inflation means prices are higher for everyone across the economy', note: '' },
          { icon: '🏦', label: 'A borrower knows their risk of default; the lender cannot verify this', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>inflation</strong>. Rising prices affect everyone symmetrically – it is not a case of one party knowing more than another about quality or risk. It is a macroeconomic phenomenon, not an information asymmetry. The other three are classic information asymmetry cases: used cars (seller > buyer on quality); medical advice (doctor > patient on treatment need – supplier-induced demand risk); borrowing (borrower > lender on default risk – adverse selection in credit markets). Information asymmetry is specifically about one party having better information than the other about a relevant characteristic.'
      },

      /* 9 – Data table: PPI mis-selling (UK financial information failure) */
      { type: 'data_table',
        id: 'q_ig_9',
        stem: 'The table shows UK Payment Protection Insurance (PPI) mis-selling data.',
        headers: ['Year', 'PPI complaints upheld (000s)', 'FCA compensation paid (£bn cumulative)', 'Awareness of mis-selling (%)'],
        rows: [
          ['2010', '166', '0.4', '12%'],
          ['2013', '3,417', '10.5', '45%'],
          ['2016', '1,840', '24.1', '72%'],
          ['2019 (deadline)', '4,500', '36.0', '90%']
        ],
        question: 'What does the PPI data best illustrate about information asymmetry?',
        opts: [
          'PPI mis-selling was a large-scale information failure: banks exploited their information advantage over retail consumers, selling complex products consumers did not understand – £36bn in compensation represents a massive welfare loss from information asymmetry',
          'The data prove that financial regulation is always effective – the FCA eliminated PPI mis-selling rapidly',
          'Consumer awareness rising to 90% shows that information asymmetry resolved itself without government intervention',
          'The £36bn paid in compensation represents the social optimum – mis-selling is a small price for the benefits of financial innovation'
        ],
        ans: 0,
        exp: 'PPI is a case study in financial information asymmetry: banks knew exactly what PPI policies covered (often nothing for the customers sold them); retail consumers lacked the financial literacy to assess the product. The scale – £36bn compensation, affecting millions – shows how large information failures can be in complex markets. The FCA ultimately set a deadline (August 2019) and required banks to actively contact affected customers – an information disclosure intervention. Rising awareness (12% to 90%) reflects the success of FCA campaigns, not market self-correction. Option C is wrong – it required substantial regulatory intervention.'
      },

      /* 10 – Multi-select: evaluation of information gap policies */
      { type: 'multi_select',
        id: 'q_ig_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of policies to address information gaps?',
        opts: [
          'Information asymmetry causes adverse selection and moral hazard in markets',
          'Compulsory disclosure regulation can reduce information asymmetry in financial markets, but disclosure is only effective if consumers can understand and act on the information – complexity caps and plain-language requirements may be more effective than raw data dumps that overwhelm rather than inform retail investors',
          'Warranties reduce information asymmetry in used car markets',
          'Signalling through education (Spence\'s model) solves the employer-employee information gap, but may be privately rational yet socially wasteful if degrees primarily signal ability rather than develop it – suggesting that subsidising higher education may partly subsidise socially unproductive signalling rather than genuine human capital accumulation',
          'Information gaps cause market failure when one party knows more than another',
          'Compulsory insurance (e.g. car insurance) solves the adverse selection problem in that market, but may create moral hazard – drivers who are forced to be insured may drive less carefully – raising questions about whether the cure for one information failure introduces another'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the disclosure policy by identifying the condition on which it works (consumers can understand the information) and concludes that complexity reduction may be more effective – a practical policy direction. D: applies the human capital vs signalling distinction to evaluate higher education subsidies – a sophisticated evaluation of whether the policy addresses the right problem. F: identifies that compulsory insurance solving adverse selection may simultaneously worsen moral hazard – a genuine trade-off evaluation reaching a policy design implication. A, C, and E are descriptions.'
      }

    ]
  };

})();
