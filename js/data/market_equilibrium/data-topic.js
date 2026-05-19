window.ECONOS_TOPIC = {
  id: 'market_equilibrium',
  topicNum: '2.6',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Price Determination',
  estTime: '7-9 minutes',
  goal: 'Lock in equilibrium, disequilibrium, the price mechanism in action, and how to analyse supply and demand shifts simultaneously.',
  intro: {
    heroKey: 'heroSupplyDemand',
    summary: 'Equilibrium is where supply meets demand — the price at which the market clears. Any disturbance creates excess supply or demand, which the price mechanism corrects. Mastering simultaneous shifts is essential for multi-mark exam questions.',
    doInThis: 'Work through 7 cards covering equilibrium price, excess demand and supply, how markets clear, simultaneous supply and demand shifts, market efficiency, and real-world applications.',
    outcomes: [
      'Define market equilibrium and identify it on a diagram',
      'Explain how excess demand and excess supply are eliminated by the price mechanism',
      'Analyse the effect of simultaneous shifts in supply and demand',
      'Evaluate market equilibrium as an efficient outcome'
    ],
    tip: 'Excess demand → price rises → quantity demanded falls + quantity supplied rises → market clears. Excess supply → price falls → quantity demanded rises + quantity supplied falls → market clears.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
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
      conclusion: { title: 'Key takeaway', text: 'Equilibrium is the meeting point of demand and supply — not the point that is automatically best for everyone.' },
      keyTerms: [
        { term: 'Equilibrium', def: 'The price at which quantity demanded equals quantity supplied — the market clears.' },
        { term: 'Market clearing', def: 'All goods produced are sold and all buyers willing to pay the market price can purchase — no shortage, no surplus.' },
        { term: 'Disequilibrium', def: 'Any price where quantity demanded ≠ quantity supplied — creates pressure for price adjustment.' }
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
          text: 'At point <strong>E</strong>, quantity demanded equals quantity supplied. There is no pressure for price to rise or fall — the market clears at equilibrium price <strong>P<sub>e</sub></strong> and quantity <strong>Q<sub>e</sub></strong>. Now disturb the price above or below P<sub>e</sub> and watch the market self-correct.'
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
      right: { tone: 'amber', icon: '🛒', iconStyle: 'circle', label: 'Surplus example',  text: 'Supermarkets discount fresh stock near closing time. Cutting price clears the shelves before goods perish — the surplus disappears as Q<sub>d</sub> rises.' },
      conclusion: { title: 'Key takeaway', text: 'Market prices self-correct when there is competition and flexibility — shortages bid prices up, surpluses force prices down, both routes lead back to E.' },
      examEdge: 'Always relate shortage or surplus to both quantity and price pressure. Markets that adjust slowly — housing, labour, agriculture — are prime candidates for policy intervention because the free-market correction can take years.'
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
          text: '<strong>D shifts right (D₁ → D₂)</strong> — a non-price demand factor improves (higher income, changed tastes, substitute\'s price rises). At old P₁, excess demand appears → price rises → Qs extends up S → new equilibrium E₂. Result: <strong>P rises, Q rises</strong>. Both move in the same direction — an unambiguous outcome.'
        },
        {
          key: 'demand-left',
          label: 'Demand decreases',
          text: '<strong>D shifts left (D₁ → D₂)</strong> — a non-price demand factor worsens (lower income, changed tastes, substitute\'s price falls). At old P₁, excess supply appears → price falls → new equilibrium E₂. Result: <strong>P falls, Q falls</strong>. Both fall — the mirror image of a demand increase.'
        },
        {
          key: 'supply-right',
          label: 'Supply increases',
          text: '<strong>S shifts right (S₁ → S₂)</strong> — costs fall, technology improves, more producers enter, or a subsidy is granted. At old P₁, excess supply appears → price falls → Qd extends down D → new equilibrium E₂. Result: <strong>P falls, Q rises</strong>. Opposite price direction to a demand shift — a key exam distinction.'
        },
        {
          key: 'supply-left',
          label: 'Supply decreases',
          text: '<strong>S shifts left (S₁ → S₂)</strong> — costs rise, a tax is imposed, a supply shock hits, or producers leave. At old P₁, excess demand appears → price rises → new equilibrium E₂. Result: <strong>P rises, Q falls</strong>. Classic stagflationary supply shock: higher price, lower output.'
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
        { tone: 'blue',   icon: '🏷️', head: 'Movement along the curve', body: 'A change in the good\'s own price causes a movement along the existing curve — not a shift. Quantity demanded or supplied changes; the curve itself stays put.' },
        { tone: 'purple', icon: '🔄', head: 'Shift of the curve',        body: 'A change in any non-price determinant shifts the entire curve. At every price, quantity demanded or supplied is now different.' }
      ],
      causes2Emoji: '💡',
      causes2Label: 'Mini examples',
      causes2: [
        { tone: 'blue',  icon: '👥', head: 'Rising incomes → Demand for holidays right',    body: 'Higher income is a non-price demand factor for a normal good. D shifts right → P and Q rise.' },
        { tone: 'amber', icon: '⚙️', head: 'Better technology → Supply right',              body: 'Improved production methods lower unit costs. S shifts right → P falls, Q rises.' },
        { tone: 'purple',icon: '⚡', head: 'Higher energy costs → Supply left',             body: 'Energy is a major input cost. A price rise shifts S left → P rises, Q falls.' }
      ],
      conclusion: { title: 'Key takeaway', text: 'Shifts change the equilibrium position — affecting both price and quantity — not just the quantity traded.' },
      examEdge: 'Always separate the cause of the shift (non-price determinant) from the effect on equilibrium (price and quantity). Draw the new curve clearly labelled D₂ or S₂, drop dashed lines to both axes at E₂, and state both changes in P and Q for full marks.'
    },
    {
      id: 'market_equilibrium_4',
      template: 'diagnose',
      title: 'Simultaneous Shifts',
      intro: 'When supply and demand both shift, the effect on price or quantity may be indeterminate depending on relative magnitudes.',
      rows: [
        { label: 'Shift combination', colA: 'Demand rises AND Supply falls', colB: 'Demand rises AND Supply rises' },
        { label: 'Price effect', colA: 'Price definitely RISES (both shifts push price up)', colB: 'Indeterminate — depends on relative magnitude of shifts' },
        { label: 'Quantity effect', colA: 'Indeterminate — demand raises Q, supply reduction lowers Q', colB: 'Quantity definitely RISES (both shifts push quantity up)' }
      ],
      footer: 'Rule: if both shifts work in the same direction for one variable (P or Q), that variable is determinate. If they work in opposite directions, the outcome is ambiguous — state "it depends on the relative magnitude of the shifts."',
      examEdge: '"Indeterminate" is a perfectly valid and sophisticated answer when both shifts have opposing effects on a variable. Saying so explicitly — and explaining why — earns more marks than guessing a direction without justification.'
    },
    {
      id: 'market_equilibrium_5',
      template: 'framing',
      title: 'Allocative Efficiency of Market Equilibrium',
      body: 'A competitive equilibrium is <strong>allocatively efficient</strong>: at Q*, the price paid by the last consumer (marginal benefit) equals the cost of producing the last unit (marginal cost). This is the optimal allocation — P = MC.<br><br>Total welfare (consumer surplus + producer surplus) is maximised at equilibrium. Any other quantity produces less total surplus:<br>• Q < Q*: potential gains from additional exchange are unrealised (deadweight loss)<br>• Q > Q*: units are produced whose cost exceeds their value (negative welfare)<br><br>Market failure occurs when the equilibrium does NOT maximise total social welfare — because prices exclude external costs or benefits.',
      keyTerms: [
        { term: 'Allocative efficiency', def: 'P = MC for every good — resources allocated to highest-value uses; no reallocation can increase welfare.' },
        { term: 'Total surplus', def: 'Consumer surplus + producer surplus — the measure of total welfare from market exchange.' },
        { term: 'Deadweight loss', def: 'The reduction in total surplus from producing a quantity different from the efficient level.' }
      ],
      examEdge: 'P = MC is the allocative efficiency condition. Monopoly produces where MR = MC but charges P > MC → allocative inefficiency → deadweight loss. This is why monopoly is condemned by economists and why competition policy targets market concentration.'
    },
    {
      id: 'market_equilibrium_6',
      template: 'cause',
      title: 'When Markets Fail to Reach Equilibrium',
      causesStyle: 'tinted-flat',
      causesEmoji: '⚠️',
      causesLabel: 'Obstacles to market clearing',
      causes: [
        { icon: '🚧', head: 'Price controls', body: 'Price ceilings (maximum prices) below equilibrium → chronic excess demand (shortage). Rent controls cause housing shortages. Price floors above equilibrium → chronic excess supply (surplus). Minimum wage above equilibrium → unemployment.' },
        { icon: '🔒', head: 'Sticky prices', body: 'In some markets, prices do not adjust freely. Labour markets: wages are "sticky downward" (workers resist cuts) → unemployment can persist. This is a Keynesian insight — markets don\'t always self-correct.' },
        { icon: '❓', head: 'Information failures', body: 'Buyers or sellers lack information about prices in other markets — cannot respond to price signals. Markets in remote areas, illiquid asset markets, and monopoly-information markets may not clear.' },
        { icon: '🏛️', head: 'Government intervention', body: 'Minimum prices, maximum prices, subsidies, and taxes all prevent the market from reaching the free-market equilibrium — intentionally or as side effects.' }
      ],
      examEdge: 'Price controls cause predictable distortions. Rent control (price ceiling): housing shortage; black markets; quality deterioration; no new supply. Minimum wage (price floor above equilibrium): unemployment; firms substitute capital for labour; some workers better off, others lose jobs. Both are standard exam contexts.'
    },
    {
      id: 'market_equilibrium_7',
      template: 'framing',
      title: 'Equilibrium in Different Market Contexts',
      body: '<strong>Housing:</strong> equilibrium disrupted by planning restrictions (supply can\'t adjust) → persistent shortage → rapidly rising prices. Solution requires supply-side reforms (build more) not just demand-side management.<br><br><strong>Labour market:</strong> wage = price; employment = quantity. Equilibrium wage clears the labour market. If minimum wage is set above equilibrium, excess supply = unemployment. Monopsony power can keep wages below competitive equilibrium — minimum wage then increases both wages AND employment.<br><br><strong>Financial markets:</strong> equilibrium disrupted by speculation — prices diverge from fundamental value; bubbles form. Asset markets are prone to self-reinforcing disequilibrium (Minsky moments).',
      keyTerms: [
        { term: 'Equilibrium wage', def: 'The wage at which labour supply equals labour demand — the labour market clears.' },
        { term: 'Asset bubble', def: 'Market price rising far above fundamental value — driven by expectations of further price rises; unsustainable.' },
        { term: 'Minsky moment', def: 'The point when a debt-driven asset bubble collapses as borrowers can no longer service debts — named after economist Hyman Minsky.' }
      ],
      examEdge: 'Context application is rewarded in Edexcel Paper 1. If the question is about housing, apply supply/demand to housing specifically — mention planning restrictions, Help to Buy, interest rates. Don\'t write a generic supply/demand essay — tailor it to the extract context.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
