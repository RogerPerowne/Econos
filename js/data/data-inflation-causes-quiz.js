/* ============================================================
   ECONOS — Quiz content for: Causes of Inflation & Deflation
   10 questions covering all 12 engine types (representative subset).
   Questions adapted from the canonical Wycombe set; SVGs recoloured
   to the econos palette.
   ============================================================ */

(function () {

  // AD/AS diagram — econos palette (ink, blue, green, amber)
  var ADAS_SVG =
    '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif">' +
    '<line x1="55" y1="20" x2="55" y2="280" stroke="#0B1426" stroke-width="2"/>' +
    '<line x1="55" y1="280" x2="400" y2="280" stroke="#0B1426" stroke-width="2"/>' +
    '<text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">PL</text>' +
    '<text x="398" y="298" fill="#0B1426" font-size="12" font-weight="700">Y</text>' +
    '<line x1="80" y1="95" x2="360" y2="270" stroke="#2563EB" stroke-width="2.5"/>' +
    '<text x="363" y="270" fill="#2563EB" font-size="12" font-weight="700">AD</text>' +
    '<line x1="200" y1="40" x2="200" y2="280" stroke="#EC2D68" stroke-width="2" stroke-dasharray="6,4" opacity="0.85"/>' +
    '<text x="200" y="34" fill="#EC2D68" font-size="11" text-anchor="middle" font-weight="700">LRAS</text>' +
    '<path d="M 90 270 Q 150 240 200 170 Q 280 100 360 50" fill="none" stroke="#1FB574" stroke-width="2.5"/>' +
    '<text x="363" y="50" fill="#1FB574" font-size="12" font-weight="700">SRAS</text>' +
    '<circle cx="200" cy="170" r="5" fill="#F5B800"/>' +
    '<line x1="55" y1="170" x2="200" y2="170" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '<text x="42" y="174" fill="#F5B800" font-size="11" text-anchor="end" font-weight="700">PL*</text>' +
    '<text x="200" y="297" fill="#0B1426" font-size="11" text-anchor="middle" font-weight="700">Y* = Yfe</text>' +
    '</svg>';

  window.ECONOS_QUIZ = {
    id:       'inflation_causes',
    topicId:  'inflation_causes',
    title:    'Causes of Inflation &amp; Deflation',
    subtitle: 'Theme 2.4 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  'topic_inflation.html',
    backLabel: 'Back to topic',

    questions: [

      /* 1 — Visual sort: classify shocks */
      { type: 'elastic_sort',
        stem: 'Classify each shock as a primary cause of <strong>demand-pull</strong> or <strong>cost-push</strong> inflation.',
        categories: ['dp', 'cp'],
        categoryLabels: ['Demand-pull cause', 'Cost-push cause'],
        goods: [
          { icon: '💷', label: 'Major cut in income tax raises household disposable income', note: '', ans: 'dp' },
          { icon: '🏦', label: 'Bank of England cuts the base rate from 5% to 2%', note: '', ans: 'dp' },
          { icon: '🛢️', label: 'Sharp rise in global crude oil prices', note: '', ans: 'cp' },
          { icon: '💱', label: 'Sterling depreciates by 20% against the US dollar', note: '', ans: 'cp' },
          { icon: '👥', label: 'Government raises the National Living Wage by 10%', note: '', ans: 'cp' },
          { icon: '📈', label: 'Surge in business investment as firms upgrade technology', note: '', ans: 'dp' }
        ],
        exp: '<strong>Demand-pull inflation</strong> arises from rightward shifts in AD — tax cuts, lower interest rates, rising confidence, surging investment / government spending / exports. <strong>Cost-push inflation</strong> arises from leftward shifts in SRAS — higher input costs (oil, raw materials, wages) or a depreciating exchange rate raising the price of imported inputs. The 2022 UK inflation episode was largely cost-push (energy + food + sterling); the 2008 episode mixed demand-pull (commodity boom) with cost-push (oil).'
      },

      /* 2 — Diagram interpretation: AD shift near Yfe */
      { type: 'diagram_interp',
        stem: 'A government announces major fiscal stimulus and the Bank of England cuts interest rates simultaneously.',
        svg: ADAS_SVG,
        caption: 'Initial equilibrium at PL*, Y*, with LRAS at full-employment output (Yfe).',
        question: 'In the SHORT RUN, given an economy already operating close to full employment (Y* near Yfe), what does this combination most likely cause?',
        opts: [
          'AD shifts right; with the economy near Yfe, SRAS is steep, so most of the adjustment is in the price level — demand-pull inflation with limited extra output',
          'SRAS shifts left and AD stays unchanged, producing stagflation through cost-push channels even though no negative supply shock has been described',
          'Both AD and SRAS shift right by exactly the same amount, leaving prices unchanged but output much higher — a balanced expansion that eliminates the inflation-output trade-off',
          'AD shifts left because markets interpret the stimulus as raising future interest rates, dampening consumption and investment and causing deflation'
        ],
        ans: 0,
        exp: 'A combined fiscal and monetary expansion shifts <strong>AD right</strong>. The output response depends on where the economy starts. Near Yfe, SRAS is steep — spare capacity is exhausted, so the AD shift is absorbed mainly by higher prices: classic <strong>demand-pull inflation</strong>. With significant slack, the same shift would mostly raise output with little price effect. This is why <em>timing</em> of stimulus matters: stimulus into a recession is largely real; stimulus into a hot economy is largely inflationary.'
      },

      /* 3 — MCQ: Quantity Theory of Money */
      { type: 'mcq',
        stem: 'According to the <strong>Quantity Theory of Money</strong> (MV = PT), persistent inflation must ultimately reflect:',
        opts: [
          'Money supply (M) growing faster than real output (T), assuming velocity (V) is reasonably stable',
          'Falling velocity of circulation, regardless of what happens to the money supply',
          'A permanent rise in real output that exceeds the growth rate of the money supply',
          'A fall in the price level caused by money supply contractions'
        ],
        ans: 0,
        exp: 'The <strong>equation of exchange</strong>, MV = PT (or MV = PY), is an identity. Rearranged: P = MV / T. If V is reasonably stable and T grows at a slow trend rate, then sustained increases in P must come from sustained growth in M. This is the heart of <strong>monetarist</strong> thinking: <em>"inflation is always and everywhere a monetary phenomenon"</em> (Friedman). Critics argue V is not stable in practice — particularly during financial crises — but the long-run cross-country empirical relationship between money growth and inflation is robust.'
      },

      /* 4 — Diagnostic pair: 2022 inflation evaluation */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the causes of UK inflation reaching 11.1% in October 2022."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Aisha', badge: 'Candidate A',
            answer: 'The 2022 inflation peak was primarily <strong>cost-push</strong>, driven by three external shocks. First, the Russia–Ukraine war caused European wholesale gas prices to spike, with Ofgem\'s energy price cap rising sharply. Second, post-pandemic supply chain disruptions and the war pushed up global food prices, hitting CPI\'s ~11% food weight. Third, sterling weakness raised imported input costs. There were also <strong>demand-pull</strong> elements: post-pandemic pent-up savings, the furlough scheme\'s lagged income support, and a tight labour market with unemployment near 50-year lows. The combination produced a near-textbook adverse supply shock layered onto residual excess demand. Crucially, second-round effects through wage settlements and inflation expectations meant headline CPI persisted above target into 2023, justifying the Bank of England\'s aggressive rate rises.'
          },
          { name: 'Tom', badge: 'Candidate B',
            answer: 'Inflation was high in 2022 because energy prices went up a lot, especially gas. The war in Ukraine made things worse and food prices also rose. The pound was weak so imported things cost more. People had also saved money during Covid lockdowns and started spending it when shops reopened, which added to demand. Wages were going up because there were not enough workers, and businesses passed the higher wage costs on to consumers. The Bank of England raised interest rates to try to bring inflation back down. Overall there were lots of different reasons, both costs going up and demand being too high, all happening at the same time, which is why the rate got so high.'
          }
        ],
        ans: 0,
        exp: '<strong>Aisha</strong> gives the stronger answer. She uses precise terminology (<em>cost-push</em>, <em>demand-pull</em>, <em>second-round effects</em>, <em>inflation expectations</em>), grounds claims in specific institutions (Ofgem cap, Bank of England), and weighs the relative contribution of each cause. She also explicitly links the cost-push framing to the policy response. Tom captures the same factors but at the level of narrative description — the analytical framework (AD/AS, second-round effects, expectations) is missing. Tom would access Level 2–3; Aisha Level 4. The framing <em>"adverse supply shock layered onto residual excess demand"</em> is the kind of analytical sentence examiners reward.'
      },

      /* 5 — Calculation: real income */
      { type: 'calculation',
        context: 'A worker\'s nominal salary in 2020 was <strong>£30,000</strong>. Over the following four years, CPI rose by <strong>2%, 9%, 7%, and 3%</strong> respectively. The worker received nominal pay rises of <strong>2%, 4%, 5%, and 4%</strong>.',
        working: [
          'Step 1: track the nominal salary year by year',
          '2020: £30,000',
          '2021: £30,000 × 1.02 = £30,600',
          '2022: £30,600 × 1.04 = £31,824',
          '2023: £31,824 × 1.05 = £33,415',
          '2024: £33,415 × 1.04 = £34,752',
          'Step 2: cumulative price level (2020 = 100)',
          '100 × 1.02 × 1.09 × 1.07 × 1.03 ≈ 122.5',
          'Step 3: deflate 2024 salary to 2020 prices',
          '£34,752 ÷ 1.225 ≈ £28,369',
          'Real income has FALLEN by about £1,631 (≈5.4%)'
        ],
        stem: 'What has happened to the worker\'s <strong>real income</strong> by 2024 compared with 2020?',
        opts: [
          { ped: 'Fallen by approximately 5%', typ: 'Nominal pay rose ~16% but the price level rose ~22.5%, so real income is below 2020 — £34,752 ÷ 1.225 ≈ £28,369 vs £30,000', rev: 'Cumulative price growth outpaced cumulative nominal pay growth' },
          { ped: 'Risen by approximately 16%', typ: 'Confused nominal with real — ignored cumulative inflation of 22.5%', rev: 'Real income strips out price changes; nominal alone overstates gains' },
          { ped: 'Unchanged',                   typ: 'Did not compute the cumulative gap (~6.5pp) between price and pay growth', rev: 'Inflation cumulatively outpaced pay; the gap is real' },
          { ped: 'Risen by approximately 6%',   typ: 'Cherry-picked the favourable years; ignored the large 2022 real loss', rev: 'Need to compound across all four years' }
        ],
        ans: 0,
        exp: 'Cumulative nominal pay: 1.02 × 1.04 × 1.05 × 1.04 ≈ 1.158, so 2024 salary ≈ <strong>£34,752</strong>. Cumulative price level: 1.02 × 1.09 × 1.07 × 1.03 ≈ 1.225 (prices rose ~22.5%). Real 2024 income in 2020 prices: £34,752 ÷ 1.225 ≈ <strong>£28,369</strong> — a fall of about £1,631 (5.4%). The 2022–23 inflation surge eroded purchasing power faster than nominal pay could keep up, and the 2024 catch-up (4% pay vs 3% inflation) was insufficient to recover the lost ground. This is why the 2022–24 episode is described as the largest real income squeeze in decades.'
      },

      /* 6 — Multi-select: cost-push causes */
      { type: 'multi_select',
        stem: 'Which of the following can plausibly cause <strong>cost-push inflation</strong>?',
        opts: [
          'A sharp rise in the world price of crude oil',
          'A significant depreciation of the domestic currency',
          'A large increase in the National Living Wage that exceeds productivity growth',
          'A new regulation that raises compliance costs across many sectors',
          'A surge in consumer confidence and household spending',
          'A central bank cut in the base interest rate'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A–D all raise firms\' production costs and shift SRAS left, generating cost-push inflation. Higher oil prices feed into transport, plastics, fertilisers and energy-intensive manufacturing. A weaker pound raises the sterling cost of imported inputs. Wages above productivity raise unit labour costs. Compliance costs act like an indirect tax on production. Options E and F are <em>demand-pull</em> causes — they shift AD right, not SRAS left. The distinction matters for policy: cost-push needs supply-side responses; demand-pull needs demand restraint.'
      },

      /* 7 — Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>causes of cost-push inflation</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🛢️', label: 'Sharp rise in global oil prices', note: '' },
          { icon: '💷', label: 'Sterling depreciates against major trading currencies', note: '' },
          { icon: '🏦', label: 'Bank of England cuts the base rate to stimulate lending', note: '' },
          { icon: '👥', label: 'Trade unions secure wage settlements far above productivity growth', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>Bank of England rate cut</strong>. Lower interest rates stimulate demand by making borrowing cheaper for households and firms — a classic <strong>demand-pull</strong> mechanism. The other three all raise production costs and shift SRAS left: higher oil prices raise energy and input costs; sterling depreciation raises the sterling price of imports; and excessive wage growth raises unit labour costs. The distinction matters because the policy response differs — cost-push inflation cannot easily be tamed by raising interest rates without significant output costs.'
      },

      /* 8 — Para fill: wage-price spiral */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'A wage-price spiral can entrench inflation if expectations become de-anchored.',
        para: 'When inflation is high, workers demand higher [1] wages to protect their [2] incomes. If granted, firms face higher unit [3] costs and pass these on through higher [4]. Workers then observe rising prices and demand even larger pay rises, causing a [5] effect. This pattern is more likely when inflation [6] become de-anchored from the central bank\'s target, which is why credible monetary policy and a clear inflation [7] are so important.',
        blanks: [
          { id: 1, opts: ['nominal', 'real', 'minimum', 'marginal'], ans: 0 },
          { id: 2, opts: ['real', 'nominal', 'disposable', 'gross'], ans: 0 },
          { id: 3, opts: ['labour', 'capital', 'overhead', 'marketing'], ans: 0 },
          { id: 4, opts: ['prices', 'interest rates', 'taxes', 'exports'], ans: 0 },
          { id: 5, opts: ['second-round', 'first-round', 'crowding-out', 'wealth'], ans: 0 },
          { id: 6, opts: ['expectations', 'rates', 'differentials', 'cycles'], ans: 0 },
          { id: 7, opts: ['target', 'tax', 'subsidy', 'threshold'], ans: 0 }
        ],
        exp: '(1) <strong>Nominal</strong> wages: workers see and bargain in cash terms. (2) <strong>Real</strong> incomes: what nominal wages buy after inflation. (3) <strong>Labour</strong> costs: wages are firms\' largest cost in most service sectors. (4) <strong>Prices</strong>: firms restore margins by raising prices. (5) <strong>Second-round</strong> effects: the initial price rise feeds back through wage demands into further price rises. (6) <strong>Expectations</strong>: when households and firms expect persistent inflation, they build it into wage and price decisions, making it self-fulfilling. (7) <strong>Target</strong>: a credible numerical target (UK: 2% CPI) anchors expectations and reduces the risk of a spiral.'
      },

      /* 9 — Data table: 2022 inflation episode */
      { type: 'data_table',
        stem: 'The table shows annual UK CPI inflation around the 2022 episode.',
        headers: ['Year', 'CPI inflation', 'BoE base rate (year end)', 'Brent oil ($, avg)'],
        rows: [
          ['2020', '+0.9%', '0.10%', '42'],
          ['2021', '+2.6%', '0.25%', '71'],
          ['2022', '+9.1%', '3.50%', '100'],
          ['2023', '+7.3%', '5.25%', '82'],
          ['2024', '+2.5%', '4.75%', '81']
        ],
        question: 'Which interpretation of the data is most consistent with all four years?',
        opts: [
          'Inflation rose sharply in 2022 as energy prices spiked; the Bank of England responded with rapid rate rises, and inflation fell back as oil prices stabilised and tighter policy worked through with a lag',
          'Higher interest rates directly caused the inflation rise in 2022 by raising business borrowing costs, which firms passed on to consumers as significantly higher final prices',
          'Inflation and oil prices are completely unrelated — the 2022 spike was caused entirely by domestic demand pressures from post-Covid spending, with the parallel energy surge being coincidental',
          'The Bank of England\'s rate rises from 0.25% to 5.25% had no effect on inflation; the fall in 2024 was purely coincidental and driven entirely by external factors'
        ],
        ans: 0,
        exp: 'The data tell a coherent story. Oil more than doubled between 2020 ($42) and 2022 ($100), feeding directly into transport and energy costs and indirectly into almost every other input. CPI tracked the energy shock with a short lag. The Bank of England responded with the most rapid rate-rising cycle in decades (0.10% → 5.25% in roughly 18 months). With monetary policy operating with a 12–18 month lag, the disinflation through 2023–24 reflects both the easing of the supply shock (oil down to $81) and the cumulative effect of tighter policy on domestic demand. Option B reverses cause and effect. Option C ignores the obvious oil–CPI co-movement. Option D dismisses the policy response too quickly.'
      },

      /* 10 — Chain: cost-push transmission */
      { type: 'chain',
        stem: 'A major oil-exporting region experiences sustained supply disruption. Place the events in the correct logical order from initial cause to final consequence.',
        items: [
          { label: 'Headline CPI inflation rises sharply', note: '' },
          { label: 'Workers observe higher prices and demand higher nominal wage settlements', note: '' },
          { label: 'Global crude oil prices rise sharply due to supply disruption', note: '' },
          { label: 'Firms across the economy face higher energy and transport costs; SRAS shifts left', note: '' },
          { label: 'Firms pass on higher unit labour costs through further price rises — second-round effects', note: '' },
          { label: 'Central bank raises interest rates to anchor expectations and bring inflation back to target', note: '' }
        ],
        correctOrder: [2, 3, 0, 1, 4, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Oil supply disrupted (initial shock).<br>2. SRAS shifts left across the economy.<br>3. Headline CPI inflation rises.<br>4. Workers seek higher nominal wages to protect real income.<br>5. Firms pass on higher labour costs — second-round effects.<br>6. Central bank tightens policy to anchor expectations.<br><br>This is the textbook <em>cost-push transmission</em>: shock → supply shift → price rise → wage response → second-round effects → policy response. Strong essays make every link explicit. Stopping at step 3 misses the dynamic response — which is precisely why central bank credibility and the speed of policy response matter for whether the spiral takes hold.'
      }

    ]
  };

})();
