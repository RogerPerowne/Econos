/* ============================================================
   ECONOS — Quiz content for: Labour Markets
   10 questions covering derived demand, MRP theory, labour
   market equilibrium, wage differentials, monopsony, and
   labour market failure.
   ============================================================ */

(function () {

  var MRP_SVG =
    '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif">' +
    '<line x1="50" y1="20" x2="50" y2="270" stroke="#0B1426" stroke-width="2"/>' +
    '<line x1="50" y1="270" x2="395" y2="270" stroke="#0B1426" stroke-width="2"/>' +
    '<text x="38" y="22" fill="#0B1426" font-size="11" text-anchor="end" font-weight="700">W</text>' +
    '<text x="393" y="285" fill="#0B1426" font-size="11" font-weight="700">L</text>' +
    '<line x1="70" y1="50" x2="370" y2="240" stroke="#2563EB" stroke-width="2.5"/>' +
    '<text x="373" y="240" fill="#2563EB" font-size="11" font-weight="700">MRP=D<sub>L</sub></text>' +
    '<line x1="70" y1="145" x2="370" y2="145" stroke="#EC2D68" stroke-width="2.5"/>' +
    '<text x="373" y="145" fill="#EC2D68" font-size="11" font-weight="700">W*</text>' +
    '<line x1="50" y1="115" x2="395" y2="115" stroke="#1FB574" stroke-width="2" stroke-dasharray="5,3"/>' +
    '<text x="38" y="119" fill="#1FB574" font-size="10" text-anchor="end">W<sub>2</sub></text>' +
    '<line x1="220" y1="20" x2="220" y2="270" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '<circle cx="220" cy="145" r="5" fill="#F5B800"/>' +
    '<text x="220" y="285" fill="#0B1426" font-size="10" text-anchor="middle" font-weight="700">L*</text>' +
    '<line x1="50" y1="145" x2="220" y2="145" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>' +
    '</svg>';

  window.ECONOS_QUIZ = {
    id:       'labour_markets_main',
    topicId:  'labour_markets_main',
    title:    'Labour Markets',
    subtitle: 'Theme 3.18 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering derived demand, MRP theory of labour demand, labour market equilibrium, shifts in demand and supply, wage differentials and their causes, monopsony power, and labour market failures including the gig economy. Real UK context throughout, including NHS, NMW, and gender pay data.',
    shortNames: {
      'derived':    'Derived demand',
      'mrp':        'MRP theory',
      'equilibrium': 'Labour market equilibrium',
      'shifts':     'Shifts in demand & supply',
      'differentials': 'Wage differentials',
      'monopsony':  'Monopsony'
    },

    questions: [

      /* 1 — mcq: derived demand */
      { type: 'mcq',
        stem: 'The demand for labour is described as a <strong>derived demand</strong>. What does this mean?',
        opts: [
          'Firms demand labour not for its own sake but because workers produce goods and services that can be sold — labour demand depends on product demand',
          'Workers derive their wages from the marginal revenue product, so wages are derived mathematically from output prices',
          'Labour demand is derived from the supply side of the economy — more workers create more products, which creates more demand for goods',
          'The demand for labour is derived entirely from government policy decisions about employment levels'
        ],
        ans: 0,
        exp: 'Derived demand means that demand for a factor of production (labour, capital) arises from — is derived from — the demand for the goods or services it helps produce. A firm demands software engineers not for their own sake but because they build products consumers buy. This creates a direct link between product markets and labour markets: anything that increases demand for a product increases demand for the workers who make it. Application: the UK\'s long-run shift from manufacturing to services derived demand for different skills — demand for factory workers fell as product demand shifted; demand for financial services workers rose. The concept traces the transmission chain: product demand → MRP → labour demand → wages.'
      },

      /* 2 — calculation: MRP */
      { type: 'calculation',
        context: 'A firm sells its product at a price of <strong>&#163;10 per unit</strong>. The 5th worker hired produces an additional <strong>8 units</strong> per day. The 6th worker produces an additional <strong>6 units</strong> per day. The 7th worker produces an additional <strong>4 units</strong> per day. The current wage rate is <strong>&#163;55 per day</strong>.',
        working: [
          'MRP = Price &#215; Marginal Product (firm is a price-taker in the product market, so MR = P = &#163;10)',
          'MRP of 5th worker: &#163;10 &#215; 8 = &#163;80 per day',
          'MRP of 6th worker: &#163;10 &#215; 6 = &#163;60 per day',
          'MRP of 7th worker: &#163;10 &#215; 4 = &#163;40 per day',
          'Compare MRP to wage (&#163;55):',
          '5th worker: &#163;80 > &#163;55 → hire (adds to profit)',
          '6th worker: &#163;60 > &#163;55 → hire (just worthwhile)',
          '7th worker: &#163;40 < &#163;55 → do not hire (costs more than contributes)'
        ],
        stem: 'How many of these workers (5th, 6th, 7th) should the profit-maximising firm hire?',
        opts: [
          { ped: 'The 5th and 6th workers — both have MRP (&#163;80 and &#163;60) above the wage (&#163;55); the 7th does not (MRP = &#163;40 < &#163;55)', typ: 'Correctly applied MRP = W rule: hire where MRP &#8805; W, stop when MRP < W', rev: 'Hire where MRP &#8805; wage; do not hire when MRP falls below wage' },
          { ped: 'All three workers — the firm should always hire as many workers as possible to maximise output', typ: 'Confused output maximisation with profit maximisation — hiring the 7th worker reduces profit by &#163;15', rev: 'Profit max: hire where MRP = W; beyond that, additional workers reduce profit' },
          { ped: 'Only the 5th worker — safest to stop when there is a clear surplus of MRP over the wage', typ: 'Over-conservative — the 6th worker (MRP &#163;60 > W &#163;55) adds &#163;5 to daily profit, so should be hired', rev: 'As long as MRP > W, hiring adds to profit — must hire 6th as well' },
          { ped: 'None of the workers — the firm cannot afford to hire when facing diminishing marginal returns', typ: 'Confused diminishing returns (inevitable) with the hiring decision — 5th and 6th workers are still profitable', rev: 'Diminishing returns mean MRP falls; but hiring is still profitable as long as MRP > W' }
        ],
        ans: 0,
        exp: 'The profit-maximising rule: hire where <strong>MRP &#8805; W</strong>. The 5th worker (MRP = &#163;80) adds &#163;25 to daily profit → hire. The 6th worker (MRP = &#163;60) adds &#163;5 → still worth hiring. The 7th worker (MRP = &#163;40) costs &#163;15 more than they contribute → do not hire. Total profit addition from 5th and 6th: &#163;25 + &#163;5 = &#163;30/day. Hiring the 7th would reduce profit by &#163;15/day. The downward slope of MRP (&#163;80, &#163;60, &#163;40) reflects <strong>diminishing marginal returns</strong> — as more workers are added to fixed capital, each adds less output. This is why the MRP curve (= labour demand curve) slopes downward.'
      },

      /* 3 — diagram_interp: labour market equilibrium */
      { type: 'diagram_interp',
        stem: 'The diagram shows a competitive labour market for nurses in the UK. The equilibrium is at wage W* and employment L*.',
        svg: MRP_SVG,
        caption: 'W* = competitive equilibrium wage. W&#8322; = wage above equilibrium (dashed green line). MRP = D&#8319; slopes down due to diminishing marginal returns.',
        question: 'If the government sets a <strong>minimum wage at W&#8322; > W*</strong> in a <strong>competitive</strong> labour market, what is the predicted outcome?',
        opts: [
          'Employment falls below L* and there is excess supply of labour (unemployment) — more nurses want to work at W&#8322; than employers want to hire',
          'Employment rises above L* as higher wages attract more nurses into the profession, matching the extra supply',
          'The wage floor is non-binding — wages are already above W&#8322; in competitive labour markets, so it has no effect',
          'Both wages and employment rise together because the minimum wage shifts the MRP curve outward'
        ],
        ans: 0,
        exp: 'In a <strong>competitive</strong> labour market, a wage floor above equilibrium causes: (1) employers demand fewer workers — moving up the MRP curve to lower L; (2) more workers want to work at the higher wage — moving up the supply curve. Result: <strong>excess supply (unemployment)</strong>. This is the standard competitive model prediction. However, this is not the end of the story — many low-wage labour markets (including NHS nursing) have <strong>monopsonistic characteristics</strong>. Under monopsony, the same minimum wage can actually <em>increase</em> both wages AND employment. This is the key debate around the UK\'s NMW: empirical evidence shows limited disemployment because many low-wage markets are not purely competitive. Strong exam answers present both the competitive model prediction AND the monopsony qualification.'
      },

      /* 4 — elastic_sort: shifts in labour demand */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing a <strong>rightward shift in labour demand</strong> (more workers demanded at every wage) or a <strong>leftward shift in labour demand</strong> (fewer workers demanded at every wage).',
        categories: ['right', 'left'],
        categoryLabels: ['Rightward shift (demand rises)', 'Leftward shift (demand falls)'],
        goods: [
          { icon: '📈', label: 'Consumer demand for the firm\'s product rises substantially — the firm needs more workers to meet higher sales', note: '', ans: 'right' },
          { icon: '🤖', label: 'A new robot system automates much of the assembly line work previously done by human workers', note: '', ans: 'left' },
          { icon: '💰', label: 'The firm\'s product price rises by 20% — each worker now generates more revenue per unit produced', note: '', ans: 'right' },
          { icon: '📉', label: 'Import competition intensifies — UK consumers switch to cheaper foreign-made goods, reducing domestic product demand', note: '', ans: 'left' },
          { icon: '🎓', label: 'Workers receive training that significantly raises their productivity (output per worker)', note: '', ans: 'right' },
          { icon: '🏭', label: 'A major factory in the sector closes, reducing the industry\'s productive capacity and product supply', note: '', ans: 'left' }
        ],
        exp: '<strong>Rightward shifts</strong> in labour demand (MRP rises): higher product demand, higher product price, or higher labour productivity all raise MRP (MRP = MR &#215; MPL). More workers needed at every wage. <strong>Leftward shifts</strong>: automation (substitutes for labour → fewer workers needed), import competition (reduces product demand → lower MRP → fewer workers hired), and factory closure (direct reduction in the productive workforce). The derived demand link: every rightward demand shift traces back to either higher product demand, higher product price, or higher labour productivity — all raise MRP. UK manufacturing employment decline reflects the combination of import competition (reduced product demand) and automation (substitution), both shifting labour demand left simultaneously.'
      },

      /* 5 — multi_select: wage differentials */
      { type: 'multi_select',
        stem: 'Which of the following are valid economic explanations for <strong>why surgeons earn more than supermarket cashiers</strong>? Select all that apply.',
        opts: [
          'Surgeons\' MRP is much higher — each surgeon generates substantially more revenue for the NHS than each cashier generates for a supermarket',
          'Medical training creates a significant barrier to entry to the medical profession — limiting the supply of surgeons and sustaining high wages',
          'Surgery involves greater non-monetary costs (long training, high responsibility, stress) requiring a compensating differential',
          'Surgeons have more market power because the NHS has a monopoly on providing healthcare in the UK, pushing up NHS wages',
          'The British Medical Association (BMA) acts as a professional association that restricts entry and collectively bargains — supporting surgeon wages',
          'Cashier work requires no specialist training — supply is highly elastic, keeping wages at the competitive minimum'
        ],
        correct: [0, 1, 2, 4, 5],
        exp: 'Options A, B, C, E, and F are all valid explanations. (A) <strong>MRP difference</strong>: surgeons generate high revenue per procedure; cashiers have lower productivity value — fundamental wage differential source. (B) <strong>Entry barriers</strong>: 5–10 years of medical training plus regulatory approval → restricted supply → higher wages. (C) <strong>Compensating differential</strong>: long training, high stakes, irregular hours → wage premium to attract sufficient workers. (E) <strong>BMA as professional association</strong>: restricts entry (accreditation control) and bargains collectively — acts as a labour market monopoly raising wages. (F) <strong>Elastic cashier supply</strong>: low-skill, low-training requirements → large pool of potential workers → competitive wage outcome. Option D is incorrect — the NHS being the dominant buyer is <em>monopsony</em> power, which would tend to <em>suppress</em> wages below competitive levels, not push them up. The BMA counteracts the NHS monopsony.'
      },

      /* 6 — mcq: monopsony */
      { type: 'mcq',
        stem: 'In a monopsonistic labour market, compared to a competitive equilibrium, the firm pays a <strong>lower wage</strong> and employs <strong>fewer workers</strong>. This occurs because:',
        opts: [
          'The monopsonist hires where MRP = MCL, but MCL lies above the supply curve — so the wage read off the supply curve at this employment level is below the MCL and below the competitive wage',
          'The monopsonist has lower MRP than a competitive employer because it sells into a smaller product market',
          'The monopsonist pays minimum wage only — all workers in monopsonistic markets receive the legal floor wage',
          'Monopsony creates excess supply (unemployment), which forces workers to accept lower wages than under competition'
        ],
        ans: 0,
        exp: 'The monopsonist\'s <strong>MCL lies above the labour supply curve</strong>. To hire one more worker, the monopsonist must raise the wage to attract that worker — but (under uniform wage) must pay the same higher wage to all existing workers. This means the marginal cost of hiring an additional worker exceeds the wage paid. The monopsonist maximises profit at MRP = MCL (lower employment than MRP = W). The wage is then read off the <strong>supply curve</strong> at this lower employment — below the competitive wage. Two distortions: (1) W < MRP → workers underpaid relative to their contribution; (2) L < competitive L → underemployment. The monopsony model directly justifies the NMW: a minimum wage up to the competitive wage level can simultaneously raise wages AND increase employment — correcting the monopsony distortion.'
      },

      /* 7 — para_fill: gender pay gap */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'The gender pay gap has multiple overlapping explanations.',
        para: 'The UK gender pay gap — approximately [1]% on full-time earnings in 2024 — cannot be attributed to a single cause. First, occupational [2] concentrates women in lower-MRP sectors such as care and education, reducing their average wage. Second, women are more likely to work [3], which carries a wage penalty because part-time workers are often in less skilled roles. Third, career [4] for childcare reduce human capital accumulation — time out of work means missed training and promotion. Fourth, even controlling for occupation and hours, a residual pay gap remains, suggesting [5] plays a role. Effective policy must address the specific [6] — childcare provision targets career breaks, while equal pay legislation targets [7].',
        blanks: [
          { id: 1, opts: ['9', '25', '2', '40'], ans: 0 },
          { id: 2, opts: ['segregation', 'discrimination', 'mobility', 'competition'], ans: 0 },
          { id: 3, opts: ['part-time', 'overtime', 'remotely', 'self-employed'], ans: 0 },
          { id: 4, opts: ['breaks', 'mobility', 'ambitions', 'supply'], ans: 0 },
          { id: 5, opts: ['discrimination', 'monopsony', 'taxation', 'immigration'], ans: 0 },
          { id: 6, opts: ['cause', 'sector', 'firm', 'union'], ans: 0 },
          { id: 7, opts: ['direct discrimination', 'occupational segregation', 'part-time working', 'human capital gaps'], ans: 0 }
        ],
        exp: '(1) <strong>9%</strong>: the UK full-time gender pay gap is approximately 9% (2024 ONS data). The overall gap (including part-time) is higher at about 14%. (2) <strong>Segregation</strong>: occupational segregation (women concentrated in lower-paid sectors) is the largest single factor. (3) <strong>Part-time</strong>: UK has one of Europe\'s highest rates of female part-time working — this carries a substantial wage penalty. (4) <strong>Breaks</strong>: career breaks for childcare interrupt earnings progression and training. (5) <strong>Discrimination</strong>: the "unexplained residual" in econometric studies. (6) <strong>Cause</strong>: correct policy must match the cause — one-size policy is ineffective. (7) <strong>Direct discrimination</strong>: equal pay law addresses paying women less than men for equivalent work; it cannot address segregation, part-time penalties, or human capital gaps.'
      },

      /* 8 — diagnostic_pair: minimum wage and monopsony */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the view that the National Minimum Wage causes unemployment."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Amara', badge: 'Candidate A',
            answer: 'The competitive model predicts that a wage floor above equilibrium creates excess supply (unemployment) — more workers want to work than firms want to hire at the higher wage. This is the standard analysis. However, there are important qualifications. First, the <strong>monopsony model</strong>: many low-wage markets (care sector, Amazon warehouses, supermarkets) have dominant employer characteristics. In monopsony, the minimum wage up to the competitive level raises both wages AND employment — correcting the employer\'s market power. Second, <strong>empirical evidence</strong> from Card and Krueger (1994) and the UK Low Pay Commission consistently finds small or zero disemployment effects. Third, firms may adjust through non-wage margins (fewer hours, reduced non-wage benefits, higher productivity demands) rather than job cuts. Fourth, regional variation matters: in London (median wage &#163;19/hour), a &#163;11.44 NMW is far below the market wage — no disemployment. In low-wage northern England, the floor is more binding — greater risk of employment effects. Conclusion: the simple competitive model overstates the unemployment risk; monopsony theory and empirical evidence suggest the real effect is much smaller, though larger in low-wage regions.'
          },
          { name: 'Jack', badge: 'Candidate B',
            answer: 'A minimum wage set above the equilibrium wage will cause unemployment according to basic supply and demand theory. If the minimum wage is higher than the market-clearing wage, employers will demand fewer workers and more workers will want to work at the higher wage, creating excess supply. However, some economists argue that the minimum wage does not actually cause much unemployment. This may be because many low-wage employers are monopsonies — they have market power and pay wages below the competitive level. In this case, a minimum wage can actually increase employment. Evidence from the UK suggests that the National Minimum Wage has not caused major unemployment since it was introduced in 1999, and has helped to reduce poverty among low-paid workers. So the answer depends on what type of market we are looking at.'
          }
        ],
        ans: 0,
        exp: '<strong>Amara</strong> gives the stronger answer. She presents the competitive model prediction, then systematically works through <em>multiple</em> qualifications with analytical precision: the monopsony model (named and applied), empirical evidence (Card-Krueger by name and Low Pay Commission), non-wage margin adjustment, and regional variation (specific figures: &#163;19/hour London median vs &#163;11.44 NMW). Her conclusion synthesises these into a nuanced verdict. Jack covers similar ground but less precisely — "some economists" rather than Card-Krueger; "depends on the market" rather than specifying when monopsony applies. Amara accesses Level 4; Jack Level 3. The phrase "non-wage margins" and the regional analysis with specific data are Level 4 markers.'
      },

      /* 9 — data_table: labour market data */
      { type: 'data_table',
        stem: 'The table shows selected UK labour market indicators.',
        headers: ['Indicator', '2004', '2014', '2024'],
        rows: [
          ['Trade union density (% of employees)', '29%', '25%', '23%'],
          ['Female labour force participation rate', '70%', '72%', '72%'],
          ['Zero-hours contracts (\'000s workers)', 'n/a', '625', '1,100'],
          ['Gig economy workers (\'000s, est.)', 'n/a', '250', '4,400'],
          ['Real median wage (2004 = 100)', '100', '95', '102']
        ],
        question: 'Which conclusion is <strong>most strongly supported</strong> by all five rows of data together?',
        opts: [
          'UK labour markets have seen declining union power, rising non-standard work arrangements, and only modest real wage recovery since 2004 — suggesting growing structural imbalances between workers and employers',
          'Trade union decline has directly caused rising female participation, as women were previously excluded from unionised jobs',
          'The growth of zero-hours and gig work has led to a sustained rise in real wages because flexible work attracts more productive workers',
          'Real wages have fully recovered and are now substantially above 2004 levels, demonstrating that labour market flexibility has been beneficial for all workers'
        ],
        ans: 0,
        exp: 'Option A is the most consistent interpretation. Union density has declined (29% → 23%), reducing collective bargaining power. Zero-hours contracts and gig work have grown substantially — from near-zero to over 5m workers combined — indicating rising labour market flexibility that may benefit employers more than workers. Real median wages only reached 102 (barely above 2004 levels) after a decade of real wage stagnation (95 in 2014) — suggesting that labour market flexibility has not delivered sustained real wage growth. Female participation is relatively flat (70% → 72%). Taken together, the data suggest structural weakening of worker bargaining power alongside only modest wage recovery. Option B is unsupported — no causal relationship between union decline and female participation. Option C is wrong — gig growth has coincided with real wage stagnation. Option D overstates the recovery — 102 vs 100 after 20 years is barely recovering, not substantially above.'
      },

      /* 10 — odd_one_out: labour market failure */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>labour market failure</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🏥', label: 'NHS as the dominant employer of nurses nationally — can pay nurses below their MRP because they have few alternative employers', note: '' },
          { icon: '📊', label: 'Rising wages in AI engineering — specialist skills are scarce and in high demand, with multiple firms competing to hire the same talent', note: '' },
          { icon: '🚫', label: 'Occupational discrimination against ethnic minority applicants with identical CVs to white applicants — evidenced in UK audit studies', note: '' },
          { icon: '🏗️', label: 'Structural unemployment in former coalfield communities — workers with mining skills face no local demand for those skills after pit closures', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is <strong>rising AI engineering wages</strong>. This is an example of the <em>competitive labour market working well</em>, not failing. Scarce specialist skills + strong derived demand from booming AI sector → firms bid up wages, accurately signalling to workers the market value of AI skills. This is the price mechanism allocating labour efficiently. The other three are all labour market failures: (A) NHS monopsony → W < MRP → workers underpaid, fewer nurses employed than socially optimal; (C) discrimination → wages diverge from MRP for non-productivity reasons → misallocation and unfairness; (D) structural unemployment → workers with specific skills cannot easily move into alternative work → persistent unemployment even as other markets are tight. Rising wages in a competitive, high-skill sector are a market <em>success</em> story, not a failure.'
      }

    ]
  };

})();
