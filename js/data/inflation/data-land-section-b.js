/* ============================================================
   ECONOS – Land It · Section B data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Causes of Inflation & Deflation',
  sectionLabel: 'Section B – Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  /* ── Context pack: 2–4 extracts, collapsible ─────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK Monetary Policy decisions, 2020',
        tags:        ['0.1% base rate', '&#163;200bn QE', 'deflation risk', 'later inflation concern'],
        defaultOpen: true,
        paragraphs: [
          'In March 2020, as the COVID-19 pandemic hit the UK economy, the Bank of England cut the base rate from 0.75% to 0.10%. It also restarted quantitative easing (QE) with a further &#163;200 billion of government bond purchases.',
          'The aim was to support aggregate demand, keep borrowing costs low and prevent the economy from slipping into deflation. Over the following months and years, the Bank kept rates low and continued asset purchases until QE holdings peaked at &#163;895 billion.',
          'Some commentators argued that this large-scale money creation helped avoid deflation and stabilise demand. Others later criticised QE, claiming it contributed to higher inflation, while some economists argued much of the new money stayed within financial markets rather than reaching the real economy.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Wage growth and the cost of living crisis, 2022–23',
        tags:        ['11.1% CPI peak', '8.5% wage growth', '5.25% Bank Rate', 'supply-side shocks'],
        defaultOpen: false,
        paragraphs: [
          'By late 2022, UK CPI inflation reached a 40-year high of 11.1%, driven largely by post-pandemic supply bottlenecks and the energy price shock following Russia&#39;s invasion of Ukraine. Households faced sharply rising costs for energy, food and transport.',
          'In response, UK workers across the public and private sectors sought significant pay rises to restore their real purchasing power, with average regular pay growth peaking at 8.5% in mid-2023. The Bank of England&#39;s Monetary Policy Committee raised the Bank Rate fourteen consecutive times, from 0.10% in late 2021 to 5.25% by August 2023.',
          'The MPC warned that sustained wage growth above productivity risked embedding inflation expectations. Critics argued the rate rises came too late to prevent a wage-price spiral, while others suggested monetary policy alone could not address inflation driven by global supply shocks.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Economist commentary on monetary policy',
        tags:        ['transmission lags', 'expectations channel', 'policy trade-offs'],
        defaultOpen: false,
        paragraphs: [
          'Economists generally agree that monetary policy works with &ldquo;long and variable lags&rdquo;. The Bank of England estimates that a change in interest rates takes 18&ndash;24 months to feed fully through to inflation. This means rate decisions taken today are aimed at inflation expected several years from now.',
          'There is wider disagreement about the relative importance of the transmission channels. Some emphasise the demand channel (higher rates reduce consumption and investment), while others focus on the expectations channel (a credible inflation target anchors wage and price setting).',
          'Most economists accept a trade-off: returning inflation to target may require slowing growth, raising unemployment and accepting weaker output in the short run.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────── */
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
        stem:   'Explain two likely causes of demand-pull inflation in the UK.',
        tips: [
          'Identify two distinct causes (e.g. lower interest rates, rising consumer confidence, fiscal stimulus).',
          'For each cause, explain the mechanism by which it shifts aggregate demand to the right.',
          'Use the language of the AD/AS model: AD shifts right → rising price level if economy is near full capacity.'
        ],
        modelAnswer: 'One cause of demand-pull inflation is a cut in interest rates. Lower borrowing costs encourage households to take out loans and mortgages, increasing consumption, while firms borrow more cheaply to fund investment. Total spending rises, shifting aggregate demand (AD) to the right. If the economy is operating near full capacity, this excess demand pulls the price level up. A second cause is an expansionary fiscal policy &#8212; for example, tax cuts or higher government spending. Tax cuts raise households&#39; disposable income, boosting consumption, while higher government spending directly adds to AD. Again, the rightward shift in AD against a relatively inelastic short-run aggregate supply curve pulls prices up.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine the likely impact of quantitative easing on the UK price level.',
        tips: [
          'Briefly define quantitative easing and link it to the &#163;200bn figure in Extract A.',
          'Trace the transmission mechanism: asset purchases → higher bond prices, lower yields → lower borrowing costs → higher AD.',
          'Explain why QE may help avoid deflation when interest rates are near the zero lower bound.',
          'Use a balanced view: some commentators in Extract A argue QE later contributed to inflation, others that the money stayed in financial markets.'
        ],
        modelAnswer: 'Quantitative easing (QE) is the creation of central bank reserves to purchase financial assets &#8212; in this case &#163;200bn of government bonds. By bidding up bond prices, QE pushes yields down across the economy, lowering borrowing costs for firms and households. This stimulates investment and consumption, shifting AD to the right. With the Bank Rate already at the zero lower bound (0.10% per Extract A), conventional monetary easing was exhausted, so QE was the principal tool to prevent the economy slipping into deflation. In the short run, QE clearly helped support the price level. However, Extract A notes that some commentators later linked QE to higher inflation: by expanding the broad money supply substantially, QE may have fuelled excess demand once the economy reopened, consistent with the quantity theory of money. On the other hand, others argue much of the newly created money stayed within financial markets &#8212; raising asset prices rather than consumer prices &#8212; weakening the link to CPI. Overall, QE likely supported the price level and helped avoid deflation in the short run, but its longer-run inflationary impact depends on how much new money reaches the real economy and how anchored inflation expectations remain.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which monetary policy can effectively control inflation in the UK. Refer to Extract B and your own knowledge.',
        tips: [
          'Define monetary policy and identify its key tools: Bank Rate, QE/QT, forward guidance.',
          'Explain how higher rates reduce inflation via the demand channel and the exchange-rate channel.',
          'Use Extract B: 14 consecutive rate rises from 0.10% to 5.25% in response to 11.1% CPI.',
          'Evaluate the limits: long and variable lags (18&ndash;24 months), supply-side shocks not addressable by demand-side tools.',
          'Consider the wage-price spiral and the expectations channel.',
          'Conclude with a balanced, supported judgement on effectiveness.'
        ],
        modelAnswer: 'Monetary policy &#8212; primarily the setting of the Bank Rate, supplemented by quantitative easing or tightening and forward guidance &#8212; is the UK&#39;s main tool for controlling inflation, with the Bank of England mandated to keep CPI at 2%. A rise in the Bank Rate raises commercial interest rates, dampening consumption and investment and slowing aggregate demand growth; higher rates also attract capital inflows, appreciating sterling and reducing import prices. Extract B illustrates this in action: facing 11.1% CPI inflation, the MPC raised rates fourteen times consecutively from 0.10% to 5.25%, eventually returning inflation closer to target. This shows monetary policy can be highly effective when the cause is demand-driven, when the Bank acts credibly, and when its 2% target anchors expectations. However, several factors limit effectiveness. First, monetary policy operates with long and variable lags &#8212; typically 18&#8211;24 months &#8212; meaning rate changes today address inflation expected years ahead. Extract B notes critics arguing the rate rises came too late to prevent a wage-price spiral. Second, much of the 2022 inflation was supply-driven (energy shock, post-pandemic bottlenecks); raising rates cannot directly lower oil prices and risks unnecessary damage to growth and employment. Third, an entrenched wage-price spiral, as hinted by 8.5% pay growth, can keep inflation high even as demand softens. Finally, the zero lower bound &#8212; as in 2020 &#8212; can disable conventional rate cuts during deflationary shocks, although QE provides a partial substitute. Overall, monetary policy is necessary but not sufficient. It is highly effective against demand-driven inflation and well-anchored expectations, but is blunt against supply shocks and slow to act. Effective inflation control therefore depends on the Bank acting credibly and pre-emptively, supported where appropriate by fiscal and supply-side policies. On balance, monetary policy can control inflation, but only within these limits.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────── */
  strongAnswers: [
    'Use the context directly',
    'Develop the chain of analysis',
    'Apply a relevant diagram or example',
    'Reach a supported judgement'
  ]
};
