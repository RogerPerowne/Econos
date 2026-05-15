window.ECONOS_TOPIC = {
  id: 'pes',
  topicNum: '1.9',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Price Elasticity of Supply',
  estTime: '9-11 minutes',
  goal: 'Lock in the PES formula, what determines supply elasticity, how PES affects price and quantity adjustment, and its policy implications.',
  intro: {
    heroKey: 'heroElasticity',
    summary: 'PES measures how responsive supply is to a price change. When demand shifts, the split between price and quantity adjustment depends on PES. Inelastic supply means most of the adjustment is in price; elastic supply means most is in quantity.',
    doInThis: 'Work through 9 cards covering the PES formula, an interactive supply explorer, a scaffolded worked calculation, determinants, demand-shift effects, key markets, tax incidence, long-run vs short-run supply, and supply-side policy.',
    outcomes: [
      'Calculate and interpret PES using the formula',
      'Explain the determinants of PES including time, spare capacity, and factor mobility',
      'Analyse how PES determines the price and quantity effects of demand shifts',
      'Apply PES to housing, agriculture, and labour market contexts'
    ],
    tip: 'PES = % change in QS \xf7 % change in P. Always positive (supply slopes upward). PES > 1 = elastic; PES < 1 = inelastic; PES = 0 = perfectly inelastic; PES = ∞ = perfectly elastic.',
    stages: [
      { num: 1, name: 'Learn it', sub: '9 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'pes_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 9',
      title: 'Price elasticity of supply: the big picture',
      lede: 'When demand jumps, do prices rocket or does output adjust? PES decides — and shapes everything from housing bubbles to oil shocks.',
      branches: [
        { tone: 'blue',   label: 'Formula &amp; values',         sub: '%&Delta;QS &divide; %&Delta;P. Always positive. Elastic (&gt; 1), inelastic (&lt; 1), and the perfectly inelastic/elastic extremes.' },
        { tone: 'green',  label: 'What determines PES',           sub: 'Spare capacity, stocks, mobility of factors, ease of entry — and above all, time. The longer the period, the more elastic supply becomes.' },
        { tone: 'amber',  label: 'PES &amp; demand shifts',       sub: 'Inelastic supply &rarr; demand shifts hit price hard, quantity barely moves. Elastic supply &rarr; quantity adjusts, price barely moves.' },
        { tone: 'purple', label: 'PES &amp; tax incidence',       sub: 'The more inelastic side carries the heavier burden. Mirror image of PED — together they decide who really pays the tax.' },
        { tone: 'rose',   label: 'Short run vs long run',         sub: 'In the short run, supply is often near-vertical. In the long run it flattens as capacity expands — the same shock has very different effects.' }
      ],
      body: '<strong>Price Elasticity of Supply (PES)</strong> measures the responsiveness of quantity supplied to a change in price.<br><br><strong>Formula:</strong> PES = (% ΔQS) \xf7 (% ΔP)<br><br>PES is always positive (price and quantity supplied move in the same direction — upward-sloping supply curve).<br><br>• PES > 1: <strong>Elastic supply</strong> — producers can respond significantly to a price rise; quantity increases proportionally more than price.<br>• PES < 1: <strong>Inelastic supply</strong> — producers cannot increase output much; most price change becomes just a price rise, not extra output.<br>• PES = 0: <strong>Perfectly inelastic</strong> — supply is fixed regardless of price; vertical supply curve.<br>• PES = ∞: <strong>Perfectly elastic</strong> — producers supply any amount at the going price; horizontal supply curve.',
      keyTerms: [
        { term: 'PES', def: '% change in quantity supplied \xf7 % change in price. Always positive for normal upward-sloping supply.' },
        { term: 'Elastic supply', def: 'PES > 1: producers respond strongly to price changes — can scale output easily.' },
        { term: 'Inelastic supply', def: 'PES < 1: producers cannot easily change output — constraints limit response to price signals.' }
      ],
      examEdge: 'A supply curve through the origin has PES = 1 at all points (unit elastic). A supply curve cutting the price axis (steep) has PES < 1 at any point on it (inelastic). A supply curve cutting the quantity axis (flat) has PES > 1 (elastic). This geometric trick saves calculation time in exams.'
    },
    {
      id: 'pes_explorer',
      template: 'pes-explorer',
      stepLabel: 'Learn: Step 2 of 9',
      title: 'PES Explorer: drag the points, watch the supply respond',
      lede: 'Move <strong>A</strong> and <strong>B</strong> along the supply curve. The formula recalculates live — watch whether quantity supplied responds a lot or a little to the price change. The steeper the curve, the more inelastic the supply.',
      howItWorks: 'The supply curve slopes <strong>upward</strong> — price and quantity move in the same direction, so PES is always positive. Pick point A (lower price) and point B (higher price): the widget shows how much quantity supplied changes relative to the price change.<br><br>The key geometric rule: if the supply curve passes through the <strong>origin</strong>, PES = 1 at every point. If it cuts the <strong>P-axis</strong> (starts above zero price), PES &lt; 1 (inelastic). If it cuts the <strong>Q-axis</strong> (supply starts at zero price with positive quantity), PES &gt; 1 (elastic). Try the "Through origin" preset to see this in action.',
      examEdge: 'Three exam traps for PES: (1) PES is always positive — unlike PED, there is no negative sign issue. (2) The geometric rule (origin → unit elastic; P-intercept → inelastic; Q-intercept → elastic) saves calculation time in multi-choice questions — draw the line mentally and check where it crosses. (3) "Time period" is almost always the correct first determinant to cite — short-run PES is nearly always lower than long-run PES.'
    },
    {
      id: 'pes_worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 3 of 9',
      title: 'Worked example: calculating PES step by step',
      lede: 'Work through each step yourself before revealing the answer — this mirrors exactly what the examiner wants to see.',
      scenario: '<strong>Scenario:</strong> The market price of crude oil rises from <strong>$50</strong> to <strong>$60</strong> per barrel. At $50, producers supply <strong>80 million barrels</strong> per day. After the price rise, supply increases to <strong>84 million barrels</strong> per day.',
      steps: [
        {
          prompt: 'Calculate the percentage change in price.',
          hint: '% change = (New − Old) ÷ Old × 100',
          answer: '% ΔP = (60 − 50) ÷ 50 × 100 = <strong>+20%</strong><br><span style="color:#475569;font-size:12px;">Price has risen by 20%.</span>'
        },
        {
          prompt: 'Calculate the percentage change in quantity supplied.',
          hint: '% change = (New − Old) ÷ Old × 100. This should be positive — supply and price move together.',
          answer: '% ΔQS = (84 − 80) ÷ 80 × 100 = <strong>+5%</strong><br><span style="color:#475569;font-size:12px;">Quantity supplied has risen by 5%.</span>'
        },
        {
          prompt: 'Apply the PES formula.',
          hint: 'PES = % ΔQS ÷ % ΔP. The result will be positive — unlike PED, there is no negative sign.',
          answer: 'PES = +5% ÷ 20% = <strong>+0.25</strong>'
        },
        {
          prompt: 'Classify the result and interpret it in context.',
          hint: 'Compare PES to 1. Explain why oil supply responds this way in the short/medium run.',
          answer: 'PES = 0.25 &lt; 1 → supply is <strong>price inelastic</strong>.<br>A 20% price rise caused only a 5% rise in quantity supplied. Existing oil wells are already operating; new drilling and refinery capacity takes years to build. Supply cannot respond quickly to higher prices.'
        },
        {
          prompt: 'Explain the policy implication of this result.',
          hint: 'What happens to the price when demand for oil suddenly rises, given supply is inelastic?',
          answer: 'With inelastic supply (PES = 0.25), a rightward shift in demand causes a <strong>large price rise</strong> and only a small increase in quantity. Most of the market adjustment falls on price, not output — explaining why oil price spikes are large and sudden. Long-run supply is more elastic as new capacity is built, so prices eventually moderate.'
        }
      ],
      conclusion: 'Oil supply is highly inelastic in the short run because extracting and refining capacity is fixed. This means oil price shocks are sharp but tend to attract new investment over the long run, gradually improving supply elasticity. The short-run / long-run PES distinction is one of the most policy-relevant concepts in economics.',
      examEdge: 'Show every step: formula → values → each % separately → divide → classify → explain in context. The fifth step (policy implication) is what separates high-band answers — always link PES to what it means for prices, quantities, and market participants when demand shifts.'
    },
    {
      id: 'pes_2',
      template: 'cause',
      stepLabel: 'Learn: Step 4 of 9',
      title: 'Determinants of PES',
      causes: [
        { head: 'Time period', body: 'The most important determinant. In the very short run (market period), supply is fixed — PES = 0 (e.g. fish already at market, paintings by a deceased artist). Short run: some adjustment possible (overtime, variable inputs). Long run: new capacity built — PES rises significantly.' },
        { head: 'Spare capacity', body: 'If firms have underutilised machinery and workers, they can increase output quickly when price rises — high PES. If already at full capacity, output cannot respond quickly — low PES.' },
        { head: 'Stocks and inventory', body: 'Firms holding large inventories can release them quickly when price rises — high effective PES. No stocks → must increase production → slower response.' },
        { head: 'Factor mobility', body: 'If factors of production can be easily switched to this good (from other uses), supply response is faster — high PES. Highly specific assets (oil rigs, specialist machinery) cannot be redeployed — low PES.' },
        { head: 'Complexity and gestation period', body: 'Long production lead times (housing takes 2-3 years; trees take decades; aircraft take years) create very inelastic supply in the short run, regardless of price rises.' }
      ],
      examEdge: 'The time dimension of PES is the most exam-relevant: short-run PES is almost always more inelastic than long-run PES. This is why demand shocks initially cause large price changes (short-run inelastic supply), then moderate as supply adjusts over time (long-run elastic supply).'
    },
    {
      id: 'pes_3',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 9',
      title: 'PES and the Effect of Demand Shifts',
      intro: 'When demand shifts, PES determines the split between price change and quantity change.',
      steps: [
        { label: 'Inelastic supply (PES < 1)', text: 'Demand shifts right → price rises sharply; quantity barely increases. Most of the adjustment is in price, not output. Benefit to existing producers (higher revenue); consumers pay more.' },
        { label: 'Elastic supply (PES > 1)', text: 'Demand shifts right → quantity increases strongly; price rises only moderately. Most of the adjustment is in quantity, not price. Consumers get more goods without paying much more.' },
        { label: 'Perfectly inelastic supply (PES = 0)', text: 'Demand shifts right → all adjustment in price, no quantity change. Classic land market in a fixed location: more demand → price rises, no new land created.' },
        { label: 'Perfectly elastic supply (PES = ∞)', text: 'Demand shifts right → all adjustment in quantity, no price change. Long-run manufactured goods with constant costs: more demand → more production at same price.' }
      ],
      examEdge: 'Housing: PES is very inelastic (planning restrictions, long construction time). When demand rises (population growth, immigration, Help to Buy), almost all adjustment is in price → house prices surge. This is why UK house prices rise faster than other goods. PES analysis explains this mechanically.'
    },
    {
      id: 'pes_4',
      template: 'diagnose',
      stepLabel: 'Learn: Step 6 of 9',
      title: 'PES in Key Markets',
      intro: 'Different markets have very different PES characteristics — know these for contextual exam questions.',
      rows: [
        { label: 'Market', colA: 'Housing (UK)', colB: 'Agricultural produce' },
        { label: 'PES estimate', colA: 'Very inelastic (PES ~0.1-0.3). Planning restrictions, long build times, NIMBYism limit supply response.', colB: 'Very inelastic short-run (season limits output). Moderately elastic long-run (farmers can plant more next season).' },
        { label: 'Policy implication', colA: 'Demand subsidies (Help to Buy, stamp duty cuts) mostly raise prices, not output. Supply-side reform (planning reform, greenfield releases) needed to improve PES.', colB: 'Price volatility from harvest shocks, as supply cannot adjust within a season. Buffer stocks or futures markets used to stabilise.' }
      ],
      footer: 'Manufacturing goods typically have elastic supply long-run — investment expands capacity. Oil supply is inelastic short-run (existing wells, refinery capacity) but can be expanded over years (new drilling, shale). Labour supply PES varies by skill level.',
      examEdge: 'The housing market is the go-to PES exam context. Always explain WHY housing supply is inelastic: planning permission takes years; construction takes 18+ months; land is a fixed factor in specific locations. Then explain the consequence: demand shifts → price volatile.'
    },
    {
      id: 'pes_5',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 9',
      title: 'PES and Tax Incidence',
      body: 'Just as PED affects tax incidence, so does PES. The relative elasticity of supply and demand determines who bears the tax burden.<br><br><strong>Inelastic supply + elastic demand:</strong> most tax burden falls on producers. Sellers cannot easily reduce quantity (committed to producing), so they absorb the tax.<br><br><strong>Elastic supply + inelastic demand:</strong> most tax burden falls on consumers. Sellers can redirect production elsewhere if price falls, so they pass tax on. Classic example: cigarette tax on inelastic demand — consumers bear most of the burden.<br><br><strong>Rule:</strong> the less elastic side of the market bears more of the tax burden.',
      keyTerms: [
        { term: 'Tax incidence', def: 'Distribution of a tax between consumers and producers — determined by relative elasticities.' },
        { term: 'Producer incidence', def: 'The portion of the tax absorbed by sellers as reduced net price — high when supply is inelastic.' },
        { term: 'Consumer incidence', def: 'The portion of the tax borne by buyers as higher price — high when demand is inelastic.' }
      ],
      examEdge: 'Formula approach: consumer share of tax = PES \xf7 (PES + |PED|); producer share = |PED| \xf7 (PES + |PED|). More elastic → less burden. The side that can more easily leave the market (more elastic) escapes more of the tax. This is a logical result worth memorising.'
    },
    {
      id: 'pes_6',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 9',
      title: 'Long-Run vs Short-Run Supply Curves',
      body: 'The time period distinction is captured by drawing separate short-run and long-run supply curves:<br><br><strong>Short-run supply (SRAS):</strong> steeper (more inelastic) — limited ability to change output quickly. Fixed capital, committed contracts, seasonality all limit responsiveness.<br><br><strong>Long-run supply (LRAS):</strong> flatter (more elastic) — firms can build new factories, hire more workers, exit or enter. Supply can expand to meet demand without large price rises.<br><br>This distinction mirrors the macro SRAS/LRAS distinction in Theme 2. The same principle applies: short-run constraints are real and important; long-run adjustment restores equilibrium but takes time.',
      keyTerms: [
        { term: 'Short-run supply', def: 'Supply response within a period too short to change fixed factors — limited elasticity.' },
        { term: 'Long-run supply', def: 'Supply response when all factors can be varied — higher elasticity; new firms can enter.' },
        { term: 'Capacity constraint', def: 'The maximum output possible in the short run given fixed capital — the point beyond which supply becomes perfectly inelastic.' }
      ],
      examEdge: 'Questions on agricultural price volatility benefit from distinguishing short-run (inelastic supply → large price swings from demand shifts or harvest failures) vs long-run (elastic supply → gradual return to normal prices as farmers adjust planting). The J-curve in agriculture: prices overshoot short-run then normalise.'
    },
    {
      id: 'pes_7',
      template: 'framing',
      stepLabel: 'Learn: Step 9 of 9',
      title: 'PES and Supply-Side Policy',
      body: 'Government supply-side policies can increase PES by removing constraints on supply response:<br><br>• <strong>Planning reform:</strong> faster planning permissions → housing supply PES rises → less house price volatility.<br>• <strong>Skills training:</strong> wider labour supply → labour PES rises → wage pressures moderate when demand rises.<br>• <strong>Infrastructure investment:</strong> better transport links → more responsive distribution and manufacturing supply.<br>• <strong>R&D and technology:</strong> reduces production costs → firms can expand output at lower marginal cost → more elastic supply.<br><br>Higher PES means demand increases translate into more output and less price inflation — a welfare improvement.',
      keyTerms: [
        { term: 'Supply-side policy', def: 'Government measures to increase productive capacity and the responsiveness of supply — aims to raise PES and shift supply right.' },
        { term: 'Structural reform', def: 'Long-term changes to market institutions (planning, labour market rules) that affect PES — slow to implement but durable.' },
        { term: 'Inflationary pressure', def: 'Inelastic supply means demand growth translates into price rises. Higher PES reduces inflationary impact of growing demand.' }
      ],
      examEdge: 'Linking PES to inflation control is a sophisticated analysis point: if supply is inelastic, any rightward shift in aggregate demand creates inflationary pressure. Supply-side policies that raise PES allow faster output response and lower inflation — explaining why supply-side reforms and monetary policy are complementary, not alternatives.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
