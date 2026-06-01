window.ECONOS_TOPIC = {
  id: 'information-gaps',
  topicNum: '3.4',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Information Gaps',
  estTime: '9-11 minutes',
  goal: 'Lock in asymmetric information, adverse selection, moral hazard, and how information failures cause market outcomes to diverge from optimal.',
  intro: {
    heroKey: 'heroBehavioural',
    summary: 'Perfect information is an assumption of competitive markets. When buyers and sellers have different information, markets can unravel entirely (Akerlof\'s market for lemons), produce moral hazard, or systematically underprovide valuable goods.',
    doInThis: 'Work through 7 cards covering symmetric vs asymmetric information, Akerlof\'s lemons, adverse selection, moral hazard, signalling, government responses, and information failure in healthcare.',
    outcomes: [
      'Explain asymmetric information and why it creates market failure',
      'Define and distinguish adverse selection and moral hazard with examples',
      'Explain Akerlof\'s market for lemons and why markets may unravel',
      'Evaluate policy responses to information failures'
    ],
    tip: 'Asymmetric information: one party knows more than the other. Before the deal → adverse selection risk. After the deal → moral hazard risk. Both lead to market failure.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'done' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    {
      id: 'info_gaps_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Information gaps: the big picture',
      tip: { icon: '💡', tone: 'blue', text: 'Information gaps are a type of market failure. They occur when one party in a transaction has more or better information than the other. This leads to poor decisions, lower trust, and inefficient outcomes.' },
      flowTitle: 'The big picture: five key areas',
      flowEmoji: '🗺️',
      flow: [
        { icon: '⚖️', tone: 'blue',   title: 'Imperfect vs asymmetric information', sub: 'Imperfect information means both sides lack some facts. Asymmetric information means one side knows more than the other.' },
        { icon: '🔍', tone: 'amber',  title: 'Adverse selection',                   sub: 'An ex-ante information problem – hidden information before the deal. Akerlof\'s Market for Lemons shows how bad products can drive out good ones.' },
        { icon: '🛡️', tone: 'rose',   title: 'Moral hazard',                        sub: 'An ex-post information problem – behaviour changes after one side is protected. Harder to monitor actions, so agents may take more risk.' },
        { icon: '📢', tone: 'green',  title: 'Private market solutions',            sub: 'Firms and individuals use signalling and screening to reveal information or sort good from bad.' },
        { icon: '🏛️', tone: 'purple', title: 'Government responses',               sub: 'Governments can improve outcomes through disclosure, regulation, provision of information, and behavioural nudges.' }
      ],
      causesLabel: 'The logic flow',
      causesEmoji: '➡️',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: 'ℹ️', tone: 'blue',  head: 'Information gap',              body: 'One side has more or better information' },
        { icon: '⚠️', tone: 'amber', head: 'Poor decisions / missing trust', body: 'Wrong choices, higher risk, lower willingness to trade' },
        { icon: '📉', tone: 'rose',  head: 'Market failure',               body: 'Inefficient outcomes, reduced welfare, lower trust in markets' }
      ],
      causes2Label: 'Why this matters',
      causes2Emoji: '⭐',
      causes2: [
        { icon: '📉', tone: 'rose',  head: 'Markets may unravel',               body: 'Loss of trust can cause good markets to break down.' },
        { icon: '🏆', tone: 'amber', head: 'Good products can be driven out',    body: 'Bad products survive when information is hidden.' },
        { icon: '🏛️', tone: 'blue',  head: 'Government may need to intervene',  body: 'To correct failures and protect consumers.' }
      ],
      examEdge: 'Information failure is distinct from other market failures: it does not necessarily involve externalities or public goods. The market may be perfectly competitive and yet produce inefficient outcomes because information is unequally distributed. Identifying this as a separate cause of market failure is analytically important.'
    },

    {
      id: 'info_gaps_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Akerlof\'s Market for Lemons',
      tip: { icon: '💡', tone: 'blue', text: 'In Akerlof\'s used car market, sellers know the true quality of their cars, but buyers do not. Because of this information gap, buyers only pay an average price. This pushes high-quality sellers out of the market, leaving only low-quality ("lemons") cars. The market can unravel and shrink.' },
      flowTitle: 'How the market unravels – 5 stages',
      flowEmoji: '🚗',
      flow: [
        { icon: '🚗', tone: 'blue',   title: 'Seller knows quality',                  sub: 'Seller knows whether the car is high quality ("peach") or low quality ("lemon").' },
        { icon: '❓', tone: 'amber',  title: 'Buyer cannot tell good car from lemon', sub: 'Buyer cannot observe quality – both cars look the same.' },
        { icon: '💰', tone: 'green',  title: 'Buyer offers average price',            sub: 'Buyer offers one average price based on expected quality.' },
        { icon: '🚘', tone: 'rose',   title: 'Good sellers exit market',              sub: 'Average price is too low for good cars, so high-quality sellers leave.' },
        { icon: '🚕', tone: 'purple', title: 'Only lemons remain / market shrinks',   sub: 'Only low-quality cars remain. Fewer buyers enter → the market shrinks or collapses.' }
      ],
      rowsHeader: 'Worked example',
      colA: 'Buyer\'s estimate of value',
      colB: 'Outcome at average price (£5,000)',
      rows: [
        { label: '🚙 Peach', colA: '£8,000 (high quality). Seller\'s minimum acceptable price: £7,000.', colB: '❌ Seller exits – offer is below cost. Loss at £5,000.' },
        { label: '🚕 Lemon', colA: '£2,000 (low quality). Seller\'s minimum acceptable price: £1,000.', colB: '✅ Seller stays – profit at £5,000. Only lemons remain.' }
      ],
      footer: 'Average price offered = £5,000. Too low for the peach seller (needs £7,000), so only lemons remain in the market.',
      causes2Label: 'Applications: information gaps in other markets',
      causes2Emoji: '🌐',
      causes2: [
        { icon: '☂️', tone: 'amber', head: 'Insurance',                           body: 'People with higher risk are more likely to buy insurance → average risk rises → premiums rise → low-risk people leave → adverse selection spiral.' },
        { icon: '🏛️', tone: 'blue',  head: 'Credit markets',                     body: 'High-risk borrowers are more likely to borrow → average risk rises → lenders charge higher rates → low-risk borrowers stop applying.' },
        { icon: '🏠', tone: 'rose',  head: 'Mortgage-backed securities (pre-2008)', body: 'Hidden default risk in complex products led to overpricing and eventual market collapse.' }
      ],
      keyTerms: [
        { term: 'Lemons problem',    def: 'Akerlof\'s model: asymmetric information causes quality goods to exit the market as buyers cannot distinguish them from bad goods.' },
        { term: 'Adverse selection', def: 'When asymmetric information causes systematically worse options to be selected – bad goods crowd out good goods.' },
        { term: 'Market unravelling', def: 'Progressive market destruction as adverse selection causes progressively worse average quality and good sellers exit.' }
      ],
      examEdge: 'Akerlof\'s model applies beyond cars: insurance markets (unhealthy individuals select in; premiums rise; healthy people exit – adverse selection spiral), credit markets (high-risk borrowers seek credit most avidly), and pre-2008 mortgage-backed securities (sellers knew more about quality than buyers). Nobel Prize 2001.'
    },

    {
      id: 'info_gaps_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Adverse Selection: Examples',
      tip: { icon: '⚖️', tone: 'amber', text: 'Adverse selection is an ex-ante information problem: before a transaction, one side cannot tell high risk from low risk, or high quality from low quality.' },
      causesLabel: 'Where adverse selection occurs',
      causesEmoji: '📊',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '⚖️', tone: 'blue', head: '1. Insurance markets',
          body: '<span style="font-size:11px;font-weight:800;color:#2563EB;text-transform:uppercase;letter-spacing:0.06em;">Who knows more:</span> Individuals<br><span style="font-size:11px;font-weight:800;color:#2563EB;text-transform:uppercase;letter-spacing:0.06em;">Hidden information:</span> True risk of claim<br><span style="font-size:11px;font-weight:800;color:#2563EB;text-transform:uppercase;letter-spacing:0.06em;">Market distorted by:</span> Higher premiums; market may unravel without action<br><br>Riskier individuals are more likely to buy insurance, so the pool attracts more claims. Premiums rise and low-risk people drop out.<br><br><strong style="color:#2563EB;">Response:</strong> Risk pooling and compulsory insurance (e.g., NHS-style risk sharing).'
        },
        {
          icon: '🏛️', tone: 'green', head: '2. Credit markets',
          body: '<span style="font-size:11px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:0.06em;">Who knows more:</span> Borrowers<br><span style="font-size:11px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:0.06em;">Hidden information:</span> Probability of default<br><span style="font-size:11px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:0.06em;">Market distorted by:</span> Less credit available or higher borrowing costs<br><br>Risky borrowers may be more likely to seek loans. Lenders face higher defaults and may ration credit or charge higher interest rates.<br><br><strong style="color:#059669;">Response:</strong> Credit scoring, collateral requirements, credit history checks.'
        },
        {
          icon: '👥', tone: 'purple', head: '3. Labour markets',
          body: '<span style="font-size:11px;font-weight:800;color:#7C3AED;text-transform:uppercase;letter-spacing:0.06em;">Who knows more:</span> Workers<br><span style="font-size:11px;font-weight:800;color:#7C3AED;text-transform:uppercase;letter-spacing:0.06em;">Hidden information:</span> True ability/productivity<br><span style="font-size:11px;font-weight:800;color:#7C3AED;text-transform:uppercase;letter-spacing:0.06em;">Market distorted by:</span> Lower average productivity and lower overall output<br><br>If firms cannot identify talent before hiring, average wages may be set by the less productive workers, driving out the best.<br><br><strong style="color:#7C3AED;">Response:</strong> Screening (education, references, tests), probation periods, signalling.'
        },
        {
          icon: '🏷️', tone: 'amber', head: '4. Used goods markets',
          body: '<span style="font-size:11px;font-weight:800;color:#D97706;text-transform:uppercase;letter-spacing:0.06em;">Who knows more:</span> Sellers<br><span style="font-size:11px;font-weight:800;color:#D97706;text-transform:uppercase;letter-spacing:0.06em;">Hidden information:</span> True quality/condition<br><span style="font-size:11px;font-weight:800;color:#D97706;text-transform:uppercase;letter-spacing:0.06em;">Market distorted by:</span> Lower prices and reduced variety (market for lemons)<br><br>Without certification or warranties, buyers cannot be sure of quality. Better-quality sellers may leave, leaving mostly low quality.<br><br><strong style="color:#D97706;">Response:</strong> Certification, warranties, third-party inspections, reputational platforms.'
        }
      ],
      pairLabel: 'Key distinction',
      pairEmoji: '⚖️',
      left: {
        tone: 'amber', icon: '📅', label: 'Adverse selection (ex-ante)',
        text: 'Before the contract or exchange. Adverse selection occurs before choices are made. One party has private information about their type before the contract is agreed.'
      },
      right: {
        tone: 'blue', icon: '🔍', label: 'Moral hazard (ex-post)',
        text: 'Contrast: Moral hazard is ex-post. It occurs after the contract, when actions cannot be fully observed by the other party.'
      },
      rowsHeader: 'Summary',
      colA: 'Hidden information',
      colB: 'Result',
      colC: 'Typical solution',
      rows: [
        { label: '⚖️ Insurance',   colA: 'True risk of claim',           colB: 'Higher premiums; low-risk drop out',      colC: 'Risk pooling; compulsory cover' },
        { label: '🏛️ Credit',      colA: 'Probability of default',        colB: 'Credit rationing; higher interest rates', colC: 'Credit scoring; collateral; history' },
        { label: '👥 Labour',       colA: 'True ability/productivity',    colB: 'Average wages; best workers leave',       colC: 'Screening; signalling; probation' },
        { label: '🏷️ Used goods',  colA: 'True quality/condition',       colB: 'Lower prices; fewer good sellers',        colC: 'Certification; warranties; inspections' }
      ],
      examEdge: 'Adverse selection occurs BEFORE the contract/transaction (ex-ante) – it is about who selects into the market. The policy solution is screening or signalling to reveal private information before the deal. This distinguishes it sharply from moral hazard (ex-post – behaviour changes after the contract).'
    },

    {
      id: 'info_gaps_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Moral Hazard',
      tip: { icon: '💡', tone: 'blue', text: 'Moral hazard is an <strong>ex-post</strong> information asymmetry: once people are insured, protected, or bailed out, they may behave differently because they do not bear the full cost of their actions.' },
      flowTitle: 'The causal chain',
      flowEmoji: '⛓️',
      flow: [
        { icon: '🛡️', tone: 'blue',   title: 'Protection or insurance', sub: 'Risk is shifted away from the individual.' },
        { icon: '⏱️', tone: 'amber',  title: 'Weaker incentives',       sub: 'Lower personal cost of risky choices.' },
        { icon: '⚠️', tone: 'rose',   title: 'Riskier behaviour',       sub: 'More risk-taking becomes likely.' },
        { icon: '📈', tone: 'purple', title: 'Higher social cost',       sub: 'More claims, bailouts or taxpayer costs.' }
      ],
      causesLabel: 'Real-world examples',
      causesEmoji: '🌍',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🚗', tone: 'blue', head: 'Insured drivers take more risks',
          body: 'Drivers may speed or drive less carefully because the insurer covers some loss.<br><br><strong>Why behaviour changes:</strong> The cost of an accident is partly borne by the insurer, not the driver.'
        },
        {
          icon: '🏛️', tone: 'amber', head: 'Too Big to Fail banks take excessive leverage',
          body: 'Banks expect to be rescued by the government if things go wrong.<br><br><strong>Why behaviour changes:</strong> Profits are kept by the bank, but large losses are shifted to taxpayers.'
        },
        {
          icon: '💼', tone: 'green', head: 'Permanent employment contracts may weaken effort',
          body: 'Employees may exert less effort if dismissal is costly and monitoring is weak.<br><br><strong>Why behaviour changes:</strong> The cost of low effort is not fully borne by the employee.'
        }
      ],
      tipLate: {
        icon: '📋', tone: 'slate',
        head: 'Case study: 2008 Financial Crisis',
        text: '<strong>Banks:</strong> Investment banks and lenders took on high leverage and held risky assets.<br><strong>Implicit guarantees:</strong> They expected governments to rescue them if losses mounted.<br><strong>Excessive risk-taking:</strong> The expectation of bailout encouraged riskier lending and complex products.<br><strong>Taxpayer exposure:</strong> Public funds were used to stabilise banks and the financial system.'
      },
      pairLabel: 'Key distinction',
      pairEmoji: '⚖️',
      left: {
        tone: 'amber', icon: '📅', label: 'Adverse selection',
        text: 'Before the contract / Hidden type. One party has private information about their type before the contract is agreed.'
      },
      right: {
        tone: 'blue', icon: '🔍', label: 'Moral hazard',
        text: 'After the contract / Hidden action. One party\'s actions are hidden after the contract is in place.'
      },
      lockIn: {
        title: 'Exam essential',
        icon: '🎓',
        items: [
          'Moral hazard = ex-post (after the contract)',
          'Protection shifts costs to another party',
          'TBTF banking is the strongest exam example',
          'Solution: make failure credible again (ring-fencing, bail-in rules)'
        ]
      },
      examEdge: 'Banking moral hazard is the most powerful exam example: pre-2008, investment banks knew they were too big to fail → took excessive leverage risks → when losses crystallised, governments bailed them out. Dodd-Frank (US) and UK bank ring-fencing attempt to reduce moral hazard by making failure credible again.'
    },

    {
      id: 'info_gaps_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Signalling and Screening Solutions',
      tip: { icon: '💡', tone: 'blue', text: 'Private markets often face information problems: one side knows more than the other. Firms and individuals respond with signalling and screening – strategies that reduce information gaps and improve outcomes.' },
      comparison: {
        title: 'Two private solutions',
        emoji: '⚖️',
        left: {
          tone: 'blue', icon: '📢', label: 'Signalling',
          caption: 'Informed party sends a costly, hard-to-fake signal that lets the uninformed party infer true quality.'
        },
        right: {
          tone: 'amber', icon: '🔍', label: 'Screening',
          caption: 'Uninformed party designs choices to sort people.<br>• The uninformed party offers a menu of options.<br>• Different types self-select the option that suits them.'
        }
      },
      causesLabel: 'Four mechanisms in practice',
      causesEmoji: '🔧',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🎓', tone: 'blue',   head: '1. Signalling: Spence\'s education model',  body: 'Education and qualifications are costly to acquire but raise productivity. High-ability workers are more likely to invest, signalling their quality to employers. The signal works because it is harder to fake for low-ability workers.' },
        { icon: '🛡️', tone: 'amber',  head: '2. Screening: insurance deductibles',       body: 'Higher deductibles discourage high-risk customers (who expect to claim), while low-risk customers choose lower deductibles. The menu of contracts sorts customers by risk type.' },
        { icon: '⭐', tone: 'green',  head: '3. Reputation systems',                     body: 'Past behaviour becomes information. Airbnb and eBay reviews, and credit scores, build trust and reduce uncertainty. Repeat transactions allow reputation to substitute for direct observation.' },
        { icon: '✅', tone: 'purple', head: '4. Third-party certification',              body: 'Independent assessments signal quality and safety: MOT tests, Michelin stars, product safety marks, credit ratings. Resolves buyer-seller information asymmetry through trusted verification.' }
      ],
      rowsHeader: 'Summary',
      colA: 'Who acts',
      colB: 'How it reduces the gap',
      colC: 'Key limitation',
      rows: [
        { label: '📢 Signalling',    colA: 'Informed party',           colB: 'Costly action signals true quality',       colC: 'Signals can be faked if not costly' },
        { label: '🔍 Screening',     colA: 'Uninformed party',         colB: 'Designs choices to sort different types', colC: 'May exclude some good customers' },
        { label: '⭐ Reputation',    colA: 'Third parties / markets',  colB: 'History reveals type over time',          colC: 'New entrants lack a track record' },
        { label: '✅ Certification', colA: 'Independent certifier',    colB: 'Trusted verification reduces uncertainty', colC: 'Certification can be costly or captured' }
      ],
      lockIn: {
        title: 'Key insight',
        icon: '🔑',
        items: [
          'Solutions work when signals are credible and hard to fake',
          'Screening separates types via self-selection',
          'Reputation systems build information over time',
          'None is perfect – information gaps persist'
        ]
      },
      examEdge: 'Spence\'s education signalling model: if education is mainly a signal of ability rather than a direct investment in human capital, its social value is lower than its private value – explaining why we might over-invest in education relative to its actual productivity impact. This qualifies the positive externality argument for education subsidies.'
    },

    {
      id: 'info_gaps_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Government Responses to Information Failures',
      tip: { icon: '💡', tone: 'blue', text: 'When markets suffer from information gaps, private solutions may be insufficient. Governments can intervene to improve transparency, protect consumers and ensure outcomes are efficient and fair.' },
      causesLabel: 'The policy toolkit',
      causesEmoji: '🗂️',
      causes: [
        {
          icon: '📋', tone: 'green', head: 'Mandatory disclosure',
          body: '<strong>What it does:</strong> Forces firms to reveal key information so consumers can make informed choices.<br><strong>Example:</strong> Nutritional labels, financial product key information documents, energy ratings.<br><strong>When it is useful:</strong> When information is hidden but standardised and can be disclosed clearly.'
        },
        {
          icon: '🛡️', tone: 'blue', head: 'Regulation and licensing',
          body: '<strong>What it does:</strong> Sets rules and entry standards to ensure competence and quality.<br><strong>Example:</strong> Financial advisers, doctors, food safety rules.<br><strong>When it is useful:</strong> When expertise or quality matters and consumers cannot easily judge it.'
        },
        {
          icon: '🏛️', tone: 'purple', head: 'Public provision',
          body: '<strong>What it does:</strong> Provides the good or service directly, removing market transactions altogether.<br><strong>Example:</strong> NHS provides healthcare, removing some transactions from the market altogether.<br><strong>When it is useful:</strong> When markets would underprovide or access would be unfair.'
        },
        {
          icon: '🧠', tone: 'amber', head: 'Behavioural nudges',
          body: '<strong>What it does:</strong> Shapes choices without restricting freedom, improving decisions.<br><strong>Example:</strong> Reminders, framing, simplified information, default options (e.g. pension opt-out).<br><strong>When it is useful:</strong> When biases or complexity lead to predictable decision errors.'
        }
      ],
      left: {
        tone: 'green', icon: '⚖️', label: 'When intervention is justified',
        checks: [
          { term: 'Severe harm',            body: 'Significant risk to health, safety or financial wellbeing.' },
          { term: 'Complex products',       body: 'Information is hard to understand or compare.' },
          { term: 'Vulnerable consumers',   body: 'Consumers lack expertise, power or confidence.' },
          { term: 'Persistent market failure', body: 'Private solutions have not emerged or are ineffective.' }
        ]
      },
      right: {
        tone: 'rose', icon: '⚠️', label: 'Risk of government failure',
        points: [
          'Poor information → wrong rules or over-regulation.',
          'Compliance costs → higher prices, less innovation.',
          'Regulatory capture → firms influence the rules.',
          'Unintended consequences → create new problems.'
        ]
      },
      lockIn: {
        title: 'Exam takeaway',
        icon: '🎓',
        items: [
          'Intervention most justified where information gaps are large',
          'And private solutions are weak or absent',
          'But intervention itself may create government failure',
          'Balance the size of market failure vs cost of intervention'
        ]
      },
      examEdge: 'FCA regulation in UK financial services addresses multiple information failures: product mis-selling (PPI scandal – banks had information advantage over consumers), insider trading (market participants with private information gain unfair advantage), and pension advice complexity. Regulatory intervention is justified precisely because market mechanisms fail when information is asymmetric.'
    },

    {
      id: 'info_gaps_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Information Failure in Healthcare',
      tip: { icon: '💡', tone: 'blue', text: 'Healthcare markets combine adverse selection, moral hazard, and imperfect information all at once. Because patients, insurers and providers do not have the same information, markets can produce inefficient, unfair or unsustainable outcomes without policy.' },
      causesLabel: 'Three information problems in healthcare',
      causesEmoji: '🏥',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '👥', tone: 'purple', head: '1. Adverse selection',
          body: 'Unhealthy people are more likely to buy insurance because they expect to claim more. Insurers may raise premiums to cover higher expected costs, causing low-risk people to exit the market.<br><br><strong style="color:#7C3AED;">Result: risk pool worsens and premiums rise further.</strong>'
        },
        {
          icon: '☂️', tone: 'amber', head: '2. Moral hazard',
          body: 'Once insured, patients may over-consume care (e.g. choose extra tests or procedures) or take fewer precautions because they do not bear the full marginal cost.<br><br><strong style="color:#D97706;">Result: higher costs and inefficient use of resources.</strong>'
        },
        {
          icon: '🔍', tone: 'blue', head: '3. Imperfect information',
          body: 'Patients cannot easily judge treatment quality, need, or provider performance. They must rely on doctors and hospitals, creating information asymmetry and trust issues.<br><br><strong style="color:#2563EB;">Result: hard to compare quality and hold providers accountable.</strong>'
        }
      ],
      rowsHeader: 'Two ways to provide healthcare',
      colA: '🇬🇧 UK NHS model',
      colB: '🇺🇸 US-style insurance model',
      rows: [
        { label: '💰 Funding',              colA: 'Tax-funded and free at point of use.',                                    colB: 'Private insurance, employer-based or individual plans; out-of-pocket costs.' },
        { label: '👥 Risk pooling',         colA: 'Universal, automatic pooling across the whole population.',              colB: 'Based on ability to pay and plan choice; higher-risk people cost more to insure.' },
        { label: '📋 Access',               colA: 'Universal entitlement; no price barrier. May face waiting times.',        colB: 'Faster access for those with good insurance; gaps for the uninsured.' },
        { label: '🎯 Incentives',           colA: 'Focus on need, not profit. Providers incentivised to control costs.',    colB: 'Providers paid per service in many cases; incentive to supply more.' },
        { label: '🔍 Information problems', colA: 'Information asymmetry remains; government sets standards and oversight.', colB: 'Information asymmetry compounded by insurance complexity and marketing.' }
      ],
      causes2Label: 'Evaluation: trade-offs',
      causes2Emoji: '⚖️',
      causes2: [
        { icon: '✅', tone: 'green', head: 'NHS strengths',                  body: 'Universal access and strong risk pooling. Lower admin costs. Focus on equity and need.' },
        { icon: '⚠️', tone: 'amber', head: 'NHS weaknesses',                 body: 'Rationing through waiting times and limited choice. Budget constraints can lead to underinvestment.' },
        { icon: '✅', tone: 'blue',  head: 'Private insurance strengths',    body: 'More choice and faster access for many. Can drive innovation and higher-quality care.' },
        { icon: '⚠️', tone: 'rose',  head: 'Private insurance weaknesses',   body: 'Can intensify information failures and moral hazard. Higher costs and inequity for the uninsured.' }
      ],
      lockIn: {
        title: 'Judgement',
        icon: '⭐',
        items: [
          'Healthcare is a classic case for government involvement',
          'Well-designed public system can correct market failures',
          'But no system removes all trade-offs',
          'Balancing efficiency, equity and information is the central challenge'
        ]
      },
      examEdge: 'The NHS vs private healthcare debate is the richest information failure context. NHS: reduces supplier-induced demand (salaried doctors), reduces adverse selection (universal coverage). But moral hazard: free at point of use → some demand for treatment not worth the cost. No system perfectly solves all information problems – use this evaluative balance in essays.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
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
        stem: 'Complete the paragraph explaining Akerlof\'s Market for Lemons.',
        anchor: 'George Akerlof\'s 1970 paper showed that information asymmetry can cause markets to collapse entirely.',
        para: 'In the used car market, sellers know [1] their car is a good car or a "lemon." Buyers do not have this information, so they offer a price that reflects their [2] of getting a good car. This average price is [3] for sellers of good cars – they withdraw from the market. With [4] good cars in the market, buyers\' average offer falls further. In the worst case, this [5] selection spiral leads to complete market [6]. The solution is to reduce information [7]: through warranties (which [8] quality), or third-party inspection services like HPI that reveal [9] car history.',
        blanks: [
          { id: 1, opts: ['whether', 'when', 'how', 'why'], ans: 0 },
          { id: 2, opts: ['probability', 'certainty', 'preference', 'income'], ans: 0 },
          { id: 3, opts: ['too low', 'too high', 'optimal', 'sufficient'], ans: 0 },
          { id: 4, opts: ['fewer', 'more', 'equal numbers of', 'no'], ans: 0 },
          { id: 5, opts: ['adverse', 'positive', 'reverse', 'perfect'], ans: 0 },
          { id: 6, opts: ['collapse', 'equilibrium', 'types-of-efficiency', 'surplus'], ans: 0 },
          { id: 7, opts: ['asymmetry', 'regulation', 'supply', 'demand'], ans: 0 },
          { id: 8, opts: ['signal', 'hide', 'reduce', 'eliminate'], ans: 0 },
          { id: 9, opts: ['hidden', 'public', 'irrelevant', 'future'], ans: 0 }
        ],
        exp: '(1) <strong>Whether</strong> (sellers know the quality). (2) <strong>Probability</strong> of getting a good car – weighted average. (3) Price is <strong>too low</strong> for good sellers. (4) <strong>Fewer</strong> good cars remain. (5) <strong>Adverse</strong> selection spiral. (6) Market <strong>collapse</strong> – only lemons, or nothing. (7) Reduce information <strong>asymmetry</strong>. (8) Warranties <strong>signal</strong> quality credibly. (9) Reveal <strong>hidden</strong> defects. Akerlof won the 2001 Nobel Prize in Economics (with Spence and Stiglitz) for this work on asymmetric information.'
      },

      /* 8 – Odd one out: causes of information asymmetry */
      { type: 'odd_one_out',
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

