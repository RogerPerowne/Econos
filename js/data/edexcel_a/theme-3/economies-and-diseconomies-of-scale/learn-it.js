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
     - internalEconomiesHub    (Card 2 hero, 5-spoke hub)
     - diseconomiesHub         (Card 3 hero, 5-spoke hub)
     - mesChart                (Card 4 hero, LRAC + industry compare)
     - externalEconomies       (Card 5 hero, twin pair)
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

      interactiveDiagram: {
        svgKey: 'lracBigPicture',
        label: 'THE LRAC CURVE — long-run average cost',
        emoji: '\u{1F4C9}',
        layers: ['els-2'],
        views: [
          {
            label: 'The LRAC U-shape',
            tone: 'blue',
            head: 'Step 1 — the long-run average cost curve',
            body: 'Average cost falls through <strong>economies of scale</strong>, flattens across the <strong>minimum efficient scale</strong> (the lowest-cost output range), then rises as <strong>diseconomies of scale</strong> set in — the U-shape.',
            show: []
          },
          {
            label: 'The SRAC envelope',
            tone: 'green',
            head: 'Step 2 — each plant size has its own SRAC',
            body: 'In the short run the firm is stuck with one plant size, giving a single <strong>SRAC</strong> curve. The LRAC is the <strong>envelope</strong> of all the SRACs — each just touches (is tangent to) the LRAC. Only the plant at <strong>MES</strong> is tangent at its own minimum.',
            analysis: 'On the falling part of LRAC a firm runs a plant below its own SRAC minimum; on the rising part, above it. Producing at minimum SRAC and minimum LRAC together happens only at the minimum efficient scale.',
            show: ['els-2']
          }
        ]
      },

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
    },

    /* ====================================================================
       CARD 2 – Why costs fall (5 internal economies)
       Pattern: Hub-and-spoke (5 internal economies around Lower AC)
       Mirrors firmSizeMeasuresHub grammar.
       ==================================================================== */
    {
      id: 'eds-internal-economies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 6',
      title: 'Why costs fall',
      lede: 'Internal economies of scale are the cost advantages a firm gains as it expands.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4C9}', tone: 'green', text: 'Larger scale buys <strong>lower average cost per unit</strong>. Five flavours of internal economies explain why.' },

      visualKey: 'internalEconomiesHub',
      visualLabel: 'THE FIVE INTERNAL ECONOMIES',
      visualEmoji: '\u{1F517}',

      flowTitle: 'HOW THE CHAIN WORKS',
      flowEmoji: '\u{1F4CA}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F4C8}', title: 'Bigger scale',     sub: 'The firm expands.' },
        { tone: 'amber', icon: '\u{1F3AF}', title: 'Specialisation', sub: 'Inputs and tasks are organised better.' },
        { tone: 'green', icon: '\u{2699}\u{FE0F}', title: 'Higher efficiency', sub: 'Resources are used more productively.' },
        { tone: 'rose',  icon: '\u{1F4B0}', title: 'Lower unit cost', sub: 'Average cost per unit falls.' }
      ],

      causesLabel: 'REAL-WORLD EXAMPLES',
      causesEmoji: '\u{1F3DB}\u{FE0F}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'amber', icon: '\u{1F6D2}', head: 'Supermarket bulk buying',  body: 'A major chain buys in bulk to push down unit costs from suppliers.' },
        { tone: 'blue',  icon: '\u{1F697}', head: 'Car factory automation',  body: 'A mass-production plant uses dedicated robotics each car costs less to assemble.' },
        { tone: 'green', icon: '\u{1F3E6}', head: 'Large firm cheaper borrowing', body: 'A FTSE 100 firm gets bank loans on better terms than a small business.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: '"Internal" means the economy arises from the firm’s <strong>own choices and growth</strong> – not from the surrounding industry.' },

      conclusion: { title: 'Big idea', text: 'Bigger scale unlocks efficiency through bulk buying, specialisation, cheaper finance and dedicated marketing – every channel reduces the cost per unit.' },
      examEdge: 'Always <strong>name</strong> the type of economy you are using (Technical / Purchasing / Managerial / Financial / Marketing), then explain the cost reduction mechanism.'
    },

    /* ====================================================================
       CARD 3 – When size becomes a problem (5 diseconomies)
       Pattern: Hub-and-spoke (5 diseconomies around A growing organisation)
       ==================================================================== */
    {
      id: 'eds-diseconomies',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 6',
      title: 'When size becomes a problem',
      lede: 'Beyond a certain point, growing firms can suffer diseconomies of scale and rising average costs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{26A0}\u{FE0F}', tone: 'green', text: 'Bigger is not always better – complexity can push <strong>unit costs back up</strong>.' },

      visualKey: 'diseconomiesHub',
      visualLabel: 'THE DISECONOMIES',
      visualEmoji: '\u{1F6A7}',

      flowTitle: 'THE COST CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'rose',  icon: '\u{1F4DA}', title: 'More layers',    sub: 'Extra management adds bureaucracy.' },
        { tone: 'amber', icon: '\u{1F40C}', title: 'Slower decisions', sub: 'Information moves more slowly through the firm.' },
        { tone: 'purple', icon: '\u{26A0}\u{FE0F}', title: 'Mistakes / duplication', sub: 'Teams repeat work or miss things entirely.' },
        { tone: 'rose',  icon: '\u{1F4C8}', title: 'Higher average cost', sub: 'Total cost rises faster than output, so AC rises.' }
      ],

      causesLabel: 'HOW TO SPOT IT',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',   icon: '\u{1F4BC}', head: 'Many employees, sites or product lines', body: 'A firm whose org chart sprawls across countries, departments and reporting layers.' },
        { tone: 'amber',  icon: '\u{1F50D}', head: 'Look for management complexity',         body: 'Many decisions delayed, many approvals required, many handoffs between teams.' },
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Look for rising unit cost',               body: 'Average cost rises even as output grows – the classic giveaway of diseconomies.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'Do not pair say a firm IS big – explain the mechanism from average cost to a firm gets too large.' },

      conclusion: { title: 'Big idea', text: 'Diseconomies are management problems that show up as <strong>rising average cost</strong>. The size that helped the firm earlier can start to hold it back.' },
      examEdge: 'Strong answers identify <strong>the specific mechanism</strong> (coordination, communication, motivation, bureaucracy, weak control) rather than just saying "the firm is too big".'
    },

    /* ====================================================================
       CARD 4 – Minimum efficient scale (MES)
       Pattern: Decompose a diagram (LRAC with MES + 3 industry mini-curves)
       ==================================================================== */
    {
      id: 'eds-mes',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 6',
      title: 'Minimum efficient scale',
      lede: 'MES is the output level at which long-run average cost is at or near its lowest sustainable level.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F3AF}', tone: 'green', text: 'MES tells us the <strong>most efficient scale</strong> of production – the smallest size at which long-run average cost is minimised.' },

      visualKey: 'mesChart',
      visualLabel: 'MES ON THE LRAC',
      visualEmoji: '\u{1F4C9}',

      flowTitle: 'WHY MES MATTERS',
      flowEmoji: '\u{1F50D}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'blue',  icon: '\u{1F4CA}', title: 'Small MES',     sub: 'Many firms can compete at low scale (cafés, hairdressers).' },
        { tone: 'amber', icon: '\u{1F3ED}', title: 'Large MES',     sub: 'Few firms survive, barriers to entry are high (steel, rail).' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Productive efficiency', sub: 'Firms operating at MES produce at the lowest possible cost per unit.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'A large MES helps explain why some industries are <strong>concentrated</strong> – only a few firms can reach the efficient scale.' },

      conclusion: { title: 'Big idea', text: 'MES sets the <strong>natural size</strong> of firms in an industry – it shapes how many competitors can survive and what unit costs the leaders can hit.' },
      examEdge: 'Use MES to explain why some industries have many small firms (low MES) while others are dominated by a handful of giants (high MES). It is a powerful link between cost theory and market structure.'
    },

    /* ====================================================================
       CARD 5 – External economies and diseconomies
       Pattern: Twin pair / decompose (4 external economies vs 4 diseconomies)
       ==================================================================== */
    {
      id: 'eds-external',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 6',
      title: 'External economies and diseconomies',
      lede: 'Costs can also change because the whole industry grows or because a location becomes more crowded.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F30D}', tone: 'green', text: 'Some cost advantages – and disadvantages – come from <strong>outside the firm</strong>: the local area, the wider industry, the regional economy.' },

      visualKey: 'externalEconomies',
      visualLabel: 'OUTSIDE THE FIRM',
      visualEmoji: '\u{1F305}',

      flowTitle: 'THE MECHANISM',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green', icon: '\u{1F4C8}', title: 'Industry cluster grows', sub: 'More firms set up in the same area or industry.' },
        { tone: 'amber', icon: '\u{1F91D}', title: 'Shared benefits',         sub: 'External economies — and external diseconomies — emerge for everyone.' },
        { tone: 'blue',  icon: '\u{1F4B0}', title: 'Firm costs change',      sub: 'Average cost falls (or rises) for every firm in the area.' }
      ],

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'blue',  icon: '\u{1F310}', head: 'Explains why firms cluster',     body: 'Silicon Valley, City of London, Detroit motor industry — external economies pull firms to the same place.' },
        { tone: 'amber', icon: '\u{1F3D9}\u{FE0F}', head: 'Regional advantages',          body: 'Local strengths in skills, suppliers and infrastructure can give a region a long-run cost edge.' },
        { tone: 'rose',  icon: '\u{1F4CA}', head: 'Costs depend on context',         body: 'A firm’s costs are shaped by what happens around it, not only by its own choices.' }
      ],

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: '"Internal" economies come from a firm’s own growth. "External" economies come from <strong>everything around the firm</strong> – the industry, the region, the infrastructure.' },

      conclusion: { title: 'Big idea', text: 'External economies pull firms together — clusters lower costs for everyone. But the same proximity can later raise costs through congestion and competition for inputs.' },
      examEdge: 'Top answers explicitly distinguish <strong>internal</strong> (own firm) from <strong>external</strong> (industry / location) effects. Use a real cluster example – Silicon Valley, City of London, the Ruhr – to anchor the point.'
    },

    /* ====================================================================
       CARD 6 – The whole story
       Pattern: Sequential flow chain (6 steps) + tile grid + pair block
       Synthesis using existing engine blocks – no new visual needed.
       ==================================================================== */
    {
      id: 'eds-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 6 of 6',
      title: 'The whole story',
      lede: 'As firms grow, average cost may fall, flatten at the efficient scale, and later rise if complexity takes over.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F517}', tone: 'green', text: 'From fixed and variable costs, we build <strong>total, average and marginal cost</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '\u{2192}',
      flow: [
        { tone: 'green',  icon: '\u{1F4C8}', title: 'Output expands',         sub: 'The firm grows.' },
        { tone: 'blue',   icon: '\u{2699}\u{FE0F}', title: 'Internal economies', sub: 'Specialisation, bulk buying, cheaper finance.' },
        { tone: 'amber',  icon: '\u{1F4C9}', title: 'Average cost falls',     sub: 'LRAC declines.' },
        { tone: 'purple', icon: '\u{1F3AF}', title: 'Minimum efficient scale', sub: 'Lowest sustainable cost per unit.' },
        { tone: 'rose',   icon: '\u{26A0}\u{FE0F}', title: 'Further growth may create diseconomies', sub: 'Coordination problems, motivation loss.' },
        { tone: 'slate',  icon: '\u{1F4C8}', title: 'Average cost rises',     sub: 'LRAC tilts back up.' }
      ],

      causesLabel: 'DON’T FORGET THE LIMITS',
      causesEmoji: '\u{26A0}\u{FE0F}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'amber', icon: '\u{1F4C9}', head: 'Average cost, not total cost',  body: 'Focus on cost <strong>per unit</strong>, not the total cost bill.' },
        { tone: 'rose',  icon: '\u{1F3AD}', head: 'Bigger is not always cheaper', body: 'Beyond MES, unit costs rise.' },
        { tone: 'blue',  icon: '\u{1F30D}', head: 'Internal is not the same as external', body: 'These are different effects – do not confuse them.' },
        { tone: 'purple', icon: '\u{1F3ED}', head: 'Context matters by industry', body: 'Each market has its own MES and cluster effects.' }
      ],

      pairLabel: 'FINAL JUDGEMENT',
      pairEmoji: '\u{2696}\u{FE0F}',
      left: {
        tone: 'green',
        icon: '\u{2705}',
        iconStyle: 'circle',
        label: 'Why growth can help',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Lower unit costs through scale.</li><li>Possible lower prices for consumers.</li><li>Stronger competitiveness internationally.</li></ul>'
      },
      right: {
        tone: 'rose',
        icon: '\u{26A0}\u{FE0F}',
        iconStyle: 'circle',
        label: 'Why limits matter',
        text: '<ul style="margin:0;padding:0 0 0 18px;font-size:12.5px;color:#0B1426;line-height:1.7;"><li>Coordination becomes harder.</li><li>Possible inefficiency at very large scale.</li><li>Rising costs beyond the efficient scale.</li></ul>'
      },

      bottomTip: { icon: '\u{2139}\u{FE0F}', tone: 'blue', text: 'The most efficient firm is <strong>not necessarily the biggest</strong> – it is the one that finds the LRAC minimum.' },

      conclusion: { title: 'Big idea', text: 'Economies and diseconomies of scale are a full cost story – not a definition list.' },
      economistQuote: {
        portraitKey: 'economistMarshall',
        tone: 'amber',
        label: 'Economist insight on economies of scale',
        quote: 'We may divide the economies arising from an increase in the scale of production into two classes — those dependent on the general development of the industry, and those dependent on the resources of the individual firms. We may call the former external economies, and the latter internal economies.',
        attribution: 'Alfred Marshall, <em>Principles of Economics</em> (1890)'
      },
      examEdge: 'Top essays define the concept, identify where the firm is on the LRAC, and then judge whether <strong>further growth</strong> is likely to help or hurt unit costs.'
    }
  ]
};
