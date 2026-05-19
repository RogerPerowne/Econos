window.ECONOS_TOPIC = {
  id: 'consumer_producer_surplus',
  topicNum: '2.8',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Consumer & Producer Surplus',
  estTime: '8-10 minutes',
  goal: 'Lock in consumer surplus, producer surplus, and total welfare — and understand how they change when markets are interfered with through taxes, subsidies, or price controls.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Consumer surplus is the benefit buyers receive above what they pay; producer surplus is the benefit sellers receive above their minimum. Together they measure total welfare — the gains from trade. Any policy that shifts price or quantity redistributes or destroys part of this surplus.',
    doInThis: 'Work through 6 cards covering the definitions and diagrams for both surplus measures, how to calculate them, what happens to surplus under taxes and subsidies, and how surplus connects to allocative efficiency and market failure.',
    outcomes: [
      'Define consumer surplus and producer surplus and show both on a supply-demand diagram',
      'Calculate consumer surplus, producer surplus, and deadweight welfare loss',
      'Explain how taxes, subsidies, and price controls redistribute and reduce total surplus',
      'Connect total surplus maximisation to allocative efficiency and the social optimum'
    ],
    tip: 'Consumer surplus = area of triangle above price below demand curve. Producer surplus = area of triangle below price above supply curve. Both are maximised at the free-market equilibrium — any intervention that moves price away from equilibrium reduces total welfare unless it corrects a market failure.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'consumer_producer_surplus_1',
      template: 'framing',
      diagramKey: 'heroCPS',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Consumer & producer surplus: the big picture',
      lede: 'The gains from trade do not just go to buyers or sellers — they are shared. Surplus measures exactly who gets what and how much.',
      tip: 'CS = triangle ABOVE the price line BELOW the demand curve. PS = triangle BELOW the price line ABOVE the supply curve. Total welfare = CS + PS. Any intervention that creates a "wedge" in price destroys some of this surplus — that destroyed portion is the DWL.',
      branches: [
        { tone: 'green',  label: 'Consumer surplus',   sub: 'The difference between what consumers are willing to pay and what they actually pay. Shown as the triangle above price below demand.' },
        { tone: 'blue',   label: 'Producer surplus',   sub: 'The difference between the price producers receive and their minimum acceptable price. Shown as the triangle below price above supply.' },
        { tone: 'purple', label: 'Total welfare',      sub: 'CS + PS = total welfare (social surplus). Maximised at the free-market equilibrium where D = S.' },
        { tone: 'amber',  label: 'Policy effects',     sub: 'Taxes, subsidies and price controls all redistribute surplus between consumers, producers and government — and often destroy some of it (DWL).' },
        { tone: 'rose',   label: 'Efficiency link',    sub: 'Allocative efficiency = total welfare maximised = no deadweight loss. Market failure = some surplus is not captured = DWL exists.' }
      ],
      body: '<strong>Consumer surplus (CS)</strong> is the benefit consumers receive beyond what they pay. A buyer willing to pay £50 for a concert ticket but who pays £30 enjoys £20 of consumer surplus.<br><br><strong>Producer surplus (PS)</strong> is the benefit producers receive beyond their minimum acceptable price. A seller willing to accept £20 for a good but who receives £30 enjoys £10 of producer surplus.<br><br>These surplus triangles represent the gains from voluntary exchange — trade only occurs when both sides benefit. The total area (CS + PS) is maximised when the market is in free equilibrium at the price where quantity demanded equals quantity supplied.',
      keyTerms: [
        { term: 'Consumer surplus', def: 'The difference between the maximum a consumer is willing to pay (their demand price) and the actual market price they pay.' },
        { term: 'Producer surplus', def: 'The difference between the market price received by a producer and the minimum price they would accept to supply (their supply price).' },
        { term: 'Total welfare (social surplus)', def: 'CS + PS — the total gains from trade. Maximised at the competitive equilibrium where MSB = MSC.' }
      ],
      examEdge: 'Always describe surplus as a triangle with three vertices: (1) the equilibrium price; (2) the point where demand (for CS) or supply (for PS) meets the price axis; (3) the equilibrium quantity. Area = ½ × base × height. A common exam mistake: students shade the wrong side of the supply or demand curve. CS is above the price line; PS is below it.'
    },
    {
      id: 'consumer_producer_surplus_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Building the Surplus Diagram',
      lede: 'Tap each step to build the diagram — watch consumer and producer surplus emerge from the supply and demand framework.',
      diagramKey: 'cpsSvg',
      steps: [
        {
          key: 'base',
          label: 'S & D curves',
          text: 'Start with a standard supply and demand diagram. The curves intersect at the free-market equilibrium: price P* and quantity Q*. At this point, every willing buyer meets a willing seller. Surplus analysis begins here.'
        },
        {
          key: 'cs',
          label: 'Consumer surplus',
          text: 'Consumer surplus (CS) is the green triangle above the price line P* and below the demand curve. Each buyer on the demand curve was willing to pay more than P* — CS is their combined saving. Formula: CS = ½ × Q* × (max WTP − P*).'
        },
        {
          key: 'ps',
          label: 'Producer surplus',
          text: 'Producer surplus (PS) is the rose triangle below the price line P* and above the supply curve. Each seller on the supply curve would have accepted less than P* — PS is their combined extra revenue. Formula: PS = ½ × Q* × (P* − min supply price).'
        },
        {
          key: 'total',
          label: 'Total welfare',
          text: 'Total welfare = CS + PS — the entire area between the two curves up to Q*. This is maximised at the free-market equilibrium (the social optimum) where MSB = MSC and deadweight loss = 0. Any policy that moves Q away from Q* reduces this total.'
        },
        {
          key: 'dwl',
          label: 'Tax & DWL',
          text: 'A tax drives a wedge between the consumer price (Pc) and the producer price (Pp), reducing output from Q* to Q2. Some CS and PS becomes tax revenue (a transfer). The amber triangle is deadweight welfare loss — surplus destroyed and captured by nobody. Only a Pigouvian tax correcting an externality can improve welfare.'
        }
      ],
      examEdge: 'Numerical surplus questions: area of triangle = ½ × base × height. For CS: height = (D-axis intercept) − P*, base = Q*. For PS: height = P* − (S-axis intercept), base = Q*. When a tax is introduced, remember three things happen: CS falls, PS falls, government gains revenue — but CS + PS lost > revenue gained, leaving the DWL as the net efficiency cost.'
    },
    {
      id: 'consumer_producer_surplus_3',
      template: 'diagnose',
      title: 'How Taxes Affect Surplus',
      intro: 'An indirect tax drives a wedge between the price consumers pay and the price producers receive, reducing both CS and PS and creating a deadweight welfare loss.',
      rows: [
        { label: 'Who is affected', colA: 'Consumers', colB: 'Producers' },
        { label: 'What happens', colA: 'Price rises from P* to Pc (consumer price). CS shrinks — the triangle loses the region between P* and Pc over Q2.', colB: 'Price received falls from P* to Pp (producer price = Pc - tax). PS shrinks — the triangle loses the region between Pp and P* over Q2.' },
        { label: 'Where the lost surplus goes', colA: 'Part of lost CS goes to government as tax revenue (the rectangle from P* to Pc over Q2).', colB: 'Part of lost PS goes to government as tax revenue (the rectangle from Pp to P* over Q2).' }
      ],
      footer: 'The portion of lost surplus that does not become tax revenue is the deadweight welfare loss — the triangle between Q2 and Q* between the supply and demand curves. This is the efficiency cost of the tax, which cannot be recovered by anyone.',
      examEdge: 'For a tax: CS falls, PS falls, government revenue rises, but CS + PS lost > government revenue gained. The difference is the DWL. Only if the tax corrects a market failure (e.g. Pigouvian tax on a negative externality) does this DWL represent an improvement in social welfare — because it eliminates the even larger externality DWL.'
    },
    {
      id: 'consumer_producer_surplus_4',
      template: 'diagnose',
      title: 'How Subsidies and Price Controls Affect Surplus',
      intro: 'Subsidies expand output beyond the free-market level; price controls prevent the market from clearing. Both create welfare effects worth knowing.',
      rows: [
        { label: 'Policy', colA: 'Subsidy (supply shifts right)', colB: 'Price ceiling (max price below P*)' },
        { label: 'Price and quantity', colA: 'Consumer price falls to Pc; producer received price rises to Pp (= Pc + subsidy). Quantity rises to Q2 > Q*.', colB: 'Price is held below equilibrium at Pmax. Quantity supplied falls; quantity demanded rises. Shortage = Qd - Qs.' },
        { label: 'Surplus effects', colA: 'CS rises (lower consumer price). PS rises (higher producer price). Government cost = subsidy rectangle. DWL = triangle between Q* and Q2 — unless correcting a positive externality.', colB: 'CS changes ambiguously (lower price but rationing). PS falls substantially (producers receive less). DWL = triangle between Qs and Q* — output that could have been traded but is not.' }
      ],
      footer: 'Price ceilings reduce total welfare unless they correct a market failure (e.g. monopsony power). Subsidies also reduce total welfare unless they correct a positive externality. The key evaluative question is always: does the policy close a pre-existing gap between private and social optimum, or does it open a new one?',
      examEdge: 'Price ceiling exam trap: students often say CS always rises with a price ceiling. In fact, with rationing, some consumers who would have bought at P* now cannot — losing their surplus. Whether total CS rises or falls depends on the shapes of the curves and how rationing works. Play safe: say CS may rise for those who successfully buy, but DWL means total welfare falls.'
    },
    {
      id: 'consumer_producer_surplus_5',
      template: 'framing',
      title: 'Surplus and Allocative Efficiency',
      body: 'Allocative efficiency is achieved when total welfare (CS + PS) is maximised — which occurs at the free-market equilibrium where D = S, or equivalently where MSB = MSC.<br><br>At this point, every unit that generates more benefit than cost is produced, and no unit is produced that costs more than it benefits. This is the social optimum.<br><br>Any departure from this output level — whether from a tax, subsidy, price control, externality, or public good problem — reduces total welfare and creates a deadweight loss triangle. The size of this triangle measures the efficiency cost of the deviation.<br><br><strong>Market failure reframed:</strong> market failure occurs when the <em>private</em> equilibrium (where MPB = MPC) differs from the <em>social</em> optimum (where MSB = MSC). The externality shifts one of the social curves, moving the socially optimal output away from the private equilibrium.',
      keyTerms: [
        { term: 'Deadweight welfare loss (DWL)', def: 'The loss of total surplus (CS + PS) that occurs when output differs from the socially optimal level — represents pure waste that no one captures.' },
        { term: 'Allocative efficiency', def: 'Achieved when P = MC (or MSB = MSC) — total welfare is maximised and DWL = 0.' },
        { term: 'Pareto efficiency', def: 'A state where no one can be made better off without making someone else worse off — the free-market competitive equilibrium is Pareto efficient (absent market failures).' }
      ],
      examEdge: 'The connection between surplus and efficiency is the analytical backbone of microeconomics. When asked about "welfare effects" in an exam, draw the before/after diagram, shade CS and PS, identify what changed (some CS → tax revenue, some destroyed → DWL), and state the net effect on total welfare. A policy that destroys less surplus than the market failure it corrects improves total welfare.'
    },
    {
      id: 'consumer_producer_surplus_6',
      template: 'cause',
      causesEmoji: '📊',
      causesLabel: 'Real-world surplus applications',
      causesStyle: 'tinted-flat',
      title: 'Surplus in the Real World',
      causes: [
        { icon: '🏠', head: 'Housing market price ceiling', body: 'Rent controls set below the market rate reduce landlord PS dramatically. Some tenants gain (lower rent), but a shortage develops as Qs < Qd. Total welfare falls — DWL equals the value of housing transactions that do not occur. Evidence: San Francisco rent control reduced rental supply by 15% (Diamond et al., 2019).' },
        { icon: '✈️', head: 'Aviation industry subsidies', body: 'Many airports and airlines receive government subsidies. This expands output beyond free-market levels. Some of the subsidy becomes CS (lower fares) and some becomes PS (higher airline revenue), but the DWL represents overproduction unless negative aviation externalities are already very large.' },
        { icon: '🌐', head: 'Free trade vs tariffs', body: 'Free trade maximises total surplus in a country by allowing consumers to buy at the world price. A tariff raises the domestic price, transferring CS to domestic producers and the government (tariff revenue), but creating DWL triangles on both sides. Trade theory shows the sum of welfare losses exceeds the gains to producers.' },
        { icon: '👷', head: 'Labour market minimum wage', body: 'A minimum wage above equilibrium creates PS gains for employed workers (higher wage) but may reduce employment. Workers who lose jobs lose their surplus. Total welfare effect depends on the elasticity of demand for labour — inelastic demand means smaller employment loss and net welfare gain for workers.' }
      ],
      examEdge: 'Surplus analysis is the standard toolkit for evaluating any price or quantity intervention. For each real-world policy, ask: (1) does consumer price rise or fall? (2) does producer price rise or fall? (3) does output rise or fall? (4) is there a DWL triangle? (5) does the intervention correct a pre-existing market failure or create a new welfare loss? This five-question framework will structure strong exam answers.',
      keyTakeaway: { title: 'The big picture', text: 'Consumer and producer surplus measure the gains from trade. Together they equal total welfare, which is maximised at the free-market equilibrium. Any policy intervention redistributes surplus between consumers, producers, and the government — and typically destroys some surplus as deadweight welfare loss. The key evaluative question is whether the policy corrects a pre-existing market failure large enough to justify the welfare loss it creates.' },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
