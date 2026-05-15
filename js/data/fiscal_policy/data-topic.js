/* ============================================================
   ECONOS — content data for fiscal_policy
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.6
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'fiscal_policy',
  topicNum: '2.6',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Fiscal Policy',
  estTime: '9-11 minutes',
  goal: 'Lock in tax, spending, deficits, debt, and the crowding-out debate',

  intro: {
    heroKey: 'heroFiscal',
    summary: "Fiscal policy is government's most powerful direct lever over AD. But its effectiveness is contested — multiplier size, crowding out, time lags, and debt sustainability all matter. These cards cover the full picture.",
    doInThis: 'Recap types of taxes, government spending, deficits vs debt, automatic stabilisers, discretionary policy, and the crowding-out debate — plus a 25-mark essay scaffold on fiscal policy effectiveness.',
    outcomes: [
      'Distinguish direct and indirect taxes with examples and effects',
      'Explain automatic stabilisers and discretionary fiscal policy',
      'Evaluate crowding out and the limits of fiscal expansion'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Recap and lock in the gems',    state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 — Framing: what is fiscal policy? ----- */
    {
      id: 'fiscal-framing',
      template: 'framing',
      diagramKey: 'adAsDemandPull',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Fiscal policy: government\'s lever over AD',
      lede: 'Fiscal policy uses government spending (G) and taxation (T) to influence aggregate demand, income distribution, and the long-run supply capacity of the economy.',
      branches: [
        { tone: 'green',  label: 'Expansionary fiscal policy',  sub: '↑G or ↓T → shifts AD right. Boosts output and employment. Risk: inflationary if at full capacity. Used in recessions and downturns.' },
        { tone: 'rose',   label: 'Contractionary fiscal policy', sub: '↓G or ↑T → shifts AD left. Reduces inflationary pressure. Risk: output falls, unemployment rises. Used when economy overheats or debt is unsustainable.' },
        { tone: 'blue',   label: 'Structural vs cyclical use',   sub: '<strong>Cyclical:</strong> stabilise the business cycle (counter-cyclical). <strong>Structural:</strong> long-run reform of incentives and supply capacity via tax design and spending on education/infrastructure.' }
      ],
      examEdge: {
        title: 'Fiscal policy is the only direct demand lever',
        text: 'Unlike monetary policy (which works via interest rates and has transmission lags), government spending <strong>directly adds to AD</strong>. When government hires workers or contracts firms, the first-round effect is immediate. This is the theoretical advantage of fiscal over monetary policy in deep recessions.'
      },
      keyTakeaway: {
        title: 'Who controls fiscal policy',
        text: 'In the UK: <strong>HM Treasury and the Chancellor</strong> set fiscal policy. The <strong>Office for Budget Responsibility (OBR)</strong> provides independent forecasts and judges compliance with fiscal rules. The Bank of England sets monetary policy independently — the separation matters for credibility.'
      }
    },

    /* ----- CARD 2 — Types of taxation ----- */
    {
      id: 'taxation',
      template: 'paired',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Types of taxation',
      lede: 'Taxes differ in how they fall, how they affect incentives, and their distributional consequences. The tax structure is as important as the tax level.',
      pairs: [
        {
          tone: 'blue',
          label: 'Direct taxes',
          drivers: [
            'Levied directly on income or wealth',
            'Income Tax (graduated: 20%, 40%, 45% in UK)',
            'Corporation Tax (currently 25% for profits >£250k)',
            'Capital Gains Tax, Inheritance Tax',
            'Generally progressive — higher earners pay higher rates'
          ],
          example: '<strong>Income tax:</strong> UK personal allowance £12,570 (2024). Basic rate 20% on £12,570-£50,270. Higher rate 40% above £50,270. Each £1 of income above threshold taxed at the marginal rate — affects work incentives at the margin.'
        },
        {
          tone: 'amber',
          label: 'Indirect taxes',
          drivers: [
            'Levied on spending rather than income',
            'VAT (UK standard rate 20% on most goods/services)',
            'Excise duties: fuel, alcohol, tobacco',
            'Generally regressive — hit lower-income households harder as share of income',
            'Can be used as Pigouvian taxes to correct negative externalities'
          ],
          example: '<strong>VAT 2011:</strong> raised from 17.5% to 20% — raised ~£13bn revenue but was regressive. Lower-income households spend ~100% of income (no saving buffer). <strong>Carbon tax (Road Fuel Duty):</strong> ~57.95p per litre — highest fuel duty in Europe. Both revenue-raising AND externality-correcting.'
        }
      ],
      examEdge: {
        title: 'Progressive vs regressive — know the definitions',
        text: '<strong>Progressive:</strong> average tax rate rises with income (income tax). <strong>Regressive:</strong> average tax rate falls with income (VAT — lower-income households pay a higher share). <strong>Proportional:</strong> flat rate regardless of income. Examiners test whether students understand that a tax can be flat-rate but still regressive — VAT is technically flat but regressive in impact.'
      },
      policy: {
        title: 'Tax design trade-offs',
        text: 'Direct taxes raise more from the wealthy but may reduce work incentives (Laffer curve). Indirect taxes are less avoidable but are regressive and distort consumption patterns. The UK tax base is broadly split 50/50 direct/indirect — a deliberate balance of these competing considerations.'
      }
    },

    /* ----- CARD 3 — Government spending ----- */
    {
      id: 'gov-spending',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Government spending: composition and effects',
      lede: 'Government spending (~42% of UK GDP) affects both AD and long-run supply. The composition matters as much as the level.',
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Current spending',
          text: '<strong>Day-to-day running costs:</strong> public sector wages, NHS supplies, benefit payments, debt interest. These add to AD immediately but don\'t build long-run capacity. UK current spending ~36% of GDP.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Capital spending (investment)',
          text: '<strong>Infrastructure and assets:</strong> schools, hospitals, roads, rail, broadband. Adds to AD now AND shifts LRAS right over time. Higher multiplier than current spending (builds capacity). UK capital spending ~2-3% of GDP — relatively low by G7 standards.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Transfer payments',
          text: '<strong>Welfare, pensions, tax credits — do NOT directly add to GDP</strong> (no direct output is produced). They redistribute income — raising consumption of recipients (high MPC) but funded by taxation (lowers others\' spending). Net effect on AD depends on relative MPCs.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Debt interest',
          text: 'UK pays ~£100bn+/year in debt interest on ~£2.7trn national debt (2024). This is a mandatory spend that crowds out other priorities. As debt rises, the debt interest bill rises — creating a fiscal squeeze on discretionary spending.'
        }
      ],
      examEdge: {
        title: 'Transfer payments don\'t add to GDP',
        text: 'This is one of the most commonly confused points: <strong>welfare benefits are NOT government purchases of output</strong>. They redistribute existing income. GDP = production of output. Welfare spending shifts income from taxpayers to recipients — affecting distribution and consumption, not directly national income.'
      },
      connection: {
        title: 'Composition matters for the multiplier',
        text: 'Capital spending on domestic infrastructure has a higher multiplier than tax cuts to high earners. Transfer payments to low-income households have a higher multiplier than corporate tax cuts. Fiscal policy effectiveness depends critically on WHERE the money goes, not just HOW MUCH is spent.'
      }
    },

    /* ----- CARD 4 — Deficit, debt, and fiscal rules ----- */
    {
      id: 'deficit-debt',
      template: 'cause',
      tone: 'blue',
      bannerLabel: 'Fiscal position: deficits and debt',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'Deficit vs debt: the key distinction',
      lede: 'The most commonly confused pair in economics. The deficit is a flow; the debt is a stock. Getting this right is a minimum requirement for any fiscal policy answer.',
      diagramCaption: 'Deficit = annual gap between G and T. Debt = accumulated stock of past deficits.',
      causes: {
        title: 'What drives the fiscal deficit',
        items: [
          '<strong>Cyclical component:</strong> automatic stabilisers (lower tax, higher welfare in recession). Disappears as economy recovers.',
          '<strong>Structural component:</strong> underlying imbalance even at full employment — requires active fiscal tightening to close.',
          '<strong>Discretionary changes:</strong> government policy decisions to change tax rates or spending levels.',
          '<strong>Interest on debt:</strong> rising debt → rising debt interest → growing structural deficit. A self-reinforcing fiscal dynamic.'
        ]
      },
      hallmarks: {
        title: 'UK fiscal position (2024 approximate)',
        items: [
          'National debt: ~\xa3 2.7 trillion (≈ 100% of GDP)',
          'Annual deficit (PSNB): ~\xa3100-120bn (3-4% of GDP)',
          'Debt interest: ~\xa3100bn p.a. — the largest single spending growth area',
          'OBR fiscal rules: debt falling as % of GDP by Year 5 of forecast'
        ]
      },
      ukExamples: {
        title: 'Historical context',
        text: '<strong>Pre-2008:</strong> UK debt ~35-40% of GDP, deficit manageable. <strong>2008-09:</strong> deficit surged to 10% of GDP as recession hit automatic stabilisers + bank bailout. <strong>2010-19:</strong> austerity reduced deficit slowly to ~2% by 2019. <strong>2020:</strong> COVID deficit hit 15% of GDP — highest peacetime deficit in modern history. <strong>Legacy:</strong> debt at 100% of GDP with high debt service costs constraining future policy.'
      },
      examEdge: {
        title: 'Cyclical vs structural deficit matters for policy',
        text: 'If the deficit is cyclical, it closes automatically as the economy recovers — no austerity needed. If structural, active fiscal tightening is required. The 2010 UK debate was whether the post-crash deficit was cyclical (Labour argument) or structural (Coalition argument). Getting this diagnosis right determines the appropriate policy response.'
      },
      policy: {
        title: 'Fiscal rules and credibility',
        text: 'UK fiscal rules (currently: PSNB and debt targets) serve as credibility anchors — like the 2% inflation target for monetary policy. Breaking rules damages market confidence, raises gilt yields, and increases debt costs. But rigid rules can force pro-cyclical austerity (tightening in recession) — worsening the very problem they\'re meant to address.'
      }
    },

    /* ----- CARD 5 — Automatic stabilisers ----- */
    {
      id: 'auto-stabilisers',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Automatic stabilisers: the first line of defence',
      lede: "Before any government decision is made, fiscal policy automatically cushions the business cycle. Understanding how is the foundation of macro stabilisation theory.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'In a recession',
          text: 'Tax revenues fall automatically (less income → less income tax, less profit → less corporation tax, less spending → less VAT). Welfare spending rises automatically (more unemployment → more Jobseekers Allowance, Universal Credit). Both reduce the net fall in disposable income — cushioning the AD collapse.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'In a boom',
          text: 'Tax revenues rise automatically as incomes and profits grow. Welfare spending falls as employment rises. Both reduce the net rise in disposable income — preventing the boom from becoming inflationary overheating. A natural brake on the upswing.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Why they are \'automatic\'',
          text: 'No government decision is required. No time lag in Parliament or budget-setting. They respond instantly to changing economic conditions. This is their key advantage over discretionary fiscal policy — which can take 12-24 months to be legislated and implemented.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Limits of automatic stabilisers',
          text: 'They cushion but don\'t eliminate cycles. In a severe recession (2008-09), automatic stabilisers were insufficient — discretionary stimulus was needed. Their size depends on the welfare state scale: large in Scandinavian countries, smaller in the US. And they create the cyclical deficit — which must eventually be reduced.'
        }
      ],
      examEdge: {
        title: 'Always start with automatic stabilisers',
        text: 'In any fiscal policy answer, A* students <strong>mention automatic stabilisers first</strong>: \'The first fiscal response is automatic — tax revenues fall and welfare spending rises, cushioning the AD collapse. Only when automatic stabilisers are insufficient does the case for discretionary fiscal stimulus arise.\' This structure signals systemic thinking.'
      },
      connection: {
        title: 'The discretionary follow-through',
        text: 'After automatic stabilisers, if the recession is deep enough, discretionary fiscal policy (stimulus packages, specific spending commitments) is deployed. The Keynesian case is strongest when: (1) automatic stabilisers are overwhelmed, (2) monetary policy is constrained (ZLB), (3) multiplier is large (spare capacity, high domestic content).'
      }
    },

    /* ----- CARD 6 — Crowding out ----- */
    {
      id: 'crowding-out',
      template: 'paired',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Crowding out: the Classical critique of fiscal policy',
      lede: 'If fiscal stimulus just replaces private spending rather than adding to total demand, it is ineffective. The crowding out debate is the central controversy in macro policy.',
      pairs: [
        {
          tone: 'rose',
          label: 'Financial crowding out (Classical view)',
          drivers: [
            'Government borrowing → increased demand for loanable funds',
            'Interest rates rise to equilibrate loanable funds market',
            'Higher rates → private investment falls (crowding out)',
            'If complete crowding out: ΔG = −ΔI → no net AD change',
            'Strongest when economy is at full capacity and financial markets are tight'
          ],
          example: '<strong>1970s UK:</strong> large fiscal deficits drove real interest rates up, crowding out private investment. This contributed to the stagflation debate and the monetarist critique of Keynesian policy.'
        },
        {
          tone: 'green',
          label: 'Keynesian counter: partial crowding out',
          drivers: [
            'In recession, private savings rise (paradox of thrift)',
            'Excess saving → loanable funds supply rises → interest rates don\'t rise much',
            'Investment may be interest-inelastic in recession (confidence, not cost, matters)',
            'Zero lower bound on rates: no further rate rise possible',
            'Net effect: positive — government spending adds more than private falls'
          ],
          example: '<strong>2009-12 QE:</strong> BoE\'s quantitative easing offset crowding out by injecting new money into financial system, keeping gilt yields low. Combined fiscal-monetary coordination can minimise crowding out.'
        }
      ],
      examEdge: {
        title: 'The context determines the crowding-out risk',
        text: 'A* answers make crowding out <strong>conditional</strong>: \'In a recession with the ZLB and excess saving, crowding out is minimal — the Keynesian case for stimulus holds. At full capacity with tight financial markets, crowding out may be near-complete — the Classical critique dominates.\' Both are right in different contexts. Saying so is the mark-winning move.'
      },
      policy: {
        title: 'Resource crowding out',
        text: 'A second type: if G uses up real resources (labour, materials), it physically displaces private production — not through interest rates but through resource competition. More relevant at full employment. Another reason fiscal stimulus works better with spare capacity.'
      }
    },

    /* ----- CARD 7 — Strengths and limitations of fiscal policy ----- */
    {
      id: 'fiscal-evaluation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Evaluating fiscal policy',
      lede: 'Every fiscal policy question ends with evaluation. These are the standard strengths and limitations — structured as a balanced assessment.',
      mechanismsTitle: 'Strengths: when fiscal policy works well',
      mechanisms: [
        {
          icon: '🎯',
          title: 'Targeted and direct',
          text: 'Government can direct spending at specific sectors, regions, or groups — unlike monetary policy (which hits the whole economy via interest rates). Infrastructure investment in depressed regions, employment schemes for long-term unemployed.'
        },
        {
          icon: '💪',
          title: 'Effective at the ZLB',
          text: 'When interest rates cannot fall further (the zero lower bound), monetary policy loses traction. Fiscal policy remains effective — and is the primary tool. The 2008-10 global recession demonstrated this clearly.'
        },
        {
          icon: '🔄',
          title: 'Automatic stabilisers act fast',
          text: 'The automatic component requires no legislative delay. Tax-welfare automatic stabilisers respond within weeks to changing conditions — far faster than the 12-24 month lag of monetary policy transmission.'
        }
      ],
      examples: {
        title: 'Limitations to evaluate',
        items: [
          { period: 'Time lags', text: 'Discretionary fiscal policy requires: recognition lag (identifying the problem) + decision lag (parliamentary process) + implementation lag (spending/contracting). Total: 12-24 months. The recession may have passed.' },
          { period: 'Crowding out risk', text: 'At or near full capacity, fiscal expansion raises interest rates and crowds out private investment. The multiplier falls — potentially to zero. Timing matters critically.' },
          { period: 'Debt sustainability', text: 'Repeated deficits compound debt. Rising debt-GDP ratio raises debt interest costs and reduces fiscal space for future shocks. Markets may respond: gilt yield rises, crowding out worsens. Structural deficits are unsustainable.' },
          { period: 'Political economy', text: 'Politicians prefer spending increases to tax rises (expansion) and prefer tax cuts to spending cuts (contraction). This creates a bias toward deficits over the cycle — ratcheting up debt even in good times. Independent fiscal councils (OBR) partly address this.' }
        ]
      },
      examEdge: {
        title: 'The two-sided evaluation template',
        text: "A* fiscal policy evaluation structure: <em>'While fiscal expansion is effective when [conditions: spare capacity, ZLB, high-MPC targeting], its effectiveness is limited when [conditions: full capacity, crowding out, debt unsustainability]. The net assessment depends on [multiplier size, debt position, monetary coordination].'</em> Conditional conclusions always outperform absolute ones."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'fiscal-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      question: 'Evaluate the view that fiscal policy is the most effective tool for managing aggregate demand. [25 marks]',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define fiscal policy and aggregate demand. State the central debate and signal your evaluative approach (conditional judgement).',
          hint: 'Fiscal policy = G and T. AD = C + I + G + (X-M). State that fiscal policy directly shifts AD but effectiveness depends on multiplier, crowding out, debt position, and whether monetary policy can operate.',
          model: 'Fiscal policy refers to the use of government spending (G) and taxation (T) to influence macroeconomic outcomes, principally aggregate demand (AD = C + I + G + X − M). Expansionary fiscal policy (↑G or ↓T) directly raises G — a component of AD — and creates multiplier effects as income circulates through the economy. Contractionary policy does the reverse, reducing AD to control inflation. Whether fiscal policy is the most effective demand-management tool depends on a range of contextual factors: the size of the fiscal multiplier, the degree of crowding out, the economy\'s position in the cycle, the sustainability of public debt, and the availability and effectiveness of monetary policy alternatives.'
        },
        {
          type: 'analysis',
          label: 'Analysis — the case for fiscal policy',
          prompt: 'Explain the direct AD impact and the multiplier mechanism. Argue why fiscal policy is uniquely powerful at the zero lower bound (ZLB).',
          hint: 'G directly adds to AD (unlike monetary policy, which works indirectly via rates). Multiplier = 1/(1-MPC) — large with high MPC and spare capacity. At ZLB, monetary policy loses traction; fiscal policy remains effective (2009 stimulus packages). Automatic stabilisers act instantly.',
          model: 'The primary strength of fiscal policy is its direct effect on aggregate demand. When the government increases spending on infrastructure, public services, or welfare, G rises immediately, shifting AD to the right without dependence on private sector behaviour. This contrasts with monetary policy, which influences AD indirectly via interest rates → investment → income — a transmission chain with 12–18 month lags and weak traction when business confidence is depressed. The fiscal multiplier amplifies this initial effect: an initial rise in G of £1 raises income, which raises consumption at the marginal propensity to consume (MPC), which raises income again — the total AD impact is £1/(1-MPC). With a high MPC (low-income targeted spending) and spare productive capacity, the multiplier can exceed 1.5. The 2008–09 global financial crisis illustrated fiscal policy\'s relative advantage when monetary policy hit the zero lower bound: the Obama stimulus package (ARRA, ~$830bn) and UK temporary VAT cut provided demand support that interest rate cuts could no longer deliver.'
        },
        {
          type: 'counter',
          label: 'Counter-argument — limitations and monetary policy comparison',
          prompt: 'Explain crowding out, time lags, and debt sustainability constraints. Compare with monetary policy\'s speed and independence advantages.',
          hint: 'Time lags: recognition + decision + implementation = 12-24 months. Crowding out: ↑borrowing → ↑interest rates → ↓private investment. Debt: UK debt ~100% of GDP (2024) — constrained fiscal space. Monetary policy: faster (rates set monthly by MPC), independent of politics, credible.',
          model: 'The effectiveness of fiscal policy is significantly constrained in practice. Discretionary fiscal expansion requires: a recognition lag (identifying the shock), a decision lag (parliamentary debate and budget process), and an implementation lag (contracting, spending, and distributing tax changes) — total delays of 12–24 months. In a fast-moving economic cycle, policy may take effect after the recession has already passed, risking pro-cyclical stimulus. Financial crowding out presents a further constraint: when the government borrows to finance deficits, the demand for loanable funds rises, pushing up interest rates and reducing private investment. In classical analysis, complete crowding out leaves net AD unchanged. Even partial crowding out reduces the multiplier. The UK\'s current debt position (~£2.7 trillion, ~100% of GDP) limits fiscal space further — large deficits may alarm bond markets, raising gilt yields and worsening the very crowding out the stimulus was meant to offset. By comparison, monetary policy can be adjusted monthly by the independent Bank of England MPC, operates with greater speed and political credibility, and can be fine-tuned continuously without the legislative process that constrains discretionary fiscal changes.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — context determines effectiveness',
          prompt: 'Evaluate when fiscal policy is relatively more vs less effective. Consider automatic stabilisers, multiplier conditions, and the role of fiscal-monetary coordination.',
          hint: 'Fiscal > monetary when: at ZLB, deep recession, high MPC targeting, large spare capacity. Monetary > fiscal when: modest downturn, functional transmission mechanism, debt constraints binding. Automatic stabilisers always work — but discretionary fiscal may not. Coordination (fiscal + QE) was key 2009-12.',
          model: 'The relative effectiveness of fiscal versus monetary policy is fundamentally contingent rather than absolute. The Keynesian case for fiscal policy is strongest when: (1) the economy is at or approaching the zero lower bound on nominal interest rates, rendering conventional monetary policy unable to stimulate; (2) there is substantial spare capacity (negative output gap), meaning the multiplier is large (crowding out of real resources is low); (3) government spending is targeted at high-MPC groups (low-income households, unemployed) rather than tax cuts for high earners or corporations; and (4) automatic stabilisers are insufficient for the scale of the shock. Conversely, fiscal policy is relatively less effective when the economy operates near full capacity (multiplier small, crowding out high), debt is already elevated (market confidence constraints), or when the shock is supply-side in nature (fiscal demand stimulus is ineffective against supply constraints or stagflation). The 2009–12 period demonstrated that the two tools are complementary: the Bank of England\'s quantitative easing programme (purchasing £375bn of gilts) suppressed gilt yields, preventing the fiscal deficit from crowding out private borrowing — in effect, monetary policy enabled fiscal policy to work. This fiscal-monetary coordination represents the most effective demand-management framework.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Make a conditional judgement. Under what conditions is fiscal policy the most effective tool? Is monetary policy ever better?',
          hint: 'Conditional conclusion: fiscal policy is the most effective tool specifically when monetary policy is constrained (ZLB), spare capacity is large, and spending is well-targeted. Otherwise, monetary policy\'s speed and independence make it preferable for routine stabilisation.',
          model: 'Fiscal policy is not universally the most effective demand-management tool, but it is uniquely powerful in specific conditions: deep recessions where monetary policy is constrained by the zero lower bound, where spare capacity is substantial, and where government spending can be directed at high-multiplier uses. In these conditions — as in 2008–09 — fiscal expansion is necessary and effective where monetary policy alone is insufficient. In normal cyclical conditions, however, monetary policy\'s speed, political independence, and continuous adjustability make it the preferred primary instrument for fine-tuning AD. The automatic stabilisers embedded in fiscal policy — tax and welfare responses to the cycle — provide a first line of defence that requires no decision lag. Overall, the most effective framework combines monetary policy for routine stabilisation with fiscal policy held in reserve for crisis conditions, supported by independent fiscal oversight (OBR) to maintain long-run debt sustainability. Fiscal policy is the most powerful tool in the toolkit — but not one that should be deployed routinely without careful attention to its lags, costs, and debt implications.'
        }
      ]
    }
  ]
};
