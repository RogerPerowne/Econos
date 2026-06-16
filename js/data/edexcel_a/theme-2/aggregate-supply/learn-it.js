/* ============================================================
   ECONOS – Characteristics of Aggregate Supply (Edexcel A 2.3.1)
   3 cards · ad-interactive template
   Maps the spec sub-points: 2.3.1a (the AS curve + Classical/Keynesian
   shapes), 2.3.1b (movement along vs shift), 2.3.1c (the SRAS↔LRAS
   relationship / self-correction back to Yf).
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
  estTime: '9 min',
  goal: 'Define aggregate supply, tell a movement from a shift, and relate short-run to long-run AS',

  intro: {
    heroKey: 'heroAggSupply',
    summary: 'Aggregate supply (AS) is the total output firms in the economy are willing and able to produce at each price level. It has two time horizons – short-run AS responds to immediate cost conditions, while long-run AS reflects the economy\'s underlying productive capacity. This topic covers the characteristics of AS as a concept; the next two topics dive into SRAS (2.3.2) and LRAS (2.3.3).',
    doInThis: 'Define aggregate supply and its two shapes, distinguish a movement along the AS curve from a shift of it, and see how short-run AS relates to long-run AS.',
    outcomes: [
      'Define aggregate supply and distinguish the Classical and Keynesian shapes',
      'Distinguish a movement along the AS curve from a shift of it',
      'Explain how short-run AS relates to long-run AS, and the return to Yf'
    ],
    tip: 'Two time horizons, one diagram – keep SR and LR distinct from the start.',
    stages: [
      { num: 1, name: 'Learn',  sub: '3 cards \xb7 9 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – What is Aggregate Supply? ----- */
    {
      id: 'what-is-as',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 3',
      title: 'What is Aggregate Supply?',
      lede: 'Aggregate supply (AS) is the total output firms in the economy are willing and able to produce at each price level. It has two time horizons – SRAS in the short run and LRAS in the long run.',

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
    /* ----- CARD 2 – Movement along vs shift (2.3.1b) ----- */
    {
      id: 'as-movement-shift',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 3',
      title: 'Movement along vs shift',
      lede: 'A change in the price level moves the economy ALONG the AS curve. A change in a determinant SHIFTS the whole curve. Getting this right is the foundation of every AS answer.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'Price level change → a <strong>movement ALONG</strong> AS. Determinant change → a <strong>SHIFT of</strong> AS.' },

      // Uses SRAS as the worked example. srasShiftInteractive shows a
      // cost-push left shift with the original curve dashing on shift.
      interactiveDiagram: {
        svgKey: 'srasShiftInteractive',
        label: 'A SHIFT OF SRAS',
        emoji: '📊',
        layers: ['idl-1', 'idl-2'],
        inverseLayers: ['idl-old-solid'],
        views: [
          {
            label: 'A movement starts here', show: [], tone: 'blue',
            head: 'On SRAS₁ at E₁.',
            body: ['AD meets SRAS₁ at E₁. If <strong>AD alone</strong> changes, the economy slides ALONG this fixed curve – a <strong>movement</strong>.', 'The curve itself does not move.'],
            analysis: 'A movement along SRAS is caused by a change in the price level (driven by AD). Same curve, different point.'
          },
          {
            label: 'A determinant changes', show: ['idl-1'], tone: 'rose',
            head: 'SRAS₁ → SRAS₂ – the whole curve shifts.',
            body: ['Now a <strong>determinant</strong> changes – dearer energy, a weaker pound or higher taxes raise costs at every output level.', 'The entire curve moves left to SRAS₂ (the old curve dashes).'],
            analysis: 'A shift is caused by a change in a determinant, not by the price level. That is the whole distinction.'
          },
          {
            label: 'A new equilibrium', show: ['idl-1', 'idl-2'], tone: 'rose',
            head: 'A new equilibrium at E₂.',
            body: ['Output falls and the price level rises (E₂). Output at <em>every</em> price level has changed.'],
            analysis: 'After a shift, every price level maps to a different output – that is what “the curve moved” means.'
          }
        ]
      },

      pairLabel: 'TELL THEM APART',
      pairEmoji: '↔️',
      left: {
        tone: 'blue', icon: '↔️', iconStyle: 'circle',
        label: 'Movement along AS',
        points: ['Caused by a change in the price level.', 'The economy stays on the SAME curve.', 'A different point on one fixed AS.']
      },
      right: {
        tone: 'green', icon: '→', iconStyle: 'circle',
        label: 'Shift of AS',
        points: ['Caused by a change in a determinant.', 'The WHOLE curve moves left or right.', 'Output changes at every price level.']
      },

      causesLabel: 'WHAT CAUSES A SHIFT',
      causesEmoji: '⚙️',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'amber',  icon: '🛢️', head: 'SRAS determinants', body: 'Raw-material & energy costs, exchange rates, tax rates – the short-run cost factors (2.3.2).' },
        { tone: 'purple', icon: '🏛️', head: 'LRAS determinants', body: 'Technology, productivity, skills, regulation, demographics, competition – the capacity factors (2.3.3).' },
        { tone: 'blue',   icon: '↔️', head: 'NOT the price level', body: 'A price-level change is a movement, never a shift. Diagnose this first.' }
      ],

      conclusion: { title: 'Big idea', text: 'A price-level change moves you ALONG AS; a determinant change SHIFTS AS.' },
      examEdge: 'Before explaining any outcome, state whether the change describes a <strong>movement along</strong> or a <strong>shift of</strong> the AS curve.'
    },

    /* ----- CARD 3 – From short run to long run (2.3.1c) ----- */
    {
      id: 'as-sr-to-lr',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 3',
      title: 'From short run to long run',
      lede: 'Short-run AS and long-run AS describe the same economy over different horizons. In the short run output can sit away from capacity; in the long run it is anchored to LRAS at full-capacity output Yf.',
      ledeStyle: 'plain',

      tip: { icon: '✅', tone: 'green', text: 'SRAS reacts to costs <em>now</em>; LRAS fixes where output settles in the <strong>long run</strong>.' },

      interactiveDiagram: {
        svgKey: 'asSrToLr',
        label: 'THE SELF-CORRECTION',
        emoji: '📊',
        layers: ['sras1-solid', 'sras1-dash', 'shock', 'shock-dash', 'correct'],
        views: [
          {
            label: 'Long-run equilibrium', show: ['sras1-solid'], tone: 'slate',
            head: 'On LRAS at Yf.',
            body: ['AD meets SRAS₁ on the vertical LRAS at E₁ – output is at potential Yf, price level P₁.', 'Here the short run and long run agree.'],
            analysis: 'When the economy sits on LRAS, SRAS and LRAS give the same output. This is long-run equilibrium.'
          },
          {
            label: 'A shock (short run)', show: ['sras1-dash', 'shock'], tone: 'rose',
            head: 'A cost shock shifts SRAS left.',
            body: ['Dearer inputs push SRAS₁ → SRAS₂. The economy moves to E₂: output Y₂ falls <strong>below</strong> potential Yf and the price level rises.', 'A negative output gap (Yf − Y₂) opens.'],
            analysis: 'In the short run, output can sit away from LRAS. Right now it is SRAS – not LRAS – that fixes output.'
          },
          {
            label: 'Self-correction (long run)', show: ['sras1-solid', 'shock-dash', 'correct'], tone: 'green',
            head: 'SRAS returns; output back to Yf.',
            body: ['With output below capacity, spare resources push wages and costs back down, so SRAS shifts back to SRAS₁.', 'The economy returns to E₁ on LRAS at Yf.'],
            analysis: 'Classical view: the long run anchors output to LRAS at Yf – the short-run deviation self-corrects. Keynesians argue sticky wages make this slow or incomplete, so output can stay below Yf until policy acts.'
          }
        ]
      },

      pairLabel: 'TWO HORIZONS, ONE ECONOMY',
      pairEmoji: '⚖️',
      left: {
        tone: 'blue', icon: '⏱️', iconStyle: 'circle',
        label: 'SRAS – the short run',
        points: ['Reacts to costs, exchange rates and taxes.', 'Output can deviate from capacity.', 'Sets output right now.']
      },
      right: {
        tone: 'purple', icon: '🌄', iconStyle: 'circle',
        label: 'LRAS – the long run',
        points: ['Fixed by productive capacity.', 'Output is anchored at Yf.', 'Where the economy settles over time.']
      },

      causesLabel: 'HOW THEY RELATE',
      causesEmoji: '🔗',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'rose',  icon: '⚡', head: 'Short run: off the anchor', body: 'A shock moves SRAS, so output sits above or below potential Yf.' },
        { tone: 'amber', icon: '🔁', head: 'Adjustment: SRAS moves', body: 'The output gap pushes costs up or down, so SRAS shifts back toward Yf.' },
        { tone: 'green', icon: '🎯', head: 'Long run: back to LRAS', body: 'Output returns to capacity Yf on the vertical LRAS.' }
      ],

      conclusion: { title: 'Big idea', text: 'SRAS sets output in the short run; LRAS anchors it in the long run. The two are linked by the adjustment back to Yf.' },
      examEdge: 'Use SRAS for the immediate effect of a shock, then explain how the economy moves back toward LRAS at Yf in the long run (and note the Keynesian doubt about how fast).'
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

