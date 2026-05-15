window.ECONOS_TOPIC = {
  id: 'ped',
  topicNum: '1.8',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Price Elasticity of Demand',
  estTime: '7-9 minutes',
  goal: 'Lock in the PED formula, determinants, the relationship with total revenue, and how to apply PED to real market situations.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'PED measures how sensitive quantity demanded is to a price change. It determines whether a price rise raises or lowers total revenue — and is central to firm pricing strategy, government tax policy, and welfare analysis.',
    doInThis: 'Work through 7 cards covering the PED formula, elastic/inelastic/unit elastic cases, determinants, revenue implications, the midpoint method, and applications to taxation and business strategy.',
    outcomes: [
      'Calculate PED using the formula and interpret the result',
      'Identify the determinants of PED and predict the elasticity of specific goods',
      'Explain the relationship between PED and total revenue',
      'Apply PED analysis to government tax policy and firm pricing decisions'
    ],
    tip: 'PED = % change in QD \xf7 % change in P. Always negative (ignore sign for magnitude). |PED| > 1 = elastic; |PED| < 1 = inelastic; |PED| = 1 = unit elastic.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'ped_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Price elasticity of demand: the big picture',
      lede: 'Demand curves all slope down — but <em>how steeply</em> is what decides who pays a tax, what firms charge, and whether revenue rises or falls.',
      branches: [
        { tone: 'blue',   label: 'Formula &amp; values',     sub: '%&Delta;QD &divide; %&Delta;P. Elastic (|PED| &gt; 1), inelastic (|PED| &lt; 1), unit elastic (|PED| = 1) — the three regimes that drive every result.' },
        { tone: 'green',  label: 'What determines PED',       sub: 'Substitutes, necessity vs luxury, proportion of income, time horizon, addiction. The deeper the substitutes, the more elastic.' },
        { tone: 'amber',  label: 'PED &amp; total revenue',   sub: 'If demand is inelastic, raise price to grow revenue. If elastic, cut price. The single rule that drives pricing strategy.' },
        { tone: 'purple', label: 'PED &amp; tax incidence',   sub: 'The more inelastic side bears the larger share of an indirect tax. Why cigarette taxes fall on smokers, not on tobacco firms.' },
        { tone: 'rose',   label: 'Special cases',             sub: 'Perfectly elastic, perfectly inelastic, and along a straight-line demand curve PED changes at every point — easy traps in exams.' }
      ],
      body: '<strong>Price Elasticity of Demand (PED)</strong> measures the responsiveness of quantity demanded to a change in the good\'s own price.<br><br><strong>Formula:</strong> PED = (% ΔQD) \xf7 (% ΔP)<br><br>PED is always negative (price and quantity demanded move in opposite directions per the law of demand). The sign is usually ignored — we compare the absolute value |PED|:<br><br>• |PED| > 1: <strong>Price elastic</strong> — QD changes proportionally more than price. Revenue falls when price rises.<br>• |PED| < 1: <strong>Price inelastic</strong> — QD changes proportionally less than price. Revenue rises when price rises.<br>• |PED| = 1: <strong>Unit elastic</strong> — QD changes proportionally the same as price. Revenue unchanged when price changes.',
      keyTerms: [
        { term: 'PED', def: '% change in quantity demanded \xf7 % change in price. Always negative; compare absolute value.' },
        { term: 'Price elastic', def: '|PED| > 1: a 1% price rise causes more than 1% fall in QD.' },
        { term: 'Price inelastic', def: '|PED| < 1: a 1% price rise causes less than 1% fall in QD.' }
      ],
      examEdge: 'Always show your working in PED calculations: state the formula, substitute the values, calculate each percentage change separately, then divide. A numerical error in the final step still earns method marks if the approach is clearly shown.'
    },
    {
      id: 'ped_explorer',
      template: 'elasticity-explorer',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'PED Explorer: drag the points, watch the maths',
      lede: 'Move <strong>A</strong> and <strong>B</strong> along the demand curve. The formula recalculates live, the classification chip flips, and the shaded rectangles show the revenue (P × Q) at each price — so the inelastic-raise-price / elastic-cut-price rule becomes something you <em>see</em>, not just memorise.',
      howItWorks: 'Pick two prices, compare what happens to quantity. The <strong>amber rectangle</strong> is revenue at point A; the <strong>green rectangle</strong> is revenue at point B. When demand is <strong>inelastic</strong>, a price rise grows the green rectangle (revenue rises). When demand is <strong>elastic</strong>, a price rise shrinks it. The unit-elastic case (|PED| = 1) is where the rectangles are exactly equal — try sliding A and B until the chip flips to blue.<br><br>Press a preset to jump to a real market — insulin (near-vertical), petrol short-run vs long-run, family cars (around unit), designer handbags (shallow elastic), or a perfectly-competitive firm (horizontal).',
      examEdge: 'Three traps the examiner sets here. (1) Don\'t confuse the <em>slope</em> of the curve with elasticity — along the same straight line, PED falls from infinity at the top to zero at the bottom. (2) The TR rule works <em>both</em> ways: inelastic + price ↑ → TR ↑, but also inelastic + price ↓ → TR ↓. (3) Always quote |PED| with one decimal place and state the regime explicitly ("elastic, because |PED| = 1.6 > 1").'
    },
    {
      id: 'ped_2',
      template: 'cause',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Determinants of PED',
      causes: [
        { head: 'Number and closeness of substitutes', body: 'The more substitutes available, the more elastic demand. A price rise for one brand of cola → consumers switch to another. Few substitutes → inelastic (insulin, petrol). This is the most important determinant.' },
        { head: 'Necessity vs luxury', body: 'Necessities (food, utilities, medicines) tend to be price inelastic — consumers cannot easily reduce consumption when prices rise. Luxuries (holidays, jewellery) are more elastic — consumers can postpone or substitute.' },
        { head: 'Proportion of income spent', body: 'Goods consuming a large proportion of income (rent, car) tend to be more price elastic — consumers are sensitive to price changes. Small items (salt, matches) are inelastic — price changes barely noticed.' },
        { head: 'Time period', body: 'Demand becomes more elastic over time. In the short run, consumers are locked into habits and commitments. Long-run: can find substitutes, change behaviour, switch suppliers. Petrol: inelastic short-run; more elastic long-run as EVs become viable.' },
        { head: 'Addiction and habit', body: 'Cigarettes, alcohol, addictive goods: demand is inelastic because willingness to pay is maintained despite price rises. This is why sin taxes on these goods are effective at raising revenue.' }
      ],
      examEdge: 'The most exam-tested determinant is substitutes — the more substitutes, the more elastic. Apply this to every PED question: ask "what can consumers switch to?" Brand loyalty reduces the effective number of substitutes; generic goods have many substitutes.'
    },
    {
      id: 'ped_3',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'PED and Total Revenue',
      intro: 'Total Revenue (TR) = Price \xd7 Quantity. The effect of a price change on TR depends on PED — this is one of the most important practical applications of elasticity.',
      steps: [
        { label: 'Elastic demand (|PED| > 1)', text: 'Price rise → TR falls (QD falls proportionally more, outweighing the price rise). Price fall → TR rises. Firms in elastic markets should cut prices to raise revenue.' },
        { label: 'Inelastic demand (|PED| < 1)', text: 'Price rise → TR rises (QD falls proportionally less, so revenue effect of higher price dominates). Price fall → TR falls. Firms in inelastic markets should raise prices to increase revenue.' },
        { label: 'Unit elastic (|PED| = 1)', text: 'Price change has no effect on TR — the proportional changes exactly cancel. TR is at its maximum at the unit elastic point on a linear demand curve.' },
        { label: 'Diagram link', text: 'On a downward-sloping straight demand curve: upper half is elastic (price high, quantity low — small QD change has large proportional effect); lower half is inelastic; midpoint is unit elastic.' }
      ],
      examEdge: 'The TR-PED relationship is a must-know: elastic → price rise → TR falls; inelastic → price rise → TR rises. Firms with addictive or necessity products (inelastic demand) have pricing power; firms in competitive markets (elastic) do not. This underpins all pricing strategy analysis.'
    },
    {
      id: 'ped_4',
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'PED and Tax Incidence',
      body: 'When the government imposes an indirect tax (e.g. VAT, fuel duty), the <strong>tax incidence</strong> — who actually bears the burden — depends on the relative elasticities of supply and demand.<br><br><strong>Inelastic demand + elastic supply:</strong> consumers bear most of the tax. Quantity demanded barely changes; most of the tax is passed on as higher prices. Example: cigarette tax.<br><br><strong>Elastic demand + inelastic supply:</strong> producers bear most of the tax. If they try to pass the tax on in higher prices, demand collapses, so they absorb it through lower margins.<br><br>Tax revenue = tax rate \xd7 quantity sold. Higher inelastic demand goods generate more stable revenue from taxation.',
      keyTerms: [
        { term: 'Tax incidence', def: 'The distribution of the tax burden between consumers (who pay higher prices) and producers (who receive lower prices after tax).' },
        { term: 'Tax burden on consumers', def: 'The rise in price paid — determined by demand elasticity relative to supply elasticity.' },
        { term: 'Deadweight loss from tax', def: 'The reduction in total surplus from the tax — two triangles on the standard tax diagram.' }
      ],
      examEdge: 'Tax incidence is a favourite exam application. For a tax on cigarettes (inelastic demand): most burden falls on consumers (price rises significantly); tax revenue is large; quantity reduction is small; deadweight loss is limited. Contrast with a tax on elastic luxury goods: price rises little; most burden on producers; more deadweight loss per \xa3 of revenue.'
    },
    {
      id: 'ped_5',
      template: 'diagnose',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Applying PED: Worked Examples',
      intro: 'PED calculation requires careful handling of sign and interpretation.',
      rows: [
        { label: 'Scenario', colA: 'Price of a train ticket rises 10%; journeys fall 5%', colB: 'Price of a cinema ticket falls 20%; tickets sold rise 30%' },
        { label: 'PED calculation', colA: 'PED = -5% \xf7 10% = -0.5; |PED| = 0.5', colB: 'PED = +30% \xf7 -20% = -1.5; |PED| = 1.5' },
        { label: 'Interpretation', colA: 'Inelastic (0.5 < 1). A 10% price rise only reduces journeys by 5%. Train operator\'s revenue rises.', colB: 'Elastic (1.5 > 1). A 20% price cut raises ticket sales 30%. Cinema revenue rises.' }
      ],
      footer: 'Both firms should note: rail demand is inelastic (captive commuter market, few substitutes) so the operator benefits from raising prices. Cinema demand is elastic (many entertainment substitutes) so price cuts drive revenue growth.',
      examEdge: 'In data-response questions, always extract numbers from the extract to calculate PED. Show calculation, state elastic/inelastic, and explain the implication for revenue or policy. Three distinct steps, three sets of marks.'
    },
    {
      id: 'ped_6',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'PED and Business Pricing Strategy',
      body: 'Understanding PED guides firm pricing decisions:<br><br><strong>Segment by elasticity:</strong> firms charge higher prices to price-inelastic segments (business travellers who need to travel regardless) and lower prices to elastic segments (leisure travellers with substitutes). This is the basis of price discrimination (covered in Theme 3).<br><br><strong>Differentiate to reduce elasticity:</strong> branding, quality, loyalty schemes all reduce the effective number of substitutes — making demand more inelastic and giving pricing power. Apple: high brand loyalty → inelastic demand → premium pricing.<br><br><strong>Elastic markets → compete on price:</strong> in commodity markets with many substitutes, demand is highly elastic; firms are price-takers with no pricing power.',
      keyTerms: [
        { term: 'Pricing power', def: 'Ability to raise prices without large loss of sales — requires price-inelastic demand.' },
        { term: 'Differentiation', def: 'Making a product distinct from competitors\' through quality, branding, or features — reduces effective substitutes and demand elasticity.' },
        { term: 'Price discrimination', def: 'Charging different prices to different consumers based on their willingness to pay — requires different PED across segments.' }
      ],
      examEdge: 'Apple vs Samsung in the exam: Apple\'s brand loyalty creates inelastic demand for iPhones → premium pricing → higher margins. Samsung sells to more price-sensitive (elastic) segments → must compete more on price. This illustrates how differentiation strategy is fundamentally an elasticity management strategy.'
    },
    {
      id: 'ped_7',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Special Cases of PED',
      body: '<strong>Perfectly inelastic (PED = 0):</strong> Vertical demand curve. Quantity demanded does not change at all with price. No real-world good is truly perfectly inelastic, but life-saving drugs approximate this in emergency settings.<br><br><strong>Perfectly elastic (PED = ∞):</strong> Horizontal demand curve. Any price rise above the market price causes quantity demanded to fall to zero. Competitive firms in a perfectly competitive market face perfectly elastic demand — they are price-takers.<br><br><strong>Giffen good:</strong> Upward-sloping demand curve (positive PED). Extremely rare. Possible when an inferior good takes up such a large share of income that the income effect overwhelms the substitution effect — historical Irish potato example.',
      keyTerms: [
        { term: 'Perfectly inelastic demand', def: 'PED = 0; vertical demand curve; quantity demanded is fixed regardless of price.' },
        { term: 'Perfectly elastic demand', def: 'PED = infinity; horizontal demand curve; any price above market price → zero demand. Faced by firms in perfect competition.' },
        { term: 'Giffen good', def: 'A good where a price rise leads to increased demand — upward-sloping demand curve; income effect stronger than substitution effect.' }
      ],
      examEdge: 'Perfectly elastic demand is not just an abstract concept — it describes the demand curve facing any individual firm in perfect competition. This is why perfectly competitive firms cannot set prices above MC — any attempt would destroy all demand. Use this when explaining why P = MC holds in perfect competition.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
