/* ============================================================
   ECONOS — Land It · Section C data for Fiscal Policy
   Topic: Fiscal Policy (2.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Fiscal Policy',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the view that expansionary fiscal policy is the most appropriate response to a recession.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define recession and expansionary fiscal policy; distinguish from automatic stabilisers.',
      'Explain the Keynesian case: the paradox of thrift, the multiplier, and the role of government as &#8220;spender of last resort&#8221;.',
      'Apply the AD&#47;AS diagram: rightward shift of AD from higher G or tax cuts &#8594; higher real GDP, lower unemployment.',
      'Present the case for using monetary policy instead &#8212; speed, flexibility, and independence from political pressures.',
      'Evaluate the limits of expansionary fiscal policy: crowding out, time lags, debt sustainability, inflationary risk.',
      'Consider when fiscal policy is most effective: liquidity trap, zero lower bound, large negative output gap.',
      'Reach a clear, supported judgement &#8212; under what conditions is fiscal expansion the most appropriate response?'
    ],

    modelAnswer:
      '<p>A recession is conventionally defined as two consecutive quarters of negative real GDP growth. It is characterised by falling aggregate demand, rising unemployment, and a growing negative output gap. Expansionary fiscal policy involves increasing government spending, reducing taxation, or both, with the aim of shifting aggregate demand to the right and restoring output and employment towards potential. The Keynesian view holds that this is precisely the appropriate response; the question is whether it is the <em>most</em> appropriate.</p>'
    + '<p>The Keynesian case for fiscal expansion in recession rests on the paradox of thrift: when households and firms simultaneously cut spending, individually rational behaviour collectively deepens the downturn, reducing incomes and tax revenues further. The government, as the only agent unconstrained by falling private income, can break this cycle by increasing its own expenditure or cutting taxes to boost household disposable income. An increase in government spending directly raises the government component of aggregate demand (AD = C + I + G + X &#8722; M), shifting the AD curve to the right. Crucially, the multiplier amplifies this initial injection: each pound of government spending creates incomes for workers and firms, who spend a fraction &#8212; determined by the marginal propensity to consume &#8212; generating further rounds of demand. With the UK MPC estimated at around 0.6&#8722;0.7 and allowing for leakages, multipliers of 1.3&#8722;1.7 are plausible when significant spare capacity exists and monetary policy is constrained. The 2009 G20 coordinated fiscal stimulus &#8212; including the UK&#39;s VAT cut to 15% and &#163;20 billion spending boost &#8212; illustrates this approach, and IMF research subsequently suggested it helped limit the depth of the global recession relative to a counterfactual with no stimulus.</p>'
    + '<p>The case for fiscal expansion is particularly strong when monetary policy is unable to fulfil its stabilising role. When the Bank Rate is at or near zero &#8212; as in 2009 and 2020 &#8212; conventional interest rate cuts are no longer available, and the economy may be trapped in a &#8220;liquidity trap&#8221; where further reductions in borrowing costs do not stimulate spending. In this environment, fiscal policy is not merely desirable but arguably the only tool capable of directly expanding aggregate demand. The 2020 COVID-19 response &#8212; including the &#163;70 billion furlough scheme &#8212; demonstrates that large-scale fiscal intervention can sustain household incomes and prevent permanent labour market scarring when the economy is struck by a severe demand shock.</p>'
    + '<p>However, expansionary fiscal policy faces several significant limitations. First, crowding out: higher government borrowing increases the public sector&#39;s demand for loanable funds, potentially pushing up interest rates and discouraging private investment. If the fiscal stimulus is largely offset by falls in private capital expenditure, the net impact on AD may be modest. Second, time lags: unlike monetary policy, which the Bank of England can adjust at eight meetings per year, fiscal changes require parliamentary approval and procurement processes that delay their impact. Infrastructure spending, in particular, may not reach the economy until the recession has already ended, risking a procyclical stimulus that generates inflation rather than real output growth. Third, debt sustainability: if the government already carries a high debt burden &#8212; as the UK did with national debt near 100% of GDP in 2022&#8211;23 &#8212; further borrowing risks triggering adverse market reactions, rising gilt yields, and a self-defeating loss of fiscal credibility. The September 2022 Mini-Budget illustrated this risk vividly: unfunded tax cuts caused gilt yields to spike and sterling to fall, forcing a swift policy reversal. Finally, the composition of any stimulus matters: poorly targeted spending may have a lower multiplier, while tax cuts for high-income households &#8212; who have a lower MPC &#8212; may leak substantially into saving.</p>'
    + '<p>Monetary policy offers an alternative. The Bank of England can respond quickly, symmetrically, and without the political pressures that complicate discretionary fiscal decisions. Rate cuts reduce borrowing costs across the whole economy, stimulating both consumption and business investment. However, as noted above, monetary policy loses its conventional effectiveness at the zero lower bound, and quantitative easing &#8212; while helpful &#8212; is a more indirect and uncertain tool. Supply-side policies can also support recovery by reducing structural unemployment and increasing potential output, but they operate over years rather than months and cannot address an immediate demand shortfall.</p>'
    + '<p>In conclusion, expansionary fiscal policy is the most appropriate response to a recession under specific conditions: when the output gap is large, when monetary policy is constrained by the zero lower bound, when the multiplier is high (i.e. spare capacity is available and import propensity is low), and when the government has sufficient fiscal space to borrow without alarming financial markets. Under these conditions &#8212; as in 2009 and 2020 &#8212; fiscal expansion can be highly effective and may be the only tool capable of restoring aggregate demand. Where these conditions do not hold &#8212; particularly when debt is already high and markets are sensitive to fiscal credibility &#8212; the risks of expansionary fiscal policy may outweigh its benefits, and a combination of automatic stabilisers, monetary easing, and targeted supply-side support may prove more appropriate. Fiscal policy is therefore a powerful but context-dependent tool; its appropriateness depends not on ideology but on the specific macroeconomic circumstances of the recession in question.</p>'
  },

  strongAnswers: [
    'Define key terms and set up the debate precisely',
    'Apply a well-labelled AD&#47;AS diagram to the analysis',
    'Use specific UK evidence (figures, dates, policy names)',
    'Develop both the case for and the limitations of fiscal expansion',
    'Conclude with a clear, conditional judgement'
  ]
};
