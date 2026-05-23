(function () {

  window.ECONOS_QUIZ = {
    id:       'business_objectives_main',
    topicId:  'business_objectives_main',
    title:    'Business Objectives',
    subtitle: 'Theme 3.1 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the full range of firm objectives &#8212; from profit and revenue maximisation to satisficing, the principal-agent problem, CSR, and public sector goals. Mixed formats designed to test both definitional precision and the evaluative judgements that earn top-band marks.',
    shortNames: {
      'profit_max':   'Profit maximisation',
      'revenue_max':  'Revenue maximisation',
      'growth':       'Growth maximisation',
      'satisficing':  'Satisficing',
      'principal':    'Principal-agent problem',
      'csr':          'CSR',
      'public':       'Public sector objectives'
    },

    questions: [

      /* 1 — MCQ: profit-maximising condition */
      { type: 'mcq',
        stem: 'A profit-maximising firm should expand output as long as:',
        opts: [
          'Marginal Revenue (MR) exceeds Marginal Cost (MC)',
          'Average Revenue (AR) exceeds Average Cost (AC)',
          'Total Revenue (TR) is rising',
          'Marginal Cost (MC) is at its minimum point'
        ],
        ans: 0,
        exp: 'A profit-maximising firm produces up to the point where <strong>MR = MC</strong>. While MR > MC, each additional unit adds more to revenue than to cost, so profit rises with output. Once MR &lt; MC, producing further reduces profit. The AR &gt; AC condition tells us whether the firm is making supernormal profit, not how to maximise it. Profit is maximised at MR = MC regardless of whether AR &gt; AC or not.'
      },

      /* 2 — Elastic sort: classify objectives */
      { type: 'elastic_sort',
        stem: 'Classify each statement as reflecting a <strong>shareholder-aligned</strong> or <strong>manager-driven</strong> objective.',
        categories: ['sh', 'mg'],
        categoryLabels: ['Shareholder-aligned', 'Manager-driven'],
        goods: [
          { icon: '&#128200;', label: 'Produce where MR = MC to maximise the difference between TR and TC', note: '', ans: 'sh' },
          { icon: '&#127970;', label: 'Acquire a rival firm primarily to increase the CEO\'s span of control', note: '', ans: 'mg' },
          { icon: '&#128182;', label: 'Pay out a large special dividend when the firm holds excess cash', note: '', ans: 'sh' },
          { icon: '&#128081;', label: 'Expand aggressively into new markets to raise the firm\'s revenue and CEO status', note: '', ans: 'mg' },
          { icon: '&#128203;', label: 'Set price where MR = 0 to maximise total revenue because manager bonuses are linked to sales', note: '', ans: 'mg' },
          { icon: '&#9878;', label: 'Invest retained profits in projects with a positive net present value', note: '', ans: 'sh' }
        ],
        exp: '<strong>Shareholder-aligned</strong> objectives maximise the return on shareholders\' capital: MR = MC (profit max), positive-NPV investment, dividends. <strong>Manager-driven</strong> objectives reflect the principal-agent problem &#8212; managers pursue revenue growth, empire-building, and status at the expense of shareholder value. Revenue maximisation (MR = 0) produces more output at a lower price and lower profit, consistent with Baumol\'s theory that manager pay tracks firm size rather than profit.'
      },

      /* 3 — Para fill: revenue maximisation */
      { type: 'para_fill',
        stem: 'Complete the paragraph about revenue maximisation by selecting the correct word or phrase for each blank.',
        anchor: 'Revenue maximisation is associated with Baumol\'s managerial theory of the firm.',
        para: 'A revenue-maximising firm produces where [1] revenue equals zero, because any further output would cause total revenue to [2]. This output level is [3] than the profit-maximising output, and the resulting price is [4]. Shareholders may impose a [5] profit constraint to prevent managers from deviating too far from profit maximisation.',
        blanks: [
          { id: 1, opts: ['marginal', 'average', 'total', 'economic'], ans: 0 },
          { id: 2, opts: ['fall', 'rise', 'remain unchanged', 'double'], ans: 0 },
          { id: 3, opts: ['higher', 'lower', 'the same', 'uncertain'], ans: 0 },
          { id: 4, opts: ['lower', 'higher', 'unchanged', 'indeterminate'], ans: 0 },
          { id: 5, opts: ['minimum', 'maximum', 'normal', 'supernormal'], ans: 0 }
        ],
        exp: '(1) <strong>Marginal</strong>: revenue max occurs at MR = 0, where marginal revenue is zero. (2) <strong>Fall</strong>: beyond MR = 0, MR is negative so each extra unit reduces TR. (3) <strong>Higher</strong>: the MR = 0 output lies to the right of MR = MC on any standard demand curve, so revenue-max output exceeds profit-max output. (4) <strong>Lower</strong>: with a downward-sloping demand curve, higher output requires a lower price. (5) <strong>Minimum</strong>: shareholders set a floor on profit to prevent managers from sacrificing all profit for revenue growth.'
      },

      /* 4 — Multi-select: principal-agent problem solutions */
      { type: 'multi_select',
        stem: 'Which of the following are recognised mechanisms for reducing the <strong>principal-agent problem</strong> between shareholders and managers?',
        opts: [
          'Performance-related pay linking manager remuneration to profits or share price',
          'Share option schemes that give managers a financial stake in company performance',
          'Strong independent non-executive directors on the board',
          'Threat of hostile takeover if the firm underperforms',
          'Allowing managers to set their own salaries without board approval',
          'Reducing the size of the board of directors to one member'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A&#8211;D all align manager incentives with shareholder interests or impose external discipline. <strong>Performance-related pay</strong> and <strong>share options</strong> make managers financially benefit from good shareholder outcomes. <strong>Independent non-executive directors</strong> monitor management on behalf of shareholders. <strong>Hostile takeover threat</strong> disciplines underperforming managers by threatening replacement. Options E and F worsen the principal-agent problem &#8212; unilateral salary-setting removes shareholder oversight, and a single-member board eliminates monitoring entirely.'
      },

      /* 5 — Odd one out: objectives */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>managerial objectives</strong> (principal-agent driven). Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128176;', label: 'Acquiring a rival firm to double revenue and headline company size', note: '' },
          { icon: '&#127944;', label: 'Paying out 80% of annual profits as dividends to shareholders', note: '' },
          { icon: '&#127970;', label: 'Pursuing sales maximisation to qualify for a higher salary band', note: '' },
          { icon: '&#128081;', label: 'Maintaining excess head office staff to increase departmental prestige', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>paying out 80% of profits as dividends</strong>. This is a shareholder-aligned objective &#8212; it maximises the return to shareholders (principals) and leaves little cash for managers to pursue empire-building. The other three are classic principal-agent (managerial) objectives: acquisition for size, revenue maximisation for salary, and overstaffing for prestige. All three divert resources from shareholder value toward managerial benefit. High dividend payout ratios are a shareholder governance mechanism that reduces free cash flow available for managerial discretion.'
      },

      /* 6 — MCQ: CSR and Friedman */
      { type: 'mcq',
        stem: 'Milton Friedman\'s argument against Corporate Social Responsibility (CSR) is best summarised as:',
        opts: [
          'Managers spending shareholders\' money on social causes are effectively taxing shareholders without their consent',
          'CSR reduces firm efficiency because socially responsible firms grow too slowly',
          'CSR is only worthwhile when it directly increases short-run profits through reputational gains',
          'Stakeholder theory (Freeman) is mathematically inconsistent with standard microeconomics'
        ],
        ans: 0,
        exp: 'Friedman\'s (1970) argument in <em>The New York Times</em> was that <strong>CSR is a form of unilateral taxation</strong>: when managers spend company money on social causes, they are using shareholders\' resources for purposes shareholders did not approve. Shareholders can donate to social causes themselves if they choose. This argument distinguishes between shareholders choosing to pursue social objectives (fine) and managers making that choice for them (a violation of the principal-agent relationship). The counter-argument (Porter-Kramer; Freeman\'s stakeholder theory) is that CSR and profit can be complementary if strategically managed &#8212; "enlightened shareholder value."'
      },

      /* 7 — Data table: objectives comparison */
      { type: 'data_table',
        stem: 'The table shows output and profit data for a firm with different pricing objectives.',
        headers: ['Objective', 'Output (000 units)', 'Price (&#163;)', 'Total Revenue (&#163;000)', 'Total Cost (&#163;000)', 'Profit (&#163;000)'],
        rows: [
          ['Profit maximisation', '50', '20', '1,000', '800', '200'],
          ['Revenue maximisation', '80', '15', '1,200', '1,050', '150'],
          ['Sales maximisation', '100', '12', '1,200', '1,180', '20']
        ],
        question: 'Which conclusion is most consistent with the data?',
        opts: [
          'Revenue-maximising output exceeds profit-maximising output, and the revenue-maximising firm earns less profit but higher total revenue than the profit-maximiser',
          'Sales maximisation generates the highest profit because it has the largest output and highest total revenue',
          'Profit maximisation and revenue maximisation generate identical total revenues, so both objectives are equally desirable',
          'Sales maximisation produces the lowest total revenue, which is why it generates the highest profit relative to costs'
        ],
        ans: 0,
        exp: 'The data confirm the standard theory: <strong>revenue-maximising output (80k) exceeds profit-maximising output (50k)</strong>, consistent with MR = 0 being to the right of MR = MC. Revenue-max total revenue (&#163;1,200k) exceeds profit-max revenue (&#163;1,000k) but profit is lower (&#163;150k vs &#163;200k) &#8212; exactly as theory predicts. Sales maximisation produces even more output (100k) but profit falls to near-zero (&#163;20k) as the firm approaches the break-even constraint. The data show the output and price ordering: profit-max Q &lt; revenue-max Q &lt; sales-max Q, and the corresponding price ordering in reverse.'
      },

      /* 8 — Multi-select: evaluation of business objectives */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>business objectives and whether firms profit-maximise</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Profit maximisation (MR = MC) may be the dominant objective in competitive markets where weak firms are driven out, but in oligopolistic industries with high barriers to entry, managers enjoy discretion to pursue revenue growth or satisficing &#8212; meaning the assumption of profit maximisation is most valid precisely where it is least testable (many firms, easy exit)',
          'A profit-maximising firm produces where marginal revenue equals marginal cost',
          'CSR is not necessarily in conflict with shareholder interests: Porter and Kramer\'s &#8220;shared value&#8221; argument holds that socially responsible firms build reputational capital, attract higher-quality employees, and reduce regulatory risk &#8212; making CSR complementary to long-run profit rather than a diversion of shareholders&#8217; resources',
          'Revenue maximisation occurs where marginal revenue equals zero, producing more output at a lower price than profit maximisation',
          'Whether the principal-agent problem is severe depends on ownership concentration: in owner-managed firms, principals and agents are identical and the problem disappears; in widely-held PLCs with dispersed shareholders and professional managers, monitoring is costly and agent discretion is largest &#8212; so the problem is most severe precisely in the largest, most publicly prominent companies',
          'The principal-agent problem arises because managers (agents) do not always act in the interests of shareholders (principals)'
        ],
        correct: [0, 2, 4],
        exp: 'Option A is strong evaluation: it conditions the validity of profit maximisation on market structure, identifies the specific context (oligopoly with barriers) where the assumption breaks down, and notes the methodological irony that the assumption is hardest to test where it most plausibly holds &#8212; this is a sophisticated qualifying move that limits the generality of a standard model. Option C is strong evaluation: it directly challenges the Friedman dichotomy between CSR and profit by presenting a competing theoretical framework (Porter-Kramer shared value), identifies specific mechanisms (reputational capital, talent attraction, regulatory risk), and reaches a directional conclusion that CSR complements rather than conflicts with long-run profit. Option E is strong evaluation: it conditions the severity of the principal-agent problem on ownership structure, identifies the specific context (widely-held PLCs) where it is most severe, and notes the irony that the problem is largest in the most prominent firms &#8212; context-dependence with a direction and a specific mechanism. Option B states the profit-maximising condition without qualification or evaluative reasoning. Option D describes the revenue maximisation condition accurately but does not weigh it against alternatives, qualify it, or use it to reach any conditional conclusion. Option F states the definition of the principal-agent problem without applying it, qualifying it, or identifying conditions under which it is more or less severe.'
      },

      /* 9 — Chain: long-run competitive adjustment */
      { type: 'chain',
        stem: 'A firm in a competitive market posts supernormal profits. Place the events in the correct logical order from initial cause to long-run equilibrium.',
        items: [
          { label: 'Market supply increases as new entrants add their output', note: '' },
          { label: 'The firm earns supernormal profit (P > AC at profit-maximising output)', note: '' },
          { label: 'Long-run equilibrium: P = AC, firms earn normal profit, no further entry', note: '' },
          { label: 'New firms enter the market, attracted by the supernormal profit signal', note: '' },
          { label: 'Market price falls toward average cost', note: '' },
          { label: 'Each firm\'s horizontal demand curve shifts down to the new lower market price', note: '' }
        ],
        correctOrder: [1, 3, 0, 4, 5, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Firm earns supernormal profit (P &gt; AC).<br>2. New firms enter, attracted by the profit signal (no barriers).<br>3. Market supply increases.<br>4. Market price falls.<br>5. Each firm\'s horizontal demand line shifts down.<br>6. Long-run equilibrium at P = AC (normal profit).<br><br>This entry mechanism is why perfect competition delivers normal profit in the long run. Any deviation triggers a corrective process through the price mechanism. Importantly: the correction runs through <em>market supply</em> &#8212; individual firms are too small to affect price; it is the collective entry of many firms that shifts supply and lowers the market price.'
      },

      /* 10 — MCQ: public sector objectives */
      { type: 'mcq',
        stem: 'Which of the following best explains why public sector organisations are often <strong>less productively efficient</strong> than private sector firms in the same industry?',
        opts: [
          'The absence of a profit motive and competitive discipline means managers face weaker incentives to minimise costs',
          'Public sector organisations always use older technology and refuse to adopt modern production methods',
          'Government subsidies reduce public sector costs to zero, removing any need to control spending',
          'Public sector workers are legally prohibited from improving their productivity through training'
        ],
        ans: 0,
        exp: 'The economic explanation for public sector inefficiency is the <strong>absence of competitive and profit discipline</strong>. Private firms face the threat of losing customers to rivals (competitive pressure) and the profit motive that rewards cost minimisation. Public organisations face neither: they do not face competitors who can take their "customers," and managers\' jobs are not directly threatened by cost overruns. This generates <em>X-inefficiency</em> &#8212; firms operate above the minimum cost frontier because there is no external pressure to reach it. This does not mean public sector workers lack effort &#8212; it means the institutional incentive structure fails to transmit efficiency pressures as effectively as competitive markets do.'
      }

    ]
  };

})();
