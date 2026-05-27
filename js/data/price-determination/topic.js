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
      tip: { icon: '💡', tone: 'blue', text: 'When the plans of buyers and sellers match, the market settles at an equilibrium price and quantity.' },
      diagramPanel: {
        diagramKey: 'equilibriumBasic',
        title: 'Market equilibrium',
        intro: 'At point E:',
        bullets: [
          'quantity demanded equals quantity supplied',
          'there is no pressure for price to rise or fall',
          'the equilibrium price clears the market'
        ]
      },
      pairLabel: null,
      left:  { tone: 'blue',  icon: '🛒', iconStyle: 'circle', label: 'Demand', text: 'The demand curve shows how much consumers are willing and able to buy at each price.' },
      right: { tone: 'amber', icon: '🏭', iconStyle: 'circle', label: 'Supply', text: 'The supply curve shows how much producers are willing and able to sell at each price.' },
      flowTitle: 'How the market gets there',
      flowEmoji: '➡️',
      flow: [
        { tone: 'blue',  icon: '🔺', title: 'Price too high', sub: 'Surplus appears. Sellers cut price.' },
        { tone: 'amber', icon: '🔻', title: 'Price too low',  sub: 'Shortage appears. Sellers raise price.' },
        { tone: 'green', icon: '🎯', title: 'Price adjusts towards equilibrium', sub: 'Market moves back to balance at E.' }
      ],
      conclusion: { title: 'Key takeaway', text: 'Equilibrium is the meeting point of demand and supply – not the point that is automatically best for everyone.' },
      keyTerms: [
        { term: 'Equilibrium', def: 'The price at which quantity demanded equals quantity supplied – the market clears.' },
        { term: 'Market clearing', def: 'All goods produced are sold and all buyers willing to pay the market price can purchase – no shortage, no surplus.' },
        { term: 'Disequilibrium', def: 'Any price where quantity demanded ≠ quantity supplied – creates pressure for price adjustment.' }
      ],
      examEdge: 'Always define equilibrium precisely and refer to both price and quantity. When drawing, label the intersection clearly, then drop dashed lines to both axes labelled P* and Q*. Diagram technique earns marks reliably.'
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
      tip: { icon: '💡', tone: 'blue', text: 'In a competitive market, equilibrium allocates output to the consumers who value it most and the producers who can supply it at the lowest cost.' },
      diagramPanel: {
        diagramKey: 'welfareSurplusDiagram',
        title: 'Why equilibrium can be efficient',
        bullets: [
          'Consumers reveal their willingness to pay through demand.',
          'Producers reveal their costs through supply.',
          'At Q<sub>e</sub>, marginal benefit (MB) equals marginal cost (MC).',
          'Reallocating resources away from E would reduce total welfare.'
        ]
      },
      causesStyle: 'plain-white',
      causesEmoji: '📐',
      causesLabel: 'Key welfare concepts',
      causes: [
        { tone: 'blue',   icon: '👥', head: 'Consumer surplus',                body: 'The benefit consumers get from paying less than their willingness to pay.' },
        { tone: 'amber',  icon: '📊', head: 'Producer surplus',                body: 'The benefit producers get from receiving more than their minimum cost.' },
        { tone: 'purple', icon: '📉', head: 'Deadweight loss off equilibrium', body: 'Moving away from E means some mutually beneficial trades are lost.' }
      ],
      note: { icon: 'ℹ️', tone: 'blue', text: 'Allocative efficiency assumes a competitive market with many buyers and sellers and no externalities. When these assumptions do not hold, equilibrium may not be allocatively efficient.' },
      conclusion: { title: 'Key takeaway', text: 'Market equilibrium can be allocatively efficient because, at E, marginal benefit equals marginal cost (MB = MC).' },
      keyTerms: [
        { term: 'Allocative efficiency', def: 'P = MC for every good – resources allocated to highest-value uses; no reallocation can increase total welfare.' },
        { term: 'Total surplus', def: 'Consumer surplus + producer surplus – the measure of total welfare from market exchange.' },
        { term: 'Deadweight loss', def: 'The reduction in total surplus from producing a quantity different from the efficient level.' }
      ],
      examEdge: 'Do not confuse allocative efficiency with equity or fairness – these are separate concepts. P = MC is also why monopoly (which charges P &gt; MC) is allocatively inefficient.'
    },
    {
      id: 'market_equilibrium_6',
      template: 'cause',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'When Markets Fail to Reach Equilibrium',
      tip: { icon: '💡', tone: 'blue', text: 'Real markets do not always clear smoothly – controls, market power, information gaps and sudden shocks can stop price from moving to equilibrium.' },
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Obstacles to market clearing',
      causes: [
        { icon: '🚧', head: 'Price controls', body: 'Price ceilings (maximum prices) below equilibrium → chronic excess demand (shortage). Rent controls cause housing shortages. Price floors above equilibrium → chronic excess supply (surplus). Minimum wage above equilibrium → unemployment.' },
        { icon: '🔒', head: 'Sticky prices', body: 'In some markets, prices do not adjust freely. Labour markets: wages are "sticky downward" (workers resist cuts) → unemployment can persist. This is a Keynesian insight – markets don\'t always self-correct.' },
        { icon: '❓', head: 'Information failures', body: 'Buyers or sellers lack information about prices in other markets – cannot respond to price signals. Markets in remote areas, illiquid asset markets, and monopoly-information markets may not clear.' },
        { icon: '🏛️', head: 'Government intervention', body: 'Minimum prices, maximum prices, subsidies, and taxes all prevent the market from reaching the free-market equilibrium – intentionally or as side effects.' }
      ],
      examEdge: 'Price controls cause predictable distortions. Rent control (price ceiling): housing shortage; black markets; quality deterioration; no new supply. Minimum wage (price floor above equilibrium): unemployment; firms substitute capital for labour; some workers better off, others lose jobs. Both are standard exam contexts.'
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
