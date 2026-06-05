/* ============================================================
   ECONOS – Demergers (Edexcel A 3.1.3)
   5 cards · interactive-first build
   Maps the spec sub-points: 3.1.3a (reasons for demergers),
   3.1.3b (impact on businesses, workers and consumers).

   Card patterns (justified C1-C2 decompose repeat – the two
   visuals decompose structurally different things: C1 the WHAT
   of a demerger, C2 the WHY):
     1 Decompose (before/after structural tree) + tile grid + tile grid
     2 Decompose (6-spoke hub of motives) + flow chain + three-tile pair
     3 Side-by-side pair (Gains vs Risks) + flow + small pair
     4 Evidence-then-verdict (workers + consumers + judge) + pair + small pair
     5 Sequential flow chain (6-step demerger story) + tile grid + tile grid + flow

   Two new visuals share the existing hub grammar:
     - demergerBeforeAfter (pure SVG before/after tree)
     - demergerReasonsHub (6-reason hub mirroring firmStaySmallHub)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'demergers',
  topicNum: '3.1.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Demergers',
  estTime: '12 min',
  goal: 'Explain why firms demerge, and judge the impact on businesses, workers and consumers',

  intro: {
    heroKey: 'heroFirm',
    summary: 'A demerger is the opposite of growth by merger – it splits a diversified firm into two or more focused businesses. Firms demerge to sharpen strategy, unlock shareholder value, remove non-core divisions, reduce diseconomies of scale, separate risk and clarify incentives. The verdict is rarely simple: a split can help businesses but disrupt workers and consumers, and the short-run pain often differs from the long-run gain.',
    doInThis: 'Define a demerger and contrast it with a merger or takeover. Explain the six main reasons firms demerge. Weigh the business gains against the risks, and judge the impact on workers and consumers in the short and long run.',
    outcomes: [
      'Define a demerger and distinguish it from a merger or takeover',
      'Explain the main reasons firms choose to split',
      'Evaluate the impact on the business: gains in focus vs loss of scale',
      'Judge the impact on workers and consumers in the short and long run'
    ],
    tip: 'A demerger is judged by outcomes, not by the fact of separation. Strong answers always link the split to a real problem it solves.',
    stages: [
      { num: 1, name: 'Learn',  sub: '5 cards \xb7 12 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – Demergers: the big picture
       Pattern: Decompose (before/after structural tree) + tile grid + tile grid
       ==================================================================== */
    {
      id: 'demergers-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 5',
      title: 'Demergers – the big picture',
      lede: 'A demerger happens when a business splits part of itself into a separate company.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A <strong>demerger</strong> is the opposite of growing by merger – it <strong>separates activities</strong> rather than combining them.' },

      visualKey: 'demergerBeforeAfter',
      visualLabel: 'WHAT A DEMERGER IS',
      visualEmoji: '\u{1F3DB}️',
      visualCaption: 'A demerger splits a diversified parent business. It can create a new standalone company (spin-off) or involve the disposal of a division to outside owners.',

      causesLabel: 'WHY IT HAPPENS',
      causesEmoji: '\u{1F3AF}',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '\u{1F3AF}', head: 'Sharper focus',                 body: 'Allows management to concentrate on fewer activities and improve performance.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Unlock shareholder value',      body: 'The market may value separate businesses more highly.' },
        { tone: 'blue',   icon: '⊖',         head: 'Remove non-core or weak divisions', body: 'Gets rid of activities that do not fit the strategy or drag down results.' },
        { tone: 'blue',   icon: '⚖️',        head: 'Reduce complexity / diseconomies', body: 'Smaller, simpler firms can avoid coordination costs and bureaucracy.' }
      ],

      causes2Label: 'WHAT TO REMEMBER',
      causes2Emoji: '\u{1F4D1}',
      causes2Cols: 3,
      causes2: [
        { tone: 'green',  icon: '\u{1F3DB}️', head: 'Separate businesses',     body: 'Demergers create two or more independent companies with their own management and financials.' },
        { tone: 'green',  icon: '↔️',         head: 'Different from a merger', body: 'A demerger separates; a merger combines activities under one ownership.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'Judged by stakeholder impact', body: 'Success depends on how it affects businesses, workers and consumers.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Demergers are usually about <strong>focus</strong>, <strong>incentives</strong> and <strong>value</strong> – not just getting smaller for the sake of it.' },

      conclusion: { title: 'BIG IDEA', text: 'Demergers <strong>separate activities</strong> to create sharper focus, unlock value and improve performance.' },
      examEdge: 'Define a demerger, then explain why the firm expected it to <strong>improve performance</strong> and how it affects stakeholders.'
    },

    /* ====================================================================
       CARD 2 – Why firms demerge
       Pattern: Decompose (6-spoke hub of motives) + flow chain + three-tile pair
       ==================================================================== */
    {
      id: 'demergers-why-firms-demerge',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 5',
      title: 'Why firms demerge',
      lede: 'Businesses usually split because they believe separate firms will be worth more or work better apart than together.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: '<strong>Demergers</strong> are usually about <strong>focus</strong>, <strong>value</strong> or <strong>reducing complexity</strong>.' },

      visualKey: 'demergerReasonsHub',
      visualLabel: 'THE MAIN REASONS',
      visualEmoji: '\u{1F3AF}',

      flowTitle: 'HOW THE LOGIC WORKS',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'blue',   icon: '\u{1F3DB}️', title: 'Complex parent firm',          sub: '' },
        { tone: 'green',  icon: '\u{1F9E9}', title: 'Activities do not fit well together', sub: '' },
        { tone: 'purple', icon: 'Y',          title: 'Demerger / spin-off',          sub: '' },
        { tone: 'green',  icon: '\u{1F3DB}️', title: 'More focused separate businesses', sub: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'A demerger is often chosen when <strong>the whole business is worth less together than apart</strong>.' },

      causes2Label: 'DON’T CONFUSE IT WITH',
      causes2Emoji: '⚖️',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '\u{1F3DB}️', head: 'Merger',   body: 'Combines firms.' },
        { tone: 'green',  icon: '\u{1F6D2}', head: 'Takeover', body: 'One firm buys another.' },
        { tone: 'purple', icon: 'Y',          head: 'Demerger', body: 'One firm splits.' }
      ],

      conclusion: { title: 'BIG IDEA', text: 'Firms demerge when they think separation will improve <strong>focus, incentives and value</strong>.' },
      examEdge: 'Explain the <strong>reason for the demerger</strong>, then link it to how performance might improve.'
    },

    /* ====================================================================
       CARD 3 – Impact on businesses
       Pattern: Side-by-side pair (Gains vs Risks) + flow + small pair
       ==================================================================== */
    {
      id: 'demergers-impact-on-businesses',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 5',
      title: 'Impact on businesses',
      lede: 'A demerger can sharpen strategy and performance, but it can also create costs and risks.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The business effect is a <strong>trade-off</strong> between greater focus and the loss of some scale benefits.' },

      pairLabel: 'GAINS VS RISKS',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Potential gains',
        text: '<ul style="margin:0;padding:0;list-style:none;font-size:13px;color:#0B1426;line-height:1.55;">' +
              '<li style="padding:8px 0;border-bottom:1px solid #BBF7D0;display:flex;gap:10px;"><span style="color:#16A34A;font-size:18px;flex-shrink:0;">\u{1F3AF}</span><span><strong>Clearer strategy.</strong> Each firm can focus on its own market.</span></li>' +
              '<li style="padding:8px 0;border-bottom:1px solid #BBF7D0;display:flex;gap:10px;"><span style="color:#16A34A;font-size:18px;flex-shrink:0;">\u{1F464}</span><span><strong>Better accountability.</strong> Managers can be judged more clearly.</span></li>' +
              '<li style="padding:8px 0;border-bottom:1px solid #BBF7D0;display:flex;gap:10px;"><span style="color:#16A34A;font-size:18px;flex-shrink:0;">\u{1F4C8}</span><span><strong>Higher valuation.</strong> Investors may price focused firms more accurately.</span></li>' +
              '<li style="padding:8px 0;display:flex;gap:10px;"><span style="color:#16A34A;font-size:18px;flex-shrink:0;">⏱️</span><span><strong>Faster decisions.</strong> Less bureaucracy and internal conflict.</span></li>' +
              '</ul>'
      },
      right: {
        tone: 'rose', icon: '⚠️', iconStyle: 'circle',
        label: 'Potential risks',
        text: '<ul style="margin:0;padding:0;list-style:none;font-size:13px;color:#0B1426;line-height:1.55;">' +
              '<li style="padding:8px 0;border-bottom:1px solid #FECACA;display:flex;gap:10px;"><span style="color:#DC2626;font-size:18px;flex-shrink:0;">\u{1F4E6}</span><span><strong>Loss of economies of scale.</strong> Bulk buying or shared services may shrink.</span></li>' +
              '<li style="padding:8px 0;border-bottom:1px solid #FECACA;display:flex;gap:10px;"><span style="color:#DC2626;font-size:18px;flex-shrink:0;">\u{1F4C4}</span><span><strong>Duplication of costs.</strong> Two head offices, finance teams, and systems.</span></li>' +
              '<li style="padding:8px 0;border-bottom:1px solid #FECACA;display:flex;gap:10px;"><span style="color:#DC2626;font-size:18px;flex-shrink:0;">£</span><span><strong>Separation costs.</strong> Legal, branding, and restructuring expenses.</span></li>' +
              '<li style="padding:8px 0;display:flex;gap:10px;"><span style="color:#DC2626;font-size:18px;flex-shrink:0;">\u{1F91D}</span><span><strong>Weaker bargaining power.</strong> Smaller firms may have less market strength.</span></li>' +
              '</ul>'
      },

      flowTitle: 'WHEN IT IS MORE LIKELY TO HELP',
      flowEmoji: '\u{1F4C8}',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '\u{1F9E9}', title: 'Non-core division',     sub: '' },
        { tone: 'green', icon: '⊗',         title: 'Poor strategic fit',    sub: '' },
        { tone: 'green', icon: '\u{1F465}', title: 'Separate customer base', sub: '' },
        { tone: 'green', icon: '⭐',         title: 'Strong management team', sub: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Demergers tend to work best when the split <strong>creates clearer focus</strong> without destroying major synergies.' },

      causes3Label: 'SHORT RUN VS LONG RUN',
      causes3Emoji: '⏱️',
      causes3Cols: 2,
      causes3: [
        { tone: 'blue',  icon: '\u{1F4C9}', head: 'Short run', body: 'Disruption and one-off costs.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Long run',  body: 'Possible efficiency and stronger performance.' }
      ],

      conclusion: { title: 'BIG IDEA', text: 'A demerger helps the business <strong>only if the gains from focus outweigh the loss of scale and synergies</strong>.' },
      examEdge: 'Always weigh advantages against disadvantages – a demerger is <strong>not automatically a success</strong>.'
    },

    /* ====================================================================
       CARD 4 – Impact on workers and consumers
       Pattern: Evidence-then-verdict (workers + consumers + judge) + pair + small pair
       ==================================================================== */
    {
      id: 'demergers-impact-on-workers-and-consumers',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 5',
      title: 'Impact on workers and consumers',
      lede: 'Demergers can create winners and losers depending on whether the split improves efficiency, competition, and service.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Stakeholder impact is mixed – the same demerger may <strong>help some groups and hurt others</strong>.' },

      pairLabel: 'THE TWO STAKEHOLDERS',
      pairEmoji: '\u{1F465}',
      left: {
        tone: 'blue', icon: '\u{1F465}', iconStyle: 'circle',
        label: 'Workers',
        text: '<div style="background:#ECFDF5;border:1px solid #BBF7D0;border-radius:10px;padding:11px 13px;margin-bottom:10px;">' +
              '<div style="font-weight:800;color:#16A34A;font-size:13px;margin-bottom:6px;">✅ Possible benefits</div>' +
              '<ul style="margin:0;padding:0 0 0 16px;font-size:12.5px;color:#0B1426;line-height:1.55;">' +
              '<li>Clearer roles and responsibilities.</li>' +
              '<li>Stronger incentives and performance.</li>' +
              '<li>Career paths in focused firms.</li>' +
              '</ul></div>' +
              '<div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:10px;padding:11px 13px;">' +
              '<div style="font-weight:800;color:#DC2626;font-size:13px;margin-bottom:6px;">⊖ Possible costs</div>' +
              '<ul style="margin:0;padding:0 0 0 16px;font-size:12.5px;color:#0B1426;line-height:1.55;">' +
              '<li>Redundancies and job losses.</li>' +
              '<li>Uncertainty during and after the split.</li>' +
              '<li>Office closures and relocations.</li>' +
              '<li>Changes to contracts or culture.</li>' +
              '</ul></div>'
      },
      right: {
        tone: 'purple', icon: '\u{1F6D2}', iconStyle: 'circle',
        label: 'Consumers',
        text: '<div style="background:#ECFDF5;border:1px solid #BBF7D0;border-radius:10px;padding:11px 13px;margin-bottom:10px;">' +
              '<div style="font-weight:800;color:#16A34A;font-size:13px;margin-bottom:6px;">✅ Possible benefits</div>' +
              '<ul style="margin:0;padding:0 0 0 16px;font-size:12.5px;color:#0B1426;line-height:1.55;">' +
              '<li>Better products and higher quality.</li>' +
              '<li>Stronger service and support.</li>' +
              '<li>More innovation and new ideas.</li>' +
              '<li>More competition and choice.</li>' +
              '</ul></div>' +
              '<div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:10px;padding:11px 13px;">' +
              '<div style="font-weight:800;color:#DC2626;font-size:13px;margin-bottom:6px;">⊖ Possible costs</div>' +
              '<ul style="margin:0;padding:0 0 0 16px;font-size:12.5px;color:#0B1426;line-height:1.55;">' +
              '<li>Higher prices if scale is lost.</li>' +
              '<li>Disruption to supply or service.</li>' +
              '<li>Less convenience for some customers.</li>' +
              '<li>Weaker nationwide coverage.</li>' +
              '</ul></div>'
      },

      flowTitle: 'HOW TO JUDGE THE OUTCOME',
      flowEmoji: '\u{1F50D}',
      flowSep: '→',
      flow: [
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Did efficiency rise?',         sub: '' },
        { tone: 'blue', icon: '£',         title: 'Did costs fall or rise?',     sub: '' },
        { tone: 'blue', icon: '\u{1F396}️', title: 'Did quality or choice improve?', sub: '' },
        { tone: 'blue', icon: '\u{1F465}', title: 'Who gained most?',            sub: '' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Consumers benefit only if the extra focus turns into <strong>better value, quality, or competition</strong>.' },

      causes3Label: 'SHORT RUN VS LONG RUN',
      causes3Emoji: '⚖️',
      causes3Cols: 2,
      causes3: [
        { tone: 'blue',  icon: '⏱️',         head: 'Short run', body: 'Uncertainty for staff and disruption for customers.' },
        { tone: 'green', icon: '\u{1F4C5}', head: 'Long run',  body: 'Possible gains if the new firms perform better.' }
      ],

      conclusion: { title: 'BIG IDEA', text: 'Demergers are <strong>judged by stakeholder outcomes</strong>, not just by whether the business becomes smaller.' },
      examEdge: 'For workers and consumers, <strong>explain both sides</strong> before reaching a final judgement.'
    },

    /* ====================================================================
       CARD 5 – The whole story
       Pattern: Sequential flow chain (6-step demerger story) + tile grid + tile grid + flow
       ==================================================================== */
    {
      id: 'demergers-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 5',
      title: 'The whole story',
      lede: 'Strong answers define the demerger, explain why it happened, and then judge the effect on businesses, workers, and consumers.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A demerger is successful <strong>only if separation solves a real problem and improves outcomes overall</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F3DB}️', title: 'Large or diversified firm',     sub: '' },
        { tone: 'amber',  icon: '⚠️',         title: 'Problem emerges',               sub: 'weak fit, complexity, or poor performance' },
        { tone: 'purple', icon: '\u{1F3DB}️', title: 'Demerger / spin-off',           sub: '' },
        { tone: 'blue',   icon: '\u{1F3E2}', title: 'Separate focused firms',        sub: '' },
        { tone: 'amber',  icon: '\u{1F465}', title: 'Stakeholder effects',           sub: 'business, workers, consumers' },
        { tone: 'green',  icon: '⚖️',         title: 'Final judgement',              sub: 'success or failure depends on context' }
      ],

      causesLabel: 'COMMON EVALUATION POINTS',
      causesEmoji: '\u{1F3AF}',
      causesCols: 4,
      causes: [
        { tone: 'blue', icon: '?',           head: 'Why demerge?',                body: 'Focus on the original motive.' },
        { tone: 'blue', icon: '\u{1F4CA}',   head: 'Business impact',             body: 'Efficiency, costs, profitability, value.' },
        { tone: 'blue', icon: '\u{1F465}',   head: 'Workers and consumers',       body: 'Mixed effects are common.' },
        { tone: 'blue', icon: '⏱️',          head: 'Short run vs long run',       body: 'Disruption now, possible gains later.' }
      ],

      causes2Label: 'COMMON MISTAKES',
      causes2Emoji: '⚠️',
      causes2Cols: 3,
      causes2: [
        { tone: 'rose', icon: '✗',           head: 'Demerger is not a merger.',             body: '' },
        { tone: 'rose', icon: '\u{1F4C9}',   head: 'Smaller is not always better.',          body: '' },
        { tone: 'rose', icon: '\u{1F465}',   head: 'Do not ignore stakeholder conflicts.',   body: '' }
      ],

      flow2Title: 'HOW TO WRITE IT',
      flow2Emoji: '✏️',
      flow2Sep: '→',
      flow2: [
        { tone: 'purple', icon: '1', title: 'Define',         sub: 'Define demerger and the context.' },
        { tone: 'purple', icon: '2', title: 'Explain motive', sub: 'Explain why the demerger happened.' },
        { tone: 'purple', icon: '3', title: 'Assess impact',  sub: 'Assess the effects on businesses, workers, and consumers.' },
        { tone: 'purple', icon: '4', title: 'Judge overall',  sub: 'Make a final judgement based on the trade-offs.' }
      ],

      conclusion: { title: 'BIG IDEA', text: 'Demergers are about <strong>separating activities to improve focus, value, and performance</strong> – but the final verdict depends on the trade-offs.' },
      examEdge: 'Top answers explain the <strong>reason for the demerger</strong> and then weigh the effects on businesses, workers, and consumers.'
    }
  ]
};
