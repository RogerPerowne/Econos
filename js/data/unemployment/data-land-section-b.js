window.ECONOS_LAND_SECTION_B = {
  topic:        'Unemployment',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK unemployment during and after the COVID-19 pandemic',
        tags:        ['Furlough scheme', '&#163;70bn cost', 'unemployment avoided', 'scarring effects'],
        defaultOpen: true,
        paragraphs: [
          'The Coronavirus Job Retention Scheme (furlough) supported up to 9.6 million jobs at its peak in 2020, at a cost of approximately &#163;70 billion. By subsidising 80% of furloughed workers\' wages, the scheme prevented a sharp rise in unemployment that economists feared could have reached 15% or higher.',
          'UK unemployment peaked at only 5.2% in late 2020 &#8212; far below the experience in countries without equivalent schemes. However, critics noted that the furlough scheme may have prevented necessary structural adjustment, keeping workers in sectors that would inevitably contract, such as aviation and retail.',
          'By 2022, the UK labour market had tightened dramatically, with the unemployment rate falling below 4% and vacancies exceeding 1.3 million for the first time on record. Long-term unemployment remained elevated among workers aged 50+, who were less likely to re-enter employment after furlough ended.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The rise of long-term unemployment and hysteresis',
        tags:        ['Long-term unemployed', 'skill atrophy', 'hysteresis', 'NAIRU'],
        defaultOpen: false,
        paragraphs: [
          'Economists have long been concerned about the &#8220;hysteresis&#8221; effect &#8212; the tendency of cyclical unemployment to become structural over time. Workers who remain unemployed for more than 12 months experience accelerating deterioration of their human capital: vocational skills atrophy, professional networks weaken, and employers increasingly view extended employment gaps as a negative signal.',
          'Research by the Resolution Foundation found that workers who experienced significant unemployment spells during the 2008&#8211;09 recession earned 10&#8211;15% less than comparable workers five years later, even after finding re-employment. This &#8220;scarring effect&#8221; suggests unemployment imposes permanent costs beyond the immediate income loss.',
          'The NAIRU &#8212; the non-accelerating inflation rate of unemployment &#8212; appears to have risen following recessions, consistent with hysteresis. If the NAIRU rises, the economy cannot be stimulated to lower unemployment rates without triggering inflation, making recovery more difficult.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Regional unemployment disparities in the UK',
        tags:        ['Regional divide', 'North-South', 'skills mismatch', 'geographical immobility'],
        defaultOpen: false,
        paragraphs: [
          'Unemployment rates vary significantly across UK regions. In 2023, London had an unemployment rate of 4.8% but also the highest concentration of high-skilled vacancies. The North East of England had an unemployment rate of 5.6% with a higher proportion of long-term unemployment and a skills profile less matched to the sectors where vacancy growth is concentrated.',
          'Labour market economists identify geographical immobility as a key barrier to reducing regional disparities. High house prices in prosperous areas prevent workers from lower-wage regions from relocating to take available jobs. Commuting distances make some regional labour market adjustment physically impossible.',
          'Government &#8220;Levelling Up&#8221; initiatives aimed to address regional imbalances through infrastructure investment and devolved skills funding. However, the IFS estimated that closing the North-South productivity gap would require sustained investment of &#163;10&#8211;15 billion per year over a decade.'
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
        stem:   'Explain two economic costs of unemployment to the individual.',
        tips: [
          'Identify two distinct costs experienced by the unemployed person themselves.',
          'Go beyond &#8220;they lose income&#8221; &#8212; develop the mechanism and consequences.',
          'Consider financial costs (income, savings, pension) and non-financial costs (skills, health, wellbeing).'
        ],
        modelAnswer: 'First, unemployment causes immediate loss of earned income. The unemployed individual must rely on benefit payments (JSA or Universal Credit) which typically replace only a fraction of previous earnings, compressing their standard of living. Over time, savings may be depleted and pension contributions interrupted, reducing long-run financial security. Second, prolonged unemployment causes deterioration of human capital &#8212; the skills, qualifications and professional networks that determine a worker\&#39;s future earnings potential. As Extract B notes, workers unemployed for extended periods face a &#8220;scarring effect&#8221;: even after re-entering employment, they earn 10&#8211;15% less than comparable workers who were not unemployed. This permanent damage to lifetime earnings represents a significant personal economic cost beyond the immediate income loss.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine the likely economic effects of the UK government\'s furlough scheme on unemployment during the COVID-19 pandemic.',
        tips: [
          'Define what the furlough scheme was and what it aimed to achieve (Extract A provides the key data).',
          'Explain how the scheme prevented cyclical unemployment through aggregate demand support.',
          'Consider the argument in Extract A that it may have delayed structural adjustment.',
          'Evaluate: was preventing higher short-term unemployment worth the &#163;70bn cost?'
        ],
        modelAnswer: 'The Coronavirus Job Retention Scheme subsidised 80% of furloughed workers\&#39; wages up to a cap, retaining them in employment rather than laying them off. By maintaining household incomes, the scheme supported aggregate demand at a time when the economy had effectively shut down, preventing a collapse in consumer spending that would have deepened the recession further. Extract A shows unemployment peaked at only 5.2% &#8212; far below the predicted 15% without intervention &#8212; demonstrating the scheme\&#39;s direct effectiveness at preventing cyclical unemployment. By preserving employer-employee relationships, it also avoided the frictional costs of mass redundancies followed by wholesale recruitment when the economy reopened. However, Extract A also raises concerns that the scheme may have prevented necessary structural adjustment. The pandemic accelerated long-run shifts away from aviation, office-based work and traditional retail. By keeping workers in these contracting sectors, furlough may have delayed the reallocation of labour to growing sectors such as logistics, healthcare and digital services. In this sense, the scheme traded short-term employment preservation for potentially higher structural unemployment later. On balance, given the magnitude of the shock and the risk of hysteresis from mass long-term unemployment (highlighted in Extract B), the prevention of a 15% unemployment spike appears to have justified the &#163;70bn cost &#8212; though the structural adjustment argument deserves longer-run evaluation.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which supply-side policies are more effective than demand-side policies in reducing unemployment in the UK. Refer to Extract B and your own knowledge.',
        tips: [
          'Explain what supply-side policies are (training, education, labour market reform) and how they address unemployment.',
          'Explain demand-side policies (fiscal stimulus, monetary easing) and what types of unemployment they address.',
          'Use Extract B: hysteresis and the long-term unemployed demonstrate limits of demand stimulus.',
          'Evaluate: demand-side better for cyclical; supply-side better for structural. The type matters.',
          'Consider practical constraints: supply-side takes time; demand-side is faster but creates inflation risk.',
          'Conclude with a supported, balanced judgement.'
        ],
        modelAnswer: 'Supply-side policies address unemployment by improving the functioning of the labour market itself: education and training reduce the skills mismatch that causes structural unemployment; welfare reform reduces the replacement ratio and improves financial incentives to work; geographic mobility schemes reduce search friction. These policies directly target the structural and frictional causes of unemployment and, if successful, permanently reduce the NAIRU &#8212; allowing lower unemployment without inflationary pressure. The hysteresis evidence in Extract B strengthens the supply-side case: if prolonged unemployment permanently raises the NAIRU, the only way to restore lower equilibrium unemployment is to actively rebuild human capital through training programmes, not simply stimulate demand. Demand-side policies &#8212; fiscal stimulus (lower taxes, higher government spending) or monetary easing (lower Bank Rate) &#8212; raise aggregate demand and are effective against cyclical unemployment caused by recession. When the economy operates below potential output, boosting AD can close the output gap and return employment toward the NAIRU without significant inflationary risk. The furlough scheme in Extract A is an extreme example: demand support preventing a catastrophic cyclical unemployment rise. However, demand-side policies have significant limitations. They are inflationary when the economy approaches full capacity; they cannot overcome a structural skills mismatch (no amount of demand stimulus creates chemical engineers from out-of-work retail workers); and they work poorly against regional unemployment disparities (Extract C) driven by geographical immobility that demand stimulus cannot address. On balance, the relative effectiveness depends critically on the cause and type of unemployment. For cyclical unemployment, demand-side policy is more immediate and appropriate. For structural and long-term unemployment, supply-side investment in skills and incentives is superior. In practice, the most effective approach combines both: short-term demand support to prevent hysteresis, alongside sustained supply-side investment to permanently reduce the NAIRU. Given that much of UK unemployment has structural components &#8212; regional mismatches, long-term inactivity &#8212; supply-side reform arguably delivers more durable improvement, but operates over years rather than months.'
      }
    ]
  },

  strongAnswers: [
    'Distinguish the type of unemployment before prescribing policy',
    'Use extract data precisely &#8212; cite specific figures',
    'Develop the chain of analysis from policy to outcome',
    'Reach a supported judgement on relative effectiveness'
  ]
};
