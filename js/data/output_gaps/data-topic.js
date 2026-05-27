window.ECONOS_TOPIC = {
  id: 'output_gaps',
  topicNum: '5.2',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Output Gaps',
  estTime: '7-9 minutes',
  goal: 'Understand positive and negative output gaps, their causes, how they are measured, and their policy implications.',

  intro: {
    heroKey: 'heroGrowth',
    summary: 'An output gap measures the difference between actual GDP and potential GDP. A negative output gap (recession) means spare capacity and unemployment; a positive output gap (boom) means inflationary pressure. Output gaps are central to understanding when demand-side policy is appropriate.',
    doInThis: 'Content coming soon – this topic will cover the definition and measurement of output gaps, the distinction between actual and potential output, the policy response to each type of gap, and real-world UK examples.',
    outcomes: [
      'Define a positive and negative output gap and show both on an AD/AS diagram',
      'Explain the relationship between output gaps and the trade cycle',
      'Evaluate the policy response to a recessionary output gap'
    ],
    tip: 'A negative output gap = actual GDP < potential GDP = deflationary pressure, spare capacity, unemployment above NAIRU. A positive output gap = actual GDP > potential GDP = inflationary pressure, labour market tightness.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'output_gaps_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Output gaps: coming soon',
      lede: 'This topic is under construction. Full content covering output gap measurement, causes, and policy implications will be added shortly.',
      branches: [
        { tone: 'green',  label: 'Negative output gap', sub: 'Actual GDP < potential GDP. Spare capacity, unemployment above NAIRU, deflationary pressure. Policy response: expansionary.' },
        { tone: 'rose',   label: 'Positive output gap', sub: 'Actual GDP > potential GDP. Capacity constraints, unemployment below NAIRU, inflationary pressure. Policy response: contractionary.' },
        { tone: 'blue',   label: 'Potential GDP',       sub: 'The output level achievable at full employment with no inflation acceleration – grows over time with supply-side improvements.' },
        { tone: 'amber',  label: 'Measurement',         sub: 'Output gaps are unobservable and must be estimated. OBR estimates matter for fiscal policy decisions – errors lead to policy mistakes.' }
      ],
      body: 'Full content for this topic is being developed. The key concepts to cover are: the definition of potential GDP, how output gaps are estimated (HP filter, production function approach), the policy implications of each type of gap, and the relationship between output gaps, inflation, and the NAIRU.',
      examEdge: 'Output gaps connect AD/AS analysis to the Phillips curve. A negative output gap → unemployment above NAIRU → deflationary pressure on the SRPC. A positive output gap → unemployment below NAIRU → inflationary pressure. This linkage is tested across multiple exam questions.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }
  ]
};
