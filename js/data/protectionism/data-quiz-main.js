/* ============================================================
   ECONOS — Quiz content for: Protectionism
   10 questions covering tariffs, quotas, subsidies, arguments
   for and against protectionism, and contemporary case studies.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'protectionism_main',
    topicId:  'protectionism_main',
    title:    'Protectionism',
    subtitle: 'Theme 4.4 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the tools of protectionism, welfare analysis of tariffs and quotas, the infant-industry and strategic trade arguments, the costs of protection, and the US-China trade war. Includes calculation, diagram interpretation, and chain questions.',
    shortNames: {
      'protectionism_1': 'What is protectionism?',
      'protectionism_2': 'How a tariff works',
      'protectionism_3': 'Quotas and subsidies',
      'protectionism_4': 'Arguments FOR protectionism',
      'protectionism_5': 'Arguments AGAINST protectionism',
      'protectionism_6': 'Free trade vs managed trade',
      'protectionism_7': 'Contemporary protectionism'
    },

    questions: [

      /* 1 — MCQ: tariff welfare effects */
      { type: 'mcq',
        stem: 'When a government imposes a tariff on an imported good, which combination of effects is correct?',
        opts: [
          'Consumer surplus falls; domestic producer surplus rises; government gains tariff revenue; net welfare loss equals the two deadweight triangles',
          'Consumer surplus rises as domestic producers raise output; government gains tariff revenue; net welfare gain equals the size of the tariff',
          'Both consumer and producer surplus fall; the entire loss goes to government as revenue; there is no deadweight loss',
          'Consumer surplus falls; domestic producer surplus falls; government gains revenue equal to the full consumer surplus loss'
        ],
        ans: 0,
        exp: '<strong>Tariff welfare analysis:</strong> A tariff raises the domestic price above the world price. Consumers pay more on all units consumed &#8212; consumer surplus falls by a trapezoid. Domestic producers receive higher prices, expanding output &#8212; producer surplus rises by a triangle (the left side). Government collects tariff revenue = tariff rate &#215; post-tariff import volume &#8212; a rectangle in the middle. The <strong>net welfare loss</strong> equals the two triangles not accounted for by producer gains or government revenue: a production inefficiency triangle (resources used in high-cost domestic production that could have been imported cheaply) and a consumption distortion triangle (units no longer consumed due to the price rise). These are the <em>deadweight welfare losses</em> that represent pure efficiency losses to society.'
      },

      /* 2 — Calculation: tariff revenue */
      { type: 'calculation',
        context: 'A country imposes a &#163;50 tariff per unit on imported steel. Before the tariff, the world price is &#163;200/unit and domestic imports are 10 million units. After the tariff, the domestic price rises to &#163;250. At this price, domestic supply rises from 4 million to 6 million units, and domestic demand falls from 14 million to 12 million units.',
        working: [
          'Post-tariff imports = domestic demand - domestic supply = 12m - 6m = 6 million units',
          'Tariff revenue = tariff × import volume = £50 × 6m = £300 million',
          'Change in imports = 6m - 10m = -4 million units (imports fell)',
          'Producer surplus gain = price rise × original supply + 0.5 × price rise × supply increase',
          '= £50 × 4m + 0.5 × £50 × 2m = £200m + £50m = £250 million',
          'Consumer surplus loss = price rise × post-tariff demand + 0.5 × price rise × demand decrease',
          '= £50 × 12m + 0.5 × £50 × 2m = £600m + £50m = £650 million',
          'Net welfare loss = Consumer loss - Producer gain - Government revenue',
          '= £650m - £250m - £300m = £100 million (the two deadweight triangles)'
        ],
        stem: 'What is the <strong>government tariff revenue</strong> and the <strong>net welfare loss</strong> from this tariff?',
        opts: [
          { ped: 'Tariff revenue: &#163;300 million; Net welfare loss: &#163;100 million', typ: 'Revenue = £50 × 6m imports = £300m. Net loss = consumer loss (£650m) - producer gain (£250m) - revenue (£300m) = £100m', rev: 'The two deadweight triangles = 0.5 × £50 × 2m (production) + 0.5 × £50 × 2m (consumption) = £100m' },
          { ped: 'Tariff revenue: &#163;500 million; Net welfare loss: &#163;200 million', typ: 'Used pre-tariff import volume (10m) instead of post-tariff import volume (6m) for revenue calculation', rev: 'Tariff revenue is collected only on imports that still occur after the tariff — 6 million units, not 10 million' },
          { ped: 'Tariff revenue: &#163;300 million; No welfare loss (revenue offsets consumer loss)', typ: 'Government revenue is a transfer from consumers, not a net social gain — it does not offset the deadweight triangles', rev: 'Government revenue represents a redistribution; the deadweight triangles are permanent efficiency losses with no offsetting gain' },
          { ped: 'Tariff revenue: &#163;200 million; Net welfare loss: &#163;450 million', typ: 'Calculated revenue as tariff × original import volume minus demand change', rev: 'Revenue = tariff × actual post-tariff import volume = £50 × 6 million units = £300m' }
        ],
        ans: 0,
        exp: '<strong>Post-tariff imports</strong> = 12m &#8722; 6m = <strong>6 million units</strong>. Tariff revenue = &#163;50 &#215; 6m = <strong>&#163;300 million</strong>. Net welfare loss = consumer surplus lost (&#163;650m) &#8722; producer surplus gained (&#163;250m) &#8722; government revenue (&#163;300m) = <strong>&#163;100 million</strong> — the two deadweight triangles. This &#163;100m represents genuine resource misallocation: &#163;50m from inefficient domestic production (resources producing steel that could have been imported at &#163;200) and &#163;50m from foregone consumption (units no longer demanded at the higher price). Even before any retaliation, the tariff creates a net welfare cost to the economy as a whole.'
      },

      /* 3 — Elastic sort: instruments of protectionism */
      { type: 'elastic_sort',
        stem: 'Classify each measure as a <strong>tariff barrier</strong> or a <strong>non-tariff barrier (NTB)</strong>.',
        categories: ['tariff', 'ntb'],
        categoryLabels: ['Tariff barrier', 'Non-tariff barrier'],
        goods: [
          { icon: '💰', label: 'A 25% import duty on steel from all non-EU countries', note: '', ans: 'tariff' },
          { icon: '📏', label: 'Technical product standards requiring imported goods to meet specific dimensions not used globally', note: '', ans: 'ntb' },
          { icon: '🚫', label: 'A quota limiting car imports to 100,000 units per year', note: '', ans: 'ntb' },
          { icon: '💷', label: 'Government subsidy of &#163;5bn to domestic electric vehicle manufacturers', note: '', ans: 'ntb' },
          { icon: '🌿', label: 'Phytosanitary rules requiring lengthy inspection of all imported agricultural products', note: '', ans: 'ntb' },
          { icon: '📊', label: 'A specific tariff of &#163;80 per tonne applied to imported cement', note: '', ans: 'tariff' }
        ],
        exp: '<strong>Tariff barriers</strong> are explicit taxes on imports: ad valorem (percentage) or specific (per unit) duties. They raise the domestic price and generate government revenue. <strong>Non-tariff barriers</strong> cover all other restrictions: quotas (physical import limits), subsidies (reduce domestic costs without raising import prices), technical standards (may exclude imports that do not comply), and sanitary rules (can be used protectionistically even if nominally for safety). NTBs are increasingly important — average tariff rates have fallen dramatically since 1947, but NTBs have proliferated. Post-Brexit UK-EU trade friction is almost entirely NTBs (border checks, rules of origin, regulatory divergence) rather than tariffs.'
      },

      /* 4 — Diagnostic pair: infant industry */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate whether the infant-industry argument justifies protectionism in developing countries."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Ana', badge: 'Candidate A',
            answer: 'The infant-industry argument provides the strongest theoretical case for temporary protection. It rests on <strong>dynamic comparative advantage</strong>: with learning-by-doing, scale economies, and first-mover advantages, an industry that appears uncompetitive today may become efficient if given time to develop. South Korea\'s protection of Hyundai and POSCO steel in the 1970s-80s provides empirical support — both became globally competitive exporters. However, the argument requires three conditions to hold: the <strong>market failure</strong> (learning externality) must be demonstrable; protection must be <strong>temporary</strong> with a credible sunset clause; and the government must be able to identify which industries have genuine future comparative advantage. These conditions rarely hold simultaneously. Many Latin American import-substitution industrialisation programmes failed because protection became permanent and protected industries never became competitive. The argument is empirically strongest in countries with strong institutions and state capacity — which narrows its applicability considerably.'
          },
          { name: 'Finn', badge: 'Candidate B',
            answer: 'The infant industry argument says that new industries need protection because they cannot compete against big established companies in rich countries. This seems fair because developing countries need to build their economies. However the problem is that protected companies might not try hard enough to become competitive if they know the government will always protect them. The government also has to know which industries will become competitive in the future which is very hard. Some countries like South Korea have used protection successfully. But others have protected industries that never became efficient. So protection sometimes works and sometimes does not. Overall the infant industry argument is sometimes justified but governments need to be careful.'
          }
        ],
        ans: 0,
        exp: '<strong>Ana</strong> gives the stronger answer. She names the theoretical mechanism precisely (dynamic comparative advantage, learning-by-doing, first-mover advantages), cites specific institutional cases (Hyundai, POSCO), articulates the three necessary conditions for the argument to hold, and contrasts the South Korean success with Latin American failure. The phrase "these conditions rarely hold simultaneously" is analytical evaluation, not hedging. Finn identifies the same ideas but at description level — no theoretical framework, no conditions, no contrast between success and failure cases. Ana accesses Level 4; Finn Level 2-3. The key evaluative move is specifying the conditions under which the argument holds — this converts a vague "sometimes yes, sometimes no" into a structured conditional argument.'
      },

      /* 5 — Multi-select: costs of protectionism */
      { type: 'multi_select',
        stem: 'Which of the following are recognised <strong>costs of protectionism</strong> for the economy imposing it?',
        opts: [
          'Deadweight welfare loss from production inefficiency and consumption distortion',
          'Higher input costs for domestic firms using protected goods as inputs (e.g. tariffs on steel harm car manufacturers)',
          'Retaliation risk: trading partners may impose retaliatory tariffs reducing export demand',
          'Rent-seeking: protected industries lobby to maintain protection rather than improving productivity',
          'Lower domestic inflation, since tariffs reduce demand for all imports equally',
          'Permanent elimination of structural unemployment in import-competing industries'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A, B, C, and D are genuine costs. <strong>Deadweight loss</strong> is the core welfare cost of any tariff or quota. <strong>Higher input costs</strong>: US steel tariffs (2018) are the textbook case — steel-using industries (cars, appliances, construction) faced higher costs that reduced their competitiveness and employment, partially offsetting the jobs saved in steel. <strong>Retaliation</strong>: China\'s retaliatory tariffs on US agricultural exports targeted politically sensitive states; the 1930s Smoot-Hawley spiral caused a 66% collapse in world trade. <strong>Rent-seeking</strong>: protected industries invest in lobbying rather than productivity. Option E is incorrect — tariffs raise import prices, adding to <em>cost-push inflation</em>, not reducing it. Option F is incorrect — structural unemployment in import-competing industries may be temporarily reduced, but the efficiency costs and retaliation risks mean long-run employment effects are typically neutral or negative.'
      },

      /* 6 — Para fill: US-China trade war */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph about the US-China trade war.',
        anchor: 'The US-China trade war provides a live test of the costs of protectionism.',
        para: 'From 2018, the USA imposed [1] of up to 145% on Chinese goods, citing unfair [2] and intellectual property theft. China [3] with agricultural tariffs targeting US swing states. Empirical evidence showed that most of the tariff cost was borne by US [4] rather than Chinese exporters. US imports from China fell, but [5] increased as production shifted to Vietnam and Mexico. This trade [6] meant global output was used less efficiently without eliminating the underlying bilateral [7] imbalance.',
        blanks: [
          { id: 1, opts: ['tariffs', 'quotas', 'subsidies', 'embargoes'], ans: 0 },
          { id: 2, opts: ['subsidies', 'tariffs', 'quotas', 'currency'], ans: 0 },
          { id: 3, opts: ['retaliated', 'capitulated', 'devalued', 'subsidised'], ans: 0 },
          { id: 4, opts: ['consumers', 'producers', 'exporters', 'investors'], ans: 0 },
          { id: 5, opts: ['trade diversion', 'trade creation', 'welfare gain', 'tariff revenue'], ans: 0 },
          { id: 6, opts: ['diversion', 'creation', 'liberalisation', 'integration'], ans: 0 },
          { id: 7, opts: ['trade', 'budget', 'investment', 'currency'], ans: 0 }
        ],
        exp: '(1) <strong>Tariffs</strong> — originally 25% on $250bn of goods, escalated to 145% by 2025. (2) <strong>Subsidies</strong> — China\'s state subsidies for steel, electric vehicles, and technology were the primary US complaint, alongside IP theft. (3) <strong>Retaliated</strong> — China\'s agricultural tariffs deliberately targeted soybean, pork, and corn exports from politically important US states. (4) <strong>Consumers</strong> — empirical studies (Furman et al., Amiti et al.) found US importers bore ~100% of tariff costs through higher prices, at ~$831 extra per US household per year. (5) <strong>Trade diversion</strong> — US imports shifted to Vietnam, Mexico, Taiwan; Chinese production rerouted via third countries. (6) <strong>Diversion</strong> — resources used less efficiently than under free trade. (7) <strong>Trade</strong> — the US bilateral trade deficit with China fell modestly but the overall US trade deficit was unchanged as spending shifted to other suppliers.'
      },

      /* 7 — Odd one out: arguments FOR protectionism */
      { type: 'odd_one_out',
        stem: 'Three of these are standard <strong>arguments FOR protectionism</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🌱', label: 'Infant industry: temporary protection allows new industries to develop until they reach efficient scale', note: '' },
          { icon: '🛡️', label: 'National security: strategic industries (defence, energy, food) should not depend on foreign suppliers', note: '' },
          { icon: '⚖️', label: 'Anti-dumping: foreign firms selling below cost should face duties to restore fair competition', note: '' },
          { icon: '📉', label: 'Deadweight loss: tariffs create permanent efficiency losses by distorting production and consumption decisions', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is <strong>deadweight loss</strong>. This is an argument <em>against</em> protectionism, not for it — it describes the permanent efficiency cost of tariffs and quotas that cannot be recovered by any party (not government revenue, not producer surplus). The other three are standard arguments used to <em>justify</em> protectionism: the infant-industry argument (dynamic comparative advantage); national security (WTO-permitted exception); and anti-dumping duties (WTO-permitted if predatory pricing is proven). In essays, identifying these arguments and then evaluating their limitations — particularly the risk that protection becomes permanent — earns top-band marks.'
      },

      /* 8 — Data table: retaliation spiral */
      { type: 'data_table',
        stem: 'The table shows world trade data around the 1930s Smoot-Hawley tariff.',
        headers: ['Year', 'US average tariff rate', 'World merchandise trade (index)', 'US industrial output (index)'],
        rows: [
          ['1929', '38%', '100', '100'],
          ['1930', '45% (Smoot-Hawley)', '87', '82'],
          ['1931', '49%', '72', '68'],
          ['1932', '53%', '54', '53'],
          ['1933', '53%', '52', '48']
        ],
        question: 'Which interpretation best explains the relationship shown in the data?',
        opts: [
          'The Smoot-Hawley tariff triggered retaliatory tariffs from trading partners, collapsing world trade by 48% in three years and deepening the Great Depression — a historic example of protectionism worsening rather than solving an economic crisis',
          'The data show that higher tariffs successfully protected US industry — the falling output index reflects only global Depression forces entirely unrelated to US trade policy',
          'The correlation proves that world trade falls always cause recessions; the Smoot-Hawley tariff was irrelevant to the Depression since it only raised tariffs moderately',
          'The data show protectionism was successful because the US tariff rate eventually stabilised at 53%, preventing further decline in world trade after 1933'
        ],
        ans: 0,
        exp: 'The data show a near-perfect inverse relationship between rising US tariffs and collapsing world trade. The Smoot-Hawley Tariff Act (1930) raised average US tariffs from 38% to 45% initially, then higher as the Depression deepened. Trading partners retaliated: over 25 countries raised their own tariffs within months. World trade fell by <strong>48%</strong> between 1929 and 1933. US industrial output fell by <strong>52%</strong>. While the Great Depression had multiple causes (banking collapse, gold standard deflation), the retaliation spiral significantly worsened the downturn. This is the definitive historical case against beggar-thy-neighbour protectionism and is cited in the WTO\'s founding rationale. Option B ignores the retaliation mechanism. Option C understates the tariff increases. Option D misreads the data — trade continued to fall in 1933.'
      },

      /* 9 — Chain: tariff transmission */
      { type: 'chain',
        stem: 'Arrange the following events in the correct order describing the <strong>welfare effects</strong> of imposing a tariff.',
        items: [
          { label: 'Net welfare loss to the economy: deadweight triangles (production + consumption distortion)', note: '' },
          { label: 'Government collects tariff revenue on remaining import volume', note: '' },
          { label: 'Domestic price rises above world price by the tariff amount', note: '' },
          { label: 'Government imposes a tariff on an imported good', note: '' },
          { label: 'Domestic producers expand output (gaining producer surplus); consumers reduce demand (losing consumer surplus)', note: '' },
          { label: 'Import volume shrinks: domestic supply rises and domestic demand falls at the higher price', note: '' }
        ],
        correctOrder: [3, 2, 5, 4, 1, 0],
        exp: '<strong>The correct sequence:</strong><br>1. Government imposes the tariff.<br>2. Domestic price rises by the tariff amount.<br>3. Import volume shrinks (higher domestic supply, lower domestic demand).<br>4. Producers gain surplus; consumers lose surplus — redistribution occurs.<br>5. Government collects tariff revenue on remaining imports.<br>6. Net welfare loss = two deadweight triangles (the parts of consumer surplus loss not offset by producer gain or revenue).<br><br>In exam diagrams, labelling each area explicitly — consumer surplus trapezoid, producer surplus triangle, government revenue rectangle, and two deadweight triangles — earns the method marks. The key insight is that <em>redistribution within</em> the economy (consumers to producers and government) is different from <em>net loss to</em> the economy (the deadweight triangles).'
      },

      /* 10 — MCQ: quotas vs tariffs */
      { type: 'mcq',
        stem: 'Why are import <strong>quotas</strong> generally considered worse for domestic welfare than a <strong>tariff with an equivalent import-reducing effect</strong>?',
        opts: [
          'With a quota, the "tariff equivalent revenue" (quota rent) accrues to foreign exporters rather than the domestic government — a larger total welfare loss than under an equivalent tariff',
          'Quotas raise domestic prices by more than an equivalent tariff because foreign exporters can reduce their output below the quota level to extract higher prices',
          'Quotas are always illegal under WTO rules whereas equivalent tariffs are always permitted, creating legal risk for the importing country',
          'Quotas have no effect on domestic producer surplus whereas tariffs increase it, making tariffs more beneficial for the domestic economy'
        ],
        ans: 0,
        exp: 'A quota limits the quantity of imports, causing domestic prices to rise above world prices — similar to a tariff. But unlike a tariff, the price wedge is not collected by the government as revenue. Instead, the <strong>quota rent</strong> (the difference between the domestic price and world price, times the quota quantity) accrues to whoever holds the import licence — typically the foreign exporter. This is a transfer from domestic consumers to foreign producers rather than domestic government. The net welfare loss is therefore larger under a quota than under an equivalent tariff, since the government loses revenue that could have been used productively. This is why most economists prefer tariffs to quotas as a second-best protective measure, and why the WTO\'s tariffication process (converting quotas to tariffs) was a key Uruguay Round achievement. Option C is incorrect — quotas are not always WTO-illegal; agricultural quotas (tariff-rate quotas) are widely used.'
      }

    ]
  };

})();
