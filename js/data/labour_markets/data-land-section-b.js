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
