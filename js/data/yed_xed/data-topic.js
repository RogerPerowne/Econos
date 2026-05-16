window.ECONOS_TOPIC = {
  id: 'yed_xed',
  topicNum: '1.10',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Income & Cross-Price Elasticity',
  estTime: '10–12 minutes',
  goal: 'Understand YED and XED — their formulas, signs, magnitudes, and how they classify goods, reveal market relationships, and drive business and policy decisions.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'YED measures how demand responds to income changes; XED measures how demand for one good responds to the price of another. Together they classify goods (normal, inferior, luxury, necessity) and reveal whether two products are substitutes, complements, or unrelated.',
    doInThis: 'Work through 7 cards covering YED, a YED worked example, business strategy applications, XED, an XED worked example, real-world applications, and an exam-ready summary.',
    outcomes: [
      'Calculate and interpret YED including sign and magnitude',
      'Classify goods as normal (luxury/necessity) or inferior using YED',
      'Calculate and interpret XED including sign and what it reveals about the relationship between goods',
      'Apply YED and XED to business strategy, competition policy, and macroeconomic analysis'
    ],
    tip: 'YED: positive = normal good; negative = inferior good; YED > 1 = luxury; 0 < YED < 1 = necessity. XED: positive = substitutes; negative = complements; zero = unrelated.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 — WHAT IS YED
       Hook question → formula → four good types
       ================================================================ */
    {
      id: 'yed_xed_1',
      stepLabel: 'Step 1 of 7',
      title: 'What is Income Elasticity of Demand (YED)?',
      intro: 'When the economy booms and incomes rise, do people buy more Rolexes — or more instant noodles? YED tells you.',
      body: `<div style="border:2px solid #0B1426;border-radius:10px;padding:16px;text-align:center;margin:12px 0;font-size:18px;font-weight:700;background:#F8FAFC;">
  YED = % ΔQD \xf7 % Δ Income
</div>
<p style="margin:10px 0 6px;">Unlike PED, YED can be <strong>positive or negative</strong> — the sign classifies the good type and is the most important thing to get right.</p>
<ul style="margin:8px 0 0 18px;line-height:1.8;">
  <li><strong>YED &gt; 0:</strong> Normal good — demand rises when income rises.</li>
  <li><strong>YED &gt; 1:</strong> Luxury good — demand rises proportionally <em>more</em> than income (a subcategory of normal).</li>
  <li><strong>0 &lt; YED &lt; 1:</strong> Necessity — demand rises but proportionally <em>less</em> than income.</li>
  <li><strong>YED &lt; 0:</strong> Inferior good — demand <em>falls</em> when income rises; consumers trade up to better alternatives.</li>
</ul>`,
      causes: [
        {
          head: '✅ Normal good (YED > 0)',
          body: 'Demand rises when income rises. Most everyday goods: electronics, clothing, restaurant meals. Positive relationship with the economic cycle — demand grows alongside GDP.'
        },
        {
          head: '💎 Luxury good (YED > 1)',
          body: 'Demand rises proportionally more than income. Designer goods, foreign holidays, premium cars. Pro-cyclical: revenues collapse in recessions, surge in booms. High cyclical risk for firms.'
        },
        {
          head: '🧾 Necessity (0 < YED < 1)',
          body: 'Demand rises but less than income. Bread, utilities, basic clothing. Recession-resilient but limited growth potential during booms. Stable, predictable revenue profile.'
        },
        {
          head: '📉 Inferior good (YED < 0)',
          body: 'Demand falls when income rises — consumers trade up. Bus travel, value-brand food. Counter-cyclical: sell more in recessions, less in booms. Budget supermarkets and budget airlines often occupy this space.'
        }
      ],
      keyTakeaway: 'The sign of YED classifies the good. The magnitude tells you how sensitive demand is to income changes.'
    },

    /* ================================================================
       CARD 2 — WORKED EXAMPLE: CALCULATING YED
       Bus travel scenario, 5 scaffolded steps
       ================================================================ */
    {
      id: 'yed_xed_2',
      template: 'worked-example',
      stepLabel: 'Step 2 of 7',
      title: 'Worked Example: Calculating YED',
      lede: 'The sign matters as much as the number — get both right.',
      scenario: 'Average household incomes rise by <strong>5%</strong>. Over the same period, demand for bus travel falls by <strong>10%</strong>.',
      steps: [
        {
          prompt: 'Identify the % change in income.',
          hint: 'This is given directly in the scenario.',
          answer: '% Δ Income = <strong>+5%</strong> (given)'
        },
        {
          prompt: 'Identify the % change in quantity demanded.',
          hint: 'Demand fell — this should be negative.',
          answer: '% ΔQD = <strong>−10%</strong> (given — note the negative sign; demand fell)'
        },
        {
          prompt: 'Apply the YED formula.',
          hint: 'YED = % ΔQD \xf7 % Δ Income. A negative result is expected here.',
          answer: 'YED = −10% \xf7 +5% = <strong>−2</strong>'
        },
        {
          prompt: 'Interpret the sign.',
          hint: 'What does a negative YED tell us about the type of good?',
          answer: 'YED is negative → bus travel is an <strong>inferior good</strong>. As people get richer, they switch to cars or taxis.'
        },
        {
          prompt: 'Interpret the magnitude.',
          hint: 'How income-sensitive is demand? What does this mean for bus operators?',
          answer: '|YED| = 2 &gt; 1 → demand is strongly income-sensitive. A 5% income rise causes a 10% decline in bus demand. Bus operators should expect sharp revenue falls during economic booms, and partial recovery during recessions.'
        }
      ],
      conclusion: 'YED = −2 confirms bus travel is an inferior good with high income sensitivity. This shapes transport policy: subsidising buses makes sense when the economy grows (demand falls and operators need support) as well as during recessions when lower-income households rely on public transport.',
      examEdge: 'Five steps for full marks: state formula → substitute values → calculate → interpret sign (good type) → interpret magnitude (sensitivity). "Bus travel is an inferior good" alone is not enough — you must quantify and explain the magnitude.'
    },

    /* ================================================================
       CARD 3 — YED IN BUSINESS STRATEGY
       Four application areas with real examples
       ================================================================ */
    {
      id: 'yed_xed_3',
      stepLabel: 'Step 3 of 7',
      title: 'YED in Business Strategy',
      intro: 'Firms use YED to navigate economic cycles — knowing your YED profile is as important as knowing your margins.',
      steps: [
        {
          label: 'Portfolio diversification',
          text: 'Firms with products across different YED categories have more stable revenues. A mix of luxury goods (high YED) and necessities (low YED) buffers against recession — when luxury sales collapse, necessity sales hold up. Unilever sells premium and value brands for exactly this reason.'
        },
        {
          label: 'Recession planning',
          text: 'Luxury good producers (LVMH, Rolls-Royce, airlines) must hold larger cash reserves, cut costs faster, and use flexible contracts — because a 5% income fall can trigger 10%+ revenue decline. Necessity producers have more predictable revenues and can plan more conservatively.'
        },
        {
          label: 'Emerging market strategy',
          text: 'In rapidly growing economies (India, China in 2000–2020), rising incomes unlock luxury demand exponentially. With YED > 1, demand grows faster than income — the China luxury market grew approximately 50x from 2000–2020 as middle-class incomes rose.'
        },
        {
          label: 'Counter-cyclical opportunity',
          text: 'Inferior good businesses (budget supermarkets, value airlines like Ryanair) benefit from recessions. Ryanair grew market share in 2008–09 as consumers switched from full-service airlines (normal goods, high YED) to budget options (inferior goods relative to full-service). Understanding YED reveals who gains when others lose.'
        }
      ],
      keyTakeaway: 'Know your YED: it tells you whether you\'re pro-cyclical (luxury), counter-cyclical (inferior), or recession-resilient (necessity).',
      examEdge: 'Ryanair in 2008–09 is a powerful exam example: full-service airlines are normal goods (high YED) → demand collapsed; budget airlines acted as inferior substitutes → demand rose. This shows YED isn\'t just about the good itself but about relative positioning — what is the alternative consumers switch to?'
    },

    /* ================================================================
       CARD 4 — WHAT IS XED
       Hook question → formula → three relationship types
       ================================================================ */
    {
      id: 'yed_xed_4',
      stepLabel: 'Step 4 of 7',
      title: 'What is Cross-Price Elasticity of Demand (XED)?',
      intro: 'When Pepsi raises its prices, Coca-Cola\'s sales go up. When petrol prices spike, fewer people buy cars. XED measures these cross-market effects.',
      body: `<div style="border:2px solid #0B1426;border-radius:10px;padding:16px;text-align:center;margin:12px 0;font-size:18px;font-weight:700;background:#F8FAFC;">
  XED = % ΔQD(Good A) \xf7 % ΔP(Good B)
</div>
<p style="margin:10px 0 6px;">The <strong>sign of XED</strong> reveals the economic relationship between the two goods:</p>
<ul style="margin:8px 0 0 18px;line-height:1.8;">
  <li><strong>XED &gt; 0 (positive):</strong> Substitutes — price of B rises → consumers switch to A → demand for A rises.</li>
  <li><strong>XED &lt; 0 (negative):</strong> Complements — price of B rises → demand for B falls → demand for A falls too (used together).</li>
  <li><strong>XED = 0:</strong> Unrelated goods — price of B has no effect on demand for A.</li>
</ul>`,
      causes: [
        {
          head: '➕ Substitutes (XED > 0)',
          body: 'Price of B rises → consumers switch to A → demand for A rises. Stronger positive XED = closer substitutes. Examples: Pepsi & Coke (close substitutes, high positive XED), butter & margarine, train & bus travel.'
        },
        {
          head: '➖ Complements (XED < 0)',
          body: 'Price of B rises → demand for B falls → demand for A also falls (used together). Examples: petrol & cars, tea & milk, gaming consoles & games. The razor-blade model exploits strongly negative XED.'
        },
        {
          head: '⭕ Unrelated goods (XED = 0)',
          body: 'Price of B has no effect on demand for A. Examples: haircuts & bread, smartphones & cheese. No strategic relationship — these markets can be analysed independently.'
        }
      ],
      keyTakeaway: 'The sign of XED reveals the relationship. The magnitude tells you how close that relationship is.',
      examEdge: 'Common error: students forget that XED always involves TWO different goods — price of Good B changes, quantity demanded of Good A responds. Always name both goods explicitly. Example: "If coffee prices rise, XED(tea, coffee) > 0 means demand for tea rises."'
    },

    /* ================================================================
       CARD 5 — WORKED EXAMPLE: CALCULATING XED
       Tea & coffee scenario, 5 scaffolded steps
       ================================================================ */
    {
      id: 'yed_xed_5',
      template: 'worked-example',
      stepLabel: 'Step 5 of 7',
      title: 'Worked Example: Calculating XED',
      lede: 'Always name both goods and state which price changed and which quantity responded.',
      scenario: 'The price of coffee rises from <strong>\xa32.00</strong> to <strong>\xa32.30</strong> per cup. Over the same period, demand for tea rises from <strong>200</strong> to <strong>218</strong> cups per day at a local café.',
      steps: [
        {
          prompt: 'Calculate the % change in price of Good B (coffee).',
          hint: '% change = (New − Old) \xf7 Old \xd7 100',
          answer: '% ΔP(coffee) = (2.30 − 2.00) \xf7 2.00 \xd7 100 = <strong>+15%</strong>'
        },
        {
          prompt: 'Calculate the % change in QD of Good A (tea).',
          hint: 'QD of tea rose — this should be positive.',
          answer: '% ΔQD(tea) = (218 − 200) \xf7 200 \xd7 100 = <strong>+9%</strong>'
        },
        {
          prompt: 'Apply the XED formula.',
          hint: 'XED(A, B) = % ΔQD(A) \xf7 % ΔP(B). Always state both goods.',
          answer: 'XED(tea, coffee) = +9% \xf7 +15% = <strong>+0.6</strong>'
        },
        {
          prompt: 'Interpret the sign.',
          hint: 'Positive XED → what is the relationship?',
          answer: 'XED is positive → tea and coffee are <strong>substitutes</strong>. When coffee gets more expensive, consumers switch to tea.'
        },
        {
          prompt: 'Interpret the magnitude.',
          hint: 'How close are these substitutes? What does 0.6 tell us about consumer loyalty to coffee?',
          answer: 'XED = 0.6 → moderate substitutes (not close substitutes). A 15% rise in coffee prices causes only a 9% rise in tea demand. Many consumers remain loyal to coffee despite the price rise — they are imperfect substitutes.'
        }
      ],
      conclusion: 'XED(tea, coffee) = +0.6 confirms they are moderate substitutes. A business selling tea could use this insight: when coffee prices rise (from commodity shocks or bean shortages), expect a modest boost to tea demand — but not a massive one. Close substitutes would show XED closer to 2 or 3.',
      examEdge: 'Magnitude matters for XED: a value of 0.1 means very weak substitutes; 2.0 means very close substitutes. The CMA uses XED > ~0.5 as evidence that two products are in the same market when reviewing mergers — a value of 0.6 would be borderline evidence of market overlap.'
    },

    /* ================================================================
       CARD 6 — REAL-WORLD APPLICATIONS
       Four application areas: law, pricing, trade, development
       ================================================================ */
    {
      id: 'yed_xed_6',
      stepLabel: 'Step 6 of 7',
      title: 'Real-World Applications',
      intro: 'YED and XED aren\'t just formulas — they drive competition law, pricing strategy, and macroeconomic policy.',
      steps: [
        {
          label: 'Competition law (XED)',
          text: 'The CMA and European Commission define \'relevant markets\' using XED. If XED between two products is strongly positive (> ~0.5), they constrain each other\'s pricing — they\'re in the same market. This determines whether a merger is investigated. Google/DoubleClick and Pfizer/AstraZeneca mergers both involved market definition using cross-price evidence.'
        },
        {
          label: 'Complement pricing strategy (XED)',
          text: 'Negative XED reveals a razor-blade opportunity. If XED(blades, razors) is strongly negative, cutting the price of razors boosts razor demand, which drives blade sales at full margin. PlayStation consoles are priced low to sell games at high margin. Printers are cheap; ink cartridges are expensive.'
        },
        {
          label: 'YED and international trade',
          text: 'Countries exporting luxury goods (France — champagne, Germany — premium cars) face sharp revenue falls in global recessions because export demand has high YED. Commodity exporters face lower YED but higher price volatility. Understanding YED helps countries manage trade exposure across the economic cycle.'
        },
        {
          label: 'Engel\'s Law and structural change',
          text: 'As incomes rise globally, spending patterns shift — food\'s share of income falls (low YED), services and luxuries rise (high YED). This explains why rich countries have mostly service economies, and why development economists track YED across sectors to predict structural transformation from agriculture to manufacturing to services.'
        }
      ],
      keyTakeaway: 'YED shapes long-run business strategy and macro structure. XED defines who your competitors and complements really are.',
      examEdge: 'Engel\'s Law as a development economics link: UK households spend ~8% of income on food; Ethiopian households ~50%. Rising incomes reduce food\'s share (low YED), freeing spending for manufactured goods and services. This micro concept underpins the entire theory of economic development — a powerful cross-topic connection.'
    },

    /* ================================================================
       CARD 7 — EXAM SUMMARY: YED & XED
       Comparison table, common mistakes, 5-step checklist
       ================================================================ */
    {
      id: 'yed_xed_7',
      stepLabel: 'Step 7 of 7',
      title: 'Exam Summary: YED & XED',
      intro: 'Two formulas, two signs, four good types, three relationship types — here\'s the complete picture.',
      body: `<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#059669;margin-bottom:10px;">① YED vs XED at a Glance</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border:1px solid #CBD5E1;border-radius:10px;overflow:hidden;margin-bottom:20px;font-size:12px;">
  <div style="background:#1E3A5F;color:#fff;font-weight:800;padding:8px 12px;">Dimension</div>
  <div style="background:#1E3A5F;color:#fff;font-weight:800;padding:8px 12px;">YED</div>
  <div style="background:#1E3A5F;color:#fff;font-weight:800;padding:8px 12px;">XED</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;font-weight:700;color:#0B1426;">Formula</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">% ΔQD \xf7 % Δ Income</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">% ΔQD(A) \xf7 % ΔP(B)</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;font-weight:700;color:#0B1426;">Positive sign</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Normal good</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Substitutes</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;font-weight:700;color:#0B1426;">Negative sign</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Inferior good</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Complements</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;font-weight:700;color:#0B1426;">Zero</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Theoretical (income has no effect)</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Unrelated goods</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;font-weight:700;color:#0B1426;">Magnitude &gt; 1</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Luxury good</div>
  <div style="background:#F8FAFC;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Close substitutes or complements</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;font-weight:700;color:#0B1426;">Magnitude &lt; 1</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Necessity</div>
  <div style="background:#fff;padding:8px 12px;border-top:1px solid #CBD5E1;color:#0B1426;">Weak relationship</div>
</div>

<div style="font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#DC2626;margin-bottom:10px;">② Common Mistakes</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Wrong sign interpretation</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Negative YED = inferior (not 'inelastic'). Positive YED = normal (not 'elastic'). Sign → good type, not elasticity classification.</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Elastic/inelastic language for YED</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Use 'luxury', 'necessity', 'normal', 'inferior' — not 'income elastic'. Elastic/inelastic language belongs to PED and PES.</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ Forgetting which good is A and B in XED</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Price of B changes → quantity of A responds. Always state both goods explicitly — "XED(tea, coffee) = +0.6" not just "XED = +0.6".</div>
  </div>
  <div style="background:#FFF5F5;border:1px solid #DC2626;border-radius:8px;padding:10px;">
    <div style="font-weight:800;font-size:12px;color:#DC2626;margin-bottom:5px;">⚠️ XED magnitude without sign</div>
    <div style="font-size:12px;color:#0B1426;line-height:1.55;">Saying &#x27;XED = 1.5 so they are substitutes&#x27; is fine. Saying &#x27;XED = −1.5 so they are substitutes&#x27; is wrong — negative XED means complements.</div>
  </div>
</div>`,
      steps: [
        { label: 'State the correct formula', text: 'YED = % ΔQD \xf7 % Δ Income. XED = % ΔQD(A) \xf7 % ΔP(B). Name both goods for XED.' },
        { label: 'Calculate', text: 'Substitute the values and show each step. Never skip to the final answer — method marks are available at each stage.' },
        { label: 'Interpret the sign', text: 'YED sign → good type (normal/inferior). XED sign → relationship type (substitutes/complements). This is the most-tested step.' },
        { label: 'Interpret the magnitude', text: 'How strong is the effect? YED > 1 = luxury; 0–1 = necessity. XED close to 0 = weak relationship; XED > 1 = close substitutes or complements.' },
        { label: 'Apply to a real context', text: 'Link to business strategy, competition policy, or market behaviour. This is where evaluation marks sit — a calculation alone is never a full answer.' }
      ],
      keyTakeaway: 'Sign classifies. Magnitude quantifies. Context applies. Get all three for full marks.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
