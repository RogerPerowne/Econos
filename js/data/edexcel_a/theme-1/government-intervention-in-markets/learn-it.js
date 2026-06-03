window.ECONOS_TOPIC = {
  id: 'government-intervention-in-markets',
  topicNum: '4.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Government Intervention in Markets',
  estTime: '15-18 minutes',
  goal: 'Master the seven Edexcel intervention tools – indirect taxes, subsidies, maximum and minimum prices, tradable pollution permits, state provision, information provision and regulation – and learn to pick the right tool for the right market failure.',
  intro: {
    heroKey: 'heroPrice',
    summary: 'Governments intervene when markets fail. The spec lists seven tools that split into two families: price-changing interventions (taxes, subsidies, max/min prices) that work through the price mechanism, and other tools (permits, state provision, information, regulation) that work directly on quantities, access or behaviour.',
    doInThis: 'Work through 11 cards: an overview map, the price-changing tools with interactive welfare diagrams (indirect tax types, tax incidence, subsidies, price ceilings and floors), four "other" tools with case studies, and a synthesis card that matches each market failure to its best-fit policy.',
    outcomes: [
      'Distinguish specific from ad valorem indirect taxes and identify tax incidence using PED and PES',
      'Use the welfare diagram to show how taxes, subsidies, ceilings and floors redistribute surplus and create DWL',
      'Explain how tradable pollution permits, state provision, information and regulation work and where each is most effective',
      'Match each market failure (externalities, public goods, info gaps, market power) to the best-fit policy tool',
      'Evaluate every intervention against the risk of government failure: distorted price signals, unintended consequences, admin costs and information gaps'
    ],
    tip: 'For every intervention ask three things: (1) What market failure does it address? (2) Who gains, who loses, and who pays? (3) Could a different tool do the same job with less distortion? These three questions earn the bulk of the evaluation marks.',
    stages: [
      { num: 1, name: 'Learn it', sub: '11 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ============================================================
       CARD 1 – The big picture: why governments intervene
       ============================================================ */
    {
      id: 'price_controls_1',
      stepLabel: 'Learn: Step 1 of 11',
      title: 'The big picture: why governments intervene',
      tip: { icon: '🎯', tone: 'blue', text: 'Markets sometimes fail. When they do, governments have a toolkit of interventions – but no single tool fits every problem. <strong>Name the failure first, then choose the tool.</strong>' },
      causesPosition: 'top',
      causesStyle: 'tinted-flat',
      causesEmoji: '🚨',
      causesLabel: 'Four market failures to fix',
      causes: [
        { tone: 'rose',   icon: '🏭', head: 'Externalities',              body: 'Third-party costs (pollution) or benefits (vaccination) the market ignores. The market over- or under-produces relative to the social optimum.' },
        { tone: 'amber',  icon: '🏛️', head: 'Under-provision of public goods', body: 'Non-rival, non-excludable goods (defence, street lighting) the private sector won\'t provide because of the free-rider problem.' },
        { tone: 'blue',   icon: '🔍', head: 'Information gaps',            body: 'Asymmetric or imperfect information leads consumers and producers to make poor decisions – e.g. demerit goods like cigarettes or unsafe products.' },
        { tone: 'purple', icon: '⚖️', head: 'Market power / inequity',     body: 'Monopolies set prices above marginal cost; very unequal income distributions create welfare and political concerns the market alone cannot correct.' }
      ],
      diagramPanel: {
        diagramKey: 'policySpectrumDiagram',
        title: 'The policy spectrum – soft to hard',
        titleAbove: true,
        titleEmoji: '🧭',
        layout: 'stacked',
        bare: true,
        stepsStyle: 'boxed',
        steps: [
          { tone: 'green',  icon: 'ℹ️', head: 'Information – when people just don\'t know',                     body: 'Calorie labels on menus, MPG ratings, school league tables, plain-pack cigarette warnings.' },
          { tone: 'purple', icon: '👉', head: 'Nudge – when the bias is attention, inertia or default-stickiness', body: 'Auto-enrolment into pensions (participation 55% → 87%); opt-out organ donation; smaller default plate sizes.' },
          { tone: 'amber',  icon: '💷', head: 'Tax / subsidy – when there is an externality to price',          body: 'Carbon pricing, sugar levy on drinks, fuel duty; R&D tax credits, £2 bus fare cap.' },
          { tone: 'rose',   icon: '🚫', head: 'Regulation – when harm is severe, addictive or affects others',   body: 'Smoking indoor ban, CFC ban (Montreal Protocol), leaded petrol ban, Euro 6 vehicle emissions standards.' }
        ]
      },
      comparison: {
        title: 'When does a nudge cut it – and when doesn\'t it?',
        emoji: '⚖️',
        vs: 'VS',
        position: 'after-diagram',
        left:  { tone: 'green', icon: '✅', label: 'When a nudge is enough',
          caption: '<strong>Auto-enrolment</strong> took pension participation from 55% to 87%. The binding constraint was <em>inertia</em>, not money – so a default change worked without restricting choice.' },
        right: { tone: 'rose',  icon: '❌', label: 'When a nudge isn\'t enough',
          caption: 'For carbon, addiction or severe poverty the binding constraint is <em>affordability or price</em>, not inertia – so pricing tools or regulation do the heavy lifting.' }
      },
      tipLate: { icon: '⚖️', tone: 'amber', text: '<strong>The aim is allocative efficiency and equity</strong> – but every tool brings risks of government failure (distorted signals, unintended consequences, admin costs, info gaps). The next nine cards build each tool and then bring them together in a decision matrix.' },
      examEdge: 'Top answers <em>name the market failure first, then choose the tool</em>. "Tradable permits work better than a Pigouvian tax for CO₂ because the regulator can set the total emissions cap with certainty even when abatement costs are uncertain." Linking the tool to the specific failure it addresses is what separates A from B grades.'
    },

    /* ============================================================
       CARD 2 – Indirect taxation: specific vs ad valorem
       ============================================================ */
    {
      id: 'price_controls_2',
      stepLabel: 'Learn: Step 2 of 11',
      title: 'Indirect taxation – specific vs ad valorem',
      tip: { icon: '💷', tone: 'green', text: 'An <strong>indirect tax</strong> is a tax on spending, paid by the producer but usually passed (at least partly) to the consumer. A <strong>specific tax</strong> shifts supply up by a fixed amount per unit; an <strong>ad valorem tax</strong> pivots supply because it is a percentage of price.' },
      interactiveDiagram: {
        svgKey: 'taxTypesInteractive',
        label: 'Specific vs ad valorem – how supply shifts differently',
        emoji: '📐',
        layers: ['idl-1', 'idl-2'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market equilibrium',
            body: 'Before any tax, supply and demand determine price P₀ and quantity Q₀. Producers receive exactly what consumers pay – there is no wedge between the two.',
            analysis: 'This is the benchmark. Every effect of the tax is measured as a departure from P₀ and Q₀.'
          },
          {
            label: 'Specific tax',
            tone: 'blue',
            head: 'Specific tax – parallel shift (e.g. fuel duty)',
            body: 'A fixed amount per unit (e.g. 53p/litre of fuel duty). Sellers need an extra £T per unit – so the supply curve shifts <strong>parallel</strong> upward by exactly £T at every quantity. Consumer price rises to <strong>Pc</strong>; quantity falls to <strong>Qt</strong>.',
            analysis: 'The gap between S and S+T is the same at every quantity – that constant gap is £T. Government revenue = £T × Qt (the area of the wedge up to Qt).'
          },
          {
            label: 'Ad valorem tax',
            tone: 'amber',
            show: ['idl-2'],
            head: 'Ad valorem tax – pivot shift (e.g. 20% VAT)',
            body: 'A percentage of price (e.g. 20% VAT). The £ amount of tax is small at low prices and large at high prices – so the supply curve <strong>pivots</strong> upward. The gap between S and S+T% widens as price rises.',
            analysis: 'Ad valorem taxes yield more revenue on expensive goods and scale automatically with inflation. Specific taxes erode in real terms unless manually uprated – which is why UK alcohol duties were frozen for years while VAT revenue grew automatically.'
          }
        ]
      },
      keyTerms: [
        { term: 'Indirect tax',   def: 'A tax on spending (e.g. VAT, fuel duty), levied on the producer but typically passed in part to the consumer through a higher price.' },
        { term: 'Specific tax',   def: 'A fixed amount per unit (e.g. 57.95p per litre of petrol). Causes a <strong>parallel</strong> upward shift in supply.' },
        { term: 'Ad valorem tax', def: 'A percentage of price (e.g. 20% VAT, tobacco at 16.5% of retail). Causes supply to <strong>pivot</strong> upward – gap widens at higher prices.' }
      ],
      examEdge: 'Get the shift shape right: a <strong>specific</strong> tax is a <em>parallel</em> shift (constant £T at every quantity); an <strong>ad valorem</strong> tax is a <em>pivot</em> (gap widens with price). Then note the dynamic point — ad valorem revenue scales automatically with inflation, while specific duties erode in real terms unless uprated (why UK alcohol duty freezes quietly cut the real tax for years).'
    },

    /* ============================================================
       CARD 2b – Tax incidence (split out of the old Card 2, which
       carried two full interactive diagrams). Spec-neutral pacing fix:
       same topic (1.4.1), one diagram per card.
       ============================================================ */
    {
      id: 'price_controls_2b',
      stepLabel: 'Learn: Step 3 of 11',
      title: 'Tax incidence – who really pays',
      tip: { icon: '⚖️', tone: 'green', text: 'The per-unit tax opens a wedge <strong>£T</strong> between the price consumers pay (<strong>Pc</strong>) and the net price producers keep (<strong>Pp</strong>). How that wedge splits — the <strong>incidence</strong> — depends on elasticity: the more <em>inelastic</em> side of the market bears more of the tax.' },
      interactiveDiagram: {
        svgKey: 'taxIncidenceInteractive',
        label: 'Tax incidence – who actually pays?',
        emoji: '⚖️',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Tax in place',
            tone: 'blue',
            head: 'The tax in place – Pc, Pp and the £T wedge',
            body: 'The tax has shifted supply up to S+T. Quantity falls to <strong>Qt</strong>. Consumers pay <strong>Pc</strong>; producers receive net price <strong>Pp</strong> after remitting the tax. The vertical gap between Pc and Pp is the per-unit tax, <strong>£T</strong>.',
            analysis: 'Pc > P₀ > Pp – consumers pay more, producers receive less, and the gap goes to government. The next steps split that gap into who bears how much, then total it as revenue.'
          },
          {
            label: 'Consumer burden',
            tone: 'blue',
            head: 'Step 2 – the consumer burden',
            body: 'The <strong style="color:#2563EB">blue rectangle</strong> is the consumer burden: <strong>(Pc − P₀) × Qt</strong>. It is the extra price consumers pay per unit times the quantity they actually buy.'
          },
          {
            label: 'Producer burden',
            tone: 'rose',
            head: 'Step 3 – the producer burden',
            body: 'The <strong style="color:#dc2626">red rectangle</strong> is the producer burden: <strong>(P₀ − Pp) × Qt</strong>. It is the reduction in net price per unit times the quantity sold.',
            analysis: 'Together the blue and red rectangles partition the tax wedge. The relative size of each depends on elasticity – the more inelastic side pays more.'
          },
          {
            label: 'Tax revenue',
            tone: 'purple',
            head: 'Step 4 – total tax revenue',
            body: 'The purple-outlined area is total <strong>tax revenue = £T × Qt</strong>. It is exactly the sum of the consumer and producer burdens – every penny paid by buyers and sellers above/below P₀ ends up at HMRC.',
            analysis: 'Whether this revenue is worth the deadweight loss and behavioural distortions is a policy judgement addressed in the surrounding cards.'
          }
        ]
      },
      keyTerms: [
        { term: 'Tax incidence',  def: 'How the burden of a tax is split between buyers and sellers. The more <strong>inelastic</strong> side of the market pays more of the tax.' },
        { term: 'Pigouvian tax',  def: 'A tax set equal to the marginal external cost of a negative externality. Internalises the externality and can raise welfare even though it creates private-market DWL.' }
      ],
      examEdge: '<strong>Three evaluation moves:</strong> (1) <em>Name the incidence</em> – "demand for cigarettes is inelastic, so consumers bear ~80% of the duty." (2) <em>Distinguish revenue from welfare</em> – tax revenue is a <strong>transfer</strong> (not lost), only the DWL triangle is welfare lost forever. (3) <em>Test for Pigouvian justification</em> – if the tax targets a negative externality and the rate is set close to MEC, the welfare verdict flips from "bad" to "good".'
    },

    /* ============================================================
       CARD 3 – Subsidies
       ============================================================ */
    {
      id: 'price_controls_3',
      stepLabel: 'Learn: Step 4 of 11',
      title: 'Subsidies',
      tip: { icon: '🎁', tone: 'purple', text: 'A <strong>subsidy</strong> is a payment from government to producers (or consumers) that lowers the cost of supply. Supply shifts <em>right</em>, price falls, quantity rises. It is the mirror image of an indirect tax.' },
      interactiveDiagram: {
        svgKey: 'subsidyInteractive',
        label: 'Build the subsidy diagram step by step',
        emoji: '📊',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Subsidy in place',
            tone: 'green',
            head: 'Subsidy in place – Pc, Pp and £S wedge',
            body: 'The subsidy shifts supply down to S₁, raising quantity to <strong>Qs</strong>. Consumers pay <strong>Pc</strong> below P₀, while producers receive <strong>Pp</strong> above P₀ once the subsidy is added. The gap between Pp and Pc is the per-unit subsidy, <strong>£S</strong>.',
            analysis: 'Pp > P₀ > Pc – producers receive more, consumers pay less, and the difference comes from government. The next steps split the wedge into who captures how much, then total it as cost.'
          },
          {
            label: 'Consumer benefit',
            tone: 'blue',
            head: 'Step 2 – the consumer benefit',
            body: 'The <strong style="color:#2563EB">blue rectangle</strong> is the consumer benefit: <strong>(P₀ − Pc) × Qs</strong>. It is the price reduction per unit times the quantity bought at the new lower price.'
          },
          {
            label: 'Producer benefit',
            tone: 'green',
            head: 'Step 3 – the producer benefit',
            body: 'The <strong style="color:#059669">green rectangle</strong> is the producer benefit: <strong>(Pp − P₀) × Qs</strong>. It is the rise in net price per unit times the quantity sold.',
            analysis: 'Together the blue and green rectangles partition the subsidy wedge. The relative size depends on elasticity – covered in card 4.'
          },
          {
            label: 'Government cost',
            tone: 'purple',
            head: 'Step 4 – total government cost',
            body: 'The purple-outlined area is total <strong>subsidy cost = £S × Qs</strong>. It is exactly the sum of the consumer and producer benefits – every penny granted to buyers and sellers comes from the Treasury.',
            analysis: 'Whether this cost delivers value for money – whether £S × Qs is justified by the externality being corrected – is the policy question this topic addresses in the surrounding cards.'
          }
        ]
      },
      illustratedGrid: [
        { tone: 'green',  title: '🚌 £2 bus fare cap (2023–24)', body: 'Government subsidy capped single bus fares nationally at £2. Large CS gain for regular commuters; modest effect on modal shift. Cost ~£600m/year – opportunity cost against other transport priorities.' },
        { tone: 'blue',   title: '🔬 R&D tax credits',           body: 'Firms claim 20–27% of qualifying R&D costs back against corporation tax. Strong evidence of additionality – firms do more R&D than without the subsidy, because innovation has large positive MEB (spillovers to the wider economy).' },
        { tone: 'purple', title: '🌱 Boiler Upgrade Scheme',     body: 'Grant of £7,500 toward a heat pump. Producer subsidy shifting consumer demand toward low-carbon heating. Slow take-up suggests elasticity of demand for heat pumps is low despite the large subsidy – supply constraint dominates.' },
        { tone: 'amber',  title: '🚜 Agricultural support (post-CAP)', body: 'UK\'s Environmental Land Management (ELM) pays farmers per hectare of habitat they restore. Producer subsidy targeting positive externalities (biodiversity, flood prevention) rather than output volume.' }
      ],
      illustratedGridLabel: 'UK subsidy case studies',
      illustratedGridEmoji: '📋',
      keyTerms: [
        { term: 'Producer subsidy', def: 'Payment per unit to suppliers – used for solar PV, agricultural support, public transport.' },
        { term: 'Consumer subsidy', def: 'Payment to buyers (vouchers, free provision) – used for free school meals, NHS prescriptions for under-16s.' },
        { term: 'Subsidy incidence', def: 'How the benefit splits between buyers and sellers – more inelastic side captures more of the gain.' },
        { term: 'Positive externality (MEB)', def: 'The third-party benefit a subsidy is often designed to internalise. If MEB > 0, the subsidy can raise welfare.' }
      ],
      examEdge: '<strong>Three classic UK case studies:</strong> (1) <em>EV plug-in grant</em> – boosted EV adoption but disproportionately benefited high-income buyers; retired in 2022. (2) <em>Bus operator subsidy (£2 fare cap)</em> – large CS gain, but cost ~£600m/year and may not be sustainable. (3) <em>R&D tax credits</em> – strong evidence of additionality (firms do more R&D than they would have done) because innovation has large MEB. <strong>Evaluation upgrade:</strong> always check (a) is there an externality, (b) does the subsidy actually change behaviour or just transfer cash, and (c) what is the opportunity cost.'
    },

    /* ============================================================
       CARD 4 – Maximum prices (price ceilings) – from old card 2
       ============================================================ */
    {
      id: 'price_controls_4',
      stepLabel: 'Learn: Step 5 of 11',
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
            analysis: 'Without intervention, the market clears: every buyer willing to pay P<sub>e</sub> can buy, and every seller willing to sell at P<sub>e</sub> can sell. Allocative efficiency holds. Any binding price control will move the market away from this point and create a welfare cost – unless it corrects a market failure like monopoly power.'
          },
          {
            label: 'Ceiling imposed',
            tone: 'amber',
            head: 'P<sub>max</sub> below P<sub>e</sub> – a shortage opens up',
            body: 'At P<sub>max</sub>, sellers supply only Q<sub>s</sub>, but buyers demand Q<sub>d</sub>. The horizontal gap Q<sub>d</sub> − Q<sub>s</sub> is the <strong>shortage</strong>. Trades are rationed to Q<sub>s</sub>.',
            analysis: 'A ceiling is only <em>binding</em> if it sits below P<sub>e</sub>; above P<sub>e</sub> it has no effect. Because quantity supplied (Q<sub>s</sub>) is now the short side of the market, Q<sub>s</sub> becomes the quantity actually traded. Non-price rationing fills the gap – queues, waiting lists, black markets, or quality reductions are all common real-world responses.'
          },
          {
            label: 'Surplus shifts',
            tone: 'amber',
            head: 'PS shrinks; CS effect is ambiguous',
            body: 'PS shrinks: sellers transact fewer units at a lower price. CS <em>may</em> rise if buyers who value the good most get the rationed quantity – but with random rationing or queueing costs, CS can fall.',
            analysis: 'Textbook CS under a ceiling assumes <strong>efficient rationing</strong> – that the Q<sub>s</sub> units go to the buyers who value them most. In reality, rationing is rarely efficient: queueing wastes time, black-market markups erode the price benefit, and quality often drops to compensate sellers. So the "CS rises" result is a best case, not a guarantee.'
          },
          {
            label: 'Deadweight loss',
            tone: 'rose',
            head: 'Welfare lost from trades that no longer happen',
            body: 'The red triangle = DWL: surplus from units between Q<sub>s</sub> and Q<sub>e</sub> that <em>would have been traded</em> at P<sub>e</sub>, but are now prevented by the ceiling.',
            analysis: 'DWL grows with the gap between P<sub>max</sub> and P<sub>e</sub> and with elasticity. A ceiling raises welfare only if it offsets a larger pre-existing distortion – for instance, capping the price a monopolist can charge can <em>increase</em> total welfare by pushing output toward the competitive level. Most consumer-facing rent controls and energy price caps do not meet this bar.'
          }
        ]
      },
      keyTerms: [
        { term: 'Price ceiling', def: 'A legal maximum price. Only binding when set below the equilibrium price; above P<sub>e</sub> it has no effect on the market.' },
        { term: 'Shortage', def: 'Excess demand at the controlled price: Q<sub>d</sub> > Q<sub>s</sub>. The quantity actually traded is the lower side (Q<sub>s</sub>).' },
        { term: 'Non-price rationing', def: 'How the shortage is allocated when price cannot adjust: queueing, lottery, key money, black markets, or quality reduction.' },
        { term: 'Black market', def: 'Illegal trading above the controlled price. When shortages are severe the black-market price can exceed the original equilibrium – leaving consumers worse off than with no control.' }
      ],
      examEdge: 'Two classic UK applications: <strong>rent controls</strong> (NYC, Berlin, Stockholm – produce shortages and quality decline, deter new building) and the <strong>UK energy price cap</strong> (Ofgem, 2019–) – protected consumers but pushed 25+ suppliers into bankruptcy in 2021–22 when wholesale prices spiked above the cap. A ceiling does not make the underlying cost problem disappear; it shifts who bears it – consumers, suppliers, or taxpayers via bailouts. Naming the bearer of the cost is a strong evaluation move.'
    },

    /* ============================================================
       CARD 5 – Minimum prices (price floors) – from old card 3
       ============================================================ */
    {
      id: 'price_controls_5',
      stepLabel: 'Learn: Step 6 of 11',
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
            head: 'P<sub>min</sub> above P<sub>e</sub> – excess supply emerges',
            body: 'At P<sub>min</sub>, buyers only want Q<sub>d</sub>, but sellers would supply Q<sub>s</sub>. The horizontal gap Q<sub>s</sub> − Q<sub>d</sub> is the <strong>excess supply</strong>. Trades are limited to Q<sub>d</sub>.',
            analysis: 'A floor is only <em>binding</em> if it sits above P<sub>e</sub>; below P<sub>e</sub> it has no effect. Now buyers are the short side of the market, so Q<sub>d</sub> becomes the quantity actually traded. The excess supply often shows up as <em>unsold output</em> (e.g. EU butter mountains, US dairy stockpiles) or, in the labour market, as <em>unemployment</em> from a minimum wage set above the market-clearing wage.'
          },
          {
            label: 'Surplus shifts',
            tone: 'amber',
            head: 'CS shrinks; PS effect is ambiguous',
            body: 'CS shrinks: buyers pay a higher price and transact fewer units. PS <em>may</em> rise if the higher per-unit price outweighs the lost quantity – but if demand is elastic, PS can fall.',
            analysis: 'The PS effect depends on demand elasticity: if inelastic, the higher price offsets the lost quantity and PS rises; if elastic, the quantity loss dominates and PS falls. The labour-market parallel: a minimum wage may raise total worker income (inelastic demand) or lower it (elastic).'
          },
          {
            label: 'Deadweight loss',
            tone: 'rose',
            head: 'Welfare lost from trades that no longer happen',
            body: 'The red triangle = DWL: surplus from units between Q<sub>d</sub> and Q<sub>e</sub> that <em>would have been traded</em> at P<sub>e</sub>, but are now prevented by the floor.',
            analysis: 'As with a ceiling, DWL grows with the gap between P<sub>min</sub> and P<sub>e</sub> and with elasticity. The floor raises welfare only if it offsets a larger pre-existing distortion – a minimum wage in a <em>monopsonistic</em> labour market can lift both wages and employment, because monopsony already suppressed both.'
          }
        ]
      },
      keyTerms: [
        { term: 'Price floor', def: 'A legal minimum price. Only binding when set above the equilibrium price; below P<sub>e</sub> it has no effect on the market.' },
        { term: 'Excess supply', def: 'Sellers want to supply more than buyers will buy at the controlled price: Q<sub>s</sub> > Q<sub>d</sub>. Quantity traded is Q<sub>d</sub>.' },
        { term: 'Binding floor', def: 'A floor that actually constrains the market – i.e. set above the free-market equilibrium price. A floor below P<sub>e</sub> is non-binding.' },
        { term: 'Monopsony exception', def: 'In a labour market with a dominant employer, a minimum wage can raise both wages and employment by counteracting employer power – reversing the standard competitive-market result.' }
      ],
      examEdge: 'Three classic floor examples: <strong>National Living Wage</strong> (£12.21/hr from April 2024 – limited disemployment evidence suggests the floor sits close to equilibrium for most workers); <strong>EU Common Agricultural Policy</strong> (guaranteed prices produced "butter mountains" and "wine lakes" that had to be bought, stored, or destroyed); <strong>Scotland minimum unit pricing on alcohol</strong> (50p/unit since 2018 – alcohol sales fell 3–7%, targeting heavy drinkers as positive-externality correction). The labour-market case has an evaluation upgrade: in a monopsonistic market, a minimum wage can <em>raise</em> employment and wages simultaneously by counteracting employer power.'
    },

    /* ============================================================
       CARD 6 – Tradable pollution permits (cap-and-trade)
       ============================================================ */
    {
      id: 'price_controls_6',
      stepLabel: 'Learn: Step 7 of 11',
      title: 'Tradable pollution permits (cap-and-trade)',
      tip: { icon: '🏭', tone: 'blue', text: 'Government <strong>sets a cap</strong> on total emissions and issues permits equal to the cap. Firms must hold a permit for every tonne they emit. They can <strong>trade</strong> permits – creating a market price for pollution.' },
      workedExample: {
        scene: 'capAndTrade',
        label: null,
        cards: [
          { tone: 'blue',   icon: '🏛️', title: 'Government sets the cap',    body: 'The regulator decides the total annual emissions allowed (e.g. 87 Mt CO₂e for UK power & industry). This is the hard environmental ceiling – unlike a Pigouvian tax, the quantity outcome is <em>certain</em>.' },
          { tone: 'green',  icon: '🔄', title: 'Firms trade permits',          body: 'Firms with <em>low</em> abatement costs cut emissions and <strong>sell</strong> spare permits. Firms with <em>high</em> abatement costs <strong>buy</strong> them. The market finds the cheapest abatement first – cost-efficient by design.' },
          { tone: 'amber',  icon: '💰', title: 'Market sets the price',        body: 'The permit price (UK ETS ≈ £35–50/tCO₂ in 2024) is set by supply and demand between firms. Firms compare the permit price against their internal abatement cost: if abating is cheaper, cut; if buying is cheaper, buy a permit.' }
        ]
      },
      causesStyle: 'tinted-flat',
      causesEmoji: '⚙️',
      causesLabel: 'How cap-and-trade works in four steps',
      causes: [
        { tone: 'blue',   icon: '🎯', head: 'Government sets a cap',          body: 'Total annual emissions are capped (e.g. UK ETS 2024 cap ≈ 87 Mt CO₂e for power and industry). The cap usually <strong>tightens each year</strong> to drive abatement.' },
        { tone: 'purple', icon: '🎟️', head: 'Permits issued or auctioned',    body: 'One permit = one tonne of CO₂e. Firms buy permits at auction (most) or get them free (declining share to protect trade-exposed industries).' },
        { tone: 'green',  icon: '🔄', head: 'Firms trade permits',            body: 'Firms with <em>low</em> abatement costs cut emissions and sell spare permits. Firms with <em>high</em> abatement costs buy permits. The market finds the cheapest cuts first.' },
        { tone: 'amber',  icon: '🏷️', head: 'Market sets the permit price',   body: 'Permit price reflects the marginal cost of abatement. UK ETS price ≈ £35-50/tCO₂ in 2024. Firms decide: pay this, or abate.' }
      ],
      comparison: {
        title: 'Why economists prefer cap-and-trade',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Strengths',
          caption: '<strong>Certainty</strong> – the cap fixes the emissions outcome. <strong>Cost-efficient</strong> – cheapest abatement first. <strong>Dynamic incentive</strong> – firms profit from innovating and selling spare permits.' },
        right: { tone: 'rose',  icon: '❌', label: 'Weaknesses',
          caption: '<strong>Price volatility</strong> – prices swing with the cycle (EU ETS hit €5). <strong>Carbon leakage</strong> – firms relocate abroad. <strong>Coverage gaps</strong> – the UK ETS excludes farming and most transport.' }
      },
      keyTerms: [
        { term: 'Cap',                 def: 'The total quantity of emissions allowed across all covered firms in a period. The binding environmental constraint.' },
        { term: 'Permit (allowance)',  def: 'A tradable right to emit one tonne of CO₂e. Firms must surrender permits equal to verified emissions each year.' },
        { term: 'Abatement cost',      def: 'The cost to a firm of cutting one tonne of emissions. Firms compare this to the permit price: if abatement is cheaper, cut; if dearer, buy a permit.' },
        { term: 'Carbon leakage',      def: 'When a cap pushes emissions abroad instead of cutting them globally – firms relocate to jurisdictions without a carbon price.' }
      ],
      examEdge: '<strong>UK ETS vs EU ETS:</strong> the UK launched its own ETS in 2021 after Brexit. Covers power, industry, aviation. <strong>EU ETS</strong> is the world\'s largest carbon market – 40% of EU emissions, with a Carbon Border Adjustment Mechanism (CBAM) from 2026 to tackle leakage. <strong>Tax vs permits – the killer comparison:</strong> a Pigouvian tax fixes the <em>price</em> of carbon and lets quantity adjust; cap-and-trade fixes the <em>quantity</em> and lets price adjust. Use a tax when you know MEC precisely; use permits when the environmental target is non-negotiable (e.g. legally binding net zero).'
    },

    /* ============================================================
       CARD 7 – State provision of public goods
       ============================================================ */
    {
      id: 'price_controls_7',
      stepLabel: 'Learn: Step 8 of 11',
      title: 'State provision of public goods',
      tip: { icon: '🏛️', tone: 'purple', text: '<strong>Public goods</strong> are non-rival (one person\'s use doesn\'t reduce another\'s) and non-excludable (no one can be prevented from using them). The free-rider problem means the private sector under-provides – so the state steps in and funds provision via taxation.' },
      workedExample: { scene: 'publicGoods', label: null, cards: [] },
      causes: [
        { tone: 'purple', icon: '🔓', head: 'Non-excludable',
          body: 'Once provided, no one can be prevented from benefiting – e.g. you cannot stop someone watching the fireworks display from a nearby hill.' },
        { tone: 'blue',   icon: '🤝', head: 'Non-rival',
          body: 'One person\'s consumption doesn\'t reduce the amount available to others – your enjoyment of street lighting doesn\'t dim it for the next pedestrian.' },
        { tone: 'amber',  icon: '🪤', head: 'Free-rider problem',
          body: 'No one will pay if they can use the good without paying. So private firms cannot capture enough revenue and the market under-provides – or fails to provide at all.' }
      ],
      causesStyle: 'tinted-flat',
      causesLabel: 'Why the market fails for public goods',
      illustratedGrid: [
        { tone: 'purple', title: '🛡️ Defence',          body: 'The classic non-rival, non-excludable case. National defence protects all citizens at once; no one can be excluded. UK defence spending ≈ 2.3% of GDP.' },
        { tone: 'blue',   title: '🗼 Lighthouses',      body: 'Historically cited as the textbook public good – once the light is on, every passing ship benefits whether or not the owner pays.' },
        { tone: 'amber',  title: '💡 Street lighting', body: 'Non-rival (everyone benefits) and non-excludable (you cannot bill individual pedestrians). Funded by local council tax.' },
        { tone: 'green',  title: '🌊 Flood defences',  body: 'Sea walls and river barriers protect everyone in the catchment area. Private provision would suffer from a massive free-rider problem.' }
      ],
      illustratedGridLabel: 'Public goods the state provides',
      illustratedGridEmoji: '📋',
      tipLate: { icon: '💸', tone: 'amber', text: '<strong>Funded by taxation → opportunity cost.</strong> Every £1 spent on defence is £1 not spent on hospitals, schools or tax cuts. State provision also risks government failure: bureaucratic inefficiency, political capture, and the difficulty of measuring how much to provide without a price signal.' },
      keyTerms: [
        { term: 'Pure public good',  def: 'A good that is both <em>fully</em> non-rival and <em>fully</em> non-excludable – defence, lighthouses, clean air.' },
        { term: 'Quasi-public good', def: 'Partially non-rival or non-excludable – e.g. roads (rival when congested, excludable with tolls). Most "public goods" in practice are quasi-public.' },
        { term: 'Free-rider',        def: 'A consumer who enjoys a good without paying for it. The reason private firms cannot profitably supply public goods.' },
        { term: 'Direct provision',  def: 'The state itself produces and distributes the good, funded by taxation – as opposed to contracting it out or subsidising private firms.' }
      ],
      examEdge: '<strong>Public goods ≠ goods provided by government.</strong> The NHS, state schools and council housing are <em>merit goods</em> (rival and excludable) provided by the state for equity reasons – not pure public goods. Mixing these up loses easy marks. <strong>Evaluation:</strong> direct provision risks government failure (inefficiency, capture), so economists often prefer the state to <em>fund</em> rather than <em>operate</em> – e.g. paying private contractors to maintain street lighting under competitive tender.'
    },

    /* ============================================================
       CARD 8 – Provision of information
       ============================================================ */
    {
      id: 'price_controls_8',
      stepLabel: 'Learn: Step 9 of 11',
      title: 'Provision of information',
      tip: { icon: 'ℹ️', tone: 'blue', text: 'Information failures and asymmetric information lead consumers to misjudge benefits and costs – over-consuming demerit goods, under-consuming merit goods. <strong>Better information shifts demand toward the social optimum</strong> without distorting prices.' },
      illustratedGrid: [
        { tone: 'green',  title: '🥗 Calorie labelling',      body: 'Since April 2022, large UK restaurants must display calorie counts on menus. Aims to shift consumption away from very-high-calorie items by closing the information gap on demerit consumption.' },
        { tone: 'blue',   title: '🚗 MPG ratings & EV range', body: 'Mandatory fuel-economy labelling helps buyers internalise lifetime running costs and CO₂ emissions – shifts demand toward more efficient cars without taxing fuel directly.' },
        { tone: 'amber',  title: '🏫 School league tables',   body: 'Ofsted ratings and Progress 8 scores reduce information asymmetry for parents choosing schools – supports a quasi-market in education by letting demand respond to performance.' },
        { tone: 'rose',   title: '🚬 Cigarette warnings',     body: 'Graphic warnings and plain packaging (UK from 2017) correct the systematic under-estimation of long-run health costs. Smoking prevalence fell from ~20% (2011) to ~12% (2023).' }
      ],
      illustratedGridLabel: 'Real-world UK information policies',
      illustratedGridEmoji: '📋',
      comparison: {
        title: 'Strengths vs limits of information provision',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Strengths',
          caption: '<strong>Preserves choice</strong> – no ban or tax distortion. <strong>Low cost</strong> vs subsidies or provision. <strong>Targets the root cause</strong> when the failure is genuinely an info gap.' },
        right: { tone: 'rose',  icon: '❌', label: 'Limits',
          caption: '<strong>Behavioural bias</strong> – people still discount future harms (smoking, sugar). <strong>Slow</strong> to shift behaviour. <strong>Limited reach</strong> if labels are ignored or misunderstood.' }
      },
      keyTerms: [
        { term: 'Asymmetric information', def: 'When one side of a transaction knows more than the other – e.g. a used-car seller knows more about reliability than the buyer ("lemons" problem).' },
        { term: 'Information failure',    def: 'Imperfect, incomplete or misleading information causing consumers to make decisions that don\'t maximise welfare.' },
        { term: 'Nudge',                  def: 'A behavioural-economics tool that changes the default or framing without restricting choice – e.g. opt-out organ donation, salary-pension auto-enrolment.' },
        { term: 'Mandatory disclosure',   def: 'A regulatory requirement to publish information (calorie counts, MPG, school results) – government-mandated rather than voluntary.' }
      ],
      examEdge: '<strong>The behavioural-economics upgrade:</strong> classic theory assumes information instantly fixes the gap. Behavioural economics shows that even informed consumers <em>discount future costs</em> and <em>follow social norms</em>. So information is often necessary but not sufficient – pairing it with a Pigouvian tax (sugar levy + calorie labels) or a default change (auto-enrolment) tends to outperform either tool alone.'
    },

    /* ============================================================
       CARD 9 – Regulation
       ============================================================ */
    {
      id: 'price_controls_9',
      stepLabel: 'Learn: Step 10 of 11',
      title: 'Regulation',
      tip: { icon: '🛡️', tone: 'rose', text: '<strong>Regulation</strong> sets rules, standards or outright bans on behaviour. It is <em>command-and-control</em>: no reliance on price signals, just legal compliance. Best when harm is severe or irreversible and price-based tools are too slow or uncertain.' },
      diagramPanel: { diagramKey: 'policySpectrumDiagram', title: 'Where regulation sits on the policy spectrum', titleAbove: true, titleEmoji: '🛡️', layout: 'stacked', bare: true },
      causesStyle: 'tinted-flat',
      causesEmoji: '📜',
      causesLabel: 'Four regulatory tools – examples',
      causes: [
        { tone: 'rose',   icon: '🚫', head: 'Bans',           body: '<em>Outlaw the activity outright.</em> CFC ban (Montreal Protocol, 1989), ivory trade ban, leaded petrol ban (UK 2000), single-use plastic items (UK Oct 2023).' },
        { tone: 'amber',  icon: '📊', head: 'Limits / standards', body: '<em>Cap pollution, emissions or quantity per unit.</em> Euro 6 vehicle emissions standards, food hygiene ratings, building energy efficiency (EPC rating ≥ E for rentals).' },
        { tone: 'blue',   icon: '🎓', head: 'Licensing',      body: '<em>Require permission to operate.</em> Medical and legal professions, taxi licences (TfL), pub alcohol licences, broadcasting licences (Ofcom).' },
        { tone: 'green',  icon: '🧾', head: 'Disclosure rules', body: '<em>Mandatory reporting / labelling.</em> Financial product risk warnings, pension fund charge caps, mandatory ESG reporting for large firms.' }
      ],
      comparison: {
        title: 'Regulation – strengths vs weaknesses',
        emoji: '⚖️',
        left:  { tone: 'green', icon: '✅', label: 'Pros',
          caption: '<strong>Certainty</strong> – direct quantity control, not reliant on price responses. <strong>Acts fast</strong> in emergencies. <strong>Essential for severe or irreversible harm</strong> – toxics, child safety.' },
        right: { tone: 'rose',  icon: '❌', label: 'Cons',
          caption: '<strong>Rigid</strong> – one-size-fits-all ignores firms\' differing costs. <strong>Compliance costs</strong> – monitoring and enforcement. <strong>Unintended consequences</strong> – bans can create black markets.' }
      },
      keyTerms: [
        { term: 'Command-and-control', def: 'Direct regulation that mandates specific behaviour or outcomes – as opposed to market-based tools (taxes, permits) that change incentives.' },
        { term: 'Regulatory capture',  def: 'When a regulator comes to act in the interest of the firms it regulates rather than the public interest – e.g. via lobbying, industry hiring, or information dependence.' },
        { term: 'Compliance cost',     def: 'The cost to firms of meeting a regulation – monitoring, paperwork, capital upgrades. Often passed on to consumers as higher prices.' },
        { term: 'Self-regulation',     def: 'When an industry sets and enforces its own rules (e.g. the Advertising Standards Authority). Cheaper but vulnerable to capture.' }
      ],
      examEdge: '<strong>When to choose regulation over a price tool:</strong> (1) when the marginal external cost is impossible to estimate (so a Pigouvian tax cannot be calibrated); (2) when harm is severe and irreversible (lead, asbestos, CFCs – a tax that under-prices these would be catastrophic); (3) when speed matters more than efficiency. <strong>Top-band evaluation:</strong> "Regulation is the right tool for the chlorofluorocarbons problem because the harm to the ozone layer is irreversible and the marginal damage curve is effectively vertical above safe thresholds – a tax cannot give the same certainty."'
    },

    /* ============================================================
       CARD 10 – Choosing the right tool + evaluation
       ============================================================ */
    {
      id: 'price_controls_10',
      template: 'welfare-gf-explorer',
      stepLabel: 'Learn: Step 11 of 11',
      title: 'Choosing the right tool + evaluation',
      tip: { icon: '🎯', tone: 'amber', text: '<strong>Match the tool to the failure.</strong> Externalities → price-based tools or permits. Public goods → state provision. Information gaps → labels and rules. Market power → regulation or price caps. Every tool risks government failure – the question is whether the gain outweighs the new distortion.' },
      colA: 'Best-fit tool(s)',
      colB: 'Why it fits',
      rows: [
        { label: 'Negative externality',     colA: 'Indirect tax (Pigouvian) · Tradable permits · Regulation', colB: 'Internalises MEC; permits cap total emissions; regulation when harm is severe or irreversible.' },
        { label: 'Positive externality',     colA: 'Subsidy · Information provision · State provision',        colB: 'Subsidy expands output to social optimum; info corrects under-estimation of MEB; state provision for merit goods (NHS, schools).' },
        { label: 'Public goods',             colA: 'State provision (tax-funded)',                              colB: 'Free-rider problem prevents private supply; only the state can fund through compulsory taxation.' },
        { label: 'Information gaps',         colA: 'Mandatory disclosure · Regulation · Nudges',                 colB: 'Cheapest fix when the root failure is missing information; regulation backs up labels when behaviour is sticky.' },
        { label: 'Market power',             colA: 'Price cap · Competition regulation · Antitrust',             colB: 'Caps prevent monopoly pricing; competition policy attacks the structure rather than just the symptom.' },
        { label: 'Inequity',                 colA: 'Targeted subsidy · Income transfer · Progressive tax',       colB: 'Equity tools preserve price signals while redistributing – usually more efficient than universal price controls.' }
      ],
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Government failure risks',
      causes: [
        { tone: 'rose',   icon: '🔀', head: 'Distorted price signals',  body: 'Taxes, subsidies and price controls move prices away from marginal cost – sending the wrong scarcity signals to other parts of the economy.' },
        { tone: 'amber',  icon: '🎲', head: 'Unintended consequences', body: 'Bans create black markets; rent caps reduce housing supply; sugar taxes shift consumption to unflavoured-but-still-unhealthy alternatives.' },
        { tone: 'blue',   icon: '💼', head: 'High administrative costs', body: 'Monitoring, enforcement, compliance and revenue collection all cost real resources – sometimes larger than the welfare gain.' },
        { tone: 'purple', icon: '🔍', head: 'Information problems',      body: 'Regulators rarely know the true MEC or MEB. Set the tax/cap/subsidy wrong and you create distortion without the welfare correction.' }
      ],
      examEdge: '<strong>The synthesis answer:</strong> no tool is perfect. The best policy is usually a <em>policy mix</em> – e.g. carbon pricing (permits) + R&D subsidies (technology push) + regulation (banning new gas boilers from 2035) + information (EPC ratings). <strong>A* upgrade:</strong> identify the underlying market failure first, then propose the best-fit tool, then add an evaluation of which government-failure risk is most likely to bite. Real-world policy is always a balance between the original market failure and the new distortions intervention creates.',
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
    title:    'Government Intervention in Markets',
    subtitle: 'Introduction to Markets and Market Failure',
    backUrl:  TopicLoader.routes.learn('government-intervention-in-markets'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers maximum and minimum prices, their effects, and unintended consequences',
    shortNames: [
      'Maximum price','Minimum price','Shortage','Surplus','Black markets',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A maximum price (price ceiling) must be set BELOW the equilibrium price to:',
        opts: [
          'Create a surplus of supply over demand',
          'Have any effect – if set above equilibrium, it is non-binding',
          'Raise the market price above the free-market level',
          'Allow producers to earn supernormal profit'
        ],
        ans:  1,
        exp:  'A price ceiling only has effect if it is below the market equilibrium. Set above equilibrium, it has no effect – the market will price below the ceiling anyway. Only a binding (below-equilibrium) ceiling restricts price.'
      },
      {
        type: 'mcq',
        q:    'A maximum price typically causes:',
        opts: [
          'A surplus because too many producers want to sell at the low price',
          'A shortage because quantity demanded exceeds quantity supplied at the controlled price',
          'Higher prices than the free market would produce',
          'Lower consumer surplus'
        ],
        ans:  1,
        exp:  'Below the equilibrium price, Qd > Qs – a shortage develops. Consumers want to buy more at the low price than producers are willing to supply. Examples: rent controls, fuel price caps, wartime rationing.'
      },
      {
        type: 'mcq',
        q:    'A minimum price (price floor) must be set ABOVE the equilibrium price to be effective. It typically causes:',
        opts: [
          'A shortage of supply',
          'A surplus of supply over demand',
          'A fall in producer incomes',
          'A black market where goods are sold below the floor'
        ],
        ans:  1,
        exp:  'Above equilibrium, Qs > Qd – a surplus develops. Producers want to supply more at the higher price than consumers want to buy. Examples: agricultural minimum prices, the National Minimum Wage (if above equilibrium).'
      },
      {
        type: 'mcq',
        q:    'A black market is most likely to emerge following:',
        opts: [
          'A minimum price imposed below equilibrium',
          'A maximum price imposed below equilibrium, creating a shortage',
          'A free-market equilibrium with no government intervention',
          'A surplus caused by a minimum price'
        ],
        ans:  1,
        exp:  'When a maximum price creates a shortage, frustrated buyers and sellers have an incentive to trade illegally above the official price. Black (shadow) markets develop to clear the excess demand at a higher, unofficial price.'
      },
      {
        type: 'numeric_input',
        q:    'Equilibrium price = £10. A maximum price of £7 is set. At £7: Qd = 800 and Qs = 500. What is the size of the shortage (units)?',
        answer: 300,
        tolerance: 0,
        unit: 'units',
        hint: 'Shortage = Qd − Qs at the controlled price.',
        workingSteps: ['Shortage = 800 − 500 = 300 units']
      },
      {
        type: 'categorise',
        q:    'Categorise each as a maximum price or minimum price example.',
        categories: ['Maximum price','Minimum price'],
        items: [
          { item: 'Rent control in a city housing market',      category: 'Maximum price' },
          { item: 'EU minimum price for agricultural output',   category: 'Minimum price' },
          { item: 'Energy price cap on household bills',        category: 'Maximum price' },
          { item: 'National Minimum Wage',                      category: 'Minimum price' },
          { item: 'Maximum fare on public transport',           category: 'Maximum price' },
          { item: 'Minimum alcohol unit price',                 category: 'Minimum price' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each price control scenario to its effect.',
        pairs: [
          { cause: 'Maximum rent set below equilibrium',         effect: 'Housing shortage develops; quality may deteriorate' },
          { cause: 'Minimum price for wheat set above equilibrium', effect: 'Wheat surplus emerges; government may need to buy excess' },
          { cause: 'Price ceiling creates shortage',             effect: 'Black market may develop at higher unofficial price' },
          { cause: 'Minimum wage set above market wage',         effect: 'Excess supply of labour (unemployment) may occur in some sectors' },
          { cause: 'Energy price cap protects consumers',        effect: 'Supplier revenues fall; investment in capacity may fall' },
          { cause: 'Agricultural price floor set',              effect: 'Farmers\' incomes stabilised above what free market would give' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Maximum price','Minimum price','Price floor','Automatic stabiliser'],
        ans:  3,
        exp:  'Maximum price, minimum price, and price floor are all forms of price controls. An automatic stabiliser is a macroeconomic fiscal concept (like unemployment benefits) – not a price control.'
      },
      {
        type: 'data_table',
        q:    'Use the supply and demand data to identify the equilibrium price and determine whether a £6 price control creates a shortage or surplus.',
        tableHeaders: ['Price (£)','Qd','Qs'],
        tableData: [
          ['4','100','20'],
          ['6','80','40'],
          ['8','60','60'],
          ['10','40','80']
        ],
        opts: [
          'Equilibrium at £8; £6 control creates a shortage of 40 units',
          'Equilibrium at £6; no effect – £6 is already the market price',
          'Equilibrium at £8; £6 control creates a surplus of 40 units',
          'Equilibrium at £10; £6 control creates a shortage of 40 units'
        ],
        ans:  0,
        exp:  'Equilibrium (Qd=Qs) is at £8 (both = 60). A price of £6 gives Qd=80, Qs=40 → shortage of 40 units. It is a binding maximum price.'
      },
      {
        type: 'match_pairs',
        q:    'Match each price control concept to its description.',
        pairs: [
          { a: 'Maximum price',      b: 'Legal upper limit on price; must be below equilibrium to be binding' },
          { a: 'Minimum price',      b: 'Legal lower limit on price; must be above equilibrium to be binding' },
          { a: 'Shortage',           b: 'Excess demand: Qd > Qs at the controlled price' },
          { a: 'Surplus',            b: 'Excess supply: Qs > Qd at the controlled price' },
          { a: 'Black market',       b: 'Illegal trading above/below the official price to clear the imbalance' },
          { a: 'Non-binding control',b: 'Price control set outside the equilibrium range; has no market effect' }
        ]
      }
    ]
  };

})();

