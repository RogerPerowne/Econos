(function () {

  window.ECONOS_QUIZ = {
    id:       'ppf_main',
    topicId:  'ppf_main',
    title:    'Production Possibility Frontiers',
    subtitle: 'Theme 1 &middot; Topic 1.4 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('ppf_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers PPF construction, productive efficiency, opportunity cost, the bowed-out shape, shifts, and capital vs consumer goods',
    shortNames: [
      'PPF definition', 'Numeric opp cost', 'Bowed-out shape', 'Points on PPF',
      'Shifts of PPF', 'Categorise points', 'Cause & effect', 'Match pairs',
      'Data table', 'Para fill'
    ],

    questions: [

      /* 1 – MCQ: productive efficiency */
      { type: 'mcq',
        id: 'q_ppf_1',
        stem: 'A point <strong>on</strong> the production possibility frontier (PPF) represents:',
        opts: [
          'Productive efficiency – the economy is using all its resources to maximum effect and cannot produce more of one good without producing less of the other',
          'Allocative efficiency – the economy is producing the combination that maximises consumer welfare',
          'Productive inefficiency – the economy has unused resources and could produce more without giving anything up',
          'Unattainable output – the combination lies outside what the economy can produce'
        ],
        ans: 0,
        exp: 'A point <strong>on</strong> the PPF represents <strong>productive efficiency</strong>: all resources are fully and efficiently employed. Moving from one point on the frontier to another requires a trade-off – to produce more of one good, you must sacrifice some of the other. A point <strong>inside</strong> the PPF is productively inefficient (unused resources – unemployment, spare capacity). A point <strong>outside</strong> is currently unattainable. Allocative efficiency is a separate concept requiring P = MC – not shown directly on the PPF diagram.'
      },

      /* 2 – Numeric input: opportunity cost */
      { type: 'numeric_input',
        id: 'q_ppf_2',
        stem: 'Calculate the <strong>opportunity cost</strong> of producing one additional unit of good A.',
        context: 'An economy can produce on its PPF at the following combinations: Point X: 100 units of A and 200 units of B. Point Y: 110 units of A and 170 units of B.',
        answer: 3,
        tolerance: 0.1,
        unit: 'units of B',
        hint: 'Opportunity cost = units of B given up ÷ units of A gained',
        workingSteps: [
          'Moving from X to Y: A increases by 10 (from 100 to 110)',
          'B decreases by 30 (from 200 to 170)',
          'Opportunity cost per unit of A = 30 ÷ 10 = 3 units of B'
        ],
        exp: 'Moving from Point X (100A, 200B) to Point Y (110A, 170B): gain 10 units of A but sacrifice 30 units of B. Opportunity cost per unit of A = 30 ÷ 10 = <strong>3 units of B</strong>. This is the marginal opportunity cost – the trade-off at the margin. On a bowed-out PPF, the opportunity cost rises as more of one good is produced (increasing opportunity cost), because resources are not perfectly adaptable between uses. If the PPF were a straight line, opportunity cost would be constant.'
      },

      /* 3 – MCQ: bowed-out shape */
      { type: 'mcq',
        id: 'q_ppf_3',
        stem: 'Why is the production possibility frontier typically <strong>bowed outward</strong> (concave to the origin) rather than a straight line?',
        opts: [
          'Resources are not perfectly adaptable between different uses – as more of one good is produced, increasingly less suitable resources must be used, raising the opportunity cost',
          'Firms face economies of scale – as they produce more of one good, costs fall and they can also produce more of the other good',
          'Technology improves automatically as more goods are produced – this shifts the frontier outward',
          'The government intervenes to ensure production is diversified, creating the bowed shape through regulation'
        ],
        ans: 0,
        exp: 'The bowed-out shape reflects <strong>increasing opportunity cost</strong>: resources are not perfectly adaptable between uses. Initially, the most suitable resources are transferred – low opportunity cost. As more of one good is produced, progressively less suitable resources are reassigned – raising the marginal opportunity cost. Example: the first farmland converted from wheat to corn is land already nearly suited to corn. Later conversions use land poorly suited to corn – low yield per wheat unit sacrificed. A straight-line PPF would imply constant opportunity cost – only if all resources were equally adaptable.'
      },

      /* 4 – Categorise: points on the PPF */
      { type: 'categorise',
        id: 'q_ppf_4',
        stem: 'Sort each production point into the correct category.',
        categories: ['On the PPF (efficient)', 'Inside the PPF (inefficient)', 'Outside the PPF (unattainable)'],
        items: [
          { text: 'An economy is at full employment producing 500 guns and 200 tonnes of butter at its maximum capacity combination', category: 'On the PPF (efficient)' },
          { text: 'High unemployment means 15% of the workforce is idle – output is below the frontier', category: 'Inside the PPF (inefficient)' },
          { text: 'A country wants to produce 700 guns and 300 tonnes of butter but lacks the resources and technology to achieve this', category: 'Outside the PPF (unattainable)' },
          { text: 'Factories are running at 60% capacity due to a recession', category: 'Inside the PPF (inefficient)' },
          { text: 'After a new invention doubles agricultural productivity, the economy reaches a previously impossible output combination', category: 'On the PPF (efficient)' },
          { text: 'A country borrows technology from abroad and immediately produces a combination not achievable domestically before', category: 'Outside the PPF (unattainable)' }
        ],
        exp: '<strong>On the PPF</strong>: full employment of all resources – productive efficiency. <strong>Inside the PPF</strong>: productive inefficiency – unused resources (unemployment, spare capacity, poor allocation). The economy could reach the frontier without giving anything up. <strong>Outside the PPF</strong>: currently unattainable with existing resources and technology – requires a rightward shift (economic growth) through technology improvement, increased factor inputs, or institutional change. Technology transfer can shift the frontier, making previously unattainable combinations achievable.'
      },

      /* 5 – MCQ: shifts of the PPF */
      { type: 'mcq',
        id: 'q_ppf_5',
        stem: 'Which of the following would cause the PPF to shift <strong>outward</strong> (economic growth)?',
        opts: [
          'A breakthrough in renewable energy technology that lowers the cost of power across all industries',
          'A fall in unemployment rate from 8% to 4% – the economy moves to a point on the existing PPF',
          'An increase in consumer spending that shifts the demand curve for goods rightward',
          'A reallocation of resources from consumer goods to capital goods production within the existing PPF'
        ],
        ans: 0,
        exp: 'An outward shift of the PPF represents genuine <strong>economic growth</strong> – an increase in productive capacity. This requires either more resources (population growth, capital investment, immigration) or better technology. A technology breakthrough achieves more output from the same resources – outward shift. Option B (unemployment falls) is a <em>movement to</em> the existing frontier, not a shift of it. Option C (demand increase) does not create new productive capacity. Option D is a movement along the PPF (trading off consumer for capital goods) – though producing more capital goods today does shift the PPF outward in the future.'
      },

      /* 6 – Match pairs: PPF concepts */
      { type: 'match_pairs',
        id: 'q_ppf_6',
        stem: 'Match each PPF concept to its correct description.',
        pairs: [
          { a: 'Point inside the PPF', b: 'Productive inefficiency – unused or misallocated resources' },
          { a: 'Point on the PPF', b: 'Productive efficiency – maximum output given resources' },
          { a: 'Outward shift of the PPF', b: 'Economic growth – increased productive capacity' },
          { a: 'Increasing opportunity cost', b: 'Bowed-out shape – resources not perfectly adaptable' },
          { a: 'Capital vs consumer goods trade-off', b: 'Current sacrifice boosts future productive capacity' },
          { a: 'Comparative advantage', b: 'Countries specialise in goods where relative opportunity cost is lowest' }
        ],
        exp: 'PPF vocabulary: inside (inefficiency); on frontier (productive efficiency); outward shift (growth); bowed-out shape (increasing opportunity cost, imperfect factor adaptability); capital-consumer trade-off (key development question – sacrifice now for greater capacity later); comparative advantage (the PPF framework extends to international trade – countries at different points on their PPFs can gain from specialisation and trade even if one country is absolutely better at everything).'
      },

      /* 7 – Cause & effect: what shifts the PPF */
      { type: 'cause_effect',
        id: 'q_ppf_7',
        stem: 'Match each change to its effect on the PPF.',
        pairs: [
          { cause: 'A country invests heavily in education and workforce skills', effect: 'PPF shifts outward – more human capital increases productive capacity' },
          { cause: 'A major earthquake destroys 20% of a country\'s capital stock', effect: 'PPF shifts inward – productive capacity is reduced' },
          { cause: 'Mass immigration of working-age skilled workers', effect: 'PPF shifts outward – increased labour force quantity and quality' },
          { cause: 'A country prioritises capital good production over consumer goods', effect: 'PPF shifts outward more in the future – current sacrifice, future gain' },
          { cause: 'A devastating pandemic kills 10% of the labour force', effect: 'PPF shifts inward – labour force shrinks, reducing output potential' },
          { cause: 'A country adopts a new agricultural technology that doubles food yields', effect: 'PPF shifts outward, especially in the food production direction' }
        ],
        exp: 'The PPF shifts <strong>outward</strong> when productive capacity increases: more resources (labour, capital, land), better technology, improved human capital, or better institutions. It shifts <strong>inward</strong> when capacity is destroyed: natural disasters, pandemics, capital depreciation without replacement, war. The capital-consumer goods trade-off is particularly important: sacrificing consumption today (moving up the PPF toward capital goods) shifts the PPF outward more rapidly in the future – the fundamental development choice facing poor countries.'
      },

      /* 8 – Odd one out: what shifts the PPF outward */
      { type: 'odd_one_out',
        id: 'q_ppf_8',
        stem: 'Three of these will shift the PPF <strong>outward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🎓', label: 'A government doubles spending on university education and vocational training', note: '' },
          { icon: '🏭', label: 'New industrial robots replace manual labour, cutting production costs across all sectors', note: '' },
          { icon: '📈', label: 'Consumer confidence rises and households increase spending on goods and services', note: '' },
          { icon: '🌱', label: 'Favourable weather enables a record harvest, expanding agricultural productive capacity', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>rising consumer confidence and spending</strong>. An increase in consumer demand causes a movement toward the existing PPF (reducing unemployment/spare capacity) – it does not shift the frontier outward. The other three directly increase productive capacity: education investment builds human capital; industrial robots are new technology; a record harvest expands agricultural output potential. Demand-side increases close the gap between actual output (inside PPF) and potential output (on PPF) – supply-side improvements shift the PPF itself.'
      },

      /* 9 – Data table: capital vs consumer goods trade-off */
      { type: 'data_table',
        id: 'q_ppf_9',
        stem: 'Two economies with identical starting PPFs make different allocation choices over 20 years.',
        headers: ['Economy', 'Capital goods share of output (avg)', 'Consumer goods share', 'GDP growth (annual avg)'],
        rows: [
          ['Economy Alpha', '35%', '65%', '6.2%'],
          ['Economy Beta', '18%', '82%', '2.1%'],
          ['South Korea 1960–1990 (reference)', '32%', '68%', '8.1%'],
          ['UK 1990–2010 (reference)', '17%', '83%', '2.4%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data in terms of PPF theory?',
        opts: [
          'Higher capital goods investment is associated with faster PPF outward shifts – consistent with the capital-consumer goods trade-off theory',
          'Maximising consumer goods production is the best development strategy – Economy Beta\'s citizens are better off in every period',
          'Both economies will converge to the same PPF position over time regardless of allocation choices',
          'The data show that Alpha\'s growth is unsustainable – excessive capital investment always leads to diminishing returns'
        ],
        ans: 0,
        exp: 'The data show a consistent pattern: economies allocating more resources to capital goods (Alpha: 35%, S.Korea: 32%) achieve higher long-run growth rates (6.2%, 8.1%) versus those prioritising consumption (Beta: 18%, UK: 17% → 2.1%, 2.4% growth). This is consistent with PPF theory: capital goods investment shifts the PPF outward more rapidly (new machines, infrastructure, technology). The trade-off is real – Beta\'s citizens consume more now but forfeit faster future growth. South Korea\'s industrialisation strategy is the canonical real-world example of this trade-off paying off.'
      },

      /* 10 – Para fill: PPF and opportunity cost */
      { type: 'para_fill',
        id: 'q_ppf_10',
        stem: 'Complete the paragraph about the PPF and resource allocation.',
        anchor: 'The PPF illustrates the fundamental economic concepts of scarcity, choice, and opportunity cost.',
        para: 'The PPF shows the maximum combinations of two goods an economy can produce when all resources are [1] used. Any point [2] the frontier is productively efficient – producing more of one good requires [3] less of the other. The [4] shape of the PPF reflects increasing opportunity cost: as more resources are shifted to one good, [5] suitable resources are used, making each additional unit more [6] to produce. An outward shift of the PPF represents [7], caused by better [8] or increased [9] inputs.',
        blanks: [
          { id: 1, opts: ['fully', 'partially', 'efficiently', 'freely'], ans: 0 },
          { id: 2, opts: ['on', 'inside', 'outside', 'near'], ans: 0 },
          { id: 3, opts: ['producing', 'consuming', 'importing', 'exporting'], ans: 0 },
          { id: 4, opts: ['bowed-out', 'straight', 'bowed-in', 'vertical'], ans: 0 },
          { id: 5, opts: ['less', 'more', 'equally', 'perfectly'], ans: 0 },
          { id: 6, opts: ['costly', 'cheap', 'easy', 'profitable'], ans: 0 },
          { id: 7, opts: ['economic growth', 'economic decline', 'full employment', 'causes-of-inflation-and-deflation'], ans: 0 },
          { id: 8, opts: ['technology', 'prices', 'demand', 'exports'], ans: 0 },
          { id: 9, opts: ['factor', 'consumer', 'financial', 'traded'], ans: 0 }
        ],
        exp: '(1) <strong>Fully</strong> – all resources employed efficiently. (2) <strong>On</strong> the frontier – productive efficiency. (3) <strong>Producing</strong> – the trade-off: more of A means less of B. (4) <strong>Bowed-out</strong> (concave) – the characteristic shape. (5) <strong>Less</strong> suitable resources are used as we move along the frontier. (6) <strong>Costly</strong> – increasing opportunity cost. (7) <strong>Economic growth</strong> – outward shift = more capacity. (8) <strong>Technology</strong> – TFP improvements shift the frontier. (9) <strong>Factor</strong> inputs – more labour, capital, or land also shift the PPF outward.'
      }

    ]
  };

})();
