/* ============================================================
   ECONOS — Land It · Section B data for Economic Growth and the Business Cycle
   Topic: Economic Growth and the Business Cycle (2.10)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Economic Growth and the Business Cycle',
  sessionLabel: 'Session 3 of 3: Land',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  /* ── Context pack: 3 extracts, collapsible ─────────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK economic performance, 2008&#8211;2023',
        tags:        ['GDP growth', 'financial crisis', 'productivity puzzle', 'trend growth'],
        defaultOpen: true,
        paragraphs: [
          'The UK economy experienced two severe recessions within fifteen years. The 2008&#8211;09 financial crisis caused GDP to contract by approximately 4.5% cumulatively, with the economy not recovering its pre-crisis peak until 2013. The subsequent recovery was slow and marked by a persistent &#8220;productivity puzzle&#8221;: labour productivity growth averaged just 0.4% per year between 2008 and 2023, compared with 2.2% in the fifteen years before the crisis. This shortfall implies that by 2023, UK output per worker was approximately 20% below the level it would have reached had the pre-crisis trend been maintained.',
          'The COVID-19 pandemic of 2020 then caused the largest single-year fall in UK GDP since modern records began &#8212; a contraction of 9.3% in 2020 &#8212; followed by a sharp recovery of 7.5% in 2021. Over the longer arc of 2008&#8211;2023, UK average real GDP growth was approximately 1.3% per year, significantly below the pre-2008 trend of around 2.5% and below comparable G7 economies. Business investment, at around 9&#8211;10% of GDP, has persistently lagged behind competitor economies and was further dampened by post-Brexit uncertainty and the shift to remote working reducing commercial property demand.',
          'Structural weaknesses include a chronic current account deficit &#8212; reaching 8% of GDP in 2022 &#8212; and a concentration of economic activity and investment in London and the south-east. The UK&#39;s long-term growth prospects are a subject of considerable policy debate, with some economists arguing that the economy has shifted to a permanently lower growth trajectory, while others believe targeted supply-side reform can restore faster expansion.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The 2020 COVID-19 recession and the speed of recovery',
        tags:        ['COVID-19', '&#8722;9.3% GDP', 'furlough', 'V-shaped recovery', 'scarring'],
        defaultOpen: false,
        paragraphs: [
          'The UK&#39;s COVID-19 recession of 2020 was unprecedented in its speed and depth. GDP fell by 25% in April 2020 alone &#8212; the sharpest monthly contraction on record &#8212; before recovering as restrictions were relaxed. For the full year, output contracted by 9.3%. The causes were equally unusual: a combination of a catastrophic demand shock (households could not spend on services, travel, or entertainment) and a deliberate supply restriction (government-mandated lockdowns shut down large parts of the economy entirely).',
          'The government response was on an exceptional scale. The Coronavirus Job Retention Scheme &#8212; or furlough &#8212; paid 80% of wages for around 11 million workers at a total cost exceeding &#163;70 billion. Additional grants, business rate holidays, and emergency loans added further support. The Bank of England cut Bank Rate to a historic low of 0.1% and expanded quantitative easing by &#163;450 billion. Together, these measures preserved household incomes and firm solvency to an unprecedented degree, preventing the mass unemployment and business failures that typically deepen recessions and leave lasting economic scars.',
          'The recovery was correspondingly rapid by historical standards. GDP grew 7.5% in 2021 &#8212; a near-V-shaped bounce-back &#8212; driven by pent-up consumer demand, intact household balance sheets, and the successful vaccine programme. However, the recovery was uneven across sectors: hospitality, transport, and international travel recovered more slowly, while financial services and some technology sectors recovered quickly. The legacy of the recession included a surge in public borrowing &#8212; the deficit reached over &#163;300 billion in 2020&#8211;21 &#8212; and the onset of significant inflation from 2021 onwards, as supply chains remained disrupted while demand recovered strongly.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Long-run productivity and UK growth prospects',
        tags:        ['productivity', 'investment', 'R&amp;D', 'human capital', 'growth prospects'],
        defaultOpen: false,
        paragraphs: [
          'The UK&#39;s long-run growth prospects are fundamentally tied to its ability to raise labour productivity. Output per hour worked grew at just 0.4% per year on average since 2008 &#8212; one of the worst performances in the OECD. Slow productivity growth constrains real wage growth, limits non-inflationary GDP expansion, and narrows the tax base available to fund public services. The Resolution Foundation estimates that had the UK maintained its pre-2008 productivity trend, household incomes would be around &#163;10,000 per year higher by the mid-2020s.',
          'Several structural factors explain the productivity underperformance. Business investment &#8212; at roughly 9&#8211;10% of GDP &#8212; is low by international comparison, limiting the rate at which the capital stock grows and new technology is adopted. R&amp;D spending at 1.7% of GDP is below the G7 average of 2.7%, slowing innovation diffusion. Skills gaps &#8212; particularly in technical and digital fields &#8212; prevent many workers from using new technology effectively. Regional economic imbalances mean productivity is highly concentrated in London and the south-east, while large parts of the country operate well below their potential.',
          'Policy responses have included the &#8220;levelling up&#8221; agenda, full expensing of business investment, and significant commitments to infrastructure. However, economists caution that these initiatives will take many years to bear fruit and that their effectiveness depends on sustained political commitment and private sector confidence. Some structural issues &#8212; such as the post-Brexit reduction in inward foreign direct investment and access to EU labour &#8212; may prove difficult to reverse, creating a persistent drag on the economy&#39;s long-run growth rate.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────────── */
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
        stem:   'Explain the four phases of the business cycle.',
        tips: [
          'Name all four phases: expansion&#47;recovery, boom (peak), recession&#47;contraction, and trough.',
          'For each phase, describe the key characteristics: GDP growth, unemployment, inflation, and confidence.',
          'Use the UK data from Extract A to illustrate the cycle with real examples where relevant.'
        ],
        modelAnswer: 'The business cycle describes the regular pattern of alternating expansions and contractions in real GDP around its long-run trend growth path. It has four identifiable phases. The first is expansion or recovery, when real GDP is growing &#8212; often following a period of recession. Output rises as firms increase production to meet recovering demand, unemployment begins to fall, and consumer and business confidence gradually improve. The UK experienced this phase in 2021, when GDP grew 7.5% following the COVID-19 contraction. The second phase is the boom or peak, where real GDP growth exceeds the long-run trend rate and the economy is at or above full capacity. A positive output gap opens, meaning actual output exceeds potential. Inflationary pressure builds as excess demand cannot be fully met by output increases, and unemployment may fall below the natural rate. The third phase is recession or contraction, conventionally defined as two or more consecutive quarters of negative real GDP growth. Output falls, unemployment rises cyclically, and consumer and business confidence collapse. Firms cut investment and defer spending; the government&#39;s automatic stabilisers kick in, raising the deficit. The UK suffered recessions in 2008&#8211;09 (GDP &#8722;4.5% cumulatively) and 2020 (&#8722;9.3%). The fourth phase is the trough, the lowest point of the cycle. Output, employment, and confidence are at their minimum; inflationary pressure is minimal (or the economy may face deflationary pressure); the output gap is at its most negative. The economy is positioned to begin the next recovery if demand can be stimulated or confidence restored.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the causes and consequences of the 2020 UK recession.',
        tips: [
          'Explain both the demand-side and supply-side causes of the COVID-19 recession &#8212; it was unusual in having both simultaneously.',
          'Use the GDP figure (&#8722;9.3%) and Extract B data (furlough cost, Bank Rate, QE) to support the analysis.',
          'Examine at least three distinct consequences: for unemployment, for public finances, for inflation, or for long-run growth.',
          'Consider the role of policy in modifying the consequences &#8212; what would have happened without the furlough?',
          'Acknowledge the unusual speed of recovery and discuss what drove it.'
        ],
        modelAnswer: 'The 2020 UK recession was caused by an unprecedented combination of demand-side collapse and supply-side restriction acting simultaneously. On the demand side, lockdown measures prevented households from spending on a wide range of goods and services &#8212; hospitality, transport, entertainment, and retail &#8212; causing a catastrophic fall in consumption, the largest component of aggregate demand. Business investment was frozen as firms faced extreme uncertainty about future demand and revenues. Net exports were hit by the simultaneous collapse in global activity, which reduced foreign demand for UK exports. Extract B confirms the scale: GDP fell by 25% in April 2020 alone, and by 9.3% for the full year &#8212; the deepest annual contraction since modern records began. On the supply side, government-mandated business closures directly prevented production in hospitality, non-essential retail, and parts of manufacturing, shifting the effective SRAS curve to the left by restricting capacity. This dual nature &#8212; both an AD collapse and a supply restriction &#8212; made the 2020 recession structurally different from demand-only recessions such as 2008&#8211;09. The consequences were wide-ranging. First, unemployment would have risen catastrophically without policy intervention &#8212; estimates suggest it could have reached 15&#8211;20% without the furlough scheme, which instead preserved employment for around 11 million workers at a cost exceeding &#163;70 billion. Second, the public finances were severely affected: the deficit reached over &#163;300 billion in 2020&#8211;21, adding significantly to national debt and constraining future fiscal space. Third, supply chain disruptions &#8212; compounded by the pandemic shock &#8212; created the conditions for the subsequent inflation surge: when demand recovered strongly in 2021 while supply chains remained stretched, price pressures emerged across goods markets. This eventually contributed to CPI reaching 11.1% by October 2022. The speed of recovery in 2021 (+7.5%) was driven by the release of pent-up demand, the preservation of household incomes through the furlough &#8212; so balance sheets were intact when spending became possible again &#8212; and the successful vaccine rollout. However, Extract B notes the recovery was uneven, with some sectors &#8212; international travel, hospitality, and transport &#8212; recovering far more slowly. The legacy of increased public debt and subsequent inflation creates a difficult macroeconomic inheritance, limiting policy flexibility for future downturns.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Using the extracts and your own knowledge, discuss whether the UK can achieve a sustained higher long-run rate of economic growth.',
        tips: [
          'Define long-run economic growth and distinguish it from short-run cyclical recovery.',
          'Identify the structural factors constraining UK growth using Extracts A and C (productivity puzzle, investment, R&amp;D, regional imbalances).',
          'Present the policy case for each key reform &#8212; investment incentives, education, infrastructure, R&amp;D &#8212; and explain how each could raise LRAS.',
          'Evaluate the obstacles: time lags of supply-side reform, post-Brexit structural headwinds, fiscal constraints, and political economy barriers.',
          'Consider whether demand-side conditions &#8212; maintaining stable AD &#8212; are also necessary for supply-side improvements to materialise.',
          'Reach a clear, supported judgement: can the UK revert to faster growth, and what would be required?'
        ],
        modelAnswer: 'Long-run economic growth refers to a sustained increase in the economy&#39;s productive potential &#8212; a rightward shift of the LRAS curve &#8212; as opposed to short-run cyclical recovery, which simply closes an existing output gap. Whether the UK can achieve a sustainably higher rate of long-run growth depends on whether it can address the structural weaknesses that have constrained productivity since 2008, while navigating the fiscal, political, and external headwinds that complicate any sustained reform programme. The case for optimism begins with the diagnosis: the productivity puzzle is well understood, and its causes &#8212; underinvestment in physical capital, R&amp;D, human capital, and infrastructure; regional economic imbalances; and a business environment complicated by post-Brexit uncertainty &#8212; are in principle addressable by policy. Extract C identifies that UK output per hour could be around &#163;10,000 per household higher per year if the pre-2008 productivity trend had been sustained, creating a powerful economic argument for reform. The government&#39;s &#8220;full expensing&#8221; of capital investment, introduced in 2023, directly reduces the after-tax cost of business investment, which at 9&#8211;10% of GDP has persistently lagged G7 peers. By lowering the effective cost of acquiring new plant and technology, it could raise the capital-to-labour ratio, improving labour productivity. Infrastructure spending &#8212; including the National Infrastructure Strategy &#8212; can lower firms&#39; operating costs, improve labour market mobility, and attract private investment by improving the business environment. Education and skills investment, including T-levels and apprenticeship expansion, aims to address the human capital gap &#8212; particularly in digital and technical fields &#8212; that prevents effective technology adoption. Targeted R&amp;D support could raise innovation above the current 1.7% of GDP, closing the gap with the G7 average of 2.7%. Each of these interventions, sustained over time, would shift the LRAS to the right and raise the UK&#39;s trend growth rate. However, there are substantial reasons for caution. First, supply-side reforms work slowly. Education reform takes a generation; infrastructure projects routinely suffer delays and cost overruns &#8212; HS2 has risen from &#163;37 billion to over &#163;100 billion and been significantly curtailed. Second, some structural headwinds may be difficult to reverse. Post-Brexit reductions in inward foreign direct investment &#8212; as some businesses relocated European operations to EU countries &#8212; and reduced access to EU labour for sectors such as construction, hospitality, and healthcare create a persistent drag, as Extract C acknowledges. Third, the fiscal legacy of two recessions and significant pandemic spending leaves the government with limited room to finance a large supply-side investment programme without risking market concern about debt sustainability. The national debt approaching 100% of GDP constrains the scale of public investment that can credibly be promised. Fourth, the political economy of sustained structural reform is challenging: many beneficial policies &#8212; education and infrastructure &#8212; have benefits that arrive only after several electoral cycles, creating incentives to prioritise short-run measures over long-run structural investment. The evidence from Extract A underscores the seriousness of the challenge: average real growth of 1.3% per year between 2008 and 2023, well below the pre-crisis trend of 2.5%. Closing even half this gap over the coming decade would require a sustained and coordinated programme of supply-side investment significantly more ambitious than anything yet delivered. In conclusion, a sustainably higher rate of long-run growth is achievable for the UK in principle, but it requires both addressing the supply-side fundamentals &#8212; investment, skills, innovation, and infrastructure &#8212; and maintaining a stable macroeconomic environment that supports private sector confidence and prevents hysteresis from short-run downturns eroding long-run potential. The key risk is that fiscal constraints, political short-termism, and structural post-Brexit headwinds prevent the sustained commitment needed. A modestly more optimistic scenario &#8212; recovering to around 1.8&#8211;2.0% annual trend growth &#8212; is plausible if policy is sustained; a return to pre-2008 rates appears unlikely without transformative structural change.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Use GDP figures from the extracts precisely &#8212; cite years and percentages',
    'Distinguish between short-run cyclical recovery and long-run structural growth',
    'Apply the AD&#47;AS and LRAS framework accurately to the UK context',
    'Evaluate obstacles to growth with specific examples &#8212; avoid vague assertions'
  ]
};
