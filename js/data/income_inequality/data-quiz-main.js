/* ============================================================
   ECONOS — Quiz content for: Income & Wealth Inequality
   10 questions covering Lorenz curve, Gini coefficient, causes
   and consequences of inequality, and redistribution policies.
   ============================================================ */

(function () {

  // Lorenz curve SVG
  var LORENZ_SVG =
    '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif">' +
    '<line x1="50" y1="20" x2="50" y2="260" stroke="#0B1426" stroke-width="2"/>' +
    '<line x1="50" y1="260" x2="350" y2="260" stroke="#0B1426" stroke-width="2"/>' +
    '<text x="36" y="22" fill="#0B1426" font-size="11" text-anchor="end">Cumulative</text>' +
    '<text x="36" y="34" fill="#0B1426" font-size="11" text-anchor="end">income share</text>' +
    '<text x="348" y="278" fill="#0B1426" font-size="11">Population</text>' +
    '<line x1="50" y1="260" x2="350" y2="20" stroke="#2563EB" stroke-width="2" stroke-dasharray="6,4"/>' +
    '<text x="315" y="16" fill="#2563EB" font-size="11" font-weight="700">Line of equality</text>' +
    '<path d="M 50 260 Q 140 255 200 220 Q 270 175 350 20" fill="none" stroke="#EC2D68" stroke-width="2.5"/>' +
    '<text x="258" y="200" fill="#EC2D68" font-size="12" font-weight="700">Lorenz curve</text>' +
    '<text x="130" y="185" fill="#F5B800" font-size="12" font-weight="700">A</text>' +
    '<text x="175" y="240" fill="#1FB574" font-size="12" font-weight="700">B</text>' +
    '<text x="190" y="15" fill="#0B1426" font-size="10">100%</text>' +
    '<text x="30" y="264" fill="#0B1426" font-size="10">0%</text>' +
    '</svg>';

  window.ECONOS_QUIZ = {
    id:       'income_inequality_main',
    topicId:  'income_inequality_main',
    title:    'Income &amp; Wealth Inequality',
    subtitle: 'Theme 4.8 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the Lorenz curve, Gini coefficient, income vs wealth inequality, causes and consequences of rising inequality, redistribution policies, and the equity-efficiency trade-off. Includes diagram interpretation, para-fill, diagnostic pair, and calculation questions.',
    shortNames: {
      'income_inequality_1': 'Lorenz curve and Gini',
      'income_inequality_2': 'Income vs wealth inequality',
      'income_inequality_3': 'Causes of inequality',
      'income_inequality_4': 'Consequences of inequality',
      'income_inequality_5': 'Tax and benefits redistribution',
      'income_inequality_6': 'Other redistribution policies',
      'income_inequality_7': 'Equity-efficiency trade-off'
    },

    questions: [

      /* 1 — Diagram interpretation: Lorenz curve */
      { type: 'diagram_interp',
        stem: 'The diagram shows a Lorenz curve and the line of perfect equality.',
        svg: LORENZ_SVG,
        caption: 'Area A is between the line of perfect equality and the Lorenz curve. Area B is below the Lorenz curve.',
        question: 'A government implements a major progressive tax reform. What would this change show on the Lorenz curve diagram?',
        opts: [
          'The Lorenz curve shifts closer to the line of perfect equality (reduces area A); the Gini coefficient falls, indicating lower income inequality',
          'The line of perfect equality shifts right, reflecting higher average incomes after the tax reform',
          'The Lorenz curve shifts further from the line of equality, as higher taxes on the rich cause capital flight and wider pre-tax income gaps',
          'Area B increases while area A decreases, causing the Gini coefficient to rise above 1'
        ],
        ans: 0,
        exp: 'A <strong>progressive tax reform</strong> takes a higher proportion of income from higher earners and redistributes via spending or transfers. The after-tax-and-transfer income distribution is more equal &#8212; the Lorenz curve moves <strong>towards</strong> the line of perfect equality (area A shrinks). The <strong>Gini coefficient</strong> = A ÷ (A + B) therefore falls, indicating reduced inequality. The UK\'s tax-benefit system reduces the Gini from ~0.52 (pre-tax) to ~0.35 (post-tax and transfers) &#8212; a reduction of 0.17 Gini points. Option B is incorrect &#8212; the line of perfect equality (45° line) is fixed; it represents hypothetical perfect equality and is a reference point, not an empirical measure. Option C describes a possible long-run behavioural response but is not the direct diagram impact of the tax reform itself.'
      },

      /* 2 — MCQ: Gini coefficient */
      { type: 'mcq',
        stem: 'The UK\'s Gini coefficient for income is approximately 0.35 while for wealth it is approximately 0.63. What does this comparison reveal?',
        opts: [
          'Wealth is distributed much more unequally than income; the top 10% own ~43% of total wealth but receive ~28% of income &#8212; reflecting inherited wealth, compounding asset returns, and housing appreciation',
          'Income inequality is higher than wealth inequality because the Gini coefficient is lower for wealth, indicating a more equal distribution',
          'A Gini of 0.35 for income means the richest 35% of households receive all income, while the poorest 65% receive nothing',
          'The difference between the two Gini coefficients exactly equals the amount of income converted to wealth each year'
        ],
        ans: 0,
        exp: 'The <strong>Gini coefficient</strong> ranges from 0 (perfect equality) to 1 (maximum inequality). A higher Gini means greater inequality. <strong>Wealth</strong> (Gini ~0.63) is far more unequally distributed than <strong>income</strong> (Gini ~0.35). In the UK, the top 10% own approximately 43% of total wealth but receive about 28% of income. Wealth inequality persists and compounds over time through inheritance, rising property values, and financial asset returns &#8212; benefiting those who already hold assets. Income inequality can be reduced relatively quickly through progressive taxes and benefits; wealth inequality is much harder to address because wealth taxes face valuation difficulties, capital flight risk, and political resistance. Option B confuses direction &#8212; a higher Gini means <em>more</em> inequality, not less.'
      },

      /* 3 — Elastic sort: causes of inequality */
      { type: 'elastic_sort',
        stem: 'Classify each factor as a cause of <strong>rising income inequality</strong> or <strong>rising wealth inequality</strong> in advanced economies.',
        categories: ['income', 'wealth'],
        categoryLabels: ['Rising income inequality', 'Rising wealth inequality'],
        goods: [
          { icon: '🤖', label: 'Automation substituting routine labour and raising returns to high-skill cognitive workers', note: '', ans: 'income' },
          { icon: '🏡', label: 'Rising house prices enabling existing homeowners to accumulate equity while renters are excluded', note: '', ans: 'wealth' },
          { icon: '📉', label: 'Declining trade union membership weakening collective bargaining for lower-wage workers', note: '', ans: 'income' },
          { icon: '📈', label: 'Compounding financial asset returns benefiting those who already own shares and bonds (Piketty: r &gt; g)', note: '', ans: 'wealth' },
          { icon: '🌍', label: 'Globalisation reducing wages of low-skill workers exposed to EM competition while high-skill global demand rises', note: '', ans: 'income' },
          { icon: '👴', label: 'Intergenerational wealth transfers (inheritance) concentrating assets among older, wealthier cohorts', note: '', ans: 'wealth' }
        ],
        exp: '<strong>Income inequality drivers</strong>: automation (skill-biased technological change hollows out middle-skill jobs); declining union membership (weakens worker bargaining power, widening wage dispersion); globalisation (compresses wages in import-competing sectors). <strong>Wealth inequality drivers</strong>: rising house prices (homeowners accumulate equity; renters cannot); Piketty\'s r &gt; g (return on capital exceeds growth, compounding wealth of asset holders); inheritance (transmits and concentrates wealth intergenerationally). The distinction matters for policy: income inequality can be addressed by labour market policy (NLW, union rights, progressive taxation); wealth inequality requires asset-based policies (inheritance tax reform, capital gains tax, housing supply). The UK has been relatively more successful at compressing income inequality than wealth inequality.'
      },

      /* 4 — Calculation: tax redistribution */
      { type: 'calculation',
        context: 'Before taxes and benefits: Household A earns &#163;120,000/year; Household B earns &#163;15,000/year. Tax system: 45% above &#163;125,140 (additional rate), 40% on &#163;50,271-&#163;125,140 (higher rate), 20% on &#163;12,571-&#163;50,270 (basic rate). Household B receives &#163;8,000/year in benefits.',
        working: [
          'Household A tax liability:',
          '£12,570 tax-free (personal allowance)',
          '£(50,270 - 12,571) × 20% = £37,699 × 0.20 = £7,540',
          '£(120,000 - 50,270) × 40% = £69,730 × 0.40 = £27,892',
          'Total tax A = £7,540 + £27,892 = £35,432 (approximately)',
          'Post-tax income A = £120,000 - £35,432 = £84,568',
          'Household B tax liability:',
          '£15,000 - £12,570 = £2,430 taxable at 20% = £486',
          'Post-tax income B = £15,000 - £486 + £8,000 benefits = £22,514',
          'Pre-tax ratio A:B = 120,000/15,000 = 8:1',
          'Post-tax-and-benefits ratio = 84,568/22,514 ≈ 3.75:1'
        ],
        stem: 'What is the approximate ratio of Household A\'s income to Household B\'s income <strong>before</strong> and <strong>after</strong> taxes and benefits?',
        opts: [
          { ped: 'Before: 8:1; After taxes and benefits: approximately 3.75:1 &#8212; taxes and benefits compress the income ratio significantly', typ: 'Pre: 120,000/15,000 = 8:1. Post: ~84,568/22,514 ≈ 3.75:1', rev: 'The tax-benefit system reduces the income gap by more than half — but large inequality remains post-redistribution' },
          { ped: 'Before: 8:1; After: still approximately 8:1 &#8212; taxes and benefits have no redistributive effect', typ: 'Ignored that the tax system is progressive and that B receives benefits', rev: 'Progressive taxes take a higher proportion from A; benefits add to B\'s income — both compress inequality' },
          { ped: 'Before: 8:1; After: 1:1 &#8212; full equality achieved through the tax-benefit system', typ: 'Overstated the redistributive effect — the post-tax ratio is still about 3.75:1', rev: 'The UK system significantly reduces inequality but does not eliminate it; the Gini falls from ~0.52 to ~0.35' },
          { ped: 'Before: 4:1; After: 2:1 &#8212; the tax-free allowance equalises the pre-tax ratio', typ: 'Misread the pre-tax ratio: £120,000 ÷ £15,000 = 8, not 4', rev: 'Pre-tax ratio is straightforward: 120,000 ÷ 15,000 = 8. No adjustment needed.' }
        ],
        ans: 0,
        exp: '<strong>Pre-tax ratio:</strong> &#163;120,000 &#247; &#163;15,000 = <strong>8:1</strong>. <strong>Post-tax Household A:</strong> &#163;120,000 &#8722; ~&#163;35,432 tax = ~&#163;84,568. <strong>Post-tax + benefits Household B:</strong> &#163;15,000 &#8722; &#163;486 tax + &#163;8,000 benefits = ~&#163;22,514. <strong>Post ratio:</strong> &#163;84,568 &#247; &#163;22,514 &#8776; <strong>3.75:1</strong>. The progressive tax system and benefit transfers compress the income ratio from 8:1 to ~3.75:1 &#8212; roughly halving the gap. This illustrates why the UK Gini falls from ~0.52 (pre-tax) to ~0.35 (post-tax and benefits). But note: even after redistribution, significant inequality remains. And this calculation ignores indirect taxes (VAT, excise duties) which are regressive and partially offset direct redistribution.'
      },

      /* 5 — Multi-select: consequences of inequality */
      { type: 'multi_select',
        stem: 'According to the economic evidence, which of the following are recognised <strong>consequences of high income inequality</strong>?',
        opts: [
          'Reduced inter-generational social mobility (the "Great Gatsby curve": Krueger)',
          'Higher aggregate demand due to increased consumer spending by high-income households',
          'Political polarisation and erosion of social trust, linked to populist movements (OECD evidence)',
          'Worse population health and social outcomes in more unequal societies (Wilkinson and Pickett)',
          'Faster economic growth in all cases because inequality creates stronger incentives for effort and risk-taking',
          'Risk of macroeconomic instability if high-MPC lower earners have reduced income share (Keynesian concern)'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F are supported by empirical evidence. <strong>Social mobility</strong> (A): Krueger\'s "Great Gatsby curve" shows a strong cross-country correlation between inequality and low inter-generational mobility. <strong>Political polarisation</strong> (C): OECD studies link rising inequality to populist voting patterns and declining institutional trust. <strong>Health/social outcomes</strong> (D): Wilkinson and Pickett\'s "Spirit Level" documents worse outcomes (health, crime, trust) in more unequal countries. <strong>Aggregate demand</strong> (F): if high-MPC lower earners receive less income, consumption may be weaker than under more equal distribution (Keynesian argument). Option B is incorrect &#8212; high-income households have lower marginal propensity to consume; redistribution from rich to poor typically raises not lowers aggregate demand. Option E overstates &#8212; while some inequality creates incentives, <em>excessive</em> inequality reduces equality of opportunity and may suppress aggregate human capital accumulation, harming long-run growth.'
      },

      /* 6 — Diagnostic pair: UBI evaluation */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate Universal Basic Income (UBI) as a policy to reduce income inequality and poverty."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Clara', badge: 'Candidate A',
            answer: 'UBI &#8212; an unconditional cash payment to every citizen regardless of employment &#8212; has two powerful theoretical advantages over means-tested benefits. First, it eliminates the <strong>poverty trap</strong>: because there is no taper, the EMTR equals only the marginal income tax rate (typically 20-40%), massively improving work incentives for low earners. Second, it eliminates the stigma and administrative burden of means-testing. Pilot evidence (Finland 2017-18, Kenya GiveDirectly) shows positive effects on wellbeing and modest effects on employment. However, the <strong>fiscal cost is prohibitive</strong> at realistic payment levels: a &#163;10,000/year UBI for all UK adults would cost ~&#163;520bn &#8212; roughly 70% of total UK public spending. This requires either very high tax rates (raising the equity-efficiency trade-off concern) or replacing existing benefits (potentially leaving the most vulnerable worse off if their current entitlements exceed the UBI amount). The optimal policy may be a partial UBI (say &#163;5,000/year, retained alongside a reduced UC system) &#8212; capturing incentive gains while remaining fiscally manageable. Whether UBI is better than the current system ultimately depends on the tax rate required to fund it and whether behavioural effects reduce the labour supply sufficiently to erode the tax base.'
          },
          { name: 'Jake', badge: 'Candidate B',
            answer: 'Universal Basic Income means giving every citizen a set amount of money from the government each month regardless of whether they work or not. This is a good idea because it would help people who are in poverty by giving them a basic income. It would also remove the problem of the poverty trap because people would not lose their benefits when they start working. However UBI is expensive and the government would need to raise taxes to pay for it. Some people argue that giving people money without them having to work might reduce how much people want to work. There have been some trials of UBI which show it can work but we cannot be sure it works on a large scale. Overall UBI has some good features but the high cost makes it difficult to implement.'
          }
        ],
        ans: 0,
        exp: '<strong>Clara</strong> gives the stronger answer. She names the two theoretical advantages of UBI precisely (poverty trap elimination; stigma/administration costs), cites specific pilot evidence with locations, quantifies the fiscal cost (&#163;520bn, 70% of public spending), identifies the key trade-off (tax rates required), considers the risk to vulnerable groups whose entitlements exceed UBI, and proposes a middle ground (partial UBI). The conclusion is conditional: "depends on the tax rate required and behavioural effects" &#8212; this is genuine evaluation, not hedging. Jake covers the same ideas at description level without quantification, without the poverty trap mechanism, and without the fiscal analysis. Clara accesses Level 4; Jake Level 2-3. The &#163;520bn figure and the risk-to-vulnerable-groups point are strong A* differentiators.'
      },

      /* 7 — Para fill: Piketty r>g */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about Piketty\'s argument on wealth inequality.',
        anchor: 'Thomas Piketty\'s Capital in the Twenty-First Century argues that wealth inequality has a structural tendency to rise.',
        para: 'Piketty\'s central argument is that when the [1] on capital (r) exceeds the [2] of economic growth (g), the share of income going to wealth-owners rises over time. Because wealthy households save and [3] a higher proportion of their income, their wealth [4] faster than the economy as a whole. The mechanism can be disrupted by [5] (which destroyed capital and created emergency redistribution), or by [6] taxes on wealth and high incomes. Critics note that r is not [7] and can fall when economies grow slowly or capital becomes abundant &#8212; suggesting the mechanical tendency may not hold in all conditions.',
        blanks: [
          { id: 1, opts: ['return', 'tax', 'risk', 'inflation'], ans: 0 },
          { id: 2, opts: ['rate', 'level', 'trend', 'cycle'], ans: 0 },
          { id: 3, opts: ['invest', 'consume', 'borrow', 'redistribute'], ans: 0 },
          { id: 4, opts: ['compounds', 'decreases', 'transfers', 'taxes'], ans: 0 },
          { id: 5, opts: ['wars', 'technology', 'globalisation', 'inflation'], ans: 0 },
          { id: 6, opts: ['progressive', 'regressive', 'proportional', 'indirect'], ans: 0 },
          { id: 7, opts: ['constant', 'variable', 'measurable', 'positive'], ans: 0 }
        ],
        exp: '(1) <strong>Return</strong> on capital &#8212; r = the annual return earned on wealth (dividends, rent, interest, capital gains) as a percentage of wealth. (2) <strong>Rate</strong> of economic growth &#8212; g = annual GDP growth rate. When r &gt; g, wealth income grows faster than the economy, increasing wealth owners\' share. (3) <strong>Invest</strong> &#8212; the wealthy save and invest more of their income than lower-income households (lower MPC), so their wealth base grows. (4) <strong>Compounds</strong> &#8212; compounding: wealth grows on wealth, creating exponential concentration over time. (5) <strong>Wars</strong> &#8212; Piketty\'s historical analysis shows the two world wars (capital destruction, emergency taxation, nationalisation) broke the r &gt; g dynamic in the 20th century &#8212; the "Great Compression" of inequality 1945-1975. (6) <strong>Progressive</strong> &#8212; progressive wealth and income taxes reduce post-tax r, slowing the compounding. (7) <strong>Constant</strong> &#8212; critics (Acemoglu, others) note that r varies with economic conditions and is not mechanically fixed above g.'
      },

      /* 8 — Data table: redistribution effects */
      { type: 'data_table',
        stem: 'The table shows UK income distribution data.',
        headers: ['Income quintile', 'Pre-tax income (&#163;k)', 'Post-tax income (&#163;k)', 'After benefits (&#163;k)'],
        rows: [
          ['Bottom 20%', '5.2', '4.8', '16.4'],
          ['Second 20%', '14.1', '12.4', '22.1'],
          ['Middle 20%', '28.3', '23.1', '29.8'],
          ['Fourth 20%', '47.2', '36.9', '40.2'],
          ['Top 20%', '112.4', '78.6', '80.1']
        ],
        question: 'What does the data reveal about the UK redistribution system?',
        opts: [
          'Benefits are heavily concentrated on the bottom quintiles (bottom 20% income triples from &#163;4.8k to &#163;16.4k after benefits), while progressive taxes compress the top quintile\'s income — but large post-redistribution inequality remains',
          'The UK tax system is regressive: the bottom quintile pays the most tax in absolute terms as its post-tax income falls from &#163;5.2k to &#163;4.8k',
          'Benefits are distributed equally across all quintiles — each quintile receives approximately the same benefit amount from the government',
          'The top quintile receives more benefits than any other quintile because it pays the most in taxes'
        ],
        ans: 0,
        exp: 'The data reveal a <strong>strongly redistributive</strong> system. Looking at the bottom quintile: pre-tax income &#163;5.2k, post-tax &#163;4.8k (modest tax, as low incomes are near the personal allowance), then <strong>after benefits: &#163;16.4k</strong> &#8212; income more than triples due to transfers. The top quintile: pre-tax &#163;112.4k reduced to &#163;78.6k post-tax (30% effective tax rate) and minimal benefit additions. The system dramatically compresses the distribution. However, the post-redistribution ratio (bottom &#163;16.4k vs top &#163;80.1k) is still nearly 5:1 &#8212; substantial inequality persists even after full redistribution. Option B misidentifies progressivity &#8212; the bottom quintile\'s small pre-tax to post-tax reduction reflects low tax liability (personal allowance protection), not regressivity. The fall from &#163;5.2k to &#163;4.8k may reflect indirect taxes (VAT, excise duties) not accounted for here.'
      },

      /* 9 — Chain: technology and inequality */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct order showing how <strong>automation and technological change</strong> contribute to rising income inequality.',
        items: [
          { label: 'The wage gap between high-skill cognitive workers and low/middle-skill workers widens', note: '' },
          { label: 'Firms invest in automation technologies that substitute for routine, middle-skill tasks', note: '' },
          { label: 'Income distribution becomes more unequal: professionals gain; routine workers stagnate or lose', note: '' },
          { label: 'Rapid advancement in computing power and AI makes automation of routine tasks economically viable', note: '' },
          { label: 'Demand for high-skill cognitive workers (managers, programmers, engineers) rises as demand for routine workers falls', note: '' },
          { label: 'Middle-skill routine jobs (production line, data entry, basic accounting) are replaced or deskilled', note: '' }
        ],
        correctOrder: [3, 1, 5, 4, 0, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Computing advances make automation of routine tasks economically viable.<br>2. Firms invest in automation to replace routine tasks.<br>3. Routine middle-skill jobs are replaced or deskilled (the "hollowing out" of the distribution).<br>4. Demand rises for cognitive/creative workers; falls for routine workers.<br>5. Wage premium for high-skill workers rises; wages for routine workers stagnate.<br>6. Income distribution becomes more unequal: high-skill workers gain, middle-skill lose.<br><br>This is <strong>skill-biased technological change (SBTC)</strong> &#8212; the dominant explanation for rising income inequality in advanced economies since the 1980s. It helps explain why inequality rose even in countries with relatively equal institutions (Sweden, Germany), suggesting a structural rather than purely policy-driven cause. Policy response: invest in skills that complement rather than compete with automation (creativity, complex problem-solving, interpersonal skills).'
      },

      /* 10 — MCQ: equity-efficiency trade-off */
      { type: 'mcq',
        stem: 'Diamond and Saez (2011) estimate the revenue-maximising top marginal income tax rate is approximately 70%. The UK\'s current top rate is 45%. Which is the most analytically complete interpretation of this evidence for a policy essay?',
        opts: [
          'The estimates suggest the UK could raise the top rate substantially above 45% before the disincentive effects (reduced labour supply, tax avoidance, brain drain) outweigh the revenue gain &#8212; but this depends on empirical elasticities and international mobility of high earners, which may have changed since Diamond-Saez',
          'Because the optimal rate is 70%, the UK government should immediately raise the top rate to 70% with no consideration of other factors',
          'The Laffer curve proves that any increase in tax rates above 45% would reduce government revenue, confirming the current rate is already beyond the optimal point',
          'The Diamond-Saez estimate is meaningless because all economists agree that any progressive taxation reduces economic efficiency and growth without exception'
        ],
        ans: 0,
        exp: 'The <strong>Diamond-Saez estimate</strong> is based on their empirical analysis of the elasticity of taxable income (ETI) for high earners in the USA. At an ETI of 0.25 (their estimate), the revenue-maximising top rate is ~70%. The UK rate of 45% suggests room for increases before the Laffer curve peak. However, the correct analytical response (option A) is <em>conditional</em>: this depends on whether the ETI estimate holds in the UK and in the current global environment. High earners in the UK are more internationally mobile than in 1960s America &#8212; the threat of emigration to lower-tax jurisdictions (Ireland, UAE) may give a higher ETI, reducing the revenue-maximising rate. Option B applies the estimate mechanically without acknowledging uncertainty. Option C misrepresents the Laffer curve &#8212; the revenue-maximising rate is not known to be 45%; Diamond-Saez argue it is higher. Option D is an extreme position unsupported by mainstream economics. The key exam skill: applying empirical estimates conditionally and acknowledging their limitations.'
      }

    ]
  };

})();
