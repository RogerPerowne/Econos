/* ============================================================
   ECONOS – Taxation (Edexcel A 4.5.2)
   8 cards · interactive-first build from the mockup set.

   Why governments tax + the two tax families, progressive vs
   proportional vs regressive (interactive burden chart), how direct
   and indirect taxes transmit, incentives to work/save/invest, the
   Laffer curve (interactive), distribution + output + employment
   (interactive Lorenz redistribution), prices/trade/FDI, and the
   whole story.

   New engine interactives:
     - taxBurdenTypesInteractive  (Card 2 — avg tax rate vs income, 3 views)
     - lafferCurveInteractive     (Card 5 — rising side → peak → falling side)
     - taxRedistributionLorenz    (Card 6 — Lorenz before tax → after tax & transfers)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'taxation',
  topicNum: '4.5.2',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Taxation',
  estTime: '22 min',
  goal: 'Classify taxes, trace how direct and indirect taxes transmit through households and firms, and evaluate their effects on incentives, revenues, distribution, output, prices, trade and FDI',

  intro: {
    heroKey: 'heroTaxation',
    summary: 'Taxation does two jobs at once: it raises the revenue that funds the state, and it changes incentives across the whole economy. This deck starts with why governments tax and the two big tax families — direct taxes on income and profits, indirect taxes on spending. It then classifies taxes by how the burden changes with income (progressive, proportional, regressive), traces the household and firm transmission chains, and examines the effect on incentives to work, save and invest. The Laffer curve links the tax rate to the tax base and shows why revenue does not rise forever. The deck closes with the macro effects — income distribution, real output and employment, the price level, the trade balance and FDI flows — and a whole-story framework for weighing them in an answer.',
    doInThis: 'Eight cards: why governments tax and the two tax families; progressive vs proportional vs regressive (interactive); how direct and indirect taxes work; incentives to work, save and invest; tax revenues and the Laffer curve (interactive); distribution, real output and employment (interactive); prices, the trade balance and FDI flows; and the whole story.',
    outcomes: [
      'Distinguish direct and indirect taxes and give examples',
      'Classify taxes as progressive, proportional or regressive',
      'Trace how tax changes transmit through households and firms',
      'Analyse effects on incentives to work, save and invest',
      'Use the Laffer curve to link tax rates, the tax base and revenue',
      'Evaluate effects on distribution, output, employment, prices, trade and FDI'
    ],
    tip: 'Always classify the tax first — direct or indirect, and progressive or regressive — before tracing its effects.',
    stages: [
      { num: 1, name: 'Learn',  sub: '8 cards \xb7 22 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – Taxation — the big picture ============
       Pattern: Tile grid + direct-vs-indirect pair + transmission flow */
    {
      id: 'tax-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Taxation — the big picture',
      lede: 'Taxation raises government revenue and changes behaviour across the economy. Strong answers understand both purposes.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Taxes do two jobs — they <strong>raise revenue</strong> and they <strong>change incentives</strong>.' },

      causesFirst: true,
      causesLabel: 'WHY GOVERNMENTS TAX',
      causesEmoji: '\u{1F3DB}️',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '\u{1F3E5}', head: 'Fund public services', body: 'Provide health, education, defence and infrastructure.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Redistribute income', body: 'Reduce inequality through transfers and taxes.' },
        { tone: 'green', icon: '\u{1F3AF}', head: 'Influence behaviour', body: 'Encourage or discourage certain choices.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Manage the macroeconomy', body: 'Stabilise demand, control inflation and support growth.' }
      ],

      pairLabel: 'Direct vs indirect — the two big tax families',
      pairEmoji: '\u{1F3F7}️',
      left: {
        tone: 'purple', icon: '\u{1F464}', label: 'Direct taxes',
        text: 'Paid on income, profits or wealth — for example income tax and corporation tax.'
      },
      right: {
        tone: 'blue', icon: '\u{1F9FA}', label: 'Indirect taxes',
        text: 'Paid on spending — for example VAT and excise duties.'
      },

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue',   icon: '\u{1F4B7}', title: 'Tax change', sub: 'Change in tax rates or bases.' },
        { tone: 'amber',  icon: '\u{1F3E0}', title: 'Disposable income and firm costs', sub: 'Incomes fall (or rise) after tax; costs change.' },
        { tone: 'purple', icon: '\u{1F6D2}', title: 'Spending, work and investment decisions', sub: 'Choices about consumption, labour supply and investment.' },
        { tone: 'green',  icon: '\u{1F4CA}', title: 'Output, employment, prices and inequality', sub: 'Broader outcomes for the economy and distribution.' }
      ],

      causes2Label: 'THREE QUESTIONS TO ASK',
      causes2Emoji: '❓',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'purple', icon: '⚖️', head: 'Equity — who pays?', body: 'How fairly is the tax burden shared across individuals and groups?' },
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Efficiency — what happens to incentives?', body: 'Does the tax distort choices and reduce efficiency?' },
        { tone: 'green',  icon: '\u{1F4B7}', head: 'Revenue — how much is raised?', body: 'How much revenue is raised, and how stable is it?' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Taxation is judged not only by the money it raises, but also by who bears the burden and how it changes behaviour.' },

      conclusion: { title: 'Big idea', text: 'Taxation is both a funding tool and a behaviour-shaping policy tool.' },
      examEdge: 'Start by identifying the type of tax, then trace its effects on incentives, revenues and distribution.'
    },

    /* ============ CARD 2 – Progressive, proportional, regressive ============
       Pattern: Interactive multi-state diagram (3-view burden chart) */
    {
      id: 'tax-burden-types',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Progressive, proportional and regressive taxes',
      lede: 'Taxes differ by how the burden changes as income rises.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Progressive taxes take a larger <strong>percentage</strong> from higher incomes — regressive taxes do the opposite.' },

      interactiveDiagram: {
        svgKey: 'taxBurdenTypesInteractive',
        label: 'HOW THE BURDEN CHANGES — step through it',
        emoji: '\u{1F4CA}',
        layers: ['tbt-1', 'tbt-2', 'tbt-3'],
        views: [
          {
            label: 'Progressive', show: ['tbt-1'], tone: 'green',
            head: 'The average tax rate rises with income.',
            body: 'Higher earners pay a larger <strong>percentage</strong> of their income in tax — not just a larger amount. UK income tax, with its graduated bands, works this way.',
            analysis: 'Watch the average rate, not the cash amount: a high earner always pays more pounds. A tax is only progressive when the <strong>share</strong> of income taken rises too.'
          },
          {
            label: 'Proportional', show: ['tbt-2'], tone: 'blue',
            head: 'The average tax rate is constant.',
            body: 'Everyone pays the same <strong>percentage</strong> of their income, whatever they earn — a flat-rate tax.',
            analysis: 'Proportional taxes are simple and neutral across incomes, but they do nothing to narrow inequality — the post-tax income distribution keeps the same shape.'
          },
          {
            label: 'Regressive', show: ['tbt-3'], tone: 'purple',
            head: 'The average tax rate falls as income rises.',
            body: 'Lower earners pay a larger <strong>share</strong> of their income. Many indirect taxes work this way in practice — a fixed duty is a bigger slice of a small income.',
            analysis: 'A tax can be regressive even though the rich pay more cash. VAT at one rate takes a larger share of low incomes because poorer households spend more of what they earn.'
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'COMMON EXAMPLES',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green',  icon: '\u{1F45B}', head: 'Income tax', body: 'Usually progressive (with graduated rates).' },
        { tone: 'blue',   icon: '\u{1F4B7}', head: 'Flat-rate tax', body: 'Proportional — the same rate for everyone.' },
        { tone: 'purple', icon: '\u{1F6D2}', head: 'VAT / indirect taxes', body: 'Often regressive in incidence (take a larger share from lower incomes).' }
      ],

      causes2Label: 'WHY IT MATTERS',
      causes2Emoji: '❓',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '⚖️', head: 'Equity', body: 'Affects how fairly the tax system shares the burden of taxation.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Incentives', body: 'Influences work effort, saving, investment and other choices.' },
        { tone: 'amber', icon: '\u{1F4B7}', head: 'Revenue stability', body: 'Shapes the level and reliability of government tax revenues.' }
      ],

      conclusion: { title: 'Big idea', text: 'These categories depend on how the average tax burden changes with income.' },
      examEdge: 'Define the term clearly and apply it to actual taxes — don’t assume all direct taxes are progressive.'
    },

    /* ============ CARD 3 – Direct and indirect taxes — how they work ============
       Pattern: Side-by-side pair + twin flow chains + comparison table */
    {
      id: 'tax-how-they-work',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Direct and indirect taxes — how they work',
      lede: 'Direct taxes mainly affect incomes and profits. Indirect taxes mainly affect spending, prices and costs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Always trace the tax through to <strong>households, firms and the wider economy</strong>.' },

      pairFirst: true,
      pairLabel: 'TWO TRANSMISSION ROUTES',
      pairEmoji: '\u{1F500}',
      left: {
        tone: 'green', icon: '\u{1F464}', label: 'Direct taxes on households and firms',
        points: [
          'Paid on income or profits.',
          'Taken from earnings or profits.',
          'Reduces disposable income or retained profit.'
        ]
      },
      right: {
        tone: 'blue', icon: '\u{1F9FA}', label: 'Indirect taxes on goods and services',
        points: [
          'Paid when spending on goods and services.',
          'Added to prices or costs.',
          'Affects spending decisions, prices and competitiveness.'
        ]
      },

      flowTitle: 'THE DIRECT-TAX CHAIN',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '\u{1F464}', title: 'Direct tax', sub: 'Income tax, corporation tax.' },
        { tone: 'green', icon: '\u{1F45B}', title: 'Disposable income / retained profit', sub: 'Lower take-home pay or profits.' },
        { tone: 'green', icon: '\u{1F4C8}', title: 'Spending, work, investment', sub: 'Lower spending and saving; incentives to work and invest may change.' }
      ],

      flow2Title: 'THE INDIRECT-TAX CHAIN',
      flow2Emoji: '\u{1F517}',
      flow2Sep: '→',
      flow2: [
        { tone: 'blue', icon: '\u{1F9FA}', title: 'Indirect tax', sub: 'VAT, excise duties, sales taxes.' },
        { tone: 'blue', icon: '\u{1F3F7}️', title: 'Higher price or higher cost', sub: 'Prices rise for consumers; costs rise for firms.' },
        { tone: 'blue', icon: '\u{1F4B9}', title: 'Demand, inflation, competitiveness', sub: 'Lower demand; possible inflation; affects firm competitiveness.' }
      ],

      causesFirst: true,
      causesLabel: 'WHO REALLY PAYS?',
      causesEmoji: '❓',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'amber', icon: '\u{1F465}', head: 'Incidence matters', body: 'The statutory (legal) payer is not always the final bearer.' },
        { tone: 'amber', icon: '\u{1F464}', head: 'Consumers', body: 'Often bear indirect taxes through higher prices.' },
        { tone: 'amber', icon: '\u{1F3ED}', head: 'Firms', body: 'May bear some taxes as lower profits or higher costs.' },
        { tone: 'amber', icon: '\u{1F477}', head: 'Workers', body: 'May bear some taxes as lower wages or fewer jobs.' }
      ],

      comparisonTable: {
        title: 'Quick comparison',
        emoji: '\u{1F4CA}',
        columns: ['\u{1F464} Direct taxes', '\u{1F9FA} Indirect taxes'],
        columnTones: ['green', 'blue'],
        rows: [
          { label: '⚖️ Equity',          values: ['Can be progressive (e.g. income tax).', 'Often regressive (same rate for all spending).'] },
          { label: '\u{1F4C8} Inflation effect',   values: ['Little direct effect on prices.', 'Raises prices and can add to inflation.'] },
          { label: '\u{1F441}️ Visibility',         values: ['Less visible; paid periodically.', 'More visible; paid at the point of purchase.'] },
          { label: '\u{1F4CB} Examples',           values: ['Income tax, corporation tax.', 'VAT, excise duties, sales tax.'] }
        ]
      },

      conclusion: { title: 'Big idea', text: 'Direct and indirect taxes work through different channels, but both alter incentives and macro outcomes.' },
      examEdge: 'Distinguish the tax type first, then trace the mechanism step by step.'
    },

    /* ============ CARD 4 – Incentives to work, save and invest ============
       Pattern: Tile taxonomy + balance trio + magnitude grid */
    {
      id: 'tax-incentives',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Incentives to work, save and invest',
      lede: 'Tax changes influence labour supply, entrepreneurship, saving and investment — but the effects depend on context and elasticity.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Tax effects on incentives are real — but rarely <strong>mechanical or one-directional</strong>.' },

      causesFirst: true,
      causesLabel: 'WORK INCENTIVES',
      causesEmoji: '\u{1F464}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '⇄', head: 'Substitution effect', body: 'Higher taxes lower the reward from each extra hour of work, so people may supply less.' },
        { tone: 'green', icon: '\u{1F45B}', head: 'Income effect', body: 'Lower after-tax income may encourage more work to maintain living standards.' },
        { tone: 'green', icon: '\u{1F465}', head: 'Participation decisions', body: 'Taxes affect choices to enter or leave the workforce, especially for second earners.' }
      ],

      causes2Label: 'FIRMS AND ENTERPRISE',
      causes2Emoji: '\u{1F3E2}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'purple', icon: '\u{1F3E2}', head: 'Corporation tax', body: 'Higher rates reduce after-tax returns to firms.' },
        { tone: 'purple', icon: '\u{1F437}', head: 'Retained profits', body: 'Lower profits mean fewer funds to reinvest and grow.' },
        { tone: 'purple', icon: '\u{1F6A9}', head: 'Risk-taking', body: 'Taxes can reduce the rewards from risky projects.' },
        { tone: 'purple', icon: '\u{1F4A1}', head: 'Entrepreneurship', body: 'Lower expected returns may discourage new business start-ups.' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Investment', body: 'Weaker incentives can lead to less capital investment.' }
      ],

      /* The balance lever renders via the flowChart slot, which sits
         between causes2 (FIRMS AND ENTERPRISE) and causes3 (WHAT CHANGES
         THE SIZE OF THE EFFECT) — matching the mockup's section order —
         and carries its own genSecLabel title + caption. */
      flowChart: {
        svgKey: 'taxBalanceLever',
        label: 'A BALANCE TO STRIKE',
        emoji: '⚖️',
        caption: 'Policy makers adjust the mix to balance equity, efficiency and the funding of public services.'
      },

      causes3Label: 'WHAT CHANGES THE SIZE OF THE EFFECT',
      causes3Emoji: '\u{1F39A}️',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'amber', icon: '\u{1F4CF}', head: 'Elasticity of labour supply', body: 'If supply is inelastic, effects are smaller; if elastic, bigger.' },
        { tone: 'amber', icon: '\u{1F500}', head: 'Alternatives', body: 'More ways to earn or invest elsewhere increase responses.' },
        { tone: 'amber', icon: '\u{1F91D}', head: 'Benefit system', body: 'High withdrawal rates can discourage extra work.' },
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Confidence', body: 'Economic outlook can amplify or offset tax changes.' },
        { tone: 'amber', icon: '\u{1F552}', head: 'Long-run vs short-run', body: 'Some effects are stronger over time than initially.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'High-quality public services funded by tax can also support productivity and participation.' },

      conclusion: { title: 'Big idea', text: 'Taxes can weaken incentives at the margin, but the total effect depends on design and context.' },
      examEdge: 'Use substitution and income effects carefully, and avoid claiming all higher taxes always reduce work.'
    },

    /* ============ CARD 5 – Tax revenues and the Laffer curve ============
       Pattern: Interactive multi-state diagram (stepped Laffer) */
    {
      id: 'tax-laffer',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Tax revenues and the Laffer curve',
      lede: 'At very low tax rates, raising rates can increase revenue — but beyond some point higher rates may weaken the tax base.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The Laffer curve is a <strong>possibility argument</strong> — not proof that any current tax rate is too high.' },

      interactiveDiagram: {
        svgKey: 'lafferCurveInteractive',
        label: 'THE LAFFER CURVE — step through it',
        emoji: '\u{1F4C9}',
        layers: ['lcv-1', 'lcv-2', 'lcv-3'],
        views: [
          {
            label: 'The rising side', show: ['lcv-1'], tone: 'green',
            head: 'At low rates, raising the rate raises revenue.',
            body: 'At a tax rate of zero, revenue is zero. Raising the rate from a low level (t₁) collects a bigger slice of a barely-changed tax base, so revenue climbs.',
            analysis: 'On this side the <strong>rate effect dominates</strong>: people keep working and firms keep investing, so a higher rate simply collects more from the same activity.'
          },
          {
            label: 'The peak', show: ['lcv-2'], tone: 'green',
            head: 'A revenue-maximising rate t* exists.',
            body: 'Somewhere between 0% and 100% sits the revenue-maximising rate t*. Beyond it, further rises in the rate <strong>reduce</strong> total revenue.',
            analysis: 'The peak is a logical certainty but an empirical mystery — economists disagree sharply about where t* sits, and it differs across taxes, countries and time periods.'
          },
          {
            label: 'The falling side', show: ['lcv-3'], tone: 'rose',
            head: 'Beyond t*, the base shrinks faster than the rate rises.',
            body: 'At t₂ the rate is higher than at t₁ — but revenue is the <strong>same</strong>. Avoidance, evasion, reduced work and relocation shrink the base. At 100%, nobody earns taxable income at all.',
            analysis: 'This is the <strong>base effect dominating</strong>: each extra percentage point of tax destroys more taxable activity than it captures. The same revenue can be raised at two very different rates.'
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'WHY REVENUE MAY FALL',
      causesEmoji: '\u{1F4C9}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '\u{1F6E1}️', head: 'Avoidance', body: 'People and firms use loopholes and planning to legally reduce tax.' },
        { tone: 'purple', icon: '\u{1F575}️', head: 'Evasion', body: 'People and firms hide income or underreport.' },
        { tone: 'purple', icon: '\u{1F464}', head: 'Reduced work / investment', body: 'Higher taxes reduce incentives to work, save and invest.' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Relocation', body: 'Businesses and high-earners move activity or residence to lower-tax locations.' }
      ],

      causes2Label: 'WHY IT IS CONTROVERSIAL',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F3AF}', head: 'Hard to locate the peak', body: 'The revenue-maximising rate is unobservable and uncertain.' },
        { tone: 'blue', icon: '\u{1F4CA}', head: 'Different taxes, different curves', body: 'Income tax, VAT and corporation tax each have their own curve.' },
        { tone: 'blue', icon: '\u{1F552}', head: 'Short-run vs long-run', body: 'Effects on the tax base and behaviour take time to materialise.' },
        { tone: 'blue', icon: '⚖️', head: 'Revenue-maximising is not welfare-maximising', body: 'It may ignore equity, efficiency and other policy goals.' }
      ],

      flowTitle: 'HOW TO USE IT IN EXAMS',
      flowEmoji: '✍️',
      flowSep: '→',
      flow: [
        { tone: 'amber', icon: '\u{1F4B7}', title: 'Tax rate', sub: 'Identify the change in the tax rate.' },
        { tone: 'amber', icon: '\u{1F465}', title: 'Tax base', sub: 'Predict how the tax base may change.' },
        { tone: 'amber', icon: '\u{1F5E3}️', title: 'Behaviour', sub: 'Explain the key behavioural responses.' },
        { tone: 'amber', icon: '\u{1F4B0}', title: 'Revenue', sub: 'Judge how revenue is likely to change overall.' }
      ],

      conclusion: { title: 'Big idea', text: 'The tax rate and the tax base move together, so revenue does not rise forever.' },
      examEdge: 'Never assume the economy is already on the wrong side of the curve without evidence.'
    },

    /* ============ CARD 6 – Distribution, real output and employment ============
       Pattern: Interactive Lorenz + twin chains + who-gains + evaluation */
    {
      id: 'tax-distribution-output',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Distribution, real output and employment',
      lede: 'Tax changes affect how income is shared and also influence aggregate demand, costs, output and jobs.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A tax policy can improve equality but still involve <strong>efficiency trade-offs</strong>.' },

      interactiveDiagram: {
        svgKey: 'taxRedistributionLorenz',
        label: 'INCOME DISTRIBUTION — before and after tax',
        emoji: '\u{1F4D0}',
        layers: ['trl-1', 'trl-2'],
        views: [
          {
            label: 'Before tax', show: ['trl-1'], tone: 'purple',
            head: 'Market incomes are unequal.',
            body: 'The Lorenz curve plots the cumulative share of income against the cumulative share of the population. Before tax it bows deeply away from the 45° line of equality.',
            analysis: 'The further the curve sits below the diagonal, the more unequal the distribution. Market incomes alone — before any tax or transfer — produce the most bowed curve.'
          },
          {
            label: 'After tax & transfers', show: ['trl-2'], tone: 'green',
            head: 'Progressive taxes and transfers pull the curve in.',
            body: 'Progressive direct taxes take a larger share from higher earners, and the revenue funds benefits and services supporting lower incomes — the curve moves <strong>toward</strong> equality.',
            analysis: 'The gap between the two curves is the redistribution achieved by the tax-and-transfer system. Indirect taxes work the other way: their regressive incidence pushes the curve back out.'
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'DISTRIBUTION',
      causesEmoji: '\u{1F465}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '⚖️', head: 'Progressive direct taxes', body: 'Higher earners pay a higher share, so post-tax inequality falls.' },
        { tone: 'green', icon: '\u{1F9FA}', head: 'Indirect taxes are often regressive', body: 'A larger share of low incomes is taken by VAT and excise duties.' },
        { tone: 'green', icon: '\u{1F91D}', head: 'Redistribution through transfers', body: 'Tax revenues fund benefits and services, supporting lower incomes.' }
      ],

      flowTitle: 'LOWER TAXES CAN BOOST OUTPUT AND JOBS',
      flowEmoji: '\u{1F4C8}',
      flowSep: '→',
      flow: [
        { tone: 'green', icon: '\u{1F3F7}️', title: 'Lower tax rates', sub: 'Direct or indirect rates cut.' },
        { tone: 'green', icon: '\u{1F465}', title: 'Higher disposable income / profits', sub: 'Households and firms keep more.' },
        { tone: 'green', icon: '\u{1F4C8}', title: '↑ AD or ↓ costs', sub: '(↑ AS)' },
        { tone: 'green', icon: '\u{1F4BC}', title: '↑ Output and jobs', sub: 'Real output and employment rise.' }
      ],

      flow2Title: 'HIGHER TAXES CAN REDUCE OUTPUT AND JOBS',
      flow2Emoji: '\u{1F4C9}',
      flow2Sep: '→',
      flow2: [
        { tone: 'purple', icon: '\u{1F3F7}️', title: 'Higher tax rates', sub: 'Direct or indirect rates raised.' },
        { tone: 'purple', icon: '\u{1F4C9}', title: 'Lower consumption, profits or labour demand', sub: 'Households and firms cut back.' },
        { tone: 'purple', icon: '\u{1F4C9}', title: '↓ AD or ↑ costs', sub: '(↓ AS)' },
        { tone: 'purple', icon: '\u{1F4BC}', title: '↓ Output and jobs', sub: 'Real output and employment fall.' }
      ],

      causes2Label: 'WHO GAINS, WHO LOSES?',
      causes2Emoji: '⚖️',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F465}', head: 'Households', body: 'Lower-income households gain from progressive taxes and transfers; some lose from higher prices.' },
        { tone: 'blue', icon: '\u{1F3ED}', head: 'Firms', body: 'Lower taxes raise profits and investment incentives; higher taxes increase costs and reduce returns.' },
        { tone: 'blue', icon: '\u{1F464}', head: 'Workers', body: 'Lower taxes can raise take-home pay and jobs; higher taxes can reduce labour demand or real wages.' },
        { tone: 'blue', icon: '\u{1F3DB}️', head: 'Government', body: 'Higher taxes raise revenue but may reduce the tax base; lower taxes cut revenue but may boost growth.' }
      ],

      causes3Label: 'EVALUATION',
      causes3Emoji: '❓',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'amber', icon: '\u{1F39A}️', head: 'Spare capacity', body: 'If spare capacity exists, tax cuts can lift output more.' },
        { tone: 'amber', icon: '⚖️', head: 'Which tax changes?', body: 'Cuts in income tax vs corporation tax vs indirect taxes have different effects.' },
        { tone: 'amber', icon: '\u{1F4CA}', head: 'Magnitude', body: 'Small changes may have little effect; large changes risk big distortions.' },
        { tone: 'amber', icon: '\u{1F3AF}', head: 'Confidence', body: 'Evidence is uncertain; effects vary across time and countries.' },
        { tone: 'amber', icon: '\u{1F4B7}', head: 'How revenue is spent', body: 'Productive public spending can boost output and jobs.' }
      ],

      conclusion: { title: 'Big idea', text: 'Taxation shapes both the size of the economy and how the economy’s income is distributed.' },
      examEdge: 'Separate the distribution effect from the output effect, then evaluate the trade-off.'
    },

    /* ============ CARD 7 – Prices, trade balance and FDI flows ============
       Pattern: Price tiles + trade-balance flow + FDI grid + macro dashboard */
    {
      id: 'tax-prices-trade-fdi',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Prices, trade balance and FDI flows',
      lede: 'Taxes can influence inflation, competitiveness, external balance and international investment decisions.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Tax policy reaches far beyond revenue — it can reshape <strong>costs, prices and global location choices</strong>.' },

      causesFirst: true,
      causesLabel: 'THE PRICE LEVEL',
      causesEmoji: '\u{1F4C8}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'green', icon: '\u{1F6D2}', head: 'Indirect taxes raise consumer prices', body: 'VAT and excise duties add to the price of goods and services paid by consumers.' },
        { tone: 'green', icon: '\u{1F3F7}️', head: 'Higher costs flow through the economy', body: 'Firms pass on tax costs in prices, lifting the overall price level.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Creates cost-push (or tax-push) inflation', body: 'Higher prices are driven by costs, not demand — reducing real purchasing power.' }
      ],

      flowTitle: 'TRADE BALANCE',
      flowEmoji: '\u{1F517}',
      flowSep: '→',
      flow: [
        { tone: 'purple', icon: '\u{1F4B7}', title: 'Tax change', sub: 'Change in tax rates (e.g. VAT, duties, corporate tax).' },
        { tone: 'purple', icon: '\u{1F3E0}', title: 'Domestic effects', sub: 'Prices, disposable income and production costs change.' },
        { tone: 'purple', icon: '\u{1F310}', title: 'Imports & exports', sub: 'Higher prices → imports fall; lower prices → exports rise.' },
        { tone: 'purple', icon: '⚖️', title: 'Trade balance', sub: 'Net effect on exports minus imports.' }
      ],

      /* FDI flows renders as the elegant magnet-and-map hub via the
         flowChart slot — which sits AFTER `flow` (TRADE BALANCE), giving
         the mockup's order: PRICE → TRADE → FDI → DASHBOARD. The
         "tax is only one factor" caution is baked into the visual. */
      flowChart: {
        svgKey: 'taxFdiMagnetHub',
        label: 'FDI FLOWS — what attracts investment',
        emoji: '\u{1F4CD}'
      },

      /* Dashboard stays in the causes3 slot (renders AFTER flowChart) and
         goes 2×2 (cols 2, 4 items → clean 2×2, no ragged-row promotion). */
      causes3Label: 'THE BIG MACRO DASHBOARD',
      causes3Emoji: '\u{1F39B}️',
      causes3Style: 'icon-top',
      causes3Cols: 2,
      causes3: [
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Inflation', body: 'Indirect taxes can raise prices and push up inflation. <strong>Pressure ↑</strong>' },
        { tone: 'blue',   icon: '\u{1F3C6}', head: 'Competitiveness', body: 'Lower taxes on production or labour can boost price competitiveness. <strong>Strength ↑</strong>' },
        { tone: 'green',  icon: '⚖️', head: 'Trade balance', body: 'Taxes affect import demand, export prices and the external balance. <strong>Impact ±</strong>' },
        { tone: 'amber',  icon: '\u{1F310}', head: 'FDI', body: 'Tax policy influences FDI, alongside many other location factors. <strong>Influence ±</strong>' }
      ],

      conclusion: { title: 'Big idea', text: 'Tax changes can affect a country’s external position both through demand and through competitiveness.' },
      examEdge: 'Do not overstate tax as the only driver of FDI or trade — context matters.'
    },

    /* ============ CARD 8 – The whole story ============
       Pattern: Full chain + scorecard + how-to-write + evaluation checklist */
    {
      id: 'tax-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The whole story',
      lede: 'Strong answers classify the tax, trace the channels, and then weigh the effects on revenue, incentives, distribution and macro performance.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'There is no best tax in the abstract — the right judgement depends on <strong>aims and context</strong>.' },

      flowTitle: 'THE FULL CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F4B7}', title: 'Tax type and rate', sub: 'Direct or indirect? Level and structure (progressive, flat, regressive).' },
        { tone: 'green', icon: '\u{1F465}', title: 'Households and firms', sub: 'Who is affected? Income, spending, saving and investment decisions.' },
        { tone: 'green', icon: '⚖️', title: 'Incentives and prices', sub: 'Changes in incentives to work, save, invest and consume; impacts on prices.' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Revenue and distribution', sub: 'Government revenue and how the burden falls across groups.' },
        { tone: 'green', icon: '\u{1F310}', title: 'Output, employment, trade and FDI', sub: 'Effects on growth, jobs, competitiveness and capital flows.' }
      ],

      causesFirst: true,
      causesLabel: 'THE SCORECARD',
      causesEmoji: '\u{1F4CB}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '⚖️', head: 'Equity', body: 'Does it distribute the tax burden fairly across individuals and groups?' },
        { tone: 'purple', icon: '\u{1F4C8}', head: 'Efficiency', body: 'Does it minimise distortions to behaviour and use resources well?' },
        { tone: 'purple', icon: '\u{1F4B7}', head: 'Revenue', body: 'How much revenue does it raise, and how stable is it?' },
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Growth', body: 'What are the effects on real output and employment?' },
        { tone: 'purple', icon: '\u{1F3F7}️', head: 'Inflation', body: 'What are the effects on the price level and cost pressures?' },
        { tone: 'purple', icon: '\u{1F310}', head: 'Competitiveness', body: 'What are the effects on trade performance and FDI attractiveness?' }
      ],

      causes2Label: 'HOW TO WRITE IT',
      causes2Emoji: '✍️',
      causes2Style: 'numbered',
      causes2Cols: 4,
      causes2: [
        { tone: 'blue', icon: '\u{1F50D}', head: 'Define the tax', body: 'Name and classify it, state the rate and key features.' },
        { tone: 'blue', icon: '⚙️', head: 'Explain the mechanism', body: 'Trace the transmission chain step by step.' },
        { tone: 'blue', icon: '\u{1F3AF}', head: 'Apply to the variable asked about', body: 'Use the model to predict the impact.' },
        { tone: 'blue', icon: '⚖️', head: 'Evaluate using context', body: 'Weigh the pros and cons based on the context.' }
      ],

      causes3Label: 'EVALUATION CHECKLIST',
      causes3Emoji: '\u{1F9ED}',
      causes3Style: 'icon-top',
      causes3Cols: 3,
      causes3: [
        { tone: 'amber', icon: '\u{1F4C8}', head: 'Elasticity', body: 'How responsive are people and firms to the tax?' },
        { tone: 'amber', icon: '\u{1F552}', head: 'Time period', body: 'Are the effects short run, long run, or both?' },
        { tone: 'amber', icon: '\u{1F465}', head: 'Tax incidence', body: 'Who ultimately bears the burden and why?' },
        { tone: 'amber', icon: '\u{1F4B0}', head: 'What happens to the revenue?', body: 'Does it rise, fall, or remain uncertain?' },
        { tone: 'amber', icon: '\u{1F310}', head: 'International context', body: 'How do openness, mobility and global competition matter?' }
      ],

      conclusion: { title: 'Big idea', text: 'Taxation is a trade-off story about funding the state while shaping incentives and macro outcomes.' },
      examEdge: 'The highest-level answers balance theory with context and clear judgement.'
    }
  ]
};
