/* ============================================================
   ECONOS — Quiz content for: Supply-Side Policies
   10 questions covering market-based vs interventionist tools,
   UK productivity puzzle, NAIRU, and evaluation framework.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'supply_side_main',
    topicId:  'supply_side_main',
    title:    'Supply-Side Policies',
    subtitle: 'Theme 2.7 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-quality questions covering market-based and interventionist supply-side policies, the Laffer curve, UK privatisation, the productivity puzzle, the NAIRU reduction mechanism, and the evaluation framework for supply-side essays. The mix of formats develops the analytical precision that distinguishes A* answers in Paper 2 macro essays.',
    shortNames: {
      'ss-framing':       'What supply-side does',
      'market-based':     'Market-based approach',
      'interventionist':  'Interventionist approach',
      'productivity-puzzle': 'Productivity puzzle',
      'ss-comparison':    'Market vs interventionist',
      'ss-nairu':         'Supply-side and NAIRU',
      'ss-evaluation':    'Evaluation'
    },

    questions: [

      /* 1 &#8212; MCQ: LRAS vs SRAS distinction */
      { type: 'mcq',
        stem: 'A government introduces a new apprenticeship programme funded by a levy on large employers. In the AD/AS framework, what is the <strong>primary long-run effect</strong>?',
        opts: [
          'LRAS shifts rightward as human capital improves, raising potential output and reducing the NAIRU &#8212; enabling lower unemployment without accelerating inflation',
          'SRAS shifts rightward immediately as firms face lower short-run labour costs from apprentice wage rates',
          'AD shifts rightward because government and employer spending on training is a direct injection into the circular flow',
          'The price level falls immediately as firms\' wage costs decline, shifting SRAS right within months of implementation'
        ],
        ans: 0,
        exp: 'An apprenticeship programme is an <strong>interventionist supply-side policy</strong> &#8212; it builds human capital over years, shifting <strong>LRAS</strong> rightward. Potential output rises and the NAIRU falls (structural unemployment from skills mismatch is reduced). This is the theoretical case for supply-side investment: it raises the productive ceiling of the economy without inflationary pressure. Option B conflates the LRAS effect with a short-run cost reduction. Option C is technically partially true (the training spending adds to AD in the short run) but misses the primary long-run supply-side objective. Option D is wrong &#8212; the SRAS effect of any wage cost reduction from apprentices is minimal and temporary; the skill-building effect is the real mechanism.'
      },

      /* 2 &#8212; Elastic sort: market-based vs interventionist */
      { type: 'elastic_sort',
        stem: 'Classify each policy as <strong>market-based</strong> or <strong>interventionist</strong> supply-side.',
        categories: ['market', 'interventionist'],
        categoryLabels: ['Market-based', 'Interventionist'],
        goods: [
          { icon: '&#127981;', label: 'Privatisation of British Telecom &#8212; transferring a state monopoly to private ownership to gain efficiency through profit motive and competition', note: '', ans: 'market' },
          { icon: '&#128218;', label: 'Government funding of university R&D on green technology &#8212; correcting underinvestment where private firms cannot capture all returns', note: '', ans: 'interventionist' },
          { icon: '&#128176;', label: 'Reducing the top rate of income tax from 50% to 45% to improve work incentives for high earners', note: '', ans: 'market' },
          { icon: '&#128664;', label: 'A &#163;40bn infrastructure investment programme in Northern England to reduce regional productivity gaps', note: '', ans: 'interventionist' },
          { icon: '&#127891;', label: 'Skills Bootcamps retraining unemployed workers in digital and engineering skills, funded by the DfE', note: '', ans: 'interventionist' },
          { icon: '&#9878;',  label: 'Reducing trade union powers and requiring secret ballots before strike action to increase labour market flexibility', note: '', ans: 'market' }
        ],
        exp: '<strong>Market-based</strong> policies remove barriers to market efficiency: privatisation, tax cuts to improve incentives, deregulation and union reform. The philosophy: government intervention distorts resource allocation &#8212; remove the distortions and markets optimise. <strong>Interventionist</strong> policies address market failures: public goods, positive externalities (education, R&D), and infrastructure where private provision is below optimal. The key insight: <em>both</em> categories aim to shift LRAS right &#8212; they differ in means, not ends. Presenting supply-side as only market-based is an A-level misconception; the best answers recognise both approaches and evaluate which applies in the given context.'
      },

      /* 3 &#8212; Para fill: Laffer curve */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the Laffer curve and the case for tax cuts as supply-side policy.',
        anchor: 'The Laffer curve is the central theoretical argument for market-based tax reform.',
        para: 'The Laffer curve argues that as tax rates rise from 0% to 100%, tax [1] first rises then falls &#8212; because at very high rates, individuals choose to [2] or avoid working. The optimal rate maximises tax revenue; above it, rate cuts can actually [3] total revenue. The UK top rate was cut from 83% to [4] by the Thatcher government in 1979 &#8212; partly justified by the Laffer logic. However, empirical evidence that the UK is on the [5] of the Laffer curve (where cuts raise revenue) is weak &#8212; most economists estimate the revenue-maximising rate is above current UK [6] rates. A* answers cite the curve but note that [7] effects dominate only at very high rates not typically seen in modern UK tax policy.',
        blanks: [
          { id: 1, opts: ['revenue', 'rates', 'burden', 'evasion'], ans: 0 },
          { id: 2, opts: ['work less', 'work more', 'save less', 'invest more'], ans: 0 },
          { id: 3, opts: ['increase', 'reduce', 'stabilise', 'eliminate'], ans: 0 },
          { id: 4, opts: ['40%', '45%', '50%', '60%'], ans: 0 },
          { id: 5, opts: ['downward slope', 'upward slope', 'turning point', 'flat section'], ans: 0 },
          { id: 6, opts: ['marginal', 'average', 'effective', 'nominal'], ans: 0 },
          { id: 7, opts: ['incentive', 'revenue', 'distributional', 'fiscal'], ans: 0 }
        ],
        exp: '(1) <strong>Revenue</strong>: the relationship being described is between the tax rate and total tax collected. (2) <strong>Work less</strong>: at high rates, the substitution effect (leisure vs work) dominates, reducing labour supply. (3) <strong>Increase</strong>: the supply-side argument that cuts pay for themselves. (4) <strong>40%</strong>: the top rate fell from 83% to 40% under Thatcher (with an intermediate cut to 60%). (5) <strong>Downward slope</strong>: the slope where the rate is above the optimum and revenue falls as rates rise. (6) <strong>Marginal</strong>: the UK 45% additional rate &#8212; debate centres on whether this is above the Laffer peak. (7) <strong>Incentive</strong>: behavioural responses (work less, evade, emigrate) only dominate revenue effects at very high rates.'
      },

      /* 4 &#8212; Multi-select: reducing the NAIRU */
      { type: 'multi_select',
        stem: 'Which of the following supply-side policies would most directly <strong>reduce the NAIRU</strong> &#8212; enabling lower unemployment without accelerating inflation?',
        opts: [
          'Government investment in retraining programmes that reduce skills mismatch between unemployed workers and available vacancies',
          'The Bank of England cuts Bank Rate to stimulate consumer spending and business investment',
          'Better job-matching services (Universal Jobmatch, Skills Bootcamps) that reduce the time workers spend between jobs',
          'A large increase in government current spending on public sector wages, raising AD and employment in the short run',
          'Expansion of subsidised childcare, enabling more parents (particularly mothers) to enter the labour market',
          'Active immigration policy that brings in workers with skills in occupations facing shortages'
        ],
        correct: [0, 2, 4, 5],
        exp: 'The NAIRU is determined by <strong>structural and frictional unemployment</strong>, not cyclical unemployment. Policies that reduce it permanently: (A) retraining reduces structural unemployment (skills mismatch &#8212; the largest component of the UK NAIRU). (C) job-matching services reduce frictional unemployment by speeding up search. (E) childcare expansion raises labour force participation, reducing the NAIRU and increasing labour supply. (F) targeted immigration fills skill gaps, reducing structural mismatches immediately. Options B (Bank Rate cut) and D (G increase) are demand-side tools that reduce cyclical unemployment below the NAIRU &#8212; they do not shift the NAIRU itself. Using them to push unemployment below the NAIRU only works temporarily and accelerates inflation &#8212; the Phillips curve mechanism.'
      },

      /* 5 &#8212; Odd one out: interventionist supply-side */
      { type: 'odd_one_out',
        stem: 'Three of the following are <strong>interventionist supply-side policies</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128218;', label: 'Government subsidies for university research into battery technology, correcting private underinvestment in basic R&D', note: '' },
          { icon: '&#127758;', label: 'Deregulation of the financial services sector to reduce compliance costs and improve allocative efficiency', note: '' },
          { icon: '&#128664;', label: 'Public investment in HS2 rail infrastructure to reduce transport costs and improve regional connectivity', note: '' },
          { icon: '&#127891;', label: 'Free universal childcare for all under-5s to increase female labour force participation and reduce the NAIRU', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. Financial sector deregulation is a classic <strong>market-based</strong> supply-side policy &#8212; removing regulatory barriers to allow markets to allocate resources more efficiently. The market-based philosophy underpins this: regulation distorts market prices and imposes costs without proportionate benefits; remove the barriers and market efficiency improves. Options A (R&D subsidy to correct positive externalities), C (infrastructure investment addressing public goods underprovision), and D (universal childcare expanding labour supply) are all interventionist &#8212; they involve government spending or provision to address market failures. The distinction matters because the two approaches have different ideological foundations, different time horizons, and different distributional consequences.'
      },

      /* 6 &#8212; Data table: UK productivity vs G7 */
      { type: 'data_table',
        stem: 'The table shows labour productivity growth (output per hour, % annual average) across G7 economies.',
        headers: ['Country', '1990&#8211;2007', '2008&#8211;2019', 'Change'],
        rows: [
          ['UK', '+2.1%', '+0.3%', '&#8722;1.8pp'],
          ['Germany', '+1.8%', '+0.9%', '&#8722;0.9pp'],
          ['USA', '+2.4%', '+1.1%', '&#8722;1.3pp'],
          ['France', '+1.7%', '+0.7%', '&#8722;1.0pp'],
          ['Japan', '+2.0%', '+0.8%', '&#8722;1.2pp']
        ],
        question: 'Which evaluation of the data is most analytically rigorous?',
        opts: [
          'The UK\'s productivity slowdown (&#8722;1.8pp) is the largest in the G7 &#8212; suggesting UK-specific structural factors beyond the global post-GFC slowdown, such as business investment undershoot, Brexit uncertainty, or policy failure',
          'All G7 economies show declining productivity, so the UK\'s performance is unremarkable and no specific policy response is needed',
          'The data proves that market-based supply-side reforms (such as those in the UK since the 1980s) are definitively inferior to interventionist models',
          'Germany\'s stronger performance (&#8722;0.9pp decline) shows that only manufacturing economies can maintain productivity growth'
        ],
        ans: 0,
        exp: 'The data shows a global productivity slowdown post-2008 &#8212; all G7 economies experienced a decline. However, the UK\'s fall of &#8722;1.8pp is the <strong>largest</strong> among the five countries shown, suggesting UK-specific factors beyond the common global slowdown. Possible UK-specific causes: chronically low business investment (lowest G7 ratio), post-2016 Brexit uncertainty, financial sector dominance with lower productivity spillovers, and underinvestment in infrastructure/education vs Germany. Option B is wrong &#8212; the fact that all economies slowed does not mean the UK\'s relative underperformance is acceptable or lacks explanation. Option C makes an ideological claim the data cannot support. Option D confuses manufacturing intensity with productivity growth capacity.'
      },

      /* 7 &#8212; multi_select: evaluation of market-based supply-side policies */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>whether market-based supply-side policies can solve the UK productivity puzzle</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Market-based supply-side policies such as corporation tax cuts and deregulation aim to improve allocative efficiency by removing distortions',
          'The UK productivity puzzle &#8212; output per worker growing at only ~0.3%/year since 2008 versus ~2%/year pre-2008 &#8212; has multiple structural causes including skills mismatch and chronically low business investment; market-based policies address incentives but cannot directly correct these market failures, suggesting interventionist supply-side investment is needed as a complement',
          'Corporation tax cuts automatically raise productivity by incentivising firms to invest more',
          'Market-based supply-side policies are ineffective because only government intervention can raise productivity',
          'Whether market-based or interventionist supply-side tools are more appropriate depends on the binding constraint: where the problem is market distortion (excessive regulation, tax wedges), market-based reform is the right tool; where the problem is market failure (underinvestment in education, R&amp;D, infrastructure), interventionist spending is needed &#8212; and the UK productivity evidence points disproportionately to the latter',
          'Supply-side policies take a long time to affect LRAS &#8212; the 10&#8211;20 year time lag for education investment and the multi-year lag for infrastructure spending mean market-based tools that work through incentive changes are likely to show results sooner, giving them a short-run advantage even if their long-run impact is smaller'
        ],
        correct: [1, 4, 5],
        exp: '<strong>Option B (index 1)</strong> is strong evaluation: it uses specific data (0.3% vs 2%/year) and identifies named structural causes to argue that market-based policies are insufficient as a stand-alone solution, reaching a directional conclusion (interventionist complement needed) that is conditional on the evidence. <strong>Option E</strong> is strong evaluation: it identifies the critical analytical distinction between market distortion (the domain of market-based tools) and market failure (the domain of interventionist tools), applies it to the UK productivity context with a directional verdict &#8212; this is the sophisticated evaluative move that earns Level 4. <strong>Option F</strong> is strong evaluation: it identifies time lags as a differentiating factor between the two policy approaches and draws a directional comparative conclusion &#8212; market-based tools show results sooner, even if their long-run impact differs. This is a nuanced weighing of competing criteria. <strong>Option A</strong> is a distractor: it describes the aim of market-based policies without evaluating whether those aims are achieved in the UK context or under what conditions. <strong>Option C</strong> is a distractor: an overclaim that ignores the conditions under which corporation tax cuts affect investment (animal spirits, capacity utilisation, credit availability) and assumes automatic causation. <strong>Option D</strong> is a distractor: a one-sided assertion that market-based policies are always ineffective &#8212; an overclaim in the opposite direction with no evidence, conditions, or qualification.'
      },

      /* 8 &#8212; MCQ: time lags evaluation */
      { type: 'mcq',
        stem: 'A student writes: <em>"Education spending is the most effective supply-side policy because it raises human capital, reduces the NAIRU, and shifts LRAS right."</em> Which evaluation best addresses the <strong>key limitation</strong> of this argument?',
        opts: [
          'Education is potentially the most effective supply-side tool in theory, but the 10&#8211;20 year time lag before effects materialise means it cannot address short-run demand shocks &#8212; making it the long-run answer but not the short-run stabilisation tool',
          'Education spending does not shift LRAS; it only shifts AD because it is a form of government spending that adds directly to aggregate demand',
          'Education is ineffective as a supply-side tool because the private sector already provides sufficient training, making government intervention unnecessary',
          'The NAIRU cannot be reduced by education spending because structural unemployment is determined entirely by the rate of technological change, not skills mismatch'
        ],
        ans: 0,
        exp: 'The key limitation of education as a supply-side tool is the <strong>time lag</strong>: 10&#8211;20 years for a young person in school today to reach their productivity peak in work. This makes education investment the correct <em>long-run</em> answer but an ineffective response to current cyclical shocks. The student\'s argument is theoretically correct &#8212; the mechanism (human capital → productivity → LRAS right → NAIRU lower) is valid. But the qualification is essential: in the short run, demand management remains the primary stabilisation tool while supply-side reform builds over decades. Option B confuses the supply-side LRAS effect with the short-run AD effect of spending &#8212; both exist, but the LRAS effect is the primary objective. Option C ignores market failure in human capital (positive externalities, information failures).'
      },

      /* 9 &#8212; Calculation: output per worker */
      { type: 'calculation',
        context: 'A UK firm employs <strong>200 workers</strong> and produces &#163;<strong>6,000,000</strong> of output per year. After a government-funded retraining programme, the same 200 workers produce &#163;<strong>7,200,000</strong> per year.',
        working: [
          'Output per worker (before) = &#163;6,000,000 &#247; 200 = &#163;30,000',
          'Output per worker (after) = &#163;7,200,000 &#247; 200 = &#163;36,000',
          'Productivity increase = (36,000 &#8722; 30,000) &#247; 30,000 &#215; 100 = 20%',
          'Supply-side implication: if replicated economy-wide, LRAS shifts right',
          'Wage implication: 20% productivity gain allows 20% real wage rise without cost-push inflation'
        ],
        stem: 'Calculate the percentage increase in labour productivity. What is the supply-side significance?',
        opts: [
          { ped: '20% increase in labour productivity; real wages can rise by 20% without cost-push inflation, as higher productivity offsets wage cost increases &#8212; and LRAS shifts right if replicated economy-wide', typ: 'Correctly calculates (36,000&#8722;30,000)/30,000 = 20% and identifies wage-inflation implication', rev: 'Output per worker: before = &#163;30,000, after = &#163;36,000; % change = (36,000&#8722;30,000)/30,000 &#215; 100' },
          { ped: '&#163;1,200,000 increase in total output; this is the multiplier effect of the government retraining programme', typ: 'Calculates absolute increase in output but not the productivity percentage', rev: 'Productivity is output per worker, expressed as a percentage change' },
          { ped: '12% increase; divide the &#163;1.2m increase by the total &#163;7.2m post-retraining output', typ: 'Divided by the post-retraining output instead of the pre-retraining baseline', rev: 'Percentage change = (new &#8722; old) &#247; old &#215; 100' },
          { ped: '200% increase; 200 workers produce &#163;1.2m more, so each worker produces 200% more', typ: 'Confused the number of workers with the percentage increase', rev: 'Percentage change = (36,000 &#8722; 30,000) &#247; 30,000 &#215; 100 = 20%' }
        ],
        ans: 0,
        exp: 'Output per worker rises from &#163;30,000 to &#163;36,000 &#8212; a <strong>20% increase in labour productivity</strong>. The supply-side significance: (1) if replicated across the economy, LRAS shifts rightward &#8212; potential output rises; (2) crucially, a 20% productivity gain means firms can pay workers 20% more in real wages without any increase in unit labour costs &#8212; no cost-push inflation. This is the mechanism by which productivity growth resolves the inflation&#8212;unemployment trade-off. The UK productivity puzzle &#8212; only ~0.3% annual growth since 2008 &#8212; means real wage growth has also stagnated, directly linking supply-side performance to living standards.'
      },

      /* 10 &#8212; Chain: supply-side to NAIRU reduction */
      { type: 'chain',
        stem: 'A government invests in a national retraining programme for long-term unemployed workers. Place the events in the correct causal order.',
        items: [
          { label: 'LRAS shifts rightward as potential output rises and the productive capacity of the labour force expands', note: '' },
          { label: 'Structural unemployment falls as previously unemployed workers fill vacancies that previously went unfilled due to skills mismatch', note: '' },
          { label: 'The government funds retraining courses, matching unemployed workers to skill shortages in growing sectors (e.g. green energy, digital)', note: '' },
          { label: 'The NAIRU falls &#8212; the economy can now sustain a lower unemployment rate without triggering wage inflation', note: '' },
          { label: 'Newly skilled workers find employment, raising their productivity and contributing to firm output', note: '' },
          { label: 'Firms in shortage sectors can now expand production without bidding up wages excessively for scarce skilled workers', note: '' }
        ],
        correctOrder: [2, 4, 1, 5, 3, 0],
        exp: '<strong>Supply-side NAIRU reduction chain:</strong><br>1. Government funds retraining targeting skill shortages.<br>2. Unemployed workers acquire new skills and find employment.<br>3. Structural unemployment falls &#8212; skills mismatch reduced.<br>4. Firms can expand without excessive wage bidding &#8212; cost-push pressure falls.<br>5. NAIRU falls &#8212; economy can run at permanently lower unemployment without accelerating inflation.<br>6. LRAS shifts right &#8212; potential output is higher.<br><br>This chain is the A* analytical move for any trade-off question: the supply-side resolves the inflation&#8212;unemployment conflict <em>permanently</em>, but with long time lags. The evaluation: the retraining chain takes 2&#8211;5 years; education takes 10&#8211;20 years. In the short run, the NAIRU still constrains demand management &#8212; supply-side is the long-run solution, not the short-run stabiliser.'
      }

    ]
  };

})();
