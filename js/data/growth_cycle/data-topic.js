/* ============================================================
   ECONOS — content data for growth_cycle
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.5 / 2.6
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'growth_cycle',
  topicNum: '2.5.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Trade Cycle, Shocks & Economic Growth',
  estTime: '7-9 minutes',
  goal: 'Lock in the trade cycle, output gaps, shocks and the costs and benefits of growth',

  intro: {
    heroKey: 'heroTradeCycle',
    summary: "The economy doesn't grow in a straight line — it cycles through boom, downturn, recession, and recovery. Understanding the cycle's phases, what drives shocks, and the costs and benefits of growth is the foundation of macro policy analysis.",
    doInThis: 'Recap the four phases of the trade cycle, demand and supply-side shocks, output gaps, causes and consequences of economic growth.',
    outcomes: [
      'Identify the four phases of the trade cycle and their characteristics',
      'Distinguish demand-side from supply-side shocks and their macro effects',
      'Evaluate the costs and benefits of economic growth'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — The four phases of the trade cycle ----- */
    {
      id: 'trade-cycle-phases',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'The trade cycle: four phases',
      lede: 'Real GDP oscillates around its trend growth rate. The four phases of the trade cycle describe this oscillation — and each phase has distinct characteristics, risks, and policy implications.',
      branches: [
        { tone: 'green',  label: 'Boom (Peak)',       sub: '<strong>Actual output > potential.</strong> Positive output gap. Inflation risk, low unemployment below NAIRU, BoP deficit widens as imports surge. Investment high, confidence high. Policy: tighten monetary/fiscal to prevent overheating.' },
        { tone: 'rose',   label: 'Downturn',          sub: '<strong>Growth slowing.</strong> Investment falls first (accelerator). Consumer confidence weakens. Unemployment begins rising. Inflationary pressure eases. Policy: begins easing, but may face inflation trade-off.' },
        { tone: 'amber',  label: 'Recession (Trough)', sub: '<strong>Negative output gap.</strong> Often defined as 2+ quarters of falling GDP. High unemployment, low inflation (or deflation risk), investment weak. Policy: expansionary fiscal + monetary stimulus.' },
        { tone: 'blue',   label: 'Recovery',          sub: '<strong>Growth returning.</strong> Spare capacity absorbed, investment picks up (accelerator). Unemployment falling, confidence returning. Inflation rises as output gap closes. Policy: begins normalising.' }
      ],
      examEdge: {
        title: 'Investment leads, consumption follows',
        text: 'In the trade cycle, <strong>investment is the most volatile component</strong> — it falls first and fastest in downturns (accelerator), then leads the recovery. Consumer spending follows with a lag (wealth effect, employment confidence). A* answers note this timing asymmetry — it explains why business surveys (PMI) are better leading indicators than unemployment data.'
      },
      keyTakeaway: {
        title: 'Policy is asymmetric',
        text: 'It\'s easier to prevent a boom (raise rates) than to escape a deep recession (ZLB problem). Recessions leave hysteresis scars; booms are self-limiting through inflation. This asymmetry justifies the Keynesian preference for preventing deep recessions through timely stimulus.'
      }
    },

    /* ----- CARD 2 — Demand-side shocks ----- */
    {
      id: 'demand-shocks',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Demand-side shocks',
      lede: "Demand-side shocks shift AD — changing both output and the price level in the same direction. They come from inside the economy or from global events.",
      mechanisms: [
        {
          num: '1',
          tone: 'rose',
          title: 'Negative demand shock (AD falls)',
          text: '<strong>AD shifts left → output falls → unemployment rises → price level falls.</strong> Examples: financial crisis (2008-09), confidence collapse (COVID-19 2020), global trade contraction. Policy response: fiscal/monetary stimulus. The Keynesian case for intervention — without it, recovery is slow due to wage stickiness and multiplier-in-reverse.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Positive demand shock (AD rises)',
          text: '<strong>AD shifts right → output rises → unemployment falls → price level rises.</strong> Examples: fiscal stimulus, consumer confidence surge, global export boom, credit expansion. If at or near LRAS, mostly inflationary. If in recession, mostly output-increasing. Context determines the balance.'
        },
        {
          num: '3',
          tone: 'blue',
          title: 'Financial sector shocks',
          text: 'Banking crises can cause demand shocks via the credit channel: banks reduce lending → investment and consumption fall → AD collapses. 2008 crisis: US sub-prime → global banking system → credit crunch → demand collapse across all economies simultaneously. The transmission speed was faster than any policy response.'
        },
        {
          num: '4',
          tone: 'amber',
          title: 'External demand shocks (global)',
          text: 'Recessions in major trading partners reduce export demand → (X−M) falls → AD falls. Conversely, global boom raises export demand → AD rises. The UK is heavily integrated globally — 30% of GDP is trade. External demand shocks can dominate domestic policy in an open economy.'
        }
      ],
      examEdge: {
        title: 'Demand shock: price and output move together',
        text: 'The key analytical signature of a demand shock: <strong>output and price level move in the same direction</strong>. AD falls → both Y and P fall. AD rises → both Y and P rise. This is the opposite of a supply shock (where output and price move in opposite directions). Knowing this distinction organises every macro shock question.'
      },
      connection: {
        title: 'Automatic stabiliser response',
        text: 'A negative demand shock triggers automatic fiscal stabilisers instantly — tax falls, welfare rises. This cushions but doesn\'t eliminate the shock. If severe enough, discretionary stimulus is added. The policy sequencing: automatic stabilisers first, discretionary second.'
      }
    },

    /* ----- CARD 3 — Supply-side shocks ----- */
    {
      id: 'supply-shocks',
      template: 'paired',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Supply-side shocks',
      lede: 'Supply shocks hit SRAS — and unlike demand shocks, they move output and inflation in opposite directions, creating the policy dilemma.',
      pairs: [
        {
          tone: 'rose',
          label: 'Negative supply shock (SRAS shifts left)',
          drivers: [
            'Input cost surge: oil, gas, raw materials',
            'Supply chain disruption: pandemic, conflict, natural disaster',
            'Wage push: militant labour market, minimum wage surge',
            'Exchange rate depreciation: raises import input costs',
            'Result: stagflation — higher inflation AND lower output simultaneously'
          ],
          example: '<strong>2022 UK:</strong> energy prices surged (Ukraine war + LNG market), supply chains still disrupted (COVID legacy), wage growth elevated (tight labour market). SRAS shifted left sharply → CPI 11.1%, GDP growth near-zero. Classic negative supply shock.'
        },
        {
          tone: 'green',
          label: 'Positive supply shock (SRAS shifts right)',
          drivers: [
            'Technology improvement: lowers production costs',
            'Fall in commodity prices: oil price fall (2014-16)',
            'Productivity surge: efficiency improvements',
            'Exchange rate appreciation: cheaper import inputs',
            'Result: more output AND lower inflation simultaneously — benign'
          ],
          example: '<strong>1990s tech boom:</strong> US productivity surge (internet, computers) shifted SRAS right — growth with low inflation. The \'Goldilocks economy\'. <strong>2014-16 oil price fall:</strong> from $115 to $35/barrel → UK disinflation and positive output effect.'
        }
      ],
      examEdge: {
        title: 'Supply shock: the policy dilemma',
        text: 'Negative supply shock creates the hardest macro policy problem: <strong>tighten to fight inflation → worsen recession; ease to protect output → worsen inflation</strong>. There is no costless demand-side response. A* answers name this explicitly as \'the monetary policy dilemma in a supply shock\' — and note that only supply-side intervention can address both objectives simultaneously.'
      },
      policy: {
        title: 'The Thatcher response (1979-83)',
        text: 'Thatcher\'s government faced the second oil shock (1979-80) — a negative supply shock. They chose to fight the inflation, accepting deep recession and 3m+ unemployment. The sacrifice ratio was very high. Alternative: accommodate the supply shock and accept temporarily higher inflation. The choice between these responses is a classic evaluation question.'
      }
    },

    /* ----- CARD 4 — The impact of economic growth ----- */
    {
      id: 'growth-impact',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Costs and benefits of economic growth',
      lede: "Growth is generally beneficial — but it can also be costly. A balanced evaluation of growth asks: growth for whom, at what speed, and at what environmental cost?",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Benefits: rising living standards',
          text: 'Higher real GDP per capita → higher average consumption → improved material living standards. Rising tax revenues → greater government capacity for public services, healthcare, education. Historical evidence: life expectancy, child mortality, literacy all improve with income growth.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Benefits: employment and fiscal space',
          text: 'Growth creates employment — especially in the long run as investment and entrepreneurship expand. Lower unemployment → social benefits (mental health, crime, family stability). Rising tax base without tax rate increases → fiscal dividends for public investment.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Costs: inequality — the Kuznets curve',
          text: 'Early-stage growth typically worsens income distribution (workers move from low-wage agriculture to higher-wage industry, but wages diverge). Kuznets hypothesised inequality eventually falls — but this is contested. UK experience: growth in 1980s and 2010s both accompanied by rising inequality.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Costs: environmental impact',
          text: '<strong>The trade-off modern economics cannot ignore.</strong> GDP growth historically correlates with CO₂ emissions, resource depletion, biodiversity loss. The Environmental Kuznets Curve suggests rich countries eventually reduce pollution — but this applies to local pollutants, not greenhouse gases. Climate economists argue growth must be \'decoupled\' from carbon emissions — difficult at scale.'
        }
      ],
      examEdge: {
        title: 'Evaluate the type of growth',
        text: "A* growth evaluation distinguishes the TYPE of growth: <em>'Consumption-led growth may increase living standards short-term but is not environmentally sustainable. Investment-led growth raises productive capacity without current consumption — more likely to be sustainable.'</em> Also distinguish growth distribution — \'rising real GDP does not ensure rising living standards for all — the Gini coefficient or median income is a better welfare measure.\'"
      },
      connection: {
        title: 'The Environmental Kuznets Curve',
        text: 'The Environmental Kuznets Curve predicts that pollution first rises then falls as income grows. Evidence: strong for local air quality (PM2.5, SO₂). Weak for CO₂ — high-income countries still the largest per-capita emitters. The curve does not resolve the climate change challenge without deliberate carbon pricing or regulation.'
      }
    },

    /* ----- CARD 5 — Leading indicators and forecasting ----- */
    {
      id: 'indicators',
      template: 'diagnose',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Reading the trade cycle: leading indicators',
      lede: 'Economic data is backward-looking. Forecasters use leading indicators — data that changes before GDP — to anticipate turning points in the cycle.',
      table: {
        headers: ['Indicator', 'What it measures', 'Lead time'],
        rows: [
          ['PMI (Purchasing Managers Index)', 'Business confidence and order books; >50 = expansion', '1-3 months'],
          ['Consumer confidence', 'Household expectations; forward-looking spending intentions', '1-3 months'],
          ['House prices', 'Wealth effect and credit conditions; falls signal slowdown', '3-6 months'],
          ['Yield curve (bond market)', 'Inverted curve (short > long rates) historically predicts recession', '6-18 months'],
          ['Business investment', 'Leading indicator of future capacity; falls before recession', '2-6 months'],
          ['Credit growth / bank lending', 'Money supply expansion precedes demand surge or credit crunch', '3-12 months']
        ]
      },
      scenarios: {
        title: 'Diagnose the cycle position',
        items: [
          {
            label: 'A',
            text: 'UK PMI falls below 50 for three consecutive months. Consumer confidence drops sharply. House price growth turns negative. Unemployment starts rising. What phase of the trade cycle is this?',
            answer: 'Downturn heading into recession. Leading indicators all pointing down. Policy response: begin easing — cut Bank Rate, consider fiscal stimulus. But time lag means the trough may be passed before policy takes full effect.',
            tone: 'rose'
          },
          {
            label: 'B',
            text: 'GDP is growing at 3.5% — above trend. Unemployment is 3.5%. CPI is 4.5%. Business investment is rising strongly. Wages are accelerating. What is the macro risk?',
            answer: 'Overheating — positive output gap. Inflationary boom. Policy: tighten monetary policy (raise Bank Rate) to cool AD before price level rises further. Risk of a hard landing if tightening is too aggressive.',
            tone: 'amber'
          }
        ]
      },
      examEdge: {
        title: 'Leading vs lagging indicators',
        text: 'Unemployment is a <strong>lagging indicator</strong> — it peaks after GDP has already recovered because firms wait to hire until recovery is confirmed. GDP itself is also slightly lagging (data comes with delay). PMI and business confidence are <strong>leading indicators</strong> — they change before GDP moves. A* answers use leading indicators when predicting future cycle position, not unemployment data.'
      }
    },

    /* ----- CARD 6 — Causes of economic growth revisited ----- */
    {
      id: 'growth-causes-revisited',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Causes of economic growth: demand vs supply-side',
      lede: 'Growth can be demand-led (short run) or supply-led (long run). The distinction determines both the mechanism and the sustainability of growth.',
      pairs: [
        {
          tone: 'green',
          label: 'Demand-led growth (short run)',
          drivers: [
            'Rising consumer confidence → ↑C (60% of AD)',
            'Low interest rates → ↑I and ↑C',
            'Fiscal stimulus: ↑G or ↓T',
            'Export boom: ↑X from trading partner growth',
            'Multiplier amplifies initial injection',
            'Bounded by the PPF (LRAS) — can cause inflation if PPF is hit'
          ],
          example: '<strong>UK 2010-15:</strong> loose monetary policy (0.5% Bank Rate, QE) drove consumption and house price recovery. GDP returned to pre-crisis levels by 2013-14. But real wages stagnated — growth without widespread welfare improvement. A consumption-led, not investment-led, recovery.'
        },
        {
          tone: 'blue',
          label: 'Supply-led growth (long run)',
          drivers: [
            '↑ Labour supply (participation, immigration)',
            '↑ Labour quality (education, health)',
            '↑ Capital stock (investment in physical capital)',
            '↑ Technology (R&D, innovation)',
            '↑ Total Factor Productivity (efficiency of all inputs)',
            'Shifts PPF outward — non-inflationary capacity expansion'
          ],
          example: '<strong>East Asian miracle (1960-1990):</strong> South Korea, Taiwan, Singapore combined investment rates of 30-40% of GDP with mass education expansion. LRAS shifted dramatically right. GDP per capita grew 7-9% per year for three decades — supply-side led.'
        }
      ],
      examEdge: {
        title: 'Sustainable growth requires supply-side foundations',
        text: "A* growth essays structure around this distinction: <em>'In the short run, AD stimulus can drive growth up to the PPF. But sustainable long-run growth requires supply-side investment that shifts the PPF outward — raising potential output without inflationary pressure. The UK's post-2008 productivity puzzle reflects a failure to achieve this supply-side shift.'</em>"
      },
      policy: {
        title: 'The productivity puzzle as the central challenge',
        text: 'The UK productivity puzzle — stagnant output per worker since 2008 — suggests that demand-led growth has not been matched by supply-side improvement. Closing the productivity gap (UK ~15% below the G7 average) is the defining supply-side challenge for UK economic policy.'
      }
    },

    /* ----- CARD 7 — Economic growth and macro objectives ----- */
    {
      id: 'growth-objectives',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Economic growth and the other macro objectives',
      lede: "Growth is the primary macro objective — but it interacts with all the others. Understanding these interactions is essential for multi-objective policy questions.",
      mechanismsTitle: 'Growth interactions with the four other objectives',
      mechanisms: [
        {
          icon: '📈',
          title: 'Growth vs inflation',
          text: 'Fast growth → positive output gap → demand-pull inflation. Demand management must balance growth with price stability. The SRPC captures this trade-off: lower unemployment (more growth) → higher inflation. The 2% inflation target constrains how fast the economy can grow before monetary tightening is triggered.'
        },
        {
          icon: '👷',
          title: 'Growth and employment',
          text: 'Growth creates employment — Okun\'s Law: ~2% GDP growth above trend reduces unemployment by ~1%. But jobless growth (capital-intensive, technology-replacing) can occur — GDP rises without proportionate job creation. Structural unemployment can persist alongside GDP growth if skills mismatch is severe.'
        },
        {
          icon: '🌍',
          title: 'Growth and BoP',
          text: 'Domestic growth sucks in imports (high MPM) → current account deficit widens. UK growth has consistently widened the current account deficit because of strong import propensity. Only export-led growth (supply-side competitiveness improving) can raise growth without worsening the BoP.'
        },
        {
          icon: '🌿',
          title: 'Growth and environment',
          text: 'Traditional GDP growth depletes natural capital. The \'green growth\' debate: can economies grow while reducing carbon emissions? Evidence is mixed — decarbonisation of electricity generation works; transport and industry are harder. Net Zero targets and growth targets may conflict without radical technology change.'
        }
      ],
      examples: {
        title: 'UK growth performance context',
        items: [
          { period: 'Post-war to 1973', text: 'UK trend growth ~3%/year. \'Golden age\' of expansion — helped by post-war reconstruction demand, full employment, and Keynesian demand management.' },
          { period: '1980s-2007', text: 'Growth ~2.5%/year with volatility. Thatcher reforms raised supply-side efficiency; financial liberalisation drove consumption-led growth in 1990s-2000s. But productivity lag vs EU partners widened.' },
          { period: '2008-present', text: 'Average growth ~1.2-1.5%/year. Productivity stagnation. Brexit. COVID. Cost of living crisis. UK has underperformed G7 peers significantly. The productivity puzzle remains unsolved.' }
        ]
      },
      examEdge: {
        title: 'The complete growth evaluation',
        text: "A* evaluation of UK growth policy: <em>'While real GDP has grown at ~1.2%/year since 2008, this masks a productivity stagnation, widening inequality (Kuznets), a persistent current account deficit, and environmental costs of carbon-intensive growth. Sustainable growth requires simultaneously: supply-side investment (education, R&D, infrastructure), demand stabilisation (monetary policy), and decarbonisation (green industrial policy).'</em>"
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
