window.ECONOS_TOPIC = {
  id: 'price_controls',
  topicNum: '4.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: '4.1 Government Intervention in Markets',
  estTime: '8-10 minutes',
  goal: 'Lock in how price ceilings and price floors work, the welfare effects, real-world UK applications, and how to evaluate them against alternative policies.',
  intro: {
    heroKey: 'heroPrice',
    summary: 'Price controls set legal limits on the market price — a ceiling caps it from above, a floor props it up from below. They are used with good intentions but create predictable side-effects: shortages, surpluses, black markets, quality decline, and deadweight loss.',
    doInThis: 'Work through 5 cards covering price ceilings and floors with full interactive welfare analysis, five real-world UK and international case studies, and an evaluation card weighing controls against alternative policies.',
    outcomes: [
      'Distinguish binding price ceilings from price floors and identify the resulting shortage or surplus',
      'Use the welfare diagram to show how surplus is redistributed and where deadweight loss appears',
      'Apply the analysis to rent control, the UK energy price cap, the National Living Wage, the EU CAP, and Scotland\'s minimum unit pricing on alcohol',
      'Evaluate price controls against targeted subsidies, income transfers, and supply-side reforms'
    ],
    tip: 'A ceiling only bites if set BELOW equilibrium (creates a shortage); a floor only bites if set ABOVE equilibrium (creates a surplus). Both cut the quantity traded, both create DWL — unless they correct a pre-existing market failure larger than the welfare loss they cause.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'price_controls_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 5',
      title: 'Price controls: the big picture',
      lede: 'Governments set legal maximum or minimum prices to protect consumers or producers — but every binding control distorts the market and creates a deadweight loss.',
      diagramKey: 'priceControlsInteractive',
      steps: [
        {
          key: 'base',
          label: 'Free market benchmark',
          text: 'Without intervention the market clears at <strong>(Q*, P*)</strong> — supply meets demand, no shortage or surplus, total welfare (CS + PS) is maximised. This is the benchmark every price control is judged against. <strong>Cards 2 and 3</strong> build the ceiling and floor cases in depth.'
        },
        {
          key: 'extension',
          label: 'Price ceiling overview',
          text: 'A <strong>price ceiling</strong> (legal maximum) set <em>below</em> P* creates a <strong>shortage</strong> — buyers want more than sellers will supply. Aim: protect consumers from "too high" prices. <strong>Card 2</strong> unpacks how the ceiling shifts CS, PS, and welfare step by step.'
        },
        {
          key: 'shift',
          label: 'Price floor overview',
          text: 'A <strong>price floor</strong> (legal minimum) set <em>above</em> P* creates a <strong>surplus</strong> — sellers want to supply more than buyers will buy. Aim: protect producers or workers from "too low" prices. <strong>Card 3</strong> unpacks the floor mechanics, including the mirror-image welfare effects.'
        }
      ],
      examEdge: 'For each control, label six things on the diagram: D, S, free-market (Q*, P*), the controlled price (Pc or Pf), the binding quantity (Qs or Qd), and the deadweight loss triangle. A ceiling above P* — or a floor below P* — has no effect: the market price already complies, so the control is non-binding.'
    },

    {
      id: 'price_controls_2',
      stepLabel: 'Learn: Step 2 of 5',
      title: 'Price ceilings (legal maxima)',
      tip: { icon: '💡', tone: 'purple', text: 'A price ceiling is binding only when set <strong>below</strong> equilibrium. It creates a shortage, redistributes surplus from sellers to lucky buyers, and destroys welfare through the DWL triangle.' },
      interactiveDiagram: {
        svgKey: 'priceCeilingDiagramInteractive',
        label: 'Build the price ceiling diagram step by step',
        emoji: '🧢',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market baseline',
            body: 'D and S intersect at P<sub>e</sub>, Q<sub>e</sub>. Total welfare = CS + PS, with no price control in place.',
            analysis: 'Without intervention, the market clears: every buyer willing to pay P<sub>e</sub> can buy, and every seller willing to sell at P<sub>e</sub> can sell. Allocative efficiency holds. Any binding price control will move the market away from this point and create a welfare cost — unless it corrects a market failure like monopoly power.'
          },
          {
            label: 'Ceiling imposed',
            tone: 'purple',
            head: 'P<sub>max</sub> below P<sub>e</sub> — a shortage opens up',
            body: 'At P<sub>max</sub>, sellers supply only Q<sub>s</sub>, but buyers demand Q<sub>d</sub>. The horizontal gap Q<sub>d</sub> − Q<sub>s</sub> is the <strong>shortage</strong>. Trades are rationed to Q<sub>s</sub>.',
            analysis: 'A ceiling is only <em>binding</em> if it sits below P<sub>e</sub>; above P<sub>e</sub> it has no effect. Because quantity supplied (Q<sub>s</sub>) is now the short side of the market, Q<sub>s</sub> becomes the quantity actually traded. Non-price rationing fills the gap — queues, waiting lists, black markets, or quality reductions are all common real-world responses.'
          },
          {
            label: 'Surplus shifts',
            tone: 'amber',
            head: 'PS shrinks; CS effect is ambiguous',
            body: 'PS (amber) shrinks: sellers transact fewer units at a lower price. CS (blue) <em>may</em> rise if buyers who value the good most get the rationed quantity — but with random rationing or queueing costs, CS can fall.',
            analysis: 'Textbook CS under a ceiling assumes <strong>efficient rationing</strong> — that the Q<sub>s</sub> units go to the buyers who value them most. In reality, rationing is rarely efficient: queueing wastes time, black-market markups erode the price benefit, and quality often drops to compensate sellers. So the "CS rises" result is a best case, not a guarantee.'
          },
          {
            label: 'Deadweight loss',
            tone: 'rose',
            head: 'Welfare lost from trades that no longer happen',
            body: 'The red triangle = DWL: surplus from units between Q<sub>s</sub> and Q<sub>e</sub> that <em>would have been traded</em> at P<sub>e</sub>, but are now prevented by the ceiling.',
            analysis: 'DWL grows with the gap between P<sub>max</sub> and P<sub>e</sub> and with elasticity. A ceiling raises welfare only if it offsets a larger pre-existing distortion — for instance, capping the price a monopolist can charge can <em>increase</em> total welfare by pushing output toward the competitive level. Most consumer-facing rent controls and energy price caps do not meet this bar.'
          }
        ]
      },
      keyTerms: [
        { term: 'Price ceiling', def: 'A legal maximum price. Only binding when set below the equilibrium price; above P<sub>e</sub> it has no effect on the market.' },
        { term: 'Shortage', def: 'Excess demand at the controlled price: Q<sub>d</sub> > Q<sub>s</sub>. The quantity actually traded is the lower side (Q<sub>s</sub>).' },
        { term: 'Non-price rationing', def: 'How the shortage is allocated when price cannot adjust: queueing, lottery, key money, black markets, or quality reduction.' },
        { term: 'Black market', def: 'Illegal trading above the controlled price. When shortages are severe the black-market price can exceed the original equilibrium — leaving consumers worse off than with no control.' }
      ],
      examEdge: 'Two classic UK applications: <strong>rent controls</strong> (NYC, Berlin, Stockholm — produce shortages and quality decline, deter new building) and the <strong>UK energy price cap</strong> (Ofgem, 2019–) — protected consumers but pushed 25+ suppliers into bankruptcy in 2021–22 when wholesale prices spiked above the cap. A ceiling does not make the underlying cost problem disappear; it shifts who bears it — consumers, suppliers, or taxpayers via bailouts. Naming the bearer of the cost is a strong evaluation move.'
    },

    {
      id: 'price_controls_3',
      stepLabel: 'Learn: Step 3 of 5',
      title: 'Price floors (legal minima)',
      tip: { icon: '💡', tone: 'green', text: 'A price floor is binding only when set <strong>above</strong> equilibrium. It creates a surplus, redistributes surplus from buyers to sellers (often), and destroys welfare through the DWL triangle.' },
      interactiveDiagram: {
        svgKey: 'priceFloorDiagramInteractive',
        label: 'Build the price floor diagram step by step',
        emoji: '🪜',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market baseline',
            body: 'D and S intersect at P<sub>e</sub>, Q<sub>e</sub>. Total welfare = CS + PS, with no price control in place.',
            analysis: 'The same starting point as the ceiling case: the market clears at P<sub>e</sub>, Q<sub>e</sub>, with CS + PS at its maximum. A binding floor pushes price <em>above</em> this point and is the mirror image of a binding ceiling.'
          },
          {
            label: 'Floor imposed',
            tone: 'green',
            head: 'P<sub>min</sub> above P<sub>e</sub> — excess supply emerges',
            body: 'At P<sub>min</sub>, buyers only want Q<sub>d</sub>, but sellers would supply Q<sub>s</sub>. The horizontal gap Q<sub>s</sub> − Q<sub>d</sub> is the <strong>excess supply</strong>. Trades are limited to Q<sub>d</sub>.',
            analysis: 'A floor is only <em>binding</em> if it sits above P<sub>e</sub>; below P<sub>e</sub> it has no effect. Now buyers are the short side of the market, so Q<sub>d</sub> becomes the quantity actually traded. The excess supply often shows up as <em>unsold output</em> (e.g. EU butter mountains, US dairy stockpiles) or, in the labour market, as <em>unemployment</em> from a minimum wage set above the market-clearing wage.'
          },
          {
            label: 'Surplus shifts',
            tone: 'amber',
            head: 'CS shrinks; PS effect is ambiguous',
            body: 'CS (blue) shrinks: buyers pay a higher price and transact fewer units. PS (amber) <em>may</em> rise if the higher per-unit price outweighs the lost quantity — but if demand is elastic, PS can fall.',
            analysis: 'The PS effect depends on the elasticity of demand. If demand is inelastic, the higher price compensates for the lost quantity and PS rises. If demand is elastic, the quantity loss dominates and PS falls. In labour markets, this translates into a real exam debate: a minimum wage may raise total worker income (if labour demand is inelastic) or lower it (if elastic).'
          },
          {
            label: 'Deadweight loss',
            tone: 'rose',
            head: 'Welfare lost from trades that no longer happen',
            body: 'The red triangle = DWL: surplus from units between Q<sub>d</sub> and Q<sub>e</sub> that <em>would have been traded</em> at P<sub>e</sub>, but are now prevented by the floor.',
            analysis: 'As with a ceiling, DWL grows with the gap between P<sub>min</sub> and P<sub>e</sub> and with elasticity. The floor raises total welfare only if it offsets a larger pre-existing distortion — for example, a minimum wage in a <em>monopsonistic</em> labour market can raise both wages <em>and</em> employment, because monopsony already suppressed both. The textbook DWL result assumes a competitive market with no offsetting failure.'
          }
        ]
      },
      keyTerms: [
        { term: 'Price floor', def: 'A legal minimum price. Only binding when set above the equilibrium price; below P<sub>e</sub> it has no effect on the market.' },
        { term: 'Excess supply', def: 'Sellers want to supply more than buyers will buy at the controlled price: Q<sub>s</sub> > Q<sub>d</sub>. Quantity traded is Q<sub>d</sub>.' },
        { term: 'Binding floor', def: 'A floor that actually constrains the market — i.e. set above the free-market equilibrium price. A floor below P<sub>e</sub> is non-binding.' },
        { term: 'Monopsony exception', def: 'In a labour market with a dominant employer, a minimum wage can raise both wages and employment by counteracting employer power — reversing the standard competitive-market result.' }
      ],
      examEdge: 'Three classic floor examples: <strong>National Living Wage</strong> (£12.21/hr from April 2024 — limited disemployment evidence suggests the floor sits close to equilibrium for most workers); <strong>EU Common Agricultural Policy</strong> (guaranteed prices produced "butter mountains" and "wine lakes" that had to be bought, stored, or destroyed); <strong>Scotland minimum unit pricing on alcohol</strong> (50p/unit since 2018 — alcohol sales fell 3–7%, targeting heavy drinkers as positive-externality correction). The labour-market case has an evaluation upgrade: in a monopsonistic market, a minimum wage can <em>raise</em> employment and wages simultaneously by counteracting employer power.'
    },

    {
      id: 'price_controls_4',
      template: 'cause',
      stepLabel: 'Learn: Step 4 of 5',
      title: 'Price controls in the real world',
      tip: { icon: '🌍', tone: 'blue', text: 'Every real-world price control creates predictable side-effects. The pattern: short-term win for the protected group, long-term distortion, and unintended consequences that often hit the very people the policy was meant to help.' },
      causesStyle: 'tinted-flat',
      causesEmoji: '📋',
      causesLabel: 'Five UK and international examples',
      causes: [
        { tone: 'purple', icon: '🏠', head: 'Rent control (NYC, Berlin, parts of UK)',  body: 'Maximum rents set below market clearing. Shortages emerge as landlords exit (sell to owner-occupiers) and skip maintenance. Existing tenants who hold their flats benefit; new arrivals cannot find anything. Berlin\'s 2020 Mietendeckel was struck down by the courts after rental listings collapsed by ~50% within months.' },
        { tone: 'purple', icon: '⚡', head: 'UK energy price cap (Ofgem, 2019–)',         body: 'Cap on unit prices for default tariffs. Worked smoothly while wholesale prices were low; in 2021–22, wholesale costs surged above the cap and forced 25+ suppliers into bankruptcy. Government had to step in via Bulb administration and the Energy Price Guarantee — costs ultimately borne by taxpayers, not consumers.' },
        { tone: 'green',  icon: '💷', head: 'National Living Wage (UK, 2016–)',            body: 'Floor at £12.21/hr from April 2024. Set deliberately close to equilibrium for low-wage workers — Low Pay Commission research finds limited disemployment and significant income gains for the lowest paid. Careful floor-setting design avoids the textbook unemployment trap.' },
        { tone: 'green',  icon: '🌾', head: 'EU Common Agricultural Policy',              body: 'Guaranteed minimum prices for cereals, dairy, and beef from the 1960s. Produced enormous surpluses ("butter mountains", "wine lakes") that had to be stored, dumped, or destroyed. Distorted world prices and harmed developing-country farmers. Reformed from 1992 to direct income support instead of price guarantees.' },
        { tone: 'green',  icon: '🍷', head: 'Scotland minimum unit pricing on alcohol',    body: '50p/unit since May 2018. Floor targets cheap, strong alcohol disproportionately consumed by heavy drinkers. Evidence: alcohol-attributable deaths fell ~13%; cheap cider and own-brand spirits saw the biggest consumption drops. A floor justified by positive welfare gains from externality correction.' }
      ],
      examEdge: 'Three evaluation moves worth memorising: (1) <strong>Who really benefits?</strong> Ceilings often help insiders (existing tenants) at the expense of outsiders (new tenants who cannot find anywhere). (2) <strong>Who really pays?</strong> Energy price caps shift costs from consumers to suppliers and then taxpayers — they do not make the cost disappear. (3) <strong>Does the offsetting market failure justify the DWL?</strong> Alcohol MUP corrects a negative externality, so the welfare loss may be smaller than the externality it offsets; rent control rarely meets this bar.'
    },

    {
      id: 'price_controls_5',
      stepLabel: 'Learn: Step 5 of 5',
      title: 'Evaluation and alternatives',
      tip: { icon: '⚖️', tone: 'amber', text: 'Price controls treat the symptom (price). Targeted subsidies and supply-side reforms address the cause. The right policy depends on the underlying market failure — and on which group you weight most.' },
      comparison: {
        title: 'When do price controls help — or hurt?',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Case FOR price controls', caption: 'Fast to implement and politically appealing; protect vulnerable groups in the short term; can offset monopoly or monopsony power (e.g. minimum wage in a monopsonistic labour market); justified when the offsetting market failure is larger than the DWL the control creates (e.g. Scotland MUP).' },
        right: { tone: 'rose',  icon: '❌', label: 'Case AGAINST',            caption: 'Treat symptoms not causes; create shortages, surpluses, black markets, and quality decline; deadweight loss; insiders gain at the expense of outsiders; the cost burden shifts opaquely (suppliers, then taxpayers); poorly targeted compared with means-tested support.' }
      },
      keyTerms: [
        { term: 'Targeted subsidy', def: 'A subsidy directed only at households below an income threshold — more efficient than a universal price control because it preserves price signals for everyone else.' },
        { term: 'Income transfer', def: 'A direct cash payment (e.g. Universal Credit uplift, cost-of-living payment) — improves affordability without distorting the market.' },
        { term: 'Supply-side solution', def: 'Building more housing, training more workers, or increasing competition — addresses the root cause of high prices rather than capping the symptom. Slower but more durable.' },
        { term: 'Competition policy', def: 'Where high prices reflect monopoly power, breaking up or regulating dominant firms moves price toward the competitive level — fixing the failure without a price cap.' }
      ],
      examEdge: '<strong>The alternative-policy menu</strong> earns evaluation marks in any price-controls essay: <strong>(1) targeted subsidies</strong> reach those most in need without distorting prices for everyone; <strong>(2) income transfers</strong> preserve consumer choice; <strong>(3) supply expansion</strong> (build more houses, train more workers) addresses root causes but takes years; <strong>(4) competition policy</strong> pushes monopoly-driven prices toward competitive levels. <strong>A* upgrade</strong>: name the market structure before judging. A minimum wage in a competitive labour market destroys welfare; in a monopsonistic one, it may raise both wages and employment. Strong answers identify the underlying failure before reaching a verdict.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
