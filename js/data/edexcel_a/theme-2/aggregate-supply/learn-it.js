/* ============================================================
   ECONOS – Characteristics of Aggregate Supply (Edexcel A 2.3.1)
   2 cards · ad-interactive template
   Split from the legacy `aggregate-supply` topic on 2026-06-05 to
   match the spec sub-section structure: 2.3.1 / 2.3.2 / 2.3.3.
   Sub-topics live under `short-run-aggregate-supply` (2.3.2) and
   `long-run-aggregate-supply` (2.3.3).
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'aggregate-supply',
  topicNum: '2.3.1',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Characteristics of Aggregate Supply',
  estTime: '6 min',
  goal: 'Define aggregate supply and see how it fits the AD/AS model',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Aggregate supply (AS) is the total output firms in the economy are willing and able to produce at each price level. It has two time horizons – short-run AS responds to immediate cost conditions, while long-run AS reflects the economy\'s underlying productive capacity. This topic covers the characteristics of AS as a concept; the next two topics dive into SRAS (2.3.2) and LRAS (2.3.3).',
    doInThis: 'Define aggregate supply, distinguish movement along from shift, and place AS inside the AD/AS model.',
    outcomes: [
      'Define aggregate supply and distinguish SR from LR',
      'Distinguish movement along the AS curve from a shift of it',
      'Locate AS in the AD/AS framework'
    ],
    tip: 'Two time horizons, one diagram – keep SR and LR distinct from the start.',
    stages: [
      { num: 1, name: 'Learn',  sub: '2 cards \xb7 6 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – What is Aggregate Supply? ----- */
    {
      id: 'what-is-as',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 2',
      title: 'What is Aggregate Supply?',
      lede: 'Aggregate supply (AS) is the total output firms in the economy are willing and able to produce at each price level.\nAS has two time horizons – SRAS in the short run and LRAS in the long run.',

      tip: { icon: '✅', tone: 'green', text: 'AS is about economy-wide output, not the supply of one product.' },

      causesFirst: true,
      causesLabel: 'THE CORE IDEA',
      causesEmoji: '💡',
      causesStyle: 'tinted-flat',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '📊', head: 'Aggregate supply',  body: 'The total planned output at each price level across the whole economy.' },
        { tone: 'amber',  icon: '📈', head: 'SRAS',              body: 'Short run aggregate supply. Upward sloping – as prices rise, firms supply more. Costs can be sticky.' },
        { tone: 'purple', icon: '🏛️', head: 'LRAS',              body: 'Long run aggregate supply. Vertical at productive capacity (Yf). Prices do not change LRAS.' }
      ],

      // Classical ↔ Keynesian toggle. The toggle IS the lesson here:
      // the two schools disagree about the SHAPE of AS itself.
      //   Classical: SRAS (sloping) + LRAS (vertical at Yf)
      //   Keynesian: reverse-L AS – flat floor, bottleneck, vertical at Yf
      // View 1 shows just the AS curve(s); View 2 adds AD + the
      // equilibrium point E₁ at the schools' (different) intersections.
      interactiveDiagram: {
        svgKey: 'asIntroClassicalKeynesian',
        label: 'THE BASIC DIAGRAM',
        emoji: '📊',
        layers: ['ad', 'e1'],
        perspectives: ['classical', 'keynesian'],
        perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
        views: [
          {
            label: 'The AS curve', show: [],
            classical: {
              tone: 'purple',
              head: 'Classical view – two curves, two horizons.',
              body: ['<strong>SRAS</strong> slopes upward: in the short run, sticky wages mean rising prices boost profit margins so firms supply more.', '<strong>LRAS</strong> is vertical at Yf: in the long run, output is determined by capacity, not the price level.'] },
            keynesian: {
              tone: 'amber',
              head: 'Keynesian view – one reverse-L curve.',
              body: ['A single AS curve with three ranges: a <strong>flat floor</strong> in deep slack (idle resources, unit costs unchanged), a <strong>bottleneck</strong> as the economy approaches capacity, and <strong>vertical</strong> at Yf.', 'Output is demand-constrained until capacity binds.'] }
          },
          {
            label: 'Add AD: equilibrium', show: ['ad', 'e1'],
            classical: {
              tone: 'purple',
              head: 'Long-run equilibrium at LRAS.',
              body: ['AD meets the AS framework at E₁ – in the long run, on the <strong>vertical LRAS at Yf</strong>.', 'Whatever AD does, output ends at Yf; the price level adjusts.'],
              analysis: 'Classical reading: long-run output is anchored to capacity. The only sustainable way to raise Y is to shift LRAS (supply-side policy). Demand-side levers move the price level around, not real output.' },
            keynesian: {
              tone: 'amber',
              head: 'Equilibrium on the rising range.',
              body: ['AD meets reverse-L AS on its <strong>rising range</strong> at E₁ – output Y₁ sits <em>below</em> capacity Yf.', 'Actual output is constrained by demand, not by supply.'],
              analysis: 'Keynesian reading: the economy can settle at less than full employment. Boosting AD raises real output (with some inflation as you near capacity); supply-side reform raises potential, but actual output still needs demand to follow.' }
          }
        ]
      },

      pairLabel: 'SRAS VS LRAS',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '📈', iconStyle: 'circle',
        label: 'SRAS',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Affected by wages, energy prices, taxes, import costs, productivity.</p>'
      },
      right: {
        tone: 'purple', icon: '🏛️', iconStyle: 'circle',
        label: 'LRAS',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Determined by labour, capital, technology, productivity and efficiency.</p>'
      },

      whyItMatters: {
        title: 'WHY IT MATTERS',
        emoji: '🎯',
        items: [
          { tone: 'blue',   icon: '📈', label: 'Inflation shocks', text: 'SRAS explains short-run cost-push inflation.' },
          { tone: 'amber',  icon: '📊', label: 'Growth potential', text: 'LRAS explains the economy\'s long-run capacity ceiling.' },
          { tone: 'green',  icon: '🔍', label: 'Diagnosis tool',   text: 'Together they help identify whether rising prices come from demand or supply.' }
        ]
      },

      conclusion: { title: 'Big idea', text: 'Short-run changes affect costs and inflation. Long-run changes affect the economy\'s productive capacity.' },
      examEdge: 'Strong essays distinguish movements along SRAS from shifts in SRAS – and they separate short-run supply conditions from long-run capacity.'
    },
    /* ----- CARD 2 – AS in the AD/AS model ----- */
    {
      id: 'as-in-adas',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 2',
      title: 'AS in the AD/AS model',
      lede: 'Compare supply-side improvements with demand-side stimulus. Both may raise output, but the inflation consequences differ.',

      tip: { icon: '✅', tone: 'green', text: 'The same output gain can come from stronger demand or stronger supply – but the price effect is different.' },

      // Two stacked interactive diagrams – both with Classical/Keynesian
      // toggles. Demand-side stimulus shows the textbook AD-right split
      // (Classical: only P; Keynesian: Y AND P). Supply-side improvement
      // shows the LRAS-right split (Classical: clean landing at Yf₂;
      // Keynesian: potential rises, actual lags).
      interactiveDiagram: [
        {
          svgKey: 'adShiftClassicalKeynesian',
          label: 'DEMAND-SIDE STIMULUS – AD SHIFTS RIGHT',
          emoji: '📈',
          layers: ['idl-1', 'idl-2'],
          inverseLayers: ['idl-old-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'Starting point', show: [],
              classical: { tone: 'purple', head: 'Classical view – at potential.', body: ['AD₁ meets vertical LRAS at Yf – price level P₁.'] },
              keynesian: { tone: 'amber', head: 'Keynesian view – spare capacity.', body: ['AD₁ meets the rising range of reverse-L AS, below capacity.'] } },
            { label: 'AD shifts right', show: ['idl-1'],
              classical: { tone: 'purple', head: 'AD₁ → AD₂.', body: ['Government spending, tax cuts or looser monetary policy raise demand.'] },
              keynesian: { tone: 'amber', head: 'AD₁ → AD₂.', body: ['Government spending, tax cuts or looser monetary policy raise demand.'] } },
            { label: 'New equilibrium', show: ['idl-1', 'idl-2'],
              classical: { tone: 'purple', head: 'ONLY prices rise.', body: ['Output stays at Yf; P₂ ≫ P₁ – purely inflationary.'], analysis: 'Classical reading: demand stimulus at potential is eaten by inflation. The case for fiscal restraint hinges on this verdict.' },
              keynesian: { tone: 'green', head: 'Output AND prices rise.', body: ['Y₂ &gt; Y₁ and P₂ &gt; P₁; the closer to Yf, the more leaks into prices.'], analysis: 'Keynesian reading: with spare capacity, demand stimulus delivers real output and jobs. Near Yf the trade-off worsens.' } }
          ]
        },
        {
          svgKey: 'lrasShiftRightClassicalKeynesian',
          label: 'SUPPLY-SIDE IMPROVEMENT – LRAS SHIFTS RIGHT',
          emoji: '⚙️',
          layers: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
          inverseLayers: ['c-lras1-solid', 'k-as1-solid'],
          perspectives: ['classical', 'keynesian'],
          perspectiveLabels: { classical: 'Classical view', keynesian: 'Keynesian view' },
          views: [
            { label: 'Starting point', show: [],
              classical: { tone: 'purple', head: 'At potential at E₁.', body: ['AD meets vertical LRAS₁ at Yf₁.'] },
              keynesian: { tone: 'amber', head: 'Below capacity at E₁.', body: ['AD meets reverse-L AS₁ on its rising range – Y₁ &lt; Yf₁.'] } },
            { label: 'Capacity rises', show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'k-as1-dash', 'k-as2', 'k-lr-arrow'],
              classical: { tone: 'green', head: 'LRAS₁ → LRAS₂.', body: ['Productivity, capital, labour, technology – capacity expands.'] },
              keynesian: { tone: 'green', head: 'Capacity wall slides right.', body: ['AS₁ → AS₂ is a parallel rightward shift; floor unchanged.'] } },
            { label: 'New equilibrium', show: ['c-lras1-dash', 'c-lras2', 'c-lr-arrow', 'c-e2', 'k-as1-dash', 'k-as2', 'k-lr-arrow', 'k-e2', 'k-yf2', 'k-gap'],
              classical: { tone: 'purple', head: 'Output up, prices down.', body: ['Y rises to Yf₂, P falls – sustainable non-inflationary growth.'], analysis: 'Classical reading: this is the prize – the corner demand-side levers can\'t reach.' },
              keynesian: { tone: 'rose', head: 'Potential up, output LAGS.', body: ['Actual Y₂ rises but sits BELOW the new potential Yf₂ – fresh output gap.'], analysis: 'Keynesian reading: supply-side reform raises the ceiling, but without demand catching up the new capacity goes partly unused.' } }
          ]
        }
      ],

      comparisonTable: {
        title: 'COMPARE THE OUTCOMES',
        emoji: '↔️',
        columns: ['Demand-side stimulus', 'Supply-side improvement'],
        columnTones: ['blue', 'green'],
        rows: [
          { label: '📊 Output',         values: ['Rises (AD shift)',               'Rises (capacity expands)'],             highlights: [false, true] },
          { label: '💹 Price level',    values: ['Rises (inflationary)',           'Stable or falling'],                    highlights: [false, true] },
          { label: '📅 Sustainability', values: ['Short-term boost',              'Long-term improvement'],                highlights: [false, true] },
          { label: '⚠️ Inflation risk', values: ['High near full employment',     'Low – capacity expands with output'],   highlights: [false, true] },
          { label: '🎯 Best use',       values: ['Recession / weak demand',       'Capacity constrained / high inflation'], highlights: [false, false] }
        ]
      },

      pairLabel: 'WHEN TO USE WHICH',
      pairEmoji: '🎯',
      left: {
        tone: 'blue', icon: '📉', iconStyle: 'circle',
        label: 'Weak AD and recession',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Demand management can help. Use fiscal or monetary policy to stimulate demand.</p>'
      },
      right: {
        tone: 'green', icon: '⚙️', iconStyle: 'circle',
        label: 'Capacity constraints and inflation pressure',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.6;">Supply-side reform is better. Expand productive capacity and remove supply-side bottlenecks.</p>'
      },

      tipLate: { tone: 'blue', icon: 'ℹ️', text: 'Combining both can work best: use demand policy when demand is weak now, but invest in supply-side improvements to raise potential output over time.' },

      conclusion: { title: 'Big idea', text: 'Demand policy changes spending. Supply policy changes capacity. The diagnosis determines the better cure.' },
      examEdge: 'Top essays compare the inflation impact – AD stimulus is more inflationary than supply-side expansion when the economy is close to full employment.'
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Aggregate Supply (combined)',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('aggregate-supply'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers SRAS vs LRAS, Classical vs Keynesian AS, and output gaps',
    shortNames: [
      'SRAS vs LRAS','Classical LRAS','Keynesian AS','SRAS shift','Output gap',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'The Short-Run Aggregate Supply (SRAS) curve slopes upward because:',
        opts: [
          'Higher prices attract more workers and capital into the economy',
          'Higher prices make it profitable for firms to increase output, even though some costs are fixed',
          'In the short run, all factor prices are perfectly flexible',
          'Higher prices reduce the cost of imports'
        ],
        ans:  1,
        exp:  'In the short run, some costs (especially wages) are sticky. When the price level rises, firms receive higher revenue but face unchanged costs – so they expand output. This gives an upward-sloping SRAS.'
      },
      {
        type: 'mcq',
        q:    'In the Classical model, the Long-Run Aggregate Supply (LRAS) curve is:',
        opts: [
          'Upward sloping like SRAS',
          'Downward sloping like AD',
          'Perfectly vertical at the full-employment output level',
          'Perfectly horizontal at a fixed price level'
        ],
        ans:  2,
        exp:  'Classical economists argue that in the long run, all prices and wages are fully flexible, so the economy always returns to full employment (potential output, Yf). LRAS is vertical – output is fixed by supply-side capacity.'
      },
      {
        type: 'mcq',
        q:    'In the Keynesian model, the AS curve is horizontal at low output levels because:',
        opts: [
          'All resources are fully employed and fully flexible',
          'There is so much spare capacity that output can rise without any upward price pressure',
          'The government controls all prices below potential output',
          'Investment determines prices rather than output'
        ],
        ans:  1,
        exp:  'Keynes argued that during a recession (with mass unemployment and idle capital), firms can expand output by hiring unemployed resources without bidding up wages or prices. The AS curve is flat in this range.'
      },
      {
        type: 'mcq',
        q:    'Which of the following would shift SRAS to the LEFT (upward)?',
        opts: [
          'A fall in oil prices',
          'An improvement in labour productivity',
          'A sharp rise in raw material costs',
          'A fall in corporation tax'
        ],
        ans:  2,
        exp:  'A rise in raw material costs (a negative supply shock) increases the cost of production at every level of output. Firms produce less at any given price – SRAS shifts left, pushing prices up and output down (stagflation risk).'
      },
      {
        type: 'numeric_input',
        q:    'Potential output is £2,000bn. Actual output is £1,700bn. What is the output gap (£bn) and state the sign (negative for a deflationary gap).',
        answer: -300,
        tolerance: 0,
        unit: '£bn',
        hint: 'Output gap = Actual output − Potential output.',
        workingSteps: ['Output gap = £1,700bn − £2,000bn = −£300bn (negative / deflationary gap)']
      },
      {
        type: 'categorise',
        q:    'Categorise each factor as shifting SRAS or shifting LRAS.',
        categories: ['Shifts SRAS','Shifts LRAS'],
        items: [
          { item: 'Rise in wages (nominal)',                    category: 'Shifts SRAS' },
          { item: 'Improvement in technology and productivity', category: 'Shifts LRAS' },
          { item: 'Fall in commodity prices',                   category: 'Shifts SRAS' },
          { item: 'Net immigration increasing labour force',    category: 'Shifts LRAS' },
          { item: 'Oil price spike',                            category: 'Shifts SRAS' },
          { item: 'Investment in infrastructure',               category: 'Shifts LRAS' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect on aggregate supply.',
        pairs: [
          { cause: 'Oil prices fall sharply',                   effect: 'SRAS shifts right; prices fall, output rises' },
          { cause: 'Labour productivity improves',              effect: 'LRAS shifts right; potential output increases' },
          { cause: 'Cost-push inflation hits wages and inputs', effect: 'SRAS shifts left; stagflation risk' },
          { cause: 'Economy produces above potential output',   effect: 'Positive output gap; upward wage and price pressure' },
          { cause: 'Government invests in worker training',     effect: 'Human capital rises; LRAS shifts right over time' },
          { cause: 'Recession leaves large negative output gap',effect: 'Deflationary pressure; unemployment above natural rate' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of SRAS shifters?',
        opts: ['Change in input costs','Change in commodity prices','Change in potential output','Change in nominal wages'],
        ans:  2,
        exp:  'Changes in input costs, commodity prices, and nominal wages all shift SRAS by changing the cost of production in the short run. A change in potential output shifts LRAS – it is a long-run supply-side concept.'
      },
      {
        type: 'data_table',
        q:    'Use the data to identify which scenario involves stagflation.',
        tableHeaders: ['Scenario','Change in Price Level','Change in Real Output','Cause'],
        tableData: [
          ['A','Rises','Rises','AD increases'],
          ['B','Falls','Rises','AS increases'],
          ['C','Rises','Falls','SRAS shifts left (cost-push)'],
          ['D','Falls','Falls','AD decreases (recession)']
        ],
        opts: ['Scenario A','Scenario B','Scenario C','Scenario D'],
        ans:  2,
        exp:  'Stagflation is the combination of rising prices AND falling output – the worst of both worlds. Scenario C shows rising prices with falling output caused by a leftward SRAS shift (negative supply shock).'
      },
      {
        type: 'match_pairs',
        q:    'Match each aggregate supply concept to its description.',
        pairs: [
          { a: 'SRAS',              b: 'Short-run supply where some costs are fixed; upward sloping' },
          { a: 'LRAS (Classical)',  b: 'Vertical supply at full employment; determined by supply-side factors' },
          { a: 'Keynesian AS',      b: 'Horizontal range at low output; upward range; then vertical' },
          { a: 'Output gap',        b: 'Difference between actual and potential output' },
          { a: 'Stagflation',       b: 'Simultaneous rise in prices and fall in real output' },
          { a: 'Supply-side shock', b: 'Unexpected change in production costs that shifts SRAS' }
        ]
      }
    ]
  };

})();

