/* ============================================================
   ECONOS – Economies & Diseconomies of Scale (Edexcel A 3.3.3)
   6 cards · interactive-first build
   Maps the spec sub-points: internal economies/diseconomies,
   external economies/diseconomies, minimum efficient scale and
   the U-shape of the long-run average cost curve (LRAC).

   Card patterns:
     1 Decompose (annotated U-shaped LRAC + 3 region tiles)
     2 Hub-and-spoke (5 internal economies around Lower AC)
     3 Hub-and-spoke (5 diseconomies around A growing organisation)
     4 Decompose (LRAC with MES marked + industry comparison)
     5 Twin pair (4 external economies vs 4 diseconomies)
     6 Sequential flow chain (synthesis – uses existing blocks)

   New visuals:
     - lracBigPicture          (Card 1 hero)
     - internalEconomiesHub    (Card 2 hero) [TODO]
     - diseconomiesHub         (Card 3 hero) [TODO]
     - mesChart                (Card 4 hero) [TODO]
     - externalEconomies       (Card 5 hero) [TODO]
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'economies-and-diseconomies-of-scale',
  topicNum: '3.3.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Economies & Diseconomies of Scale',
  estTime: '15 min',
  goal: 'Explain why long-run average cost falls then rises with output, name the five internal economies and five diseconomies, and judge minimum efficient scale by industry',

  intro: {
    heroKey: 'heroFirm',
    summary: 'When a firm grows, its long-run average cost (LRAC) usually falls at first – the result of internal economies of scale like bulk buying, specialisation and cheaper finance. Beyond a certain output (the minimum efficient scale), costs flatten out and then start rising as the firm runs into diseconomies of scale: communication failures, bureaucracy, motivation issues. External economies (skilled labour pools, infrastructure, supplier clusters) and external diseconomies (congestion, higher rents, pollution) come from the firm’s surroundings rather than its own choices. Together they explain the shape of the LRAC curve – the single most important diagram in this part of the spec.',
    doInThis: 'Sketch and label a U-shaped LRAC curve with its three regions (economies, MES, diseconomies). Name the five internal economies and five diseconomies, and give a real-world example of each. Distinguish internal from external effects, and use the LRAC framework to judge whether growth would lower or raise unit costs in a given context.',
    outcomes: [
      'Sketch the LRAC curve and label the three regions',
      'Name and explain five internal economies of scale',
      'Name and explain five diseconomies of scale',
      'Distinguish internal from external economies and diseconomies',
      'Identify the minimum efficient scale (MES) for different industries'
    ],
    tip: 'The LRAC diagram is the spine of this topic – everything else is an explanation of why one part of the curve looks the way it does.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 15 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ====================================================================
       CARD 1 – The big picture
       Pattern: Decompose a diagram (annotated U-shaped LRAC)
       Hero is the classic LRAC with three labelled regions and three
       summary tiles. Sets up the rest of the topic — each subsequent
       card explains why one part of the curve looks the way it does.
       ==================================================================== */
    {
      id: 'eds-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 6',
      title: 'Economies and diseconomies of scale – the big picture',
      lede: 'As output rises, average cost often falls at first, then may rise if the firm becomes too large to manage efficiently.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4B7}', tone: 'green', text: '<strong>Average cost</strong> often falls with scale before diseconomies can push it back up. The shape is U.' },

      visualKey: 'lracBigPicture',
      visualLabel: 'THE LRAC CURVE — long-run average cost',
      visualEmoji: '\u{1F4C9}',

      flowTitle: 'WHY COSTS CHANGE',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Bigger scale',     sub: 'Unit costs fall as the firm grows through bulk buying, specialisation and cheaper finance.' },
        { tone: 'blue',   icon: '\u{1F3AF}', title: 'Specialisation',   sub: 'Tasks are divided, equipment is dedicated, processes are streamlined.' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Lower unit cost',  sub: 'Fixed costs are spread and operating costs per unit drop.' },
        { tone: 'rose',   icon: '\u{1F6A7}', title: 'But too much complexity can reverse this', sub: 'Management gaps and communication breakdowns push costs back up.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Remember: we usually analyse average cost <strong>per unit</strong>, not just total cost. The curve is about efficiency, not the size of the firm.' },

      conclusion: { title: 'Big idea', text: 'Growth can make a firm more efficient – but only up to a point. Beyond MES, scale starts to work against the firm.' },
      examEdge: 'Always sketch the LRAC and label the three regions. Strong answers explain <strong>why</strong> the curve looks U-shaped, not just <em>what</em> it looks like.'
    }

    /* ====================================================================
       Cards 2-6 to follow in the next ship.
       - Card 2: Why costs fall (5 internal economies hub)
       - Card 3: When size becomes a problem (5 diseconomies hub)
       - Card 4: Minimum efficient scale (LRAC with MES + industry compare)
       - Card 5: External economies and diseconomies (twin pair)
       - Card 6: The whole story (synthesis flow + tile grids)
       ==================================================================== */
  ]
};
