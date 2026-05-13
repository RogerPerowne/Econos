/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Inflation: synthesise evidence into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'SESSION 2 OF 3: LINK',
  backUrl:      'link_inflation_intro.html',
  eyebrow:      'Make the Judgement',
  instruction:  'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:      'link_inflation_intro.html',

  stations: [
    { id: 'context', label: 'Use the context',   href: 'link_inflation_context.html' },
    { id: 'chain',   label: 'Build the chain',   href: 'link_inflation_chain.html'   },
    { id: 'diagram', label: 'Diagram connector', href: 'link_inflation_diagram.html' },
    { id: 'depends', label: 'It depends on',     href: 'link_inflation_depends.html' },
    { id: 'judge',   label: 'Make the judgement', href: 'link_inflation_judge.html' }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'    },
    { icon: '🔗', text: 'Use the mechanism'         },
    { icon: '➕', text: 'Add a condition'           },
    { icon: '💬', text: 'Explain the limitation'    }
  ],

  scenarios: [
    /* ── 1. Interest rates & inflation ── */
    {
      id: 'interest-rates-inflation',
      claim: {
        icon:   '🏦',
        prompt: 'Policy claim',
        text:   'Higher interest rates are the best way to reduce inflation.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Energy prices +18%: cost-push inflation, real wages falling.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Energy costs ↑ → SRAS shifts left → price level ↑, output ↓.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'SRAS shifts left — stagflation: higher P, lower Y simultaneously.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on cause, credibility and transmission.' }
      ],
      cloze: 'Overall, higher interest rates are [1] when inflation is mainly [2], because higher borrowing costs reduce [3] and shift [4] left. However, their effectiveness is weaker when inflation is driven by [5], since interest rates do not directly reduce firms\' [6]. Therefore, the strongest judgement is that higher interest rates are [7], but only if the transmission mechanism is strong and the fall in [8] is not excessive.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-most-effective',   text: 'most effective',       correct: true  },
            { id: 'b1-irrelevant',       text: 'irrelevant',             correct: false },
            { id: 'b1-harmful',          text: 'harmful in all cases',   correct: false },
            { id: 'b1-automatic',        text: 'automatic',              correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-demand-pull',      text: 'demand-pull inflation', correct: true  },
            { id: 'b2-cost-push',        text: 'cost-push inflation',    correct: false },
            { id: 'b2-structural',       text: 'structural unemployment',correct: false },
            { id: 'b2-trade',            text: 'trade liberalisation',   correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-consumption',      text: 'consumption and investment', correct: true  },
            { id: 'b3-government',       text: 'government spending',          correct: false },
            { id: 'b3-labour',           text: 'labour mobility',              correct: false },
            { id: 'b3-exports',          text: 'exports only',                 correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-ad',               text: 'AD',   correct: true  },
            { id: 'b4-sras',             text: 'SRAS', correct: false },
            { id: 'b4-lras',             text: 'LRAS', correct: false },
            { id: 'b4-mpc',              text: 'MPC',  correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-supply-shocks',    text: 'global supply shocks',   correct: true  },
            { id: 'b5-confidence',       text: 'rising confidence',       correct: false },
            { id: 'b5-lower-rates',      text: 'lower interest rates',    correct: false },
            { id: 'b5-competition',      text: 'stronger competition',    correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-costs',            text: 'production costs',    correct: true  },
            { id: 'b6-tax',              text: 'tax revenue',         correct: false },
            { id: 'b6-surplus',          text: 'consumer surplus',     correct: false },
            { id: 'b6-exchange',         text: 'exchange rates',       correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-useful-limited',   text: 'useful but limited',         correct: true  },
            { id: 'b7-best-policy',      text: 'always the best policy',     correct: false },
            { id: 'b7-ineffective',      text: 'completely ineffective',     correct: false },
            { id: 'b7-monopoly',         text: 'only suitable in monopoly markets', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-output',           text: 'output and employment', correct: true  },
            { id: 'b8-imports',          text: 'imports and tariffs',    correct: false },
            { id: 'b8-pensions',         text: 'pensions only',          correct: false },
            { id: 'b8-tax',              text: 'tax receipts only',      correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',     text: 'Higher rates are always best',                    correct: false },
          { id: 'op-useful',     text: 'Higher rates are useful but conditional',          correct: true  },
          { id: 'op-not-used',   text: 'Higher rates should not be used',                  correct: false },
          { id: 'op-supply',     text: 'Inflation can only be solved with supply-side policy', correct: false }
        ]
      },
      examBridge: '"Higher interest rates are useful but conditional: most effective against demand-pull inflation through their effect on consumption and investment, but limited against cost-push pressures from global supply shocks. The strongest judgement is that they should be used when the transmission mechanism is strong and the output cost is acceptable."'
<<<<<<< HEAD
=======
    }
  ]
};

/*  removed scenarios (cost-push-boe, fiscal-cuts-demand-pull) kept here for reference
    {
      id: 'cost-push-boe',
      claim: {
        icon:   '⚡',
        prompt: 'Policy claim',
        text:   'Cost-push inflation cannot be effectively controlled by the Bank of England.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Imported energy and food prices are driving headline inflation.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Higher input costs raise prices, reducing real incomes and AD.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'SRAS shifts left — prices rise, output falls (stagflation).' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Source of the shock and exchange-rate channel matter most.' }
      ],
      cloze: 'The Bank of England has [1] direct control over the root causes of cost-push inflation, particularly when these originate from [2]. However, it can influence [3] inflation indirectly through the [4] channel, where higher rates strengthen sterling and reduce import costs. It can also prevent a [5] from embedding, which would otherwise turn a temporary shock into [6] inflation. Therefore, the Bank is not [7], but its tools are best suited to managing the [8] of the shock rather than its source.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-limited',   text: 'limited',   correct: true  },
            { id: 'b1-complete',  text: 'complete',  correct: false },
            { id: 'b1-no',        text: 'no',        correct: false },
            { id: 'b1-perfect',   text: 'perfect',   correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-global',    text: 'global supply shocks',     correct: true  },
            { id: 'b2-domestic',  text: 'domestic wage demands',     correct: false },
            { id: 'b2-fiscal',    text: 'fiscal policy decisions',   correct: false },
            { id: 'b2-monetary',  text: 'monetary base growth',      correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-import',    text: 'import-driven',  correct: true  },
            { id: 'b3-wage',      text: 'wage-driven',     correct: false },
            { id: 'b3-tax',       text: 'tax-driven',      correct: false },
            { id: 'b3-monopoly',  text: 'monopoly-driven', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-exchange',  text: 'exchange rate', correct: true  },
            { id: 'b4-credit',    text: 'credit',         correct: false },
            { id: 'b4-fiscal',    text: 'fiscal',         correct: false },
            { id: 'b4-housing',   text: 'housing',        correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-spiral',    text: 'wage-price spiral',        correct: true  },
            { id: 'b5-deflation', text: 'deflationary period',       correct: false },
            { id: 'b5-boom',      text: 'consumer boom',             correct: false },
            { id: 'b5-recession', text: 'recession',                 correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-persistent', text: 'persistent', correct: true  },
            { id: 'b6-imported',   text: 'imported',    correct: false },
            { id: 'b6-zero',       text: 'zero',        correct: false },
            { id: 'b6-deflation',  text: 'deflation',   correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-powerless',  text: 'powerless',             correct: true  },
            { id: 'b7-omnipotent', text: 'omnipotent',            correct: false },
            { id: 'b7-irrelevant', text: 'irrelevant to the economy', correct: false },
            { id: 'b7-political',  text: 'a political body',      correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-secondary', text: 'secondary effects',  correct: true  },
            { id: 'b8-cause',     text: 'underlying cause',     correct: false },
            { id: 'b8-duration',  text: 'duration',             correct: false },
            { id: 'b8-magnitude', text: 'magnitude',            correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-powerless', text: 'The Bank is powerless against cost-push inflation',     correct: false },
          { id: 'op-limited',   text: 'The Bank has limited but meaningful tools',              correct: true  },
          { id: 'op-full',      text: 'The Bank has full control over all inflation types',     correct: false },
          { id: 'op-fiscal',    text: 'Only fiscal policy can address cost-push inflation',     correct: false }
        ]
      },
      examBridge: '"The Bank has limited but meaningful tools against cost-push inflation: while it cannot remove global supply shocks, it can use the exchange-rate channel to reduce import costs and tighten policy to prevent a wage-price spiral from making the shock persistent."'
    },

    /* ── 3. Cutting government spending & demand-pull inflation ── */
    {
      id: 'fiscal-cuts-demand-pull',
      claim: {
        icon:   '✂️',
        prompt: 'Policy claim',
        text:   'Cutting government spending is the most effective way to reduce demand-pull inflation.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: 'Consumer spending is strong and the output gap is positive.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Lower G reduces AD, easing pressure on the price level.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'AD shifts left — inflation falls but output declines too.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Monetary policy availability and the multiplier matter most.' }
      ],
      cloze: 'Cutting government spending can reduce demand-pull inflation by shifting [1] to the left, but its effectiveness depends on the size of the [2]. In an open economy, this is typically [3], meaning large cuts are needed for a meaningful effect. It is usually [4] than monetary policy, which is the [5] tool for managing the cycle. Cuts to public [6] also risk reducing LRAS, making long-run inflation [7]. Therefore, fiscal contraction is best seen as a [8] tool rather than the lead instrument.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-ad',     text: 'AD',   correct: true  },
            { id: 'b1-sras',   text: 'SRAS', correct: false },
            { id: 'b1-lras',   text: 'LRAS', correct: false },
            { id: 'b1-pl',     text: 'price level', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-mult',   text: 'fiscal multiplier',  correct: true  },
            { id: 'b2-trade',  text: 'trade balance',       correct: false },
            { id: 'b2-debt',   text: 'national debt',       correct: false },
            { id: 'b2-fdi',    text: 'inward FDI',          correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-small',  text: 'small',   correct: true  },
            { id: 'b3-large',  text: 'large',   correct: false },
            { id: 'b3-zero',   text: 'zero',    correct: false },
            { id: 'b3-infinite', text: 'infinite', correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-slower', text: 'slower',  correct: true  },
            { id: 'b4-faster', text: 'faster',  correct: false },
            { id: 'b4-cheaper',text: 'cheaper', correct: false },
            { id: 'b4-easier', text: 'easier to reverse', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-primary', text: 'primary',     correct: true  },
            { id: 'b5-only',    text: 'only',         correct: false },
            { id: 'b5-banned',  text: 'banned',       correct: false },
            { id: 'b5-secondary',text: 'secondary',   correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-invest',  text: 'investment',     correct: true  },
            { id: 'b6-pensions',text: 'pensions',        correct: false },
            { id: 'b6-defence', text: 'defence',         correct: false },
            { id: 'b6-debt',    text: 'debt servicing',  correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-worse',   text: 'worse, not better', correct: true  },
            { id: 'b7-better',  text: 'permanently lower', correct: false },
            { id: 'b7-zero',    text: 'fall to zero',      correct: false },
            { id: 'b7-stable',  text: 'perfectly stable',  correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-supporting', text: 'supporting',    correct: true  },
            { id: 'b8-primary',    text: 'primary',        correct: false },
            { id: 'b8-banned',     text: 'banned',         correct: false },
            { id: 'b8-automatic',  text: 'automatic',      correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-most-effective', text: 'Spending cuts are the most effective tool',  correct: false },
          { id: 'op-supporting',     text: 'Spending cuts are a supporting tool',         correct: true  },
          { id: 'op-never',          text: 'Spending cuts should never be used',          correct: false },
          { id: 'op-only-monetary',  text: 'Only monetary policy can reduce inflation',   correct: false }
        ]
      },
      examBridge: '"Cutting government spending can reduce demand-pull inflation, but it is best seen as a supporting tool: monetary policy is faster and more precise, and the open-economy fiscal multiplier limits the impact of cuts. Where cuts fall on public investment, they risk damaging LRAS and making long-run inflation worse."'
>>>>>>> origin/main
    }
*/
