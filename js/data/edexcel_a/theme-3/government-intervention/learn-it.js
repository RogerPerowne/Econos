/* ============================================================
   ECONOS – Government Intervention (Edexcel A 3.6.1)
   5 cards · interactive-first build · intro & overview
   Built from the ChatGPT → Claude mockup pipeline.
   (First of four government-intervention sub-topics.)

   Card patterns (no two consecutive repeat; one dominant tile-grid):
     1 Sequential flow chain (the big chain) + tiles + core-test pair
     2 Comparison / mapping (problem → harm → policy) + distinctions
     3 Tile grid (3 toolboxes) + how-to-choose flow
     4 Hub (stakeholder map) + same-policy-effects + evaluation
     5 Evidence-then-verdict (synthesis + how-to-write)

   New visual (js/icons.js):
     - govStakeholderHub  (Card 4 hub)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'government-intervention',
  topicNum: '3.6.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Government Intervention',
  estTime: '13 min',
  goal: 'Understand why and how governments intervene in market structures — diagnosing the problem, matching a policy tool, and judging the effects on every stakeholder',

  intro: {
    heroKey: 'heroFirm',
    summary: 'Governments intervene in markets when market power or weak competition produces worse outcomes — higher prices, restricted output, weaker efficiency or unequal power. This overview deck sets up the whole approach: why governments intervene, what problems they are trying to fix, the toolkit they can reach for, who each policy protects, and how to judge whether the benefits outweigh the risks. The later sub-topics drill into competition policy, regulation and the diagrams in detail.',
    doInThis: 'Explain why governments intervene and the harms they respond to. Identify the main market-structure problems and match each to a policy tool. Map who is protected — consumers, rivals, employees, suppliers and taxpayers — and weigh the trade-offs. Finally, judge intervention against the risk of government failure.',
    outcomes: [
      'Explain why governments intervene in market structures',
      'Identify the problems intervention is meant to fix',
      'Describe the main intervention tools',
      'Map who each policy protects and who bears the cost',
      'Evaluate intervention against the risk of government failure'
    ],
    tip: 'The phrase to reach for is diagnose, then treat — match the policy tool to the source of harm.',
    stages: [
      { num: 1, name: 'Learn',  sub: '5 cards \xb7 13 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Government intervention: the big picture
       Pattern: Sequential flow chain (the big chain) + tiles + core-test pair
       ==================================================================== */
    {
      id: 'gi-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 5',
      title: 'Government intervention — the big picture',
      lede: 'Governments intervene when market power or weak competition creates worse outcomes than a better-designed market could deliver.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Intervention is about <strong>improving outcomes</strong> — but government failure is always a risk too.' },

      causesFirst: true,
      causesLabel: 'WHY INTERVENE',
      causesEmoji: '\u{2753}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Higher prices', body: 'Monopoly power can raise prices above competitive levels.' },
        { tone: 'amber',  icon: '\u{1F4C9}', head: 'Lower output / choice', body: 'Consumers may get less variety or less service.' },
        { tone: 'blue',   icon: '\u{1F634}', head: 'Weaker efficiency', body: 'Lack of pressure can reduce innovation and productivity.' },
        { tone: 'purple', icon: '⚖️', head: 'Unequal power', body: 'Powerful firms may exploit suppliers or workers.' }
      ],

      flowTitle: 'THE BIG CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Market power', sub: 'A firm dominates.' },
        { tone: 'amber',  icon: '⚠️', title: 'Harm', sub: 'Consumers or suppliers lose out.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Government steps in', sub: 'It sees a problem.' },
        { tone: 'purple', icon: '\u{1F6E0}️', title: 'Intervention', sub: 'A policy tool is used.' },
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Better outcomes?', sub: 'If it works — judge it.' }
      ],

      causes3Label: 'THE TOOLKIT PREVIEW',
      causes3Emoji: '\u{1F9F0}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue',   icon: '\u{1F517}', head: 'Merger control', body: 'Block or limit harmful mergers.' },
        { tone: 'purple', icon: '\u{1F4CF}', head: 'Monopoly regulation', body: 'Cap prices or profits.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Promote competition', body: 'Lower barriers, support entry.' },
        { tone: 'amber',  icon: '\u{1F3DB}️', head: 'Public ownership', body: 'Run key services in the public interest.' }
      ],

      pairLabel: 'Why intervene vs why be cautious',
      pairEmoji: '⚖️',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'Why intervene',
        points: ['Correct market failure', 'Protect consumers and workers', 'Fairer, more efficient outcomes']
      },
      right: {
        tone: 'rose',
        icon: '⚠️',
        iconStyle: 'circle',
        label: 'Why be cautious',
        points: ['Government failure is possible', 'Information gaps and lags', 'Unintended effects and capture']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention can target market power once it is becoming worse — but a heavy hand can make things worse too.' },

      conclusion: { title: 'Big idea', text: 'Government intervention tries to fix the harms of market power — without creating new problems of its own.' },
      examEdge: 'Identify the <strong>exact problem</strong> — monopoly, merger, weak contestability or monopsony — before choosing a policy.'
    },

    /* ====================================================================
       CARD 2 – What is government trying to fix?
       Pattern: Comparison / mapping (problem → harm → policy) + distinctions
       ==================================================================== */
    {
      id: 'gi-what-to-fix',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 5',
      title: 'What is government trying to fix?',
      lede: 'Government intervention responds to particular market-structure problems, not just a vague dislike of big firms.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Name the problem first — then match the policy to the <strong>source of harm</strong>.' },

      causesFirst: true,
      causesLabel: 'PROBLEM → HARM → POLICY',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'rose',   icon: '\u{1F451}', head: 'Monopoly power', body: '<strong>Harm:</strong> high prices and restricted output. &nbsp; <strong>Policy:</strong> price or profit regulation, or breaking up dominance.' },
        { tone: 'amber',  icon: '\u{1F517}', head: 'Merger threat', body: '<strong>Harm:</strong> a merger may reduce competition and raise prices. &nbsp; <strong>Policy:</strong> merger control — block, allow or attach conditions.' },
        { tone: 'blue',   icon: '\u{1F6AA}', head: 'Weak contestability', body: '<strong>Harm:</strong> entry barriers protect lazy incumbents. &nbsp; <strong>Policy:</strong> promote competition and deregulate to ease entry.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Monopsony power', body: '<strong>Harm:</strong> a powerful buyer squeezes wages or supplier prices. &nbsp; <strong>Policy:</strong> protections for workers and suppliers.' }
      ],

      causes3Label: 'QUICK DISTINCTIONS',
      causes3Emoji: '\u{1F50D}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'rose',   icon: '\u{1F451}', head: 'Monopoly', body: 'One dominant seller with market power.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Monopsony', body: 'One dominant buyer with buyer power.' },
        { tone: 'green',  icon: '\u{1F6AA}', head: 'Contestability', body: 'The threat of entry disciplines firms.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Intervention can target market power even before it is fully abused — if a merger threatens to create it.' },

      conclusion: { title: 'Big idea', text: 'Good intervention starts with a clear diagnosis — the harm decides the policy.' },
      examEdge: 'In essays, identify the <strong>exact problem</strong> — monopoly, merger, weak contestability or monopsony — before deciding.'
    },

    /* ====================================================================
       CARD 3 – The intervention toolkit
       Pattern: Tile grid (3 toolboxes) + how-to-choose flow
       ==================================================================== */
    {
      id: 'gi-toolkit',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 5',
      title: 'The intervention toolkit',
      lede: 'Governments have several ways to influence market outcomes — some control power, some promote competition, and some protect weaker groups.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The best answers link each tool to the <strong>problem it is trying to solve</strong>.' },

      causesFirst: true,
      causesLabel: 'THREE TOOLBOXES',
      causesEmoji: '\u{1F9F0}',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'rose',   icon: '\u{1F6E1}️', head: 'Control market power', body: 'Merger control, price regulation (e.g. RPI−X caps), profit regulation, and quality or performance standards.' },
        { tone: 'green',  icon: '\u{1F4C8}', head: 'Promote competition', body: 'Deregulation, support for small business, and — at the limit — breaking up dominant firms.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Protect suppliers and employees', body: 'Restrictions on monopsony power, nationalisation, and safeguards or codes of practice.' }
      ],

      flowTitle: 'HOW TO CHOOSE THE TOOL',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F50D}', title: 'Diagnose the problem', sub: 'What is the harm?' },
        { tone: 'purple', icon: '\u{1F6E0}️', title: 'Choose the policy', sub: 'Match a tool to it.' },
        { tone: 'amber',  icon: '\u{1F52E}', title: 'Predict the effect', sub: 'On price, output, quality.' },
        { tone: 'rose',   icon: '⚠️', title: 'Consider side effects', sub: 'And government failure.' },
        { tone: 'green',  icon: '⚖️', title: 'Judge', sub: 'Do the benefits win?' }
      ],

      causes3Label: 'EXAMPLES OF THE MATCH',
      causes3Emoji: '\u{1F3AF}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'blue',   icon: '\u{1F517}', head: 'Merger → merger control', body: 'A risky takeover is blocked or conditioned.' },
        { tone: 'purple', icon: '\u{1F4CF}', head: 'Natural monopoly → price cap', body: 'A regulator caps utility prices.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Monopsony → protection', body: 'A minimum wage or supplier code applies.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'One tool can fix one problem and create another — a price cap can deter the investment a market needs.' },

      conclusion: { title: 'Big idea', text: 'The right tool depends on the problem: control power, open up competition, or protect the weak side of the market.' },
      examEdge: 'Do not list policies mechanically — explain the <strong>transmission mechanism</strong> from tool to outcome.'
    },

    /* ====================================================================
       CARD 4 – Who is being protected?
       Pattern: Hub (stakeholder map) + same-policy-effects + evaluation
       ==================================================================== */
    {
      id: 'gi-who-protected',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 5',
      title: 'Who is being protected?',
      lede: 'Intervention affects different groups in different ways, so evaluation must look beyond consumers alone.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Always ask <strong>who gains, who loses, and over what time period</strong>.' },

      visualKey: 'govStakeholderHub',
      visualLabel: 'THE STAKEHOLDER MAP',
      visualEmoji: '\u{1F465}',

      causesFirst: true,
      causesLabel: 'SAME POLICY, DIFFERENT EFFECTS',
      causesEmoji: '⚖️',
      causesStyle: 'numbered-rows',
      causes: [
        { tone: 'blue',   icon: '\u{1F4CF}', head: 'Price regulation', body: '<strong>Gain:</strong> consumers pay lower prices. &nbsp; <strong>Risk:</strong> firms may cut investment or quality if returns fall.' },
        { tone: 'green',  icon: '\u{1F3E2}', head: 'Privatisation', body: '<strong>Gain:</strong> competition and efficiency may improve. &nbsp; <strong>Risk:</strong> public control is lost; a private monopoly may form.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Nationalisation', body: '<strong>Gain:</strong> services run in the public interest. &nbsp; <strong>Risk:</strong> weaker incentives can mean lower efficiency.' }
      ],

      causes3Label: 'WHAT MAKES EVALUATION STRONG',
      causes3Emoji: '\u{1F3AF}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'blue',   icon: '⏱️', head: 'Short vs long run', body: 'Effects can reverse over time.' },
        { tone: 'amber',  icon: '\u{1F4CF}', head: 'Price vs quality', body: 'Lower prices may cost quality.' },
        { tone: 'green',  icon: '⚖️', head: 'Efficiency vs equity', body: 'Fairness and efficiency can clash.' },
        { tone: 'rose',   icon: '⚠️', head: 'Government failure', body: 'The cure can be worse than the disease.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'One policy can affect several outcomes — price, quality, innovation, entry and fairness — at once.' },

      conclusion: { title: 'Big idea', text: 'Every policy creates winners and losers — strong evaluation weighs them all, not just consumers.' },
      examEdge: 'Name the <strong>stakeholders</strong> a policy helps and harms, then judge the net effect in context.'
    },

    /* ====================================================================
       CARD 5 – The whole story
       Pattern: Evidence-then-verdict (synthesis + how-to-write)
       ==================================================================== */
    {
      id: 'gi-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 5',
      title: 'The whole story',
      lede: 'Government intervention in market structures is about identifying a problem, choosing a tool, and judging whether the benefits outweigh the risks.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Top answers move from <strong>diagnosis → policy → impact → evaluation</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose',   icon: '\u{1F3E2}', title: 'Market problem', sub: 'Power or weak competition.' },
        { tone: 'amber',  icon: '⚠️', title: 'Source of harm', sub: 'Who loses, and how.' },
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Government objective', sub: 'What it wants to fix.' },
        { tone: 'purple', icon: '\u{1F6E0}️', title: 'Policy tool', sub: 'The intervention used.' },
        { tone: 'green',  icon: '\u{1F465}', title: 'Stakeholder effects', sub: 'Winners and losers.' },
        { tone: 'green',  icon: '⚖️', title: 'Final judgement', sub: 'Do benefits win?' }
      ],

      causesLabel: 'COMMON EVALUATION TESTS',
      causesEmoji: '\u{1F9EA}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F50D}', head: 'Real market failure?', body: 'Is the problem genuine and significant?' },
        { tone: 'amber',  icon: '⚠️', head: 'Unintended consequence?', body: 'What could the policy break?' },
        { tone: 'rose',   icon: '\u{1F3DB}️', head: 'Could government failure be worse?', body: 'Is the cure worse than the disease?' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'purple', icon: '\u{1F4C4}', head: '1 · Define the problem', body: 'Name the market-structure issue.' },
        { tone: 'purple', icon: '\u{1F6E0}️', head: '2 · Explain the tool', body: 'How the policy works.' },
        { tone: 'purple', icon: '⚖️', head: '3 · Assess benefits and costs', body: 'Across stakeholders.' },
        { tone: 'purple', icon: '\u{1F3AF}', head: '4 · Make a judgement', body: 'On balance, in context.' }
      ],

      causes3Label: 'WHAT TO REMEMBER',
      causes3Emoji: '\u{1F4CC}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'green', icon: '\u{1F3AF}', head: 'Competition is a means', body: 'Not an end in itself.' },
        { tone: 'blue',  icon: '\u{1F30D}', head: 'Context matters', body: 'The right policy depends on the market.' },
        { tone: 'amber', icon: '\u{1F3E2}', head: 'Big firms ≠ always bad', body: 'Scale can bring real benefits.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Intervention should help', body: 'It must improve real outcomes.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Government intervention is a toolkit, not a single lever — match the tool to the problem and judge the result.' },

      conclusion: { title: 'Big idea', text: 'Intervention is justified when it fixes a real problem and the benefits beat the costs — including the risk of government failure.' },
      examEdge: 'Move from <strong>diagnosis to policy to impact to evaluation</strong>, and give a balanced final verdict.'
    }
  ]
};
