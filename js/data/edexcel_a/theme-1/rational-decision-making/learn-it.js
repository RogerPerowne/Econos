/* ============================================================
   ECONOS – content data for rational-decision-making (Edexcel 1.2.1)
   3 cards + quiz. The underlying assumptions of rational economic
   decision making: consumers maximise utility, firms maximise profit.
   Cards designed from mockups; worked figures use the generic
   renderer's table/flow/comparison building blocks (no new chart
   needed). Hand-written header so the placeholder generator won't
   overwrite it.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'rational-decision-making',
  topicNum: '1.2.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Rational Decision Making',
  estTime: '5-7 minutes',
  goal: 'Understand the assumptions economists make about how agents choose: consumers maximise utility, firms maximise profit.',
  intro: {
    heroKey: 'heroScarcity',
    summary: 'Before studying how markets work, we set out the behaviour the models assume. Standard economic theory treats decision-makers as rational: consumers act to maximise their utility (satisfaction), and firms act to maximise their profit. These two assumptions underpin almost every demand and supply diagram you will meet.',
    doInThis: 'Work through three cards: what "rational" means, how consumers maximise utility, and how firms maximise profit – plus where these assumptions break down.',
    outcomes: [
      'Explain what economists mean by rational decision making',
      'State that consumers are assumed to maximise utility',
      'State that firms are assumed to maximise profit',
      'Recognise the limits of the rationality assumption'
    ],
    tip: 'Rational here means consistent goal-seeking: consumers chase maximum utility, firms chase maximum profit. Behavioural economics (1.2.10) later challenges how realistic this is.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Exam paper',  state: 'locked' }
    ]
  },
  cards: [
    /* ----- CARD 1 – What 'rational' means ----- */
    {
      id: 'rdm_what_rational',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'What ‘rational’ means',
      lede: 'Economists often assume agents are rational. Rational means consistent, goal-seeking, and comparing marginal costs with marginal benefits to maximise an objective. This is a simplifying assumption, not a literal claim about every person.',
      tip: { icon: '✅', tone: 'green', text: 'Rationality is a simplifying assumption – not a claim that people are robots.' },
      causes: [
        { head: 'Consistent choices', icon: '🔁', body: 'Preferences do not randomly change.' },
        { head: 'Goal-seeking',       icon: '🎯', body: 'Decisions aim at an objective.' },
        { head: 'Marginal analysis',  icon: '⚖️', body: 'Compare one more unit of benefit with one more unit of cost.' },
        { head: 'Maximisation',       icon: '📈', body: 'Choose the option that gives the highest payoff.' }
      ],
      causesLabel: 'What rational means',
      causesEmoji: '🧠',
      causesPosition: 'top',
      comparison: {
        title: 'Who maximises what?',
        emoji: '⚖️',
        left:  { tone: 'blue',  icon: '🙂', label: 'Consumers maximise utility', caption: 'satisfaction or benefit.' },
        right: { tone: 'amber', icon: '🏭', label: 'Firms maximise profit',      caption: 'total revenue minus total costs.' }
      },
      keyTerms: [
        { term: 'Rational economic agent', def: 'Someone assumed to make consistent, goal-directed choices.' },
        { term: 'Utility',                 def: 'Satisfaction or benefit from consumption.' },
        { term: 'Marginal analysis',       def: 'Decision-making at the margin, by comparing extra benefit with extra cost.' }
      ],
      keyTakeaway: 'Rationality helps economists build clear models of behaviour before testing them against the real world.',
      examEdge: 'In essays, treat rationality as the baseline assumption, then evaluate whether it is realistic.'
    },

    /* ----- CARD 2 – Consumers maximise utility ----- */
    {
      id: 'rdm_consumers_utility',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'Consumers maximise utility',
      lede: 'Utility means satisfaction or benefit. Consumers try to allocate a limited budget to get the highest total utility. Diminishing marginal utility helps explain why the demand curve slopes down.',
      tip: { icon: '✅', tone: 'green', text: 'Consumers aim to get the most satisfaction possible from a limited budget.' },
      comparison: {
        title: 'What is utility?',
        emoji: '📖',
        left:  { tone: 'blue',  icon: '🙂', label: 'Utility',           caption: 'Satisfaction or benefit gained from consuming goods and services. It is subjective and measured in “utils”.' },
        right: { tone: 'amber', icon: '👛', label: 'Budget constraint', caption: 'Consumers have a limited income, so they must make trade-offs between different choices.' }
      },
      table: {
        title: 'Worked example – spending a £20 budget',
        emoji: '🧮',
        headers: ['Choice', 'Spend'],
        rows: [
          { icon: '🍿', label: 'Popcorn — £5 each × 2', value: '£10' },
          { icon: '🥤', label: 'Drinks — £5 each × 2',  value: '£10' },
          { icon: '💷', label: 'Budget',                value: '£20' },
          { icon: '✅', label: 'Total spend',           value: '£20' }
        ]
      },
      note: { icon: '💡', tone: 'blue', head: 'Why a balanced basket?', text: 'A basket of 2 popcorn + 2 drinks gives higher total utility than spending everything on one item – because the extra satisfaction (marginal utility) falls with each additional unit.' },
      flow: [
        { icon: '1️⃣', title: '1st unit', sub: 'very high satisfaction' },
        { icon: '2️⃣', title: '2nd unit', sub: 'high satisfaction' },
        { icon: '3️⃣', title: '3rd unit', sub: 'moderate satisfaction' },
        { icon: '4️⃣', title: '4th unit', sub: 'low satisfaction' }
      ],
      flowTitle: 'Diminishing marginal utility',
      flowEmoji: '📉',
      flowBottom: [
        { icon: '👛', title: 'Limited budget',            body: 'Income is fixed, so choices are constrained.' },
        { icon: '⚖️', title: 'Compare extra utility per pound', body: 'Consider the extra utility from each £1 spent.' },
        { icon: '🎯', title: 'Choose the best combination', body: 'Allocate spending to maximise total utility.' }
      ],
      flowBottomTitle: 'Why this matters',
      flowBottomEmoji: '👥',
      keyTakeaway: 'Diminishing marginal utility means consumers are willing to pay less for extra units – this helps explain the downward-sloping demand curve.',
      examEdge: 'Link utility to demand: as marginal utility falls, willingness to pay falls, so the demand curve slopes down.'
    },

    /* ----- CARD 3 – Firms maximise profit ----- */
    {
      id: 'rdm_firms_profit',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'Firms maximise profit',
      lede: 'The standard assumption in economics is that firms aim to maximise profit. Profit is total revenue minus total costs. This is the baseline simplification used in models, even though firms may sometimes care about other objectives.',
      tip: { icon: '✅', tone: 'green', text: 'The baseline firm objective in economics is profit maximisation.' },
      body: '<div style="font-size:20px;font-weight:800;color:#2563EB;letter-spacing:0.01em;margin:2px 0 8px;">Profit = Total revenue − Total costs</div>Firms compare the extra revenue and extra cost of decisions, and choose the option that raises profit the most.',
      flow: [
        { icon: '🛒', title: 'Revenue', sub: 'earned from sales' },
        { icon: '🏭', title: 'Costs',   sub: 'of production' },
        { icon: '📊', title: 'Profit',  sub: 'the gap between the two' },
        { icon: '🏆', title: 'Choose',  sub: 'the highest-profit option' }
      ],
      flowTitle: 'How the model works',
      flowEmoji: '🔗',
      branches: [
        { tone: 'blue',   label: 'Revenue',  sub: 'Chasing sales.' },
        { tone: 'amber',  label: 'Growth',   sub: 'Expanding market share or scale.' },
        { tone: 'purple', label: 'Survival', sub: 'Staying in business in hard times.' }
      ],
      branchesLabel: 'Other possible objectives',
      branchesEmoji: '👥',
      branchesLayout: 'triptych',
      tipLate: { icon: '➡️', tone: 'blue', head: 'Looking ahead', text: 'Later in the course, behavioural economics questions whether firms and consumers always behave with full rationality.' },
      keyTakeaway: 'Profit maximisation is the benchmark model for firm behaviour – useful because it gives a clear objective and testable predictions.',
      examEdge: 'When evaluating firm behaviour, start with profit maximisation, then note that real firms may also pursue growth, revenue or survival.'
    }
  ]
};

/* ============================================================
   End-of-Learn-It quiz pool — Rational Decision Making (1.2.1).
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Rational Decision Making',
    subtitle: 'Theme 1 &middot; Topic 1.2.1 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('intro'),
    backLabel: 'Back to Learn It',
    lede: '6 questions · ~5 minutes · covers the rationality assumption, utility maximisation, profit maximisation, and the limits of rationality',
    shortNames: [
      'What rational means', 'Agent → objective', 'Utility vs profit',
      'Diminishing MU', 'Profit formula', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: rationality assumption */
      { type: 'mcq',
        stem: 'In economics, what does it mean to assume an agent is <strong>rational</strong>?',
        opts: [
          'They make consistent, goal-seeking choices, weighing marginal benefit against marginal cost to maximise an objective',
          'They always make the morally best choice for society as a whole',
          'They have perfect information about every possible future outcome',
          'They never make mistakes and always feel happy with their decisions'
        ],
        ans: 0,
        exp: 'A <strong>rational economic agent</strong> chooses consistently to maximise an objective, comparing marginal benefit with marginal cost. It is a simplifying assumption – it does not require perfect information, morality, or that people never err. Behavioural economics later relaxes it.'
      },

      /* 2 – Match pairs: agent → objective / terms */
      { type: 'match_pairs',
        stem: 'Match each agent or term to what it maximises or means.',
        pairs: [
          { a: 'Consumer', b: 'Maximises utility (satisfaction)' },
          { a: 'Firm', b: 'Maximises profit (total revenue − total costs)' },
          { a: 'Utility', b: 'Satisfaction or benefit from consumption' },
          { a: 'Marginal analysis', b: 'Comparing one more unit of benefit with one more unit of cost' }
        ],
        exp: 'The two baseline assumptions: <strong>consumers maximise utility</strong>, <strong>firms maximise profit</strong>. Both decide <strong>at the margin</strong> – weighing the extra benefit of one more unit against its extra cost.'
      },

      /* 3 – Elastic sort: utility-max vs profit-max */
      { type: 'elastic_sort',
        stem: 'Classify each decision as driven by <strong>utility maximisation</strong> (a consumer) or <strong>profit maximisation</strong> (a firm).',
        categories: ['utility', 'profit'],
        categoryLabels: ['Utility maximisation', 'Profit maximisation'],
        goods: [
          { icon: '🛍️', label: 'Choosing the basket of goods that gives the most satisfaction within a budget', note: '', ans: 'utility' },
          { icon: '🏭', label: 'Cutting a production line that costs more to run than it earns', note: '', ans: 'profit' },
          { icon: '🍫', label: 'Buying one more chocolate bar only while the enjoyment is worth the price', note: '', ans: 'utility' },
          { icon: '💼', label: 'Hiring another worker only if they add more to revenue than to costs', note: '', ans: 'profit' },
          { icon: '📺', label: 'Picking the streaming plan that gives the best value for money', note: '', ans: 'utility' },
          { icon: '🏷️', label: 'Setting output where the gap between total revenue and total costs is greatest', note: '', ans: 'profit' }
        ],
        exp: 'Consumers optimise <strong>utility</strong> within a budget; firms optimise <strong>profit</strong> (TR − TC). Both apply marginal thinking – do the next unit only if its extra benefit beats its extra cost.'
      },

      /* 4 – MCQ: diminishing marginal utility → demand */
      { type: 'mcq',
        stem: 'How does <strong>diminishing marginal utility</strong> help explain the demand curve?',
        opts: [
          'As consumption rises, the extra utility from each unit falls, so consumers will only buy more at a lower price – demand slopes down',
          'Extra units give more and more satisfaction, so demand slopes upward',
          'Utility is constant for every unit, so the demand curve is vertical',
          'It explains why firms raise prices when costs rise'
        ],
        ans: 0,
        exp: 'Because the <strong>marginal utility</strong> of each extra unit falls, a consumer is only willing to pay a lower price for additional units. Falling willingness to pay as quantity rises is exactly the downward-sloping demand curve.'
      },

      /* 5 – MCQ: profit formula */
      { type: 'mcq',
        stem: 'A firm has total revenue of £80,000 and total costs of £55,000. What is its <strong>profit</strong>, and what does the profit-maximisation assumption imply?',
        opts: [
          '£25,000 – and the firm is assumed to choose the option that makes this gap as large as possible',
          '£135,000 – and the firm is assumed to maximise revenue regardless of cost',
          '£25,000 – but firms are assumed to ignore costs entirely',
          '£55,000 – and the firm is assumed to minimise revenue'
        ],
        ans: 0,
        exp: 'Profit = total revenue − total costs = £80,000 − £55,000 = <strong>£25,000</strong>. Profit maximisation assumes the firm picks the option that makes this gap as large as possible – the benchmark objective in standard models.'
      },

      /* 6 – Para fill */
      { type: 'para_fill',
        stem: 'Complete the paragraph on rational decision making.',
        anchor: 'Standard models assume agents pursue an objective consistently.',
        para: 'Economists assume agents are [1]: they make consistent choices to [2] an objective. [3] are assumed to maximise [4] – their satisfaction – within a limited [5]. [6] are assumed to maximise [7], which equals total revenue minus total [8]. Behavioural economics later questions whether this is fully [9].',
        blanks: [
          { id: 1, opts: ['rational', 'random', 'altruistic', 'irrational'], ans: 0 },
          { id: 2, opts: ['maximise', 'ignore', 'reduce', 'average'], ans: 0 },
          { id: 3, opts: ['Consumers', 'Firms', 'Governments', 'Banks'], ans: 0 },
          { id: 4, opts: ['utility', 'profit', 'revenue', 'output'], ans: 0 },
          { id: 5, opts: ['budget', 'profit', 'market', 'price'], ans: 0 },
          { id: 6, opts: ['Firms', 'Consumers', 'Workers', 'Voters'], ans: 0 },
          { id: 7, opts: ['profit', 'utility', 'tax', 'wages'], ans: 0 },
          { id: 8, opts: ['costs', 'sales', 'prices', 'wages'], ans: 0 },
          { id: 9, opts: ['realistic', 'profitable', 'legal', 'optional'], ans: 0 }
        ],
        exp: '(1) <strong>rational</strong>, (2) <strong>maximise</strong>, (3) <strong>Consumers</strong>, (4) <strong>utility</strong>, (5) <strong>budget</strong>, (6) <strong>Firms</strong>, (7) <strong>profit</strong>, (8) <strong>costs</strong>, (9) <strong>realistic</strong>. These assumptions are the baseline that demand and supply analysis is built on.'
      }

    ]
  };

})();
