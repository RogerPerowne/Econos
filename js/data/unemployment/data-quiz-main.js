/* ============================================================
   ECONOS — Quiz content for: Employment & Unemployment
   10 questions covering the three labour-market states, ILO vs
   claimant count, the five types, policy responses, and hysteresis.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'unemployment_main',
    topicId:  'unemployment_main',
    title:    'Employment &amp; Unemployment',
    subtitle: 'Theme 2.1.3 &#183; Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the three labour-market states, the ILO and claimant count measures, the five types of unemployment and their cures, cyclical unemployment and wage stickiness, and the long-run consequences including hysteresis. Mixed formats test both classification skills and applied policy reasoning.',
    shortNames: {
      'classification': 'Three labour-market states',
      'measurement':    'ILO vs claimant count',
      'types':          'Five types of unemployment',
      'diagnose':       'Diagnose the type',
      'cyclical':       'Cyclical unemployment',
      'policy':         'Policy responses',
      'consequences':   'Consequences and hysteresis'
    },

    questions: [

      /* 1 &#8212; Elastic sort: three labour states */
      { type: 'elastic_sort',
        stem: 'Classify each person into the correct <strong>labour market state</strong>: employed, unemployed, or economically inactive.',
        categories: ['emp', 'unemp', 'inact'],
        categoryLabels: ['Employed', 'Unemployed', 'Economically inactive'],
        goods: [
          { icon: '&#128104;&#8205;&#128187;', label: 'Works 12 hours per week in a zero-hours contract role, wants more hours', note: '', ans: 'emp' },
          { icon: '&#127891;', label: 'Full-time university student not seeking paid work', note: '', ans: 'inact' },
          { icon: '&#128104;&#8205;&#127981;', label: 'Recently redundant factory worker, actively applying for jobs and available to start within 2 weeks', note: '', ans: 'unemp' },
          { icon: '&#128105;&#8205;&#129354;', label: 'Qualified nurse who has given up looking for work after 18 months of unsuccessful job searches', note: '', ans: 'inact' },
          { icon: '&#129306;', label: 'Retired teacher, 67 years old, receiving a pension', note: '', ans: 'inact' },
          { icon: '&#128104;&#8205;&#128187;', label: 'Self-employed IT consultant with three regular clients', note: '', ans: 'emp' }
        ],
        exp: '<strong>Employed</strong>: at least 1 hour of paid work in the reference week, OR temporarily away from a job. Includes part-time and zero-hours workers. <strong>Unemployed (ILO definition)</strong>: not in work, but actively seeking AND able to start within 2 weeks. <strong>Economically inactive</strong>: not in work AND not seeking. The nurse who has given up searching is a <em>discouraged worker</em> &#8212; classified as inactive, not unemployed. A* answers always classify discouraged workers correctly as inactive. If the unemployment rate falls but inactivity rises, that is not genuine labour market improvement.'
      },

      /* 2 &#8212; MCQ: ILO vs claimant count */
      { type: 'mcq',
        stem: 'The <strong>ILO (Labour Force Survey) measure</strong> of unemployment is generally considered superior to the <strong>Claimant Count</strong> for analytical purposes. Why?',
        opts: [
          'The ILO measure uses a standardised international survey methodology that captures all jobseekers regardless of benefit eligibility, whereas the claimant count excludes those not entitled to claim',
          'The claimant count is more accurate because it uses administrative records with no sampling error, while the LFS has a large margin of error of approximately 5 percentage points',
          'The ILO measure is lower than the claimant count, making it politically preferred by governments seeking to appear to be managing unemployment',
          'The claimant count includes discouraged workers and part-time underemployed workers, giving a more complete picture of labour market slack'
        ],
        ans: 0,
        exp: 'The ILO/LFS measure surveys ~40,000 households monthly using the standardised international definition (not in work, actively seeking, available to start within 2 weeks). The claimant count only counts those claiming Jobseekers Allowance / Universal Credit &#8212; excluding people not eligible to claim (those with a working partner, the over-25 in education, voluntary unemployed). The ILO measure is typically <em>higher</em> than the claimant count, not lower &#8212; making it less politically flattering. The ~0.3pp LFS sampling error is far smaller than option B suggests.'
      },

      /* 3 &#8212; Elastic sort: five types */
      { type: 'elastic_sort',
        stem: 'Match each scenario to the <strong>correct type of unemployment</strong>.',
        categories: ['fric', 'struct', 'sea', 'rw', 'cyc'],
        categoryLabels: ['Frictional', 'Structural', 'Seasonal', 'Real-wage', 'Cyclical'],
        goods: [
          { icon: '&#127968;', label: 'A software developer takes 3 weeks between leaving one tech firm and starting at another', note: '', ans: 'fric' },
          { icon: '&#127981;', label: 'Former steelworkers in South Wales lack the digital skills demanded by growing tech industries in the area', note: '', ans: 'struct' },
          { icon: '&#127804;', label: 'Strawberry pickers in Kent are out of work from October to May each year', note: '', ans: 'sea' },
          { icon: '&#128522;', label: 'Minimum wage legislation sets wages above the market-clearing level in some low-skill sectors, creating excess labour supply', note: '', ans: 'rw' },
          { icon: '&#128200;', label: 'UK unemployment rises from 5% to 8.3% as GDP falls 5% during the 2008-09 financial crisis', note: '', ans: 'cyc' }
        ],
        exp: '<strong>Frictional</strong>: short-term job search &#8212; always present, self-correcting. <strong>Structural</strong>: skills/location mismatch from deindustrialisation or technology change &#8212; long-term, needs retraining. <strong>Seasonal</strong>: predictable within-year demand variation &#8212; short-term. <strong>Real-wage</strong>: wages above market-clearing level &#8212; persistent while rigidity lasts. <strong>Cyclical</strong>: caused by a fall in AD (Keynesian unemployment) &#8212; the only demand-side type. The policy implication: only cyclical unemployment responds to fiscal or monetary stimulus. Applying demand-side policy to structural unemployment creates inflation without reducing unemployment.'
      },

      /* 4 &#8212; Diagnostic pair: policy match */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Assess whether fiscal stimulus is an appropriate policy response to rising UK unemployment."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Marcus', badge: 'Candidate A',
            answer: 'The appropriateness of fiscal stimulus depends critically on the <strong>type</strong> of unemployment. Cyclical unemployment &#8212; caused by a deficiency of aggregate demand &#8212; is best addressed by demand-side policies. Fiscal stimulus (&#8593;G or &#8595;T) shifts AD right, raising output and employment. The 2020 furlough scheme is a direct example: it maintained &#163;68bn of household income, preventing demand from collapsing and cyclical unemployment from soaring. However, fiscal stimulus is largely <strong>ineffective against structural unemployment</strong> &#8212; caused by skills mismatches between available workers and available jobs. Even if stimulus raises demand, employers cannot fill vacancies with structurally unemployed workers. The result is inflation without employment gain. Since the UK\'s current unemployment challenge contains a significant structural component &#8212; post-pandemic skills mismatches, regional divergences &#8212; fiscal stimulus alone is insufficient. Supply-side policies (retraining, apprenticeships, regional investment) are the appropriate complement.'
          },
          { name: 'Amy', badge: 'Candidate B',
            answer: 'Fiscal stimulus can help reduce unemployment by boosting spending in the economy. If the government spends more money on things like infrastructure, this creates jobs and raises incomes. Higher incomes mean more spending, and the multiplier effect means the total impact is larger. However, fiscal stimulus might not work in all cases. If unemployment is because workers don\'t have the right skills, giving them more jobs through government spending won\'t work because businesses still need skilled workers. Also, fiscal stimulus can cause inflation if the economy is already near full capacity. So fiscal stimulus is a good policy for some types of unemployment but not others, and the government needs to consider the causes before deciding on the policy.'
          }
        ],
        ans: 0,
        exp: '<strong>Marcus</strong> gives the stronger answer. He explicitly identifies the type of unemployment as the key determinant of policy appropriateness &#8212; the analytical framework the examiner is looking for. He uses a specific quantified example (&#163;68bn furlough scheme), names the mechanism for failure against structural unemployment (inflation without employment gain), and reaches a specific policy recommendation (supply-side complement). Amy covers similar ground but without the explicit type-to-policy mapping, without specific examples, and without quantification. The diagnostic structure &#8212; \'name the type first\' &#8212; is what distinguishes A* from B.'
      },

      /* 5 &#8212; MCQ: wage stickiness */
      { type: 'mcq',
        stem: 'Keynes argued that <strong>wages are sticky downward</strong>. What is the implication of this for cyclical unemployment?',
        opts: [
          'If wages cannot fall to the market-clearing level, the labour market does not self-correct after a fall in AD &#8212; cyclical unemployment persists and requires demand stimulus to resolve',
          'Sticky wages mean that employment is unaffected by falls in aggregate demand because firms will always retain workers rather than cut pay',
          'Wage stickiness only affects real wages; nominal wages adjust quickly, so unemployment is always temporary',
          'Because wages cannot fall, the Classical self-correcting mechanism works faster, reducing the need for fiscal intervention'
        ],
        ans: 0,
        exp: 'The Classical model says: if AD falls, wages fall → labour market clears → unemployment is temporary. Keynes challenged this: <strong>nominal wages are sticky downward</strong> because of union contracts, employee morale, and social norms against pay cuts. If wages cannot fall, the self-correcting mechanism is blocked. Cyclical unemployment persists, and active demand stimulus (fiscal or monetary) is needed to shift AD back. Option B inverts the logic &#8212; firms respond to lower revenues by cutting jobs (the stickiness is in wages, not employment decisions). The derived demand mechanism: falling AD reduces demand for output, which reduces demand for labour.'
      },

      /* 6 &#8212; Para fill: hysteresis */
      { type: 'para_fill',
        stem: 'Complete the paragraph about hysteresis and long-term unemployment.',
        anchor: 'Hysteresis is the term for the long-term scarring effects of unemployment.',
        para: 'When workers are [1] unemployed for extended periods, their skills begin to [2] . They may lose professional networks and become disconnected from labour market information. Employers may discriminate against candidates with long [3] gaps, creating a stigma effect. These mechanisms mean that short-term [4] unemployment can become permanent [5] unemployment &#8212; raising the [6]. This is why A* answers cite hysteresis as evidence that [7] recessions are preferable to deep ones even if their eventual recovery costs are similar.'
        ,
        blanks: [
          { id: 1, opts: ['long-term', 'frictionally', 'cyclically', 'seasonally'], ans: 0 },
          { id: 2, opts: ['atrophy', 'improve', 'transfer', 'consolidate'], ans: 0 },
          { id: 3, opts: ['employment', 'productivity', 'wage', 'training'], ans: 0 },
          { id: 4, opts: ['cyclical', 'structural', 'frictional', 'real-wage'], ans: 0 },
          { id: 5, opts: ['structural', 'cyclical', 'frictional', 'seasonal'], ans: 0 },
          { id: 6, opts: ['NAIRU', 'LRAS', 'MPC', 'PPF'], ans: 0 },
          { id: 7, opts: ['shallow', 'deep', 'prolonged', 'inflationary'], ans: 0 }
        ],
        exp: '(1) <strong>Long-term</strong>: hysteresis operates through extended unemployment spells. (2) <strong>Atrophy</strong>: skills deteriorate through non-use. (3) <strong>Employment</strong>: gaps in CVs trigger employer discrimination. (4) <strong>Cyclical</strong>: the initial shock is demand-driven (cyclical). (5) <strong>Structural</strong>: the scarring converts it into a structural problem (skills mismatch). (6) <strong>NAIRU</strong>: the natural rate rises because structural unemployment has increased. (7) <strong>Shallow</strong>: shallow recessions prevent the hysteresis channel from activating &#8212; another Keynesian argument for timely counter-cyclical intervention.'
      },

      /* 7 &#8212; Multi-select: economic costs */
      { type: 'multi_select',
        stem: 'Which of the following are genuine <strong>economic costs of unemployment</strong>?',
        opts: [
          'Lost output: the economy operates below its PPF, representing permanently lost production',
          'Lower tax revenues and higher welfare spending, widening the fiscal deficit',
          'Hysteresis: long-term unemployment permanently raises structural unemployment',
          'Higher inflation: unemployment puts upward pressure on prices via the wage-price spiral',
          'Multiplier-in-reverse: falling worker incomes reduce consumption, further reducing AD',
          'Improved labour market flexibility: redundancies signal sector rebalancing and improve allocative efficiency'
        ],
        correct: [0, 1, 2, 4],
        exp: 'Options A, B, C, and E are genuine economic costs. (A) Below-PPF output is a permanent welfare loss &#8212; it cannot be recovered. (B) The fiscal hit is ~&#163;10-15bn per percentage point of UK unemployment (lost income tax + VAT + NI + higher JSA). (C) Hysteresis converts cyclical into structural unemployment, raising the NAIRU. (E) The multiplier works in reverse: unemployed workers cut consumption, which further reduces AD. Option D is incorrect &#8212; unemployment is <em>deflationary</em> (workers lack bargaining power, wage growth falls). Option F is a contested efficiency argument, not a cost of unemployment as such.'
      },

      /* 8 &#8212; Data table: UK unemployment episodes */
      { type: 'data_table',
        stem: 'The table shows selected UK unemployment data across key episodes.',
        headers: ['Year', 'ILO unemployment rate', 'Youth unemployment (16-24)', 'Key event'],
        rows: [
          ['1983', '11.9%', '25%+', 'Recession + de-industrialisation'],
          ['2009', '7.8%', '19%', 'Financial crisis + AD collapse'],
          ['2013', '7.2%', '20%', 'Post-crisis austerity recovery'],
          ['2020', '5.1%', '14%', 'COVID-19 + furlough scheme'],
          ['2022', '3.7%', '12%', 'Post-COVID tight labour market']
        ],
        question: 'Which interpretation of the data is most analytically accurate?',
        opts: [
          'The 1983 episode reflects structural unemployment from deindustrialisation; the 2009 episode reflects cyclical unemployment from an AD collapse; the different policy responses required reflect the fundamentally different causes &#8212; supply-side reform vs demand stimulus',
          'Youth unemployment is always approximately double the overall rate, suggesting it is structurally determined and unresponsive to cyclical fluctuations or policy interventions',
          'The furlough scheme in 2020 proves that demand-side policies alone are sufficient to address all forms of unemployment, as seen in the rapid fall from 5.1% to 3.7% by 2022',
          'UK unemployment has been continuously falling since 1983 because monetary policy has become more effective at stabilising the economy over time'
        ],
        ans: 0,
        exp: 'The data shows two fundamentally different episodes: 1983 (peak structural from industrial collapse, persistent for a decade) and 2009 (cyclical from AD collapse, recovered faster). The 2020 episode is distinct &#8212; furlough scheme prevented a cyclical spike despite an enormous supply shock. The 2022 tightness (3.7%) reflects post-COVID labour supply constraints. Option B overgeneralises &#8212; the youth-to-overall ratio varies significantly across episodes. Option C ignores the structural component. Option D is historically inaccurate &#8212; unemployment was higher in the 1980s than before and has not been monotonically declining.'
      },

      /* 9 &#8212; Odd one out */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>supply-side policies</strong> appropriate for reducing structural unemployment. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#127891;', label: 'Expanding apprenticeship and vocational training programmes', note: '' },
          { icon: '&#128176;', label: 'Cutting the Bank of England base rate to stimulate investment and hiring', note: '' },
          { icon: '&#127968;', label: 'Providing relocation grants to help workers move to where job vacancies exist', note: '' },
          { icon: '&#128104;&#8205;&#128187;', label: 'Improved job matching services and skills bootcamps to reduce search time', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is the <strong>Bank of England rate cut</strong>. This is a monetary (demand-side) policy that stimulates AD &#8212; appropriate for cyclical unemployment, not structural. The other three all target the supply-side causes of structural and frictional unemployment: retraining closes skills gaps, relocation grants address geographic mismatch, and job matching services reduce search frictions. Applying a rate cut to structural unemployment is a classic policy error &#8212; it raises demand but employers still cannot match the structurally unemployed to available vacancies, and inflationary pressure builds instead.'
      },

      /* 10 &#8212; Chain: cyclical unemployment transmission */
      { type: 'chain',
        stem: 'A major UK bank fails, triggering a sharp financial crisis. Place the events in the correct order from initial shock to eventual policy response.',
        items: [
          { label: 'Unemployment rises as firms cut jobs to reduce costs', note: '' },
          { label: 'Consumer and business confidence collapses; investment falls sharply', note: '' },
          { label: 'The banking system faces insolvency; credit becomes unavailable to households and firms', note: '' },
          { label: 'Government announces fiscal stimulus and Bank of England cuts Bank Rate', note: '' },
          { label: 'Aggregate demand falls as consumption (C) and investment (I) both contract', note: '' },
          { label: 'Output falls below potential; a negative output gap opens', note: '' }
        ],
        correctOrder: [2, 1, 4, 5, 0, 3],
        exp: '<strong>The cyclical unemployment transmission chain:</strong><br>1. Banking system fails &#8212; credit crunch.<br>2. Confidence collapses; investment falls (the most volatile AD component).<br>3. C and I contraction reduces AD.<br>4. Output falls; negative output gap opens.<br>5. Derived demand for labour falls; unemployment rises.<br>6. Policy response: fiscal stimulus (&#8593;G or &#8595;T) and monetary easing.<br><br>This chain describes the 2008-09 UK recession exactly. Labour is a <em>derived demand</em> &#8212; it falls because output demand falls. Policy acts at the end of the chain, addressing the AD deficiency. A* essays link each step explicitly and name the mechanism at each stage.'
      }

    ]
  };

})();
