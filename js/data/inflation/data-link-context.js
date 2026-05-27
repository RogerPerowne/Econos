/* ============================================================
   ECONOS – Link It · Context station data
   Inflation: read a news extract, classify the evidence
   ============================================================ */

window.ECONOS_LINK_STATION = {
  topic:        'Causes of Inflation & Deflation',
  backUrl:      TopicLoader.routes.link('intro'),
  nextUrl:      TopicLoader.routes.link('chain'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 0,

  station: {
    type:        'context',
    eyebrow:     'Use the context',
    question:    'Which details in the extract matter most for judging whether the Bank of England should raise interest rates further?',
    instruction: 'Tap a highlighted phrase in the extract, then tap the bucket where it belongs. Focus on what changes the answer, not just what sounds economic.',

    extract: [
      'The Office for National Statistics confirmed UK CPI inflation has [[cpi-level|risen to 6.8%]], driven largely by a sharp rise in global energy prices following supply disruption in major producing regions.',
      '[[energy|Energy prices have risen by 18%]] over the past three months, pushing up firms\' production and transport costs across the economy.',
      'However, [[wages|wage growth stands at 3.1%]], below the rate of inflation, meaning real wages are falling for most workers.',
      'The Bank of England\'s Monetary Policy Committee is considering a further 50 basis point rise in the base rate, having already raised rates from 0.1% to 4.5% over the past two years.',
      '[[confidence|Consumer confidence remains weak]], with the GfK index at -30, reflecting the squeeze on household budgets from higher energy bills.',
      'A minority of economists warn that a further rate rise risks [[recession|tipping the economy into recession]], given that output growth is already close to zero.'
    ],

    evidence: {
      'cpi-level':  { text: 'risen to 6.8%' },
      'energy':     { text: 'Energy prices have risen by 18%' },
      'wages':      { text: 'wage growth stands at 3.1%' },
      'confidence': { text: 'Consumer confidence remains weak' },
      'recession':  { text: 'tipping the economy into recession' }
    },

    buckets: [
      { id: 'raises',      label: 'Supports raising rates',         tone: 'green', icon: '↑' },
      { id: 'against',     label: 'Argues against raising rates',   tone: 'pink',  icon: '↓' },
      { id: 'complicates', label: 'Complicates the case either way', tone: 'blue',  icon: '?' }
    ],

    correct: {
      'cpi-level':  'raises',
      'energy':     'complicates',
      'wages':      'complicates',
      'confidence': 'against',
      'recession':  'against'
    },

    explain: {
      'cpi-level':  'CPI at 6.8% is well above the 2% target, confirming inflation is high – this is the clearest direct justification for a rate rise to anchor expectations and cool demand.',
      'energy':     'A cost-push energy shock is the origin of this inflation. Rate rises work on demand, not supply costs, so their effectiveness here is limited – the shock complicates the case for tightening.',
      'wages':      'Real wages falling means workers are already suffering a squeeze on purchasing power. This suggests demand is not the primary driver of inflation, complicating the justification for further rate rises.',
      'confidence': 'With consumer confidence already weak, a further rate rise would tighten conditions on households already under strain – arguing against raising rates when demand may already be cooling.',
      'recession':  'If output growth is near zero, a further rate rise could tip the economy into recession – this is a significant argument against raising rates given the fragile growth outlook.'
    },

    bucketCue: 'Good application uses context to change the conclusion.',

    examBridge: '"With inflation at 6.8% and driven by a supply-side energy shock, the case for further rate rises is genuinely uncertain: rates can anchor expectations, but if the shock is temporary, a rate rise imposes output costs without removing the underlying pressure."',

    whatGoodLooksLike: [
      { icon: '🔍',  text: 'Use evidence from the extract'        },
      { icon: '❓',  text: 'Ask which details matter most'        },
      { icon: '⚖️',  text: 'Separate evidence from judgement'     }
    ]
  }
};
