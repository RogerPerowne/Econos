window.ECONOS_TOPIC = {
  id: 'specialisation-and-money',
  topicNum: '1.5',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Specialisation & Money',
  estTime: '8-10 minutes',
  goal: 'Lock in the division of labour, the gains and risks of specialising to trade, the limitations of barter, and the four functions of money.',
  intro: {
    heroKey: 'heroSpecialisationMoney',
    summary: 'Specialisation dramatically raises productivity but creates a need for exchange. Barter is too inefficient to support complex trade – money solves this by acting as a medium of exchange, measure of value, store of value, and standard of deferred payment.',
    doInThis: 'Work through 10 cards: the big picture, Adam Smith’s pin factory and his three gains, the division of labour weighed up, specialising to trade across individuals, firms and countries, comparative advantage and the gains from trade, the barter problem, the four functions of money, what makes good money, and how money and specialisation lift living standards.',
    outcomes: [
      'Explain the division of labour using Adam Smith’s three gains (dexterity, time saved, machinery)',
      'Distinguish the advantages/disadvantages of the division of labour from those of specialising to trade',
      'Explain comparative advantage using opportunity cost, and show how specialisation and trade raise total output',
      'Explain why barter is inefficient and how money solves the double coincidence of wants',
      'State and apply the four functions of money, and judge why monetary stability matters'
    ],
    tip: 'Money’s four functions (Edexcel wording): Medium of Exchange, Measure of Value (also called unit of account), Store of Value, and Standard of Deferred Payment.',
    stages: [
      { num: 1, name: 'Learn it', sub: '10 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – The big picture (Sequential flow chain)
       ================================================================ */
    {
      id: 'specialisation_money_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 10',
      title: 'Specialisation & money: the big picture',
      lede: 'Nobody is good at everything - so we each focus on one thing, trade for the rest, and money is what makes that swap effortless.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'Resources are scarce. People, firms and countries therefore specialise in what they do relatively well, then trade for the rest – and total output rises sharply.' },
      diagramKey: 'specialisationGainsCompare',
      diagramLabel: 'Self-sufficiency vs specialisation',
      diagramEmoji: '📊',
      keyTerms: [
        { term: '📈 More output',  def: 'We can produce more with the resources we have.' },
        { term: '🛒 More choice',  def: 'Trade lets us enjoy a wider variety of goods and services.' },
        { term: '🤝 Easier trade', def: 'Money removes the "double coincidence of wants" and simplifies exchange.' }
      ],
      keyTermsLabel: 'Why this matters',
      keyTermsEmoji: '⭐',
      examEdge: 'Specialisation only works well when exchange is possible – and money makes exchange far easier than barter. Make this link explicit in any answer that touches on productivity, trade or development.'
    },

    /* ================================================================
       CARD 2 – Adam Smith's pin factory (Worked example) – spec (a)
       ================================================================ */
    {
      id: 'specialisation_money_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 10',
      title: 'Adam Smith’s Pin Factory',
      lede: 'One worker makes 20 pins a day. Split the job across a team and the same people make 48,000 - the single most famous number in economics.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'The division of labour splits one production process into separate tasks, each done by a different worker. Adam Smith showed how powerful this is.' },
      economistQuote: {
        portraitKey: 'economistAdamSmith',
        tone: 'amber',
        label: 'The founding example',
        quote: 'The greatest improvement in the productive powers of labour… seem to have been the effects of the division of labour.',
        attribution: 'Adam Smith, <em>Wealth of Nations</em> (1776)'
      },
      workedExample: {
        label: 'Smith’s pin factory: the numbers',
        emoji: '🪡',
        cards: [
          {
            tone: 'rose', icon: '👤', title: 'One worker, every step',
            subtitle: 'Draw, cut, point, head, whiten, pack…',
            body: 'Switching between all 18 stages, a single pin-maker manages perhaps <strong>20 pins a day</strong>.',
            badge: { icon: '🐌', text: '≈ 20 pins/day each' },
            op: '→'
          },
          {
            tone: 'green', icon: '🏭', title: '18 workers, one step each',
            subtitle: 'Each repeats a single specialised task',
            body: 'The same handful of people, each specialising, turn out about <strong>48,000 pins a day</strong>.',
            badge: { icon: '⚡', text: '≈ 4,800 pins/day each' }
          }
        ],
        summary: [
          { icon: '📈', label: '≈ 240× more output per worker – same people, same hours', tone: 'green' }
        ]
      },
      causes: [
        { tone: 'blue',  icon: '🎯', head: 'Dexterity',            body: 'Repeating one task builds speed and skill – a specialist gets far better at the narrow job than any generalist could.' },
        { tone: 'amber', icon: '⏱️', head: 'Time saved',           body: 'No time lost switching tools or moving between tasks; effort flows straight into output.' },
        { tone: 'green', icon: '⚙️', head: 'Machinery & invention', body: 'Narrow, repeated tasks are easy to mechanise – and a worker focused on one step is more likely to invent a tool that improves it.' }
      ],
      causesLabel: 'Why output jumps: Smith’s three gains',
      causesEmoji: '⭐',
      examEdge: 'These three gains – <strong>dexterity, time saved, and machinery/invention</strong> – are Smith’s core argument. Name them explicitly, and attribute them to the <em>division of labour</em>, not "specialisation" in general.'
    },

    /* ================================================================
       CARD 3 – Division of labour weighed up (Evidence-then-verdict) – spec (b)
       ================================================================ */
    {
      id: 'specialisation_money_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 10',
      title: 'The Division of Labour: Gains vs Drawbacks',
      lede: 'Splitting work into tiny tasks supercharges output - but doing the exact same thing all day, every day, has a human cost too.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'Splitting work into specialised tasks raises output – but doing one narrow job all day has real costs for workers and firms.' },
      causes: [
        { tone: 'green', icon: '📈', head: 'Higher productivity', body: 'More output per worker from skill, speed and specialised tools.' },
        { tone: 'green', icon: '🎓', head: 'Quality & expertise', body: 'Specialists develop deep skill, raising the quality of what they make.' },
        { tone: 'green', icon: '🎯', head: 'Cheaper to train',    body: 'Training someone for one narrow task is faster and cheaper than for the whole process.' },
        { tone: 'green', icon: '⚙️', head: 'Specialised capital',  body: 'Machines can be designed for each single step, raising output further.' }
      ],
      causesLabel: 'Gains from the division of labour',
      causesEmoji: '⭐',
      causes2: [
        { tone: 'amber', icon: '😐', head: 'Monotony & alienation', body: 'Repetitive work is boring and demotivating – Marx’s "alienation of labour" – raising staff turnover.' },
        { tone: 'amber', icon: '🔗', head: 'Interdependence',       body: 'Tasks are linked: if one worker is absent or strikes, the whole line can stop.' },
        { tone: 'amber', icon: '🧰', head: 'Deskilling',            body: 'Narrow skills make workers less adaptable if the job changes.' },
        { tone: 'amber', icon: '🏚️', head: 'Structural unemployment', body: 'If the industry declines, narrow skills don’t transfer easily to other sectors.' }
      ],
      causes2Label: 'Drawbacks',
      causes2Emoji: '⚠️',
      conclusion: {
        title: 'Verdict',
        text: 'The division of labour reliably raises output, but the gains depend on keeping work varied enough to retain motivated workers – and on a flexible labour force that can retrain when industries change.'
      },
      examEdge: 'Strong evaluation pairs a gain with its cost: "Specialisation raises productivity, but the monotony it creates can raise turnover and training costs, partially offsetting the gain."'
    },

    /* ================================================================
       CARD 4 – Specialising to trade (Side-by-side / level grid) – spec (c)
       ================================================================ */
    {
      id: 'specialisation_money_4',
      template: 'framing',
      stepLabel: 'Learn: Step 4 of 10',
      title: 'Specialising to Trade',
      lede: 'The same logic that powers a factory scales up to whole countries: focus on what you do best, then trade for everything else.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'Beyond the factory floor, whole people, firms and countries specialise – then trade for everything else.' },
      note: {
        tone: 'blue', icon: '🔎', head: 'Two different ideas – don’t mix them up',
        text: 'The <strong>division of labour</strong> splits one production process between workers. <strong>Specialising to trade</strong> is bigger: an individual, firm or country concentrates on what it does relatively best, then trades for the rest.'
      },
      notePosition: 'top',
      economistQuote: {
        portraitKey: 'economistAdamSmith',
        tone: 'amber',
        label: 'Why trade is the key',
        quote: 'The division of labour is limited by the extent of the market.',
        attribution: 'Adam Smith, <em>Wealth of Nations</em> (1776)'
      },
      versusList: {
        label: 'The gains – and the matching risk – at each level',
        emoji: '⚖️',
        rows: [
          {
            heading: 'Individuals & workers',
            left:  { tone: 'green', name: 'Gain',  icon: '📈', premise: 'Focus on one career or skill.',        reason: 'Higher productivity and pay; faster route to expertise.' },
            right: { tone: 'amber', name: 'Risk',  icon: '⚠️', premise: 'Skills become narrow.',                reason: 'Vulnerable if demand for that occupation falls – harder to switch jobs.' }
          },
          {
            heading: 'Firms',
            left:  { tone: 'green', name: 'Gain',  icon: '🏭', premise: 'Specialise in one product or stage.',  reason: 'Economies of scale, lower unit costs and higher quality.' },
            right: { tone: 'amber', name: 'Risk',  icon: '🔗', premise: 'Reliant on suppliers and buyers.',     reason: 'A disrupted supply chain (e.g. 2021 semiconductors) can halt production.' }
          },
          {
            heading: 'Countries',
            left:  { tone: 'green', name: 'Gain',  icon: '🌍', premise: 'Specialise at comparative advantage.', reason: 'Export strengths, import the rest – higher world output and consumer choice.' },
            right: { tone: 'amber', name: 'Risk',  icon: '📉', premise: 'Over-specialised economies.',          reason: 'Exposed to price swings and falling terms of trade; structural unemployment if a key industry fades.' }
          }
        ]
      },
      conclusion: {
        title: 'Verdict',
        text: 'Specialising to trade multiplies the gains from the division of labour across the whole economy – but it swaps self-sufficiency for interdependence. The gains hold only while exchange stays open and the economy stays flexible.'
      },
      examEdge: 'Distinguish the two questions Edexcel can ask: advantages/disadvantages of the <em>division of labour</em> (worker / factory level) versus advantages/disadvantages of <em>specialising to trade</em> (individuals, firms and countries).'
    },

    /* ================================================================
       CARD 5 – Comparative Advantage (Worked-example walkthrough) – spec 1.1.5(c)
       Closes the comparative-advantage gap flagged in the Theme 1 audit.
       Numbers chosen so full specialisation cleanly raises BOTH world
       totals by 50; OC ratios 0.5 / 2 mirror exactly. The deeper
       "applies even if one country is better at everything" insight is
       stated in step 5 + conclusion (the standard A-level treatment;
       the "better at both + full specialisation" case can lower one
       total, so it's framed as an opportunity-cost principle, not a
       second worked table).
       ================================================================ */
    {
      id: 'specialisation_money_comparative_advantage',
      template: 'worked-example',
      stepLabel: 'Learn: Step 5 of 10',
      title: 'Worked Example: Comparative Advantage',
      scenario: 'Two countries — the <strong>UK</strong> and <strong>China</strong> — can each put one worker on <strong>financial services</strong> or <strong>electronics</strong>. With the same resources, one worker makes:<ul style="margin:8px 0 0;padding-left:20px;"><li><strong>UK:</strong> 200 services <em>or</em> 100 electronics</li><li><strong>China:</strong> 100 services <em>or</em> 200 electronics</li></ul><br>Both can make both. Should they specialise — and who makes what?',
      steps: [
        {
          label: 'Step 1 – Absolute vs comparative advantage',
          hint: 'Who can make MORE of each good with the same resources? Is that even the right question?',
          answer: '<strong>Absolute advantage</strong> = making more with the same resources. The UK wins on services (200 vs 100); China wins on electronics (200 vs 100).<br><br>But that\'s <em>not</em> what decides trade. Ricardo\'s insight (1817): what matters is <strong>comparative advantage</strong> — who gives up the <em>least</em> to make each good. So we compare <strong>opportunity costs</strong>, not raw output.'
        },
        {
          label: 'Step 2 – Work out each opportunity cost',
          hint: 'To make 1 more of one good, how much of the other must each country give up?',
          answer: '<strong>UK</strong> (200 services = 100 electronics):<ul style="margin:4px 0 8px;padding-left:20px;"><li>1 electronics costs <strong>2 services</strong></li><li>1 service costs <strong>0.5 electronics</strong></li></ul><strong>China</strong> (100 services = 200 electronics):<ul style="margin:4px 0 0;padding-left:20px;"><li>1 electronics costs <strong>0.5 services</strong></li><li>1 service costs <strong>2 electronics</strong></li></ul>'
        },
        {
          label: 'Step 3 – Who has the comparative advantage?',
          hint: 'For each good, which country gives up less of the other to make it?',
          answer: 'Pick the <strong>lower</strong> opportunity cost for each good:<ul style="margin:6px 0 0;padding-left:20px;"><li><strong>Services:</strong> UK gives up 0.5 electronics vs China\'s 2 → <strong>UK wins</strong>.</li><li><strong>Electronics:</strong> China gives up 0.5 services vs UK\'s 2 → <strong>China wins</strong>.</li></ul><br>Each should specialise where its opportunity cost is lowest.'
        },
        {
          label: 'Step 4 – Specialise and trade: the gains',
          hint: 'Give each country 2 workers. Compare total world output before trade (split 50/50) with after full specialisation.',
          answer: '<strong>Before trade</strong> (workers split 50/50):<ul style="margin:4px 0 8px;padding-left:20px;"><li>UK: 100 services + 50 electronics</li><li>China: 50 services + 100 electronics</li><li><strong>World: 150 + 150</strong></li></ul><strong>After specialising</strong> (UK → services, China → electronics):<ul style="margin:4px 0 8px;padding-left:20px;"><li>UK: 200 services</li><li>China: 200 electronics</li><li><strong>World: 200 + 200</strong></li></ul><strong>Same resources, +50 of each good.</strong> Trade at any rate between 0.5 and 2 electronics per service and <em>both</em> consume more than they could make alone.'
        },
        {
          label: 'Step 5 – The catch, and Ricardo\'s deeper point',
          hint: 'When does trade NOT help both sides? And does the theory still hold if one country is better at everything?',
          answer: '<strong>The catch:</strong> the trade rate must sit between the two opportunity costs (0.5–2 electronics per service). Outside that band, one country would rather not trade.<br><br><strong>Other limits:</strong><ul style="margin:4px 0 8px;padding-left:20px;"><li>Over-specialising leaves you exposed if your industry fades.</li><li>Transport costs and trade barriers can wipe out small gains.</li></ul><strong>The deeper point:</strong> this works <em>even when one country is better at everything</em> — trade rests on <strong>differences in opportunity cost</strong>, not absolute productivity.'
        }
      ],
      conclusion: 'Comparative advantage = the lowest opportunity cost. Whenever opportunity-cost ratios differ, specialising and trading raises total output — here from 150 to 200 of each good with no extra resources. Specialise by opportunity cost, not by who\'s absolutely best.',
      examEdge: 'The classic trap is answering on <em>absolute</em> advantage. Always compute opportunity cost and award comparative advantage to the lower-OC producer. State the terms-of-trade condition (the trade rate must sit between the two opportunity costs) to reach the top band.',
      economistQuote: {
        portraitKey: 'economistRicardo',
        tone: 'amber',
        label: 'Economist insight · Ricardo and the case for trade',
        quote: 'Under a system of perfectly free commerce, each country naturally devotes its capital and labour to such employments as are most beneficial to each. This pursuit of individual advantage is admirably connected with the universal good of the whole.',
        attribution: 'David Ricardo, <em>On the Principles of Political Economy and Taxation</em> (1817)'
      }
    },

    /* ================================================================
       CARD 6 – Limitations of Comparative Advantage (Evidence-then-verdict)
       Lifts the Stage-5 "Limitations Courtroom" insight from the Trade
       Room simulation into A-level Theme 1 form: four named limits that
       qualify Ricardo's case, then a synthesis verdict that keeps the
       core insight intact. Spec 1.1.5 evaluation lift.
       ================================================================ */
    {
      id: 'specialisation_money_comparative_advantage_limits',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 10',
      title: 'When comparative advantage doesn\'t quite work',
      lede: 'Ricardo\'s case is powerful – but the model rests on four assumptions that the real world routinely breaks. Top exam answers name a limit before they judge.',
      ledeStyle: 'plain',

      tip: { icon: '⚖️', tone: 'amber', text: 'The case for trade still holds – but pure comparative advantage is a <strong>model</strong>, not a forecast. The world adds friction.' },

      causesLabel: 'FOUR REAL-WORLD LIMITS',
      causesEmoji: '🚧',
      causesStyle: 'numbered-rows',
      causesCols: 1,
      causes: [
        { tone: 'amber', icon: '🚢', head: 'Transport costs can swallow the gains',
          body: 'The model assumes goods move freely. In reality, shipping heavy or perishable goods (concrete, fresh dairy, low-value bulk) can cost <em>more</em> than the comparative-advantage gain itself. This is why trade clusters around high-value, light or digital goods – and why "global value chains" still concentrate regionally.' },
        { tone: 'blue', icon: '📉', head: 'Costs rise as output expands',
          body: 'Ricardo assumed <strong>constant returns</strong> – adding workers always adds the same output. In the real world, fully specialising drives up land, labour and resource costs as scarce inputs get bid up. The right amount of specialisation usually sits <em>below</em> the theoretical maximum.' },
        { tone: 'rose', icon: '👷', head: 'Workers can\'t switch jobs overnight',
          body: 'A steelworker losing their job to imported steel cannot instantly become a software engineer. The <strong>aggregate gain</strong> from trade can mask painful <strong>structural unemployment</strong> in declining industries – and aggregate gains are politically meaningless if they are very unevenly distributed.' },
        { tone: 'purple', icon: '🔁', head: 'Comparative advantage shifts over time',
          body: 'It is not destiny. South Korea built world-leading shipbuilding from almost nothing in 30 years; China shifted from basic textiles in the 1980s to electronics by the 2010s. Targeted investment in skills, technology and infrastructure can <em>change</em> which country has the lowest opportunity cost – a key argument for active industrial policy.' }
      ],

      pairLabel: 'BUT THE CORE INSIGHT SURVIVES',
      pairEmoji: '⚖️',
      left: {
        tone: 'green', icon: '✅', iconStyle: 'circle',
        label: 'Trade still pays',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.65;">As long as opportunity-cost ratios differ, <em>some</em> gain from specialisation exists. The limits above narrow the gain – they do not eliminate it.</p>'
      },
      right: {
        tone: 'amber', icon: '⚠️', iconStyle: 'circle',
        label: 'But the policy question is real',
        text: '<p style="margin:0;font-size:13px;color:#0B1426;line-height:1.65;">Governments may need to <em>cushion adjustment</em> (retraining, regional support), <em>shape advantage</em> (R&amp;D, skills, infrastructure), or <em>moderate exposure</em> (avoid over-specialisation in volatile sectors).</p>'
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The same limits return in <strong>Theme 4</strong> when you study trading blocs, exchange-rate effects on trade, and the case for protectionism. Worth the early flag.' },

      conclusion: {
        title: 'The verdict',
        text: 'Ricardo\'s model gives the <strong>direction</strong> of trade gains; the four limits give their <strong>magnitude and distribution</strong>. A good A-level answer names a limit before reaching for a judgement.'
      },
      examEdge: 'Top answers <strong>do not stop at "trade makes both countries better off"</strong>. They identify a real-world limit – transport costs, rising costs at scale, structural unemployment in losing industries, or shifting comparative advantage – and use it to qualify the case. Naming Ha-Joon Chang\'s "kicking away the ladder" critique, or citing the UK steel industry decline, lifts B-band evaluation to A*.'
    },

    /* ================================================================
       CARD 7 – The Problem with Barter (Sequential flow chain) – spec (d) setup
       ================================================================ */
    {
      id: 'specialisation_money_5',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 10',
      title: 'The Problem with Barter',
      lede: 'Without money, a trade only happens when both people want exactly what the other has - a coincidence so rare it strangles a growing economy.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'Barter means exchanging goods directly without money. Trade only happens when both people want exactly what the other has – the double coincidence of wants.' },
      diagramKey: 'barterTriangle',
      diagramLabel: 'The double coincidence of wants',
      diagramEmoji: '🔄',
      verdict: {
        title: 'Barter vs money exchange',
        emoji: '⚖️',
        columns: [
          {
            tone: 'rose',
            icon: '🤝',
            label: 'Barter',
            items: [
              { ok: false, text: 'Needs must exactly match' },
              { ok: false, text: 'Hard to find trading partners' },
              { ok: false, text: 'Time-consuming' },
              { ok: false, text: 'Limits trade and growth' }
            ]
          },
          {
            tone: 'green',
            icon: '💵',
            label: 'Money exchange',
            items: [
              { ok: true, text: 'Anyone can accept money' },
              { ok: true, text: 'Easy to find trading partners' },
              { ok: true, text: 'Faster and more convenient' },
              { ok: true, text: 'Supports more trade and growth' }
            ]
          }
        ]
      },
      causes: [
        { head: 'No common measure of value', icon: '⚖️', body: 'It\'s hard to compare the value of different goods and services without a shared unit.' },
        { head: 'Indivisibility',             icon: '🧩', body: 'Many goods can\'t be easily split to make exact trades – half a cow for a loaf of bread won\'t do.' },
        { head: 'Lack of store of value',     icon: '🔐', body: 'Goods can spoil, wear out, or lose value over time – saving is difficult.' },
        { head: 'Double coincidence of wants', icon: '👥', body: 'Trade only happens when both people want what the other has – a punishingly rare match at scale.' }
      ],
      causesLabel: 'Key limitations of barter',
      causesEmoji: '🚫',
      keyTakeaway: 'Barter can work in small settings, but as economies grow these limits make it hopelessly inefficient. Money solves these problems and lets trade flourish.'
    },

    /* ================================================================
       CARD 6 – The Four Functions of Money (Tile grid) – spec (d)
       ================================================================ */
    {
      id: 'specialisation_money_6',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 10',
      title: 'The Four Functions of Money',
      lede: 'Money isn\'t one job but four - and once you see them, you can spot exactly which one inflation attacks first.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'Money solves the problems of barter because it performs four key jobs that make exchange possible, practical and efficient.' },
      causes: [
        {
          head: 'Medium of exchange',
          icon: '🤝',
          body: 'Money is accepted to buy and sell goods and services – eliminating the double coincidence of wants problem.',
          example: { icon: '🛒', text: 'You use money to buy groceries.' }
        },
        {
          head: 'Measure of value',
          icon: '🏷️',
          body: 'Money gives a common unit to price and compare goods across the whole economy (also called the <em>unit of account</em>).',
          example: { icon: '☕', text: 'A coffee is priced at £4.' }
        },
        {
          head: 'Store of value',
          icon: '🔐',
          body: 'Money can be saved today and used to buy goods and services in the future (assuming low inflation).',
          example: { icon: '🐷', text: 'You save money in a savings account.' }
        },
        {
          head: 'Standard of deferred payment',
          icon: '📅',
          body: 'Money allows payments to be made in future for goods received today – credit, mortgages, contracts.',
          example: { icon: '💳', text: 'You buy a laptop now and pay later.' }
        }
      ],
      causesLabel: 'The four functions',
      causesEmoji: '💵',
      flowBottom: [
        { icon: '👥', title: 'People want things',    sub: 'Goods and services are demanded.',         tone: 'blue' },
        { icon: '💵', title: 'Money is accepted',     sub: 'Medium of exchange.',                     tone: 'blue' },
        { icon: '🏷️', title: 'Prices compared',       sub: 'Measure of value.',                       tone: 'blue' },
        { icon: '🐷', title: 'Value saved',            sub: 'Store of value.',                        tone: 'blue' },
        { icon: '📅', title: 'Payments deferred',     sub: 'Deferred payment.',                       tone: 'blue' },
        { icon: '🔁', title: 'Smoother exchange',     sub: 'Trade is faster and more reliable.',     tone: 'blue' }
      ],
      flowBottomTitle: 'How these functions make exchange easier',
      flowBottomEmoji: '➡️',
      examEdge: 'Inflation attacks two functions: store of value (money buys less) and deferred payment (debts repaid in devalued currency). Hyperinflation (Zimbabwe, Weimar Germany) causes economies to revert to barter – a powerful real-world illustration.'
    },

    /* ================================================================
       CARD 7 – Characteristics of Good Money (Comparison / verdict)
       ================================================================ */
    {
      id: 'specialisation_money_7',
      template: 'framing',
      stepLabel: 'Learn: Step 9 of 10',
      title: 'Characteristics of Good Money',
      lede: 'Why not use cows or seashells as cash? Score the candidates against six tests and you discover why every economy ends up with something like banknotes.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'blue', text: 'For money to perform its four functions well, it needs certain practical qualities. Score the candidates against them and a winner emerges – which is why every economy converges on something like modern currency.' },
      diagramKey: 'goodMoneyScorecard',
      diagramLabel: 'Which makes the best money?',
      diagramEmoji: '⚖️',
      causes: [
        { head: 'Durable',             icon: '🛡️', body: 'It lasts a long time and can withstand regular use.' },
        { head: 'Portable',            icon: '👛', body: 'It is easy to carry and convenient to transport.' },
        { head: 'Divisible',           icon: '✂️', body: 'It can be divided into smaller units to make exact payments.' },
        { head: 'Acceptable',          icon: '✅', body: 'People are willing to accept it in payment for goods and services.' },
        { head: 'Scarce',              icon: '⚖️', body: 'It is limited in supply, so it holds its value over time.' },
        { head: 'Difficult to counterfeit', icon: '🔍', body: 'It is hard to fake, protecting trust in the monetary system.' }
      ],
      causesLabel: 'The six characteristics',
      causesEmoji: '⭐',
      keyTakeaway: 'Score the candidates and the pattern is clear: gold scores top on the qualities themselves, but paper notes trade a little durability and scarcity for unbeatable portability and divisibility – which is why modern economies use currency rather than commodity money. The one weak spot, scarcity, is exactly where inflation does its damage.'
    },

    /* ================================================================
       CARD 8 – Why money holds it together (Evidence-then-verdict) – synthesis
       ================================================================ */
    {
      id: 'specialisation_money_8',
      template: 'framing',
      stepLabel: 'Learn: Step 10 of 10',
      title: 'Why Money Holds It All Together',
      lede: 'Specialisation, exchange and money form one chain - and it only lifts living standards while every link, especially stable money, holds.',
      ledeStyle: 'plain',
      tip: { icon: '💡', tone: 'green', text: 'The gains from specialisation are unlocked fully only when money allows smooth exchange. Together they convert higher productivity into wider prosperity.' },
      flow: [
        { tone: 'blue',   icon: '🛠️', title: 'Specialisation',         sub: 'People focus on what they do best.' },
        { tone: 'blue',   icon: '📈', title: 'Higher productivity',    sub: 'Skills and tools are used more efficiently.' },
        { tone: 'green',  icon: '🏭', title: 'More output',            sub: 'More goods and services are produced.' },
        { tone: 'amber',  icon: '🤝', title: 'More exchange',          sub: 'People trade to get what they need.' },
        { tone: 'purple', icon: '💵', title: 'Money cuts transaction costs', sub: 'Exchange becomes faster, cheaper and safer.' },
        { tone: 'green',  icon: '🌐', title: 'Wider markets, higher living standards', sub: 'More choice, better access, higher wellbeing.' }
      ],
      flowTitle: 'The chain: from specialisation to living standards',
      flowEmoji: '🔗',
      causes: [
        { tone: 'rose',  icon: '🧰', head: 'Dependence on narrow skills', body: 'Workers and regions tied to one specialism are exposed if demand for it falls.' },
        { tone: 'rose',  icon: '⚡', head: 'Supply shocks bite harder',   body: 'Interdependent, specialised systems can be disrupted by one broken link (e.g. 2021 semiconductors).' },
        { tone: 'rose',  icon: '🔥', head: 'Inflation weakens money',     body: 'If money fails as a store of value, exchange falters – hyperinflation pushes economies back toward barter.' },
        { tone: 'rose',  icon: '⚖️', head: 'Unequal rewards',             body: 'The gains aren’t shared evenly; over-specialised or unequal economies can leave groups behind.' }
      ],
      causesLabel: 'Don’t forget the limits',
      causesEmoji: '⚠️',
      causesStyle: 'tinted-flat',
      causes2: [
        {
          tone: 'green', icon: '✅', head: 'Why economists like it',
          body: '<div style="margin-bottom:5px;">• Specialisation raises productivity and real incomes.</div><div style="margin-bottom:5px;">• Lower unit costs make goods and services more affordable.</div><div>• Wider choice and larger markets lift living standards.</div>'
        },
        {
          tone: 'rose', icon: '⚖️', head: 'Why evaluation matters',
          body: '<div style="margin-bottom:5px;">• It can create vulnerability to shocks and over-dependence.</div><div style="margin-bottom:5px;">• It can widen inequality and leave some groups behind.</div><div>• It all depends on trust in money and stable institutions.</div>'
        }
      ],
      causes2Label: 'Final judgement',
      causes2Emoji: '🧠',
      causes2Cols: 2,
      keyTakeaway: {
        title: 'The big takeaway',
        text: 'Scarcity drives specialisation; specialisation needs exchange; exchange needs money; and money only works if it stays stable. That chain – not money or specialisation alone – is what raises living standards.'
      },
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
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
    title:    'Specialisation &amp; Money',
    subtitle: 'Theme 1 &middot; Topic 1.5 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('specialisation_money_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers the division of labour, specialising to trade, the barter problem, the four functions of money, and good-money characteristics',
    shortNames: [
      'Division of labour', 'Division vs trade sort', 'Barter problem MCQ', 'Functions of money sort',
      'Characteristics match', 'Para fill', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: division of labour */
      { type: 'mcq',
        stem: 'Adam Smith\'s famous pin factory example illustrates the benefits of the <strong>division of labour</strong>. What is the primary economic argument?',
        opts: [
          'By breaking production into specialised tasks, each worker develops skill through repetition, tools can be designed for specific tasks, and time is saved switching between activities – dramatically raising output per worker',
          'Dividing labour means firms can pay workers less per hour – the cost savings are the main benefit',
          'Specialisation ensures that every worker is equally productive regardless of their natural abilities',
          'The division of labour is only possible in manufacturing – service industries cannot benefit from specialisation'
        ],
        ans: 0,
        exp: 'Smith\'s pin factory (Wealth of Nations, 1776): one worker making pins alone might produce ~20 per day. With workers each specialising in one of the ~18 steps (drawing wire, cutting, pointing, etc.), the factory produces around 48,000 pins per day. The gains come from Smith\'s <strong>three sources</strong>: <strong>dexterity</strong> (skill through repetition); <strong>time saved</strong> (no switching between tasks); and <strong>machinery/invention</strong> (tools designed for one specialised step). These gains apply to services too (an accountant vs a doctor vs a lawyer all specialise rather than each person doing every professional task).'
      },

      /* 2 – Elastic sort: division of labour vs specialising to trade */
      { type: 'elastic_sort',
        stem: 'The spec separates two ideas. Classify each statement as being about the <strong>division of labour</strong> (splitting one production process between workers) or <strong>specialising to trade</strong> (individuals, firms or countries focusing, then trading).',
        categories: ['division', 'trade'],
        categoryLabels: ['Division of labour', 'Specialising to trade'],
        goods: [
          { icon: '🪡', label: 'A factory splits pin-making into 18 separate tasks, one per worker', note: '', ans: 'division' },
          { icon: '🌍', label: 'A country exports what it makes best and imports the rest', note: '', ans: 'trade' },
          { icon: '⚙️', label: 'A machine is designed for a single repeated step on the line', note: '', ans: 'division' },
          { icon: '🏭', label: 'A firm concentrates on one product to win economies of scale', note: '', ans: 'trade' },
          { icon: '😐', label: 'Workers doing one repetitive task all day become bored and demotivated', note: '', ans: 'division' },
          { icon: '📉', label: 'An economy reliant on one export is hit hard when its world price falls', note: '', ans: 'trade' }
        ],
        exp: '<strong>Division of labour</strong> operates inside a production process: tasks are split between workers (pin factory), specialised machinery is used, and the costs are worker-level (monotony, interdependence). <strong>Specialising to trade</strong> operates at the level of individuals, firms and whole countries: each focuses on its relative strength and trades for the rest, gaining from economies of scale and comparative advantage but risking over-dependence and exposure to price shocks. Edexcel can ask the advantages/disadvantages of <em>either</em> – know which level the question is about.'
      },

      /* 3 – MCQ: barter and double coincidence */
      { type: 'mcq',
        stem: 'The <strong>double coincidence of wants</strong> problem makes barter extremely inefficient. What does this problem involve?',
        opts: [
          'For a trade to occur, both parties must simultaneously want exactly what the other is offering – a near-impossible requirement in a complex economy',
          'Barter requires both traders to agree on the same price in money terms before the exchange can occur',
          'The problem arises because people in barter economies always want to consume more than they produce',
          'Both parties in a barter transaction must be in the same geographic location at the same time'
        ],
        ans: 0,
        exp: 'In a barter economy, for A to trade with B: A must want what B has, AND B must want what A has – simultaneously. This double coincidence is rarely satisfied. A baker who wants shoes must find a shoemaker who wants bread – at exactly the moment and in exactly the quantities both desire. As an economy becomes more complex with thousands of goods, the probability of matching coincidences falls toward zero. <strong>Money solves this</strong> by splitting the exchange into two transactions: sell for money, then buy with money – the coincidence of wants problem disappears.'
      },

      /* 4 – Elastic sort: four functions of money */
      { type: 'elastic_sort',
        stem: 'Classify each example under the correct <strong>function of money</strong>.',
        categories: ['medium_exchange', 'store_value', 'measure_value', 'standard_deferred'],
        categoryLabels: ['Medium of exchange', 'Store of value', 'Measure of value', 'Standard of deferred payment'],
        goods: [
          { icon: '🛒', label: 'You pay £3.50 for a coffee at a café', note: '', ans: 'medium_exchange' },
          { icon: '🏦', label: 'You save £500 in a bank account to use for holiday spending next year', note: '', ans: 'store_value' },
          { icon: '🏷️', label: 'A supermarket prices 10,000 products so consumers can compare value', note: '', ans: 'measure_value' },
          { icon: '📋', label: 'A mortgage allows you to borrow £300,000 today and repay it over 25 years', note: '', ans: 'standard_deferred' },
          { icon: '💰', label: 'A business prices its products in pounds so customers can assess relative value', note: '', ans: 'measure_value' },
          { icon: '🤝', label: 'A firm pays wages so workers can buy goods from many different employers', note: '', ans: 'medium_exchange' }
        ],
        exp: '<strong>Medium of exchange</strong>: money enables transactions without barter – solves the double coincidence of wants. <strong>Store of value</strong>: money can be saved and used in the future (unlike perishable goods). <strong>Measure of value</strong> (also called the unit of account): money provides a common measure – making price comparison possible across millions of goods. <strong>Standard of deferred payment</strong>: money enables credit – borrow now, repay later in the same unit. All four functions require money to hold its value over time; hyperinflation destroys the store of value and standard of deferred payment functions first.'
      },

      /* 5 – Match pairs: characteristics of good money */
      { type: 'match_pairs',
        stem: 'Match each characteristic of good money to an example of what happens when it is absent.',
        pairs: [
          { a: 'Durable', b: 'Milk cannot serve as money – it spoils; money must last' },
          { a: 'Portable', b: 'Large stones (Rai of Yap) are impractical for daily transactions' },
          { a: 'Divisible', b: 'A live cow is difficult to make change with – money must divide into small units' },
          { a: 'Acceptable', b: 'A currency not trusted by others loses its medium of exchange function' },
          { a: 'Limited supply / Scarce', b: 'Zimbabwean dollar lost value when government printed excessively; scarcity is essential' },
          { a: 'Difficult to counterfeit', b: 'If notes are easily faked, traders reject them and trust collapses' }
        ],
        exp: 'Good money must be: <strong>Durable</strong> (not deteriorate in storage – gold, paper notes); <strong>Portable</strong> (easy to carry – note evolution from gold coins to paper to digital); <strong>Divisible</strong> (can be split for small transactions – 1p coins to £50 notes); <strong>Acceptable</strong> (widely trusted and accepted – a currency\'s value depends on confidence); <strong>Scarce</strong> (limited supply maintains value – printing too much causes inflation); <strong>Difficult to counterfeit</strong> (so trust in the system holds). Bitcoin satisfies most but is volatile (poor store of value) and has limited divisibility for small transactions.'
      },

      /* 6 – Para fill: money and specialisation link */
      { type: 'para_fill',
        stem: 'Complete the paragraph linking specialisation to the need for money.',
        anchor: 'Specialisation and money co-evolved – one made the other necessary.',
        para: 'As economies specialise, individuals produce [1] types of goods but need [2] types to survive. Without money, they face the [3] coincidence of wants problem – trades require both parties to want exactly what the other offers. Money solves this by acting as a [4] of exchange, allowing people to [5] their output for money and then [6] whatever they need from others. The more [7] an economy becomes, the more important the [8] system is, because the probability of matching [9] in barter falls toward zero.',
        blanks: [
          { id: 1, opts: ['fewer', 'more', 'different', 'identical'], ans: 0 },
          { id: 2, opts: ['many', 'fewer', 'identical', 'substitutable'], ans: 0 },
          { id: 3, opts: ['double', 'single', 'triple', 'zero'], ans: 0 },
          { id: 4, opts: ['medium', 'store', 'measure', 'standard'], ans: 0 },
          { id: 5, opts: ['sell', 'barter', 'import', 'save'], ans: 0 },
          { id: 6, opts: ['buy', 'produce', 'export', 'save'], ans: 0 },
          { id: 7, opts: ['specialised', 'self-sufficient', 'equal', 'planned'], ans: 0 },
          { id: 8, opts: ['monetary', 'barter', 'trade', 'planning'], ans: 0 },
          { id: 9, opts: ['coincidences', 'prices', 'currencies', 'trades'], ans: 0 }
        ],
        exp: '(1) <strong>Fewer</strong> types – specialisation means producing less variety. (2) <strong>Many</strong> types – but needing food, clothing, housing, etc. (3) <strong>Double</strong> coincidence of wants. (4) <strong>Medium</strong> of exchange. (5) <strong>Sell</strong> output for money. (6) <strong>Buy</strong> whatever they need. (7) The more <strong>specialised</strong> the economy. (8) <strong>Monetary</strong> system. (9) Probability of matching <strong>coincidences</strong> in barter falls to near zero. The logical chain: scarcity → specialisation → exchange → need for money → monetary economy. This is why all complex economies use money rather than barter.'
      },

      /* 7 – Cause & effect: money and economic development */
      { type: 'cause_effect',
        stem: 'Match each failure of money to its economic consequence.',
        pairs: [
          { cause: 'Hyperinflation destroys money\'s store of value (Zimbabwe 2008)', effect: 'Barter and dollarisation emerge as people switch to more stable currencies' },
          { cause: 'Money supply grows faster than productive capacity', effect: 'Inflation – each unit of money buys less' },
          { cause: 'A bank run collapses confidence in money\'s acceptability', effect: 'Financial crisis – the medium of exchange function breaks down' },
          { cause: 'Cryptocurrency high volatility undermines predictability', effect: 'Businesses refuse to price or hold contracts in that currency' },
          { cause: 'Central bank achieves stable, low inflation', effect: 'Long-term contracts (mortgages, bonds) become feasible – standard of deferred payment works' },
          { cause: 'Counterfeiting reduces trust in banknotes', effect: 'Traders reject notes – acceptability and the measure-of-value function break down' }
        ],
        exp: 'Money\'s four functions are interdependent – when one breaks down, others follow. <strong>Store of value failure</strong> (hyperinflation): people stop holding money, resort to barter or foreign currency. <strong>Acceptability failure</strong> (bank run, counterfeiting): medium of exchange collapses. <strong>Measure of value failure</strong> (instability): pricing becomes impossible. <strong>Deferred payment failure</strong> (unpredictable inflation): long-term contracts become too risky. This is why central banks prioritise inflation control – without monetary stability, the foundations of a specialised, exchange-based economy crumble.'
      },

      /* 8 – Odd one out: functions of money */
      { type: 'odd_one_out',
        stem: 'Three of these describe <strong>functions of money</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📊', label: 'Measure of value – money provides a standard measure for comparing prices', note: '' },
          { icon: '🔄', label: 'Medium of exchange – money facilitates transactions without barter', note: '' },
          { icon: '📈', label: 'Profit motive – money incentivises entrepreneurship by enabling profit measurement', note: '' },
          { icon: '💾', label: 'Store of value – money can be saved and spent in the future', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>profit motive</strong>. This is not a function of money – it describes the motivation of entrepreneurs in a market economy. The four functions of money are: medium of exchange, store of value, measure of value, and standard of deferred payment. Note: the profit motive does depend on money (you can only measure profit if you have a measure of value), but being a prerequisite is not the same as being a function.'
      },

      /* 9 – Data table: specialisation and productivity */
      { type: 'data_table',
        stem: 'The table compares productivity in a small economy before and after specialisation.',
        headers: ['Worker', 'Before specialisation (output/day each)', 'After specialisation (output/day total)'],
        rows: [
          ['Baker', '5 loaves + 2 pots', '20 loaves (specialised)'],
          ['Potter', '3 loaves + 4 pots', '18 pots (specialised)'],
          ['Total output', '8 loaves + 6 pots', '20 loaves + 18 pots']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Specialisation increases total output (20 loaves vs 8; 18 pots vs 6) – demonstrating the gains from specialising and then trading',
          'Specialisation reduces choice – workers are forced to produce only one good',
          'The data show that the baker is absolutely worse at pottery, so specialisation is unfair to potters',
          'Both workers should continue producing both goods to maintain self-sufficiency and reduce dependence'
        ],
        ans: 0,
        exp: 'The data show dramatic output gains from specialisation: loaves rise from 8 to 20 per day (+150%), pots rise from 6 to 18 per day (+200%). Each worker, specialising and then trading, ends up with more of both goods than they could produce alone. This is the core argument for specialising to trade: it raises total output, enabling higher living standards through exchange. Option D (self-sufficiency) sacrifices these gains for resilience – a genuine trade-off but one with large welfare costs.'
      },

      /* 10 – Multi-select: evaluation of money and specialisation */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the role of money in enabling a specialised economy?',
        opts: [
          'Money acts as a medium of exchange, store of value, measure of value, and standard of deferred payment',
          'While money enables specialisation and exchange, its effectiveness as a store of value depends critically on price stability – meaning the benefits of a specialised monetary economy are conditional on competent central bank management, rather than automatic',
          'Money is always better than barter for allocating resources',
          'Digital currencies like Bitcoin replicate money\'s medium of exchange and measure of value functions but fail the store of value test due to volatility, suggesting the technological form of money matters less than its stability properties',
          'The double coincidence of wants problem shows that barter is inefficient',
          'Specialisation requires exchange, which requires money, which requires monetary stability – so the productivity gains from the division of labour are ultimately contingent on institutional capacity (central banking, rule of law, contract enforcement) that many developing economies lack'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the benefits of a monetary economy by identifying the condition (price stability) on which they depend – concluding that benefits are conditional, not automatic. D: applies the framework to Bitcoin, distinguishing which functions it performs well from those it fails, and reaches a conclusion about what matters (stability, not technological form). F: extends the logic chain from specialisation through exchange to monetary stability to institutional capacity, concluding that productivity gains are ultimately contingent on institutions – a multi-step evaluative move. A and E are descriptions; C is an overclaim without qualification.'
      }

    ]
  };

})();
