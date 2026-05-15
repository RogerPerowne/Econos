/* ============================================================
   ECONOS — Land It · Section B data for Aggregate Demand
   Topic: Aggregate Demand (2.7)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Aggregate Demand',
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
        title:       'The UK COVID-19 demand shock and recovery, 2020&#8211;22',
        tags:        ['COVID-19', 'GDP &#8722;9.3%', 'furlough scheme', 'demand recovery'],
        defaultOpen: true,
        paragraphs: [
          'The COVID-19 pandemic caused the largest single-year fall in UK GDP since modern records began, with output contracting by 9.3% in 2020. The collapse in aggregate demand was broad-based: consumer spending fell as households were unable or unwilling to visit shops, restaurants, and entertainment venues; business investment was frozen amid extreme uncertainty; and exports were hit by the simultaneous collapse in global demand. The shutdown of much of the economy represented a near-total destruction of AD in affected sectors.',
          'The government responded with unprecedented fiscal intervention. The Coronavirus Job Retention Scheme &#8212; commonly known as the furlough &#8212; paid 80% of the wages of around 11 million workers at a total cost of over &#163;70 billion, preventing the mass unemployment that would have caused lasting damage to consumer spending. Additional support for the self-employed, business grants, and emergency loans added further fiscal stimulus. The Bank of England simultaneously cut Bank Rate to a historic low of 0.1% and expanded quantitative easing by &#163;450 billion.',
          'The recovery was faster than many economists expected. UK GDP grew by 7.5% in 2021 as vaccines were rolled out and restrictions lifted. Pent-up consumer demand &#8212; accumulated during lockdowns when spending opportunities were limited &#8212; combined with intact household balance sheets from the furlough to produce a sharp rebound in consumption. However, supply chains remained disrupted, and the rapid recovery in demand began to push up prices, contributing to the inflation surge that followed in 2021&#8211;22.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The investment function and business confidence',
        tags:        ['business investment', 'animal spirits', 'interest rates', 'uncertainty'],
        defaultOpen: false,
        paragraphs: [
          'Business investment &#8212; or gross fixed capital formation &#8212; is the most volatile component of aggregate demand. In 2020, UK business investment fell by 11.6%, far more than GDP as a whole. Firms facing extreme uncertainty about future demand deferred or cancelled capital expenditure plans, even when borrowing costs were at record lows. This illustrates a key insight from Keynes: investment is driven not only by interest rates but by what he called &#8220;animal spirits&#8221; &#8212; the subjective expectations of entrepreneurs about future profitability.',
          'By 2022, a new set of headwinds had emerged. As the Bank of England raised Bank Rate from 0.1% to 5.25% between 2021 and 2023, the cost of financing new investment rose substantially. UK business investment growth turned negative &#8212; falling by 0.3% in 2022 &#8212; as firms faced both higher borrowing costs and renewed uncertainty from the energy price shock, supply chain disruptions, and the aftermath of Brexit. Many businesses reported that post-Brexit trade friction had reduced their appetite to invest in UK-based capacity.',
          'The relationship between interest rates and investment is captured in the marginal efficiency of capital (MEC) schedule: firms invest as long as the expected rate of return on a project exceeds the cost of borrowing. A rise in interest rates shifts the threshold upward, eliminating marginal projects. But the schedule itself can shift: a collapse in business confidence reduces expected returns on all projects, shifting the MEC curve to the left and depressing investment even if interest rates remain unchanged. Stabilising expectations &#8212; through credible policy, reduced uncertainty, or structural reform &#8212; can shift the MEC curve back to the right and stimulate investment independently of interest rate changes.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'The crowding-out debate: government spending and private investment',
        tags:        ['crowding out', 'fiscal stimulus', 'bond markets', 'loanable funds'],
        defaultOpen: false,
        paragraphs: [
          'A central concern in macroeconomic policy is whether increased government spending &#8220;crowds out&#8221; private investment. The traditional argument runs as follows: when the government borrows heavily to finance spending, it competes with private firms for available loanable funds, driving up interest rates. Higher rates increase the cost of capital for businesses, discouraging investment projects that would otherwise have been profitable. The net effect on aggregate demand may therefore be smaller than the direct injection of government expenditure suggests.',
          'In the UK context, proponents of the crowding-out argument pointed to the surge in government borrowing during COVID-19 &#8212; deficit spending reached over &#163;300 billion in 2020&#8211;21 &#8212; as a potential threat to private investment. However, because the Bank of England simultaneously expanded its quantitative easing programme by purchasing gilts on the secondary market, gilt yields remained extremely low despite record government borrowing. This &#8220;financial crowding out&#8221; was largely avoided, as the central bank effectively monetised a significant portion of the debt.',
          'Critics of the crowding-out hypothesis argue that it applies primarily when the economy is at full capacity. During a deep recession, with significant spare capacity, government borrowing is unlikely to push up interest rates because private sector demand for credit is itself depressed. In this context, government spending does not displace private investment &#8212; it fills a gap that the private sector is unwilling or unable to fill. The relevant question is whether the economy is in a &#8220;Keynesian&#8221; regime &#8212; with an output gap and idle resources &#8212; or at potential output where crowding out is a genuine constraint.'
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
        stem:   'Explain two factors that could cause aggregate demand to increase in the UK economy.',
        tips: [
          'Identify two distinct factors from different components of AD (e.g. one from C, one from G or I).',
          'For each factor, explain the economic mechanism by which it increases AD &#8212; do not simply assert the outcome.',
          'Where relevant, use data or context from the extracts (e.g. the furlough scheme or business confidence).'
        ],
        modelAnswer: 'One factor that increases aggregate demand is a rise in consumer confidence. When households feel secure about their employment prospects and real income, they reduce precautionary saving and increase spending. Extract A illustrates this: following the pandemic, intact household balance sheets from the furlough scheme combined with pent-up demand from lockdowns generated a sharp rise in consumer spending, contributing to UK GDP growth of 7.5% in 2021. The furlough ensured that millions of workers retained 80% of their wages, so their balance sheets were not destroyed in the way they would have been in a conventional recession; once restrictions lifted, this translated into a rapid and powerful recovery in consumption &#8212; the largest component of AD at around 61% of GDP. A second factor is an increase in government spending. When the government raises its expenditure on goods and services &#8212; such as infrastructure, healthcare, or defence &#8212; this directly increases G, a component of AD. The effect is amplified through the multiplier: the initial injection of government spending creates incomes for workers and firms, who spend a proportion, generating further rounds of demand across the economy. The &#163;70 billion furlough scheme in Extract A demonstrates how large-scale government expenditure can sustain aggregate demand even when private sector activity collapses.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine the likely effects of a significant fall in business investment on the UK economy.',
        tips: [
          'Define business investment and explain its role in the AD formula.',
          'Apply the AD&#47;AS framework: a fall in I shifts AD to the left &#8212; explain the short-run effects on real GDP, unemployment, and the price level.',
          'Use the multiplier from Extract B to develop the amplified effect on national income.',
          'Refer to Extract B&#39;s data (&#8722;11.6% in 2020; &#8722;0.3% in 2022) and the concept of &#8220;animal spirits&#8221;.',
          'Consider both short-run effects and longer-run supply-side consequences of lower capital accumulation.'
        ],
        modelAnswer: 'Business investment &#8212; or gross fixed capital formation &#8212; represents firms&#39; spending on new capital goods: machinery, equipment, buildings, and technology. It is a component of aggregate demand (AD = C + I + G + X &#8722; M) and, as Extract B notes, the most volatile component. A significant fall in business investment reduces I directly, shifting the AD curve to the left in the AD&#47;AS model. At the existing price level, real GDP falls and unemployment rises as firms in capital goods industries face reduced demand, cut production, and shed workers. The negative multiplier amplifies this initial effect: workers who lose income cut consumption, reducing demand for retail and service businesses, which in turn reduce staffing and orders, generating further rounds of income loss. Extract B illustrates the scale: in 2020, business investment fell by 11.6%, far more than the 9.3% fall in GDP itself, demonstrating its outsized contribution to the demand collapse. The 2022 experience &#8212; when investment fell 0.3% &#8212; shows that even a modest decline in a context of already-tight household budgets can weaken the overall economy. Extract B also highlights the role of &#8220;animal spirits&#8221;: in 2020, investment collapsed even though interest rates were at record lows, because uncertainty about future demand made any investment appear too risky. This shows that the traditional monetary policy tool &#8212; cutting interest rates to stimulate investment &#8212; may be ineffective when business confidence has fundamentally collapsed. Beyond the short-run AD effect, a sustained fall in business investment has serious long-run supply-side consequences. Lower capital accumulation means the capital stock grows more slowly, reducing the productive capacity of the economy over time. This shifts the long-run aggregate supply (LRAS) curve to the left, reducing potential output and the economy&#39;s long-run growth rate. UK productivity growth &#8212; already weak since the 2008 financial crisis &#8212; risks being further damaged by sustained underinvestment, creating a lasting drag on living standards. On balance, a fall in business investment is doubly damaging: it reduces aggregate demand in the short run through the multiplier, and constrains productive capacity in the long run through reduced capital accumulation.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Using the extracts and your own knowledge, discuss the extent to which government spending can effectively substitute for a shortfall in private investment.',
        tips: [
          'Explain the Keynesian case for government spending as a substitute for private investment &#8212; the &#8220;spender of last resort&#8221; argument.',
          'Use Extract A (furlough, fiscal stimulus) to show where government spending successfully filled an AD gap.',
          'Apply the multiplier: government spending with a high multiplier can generate more than &#163;1 of income per &#163;1 spent.',
          'Evaluate the crowding-out argument from Extract C &#8212; under what conditions does this apply?',
          'Consider the limits: short-run vs long-run substitutability; nature of the investment (public vs private); fiscal space constraints.',
          'Reach a clear, supported judgement &#8212; under what conditions is government spending an effective substitute?'
        ],
        modelAnswer: 'The question of whether government spending can substitute for a shortfall in private investment is one of the most contested in macroeconomics. The Keynesian view holds that it can &#8212; and that it must &#8212; when private sector demand collapses and the economy faces a large negative output gap. The alternative view, associated with classical and monetarist economists, is that government spending crowds out private investment and is therefore not an effective or efficient substitute. The evidence from the COVID-19 period, analysed through the lens of all three extracts, suggests that the truth is strongly context-dependent. The Keynesian case is compelling in a deep recession. Extract A demonstrates that the UK government&#39;s &#163;70 billion furlough scheme and broader fiscal stimulus preserved aggregate demand when private sector activity collapsed. By paying 80% of wages for around 11 million workers, the government effectively replaced the consumption spending that would otherwise have evaporated with unemployment. The result was a faster-than-expected recovery: GDP grew 7.5% in 2021, and household balance sheets entered the recovery phase largely intact. Extract B confirms that in 2020, even with Bank Rate at 0.1%, business investment fell by 11.6%, precisely because uncertainty &#8212; not interest rates &#8212; was the binding constraint. In this environment, government spending did not compete with private borrowing for loanable funds; it filled a genuine vacuum. The crowding-out concern raised in Extract C is most relevant at or near full capacity. In 2020&#8211;21, the economy had substantial spare capacity &#8212; a large negative output gap &#8212; so government borrowing did not drive up interest rates. Moreover, the Bank of England&#39;s quantitative easing programme, which expanded by &#163;450 billion, kept gilt yields low despite record public borrowing. Financial crowding out was therefore largely avoided, and real crowding out &#8212; where government spending directly replaces private activity &#8212; was minimal in a period of demand collapse. However, government spending is a less effective substitute for private investment in several important respects. First, it differs in character: private investment in capital goods expands productive capacity and drives technological progress, while much government spending supports consumption or funds public services rather than building the capital stock. Furlough spending, for example, preserved jobs and incomes but did not invest in machinery, infrastructure, or R&amp;D that would boost long-run productivity. Where government does invest in infrastructure &#8212; as with the &#163;100 billion National Infrastructure Strategy &#8212; the supply-side effects can complement private investment, but implementation lags mean benefits arrive slowly. Second, the fiscal space available to governments is finite. Extract C notes that UK public borrowing reached over &#163;300 billion in 2020&#8211;21. Sustaining this level of deficit over the medium term would raise debt-to-GDP ratios to potentially destabilising levels, ultimately constraining the government&#39;s capacity to borrow in future downturns. Third, the nature of the private investment shortfall matters. If firms are not investing because of structural factors &#8212; such as post-Brexit trade uncertainty, regulatory burdens, or skills gaps &#8212; no amount of government demand stimulus will address the root cause. Supply-side reforms to improve business conditions may be more effective than fiscal expansion in this scenario. In conclusion, government spending can be a highly effective short-run substitute for a private investment shortfall &#8212; as the COVID-19 response convincingly demonstrated &#8212; when the economy is operating below capacity, monetary policy is constrained, and fiscal space is available. Its effectiveness is greatest when it directly supports demand rather than merely substituting for it, and when it is accompanied by credible long-run fiscal plans that maintain market confidence. Over the long run, however, public spending cannot fully replicate the productivity-enhancing role of private business investment; structural policies to rebuild private confidence and address supply-side barriers are also needed.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Quote extract data directly &#8212; figures, dates, and policy names',
    'Apply the AD&#47;AS framework accurately and explain the mechanism step by step',
    'Use the multiplier concept to develop amplified effects on national income',
    'Reach a balanced, conditional judgement backed by evidence'
  ]
};
