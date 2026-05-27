window.ECONOS_TOPIC = {
  id: 'revenue',
  topicNum: '3.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Revenue',
  estTime: '5-7 minutes',
  goal: 'Lock in total, average, and marginal revenue concepts, and understand how revenue behaviour differs between price-takers and price-makers.',

  intro: {
    heroKey: 'heroCostCurves',
    summary: 'Revenue analysis is the bridge between demand theory and profit analysis. How a firm\'s revenue responds to changes in output depends entirely on whether it is a price-taker (perfect competition) or a price-maker (monopoly, oligopoly). Getting the revenue curves right is the foundation of every market structure diagram.',
    doInThis: 'Work through 3 cards covering the TR/AR/MR relationships, how AR and MR differ between competitive and monopoly firms, and revenue maximisation as an alternative business objective.',
    outcomes: [
      'Define TR, AR, and MR and calculate each from basic data',
      'Explain why MR = AR = P under perfect competition but MR < AR under monopoly',
      'Distinguish revenue maximisation from profit maximisation and show both on a diagram'
    ],
    tip: 'AR = TR/Q = Price. The AR curve IS the demand curve. For a price-taker: horizontal AR = MR = P. For a price-maker: downward-sloping AR, with MR below AR and falling twice as steeply (linear case).',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'revenue_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'Revenue: the building blocks',
      lede: 'Three revenue concepts – TR, AR, MR – underpin every market structure diagram you\'ll draw. Getting the relationships right is non-negotiable.',
      branches: [
        { tone: 'blue',   label: 'TR, AR and MR',            sub: 'Total, Average, Marginal. AR = TR/Q = Price. MR = ΔTR/ΔQ. The three concepts feed directly into profit analysis.' },
        { tone: 'green',  label: 'Price-taker (PC)',          sub: 'Horizontal demand → constant P → MR = AR = P. Each unit sold adds exactly P to total revenue.' },
        { tone: 'amber',  label: 'Price-maker (monopoly)',    sub: 'Downward-sloping demand → MR < AR. To sell one more unit, price must fall on ALL units → MR < price.' },
        { tone: 'purple', label: 'The MR geometry',          sub: 'For a linear demand curve: MR has the same y-intercept as AR but twice the slope. Intersects x-axis at half the output where AR = 0.' }
      ],
      body: '<strong>Total Revenue (TR)</strong> = Price \xd7 Quantity. Always rises initially as Q rises, then may fall depending on demand elasticity.<br><br><strong>Average Revenue (AR)</strong> = TR/Q = Price (P). The AR curve IS the demand curve – shows price at each quantity.<br><br><strong>Marginal Revenue (MR)</strong> = change in TR from selling one more unit.<br><br>For a <strong>price-taking firm</strong> (perfect competition): demand is perfectly elastic → P is constant → MR = AR = P (horizontal).<br><br>For a <strong>price-setter</strong> (monopoly): must lower price to sell more → MR &lt; AR (MR curve lies below demand curve and falls twice as steeply for a linear demand curve).',
      keyTerms: [
        { term: 'Average Revenue (AR)', def: 'Revenue per unit = TR/Q = price. The AR curve is identical to the demand curve.' },
        { term: 'Marginal Revenue (MR)', def: 'Extra revenue from selling one more unit. Under monopoly, MR < AR because price must fall to sell more.' },
        { term: 'MR relationship to AR', def: 'For a linear demand curve, MR has the same intercept as AR but twice the slope – falls twice as fast.' }
      ],
      examEdge: 'For a linear demand curve P = a − bQ, MR = a − 2bQ. The MR curve has the same y-intercept as the demand curve but twice the slope. This means when MR = 0, Q = a/2b (half the quantity at which demand hits the x-axis). This geometric property is essential for all monopoly and profit maximisation diagrams.'
    },
    {
      id: 'revenue_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'TR and the elasticity connection',
      body: 'The relationship between TR and PED is direct and examinable:<br><br>• <strong>Elastic demand (PED > 1):</strong> a price cut raises TR (% rise in Q > % fall in P). MR is positive.<br>• <strong>Unit elastic demand (PED = 1):</strong> a price cut leaves TR unchanged. MR = 0.<br>• <strong>Inelastic demand (PED < 1):</strong> a price cut reduces TR (% rise in Q < % fall in P). MR is negative.<br><br>The TR curve reaches its maximum when MR = 0 (unit elastic point). This is also the revenue-maximising output – covered in card 3.',
      keyTerms: [
        { term: 'TR maximised at MR = 0', def: 'TR is at its peak when the last unit sold adds nothing to total revenue – i.e., when MR = 0 (unit elastic point on demand).' },
        { term: 'Elastic region', def: 'Upper part of demand curve where PED > 1. Price cuts raise TR; price rises reduce TR.' },
        { term: 'Inelastic region', def: 'Lower part of demand curve where PED < 1. Price rises raise TR; price cuts reduce TR.' }
      ],
      examEdge: 'A monopolist will never produce in the inelastic region of demand (where MR < 0). Why? If MR < 0, reducing output raises TR and also reduces TC – both effects raise profit. The monopolist can always increase profit by cutting output until MR = 0 at minimum. In practice, profit max (MR = MC) is always in the elastic portion of demand where MC > 0.'
    },
    {
      id: 'revenue_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'Revenue maximisation vs profit maximisation',
      body: 'Comparing the output and price implications of different objectives reveals how firm behaviour differs:<br><br><strong>Profit maximisation:</strong> MR = MC. The optimal output is where the last unit earns exactly as much as it costs.<br><br><strong>Revenue maximisation:</strong> MR = 0. Produce more than the profit-maximising firm. Lower price. Smaller profit margin. Maximum total revenue (area under demand curve from 0 to Q where MR = 0).<br><br><strong>Sales maximisation (with normal profit constraint):</strong> produce as much as possible while TR ≥ TC. Even more output than revenue-max; price may be just above AC.<br><br>These different objectives are developed further in Business Objectives (2.1). Revenue max is Baumol\'s (1959) argument: manager pay and prestige are linked to firm size (revenue), not profit.',
      keyTerms: [
        { term: 'Profit-max output', def: 'MR = MC. Lower output and higher price than revenue or sales max.' },
        { term: 'Revenue-max output', def: 'MR = 0. Higher output and lower price than profit max. Maximum TR.' },
        { term: 'Sales-max output', def: 'TR ≥ TC. Maximum output consistent with at least normal profit. Even lower price.' }
      ],
      examEdge: 'On a single diagram showing demand (AR), MR, and MC curves: profit-max Q1 (MR=MC intersection); revenue-max Q2 (MR=0); sales-max Q3 (AR=AC, if minimum profit constraint). Q1 < Q2 < Q3; P1 > P2 > P3. Drawing these three points on the same diagram – with labels – is a high-marks response showing all objectives simultaneously.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
