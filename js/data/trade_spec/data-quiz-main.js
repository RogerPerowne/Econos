/* ============================================================
   ECONOS — Quiz content for: Trade & Specialisation
   10 questions covering comparative advantage, gains from trade,
   terms of trade, and the case for and against free trade.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'trade_spec_main',
    topicId:  'trade_spec_main',
    title:    'Trade &amp; Specialisation',
    subtitle: 'Theme 4.2 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering absolute and comparative advantage, opportunity cost calculations, gains from trade, terms of trade, and the limitations of the free-trade model. Mixed formats including calculation, chain reasoning, and diagnostic pair questions.',
    shortNames: {
      'trade_spec_1': 'Absolute vs comparative advantage',
      'trade_spec_2': 'Calculating comparative advantage',
      'trade_spec_3': 'Gains from trade',
      'trade_spec_4': 'Terms of trade',
      'trade_spec_5': 'Case for vs against free trade',
      'trade_spec_6': 'Limits of comparative advantage',
      'trade_spec_7': 'Pattern of world trade'
    },

    questions: [

      /* 1 — MCQ: comparative vs absolute advantage */
      { type: 'mcq',
        stem: 'Country A produces 8 units of wheat or 4 units of cloth per worker per day. Country B produces 6 units of wheat or 6 units of cloth per worker per day. Which statement is correct?',
        opts: [
          'Country A has comparative advantage in wheat (opportunity cost 0.5 cloth vs 1 cloth for B); Country B has comparative advantage in cloth (opportunity cost 1 wheat vs 2 wheat for A)',
          'Country A has comparative advantage in both goods because it can produce more wheat per worker',
          'Country B has comparative advantage in both goods because its opportunity costs are lower in both products',
          'Neither country has comparative advantage because there is no trade possible when one country has absolute advantage in one good only'
        ],
        ans: 0,
        exp: '<strong>Opportunity cost calculation:</strong><br>Country A: 1 wheat costs 0.5 cloth (gives up 4/8 cloth per wheat). 1 cloth costs 2 wheat.<br>Country B: 1 wheat costs 1 cloth (gives up 6/6 cloth per wheat). 1 cloth costs 1 wheat.<br><br>A has lower OC in wheat (0.5 &lt; 1) → comparative advantage in wheat. B has lower OC in cloth (1 &lt; 2) → comparative advantage in cloth. Note: A has <em>absolute advantage</em> in wheat (8 &gt; 6) — but comparative advantage is about OC, not absolute output. Specialisation and trade at any terms between 0.5 and 1 cloth per wheat benefits both countries.'
      },

      /* 2 — Calculation: gains from specialisation */
      { type: 'calculation',
        context: 'Before trade, Country A (10 workers) splits evenly: 5 on wheat (40 units), 5 on cloth (20 units). Country B (10 workers) splits evenly: 5 on wheat (30 units), 5 on cloth (30 units). Each worker in A produces 8 wheat or 4 cloth; each worker in B produces 6 wheat or 6 cloth.',
        working: [
          'Step 1: Identify comparative advantage (from OC analysis above)',
          'A: comparative advantage in wheat; B: comparative advantage in cloth',
          'Step 2: Full specialisation totals',
          'A (all 10 workers on wheat): 10 × 8 = 80 wheat, 0 cloth',
          'B (all 10 workers on cloth): 0 wheat, 10 × 6 = 60 cloth',
          'Step 3: Before-trade combined output',
          'Wheat: 40 + 30 = 70. Cloth: 20 + 30 = 50.',
          'Step 4: After full specialisation',
          'Wheat: 80. Cloth: 60.',
          'Gain: +10 wheat, +10 cloth — both goods increased by specialising'
        ],
        stem: 'What is the gain in total world output when both countries <strong>fully specialise</strong> according to comparative advantage?',
        opts: [
          { ped: '+10 wheat and +10 cloth', typ: 'Full specialisation: A produces 80 wheat (10×8); B produces 60 cloth (10×6). Pre-trade: 70 wheat, 50 cloth. Gain = +10 each.', rev: 'Specialisation expands total output — the world\'s "production possibility frontier" shifts out' },
          { ped: 'No gain — output is the same', typ: 'Did not account for reallocation of all workers to comparative advantage sectors', rev: 'When workers move from cloth to wheat in A, and from wheat to cloth in B, total output rises' },
          { ped: '+20 wheat but no change in cloth', typ: 'Calculated only wheat gain and missed cloth gain from B specialising', rev: 'Both goods increase — the mutual gain is the core result of comparative advantage' },
          { ped: '+10 wheat but cloth falls', typ: 'Confused which country specialises in which good', rev: 'A specialises in wheat (lower OC); B in cloth (lower OC) — both outputs rise' }
        ],
        ans: 0,
        exp: 'Before specialisation: world output = 70 wheat + 50 cloth. After full specialisation (A all on wheat, B all on cloth): <strong>80 wheat + 60 cloth</strong>. Total gain = <strong>+10 wheat and +10 cloth</strong>. This demonstrates Ricardo\'s core result: even without absolute advantage in one good, specialisation according to comparative advantage expands total world output — creating the basis for mutually beneficial trade. The gains are shared through the terms of trade.'
      },

      /* 3 — Elastic sort: free trade benefits */
      { type: 'elastic_sort',
        stem: 'Classify each effect as a benefit of <strong>free trade</strong> or a potential <strong>cost of free trade</strong>.',
        categories: ['benefit', 'cost'],
        categoryLabels: ['Benefit of free trade', 'Cost / risk of free trade'],
        goods: [
          { icon: '💰', label: 'Lower consumer prices as imported goods are available at world prices below domestic autarky prices', note: '', ans: 'benefit' },
          { icon: '🏭', label: 'Structural unemployment as domestic firms in import-competing industries shut down', note: '', ans: 'cost' },
          { icon: '📈', label: 'Dynamic efficiency gains as foreign competition forces firms to innovate and reduce costs', note: '', ans: 'benefit' },
          { icon: '🌱', label: 'Infant industries in developing countries unable to grow due to competition from established foreign rivals', note: '', ans: 'cost' },
          { icon: '📦', label: 'Economies of scale achieved by producing for a global rather than purely domestic market', note: '', ans: 'benefit' },
          { icon: '⚡', label: 'Supply-chain vulnerability: dependence on foreign suppliers for strategic goods (energy, semiconductors)', note: '', ans: 'cost' }
        ],
        exp: '<strong>Benefits of free trade</strong>: lower prices improve consumer welfare; dynamic efficiency pressures drive innovation; scale economies reduce average costs, benefiting both firms and consumers. <strong>Costs/risks</strong>: structural unemployment in import-competing sectors (the adjustment cost is real and concentrated, even if aggregate gains exist); infant-industry failure as new industries cannot compete with established multinationals; supply vulnerability exposed by COVID-19 semiconductor shortages and energy dependence. Strong essays acknowledge both sides and weigh them — pure advocacy of either free trade or protectionism misses marks.'
      },

      /* 4 — MCQ: terms of trade */
      { type: 'mcq',
        stem: 'The UK\'s terms of trade index rises from 100 to 112 over five years. Which of the following is the most accurate interpretation?',
        opts: [
          'UK export prices have risen relative to import prices — each unit of UK exports now buys more imports, improving the UK\'s real purchasing power in international trade',
          'UK exports have increased in volume by 12%, making the UK a more competitive exporter in global markets',
          'UK import prices have risen by 12%, meaning the UK must pay more for its imports, worsening its real purchasing power',
          'UK terms of trade have worsened because the index has risen above 100, indicating exports cost more to produce'
        ],
        ans: 0,
        exp: 'The Terms of Trade (ToT) index = (Export price index ÷ Import price index) × 100. A rise from 100 to 112 means <strong>export prices have risen relative to import prices</strong> — the UK can now buy more imports with each unit of exports. This is an <strong>improvement</strong> in the ToT. Important caveat: if the rise is caused by UK exports becoming more expensive due to falling competitiveness (not rising quality), export volumes may fall. An improvement in ToT is only unambiguously beneficial if driven by productivity gains or quality improvements, not by falling export demand. Option B confuses price changes with volume changes. Option C gets the direction wrong.'
      },

      /* 5 — Diagnostic pair: infant industry argument */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Assess the case for protecting infant industries in developing countries."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Mei', badge: 'Candidate A',
            answer: 'The infant-industry argument is the strongest theoretical case for temporary protection. It rests on the idea that comparative advantage is <strong>dynamic</strong>, not static: with learning-by-doing, economies of scale, and first-mover advantages, a currently uncompetitive industry may become competitive if given time to develop. South Korea used precisely this logic — protecting its steel and electronics sectors in the 1970s before they became world-leading exporters. However, the argument requires a <strong>credible commitment to remove protection</strong> once the industry matures, which is politically extremely difficult in practice. Protected industries lobby to maintain protection, and governments face \'knowledge problems\' in identifying which industries have genuine future comparative advantage. The empirical record is mixed — protection succeeded in South Korea but failed in many Latin American import-substitution industrialisation attempts. The case is stronger where the market failure (learning-by-doing externality, first-mover advantage) is demonstrable and where governments have strong institutional capacity to impose a sunset clause.'
          },
          { name: 'Jack', badge: 'Candidate B',
            answer: 'Developing countries might need to protect their industries because they are not as advanced as those in developed countries. Free trade would mean that foreign companies who have been around for a long time and are very big would outcompete new businesses in developing countries before they get a chance to grow. This is unfair. Protecting infant industries gives them time to catch up and eventually they can compete on their own. However, the problem is that companies might get used to being protected and not try to compete. So the government should only protect industries for a short time. Countries like South Korea have done this successfully. Overall the infant industry argument is a good reason for some protectionism.'
          }
        ],
        ans: 0,
        exp: '<strong>Mei</strong> gives the stronger answer. She identifies the theoretical basis precisely (<em>dynamic comparative advantage, learning-by-doing, first-mover advantage</em>), uses a specific empirical case (South Korea, 1970s), and then evaluates the argument against the key counterpoint — the political economy problem of credible commitment. She references the contrast between South Korean success and Latin American failure. Jack identifies the same broad ideas but at descriptive level: no theoretical framework, no institutional detail, no contrast between successes and failures. Mei operates at Level 4; Jack at Level 2-3. The phrase "the market failure is demonstrable" signals analytical rigour — it makes protection conditional on evidence, not rhetoric.'
      },

      /* 6 — Multi-select: limitations of comparative advantage */
      { type: 'multi_select',
        stem: 'Which of the following are valid <strong>limitations of the comparative advantage model</strong> of trade?',
        opts: [
          'The model assumes full employment and costless factor mobility between industries, which does not hold in practice',
          'It is a static model that ignores learning-by-doing and first-mover advantages that can shift comparative advantage over time',
          'It cannot explain intra-industry trade (e.g. Germany and France both exporting and importing cars)',
          'It predicts that all trade is harmful and that autarky always produces higher welfare than free trade',
          'It ignores externalities — imports with embedded carbon may be cheaper but impose environmental costs not captured in price',
          'It assumes constant returns to scale, whereas many modern industries exhibit significant economies of scale'
        ],
        correct: [0, 1, 2, 4, 5],
        exp: 'Options A, B, C, E, and F are all valid limitations. A: the adjustment assumption is unrealistic — structural unemployment is persistent. B: comparative advantage is static; dynamic models (Krugman, Porter) show it can be created through policy. C: comparative advantage cannot explain intra-industry trade (Germany-France car trade) — scale economies and product differentiation models (Krugman) are needed. E: comparative advantage models use market prices; if those prices do not reflect environmental externalities, the implied specialisation pattern may not maximise social welfare. F: constant returns is a standard assumption but many modern industries (tech, pharma) exhibit increasing returns. Option D is incorrect — comparative advantage predicts that <em>both</em> free trade and specialisation raise welfare relative to autarky.'
      },

      /* 7 — Para fill: pattern of world trade */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about the changing pattern of world trade.',
        anchor: 'The pattern of world trade has shifted dramatically since 1945.',
        para: 'The share of [1] in world trade has grown to around 25% and continues to rise, with the UK running a significant [2] surplus in this area. [3] trade — countries exchanging similar goods — has grown because of scale economies and consumer preference for variety rather than comparative advantage differences. Global [4] chains mean a single manufactured product may cross multiple borders during production. Emerging economies, particularly [5], now account for a larger share of manufactured [6] than at any point in history.',
        blanks: [
          { id: 1, opts: ['services', 'commodities', 'agriculture', 'manufacturing'], ans: 0 },
          { id: 2, opts: ['trade', 'current account', 'capital account', 'financial account'], ans: 0 },
          { id: 3, opts: ['Intra-industry', 'Inter-industry', 'Bilateral', 'Unilateral'], ans: 0 },
          { id: 4, opts: ['value', 'tariff', 'exchange', 'supply'], ans: 0 },
          { id: 5, opts: ['China', 'Germany', 'the USA', 'Japan'], ans: 0 },
          { id: 6, opts: ['exports', 'imports', 'subsidies', 'tariffs'], ans: 0 }
        ],
        exp: '(1) <strong>Services</strong> — financial services, tourism, education, software: ~25% of world trade and the fastest-growing category. (2) <strong>Trade</strong> surplus — the UK runs a chronic goods deficit but a services surplus; financial services is the UK\'s primary export strength. (3) <strong>Intra-industry</strong> trade — same-category goods exchanged between similar countries, explained by Krugman\'s new trade theory (scale + differentiation) not Ricardo. (4) <strong>Value</strong> chains — global value chains: each country specialises in a production stage. (5) <strong>China</strong> — China\'s WTO accession transformed its share of global manufacturing exports from ~3% (1990) to ~15%+ (2023). (6) <strong>Exports</strong> — China exports manufactured goods; its comparative advantage has shifted from low-value assembly to increasingly high-tech sectors.'
      },

      /* 8 — Odd one out: gains from trade */
      { type: 'odd_one_out',
        stem: 'Three of these are standard <strong>gains from free trade</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '📊', label: 'Allocative efficiency: resources shift to lowest-cost producers globally, maximising world output', note: '' },
          { icon: '🔬', label: 'Dynamic efficiency: foreign competition forces firms to innovate and reduce costs over time', note: '' },
          { icon: '🛡️', label: 'Structural unemployment: workers displaced from import-competing industries face long-term joblessness', note: '' },
          { icon: '📦', label: 'Economies of scale: access to global markets enables longer production runs and lower average costs', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>structural unemployment</strong>. This is a <em>cost</em> of free trade, not a gain — workers displaced from import-competing industries (e.g. UK textiles, US manufacturing) often face prolonged unemployment because labour is not costlessly mobile between sectors. The other three are genuine gains: allocative efficiency (comparative advantage directs resources to most productive uses); dynamic efficiency (competition spurs innovation); and scale economies (global markets reduce average costs). The adjustment costs of free trade are real and concentrated — they fall disproportionately on specific regions and occupations — even when aggregate welfare gains exist. This asymmetry between diffuse benefits and concentrated costs explains why free trade generates political opposition.'
      },

      /* 9 — Data table: comparative advantage evidence */
      { type: 'data_table',
        stem: 'The table shows trade patterns for Country X and Country Y.',
        headers: ['Country', 'Main exports', 'Main imports', 'Wage level', 'Export growth 2000-2023'],
        rows: [
          ['Country X', 'Machinery, chemicals, cars', 'Electronics, food, energy', 'High', '+85%'],
          ['Country Y', 'Electronics, textiles, solar panels', 'Machinery, aircraft, services', 'Low-medium', '+620%']
        ],
        question: 'What does the data suggest about comparative advantage and trade patterns?',
        opts: [
          'Country X has comparative advantage in high-skill capital-intensive goods; Country Y has comparative advantage in labour-intensive and assembly manufacturing, consistent with Heckscher-Ohlin factor endowments theory',
          'Country Y should immediately stop exporting electronics and textiles as these are low-value goods that will never generate sustained development',
          'Country X has absolute advantage in all goods since it produces high-technology exports — therefore Country Y gains nothing from trading with Country X',
          'Both countries should pursue autarky to protect their domestic industries from foreign competition, which the data shows is causing harm'
        ],
        ans: 0,
        exp: 'The data are consistent with <strong>Heckscher-Ohlin theory</strong>: countries export goods that are intensive in their abundant factors. Country X (high wages) exports capital-intensive, high-skill goods (machinery, chemicals) where its skilled workforce and capital stock give comparative advantage. Country Y (lower wages) exports labour-intensive goods (textiles) and assembly manufacturing (electronics, solar panels). Country Y\'s export growth (+620%) suggests an export-led development strategy similar to East Asian tigers — using comparative advantage in labour-intensive goods to drive industrialisation, as China, South Korea, and Vietnam did. Option B is incorrect — electronics exports from developing countries are a proven development pathway. Option C confuses absolute and comparative advantage.'
      },

      /* 10 — Chain: comparative advantage to terms of trade */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct logical order describing how comparative advantage leads to mutual gains from trade.',
        items: [
          { label: 'Both countries consume beyond their individual production possibility frontiers — mutual welfare gain', note: '' },
          { label: 'Each country has a different opportunity cost of producing each good', note: '' },
          { label: 'Each country specialises in producing the good where its opportunity cost is lowest', note: '' },
          { label: 'Countries trade at a terms-of-trade ratio between their respective domestic opportunity costs', note: '' },
          { label: 'Total world output of both goods expands beyond what either country could produce alone', note: '' },
          { label: 'Countries begin with different resource endowments, technologies, and factor productivities', note: '' }
        ],
        correctOrder: [5, 1, 2, 4, 3, 0],
        exp: '<strong>The correct sequence:</strong><br>1. Countries differ in resources, technology, and productivity.<br>2. These differences produce different opportunity costs for each good in each country.<br>3. Each country specialises where its OC is lowest — this is comparative advantage in practice.<br>4. World output expands as resources shift to highest-productivity uses.<br>5. Trade occurs at a terms-of-trade ratio between each country\'s domestic OC — both gain from trade at these terms.<br>6. Both countries can consume combinations beyond their individual PPFs — mutual welfare gain.<br><br>This logical chain is the core argument for free trade. Strong exam answers make every link explicit and can quantify steps 2-4 with numerical examples. The final step — consumption beyond the PPF — is the key empirical test: if countries import goods at prices below their domestic OC, they gain real income.'
      }

    ]
  };

})();
