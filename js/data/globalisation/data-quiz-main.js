/* ============================================================
   ECONOS — Quiz content for: Globalisation
   10 questions covering causes, benefits, costs, MNCs and de-globalisation.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'globalisation_main',
    topicId:  'globalisation_main',
    title:    'Globalisation',
    subtitle: 'Theme 4.1 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the causes and characteristics of globalisation, its benefits and costs for developed and developing economies, multinational corporations, and the de-globalisation trend. Mixed formats targeting the analysis and evaluation marks that separate A from A*.',
    shortNames: {
      'globalisation-framing':    'What is globalisation?',
      'globalisation-causes':     'Causes',
      'globalisation-benefits':   'Benefits',
      'globalisation-costs':      'Costs',
      'globalisation-developing': 'Development impact',
      'de-globalisation':         'De-globalisation',
      'mncs':                     'MNCs'
    },

    questions: [

      /* 1 — MCQ: definition of globalisation */
      { type: 'mcq',
        stem: 'Which statement best defines <strong>globalisation</strong> as an economic concept?',
        opts: [
          'The growing integration of national economies through flows of trade, capital, labour, and information, driven by technology and policy liberalisation',
          'The spread of American consumer culture and the dominance of the US dollar in international transactions',
          'A permanent, irreversible process by which all countries converge to the same level of income per capita',
          'The removal of all government regulations on domestic businesses to promote free competition'
        ],
        ans: 0,
        exp: 'Globalisation is defined by <strong>economic integration</strong> across four dimensions: trade in goods and services, capital flows (FDI and portfolio), migration of labour, and flows of information and technology. It is driven by both technology (containerisation, internet) and deliberate policy choices (WTO, deregulation). It is <em>not</em> simply cultural Americanisation, it is not irreversible (2008 and COVID showed it can contract), and it is distinct from domestic deregulation.'
      },

      /* 2 — Elastic sort: classify causes */
      { type: 'elastic_sort',
        stem: 'Classify each factor as a cause of globalisation driven primarily by <strong>technology</strong> or by <strong>policy liberalisation</strong>.',
        categories: ['tech', 'policy'],
        categoryLabels: ['Technological driver', 'Policy driver'],
        goods: [
          { icon: '🚢', label: 'Shipping containerisation cutting freight costs by ~90% since the 1960s', note: '', ans: 'tech' },
          { icon: '🌐', label: 'GATT/WTO rounds reducing average tariffs from 40% (1947) to 3% (2023)', note: '', ans: 'policy' },
          { icon: '📡', label: 'Internet and mobile technology enabling real-time global supply-chain coordination', note: '', ans: 'tech' },
          { icon: '🏦', label: 'UK Big Bang deregulation (1986) removing capital controls on cross-border flows', note: '', ans: 'policy' },
          { icon: '✈️', label: 'Commercial jet aviation making international business travel routine', note: '', ans: 'tech' },
          { icon: '🇨🇳', label: "China's WTO accession (2001) opening the world's largest labour force to global trade", note: '', ans: 'policy' }
        ],
        exp: '<strong>Technological drivers</strong> reduced the physical and informational costs of trade: containerisation transformed shipping; aviation shrank distances; the internet made global coordination feasible. <strong>Policy drivers</strong> were deliberate choices to allow these technologies to be used across borders: GATT/WTO liberalised goods trade; capital deregulation freed financial flows; China\'s WTO entry added 1.3bn workers to tradeable labour markets. A key A* point: technology <em>enabled</em> globalisation but policy <em>chose</em> it — de-globalisation is therefore also a policy choice, not a technological reversal.'
      },

      /* 3 — Multi-select: benefits of globalisation */
      { type: 'multi_select',
        stem: 'Which of the following are recognised <strong>benefits of globalisation</strong> for developed economies such as the UK?',
        opts: [
          'Access to cheaper imported consumer goods, holding down inflation for two decades (1990-2010)',
          'London\'s role as a global financial hub generating substantial income and tax revenues',
          'Inward FDI creating manufacturing jobs (e.g. Nissan Sunderland, Toyota Derby)',
          'Elimination of structural unemployment in all regions as workers move to higher-productivity sectors',
          'Complete elimination of within-country income inequality as global wages converge',
          'Lower average costs for firms via access to global-scale production and supply chains'
        ],
        correct: [0, 1, 2, 5],
        exp: 'Options A, B, C, and F are genuine benefits for developed economies. The "China price" held down UK inflation; financial globalisation turned London into the world\'s leading financial centre; Japanese FDI into the UK created over 30,000 supply-chain jobs around Nissan Sunderland; and access to global markets enables scale economies. Options D and E are <em>not</em> consequences of globalisation — structural unemployment in deindustrialised regions actually <em>increased</em> as manufacturing moved to lower-cost countries, and within-country inequality in most developed economies has <em>risen</em> even as global (between-country) inequality has fallen.'
      },

      /* 4 — Odd one out: costs of globalisation for developing countries */
      { type: 'odd_one_out',
        stem: 'Three of these are costs of globalisation for <strong>developing countries</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🧠', label: 'Brain drain: skilled workers emigrate, reducing the domestic human capital stock', note: '' },
          { icon: '📉', label: 'Prebisch-Singer hypothesis: commodity export prices fall relative to manufactured imports over time', note: '' },
          { icon: '🏭', label: 'Export-led growth: FDI and manufacturing exports enabling rapid industrialisation and poverty reduction', note: '' },
          { icon: '🦶', label: 'Footloose capital: MNC manufacturing investment can leave when wages rise, creating economic instability', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>export-led growth</strong>. This is a <em>benefit</em> of globalisation for developing countries — the strategy used by South Korea, China, and Vietnam to achieve rapid industrialisation and poverty reduction. The other three are genuine costs: brain drain depletes human capital; the Prebisch-Singer hypothesis describes structural deterioration in developing country terms of trade over time; and footloose capital means MNC investment may depart when wages rise, leaving behind economic disruption without lasting productive capacity.'
      },

      /* 5 — Diagnostic pair: distributional impact */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the impact of globalisation on income inequality."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Priya', badge: 'Candidate A',
            answer: 'The distributional impact of globalisation must be analysed at two levels: <strong>between-country</strong> and <strong>within-country</strong>. Between countries, globalisation has narrowed inequality dramatically — the global Gini coefficient has fallen as China, India, and other emerging economies have converged toward developed-country income levels, lifting 800m+ from absolute poverty. However, <strong>within</strong> developed countries, inequality has <em>risen</em> — because globalisation redistributes income from low-skill workers in import-competing sectors (manufacturing) to capital owners and high-skill workers in export sectors. The Autor et al. "China Shock" study found long-lasting unemployment in US manufacturing regions with no recovery even decades later. Crucially, compensation mechanisms — theoretically possible since winners can compensate losers — have not functioned in practice, generating the political backlash (Brexit, Trump) that now threatens de-globalisation.'
          },
          { name: 'Ben', badge: 'Candidate B',
            answer: 'Globalisation has both increased and decreased inequality depending on who you look at. Rich countries have seen inequality rise because factory jobs have been moved to China and other cheap countries. Poor countries have become less poor overall as globalisation has given them access to world markets and they can sell their goods abroad. Some workers in developing countries earn more now than before. However, not everyone benefits equally and some poor countries especially in Africa have not seen much improvement. Overall whether globalisation increases or decreases inequality depends on the country and the time period you are looking at.'
          }
        ],
        ans: 0,
        exp: '<strong>Priya</strong> gives the stronger answer. She explicitly distinguishes the <em>between-country</em> dimension (where globalisation reduced inequality) from the <em>within-country</em> dimension (where it often raised it) — a conceptual framework examiners reward. She cites the Autor et al. empirical evidence with institutional specificity and connects the distributional failure to the political response. Ben identifies the same broad ideas but at a narrative level without the analytical framework, specific evidence, or causal linkages. Priya would access Level 4; Ben Level 2-3. The key phrase is: "compensation mechanisms have not functioned in practice" — this lifts description into evaluation.'
      },

      /* 6 — Calculation: terms of trade */
      { type: 'calculation',
        context: 'In 2020, a developing country has an export price index of <strong>100</strong> and an import price index of <strong>100</strong>. By 2024, its export price index (mainly commodities) has risen to <strong>115</strong> while its import price index (mainly manufactured goods) has risen to <strong>138</strong>.',
        working: [
          'Formula: Terms of Trade (ToT) = (Export price index ÷ Import price index) × 100',
          '2020: ToT = (100 ÷ 100) × 100 = 100',
          '2024: ToT = (115 ÷ 138) × 100 = 83.3',
          'Change: ToT has fallen from 100 to 83.3 — a deterioration of 16.7 index points'
        ],
        stem: 'What has happened to the developing country\'s <strong>terms of trade</strong> between 2020 and 2024?',
        opts: [
          { ped: 'Deteriorated by approximately 17 index points to 83', typ: 'Export prices rose less than import prices: ToT = (115 ÷ 138) × 100 ≈ 83', rev: 'A fall in ToT means each unit of exports buys fewer imports — real purchasing power falls' },
          { ped: 'Improved to approximately 120', typ: 'Confused direction — subtracted import price rise from export price rise without correct formula', rev: 'Apply the formula: (export price index ÷ import price index) × 100' },
          { ped: 'Unchanged at 100, as both indices rose', typ: 'Ignored the difference in magnitudes of the price changes', rev: 'What matters is the relative change — exports rose 15% but imports rose 38%' },
          { ped: 'Improved to 115, since export prices rose', typ: 'Used only the export price index and ignored import prices', rev: 'ToT compares export prices to import prices — both must be included' }
        ],
        ans: 0,
        exp: 'Terms of Trade = (Export price index ÷ Import price index) × 100 = (115 ÷ 138) × 100 ≈ <strong>83.3</strong>. The ToT has <strong>deteriorated</strong> — the country must now export more commodities to buy the same quantity of manufactured imports. This is consistent with the Prebisch-Singer hypothesis: commodity prices tend to rise less than manufactured goods prices over time, worsening the real terms of exchange for primary exporters. A ToT deterioration reduces real national income even if export volumes and nominal revenues rise.'
      },

      /* 7 — Para fill: MNC costs and benefits */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'The net welfare impact of MNC investment on host countries is contested.',
        para: 'MNCs create [1] jobs and bring [2] transfer that raises local productivity. However, they may repatriate [3] to their home countries, reducing the host country\'s GNI relative to GDP. Transfer [4] allows MNCs to shift profits to low-tax jurisdictions, depriving host governments of [5] revenue. Whether FDI is net beneficial depends on host country [6] to absorb technology spillovers and the strength of domestic [7] to limit exploitation.',
        blanks: [
          { id: 1, opts: ['direct', 'informal', 'seasonal', 'public'], ans: 0 },
          { id: 2, opts: ['technology', 'labour', 'environmental', 'fiscal'], ans: 0 },
          { id: 3, opts: ['profits', 'debts', 'tariffs', 'subsidies'], ans: 0 },
          { id: 4, opts: ['pricing', 'barriers', 'creation', 'diversion'], ans: 0 },
          { id: 5, opts: ['tax', 'export', 'wage', 'tariff'], ans: 0 },
          { id: 6, opts: ['capacity', 'debt', 'tariffs', 'imports'], ans: 0 },
          { id: 7, opts: ['regulation', 'consumption', 'exports', 'currency'], ans: 0 }
        ],
        exp: '(1) <strong>Direct</strong> jobs — employment in the MNC facility itself plus supply-chain linkages. (2) <strong>Technology</strong> transfer — management practices, production techniques, know-how. (3) <strong>Profits</strong> — repatriation reduces GNI even as GDP rises; widens the GDP-GNI gap visible in Ireland and Luxembourg. (4) Transfer <strong>pricing</strong> — manipulating the prices charged in intra-firm transactions to shift taxable profits. (5) <strong>Tax</strong> revenue — Apple\'s 0.005% effective EU tax rate (2016 ruling) illustrates the scale. (6) <strong>Capacity</strong> — absorptive capacity: education, infrastructure, institutional quality. (7) <strong>Regulation</strong> — competition law, environmental rules, labour standards; weak regulation enables a race to the bottom.'
      },

      /* 8 — Data table: de-globalisation indicators */
      { type: 'data_table',
        stem: 'The table shows selected indicators of globalisation and de-globalisation trends.',
        headers: ['Indicator', '2008', '2016', '2023'],
        rows: [
          ['World trade as % of GDP', '61%', '56%', '57%'],
          ['Global FDI flows (US$bn)', '3,000', '1,750', '1,300'],
          ['Average global tariff rate', '5.5%', '5.0%', '6.2%'],
          ['UK-EU goods trade (index, 2020=100)', '—', '118', '95']
        ],
        question: 'Which interpretation is most consistent with all four indicators?',
        opts: [
          'Globalisation slowed markedly after 2008 and has not recovered to its pre-crisis trajectory; tariff increases and Brexit have reinforced the de-globalisation trend since 2016',
          'Globalisation has continued to accelerate since 2008 — the falling FDI numbers simply reflect improved efficiency of capital allocation rather than a retreat from integration',
          'The data show that de-globalisation is complete: world trade has returned to its 1990s level and all forms of cross-border integration have reversed entirely',
          'Brexit has been entirely beneficial for UK trade — the data show UK-EU trade has risen strongly since the referendum'
        ],
        ans: 0,
        exp: 'All four rows point to a <strong>slowdown in globalisation</strong> since 2008, with some reversal. World trade as % of GDP peaked in 2008 and has not recovered. FDI flows have fallen by more than half from their 2008 peak. Average tariffs rose between 2016 and 2023 (reversing decades of liberalisation). UK-EU goods trade fell from an index of 118 (2016) to 95 (2023) — consistent with the non-tariff barrier effects of Brexit. Option B ignores all the negative signals. Option C overstates the reversal — globalisation has slowed, not reversed to 1990s levels. Option D misreads the UK-EU trade data, which shows a <em>fall</em> in UK-EU trade after Brexit.'
      },

      /* 9 — Chain: globalisation transmission to wage inequality */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct causal order showing how globalisation in developed countries leads to rising within-country inequality.',
        items: [
          { label: 'Low-skill workers in import-competing industries face wage pressure or unemployment', note: '' },
          { label: 'MNCs locate manufacturing in low-wage developing countries to minimise production costs', note: '' },
          { label: 'The wage gap between high-skill and low-skill workers in developed economies widens', note: '' },
          { label: 'Trade liberalisation and FDI flows increase as tariffs fall and capital controls are removed', note: '' },
          { label: 'High-skill workers in export sectors and finance gain from globalised markets and higher demand', note: '' },
          { label: 'Compensation mechanisms fail — redistribution is insufficient — and political backlash grows', note: '' }
        ],
        correctOrder: [3, 1, 0, 4, 2, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Trade liberalisation and capital deregulation create the conditions for globalisation.<br>2. MNCs offshore manufacturing to low-wage countries.<br>3. Low-skill workers in developed economies face competition, losing jobs or wage growth.<br>4. High-skill workers and capital owners gain from global markets.<br>5. The wage gap widens — rising within-country inequality.<br>6. Compensation fails — political backlash (Brexit, Trump) follows.<br><br>This chain connects micro (firm location decisions) to macro (wage distribution) to political economy (de-globalisation backlash). Explaining each link explicitly is what separates Level 3 from Level 4 exam answers.'
      },

      /* 10 — Diagram interpretation: de-globalisation */
      { type: 'mcq',
        stem: 'The COVID-19 pandemic in 2020-21 exposed severe fragilities in global just-in-time supply chains (e.g. semiconductor shortages). Which of the following <strong>best evaluates</strong> whether this represents structural de-globalisation or merely a temporary disruption?',
        opts: [
          'It is likely structural if firms and governments permanently re-design supply chains for resilience rather than pure efficiency, and if geopolitical fragmentation (US-China tech decoupling, sanctions) continues to fragment the global economy',
          'It is definitely structural because any supply disruption lasting more than one year automatically causes permanent reversal of trade integration, as supply chains cannot be rebuilt once broken',
          'It is definitely temporary because comparative advantage is an immutable law of economics that always drives global specialisation back to its optimal configuration once shocks pass',
          'Whether it is structural or cyclical is irrelevant to economic analysis since de-globalisation has no measurable effect on price levels, growth, or welfare'
        ],
        ans: 0,
        exp: 'Whether COVID-19 disruption leads to <strong>structural de-globalisation</strong> depends on <em>permanence of the response</em>. If firms merely rebuilt the same supply chains after the shock, it was cyclical. But evidence suggests structural change: the US CHIPS Act ($53bn), EU Critical Raw Materials Act, and \'friend-shoring\' policies represent deliberate policy re-orientation toward supply chain security over pure efficiency. The US-China technology decoupling (semiconductors, AI hardware) adds a geopolitical dimension that is not easily reversible. Option B incorrectly asserts a mechanical rule. Option C misrepresents comparative advantage — it explains trade patterns but does not make globalisation irreversible. Option D is wrong — de-globalisation would raise import prices, reduce competition, and potentially slow productivity growth.'
      }

    ]
  };

})();
