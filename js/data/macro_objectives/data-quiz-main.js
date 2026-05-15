/* ============================================================
   ECONOS — Quiz content for: Macroeconomic Objectives & Trade-offs
   10 questions covering the five objectives, objective conflicts,
   the Phillips curve, NAIRU, stagflation, and supply-side resolution.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'macro_objectives_main',
    topicId:  'macro_objectives_main',
    title:    'Macroeconomic Objectives &amp; Trade-offs',
    subtitle: 'Theme 2.5 &#183; Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the five macro objectives, the conflicts between them, the short-run and long-run Phillips curve, the NAIRU and its policy implications, stagflation and the Thatcher response, and whether supply-side policy can resolve trade-offs. Mixed formats develop the analytical depth and evaluative precision that A* macro essays require.',
    shortNames: {
      'five-objectives':    'Five objectives',
      'objective-conflicts': 'Objective conflicts',
      'phillips-curve':     'Phillips curve',
      'nairu':              'NAIRU',
      'stagflation':        'Stagflation',
      'resolve-tradeoffs':  'Supply-side resolution',
      'uk-macro-data':      'UK macro data'
    },

    questions: [

      /* 1 &#8212; Elastic sort: five objectives */
      { type: 'elastic_sort',
        stem: 'Match each policy outcome to the macroeconomic objective it primarily advances.',
        categories: ['growth', 'infl', 'unemp', 'bop', 'env'],
        categoryLabels: ['Economic growth', 'Low inflation', 'Low unemployment', 'Current account balance', 'Environmental sustainability'],
        goods: [
          { icon: '&#128200;', label: 'GDP grows at 2.5% per year, raising real living standards and fiscal capacity', note: '', ans: 'growth' },
          { icon: '&#127776;', label: 'CPI falls back to the 2% target following a period of above-target inflation', note: '', ans: 'infl' },
          { icon: '&#128522;', label: 'The ILO unemployment rate falls to 4% &#8212; near the estimated natural rate', note: '', ans: 'unemp' },
          { icon: '&#127758;', label: 'The current account deficit narrows from 4% of GDP to 2% of GDP', note: '', ans: 'bop' },
          { icon: '&#127807;', label: 'Carbon emissions per unit of GDP fall, decoupling economic activity from environmental damage', note: '', ans: 'env' },
          { icon: '&#128176;', label: 'Real wages rise 2% per year, matching productivity growth without triggering cost-push inflation', note: '', ans: 'growth' }
        ],
        exp: '<strong>Five objectives</strong>: (1) Economic growth &#8212; rising real GDP and real wages; (2) Low inflation &#8212; CPI at or near the 2% target; (3) Low unemployment &#8212; near the natural rate (UK ~4-4.5%); (4) Current account balance &#8212; sustainable BoP position; (5) Environmental sustainability &#8212; decoupling growth from carbon. A* answers note that the five cannot all be simultaneously maximised &#8212; the conflicts between them are the organising framework for all macro policy debates. Real wages growing in line with productivity is classified under growth because it improves material living standards without triggering inflation.'
      },

      /* 2 &#8212; MCQ: Phillips curve mechanism */
      { type: 'mcq',
        stem: 'According to the original <strong>short-run Phillips curve</strong>, what is the mechanism that creates a trade-off between unemployment and inflation?',
        opts: [
          'As unemployment falls, workers have greater bargaining power &#8212; they successfully demand higher nominal wages; firms pass on higher labour costs as higher prices',
          'As unemployment falls, consumer spending rises; higher demand directly causes demand-pull inflation without any wage mechanism',
          'As inflation rises, workers accept lower real wages to keep their jobs, reducing unemployment even when inflation is high',
          'The relationship is mechanical: lower unemployment always causes exactly proportionate inflation, following a fixed empirical rule'
        ],
        ans: 0,
        exp: 'The <strong>Phillips curve mechanism</strong> runs through the labour market. When unemployment is low (workers scarce), workers have bargaining power and secure higher nominal wages. Higher wages raise firms\' unit labour costs. Firms pass costs onto consumers as higher prices &#8212; inflation rises. The reverse: when unemployment is high, workers accept lower or flat wages &#8212; cost pressures ease and inflation falls. This is a real mechanism, not just an observed correlation. Option B skips the wage mechanism. Option C describes a different (real wage flexibility) mechanism. Option D is wrong &#8212; the relationship is probabilistic and changes over time, not mechanically fixed.'
      },

      /* 3 &#8212; Diagnostic pair: NAIRU application */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"In 2022, UK unemployment fell to 3.7% &#8212; below most estimates of the NAIRU. Analyse the likely consequences."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Chloe', badge: 'Candidate A',
            answer: 'The NAIRU (Non-Accelerating Inflation Rate of Unemployment) is the unemployment rate consistent with stable inflation &#8212; estimated at ~4-4.5% for the UK. When actual unemployment falls below the NAIRU, the labour market is tight: workers have bargaining power and secure above-equilibrium wage settlements. With UK wage growth accelerating to 7-8% in 2022-23 (ONS data), unit labour costs rose sharply. Firms with pricing power passed these costs onto consumers via higher prices &#8212; second-round effects from the initial energy-price shock. The Bank of England, recognising that below-NAIRU unemployment was fuelling the wage-price spiral risk, raised Bank Rate from 0.1% to 5.25% between 2021 and 2023 &#8212; the fastest tightening cycle in decades. The consequence: below-NAIRU unemployment contributed to the inflation persistence above the 2% target even as energy price effects faded in 2023. The evaluation: the NAIRU is unobservable &#8212; if the MPC overestimated it, they may have tightened more than necessary, unnecessarily slowing growth.'
          },
          { name: 'Oliver', badge: 'Candidate B',
            answer: 'When unemployment falls below the NAIRU, inflation tends to rise. This is because workers have more bargaining power and can demand higher wages. Companies then have to pay more in wages and pass these costs onto consumers through higher prices. In 2022, UK unemployment was very low and wage growth was high, which contributed to the high inflation we saw. The Bank of England responded by raising interest rates to reduce demand and bring inflation back down. The NAIRU is not directly observable, which makes policy difficult. If the Bank of England raises rates too much, they could cause a recession. Overall, falling below the NAIRU puts upward pressure on inflation and requires a monetary policy response.'
          }
        ],
        ans: 0,
        exp: '<strong>Chloe</strong> gives the stronger answer. She defines the NAIRU precisely with the UK estimate (4-4.5%), quantifies the wage growth data (7-8%), names the mechanism (second-round effects via labour costs), cites the specific BoE policy response with the full rate path (0.1% to 5.25%), and crucially includes an evaluation point about NAIRU unobservability and the risk of over-tightening. Oliver covers the core logic but without quantification, without naming the second-round mechanism, without specific rate data, and without the unobservability evaluation point. Chloe\'s answer is evidence-dense and structurally complete; Oliver\'s is correct but sparse.'
      },

      /* 4 &#8212; Multi-select: growth-inflation conflict */
      { type: 'multi_select',
        stem: 'Which of the following are examples of the <strong>trade-off between economic growth and low inflation</strong>?',
        opts: [
          'A fiscal stimulus that shifts AD right raises output but also raises the price level, threatening the 2% inflation target',
          'Higher inflation erodes international competitiveness, reducing exports and therefore growth',
          'Lower interest rates stimulate investment and consumption, but may overstimulate AD and create demand-pull inflation',
          'Rising unemployment in 2009 reduced wage growth, helping contain inflation but at the cost of lower output and living standards',
          'Supply-side policies can simultaneously raise growth and reduce inflation &#8212; they face no growth-inflation trade-off',
          'A currency depreciation raises export growth but simultaneously raises import costs, fuelling cost-push inflation'
        ],
        correct: [0, 2, 3],
        exp: 'Options A, C, and D are direct examples of the growth-inflation trade-off. (A) Fiscal stimulus grows output but risks inflation. (C) Rate cuts stimulate growth but risk overheating. (D) Higher unemployment reduced wage-inflation linkage but at growth cost &#8212; the Phillips curve trade-off. Option B is an example of inflation harming competitiveness (not the direct growth-inflation trade-off). Option E is <em>incorrect</em> &#8212; even supply-side policies face a trade-off in the short run (they require spending that may be inflationary); only in the <em>long run</em> do they resolve the trade-off by shifting LRAS. Option F is primarily a growth-inflation conflict via exchange rate, but the mechanism is BoP-linked, not a pure growth-inflation trade-off.'
      },

      /* 5 &#8212; Para fill: long-run Phillips curve */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the long-run Phillips curve.',
        anchor: 'Friedman and Phelps independently challenged the original Phillips curve in 1968.',
        para: 'Friedman argued that the unemployment-inflation trade-off only exists in the [1] run, when workers suffer from [2] illusion &#8212; mistaking nominal wage gains for real wage rises. If government persistently pushes unemployment [3] the NAIRU, workers eventually [4] for the inflation and demand higher nominal wages, shifting the SRPC [5]. In the [6] run, any attempt to hold unemployment below the NAIRU results only in ever-accelerating [7], not permanently lower unemployment. The long-run Phillips curve is therefore [8] at the NAIRU.'
        ,
        blanks: [
          { id: 1, opts: ['short', 'long', 'medium', 'demand'], ans: 0 },
          { id: 2, opts: ['money', 'nominal', 'fiscal', 'price'], ans: 0 },
          { id: 3, opts: ['below', 'above', 'towards', 'away from'], ans: 0 },
          { id: 4, opts: ['adjust', 'accept', 'ignore', 'predict'], ans: 0 },
          { id: 5, opts: ['upward', 'downward', 'left', 'inward'], ans: 0 },
          { id: 6, opts: ['long', 'short', 'medium', 'boom'], ans: 0 },
          { id: 7, opts: ['inflation', 'deflation', 'unemployment', 'growth'], ans: 0 },
          { id: 8, opts: ['vertical', 'horizontal', 'upward sloping', 'downward sloping'], ans: 0 }
        ],
        exp: '(1) <strong>Short</strong>: the trade-off is temporary. (2) <strong>Money</strong>: money illusion &#8212; workers confuse nominal with real wages initially. (3) <strong>Below</strong>: pushing below the natural rate. (4) <strong>Adjust</strong>: adaptive expectations &#8212; workers adjust their wage demands. (5) <strong>Upward</strong>: the SRPC shifts up as expectations of higher inflation become embedded. (6) <strong>Long</strong>: in the long run, there is no trade-off. (7) <strong>Inflation</strong>: only ever-accelerating inflation, not permanently lower unemployment, results. (8) <strong>Vertical</strong>: the LRPC is vertical at the NAIRU &#8212; the graphical representation of no long-run trade-off.'
      },

      /* 6 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are consistent with the <strong>1970s breakdown of the Phillips curve</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128200;', label: 'OPEC oil price quadrupling in 1973 shifted SRAS left, causing simultaneous high inflation and rising unemployment', note: '' },
          { icon: '&#128522;', label: 'Falling unemployment in the late 1960s was followed by rising wage inflation &#8212; consistent with the original Phillips curve', note: '' },
          { icon: '&#127776;', label: 'The UK experienced inflation exceeding 20% alongside unemployment above 5% in 1975 &#8212; impossible on the original downward-sloping SRPC', note: '' },
          { icon: '&#128664;', label: 'The SRPC appeared to shift upward in the 1970s as inflation expectations became de-anchored from previous low levels', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. Late 1960s low unemployment with rising wages <em>confirms</em> the original Phillips curve &#8212; it is consistent with, not evidence against, the Phillips relationship. The other three all represent the 1970s breakdown: (A) the OPEC supply shock produced stagflation &#8212; the original Phillips curve predicted this was impossible because output and price should move in opposite directions via demand; (C) high inflation alongside above-frictional unemployment &#8212; simultaneous occurrence breaks the downward-sloping relationship; (D) upward SRPC shifts from de-anchored expectations &#8212; the Friedman/Phelps adaptive expectations mechanism confirmed empirically.'
      },

      /* 7 &#8212; Data table: trade-offs in UK data */
      { type: 'data_table',
        stem: 'The table shows selected UK macro indicators during key episodes.',
        headers: ['Year', 'CPI inflation', 'Unemployment rate', 'Real GDP growth', 'Bank Rate'],
        rows: [
          ['2009', '+2.2%', '7.5%', '&#8722;4.5%', '0.5%'],
          ['2014', '+1.5%', '6.3%', '+3.1%', '0.5%'],
          ['2022', '+9.1%', '3.7%', '+4.1%', '1.0% &#8594; 3.5%'],
          ['2024', '+2.5%', '4.2%', '+0.5%', '5.25% &#8594; 4.75%']
        ],
        question: 'Which macro trade-off does the 2022-24 transition most directly illustrate?',
        opts: [
          'The growth-inflation trade-off: tightening from 3.5% to 5.25% to combat 9.1% inflation slowed growth from 4.1% to 0.5%, illustrating the BoE accepting lower growth to restore price stability',
          'The unemployment-inflation trade-off: unemployment rose from 3.7% to 4.2% while inflation fell &#8212; a movement along the short-run Phillips curve as tight monetary policy reduced both inflation and pushed up unemployment',
          'Both A and B: the tightening simultaneously illustrates the growth-inflation trade-off and a movement along the SRPC, reducing inflation at the cost of both growth and unemployment',
          'No trade-off occurred because inflation fell and unemployment only rose by 0.5pp, suggesting the tightening was costless'
        ],
        ans: 2,
        exp: 'Both A and B are correct &#8212; the 2022-24 transition illustrates multiple trade-offs simultaneously. The growth-inflation trade-off: real GDP growth fell from 4.1% to 0.5% as the BoE raised rates from 3.5% to 5.25% to combat 9.1% inflation. The Phillips curve dimension: unemployment rose from 3.7% (below NAIRU) to 4.2% as tighter policy reduced demand; inflation fell from 9.1% to 2.5% &#8212; consistent with a movement along (or a downward shift of) the SRPC. Option D is incorrect &#8212; 0.5% growth and rising unemployment are not \'costless\'; the cost of tightening was borne in lower growth and higher unemployment, even if less severe than feared.'
      },

      /* 8 &#8212; Calculation: sacrifice ratio */
      { type: 'calculation',
        context: 'The Bank of England raises Bank Rate from <strong>0.1% to 5.25%</strong> over 18 months. CPI falls from <strong>11.1% to 2.5%</strong> &#8212; a reduction of 8.6 percentage points. Real GDP growth falls from <strong>4.1% to 0.5%</strong> over the same period.',
        working: [
          'Sacrifice ratio = Output cost (% of GDP) &#247; Inflation reduction (percentage points)',
          'Output growth forgone = trend growth (2%) &#8722; actual growth (0.5%) per year = 1.5pp below trend for ~2 years',
          'Approximate cumulative output cost = 1.5% &#215; 2 years = ~3% of GDP',
          'Inflation reduction = 11.1% &#8722; 2.5% = 8.6 percentage points',
          'Sacrifice ratio &#8776; 3% &#247; 8.6pp &#8776; 0.35% of GDP per pp of inflation reduction'
        ],
        stem: 'Approximately what was the <strong>sacrifice ratio</strong> in this episode, and what does it tell us?',
        opts: [
          { ped: 'Approximately 0.35% of GDP per percentage point of inflation reduction &#8212; suggesting the disinflation was achieved at relatively low output cost compared to historical episodes', typ: 'Correctly approximates output cost at ~3% cumulative and divides by 8.6pp inflation reduction', rev: 'Sacrifice ratio = output cost % / inflation pp reduction' },
          { ped: 'Approximately 8.6: the sacrifice ratio equals the percentage point reduction in inflation', typ: 'Confused the inflation reduction with the sacrifice ratio itself', rev: 'Sacrifice ratio measures output sacrifice per unit of inflation reduction' },
          { ped: 'The sacrifice ratio cannot be calculated because the Bank Rate change is not directly comparable to the GDP figures', typ: 'Bank Rate change is context, not the input to the sacrifice ratio formula', rev: 'Sacrifice ratio uses output cost and inflation reduction, not the rate change itself' },
          { ped: 'Approximately 5.15: the difference between starting and ending Bank Rates divided by the growth fall', typ: 'Incorrectly used rate change as the numerator', rev: 'Sacrifice ratio = lost output / inflation reduction, not rate change / growth fall' }
        ],
        ans: 0,
        exp: 'Approximate output cost: UK growth at 0.5% vs trend ~2%, so ~1.5pp below trend per year &#215; 2 years = ~3% of GDP. Inflation reduction = 8.6pp. Sacrifice ratio = 3/8.6 &#8776; <strong>0.35</strong>. This is relatively low historically &#8212; past disinflation episodes (1979-83 Thatcher, Volcker tightening in US) had sacrifice ratios of 1-3. The comparatively low 2022-24 UK sacrifice ratio reflects: (a) inflation partly fell automatically as energy prices eased; (b) strong employment during the tightening. A* answers note the sacrifice ratio as a concrete evaluation tool for monetary policy effectiveness.'
      },

      /* 9 &#8212; MCQ: supply-side resolution */
      { type: 'mcq',
        stem: 'Which of the following best explains why <strong>supply-side policies</strong> can theoretically resolve the inflation-unemployment trade-off that demand management cannot?',
        opts: [
          'Supply-side policies reduce the NAIRU by addressing structural and frictional unemployment directly, allowing the economy to sustain lower unemployment without triggering inflationary pressure &#8212; shifting the LRPC left',
          'Supply-side policies raise aggregate demand, which reduces unemployment and inflation simultaneously by increasing productive output',
          'Supply-side policies work faster than monetary policy, so they can reduce unemployment before inflationary pressure builds',
          'Supply-side policies are politically popular, so the credibility gains make inflation expectations fall automatically, reducing inflation without any output cost'
        ],
        ans: 0,
        exp: 'The theoretical power of supply-side policy: by reducing the NAIRU &#8212; through better skills matching (reducing structural unemployment) or improved job search (reducing frictional) &#8212; the economy can sustain lower unemployment <em>at stable inflation</em>. This is equivalent to shifting the LRPC left, so a given inflation rate corresponds to lower unemployment. Demand management cannot do this &#8212; it moves the economy along the SRPC, trading one problem for another. Option B is incorrect &#8212; supply-side policies affect LRAS/SRAS, not AD. Option C is incorrect &#8212; supply-side policies typically have much longer time lags than monetary policy. Option D overstates the credibility mechanism.'
      },

      /* 10 &#8212; Chain: 1970s stagflation to monetarism */
      { type: 'chain',
        stem: 'Place the events in the correct order to describe how the 1970s stagflation episode led to the adoption of monetarist policy.',
        items: [
          { label: 'The 1979 Thatcher government adopted tight monetary policy, accepting deep recession to break inflationary expectations', note: '' },
          { label: 'OPEC quadrupled oil prices in 1973, causing a massive negative supply shock across all oil-importing economies', note: '' },
          { label: 'The empirical failure of the Phillips curve discredited Keynesian demand management as the dominant policy framework', note: '' },
          { label: 'Friedman\'s monetarism emerged as the new consensus: control money supply to control inflation; do not try to exploit the trade-off', note: '' },
          { label: 'SRAS shifted left across the UK economy: output fell, unemployment rose, and inflation surged &#8212; stagflation emerged', note: '' },
          { label: 'Keynesian governments attempted demand stimulus to protect output, but only worsened the inflation without resolving unemployment', note: '' }
        ],
        correctOrder: [1, 4, 5, 2, 3, 0],
        exp: '<strong>The stagflation-to-monetarism chain:</strong><br>1. OPEC oil shock (1973) &#8212; external supply shock.<br>2. SRAS shifts left &#8212; stagflation emerges.<br>3. Keynesian demand stimulus tried but fails &#8212; worsens inflation.<br>4. Phillips curve breaks down empirically &#8212; Keynesian consensus challenged.<br>5. Monetarism/Friedman becomes the new framework.<br>6. Thatcher implements tight money (1979) &#8212; deep recession but inflation broken by 1983.<br><br>This is the defining paradigm shift in modern macroeconomics. A* essays cite both the empirical failure of the Phillips curve (the positive correlation of inflation and unemployment in the 1970s) and the adaptive expectations mechanism (Friedman/Phelps) that theoretically explained why the trade-off disappeared in the long run.'
      }

    ]
  };

})();
