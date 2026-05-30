window.ECONOS_TOPIC = {
  id: 'consumer-and-producer-surplus',
  topicNum: '2.8',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Consumer & Producer Surplus',
  estTime: '8-10 minutes',
  goal: 'Lock in consumer surplus, producer surplus, and total welfare – and understand how they change when markets are interfered with through taxes, subsidies, or price controls.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Consumer surplus is the benefit buyers receive above what they pay; producer surplus is the benefit sellers receive above their minimum. Together they measure total welfare – the gains from trade. Any policy that shifts price or quantity redistributes or destroys part of this surplus.',
    doInThis: 'Work through 6 cards covering the definitions and diagrams for both surplus measures, how to calculate them, what happens to surplus under taxes and subsidies, and how surplus connects to allocative efficiency and market failure.',
    outcomes: [
      'Define consumer surplus and producer surplus and show both on a supply-demand diagram',
      'Calculate consumer surplus, producer surplus, and deadweight welfare loss',
      'Explain how taxes, subsidies, and price controls redistribute and reduce total surplus',
      'Connect total surplus maximisation to allocative efficiency and the social optimum'
    ],
    tip: 'Consumer surplus = area of triangle above price below demand curve. Producer surplus = area of triangle below price above supply curve. Both are maximised at the free-market equilibrium – any intervention that moves price away from equilibrium reduces total welfare unless it corrects a market failure.',
    stages: [
      { num: 1, name: 'Learn it', sub: '6 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'consumer_producer_surplus_1',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Consumer & producer surplus: the big picture',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '📊', text: '<strong>Consumer surplus</strong> is the gap between what consumers are willing to pay and the market price. <strong>Producer surplus</strong> is the gap between the market price and the minimum price producers are willing to accept.' },
        { type: 'diagram', svgKey: 'cpsDiagram', caption: 'The surplus diagram' },
        {
          type: 'grid',
          cols: 3,
          children: [
            { type: 'tile', tone: 'blue', icon: '🧠', head: 'What the two surpluses show', body: 'CS captures every buyer\'s saving: the gap between their maximum willingness to pay and P*. PS captures every seller\'s gain: the gap between P* and their minimum acceptable price. Both are shown as triangles on the D/S diagram.' },
            { type: 'tile', tone: 'green', icon: '⚖️', head: 'Why total surplus matters', body: 'Total welfare = CS + PS. It measures the aggregate gains from all voluntary transactions. The free-market equilibrium maximises this total – any policy that moves price away from P* reduces total welfare, creating deadweight loss.' },
            { type: 'tile', tone: 'amber', icon: '🤝', head: 'How markets create gains from trade', body: 'Trade is voluntary: a transaction only happens when both parties benefit. CS and PS together measure the full value created by exchange. This is why competitive markets are efficient – they extract the maximum possible gains from trade.' }
          ]
        },
        { type: 'glossaryRow', term: 'Consumer surplus', def: 'The difference between the maximum a consumer is willing to pay (their demand price) and the actual market price they pay.' },
        { type: 'glossaryRow', term: 'Producer surplus', def: 'The difference between the market price received by a producer and the minimum price they would accept to supply (their supply price).' },
        { type: 'glossaryRow', term: 'Total welfare (social surplus)', def: 'CS + PS – the total gains from trade. Maximised at the competitive equilibrium where MSB = MSC.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always describe surplus as a triangle with three vertices: (1) the equilibrium price; (2) the point where demand (for CS) or supply (for PS) meets the price axis; (3) the equilibrium quantity. Area = ½ × base × height. A common exam mistake: students shade the wrong side of the supply or demand curve. CS is above the price line; PS is below it.' }
      ]
    },
    {
      id: 'consumer_producer_surplus_2',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Building the Surplus Diagram',
      tip: {
        icon: '💡',
        tone: 'amber',
        text: 'To find consumer and producer surplus, first identify equilibrium. Then use the market price as the divider – shade above price and below demand for consumer surplus, and below price and above supply for producer surplus.'
      },
      diagramPanel: {
        diagramKey: 'cpsDiagram',
        layout: 'stacked',
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
      examEdge: '<strong>Key idea:</strong> Surplus is always measured relative to the equilibrium price. If the diagram changes, redraw the new equilibrium before discussing surplus.<br><br><strong>Numerical questions:</strong> Area of triangle = ½ × base × height. For CS: height = (D-axis intercept) − P<sub>e</sub>, base = Q<sub>e</sub>. For PS: height = P<sub>e</sub> − (S-axis intercept), base = Q<sub>e</sub>. When a tax is introduced, remember three things happen: CS falls, PS falls, government gains revenue – but CS + PS lost > revenue gained, leaving the DWL as the net efficiency cost.'
    },
    {
      id: 'consumer_producer_surplus_3',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'How Taxes Affect Surplus',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: 'A per-unit tax creates a wedge between the price buyers pay and the price sellers receive. It transfers some surplus to the government and destroys some welfare.'
      },
      interactiveDiagram: {
        svgKey: 'taxDiagramInteractive',
        label: 'How a tax reshapes surplus',
        emoji: '📊',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market baseline',
            body: 'D and S intersect at P<sub>e</sub>, Q<sub>e</sub>. Total welfare = CS + PS, with no government intervention.',
            analysis: 'Without intervention, the market is <strong>allocatively efficient</strong>: every unit produced has marginal benefit ≥ marginal cost, and total surplus is at its maximum. Any policy that moves price or quantity away from this equilibrium <em>must</em> reduce total welfare – unless it corrects an underlying market failure (e.g. an externality).'
          },
          {
            label: 'Tax shifts supply',
            tone: 'amber',
            head: 'The tax wedge',
            body: 'S shifts up by the tax amount. Buyers now pay P<sub>c</sub>; sellers keep only P<sub>p</sub>. Output falls from Q<sub>e</sub> to Q<sub>t</sub>.',
            analysis: 'The vertical gap P<sub>c</sub> − P<sub>p</sub> equals the per-unit tax. <strong>Incidence</strong> – how the burden splits between buyers and sellers – depends on relative elasticity: the more <em>inelastic</em> side bears more of the tax. Quantity always falls because at every quantity the price buyers pay now exceeds the price sellers receive by the tax.'
          },
          {
            label: 'Revenue & surplus',
            tone: 'green',
            head: 'CS and PS shrink; government collects revenue',
            body: 'CS (blue) and PS (amber) are both smaller. The green rectangle = tax revenue = (P<sub>c</sub> − P<sub>p</sub>) × Q<sub>t</sub>.',
            analysis: 'The tax <strong>redistributes</strong> surplus: part of what used to be CS and PS is now government revenue. This is a <em>transfer</em>, not a welfare loss – the money still exists in the economy and can fund public spending. Evaluation hinges on whether the social value of that public spending exceeds the surplus given up by buyers and sellers.'
          },
          {
            label: 'Deadweight loss',
            tone: 'rose',
            head: 'Welfare lost forever',
            body: 'The red triangle = DWL: surplus from trades that <em>would have occurred</em> at P<sub>e</sub> but no longer happen.',
            analysis: 'DWL is the <strong>efficiency cost</strong> of the tax – surplus that is destroyed, not transferred to anyone. Its size grows with the tax rate (DWL ≈ ½ × tax² × elasticity) and is larger when supply or demand is more elastic. <strong>Exception:</strong> a <em>Pigouvian</em> tax on a negative externality can <em>increase</em> welfare, because the DWL it creates in the private market is smaller than the externality DWL it eliminates.'
          }
        ]
      },
      causes: [
        { tone: 'blue',  icon: '🧑', head: 'Consumer burden',    body: 'Higher market price paid by buyers.' },
        { tone: 'amber', icon: '🏭', head: 'Producer burden',    body: 'Lower net price received by sellers.' },
        { tone: 'green', icon: '🔁', head: 'Incidence reminder', body: 'The more inelastic side of the market bears more of the tax burden.' }
      ],
      causesStyle: 'plain-white',
      causesLabel: null,
      examEdge: '<strong>Key idea:</strong> Tax revenue is a transfer, but deadweight loss is welfare lost forever. Always distinguish between the tax rectangle and the deadweight loss triangle.<br><br>For a tax: CS falls, PS falls, government revenue rises, but CS + PS lost > government revenue gained. The difference is the DWL. Only if the tax corrects a market failure (e.g. Pigouvian tax on a negative externality) does this DWL represent an improvement in social welfare – because it eliminates the even larger externality DWL.'
    },
    {
      id: 'consumer_producer_surplus_4',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'How Subsidies Affect Surplus',
      tip: {
        icon: '💡',
        tone: 'green',
        text: 'A per-unit subsidy is the mirror image of a tax. It lowers the price buyers pay and raises the price sellers receive, expanding output beyond the free-market level. CS and PS both rise, but government spending exceeds the gain – leaving a deadweight loss from overproduction, unless the subsidy corrects a positive externality.'
      },
      interactiveDiagram: {
        svgKey: 'subsidyDiagramInteractive',
        label: 'How a subsidy reshapes surplus',
        emoji: '📊',
        layers: ['idl-1', 'idl-2', 'idl-3'],
        views: [
          {
            label: 'Free market',
            tone: 'blue',
            head: 'The free-market baseline',
            body: 'D and S intersect at P<sub>e</sub>, Q<sub>e</sub>. Total welfare = CS + PS, with no government intervention.',
            analysis: 'Without intervention, the market is <strong>allocatively efficient</strong>: every unit produced has marginal benefit ≥ marginal cost, and total surplus is at its maximum. Any policy that moves price or quantity away from this equilibrium <em>must</em> reduce total welfare – unless it corrects an underlying market failure (e.g. a positive externality).'
          },
          {
            label: 'Subsidy shifts supply',
            tone: 'amber',
            head: 'The subsidy wedge',
            body: 'S shifts down by the subsidy amount. Buyers now pay P<sub>b</sub>; sellers receive P<sub>s</sub> = P<sub>b</sub> + subsidy. Output rises from Q<sub>e</sub> to Q<sub>s</sub>.',
            analysis: 'The vertical gap P<sub>s</sub> − P<sub>b</sub> equals the per-unit subsidy. As with a tax, <strong>incidence</strong> depends on relative elasticity: the more <em>inelastic</em> side captures more of the subsidy benefit. Quantity always rises because at every quantity the price sellers receive now exceeds the price buyers pay by the subsidy.'
          },
          {
            label: 'Surplus & gov. cost',
            tone: 'green',
            head: 'CS and PS expand; the government pays',
            body: 'CS (blue) and PS (amber) are both larger than at the free-market equilibrium. The green rectangle = government spending = (P<sub>s</sub> − P<sub>b</sub>) × Q<sub>s</sub>.',
            analysis: 'The subsidy is funded by taxpayers, so the gain to buyers and sellers comes at a public cost. Total private surplus rises by less than the cost of the subsidy: the difference is welfare that is <em>spent</em> but not received by anyone in the market. Evaluation hinges on whether the wider social benefit (e.g. equity, externality correction) justifies that gap.'
          },
          {
            label: 'Deadweight loss',
            tone: 'rose',
            head: 'Welfare lost from overproduction',
            body: 'The red triangle = DWL: units between Q<sub>e</sub> and Q<sub>s</sub> whose <em>marginal cost</em> exceeds their <em>marginal benefit</em> – produced only because the subsidy distorts incentives.',
            analysis: 'DWL is the <strong>efficiency cost</strong> of the subsidy – resources used to produce units society values less than they cost. Its size grows with the subsidy rate and is larger when supply or demand is more elastic. <strong>Exception:</strong> a subsidy that corrects a <em>positive externality</em> can <em>increase</em> welfare, because the DWL it creates in the private market is smaller than the externality DWL it eliminates.'
          }
        ]
      },
      causes: [
        { tone: 'blue',  icon: '🧑', head: 'Consumer benefit',  body: 'Lower market price paid by buyers.' },
        { tone: 'amber', icon: '🏭', head: 'Producer benefit',  body: 'Higher effective price received by sellers.' },
        { tone: 'green', icon: '🏛️', head: 'Taxpayer cost',    body: 'Government spending = subsidy per unit × quantity sold.' }
      ],
      causesStyle: 'plain-white',
      causesLabel: null,
      examEdge: '<strong>Key idea:</strong> A subsidy is the mirror image of a tax. Both create a wedge between the price buyers pay and the price sellers receive, both shift quantity away from Q<sub>e</sub>, and both create a deadweight loss triangle. The difference is direction: a tax shrinks output and transfers surplus to the government, while a subsidy expands output and transfers government money to the market.<br><br>For a subsidy: CS rises, PS rises, but government cost > CS + PS gained. The difference is the DWL. Only if the subsidy corrects a market failure (e.g. positive externality) does the DWL represent an improvement in social welfare – because it eliminates the even larger externality DWL.'
    },
    {
      id: 'consumer_producer_surplus_5',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Surplus and Allocative Efficiency',
      tip: {
        icon: '💡',
        tone: 'blue',
        text: 'A market is <strong>allocatively efficient</strong> when resources are allocated to the uses consumers value most and total surplus is maximised. In a simple competitive diagram, this occurs where demand equals supply – equivalently, where <strong>MB = MC</strong>.'
      },
      diagramPanel: {
        diagramKey: 'allocativeEfficiencyDiagram',
        title: 'Why equilibrium is efficient',
        titleAbove: true,
        titleEmoji: '⚖️',
        tone: 'blue',
        layout: 'side',
        intro: 'At <strong>E</strong> (where MB = MC), total surplus (CS + PS) is maximised.<br><br>If output is <strong>below Q<sub>e</sub></strong>, total surplus is lower.<br><br>If output is <strong>above Q<sub>e</sub></strong>, total surplus is lower.'
      },
      causes: [
        { tone: 'blue',  icon: '⚖️', head: 'Marginal benefit equals marginal cost', body: 'At equilibrium, MB = MC. The value of the next unit to consumers exactly equals its cost to producers – no further reallocation can raise welfare.' },
        { tone: 'green', icon: '✓',  head: 'No reallocation can raise total welfare', body: 'Moving output into or out of this market reduces total surplus. The competitive equilibrium achieves the social optimum without central coordination.' },
        { tone: 'amber', icon: '⭐', head: 'Gains from trade are exhausted', body: 'Every mutually beneficial trade has been realised at Qe. Any further unit would cost more to produce than the benefit it delivers to consumers.' }
      ],
      causesStyle: 'plain-white',
      causesLabel: null,
      causes2: [
        { tone: 'blue',  icon: '📊', head: 'Underproduction',   body: 'Quantity is less than the efficient level. Misses beneficial trades where benefit exceeds cost. Usually linked to <em>positive external benefits</em>.' },
        { tone: 'amber', icon: '🏭', head: 'Overproduction',    body: 'Quantity is greater than the efficient level. Produces units where cost exceeds benefit. Often linked to <em>negative external costs</em>.' },
        { tone: 'green', icon: '🧮', head: 'Total surplus test', body: 'The best allocation is the one with the largest <strong>CS + PS</strong>. Equilibrium in a competitive market passes this test.' }
      ],
      causes2Emoji: '⚠️',
      causes2Label: 'When markets miss the efficient level',
      keyTakeaway: { title: 'Key idea', text: 'Allocative efficiency means maximising total surplus at the equilibrium where <strong>MB = MC</strong>. Any departure – from a tax, subsidy, price control, externality, or public good problem – creates a deadweight loss whose size measures the efficiency cost of the deviation.' },
      examEdge: '<strong>Don\'t confuse the three efficiencies.</strong> <em>Allocative</em> efficiency = maximising total surplus (MB = MC). <em>Productive</em> efficiency = producing at lowest cost (on the LRAC minimum). <em>Equity</em> = fairness of the distribution. They can pull in different directions: a perfectly competitive market is allocatively efficient but may produce unequal outcomes; a regulated monopoly can be productively efficient but allocatively inefficient.<br><br><strong>Welfare-effects exam method:</strong> draw the before/after diagram, shade CS and PS, identify what changed (some CS → tax revenue, some destroyed → DWL), and state the net effect on total welfare. A policy that destroys less surplus than the market failure it corrects <em>improves</em> total welfare; one that operates in an otherwise efficient market reduces it.<br><br><strong>Market failure reframed:</strong> market failure occurs when the <em>private</em> equilibrium (where MPB = MPC) differs from the <em>social</em> optimum (where MSB = MSC). The externality shifts one of the social curves, moving the socially optimal output away from the private equilibrium – and the DWL triangle measures the gap.'
    },
    {
      id: 'consumer_producer_surplus_6',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'Surplus in the Real World',
      tip: {
        icon: '📊',
        tone: 'blue',
        text: 'Surplus analysis is not just a diagram technique – it is the exam toolkit for evaluating any real-world policy. Every tax, subsidy, and price control creates winners, losers, and usually a deadweight welfare loss.'
      },
      diagramGridEmoji: '📐',
      diagramGridLabel: 'Three policies at a glance',
      diagramGrid: [
        {
          svgKey: 'taxMiniDiagram',
          tone: 'blue',
          icon: '💰',
          head: 'Excise tax',
          bullets: [
            { tone: 'blue',  text: 'CS falls – buyers pay Pc above Pe' },
            { tone: 'amber', text: 'PS falls – sellers receive Pp below Pe' },
            { tone: 'green', text: 'Government collects tax revenue (Pc − Pp) × Qt' },
            { tone: 'slate', text: 'DWL: output falls from Qe to Qt' }
          ]
        },
        {
          svgKey: 'priceCeilingMiniDiagram',
          tone: 'purple',
          icon: '🏠',
          head: 'Price ceiling (Pmax)',
          bullets: [
            { tone: 'blue',  text: 'CS may rise for consumers who can buy at Pmax' },
            { tone: 'amber', text: 'PS falls – sellers receive less than Pe' },
            { tone: 'purple', text: 'Shortage: Qd > Qs at the ceiling price' },
            { tone: 'slate', text: 'DWL from transactions that no longer occur' }
          ]
        },
        {
          svgKey: 'subsidyMiniDiagram',
          tone: 'green',
          icon: '💉',
          head: 'Subsidy',
          bullets: [
            { tone: 'blue',  text: 'CS rises – buyers pay Pc below Pe' },
            { tone: 'amber', text: 'PS rises – sellers receive Ps above Pe' },
            { tone: 'green', text: 'Government pays subsidy cost (Ps − Pc) × Qs' },
            { tone: 'slate', text: 'DWL if output overshoots the efficient level' }
          ]
        }
      ],
      flowEmoji: '✍️',
      flowTitle: 'How to use surplus in exam answers',
      flow: [
        {
          tone: 'blue',
          icon: '🔍',
          title: 'Identify the policy',
          sub: 'State what it is (tax, subsidy, price ceiling, floor) and whether it raises or lowers the price consumers and producers face.'
        },
        {
          tone: 'amber',
          icon: '📊',
          title: 'Explain how CS and PS change',
          sub: 'Identify winners and losers. Shade the CS and PS areas before and after, and identify the government revenue rectangle or subsidy cost.'
        },
        {
          tone: 'green',
          icon: '⚖️',
          title: 'Judge the overall welfare effect',
          sub: 'Does total surplus rise, fall, or stay the same? Is there a DWL triangle? Does the policy correct a market failure – if so, welfare may improve.'
        }
      ],
      causesEmoji: '🌍',
      causesLabel: 'Real-world applications',
      causesStyle: 'tinted-flat',
      causes: [
        { tone: 'blue',   icon: '🏠', head: 'Rent controls',       body: 'Rent controls set below Pe reduce landlord PS and create a shortage (Qs < Qd). Some tenants gain lower rents, but others cannot find housing. Total welfare falls – DWL equals the value of housing transactions that do not occur. Evidence: San Francisco rent control reduced rental supply by 15% (Diamond et al., 2019).' },
        { tone: 'amber',  icon: '✈️', head: 'Aviation subsidies',  body: 'Government subsidies to airports and airlines expand output beyond free-market levels. CS rises (lower fares) and PS rises (higher revenue), but the government subsidy cost may exceed the welfare gain unless aviation corrects a genuine positive externality.' },
        { tone: 'green',  icon: '🌐', head: 'Trade tariffs',       body: 'A tariff raises the domestic price above the world price, transferring CS to domestic producers and the government, while creating DWL triangles on both sides. Free trade maximises total surplus; the welfare losses from tariffs typically exceed the gains to protected producers.' },
        { tone: 'purple', icon: '👷', head: 'Minimum wage',        body: 'A minimum wage above Pe transfers surplus from employers to employed workers, but may reduce employment. Workers who lose jobs lose their surplus. Total welfare effect depends on labour demand elasticity – inelastic demand means smaller employment loss and a net welfare gain for workers.' }
      ],
      keyTakeaway: { title: 'The big picture', text: 'Consumer and producer surplus measure the gains from trade. Any policy intervention redistributes surplus between consumers, producers, and the government – and typically destroys some as deadweight welfare loss. The key evaluative question is always: does the policy correct a pre-existing market failure large enough to justify the welfare loss it creates?' },
      examEdge: '<strong>Three-step method for any welfare question:</strong> (1) Draw the before/after diagram and label all areas. (2) Identify who gains and who loses – some CS may transfer to government revenue, some to DWL. (3) State the net effect on total surplus and say whether a market failure justifies the intervention.<br><br><strong>Evaluation trick:</strong> a policy that destroys less surplus than the market failure it corrects <em>improves</em> total welfare; one that operates in an already-efficient market reduces it. Examiners reward candidates who make this distinction explicit.<br><br><strong>Watch the language:</strong> "redistribution" ≠ "welfare loss". Tax revenue is a transfer – it does not destroy welfare. Only the DWL triangle (the area no one gets) is a true welfare loss.',
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
    title:    'Consumer &amp; Producer Surplus',
    subtitle: 'Theme 1 &middot; Topic 2.8 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('consumer_producer_surplus_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers CS and PS definitions, calculation, total welfare, deadweight loss, and policy effects on surplus',
    shortNames: [
      'CS definition MCQ', 'PS definition MCQ', 'Numeric CS', 'Total welfare',
      'DWL from tax', 'Price ceiling effect', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: consumer surplus */
      { type: 'mcq',
        stem: '<strong>Consumer surplus</strong> is best defined as:',
        opts: [
          'The difference between what consumers are willing to pay (maximum willingness to pay) and what they actually pay (market price) – the welfare gain from market exchange',
          'The profit earned by consumers from buying goods at prices below the cost of production',
          'The total amount that consumers spend in a market in any given period',
          'The difference between the highest price charged and the lowest price charged for the same good'
        ],
        ans: 0,
        exp: '<strong>Consumer surplus (CS)</strong>: for each unit purchased, the consumer\'s welfare gain = (maximum WTP − price paid). CS is the area below the demand curve and above the market price – the triangle between the demand curve, the price level, and the quantity axis (up to equilibrium quantity). CS represents the "bonus" to consumers from market exchange – the gain above what was paid. A lower market price increases CS; a higher price decreases it. CS is the welfare measure used to assess consumer gains from markets, price changes, and policy interventions.'
      },

      /* 2 – MCQ: producer surplus */
      { type: 'mcq',
        stem: '<strong>Producer surplus</strong> is best defined as:',
        opts: [
          'The difference between the price received by producers (market price) and their minimum acceptable price (marginal cost) – the welfare gain from selling in the market',
          'The total revenue earned by firms in a market – the sum of all prices received for goods sold',
          'The profit earned by firms after all costs are deducted – synonymous with economic profit',
          'The difference between the market price and the average cost of production for all firms'
        ],
        ans: 0,
        exp: '<strong>Producer surplus (PS)</strong>: for each unit sold, the firm\'s welfare gain = (price received − minimum acceptable price, i.e. marginal cost). PS is the area above the supply curve and below the market price – the triangle between the supply curve, the price level, and the quantity axis. PS is NOT the same as profit (which deducts fixed costs); PS = total revenue − variable costs. A higher market price increases PS; a lower price decreases it. Together, CS + PS = total welfare (total surplus) in the market – the measure of net gains from trade.'
      },

      /* 3 – Numeric input: consumer surplus calculation */
      { type: 'numeric_input',
        stem: 'Calculate the <strong>consumer surplus</strong> (£) in this market.',
        context: 'In a competitive market for concert tickets: maximum WTP = £100 (top of demand curve); equilibrium market price = £40; equilibrium quantity = 500 tickets sold. Assume a straight-line (linear) demand curve.',
        answer: 15000,
        tolerance: 500,
        unit: '£',
        hint: 'CS = ½ × (max WTP − market price) × equilibrium quantity. This is the area of the triangle above price and below demand curve.',
        workingSteps: [
          'Height of CS triangle = max WTP − market price = £100 − £40 = £60',
          'Base of CS triangle = equilibrium quantity = 500 tickets',
          'CS = ½ × base × height = ½ × 500 × £60 = £15,000'
        ],
        exp: 'CS = ½ × (£100 − £40) × 500 = ½ × £60 × 500 = <strong>£15,000</strong>. This is the area of the triangle above the market price and below the demand curve. Each ticket purchaser enjoys a welfare gain equal to their WTP minus the £40 they paid – ranging from £60 for the highest-WTP buyer (who valued it at £100) to £0 for the marginal buyer (who valued it at exactly £40). Total CS is the sum of all individual surpluses = £15,000. If price falls to £30, CS increases; if a concert is cancelled entirely (zero provision), CS falls to zero.'
      },

      /* 4 – MCQ: total welfare */
      { type: 'mcq',
        stem: 'In a competitive market at equilibrium, <strong>total economic welfare</strong> (total surplus) equals:',
        opts: [
          'Consumer surplus + producer surplus – the sum of all gains from trade to both buyers and sellers',
          'Consumer surplus only – producer surplus is not counted as it reflects profit extraction rather than genuine welfare',
          'Producer surplus only – firms are the creators of value so their surplus is the true welfare measure',
          'Total revenue – this represents the total value created by market exchange'
        ],
        ans: 0,
        exp: '<strong>Total welfare (W) = CS + PS</strong>. This is maximised at the competitive equilibrium where supply = demand. CS captures the welfare gains to buyers; PS captures the welfare gains to sellers. Both are genuine welfare measures: CS reflects the "bonus" to consumers (paid less than they were willing to); PS reflects the "bonus" to producers (received more than their minimum acceptable price). Policies that reduce total welfare (taxes not correcting externalities, price controls, monopoly pricing) create a <strong>deadweight welfare loss</strong> – the reduction in (CS + PS) that is not transferred to anyone else.'
      },

      /* 5 – MCQ: deadweight loss from tax */
      { type: 'mcq',
        stem: 'A non-corrective indirect tax reduces <strong>consumer surplus</strong>, <strong>producer surplus</strong>, and creates a <strong>deadweight welfare loss</strong>. Which of the following correctly accounts for all these effects?',
        opts: [
          'CS falls (higher consumer price); PS falls (lower producer net price); the tax revenue (CS + PS transferred to government) and deadweight loss (triangle of lost trades) together account for the full reduction in (CS + PS)',
          'CS falls; PS is unchanged because producers simply pass the full tax to consumers; DWL equals the tax revenue collected',
          'CS is unchanged; PS falls by the full amount of the tax; DWL equals the change in PS',
          'Both CS and PS fall by identical amounts; DWL is zero because the tax revenue exactly equals the combined CS and PS reduction'
        ],
        ans: 0,
        exp: 'An indirect tax: <strong>CS falls</strong> (consumer price rises); <strong>PS falls</strong> (producer net price falls); the reduction in (CS + PS) = <strong>tax revenue</strong> (transferred to government) + <strong>DWL</strong> (pure welfare loss from suppressed trades). The DWL is the triangle between the pre-tax and post-tax equilibria – trades that were mutually beneficial (WTP > MC) but are suppressed by the tax-inclusive price. Total: reduction in CS + reduction in PS = government revenue + DWL. This accounting identity is essential for welfare analysis of taxation.'
      },

      /* 6 – MCQ: price ceiling and welfare */
      { type: 'mcq',
        stem: 'A price ceiling set <strong>below</strong> the equilibrium price: what happens to <strong>consumer surplus</strong>?',
        opts: [
          'CS is ambiguous – some consumers gain (those who can still buy pay less); but CS is lost for consumers who can no longer find the good due to the shortage the ceiling creates',
          'CS definitely increases – all consumers pay less, so all consumer surplus increases unambiguously',
          'CS definitely decreases – lower prices mean consumers value the good less, reducing their welfare',
          'CS is unchanged – the price ceiling transfers welfare from producers to consumers dollar for dollar'
        ],
        ans: 0,
        exp: 'Price ceiling below equilibrium: the controlled price is lower than P* → some CS is gained by those who can still buy (rectangle between old and new price). But the shortage (QD > QS at controlled price) means some consumers who would have bought at P* cannot find the good → their CS is lost. Net effect on CS is <strong>ambiguous</strong>: if the quantity reduction is large relative to the price saving, CS may fall overall. PS definitely falls (lower price and possibly lower quantity). A DWL triangle emerges (trades between P* quantity and QS quantity that no longer occur). The price ceiling is not a "free" benefit to consumers – it has welfare costs.'
      },

      /* 7 – Match pairs: welfare concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition in welfare analysis.',
        pairs: [
          { a: 'Consumer surplus', b: 'Area below demand curve and above market price – welfare gain to buyers' },
          { a: 'Producer surplus', b: 'Area above supply curve and below market price – welfare gain to sellers' },
          { a: 'Total welfare (total surplus)', b: 'CS + PS – maximised at competitive equilibrium' },
          { a: 'Deadweight welfare loss', b: 'Loss of welfare not transferred to anyone – pure efficiency cost of market distortion' },
          { a: 'Allocative efficiency', b: 'Resources allocated to uses where MSB = MSC – all beneficial trades occur; DWL = 0' },
          { a: 'Price discrimination', b: 'Charging different prices to different consumers – converts CS into PS' }
        ],
        exp: 'Welfare analysis vocabulary: CS and PS together = total surplus, maximised at competitive equilibrium where supply = demand (P = MC = MB). Any distortion (monopoly, tax, price control not correcting an externality) reduces total surplus, creating DWL. <strong>Allocative efficiency</strong> requires DWL = 0 (all beneficial trades occurring). <strong>Price discrimination</strong>: allows firms to extract CS – a redistribution from consumers to producers that may or may not change total welfare depending on whether it allows additional trades.'
      },

      /* 8 – Cause & effect: policies and welfare */
      { type: 'cause_effect',
        stem: 'Match each policy to its effect on consumer surplus, producer surplus, and total welfare.',
        pairs: [
          { cause: 'Monopoly restricts output and raises price above MC', effect: 'CS falls; PS may rise (transfer from consumers); DWL created – total welfare falls' },
          { cause: 'Government introduces per-unit production subsidy (no externality)', effect: 'CS rises (lower price); PS rises (higher effective price); total welfare falls (DWL from overproduction)' },
          { cause: 'Competitive market reaches equilibrium without intervention', effect: 'CS + PS maximised; no DWL; allocative efficiency achieved' },
          { cause: 'Corrective Pigouvian tax on negative externality', effect: 'CS falls; PS falls; tax revenue collected; DWL eliminated; total social welfare rises' },
          { cause: 'Price floor above equilibrium (minimum wage)', effect: 'Some PS rises (higher wage for those employed); CS may fall; DWL if employment falls' },
          { cause: 'Perfect price discrimination by monopolist', effect: 'All CS converted to PS; total welfare same as competitive outcome; distribution shifts to firm' }
        ],
        exp: 'Welfare analysis applied: <strong>monopoly</strong> – DWL from restricted output (classic inefficiency); <strong>non-corrective subsidy</strong> – DWL from overproduction; <strong>competitive equilibrium</strong> – optimal (no DWL); <strong>corrective tax</strong> – removes DWL from externality (increases social welfare even as CS and PS fall); <strong>price floor</strong> – DWL from reduced quantity; <strong>perfect price discrimination</strong> – no quantity DWL but massive distributional shift. Always ask: does an intervention create or eliminate a DWL? Corrective policies eliminate existing DWL; non-corrective policies create new DWL.'
      },

      /* 9 – Odd one out: effects on consumer surplus */
      { type: 'odd_one_out',
        stem: 'Three of these would <strong>increase consumer surplus</strong> in a market. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📉', label: 'Market price falls due to a rightward shift in supply (technology improvement)', note: '' },
          { icon: '🏛️', label: 'A per-unit production subsidy lowers the market price paid by consumers', note: '' },
          { icon: '📈', label: 'The market price rises due to a leftward shift in supply (input cost increase)', note: '' },
          { icon: '✅', label: 'New firms enter the market, increasing competition and driving down prices', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>market price rising due to a supply contraction</strong>. A higher price reduces consumer surplus – consumers pay more and the area between the demand curve and price line shrinks. The other three all lower the market price, increasing CS: technology improvement shifts supply right → lower equilibrium price → higher CS; production subsidy shifts supply right → lower consumer price → higher CS; new firm entry increases competition → lower prices → higher CS. Consumer surplus moves inversely with price: lower price → higher CS; higher price → lower CS.'
      },

      /* 10 – Data table: monopoly vs competition welfare */
      { type: 'data_table',
        stem: 'The table compares market outcomes under perfect competition and monopoly.',
        headers: ['Market structure', 'Price', 'Quantity', 'Consumer Surplus', 'Producer Surplus', 'DWL'],
        rows: [
          ['Perfect competition', '£20', '1,000', '£5,000', '£2,500', '£0'],
          ['Monopoly', '£30', '600', '£1,800', '£4,200', '£1,500'],
          ['Change (monopoly vs competition)', '+£10', '−400', '−£3,200', '+£1,700', '+£1,500']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Monopoly transfers £1,700 of CS to PS (producer gains at consumer expense) and destroys £1,500 of welfare as DWL – total welfare is lower under monopoly by £1,500; the monopolist gains less than consumers lose',
          'Monopoly is more efficient because producer surplus is higher under monopoly than perfect competition',
          'The DWL of £1,500 equals the consumer surplus loss – all CS is destroyed by the monopoly',
          'The data show that consumers are better off under monopoly because fewer units are produced and higher prices indicate greater quality'
        ],
        ans: 0,
        exp: 'The data show the standard monopoly welfare analysis: CS falls by £3,200 (consumers pay more for fewer units). PS rises by £1,700 (the monopolist captures this from consumers through higher price). DWL = £1,500 (the 400 units of suppressed output where MB > MC – pure welfare loss). Accounting: CS loss (£3,200) = PS gain (£1,700) + DWL (£1,500). The transfer from CS to PS is a distributional effect – not a welfare loss itself. The DWL is the real efficiency cost of monopoly. Total welfare falls by £1,500 – the competitive outcome maximises (CS + PS). This is the core economic case against monopoly power: it creates DWL by restricting output below the social optimum.'
      }

    ]
  };

})();

