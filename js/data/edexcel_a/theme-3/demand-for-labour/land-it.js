/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Labour Markets',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',   color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response', color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',             color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F4BC;',
    title: 'What to do next',
    text:  'Review your answers against the model responses. Check whether you explained the counterintuitive monopsony result &#8211; that a minimum wage can raise both wages and employment simultaneously &#8211; rather than applying only the competitive market analysis. Verify that your gender pay gap analysis used MRP theory to distinguish legitimate productivity differentials from unexplained discrimination. For the essay, assess whether your conclusion distinguished what the NMW can and cannot address, rather than treating it as a universal labour market solution.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Labour Markets',
  sectionA: {
    description: 'Short data-response questions worth 5 marks each. Select how many to include in your session.'
  },

  sectionB: {
    description: 'Each mark value represents a different question style. Select one or more to practise in this session.',
    options: [
      { id: 'b5',   label: '5 marks',  marks: 5  },
      { id: 'b8',   label: '8 marks',  marks: 8  },
      { id: 'b12',  label: '12 marks', marks: 12 },
      { id: 'none', label: 'Skip',     marks: 0  }
    ]
  },

  sectionC: {
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practice one.'
  },

  trains: [
    'Applying MRP theory to explain why firms hire up to the point where MRP = wage',
    'Analysing monopsony power and its effect on wages and employment relative to competition',
    'Evaluating the gender pay gap using MRP theory and labour market imperfections',
    'Assessing the National Minimum Wage as a policy response to low wages and monopsony'
  ],

  tip: 'Always distinguish between the demand side (MRP as the derived demand for labour) and the supply side (wage rates, participation rates, union bargaining). In monopsony analysis, remember the employer faces an upward-sloping labour supply curve &#8211; the marginal cost of labour exceeds the wage, so employment is set below and wages below the competitive equilibrium.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Labour Markets',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – MRP theory and labour demand ───────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Marginal revenue product theory',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '&#163;', label: 'Average output per worker &#8212; financial services (UK)',  value: '&#163;98,000 p.a.' },
          { color: 'blue',  icon: '&#163;', label: 'Average output per worker &#8212; retail sector (UK)',       value: '&#163;31,000 p.a.' },
          { color: 'rose',  icon: '&#163;', label: 'Average output per worker &#8212; hospitality sector (UK)',  value: '&#163;18,000 p.a.' },
          { color: 'blue',  icon: '%',      label: 'Wage as share of output value &#8212; financial services',   value: '&#8776;42%'        }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain marginal revenue product (MRP) theory and why a profit-maximising firm hires workers up to the point where MRP equals the wage rate.',
          hint:        '4-mark response &#8212; define MRP, explain the profit-maximising hiring rule MRP = W, and use the data to illustrate wage differences across sectors.',
          modelAnswer: 'Marginal revenue product (MRP) is the additional revenue a firm gains from employing one additional worker: MRP = Marginal Physical Product &#215; Marginal Revenue. A profit-maximising firm will hire an additional worker only if that worker adds at least as much revenue as they cost &#8212; that is, if MRP &#8805; W (the wage rate). As additional workers are hired, diminishing marginal returns set in: each extra worker adds less to output than the last. MRP therefore falls as employment rises, giving the MRP curve a downward slope &#8212; this is the firm&#39;s demand curve for labour. The firm maximises profit by hiring up to the point where MRP = W. If MRP exceeds W, hiring one more worker adds more to revenue than to costs &#8212; profit rises. If MRP falls below W, the last worker costs more than they generate &#8212; profit falls. The data illustrates why wage rates differ so dramatically across sectors: financial services workers generate &#163;98,000 of output per worker, supporting wages around 42% of that; hospitality workers generate only &#163;18,000, explaining much lower wages in that sector. MRP theory predicts that workers are paid roughly in line with their productive contribution to the firm&#39;s revenue.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The demand for labour is described as a &#8220;derived demand&#8221; because:',
          options: [
            { id: 'opt-a', text: 'Workers choose to work based on the wages offered in the labour market'                     },
            { id: 'opt-b', text: 'Firms hire labour because of the demand for the goods and services that labour produces'    },
            { id: 'opt-c', text: 'Labour demand is determined by government minimum wage legislation'                         },
            { id: 'opt-d', text: 'The supply of labour is derived from workers&#39; leisure preferences'                     }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Labour demand is derived from the demand for the final product. Firms do not hire workers for their own sake &#8212; they hire workers because those workers produce goods and services that consumers demand. If demand for the final product rises, MRP rises, and the demand for labour shifts right.',
          feedbackWrong:   'The correct answer is B. Derived demand means the demand for a factor of production (labour) stems from the demand for the goods and services that factor produces. A rise in demand for the final good increases MRP, shifting the labour demand curve rightward and pushing up wages and employment.'
        }
      ]
    },

    /* ── Q2 – Gender pay gap ─────────────────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'The gender pay gap',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from ONS Annual Survey of Hours and Earnings (ASHE), 2024',
        text:   'The UK gender pay gap &#8212; measured as the difference in median hourly earnings between full-time male and female employees &#8212; stood at 7.5% in 2024, continuing a long-run narrowing trend from 27.5% in 1997. However, the gap widens significantly with age: among workers aged 40&#8211;49, women earn on average 14% less per hour than men. The ONS attributes the persistent gap to several factors: occupational segregation (women concentrated in lower-paying sectors such as care and retail), the &#8220;motherhood penalty&#8221; (career interruptions reducing experience and seniority), and under-representation of women in senior roles. Some economists argue that differences in human capital accumulation fully explain the gap; others contend that labour market discrimination against women continues to suppress wages below their productive contribution.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain two reasons for the gender pay gap using MRP theory.',
          hint:        '4-mark response &#8212; use MRP theory to explain occupational segregation and the motherhood penalty, linking each to MRP differences or employer misperceptions of MRP.',
          modelAnswer: 'MRP theory predicts workers are paid according to their marginal revenue product. Two MRP-based explanations for the gender pay gap are as follows. First, occupational segregation: the extract notes women are concentrated in lower-paying sectors such as care and retail, which have lower average MRP (as shown by the productivity data in other contexts). If women disproportionately work in sectors where the marginal revenue product of labour is low &#8212; either because market prices for those services are low or because physical productivity is limited &#8212; their wages will reflect that lower MRP. This is not necessarily discriminatory in MRP terms: it reflects sector selection rather than paying women less than their MRP within the same role. Second, the &#8220;motherhood penalty&#8221;: career interruptions for childcare reduce women&#39;s accumulated human capital &#8212; skills, experience, and seniority. Human capital is a key determinant of MRP: workers with more experience and skills produce more output per hour. Women who take career breaks accumulate less experience, reducing their MRP relative to continuously employed male counterparts and therefore receiving lower wages. The extract notes the gap widens with age (14% for workers aged 40&#8211;49), consistent with this compounding effect of career interruptions on MRP over time.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following would NOT be explained by MRP theory as a cause of the gender pay gap?',
          options: [
            { id: 'opt-a', text: 'Women having lower average levels of work experience due to career breaks'                   },
            { id: 'opt-b', text: 'Women being concentrated in sectors with lower marginal revenue products'                    },
            { id: 'opt-c', text: 'Employers paying women less than their MRP because they prefer male employees'               },
            { id: 'opt-d', text: 'Women having lower average levels of formal qualifications in certain industries'             }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. MRP theory explains wage differences through differences in productive contribution. Paying women less than their MRP &#8212; due to employer discrimination or preference &#8212; is not explained by MRP theory; it is a departure from it. MRP theory predicts that competition will eliminate such discrimination over time, as firms preferring male workers will be undercut by rivals who hire the more productive (undervalued) female workers.',
          feedbackWrong:   'The correct answer is C. Paying women less than their MRP because of employer preference for male workers is not a MRP-theory explanation &#8212; it is wage discrimination that violates the MRP framework. MRP theory explains wage differences through genuine differences in productive contribution (experience, qualifications, sector). Discrimination pays workers below their MRP, which is a market failure, not a MRP prediction.'
        }
      ]
    },

    /* ── Q3 – Monopsony ──────────────────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Monopsony in the labour market',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'NHS nurse starting salary (Band 5, 2024)',                value: '&#163;28,407' },
          { color: 'green', icon: '&#163;', label: 'Estimated competitive wage (private sector equivalent)',  value: '&#163;34,000' },
          { color: 'blue',  icon: '%',      label: 'NHS share of UK nursing employment',                      value: '&#8776;75%'   },
          { color: 'rose',  icon: '%',      label: 'NHS nursing vacancy rate (2023)',                         value: '12.3%'        }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how monopsony power enables the NHS to set nursing wages below the competitive equilibrium level.',
          hint:        '4-mark response &#8212; define monopsony, explain why the marginal cost of labour exceeds the wage, and use the data to illustrate the wage gap and staffing consequences.',
          modelAnswer: 'A monopsony is a single buyer of labour &#8212; the dominant employer in a labour market. The NHS employs approximately 75% of UK nurses, giving it substantial monopsony power. Unlike a firm in a competitive labour market (which is a wage-taker facing a horizontal labour supply curve), the NHS faces an upward-sloping labour supply curve: to attract more nurses it must raise wages for all existing nurses, not just new recruits. This means the marginal cost of labour (MCL) exceeds the wage rate at every level of employment. To maximise its objectives, the NHS equates MCL with MRP &#8212; but because MCL &gt; wage, the profit-maximising employment level is below the competitive equilibrium and the wage paid (&#163;28,407) is below both the MCL and the estimated competitive wage (&#163;34,000). The data illustrates the consequences: a 12.3% vacancy rate suggests nurses are aware the wage is below the competitive equilibrium &#8212; some choose not to apply or emigrate to better-paying markets (private sector, Australia, UAE). The &#163;5,593 wage gap between NHS and competitive wages represents the monopsonistic exploitation of nursing labour &#8212; a transfer from workers to the employer, reducing nurses&#39; wages below their MRP.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In a monopsonistic labour market, introducing a National Minimum Wage set between the monopsony wage and the competitive wage will:',
          options: [
            { id: 'opt-a', text: 'Reduce employment by making labour more expensive for the monopsonist'                      },
            { id: 'opt-b', text: 'Increase both wages and employment, moving the market toward competitive equilibrium'       },
            { id: 'opt-c', text: 'Have no effect on wages because the monopsonist already pays above the minimum wage'        },
            { id: 'opt-d', text: 'Increase wages but reduce consumer welfare by raising the price of output'                  }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. In a monopsonistic market, a minimum wage set between the monopsony wage and the competitive wage makes the labour supply curve horizontal at the minimum wage level up to the competitive employment level. This eliminates the wedge between MCL and the wage, raising both wages AND employment &#8212; unlike in a competitive market where a minimum wage above equilibrium always reduces employment.',
          feedbackWrong:   'The correct answer is B. A minimum wage in a monopsony market has a counterintuitive effect: it can raise both wages and employment simultaneously. The minimum wage flattens the labour supply curve at that level, removing the monopsonist&#39;s incentive to restrict employment to keep wages down. The monopsonist now employs up to where MRP = minimum wage, increasing employment above the monopsony outcome while also raising wages.'
        }
      ]
    },

    /* ── Q4 – Trade union bargaining ─────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Trade union bargaining and wage determination',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from BBC News and RCN press releases, 2023',
        text:   'In January 2023, the Royal College of Nursing (RCN) led the first national nursing strike in its 107-year history, demanding a 19% pay rise to restore real wages eroded by inflation. The RCN argued that below-inflation pay awards since 2010 had cut real nursing wages by over 20% in real terms, making NHS nursing uncompetitive with private sector and international alternatives. The government ultimately offered a 5% consolidated pay rise plus a one-off payment, which most nursing unions accepted. The dispute highlighted the structural problem of a single dominant public sector employer (monopsony) negotiating against healthcare unions representing workers who face strong ethical pressures against sustained industrial action.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a trade union raises wages above the competitive equilibrium level in a labour market.',
          hint:        '4-mark response &#8212; explain the trade union wage-setting mechanism, the trade-off between higher wages and lower employment, and how bilateral monopoly affects outcomes.',
          modelAnswer: 'A trade union acts as a monopoly supplier of labour, giving workers collective bargaining power that individual workers lack. In a competitive labour market, wages are determined by the intersection of labour supply and demand (MRP). A union can raise wages above this equilibrium by threatening industrial action (strikes) unless the employer accepts a higher wage. The employer faces a choice: accept the higher wage or face output disruption. If the costs of disruption (lost output, reputational damage, legal obligations) exceed the cost of the wage increase, the employer will concede. The extract illustrates this: the RCN&#39;s first-ever national nursing strike in 107 years applied sufficient pressure to achieve a 5% consolidated pay award plus a one-off payment. However, the trade-off is a potential reduction in employment &#8212; higher wages increase labour costs, and if wages rise above MRP for some workers, employers may reduce the workforce. In a bilateral monopoly situation (union bargaining against a monopsonist such as the NHS), the wage outcome is theoretically indeterminate &#8212; it depends on the relative bargaining strength of each side. The union&#39;s restraint (nurses face ethical pressures against sustained strikes) weakens its bargaining power relative to a private sector union, explaining why the final settlement was far below the 19% demand.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The &#8220;union wage premium&#8221; refers to:',
          options: [
            { id: 'opt-a', text: 'The difference between union membership fees and the wages unions negotiate'                 },
            { id: 'opt-b', text: 'The wage advantage that unionised workers earn above comparable non-unionised workers'      },
            { id: 'opt-c', text: 'The bonus paid to union representatives for successful pay negotiations'                    },
            { id: 'opt-d', text: 'The extra wages paid to workers who cross picket lines during strikes'                      }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The union wage premium is the empirically measured wage advantage of unionised workers over comparable non-unionised workers in similar roles. UK research typically finds a union wage premium of 5&#8211;15%, though it has fallen as union membership has declined from around 55% in 1979 to approximately 22% today.',
          feedbackWrong:   'The correct answer is B. The union wage premium is the additional wages that unionised workers earn compared with equivalent non-unionised workers &#8212; measuring the tangible wage benefit of collective bargaining. In the UK, union membership has fallen sharply since the 1980s, and the union wage premium has narrowed, though it remains positive, particularly in the public sector.'
        }
      ]
    },

    /* ── Q5 – Labour supply factors ──────────────────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Labour supply and participation rates',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '%', label: 'UK labour force participation rate (2024)',            value: '79.2%'    },
          { color: 'blue',  icon: '%', label: 'Female participation rate (UK, 2024)',                 value: '73.1%'    },
          { color: 'rose',  icon: '%', label: 'Over-50s economic inactivity (post-pandemic rise)',    value: '+520,000' },
          { color: 'green', icon: '%', label: 'Net migration (UK, 2023) &#8212; effect on labour supply', value: '+685,000' }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two factors that increase the market supply of labour.',
          hint:        '4-mark response &#8212; identify two distinct factors from the data (e.g., net migration, rising female participation) and explain the mechanism through which each shifts the labour supply curve.',
          modelAnswer: 'Two factors that increase the market supply of labour are as follows. First, net migration: the data shows net migration of 685,000 in 2023. Migrants expand the working-age population and add directly to the pool of available labour. Many migrants are of prime working age, with existing skills and a high propensity to work, shifting the labour supply curve to the right and increasing the quantity of labour supplied at every wage level. This is particularly significant in sectors with skills shortages &#8212; nursing, construction, IT &#8212; where domestic supply is insufficient to meet demand. Second, rising female labour force participation: the data shows female participation at 73.1%. Over recent decades, cultural change, improved access to education, expansion of part-time and flexible working, and government policy (e.g., expanded childcare provision) have drawn more women into paid employment. Each of these increases the number of hours workers are willing to supply at a given wage, shifting the labour supply curve rightward and expanding total labour market supply. In contrast, the data highlights a supply reduction risk: over-50s economic inactivity rose by 520,000 post-pandemic, representing a withdrawal from the labour market that partially offsets the supply gains from migration and female participation.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The backward-bending labour supply curve occurs when:',
          options: [
            { id: 'opt-a', text: 'Wages fall below subsistence level and workers take multiple jobs'                                       },
            { id: 'opt-b', text: 'At high wage levels, the income effect outweighs the substitution effect and workers reduce hours'       },
            { id: 'opt-c', text: 'Trade unions successfully restrict entry to a profession, reducing labour supply'                        },
            { id: 'opt-d', text: 'Immigration increases labour supply, reducing wages and causing existing workers to leave the market'    }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. At high wage levels, workers may be so well-off that they choose to take more leisure (which is a normal good). The income effect &#8212; higher income allows more leisure &#8212; outweighs the substitution effect &#8212; higher wages make leisure more expensive in opportunity cost terms. The result is that labour supply falls as wages rise above a certain threshold, causing the supply curve to bend backward.',
          feedbackWrong:   'The correct answer is B. The backward-bending supply curve reflects the balance between the substitution effect (higher wages make work more attractive relative to leisure) and the income effect (higher income means workers can afford more leisure). At high wages, the income effect dominates: workers choose to work fewer hours even as wages rise, because they have already achieved their target income.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Labour Markets',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'NHS nursing shortage: monopsony and the NMW',
        tags:        ['NHS 75% of nurses', '12.3% vacancy rate', '&#163;28,407 starting wage', 'monopsony power'],
        defaultOpen: true,
        paragraphs: [
          'The NHS employs approximately 330,000 registered nurses &#8212; around 75% of the UK nursing workforce &#8212; making it the dominant buyer of nursing labour in the UK. As a monopsonist, the NHS does not operate as a wage-taker in a competitive labour market: instead, to attract more nurses it must raise wages for all existing staff, meaning the marginal cost of employing an additional nurse exceeds the wage rate paid. Economic theory predicts that a profit-maximising monopsonist will therefore set both wages and employment below the competitive equilibrium, exploiting workers&#39; limited outside options.',
          'The consequences are visible in the data. The NHS nursing vacancy rate reached 12.3% in 2023, representing over 40,000 unfilled posts. Nursing unions and independent analysts estimated that NHS starting wages of &#163;28,407 were approximately &#163;5,000&#8211;6,000 below what would be required to attract sufficient supply in a genuinely competitive labour market. Many UK-trained nurses emigrate to Australia, Canada, and the UAE &#8212; where wages are substantially higher &#8212; while the NHS fills vacancies through international recruitment from the Philippines, India, and Nigeria.',
          'Some economists argue that the National Minimum Wage (NMW) &#8212; while set well below nursing wage rates &#8212; provides a theoretical model for addressing monopsony wage suppression: in a monopsonistic market, a minimum wage set between the monopsony wage and the competitive wage can simultaneously raise wages and increase employment, unlike in a competitive market where a minimum wage above equilibrium always reduces employment. The 2023 NHS pay settlement (5% consolidated plus one-off payments) may have partially corrected the wage suppression, though nursing union leaders argued it remained below the level needed to stem international attrition.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The gender pay gap in the UK labour market (ONS, 2024)',
        tags:        ['7.5% gap (full-time)', '14% gap aged 40&#8211;49', 'occupational segregation', 'motherhood penalty'],
        defaultOpen: false,
        paragraphs: [
          'The Office for National Statistics Annual Survey of Hours and Earnings (ASHE) 2024 reported the UK gender pay gap among full-time employees at 7.5% &#8212; the smallest since records began in 1997, down from 27.5%. However, the aggregate figure conceals significant variation: the gap for part-time workers is negative (women earn marginally more per hour than men in part-time work), but the gap widens substantially with age. Among workers aged 40&#8211;49, women earn on average 14% less per hour than men &#8212; reflecting the cumulative effect of career interruptions, reduced progression, and the &#8220;motherhood penalty.&#8221;',
          'Occupational segregation remains a major structural driver: women account for 77% of health and social care workers, 74% of education workers, and 65% of retail workers &#8212; sectors where average wages are below the economy-wide mean. By contrast, women represent only 14% of engineering workers and 32% of financial services workers, where wages are substantially higher. Human capital theory (MRP-based) would attribute much of this gap to differences in accumulated experience, qualifications, and sector selection. Labour market discrimination theory would attribute the remaining gap &#8212; after controlling for observable characteristics &#8212; to employer bias or structural disadvantage.',
          'Government equal pay legislation (Equal Pay Act 1970, Equality Act 2010) and mandatory gender pay gap reporting (2017) have had measurable effects on transparency, but have not eliminated the gap. The Low Pay Commission notes that the gender pay gap is largest at the top of the wage distribution: female representation among the top 10% of earners remains below 35%, despite women now forming a majority of graduates. Policy debates focus on the adequacy of subsidised childcare, shared parental leave take-up, and whether pay transparency alone is sufficient to drive cultural change in hiring and promotion decisions.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Gig economy, labour market flexibility and the Uber ruling',
        tags:        ['Supreme Court 2021', 'worker status', 'minimum wage entitlement', 'flexibility vs security'],
        defaultOpen: false,
        paragraphs: [
          'In February 2021, the UK Supreme Court ruled unanimously that Uber drivers are &#8220;workers&#8221; rather than self-employed independent contractors, entitling them to the National Minimum Wage, holiday pay, and pension contributions. Uber had argued that its platform merely connected independent businesses (drivers) with customers, and that drivers set their own hours and rates. The Supreme Court rejected this, finding that Uber set fares, controlled the work relationship, and exercised sufficient control over drivers that they were subordinate workers, not independent businesses.',
          'The ruling has significant implications for the estimated 4.4 million workers in the UK gig economy &#8212; including food delivery couriers, freelance professionals, and care workers contracted through digital platforms. If reclassified as workers, these individuals gain minimum wage protection, sick pay, and holiday entitlement &#8212; increasing labour costs for platform firms by an estimated 20&#8211;30% in the short run. Platform firms argue this would reduce flexibility and push them to cut hours or automate, reducing gig opportunities for workers who value flexibility.',
          'Labour economists are divided. Some argue gig economy misclassification has suppressed wages below competitive levels &#8212; a form of structural monopsony in which platforms are dominant labour market buyers in local geographic markets. Others argue that genuine self-employment creates valuable flexibility for workers who would otherwise be excluded from the labour market &#8212; students, carers, those with health conditions &#8212; and that extending employment status risks destroying precisely the work opportunities that benefit vulnerable groups. The government&#39;s Employment Rights Bill (2024) proposes a single worker status framework that would resolve this ambiguity while preserving some flexibility.'
        ]
      }
    ]
  },

  question: {
    id:       'q1',
    title:    'Extended response using the context pack',
    subtitle: 'Refer to the extracts where directed, and bring in your own knowledge.',
    marks:    25,

    parts: [
      {
        id:     'q1a',
        letter: 'a',
        marks:  5,
        type:   'freetext',
        stem:   'Explain what is meant by derived demand for labour.',
        tips: [
          'Define derived demand: labour is demanded because of the demand for the final product.',
          'Explain MRP: how final product demand determines MRP, and MRP determines the labour demand curve.',
          'Use an example &#8212; nursing demand is derived from demand for healthcare.',
          'Explain how a change in final product demand shifts the labour demand curve.'
        ],
        modelAnswer: 'Derived demand for labour occurs because firms do not demand labour for its own sake &#8212; they demand it because workers produce goods and services that consumers demand. The demand for labour is therefore derived from, and depends upon, the demand for the final product. This relationship is formalised in marginal revenue product (MRP) theory: a worker&#39;s MRP is the additional revenue the firm earns from employing one more worker (MRP = Marginal Physical Product &#215; Marginal Revenue). Since MRP depends on the price of the final good, the demand for labour is directly linked to the market for the firm&#39;s output. Extract A illustrates this in the nursing labour market: the NHS demands nurses because society demands healthcare services. An ageing population and rising chronic disease rates increase the demand for healthcare &#8212; shifting the MRP of nurses rightward and increasing the quantity of nursing labour demanded at every wage level. Conversely, if demand for the final product falls (e.g., a recession reduces spending on private dentistry), MRP falls, shifting the labour demand curve left and reducing wages or employment. Derived demand explains why labour market outcomes are intimately connected to conditions in product markets.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract A, examine the consequences of monopsony power in the UK nursing labour market.',
        tips: [
          'Define monopsony and explain the mechanism: upward-sloping labour supply means MCL &gt; wage.',
          'Explain the profit-maximising outcome: employment set where MCL = MRP, giving wage below MCL and below competitive equilibrium.',
          'Use the data: &#163;28,407 vs &#163;34,000 competitive estimate, 12.3% vacancy rate, 40,000 unfilled posts.',
          'Examine the consequences: staffing shortages, international recruitment costs, quality of care implications.',
          'Consider the counter-argument: NMW-type intervention can raise wages and employment simultaneously in monopsony.'
        ],
        modelAnswer: 'Monopsony arises when a single buyer dominates a labour market. Extract A establishes that the NHS employs approximately 75% of UK nurses &#8212; making it a clear monopsonist. Unlike a wage-taking firm, the NHS faces an upward-sloping labour supply curve: attracting more nurses requires raising wages for all existing staff, not just new recruits. This means the marginal cost of labour (MCL) exceeds the wage paid at every employment level. The NHS maximises its objectives by setting MCL = MRP, but reads the wage off the supply curve at that employment level. The consequence: employment is below the competitive equilibrium and wages are below both MCL and the competitive wage. Extract A quantifies this: the NHS starting wage of &#163;28,407 compares with an estimated competitive wage of approximately &#163;34,000 &#8212; a gap of &#163;5,000&#8211;6,000 attributable to monopsony wage suppression. The consequences are substantial and visible. A 12.3% nursing vacancy rate (over 40,000 unfilled posts in 2023) demonstrates that the suppressed wage is insufficient to attract adequate labour supply at the desired employment level &#8212; the labour market is in chronic disequilibrium. Staff shortages affect patient care quality, increase workload on existing nurses (potentially accelerating burnout), and force the NHS into costly international recruitment from the Philippines, India, and Nigeria &#8212; incurring training, relocation and registration costs that partially negate the wage saving. There is also an ethical dimension: UK-trained nurses emigrate to higher-paying markets (Australia, UAE), representing a loss of public investment in nurse training. Extract A&#39;s reference to the NMW model is important: in a monopsonistic market, a minimum wage set between the monopsony wage and the competitive wage can simultaneously raise wages and increase employment &#8212; the 2023 pay settlement may have begun this correction, though unions argued it remained insufficient. Overall, NHS monopsony power generates significant economic and social costs that extend well beyond the wage suppression effect.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which the National Minimum Wage is an effective policy for improving labour market outcomes. Refer to the extracts and your own knowledge.',
        tips: [
          'Define the NMW and explain how it works: sets a wage floor above which employers must pay.',
          'Explain effectiveness in competitive markets: trade-off between higher wages for employed and potential unemployment for marginal workers.',
          'Explain effectiveness in monopsonistic markets (Extract A): can raise wages AND employment &#8212; counterintuitive but important.',
          'Consider evidence: UK NMW since 1999 &#8212; has employment fallen? ONS evidence suggests not significantly.',
          'Consider the gig economy gap (Extract C): NMW only applies if worker status is established &#8212; misclassification undermines reach.',
          'Consider limitations: NMW cannot address gender pay gap (Extract B) &#8212; which is driven by occupational segregation and human capital differences, not minimum wages.',
          'Conclude with a conditional judgement on effectiveness.'
        ],
        modelAnswer: '<p>The National Minimum Wage (NMW), introduced in the UK in 1999 and extended through the National Living Wage (NLW) for over-23s, sets a statutory wage floor intended to protect low-paid workers from exploitation and reduce in-work poverty. Its effectiveness depends critically on the market structure in which it operates and the specific labour market outcomes targeted.</p><p>In a standard competitive labour market, economic theory predicts that a minimum wage set above the equilibrium wage will reduce employment: firms respond to higher labour costs by employing fewer workers, and the workers who retain their jobs gain at the expense of those who lose them or are priced out of the market. This is the traditional objection. However, the UK&#39;s experience since 1999 has been more positive: successive increases in the NMW have not produced the large-scale unemployment predictions of simple competitive models. This is partly because Extract A&#39;s monopsony model is more realistic for many low-wage sectors than the competitive model. In monopsonistic labour markets, a minimum wage set between the monopsony wage and the competitive wage simultaneously raises wages and increases employment, as the minimum wage removes the monopsonist&#39;s incentive to restrict employment to keep wages down. This explains why NMW increases in low-wage care, retail, and hospitality sectors &#8212; where employer concentration is significant &#8212; may have had limited employment costs.</p><p>The gig economy dimension (Extract C) reveals a critical limitation: the NMW only protects workers with established employment status. The Uber ruling clarified that gig workers misclassified as self-employed were denied NMW protection, potentially allowing platform monopsonists to suppress wages below competitive levels while evading statutory obligations. The Employment Rights Bill (2024) aims to address this, but until worker status is universally applied, the NMW&#39;s reach is incomplete.</p><p>Extract B identifies an even deeper limitation: the NMW cannot directly address the gender pay gap of 7.5% (14% among over-40s), which is driven by occupational segregation, career interruptions, and human capital differences &#8212; not minimum wage levels. Requiring equal pay for equal work is already law; the gap persists because women and men often do different work in different sectors. The NMW sets a floor on absolute wages but cannot correct relative wage differentials arising from structural labour market features.</p><p>In conclusion, the NMW is a moderately effective policy instrument for raising wages and reducing poverty in low-wage sectors, particularly where monopsony power would otherwise suppress wages below competitive levels. Its effectiveness is strongest in those markets &#8212; care, retail, hospitality &#8212; where competitive models least apply. Its limitations are significant: it does not address the gender pay gap, its reach is undermined by gig economy misclassification, and it cannot substitute for the broader structural reforms &#8212; childcare, education, migration policy &#8212; needed to improve overall labour market outcomes.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define derived demand and monopsony precisely before applying them to the nursing market',
    'Use the specific data from Extract A: 75% market share, &#163;28,407 vs &#163;34,000 gap, 12.3% vacancy rate',
    'Explain the counterintuitive result: minimum wage can raise wages AND employment in monopsony &#8212; not just in competitive markets',
    'Distinguish between what the NMW can address (low pay, monopsony exploitation) and what it cannot (gender pay gap, occupational segregation)',
    'Conclude with a conditional judgement &#8212; effectiveness depends on market structure and the specific outcome being targeted'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Labour Markets',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that wage differentials in the UK labour market are justified by differences in marginal revenue product.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define marginal revenue product (MRP = MPP &#215; MR) and explain MRP theory as the basis for wage determination.',
      'Explain the case for MRP justifying differentials: sector productivity differences, human capital, skill premiums.',
      'Use UK data: financial services vs hospitality sector output per worker; graduate wage premium evidence.',
      'Explain the case against MRP fully explaining differentials: gender pay gap (ONS data), monopsony wage suppression (NHS), labour market discrimination.',
      'Consider structural factors: occupational segregation, motherhood penalty, trade union power.',
      'Consider gig economy misclassification (Uber ruling) as a source of wages below MRP.',
      'Conclude with a conditional, supported judgement &#8212; MRP explains much but not all of the gap; market imperfections and discrimination create differentials beyond what MRP justifies.'
    ],

    modelAnswer:
      '<p>Marginal revenue product (MRP) theory holds that in a competitive labour market, wages are determined by workers&#39; productive contribution: MRP = Marginal Physical Product &#215; Marginal Revenue, and firms hire up to the point where MRP = W. The theory predicts that wage differentials reflect genuine differences in productive value to firms &#8212; providing a market-based justification for pay inequality. The view that UK wage differentials are &#8220;justified&#8221; by MRP differences contains significant truth but also important limitations.</p>'
    + '<p>The MRP case for wage differentials is strongest where productivity differences are large and well-documented. UK data shows average output per worker in financial services of approximately &#163;98,000 per year versus &#163;18,000 in hospitality &#8212; a five-fold difference that MRP theory would predict should produce proportionate wage differentials. Human capital theory reinforces this: workers who invest in education, training, and experience accumulate skills that raise their MPP and therefore their MRP. The UK graduate wage premium &#8212; graduate employees earning approximately 30&#8211;40% more than non-graduates &#8212; reflects higher MRP generated by years of education and signalling of cognitive ability. In this sense, wage differentials reflect the market&#39;s rational valuation of scarce skills and high productivity &#8212; performing the allocative function of attracting labour to high-value uses.</p>'
    + '<p>However, MRP theory alone cannot explain several important features of UK wage differentials. The gender pay gap of 7.5% (rising to 14% for workers aged 40&#8211;49) persists even after controlling for sector, hours, and qualifications &#8212; suggesting something beyond MRP differences. The ONS attributes this residual gap to the &#8220;motherhood penalty&#8221; (career interruptions reducing experience accumulation), occupational segregation (women concentrated in lower-paying care and retail sectors for reasons not fully explained by preference), and possibly ongoing labour market discrimination. If employers pay women below their MRP due to discrimination or statistical inference, MRP theory cannot justify this &#8212; it violates the theory&#39;s predictions. MRP theory itself predicts that competition should eliminate discrimination: firms paying women below MRP create a profitable arbitrage opportunity for rivals who hire them at fair wages.</p>'
    + '<p>Monopsony provides another limitation. The NHS employs 75% of UK nurses and uses its monopsonist position to set wages below both MRP and the competitive wage &#8212; a wage suppression that MRP theory identifies as a market failure, not a justified differential. The &#163;5,000&#8211;6,000 gap between NHS starting wages and estimated competitive wages is not explained by nurses having lower MRP than the competitive wage implies; it reflects the NHS&#39;s market power as a dominant buyer. Similarly, the Uber Supreme Court ruling (2021) established that platform misclassification of gig workers as self-employed denied them minimum wage protection &#8212; a form of wage suppression below MRP enabled by labour market power rather than reflecting genuine MRP differences.</p>'
    + '<p>In conclusion, MRP differences justify a substantial portion of UK wage differentials &#8212; those reflecting genuine productivity differences rooted in human capital, sector characteristics, and skill scarcity. But a meaningful share of observed differentials cannot be justified by MRP: they reflect monopsony wage suppression, gender discrimination, occupational segregation with structural rather than preference-based causes, and misclassification of workers. The appropriate response is to maintain markets that reward genuine MRP differences while using policy &#8212; NMW legislation, equal pay enforcement, childcare support, and competition policy against monopsony &#8212; to correct differentials that reflect market failure rather than productive contribution.</p>'
  },

  strongAnswers: [
    'Define MRP precisely and explain the hiring rule MRP = W before evaluating whether it explains observed differentials',
    'Use specific UK data: sector productivity figures, graduate wage premium, ONS gender pay gap statistics',
    'Explain how monopsony (NHS) and discrimination create differentials beyond what MRP justifies',
    'Acknowledge that MRP theory itself predicts competition should eliminate discrimination &#8212; the persistence of the gap is the anomaly',
    'Conclude conditionally: MRP justifies many but not all differentials; policy should correct market failures while preserving legitimate productivity-based differentials'
  ]
};

