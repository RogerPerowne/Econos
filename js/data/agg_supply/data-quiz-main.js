/* ============================================================
   ECONOS — Quiz content for: Aggregate Supply
   10 questions covering SRAS vs LRAS, Classical vs Keynesian,
   macro equilibrium, stagflation, and output gap dynamics.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'agg_supply_main',
    topicId:  'agg_supply_main',
    title:    'Aggregate Supply',
    subtitle: 'Theme 2.3 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering SRAS and LRAS shapes and shifters, the Classical and Keynesian models, macro equilibrium analysis, stagflation and the policy dilemma, and output gap dynamics. Mixed formats test both conceptual precision and the applied model-switching that A* macro essays require.',
    shortNames: {
      'sras-lras-framing':  'SRAS vs LRAS framing',
      'sras':               'SRAS shifters',
      'lras-classical':     'Classical LRAS',
      'lras-keynesian':     'Keynesian LRAS',
      'macro-equilibrium':  'Macro equilibrium',
      'shifter-comparison': 'SRAS vs LRAS shifters',
      'output-gaps':        'Output gaps'
    },

    questions: [

      /* 1 &#8212; MCQ: why SRAS slopes upward */
      { type: 'mcq',
        stem: 'The <strong>Short Run Aggregate Supply (SRAS)</strong> curve slopes upward. What is the correct economic explanation for this shape?',
        opts: [
          'In the short run, input costs (especially wages) are sticky &#8212; so when the price level rises, firms receive higher revenues without an immediate offsetting cost increase, making production more profitable and inducing higher output',
          'In the short run, all firms can hire unlimited additional workers at the prevailing wage, so output rises proportionately with the price level',
          'SRAS slopes upward because higher prices attract new firms into the market, increasing industry-wide supply over time',
          'The upward slope reflects the law of diminishing returns: as firms expand output, average costs rise, so a higher price level is needed to justify extra production'
        ],
        ans: 0,
        exp: 'The key mechanism: <strong>sticky input costs</strong> (principally wages) in the short run. Wage contracts are typically set for months or years in advance. When the price level rises, firms\' output prices increase but their costs remain fixed, raising profit margins &#8212; incentivising more production. This is the foundation of the SRAS slope. Option D contains some economic truth (diminishing returns) but the proximate cause is wage/cost stickiness, not diminishing returns per se. Option C describes long-run market entry (LRAS effects), not SRAS dynamics. Option B is incorrect &#8212; labour markets have capacity constraints even in the short run.'
      },

      /* 2 &#8212; Elastic sort: SRAS vs LRAS shifters */
      { type: 'elastic_sort',
        stem: 'Classify each factor as shifting <strong>SRAS only</strong>, <strong>LRAS only</strong>, or <strong>both SRAS and LRAS</strong>.',
        categories: ['sras', 'lras', 'both'],
        categoryLabels: ['SRAS only (short run)', 'LRAS only (long run)', 'Both SRAS and LRAS'],
        goods: [
          { icon: '&#128664;', label: 'A surge in global oil prices raises firms\' energy and transport costs', note: '', ans: 'sras' },
          { icon: '&#127891;', label: 'A major government investment in university education and vocational skills over 15 years', note: '', ans: 'lras' },
          { icon: '&#127804;', label: 'A large-scale net immigration of working-age skilled workers', note: '', ans: 'both' },
          { icon: '&#128200;', label: 'A significant cut in VAT reduces indirect tax costs for firms immediately', note: '', ans: 'sras' },
          { icon: '&#128187;', label: 'A major AI-driven productivity breakthrough that permanently raises output per worker', note: '', ans: 'both' },
          { icon: '&#127776;', label: 'New high-speed rail infrastructure reduces logistics costs across the economy', note: '', ans: 'lras' }
        ],
        exp: '<strong>SRAS only</strong>: factors affecting immediate production costs &#8212; oil prices, VAT, short-term supply chain disruptions. <strong>LRAS only</strong>: factors affecting the economy\'s long-run capacity over years or decades &#8212; major infrastructure, sustained education investment. <strong>Both</strong>: factors with both short and long-run effects &#8212; skilled immigration raises short-run productive capacity (SRAS right) and long-run potential output (LRAS right); AI productivity improvements similarly operate on both. A* answers distinguish the time horizon of each shifter and explain why supply-side policies primarily target LRAS, taking years or decades to materialise.'
      },

      /* 3 &#8212; MCQ: stagflation */
      { type: 'mcq',
        stem: 'The term <strong>stagflation</strong> refers to:',
        opts: [
          'A situation where rising inflation and rising unemployment occur simultaneously &#8212; caused by a leftward shift of SRAS',
          'A period of slow economic growth combined with low inflation, typically occurring during a supply-side boom',
          'Deflation and unemployment occurring together &#8212; caused by a leftward shift of AD below LRAS',
          'High inflation combined with rapid GDP growth &#8212; caused by AD exceeding LRAS capacity'
        ],
        ans: 0,
        exp: '<strong>Stagflation</strong> = stagnation + inflation. It arises when SRAS shifts left (cost-push shock): output falls (stagnation/unemployment rises) AND prices rise simultaneously. This is the worst macroeconomic scenario because demand-side policy cannot solve both problems: tightening policy combats inflation but worsens the output fall; loosening policy protects output but worsens inflation. The 1970s OPEC oil shocks produced classic stagflation. The 2022 UK episode (CPI 11.1%, near-zero growth) is a milder modern parallel. Key point: stagflation breaks the original Phillips curve relationship, which assumed unemployment and inflation move in opposite directions.'
      },

      /* 4 &#8212; Para fill: output gap */
      { type: 'para_fill',
        stem: 'Complete the paragraph about output gaps and their consequences.',
        anchor: 'The output gap measures the difference between actual and potential GDP.',
        para: 'A <strong>negative</strong> output gap occurs when actual output is [1] potential output &#8212; the economy has [2] capacity, rising unemployment, and [3] inflationary pressure. The Classical self-correcting mechanism operates via [4] wages falling, shifting SRAS [5] until equilibrium is restored at potential output. Keynesians argue this process is slow due to [6] wages, justifying active [7] policy to close the gap more quickly.'
        ,
        blanks: [
          { id: 1, opts: ['below', 'above', 'equal to', 'proportional to'], ans: 0 },
          { id: 2, opts: ['spare', 'excess', 'imported', 'borrowed'], ans: 0 },
          { id: 3, opts: ['downward', 'upward', 'stagflationary', 'persistent'], ans: 0 },
          { id: 4, opts: ['nominal', 'real', 'minimum', 'average'], ans: 0 },
          { id: 5, opts: ['right', 'left', 'upward', 'downward'], ans: 0 },
          { id: 6, opts: ['sticky', 'flexible', 'rising', 'indexed'], ans: 0 },
          { id: 7, opts: ['fiscal or monetary', 'supply-side', 'trade', 'exchange rate'], ans: 0 }
        ],
        exp: '(1) <strong>Below</strong>: actual output falls short of potential in a negative gap. (2) <strong>Spare</strong>: idle workers, underutilised capital. (3) <strong>Downward</strong>: deflationary pressure from weak demand. (4) <strong>Nominal</strong>: the Classical mechanism requires nominal wages to fall (not just real wages). (5) <strong>Right</strong>: lower wages reduce costs; SRAS shifts right, raising output back to potential at a lower price level. (6) <strong>Sticky</strong>: the Keynesian objection &#8212; nominal wages are rigid downward due to contracts, unions, and morale effects. (7) <strong>Fiscal or monetary</strong>: demand-side policies shift AD right, closing the gap via the demand side rather than waiting for supply-side adjustment.'
      },

      /* 5 &#8212; Multi-select: SRAS shifters */
      { type: 'multi_select',
        stem: 'Which of the following will cause the <strong>SRAS curve to shift left</strong> (cost-push shock)?',
        opts: [
          'A sharp rise in global oil prices, increasing energy costs for all UK firms',
          'A 15% depreciation of sterling, raising the sterling cost of imported raw materials',
          'A significant increase in the National Living Wage above productivity growth',
          'A large rise in government spending on NHS services',
          'An increase in VAT from 20% to 22.5%, raising prices across most consumer goods',
          'A cut in the Bank of England base rate from 5% to 3%'
        ],
        correct: [0, 1, 2, 4],
        exp: 'SRAS shifts left when <strong>production costs rise</strong>. Options A (oil price), B (import costs from depreciation), C (wage costs above productivity), and E (indirect tax cost-push &#8212; VAT shifts SRAS left, raising prices at each output level) all directly raise firms\' costs and shift SRAS left. Option D (NHS spending) is a fiscal stimulus &#8212; it shifts AD right, not SRAS. Option F (rate cut) shifts AD right via reduced borrowing costs &#8212; no direct SRAS effect. The A* point: when SRAS shifts left, output falls AND the price level rises simultaneously &#8212; creating the policy dilemma that neither tightening nor loosening solves without cost.'
      },

      /* 6 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are consistent with the <strong>Classical view of LRAS</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128200;', label: 'In the long run, the economy always returns to full employment output through wage and price flexibility', note: '' },
          { icon: '&#128176;', label: 'Fiscal stimulus at full employment only raises the price level, with no lasting increase in real output', note: '' },
          { icon: '&#127968;', label: 'With significant spare capacity, AD stimulus raises output without raising the price level', note: '' },
          { icon: '&#127981;', label: 'Government borrowing to finance G crowds out private investment, leaving net AD unchanged', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is option C, which describes the <strong>Keynesian</strong> model (horizontal LRAS with spare capacity). The Classical model asserts vertical LRAS at full employment &#8212; there is no spare capacity scenario where AD raises output without raising prices, because wages and prices are fully flexible and the economy is always at Y*. Options A (self-correction), B (stimulus is purely inflationary at capacity), and D (full crowding out) are all consistent with the Classical vertical LRAS model. Option C is the defining feature of Keynesian macro: spare capacity exists and AD stimulus is non-inflationary.'
      },

      /* 7 &#8212; Data table: UK supply shock 2022 */
      { type: 'data_table',
        stem: 'The table shows UK macroeconomic data during the 2022 supply shock episode.',
        headers: ['Indicator', '2021', 'Q1 2022', 'Q3 2022', 'Q4 2022'],
        rows: [
          ['CPI inflation (annual %)', '2.5%', '6.2%', '9.9%', '10.7%'],
          ['Real GDP growth (quarterly %)', '+1.2%', '+0.8%', '&#8722;0.2%', '+0.0%'],
          ['Bank of England base rate', '0.1%', '0.75%', '2.25%', '3.50%'],
          ['Brent oil price ($ per barrel)', '71', '97', '100', '88']
        ],
        question: 'Which AD/AS analysis best describes the 2022 UK macroeconomic episode shown in the data?',
        opts: [
          'A negative supply shock (SRAS shifts left) caused by rising energy prices produced stagflation &#8212; inflation surging while real growth stalled &#8212; the BoE raised rates aggressively but faced the policy dilemma of tightening into near-zero growth',
          'A positive demand shock (AD shifts right) caused the inflation, as consumers spent post-COVID savings &#8212; the BoE was right to raise rates aggressively to bring AD back to LRAS',
          'LRAS shifted left in 2022 as potential output fell permanently, explaining both the inflation and the growth weakness',
          'The data shows a Keynesian scenario: the economy was below LRAS, so inflation and near-zero growth are consistent with an output gap being closed by demand stimulus'
        ],
        ans: 0,
        exp: 'The data shows the textbook negative supply shock: oil prices doubled from ~$71 to ~$100, driving CPI from 2.5% to ~11% while real GDP growth stalled and turned negative in Q3. This is SRAS shifting left &#8212; higher costs → higher prices AND lower output simultaneously (stagflation). The BoE raised rates aggressively (0.1% to 3.5% in one year) to fight inflation, but this risked worsening the output stagnation &#8212; the classic policy dilemma from a supply shock. Option B is incorrect &#8212; the demand-pull explanation cannot account for near-zero growth alongside high inflation. Option C confuses SRAS and LRAS. Option D is incorrect &#8212; the episode was a supply shock, not a Keynesian demand deficiency.'
      },

      /* 8 &#8212; Multi-select: evaluation of aggregate supply policy */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>aggregate supply and macroeconomic policy</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Supply-side policies that target LRAS take years or decades to raise potential output &#8212; making them inappropriate as a short-run response to a negative output gap, where demand-side intervention operates in months rather than a decade',
          'A leftward shift of SRAS causes stagflation &#8212; rising prices and falling output simultaneously',
          'The Classical self-correcting mechanism relies on nominal wage flexibility, but if wages are sticky downward (due to contracts and union bargaining), the correction could take years &#8212; justifying active demand-side policy rather than waiting for the market to clear',
          'LRAS is vertical in the Classical model because the economy is always at full employment in the long run',
          'Whether fiscal stimulus raises real output depends critically on the position of the economy relative to LRAS: in a deep recession with spare capacity (Keynesian horizontal range), stimulus is non-inflationary; at full employment (Classical vertical range), the same stimulus only raises the price level',
          'A cost-push shock shifts SRAS to the left, increasing both the price level and unemployment at the same time'
        ],
        correct: [0, 2, 4],
        exp: 'Option A is strong evaluation: it weighs supply-side policy against a specific criterion (speed of effect relative to need), reaches a directional conclusion (inappropriate for short-run gaps), and uses a time-based comparison &#8212; this is a genuine analytical weighing move. Option C is strong evaluation: it identifies the key condition on which the Classical mechanism depends (nominal wage flexibility), explains what breaks that condition (stickiness from contracts/unions), and reaches a qualified policy conclusion &#8212; exactly the structure examiners reward. Option E is strong evaluation: it conditions the effectiveness of fiscal stimulus on where the economy sits on the AS curve, distinguishing two explicitly contrasting scenarios &#8212; the highest-level evaluative technique in macro. Option B describes a known outcome without qualification, weighing, or context &#8212; it is analysis, not evaluation. Option D is pure description of the Classical model &#8212; it states a position without questioning it, applying it, or reaching a conditional conclusion. Option F restates the definition of stagflation without any evaluative direction.'
      },

      /* 9 &#8212; Calculation: output gap */
      { type: 'calculation',
        context: 'The OBR estimates UK <strong>potential GDP</strong> in 2023 at <strong>&#163;2,520bn</strong>. Actual real GDP in 2023 was <strong>&#163;2,470bn</strong>.',
        working: [
          'Output gap = (Actual GDP &#8722; Potential GDP) &#247; Potential GDP &#215; 100',
          'Output gap = (&#163;2,470bn &#8722; &#163;2,520bn) &#247; &#163;2,520bn &#215; 100',
          'Output gap = &#8722;&#163;50bn &#247; &#163;2,520bn &#215; 100',
          'Output gap = &#8722;1.98% &#8776; &#8722;2%',
          'Negative output gap: actual output below potential &#8212; spare capacity exists'
        ],
        stem: 'What is the approximate output gap, and what are the implications for monetary policy?',
        opts: [
          { ped: 'Approximately &#8722;2%: a small negative output gap, suggesting some spare capacity and disinflationary pressure &#8212; consistent with room for modest rate cuts', typ: 'Correctly calculates gap as &#8722;&#163;50bn/&#163;2,520bn = &#8722;2%', rev: '(Actual &#8722; Potential)/Potential &#215; 100 = (2470&#8722;2520)/2520 &#215; 100' },
          { ped: 'Approximately +2%: a positive output gap, suggesting the economy is overheating and rates should rise', typ: 'Reversed the sign &#8212; actual is below potential, so the gap is negative, not positive', rev: 'Actual (2470) < Potential (2520), so the gap is negative' },
          { ped: 'The output gap is &#163;50bn in absolute terms: monetary policy cannot respond to a gap expressed in pounds', typ: 'Gave the absolute &#163; difference without converting to a percentage of potential GDP', rev: 'Output gaps are expressed as a % of potential GDP for meaningful comparison' },
          { ped: 'The output gap is zero: because the economy operated throughout the year, capacity utilisation must be 100%', typ: 'Confused operating (any output) with full capacity utilisation', rev: 'An economy can operate well below full capacity &#8212; spare capacity means output < potential' }
        ],
        ans: 0,
        exp: 'Output gap = (&#163;2,470bn &#8722; &#163;2,520bn) / &#163;2,520bn &#215; 100 = <strong>&#8722;2.0%</strong>. A small but negative gap: the economy is operating below its potential, with ~&#163;50bn of spare capacity. The policy implication: disinflationary pressure (below-potential output keeps price and wage pressures contained). The BoE could begin cutting rates cautiously &#8212; the 2024 debate about the timing of rate cuts as inflation fell towards target. A* macro answers always quantify the output gap, not just state its direction, to assess the appropriate scale of policy response.'
      },

      /* 10 &#8212; Chain: cost-push shock transmission */
      { type: 'chain',
        stem: 'A global energy supply disruption causes a sustained rise in gas and electricity prices. Place the macroeconomic consequences in the correct order.',
        items: [
          { label: 'The Bank of England raises Bank Rate to contain inflationary expectations, accepting lower growth as a cost', note: '' },
          { label: 'Firms across all energy-intensive sectors face sharply higher input costs', note: '' },
          { label: 'Global gas supply is disrupted, causing energy prices to spike', note: '' },
          { label: 'SRAS shifts left: at every output level, firms now require higher prices to cover their costs', note: '' },
          { label: 'Stagflation: the price level rises and output falls simultaneously, raising unemployment', note: '' },
          { label: 'Workers demand higher nominal wages to protect real incomes &#8212; second-round effects emerge', note: '' }
        ],
        correctOrder: [2, 1, 3, 4, 5, 0],
        exp: '<strong>Cost-push transmission chain:</strong><br>1. Energy supply disruption (external shock).<br>2. Firms\' input costs rise.<br>3. SRAS shifts left (cost-push).<br>4. Stagflation &#8212; higher prices, lower output, higher unemployment.<br>5. Second-round wage effects as workers seek to protect real incomes.<br>6. BoE raises rates to anchor expectations &#8212; accepting the growth cost.<br><br>This is the 2022 UK episode compressed into one chain. The policy dilemma at step 6 is the A* evaluation gem: raising rates fights inflation but adds to the output squeeze; not raising risks a wage-price spiral. The correct answer for \'what should the BoE do\' is conditional, not absolute.'
      }

    ]
  };

})();
