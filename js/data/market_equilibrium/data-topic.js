window.ECONOS_TOPIC = {
  id: 'market_equilibrium',
  topicNum: '1.7',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Market Equilibrium',
  estTime: '7-9 minutes',
  goal: 'Lock in equilibrium, disequilibrium, the price mechanism in action, and how to analyse supply and demand shifts simultaneously.',
  intro: {
    heroKey: 'market',
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
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Market equilibrium: the big picture',
      lede: 'Markets settle where supply meets demand — and the way they get there, and what disturbs them, is the heart of microeconomics.',
      branches: [
        { tone: 'green',  label: 'Equilibrium price &amp; quantity', sub: 'The unique P* and Q* where quantity demanded equals quantity supplied — the market clears with no shortage or surplus.' },
        { tone: 'amber',  label: 'Excess demand &amp; supply',       sub: 'Above P*, surpluses force price down. Below P*, shortages force price up. The self-correcting mechanism that gives the model its power.' },
        { tone: 'blue',   label: 'Shifts &amp; new equilibria',      sub: 'When D or S moves, P* and Q* move with them. Single and simultaneous shifts produce predictable — or ambiguous — outcomes.' },
        { tone: 'purple', label: 'Allocative efficiency',            sub: 'At equilibrium, marginal benefit equals marginal cost. Consumer plus producer surplus is maximised — society&apos;s scarce resources are well used.' },
        { tone: 'rose',   label: 'When markets fail to clear',       sub: 'Price controls, sticky wages, expectations and bubbles can prevent equilibrium being reached. Disequilibrium is the real world.' }
      ],
      body: '<strong>Market equilibrium</strong> is the price at which quantity demanded equals quantity supplied — the market "clears" with no unsold stock and no unsatisfied buyers. At equilibrium price P* and quantity Q*:<br>• No buyer is unable to find a seller at that price<br>• No seller has unsold stock at that price<br>• There is no tendency for price to change<br><br>Equilibrium is stable: if disturbed by a price above or below P*, forces automatically push price back toward P*. This stability property is what makes the model so powerful.',
      keyTerms: [
        { term: 'Equilibrium', def: 'The price at which quantity demanded equals quantity supplied — the market clears.' },
        { term: 'Market clearing', def: 'The state where all goods produced are sold and all buyers willing to pay the market price can purchase.' },
        { term: 'Disequilibrium', def: 'Any price where quantity demanded ≠ quantity supplied — creates pressure for price adjustment.' }
      ],
      examEdge: 'When drawing equilibrium, mark the intersection of D and S clearly. Draw a vertical dashed line from the intersection to the Q-axis (quantity) and a horizontal dashed line to the P-axis (price). Label the equilibrium price P* and quantity Q*. This technique earns diagram marks reliably.'
    },
    {
      id: 'market_equilibrium_2',
      template: 'mechanisms',
      title: 'Excess Demand and Excess Supply',
      intro: 'When price is below or above equilibrium, the market is in disequilibrium. The price mechanism restores equilibrium.',
      steps: [
        { label: 'Excess demand (shortage)', text: 'Price is below P*. Quantity demanded > quantity supplied. Unsatisfied buyers compete for scarce supply → bid up the price. Rising price: reduces QD (movement up demand curve) and increases QS (movement up supply curve) → equilibrium restored.' },
        { label: 'Excess supply (surplus)', text: 'Price is above P*. Quantity supplied > quantity demanded. Sellers with unsold stock reduce price to clear inventory. Falling price: increases QD and decreases QS → equilibrium restored.' },
        { label: 'Speed of adjustment', text: 'Markets adjust at different speeds. Financial markets clear almost instantly. Housing markets adjust over years (supply is slow to respond). Agricultural markets may not fully adjust within a season.' },
        { label: 'Diagram technique', text: 'Mark price Px below P*. Draw an arrow on the price axis pointing upward. Show QD exceeds QS at Px. State: "price will rise until Q* is reached."' }
      ],
      examEdge: 'The speed of adjustment matters for policy analysis. If markets adjust slowly (e.g. housing), a government intervention may be needed in the interim even if the free market would eventually clear. Slow-adjusting markets are prime candidates for price controls.'
    },
    {
      id: 'market_equilibrium_3',
      template: 'mechanisms',
      title: 'Analysing a Single Shift',
      intro: 'The standard exam technique for a supply or demand shift has four steps.',
      steps: [
        { label: 'Step 1: Start at equilibrium', text: 'Draw S and D intersecting at (P1, Q1). This is your starting point.' },
        { label: 'Step 2: Identify the shift', text: 'Which curve moves? A change in non-price factor for consumers → demand shifts. A change in non-price factor for producers → supply shifts. Which direction? Right = increase; left = decrease.' },
        { label: 'Step 3: Find new equilibrium', text: 'The shifted curve intersects the unchanged curve at a new point (P2, Q2). Mark this clearly.' },
        { label: 'Step 4: State the outcome', text: 'State what happened to equilibrium price (rose/fell) and equilibrium quantity (rose/fell). Example: "Demand increases → price rises from P1 to P2; quantity rises from Q1 to Q2."' }
      ],
      examEdge: 'For 4-6 mark questions, the diagram + explanation together earn the marks. A correct diagram with no explanation gets partial credit; an explanation without a correct diagram also loses marks. Always do both. Dedicate 2-3 minutes to diagram accuracy.'
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
      causes: [
        { head: 'Price controls', body: 'Price ceilings (maximum prices) below equilibrium → chronic excess demand (shortage). Rent controls cause housing shortages. Price floors above equilibrium → chronic excess supply (surplus). Minimum wage above equilibrium → unemployment.' },
        { head: 'Sticky prices', body: 'In some markets, prices do not adjust freely. Labour markets: wages are "sticky downward" (workers resist cuts) → unemployment can persist. This is a Keynesian insight — markets don\'t always self-correct.' },
        { head: 'Information failures', body: 'Buyers or sellers lack information about prices in other markets — cannot respond to price signals. Markets in remote areas, illiquid asset markets, and monopoly-information markets may not clear.' },
        { head: 'Government intervention', body: 'Minimum prices, maximum prices, subsidies, and taxes all prevent the market from reaching the free-market equilibrium — intentionally or as side effects.' }
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
