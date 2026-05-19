/* ============================================================
   ECONOS — Quiz content for: Fiscal Policy
   10 questions covering taxation types, government spending,
   deficit vs debt, automatic stabilisers, crowding out, evaluation.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'fiscal_policy_main',
    topicId:  'fiscal_policy_main',
    title:    'Fiscal Policy',
    subtitle: 'Theme 2.6 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering expansionary and contractionary fiscal policy, direct and indirect taxes with distributional effects, government spending composition, the deficit versus debt distinction, automatic stabilisers, discretionary policy, the crowding-out debate, and the evaluation framework for fiscal policy effectiveness. Designed for the applied analysis and conditional evaluation Edexcel Paper 2 rewards.',
    shortNames: {
      'fiscal-framing':   'What is fiscal policy?',
      'taxation':         'Types of taxation',
      'gov-spending':     'Government spending',
      'deficit-debt':     'Deficit vs debt',
      'auto-stabilisers': 'Automatic stabilisers',
      'crowding-out':     'Crowding out',
      'fiscal-evaluation': 'Evaluating fiscal policy'
    },

    questions: [

      /* 1 &#8212; MCQ: direct vs indirect tax */
      { type: 'mcq',
        stem: 'Which of the following correctly distinguishes <strong>progressive</strong> from <strong>regressive</strong> taxation?',
        opts: [
          'A progressive tax takes a higher average proportion of income from higher earners; a regressive tax takes a higher average proportion from lower earners',
          'A progressive tax increases in rate as income falls; a regressive tax is a flat rate applied uniformly to all income levels',
          'Progressive taxes are always direct (on income); regressive taxes are always indirect (on spending)',
          'Progressive taxes raise more total revenue than regressive taxes because they tax higher incomes at lower rates'
        ],
        ans: 0,
        exp: '<strong>Progressive</strong>: average tax rate <em>rises</em> with income &#8212; higher earners pay a larger share. UK income tax: 0% on the first &#163;12,570; 20% basic rate; 40% higher rate; 45% additional rate. <strong>Regressive</strong>: average tax rate <em>falls</em> with income &#8212; lower earners pay a higher share of income. VAT is technically a flat rate (20%) but regressive in impact: lower-income households spend a higher fraction of income on consumption, so VAT takes a larger share of their income. This distinction is central to distributional analysis &#8212; a A* point: a tax can be flat-rate but still regressive in its incidence.'
      },

      /* 2 &#8212; Elastic sort: tax types */
      { type: 'elastic_sort',
        stem: 'Classify each tax as <strong>direct</strong> or <strong>indirect</strong>, and as <strong>progressive</strong>, <strong>regressive</strong>, or <strong>proportional</strong>.',
        categories: ['dir_prog', 'indir_reg', 'dir_prop'],
        categoryLabels: ['Direct and progressive', 'Indirect and regressive', 'Direct and proportional/flat'],
        goods: [
          { icon: '&#128176;', label: 'UK income tax: 20% basic, 40% higher, 45% additional rate bands', note: '', ans: 'dir_prog' },
          { icon: '&#128176;', label: 'VAT at 20% on most goods and services', note: '', ans: 'indir_reg' },
          { icon: '&#128664;', label: 'Fuel duty (excise duty) levied per litre of petrol', note: '', ans: 'indir_reg' },
          { icon: '&#128176;', label: 'National Insurance Contributions (employee band: 8-12% with upper earnings threshold)', note: '', ans: 'dir_prog' },
          { icon: '&#127866;', label: 'Alcohol duty levied at a fixed rate per unit of alcohol', note: '', ans: 'indir_reg' },
          { icon: '&#127968;', label: 'Council tax: fixed charge per property band (proportional within a band)', note: '', ans: 'indir_reg' }
        ],
        exp: '<strong>Direct taxes</strong> are levied on income or wealth. <strong>Indirect taxes</strong> are levied on spending. Progressive: average rate rises with income (income tax, NICs). Regressive: lower earners pay higher share of income (VAT, fuel duty, alcohol duty, council tax &#8212; all charge a fixed amount regardless of income). Council tax is technically a local government direct charge but functions regressively &#8212; a 3-bedroom house in Band D pays the same whether the occupier earns &#163;20k or &#163;200k. A* answers note that the UK tax mix (~50% direct, ~50% indirect) reflects the deliberate balance between incentive and distributional effects.'
      },

      /* 3 &#8212; MCQ: deficit vs debt */
      { type: 'mcq',
        stem: 'The UK <strong>budget deficit</strong> is approximately &#163;100-120bn per year, while the <strong>national debt</strong> stands at approximately &#163;2.7 trillion. Which statement correctly explains the relationship between them?',
        opts: [
          'The deficit is the annual flow (gap between G and T in one year); the debt is the stock of accumulated past deficits; each year the government runs a deficit, the debt increases by that amount',
          'The deficit and debt are the same thing expressed in different units &#8212; both represent the government\'s total financial obligations to creditors',
          'The national debt is the interest payment on the deficit; paying &#163;100bn interest per year produces &#163;2.7tn of outstanding debt over 27 years',
          'A &#163;100bn deficit means the government owes &#163;100bn more to foreign investors; &#163;2.7tn is the total owed specifically to international creditors'
        ],
        ans: 0,
        exp: 'The <strong>deficit is a flow</strong>: how much more the government spends than it raises in tax in a given year. The <strong>debt is a stock</strong>: the accumulation of all past deficits (net of any surpluses) that has never been repaid. Running a &#163;100bn annual deficit adds &#163;100bn to the national debt each year. The UK has run deficits for most of the post-war period, accumulating ~&#163;2.7trn in debt. Debt interest (~&#163;100bn/year) is itself a major spending item &#8212; which widens the deficit further, creating a fiscal self-reinforcing dynamic. The debt-to-GDP ratio (currently ~100%) is the key sustainability metric.'
      },

      /* 4 &#8212; Diagnostic pair: automatic stabilisers */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Explain how automatic stabilisers cushion the impact of a recession without any deliberate government policy action."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Amara', badge: 'Candidate A',
            answer: 'Automatic stabilisers are features of the fiscal system that <strong>automatically</strong> reduce the fall in aggregate demand during a recession &#8212; without requiring any government decision or parliamentary action. On the revenue side: as GDP falls, household incomes fall → income tax receipts fall automatically. Firm profits fall → corporation tax receipts fall. Consumer spending falls → VAT receipts fall. These automatic tax reductions leave more disposable income with households than would otherwise exist, partially offsetting the fall in AD. On the expenditure side: as unemployment rises, Jobseekers Allowance and Universal Credit payments rise automatically. These transfers replace some of the income lost by newly unemployed workers, supporting consumption. Both mechanisms work <strong>instantly</strong> &#8212; unlike discretionary fiscal policy, which requires a recognition lag, decision lag, and implementation lag of up to 12-24 months. The 2009 UK recession demonstrated this: automatic stabilisers added ~3-4% of GDP in fiscal support without any active decision. The limitation: they cushion but cannot fully eliminate the downturn &#8212; discretionary stimulus is needed for severe recessions.'
          },
          { name: 'Jamie', badge: 'Candidate B',
            answer: 'Automatic stabilisers work by automatically increasing government spending and reducing taxes when the economy is in recession. This happens because when people are unemployed they claim benefits, which is government spending that happens without any decision being made. Also, when people earn less they pay less tax, so the government takes less money from the economy. Both of these effects help to keep spending going in the economy during a recession. The good thing about automatic stabilisers is that they work straight away, unlike other government policies which take a long time. However, they are not enough to fully stop a recession so sometimes the government also needs to use deliberate fiscal policy.'
          }
        ],
        ans: 0,
        exp: '<strong>Amara</strong> gives the stronger answer. She names the specific taxes involved (income tax, corporation tax, VAT), explains both the revenue and expenditure side with mechanisms, provides the quantified evidence (2009: ~3-4% of GDP automatic support), names the three types of fiscal policy lag (recognition, decision, implementation), and ends with a limitation. Jamie covers the core logic but without specific tax names, without quantification, without named lags, and without the mechanism of how each stabiliser works. Amara\'s structural precision &#8212; both sides, mechanism, evidence, limit &#8212; is the A* pattern.'
      },

      /* 5 &#8212; Multi-select: crowding out conditions */
      { type: 'multi_select',
        stem: 'In which of the following circumstances is <strong>crowding out most likely to be significant</strong>, reducing the effectiveness of fiscal stimulus?',
        opts: [
          'The economy is operating at or near full employment, with limited spare capacity',
          'The economy is in a deep recession with a large negative output gap and high private saving',
          'Interest rates are at the zero lower bound and quantitative easing is in operation',
          'Financial markets are tight and government borrowing competes strongly with private sector for loanable funds',
          'The central bank is raising rates simultaneously in response to fiscal expansion',
          'Businesses have high levels of confidence and many profitable investment projects waiting to be funded'
        ],
        correct: [0, 3, 4, 5],
        exp: 'Crowding out is most significant when: (A) no spare capacity &#8212; extra G competes directly with private sector for real resources; (D) tight financial markets &#8212; government borrowing raises interest rates, reducing private investment; (E) simultaneous monetary tightening &#8212; amplifies the interest rate channel; (F) high-confidence investment climate &#8212; firms are most sensitive to interest rate rises when credit is demanded. Crowding out is <em>minimal</em> in options B and C: in recession with high private saving (loanable funds supply rises), interest rates do not rise much from extra borrowing. At the ZLB with QE, bond purchases offset the crowding-out pressure. The context-dependence of crowding out is the A* evaluation framework.'
      },

      /* 6 &#8212; Para fill: types of government spending */
      { type: 'para_fill',
        stem: 'Complete the paragraph distinguishing types of government spending.',
        anchor: 'UK government spending (~42% of GDP) is composed of several distinct categories with different macroeconomic effects.',
        para: '[1] spending covers day-to-day costs: public sector wages, NHS supplies, welfare benefits. It adds directly to [2] Demand. [3] spending (investment in infrastructure, schools, hospitals) adds to AD now AND shifts [4] right over time &#8212; a dual effect. [5] payments (welfare, pensions, tax credits) redistribute income but do NOT directly add to [6] because no new output is produced. The component of government spending that has grown fastest since 2020 is debt [7], now exceeding &#163;100bn per year, which crowds out spending on other priorities.'
        ,
        blanks: [
          { id: 1, opts: ['Current', 'Capital', 'Transfer', 'Autonomous'], ans: 0 },
          { id: 2, opts: ['Aggregate', 'Consumer', 'Export', 'Investment'], ans: 0 },
          { id: 3, opts: ['Capital', 'Current', 'Welfare', 'Emergency'], ans: 0 },
          { id: 4, opts: ['LRAS', 'SRAS', 'AD', 'LM'], ans: 0 },
          { id: 5, opts: ['Transfer', 'Capital', 'Current', 'Defence'], ans: 0 },
          { id: 6, opts: ['GDP', 'consumption', 'inflation', 'unemployment'], ans: 0 },
          { id: 7, opts: ['interest', 'principal', 'redemption', 'premium'], ans: 0 }
        ],
        exp: '(1) <strong>Current</strong>: day-to-day spending without long-run capacity effects. (2) <strong>Aggregate</strong>: current spending directly adds to AD (G component). (3) <strong>Capital</strong>: investment spending creates infrastructure and assets. (4) <strong>LRAS</strong>: capital spending shifts the productive frontier &#8212; dual demand and supply effect. (5) <strong>Transfer</strong>: welfare payments redistribute income. (6) <strong>GDP</strong>: transfer payments are not government purchases of output &#8212; they do not add to GDP directly (one of the most commonly confused exam points). (7) <strong>Interest</strong>: UK debt interest costs now ~&#163;100bn+/year &#8212; the fastest-growing spending category.'
      },

      /* 7 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are genuine <strong>limitations of discretionary fiscal policy</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#9203;', label: 'Time lags: recognition, decision, and implementation lags mean the recession may have passed before stimulus is deployed', note: '' },
          { icon: '&#127968;', label: 'Automatic stabilisers: the fiscal system already cushions recessions without any government action', note: '' },
          { icon: '&#128200;', label: 'Debt sustainability: repeated deficits raise the debt-to-GDP ratio, increasing debt interest costs and crowding future spending', note: '' },
          { icon: '&#127968;', label: 'Political economy bias: politicians prefer spending increases and tax cuts (expansion) to the contractionary measures needed to balance budgets', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is option B. Automatic stabilisers are a <strong>feature</strong> of the fiscal system &#8212; they represent its automatic counter-cyclical capacity. They are not a limitation of discretionary policy; they are a complementary first line of defence that reduces the need for discretionary intervention. The three genuine limitations are: (A) time lags &#8212; the policy may be mistimed; (C) debt sustainability &#8212; repeated stimulus raises the debt burden and may trigger market confidence crises; (D) political economy bias &#8212; the democratic cycle creates systematic bias toward deficits. A* answers note that automatic stabilisers reduce the need for discretionary fiscal policy, thus partially addressing the time lag limitation.'
      },

      /* 8 &#8212; Data table: UK fiscal position */
      { type: 'data_table',
        stem: 'The table shows selected UK fiscal data.',
        headers: ['Year', 'Budget deficit (% GDP)', 'National debt (% GDP)', 'Debt interest (&#163;bn)'],
        rows: [
          ['2007', '&#8722;2.6%', '43%', '31'],
          ['2010', '&#8722;9.9%', '76%', '43'],
          ['2019', '&#8722;2.1%', '85%', '51'],
          ['2020', '&#8722;15.0%', '99%', '55'],
          ['2024', '&#8722;4.0%', '100%', '102']
        ],
        question: 'Which evaluation of UK fiscal policy performance is most analytically defensible?',
        opts: [
          'The UK\'s fiscal position has deteriorated structurally since 2007: the national debt has more than doubled as a share of GDP, debt interest has tripled to &#163;102bn, constraining future fiscal policy at exactly the time of new economic shocks',
          'The 2010-19 austerity programme was entirely successful: it reduced the deficit from 9.9% to 2.1% of GDP and fully restored the fiscal position to pre-crisis sustainability',
          'COVID-19 explains the entire deterioration in the UK\'s fiscal position since 2007, as all the debt accumulation occurred in 2020',
          'Rising debt interest to &#163;102bn is not a problem because the government can always print money to service its obligations'
        ],
        ans: 0,
        exp: 'The data tells a clear structural deterioration story: debt-to-GDP has risen from 43% to 100%, and debt interest has tripled from &#163;31bn to &#163;102bn. This constrains future fiscal policy &#8212; &#163;102bn on debt service crowds out health, education, and infrastructure. Option B overstates austerity success &#8212; despite deficit reduction, debt continued rising as a share of GDP throughout 2010-19 because growth was insufficient. Option C is incorrect &#8212; debt had already risen sharply by 2010 and 2019, well before COVID. Option D is incorrect &#8212; printing money to service debt causes inflation and would destroy the BoE\'s credibility, as well as being practically unavailable for UK gilts held by external investors.'
      },

      /* 9 &#8212; MCQ: balanced budget multiplier */
      { type: 'mcq',
        stem: 'If the government simultaneously increases spending (G) by &#163;10bn and raises taxes (T) by &#163;10bn to maintain a balanced budget, what is the likely net effect on national income?',
        opts: [
          'National income rises by approximately &#163;10bn, because the spending multiplier exceeds the tax multiplier &#8212; the \'balanced budget multiplier\' is approximately 1',
          'National income is unchanged, because the &#163;10bn increase in G is exactly offset by the &#163;10bn increase in T &#8212; net injection equals zero',
          'National income falls by approximately &#163;10bn, because higher taxes reduce household income by more than the government spending raises it',
          'The effect is indeterminate without knowing the exact interest rate and crowding-out conditions at the time'
        ],
        ans: 0,
        exp: 'The <strong>balanced budget multiplier</strong> is approximately 1. Why? The government spending multiplier is 1/(1-MPC). The tax multiplier is -MPC/(1-MPC) (smaller in absolute value because some of the tax reduction would have been saved anyway). The net effect: 1/(1-MPC) &#8722; MPC/(1-MPC) = (1-MPC)/(1-MPC) = 1. A &#163;10bn increase in both G and T raises national income by ~&#163;10bn &#8212; not zero. This is an A* insight that challenges the intuition that a balanced budget is macroeconomically neutral. Government spending goes directly into AD; the tax rise reduces consumption by only MPC &#215; &#163;10bn (the rest was going to be saved).'
      },

      /* 10 &#8212; Chain: 2009 fiscal crisis response */
      { type: 'chain',
        stem: 'Place the steps in the correct order to describe the UK fiscal policy response to the 2008-09 financial crisis.',
        items: [
          { label: 'The government announces discretionary fiscal stimulus: VAT cut from 17.5% to 15%, capital spending brought forward, and a car scrappage scheme', note: '' },
          { label: 'The financial crisis hits: banks reduce lending, business investment collapses, AD falls sharply', note: '' },
          { label: 'Automatic stabilisers activate: income tax and corporation tax revenues fall; JSA and welfare spending rise automatically', note: '' },
          { label: 'The deficit rises sharply from ~2% to ~10% of GDP, reflecting both automatic and discretionary fiscal expansion', note: '' },
          { label: 'GDP falls ~5%; unemployment rises from ~5% to ~8%; a large negative output gap opens', note: '' },
          { label: 'The BoE cuts Bank Rate to 0.5% and launches QE &#8212; coordinating monetary and fiscal stimulus', note: '' }
        ],
        correctOrder: [1, 4, 2, 0, 5, 3],
        exp: '<strong>UK 2009 fiscal response sequence:</strong><br>1. Financial crisis &#8212; credit crunch, AD collapses.<br>2. GDP falls ~5%; negative output gap opens.<br>3. Automatic stabilisers activate immediately &#8212; first line of defence.<br>4. Discretionary stimulus announced (VAT cut, capital spending).<br>5. BoE monetary coordination &#8212; Bank Rate to 0.5%, QE launched.<br>6. Deficit rises to ~10% of GDP &#8212; the fiscal cost of the combined response.<br><br>This sequence illustrates the correct order: automatic first, then discretionary, then monetary coordination. A* essays note that the stimulus worked &#8212; the UK avoided a depression &#8212; but at the cost of a debt legacy that constrained subsequent fiscal policy for a decade.'
      }

    ]
  };

})();
