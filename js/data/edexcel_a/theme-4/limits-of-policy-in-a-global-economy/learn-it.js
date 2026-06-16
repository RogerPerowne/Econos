/* ============================================================
   ECONOS – Limits of Policy in a Global Economy (Edexcel A 4.5.4)
   7 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   Why policy has limits, responding to external shocks, transfer
   pricing and tax control, why global companies are hard to control,
   policy under uncertainty, risks and trade-offs, and the whole story.

   Second of the two-way split of spec 4.5.4.

   Visuals:
     - policyLimitsHub     (Card 1 — five forces around the policy tools)
     - transferPricingFlow (Card 3 — profit-shifting illustration)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'limits-of-policy-in-a-global-economy',
  topicNum: '4.5.4',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Limits of Policy in a Global Economy',
  estTime: '22 min',
  goal: 'Explain why domestic policy is constrained in an open economy — by external shocks, mobile capital and multinationals, imperfect information and lags, and the trade-offs every choice carries',

  intro: {
    heroKey: 'heroPolicyLimits',
    summary: 'Governments have powerful policy tools, but in an open economy their impact is blunted by external shocks, mobile capital, profit-shifting multinationals, time lags and imperfect information. The strongest policy is not always the best — only the one whose benefits outweigh its costs here and now.',
    doInThis: 'See why domestic policy has limits in an open economy — external shocks, transfer pricing, uncertainty and time lags — then weigh the trade-offs and judge policy effectiveness in context.',
    outcomes: [
      'Explain why policy is constrained in an open economy',
      'Evaluate responses to external shocks',
      'Explain transfer pricing and profit shifting',
      'Explain why multinationals are hard to control',
      'Account for uncertainty and policy lags',
      'Weigh trade-offs and evaluate policy in context'
    ],
    tip: 'Always ask not just whether a policy can work, but why its impact may be limited in a global economy.',
    stages: [
      { num: 1, name: 'Learn',  sub: '7 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'lim-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Limits of policy in a global economy — the big picture',
      lede: 'Governments have powerful policy tools, but in an open economy their impact is constrained by shocks, mobile capital, multinational firms, uncertainty and trade-offs.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },
      notePosition: 'top',

      visualKey: 'policyLimitsHub',
      visualLabel: 'WHY POLICY HAS LIMITS',
      visualEmoji: '\u{1F517}',

      flowTitle: 'THE CORE IDEA',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F3AF}', title: 'Goal', sub: 'Inflation, growth, jobs, equality.' },
        { tone: 'blue', icon: '\u{1F6E0}️', title: 'Policy tool', sub: 'Fiscal, monetary, exchange-rate, supply-side.' },
        { tone: 'blue', icon: '\u{1F517}', title: 'Transmission', sub: 'Spending, rates, costs, incentives.' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Outcome', sub: 'The effect on the objective.' },
        { tone: 'rose', icon: '⚡', title: 'Global forces', sub: 'Shocks and leakages weaken it.' }
      ],

      causesLabel: 'WHERE THE LIMITS COME FROM',
      causesEmoji: '\u{1F30D}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Open economies', body: 'Imports, exports and capital flows can swamp domestic policy.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Global firms', body: 'Multinationals shift profits and relocate to dodge policy.' },
        { tone: 'amber',  icon: '⏳', head: 'Time and data', body: 'Lags and imperfect information blunt the response.' },
        { tone: 'rose',   icon: '⚖️', head: 'Trade-offs', body: 'Helping one problem can worsen another.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'In a closed textbook model, policy looks clearer. In the real world, global forces make outcomes less predictable.' },
      examEdge: { title: 'EXAM EDGE', text: 'For top marks, explain the policy, then evaluate how shocks, firms, lags and trade-offs limit how well it really works.' }
    },

    /* ============ CARD 2 – Responding to external shocks ============ */
    {
      id: 'lim-external-shocks',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Responding to external shocks',
      lede: 'Governments can use policy to cushion global shocks, but they rarely control the shock itself.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },
      notePosition: 'top',

      causesPosition: 'top',
      causesLabel: 'FOUR COMMON SHOCKS',
      causesEmoji: '⚡',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Global recession', body: 'Weaker demand for a country’s exports.' },
        { tone: 'amber',  icon: '⛽', head: 'Commodity price spike', body: 'Higher energy or food costs.' },
        { tone: 'purple', icon: '\u{1F3E6}', head: 'Financial panic', body: 'Capital outflows and lost confidence.' },
        { tone: 'rose',   icon: '\u{1F4E6}', head: 'Supply-chain disruption', body: 'Shortages and production delays.' }
      ],

      causes2Label: 'THE RESPONSE TOOLKIT',
      causes2Emoji: '\u{1F6E0}️',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green',  icon: '\u{1F3DB}️', head: 'Fiscal policy', body: 'Support demand or protect households.' },
        { tone: 'green',  icon: '\u{1F3E6}', head: 'Monetary policy', body: 'Rate cuts or liquidity support.' },
        { tone: 'green',  icon: '\u{1F4B1}', head: 'Exchange-rate policy', body: 'A weaker currency can absorb the shock.' },
        { tone: 'green',  icon: '\u{1F6E1}️', head: 'Direct controls', body: 'Price caps or capital measures.' }
      ],

      causes3Label: 'WHY THE DAMAGE MAY REMAIN',
      causes3Emoji: '⚠️',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'rose',   icon: '\u{1F30D}', head: 'Spillovers continue', body: 'The shock keeps arriving from abroad.' },
        { tone: 'amber',  icon: '⏳', head: 'Policy works with lags', body: 'Delays reduce the speed of relief.' },
        { tone: 'purple', icon: '\u{1F62C}', head: 'Confidence stays weak', body: 'Households and firms postpone spending.' },
        { tone: 'rose',   icon: '\u{1F4B8}', head: 'Inflation and debt limit action', body: 'High debt or inflation caps the response.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Policy can soften the landing — but open economies cannot insulate themselves completely from world shocks.' },
      examEdge: { title: 'EXAM EDGE', text: 'Identify the shock, explain the policy response, then judge why the effect may be limited.' }
    },

    /* ============ CARD 3 – Transfer pricing and tax control ============ */
    {
      id: 'lim-transfer-pricing',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Transfer pricing and tax control',
      lede: 'Multinational firms can shift profits across borders — making it harder for governments to tax activity where it really happens.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },
      notePosition: 'top',

      visualKey: 'transferPricingFlow',
      visualLabel: 'HOW TRANSFER PRICING WORKS',
      visualEmoji: '\u{1F517}',

      causesFirst: true,
      causesLabel: 'WHY GOVERNMENTS CARE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose',   icon: '\u{1F4B8}', head: 'Lower tax revenue', body: 'Profit is taxed where it is booked, not where value is created.' },
        { tone: 'amber',  icon: '⚖️', head: 'Unfair competition', body: 'Firms that pay tax properly face higher costs than those that shift.' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Harder to measure profit', body: 'Artificial prices distort profit and weaken accounting.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Trust eroded', body: 'Perceived loopholes reduce confidence in tax fairness.' }
      ],

      causes2Label: 'HOW GOVERNMENTS RESPOND',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'green', icon: '\u{1F4CF}', head: 'Arm’s-length rules', body: 'Internal prices must match market rates.' },
        { tone: 'green', icon: '\u{1F4CB}', head: 'Reporting and audits', body: 'More disclosure and tougher audits.' },
        { tone: 'green', icon: '\u{1F30D}', head: 'International cooperation', body: 'Sharing data and agreeing standards.' },
        { tone: 'green', icon: '\u{1F3E6}', head: 'Global minimum tax', body: 'A floor under rates to reduce shifting.' }
      ],

      causes3Label: 'WHY IT IS HARD',
      causes3Emoji: '\u{1F9F1}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'amber',  icon: '\u{1F517}', head: 'Complex supply chains', body: 'Internal flows are hard to value.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Intangibles and IP', body: 'Brands, patents and data are hard to price.' },
        { tone: 'blue',   icon: '\u{1F30D}', head: 'Multiple jurisdictions', body: 'Different rules and capacities across countries.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Transfer pricing shows how the gap between national tax systems lets profit slip away from where it is earned.' },
      examEdge: { title: 'EXAM EDGE', text: 'Explain how profit shifting works, then evaluate how far governments can realistically close it down.' }
    },

    /* ============ CARD 4 – Why global companies are hard to control ============ */
    {
      id: 'lim-global-firms',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Why global companies are hard to control',
      lede: 'Governments regulate nationally, but many firms operate globally, shift activity easily and bargain from a position of strength.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },
      notePosition: 'top',

      causesPosition: 'top',
      causesLabel: 'WHY STATES STRUGGLE',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F4B8}', head: 'Mobile capital', body: 'Investment can move to where it is treated best.' },
        { tone: 'amber',  icon: '\u{1F3C3}', head: 'Tax competition', body: 'Countries undercut each other to attract firms.' },
        { tone: 'purple', icon: '\u{1F517}', head: 'Complex supply chains', body: 'Activity is spread across many countries.' },
        { tone: 'rose',   icon: '\u{1F4AA}', head: 'Bargaining power', body: 'Firms can threaten to relocate jobs and investment.' }
      ],

      flowTitle: 'THE LIMITS IN PRACTICE',
      flowEmoji: '\u{1F501}',
      flow: [
        { tone: 'blue', icon: '\u{1F3DB}️', title: 'Government acts', sub: 'Raises rules or taxes.' },
        { tone: 'blue', icon: '\u{1F50D}', title: 'Firms assess', sub: 'Compare costs, taxes and rules elsewhere.' },
        { tone: 'blue', icon: '✈️', title: 'Relocate or lobby', sub: 'Move activity, or push back.' },
        { tone: 'rose', icon: '\u{1F4C9}', title: 'Policy is watered down', sub: 'Rules diluted or enforcement eased.' }
      ],

      causes2Label: 'WHAT HELPS',
      causes2Emoji: '✅',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F30D}', head: 'International coordination', body: 'Countries align rules and close loopholes together.' },
        { tone: 'green', icon: '\u{1F50D}', head: 'Transparency & information sharing', body: 'More data helps target firms that move.' },
        { tone: 'green', icon: '\u{1F3DB}️', head: 'Strong institutions & enforcement', body: 'Credible rules and consistent enforcement.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'National governments still matter — but their power is greatest when they coordinate, share information and enforce credibly.' },
      examEdge: { title: 'EXAM EDGE', text: 'In open economies, control over firms is limited unless countries cooperate — so judge how effective regulation is likely to be.' }
    },

    /* ============ CARD 5 – Policy under uncertainty ============ */
    {
      id: 'lim-uncertainty',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Policy under uncertainty',
      lede: 'Policymakers act with imperfect information, delayed data and uncertain forecasts — which makes fine-tuning the economy extremely hard.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },
      notePosition: 'top',

      causesPosition: 'top',
      causesLabel: 'THE INFORMATION PROBLEM',
      causesEmoji: '\u{1F50D}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose',   icon: '\u{1F525}', head: 'Inflation', body: 'Reported with a delay.' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Growth', body: 'Data are often revised later.' },
        { tone: 'amber',  icon: '\u{1F465}', head: 'Unemployment', body: 'Surveys take time to gather.' },
        { tone: 'purple', icon: '\u{1F4B9}', head: 'Borrowing costs', body: 'Markets move faster than data.' }
      ],

      flowTitle: 'TIME LAGS',
      flowEmoji: '⏳',
      flow: [
        { tone: 'blue', icon: '\u{1F50E}', title: 'Recognition lag', sub: 'It takes time to spot a problem.' },
        { tone: 'blue', icon: '\u{1F5E3}️', title: 'Decision lag', sub: 'Time to debate and decide.' },
        { tone: 'blue', icon: '\u{1F6E0}️', title: 'Implementation lag', sub: 'Policies take time to put in place.' },
        { tone: 'blue', icon: '⏱️', title: 'Effect lag', sub: 'It takes time for effects to appear.' }
      ],

      causes2Label: 'WHY FORECASTS GO WRONG',
      causes2Emoji: '\u{1F52E}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose',   icon: '⚡', head: 'Unexpected shocks', body: 'Things change suddenly and without warning.' },
        { tone: 'amber',  icon: '\u{1F30D}', head: 'Global events shift behaviour', body: 'Confidence moves with world news.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'People react in new ways', body: 'Households and firms behave unpredictably.' },
        { tone: 'blue',   icon: '\u{1F9E9}', head: 'Models simplify reality', body: 'Assumptions miss complexity and feedback.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Macroeconomic policy is made with a lag — not with perfect maps.' },
      examEdge: { title: 'EXAM EDGE', text: 'Use inaccurate information, lags and uncertainty as evaluation when judging any policy.' }
    },

    /* ============ CARD 6 – Risks, trade-offs and unintended consequences ============ */
    {
      id: 'lim-trade-offs',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Risks, trade-offs and unintended consequences',
      lede: 'Policies often create side-effects — solving one problem can worsen another.',
      ledeStyle: 'plain',

      note: { icon: 'ℹ️', tone: 'blue', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },
      notePosition: 'top',

      causesPosition: 'top',
      causesLabel: 'FOUR CLASSIC TRADE-OFFS',
      causesEmoji: '⚖️',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Higher interest rates', body: 'Cool inflation — but slow growth.' },
        { tone: 'green',  icon: '✂️', head: 'Faster deficit reduction', body: 'Lower borrowing — but weaker demand.' },
        { tone: 'amber',  icon: '\u{1F4B1}', head: 'Weaker currency', body: 'Boosts exports — but raises import inflation.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Tougher rules on global firms', body: 'Fairer taxation — but possible relocation or lower FDI.' }
      ],

      causes2Label: 'WHY SIDE-EFFECTS HAPPEN',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'blue',   icon: '\u{1F517}', head: 'Economies are interconnected', body: 'A change in one part affects others.' },
        { tone: 'purple', icon: '\u{1F465}', head: 'People and firms adapt', body: 'They respond to incentives in new ways.' },
        { tone: 'amber',  icon: '⚖️', head: 'Effects hit groups differently', body: 'Costs and benefits are not evenly shared.' }
      ],

      causes3Label: 'WHAT STRONG EVALUATION LOOKS LIKE',
      causes3Emoji: '✅',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue',   icon: '⏳', head: 'Short run vs long run', body: 'Look beyond the immediate effects.' },
        { tone: 'purple', icon: '⚖️', head: 'Distributional effects', body: 'Check who gains and who loses.' },
        { tone: 'green',  icon: '\u{1F465}', head: 'Confidence and credibility', body: 'Trust affects how well policy works.' },
        { tone: 'rose',   icon: '\u{1F30D}', head: 'Retaliation or spillovers', body: 'Other countries may react.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The best policy is not always the strongest — it is the one whose benefits outweigh its costs in context.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always ask what the policy changes, who it worsens, who gains, and how the result changes over time.' }
    },

    /* ============ CARD 7 – The whole story ============ */
    {
      id: 'lim-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'The whole story',
      lede: 'Strong answers show both what policy can do and why, in a global economy, its effects are often partial, delayed and uncertain.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Strong evaluation shows not just what policy can do, but <strong>why its impact may be limited</strong>.' },

      flowTitle: 'THE CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F3AF}', title: 'Goal', sub: 'The objective.' },
        { tone: 'blue', icon: '\u{1F6E0}️', title: 'Policy tool', sub: 'The chosen lever.' },
        { tone: 'blue', icon: '\u{1F517}', title: 'Transmission', sub: 'How it should work.' },
        { tone: 'rose', icon: '\u{1F6A7}', title: 'Constraint', sub: 'What limits it.' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Outcome', sub: 'The real effect.' },
        { tone: 'green', icon: '⚖️', title: 'Evaluation', sub: 'Judged in context.' }
      ],

      causesLabel: 'THE FOUR BIG LIMITS',
      causesEmoji: '\u{1F30D}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'rose',   icon: '⚡', head: 'External shocks', body: 'Events outside the country can swamp domestic policy.' },
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Global firms & capital', body: 'Firms and money can move, limiting control.' },
        { tone: 'amber',  icon: '\u{1F575}️', head: 'Information and lags', body: 'Data are imperfect and delays weaken control.' },
        { tone: 'blue',   icon: '⚖️', head: 'Risks & trade-offs', body: 'Every choice involves trade-offs and uncertainty.' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'numbered',
      causes2: [
        { tone: 'blue', head: 'Identify the objective and policy', body: 'What is the aim, and which tool is used?' },
        { tone: 'blue', head: 'Explain how it should work', body: 'Describe the transmission mechanism.' },
        { tone: 'blue', head: 'Add the global limit', body: 'Show how shocks, firms or lags reduce its impact.' },
        { tone: 'blue', head: 'Judge using context and time', body: 'Use evidence and the time horizon to evaluate.' }
      ],

      causes3Label: 'CONTEXT THAT MATTERS',
      causes3Emoji: '\u{1F9ED}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green',  icon: '\u{1F4CA}', head: 'Spare capacity', body: 'More slack means more room to act.' },
        { tone: 'rose',   icon: '\u{1F30D}', head: 'Global conditions', body: 'Shocks and partners shape the result.' },
        { tone: 'blue',   icon: '\u{1F91D}', head: 'Credibility', body: 'Trust makes policy more effective.' },
        { tone: 'purple', icon: '\u{1F517}', head: 'International cooperation', body: 'Working with others widens what works.' }
      ],

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Macroeconomic policy still matters — but in an open world that success depends on global conditions and realistic limits.' },
      examEdge: { title: 'EXAM EDGE', text: 'Judging effectiveness in context — shocks, firms, lags, credibility and cooperation — is what separates a top answer from a good one.' }
    }
  ]
};
