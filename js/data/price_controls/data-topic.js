window.ECONOS_TOPIC = {
  id: 'price_controls',
  topicNum: '4.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: '4.1 Government Intervention in Markets',
  estTime: '15-18 minutes',
  goal: 'Master the seven Edexcel intervention tools — indirect taxes, subsidies, maximum and minimum prices, tradable pollution permits, state provision, information provision and regulation — and learn to pick the right tool for the right market failure.',
  intro: {
    heroKey: 'heroPrice',
    summary: 'Governments intervene when markets fail. The spec lists seven tools that split into two families: price-changing interventions (taxes, subsidies, max/min prices) that work through the price mechanism, and other tools (permits, state provision, information, regulation) that work directly on quantities, access or behaviour.',
    doInThis: 'Work through 10 cards: an overview map, four price-changing tools with interactive welfare diagrams, four "other" tools with case studies, and a synthesis card that matches each market failure to its best-fit policy.',
    outcomes: [
      'Distinguish specific from ad valorem indirect taxes and identify tax incidence using PED and PES',
      'Use the welfare diagram to show how taxes, subsidies, ceilings and floors redistribute surplus and create DWL',
      'Explain how tradable pollution permits, state provision, information and regulation work and where each is most effective',
      'Match each market failure (externalities, public goods, info gaps, market power) to the best-fit policy tool',
      'Evaluate every intervention against the risk of government failure: distorted price signals, unintended consequences, admin costs and information gaps'
    ],
    tip: 'For every intervention ask three things: (1) What market failure does it address? (2) Who gains, who loses, and who pays? (3) Could a different tool do the same job with less distortion? These three questions earn the bulk of the evaluation marks.',
    stages: [
      { num: 1, name: 'Learn it', sub: '10 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ============================================================
       CARD 1 — The big picture: why governments intervene
       ============================================================ */
    {
      id: 'price_controls_1',
      stepLabel: 'Learn: Step 1 of 10',
      title: 'The big picture: why governments intervene',
      tip: { icon: '🎯', tone: 'blue', text: 'Governments intervene to improve economic welfare when markets fail. The spec gives you <strong>seven tools</strong> split into two families — price-changing tools and "other" tools. Different problems need different tools.' },
      diagramPanel: { diagramKey: 'policySpectrumDiagram', title: null, layout: 'stacked' },
      causesStyle: 'tinted-flat',
      causesEmoji: '🧭',
      causesLabel: 'The four market failures intervention tries to fix',
      causes: [
        { tone: 'rose',   icon: '🏭', head: 'Externalities',              body: 'Third-party costs (pollution) or benefits (vaccination) the market ignores. The market over- or under-produces relative to the social optimum.' },
        { tone: 'amber',  icon: '🏛️', head: 'Under-provision of public goods', body: 'Non-rival, non-excludable goods (defence, street lighting) the private sector won\'t provide because of the free-rider problem.' },
        { tone: 'blue',   icon: '🔍', head: 'Information gaps',            body: 'Asymmetric or imperfect information leads consumers and producers to make poor decisions — e.g. demerit goods like cigarettes or unsafe products.' },
        { tone: 'purple', icon: '⚖️', head: 'Market power / inequity',     body: 'Monopolies set prices above marginal cost; very unequal income distributions create welfare and political concerns the market alone cannot correct.' }
      ],
      framework: {
        label: 'The seven spec tools — two families',
        diagramKey: null,
        tiles: [
          { tone: 'green',  icon: '💸', title: 'Price-changing tools',
            body: 'Work through the price mechanism — change relative prices to shift behaviour.<br><br><strong>1. Indirect taxes</strong> (specific & ad valorem)<br><strong>2. Subsidies</strong><br><strong>3. Maximum prices</strong> (ceilings)<br><strong>4. Minimum prices</strong> (floors)' },
          { tone: 'purple', icon: '🛠️', title: 'Other tools',
            body: 'Work directly on quantities, access or behaviour — they don\'t rely on prices.<br><br><strong>5. Tradable pollution permits</strong><br><strong>6. State provision of public goods</strong><br><strong>7. Provision of information</strong><br><strong>8. Regulation</strong>' }
        ]
      },
      tipLate: { icon: '⚖️', tone: 'amber', text: '<strong>The aim is allocative efficiency and equity</strong> — but every tool brings risks of government failure (distorted signals, unintended consequences, admin costs, info gaps). The next nine cards build each tool and then bring them together in a decision matrix.' },
      examEdge: 'Top answers <em>name the market failure first, then choose the tool</em>. "Tradable permits work better than a Pigouvian tax for CO₂ because the regulator can set the total emissions cap with certainty even when abatement costs are uncertain." Linking the tool to the specific failure it addresses is what separates A from B grades.'
    },

    /* ============================================================
       CARD 2 — Indirect taxation: specific vs ad valorem
       ============================================================ */
    {
      id: 'price_controls_2',
      stepLabel: 'Learn: Step 2 of 10',
      title: 'Indirect taxation — specific vs ad valorem',
      tip: { icon: '💷', tone: 'green', text: 'An <strong>indirect tax</strong> is a tax on spending, paid by the producer but usually passed (at least partly) to the consumer. A <strong>specific tax</strong> shifts supply up by a fixed amount per unit; an <strong>ad valorem tax</strong> pivots supply because it is a percentage of price.' },
      interactiveDiagram: [
        {
          svgKey: 'taxTypesInteractive',
          label: 'Specific vs ad valorem — how supply shifts differently',
          emoji: '📐',
          layers: ['idl-1', 'idl-2'],
          views: [
            {
              label: 'Free market',
              tone: 'blue',
              head: 'The free-market baseline',
              body: 'D and S intersect at P₀, Q₀. No tax wedge, no distortion — this is the benchmark every policy is judged against.',
              analysis: 'Without intervention the market is allocatively efficient: every unit produced has MB ≥ MC and total surplus is maximised. Any tax that moves price and quantity away from this point creates a welfare cost — unless it corrects a negative externality larger than the DWL it creates.'
            },
            {
              label: 'Specific tax',
              tone: 'amber',
              head: 'Specific tax — parallel shift (e.g. fuel duty, alcohol duty)',
              body: 'A fixed £ per unit (e.g. 57.95p/litre of petrol). Supply shifts <strong>parallel</strong> upward by exactly £T at every quantity. Consumer price rises to <strong>P<sub>c</sub></strong>; quantity falls to <strong>Q<sub>t</sub></strong>.',
              analysis: 'Parallel shift means the tax gap is constant at all prices. <strong>Real UK examples:</strong> fuel duty (57.95p/litre), tobacco duty (£7.01 per 20 cigarettes + 16.5% ad valorem), alcohol duty (per unit of pure alcohol). Specific taxes are easy to administer but erode in real terms with inflation unless manually uprated.'
            },
            {
              label: 'Ad valorem tax',
              tone: 'purple',
              head: 'Ad valorem tax — pivot shift (e.g. 20% VAT)',
              body: 'A percentage of price (e.g. 20% VAT). The £ amount of tax is <em>small at low prices, large at high prices</em> — so supply <strong>pivots</strong> upward. The gap between S and S+T% widens as price rises.',
              analysis: 'Pivoting supply means higher-priced goods carry more tax in £ terms. <strong>Key difference:</strong> ad valorem taxes grow automatically with inflation (VAT revenue rises when prices rise); specific taxes don\'t. This makes VAT more stable as a revenue source but less predictable in its quantity effect for expensive goods.'
            }
          ]
        },
        {
          svgKey: 'taxIncidenceInteractive',
          label: 'Tax incidence — who actually pays?',
          emoji: '⚖️',
          layers: ['idl-1', 'idl-2', 'idl-3'],
          views: [
            {
              label: 'Tax in place',
              tone: 'blue',
              head: 'The tax wedge: P<sub>c</sub>, P<sub>p</sub> and £T',
              body: 'Supply has shifted to S+T. Quantity falls to Q<sub>t</sub>. Consumers pay P<sub>c</sub>; producers receive net price P<sub>p</sub>. The vertical gap P<sub>c</sub> − P<sub>p</sub> = the per-unit tax £T.',
              analysis: 'P<sub>c</sub> > P₀ > P<sub>p</sub> — consumers pay more, producers receive less. <strong>Legal vs economic incidence:</strong> the seller remits the tax to HMRC, but the economic burden falls on whoever is less elastic. The next two steps split that burden explicitly.'
            },
            {
              label: 'Consumer burden',
              tone: 'blue',
              head: 'The consumer burden: (P<sub>c</sub> − P₀) × Q<sub>t</sub>',
              body: 'The <strong style="color:#2563EB">blue rectangle</strong> = the consumer burden. Consumers pay P<sub>c</sub> instead of P₀ on Q<sub>t</sub> units. The more <em>inelastic demand</em> is, the larger this rectangle.',
              analysis: '<strong>Inelastic demand → consumers bear more.</strong> Cigarettes: PED ≈ −0.3 → consumers absorb ~75% of tobacco duty. Petrol: PED ≈ −0.1 in the short run → consumers absorb almost all fuel duty. This makes these taxes regressive — low-income households spend a higher share of income on these goods.'
            },
            {
              label: 'Producer burden',
              tone: 'rose',
              head: 'The producer burden: (P₀ − P<sub>p</sub>) × Q<sub>t</sub>',
              body: 'The <strong style="color:#dc2626">red rectangle</strong> = the producer burden. Producers receive P<sub>p</sub> instead of P₀ on Q<sub>t</sub> units. The more <em>inelastic supply</em> is, the larger this rectangle.',
              analysis: '<strong>Inelastic supply → producers bear more.</strong> Together the blue + red rectangles = total tax revenue. The DWL triangle (the area between Q<sub>t</sub> and Q₀ that is neither consumer burden nor producer burden nor government revenue) is welfare lost permanently — not transferred to anyone.'
            }
          ]
        }
      ],
      keyTerms: [
        { term: 'Specific tax',   def: 'A fixed amount per unit (e.g. 57.95p per litre of petrol). Causes a <strong>parallel</strong> upward shift in supply.' },
        { term: 'Ad valorem tax', def: 'A percentage of price (e.g. 20% VAT, tobacco at 16.5% of retail). Causes supply to <strong>pivot</strong> upward — gap widens at higher prices.' },
        { term: 'Tax incidence',  def: 'How the burden of a tax is split between buyers and sellers. The more <strong>inelastic</strong> side of the market pays more of the tax.' },
        { term: 'Pigouvian tax',  def: 'A tax set equal to the marginal external cost of a negative externality. Internalises the externality and can raise welfare even though it creates private-market DWL.' }
      ],
      examEdge: '<strong>Three evaluation moves:</strong> (1) <em>Name the incidence</em> — "demand for cigarettes is inelastic, so consumers bear ~80% of the duty." (2) <em>Distinguish revenue from welfare</em> — tax revenue is a <strong>transfer</strong> (not lost), only the DWL triangle is welfare lost forever. (3) <em>Test for Pigouvian justification</em> — if the tax targets a negative externality and the rate is set close to MEC, the welfare verdict flips from "bad" to "good".'
    },

    /* ============================================================
       CARD 3 — Subsidies
       ============================================================ */
    {
      id: 'price_controls_3',
      stepLabel: 'Learn: Step 3 of 10',
      title: 'Subsidies',
      tip: { icon: '🎁', tone: 'purple', text: 'A <strong>subsidy</strong> is a payment from government to producers (or consumers) that lowers the cost of supply. Supply shifts <em>right</em>, price falls, quantity rises. It is the mirror image of an indirect tax.' },
      interactiveDiagram: {
        svgKey: 'subsidyDiagramInteractive',
        label: 'Build the subsidy diagram step by step',
        emoji: '📊',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market baseline',
            body: 'D and S intersect at P<sub>e</sub>, Q<sub>e</sub>. Total welfare = CS + PS, with no subsidy in place.',
            analysis: 'The free market under-produces goods with positive externalities (vaccination, education, EV charging infrastructure). A subsidy is the standard tool to push output toward the socially optimal level — it expands quantity past the private market equilibrium.'
          },
          {
            label: 'Subsidy shifts supply',
            tone: 'green',
            head: 'S shifts right by the subsidy',
            body: 'Buyers now pay P<sub>1</sub> (lower); sellers receive P<sub>1</sub> + subsidy. Output rises from Q<sub>0</sub> to Q<sub>1</sub>.',
            analysis: 'The vertical gap between the new and old supply curves equals the per-unit subsidy. Quantity always rises because at every quantity producers now receive more than buyers pay. Common UK examples: solar PV (Smart Export Guarantee), EV purchase grants (now retired), bus operator subsidies, R&D tax credits.'
          },
          {
            label: 'Who benefits?',
            tone: 'amber',
            head: 'Both CS and PS expand',
            body: 'CS rises (buyers pay less); PS rises (sellers receive more per unit and sell more units). <strong>The more inelastic side captures more of the subsidy benefit.</strong>',
            analysis: 'Incidence works the same way as a tax. If demand is inelastic (e.g. insulin), most of the subsidy passes through to consumers as lower prices. If supply is inelastic (e.g. central London housing), most goes to producers as higher receipts. This is why housing subsidies often inflate land values rather than helping renters.'
          },
          {
            label: 'Cost to government',
            tone: 'rose',
            head: 'Subsidy cost vs welfare gain',
            body: 'Government spending = subsidy × Q<sub>1</sub>. CS + PS rise by <em>less</em> than this — the gap is DWL from over-consumption beyond the free-market level.',
            analysis: 'Unless the subsidy corrects a positive externality (MEB > 0), it creates DWL by pushing output past the socially optimal level. <strong>Verdict flips</strong> when MEB exists and is large enough: vaccination subsidies, R&D subsidies and free school meals are usually welfare-improving. <strong>Opportunity cost</strong> always applies — subsidy money cannot also be spent on hospitals or schools.'
          }
        ]
      },
      illustratedGrid: [
        { tone: 'green',  title: '🚌 £2 bus fare cap (2023–24)', body: 'Government subsidy capped single bus fares nationally at £2. Large CS gain for regular commuters; modest effect on modal shift. Cost ~£600m/year — opportunity cost against other transport priorities.' },
        { tone: 'blue',   title: '🔬 R&D tax credits',           body: 'Firms claim 20–27% of qualifying R&D costs back against corporation tax. Strong evidence of additionality — firms do more R&D than without the subsidy, because innovation has large positive MEB (spillovers to the wider economy).' },
        { tone: 'purple', title: '🌱 Boiler Upgrade Scheme',     body: 'Grant of £7,500 toward a heat pump. Producer subsidy shifting consumer demand toward low-carbon heating. Slow take-up suggests elasticity of demand for heat pumps is low despite the large subsidy — supply constraint dominates.' },
        { tone: 'amber',  title: '🚜 Agricultural support (post-CAP)', body: 'UK\'s Environmental Land Management (ELM) pays farmers per hectare of habitat they restore. Producer subsidy targeting positive externalities (biodiversity, flood prevention) rather than output volume.' }
      ],
      illustratedGridLabel: 'UK subsidy case studies',
      illustratedGridEmoji: '📋',
      keyTerms: [
        { term: 'Producer subsidy', def: 'Payment per unit to suppliers — used for solar PV, agricultural support, public transport.' },
        { term: 'Consumer subsidy', def: 'Payment to buyers (vouchers, free provision) — used for free school meals, NHS prescriptions for under-16s.' },
        { term: 'Subsidy incidence', def: 'How the benefit splits between buyers and sellers — more inelastic side captures more of the gain.' },
        { term: 'Positive externality (MEB)', def: 'The third-party benefit a subsidy is often designed to internalise. If MEB > 0, the subsidy can raise welfare.' }
      ],
      examEdge: '<strong>Three classic UK case studies:</strong> (1) <em>EV plug-in grant</em> — boosted EV adoption but disproportionately benefited high-income buyers; retired in 2022. (2) <em>Bus operator subsidy (£2 fare cap)</em> — large CS gain, but cost ~£600m/year and may not be sustainable. (3) <em>R&D tax credits</em> — strong evidence of additionality (firms do more R&D than they would have done) because innovation has large MEB. <strong>Evaluation upgrade:</strong> always check (a) is there an externality, (b) does the subsidy actually change behaviour or just transfer cash, and (c) what is the opportunity cost.'
    },

    /* ============================================================
       CARD 4 — Maximum prices (price ceilings) — from old card 2
       ============================================================ */
    {
      id: 'price_controls_4',
      stepLabel: 'Learn: Step 4 of 10',
      title: 'Maximum prices (price ceilings)',
      tip: { icon: '🧢', tone: 'amber', text: 'A price ceiling is binding only when set <strong>below</strong> equilibrium. It creates a shortage, redistributes surplus from sellers to lucky buyers, and destroys welfare through the DWL triangle.' },
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
            tone: 'amber',
            head: 'P<sub>max</sub> below P<sub>e</sub> — a shortage opens up',
            body: 'At P<sub>max</sub>, sellers supply only Q<sub>s</sub>, but buyers demand Q<sub>d</sub>. The horizontal gap Q<sub>d</sub> − Q<sub>s</sub> is the <strong>shortage</strong>. Trades are rationed to Q<sub>s</sub>.',
            analysis: 'A ceiling is only <em>binding</em> if it sits below P<sub>e</sub>; above P<sub>e</sub> it has no effect. Because quantity supplied (Q<sub>s</sub>) is now the short side of the market, Q<sub>s</sub> becomes the quantity actually traded. Non-price rationing fills the gap — queues, waiting lists, black markets, or quality reductions are all common real-world responses.'
          },
          {
            label: 'Surplus shifts',
            tone: 'amber',
            head: 'PS shrinks; CS effect is ambiguous',
            body: 'PS shrinks: sellers transact fewer units at a lower price. CS <em>may</em> rise if buyers who value the good most get the rationed quantity — but with random rationing or queueing costs, CS can fall.',
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

    /* ============================================================
       CARD 5 — Minimum prices (price floors) — from old card 3
       ============================================================ */
    {
      id: 'price_controls_5',
      stepLabel: 'Learn: Step 5 of 10',
      title: 'Minimum prices (price floors)',
      tip: { icon: '🪜', tone: 'green', text: 'A price floor is binding only when set <strong>above</strong> equilibrium. It creates a surplus, redistributes surplus from buyers to sellers (often), and destroys welfare through the DWL triangle.' },
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
            body: 'CS shrinks: buyers pay a higher price and transact fewer units. PS <em>may</em> rise if the higher per-unit price outweighs the lost quantity — but if demand is elastic, PS can fall.',
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

    /* ============================================================
       CARD 6 — Tradable pollution permits (cap-and-trade)
       ============================================================ */
    {
      id: 'price_controls_6',
      stepLabel: 'Learn: Step 6 of 10',
      title: 'Tradable pollution permits (cap-and-trade)',
      tip: { icon: '🏭', tone: 'blue', text: 'Government <strong>sets a cap</strong> on total emissions and issues permits equal to the cap. Firms must hold a permit for every tonne they emit. They can <strong>trade</strong> permits — creating a market price for pollution.' },
      workedExample: {
        scene: 'capAndTrade',
        label: null,
        cards: [
          { tone: 'blue',   icon: '🏛️', title: 'Government sets the cap',    body: 'The regulator decides the total annual emissions allowed (e.g. 87 Mt CO₂e for UK power & industry). This is the hard environmental ceiling — unlike a Pigouvian tax, the quantity outcome is <em>certain</em>.' },
          { tone: 'green',  icon: '🔄', title: 'Firms trade permits',          body: 'Firms with <em>low</em> abatement costs cut emissions and <strong>sell</strong> spare permits. Firms with <em>high</em> abatement costs <strong>buy</strong> them. The market finds the cheapest abatement first — cost-efficient by design.' },
          { tone: 'amber',  icon: '💰', title: 'Market sets the price',        body: 'The permit price (UK ETS ≈ £35–50/tCO₂ in 2024) is set by supply and demand between firms. Firms compare the permit price against their internal abatement cost: if abating is cheaper, cut; if buying is cheaper, buy a permit.' }
        ]
      },
      causesStyle: 'tinted-flat',
      causesEmoji: '⚙️',
      causesLabel: 'How cap-and-trade works in four steps',
      causes: [
        { tone: 'blue',   icon: '1️⃣', head: 'Government sets a cap',          body: 'Total annual emissions are capped (e.g. UK ETS 2024 cap ≈ 87 Mt CO₂e for power and industry). The cap usually <strong>tightens each year</strong> to drive abatement.' },
        { tone: 'purple', icon: '2️⃣', head: 'Permits issued or auctioned',    body: 'One permit = one tonne of CO₂e. Firms buy permits at auction (most) or get them free (declining share to protect trade-exposed industries).' },
        { tone: 'green',  icon: '3️⃣', head: 'Firms trade permits',            body: 'Firms with <em>low</em> abatement costs cut emissions and sell spare permits. Firms with <em>high</em> abatement costs buy permits. The market finds the cheapest cuts first.' },
        { tone: 'amber',  icon: '4️⃣', head: 'Market sets the permit price',   body: 'Permit price reflects the marginal cost of abatement. UK ETS price ≈ £35-50/tCO₂ in 2024. Firms decide: pay this, or abate.' }
      ],
      comparison: {
        title: 'Why economists prefer cap-and-trade',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Strengths',
          caption: '<strong>Environmental certainty</strong> — the cap guarantees the emissions outcome. <strong>Cost-efficient</strong> — the market finds the cheapest abatement opportunities first. <strong>Flexible</strong> — firms choose whether to abate or buy permits. <strong>Dynamic incentive</strong> — firms profit from innovating to cut emissions and sell spare permits.' },
        right: { tone: 'rose',  icon: '❌', label: 'Weaknesses',
          caption: '<strong>Price volatility</strong> — permit prices swing with the business cycle (EU ETS collapsed to €5 in the 2010s). <strong>Carbon leakage</strong> — firms relocate to uncapped jurisdictions. <strong>Distributional</strong> — free allocations can over-compensate incumbents. <strong>Coverage gaps</strong> — UK ETS excludes agriculture and most transport.' }
      },
      keyTerms: [
        { term: 'Cap',                 def: 'The total quantity of emissions allowed across all covered firms in a period. The binding environmental constraint.' },
        { term: 'Permit (allowance)',  def: 'A tradable right to emit one tonne of CO₂e. Firms must surrender permits equal to verified emissions each year.' },
        { term: 'Abatement cost',      def: 'The cost to a firm of cutting one tonne of emissions. Firms compare this to the permit price: if abatement is cheaper, cut; if dearer, buy a permit.' },
        { term: 'Carbon leakage',      def: 'When a cap pushes emissions abroad instead of cutting them globally — firms relocate to jurisdictions without a carbon price.' }
      ],
      examEdge: '<strong>UK ETS vs EU ETS:</strong> the UK launched its own ETS in 2021 after Brexit. Covers power, industry, aviation. <strong>EU ETS</strong> is the world\'s largest carbon market — 40% of EU emissions, with a Carbon Border Adjustment Mechanism (CBAM) from 2026 to tackle leakage. <strong>Tax vs permits — the killer comparison:</strong> a Pigouvian tax fixes the <em>price</em> of carbon and lets quantity adjust; cap-and-trade fixes the <em>quantity</em> and lets price adjust. Use a tax when you know MEC precisely; use permits when the environmental target is non-negotiable (e.g. legally binding net zero).'
    },

    /* ============================================================
       CARD 7 — State provision of public goods
       ============================================================ */
    {
      id: 'price_controls_7',
      stepLabel: 'Learn: Step 7 of 10',
      title: 'State provision of public goods',
      tip: { icon: '🏛️', tone: 'purple', text: '<strong>Public goods</strong> are non-rival (one person\'s use doesn\'t reduce another\'s) and non-excludable (no one can be prevented from using them). The free-rider problem means the private sector under-provides — so the state steps in and funds provision via taxation.' },
      workedExample: { scene: 'publicGoods', label: null, cards: [] },
      causes: [
        { tone: 'purple', icon: '🔓', head: 'Non-excludable',
          body: 'Once provided, no one can be prevented from benefiting — e.g. you cannot stop someone watching the fireworks display from a nearby hill.' },
        { tone: 'blue',   icon: '🤝', head: 'Non-rival',
          body: 'One person\'s consumption doesn\'t reduce the amount available to others — your enjoyment of street lighting doesn\'t dim it for the next pedestrian.' },
        { tone: 'amber',  icon: '🪤', head: 'Free-rider problem',
          body: 'No one will pay if they can use the good without paying. So private firms cannot capture enough revenue and the market under-provides — or fails to provide at all.' }
      ],
      causesStyle: 'tinted-flat',
      causesLabel: 'Why the market fails for public goods',
      illustratedGrid: [
        { tone: 'purple', title: '🛡️ Defence',          body: 'The classic non-rival, non-excludable case. National defence protects all citizens at once; no one can be excluded. UK defence spending ≈ 2.3% of GDP.' },
        { tone: 'blue',   title: '🗼 Lighthouses',      body: 'Historically cited as the textbook public good — once the light is on, every passing ship benefits whether or not the owner pays.' },
        { tone: 'amber',  title: '💡 Street lighting', body: 'Non-rival (everyone benefits) and non-excludable (you cannot bill individual pedestrians). Funded by local council tax.' },
        { tone: 'green',  title: '🌊 Flood defences',  body: 'Sea walls and river barriers protect everyone in the catchment area. Private provision would suffer from a massive free-rider problem.' }
      ],
      illustratedGridLabel: 'Public goods the state provides',
      illustratedGridEmoji: '📋',
      tipLate: { icon: '💸', tone: 'amber', text: '<strong>Funded by taxation → opportunity cost.</strong> Every £1 spent on defence is £1 not spent on hospitals, schools or tax cuts. State provision also risks government failure: bureaucratic inefficiency, political capture, and the difficulty of measuring how much to provide without a price signal.' },
      keyTerms: [
        { term: 'Pure public good',  def: 'A good that is both <em>fully</em> non-rival and <em>fully</em> non-excludable — defence, lighthouses, clean air.' },
        { term: 'Quasi-public good', def: 'Partially non-rival or non-excludable — e.g. roads (rival when congested, excludable with tolls). Most "public goods" in practice are quasi-public.' },
        { term: 'Free-rider',        def: 'A consumer who enjoys a good without paying for it. The reason private firms cannot profitably supply public goods.' },
        { term: 'Direct provision',  def: 'The state itself produces and distributes the good, funded by taxation — as opposed to contracting it out or subsidising private firms.' }
      ],
      examEdge: '<strong>Public goods ≠ goods provided by government.</strong> The NHS, state schools and council housing are <em>merit goods</em> (rival and excludable) provided by the state for equity reasons — not pure public goods. Mixing these up loses easy marks. <strong>Evaluation:</strong> direct provision risks government failure (inefficiency, capture), so economists often prefer the state to <em>fund</em> rather than <em>operate</em> — e.g. paying private contractors to maintain street lighting under competitive tender.'
    },

    /* ============================================================
       CARD 8 — Provision of information
       ============================================================ */
    {
      id: 'price_controls_8',
      stepLabel: 'Learn: Step 8 of 10',
      title: 'Provision of information',
      tip: { icon: 'ℹ️', tone: 'blue', text: 'Information failures and asymmetric information lead consumers to misjudge benefits and costs — over-consuming demerit goods, under-consuming merit goods. <strong>Better information shifts demand toward the social optimum</strong> without distorting prices.' },
      illustratedGrid: [
        { tone: 'green',  title: '🥗 Calorie labelling',      body: 'Since April 2022, large UK restaurants must display calorie counts on menus. Aims to shift consumption away from very-high-calorie items by closing the information gap on demerit consumption.' },
        { tone: 'blue',   title: '🚗 MPG ratings & EV range', body: 'Mandatory fuel-economy labelling helps buyers internalise lifetime running costs and CO₂ emissions — shifts demand toward more efficient cars without taxing fuel directly.' },
        { tone: 'amber',  title: '🏫 School league tables',   body: 'Ofsted ratings and Progress 8 scores reduce information asymmetry for parents choosing schools — supports a quasi-market in education by letting demand respond to performance.' },
        { tone: 'rose',   title: '🚬 Cigarette warnings',     body: 'Graphic warnings and plain packaging (UK from 2017) correct the systematic under-estimation of long-run health costs. Smoking prevalence fell from ~20% (2011) to ~12% (2023).' }
      ],
      illustratedGridLabel: 'Real-world UK information policies',
      illustratedGridEmoji: '📋',
      comparison: {
        title: 'Strengths vs limits of information provision',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Strengths',
          caption: '<strong>Preserves choice</strong> — no ban, no tax distortion, just better-informed decisions. <strong>Low cost</strong> compared with subsidies or direct provision. <strong>Targets the root cause</strong> when the failure is genuinely an info gap. <strong>Encourages competition</strong> — informed consumers reward quality.' },
        right: { tone: 'rose',  icon: '❌', label: 'Limits',
          caption: '<strong>Behavioural bias</strong> — even with info, people discount future harms (smoking, sugar). <strong>Slow</strong> to shift behaviour. <strong>Limited reach</strong> if labels are ignored or misunderstood. <strong>Producer pushback</strong> — industry lobbies against mandatory disclosure.' }
      },
      keyTerms: [
        { term: 'Asymmetric information', def: 'When one side of a transaction knows more than the other — e.g. a used-car seller knows more about reliability than the buyer ("lemons" problem).' },
        { term: 'Information failure',    def: 'Imperfect, incomplete or misleading information causing consumers to make decisions that don\'t maximise welfare.' },
        { term: 'Nudge',                  def: 'A behavioural-economics tool that changes the default or framing without restricting choice — e.g. opt-out organ donation, salary-pension auto-enrolment.' },
        { term: 'Mandatory disclosure',   def: 'A regulatory requirement to publish information (calorie counts, MPG, school results) — government-mandated rather than voluntary.' }
      ],
      examEdge: '<strong>The behavioural-economics upgrade:</strong> classic theory assumes information instantly fixes the gap. Behavioural economics shows that even informed consumers <em>discount future costs</em> and <em>follow social norms</em>. So information is often necessary but not sufficient — pairing it with a Pigouvian tax (sugar levy + calorie labels) or a default change (auto-enrolment) tends to outperform either tool alone.'
    },

    /* ============================================================
       CARD 9 — Regulation
       ============================================================ */
    {
      id: 'price_controls_9',
      stepLabel: 'Learn: Step 9 of 10',
      title: 'Regulation',
      tip: { icon: '🛡️', tone: 'rose', text: '<strong>Regulation</strong> sets rules, standards or outright bans on behaviour. It is <em>command-and-control</em>: no reliance on price signals, just legal compliance. Best when harm is severe or irreversible and price-based tools are too slow or uncertain.' },
      diagramPanel: { diagramKey: 'policySpectrumDiagram', title: 'Where regulation sits on the policy spectrum', layout: 'stacked' },
      causesStyle: 'tinted-flat',
      causesEmoji: '📜',
      causesLabel: 'Four regulatory tools — examples',
      causes: [
        { tone: 'rose',   icon: '🚫', head: 'Bans',           body: '<em>Outlaw the activity outright.</em> CFC ban (Montreal Protocol, 1989), ivory trade ban, leaded petrol ban (UK 2000), single-use plastic items (UK Oct 2023).' },
        { tone: 'amber',  icon: '📊', head: 'Limits / standards', body: '<em>Cap pollution, emissions or quantity per unit.</em> Euro 6 vehicle emissions standards, food hygiene ratings, building energy efficiency (EPC rating ≥ E for rentals).' },
        { tone: 'blue',   icon: '🎓', head: 'Licensing',      body: '<em>Require permission to operate.</em> Medical and legal professions, taxi licences (TfL), pub alcohol licences, broadcasting licences (Ofcom).' },
        { tone: 'green',  icon: '🧾', head: 'Disclosure rules', body: '<em>Mandatory reporting / labelling.</em> Financial product risk warnings, pension fund charge caps, mandatory ESG reporting for large firms.' }
      ],
      comparison: {
        title: 'Regulation — strengths vs weaknesses',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Pros',
          caption: '<strong>Certainty of outcome</strong> — direct quantity control, not reliant on firms\' price responses. <strong>Acts quickly</strong> when speed matters (pandemic, environmental emergencies). <strong>Essential for severe or irreversible harm</strong> — toxic substances, endangered species, child safety. <strong>Easy to communicate</strong> — "this is illegal" is clearer than a tax.' },
        right: { tone: 'rose',  icon: '❌', label: 'Cons',
          caption: '<strong>Rigid / less flexible</strong> — one-size-fits-all doesn\'t reflect firms\' differing costs. <strong>Compliance costs</strong> — monitoring, reporting, enforcement. <strong>Regulatory capture</strong> — firms lobby regulators for weaker rules. <strong>Unintended consequences</strong> — bans create black markets (prohibition, drug bans).' }
      },
      keyTerms: [
        { term: 'Command-and-control', def: 'Direct regulation that mandates specific behaviour or outcomes — as opposed to market-based tools (taxes, permits) that change incentives.' },
        { term: 'Regulatory capture',  def: 'When a regulator comes to act in the interest of the firms it regulates rather than the public interest — e.g. via lobbying, industry hiring, or information dependence.' },
        { term: 'Compliance cost',     def: 'The cost to firms of meeting a regulation — monitoring, paperwork, capital upgrades. Often passed on to consumers as higher prices.' },
        { term: 'Self-regulation',     def: 'When an industry sets and enforces its own rules (e.g. the Advertising Standards Authority). Cheaper but vulnerable to capture.' }
      ],
      examEdge: '<strong>When to choose regulation over a price tool:</strong> (1) when the marginal external cost is impossible to estimate (so a Pigouvian tax cannot be calibrated); (2) when harm is severe and irreversible (lead, asbestos, CFCs — a tax that under-prices these would be catastrophic); (3) when speed matters more than efficiency. <strong>Top-band evaluation:</strong> "Regulation is the right tool for the chlorofluorocarbons problem because the harm to the ozone layer is irreversible and the marginal damage curve is effectively vertical above safe thresholds — a tax cannot give the same certainty."'
    },

    /* ============================================================
       CARD 10 — Choosing the right tool + evaluation
       ============================================================ */
    {
      id: 'price_controls_10',
      stepLabel: 'Learn: Step 10 of 10',
      title: 'Choosing the right tool + evaluation',
      tip: { icon: '🎯', tone: 'amber', text: '<strong>Match the tool to the failure.</strong> Externalities → price-based tools or permits. Public goods → state provision. Information gaps → labels and rules. Market power → regulation or price caps. Every tool risks government failure — the question is whether the gain outweighs the new distortion.' },
      diagramPanel: { diagramKey: 'govtFailureDiagram', title: 'Government failure in the welfare diagram', layout: 'stacked' },
      colA: 'Best-fit tool(s)',
      colB: 'Why it fits',
      rows: [
        { label: 'Negative externality',     colA: 'Indirect tax (Pigouvian) · Tradable permits · Regulation', colB: 'Internalises MEC; permits cap total emissions; regulation when harm is severe or irreversible.' },
        { label: 'Positive externality',     colA: 'Subsidy · Information provision · State provision',        colB: 'Subsidy expands output to social optimum; info corrects under-estimation of MEB; state provision for merit goods (NHS, schools).' },
        { label: 'Public goods',             colA: 'State provision (tax-funded)',                              colB: 'Free-rider problem prevents private supply; only the state can fund through compulsory taxation.' },
        { label: 'Information gaps',         colA: 'Mandatory disclosure · Regulation · Nudges',                 colB: 'Cheapest fix when the root failure is missing information; regulation backs up labels when behaviour is sticky.' },
        { label: 'Market power',             colA: 'Price cap · Competition regulation · Antitrust',             colB: 'Caps prevent monopoly pricing; competition policy attacks the structure rather than just the symptom.' },
        { label: 'Inequity',                 colA: 'Targeted subsidy · Income transfer · Progressive tax',       colB: 'Equity tools preserve price signals while redistributing — usually more efficient than universal price controls.' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Risks of government failure — every tool faces these',
      causes: [
        { tone: 'rose',   icon: '🔀', head: 'Distorted price signals',  body: 'Taxes, subsidies and price controls move prices away from marginal cost — sending the wrong scarcity signals to other parts of the economy.' },
        { tone: 'amber',  icon: '🎲', head: 'Unintended consequences', body: 'Bans create black markets; rent caps reduce housing supply; sugar taxes shift consumption to unflavoured-but-still-unhealthy alternatives.' },
        { tone: 'blue',   icon: '💼', head: 'High administrative costs', body: 'Monitoring, enforcement, compliance and revenue collection all cost real resources — sometimes larger than the welfare gain.' },
        { tone: 'purple', icon: '🔍', head: 'Information problems',      body: 'Regulators rarely know the true MEC or MEB. Set the tax/cap/subsidy wrong and you create distortion without the welfare correction.' }
      ],
      examEdge: '<strong>The synthesis answer:</strong> no tool is perfect. The best policy is usually a <em>policy mix</em> — e.g. carbon pricing (permits) + R&D subsidies (technology push) + regulation (banning new gas boilers from 2035) + information (EPC ratings). <strong>A* upgrade:</strong> identify the underlying market failure first, then propose the best-fit tool, then add an evaluation of which government-failure risk is most likely to bite. Real-world policy is always a balance between the original market failure and the new distortions intervention creates.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
