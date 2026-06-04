/* ============================================================
   ECONOS – National Income & The Multiplier (Theme 2 · 4.4)
   4 cards · process → propensities → worked example → in action
   Spec: Edexcel A 2.4.4
   Builds on the introductory ripple in the AD topic and the
   MPC deep-dive in the Consumption topic; goes deeper on the
   round-by-round process, brings all four propensities into one
   place using spec terminology (MPC, MPS, MPT, MPM), and adds
   the downward multiplier + accelerator + real-world limits.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'national-income-and-the-multiplier',
  topicNum: '4.4',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'National Income & The Multiplier',
  estTime: '10-12 minutes',
  goal: 'Lock in the multiplier process, the four propensities, the formulas and the calculation, and the AD/AS application.',

  intro: {
    heroKey: 'heroMultiplier',
    summary: 'A £1 of new spending raises national income by more than £1, because that pound becomes someone’s income and gets partly re-spent. The size of the multiplier is set by how much income leaks at each round – out into saving, tax, and imports.',
    doInThis: 'Work through 4 cards: the round-by-round process, the four marginal propensities, a 5-step worked calculation, and the multiplier’s amplification of AD shifts (with the downward case, the accelerator, and real-world limits).',
    outcomes: [
      'Trace the multiplier as a geometric series of spending rounds',
      'Define MPC, MPS, MPT and MPM and explain the leakage identity',
      'Calculate k and ΔY using the simple and full-leakage formulas',
      'Explain how the multiplier amplifies AD shifts (up and down) and what dampens it'
    ],
    tip: 'You met the multiplier briefly in the Aggregate Demand topic. This topic opens up the maths and the limits.',
    stages: [
      { num: 1, name: 'Learn it', sub: '4 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [

    /* ============================================================
       CARD 1 – The multiplier process (round-by-round)
       ============================================================ */
    {
      id: 'multiplier-process',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 4',
      title: 'The multiplier process',
      lede: 'A £1 injection becomes more than £1 of national income because the same pound circulates: spending becomes income, income becomes more spending, and the loop repeats – with a little leaking out each round.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'The multiplier is the geometric sum of an infinite chain of shrinking spending rounds.' },

      notePosition: 'top',
      note: {
        tone: 'blue',
        icon: '\u{1F501}',
        head: 'Where this comes from',
        text: 'You met this as <em>the ripple</em> in the Aggregate Demand topic. Here we open the box: where the geometric series comes from, and why it converges to <strong>1/(1−MPC)</strong> times the original injection.'
      },

      interactiveDiagram: {
        svgKey: 'multiplierRounds',
        wide: true,
        maxWidth: '100%',
        label: 'Click through the rounds',
        emoji: '\u{1F501}',
        layers: ['idl-1', 'idl-2', 'idl-3', 'idl-4'],
        views: [
          {
            label: 'R1: £100m',
            tone: 'blue',
            head: 'Round 1 — the headline injection',
            body: 'The government injects £100m into the economy – say a green-infrastructure programme. That money becomes direct income for the businesses, workers, and suppliers paid by the project.',
            analysis: '<strong>Cumulative income so far: £100m.</strong> Only the headline injection has reached the economy. The multiplier hasn’t kicked in yet – this is just £1 of spending creating £1 of income.'
          },
          {
            label: '+ R2: £80m',
            tone: 'blue',
            head: 'Round 2 — spending becomes income',
            body: 'Of that £100m, MPC = 0.8 → £80m gets re-spent on goods and services. The other £20m leaks into saving and never comes back. The £80m becomes income for a fresh set of households.',
            analysis: '<strong>Cumulative income so far: £180m.</strong> The £80m extra appears because <em>spending becomes income</em>. The £20m that leaked is gone for good – it won’t feature in any later round. Already, the economy has felt 1.8× the headline shock.'
          },
          {
            label: '+ R3: £64m',
            tone: 'blue',
            head: 'Round 3 — the chain narrows',
            body: 'Of round 2’s £80m, MPC = 0.8 → £64m is re-spent. The other £16m leaks. The pattern is now clear: each round is exactly <strong>MPC × the previous round</strong>.',
            analysis: '<strong>Cumulative income so far: £244m.</strong> Each round contributes a smaller slice because more income has leaked at each prior step. This is the geometric series in action: ΔJ × (1 + MPC + MPC² + …).'
          },
          {
            label: '+ R4: £51m',
            tone: 'blue',
            head: 'Round 4 — diminishing returns',
            body: 'Round 4 adds £51.2m. Round 5 will add £40.96m. The rounds keep coming forever but each one is 80% of the last.',
            analysis: '<strong>Cumulative income so far: £295.2m.</strong> We’re past the halfway mark to the £500m ceiling but the rounds are getting much smaller now. After round 10 each new round is contributing less than £15m.'
          },
          {
            label: '+ R5 onward → £500m',
            tone: 'rose',
            head: 'The full geometric sum',
            body: 'Round 5 adds £41m. Round 6 adds £33m. Round 7 adds £26m. The series continues for ever, but the total converges – it doesn’t grow without limit.',
            analysis: '<strong>The infinite sum converges to £100m × 1/(1−0.8) = £500m</strong> – exactly where the dashed purple line meets the red ceiling. With k = 5, the £100m injection has become £500m of national income. The multiplier is just <em>the limit of this shrinking chain</em>.'
          }
        ]
      },
      flowTitle: 'The geometric series in symbols',
      flowEmoji: '\u{2207}',
      flowSep: '+',
      flow: [
        { tone: 'blue', icon: '1', title: 'ΔJ',           sub: 'round 1' },
        { tone: 'blue', icon: '2', title: 'ΔJ · MPC',     sub: 'round 2' },
        { tone: 'blue', icon: '3', title: 'ΔJ · MPC²',    sub: 'round 3' },
        { tone: 'blue', icon: '4', title: 'ΔJ · MPC³',    sub: 'round 4' },
        { tone: 'slate', icon: '\u{2026}', title: 'sum = ΔJ × 1/(1−MPC)', sub: 'the ceiling' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The multiplier is not a single number stamped on the economy – it is the infinite sum of a shrinking series. The bigger the MPC, the more each round preserves, the higher the ceiling.'
      },
      examEdge: 'Strong answers state the <em>mechanism</em> – spending becomes income, then a fraction of that becomes the next round of spending – not just the final formula.'
    },

    /* ============================================================
       CARD 2 – The four propensities (MPC, MPS, MPT, MPM)
       ============================================================ */
    {
      id: 'four-propensities',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 4',
      title: 'The four propensities',
      lede: 'Every extra £1 of income is split four ways – consumed, saved, taxed, or spent on imports. Only the consumed slice keeps the multiplier alive; the other three are <strong>leakages</strong>.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'MPC + MPS + MPT + MPM = 1. The bigger the leakages, the smaller the multiplier.' },

      visualKey: 'multiplierPropensities',
      visualLabel: 'Where the next £1 goes',
      visualEmoji: '\u{1F4B7}',

      causesFirst: true,
      causesLabel: 'The four propensities',
      causesEmoji: '\u{1F4D0}',
      causes: [
        { tone: 'blue',   icon: '\u{1F6D2}', head: 'MPC',  body: '<strong>Marginal propensity to consume</strong> – the slice of an extra £1 that gets spent on domestic goods. ΔC / ΔY. Higher when interest rates are low or confidence is high.' },
        { tone: 'purple', icon: '\u{1F437}', head: 'MPS',  body: '<strong>Marginal propensity to save</strong> – the slice that goes into savings instead of being spent. ΔS / ΔY. Higher in recessions when households cut back.' },
        { tone: 'amber',  icon: '\u{1F3DB}\u{FE0F}', head: 'MPT',  body: '<strong>Marginal propensity to tax</strong> – the slice claimed by income tax, VAT and NI. ΔT / ΔY. Higher when tax rates rise or fiscal drag bites.' },
        { tone: 'green',  icon: '\u{1F30D}', head: 'MPM',  body: '<strong>Marginal propensity to import</strong> – the slice spent on foreign goods, leaking abroad. ΔM / ΔY. The UK has a relatively high MPM, which is why UK multipliers are smaller than the textbook value.' }
      ],

      causesNote: { tone: 'rose', text: '<strong>MPW = MPS + MPT + MPM</strong> – the marginal propensity to withdraw. This is the leakage at each round, and it sets the ceiling: bigger MPW → smaller multiplier.' },

      flowTitle: 'What changes each propensity',
      flowEmoji: '\u{1F39B}\u{FE0F}',
      flowSep: '·',
      flow: [
        { tone: 'blue',   icon: '\u{1F4C9}', title: 'Lower interest rates', sub: '→ higher MPC' },
        { tone: 'amber',  icon: '\u{1F3DB}\u{FE0F}', title: 'Tax rise',     sub: '→ higher MPT' },
        { tone: 'green',  icon: '\u{1F4B7}', title: 'Weaker £',             sub: '→ lower MPM' },
        { tone: 'purple', icon: '\u{1F627}', title: 'Recession fear',       sub: '→ higher MPS' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The four propensities are the dials that set the multiplier. The economy with the smallest leakages has the biggest multiplier – which is why textbook k = 5 belongs in a closed economy with no tax.'
      },
      examEdge: 'Use the spec terminology – <strong>MPC, MPS, MPT, MPM</strong> – not the older MRT / MRM you may see in textbooks. Examiners reward precision.'
    },

    /* ============================================================
       CARD 3 – Worked Example (preserved from prior iteration)
       ============================================================ */
    {
      id: 'multiplier-worked',
      template: 'worked-example',
      stepLabel: 'Learn: Step 3 of 4',
      title: 'Worked Example: Calculating the Multiplier Effect',
      scenario: 'The UK government announces a <strong>£10bn green infrastructure programme</strong> – new offshore wind farms built using domestic contractors. A macro analyst is asked to estimate the total impact on national income.\n\nGiven: MPS = 0.15 · MPT = 0.25 · MPM = 0.10',
      steps: [
        {
          label: 'Step 1 – Sum the leakage rates',
          hint: 'The full multiplier formula uses three leakages. What do MPS, MPT, and MPM each represent, and what is their sum here?',
          answer: '<strong>MPS</strong> (marginal propensity to save) = 0.15 – fraction of each extra £1 of income that is saved.\n<strong>MPT</strong> (marginal propensity to tax) = 0.25 – fraction taken in tax.\n<strong>MPM</strong> (marginal propensity to import) = 0.10 – fraction spent on imports (leaks abroad).\n\n<strong>Total leakage rate = MPS + MPT + MPM = 0.15 + 0.25 + 0.10 = 0.50</strong>\n\nHalf of every additional pound of income leaks out of the domestic circular flow.'
        },
        {
          label: 'Step 2 – Calculate the multiplier (k)',
          hint: 'Apply the full leakage formula. What is k = 1 ÷ (total leakage rate)?',
          answer: '<strong>k = 1 ÷ (MPS + MPT + MPM) = 1 ÷ 0.50 = 2.0</strong>\n\nEvery £1 of government injection will generate £2 of national income in total – £1 direct + £1 from successive re-spending rounds.'
        },
        {
          label: 'Step 3 – Calculate the total change in national income (ΔY)',
          hint: 'Multiply the initial injection by k. What is the total income effect of the £10bn programme?',
          answer: '<strong>ΔY = k × ΔG = 2.0 × £10bn = £20bn</strong>\n\nThe £10bn injection raises national income by £20bn. Of this, £10bn is the direct effect; the remaining £10bn is the multiplied effect as income is re-spent round after round until all £20bn has leaked out.'
        },
        {
          label: 'Step 4 – Contrast with the simple (naïve) multiplier',
          hint: 'If a student used only MPS and ignored taxes and imports, what multiplier would they get – and why is it wrong?',
          answer: '<strong>Simple k = 1 ÷ MPS = 1 ÷ 0.15 = 6.7</strong> → would predict ΔY = <strong>£67bn</strong>.\n\nThat is <em>more than three times</em> the realistic estimate. The simple version ignores that each re-spending round also loses 25p to tax and 10p to imports per £1. Using k = 1/(1−MPC) without accounting for MPT and MPM is a common exam error – and an easy mark lost.'
        },
        {
          label: 'Step 5 – Evaluate: will the full £20bn materialise?',
          hint: 'Even with a correct multiplier, what real-world factors could mean the actual income gain is less (or more) than £20bn?',
          answer: '<strong>Factors that could reduce the effect below £20bn:</strong>\n• <em>Spare capacity limit:</em> if the economy is near full employment, extra demand becomes inflation, not extra output – the real multiplier falls toward zero.\n• <em>Crowding out:</em> if the programme is debt-financed, higher borrowing may raise interest rates → private investment falls → partially offsets G.\n• <em>Confidence:</em> if households expect future tax rises to repay the debt, they may save the extra income rather than spend it.\n• <em>Time lags:</em> the full chain takes 18–24 months – the economy may have recovered before the effect plays through.\n\n<strong>Examiner\'s note:</strong> stating a specific k value (e.g. k = 2) and then evaluating the real-world limits is a 4–5 mark structure in Paper 2 data-response questions.'
        }
      ],
      conclusion: {
        label: 'Key result',
        text: 'k = 2.0 → ΔY = £20bn. The full-leakage multiplier (accounting for MPS, MPT, and MPM) gives a result roughly 3× smaller than the naïve formula. In the UK, realistic multipliers are typically 1.2–1.7 – far below the textbook k = 5 that students sometimes mis-apply.'
      }
    },

    /* ============================================================
       CARD 4 – The multiplier in action (AD shift, downward, limits)
       ============================================================ */
    {
      id: 'multiplier-in-action',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 4',
      title: 'The multiplier in action',
      lede: 'A small injection produces a much larger AD shift, because the multiplier amplifies it. The same mechanism runs in reverse in a downturn – and several real-world frictions dampen the textbook ceiling.',
      ledeStyle: 'plain',
      tip: { icon: '✓', tone: 'green', text: 'ΔAD = k × ΔJ. The headline injection is just the first step; the multiplier is what the economy actually feels.' },

      visualKey: 'multiplierAdAs',
      visualLabel: 'A £10bn injection becomes a £k × 10bn AD shift',
      visualEmoji: '\u{1F4C8}',

      pairFirst: true,
      pairLabel: 'Both directions matter',
      pairEmoji: '\u{2195}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2B06}\u{FE0F}',
        iconStyle: 'circle',
        label: 'The upward multiplier',
        text: 'A rise in any injection (I, G, X) shifts AD right by <strong>k × ΔJ</strong>. Real output and the price level both rise. This is the boost side – the case for fiscal stimulus and the reason policy effects are bigger than their headline cost.'
      },
      right: {
        tone: 'amber',
        icon: '\u{2B07}\u{FE0F}',
        iconStyle: 'circle',
        label: 'The downward multiplier',
        text: 'A fall in any injection – or a rise in any withdrawal – shifts AD left by the same multiple. Recessions deepen faster than the headline shock suggests, because <strong>confidence collapses</strong> and the spending chain runs in reverse.'
      },

      causesLabel: 'What dampens the textbook ceiling',
      causesEmoji: '\u{1F6A7}',
      causes: [
        { tone: 'blue',   icon: '\u{23F1}\u{FE0F}', head: 'Time lags',           body: 'The full chain plays out over 18–24 months. By then the cycle may have moved on, weakening the effect.' },
        { tone: 'amber',  icon: '\u{1F3ED}', head: 'Supply-side limits',  body: 'Near full employment the multiplier hits an output ceiling and spills into prices, not real output.' },
        { tone: 'purple', icon: '\u{1F4B0}', head: 'Crowding out',        body: 'Debt-financed stimulus can raise interest rates and squeeze private investment, partially offsetting the boost.' },
        { tone: 'green',  icon: '\u{1F30D}', head: 'High UK MPM',         body: 'A high marginal propensity to import means stimulus leaks abroad – realistic UK k ≈ 1.5, not the textbook 5.' }
      ],

      flowTitle: 'One that amplifies further',
      flowEmoji: '\u{1F680}',
      flowSep: '→',
      flow: [
        { tone: 'rose',   icon: '\u{1F4C8}', title: 'Y rises',             sub: 'after the multiplier' },
        { tone: 'rose',   icon: '\u{1F3ED}', title: 'Firms invest more',   sub: 'the accelerator' },
        { tone: 'rose',   icon: '\u{1F501}', title: 'AD shifts further',   sub: 'feedback into the multiplier' }
      ],

      conclusionPosition: 'end',
      conclusion: {
        title: 'Big idea',
        text: 'The multiplier links any injection or withdrawal to a much bigger swing in AD. The accelerator can pile on; supply-side limits, time lags, crowding out and import leakage hold it back.'
      },
      examEdge: 'Top marks state the multiplier <em>both ways</em> – the symmetric downward case is what separates A from A*. Quote a realistic UK k (~1.5) when evaluating fiscal stimulus, not the textbook 5.',

      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
