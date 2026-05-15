/* ============================================================
   ECONOS — Quiz content for: Trading Blocs & WTO
   10 questions covering integration hierarchy, trade creation,
   trade diversion, WTO principles, and evaluation of regional
   vs multilateral agreements.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'trading_blocs_main',
    topicId:  'trading_blocs_main',
    title:    'Trading Blocs &amp; WTO',
    subtitle: 'Theme 4.3 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the spectrum of economic integration, Viner\'s trade creation and trade diversion, the WTO\'s principles and limitations, and the debate between regional and multilateral liberalisation. Includes chain reasoning, calculation, and diagnostic pair questions.',
    shortNames: {
      'trading_blocs_1': 'Spectrum of integration',
      'trading_blocs_2': 'Trade creation',
      'trading_blocs_3': 'Trade diversion',
      'trading_blocs_4': 'Benefits vs costs of blocs',
      'trading_blocs_5': 'WTO: role and principles',
      'trading_blocs_6': 'WTO limitations',
      'trading_blocs_7': 'Regional vs multilateral'
    },

    questions: [

      /* 1 — Elastic sort: levels of integration */
      { type: 'elastic_sort',
        stem: 'Match each feature to the <strong>deepest level of integration</strong> that first introduces it.',
        categories: ['fta', 'cu', 'sm', 'mu'],
        categoryLabels: ['Free Trade Area', 'Customs Union', 'Single Market', 'Monetary Union'],
        goods: [
          { icon: '🚫', label: 'Tariffs removed between member countries on goods trade', note: '', ans: 'fta' },
          { icon: '📋', label: 'Common external tariff applied to all imports from non-members', note: '', ans: 'cu' },
          { icon: '🏃', label: 'Free movement of labour between member states', note: '', ans: 'sm' },
          { icon: '💶', label: 'Shared currency and single central bank', note: '', ans: 'mu' },
          { icon: '📊', label: 'Harmonised product standards eliminating non-tariff barriers', note: '', ans: 'sm' },
          { icon: '🌍', label: 'Each member retains its own independent external trade policy', note: '', ans: 'fta' }
        ],
        exp: '<strong>Free Trade Area (FTA):</strong> removes tariffs between members but each keeps its own external tariffs — hence rules-of-origin checks needed at internal borders (e.g. USMCA). <strong>Customs Union (CU):</strong> adds a common external tariff — no internal border checks needed for goods, but external trade policy is shared. <strong>Single Market:</strong> extends to the four freedoms including free movement of labour and harmonised standards removing non-tariff barriers. <strong>Monetary Union:</strong> adds a shared currency and single central bank, removing exchange rate risk but sacrificing independent monetary policy. Each step deepens integration and gains but also increases policy constraint on members — the UK post-Brexit debate centres precisely on how much integration is desirable.'
      },

      /* 2 — MCQ: trade creation definition */
      { type: 'mcq',
        stem: 'According to Viner\'s analysis, <strong>trade creation</strong> occurs when:',
        opts: [
          'Joining a customs union causes a country to switch from high-cost domestic production to cheaper imports from a bloc partner — a welfare-improving reallocation',
          'Joining a customs union causes a country to switch from cheap rest-of-world imports to more expensive bloc-partner imports due to the common external tariff',
          'A country creates new exports by discovering a comparative advantage it did not previously recognise',
          'A trading bloc negotiates new access to markets in third countries through multilateral WTO rounds'
        ],
        ans: 0,
        exp: '<strong>Trade creation</strong> (Viner, 1950) is the welfare-improving effect of joining a customs union: domestic production that was protected and expensive is replaced by cheaper imports from a bloc partner once internal tariffs are removed. Resources are released from inefficient domestic production and reallocated to areas of comparative advantage — allocative efficiency improves. This is distinct from <strong>trade diversion</strong> (option B), which is the potentially welfare-reducing effect: the common external tariff may cause the country to switch from cheap rest-of-world suppliers to more expensive bloc partners. Whether joining a bloc is net beneficial depends on whether trade creation exceeds trade diversion — an empirical question.'
      },

      /* 3 — Calculation: trade diversion welfare cost */
      { type: 'calculation',
        context: 'Before joining a customs union, Country A imports steel from the rest of the world at &#163;400 per tonne with a 25% tariff (domestic price &#163;500). After joining, the common external tariff is 30%. The bloc partner charges &#163;420 per tonne (tariff-free within the bloc). Rest-of-world price remains &#163;400 (plus 30% tariff = &#163;520 domestic).',
        working: [
          'Before joining: RoW price + 25% tariff = £400 × 1.25 = £500 domestic price',
          'After joining: Bloc partner price (tariff-free) = £420',
          'After joining: RoW price + 30% tariff = £400 × 1.30 = £520 domestic price',
          'Country A now imports from bloc partner at £420 (cheaper than RoW post-tariff at £520)',
          'But compared to the true world price, A pays £420 vs the efficient price of £400',
          'Per-tonne extra cost = £420 - £400 = £20 (trade diversion cost)',
          'Government also loses tariff revenue from RoW imports (was collecting 25% × £400 = £100 per tonne)'
        ],
        stem: 'After joining the customs union, Country A switches steel imports from the rest of the world to the bloc partner. What is the <strong>trade diversion cost</strong> per tonne to Country A?',
        opts: [
          { ped: '&#163;20 per tonne above the true world price, plus lost tariff revenue of &#163;100 per tonne previously collected on RoW imports', typ: 'A now pays £420 vs efficient world price of £400. Also loses £100/tonne tariff revenue it previously earned on RoW imports.', rev: 'Trade diversion: pays more than efficient world price AND loses government revenue' },
          { ped: '&#163;80 per tonne saving, so trade diversion is actually beneficial', typ: 'Compared only to the post-tariff RoW price (£520) not the true world price (£400)', rev: 'The relevant comparison is to the efficient world price, not the protected domestic price' },
          { ped: 'No cost — A pays less than the pre-joining price', typ: 'Compared only to the old domestic price of £500 — true, but this is welfare analysis, not price comparison', rev: 'Welfare cost is measured against the counterfactual free-trade world price, not the protected price' },
          { ped: '&#163;120 per tonne — the full difference between the bloc price and the old domestic price', typ: 'Subtracted the wrong pair of prices', rev: 'Trade diversion cost = bloc price (£420) minus world free-trade price (£400) = £20/tonne, plus lost tariff revenue' }
        ],
        ans: 0,
        exp: 'The <strong>trade diversion cost</strong> has two components. First, Country A now pays &#163;420 per tonne (bloc partner) instead of the true world price of &#163;400 — an <strong>extra cost of &#163;20 per tonne</strong>. Second, A previously earned &#163;100 per tonne in tariff revenue on RoW imports (25% &#215; &#163;400) — this revenue is now <strong>lost</strong> (transferred to the bloc partner in the form of the lower price accepted). Total welfare cost = &#163;120 per tonne vs the free-trade counterfactual. Note: consumers in A do gain from lower prices (&#163;420 vs old &#163;500) — but this gain is partly at the expense of lost government revenue, and the difference reflects resources used less efficiently than under free trade.'
      },

      /* 4 — Multi-select: WTO principles */
      { type: 'multi_select',
        stem: 'Which of the following are core <strong>WTO principles</strong>?',
        opts: [
          'Most Favoured Nation (MFN): any trade concession given to one member must be extended to all members',
          'National treatment: once imported goods have cleared customs, they must be treated the same as domestic goods',
          'Transparency: trade rules and regulations must be published and accessible',
          'Free trade absolutism: all tariffs must be zero; any protectionism is automatically illegal under WTO rules',
          'Dispute settlement: the WTO arbitrates trade disputes and can authorise retaliatory measures against violators',
          'Development preference: developing countries receive no special treatment regardless of income level'
        ],
        correct: [0, 1, 2, 4],
        exp: 'Options A, B, C, and E are genuine WTO principles. MFN ensures non-discrimination — you cannot give preferential tariffs to one member without extending them to all. National treatment prevents countries from discriminating against imports after they enter. Transparency ensures rules are publicly known. Dispute settlement — the WTO\'s most important innovation over GATT — allows enforceable arbitration with authorised retaliation. Option D is incorrect: the WTO permits tariffs, subsidies (with rules), and protectionist measures in many circumstances (anti-dumping, safeguards, national security). Option F is incorrect: the WTO has Generalised System of Preferences (GSP) allowing developed countries to give lower tariffs to developing countries — a major exception to MFN.'
      },

      /* 5 — Odd one out: trade diversion consequences */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>potential costs of joining a trading bloc</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '📉', label: 'Trade diversion: bloc\'s common external tariff redirects imports away from the most efficient global producers', note: '' },
          { icon: '🏛️', label: 'Loss of sovereign control over external trade policy — the common external tariff is set collectively', note: '' },
          { icon: '📈', label: 'Trade creation: replacing expensive domestic production with cheaper imports from bloc partners raises allocative efficiency', note: '' },
          { icon: '🔄', label: 'Potential fiscal transfers to weaker bloc members in a deeper economic union — politically unpopular', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>trade creation</strong>. This is a <em>benefit</em> of joining a trading bloc — replacing inefficient domestic production with cheaper bloc imports raises allocative efficiency and lowers consumer prices. The other three are genuine costs: trade diversion wastes global resources; loss of external trade policy sovereignty constrains future policy choices; fiscal transfers to weaker members generate political tension (as demonstrated by EU debates over Greek bailouts and structural fund contributions). A well-structured essay on trading blocs weighs trade creation (benefit) against trade diversion and sovereignty costs — the Viner framework.'
      },

      /* 6 — Diagnostic pair: evaluating EU membership */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate whether UK membership of the EU single market was economically beneficial."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Sophie', badge: 'Candidate A',
            answer: 'UK EU membership produced substantial <strong>trade creation</strong>: UK firms could source inputs from the EU single market without tariffs or non-tariff barriers, reducing costs and expanding market access. Estimates by the OECD and CEP suggest UK-EU trade was ~70% higher due to single market membership than it would have been under WTO terms alone. The EU\'s common external tariff also involved some <strong>trade diversion</strong> — the UK imported from less-efficient EU partners rather than more-efficient non-EU suppliers in some sectors. However, the trade creation effects are widely assessed to have outweighed diversion. Post-Brexit trade data provide a natural experiment: UK goods exports to the EU fell ~15% in 2021 due to new non-tariff barriers, suggesting membership had been generating substantial trade. The harder question is whether membership costs (budget contributions ~&#163;13bn net/year, regulatory alignment without UK vote) exceeded the trade benefits — a cost-benefit question on which economists disagree, but the OBR estimates a 4% long-run GDP cost from Brexit, suggesting benefits exceeded costs for the UK.'
          },
          { name: 'Olu', badge: 'Candidate B',
            answer: 'EU membership was beneficial for the UK because it gave UK businesses access to a large market of 450 million consumers. UK exporters could sell their goods freely to European countries. The removal of tariffs made UK goods cheaper in Europe and European goods cheaper in the UK, which helped consumers. UK workers could also move freely to other EU countries for work. However, the UK had to follow EU rules and regulations which some people felt reduced UK sovereignty. The UK also had to pay into the EU budget. Overall it seems like the trade benefits were larger than the costs because the UK economy grew during its membership of the EU, though other factors also affected growth.'
          }
        ],
        ans: 0,
        exp: '<strong>Sophie</strong> gives the stronger answer. She uses the Viner framework explicitly (trade creation vs trade diversion), provides a quantitative estimate (70% higher trade from CEP), identifies the natural experiment (post-Brexit trade fall), and distinguishes the trade welfare question from the broader political economy question (budget contributions, sovereignty). She concludes with OBR evidence (4% GDP cost). Olu identifies the benefits and costs descriptively but does not use the trade creation/diversion framework, provides no specific evidence or statistics, and the evaluation is generic ("UK economy grew"). Sophie earns Level 4; Olu Level 2-3. The OBR estimate is particularly strong because it quantifies the welfare cost, enabling a direct answer to "evaluate."'
      },

      /* 7 — Para fill: WTO limitations */
      { type: 'para_fill',
        stem: 'Complete the paragraph evaluating WTO limitations.',
        anchor: 'The WTO faces significant structural challenges that limit its effectiveness.',
        para: 'The [1] Round of trade negotiations, launched in 2001, has largely stalled because developed nations refused to reduce [2] subsidies, which developing countries regard as essential for fair competition. The US-China trade war demonstrated that the WTO struggles to enforce compliance when [3] powers choose to impose tariffs outside WTO rules. The WTO\'s dispute settlement mechanism was further weakened when the USA blocked appointments to the [4] Body, preventing binding rulings. New issues such as [5] trade, state subsidies, and climate-related [6] adjustments at borders are not adequately covered by existing WTO rules. These challenges raise questions about whether the multilateral trading system can remain the foundation of global [7] governance.',
        blanks: [
          { id: 1, opts: ['Doha', 'Uruguay', 'Kennedy', 'Tokyo'], ans: 0 },
          { id: 2, opts: ['agricultural', 'manufacturing', 'services', 'financial'], ans: 0 },
          { id: 3, opts: ['major', 'minor', 'developing', 'emerging'], ans: 0 },
          { id: 4, opts: ['Appellate', 'Dispute', 'Committee', 'Panel'], ans: 0 },
          { id: 5, opts: ['digital', 'bilateral', 'regional', 'multilateral'], ans: 0 },
          { id: 6, opts: ['border', 'tax', 'quota', 'subsidy'], ans: 0 },
          { id: 7, opts: ['trade', 'monetary', 'fiscal', 'development'], ans: 0 }
        ],
        exp: '(1) <strong>Doha</strong> Round (2001 — still ongoing/stalled): agriculture deadlock prevented a deal. (2) <strong>Agricultural</strong> subsidies: rich-country farm subsidies (EU CAP, US farm bill) make it impossible for developing country agricultural exporters to compete on price. (3) <strong>Major</strong> powers: the US-China trade war exposed that WTO enforcement depends on voluntary compliance — major powers can defect with limited immediate consequence. (4) <strong>Appellate</strong> Body: the USA blocked appointments, leaving no functioning appeals mechanism since 2019. (5) <strong>Digital</strong> trade: e-commerce, data flows, and digital services are largely outside existing WTO rules. (6) <strong>Border</strong> adjustments: EU\'s Carbon Border Adjustment Mechanism (CBAM) imposes carbon costs on imports — potentially WTO-incompatible. (7) <strong>Trade</strong> governance: whether the WTO can adapt to these challenges determines whether multilateral rules remain meaningful.'
      },

      /* 8 — Data table: regional vs multilateral */
      { type: 'data_table',
        stem: 'The table shows selected trade agreement data.',
        headers: ['Agreement type', 'Example', 'Average tariff reduction', 'Estimated trade gain', 'Time to negotiate'],
        rows: [
          ['Bilateral FTA', 'UK-Australia FTA (2023)', '98% tariffs removed', '+&#163;2.9bn long-run', '18 months'],
          ['Regional bloc', 'UK-CPTPP accession (2023)', 'Most tariffs removed', '+&#163;1.8bn long-run', '3 years'],
          ['Multilateral (WTO)', 'Doha Round', 'Stalled — no deal', 'Estimated +$360bn globally', '22+ years (ongoing)']
        ],
        question: 'What does the data suggest about the trade-offs between bilateral, regional, and multilateral liberalisation?',
        opts: [
          'Bilateral and regional FTAs are faster to negotiate and deliver certainty for specific partners; multilateral deals would generate much larger global gains but are extremely slow due to consensus requirements among 164 WTO members',
          'The data shows bilateral FTAs are definitively superior to multilateral agreements in all respects — countries should abandon the WTO and focus entirely on bilateral deals',
          'The Doha Round should be declared a success since negotiations are continuing; the 22-year timeline is normal for trade agreements of any type',
          'The UK-Australia FTA is more valuable than CPTPP membership because it took less time to negotiate and produced a larger estimated gain'
        ],
        ans: 0,
        exp: 'The data illustrate the classic trade-off in trade policy. <strong>Bilateral and regional FTAs</strong> are faster (months to years) and provide certainty, but their welfare gains are limited to the specific parties (UK-Australia &#163;2.9bn). A successful <strong>multilateral Doha Round</strong> would generate an estimated $360bn in global welfare gains — orders of magnitude larger — but has stalled for 22+ years because 164 members must agree. This explains why most trade liberalisation since 2001 has shifted to bilateral and regional routes. The risk is the "spaghetti bowl" of overlapping agreements with different rules. Option B overstates the case — bilateral deals cannot replicate the non-discrimination of multilateral agreements. Option C misreads the data — 22 years with no deal is a failure, not normal. Option D miscompares — CPTPP gives access to 11 economies; Australia alone is smaller.'
      },

      /* 9 — Chain: trade diversion mechanism */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct order describing how <strong>trade diversion</strong> harms welfare after a country joins a customs union.',
        items: [
          { label: 'Country A switches steel imports from the cheap rest-of-world supplier to the higher-cost bloc partner', note: '' },
          { label: 'Country A joins a customs union with partners B and C', note: '' },
          { label: 'Net welfare loss: A pays more per unit than under free trade; global resources used less efficiently', note: '' },
          { label: 'Before joining: Country A imports steel cheaply from rest of world (RoW), paying world price plus a modest tariff', note: '' },
          { label: 'The common external tariff makes RoW steel more expensive than the tariff-free bloc partner price', note: '' },
          { label: 'Government loses tariff revenue previously earned on RoW imports — transferred to the bloc partner', note: '' }
        ],
        correctOrder: [3, 1, 4, 0, 5, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Before joining: A imports cheaply from RoW at world price + tariff.<br>2. A joins the customs union — common external tariff now applies to RoW.<br>3. The common external tariff makes RoW steel artificially expensive inside the bloc.<br>4. A switches imports to the bloc partner (tariff-free but higher base price).<br>5. Government loses tariff revenue — it now accrues to the bloc partner instead.<br>6. Net welfare loss: A pays more than the world price; global resources are used less efficiently.<br><br>This is Viner\'s trade diversion — the negative counterpart to trade creation. Whether a customs union is net beneficial depends on the balance of trade creation (welfare-improving) against trade diversion (welfare-reducing). Empirically, the EU is generally assessed to have generated net trade creation for members, but the diversion costs are real and concentrated in specific import-competing sectors.'
      },

      /* 10 — MCQ: spaghetti bowl */
      { type: 'mcq',
        stem: 'The "spaghetti bowl effect" (Bhagwati) refers to which problem in international trade?',
        opts: [
          'The complex and overlapping network of bilateral and regional FTAs with different rules of origin, creating administrative costs and trade distortions for businesses operating across multiple agreements',
          'The tendency for protectionism to spread globally in a self-reinforcing spiral, as each country retaliates against other countries\' tariffs with its own tariff increases',
          'The difficulty for developing countries of exporting agricultural products (including pasta and wheat) due to rich-country agricultural subsidies under the WTO',
          'The structural inefficiency of very large trading blocs where the logistics of coordinating economic policy across many nations becomes unmanageable'
        ],
        ans: 0,
        exp: 'The <strong>spaghetti bowl effect</strong> (Bhagwati, 1995) describes the complexity created by the proliferation of bilateral and regional FTAs. Each agreement has its own <em>rules of origin</em> (specifying how much local content a product must have to qualify for preferential tariffs) — and these rules differ across agreements. A firm operating across multiple FTAs must comply with potentially dozens of different rules-of-origin requirements simultaneously, creating substantial administrative costs. The "spaghetti bowl" metaphor captures the resulting tangle of overlapping obligations. This is a key argument for multilateral liberalisation through the WTO — a single set of rules applying to all 164 members. Post-Brexit UK has signed ~70+ bilateral FTAs to replace EU membership, making this problem highly relevant to A-level exam analysis of UK trade policy.'
      }

    ]
  };

})();
