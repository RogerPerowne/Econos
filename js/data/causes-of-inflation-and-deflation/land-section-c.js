/* ============================================================
   ECONOS – Land It · Section C data for inflation
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Causes of Inflation & Deflation',
  sectionLabel: 'Section C – Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the policies that the UK government and the Bank of England could use to reduce the rate of inflation.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define inflation briefly and identify whether the causes are demand-pull, cost-push, or both.',
      'Cover monetary policy (Bank Rate, QE/QT) with an AD/AS diagram showing AD shifting left.',
      'Cover fiscal policy &mdash; higher taxes or lower government spending &mdash; and its effect on AD.',
      'Include supply-side policy: addressing structural causes via productivity, investment, and skills.',
      'Apply UK evidence: the BoE&#39;s 14 consecutive rate rises from 0.10% to 5.25% during 2021&ndash;23.',
      'Evaluate each policy: lags, trade-offs, political and supply-side limits.',
      'Reach a clear, supported judgement &mdash; which policy is most effective and under what conditions?'
    ],

    modelAnswer:
      '<p>Inflation in the UK is measured by the Consumer Prices Index, with the Bank of England mandated by HM Treasury to keep CPI at a 2% target. When inflation deviates significantly from target &mdash; as it did in 2022, peaking at 11.1% &mdash; the Bank and government have a range of demand-side and supply-side tools available, though the effectiveness of each depends on the underlying cause of inflation.</p>'
    + '<p>The Bank of England&#39;s primary tool is the Bank Rate. Raising the Bank Rate increases the cost of borrowing and the return on saving, dampening consumer spending and business investment. This shifts aggregate demand to the left, reducing upward pressure on the price level along the SRAS curve. A higher Bank Rate also typically attracts capital inflows, appreciating sterling and reducing imported inflation &mdash; an especially important channel in an open economy like the UK. The Bank&#39;s fourteen consecutive rate rises from 0.10% to 5.25% during 2021&ndash;23 illustrate this in action, contributing to CPI falling back towards target. The Bank can also use quantitative tightening to reduce the broad money supply, further restraining aggregate demand.</p>'
    + '<p>Fiscal policy offers a complementary demand-side tool. A contractionary fiscal stance &mdash; higher taxes or lower government spending &mdash; reduces aggregate demand directly. Sustained high taxes and real-terms spending restraint in 2023 supported the Bank&#39;s monetary tightening. However, fiscal policy faces political constraints: tax rises and spending cuts are unpopular, and parliamentary processes make timing difficult. The UK&#39;s elevated debt-to-GDP ratio (above 100%) also limits scope for active fiscal stabilisation, particularly where debt-servicing costs already crowd out other spending.</p>'
    + '<p>Supply-side policies provide a structural response. Investment in skills, infrastructure and productivity-enhancing reform can shift the LRAS curve to the right, raising the economy&#39;s non-inflationary speed limit and addressing cost-push pressures that demand-side policy cannot reach. For example, sustained investment in domestic energy infrastructure could reduce future vulnerability to global energy shocks, while reform of planning and labour market rules could reduce bottleneck-driven price pressures. However, supply-side reforms work over years, not months, and offer little help in an immediate inflation crisis.</p>'
    + '<p>All three policies face significant constraints. Monetary policy operates with long and variable lags &mdash; the Bank itself estimates 18&ndash;24 months &mdash; meaning rate decisions today target inflation expected several years ahead. Aggressive rate rises risk recession and rising unemployment, raising the question of an acceptable trade-off. Fiscal tightening can deepen any downturn. And supply-side policy, while powerful, is too slow to break an active wage-price spiral.</p>'
    + '<p>In conclusion, no single policy can effectively control inflation in all circumstances. Monetary policy is best suited to demand-driven inflation when expectations remain anchored, and is rightly the UK&#39;s first line of defence. Fiscal policy provides essential support but is politically and fiscally constrained. Supply-side reform addresses structural causes over the long run but cannot solve a current crisis. The most effective approach therefore combines all three, deployed with credibility and based on a clear diagnosis of the inflation&#39;s cause &mdash; with the Bank of England leading on cyclical control, supported by complementary fiscal restraint and a steady programme of structural reform.</p>'
  },

  strongAnswers: [
    'Define key terms precisely up front',
    'Apply at least one accurate AD/AS diagram',
    'Use specific UK evidence (rates, dates, figures)',
    'Develop both sides before reaching judgement',
    'Conclude with a clear, supported decision'
  ]
};
