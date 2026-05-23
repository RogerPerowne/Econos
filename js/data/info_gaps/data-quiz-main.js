(function () {

  window.ECONOS_QUIZ = {
    id:       'info_gaps_main',
    topicId:  'info_gaps_main',
    title:    'Information Gaps',
    subtitle: 'Theme 1.15 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering asymmetric information, Akerlof\'s market for lemons, adverse selection, moral hazard, signalling and screening, principal-agent problems, and government responses including the FCA and NHS. Mixed formats targeting the analysis and evaluation marks at A-Level.',
    shortNames: {
      'info_gaps_1': 'Information & market failure',
      'info_gaps_2': 'Akerlof\'s lemons',
      'info_gaps_3': 'Adverse selection examples',
      'info_gaps_4': 'Moral hazard',
      'info_gaps_5': 'Signalling & screening',
      'info_gaps_6': 'Government responses',
      'info_gaps_7': 'Healthcare information failure'
    },

    questions: [

      /* 1 — MCQ: adverse selection vs moral hazard */
      { type: 'mcq',
        stem: 'An insurance company notices that the pool of customers buying health insurance is becoming progressively sicker over time, even as the company raises premiums. This is an example of:',
        opts: [
          'Adverse selection &#8212; individuals with above-average health risk are disproportionately likely to purchase insurance (ex-ante information asymmetry), and as premiums rise, healthier individuals exit the pool',
          'Moral hazard &#8212; once insured, policyholders take greater health risks because they do not bear the full cost of medical treatment',
          'The free rider problem &#8212; healthy individuals benefit from the healthcare infrastructure funded by sick policyholders without contributing proportionally',
          'A negative production externality &#8212; the insurance company\'s pricing decisions impose costs on other insurers in the market'
        ],
        ans: 0,
        exp: '<strong>Adverse selection</strong> occurs <em>before</em> the contract (ex-ante): individuals self-select into insurance based on private knowledge about their own risk level that the insurer cannot observe. High-risk individuals know they are high-risk and eagerly buy insurance; low-risk individuals find premiums (set at the average risk level) too expensive relative to their expected claims and exit. As low-risk individuals exit, the pool worsens, justifying higher premiums, which causes more low-risk exits &#8212; an adverse selection spiral. This is the insurance manifestation of Akerlof\'s lemons. <strong>Moral hazard</strong> (option B) occurs <em>after</em> the contract (ex-post): insured individuals change their behaviour. The scenario describes ex-ante selection into the market, not post-contract behaviour change.'
      },

      /* 2 — elastic_sort: adverse selection vs moral hazard */
      { type: 'elastic_sort',
        stem: 'Classify each information failure as <strong>adverse selection</strong> (ex-ante) or <strong>moral hazard</strong> (ex-post).',
        categories: ['adverse_selection', 'moral_hazard'],
        categoryLabels: ['Adverse selection (before the deal)', 'Moral hazard (after the deal)'],
        goods: [
          { icon: '&#128665;', label: 'Drivers with bad records actively seek car insurance while safe drivers self-insure', note: '', ans: 'adverse_selection' },
          { icon: '&#128137;', label: 'Once insured, a homeowner is less careful about locking doors', note: '', ans: 'moral_hazard' },
          { icon: '&#127970;', label: 'Banks with implicit government bailout guarantees take excessive trading risks', note: '', ans: 'moral_hazard' },
          { icon: '&#128188;', label: 'Only workers who know their productivity is below the wage offer accept certain job offers', note: '', ans: 'adverse_selection' },
          { icon: '&#128200;', label: 'A salaried employee works less hard when monitoring is difficult', note: '', ans: 'moral_hazard' },
          { icon: '&#127760;', label: 'People with pre-existing conditions are most eager to join a medical insurance scheme', note: '', ans: 'adverse_selection' }
        ],
        exp: '<strong>Adverse selection (ex-ante)</strong>: occurs before the contract because one party has private information that affects their selection into the market. High-risk drivers seek insurance; below-average workers accept the average wage; sick individuals buy health insurance. In each case, the <em>selection</em> into the market is biased toward higher-risk parties. <strong>Moral hazard (ex-post)</strong>: occurs after the contract because insurance or employment changes the insured party\'s incentives. Less door-locking once insured; excessive bank risk-taking when bailouts are expected; reduced effort once employment is secure. The timing distinction (before vs after the contract) is the fundamental differentiator &#8212; and the policy solutions differ accordingly.'
      },

      /* 3 — para_fill: Akerlof's lemons */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining Akerlof\'s market for lemons.',
        anchor: 'Akerlof showed how information asymmetry can destroy an entire market.',
        para: 'In a used car market, sellers know whether their car is a [1] (high quality) or a lemon (low quality), but buyers [2]. Buyers therefore offer an [3] price reflecting the expected quality. Sellers of high-quality cars find this price [4] &#8212; their car is worth more &#8212; and withdraw from the market. The [5] quality of remaining cars falls. Buyers respond by lowering their [6] price. This process continues until only [7] remain in the market, or the market collapses entirely.',
        blanks: [
          { id: 1, opts: ['peach', 'gem', 'star', 'premium'], ans: 0 },
          { id: 2, opts: ['cannot', 'can easily', 'always', 'never need to'], ans: 0 },
          { id: 3, opts: ['average', 'high', 'low', 'fair'], ans: 0 },
          { id: 4, opts: ['too low', 'too high', 'exactly right', 'irrelevant'], ans: 0 },
          { id: 5, opts: ['average', 'maximum', 'minimum', 'marginal'], ans: 0 },
          { id: 6, opts: ['offer', 'asking', 'reservation', 'ceiling'], ans: 0 },
          { id: 7, opts: ['lemons', 'peaches', 'averages', 'substitutes'], ans: 0 }
        ],
        exp: '(1) <strong>Peach</strong>: Akerlof\'s term for a high-quality used car &#8212; the opposite of a lemon. (2) <strong>Cannot</strong>: the core of the asymmetry &#8212; buyers cannot distinguish quality before purchase. (3) <strong>Average</strong>: buyers rationally offer a price reflecting the expected (average) quality of the pool. (4) <strong>Too low</strong>: for peach owners, the average price is insufficient &#8212; they withdraw. (5) <strong>Average</strong>: the average quality of the remaining pool falls as peaches exit. (6) <strong>Offer</strong> price: buyers lower their maximum willingness to pay as average quality falls. (7) <strong>Lemons</strong>: the market collapses to low-quality goods &#8212; or ceases entirely if even lemon sellers cannot recover their costs at the further-reduced price. This is market unravelling through adverse selection.'
      },

      /* 4 — multi_select: signalling solutions */
      { type: 'multi_select',
        stem: 'Which of the following are valid <strong>private market solutions</strong> to information asymmetry?',
        opts: [
          'Warranties offered by car dealers &#8212; credibly signal quality because only sellers of good cars can offer them at low expected cost',
          'An MOT certificate issued by a government-approved testing station &#8212; third-party certification resolves buyer-seller information gap',
          'University degrees as signals of ability (Spence) &#8212; costly to obtain, so low-ability individuals cannot easily mimic high-ability workers',
          'eBay and Airbnb review systems &#8212; reputation mechanisms allow buyers to infer seller quality from past transactions',
          'The Financial Conduct Authority requiring banks to disclose all mortgage fees &#8212; regulatory disclosure mandate',
          'Insurance companies offering high-deductible policies at lower premiums &#8212; screening device that induces self-selection by low-risk individuals'
        ],
        correct: [0, 2, 3, 5],
        exp: '<strong>Private market solutions</strong>: (A) <strong>Warranties</strong>: a credible signal because only sellers of high-quality goods can offer them &#8212; the cost of honouring a warranty on a lemon is too high. (C) <strong>Education signalling</strong> (Spence): degrees are costly to obtain; low-ability individuals cannot efficiently mimic high-ability workers by getting a degree &#8212; the signal is self-selecting. (D) <strong>Reputation systems</strong>: eBay and Airbnb reviews allow buyers to assess seller quality &#8212; a private platform solution. (F) <strong>Insurance screening</strong>: offering menu of contracts (high-deductible/low-premium vs low-deductible/high-premium) causes low-risk individuals to self-select into the high-deductible option &#8212; a private screening mechanism. <strong>Government solutions</strong>, not private: (B) MOT is a <em>government-mandated</em> certification; (E) FCA disclosure requirements are <em>regulatory mandates</em>. The question asks for private market solutions.'
      },

      /* 5 — diagram_interp: insurance adverse selection spiral */
      { type: 'diagram_interp',
        stem: 'The diagram represents the adverse selection spiral in the health insurance market.',
        svg: '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><rect x="60" y="30" width="100" height="40" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.5" rx="4"/><text x="110" y="55" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="700">Premiums rise</text><rect x="260" y="30" width="100" height="40" fill="#ECFDF5" stroke="#1FB574" stroke-width="1.5" rx="4"/><text x="310" y="55" text-anchor="middle" fill="#1FB574" font-size="11" font-weight="700">Low-risk exit</text><rect x="260" y="140" width="100" height="40" fill="#FEF9C3" stroke="#F5B800" stroke-width="1.5" rx="4"/><text x="310" y="165" text-anchor="middle" fill="#F5B800" font-size="11" font-weight="700">Average risk rises</text><rect x="60" y="140" width="100" height="40" fill="#FFF1F2" stroke="#EC2D68" stroke-width="1.5" rx="4"/><text x="110" y="165" text-anchor="middle" fill="#EC2D68" font-size="11" font-weight="700">Market thins</text><line x1="160" y1="50" x2="260" y2="50" stroke="#0B1426" stroke-width="1.5" marker-end="url(#arr)"/><line x1="310" y1="70" x2="310" y2="140" stroke="#0B1426" stroke-width="1.5" marker-end="url(#arr)"/><line x1="260" y1="160" x2="160" y2="160" stroke="#0B1426" stroke-width="1.5" marker-end="url(#arr)"/><line x1="110" y1="140" x2="110" y2="70" stroke="#0B1426" stroke-width="1.5" marker-end="url(#arr)"/><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0B1426"/></marker></defs></svg>',
        caption: 'The adverse selection spiral: a self-reinforcing cycle that can collapse the insurance market.',
        question: 'What is the correct entry point that sets off the adverse selection spiral?',
        opts: [
          'Premiums rise (or are initially set above low-risk individuals\' actuarially fair premium), causing low-risk individuals to find insurance unaffordable and exit the pool',
          'Low-risk individuals deliberately take on more risk after purchasing insurance, directly raising the average claim cost in the pool',
          'The government imposes a price ceiling on insurance premiums, preventing insurers from charging risk-adjusted premiums',
          'High-risk individuals exit the market because they cannot afford rising premiums, leaving only low-risk individuals in the pool'
        ],
        ans: 0,
        exp: 'The adverse selection spiral is triggered when premiums are set above the actuarially fair rate for low-risk individuals &#8212; which happens because the insurer cannot distinguish high from low risk and must set a blended premium. Low-risk individuals, whose expected claims are below the premium, rationally exit (self-insure or go uninsured). The pool\'s average risk rises &#8212; because the exiting individuals were below average. This justifies a further premium rise (to remain actuarially solvent), which causes more low-risk exits, and so on. Option B describes <em>moral hazard</em> (post-contract behaviour change), not adverse selection. Option D reverses the direction &#8212; it is <em>low</em>-risk individuals who exit when premiums rise, not high-risk ones. The NHS\'s universal risk pooling through compulsory taxation solves this spiral by preventing exit.'
      },

      /* 6 — odd_one_out: moral hazard examples */
      { type: 'odd_one_out',
        stem: 'Three of these illustrate <strong>moral hazard</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127968;', label: 'A homeowner with flood insurance takes less care to install flood barriers', note: '' },
          { icon: '&#127775;', label: '"Too Big to Fail" banks take excessive leverage because they expect government bailouts', note: '' },
          { icon: '&#128165;', label: 'Doctors with financial incentives recommend more procedures than clinically necessary (supplier-induced demand)', note: '' },
          { icon: '&#128200;', label: 'Only unhealthy individuals apply for a new life insurance product, because only they find the premium worth paying', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is <strong>unhealthy individuals self-selecting into life insurance</strong>. This is <em>adverse selection</em>, not moral hazard &#8212; it occurs <em>before</em> the contract, based on private information about health status that the insurer cannot observe. The other three are moral hazard (ex-post): the homeowner reduces precautionary investment <em>after</em> buying insurance; banks take excessive risks <em>after</em> the implicit bailout guarantee is in place; doctors over-prescribe <em>within</em> the doctor-patient relationship, exploiting the information asymmetry post-consultation. The key distinction: adverse selection is about <em>who</em> enters the market (selection before the contract); moral hazard is about <em>how people behave</em> once the contract is in place.'
      },

      /* 7 — mcq: Spence signalling model */
      { type: 'mcq',
        stem: 'Michael Spence\'s model of education as a signal suggests that:',
        opts: [
          'If education mainly signals pre-existing ability rather than directly increasing productivity, then the social return to education may be lower than the private return &#8212; calling into question the case for large education subsidies',
          'Education always increases productivity &#8212; the signalling and human capital theories of education make the same policy predictions',
          'Firms can perfectly observe worker ability before hiring, eliminating the need for education as a costly signal',
          'Low-ability workers benefit most from educational signalling because they can use degrees to mask their true productivity level'
        ],
        ans: 0,
        exp: 'Spence\'s (1973) <strong>signalling model</strong> offers a powerful challenge to the conventional human capital view of education. If education is primarily a signal (revealing pre-existing ability) rather than an investment in human capital (directly raising productivity), then its <em>social</em> return may be much lower than its <em>private</em> return. The private return (graduate premium) is large because employers use degrees to screen candidates. But if the same workers would be equally productive without the degree (and employers would eventually learn this), then education expenditure is partly socially wasteful &#8212; resources spent on a costly signal that merely redistributes jobs rather than increases total output. This qualification weakens the positive externality argument for education subsidies &#8212; if part of education is pure signalling, subsidising it encourages over-investment in credentials. Option D is incorrect: signalling works precisely because it is too costly for low-ability individuals to obtain the signal credibly &#8212; separating equilibrium.'
      },

      /* 8 — data_table: FCA intervention and PPI */
      { type: 'data_table',
        stem: 'The table shows data on the UK Payment Protection Insurance (PPI) mis-selling scandal.',
        headers: ['Year', 'PPI policies sold (millions)', 'FCA redress paid (&#163;bn, cumulative)', 'Banks\' net profit from PPI (&#163;bn, estimated)'],
        rows: [
          ['2000&#8211;10', '45', '0', '+50'],
          ['2011', '&#8212;', '1.9', '&#8212;'],
          ['2015', '&#8212;', '22', '&#8212;'],
          ['2019 (deadline)', '&#8212;', '38', '&#8212;'],
          ['2023 (final)', '&#8212;', '40', '&#8212;']
        ],
        question: 'What does the PPI scandal best illustrate about information failures in financial markets?',
        opts: [
          'Systematic information asymmetry between banks (who understood the product\'s terms and low claim success rates) and consumers (who were often sold policies they could not claim on) &#8212; leading to mis-selling on an industrial scale',
          'That competitive markets self-correct information failures rapidly &#8212; consumers recognised poor value and stopped buying PPI within a few years of its launch',
          'That the FCA overreacted &#8212; the &#163;40bn redress shows government regulatory failure, not market failure from information asymmetry',
          'That moral hazard caused the scandal: banks took excessive risk because they expected the FCA to ultimately bail out consumers'
        ],
        ans: 0,
        exp: 'The PPI scandal is the most documented UK example of information asymmetry causing large-scale financial market failure. Banks possessed detailed knowledge of PPI terms, exclusions, and claim acceptance rates &#8212; consumers did not. Banks exploited this asymmetry systematically, selling expensive policies (often at 30&#8211;50% of loan value in premium) to consumers who were ineligible to claim (self-employed, pre-existing conditions excluded) or who never knew they had it. Total redress of &#163;40bn &#8212; from 45 million policies &#8212; represents the magnitude of the welfare loss from information asymmetry. This is the economic justification for the FCA\'s mandatory disclosure regime: when information is systematically asymmetric in favour of the seller, consumer protection regulation is needed. Option B is empirically false &#8212; the scandal persisted for decades without market self-correction. Option C conflates the regulatory intervention with the underlying market failure.'
      },

      /* 9 — multi_select: evaluation of information asymmetry and the NHS */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>whether information asymmetry provides the strongest justification for the NHS</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Information asymmetry (supplier-induced demand) is a strong reason why unregulated private healthcare fails, but it does not necessarily justify public provision over regulated private provision with mandatory disclosure &#8212; the US requires informed consent rules without an NHS equivalent.',
          'Doctors know more than patients, which means patients cannot make informed decisions.',
          'While the NHS eliminates adverse selection through universal risk pooling, it replaces one information failure with another: free-at-point-of-use creates moral hazard (over-use of low-value consultations), meaning information asymmetry is partially managed rather than solved by the NHS.',
          'Positive externalities from treating infectious disease, and equity arguments against price-rationing healthcare, may be stronger justifications for the NHS than information asymmetry alone &#8212; making the essay question\'s framing contestable.',
          'The NHS is the best healthcare system in the world.',
          'Information asymmetry in healthcare is a serious problem because patients trust doctors.'
        ],
        correct: [0, 2, 3],
        exp: '<strong>Option A</strong> is genuine evaluation: it concedes the information asymmetry argument has force, but reaches a qualified direction &#8212; the failure of private markets does not uniquely imply public provision, since regulation could also correct the asymmetry. This challenges the question\'s implicit assumption. <strong>Option C</strong> is evaluation: it weighs the NHS\'s solution to adverse selection against the new problem it creates (moral hazard from zero pricing), reaching a qualified verdict &#8212; partial management rather than elimination of information failure. <strong>Option D</strong> is evaluation: it weighs competing justifications for the NHS, reaching the direction that information asymmetry may not be the <em>strongest</em> case &#8212; directly addressing the essay\'s claim. <strong>Option B</strong> is description &#8212; it restates the fact of asymmetry without mechanism, weight, or direction. <strong>Option E</strong> is an unsupported assertion with no analytical content. <strong>Option F</strong> is vague description with no mechanism or evaluative direction.'
      },

      /* 10 — chain: Akerlof spiral in insurance */
      { type: 'chain',
        stem: 'A new private health insurance market launches with uniform premiums. Place the adverse selection sequence in the correct logical order.',
        items: [
          { label: 'Insurer raises premiums to cover higher average claims', note: '' },
          { label: 'Market launches: insurer cannot distinguish high from low health risk; sets uniform premium at average expected cost', note: '' },
          { label: 'Only high-risk (unhealthy) individuals remain &#8212; market has unravelled to serve only the highest-risk pool', note: '' },
          { label: 'Healthy individuals find premium too high relative to their low expected claims; they exit the market', note: '' },
          { label: 'Average health risk of remaining pool rises; claims exceed premium revenue', note: '' },
          { label: 'Government intervenes: mandates universal coverage (NHS model) or compulsory private insurance to prevent selection spiral', note: '' }
        ],
        correctOrder: [1, 3, 4, 0, 2, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Market launches with uniform (average) premium &#8212; insurer cannot distinguish risk levels.<br>2. Low-risk individuals exit &#8212; premium exceeds their actuarially fair rate.<br>3. Average risk of remaining pool rises &#8212; adverse selection has biased the pool.<br>4. Insurer raises premiums &#8212; must cover higher average claims.<br>5. Market unravels &#8212; only highest-risk individuals remain (those for whom even high premiums are good value).<br>6. Government intervention &#8212; mandatory universal coverage breaks the spiral.<br><br>This is the Akerlof model applied to insurance. The key insight: no participant acted irrationally &#8212; low-risk individuals rationally decided insurance was poor value; the insurer rationally raised premiums when costs exceeded revenue. Yet the market failed. This is the defining feature of adverse selection &#8212; individually rational behaviour produces collectively irrational outcomes. Government intervention (compulsory insurance or NHS) is justified precisely because the market equilibrium is inefficient.'
      }

    ]
  };

})();
