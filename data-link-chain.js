/* ============================================================
   ECONOS — Link It · Chain station data
   Inflation: build a causal chain of economic reasoning
   ============================================================ */

window.ECONOS_LINK_CHAIN = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',
  backUrl:      'link_inflation_intro.html',

  stations: [
    { id: 'context', label: 'Use the context',    href: 'link_inflation_context.html' },
    { id: 'chain',   label: 'Build the chain',    href: 'link_inflation_chain.html'   },
    { id: 'diagram', label: 'Diagram connector',  href: 'link_inflation_diagram.html' },
    { id: 'depends', label: 'It depends on',     href: 'link_inflation_depends.html' },
    { id: 'judge',   label: 'Make the judgement'  }
  ],
  currentStationIdx: 1,

  eyebrow:     'Build the Chain',
  instruction: 'Tap tiles in the correct order to complete the chain. Each step should lead clearly to the next.',

  chains: [
    /* ── 1. Cost-push (energy / supply shock) ── */
    {
      id: 'cost-push',
      scenario: {
        icon:  '⚡',
        label: 'Scenario',
        text:  'A sharp rise in global oil and gas prices follows a major supply disruption. Energy-intensive industries immediately report soaring input costs.'
      },
      anchor: 'Firms face higher production and energy costs',
      tiles: [
        {
          id:   'cp-step1',
          icon: '📉',
          text: 'SRAS shifts left, reducing output',
          pos:  0
        },
        {
          id:   'cp-step2',
          icon: '💰',
          text: 'Firms pass costs on as higher prices',
          pos:  1
        },
        {
          id:   'cp-step3',
          icon: '📊',
          text: 'CPI rises — cost-push inflation',
          pos:  2
        },
        {
          id:   'cp-dist1',
          icon: '🛒',
          text: 'Consumer confidence surges upward',
          pos:  null
        },
        {
          id:   'cp-dist2',
          icon: '📈',
          text: 'AD shifts right on rising incomes',
          pos:  null
        },
        {
          id:   'cp-dist3',
          icon: '🏦',
          text: 'Bank of England cuts interest rates',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'Higher energy costs raise firms\' average costs of production. On the AD/AS diagram, SRAS shifts leftward — the economy produces less at every price level, creating stagflationary pressure.'
        },
        {
          pos:  1,
          text: 'To protect profit margins, firms raise their output prices. This is the transmission mechanism from higher input costs to consumer prices — sometimes called a cost mark-up.'
        },
        {
          pos:  2,
          text: 'As prices across the economy rise, CPI increases. This is cost-push inflation: the price level rises even though there has been no increase in aggregate demand.'
        }
      ],
      examBridge: '"An oil-price shock shifts SRAS leftward; firms facing squeezed margins raise output prices, transmitting higher input costs into CPI — a classic cost-push inflation where rising prices are accompanied by falling real output."',

      prompts: [
        'What happens to firms\' output or prices as costs rise?',
        'How does this affect the general price level?',
        'What is the wider effect on households and real incomes?'
      ],
      modelAnswers: [
        'Firms face squeezed profit margins and respond by cutting output and/or raising prices — on the AD/AS diagram, SRAS shifts leftward.',
        'The leftward SRAS shift raises the equilibrium price level. CPI increases, producing cost-push inflation even without any change in aggregate demand.',
        'Higher prices erode households\' real wages and purchasing power. Real incomes fall, reducing consumer spending and potentially deepening the slowdown.'
      ],
      vocab: ['SRAS', 'cost-push', 'price level', 'CPI', 'real incomes', 'purchasing power', 'profit margins', 'stagflation']
    },

    /* ── 2. Demand-pull (consumer boom) ── */
    {
      id: 'demand-pull',
      scenario: {
        icon:  '🏠',
        label: 'Scenario',
        text:  'A sustained rise in house prices increases household wealth. Banks ease lending criteria, making personal loans and mortgages more accessible.'
      },
      anchor: 'Household wealth and borrowing capacity increase',
      tiles: [
        {
          id:   'dp-step1',
          icon: '🛍️',
          text: 'Consumer spending rises sharply',
          pos:  0
        },
        {
          id:   'dp-step2',
          icon: '➡️',
          text: 'AD shifts right, closing output gap',
          pos:  1
        },
        {
          id:   'dp-step3',
          icon: '📈',
          text: 'Price level rises — demand-pull inflation',
          pos:  2
        },
        {
          id:   'dp-dist1',
          icon: '⚡',
          text: 'Energy supply falls, raising input costs',
          pos:  null
        },
        {
          id:   'dp-dist2',
          icon: '🏭',
          text: 'SRAS shifts left on higher wages',
          pos:  null
        },
        {
          id:   'dp-dist3',
          icon: '📉',
          text: 'Firms cut prices to attract buyers',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'A positive wealth effect (from higher house prices) and easier credit increase households\' real disposable income and willingness to spend. Consumption (C) — the largest component of AD — rises.'
        },
        {
          pos:  1,
          text: 'Higher consumption shifts the AD curve rightward. If the economy is near full capacity, the output gap narrows or closes, putting upward pressure on the price level.'
        },
        {
          pos:  2,
          text: 'With demand exceeding the economy\'s productive capacity, firms respond by raising prices rather than output. This demand-pull inflation is sustained as long as AD remains above LRAS.'
        }
      ],
      examBridge: '"Rising house prices generate a positive wealth effect; consumer spending lifts AD rightward and, with the output gap closing, firms raise prices rather than output — generating demand-pull inflation that may persist until monetary policy tightens."',

      prompts: [
        'How does higher wealth and easier credit affect spending?',
        'What happens to aggregate demand and the output gap?',
        'What type of inflation results, and what might sustain it?'
      ],
      modelAnswers: [
        'Higher household wealth and easier access to credit raise disposable income and consumer confidence. Consumption rises — the largest component of AD.',
        'Rising consumption shifts AD to the right. As the economy approaches full capacity, the output gap closes, putting sustained upward pressure on the price level.',
        'Demand-pull inflation emerges as firms raise prices rather than output. If firms also grant wage rises to meet demand, a wage-price spiral may develop, embedding inflation expectations.'
      ],
      vocab: ['aggregate demand', 'AD', 'wealth effect', 'output gap', 'demand-pull', 'full capacity', 'consumer confidence', 'inflation expectations']
    },

    /* ── 3. Wage-price spiral ── */
    {
      id: 'wage-price',
      scenario: {
        icon:  '🤝',
        label: 'Scenario',
        text:  'After two years of above-target CPI, major trade unions in public and private sectors begin annual pay negotiations. Workers point to falling real wages as justification for large settlements.'
      },
      anchor: 'Trade unions negotiate above-inflation wage settlements',
      tiles: [
        {
          id:   'wp-step1',
          icon: '🏗️',
          text: 'Firms\' labour costs rise significantly',
          pos:  0
        },
        {
          id:   'wp-step2',
          icon: '🔁',
          text: 'Higher prices erode real wages again',
          pos:  1
        },
        {
          id:   'wp-step3',
          icon: '🌀',
          text: 'Workers demand further wage rises',
          pos:  2
        },
        {
          id:   'wp-dist1',
          icon: '🏦',
          text: 'Central bank expands money supply',
          pos:  null
        },
        {
          id:   'wp-dist2',
          icon: '🌍',
          text: 'Import prices fall due to strong pound',
          pos:  null
        },
        {
          id:   'wp-dist3',
          icon: '📉',
          text: 'Unemployment rises, reducing demand',
          pos:  null
        }
      ],
      explain: [
        {
          pos:  0,
          text: 'When wage growth exceeds productivity growth, unit labour costs rise. This squeezes profit margins and, on the AD/AS diagram, shifts SRAS leftward — firms face higher average costs of production.'
        },
        {
          pos:  1,
          text: 'Firms pass higher labour costs onto consumers through higher prices (cost mark-up pricing). CPI rises, which — crucially — reduces workers\' real purchasing power once more, even with the nominal pay rise.'
        },
        {
          pos:  2,
          text: 'Seeing real wages eroded again, workers and unions push for another above-inflation settlement. This self-reinforcing loop — a wage-price spiral — can embed inflation expectations and make inflation difficult to control without a recession.'
        }
      ],
      examBridge: '"Above-inflation wage settlements raise unit labour costs, shifting SRAS left and pushing up the price level; the resulting fall in real wages prompts further pay demands, creating a self-reinforcing wage-price spiral that risks de-anchoring inflation expectations."',

      prompts: [
        'How do higher wages affect firms\' costs of production?',
        'How do firms respond, and what happens to the price level?',
        'Why does this create a self-reinforcing spiral?'
      ],
      modelAnswers: [
        'Higher wages raise unit labour costs — firms\' main cost of production. This shifts SRAS to the left as the economy becomes more expensive to operate at every output level.',
        'To protect profit margins, firms raise prices (cost mark-up pricing). CPI rises, shifting the burden back onto workers whose nominal pay rise is now worth less in real terms.',
        'Workers\' real wages fall again despite the pay rise, so unions push for further above-inflation settlements. This self-reinforcing loop embeds inflationary expectations and is difficult to break without a deliberate policy-induced recession.'
      ],
      vocab: ['unit labour costs', 'SRAS', 'cost mark-up', 'real wages', 'nominal wages', 'wage-price spiral', 'inflation expectations', 'profit margins']
    }
  ]
};
