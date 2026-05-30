window.ECONOS_TOPIC = {
  id: 'price-determination',
  topicNum: '2.6',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Price Determination',
  estTime: '7-9 minutes',
  goal: 'Lock in equilibrium, disequilibrium, the price mechanism in action, and how to analyse supply and demand shifts simultaneously.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Equilibrium is where supply meets demand – the price at which the market clears. Any disturbance creates excess supply or demand, which the price mechanism corrects. Mastering simultaneous shifts is essential for multi-mark exam questions.',
    doInThis: 'Work through 7 cards covering equilibrium price, excess demand and supply, how markets clear, simultaneous supply and demand shifts, market efficiency, and real-world applications.',
    outcomes: [
      'Define market equilibrium and identify it on a diagram',
      'Explain how excess demand and excess supply are eliminated by the price mechanism',
      'Analyse the effect of simultaneous shifts in supply and demand',
      'Evaluate market equilibrium as an efficient outcome'
    ],
    tip: 'Excess demand → price rises → quantity demanded falls + quantity supplied rises → market clears. Excess supply → price falls → quantity demanded rises + quantity supplied falls → market clears.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards',              state: 'done',      href: TopicLoader.routes.learn()        },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro')   },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                     }
    ]
  },
  cards: [
    {
      id: 'market_equilibrium_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Market equilibrium: the big picture',
      keyTerms: [
        { term: 'Equilibrium', def: 'The price at which quantity demanded equals quantity supplied – the market clears.' },
        { term: 'Market clearing', def: 'All goods produced are sold and all buyers willing to pay the market price can purchase – no shortage, no surplus.' },
        { term: 'Disequilibrium', def: 'Any price where quantity demanded ≠ quantity supplied – creates pressure for price adjustment.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'When the plans of buyers and sellers match, the market settles at an equilibrium price and quantity.' },
        { type: 'diagram', svgKey: 'equilibriumBasic', caption: 'Market equilibrium' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',  icon: '🛒', head: 'Demand', body: 'The demand curve shows how much consumers are willing and able to buy at each price.' },
          { type: 'tile', tone: 'amber', icon: '🏭', head: 'Supply', body: 'The supply curve shows how much producers are willing and able to sell at each price.' }
        ]},
        { type: 'sectionHeader', icon: '➡️', label: 'How the market gets there' },
        { type: 'mechanismChain', steps: [
          { label: 'Price too high',                          detail: 'Surplus appears. Sellers cut price.' },
          { label: 'Price too low',                           detail: 'Shortage appears. Sellers raise price.' },
          { label: 'Price adjusts towards equilibrium', detail: 'Market moves back to balance at E.' }
        ]},
        { type: 'bigIdea', text: 'Key takeaway: Equilibrium is the meeting point of demand and supply – not the point that is automatically best for everyone.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Always define equilibrium precisely and refer to both price and quantity. When drawing, label the intersection clearly, then drop dashed lines to both axes labelled P* and Q*. Diagram technique earns marks reliably.' }
      ]
    },
    {
      id: 'market_equilibrium_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Excess Demand and Excess Supply',
      lede: 'When the market price is above or below equilibrium, shortages or surpluses appear. Price pressure pushes the market back towards equilibrium.',
      diagramKey: 'disequilibriumInteractive',
      steps: [
        {
          key: 'base',
          label: 'Market in equilibrium',
          text: 'At point <strong>E</strong>, quantity demanded equals quantity supplied. There is no pressure for price to rise or fall – the market clears at equilibrium price <strong>P<sub>e</sub></strong> and quantity <strong>Q<sub>e</sub></strong>. Now disturb the price above or below P<sub>e</sub> and watch the market self-correct.'
        },
        {
          key: 'shortage',
          label: 'Excess demand (shortage)',
          text: 'At price <strong>P₁</strong> (below P<sub>e</sub>), <strong>quantity demanded exceeds quantity supplied</strong> (Q<sub>d</sub> &gt; Q<sub>s</sub>). Buyers compete for limited stock and bid the price up. Rising price reduces Q<sub>d</sub> (movement up D) and expands Q<sub>s</sub> (movement up S) → the market returns to E.'
        },
        {
          key: 'surplus',
          label: 'Excess supply (surplus)',
          text: 'At price <strong>P₂</strong> (above P<sub>e</sub>), <strong>quantity supplied exceeds quantity demanded</strong> (Q<sub>s</sub> &gt; Q<sub>d</sub>). Unsold stock builds up and sellers cut prices to clear inventory. Falling price raises Q<sub>d</sub> and contracts Q<sub>s</sub> → the market returns to E.'
        }
      ],
      flowTitle: 'How the price adjusts',
      flowEmoji: '➡️',
      flow: [
        { tone: 'blue',  icon: '🔺', title: 'Shortage', sub: 'Excess demand creates upward pressure on price.' },
        { tone: 'amber', icon: '🔻', title: 'Surplus',  sub: 'Excess supply creates downward pressure on price.' },
        { tone: 'green', icon: '🎯', title: 'Adjustment continues', sub: 'Until equilibrium is restored at E.' }
      ],
      pairLabel: 'Real-world examples',
      pairEmoji: '🌍',
      left:  { tone: 'blue',  icon: '🎫', iconStyle: 'circle', label: 'Shortage example', text: 'Concert tickets sell out within minutes. Fans compete on resale platforms and prices rise well above face value until supply and willingness-to-pay align.' },
      right: { tone: 'amber', icon: '🛒', iconStyle: 'circle', label: 'Surplus example',  text: 'Supermarkets discount fresh stock near closing time. Cutting price clears the shelves before goods perish – the surplus disappears as Q<sub>d</sub> rises.' },
      conclusion: { title: 'Key takeaway', text: 'Market prices self-correct when there is competition and flexibility – shortages bid prices up, surpluses force prices down, both routes lead back to E.' },
      examEdge: 'Always relate shortage or surplus to both quantity and price pressure. Markets that adjust slowly – housing, labour, agriculture – are prime candidates for policy intervention because the free-market correction can take years.'
    },
    {
      id: 'market_equilibrium_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Analysing Shifts: Demand and Supply',
      tip: { icon: '💡', tone: 'blue', text: 'Any shift in demand or supply changes the equilibrium price and quantity. Movements along the curve, caused by a price change, do not shift the whole curve.' },
      diagramKey: 'shiftsInteractive',
      steps: [
        {
          key: 'demand-right',
          label: 'Demand increases',
          text: '<strong>D shifts right (D₁ → D₂)</strong> – a non-price demand factor improves (higher income, changed tastes, substitute\'s price rises). At old P₁, excess demand appears → price rises → Qs extends up S → new equilibrium E₂. Result: <strong>P rises, Q rises</strong>. Both move in the same direction – an unambiguous outcome.'
        },
        {
          key: 'demand-left',
          label: 'Demand decreases',
          text: '<strong>D shifts left (D₁ → D₂)</strong> – a non-price demand factor worsens (lower income, changed tastes, substitute\'s price falls). At old P₁, excess supply appears → price falls → new equilibrium E₂. Result: <strong>P falls, Q falls</strong>. Both fall – the mirror image of a demand increase.'
        },
        {
          key: 'supply-right',
          label: 'Supply increases',
          text: '<strong>S shifts right (S₁ → S₂)</strong> – costs fall, technology improves, more producers enter, or a subsidy is granted. At old P₁, excess supply appears → price falls → Qd extends down D → new equilibrium E₂. Result: <strong>P falls, Q rises</strong>. Opposite price direction to a demand shift – a key exam distinction.'
        },
        {
          key: 'supply-left',
          label: 'Supply decreases',
          text: '<strong>S shifts left (S₁ → S₂)</strong> – costs rise, a tax is imposed, a supply shock hits, or producers leave. At old P₁, excess demand appears → price rises → new equilibrium E₂. Result: <strong>P rises, Q falls</strong>. Classic stagflationary supply shock: higher price, lower output.'
        }
      ],
      flowTitle: 'A 3-step method',
      flowEmoji: '📋',
      flow: [
        { tone: 'blue',  icon: '🔍', title: 'Identify which curve shifts and why',   sub: 'D shifts if a non-price demand factor changes. S shifts if a non-price supply factor changes.' },
        { tone: 'amber', icon: '↔️', title: 'Say the direction of the shift',         sub: 'Right = increase. Left = decrease. Draw D₂ or S₂ clearly on the diagram.' },
        { tone: 'green', icon: '🎯', title: 'State the new equilibrium P and Q',      sub: 'Use dashed gridlines to both axes. Label E₂, P₂ and Q₂. State the direction of change.' }
      ],
      causesEmoji: '↔️',
      causesLabel: 'Movement along vs shift',
      causes: [
        { tone: 'blue',   icon: '🏷️', head: 'Movement along the curve', body: 'A change in the good\'s own price causes a movement along the existing curve – not a shift. Quantity demanded or supplied changes; the curve itself stays put.' },
        { tone: 'purple', icon: '🔄', head: 'Shift of the curve',        body: 'A change in any non-price determinant shifts the entire curve. At every price, quantity demanded or supplied is now different.' }
      ],
      causes2Emoji: '💡',
      causes2Label: 'Mini examples',
      causes2: [
        { tone: 'blue',  icon: '👥', head: 'Rising incomes → Demand for holidays right',    body: 'Higher income is a non-price demand factor for a normal good. D shifts right → P and Q rise.' },
        { tone: 'amber', icon: '⚙️', head: 'Better technology → Supply right',              body: 'Improved production methods lower unit costs. S shifts right → P falls, Q rises.' },
        { tone: 'purple',icon: '⚡', head: 'Higher energy costs → Supply left',             body: 'Energy is a major input cost. A price rise shifts S left → P rises, Q falls.' }
      ],
      conclusion: { title: 'Key takeaway', text: 'Shifts change the equilibrium position – affecting both price and quantity – not just the quantity traded.' },
      examEdge: 'Always separate the cause of the shift (non-price determinant) from the effect on equilibrium (price and quantity). Draw the new curve clearly labelled D₂ or S₂, drop dashed lines to both axes at E₂, and state both changes in P and Q for full marks.'
    },
    {
      id: 'market_equilibrium_4',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Simultaneous Shifts',
      tip: { icon: '💡', tone: 'blue', text: 'When demand and supply both shift, the final effect depends on the direction and relative size of each shift.' },
      diagramKey: 'simultaneousShiftsInteractive',
      steps: [
        {
          key: 'both-up',
          label: 'D↑ & S↑',
          text: '<strong>Both rise – demand right, supply right.</strong> The market clears more units at the new equilibrium. <strong>Quantity definitely rises.</strong> Price could rise, fall, or stay the same – it depends on whether the demand shift or supply shift is larger.'
        },
        {
          key: 'd-up-s-down',
          label: 'D↑ & S↓',
          text: '<strong>Demand rises, supply falls.</strong> Both shifts push price up – buyers are bidding more for fewer goods. <strong>Price definitely rises.</strong> Quantity is ambiguous: demand wants to raise Q, supply pulls it down – net effect depends on which shift dominates.'
        },
        {
          key: 'd-down-s-up',
          label: 'D↓ & S↑',
          text: '<strong>Demand falls, supply rises.</strong> Both shifts push price down – fewer buyers facing more sellers. <strong>Price definitely falls.</strong> Quantity is ambiguous: lower demand reduces Q, higher supply raises Q – net effect depends on which shift dominates.'
        },
        {
          key: 'both-down',
          label: 'D↓ & S↓',
          text: '<strong>Both fall – demand left, supply left.</strong> The market clears fewer units at the new equilibrium. <strong>Quantity definitely falls.</strong> Price could rise, fall, or stay the same depending on whether demand or supply shrinks more.'
        }
      ],
      flowTitle: 'How to answer',
      flowEmoji: '📋',
      flow: [
        { tone: 'blue',  icon: '🔍', title: 'Identify both shifts',        sub: 'State clearly how demand and supply have shifted – direction and reason.' },
        { tone: 'amber', icon: '⚖️', title: "Decide what's predictable",   sub: 'Same direction for one variable → that variable is determinate. Opposite directions → ambiguous.' },
        { tone: 'green', icon: '🎯', title: 'Explain the final outcome',   sub: 'State the certain change, then say the other variable depends on the relative magnitude of the shifts.' }
      ],
      causes2Emoji: '🌍',
      causes2Label: 'Real-world examples',
      causes2: [
        { tone: 'green',  icon: '🎬', head: 'D↑ S↑ · Streaming (2020–22)',     body: 'Lockdowns and a boom in original content drove demand up. Netflix, Disney+ and Apple TV+ all expanded supply. <strong style="color:#059669;">Q rose sharply</strong>; subscription prices held or rose modestly.' },
        { tone: 'amber',  icon: '🛢️', head: 'D↑ S↓ · Oil during OPEC+ cuts',    body: 'Post-pandemic global demand recovered while OPEC+ trimmed production. <strong style="color:#059669;">Price rose clearly</strong>; total quantity depended on how deep the cuts were.' },
        { tone: 'blue',   icon: '📱', head: 'D↓ S↑ · Older smartphone models', body: 'Newer flagships pull demand away from old models while manufacturers flood the market with mid-range variants. <strong style="color:#DC2626;">Price falls clearly</strong>; quantity depends on the strength of each effect.' },
        { tone: 'rose',   icon: '📰', head: 'D↓ S↓ · Local UK newspapers',     body: 'Digital substitutes crush demand; many titles close, cutting supply. <strong style="color:#DC2626;">Quantity falls clearly</strong>; price varies – some titles raise covers, others discount to survive.' }
      ],
      conclusion: { title: 'Key takeaway', text: 'Simultaneous shifts require balanced judgement – not a one-line answer.' },
      examEdge: 'Use phrases like "the effect on price is ambiguous" or "depends on the relative size of the shifts". Stating ambiguity explicitly – and explaining why – earns more marks than guessing a direction without justification.'
    },
    {
      id: 'market_equilibrium_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Allocative Efficiency of Market Equilibrium',
      keyTerms: [
        { term: 'Allocative efficiency', def: 'P = MC for every good – resources allocated to highest-value uses; no reallocation can increase total welfare.' },
        { term: 'Total surplus', def: 'Consumer surplus + producer surplus – the measure of total welfare from market exchange.' },
        { term: 'Deadweight loss', def: 'The reduction in total surplus from producing a quantity different from the efficient level.' }
      ],
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'In a competitive market, equilibrium allocates output to the consumers who value it most and the producers who can supply it at the lowest cost.' },
        { type: 'diagram', svgKey: 'welfareSurplusDiagram', caption: 'Why equilibrium can be efficient' },
        { type: 'sectionHeader', icon: '📐', label: 'Key welfare concepts' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'blue',   icon: '👥', head: 'Consumer surplus',                body: 'The benefit consumers get from paying less than their willingness to pay.' },
          { type: 'tile', tone: 'amber',  icon: '📊', head: 'Producer surplus',                body: 'The benefit producers get from receiving more than their minimum cost.' },
          { type: 'tile', tone: 'purple', icon: '📉', head: 'Deadweight loss off equilibrium', body: 'Moving away from E means some mutually beneficial trades are lost.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: 'ℹ️', text: 'Allocative efficiency assumes a competitive market with many buyers and sellers and no externalities. When these assumptions do not hold, equilibrium may not be allocatively efficient.' },
        { type: 'bigIdea', text: 'Key takeaway: Market equilibrium can be allocatively efficient because, at E, marginal benefit equals marginal cost (MB = MC).' },
        { type: 'examEdge', title: 'Exam edge', text: 'Do not confuse allocative efficiency with equity or fairness – these are separate concepts. P = MC is also why monopoly (which charges P &gt; MC) is allocatively inefficient.' }
      ]
    },
    {
      id: 'market_equilibrium_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'When Markets Fail to Reach Equilibrium',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Real markets do not always clear smoothly – controls, market power, information gaps and sudden shocks can stop price from moving to equilibrium.' },
        { type: 'sectionHeader', icon: '⚠️', label: 'Obstacles to market clearing' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose',   icon: '🚧', head: 'Price controls',         body: 'Price ceilings (maximum prices) below equilibrium → chronic excess demand (shortage). Rent controls cause housing shortages. Price floors above equilibrium → chronic excess supply (surplus). Minimum wage above equilibrium → unemployment.' },
          { type: 'tile', tone: 'amber',  icon: '🔒', head: 'Sticky prices',          body: 'In some markets, prices do not adjust freely. Labour markets: wages are "sticky downward" (workers resist cuts) → unemployment can persist. This is a Keynesian insight – markets don\'t always self-correct.' },
          { type: 'tile', tone: 'blue',   icon: '❓', head: 'Information failures',   body: 'Buyers or sellers lack information about prices in other markets – cannot respond to price signals. Markets in remote areas, illiquid asset markets, and monopoly-information markets may not clear.' },
          { type: 'tile', tone: 'purple', icon: '🏛️', head: 'Government intervention', body: 'Minimum prices, maximum prices, subsidies, and taxes all prevent the market from reaching the free-market equilibrium – intentionally or as side effects.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Price controls cause predictable distortions. Rent control (price ceiling): housing shortage; black markets; quality deterioration; no new supply. Minimum wage (price floor above equilibrium): unemployment; firms substitute capital for labour; some workers better off, others lose jobs. Both are standard exam contexts.' }
      ]
    },
    {
      id: 'market_equilibrium_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Equilibrium in Different Market Contexts',
      tip: { icon: '💡', tone: 'blue', text: 'The same demand-and-supply logic applies across many markets, but the speed of adjustment and the wider effects can differ.' },
      marketGrid: [
        {
          tone: 'green',
          title: 'Housing market',
          icon: '🏠',
          priceLabel: 'Price',
          priceTick: 'Pe',
          supplyLabel: 'S',
          demandLabel: 'D',
          supplyElast: 'inelastic',
          demandElast: 'normal',
          body: 'Equilibrium rent or house price. Supply responds slowly (new homes take time), so shortages are common in the short run.'
        },
        {
          tone: 'blue',
          title: 'Labour market',
          icon: '👥',
          priceLabel: 'Wage',
          priceTick: 'We',
          supplyLabel: 'S<tspan font-size="8" baseline-shift="sub">L</tspan>',
          demandLabel: 'D<tspan font-size="8" baseline-shift="sub">L</tspan>',
          supplyElast: 'normal',
          demandElast: 'normal',
          body: 'Equilibrium wage where labour demand meets labour supply. Higher wages attract more workers; lower wages reduce labour supplied.'
        },
        {
          tone: 'amber',
          title: 'Commodity market',
          icon: '🛢️',
          priceLabel: 'Price',
          priceTick: 'Pe',
          supplyLabel: 'S',
          demandLabel: 'D',
          supplyElast: 'inelastic',
          demandElast: 'inelastic',
          body: 'Equilibrium price for oil, wheat or coffee. Supply and demand can shift sharply due to weather, seasonal changes or geopolitical shocks.'
        },
        {
          tone: 'purple',
          title: 'Foreign exchange or ticket market',
          icon: '🌐',
          priceLabel: 'Exchange rate / Price',
          priceTick: 'Pe',
          supplyLabel: 'S',
          demandLabel: 'D',
          supplyElast: 'elastic',
          demandElast: 'elastic',
          body: 'Equilibrium exchange rate or event ticket price. Demand can change very quickly with expectations, news or popularity.'
        }
      ],
      causesStyle: 'plain-white',
      causesEmoji: '🔍',
      causesLabel: 'What changes across contexts?',
      causes: [
        { tone: 'blue',   icon: '⏱️', head: 'Speed of adjustment', body: 'Some markets adjust slowly (e.g. housing), others quickly (e.g. tickets).' },
        { tone: 'green',  icon: '📈', head: 'Elasticity',           body: 'The responsiveness of demand and supply influences outcomes.' },
        { tone: 'amber',  icon: '🏛️', head: 'Government intervention', body: 'Taxes, subsidies, price controls or regulation can affect equilibrium.' },
        { tone: 'purple', icon: 'ℹ️', head: 'Information',          body: 'How quickly and clearly buyers and sellers get information varies.' }
      ],
      note: { icon: '💡', tone: 'amber', head: 'One core idea', text: 'Equilibrium is still where demand equals supply. However, the real-world outcome may be affected by time lags, policy and market structure.' },
      conclusion: { title: 'Key takeaway', text: 'Equilibrium is a flexible framework for analysing many markets. The logic is the same, but the context shapes how it plays out.' },
      examEdge: 'Context application is rewarded in Edexcel Paper 1. Use market-specific examples and language – for housing, mention planning restrictions, Help to Buy, interest rates; for labour, monopsony and minimum wage; for FX, expectations and capital flows. Don\'t write a generic supply/demand essay – tailor it to the extract.',
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
    title:    'Market Equilibrium',
    subtitle: 'Theme 1 &middot; Topic 2.6 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('market_equilibrium_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers market clearing, excess demand/supply, the price mechanism, simultaneous shifts, allocative efficiency, and price controls',
    shortNames: [
      'Rent control', 'Excess demand/supply', 'Price mechanism sequence',
      'Simultaneous shifts', 'Categorise goods', 'Match pairs', 'Cause & effect',
      'Odd one out', 'Data table', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: rent control and excess demand */
      { type: 'mcq',
        stem: 'The market price for a rental flat is set <strong>below</strong> the equilibrium rent by a government rent control policy. What will happen in this market?',
        opts: [
          'Excess demand (shortage) will emerge – more tenants want flats at the controlled rent than landlords are willing to supply; the market cannot clear at that price',
          'Excess supply will emerge – the controlled rent is below equilibrium, so more landlords will offer flats than tenants will want',
          'The market will automatically adjust back to equilibrium through the price mechanism, eliminating the shortage',
          'The quantity of flats supplied will increase to match demand, because landlords have a legal obligation to provide housing at controlled rents'
        ],
        ans: 0,
        exp: 'Below-equilibrium price: at the controlled (lower) price, quantity demanded exceeds quantity supplied → <strong>excess demand (shortage)</strong>. The price mechanism is blocked from clearing the market, so the shortage persists. Landlords have no incentive to increase supply at the below-market rent; indeed, some may withdraw properties. This is the fundamental problem with price ceilings set below equilibrium – they create persistent shortages and non-price allocation methods (queues, connections, discrimination).'
      },

      /* 2 – Elastic sort: excess demand vs excess supply */
      { type: 'elastic_sort',
        stem: 'Classify each scenario as producing <strong>excess demand</strong> or <strong>excess supply</strong> in the market.',
        categories: ['excess_demand', 'excess_supply'],
        categoryLabels: ['Excess demand (shortage)', 'Excess supply (surplus)'],
        goods: [
          { icon: '🏠', label: 'Government sets a rent ceiling below the equilibrium rent', note: '', ans: 'excess_demand' },
          { icon: '🌾', label: 'Government sets a price floor above the equilibrium price for wheat', note: '', ans: 'excess_supply' },
          { icon: '💊', label: 'A new drug becomes available at a price far below equilibrium willingness to pay', note: '', ans: 'excess_demand' },
          { icon: '🚗', label: 'Car manufacturers produce far more cars than consumers are willing to buy at the listed price', note: '', ans: 'excess_supply' },
          { icon: '🎫', label: 'Concert tickets priced below the market-clearing level – queues form at box offices', note: '', ans: 'excess_demand' },
          { icon: '🥛', label: 'EU milk quotas set supply above what the market will absorb at the guaranteed price', note: '', ans: 'excess_supply' }
        ],
        exp: '<strong>Excess demand (shortage)</strong>: price is set below equilibrium → QD > QS → queue/shortage. <strong>Excess supply (surplus)</strong>: price is set above equilibrium → QS > QD → unsold stock. The price mechanism resolves imbalances: shortage → upward price pressure → price rises until QD = QS; surplus → downward price pressure → price falls until QD = QS. Government intervention (price controls) prevents this adjustment.'
      },

      /* 3 – Sequence: price mechanism restoring equilibrium */
      { type: 'sequence',
        stem: 'A harvest failure reduces wheat supply. Place the steps in the correct order showing how the <strong>price mechanism restores equilibrium</strong>.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Wheat supply curve shifts leftward – less wheat available at every price', note: '' },
          { label: 'At the old equilibrium price, quantity demanded now exceeds quantity supplied', note: '' },
          { label: 'Wheat prices begin to rise – upward pressure from the excess demand', note: '' },
          { label: 'Rising prices signal scarcity to bakers and consumers; both reduce wheat demand', note: '' },
          { label: 'Higher prices also incentivise farmers to maximise remaining supply', note: '' },
          { label: 'A new, higher equilibrium price is reached where QD = QS at lower quantity', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The price mechanism operates through <strong>signalling</strong> (price rise signals scarcity), <strong>incentives</strong> (rising prices incentivise producers to supply more and consumers to economise), and <strong>rationing</strong> (the higher price rations the scarce wheat to those willing and able to pay). The market self-corrects without central direction – this is Hayek\'s argument for market superiority over planning. The new equilibrium has a higher price and lower quantity than before the supply shock.'
      },

      /* 4 – MCQ: simultaneous shifts */
      { type: 'mcq',
        stem: 'Both demand and supply for electric vehicles (EVs) increase simultaneously. What can we say with certainty about the new equilibrium?',
        opts: [
          'Equilibrium quantity will rise; equilibrium price is indeterminate (depends on relative magnitude of shifts)',
          'Both equilibrium price and quantity will definitely rise',
          'Equilibrium price will rise; equilibrium quantity is indeterminate',
          'Both equilibrium price and quantity are indeterminate'
        ],
        ans: 0,
        exp: 'When demand increases (rightward shift), both P and Q tend to rise. When supply increases (rightward shift), Q tends to rise but P tends to fall. With both shifts together: <strong>quantity definitely rises</strong> (both forces push Q up). But the price effects oppose each other: demand increase pushes P up; supply increase pushes P down. The net effect on price is <strong>indeterminate</strong> – it depends on which shift is larger. This is a common exam trap: candidates assume both shifts mean both P and Q rise.'
      },

      /* 5 – Categorise: types of equilibrium outcomes */
      { type: 'categorise',
        stem: 'Sort each scenario into the correct market outcome category.',
        categories: ['Market clears', 'Excess demand', 'Excess supply'],
        items: [
          { text: 'Price is set at the equilibrium level; all buyers willing to pay that price find sellers', category: 'Market clears' },
          { text: 'A minimum wage is set above the equilibrium wage in a low-skill labour market', category: 'Excess supply' },
          { text: 'Ticket pricing for a major concert is set below what the market would bear', category: 'Excess demand' },
          { text: 'The EU sets a guaranteed price for butter above its equilibrium – butter mountains emerge', category: 'Excess supply' },
          { text: 'After a shock, the price mechanism adjusts until quantity demanded equals quantity supplied again', category: 'Market clears' },
          { text: 'A shortage of semiconductors means manufacturers cannot source enough chips at current prices', category: 'Excess demand' }
        ],
        exp: '<strong>Market clears</strong>: price adjusts until QD = QS – no persistent shortages or surpluses. <strong>Excess demand</strong>: price is below equilibrium (price ceiling, mispricing, unexpected demand surge) – QD > QS, shortage. <strong>Excess supply</strong>: price is above equilibrium (price floor, minimum wage, guaranteed prices) – QS > QD, surplus. Price controls that prevent market clearing always create one of the two disequilibria.'
      },

      /* 6 – Match pairs: equilibrium concepts */
      { type: 'match_pairs',
        stem: 'Match each term to its correct definition or example.',
        pairs: [
          { a: 'Equilibrium price', b: 'Price at which quantity demanded equals quantity supplied' },
          { a: 'Excess demand', b: 'QD > QS – shortage; upward pressure on price' },
          { a: 'Excess supply', b: 'QS > QD – surplus; downward pressure on price' },
          { a: 'Price ceiling', b: 'Legal maximum price set below equilibrium, causing shortage' },
          { a: 'Price floor', b: 'Legal minimum price set above equilibrium, causing surplus' },
          { a: 'Market-clearing', b: 'No tendency for price to change; market is in balance' }
        ],
        exp: 'Core equilibrium vocabulary: equilibrium (QD = QS, no tendency to change); excess demand (shortage, upward price pressure); excess supply (surplus, downward pressure); price ceiling (max below equilibrium → shortage); price floor (min above equilibrium → surplus); market-clearing (equilibrium state). These six concepts form the analytical toolkit for any market analysis question.'
      },

      /* 7 – Cause & effect: supply and demand shocks */
      { type: 'cause_effect',
        stem: 'Match each market shock to its effect on equilibrium price and quantity.',
        pairs: [
          { cause: 'Demand increases, supply unchanged', effect: 'Price rises, quantity rises' },
          { cause: 'Supply decreases, demand unchanged', effect: 'Price rises, quantity falls' },
          { cause: 'Both demand and supply increase equally', effect: 'Quantity rises, price unchanged' },
          { cause: 'Demand decreases, supply increases', effect: 'Price falls, quantity change indeterminate' },
          { cause: 'Supply increases, demand unchanged', effect: 'Price falls, quantity rises' },
          { cause: 'Both demand and supply decrease equally', effect: 'Quantity falls, price unchanged' }
        ],
        exp: 'Framework for analysing shifts: demand right → P↑ Q↑; demand left → P↓ Q↓; supply right → P↓ Q↑; supply left → P↑ Q↓. Simultaneous shifts: when both shift in same direction, Q change is certain but P is indeterminate (depends on relative magnitudes). When they shift in opposite directions, P change may be certain but Q is indeterminate. Always draw the diagram to check.'
      },

      /* 8 – Odd one out: allocative efficiency */
      { type: 'odd_one_out',
        stem: 'Three of these are conditions or implications of <strong>allocative efficiency</strong> in a market. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '⚖️', label: 'Resources are allocated to their highest-valued use as judged by consumers\' willingness to pay', note: '' },
          { icon: '📊', label: 'The equilibrium price equals the marginal cost of production (P = MC)', note: '' },
          { icon: '🏭', label: 'Firms produce at the minimum point of their long-run average cost curve', note: '' },
          { icon: '🎯', label: 'There is no deadweight loss – all mutually beneficial trades take place', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>producing at minimum long-run average cost</strong> – this describes <strong>productive efficiency</strong>, not allocative efficiency. Allocative efficiency requires: resources allocated to highest-valued uses (WTP reflects social value); P = MC (price signals accurately reflect resource cost); no deadweight loss (all beneficial trades occur). Productive efficiency (minimum AC) and allocative efficiency (P = MC) are distinct concepts – a firm can be productively efficient but allocatively inefficient (e.g. a monopolist).'
      },

      /* 9 – Data table: UK housing market */
      { type: 'data_table',
        stem: 'The table shows UK housing market data 2010–2022.',
        headers: ['Year', 'Avg house price (£000)', 'Mortgage rate (%)', 'New homes built (000/yr)', 'Population (m)'],
        rows: [
          ['2010', '167', '3.5', '103', '62.8'],
          ['2014', '189', '2.8', '118', '64.6'],
          ['2018', '228', '2.2', '165', '66.4'],
          ['2022', '292', '4.1', '178', '67.0']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'The sustained price rise reflects demand growing faster than supply – rising population, falling mortgage rates (to 2018), and supply that grew but failed to keep pace with demand',
          'Rising house prices are explained entirely by falling mortgage rates – the supply and population data are irrelevant',
          'Supply growth (103,000 to 178,000 new homes) has been sufficient to meet demand, so prices should have stabilised',
          'The data proves that rent controls would solve the housing affordability crisis'
        ],
        ans: 0,
        exp: 'The data support a demand-supply imbalance explanation: population rose by 4.2m (demand driver); mortgage rates fell from 3.5% to 2.2% by 2018 (demand driver – lower borrowing cost); new home building rose from 103,000 to 178,000 but with ~300,000 households formed annually (estimated), supply fell short of demand. The result: prices rose 75% over 12 years. Option B is too narrow. Option C ignores the population/demand side and the scale of need. Option D is a policy proposal not supported by the data presented.'
      },

      /* 10 – Para fill: market equilibrium */
      { type: 'para_fill',
        stem: 'Complete the paragraph about how markets reach and maintain equilibrium.',
        anchor: 'The price mechanism is the process by which markets resolve imbalances between supply and demand.',
        para: 'At the equilibrium price, quantity [1] equals quantity [2] – the market clears with no unsatisfied buyers or sellers. If demand increases and supply is unchanged, there is initially [3] demand at the old price. This creates upward pressure on [4], which rises until the market [5] again. The price serves as a [6] to producers that resources should be reallocated toward this market, and as a [7] device, restricting consumption to those willing to pay.',
        blanks: [
          { id: 1, opts: ['demanded', 'supplied', 'produced', 'consumed'], ans: 0 },
          { id: 2, opts: ['supplied', 'demanded', 'produced', 'wanted'], ans: 0 },
          { id: 3, opts: ['excess', 'insufficient', 'perfect', 'falling'], ans: 0 },
          { id: 4, opts: ['price', 'quantity', 'supply', 'demand'], ans: 0 },
          { id: 5, opts: ['clears', 'fails', 'grows', 'contracts'], ans: 0 },
          { id: 6, opts: ['signal', 'barrier', 'cost', 'subsidy'], ans: 0 },
          { id: 7, opts: ['rationing', 'signalling', 'incentive', 'planning'], ans: 0 }
        ],
        exp: '(1)(2) At equilibrium, quantity <strong>demanded</strong> = quantity <strong>supplied</strong>. (3) A demand increase creates <strong>excess</strong> demand at the old price. (4) Upward pressure on <strong>price</strong>. (5) Price rises until the market <strong>clears</strong>. (6) Price acts as a <strong>signal</strong> – the profit opportunity tells producers where resources are needed. (7) Price as <strong>rationing</strong> device – only those willing to pay the higher price can access the good. These three functions (signal, incentive, rationing) are how the price mechanism allocates resources in a market economy.'
      }

    ]
  };

})();
