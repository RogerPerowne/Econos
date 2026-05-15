window.ECONOS_TOPIC = {
  id: 'info_gaps',
  topicNum: '1.15',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Information Gaps',
  estTime: '7-9 minutes',
  goal: 'Lock in asymmetric information, adverse selection, moral hazard, and how information failures cause market outcomes to diverge from optimal.',
  intro: {
    heroKey: 'heroBehavioural',
    summary: 'Perfect information is an assumption of competitive markets. When buyers and sellers have different information, markets can unravel entirely (Akerlof\'s market for lemons), produce moral hazard, or systematically underprovide valuable goods.',
    doInThis: 'Work through 7 cards covering symmetric vs asymmetric information, Akerlof\'s lemons, adverse selection, moral hazard, signalling, information gaps as market failure, and policy responses.',
    outcomes: [
      'Explain asymmetric information and why it creates market failure',
      'Define and distinguish adverse selection and moral hazard with examples',
      'Explain Akerlof\'s market for lemons and why markets may unravel',
      'Evaluate policy responses to information failures'
    ],
    tip: 'Asymmetric information: one party knows more than the other. Before the deal → adverse selection risk. After the deal → moral hazard risk. Both lead to market failure.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'info_gaps_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Information gaps: the big picture',
      lede: 'When one side of a deal knows more than the other, even competitive markets can unravel.',
      branches: [
        { tone: 'green',  label: 'Imperfect vs asymmetric', sub: 'All information is imperfect — but asymmetry (one party systematically knows more) is the source of failure.' },
        { tone: 'rose',   label: 'Adverse selection',       sub: 'Akerlof\'s "lemons": hidden quality before a deal drives good goods out of the market.' },
        { tone: 'amber',  label: 'Moral hazard',            sub: 'Hidden action <em>after</em> a deal — insured drivers take more risks, banks underwrite riskier loans.' },
        { tone: 'blue',   label: 'Market solutions',        sub: 'Signalling (degrees, warranties) and screening (insurance excesses, credit checks) help reveal hidden information.' },
        { tone: 'purple', label: 'Government responses',    sub: 'Mandatory disclosure, regulation, public provision — especially in healthcare and financial services.' }
      ],
      body: 'Standard market theory assumes <strong>perfect information</strong>: all buyers and sellers know prices, quality, and each other\'s characteristics. In reality, information is often:<br><br>• <strong>Imperfect:</strong> no one has complete information (normal and manageable)<br>• <strong>Asymmetric:</strong> one party systematically knows more than the other — this creates market failure<br>• <strong>Hidden action:</strong> one party cannot observe the other\'s behaviour after a deal<br><br>Asymmetric information problems arise in: used car markets, insurance, labour markets, healthcare, financial services, and credit markets. They lead to inefficient outcomes even when markets are competitive.',
      keyTerms: [
        { term: 'Asymmetric information', def: 'One party to a transaction has systematically better information than the other — creates market failure.' },
        { term: 'Information failure', def: 'A market failure caused by imperfect or asymmetric information leading to inefficient resource allocation.' },
        { term: 'Perfect information', def: 'The assumption that all market participants know all relevant facts — a theoretical ideal rarely met in practice.' }
      ],
      examEdge: 'Information failure is distinct from other market failures: it does not necessarily involve externalities or public goods. The market may be perfectly competitive and yet produce inefficient outcomes because information is unequally distributed. Identifying this as a separate cause of market failure is analytically important.'
    },
    {
      id: 'info_gaps_2',
      template: 'framing',
      diagramKey: 'lemonMarketDiagram',
      title: 'Akerlof\'s Market for Lemons',
      body: 'George Akerlof\'s 1970 paper "The Market for Lemons" showed how asymmetric information can destroy entire markets.<br><br><strong>Used cars example:</strong><br>• Sellers know the quality of their car ("peach" or "lemon")<br>• Buyers cannot distinguish quality before purchase<br>• Buyers offer an average price reflecting average quality<br>• Sellers of peaches (high quality) find the average price too low — they withdraw<br>• Market now only has lemons — average quality falls<br>• Buyers lower their offer price further — more peaches exit<br>• Market unravels until only lemons remain or the market collapses entirely<br><br>The result: a market that should function destroys itself due to information asymmetry.',
      keyTerms: [
        { term: 'Lemons problem', def: 'Akerlof\'s model: information asymmetry causes quality goods to exit the market as buyers cannot distinguish them from bad goods.' },
        { term: 'Adverse selection', def: 'When asymmetric information causes systematically worse options to be selected — bad goods crowd out good goods.' },
        { term: 'Market unravelling', def: 'The process by which adverse selection progressively destroys a market — progressively worse average quality as good sellers exit.' }
      ],
      examEdge: 'Akerlof\'s model applies beyond cars: insurance (unhealthy individuals select into health insurance; the "pool" worsens, premiums rise, healthy people exit, pool worsens further — adverse selection spiral). Credit markets: high-risk borrowers seek credit most avidly. Financial securities: sellers know more about quality than buyers (e.g. mortgage-backed securities pre-2008).'
    },
    {
      id: 'info_gaps_3',
      template: 'cause',
      title: 'Adverse Selection: Examples',
      causes: [
        { head: 'Insurance markets', body: 'People who know they are high-risk are most eager to buy insurance. Insurers cannot perfectly distinguish high from low risk → set premiums at the average → low-risk individuals find insurance overpriced → exit → pool worsens → premiums rise further → adverse selection spiral. NHS universal coverage partly avoids this by pooling all risks compulsorily.' },
        { head: 'Credit markets', body: 'High-risk borrowers want credit most; banks cannot perfectly identify risk → charge average rate → low-risk borrowers may opt out → average borrower risk rises → bank raises rates → adverse selection. Credit scoring, collateral, and credit history requirements are attempts to screen.' },
        { head: 'Labour markets', body: 'Firms cannot observe worker productivity before hiring → offer average wage → best workers (knowing their quality) may find average wage insufficient → exit labour market for that employer → average quality of applicants falls → classic adverse selection.' },
        { head: 'Used goods markets', body: 'Used electronics, houses, and cars: seller knows history; buyer cannot verify. Results in price discounts for goods without quality certification — even if genuinely high quality. Market undervalues good-quality used goods.' }
      ],
      examEdge: 'Adverse selection occurs BEFORE the contract/transaction (ex-ante). It is about who selects into the market. The policy solution is screening/signalling to reveal private information. This distinguishes it from moral hazard (which occurs after the contract — ex-post).'
    },
    {
      id: 'info_gaps_4',
      template: 'framing',
      title: 'Moral Hazard',
      body: '<strong>Moral hazard</strong> occurs when one party takes greater risks because they do not bear the full consequences — they are insulated from the downside. It arises after a contract is in place (ex-post), when the other party cannot observe behaviour.<br><br><strong>Examples:</strong><br>• <em>Insurance:</em> once insured, individuals take less care with their property (car, health) because the cost of loss is now borne by the insurer.<br>• <em>Banking:</em> banks with implicit government bailout guarantees (Too Big to Fail) take excessive risk — profits are privatised, losses are socialised.<br>• <em>Employment:</em> once employed on a permanent contract, workers may reduce effort if monitoring is poor.',
      keyTerms: [
        { term: 'Moral hazard', def: 'When having insurance or protection changes behaviour — inducing greater risk-taking because the cost of negative outcomes is partly borne by another.' },
        { term: 'Ex-post information asymmetry', def: 'After the contract, the party at risk cannot fully observe the behaviour of the insured/hired party.' },
        { term: 'Too Big to Fail', def: 'When a firm is so systemically important that government will bail it out — creating moral hazard for risk-taking.' }
      ],
      examEdge: 'Banking moral hazard is the most powerful exam example: pre-2008, investment banks knew they were too big to fail → took excessive leverage risks → when losses crystallised, governments bailed them out. Dodd-Frank (US) and UK bank ring-fencing attempts to reduce this moral hazard by making failure possible again.'
    },
    {
      id: 'info_gaps_5',
      template: 'mechanisms',
      title: 'Signalling and Screening Solutions',
      intro: 'When markets fail due to information asymmetry, private solutions emerge to restore information flow.',
      steps: [
        { label: 'Signalling', text: 'The better-informed party credibly reveals their type. For signalling to work, it must be costly to mimic: education as a signal (Spence) — low-ability workers cannot credibly pretend to have a degree because the cost of completing it is too high. Warranties, brand reputation, guarantees.' },
        { label: 'Screening', text: 'The less-informed party designs mechanisms to reveal the other\'s type. Insurance deductibles: offering high-deductible/low-premium vs low-deductible/high-premium contracts — low-risk individuals self-select into high-deductible plans.' },
        { label: 'Reputation mechanisms', text: 'Repeat transactions allow reputation to substitute for direct observation. Airbnb/eBay reviews, TripAdvisor, credit scores all create reputation systems that discipline behaviour.' },
        { label: 'Third-party certification', text: 'MOT certificates, Michelin stars, credit ratings, regulatory approval — independent certification resolves buyer-seller information asymmetry.' }
      ],
      examEdge: 'Spence\'s education signalling model: if education is mainly a signal of ability rather than a direct investment in human capital, then its social value is lower than private value — explaining why we might over-invest in education relative to its actual productivity impact. This is an important qualification to the positive externality argument for education subsidies.'
    },
    {
      id: 'info_gaps_6',
      template: 'cause',
      title: 'Government Responses to Information Failures',
      causes: [
        { head: 'Mandatory information disclosure', body: 'Require sellers to reveal information: food labelling laws (nutritional information), financial product prospectuses, energy performance certificates for houses. Reduces information asymmetry directly.' },
        { head: 'Regulation and standards', body: 'Set minimum quality standards so buyers know the minimum quality they will receive. MOT test, financial services regulation (FCA), food safety standards — protect uninformed consumers.' },
        { head: 'Public provision', body: 'Where information asymmetry is severe (e.g. complex financial products, medical care), state provision may be preferable to market provision. NHS doctors cannot easily exploit patient ignorance as private doctors potentially could.' },
        { head: 'Price controls and restrictions', body: 'Cap interest rates, regulate insurance pricing — prevent exploitation of information advantages by the better-informed party. Limitation: may reduce supply of credit or insurance to high-risk groups.' }
      ],
      examEdge: 'FCA regulation in UK financial services addresses multiple information failures: product mis-selling (PPI scandal — banks had information advantage over consumers), insider trading (market participants with private information gain unfair advantage), and pension advice complexity. Regulatory intervention is justified precisely because market mechanisms fail when information is asymmetric.'
    },
    {
      id: 'info_gaps_7',
      template: 'framing',
      title: 'Information Failure in Healthcare',
      body: '<strong>Doctor-patient relationship:</strong> Classic information asymmetry — doctors have medical expertise that patients lack. This creates:<br>• <em>Supplier-induced demand:</em> doctors can recommend treatments patients cannot evaluate — potential for over-prescription or unnecessary procedures.<br>• <em>Principal-agent problem:</em> patients (principal) rely on doctors (agent) to act in their interest — but doctors may have financial incentives (in private healthcare) to prescribe more.<br><br><strong>NHS solution:</strong> salaried doctors have weaker financial incentive to over-prescribe. GMC regulation, clinical guidelines, and second-opinion rights reduce moral hazard. Pooled public funding removes the incentive for doctors to exploit patient ignorance for profit.',
      keyTerms: [
        { term: 'Supplier-induced demand', def: 'When a supplier uses information advantage to create demand beyond what the consumer would choose with full information — common in healthcare and financial advice.' },
        { term: 'Principal-agent problem', def: 'When an agent (doctor, financial advisor) has different interests from the principal (patient, client) and exploits information asymmetry — moral hazard for agents.' },
        { term: 'GMC', def: 'General Medical Council — regulates doctors in UK; a government solution to information asymmetry by certifying doctor quality and disciplining misconduct.' }
      ],
      examEdge: 'The NHS vs private healthcare debate is the richest information failure context. NHS: reduces supplier-induced demand (salaried doctors), reduces patient adverse selection (universal coverage). But moral hazard: free at point of use → some demand for treatment not worth the cost. No system perfectly solves all information problems — use this as evaluative balance.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
