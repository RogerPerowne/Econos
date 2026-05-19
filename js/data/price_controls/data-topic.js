window.ECONOS_TOPIC = {
  id: 'price_controls',
  topicNum: '1.19',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Price Controls',
  estTime: '9-11 minutes',
  goal: 'Lock in how price ceilings and price floors work, their intended effects and unintended consequences, and how to evaluate them as policy tools.',
  intro: {
    heroKey: 'heroPrice',
    summary: 'Price controls set legal limits on market prices. They are used with good intentions — to protect consumers or support producers — but create predictable unintended consequences: shortages, surpluses, black markets, and quality deterioration.',
    doInThis: 'Work through 7 cards covering price ceilings (maximum prices), price floors (minimum prices), their welfare effects, real-world examples, unintended consequences, and evaluation against alternative policies.',
    outcomes: [
      'Distinguish price ceilings and price floors and explain why each creates disequilibrium',
      'Identify the surplus or shortage created and who benefits and loses from each',
      'Explain unintended consequences of price controls including black markets and quality effects',
      'Evaluate price controls against market-based and alternative policy responses'
    ],
    tip: 'Price ceiling BELOW equilibrium → shortage (QD > QS). Price floor ABOVE equilibrium → surplus (QS > QD). Remember: ceiling = max (must be set LOW to bite); floor = min (must be set HIGH to bite).',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'price_controls_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Price controls: the big picture',
      lede: 'Governments cap or floor prices to protect consumers or producers — but every binding control creates a shortage, a surplus, and a deadweight loss.',
      diagramKey: 'priceControlsInteractive',
      steps: [
        {
          key: 'base',
          label: 'Free market benchmark',
          text: 'Without intervention the market clears at <strong>(Q*, P*)</strong> where supply meets demand. Every buyer finds a seller and vice versa — quantity traded equals Q*, and consumer + producer surplus are maximised. This is the benchmark against which price controls are judged.'
        },
        {
          key: 'extension',
          label: 'Price ceiling → shortage',
          text: 'A <strong>price ceiling</strong> sets a legal maximum price P_c <em>below</em> equilibrium. At P_c, <strong>Q_D &gt; Q_S</strong> — a shortage opens up. Trade falls to Q_S (supply is the binding side). Aim: protect consumers (rent caps, energy price caps, essential medicines). Side effects: queues, rationing, black markets, deadweight loss.'
        },
        {
          key: 'shift',
          label: 'Price floor → surplus',
          text: 'A <strong>price floor</strong> sets a legal minimum price P_f <em>above</em> equilibrium. At P_f, <strong>Q_S &gt; Q_D</strong> — a surplus opens up. Trade falls to Q_D (demand is the binding side). Aim: protect producers or workers (national minimum wage, agricultural price support). Side effects: gluts, government buy-ups, unemployment (NMW context).'
        }
      ],
      examEdge: 'For each control, label six things on the diagram: D, S, free-market (Q*, P*), the controlled price (P_c or P_f), the binding quantity (Q_S or Q_D), and the deadweight loss triangle. A ceiling above P* — or a floor below P* — has no effect (the market price already complies).'
    },
    {
      id: 'price_controls_2',
      template: 'mechanisms',
      title: 'Consequences of Price Ceilings',
      intro: 'Price ceilings solve one problem (high price) while creating several others.',
      steps: [
        { label: '❌ Shortage', text: 'At Pc, demand exceeds supply — shortfall = QD − QS. The market cannot clear. Some buyers willing to pay Pc cannot find the good.' },
        { label: '🔀 Rationing problem', text: 'Who gets the good? Price no longer rations. Alternatives: queuing (first come first served — rewards patience over value), lottery, government allocation (tickets, ration books). All are less efficient than price rationing.' },
        { label: '🕵️ Black markets', text: 'Some sellers and buyers transact above the legal price. Black market price may exceed the original equilibrium — buyers now face higher price AND search costs. Illegal; creates crime and corruption.' },
        { label: '📉 Quality deterioration', text: 'Sellers cannot raise prices to cover cost increases → cut costs instead → lower quality. Rent-controlled apartments deteriorate as landlords reduce maintenance. Quality deterioration reduces consumer welfare even at the controlled price.' }
      ],
      examEdge: 'Black markets are a key unintended consequence. If a ceiling creates a large shortage, the black market price can exceed the original equilibrium price — worse for consumers than no control. This is a powerful evaluation point: price controls intended to help consumers can make them worse off if enforcement is poor.'
    },
    {
      id: 'price_controls_3',
      template: 'framing',
      title: 'Price Ceilings in Practice',
      body: '<strong>Rent controls:</strong> Maximum rents set below market equilibrium. Intention: protect tenants from unaffordable rents. Consequence: shortage of rental supply (landlords exit market or convert to owner-occupation); quality deterioration (no incentive to maintain); inefficient allocation (rent-controlled tenants don\'t move even when job changes); black markets in key money. NY, Sweden, Germany all have experienced these effects.<br><br><strong>Energy price cap (UK):</strong> Ofgem energy price cap limits unit prices for gas and electricity. When wholesale prices surged in 2021-22, cap meant suppliers sold below cost → 25+ energy suppliers went bust → government bailout needed → effectively transferred supplier losses to taxpayers.',
      keyTerms: [
        { term: 'Rent control', def: 'A price ceiling on rental property — reduces quantity and quality of rental supply while protecting existing tenants.' },
        { term: 'Energy price cap', def: 'UK Ofgem limit on unit energy prices — protection for consumers but at cost of supplier viability when wholesale prices spike.' },
        { term: 'Key money', def: 'Illegal upfront payment demanded by landlords under rent control to compensate for below-market rents — a form of black market response.' }
      ],
      examEdge: 'UK energy price cap illustrates a key limitation: when underlying costs exceed the cap, someone must bear the loss — either suppliers (go bust), consumers (through tax-funded support), or government (bailout). Price caps do not make the fundamental cost problem disappear; they just redistribute who bears it. This is critical evaluation.'
    },
    {
      id: 'price_controls_4',
      template: 'framing',
      title: 'Price Floors (Minimum Prices)',
      tip: 'A price floor only bites if set ABOVE equilibrium. A floor below equilibrium has no effect — the market already trades above it. The binding quantity is always the LOWER of QS and QD.',
      body: 'A <strong>price floor</strong> (minimum price) is a legal lower limit on the price that can be charged. It only affects the market if set ABOVE the equilibrium price.<br><br><strong>Mechanism:</strong><br>• Floor price Pf > equilibrium P*<br>• At Pf: QS > QD → surplus<br>• Quantity traded = the lower = QD (demand is the binding constraint)<br>• Unsold surplus = QS − QD<br><br><strong>Rationale:</strong> protect producers from "too low" prices — minimum wage (labour), agricultural price supports, minimum alcohol pricing.',
      keyTerms: [
        { term: 'Price floor', def: 'Legal minimum price set above equilibrium — creates a surplus.' },
        { term: 'Surplus', def: 'Excess supply at the controlled price: QS > QD.' },
        { term: 'Binding floor', def: 'Only effective when set above the equilibrium price — otherwise the market price is already above the floor.' }
      ],
      examEdge: 'Diagram for price floor: draw D and S, equilibrium at P*. Draw horizontal line at Pf > P*. Show QD on demand curve at Pf and QS on supply curve at Pf. Arrow showing surplus = QS − QD. The area below Pf above S from QD to QS is the unsold surplus — producers bear the cost of unsold stock.'
    },
    {
      id: 'price_controls_5',
      template: 'cause',
      title: 'Price Floor Examples and Consequences',
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'Three key price floor contexts',
      causes: [
        { icon: '⚖️', head: 'National Living Wage (minimum wage)', body: 'Floor set at £12.21/hr (April 2024). If above market equilibrium wage → employer demand for labour falls; worker supply rises → unemployment. If below equilibrium or at exactly competitive wage → no effect. Evidence: NLW has generally been set near but not far above equilibrium for most workers — limited unemployment effect, significant wage gain for low earners.' },
        { icon: '🌾', head: 'Agricultural price supports', body: 'EU CAP: guaranteed minimum prices for agricultural products. At guaranteed price, supply exceeds demand → surplus ("butter mountains", "wine lakes"). EU had to buy and store/destroy surpluses. High cost; distorted trade; harmed developing-country farmers.' },
        { icon: '🍺', head: 'Minimum unit pricing for alcohol', body: 'Scotland: 50p/unit minimum since 2018. Floor on alcohol price per unit of ethanol. Reduces consumption of cheap strong alcohol disproportionately affecting heavy drinkers. Evidence: alcohol sales fell 3-7% in Scotland. Aim: reduce alcohol-related harm (positive externality correction).' }
      ],
      examEdge: 'Minimum wage debate: monopsony makes the analysis more complex. Under monopsony (one dominant employer), the competitive equilibrium wage is already below the efficient level. A minimum wage can INCREASE employment (unlike in a competitive market where it reduces employment) — because it counters monopsony power. This is a major evaluation upgrade for minimum wage essays.'
    },
    {
      id: 'price_controls_6',
      template: 'framing',
      title: 'Price Controls: Evaluation',
      verdict: {
        leftLabel: '✅ Case FOR price controls',
        rightLabel: '❌ Case AGAINST / Limitations',
        separator: 'VS',
        rows: [
          { aspect: 'Speed', left: 'Direct and immediate: price changes are instant, unlike supply-side policies which take years', right: 'Price ceilings create shortages and quality deterioration — may not help intended beneficiaries' },
          { aspect: 'Communication', left: 'Simple to understand and communicate — political appeal', right: 'Price floors create surpluses — wasted resources (unsold stock)' },
          { aspect: 'Protection', left: 'Energy price cap during 2022 energy crisis provided immediate consumer relief', right: 'Black markets develop — potentially criminal activity' },
          { aspect: 'Evidence', left: 'Minimum wage floor has raised incomes of lowest-paid without large disemployment', right: 'Inefficient allocation: goods go to those who queue fastest, not those who value them most' },
          { aspect: 'Root cause', left: 'Addresses the symptom immediately while longer-run policies are implemented', right: 'Don\'t address root cause: if caused by supply shortage, price control doesn\'t fix supply' }
        ]
      },
      examEdge: 'The key insight: price controls treat the symptom (high/low price) not the cause (insufficient supply or excessive demand). For rent: the solution is to build more housing (supply-side). For low wages: improve labour productivity (supply-side) or strengthen worker bargaining power. Price controls are short-run palliatives; supply-side reforms address root causes.'
    },
    {
      id: 'price_controls_7',
      template: 'framing',
      title: 'Alternatives to Price Controls',
      body: 'If the problem is unaffordable prices for low-income consumers, alternatives to price ceilings include:<br><br>• <strong>Targeted subsidies:</strong> subsidy for low-income households specifically (means-tested) rather than controlling price for all. More targeted; less distorting. Example: household energy support payment vs price cap.\n• <strong>Income transfers:</strong> increase incomes of the poorest through Universal Credit, tax credits — enables them to pay market prices. Better for efficiency; may not be enough if prices are extremely high.\n• <strong>Supply expansion:</strong> invest in new supply to shift supply right and reduce equilibrium price. Addresses root cause. Takes time.\n• <strong>Competition policy:</strong> if high prices result from monopoly power, increase competition to reduce prices toward competitive equilibrium.',
      keyTerms: [
        { term: 'Means-testing', def: 'Targeting a policy benefit at those below an income threshold — more targeted than universal price controls.' },
        { term: 'Income transfers', def: 'Giving money to households directly — preserves their freedom to allocate spending while improving affordability.' },
        { term: 'Supply-side solution', def: 'Expanding supply to reduce the equilibrium price — addresses root cause of high prices unlike price controls.' }
      ],
      examEdge: 'Means-tested targeted subsidies are generally more efficient than price controls because: (1) they do not create shortages, (2) they reach those most in need rather than all consumers, (3) they preserve price signals. The main disadvantage is stigma of means-testing and complexity of administration. This comparison earns evaluation marks in any price controls essay.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
