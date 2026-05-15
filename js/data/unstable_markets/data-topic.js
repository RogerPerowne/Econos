window.ECONOS_TOPIC = {
  id: 'unstable_markets',
  topicNum: '1.22',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Unstable Commodity Markets',
  estTime: '9-11 minutes',
  goal: 'Lock in why commodity markets are volatile, the buffer stock model, and the evaluation of price stabilisation schemes.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Agricultural and commodity markets are characterised by price volatility — inelastic supply and demand combined with unpredictable supply shocks create large price swings. Buffer stock schemes attempt to stabilise prices, but face significant practical challenges.',
    doInThis: 'Work through 7 cards covering why commodity markets are unstable, the role of PED/PES, the cobweb model, buffer stock mechanisms, their limitations, alternatives, and evaluation.',
    outcomes: [
      'Explain why commodity markets experience more price volatility than other markets',
      'Apply PED and PES analysis to commodity price instability',
      'Explain the cobweb model of agricultural price cycles',
      'Evaluate buffer stock schemes and alternative stabilisation approaches'
    ],
    tip: 'Volatile commodity prices: inelastic demand (necessities) + inelastic supply (seasonal) + unpredictable supply shocks = large price swings. Cobweb: farmers plan on last season\'s price → systematic over/underproduction cycles.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'unstable_markets_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Unstable commodity markets: the big picture',
      lede: 'Food and raw-material prices swing wildly because supply lags, demand is inelastic, and small shocks cause big movements.',
      branches: [
        { tone: 'green',  label: 'Why prices swing',     sub: 'Inelastic demand <em>and</em> inelastic short-run supply mean small shocks → large price changes.' },
        { tone: 'blue',   label: 'The cobweb model',     sub: 'Production lags + price-based planting decisions create cyclical convergent or divergent oscillations.' },
        { tone: 'rose',   label: 'Real-world costs',     sub: 'Farmer income volatility, food insecurity, inflation pass-through, investment uncertainty.' },
        { tone: 'amber',  label: 'Buffer stock schemes', sub: 'Government buys at floor, sells at ceiling to stabilise prices — in theory. In practice: cost, storage, corruption.' },
        { tone: 'purple', label: 'Globalised commodities', sub: 'World prices, futures markets, and speculation now dominate — domestic policy levers are weaker than ever.' }
      ],
      body: 'Agricultural and commodity markets are characterised by extreme price volatility because both supply and demand are highly price inelastic:<br><br><strong>Inelastic demand (|PED| < 1):</strong> food is a necessity — demand barely changes with price. When supply falls, consumers cannot easily substitute → large price rise needed to clear market.<br><br><strong>Inelastic supply (PES < 1, short run):</strong> supply is fixed by the season — once crops are planted, quantity cannot be quickly adjusted. A bad harvest causes a large price spike because supply cannot increase to meet demand.<br><br>Combined: any supply shock → very large price change. PED = -0.2, PES = 0.3 (typical agricultural estimates) → 1% fall in supply causes ~3-4% rise in price.',
      keyTerms: [
        { term: 'Price volatility', def: 'Large, unpredictable fluctuations in price — common in commodity markets due to inelastic demand and supply combined with supply shocks.' },
        { term: 'Supply shock', def: 'Sudden unexpected change in supply — drought, disease, geopolitical disruption — causes large price movements when supply is inelastic.' },
        { term: 'Commodity market', def: 'Market for standardised physical goods (wheat, coffee, oil, metals) — often highly volatile due to supply uncertainty and inelastic demand.' }
      ],
      examEdge: 'The mathematics of commodity price volatility: % change in price ≈ % change in supply \xf7 (|PED| + PES). If |PED| = 0.2 and PES = 0.3, and supply falls 10%, then price rises ≈ 10 \xf7  0.5 = 20%. The smaller the sum of elasticities, the larger the price swing from any supply shock. This formula is useful for estimating price impacts.'
    },
    {
      id: 'unstable_markets_2',
      template: 'framing',
      diagramKey: 'cobwebModel',
      title: 'The Cobweb Model',
      body: 'The <strong>cobweb model</strong> explains cyclical price and quantity oscillations in agricultural markets arising from production lags.<br><br><strong>Mechanism:</strong><br>1. Good harvest → low price this year.<br>2. Farmers plan next year\'s planting based on this year\'s (low) price → reduce acreage.<br>3. Bad supply next year → high price.<br>4. High price → farmers plant lots next year.<br>5. Large harvest → low price again. Cycle repeats.<br><br><strong>Convergent cobweb:</strong> if supply is more elastic than demand, oscillations shrink over time — market tends toward equilibrium. <strong>Divergent cobweb:</strong> if demand is more inelastic than supply is elastic, oscillations grow — market becomes increasingly unstable.',
      keyTerms: [
        { term: 'Cobweb model', def: 'A model of price/quantity cycles in markets with production lags — farmers base planting decisions on last period\'s price.' },
        { term: 'Convergent cobweb', def: 'Supply more elastic than demand — oscillations diminish; market converges to equilibrium.' },
        { term: 'Divergent cobweb', def: 'Demand more inelastic — oscillations grow; market diverges from equilibrium.' }
      ],
      examEdge: 'Cobweb diagram technique: draw S and D. Start below equilibrium at Q0 (excess demand → high price P1). At P1, supply = Q1 (read off supply curve). Q1 on demand curve gives P2 (low price). At P2, supply = Q2. Continue: if supply slope > demand slope (both negative/positive), convergent; if reverse, divergent. Draw the cobweb pattern explicitly.'
    },
    {
      id: 'unstable_markets_3',
      template: 'cause',
      title: 'Consequences of Price Volatility',
      causes: [
        { head: 'Consumer harm', body: 'Food price spikes reduce real incomes, particularly for low-income households in developing countries where food represents 50-70% of expenditure. Global food price spike (2007-08) contributed to food riots in 30+ countries.' },
        { head: 'Producer income instability', body: 'Farmers face highly volatile incomes — in bad years (low supply, which often coincides with high prices globally), they may still face local price spikes but lower yields. In good years, gluts depress prices → revenues fall despite high output.' },
        { head: 'Investment disincentive', body: 'Volatile prices deter long-run investment in agricultural capacity. Farmers uncertain about future prices under-invest in machinery, irrigation, and land improvement — reducing long-run supply capacity.' },
        { head: 'Macro instability in commodity exporters', body: 'Countries heavily dependent on commodity exports (Nigeria — oil; Zambia — copper; Brazil — soy) face government revenue volatility. Commodity price cycles create boom-bust fiscal and economic cycles.' }
      ],
      examEdge: 'The food price crisis of 2007-08 is the go-to commodity instability case study: drought in Australia + biofuel mandates in US (corn for ethanol) + speculative financial investment in food futures → global food prices doubled → political instability in 30+ countries. Multiple supply and demand shocks combining is typical of real commodity crises.'
    },
    {
      id: 'unstable_markets_4',
      template: 'mechanisms',
      title: 'Buffer Stock Schemes',
      intro: 'A buffer stock scheme is a government or international authority intervention to stabilise commodity prices within a target band.',
      steps: [
        { label: 'Mechanism — abundant year', text: 'Good harvest → price falls below floor. Authority buys surplus at the floor price → removes excess supply → price supported at floor. Stock accumulated in reserve.' },
        { label: 'Mechanism — scarce year', text: 'Poor harvest → price rises above ceiling. Authority sells from reserve → adds supply → price kept below ceiling. Stock depleted.' },
        { label: 'Price band', text: 'Authority sets a target price band (floor to ceiling). Within the band, market operates freely. Outside the band, authority intervenes. Long-run equilibrium price should be within the band for the scheme to be self-financing.' },
        { label: 'Finance requirement', text: 'Authority needs capital to buy stocks in good years. Storage costs must be funded. Risk: sustained low prices → authority runs out of funds; sustained high prices → authority runs out of stocks.' }
      ],
      examEdge: 'Buffer stock diagram: draw S and D with equilibrium at P*. Mark floor (Pf) and ceiling (Pc). Show a supply shift that would push price below Pf — government buys the difference (horizontal purchase arrow). Show a supply shift that pushes price above Pc — government sells from reserves. The authority acts as a countercyclical trader.'
    },
    {
      id: 'unstable_markets_5',
      template: 'cause',
      title: 'Limitations of Buffer Stock Schemes',
      causes: [
        { head: 'Storage costs', body: 'Storing physical commodities (grain, butter) is expensive. Costs include warehousing, preservation (temperature control, fumigation), transportation, and spoilage. EU "butter mountains" and "grain mountains" from CAP price supports: enormous storage costs and eventual dumping at below-market prices.' },
        { head: 'Setting the target price', body: 'If the floor price is set above the long-run equilibrium, permanent surplus accumulates. If below, permanent shortage. Identifying the "correct" long-run equilibrium is an information challenge — prices trend over time as technology and tastes change.' },
        { head: 'Financial sustainability', body: 'Sustained low prices exhaust the authority\'s purchase funds; sustained high prices exhaust reserves. International Tin Council (1985): ran out of money to support the floor price → collapsed → tin price fell 50% instantly.' },
        { head: 'Speculation and manipulation', body: 'Traders aware of the floor/ceiling can exploit the scheme — buy just before the authority must sell; sell just before the authority must buy. Buffer stock schemes can be destabilised by speculative attacks.' }
      ],
      examEdge: 'The International Tin Agreement collapse (1985) is the definitive buffer stock failure case study. The authority over-committed to a floor price that was above the long-run market equilibrium → bought more than it could finance → ran out of money → floor collapsed → prices crashed far below equilibrium (overcorrection). A devastating real-world test.'
    },
    {
      id: 'unstable_markets_6',
      template: 'paired',
      title: 'Buffer Stocks vs Alternatives',
      left: {
        label: 'Buffer stock schemes',
        points: [
          'Direct price stabilisation within a band — predictable outcome',
          'Producers and consumers both benefit from price stability',
          'Can be internationally coordinated (coffee, cocoa agreements)',
          'Limitation: storage costs; financial sustainability; information requirements',
          'Historical record is poor — most international commodity agreements have failed'
        ]
      },
      right: {
        label: 'Alternative approaches',
        points: [
          'Futures markets: producers sell forward contracts locking in a price regardless of future spot price. Cost: foregone upside if prices rise.',
          'Income stabilisation funds: governments save commodity revenue in sovereign wealth funds (Norway, Chile) and draw down in downturns — macro buffer without physical storage.',
          'Diversification: commodity-dependent countries diversify into manufacturing and services to reduce income volatility.',
          'R&D investment: develop drought/disease-resistant crop varieties to reduce supply shocks and smooth the cobweb.'
        ]
      },
      examEdge: 'Futures markets are the private-sector alternative to buffer stocks. A wheat farmer selling futures contracts in March for September delivery locks in a price — hedges against price risk. The farmer gives up potential gains (if price rises) to avoid losses (if price falls). Financial markets provide price stability without government intervention and storage costs.'
    },
    {
      id: 'unstable_markets_7',
      template: 'framing',
      title: 'Commodity Markets in a Globalised World',
      body: '<strong>OPEC and oil markets:</strong> the oil cartel manages supply to stabilise (or raise) oil prices. OPEC+ production cuts in 2020 (after COVID demand collapse) and 2022-23 demonstrate supply management at global scale. Unlike buffer stocks, OPEC restricts supply (withholds production) rather than storing it — different mechanism, same price stabilisation goal.\n\n<strong>Financialisation of commodity markets:</strong> since 2000s, financial investors (hedge funds, pension funds) trade commodity futures alongside physical traders. This has increased price co-movement with financial markets and potentially increased volatility — commodity prices rose in 2022 partly due to financial flows, not just supply disruption.',
      keyTerms: [
        { term: 'OPEC', def: 'Organisation of Petroleum Exporting Countries — cartel controlling ~40% of world oil supply, managing production to influence prices.' },
        { term: 'Financialisation', def: 'Increased role of financial instruments and investors in commodity markets — may amplify price volatility beyond fundamentals.' },
        { term: 'Commodity futures', def: 'Contracts to buy/sell a fixed quantity of a commodity at a set price on a future date — allow producers and consumers to hedge price risk.' }
      ],
      examEdge: 'OPEC is a supply-side price stabilisation mechanism: restrict supply to raise price (floor management). Contrast with buffer stocks: buffer stocks use reserves to stabilise (buying/selling existing stocks); OPEC manages new production. Both aim to reduce price volatility but OPEC\'s primary goal is actually to raise prices above competitive equilibrium — a cartel, not a neutral stabilisation scheme.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'um-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: unstable markets',
      question: 'Evaluate the case for government intervention to stabilise prices in agricultural and commodity markets. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define price instability and explain why it is a particular problem in agricultural and commodity markets. Introduce the range of possible government interventions and the debate about their effectiveness.',
          hint: 'Agricultural/commodity prices: volatile because supply is inelastic in short run (growing season, extraction lead times) and demand is price inelastic. Small supply shocks → large price swings. Cobweb model: price cycles from supply response lags. Interventions: buffer stocks, price floors, income support, futures markets.',
          model: 'Agricultural and commodity markets are characterised by acute price instability arising from the combination of price-inelastic demand, inelastic short-run supply, and the delayed supply response inherent in biological or geological production cycles. A drought, frost, or geopolitical disruption can cause large price swings that impose severe welfare costs on producers (price collapses ruin farm incomes), consumers (price spikes harm food security), and macroeconomic stability (commodity price inflation transmits to general price levels). The cobweb model formalises how supply response lags generate cyclical price oscillations. This essay evaluates whether government intervention — through buffer stocks, floor prices, income support, or international agreements — effectively addresses these instabilities at acceptable cost.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Price instability imposes real welfare costs that markets cannot self-correct',
          prompt: 'Explain the welfare costs of price instability for farmers (income uncertainty, investment underinvestment), consumers (food security), and the broader economy (inflation, BoP volatility in commodity-dependent countries).',
          hint: 'Farmers: low prices → farm incomes collapse → unable to invest in next season → supply falls further → price spike. Food security: price spikes → malnutrition in low-income households. Commodity-dependent LDCs: export revenues volatile → fiscal instability, debt crises.',
          model: 'Price instability in commodity markets generates welfare costs that markets cannot self-correct because the underlying source — inelastic supply responses with biological lags — is inherent to the production process, not a market distortion. For farmers, price volatility creates income uncertainty that discourages long-run investment in capacity, land improvement, and technology adoption — a source of dynamic inefficiency in food production. For consumers in low-income households, food price spikes directly threaten food security: the 2007–08 global food price crisis, when wheat and rice prices doubled within a year, contributed to nutritional deprivation and social unrest across 30+ countries. For commodity-exporting developing economies, revenue volatility triggers fiscal crises, debt accumulation, and exchange rate instability — the "resource curse" of primary commodity dependence.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Buffer stocks can stabilise prices by absorbing supply and demand shocks',
          prompt: 'Explain how a government buffer stock scheme — buying commodity when price falls below a floor, selling from reserves when price rises above a ceiling — can stabilise prices and incomes for both producers and consumers.',
          hint: 'Buffer stock: government buys when P < floor (accumulates reserves) and sells when P > ceiling (releases reserves). Stabilises within a band. Reduces cobweb oscillations. Requires significant capital to build reserves. EU CAP: intervention buying. International Cocoa/Coffee agreements.',
          model: 'Buffer stock schemes provide the clearest theoretical mechanism for commodity price stabilisation. By committing to buy the commodity at a minimum price (floor) and sell from accumulated reserves at a maximum price (ceiling), the government absorbs supply and demand shocks that would otherwise cause large price swings. In a poor harvest year, the scheme releases stocks to prevent price spikes; in a bumper harvest year, it buys excess supply to prevent price collapses. Both producers and consumers benefit from the price stability: farmers can plan investments with greater certainty, and consumers face more predictable food costs. The EU\'s Common Agricultural Policy historically used intervention buying as a buffer stock mechanism, and international commodity agreements — for cocoa, coffee, and rubber — attempted similar price band stabilisation in the 1970s–80s.'
        },
        {
          type: 'counter',
          label: 'Counter — Buffer stocks are costly and prone to failure in practice',
          prompt: 'Argue that buffer stocks require enormous capital to build reserves, face systematic difficulties in setting the right floor/ceiling prices, and have historically failed — creating surpluses (EU food mountains) or running out of funds.',
          hint: 'EU butter mountains, wine lakes: floor price set too high → permanent surplus accumulation → billions in storage costs → eventual dumping at below-market prices. International tin agreement collapse (1985): funds exhausted. Wrong price band → intervention operates one-sided. Structural price shifts make pre-set bands obsolete.',
          model: 'In practice, buffer stock schemes have a poor track record. The EU\'s intervention buying system set floor prices above long-run equilibrium to protect farm incomes, generating structural surpluses — "butter mountains," "wine lakes," and grain mountains — that cost billions to store and eventually required subsidised disposal that depressed world prices for developing country producers. The International Tin Agreement collapsed in 1985 when the scheme exhausted its funds trying to defend an unsustainably high floor price. The fundamental problem is that correctly identifying the long-run equilibrium price is an information challenge government agencies cannot reliably solve: technological change (higher-yield seeds), climate shifts, and demand growth continuously alter equilibrium prices, making any pre-set floor/ceiling prone to becoming distorted. When structural price shifts occur, the scheme operates one-sidedly — perpetually accumulating or perpetually depleting stocks.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Alternative instruments may be more effective and less costly',
          prompt: 'Evaluate whether futures markets, income support schemes, supply management quotas, or international diversification agreements represent more effective alternatives to direct price controls in commodity markets.',
          hint: 'Futures markets: private-sector price stabilisation — farmer sells forward at fixed price. No storage cost, no government capital required. Income support: decouple from production (EU single farm payment) → stabilise incomes without creating surpluses. Diversification: LDC structural transformation reduces commodity dependence. Each has limitations.',
          model: 'Several alternative instruments may deliver more effective stabilisation at lower cost than buffer stocks. Futures and forward markets allow farmers to lock in prices before harvest, hedging against price risk at minimal social cost — the farmer sacrifices potential upside gains in exchange for income certainty, with no government capital tied up in physical reserves. Income support schemes — like the EU\'s post-2003 Single Farm Payment, which decoupled support from production levels — stabilise farmer incomes without incentivising excess production or creating surpluses. However, futures markets require sufficient market depth and sophistication that may be absent in developing countries; income support requires sustained fiscal commitment; and international diversification is a decades-long structural transition. For acute, short-term food security crises in vulnerable economies, some form of government intervention — strategic food reserves, import subsidies, targeted consumption support — remains difficult to avoid entirely.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a judgement: is government intervention to stabilise commodity prices justified, and what form should it take?',
          hint: 'Intervention justified: genuine market failure (instability from structural inelasticities), welfare costs are large and fall on vulnerable groups. But buffer stocks are a flawed instrument. Preferred approach: combination of futures markets for risk management, income support decoupled from production, and strategic reserves for acute food security crises only.',
          model: 'In conclusion, the case for some degree of government intervention in commodity markets is strong: price instability arises from structural market features (inelastic supply and demand, biological lags), not temporary inefficiencies, and the welfare costs — farmer income collapse, consumer food insecurity, macroeconomic volatility — are large and disproportionately borne by the most vulnerable. However, traditional buffer stock schemes have a poor track record due to information problems, storage costs, and the difficulty of setting sustainable price bands. The most effective policy combines decoupled income support (stabilising farm incomes without production distortions), encouragement of futures market participation for risk management, and strategic food reserves limited to genuine food security emergencies — while promoting long-run structural diversification in commodity-dependent economies to reduce their underlying vulnerability. Blanket price controls that ignore the cost of government failure are as harmful as the instability they aim to address.'
        }
      ]
    }
  ]
};
