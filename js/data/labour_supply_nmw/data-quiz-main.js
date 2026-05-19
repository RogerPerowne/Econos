/* ============================================================
   ECONOS — Quiz content for: Labour Supply, Trade Unions,
   and the National Minimum Wage
   10 questions covering the work-leisure trade-off, backward-
   bending supply, trade union wage bargaining, bilateral
   monopoly, and NMW theory and evidence.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'labour_supply_nmw_main',
    topicId:  'labour_supply_nmw_main',
    title:    'Labour Supply, Trade Unions, and the National Minimum Wage',
    subtitle: 'Theme 3.19 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the substitution and income effects on individual labour supply, the backward-bending supply curve, market labour supply determinants, trade union wage bargaining, the bilateral monopoly model, NMW theory under competitive and monopsonistic conditions, and empirical evidence from the UK. Includes real data on NLW rates, union density, and Card-Krueger evidence.',
    shortNames: {
      'workleisure': 'Work-leisure trade-off',
      'backwardbend': 'Backward-bending supply',
      'marketsupply': 'Market labour supply',
      'unions':      'Trade union bargaining',
      'bilateral':   'Bilateral monopoly',
      'nmw':         'National Minimum Wage'
    },

    questions: [

      /* 1 — mcq: substitution vs income effect */
      { type: 'mcq',
        stem: 'A worker\'s hourly wage rises from &#163;15 to &#163;20. The worker responds by working <strong>fewer hours per week</strong>. Which explanation is correct?',
        opts: [
          'The income effect dominates — the higher wage means the worker can achieve their target income in fewer hours, so they choose more leisure',
          'The substitution effect dominates — the higher wage makes leisure relatively cheaper, so the worker substitutes leisure for work',
          'The substitution effect and income effect both push in the same direction — both reduce hours worked when wages rise',
          'The worker is acting irrationally — economic theory predicts all workers increase hours when wages rise'
        ],
        ans: 0,
        exp: 'When hours fall as wages rise, the <strong>income effect</strong> has dominated the substitution effect. The income effect: higher wages mean the worker is better off — they can afford more of everything, including leisure (leisure is a normal good). The substitution effect: higher wages make each hour of leisure more expensive in opportunity cost terms (more forgone wages) — this pushes toward <em>more</em> work. When income effect > substitution effect: net result is fewer hours — the backward-bending section of the supply curve. Option B is wrong — if substitution dominated, hours would rise. Option C is wrong — the two effects always work in opposite directions for a wage change (income → more leisure, substitution → less leisure). Option D is wrong — fewer hours at higher wages is the backward-bending supply curve, a fully rational response.'
      },

      /* 2 — elastic_sort: income vs substitution effect */
      { type: 'elastic_sort',
        stem: 'For each change, identify whether the <strong>income effect</strong> or the <strong>substitution effect</strong> drives the stated worker response.',
        categories: ['income', 'substitution'],
        categoryLabels: ['Income effect dominates', 'Substitution effect dominates'],
        goods: [
          { icon: '📈', label: 'Wage rises from &#163;12 to &#163;20; worker increases hours from 35 to 40 per week', note: '', ans: 'substitution' },
          { icon: '📉', label: 'Wage rises from &#163;60 to &#163;80 per hour; senior consultant reduces hours from 50 to 45 per week', note: '', ans: 'income' },
          { icon: '🏖️', label: 'After a lottery win, a worker voluntarily reduces from full-time to three days per week', note: '', ans: 'income' },
          { icon: '💼', label: 'Income tax rate is cut, effectively raising take-home pay; a freelancer takes on additional clients', note: '', ans: 'substitution' },
          { icon: '🩺', label: 'NHS pay rise for senior doctors leads to reduced weekend on-call availability as doctors value rest more', note: '', ans: 'income' },
          { icon: '🎓', label: 'A graduate with no savings enters the labour market and works longer hours as wages rise from minimum to &#163;25/hr', note: '', ans: 'substitution' }
        ],
        exp: '<strong>Substitution effect dominates</strong>: when higher wages make leisure more costly (in opportunity cost) → worker substitutes work for leisure → hours rise. This occurs at lower income levels where the extra income from work is highly valued. <strong>Income effect dominates</strong>: when higher wages increase real income enough that the worker can "buy" more leisure → hours fall. This typically occurs at higher incomes where additional money has less marginal value than additional free time. The lottery win (no wage change, pure income effect) shows the income effect in isolation — more income → less work. Real-world evidence: UK evidence suggests the backward-bending section applies to self-employed professionals and some high-income workers, less so to lower-income workers on standard employment contracts.'
      },

      /* 3 — mcq: market labour supply */
      { type: 'mcq',
        stem: 'Which of the following best explains why the <strong>aggregate labour supply curve</strong> typically slopes upward even if some individual labour supply curves bend backward?',
        opts: [
          'As wages rise, more people are attracted into the labour force (participation effect) — this adds new workers, offsetting the reduction in hours from existing workers who reach the backward-bending section',
          'The aggregate curve is simply the horizontal sum of individual curves, and most individuals\' curves are upward-sloping throughout their working lives',
          'Aggregate labour supply is determined by government policy, not individual decisions — so the backward-bending individual curve is irrelevant to the aggregate',
          'High earners work in different markets from low earners, so the backward-bending section of high earners\' curves does not affect the aggregate supply in low-wage markets'
        ],
        ans: 0,
        exp: 'The <strong>participation effect</strong> is the key. As market wages rise, not only do existing workers adjust their hours but also people who were previously outside the labour force (students, carers, early retirees, those on benefits) are attracted to work. This extensive margin response adds new workers, increasing aggregate labour supply. Even if some existing workers in the backward-bending section reduce hours, the new entrants add to aggregate supply — keeping the aggregate curve upward-sloping over the relevant range. The backward-bending section is most relevant for individuals with very high wages (top earners, self-employed professionals) — a small subset of the labour force. For the majority of the wage distribution, the substitution effect dominates individual supply, and the participation effect adds further upward slope to the aggregate.'
      },

      /* 4 — chain: trade union wage bargaining sequence */
      { type: 'chain',
        stem: 'Place the events in the correct order for a trade union successfully raising wages above equilibrium in a competitive labour market.',
        items: [
          { label: 'Employment in the sector falls from L* to L&#7512; — employers demand fewer workers at the higher wage', note: '' },
          { label: 'Workers inside the union earn W&#7512; > W* — a wage gain for those employed', note: '' },
          { label: 'Trade union sets a wage target W&#7512; above the competitive equilibrium W*', note: '' },
          { label: 'Workers outside the sector who want to work at W&#7512; but cannot find jobs face unemployment', note: '' },
          { label: 'Union uses collective bargaining and the threat of strike action to achieve W&#7512;', note: '' },
          { label: 'Competitive labour market equilibrium at W*, L* without union intervention', note: '' }
        ],
        correctOrder: [5, 2, 4, 0, 1, 3],
        exp: '<strong>Correct sequence:</strong><br>1. Competitive equilibrium at W*, L*.<br>2. Union sets a wage target W&#7512; > W*.<br>3. Union uses collective bargaining/strike threat to achieve W&#7512;.<br>4. Employment falls from L* to L&#7512; — employers move up the labour demand curve.<br>5. Employed union members earn W&#7512; — a gain for insiders.<br>6. Outsiders unable to find work at W&#7512; face unemployment.<br><br>This illustrates the <em>insider-outsider</em> trade-off. Union wage bargaining benefits <strong>insiders</strong> (employed members) at the expense of <strong>outsiders</strong> (unemployed or would-be workers). The welfare verdict is ambiguous: redistribution from outsiders and employers to insiders. However, in a <strong>monopsony</strong> context, the same union wage increase can raise both wages AND employment — which is why the welfare verdict depends on market structure.'
      },

      /* 5 — diagram_interp: bilateral monopoly */
      { type: 'diagram_interp',
        stem: 'The NHS is the dominant employer of nurses (monopsony) and the RCN (Royal College of Nursing) acts as a trade union monopoly seller of nursing labour. This creates a bilateral monopoly.',
        svg: '<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="50" y1="20" x2="50" y2="265" stroke="#0B1426" stroke-width="2"/><line x1="50" y1="265" x2="395" y2="265" stroke="#0B1426" stroke-width="2"/><text x="38" y="22" fill="#0B1426" font-size="11" text-anchor="end" font-weight="700">W</text><text x="393" y="280" fill="#0B1426" font-size="11" font-weight="700">L</text><line x1="70" y1="55" x2="360" y2="225" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="225" fill="#2563EB" font-size="11">MRP</text><line x1="70" y1="125" x2="360" y2="225" stroke="#1FB574" stroke-width="2.5"/><text x="363" y="217" fill="#1FB574" font-size="11">S<sub>L</sub></text><line x1="70" y1="55" x2="360" y2="125" stroke="#EC2D68" stroke-width="2.5" stroke-dasharray="5,3"/><text x="363" y="125" fill="#EC2D68" font-size="11">MCL</text><line x1="50" y1="140" x2="395" y2="140" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="5,3"/><text x="398" y="144" fill="#F5B800" font-size="10">W<sub>c</sub></text><line x1="50" y1="175" x2="395" y2="175" stroke="#9B59B6" stroke-width="1.5" stroke-dasharray="5,3"/><text x="398" y="179" fill="#9B59B6" font-size="10">W<sub>m</sub></text><line x1="50" y1="95" x2="395" y2="95" stroke="#EC2D68" stroke-width="1.5" stroke-dasharray="5,3"/><text x="398" y="99" fill="#EC2D68" font-size="10">W<sub>u</sub></text></svg>',
        caption: 'W&#7913; = competitive wage. W&#8337; = monopsony wage (no union). W&#7512; = union target wage. Actual wage in bilateral monopoly lies between W&#8337; and W&#7512;.',
        question: 'In a bilateral monopoly, what determines the actual negotiated wage?',
        opts: [
          'Relative bargaining power — the outcome lies in the range between the monopsony wage (W&#8337;) and the union\'s wage target (W&#7512;), with the exact position depending on each party\'s negotiating strength and alternatives',
          'The competitive equilibrium wage W&#7913; — bilateral monopoly always restores the competitive outcome because the two sides\' monopoly powers cancel out exactly',
          'The union always achieves its full wage target W&#7512; — because the employer cannot resist a combined union threat',
          'The monopsonist always pays W&#8337; — because as the buyer of labour, the employer has the ultimate negotiating power'
        ],
        ans: 0,
        exp: 'Bilateral monopoly produces an <strong>indeterminate outcome</strong> — the theory cannot specify the exact wage without knowing relative bargaining power. The outcome lies between W&#8337; (monopsony power fully dominant) and W&#7512; (union power fully dominant). What determines relative bargaining power: (1) each side\'s best alternative to agreement (BATNA); (2) credibility of threats (can nurses sustain a prolonged strike? Can NHS cope without them?); (3) public opinion and political pressure; (4) financial sustainability. The NHS nursing dispute (2022-23) illustrates this: nurses\' strike action was the strongest tool, but the NHS\'s monopsony position and government fiscal constraints set the upper bound. The final settlement was politically mediated — not purely market-determined. This is why bilateral monopoly wages cannot be predicted from economic theory alone.'
      },

      /* 6 — multi_select: NMW effects */
      { type: 'multi_select',
        stem: 'Which of the following are correct statements about the effects of the <strong>National Minimum Wage (NMW)</strong> in the UK? Select all that apply.',
        opts: [
          'In a competitive labour market, a minimum wage above equilibrium reduces employment (excess supply)',
          'In a monopsonistic labour market, a minimum wage up to the competitive wage can increase both wages and employment simultaneously',
          'The Low Pay Commission\'s evidence consistently shows that UK NMW increases have caused large-scale unemployment since 1999',
          'The NMW reduces in-work poverty by raising the earnings floor for the lowest-paid workers',
          'Regional variation means the NMW is more likely to have employment effects in low-wage regions than in high-wage areas like London',
          'Card and Krueger (1994) found that minimum wage increases in US fast food reduced employment significantly'
        ],
        correct: [0, 1, 3, 4],
        exp: 'Options A, B, D, and E are correct. (A) Standard competitive model prediction — wage floor above equilibrium creates excess supply. (B) Monopsony qualification — NMW corrects monopsonist\'s wage below competitive equilibrium, potentially raising both wages and employment. (D) Direct poverty reduction mechanism — UK NLW at &#163;11.44/hour (2024) directly benefits the lowest-paid. (E) Regional variation: London median wage &#8773;&#163;19/hour means NMW well below equilibrium; in low-wage northern regions, NMW is closer to (or exceeds) the equilibrium — larger employment risk. Options C and F are incorrect: (C) UK Low Pay Commission evidence shows <em>small</em> employment effects, not large-scale unemployment. (F) Card and Krueger is the reverse — they found <em>no</em> significant employment reduction, which challenged the competitive model and supported the monopsony explanation.'
      },

      /* 7 — calculation: NMW and wages */
      { type: 'calculation',
        context: 'In 2019, a full-time worker (37.5 hours per week, 52 weeks per year) was earning the <strong>National Living Wage of &#163;8.21 per hour</strong>. By 2024, the NLW had risen to <strong>&#163;11.44 per hour</strong>. Over the same period, CPI inflation was cumulatively <strong>24%</strong>.',
        working: [
          '2019 annual earnings: &#163;8.21 &#215; 37.5 &#215; 52 = &#163;16,010',
          '2024 annual earnings: &#163;11.44 &#215; 37.5 &#215; 52 = &#163;22,308',
          'Nominal wage rise: (&#163;22,308 &#8722; &#163;16,010) &#247; &#163;16,010 = 39.3%',
          'Cumulative inflation over period: 24%',
          'Real wage change: 39.3% &#8722; 24% &#8773; +15.3% in real terms',
          '2024 earnings in 2019 prices: &#163;22,308 &#247; 1.24 &#8773; &#163;17,990',
          'Real gain: &#163;17,990 &#8722; &#163;16,010 = &#163;1,980 per year'
        ],
        stem: 'What has happened to the <strong>real earnings</strong> of a full-time NLW worker between 2019 and 2024?',
        opts: [
          { ped: 'Real earnings have risen by approximately 15% — the 39% nominal rise substantially outpaced 24% cumulative inflation', typ: 'Correctly deflated nominal earnings rise (39.3%) by cumulative inflation (24%) to find real gain (&#8773;15%)', rev: 'Real wage = nominal change minus inflation; NLW rose much faster than inflation in this period' },
          { ped: 'Real earnings are unchanged — the nominal rise of 39% has been entirely eroded by 24% inflation', typ: 'Confused percentage points with percentages: 39% &#8722; 24% = 15% real gain, not 0%', rev: 'Nominal rise (39%) minus inflation (24%) = 15% real gain — not zero' },
          { ped: 'Real earnings have fallen — inflation of 24% has outpaced the NLW rise of 39%', typ: 'Reversed the comparison: 39% > 24%, so real wages rose, not fell', rev: '39% nominal gain > 24% inflation = positive real wage growth' },
          { ped: 'Real earnings have risen by exactly 39% — inflation does not affect the real value of minimum wage earners', typ: 'Failed to adjust for inflation — 39% is the nominal, not real, wage rise', rev: 'Must deflate nominal gains by the price level to get real purchasing power change' }
        ],
        ans: 0,
        exp: 'Nominal NLW rise 2019→2024: (&#163;11.44 &#8722; &#163;8.21) / &#163;8.21 = <strong>39.3%</strong>. Cumulative inflation: <strong>24%</strong>. Real wage gain: approximately <strong>+15%</strong> in purchasing power. Annual earnings in 2019 prices: &#163;22,308 &#247; 1.24 &#8773; <strong>&#163;17,990</strong> vs &#163;16,010 in 2019 — a real gain of about &#163;1,980/year. The UK government\'s policy of raising the NLW faster than inflation has delivered genuine real wage gains for minimum wage workers over this period — one of the stated goals of the NMW policy to reduce low pay as a share of median wages. This contrasts with median real wages, which barely recovered to 2004 levels by 2024 — the NMW has specifically compressed the bottom of the wage distribution.'
      },

      /* 8 — odd_one_out: factors affecting union bargaining power */
      { type: 'odd_one_out',
        stem: 'Three of these <strong>increase trade union bargaining power</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '👥', label: 'High union membership density (e.g., 80% of workers in the sector are union members)', note: '' },
          { icon: '📉', label: 'Very high unemployment rate in the sector — many unemployed workers are available to replace strikers', note: '' },
          { icon: '⚡', label: 'Workers provide an essential service (e.g., power grid operators) — employer cannot easily operate without them', note: '' },
          { icon: '🤝', label: 'Strong solidarity among members — workers are willing and financially able to sustain prolonged strike action', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>high sector unemployment</strong>. This <em>weakens</em> union bargaining power — when there is a large pool of unemployed workers willing to take strikers\' jobs, the employer can credibly threaten to hire replacements, making the strike less effective. The other three all <em>strengthen</em> union power: (A) high membership density → union can credibly call an effective strike; (C) essential service → employer cannot replace workers or operate without them → high strike leverage; (D) financial solidarity → workers can sustain a long strike → increases the cost to the employer of refusing to settle. The inverse relationship between unemployment and union bargaining power explains why UK union wage growth was highest in the tight labour markets of the 1970s and slowest during the high unemployment of the 1980s-90s.'
      },

      /* 9 — para_fill: competitive model vs monopsony */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph comparing NMW effects under different labour market models.',
        anchor: 'The impact of the National Minimum Wage depends critically on the structure of the labour market.',
        para: 'Under the <strong>competitive model</strong>, a minimum wage set <strong>above</strong> the equilibrium wage creates [1] supply of labour — more workers want to work than employers want to hire. This generates [2]. Under the <strong>monopsony model</strong>, the employer already pays workers [3] the competitive wage because the marginal cost of labour [4] the supply curve. A minimum wage set at the competitive level raises wages AND [5] employment — correcting the [6] distortion. The UK Low Pay Commission finds [7] disemployment effects, which is consistent with [8] characteristics in low-wage sectors.',
        blanks: [
          { id: 1, opts: ['excess', 'deficient', 'equal', 'elastic'], ans: 0 },
          { id: 2, opts: ['unemployment', 'inflation', 'higher output', 'lower wages'], ans: 0 },
          { id: 3, opts: ['below', 'above', 'equal to', 'double'], ans: 0 },
          { id: 4, opts: ['lies above', 'equals', 'lies below', 'is parallel to'], ans: 0 },
          { id: 5, opts: ['increases', 'reduces', 'has no effect on', 'eliminates'], ans: 0 },
          { id: 6, opts: ['monopsony', 'competitive', 'union', 'government'], ans: 0 },
          { id: 7, opts: ['small or zero', 'large', 'increasing', 'catastrophic'], ans: 0 },
          { id: 8, opts: ['monopsonistic', 'competitive', 'perfectly elastic', 'oligopoly'], ans: 0 }
        ],
        exp: '(1) <strong>Excess</strong>: supply > demand → excess supply at the wage floor. (2) <strong>Unemployment</strong>: workers wanting jobs at W<sub>min</sub> > employers willing to hire. (3) <strong>Below</strong>: monopsonist pays below competitive wage — exploiting market power. (4) <strong>Lies above</strong>: MCL > supply curve because raising wage for one worker means paying more to all. (5) <strong>Increases</strong>: minimum wage corrects monopsony distortion — employment rises toward competitive level. (6) <strong>Monopsony</strong>: the wage and employment distortion created by the monopsonist\'s market power. (7) <strong>Small or zero</strong>: UK LPC consistently finds limited disemployment. (8) <strong>Monopsonistic</strong>: the evidence is consistent with the monopsony model — care sector, retail, distribution are all dominated by large employers.'
      },

      /* 10 — diagnostic_pair: union efficiency effects */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the economic effects of trade unions on wages, employment, and efficiency."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Leila', badge: 'Candidate A',
            answer: 'Trade unions act as a <strong>monopoly seller of labour</strong>. In competitive markets, the union wage premium (10-20% above non-union wages, empirical estimates) raises wages for members but reduces employment — the standard efficiency cost. However, the welfare assessment is more nuanced. First, in <strong>monopsonistic markets</strong>, unions act as a countervailing power, raising both wages AND employment toward the competitive equilibrium — improving efficiency. Second, "voice" theory (Freeman and Medoff): unions give workers a collective voice, reducing costly turnover, improving information flows between management and workers, and raising productivity — a dynamic efficiency gain. Third, unions historically drove investment in training and apprenticeships — human capital positive externalities. Against these: unions can create insider-outsider wage dualism; restrictive practices can reduce productive efficiency; and declining UK union density (55% in 1979 → 23% in 2024) means these effects are diminishing. Conclusion: unions\' net welfare effect is context-dependent — beneficial where they correct monopsony power, costly where they create wage floors in competitive markets.'
          },
          { name: 'Marcus', badge: 'Candidate B',
            answer: 'Trade unions raise wages for their members by collective bargaining. This is good for workers because they earn more money. However, higher wages mean that some workers may lose their jobs as employers hire fewer people at the higher wage. There is therefore a trade-off between higher wages for some workers and lower employment for others. Trade unions also have efficiency effects. They can improve communication between workers and management, which may increase productivity. But some unions have restrictive practices that prevent firms from using the most efficient methods of production. In conclusion, the effects of trade unions depend on the specific circumstances, and there are both positive and negative effects on wages, employment, and efficiency.'
          }
        ],
        ans: 0,
        exp: '<strong>Leila</strong> gives the stronger answer. She applies specific analytical frameworks: monopoly seller of labour, monopsony countervailing power, Freeman-Medoff voice theory. She uses specific data (10-20% union wage premium, 55% → 23% density decline). She distinguishes competitive from monopsonistic market contexts — a crucial qualification. Her evaluation is structured around distinct mechanisms (market structure effect, voice effect, training externality, insider-outsider) rather than generic "positives and negatives." Marcus covers the wage-employment trade-off correctly and mentions restrictive practices and communication, but at the descriptive level — no named theories, no data, no framework for distinguishing when unions are net beneficial vs harmful. Leila accesses Level 4; Marcus Level 2–3. The mention of Freeman and Medoff voice theory is a Level 4 marker.'
      }

    ]
  };

})();
