/* ============================================================
   ECONOS — Quiz content for: Trade Cycle, Shocks & Economic Growth
   10 questions covering the four trade cycle phases, demand and
   supply shocks, leading indicators, costs/benefits of growth.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'growth_cycle_main',
    topicId:  'growth_cycle_main',
    title:    'Trade Cycle, Shocks &amp; Economic Growth',
    subtitle: 'Theme 2.5.2 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the four phases of the trade cycle, demand-side and supply-side shocks and their macro effects, leading versus lagging indicators, the multiplier-accelerator interaction, costs and benefits of economic growth, and sustainable growth debates. Designed to develop the applied analysis and evaluation skills Paper 2 rewards.',
    shortNames: {
      'trade-cycle-phases':       'Four phases',
      'demand-shocks':            'Demand shocks',
      'supply-shocks':            'Supply shocks',
      'growth-impact':            'Costs and benefits',
      'indicators':               'Leading indicators',
      'growth-causes-revisited':  'Demand vs supply-led growth',
      'growth-objectives':        'Growth and macro objectives'
    },

    questions: [

      /* 1 &#8212; Elastic sort: four phases */
      { type: 'elastic_sort',
        stem: 'Match each characteristic to the correct <strong>trade cycle phase</strong>.',
        categories: ['boom', 'down', 'rec', 'rec2'],
        categoryLabels: ['Boom (peak)', 'Downturn', 'Recession (trough)', 'Recovery'],
        goods: [
          { icon: '&#128200;', label: 'Real GDP growth above trend; CPI rising above target; unemployment below NAIRU', note: '', ans: 'boom' },
          { icon: '&#127917;', label: 'Investment falls first as animal spirits collapse; consumer confidence begins to weaken', note: '', ans: 'down' },
          { icon: '&#128522;', label: 'Negative output gap; two or more consecutive quarters of falling GDP; unemployment rising', note: '', ans: 'rec' },
          { icon: '&#128225;', label: 'Spare capacity absorbed; unemployment falling; PMI above 50; inflation begins rising', note: '', ans: 'rec2' },
          { icon: '&#128176;', label: 'Positive output gap; imports surge; wages accelerating; risk of monetary tightening', note: '', ans: 'boom' },
          { icon: '&#128200;', label: 'Businesses announce redundancies; PMI falls below 50; house price growth turns negative', note: '', ans: 'down' }
        ],
        exp: '<strong>Boom</strong>: output above potential, positive output gap, inflation risk, unemployment below NAIRU. <strong>Downturn</strong>: investment falls first (leading indicator), confidence weakens &#8212; the turning point is visible in PMI and business surveys before GDP data. <strong>Recession</strong>: officially two consecutive quarters of negative real GDP growth; large negative output gap; unemployment rising. <strong>Recovery</strong>: growth returning, spare capacity absorbed, leading indicators turn positive. Investment leads, consumption follows with a lag &#8212; an A* insight about the timing of each component.'
      },

      /* 2 &#8212; MCQ: demand shock signature */
      { type: 'mcq',
        stem: 'A major financial crisis causes a sudden collapse in business and consumer confidence. In the AD/AS model, what is the <strong>macroeconomic signature</strong> of this demand-side shock?',
        opts: [
          'AD shifts left; output and the price level both fall &#8212; low inflation or deflationary pressure alongside rising unemployment',
          'SRAS shifts left; output falls but the price level rises &#8212; stagflation with rising unemployment and rising inflation simultaneously',
          'LRAS shifts left; potential output falls permanently, requiring supply-side reform to restore',
          'AD shifts right; output rises and the price level rises &#8212; demand-pull inflation with falling unemployment'
        ],
        ans: 0,
        exp: 'The key analytical signature of a <strong>demand-side shock</strong>: output and price level <em>move in the same direction</em>. AD falls left &#8594; output falls (unemployment rises) AND price level falls (or stays low). This is the opposite of a supply shock, where output and price move in opposite directions. The 2008-09 crisis is the textbook example: AD collapsed via the credit crunch, driving UK GDP down 5% and inflation toward zero. Option B describes a supply shock (stagflation). Option C describes a permanent supply-side failure. Option D is a positive demand shock. Knowing the AD vs AS shock signature instantly organises any macro scenario question.'
      },

      /* 3 &#8212; Diagnostic pair: growth evaluation */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the view that economic growth always improves living standards."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Kezia', badge: 'Candidate A',
            answer: 'Economic growth (rising real GDP) generally improves material living standards through higher average incomes, greater tax revenues for public services, and lower unemployment. Historically, growth has correlated with improvements in life expectancy, child mortality, and literacy &#8212; supporting the view. <strong>However, \'always\' is too strong.</strong> Four counterarguments are critical. First, distribution: UK GDP grew throughout 2010-19 but median real wages stagnated &#8212; average growth concealed distributional divergence. The Gini coefficient is a better welfare measure than per capita GDP. Second, environmental sustainability: GDP growth historically correlates with CO₂ emissions &#8212; the Environmental Kuznets Curve suggests only local pollutants eventually fall with income; global carbon emissions are harder to decouple. Third, composition: military spending and oil-spill clean-up both count in GDP but do not improve welfare. Fourth, Easterlin paradox: despite decades of real income growth in the UK, ONS life satisfaction scores have shown no long-run upward trend. The type of growth matters: export-led and investment-led growth is more likely to improve welfare broadly than consumption-led growth financed by unsustainable debt.'
          },
          { name: 'Dan', badge: 'Candidate B',
            answer: 'Economic growth improves living standards because higher GDP means more goods and services are available for people to consume. Governments can also collect more tax and spend more on public services like the NHS and education. However, growth does not always improve living standards. If growth comes with higher inequality, some people may not benefit. Also, if growth causes environmental damage like pollution, this reduces wellbeing for some people. Another issue is that GDP does not measure everything &#8212; it doesn\'t include leisure time or happiness. So while growth usually improves living standards, it depends on who benefits and whether it causes negative side effects.'
          }
        ],
        ans: 0,
        exp: '<strong>Kezia</strong> gives the stronger answer. She opens by acknowledging the validity of the view before systematically challenging the word \'always\' &#8212; the analytical move examiners look for. She provides four distinct counterarguments with specific evidence: 2010-19 wage stagnation data, the Kuznets environmental distinction (local vs CO₂), composition issue with specific examples (oil-spill), and the Easterlin paradox. She concludes by distinguishing types of growth. Dan makes the same core points but without named economists, without specific data, without the type-of-growth distinction, and with only vague \'some people\' framing. The systematic evidence-based structure is the A* hallmark.'
      },

      /* 4 &#8212; Para fill: supply shock policy dilemma */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the policy dilemma from a negative supply shock.',
        anchor: 'A negative supply shock creates the hardest macroeconomic policy problem.',
        para: 'When a negative supply shock causes SRAS to shift [1], the economy simultaneously faces [2] output and [3] inflation &#8212; a condition known as [4]. If the central bank [5] interest rates to fight inflation, the fall in AD will worsen the [6] and raise unemployment further. If instead it [7] rates to protect output, inflation worsens. The only policy that can address both problems simultaneously is a [8] shift, such as energy subsidies or productivity improvements, but these take time to implement.'
        ,
        blanks: [
          { id: 1, opts: ['left', 'right', 'inward', 'outward'], ans: 0 },
          { id: 2, opts: ['falling', 'rising', 'stable', 'potential'], ans: 0 },
          { id: 3, opts: ['rising', 'falling', 'target', 'stable'], ans: 0 },
          { id: 4, opts: ['stagflation', 'disinflation', 'deflation', 'hysteresis'], ans: 0 },
          { id: 5, opts: ['raises', 'cuts', 'holds', 'targets'], ans: 0 },
          { id: 6, opts: ['output gap', 'inflation gap', 'trade deficit', 'fiscal deficit'], ans: 0 },
          { id: 7, opts: ['cuts', 'raises', 'holds', 'removes'], ans: 0 },
          { id: 8, opts: ['supply-side', 'demand-side', 'fiscal', 'monetary'], ans: 0 }
        ],
        exp: '(1) <strong>Left</strong>: leftward SRAS shift &#8212; higher costs at each output level. (2) <strong>Falling</strong>: output falls as costs rise. (3) <strong>Rising</strong>: inflation rises as prices increase with costs. (4) <strong>Stagflation</strong>: the simultaneous rise in inflation and unemployment. (5) <strong>Raises</strong>: tightening fights inflation. (6) <strong>Output gap</strong>: tightening deepens the negative output gap. (7) <strong>Cuts</strong>: easing protects output. (8) <strong>Supply-side</strong>: only supply-side interventions (SRAS shifting right) can reduce costs while raising output, addressing both problems. The 2022 UK episode &#8212; energy subsidies (energy price guarantee) acting alongside rate rises &#8212; was an attempt to use both tools.'
      },

      /* 5 &#8212; Multi-select: leading indicators */
      { type: 'multi_select',
        stem: 'Which of the following are <strong>leading indicators</strong> of the trade cycle &#8212; data that changes <em>before</em> GDP moves?',
        opts: [
          'Purchasing Managers Index (PMI) &#8212; business confidence and order book data',
          'The unemployment rate &#8212; reported monthly by the ONS',
          'Consumer confidence surveys &#8212; forward-looking spending intentions',
          'The shape of the yield curve &#8212; inverted curve historically predicts recession',
          'GDP growth data &#8212; the quarterly national accounts estimate',
          'Business investment announcements and capital expenditure plans'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Leading indicators: PMI (changes 1-3 months before GDP), consumer confidence surveys (forward-looking), the yield curve (inverted curve has predicted all post-war US recessions, with 6-18 month lead), and business investment announcements. <strong>Lagging indicators</strong>: unemployment (firms wait to hire/fire until recovery is confirmed &#8212; peaks after GDP trough); GDP data itself (published with delay, reflects past activity). A* answers explain the timing asymmetry: policymakers use leading indicators to anticipate the cycle, but cannot respond until lagging data confirms the diagnosis &#8212; contributing to policy lags.'
      },

      /* 6 &#8212; MCQ: Okun's Law */
      { type: 'mcq',
        stem: '<strong>Okun\'s Law</strong> states that approximately 2% of GDP growth above trend reduces unemployment by about 1 percentage point. If UK trend growth is 2% and actual growth is 4% (2% above trend), what does Okun\'s Law predict?',
        opts: [
          'Unemployment falls by approximately 1 percentage point as the output gap closes and spare capacity is absorbed',
          'Unemployment falls by approximately 2 percentage points because 4% growth directly matches the unemployment rate',
          'Unemployment is unchanged because Okun\'s Law only applies to economies near full employment',
          'Unemployment rises by 1 percentage point because above-trend growth causes inflationary pressure that leads firms to cut jobs'
        ],
        ans: 0,
        exp: 'Okun\'s Law: ~2% above-trend growth &#8594; ~1pp fall in unemployment. With actual growth at 4% and trend at 2%, growth is 2pp above trend &#8594; unemployment falls by approximately <strong>1 percentage point</strong>. This is the empirical relationship between GDP and labour market absorption. A* answers note the caveats: (1) Okun\'s Law is an approximation &#8212; the coefficient varies across cycles; (2) \'jobless growth\' (capital-intensive, technology-replacing) can occur &#8212; GDP rises without proportionate job creation; (3) structural unemployment can persist alongside GDP growth if skills mismatch is severe.'
      },

      /* 7 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are potential <strong>costs of economic growth</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127807;', label: 'Environmental degradation: growth historically correlates with rising CO&#x2082; emissions and resource depletion', note: '' },
          { icon: '&#128200;', label: 'Rising tax revenues as national income grows, providing governments with greater fiscal capacity for public services', note: '' },
          { icon: '&#9878;', label: 'Inequality: early-stage growth typically worsens income distribution as the Kuznets curve predicts', note: '' },
          { icon: '&#9203;', label: 'Structural change: growth driven by new industries creates transitional unemployment as old industries decline', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. Rising tax revenues are a <strong>benefit</strong> of economic growth &#8212; they give governments more fiscal space for public services, infrastructure, and welfare without raising tax rates. This is precisely one of the arguments in favour of prioritising growth. The other three are genuine costs: (A) environmental impact &#8212; the growth-carbon tension central to modern policy debates; (C) inequality &#8212; the Kuznets curve\'s rising phase; (D) transitional unemployment &#8212; structural change creates winners and losers even when the economy overall gains.'
      },

      /* 8 &#8212; Data table: UK growth performance */
      { type: 'data_table',
        stem: 'The table shows UK economic growth performance across different periods.',
        headers: ['Period', 'Average real GDP growth', 'Key characteristics'],
        rows: [
          ['1950&#8211;1973', '~3.0%/year', 'Post-war reconstruction; Keynesian demand management; full employment'],
          ['1980&#8211;2007', '~2.5%/year', 'Thatcher supply-side reforms; financial deregulation; EU single market'],
          ['2008&#8211;2019', '~1.5%/year', 'Financial crisis legacy; austerity; Brexit uncertainty; productivity stagnation'],
          ['2020&#8211;2024', '~0.5%/year', 'COVID shock; energy crisis; cost of living squeeze; post-Brexit adjustment']
        ],
        question: 'Which evaluation of UK growth performance across these periods is most analytically strong?',
        opts: [
          'UK trend growth has successively declined across periods, with the productivity puzzle (stagnant output per worker since 2008) as the deepest structural explanation, suggesting demand management alone cannot restore growth without supply-side improvement',
          'The post-2008 period shows that Keynesian demand management has failed completely and that the UK needs only supply-side reforms to return to 1950s growth rates',
          'The 1980-2007 period proves that market-based supply-side reforms are definitively superior to Keynesian demand management for achieving sustainable growth',
          'The data shows that growth depends primarily on global conditions outside UK control, making domestic policy interventions largely irrelevant'
        ],
        ans: 0,
        exp: 'The data shows a declining trend in UK average growth across periods. The post-2008 period (~1.5%) and post-2020 period (~0.5%) represent significant underperformance relative to the UK\'s historical trend (~2-2.5%). The productivity puzzle &#8212; output per worker growing at only ~0.3%/year since 2008 vs ~2%/year before &#8212; is the deepest structural explanation, suggesting the supply-side capacity to convert AD into non-inflationary growth has weakened. Option B and C make dogmatic claims about policy approaches that the data cannot fully support. Option D dismisses domestic policy excessively &#8212; productivity, investment, and Brexit are partly within policy control.'
      },

      /* 9 &#8212; MCQ: Environmental Kuznets Curve */
      { type: 'mcq',
        stem: 'The <strong>Environmental Kuznets Curve (EKC)</strong> predicts that pollution first rises then falls as income grows. Which statement best evaluates this relationship?',
        opts: [
          'The EKC is supported for some local pollutants (SO&#x2082;, PM2.5) as countries invest in cleaner technology at higher incomes, but there is weak or no evidence of the falling phase for CO&#x2082; &#8212; suggesting the EKC does not resolve the climate change challenge without deliberate carbon pricing',
          'The EKC is strongly confirmed for all pollutants including CO&#x2082; &#8212; countries simply need to focus on achieving higher income and environmental improvement will follow automatically',
          'The EKC proves that economic growth and environmental sustainability are always compatible, making explicit climate policy unnecessary',
          'The EKC does not apply to high-income countries because they have already passed the environmental turning point and can only improve their environmental records going forward'
        ],
        ans: 0,
        exp: 'The EKC has <strong>mixed evidence</strong>: it works reasonably well for local air and water pollutants (SO&#x2082;, particulates) where richer countries invest in abatement technology. But CO&#x2082; and greenhouse gas emissions do not clearly follow the EKC &#8212; high-income countries remain the largest per-capita emitters. This distinction is the A* analytical point: the EKC may \'work\' for problems where the costs are locally borne (clean local air) but not for global public goods (stable climate) where the externality is diffuse and market mechanisms fail. Without explicit carbon pricing or regulation, growth cannot be assumed to solve climate change.'
      },

      /* 10 &#8212; Chain: from recession to recovery */
      { type: 'chain',
        stem: 'Place the events in the correct order to describe a complete <strong>demand-led recession and recovery</strong> cycle.',
        items: [
          { label: 'Confidence recovers; investment rises (accelerator) as firms anticipate growing demand', note: '' },
          { label: 'A financial crisis triggers a credit crunch; consumer and business confidence collapses', note: '' },
          { label: 'Automatic stabilisers activate: tax revenues fall, welfare spending rises, cushioning the income decline', note: '' },
          { label: 'The Bank of England cuts rates and the government launches fiscal stimulus; AD shifts right', note: '' },
          { label: 'GDP falls; unemployment rises; a negative output gap opens; deflationary pressure builds', note: '' },
          { label: 'Recovery: output returns towards potential; unemployment falls; inflation edges back to target', note: '' }
        ],
        correctOrder: [1, 4, 2, 3, 0, 5],
        exp: '<strong>Recession and recovery cycle:</strong><br>1. Financial crisis &#8212; confidence collapses.<br>2. GDP falls; negative output gap; unemployment rises.<br>3. Automatic stabilisers activate &#8212; the first line of defence.<br>4. Discretionary policy response: rate cuts + fiscal stimulus.<br>5. Investment recovers (accelerator) as confidence returns.<br>6. Full recovery &#8212; output closes the gap.<br><br>The 2008-09 UK episode followed this pattern closely: banking crisis &#8594; GDP -5% &#8594; automatic stabilisers &#8594; BoE cuts to 0.5% + QE + fiscal stimulus &#8594; slow investment recovery (took until 2013 to close the output gap). A* essays name each mechanism explicitly and cite the policy time lags as the reason recovery was slower than the Classical model predicted.'
      }

    ]
  };

})();
