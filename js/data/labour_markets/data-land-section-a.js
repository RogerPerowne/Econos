window.ECONOS_LAND_SECTION_A = {
  topic:        'Labour Markets',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — MRP theory and labour demand ───────────────────────── */
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

    /* ── Q2 — Gender pay gap ─────────────────────────────────────── */
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

    /* ── Q3 — Monopsony ──────────────────────────────────────────── */
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

    /* ── Q4 — Trade union bargaining ─────────────────────────────── */
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

    /* ── Q5 — Labour supply factors ──────────────────────────────── */
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
