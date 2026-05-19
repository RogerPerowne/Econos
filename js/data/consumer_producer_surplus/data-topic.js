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
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Consumer & producer surplus: the big picture',
      tip: {
        icon: '📊',
        tone: 'blue',
        text: '<strong>Consumer surplus</strong> is the gap between what consumers are willing to pay and the market price. <strong>Producer surplus</strong> is the gap between the market price and the minimum price producers are willing to accept.'
      },
      diagramKey: 'cpsDiagram',
      diagramLabel: 'The surplus diagram',
      diagramEmoji: '📐',
      causes: [
        {
          tone: 'blue',
          icon: '🧠',
          head: 'What the two surpluses show',
          body: 'CS captures every buyer\'s saving: the gap between their maximum willingness to pay and P*. PS captures every seller\'s gain: the gap between P* and their minimum acceptable price. Both are shown as triangles on the D/S diagram.'
        },
        {
          tone: 'green',
          icon: '⚖️',
          head: 'Why total surplus matters',
          body: 'Total welfare = CS + PS. It measures the aggregate gains from all voluntary transactions. The free-market equilibrium maximises this total — any policy that moves price away from P* reduces total welfare, creating deadweight loss.'
        },
        {
          tone: 'amber',
          icon: '🤝',
          head: 'How markets create gains from trade',
          body: 'Trade is voluntary: a transaction only happens when both parties benefit. CS and PS together measure the full value created by exchange. This is why competitive markets are efficient — they extract the maximum possible gains from trade.'
        }
      ],
      causesStyle: 'plain-white',
      keyTerms: [
        { term: 'Consumer surplus', def: 'The difference between the maximum a consumer is willing to pay (their demand price) and the actual market price they pay.' },
        { term: 'Producer surplus', def: 'The difference between the market price received by a producer and the minimum price they would accept to supply (their supply price).' },
        { term: 'Total welfare (social surplus)', def: 'CS + PS — the total gains from trade. Maximised at the competitive equilibrium where MSB = MSC.' }
      ],
      examEdge: 'Always describe surplus as a triangle with three vertices: (1) the equilibrium price; (2) the point where demand (for CS) or supply (for PS) meets the price axis; (3) the equilibrium quantity. Area = ½ × base × height. A common exam mistake: students shade the wrong side of the supply or demand curve. CS is above the price line; PS is below it.'
    },
    {
      id: 'consumer_producer_surplus_2',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Building the Surplus Diagram',
      tip: {
        icon: '💡',
        tone: 'amber',
        text: 'To find consumer and producer surplus, first identify equilibrium. Then use the market price as the divider — shade above price and below demand for consumer surplus, and below price and above supply for producer surplus.'
      },
      diagramPanel: {
        diagramKey: 'cpsDiagram',
        title: 'Build it in this order',
        tone: 'green',
        steps: [
          { head: 'Plot demand and supply',   body: 'Draw demand (D) sloping down and supply (S) sloping up.' },
          { head: 'Find equilibrium E',        body: 'Locate where D and S intersect.' },
          { head: 'Mark P<sub>e</sub> and Q<sub>e</sub>', body: 'Draw dashed lines to the price (P<sub>e</sub>) and quantity (Q<sub>e</sub>) axes.' },
          { head: 'Shade CS and PS',           body: 'Shade consumer surplus (CS) and producer surplus (PS) using P<sub>e</sub> as the divider.' }
        ]
      },
      causes: [
        { tone: 'rose',  icon: '❌', head: 'Common mistake',               body: 'Students shade the whole triangle. Surplus must be measured using the market price line, not the axes.' },
        { tone: 'blue',  icon: '🎓', head: 'Exam habit',                   body: 'Always label CS, PS, E, P<sub>e</sub> and Q<sub>e</sub> clearly.' },
        { tone: 'amber', icon: '⭐', head: 'Why the market price matters', body: 'The market price separates buyer gains (above price) from seller gains (below price).' }
      ],
      causesStyle: 'plain-white',
      causesLabel: null,
      causes2: [
        { tone: 'green', icon: '⭐', head: 'Key idea', body: 'Surplus is always measured relative to the equilibrium price.' },
        { tone: 'green', icon: '✅', head: 'Exam edge', body: 'If the diagram changes, redraw the new equilibrium before discussing surplus.' }
      ],
      causes2Style: 'plain-white',
      causes2Label: null
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
