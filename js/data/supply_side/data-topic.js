/* ============================================================
   ECONOS – content data for supply_side
   7 cards · revision-tight · exam-edge gems flagged
   Edexcel Theme 2.7
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'supply_side',
  topicNum: '6.3',
  theme: 'Theme 2 \xb7 The National and Global Economy',
  title: 'Supply-Side Policies',
  estTime: '9-11 minutes',
  goal: 'Master market-based and interventionist supply-side tools and their trade-offs',

  intro: {
    heroKey: 'heroAggSupply',
    summary: "Supply-side policies aim to shift LRAS right – raising potential output without inflation. But the toolkit divides sharply between market-based (Thatcherite) and interventionist (Keynesian/social-democratic) approaches. Both have merits and limitations.",
    doInThis: 'Recap market-based supply-side policies, interventionist alternatives, UK examples, productivity debate, and evaluation framework – plus a 25-mark essay scaffold on supply-side policy effectiveness.',
    outcomes: [
      'Categorise supply-side policies as market-based or interventionist',
      'Evaluate effectiveness using UK productivity data',
      'Apply supply-side arguments to inflation-unemployment trade-offs'
    ],
    tip: 'These cards are revision, not first-time learning. They cue what you already know and flag the gems that lift answers from B to A*.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards',                state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked' }
    ]
  },

  cards: [

    /* ----- CARD 1 – Framing: what supply-side policies do ----- */
    {
      id: 'ss-framing',
      template: 'framing',
      diagramKey: 'supplyPolicyDiagram',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Supply-side policies: shifting LRAS right',
      lede: 'Supply-side policies increase the productive capacity of the economy – shifting LRAS right, reducing the NAIRU, and enabling non-inflationary growth.',
      branches: [
        { tone: 'green',  label: 'Market-based approach',      sub: 'Remove barriers to market efficiency. Deregulation, privatisation, union reform, lower taxes, freer trade. Let markets allocate resources. The Thatcherite tradition.' },
        { tone: 'blue',   label: 'Interventionist approach',   sub: 'Government investment in market failures. Education, R&D, infrastructure, industrial policy, active labour market programmes. Justified where markets underprovide.' },
        { tone: 'amber',  label: 'The shared goal',            sub: 'Both approaches aim to shift LRAS right – but differ on HOW. Market-based: reduce state and improve incentives. Interventionist: build capacity and correct market failures.' }
      ],
      examEdge: {
        title: 'Supply-side ≠ just deregulation',
        text: 'A* answers note that both market-based AND interventionist policies are supply-side policies – they both aim to raise potential output. The debate is ideological, not definitional. Presenting a one-sided account (all supply-side = cuts and deregulation) signals incomplete understanding.'
      },
      keyTakeaway: {
        title: 'The LRAS vs SRAS distinction',
        text: 'Supply-side policies operate on <strong>LRAS</strong> – they take years to materialise. A tax cut that reduces business costs might shift SRAS right in the short run, but supply-side reform (education, infrastructure) shifts LRAS right over decades. The long time lag is the key evaluation point.'
      }
    },

    /* ----- CARD 2 – Market-based supply-side policies ----- */
    {
      id: 'market-based',
      template: 'cause',
      tone: 'green',
      bannerLabel: 'Market-based supply-side policies',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Market-based supply-side policies',
      lede: 'Based on the view that government intervention distorts markets and reduces efficiency. Remove the barriers and let the market allocate resources optimally.',
      diagramCaption: 'Market-based policies: remove barriers → LRAS shifts right → non-inflationary growth.',
      causes: {
        title: 'The market-based toolkit',
        items: [
          '<strong>Labour market reform:</strong> reduce trade union power (closed shop banned, strike ballots required), weaken employment protection legislation to increase hiring/firing flexibility.',
          '<strong>Tax incentives:</strong> lower income tax → increase work incentives (income vs leisure trade-off); lower corporation tax → stimulate investment; reduce benefit traps by allowing earnings disregard.',
          '<strong>Deregulation:</strong> remove regulations that impose costs on firms without corresponding benefits. Financial deregulation (Big Bang 1986), bus deregulation, utility privatisation.',
          '<strong>Privatisation:</strong> transfer state-owned industries to private sector → efficiency gains from profit motive, competition, and capital market discipline.',
          '<strong>Competition policy:</strong> prevent monopoly, promote market contestability. CMA (Competition and Markets Authority) investigates mergers and market abuse.'
        ]
      },
      hallmarks: {
        title: 'UK market-based reform examples',
        items: [
          'Thatcher 1979-90: union legislation, privatisation (BT, BA, BG, water), income tax cuts (83% to 40% top rate)',
          'Big Bang 1986: financial deregulation → London as global financial centre',
          'Universal Credit: combine benefits to reduce unemployment traps',
          'Corporation tax: cut from 28% (2010) to 19% (2017), risen to 25% (2023)'
        ]
      },
      ukExamples: {
        title: 'Did UK market-based reforms work?',
        text: '<strong>1980s productivity surge:</strong> UK productivity growth accelerated relative to Europe after 1979 reforms – suggesting market-based policies raised efficiency. <strong>But:</strong> UK productivity has lagged since 2008 despite further deregulation. The market-based toolkit alone has not solved the UK productivity puzzle – suggesting limits to the approach.'
      },
      examEdge: {
        title: 'Laffer curve: the case for tax cuts',
        text: 'The Laffer curve argues that above a certain tax rate, reducing taxes can <strong>increase</strong> tax revenue – by stimulating work, investment, and reducing avoidance. Top rate cuts (83%→40%, 50%→45%) partly justified by Laffer logic. But empirical evidence for Laffer effects at UK tax levels is weak. A* answers cite the curve but question whether the UK is on the downward slope.'
      },
      policy: {
        title: 'Evaluation',
        text: 'Market-based policies improve efficiency where markets function well. But where markets fail – education, R&D, infrastructure, health – market-based approaches may not raise potential output. The market vs government debate is ultimately about where market failure is most severe.'
      }
    },

    /* ----- CARD 3 – Interventionist supply-side policies ----- */
    {
      id: 'interventionist',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Interventionist supply-side policies',
      lede: 'Where markets fail to provide, government must invest directly. Human capital, infrastructure, R&D, and industrial policy are the core interventionist supply-side tools.',
      mechanisms: [
        {
          num: '1',
          tone: 'blue',
          title: 'Education and training',
          text: '<strong>The most powerful long-run supply-side tool.</strong> Human capital raises labour productivity and reduces structural unemployment. Returns to education ~8-10% per additional year (private returns). Positive externalities justify public provision. Time lag: 10-20 years to full effect.'
        },
        {
          num: '2',
          tone: 'green',
          title: 'Infrastructure investment',
          text: 'Roads, rail, broadband, energy grid. Reduces transport and transaction costs for all firms. High social returns – estimates of 1.5-2× multiplier effect on long-run growth. HS2, Crossrail, 5G rollout are UK examples. Often below optimal provision due to private sector underinvestment.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Research and development (R&D)',
          text: 'Government funds basic research with wide spillovers that private firms cannot capture (positive externalities). UK R&D target: 2.4% of GDP by 2027. UK Research and Innovation (UKRI) coordinates funding. Historical returns from publicly funded research (internet, GPS, vaccines) are enormous.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Active labour market policies',
          text: 'Job matching schemes (Universal Jobmatch), retraining programmes (Skills Bootcamps, Restart Scheme), apprenticeships (Apprenticeship Levy). Reduce frictional and structural unemployment – shifting the NAIRU lower. Direct government intervention to improve labour market matching.'
        }
      ],
      examEdge: {
        title: 'Interventionist ≠ Keynesian demand management',
        text: "Common confusion: interventionist supply-side policies (education, infrastructure) are supply-side – they shift LRAS, not AD. They are <em>not</em> the same as fiscal stimulus. A school-building programme is a supply-side policy (builds human capital), not just a demand-side injection. It raises <strong>both</strong> AD now AND LRAS over time."
      },
      connection: {
        title: 'The German model',
        text: 'Germany combines market discipline with state-coordinated vocational training (Berufsausbildung), apprenticeship systems, and investment in Mittelstand SMEs. Result: higher productivity and lower structural unemployment than the UK. Often cited as evidence that interventionist supply-side can outperform market-based alone.'
      }
    },

    /* ----- CARD 4 – UK productivity puzzle ----- */
    {
      id: 'productivity-puzzle',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'The UK productivity puzzle',
      lede: "Since 2008, UK productivity growth has dramatically slowed. This is the most important supply-side failure in recent UK economic history – and the organising framework for all supply-side policy debates.",
      steps: [
        {
          key: 'base',
          label: 'What is the productivity puzzle?',
          text: 'Before 2008, UK labour productivity grew ~2% per year. Since 2008, growth has averaged ~0.3% per year – the worst sustained productivity performance since the Industrial Revolution. This is the <strong>\'productivity puzzle\'</strong>. The puzzle: despite near-full employment and ongoing supply-side reforms, output per worker has stagnated for 15+ years. The LRAS has barely shifted right despite apparent policy effort.'
        },
        {
          key: 'extension',
          label: 'Possible causes',
          text: 'Economists debate the causes: (1) <strong>Zombie firms:</strong> low interest rates kept unproductive firms alive – misallocation of capital. (2) <strong>Skills mismatch:</strong> workers in wrong jobs post-crisis – structural mismatch unremedied. (3) <strong>Weak investment:</strong> UK business investment lowest in G7 – capital shallowness limits productivity. (4) <strong>Brexit:</strong> post-2016 uncertainty reduced investment; post-2021 trade barriers reduced market size and specialisation gains. (5) <strong>Measurement:</strong> digital economy productivity may be understated in official statistics.'
        },
        {
          key: 'shift',
          label: 'Policy responses and their limits',
          text: 'The UK\'s response includes: corporation tax cuts to incentivise investment; apprenticeship levy; R&D tax credits; full expensing (100% capital allowance). Limited success so far. The interventionist critique: the UK underinvests in education (skills gaps), infrastructure (poor rail, regional inequality), and R&D (below OECD average). <strong>AI and automation</strong> may be the next productivity wave – but its benefits depend on complementary investment in skills and infrastructure.'
        }
      ],
      examEdge: {
        title: 'The productivity puzzle is exam gold',
        text: "The UK productivity puzzle is a ready-made evaluation tool for any supply-side question: <em>'Despite supply-side reforms since the 1980s, UK productivity growth has stagnated at ~0.3%/year since 2008. This suggests the market-based toolkit alone is insufficient – and may indicate underinvestment in education, infrastructure, and R&D as the deeper supply-side failure.'</em>"
      }
    },

    /* ----- CARD 5 – Comparing market-based vs interventionist ----- */
    {
      id: 'ss-comparison',
      template: 'paired',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Market-based vs interventionist: the evaluation',
      lede: 'The policy debate in one table. Each approach has theoretical and empirical strengths – the A* answer deploys both sides conditionally.',
      pairs: [
        {
          tone: 'green',
          label: 'Case for market-based approach',
          drivers: [
            'Markets allocate resources more efficiently than governments',
            'Avoids government failure (wrong decisions, bureaucracy, rent-seeking)',
            'Tax cuts improve incentives directly – work, invest, innovate',
            'Deregulation reduces compliance costs for all firms',
            'Competition drives efficiency gains throughout supply chain'
          ],
          example: '<strong>UK privatisation record:</strong> BT, BA, BG were significantly more efficient post-privatisation by most measures. Financial services deregulation (Big Bang) made London a global hub. Evidence that markets can outperform state ownership in competitive industries.'
        },
        {
          tone: 'blue',
          label: 'Case for interventionist approach',
          drivers: [
            'Market failures in education, R&D, infrastructure justify government provision',
            'Positive externalities → underinvestment by private sector without subsidy',
            'Industrial policy can target strategic sectors (green tech, AI)',
            'Active labour market policies address structural unemployment markets cannot clear',
            'Evidence: Germany, South Korea outperform UK using coordinated supply-side'
          ],
          example: '<strong>South Korea\'s development:</strong> state-directed industrial policy (chaebol), massive education investment, and government-business coordination drove productivity from poverty to high income in 30 years – incompatible with pure market-based model.'
        }
      ],
      examEdge: {
        title: 'The conditional conclusion',
        text: 'The A* conclusion: <em>\'Market-based supply-side policies are effective where markets function well – privatising competitive industries, reducing regulatory burden. Interventionist policies are necessary where market failure prevails – education, R&D, infrastructure. The optimal policy mix depends on where the binding constraint on productivity lies.\'</em> Conditional, not absolute.'
      },
      policy: {
        title: 'The 2024 UK context',
        text: 'The Starmer government\'s National Wealth Fund and Great British Energy represent a shift toward interventionist supply-side – industrial policy, green investment, infrastructure. Whether this resolves the productivity puzzle will be the defining policy test of the decade.'
      }
    },

    /* ----- CARD 6 – Supply-side and the NAIRU ----- */
    {
      id: 'ss-nairu',
      template: 'mechanisms',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Supply-side policy and the NAIRU',
      lede: "The deepest value of supply-side policy: it can reduce the NAIRU – enabling lower unemployment WITHOUT higher inflation. This is the theoretical resolution of the growth-inflation trade-off.",
      mechanisms: [
        {
          num: '1',
          tone: 'green',
          title: 'Education and retraining → lower structural unemployment',
          text: 'Skills mismatch is the primary driver of structural unemployment (and the structural component of the NAIRU). Investing in retraining and vocational education reduces skills gaps → structural unemployment falls → NAIRU falls → economy can sustain lower unemployment without inflationary pressure.'
        },
        {
          num: '2',
          tone: 'blue',
          title: 'Labour market reform → lower frictional unemployment',
          text: 'Better job matching (Universal Jobmatch, Skills Bootcamps), relocation support, childcare provision all reduce the time workers spend between jobs. Lower frictional unemployment → NAIRU falls. These policies target the search friction, not the skills gap.'
        },
        {
          num: '3',
          tone: 'amber',
          title: 'Greater labour flexibility → lower real-wage unemployment',
          text: 'Zero-hours contracts, reduced minimum wage growth, weaker union power → wages more responsive to market conditions → real-wage unemployment falls. Controversial: gains in flexibility come at cost of worker security and income stability.'
        },
        {
          num: '4',
          tone: 'rose',
          title: 'Productivity growth → wage rises without inflation',
          text: 'If productivity rises at the same rate as wages, unit labour costs are unchanged → no cost-push inflation. Supply-side reform that raises productivity allows real wages to rise without triggering inflation – the most benign form of growth. This is why productivity is the central long-run supply-side target.'
        }
      ],
      examEdge: {
        title: 'The long-run solution to inflation-unemployment trade-off',
        text: "The NAIRU framing is the A* analytical move for any trade-off question: <em>'In the short run, lower unemployment risks higher inflation via the Phillips curve. But supply-side policies that reduce the NAIRU can shift the LRPC left – enabling permanently lower unemployment at stable inflation. This is the long-run resolution of the trade-off.'</em>"
      },
      connection: {
        title: 'The time horizon matters',
        text: 'Supply-side policies shift the NAIRU, but with long lags. Education takes 15-20 years; infrastructure 5-10 years; retraining 2-3 years. In the short run, the trade-off still binds. The policy implication: invest in supply-side early, use demand management in the meantime.'
      }
    },

    /* ----- CARD 7 – Evaluating supply-side policies ----- */
    {
      id: 'ss-evaluation',
      template: 'deflation',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Evaluating supply-side policies',
      lede: "Supply-side policies are powerful in theory but difficult in practice. The evaluation framework below applies to any specific supply-side policy question.",
      mechanismsTitle: 'The key evaluation dimensions',
      mechanisms: [
        {
          icon: '⏳',
          title: 'Time lags – the biggest limitation',
          text: 'Education: 10-20 years. Infrastructure: 5-15 years. R&D: 10-20 years. Labour market reform: 1-5 years. <strong>Supply-side policies cannot address short-run demand shocks</strong>. They are the answer to long-run structural problems, not immediate stabilisation crises.'
        },
        {
          icon: '💰',
          title: 'Upfront costs',
          text: 'Interventionist supply-side requires government spending – adding to the deficit in the short run, with benefits deferred to the long run. Market-based reforms (deregulation, union reform) cost less but may have distributional consequences. Fiscal space constrains the scale of interventionist supply-side.'
        },
        {
          icon: '⚖️',
          title: 'Distributional effects',
          text: 'Market-based reforms (flexible labour markets, lower union power) often worsen income distribution – workers bear more risk. Interventionist supply-side (education, healthcare) is more egalitarian but may be captured by middle-class interests (university expansion vs vocational training).'
        },
        {
          icon: '📊',
          title: 'Evidence base',
          text: 'Strong evidence for returns to education (Mincer equations). Weaker evidence for specific training schemes (mixed evaluation results). Infrastructure multipliers well-documented. R&D returns large but hard to attribute. Laffer curve evidence weak at UK marginal tax rates.'
        }
      ],
      examples: {
        title: 'UK supply-side policy evaluations',
        items: [
          { period: 'Apprenticeship Levy (2017)', text: 'Firms pay 0.5% of payroll into a training fund. Early results mixed: reduced employer-provided training below the levy threshold; increased apprenticeship starts but quality concerns. Redesign announced 2024.' },
          { period: 'R&D Tax Credits', text: 'UK offers generous R&D tax relief. Has increased R&D spending among eligible firms. But predominantly used by large firms; SME uptake lower. UK R&D as % of GDP still below OECD average despite credits.' },
          { period: 'Infrastructure: HS2', text: 'Originally £33bn, now £100bn+. Northern leg cancelled (2023). Raises questions about government\'s ability to deliver infrastructure supply-side efficiently. Cost overruns undermine the economic case.' }
        ]
      },
      examEdge: {
        title: 'The complete supply-side essay structure',
        text: "<em>'Supply-side policies [type + mechanism → LRAS effect]. In theory, this raises potential output [LRAS diagram]. In practice, effectiveness depends on [time lag / cost / market failure severity / implementation]. UK evidence [specific example] suggests [positive or limited effectiveness]. Compared to [alternative policy], supply-side is [more/less] appropriate because [context-specific reason].'</em> Always structure, evidence, context."
      },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
