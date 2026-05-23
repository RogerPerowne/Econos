(function () {

  window.ECONOS_QUIZ = {
    id:       'ppf_main',
    topicId:  'ppf_main',
    title:    'Production Possibility Frontiers',
    subtitle: 'Theme 1.2 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering PPF construction, productive efficiency, opportunity cost, the bowed-out shape, shifts of the frontier, the consumer&#8211;capital goods trade-off, and applications to trade and development. Mixed formats designed for the analysis and evaluation marks Edexcel rewards.',
    shortNames: {
      'ppf_1': 'PPF construction',
      'ppf_2': 'Opportunity cost',
      'ppf_3': 'Bowed-out shape',
      'ppf_4': 'Shifts',
      'ppf_5': 'Consumer vs capital',
      'ppf_6': 'Efficiency',
      'ppf_7': 'Trade and development'
    },

    questions: [

      /* 1 &#8212; MCQ: points on/inside/outside PPF */
      { type: 'mcq',
        stem: 'An economy is producing at a point <strong>inside</strong> its production possibility frontier. Which statement best describes this situation?',
        opts: [
          'The economy is productively inefficient &#8212; it is not using all available resources fully; output of one good could be increased without reducing output of the other',
          'The economy has achieved allocative efficiency &#8212; it is producing the combination of goods that best reflects consumer preferences',
          'The economy is at the unattainable frontier &#8212; more resources or technology are needed before production can take place',
          'The economy is on the PPF &#8212; any point inside the PPF represents full employment of resources'
        ],
        ans: 0,
        exp: 'A point <strong>inside</strong> the PPF indicates productive inefficiency &#8212; resources are unemployed or underemployed, so it is possible to produce more of one (or both) goods without sacrificing any of the other. Common causes include unemployment, idle machinery, or poor management. A point ON the PPF is productively efficient. A point OUTSIDE the PPF is currently unattainable. Allocative efficiency refers to choosing the right point on the PPF, not being inside or outside it.'
      },

      /* 2 &#8212; Calculation: opportunity cost from a table */
      { type: 'calculation',
        context: 'The table below shows combinations of consumer goods and capital goods an economy can produce on its PPF:<br><br>Point A: Consumer goods = 100, Capital goods = 0<br>Point B: Consumer goods = 80, Capital goods = 10<br>Point C: Consumer goods = 50, Capital goods = 20<br>Point D: Consumer goods = 0, Capital goods = 30',
        working: [
          'From B to C: consumer goods fall from 80 to 50 (&#8722;30 units) while capital goods rise from 10 to 20 (+10 units).',
          'Opportunity cost per capital good = 30 &#247; 10 = 3 consumer goods per capital good.',
          'From A to B: consumer goods fall by 20; capital goods rise by 10 → OC = 2 consumer goods per capital good.',
          'The opportunity cost is increasing as more capital goods are produced &#8212; consistent with a bowed-out PPF.'
        ],
        stem: 'Moving from point B to point C, what is the <strong>opportunity cost of each additional capital good</strong>?',
        opts: [
          { ped: '3 consumer goods per capital good', typ: 'Consumer goods fall by 30 (80→50) as capital goods rise by 10 (10→20): 30&#247;10 = 3', rev: 'Divide the consumer goods given up by the capital goods gained' },
          { ped: '2 consumer goods per capital good', typ: 'This is the opportunity cost between A and B, not B and C', rev: 'Read the correct row: from B to C' },
          { ped: '10 capital goods per consumer good', typ: 'Inverted the ratio &#8212; should be consumer goods given up per capital good gained', rev: 'Opportunity cost of capital goods is measured in consumer goods per capital good' },
          { ped: '1.5 consumer goods per capital good', typ: 'Arithmetic error &#8212; 30&#247;10 = 3, not 1.5', rev: 'Check the arithmetic: 30 consumer goods &#247; 10 capital goods' }
        ],
        ans: 0,
        exp: 'From B to C, consumer goods fall from 80 to 50 (a sacrifice of <strong>30 units</strong>) while capital goods increase from 10 to 20 (a gain of <strong>10 units</strong>). Opportunity cost per capital good = 30 &#247; 10 = <strong>3 consumer goods</strong>. Compare this with A→B (OC = 2 consumer goods per capital good) &#8212; the opportunity cost is rising, confirming the bowed-out shape. The law of increasing opportunity cost: as production of one good expands, progressively more of the other must be sacrificed because resources are not equally suited to all uses.'
      },

      /* 3 &#8212; Elastic sort: causes of PPF shifts */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing either an <strong>outward shift</strong> or an <strong>inward shift</strong> of the PPF.',
        categories: ['out', 'in'],
        categoryLabels: ['Outward shift (PPF shifts out)', 'Inward shift (PPF shifts in)'],
        goods: [
          { icon: '&#128187;', label: 'A major breakthrough in AI-driven manufacturing raises productivity across the economy', note: '', ans: 'out' },
          { icon: '&#127960;', label: 'A prolonged war destroys significant amounts of physical capital', note: '', ans: 'in' },
          { icon: '&#127891;', label: 'Government investment in apprenticeships and technical education raises workforce skills', note: '', ans: 'out' },
          { icon: '&#127774;', label: 'Severe drought permanently reduces agricultural land productivity', note: '', ans: 'in' },
          { icon: '&#128084;', label: 'Discovery of new North Sea oil and gas reserves increases the natural resource base', note: '', ans: 'out' },
          { icon: '&#129405;', label: 'A global pandemic reduces labour supply as millions leave the workforce permanently', note: '', ans: 'in' }
        ],
        exp: '<strong>Outward shifts</strong> occur when the economy gains productive potential: new technology, improved skills, greater resource availability (new oil, more land in use). These represent <em>economic growth</em> &#8212; previously unattainable combinations become possible. <strong>Inward shifts</strong> occur when productive capacity is lost: war destroys capital, environmental damage reduces land, a pandemic permanently reduces labour supply. Note: a movement from inside the PPF to the frontier (reducing unemployment) is not a shift &#8212; it is recovery of existing potential.'
      },

      /* 4 &#8212; Multi-select: statements true of PPF */
      { type: 'multi_select',
        stem: 'Select ALL statements that are <strong>correct</strong> about a production possibility frontier.',
        opts: [
          'Any point on the PPF represents productive efficiency &#8212; maximum output from available resources',
          'A point outside the PPF is unattainable with current resources and technology',
          'A straight-line PPF implies constant opportunity cost &#8212; resources are perfectly homogeneous',
          'An outward shift of the PPF is caused by a movement from inside the frontier to the frontier',
          'Allocative efficiency requires not just being on the PPF but being at the right point on it',
          'A bowed-out PPF reflects the law of increasing opportunity cost'
        ],
        correct: [0, 1, 2, 4, 5],
        exp: 'Options A, B, C, E, and F are all correct. Option D is <strong>incorrect</strong>: moving from inside the frontier to the frontier (for example by reducing unemployment) is not an outward shift &#8212; it is recovery of existing productive capacity. An outward shift requires additional resources or improved technology. The key distinctions: <em>on</em> the PPF = productively efficient; <em>inside</em> = inefficient; <em>outside</em> = unattainable; <em>shift</em> = change in productive potential; <em>movement along</em> = reallocation of existing resources.'
      },

      /* 5 &#8212; Para fill: PPF and trade */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the PPF and gains from trade by selecting the correct word or phrase.',
        anchor: 'The PPF explains why specialisation and trade can benefit both trading partners.',
        para: 'Without trade, each country is limited to consuming within its own [1] frontier. If Country A has a lower [2] cost of producing wheat relative to Country B, it has a [3] advantage in wheat production. By specialising according to this advantage and [4], both countries can consume at points [5] their individual PPFs. This is a key argument for [6] trade, and explains why mutual gains from exchange are possible even when one country has an absolute [7] in all goods.',
        blanks: [
          { id: 1, opts: ['production possibility', 'demand', 'budget', 'aggregate supply'], ans: 0 },
          { id: 2, opts: ['opportunity', 'explicit', 'average', 'marginal'], ans: 0 },
          { id: 3, opts: ['comparative', 'absolute', 'competitive', 'relative'], ans: 0 },
          { id: 4, opts: ['trading', 'competing', 'investing', 'borrowing'], ans: 0 },
          { id: 5, opts: ['beyond', 'inside', 'on', 'below'], ans: 0 },
          { id: 6, opts: ['free', 'managed', 'restricted', 'bilateral'], ans: 0 },
          { id: 7, opts: ['advantage', 'disadvantage', 'surplus', 'deficit'], ans: 0 }
        ],
        exp: '(1) Each country is bounded by its own <strong>production possibility</strong> frontier. (2) Comparative advantage is defined by <strong>opportunity</strong> cost &#8212; not absolute productivity. (3) Lower opportunity cost = <strong>comparative</strong> advantage (not absolute advantage). (4) Specialisation only generates gains if countries then <strong>trade</strong> their surpluses. (5) Trade allows consumption <strong>beyond</strong> the PPF &#8212; the fundamental welfare case for free trade. (6) This is the core argument for <strong>free</strong> trade. (7) Even if Country A has an absolute <strong>advantage</strong> in all goods, Country B can still specialise and gain &#8212; this is the Ricardian insight.'
      },

      /* 6 &#8212; Odd one out: outward PPF shift causes */
      { type: 'odd_one_out',
        stem: 'Three of these will cause the PPF to shift <strong>outward</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#127891;', label: 'Government invests heavily in education and workforce training', note: '' },
          { icon: '&#128187;', label: 'A technological breakthrough raises total factor productivity', note: '' },
          { icon: '&#128200;', label: 'The economy reduces unemployment from 8% to 4%', note: '' },
          { icon: '&#129582;', label: 'Discovery of large new mineral deposits in Scotland', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>reducing unemployment</strong>. Moving unemployed workers into employment increases actual output and moves the economy from inside the PPF toward the frontier &#8212; but this does not shift the frontier itself. The PPF represents <em>maximum possible output</em> with given resources and technology. Reducing unemployment realises existing potential; it does not create new potential. Education, technological progress, and new resource discovery all expand the <em>maximum</em> output possible &#8212; they shift the PPF outward.'
      },

      /* 7 &#8212; MCQ: productive vs allocative efficiency */
      { type: 'mcq',
        stem: 'A country is producing at a point on its PPF, but is producing far more military goods than its population wants relative to consumer goods. Which statement is correct?',
        opts: [
          'The country is productively efficient but allocatively inefficient &#8212; it is on the frontier but at the wrong combination for consumer preferences',
          'The country is both productively and allocatively efficient &#8212; being on the PPF guarantees both types of efficiency',
          'The country is productively inefficient because it is not producing what consumers want',
          'The country is allocatively efficient because it has chosen a point on the PPF'
        ],
        ans: 0,
        exp: 'Being on the PPF guarantees <strong>productive efficiency</strong> &#8212; maximum output from resources, no waste. But productive efficiency does not imply <strong>allocative efficiency</strong>. Allocative efficiency requires producing the combination that maximises consumer welfare &#8212; the "right" point on the PPF. A command economy might achieve productive efficiency (no idle resources) while being severely allocatively inefficient (producing too many tanks, not enough consumer goods). This distinction is central to the critique of central planning.'
      },

      /* 8 &#8212; multi_select: evaluation of capital goods investment */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on the inter-temporal trade-off between consumer and capital goods on the PPF. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Producing more capital goods shifts the PPF outward in the future, enabling higher future consumption.',
          'The case for prioritising capital goods investment is strongest in capital-poor developing economies where the marginal return to new capital is high; in already capital-rich economies, the opportunity cost in foregone consumption is harder to justify because diminishing returns reduce the expected PPF shift.',
          'Although higher investment-to-GDP ratios (South Korea 33%, China 43%) are associated with faster PPF expansion, this correlation does not establish causation: institutional quality, rule of law, and human capital may explain both the willingness to save and the growth rate &#8212; meaning capital investment alone is insufficient without complementary factors.',
          'Capital goods help countries grow because they are used to make other goods.',
          'The inter-temporal trade-off depends critically on whether sacrificed consumer goods today create genuine productive capacity or merely resource misallocation: Soviet-era capital investment was high but produced obsolete industries, demonstrating that the quality and direction of investment matters as much as its quantity.',
          'It is better to invest in capital goods than to consume, because future generations will benefit.'
        ],
        correct: [1, 2, 4],
        exp: '<strong>Option A</strong> is description: it states the PPF mechanism correctly but makes no evaluative move &#8212; no conditions, no weighing, no qualification. <strong>Option B</strong> is strong evaluation: it identifies the condition under which the argument is strongest (capital-poor economy, high marginal return) and the condition under which it weakens (capital-rich, diminishing returns), giving a directional conclusion. This weighs the trade-off contextually. <strong>Option C</strong> is evaluation: it raises the causation problem with the investment-growth correlation using specific data (South Korea, China), identifies omitted variables (institutions, human capital), and reaches a qualified conclusion about what additional factors are needed. <strong>Option D</strong> is pure description with no analytical content. <strong>Option E</strong> is evaluation: it introduces a counter-example (Soviet misallocation) to qualify the general principle that more capital investment equals more future output, making the crucial distinction between quantity and quality of investment. <strong>Option F</strong> is a one-sided claim with no weighing &#8212; it ignores the legitimate claim of present generations to consumption, the risk of misallocation, and the political constraints on sustained low consumption. This is descriptive advocacy, not evaluation.'
      },

      /* 9 &#8212; Data table: PPF and growth */
      { type: 'data_table',
        stem: 'The table shows investment as a percentage of GDP and average annual GDP growth for selected economies over a 20-year period.',
        headers: ['Country', 'Investment (% GDP, avg)', 'GDP growth (% p.a., avg)', 'Current income level'],
        rows: [
          ['South Korea', '33%', '6.2%', 'High income'],
          ['China', '43%', '8.1%', 'Upper-middle income'],
          ['UK', '18%', '2.1%', 'High income'],
          ['Brazil', '19%', '2.4%', 'Upper-middle income'],
          ['Sub-Saharan Africa (avg)', '22%', '3.8%', 'Low income']
        ],
        question: 'Which conclusion is most consistent with <strong>PPF theory</strong> and the data?',
        opts: [
          'Higher investment rates (more capital goods production) are associated with faster outward shifts of the PPF &#8212; consistent with the theory that prioritising capital goods raises future productive potential',
          'High investment necessarily causes high growth regardless of the quality of investment or institutional environment &#8212; the data proves this',
          'The UK\'s low investment rate proves that developed economies do not need investment to maintain their PPF',
          'GDP growth is entirely explained by investment &#8212; other factors such as human capital and technology play no role'
        ],
        ans: 0,
        exp: 'The data show a clear positive association between investment rates and GDP growth (South Korea 33%/6.2%, China 43%/8.1% vs UK 18%/2.1%). This is consistent with PPF theory: producing more capital goods today shifts the PPF further outward in the future. However, Option B over-claims: investment quality and institutional environment matter too (Sub-Saharan Africa invests 22% but grows less than China at 43%). Option C is false: the UK\'s high existing capital stock means lower <em>new</em> investment is needed to maintain the frontier. Option D is also false &#8212; human capital and technology are independent drivers of growth.'
      },

      /* 10 &#8212; Chain: PPF logic sequence */
      { type: 'chain',
        stem: 'A country currently producing inside its PPF decides to increase investment in capital goods. Place the following events in the correct logical order.',
        items: [
          { label: 'Future PPF shifts outward &#8212; previously unattainable output combinations become achievable', note: '' },
          { label: 'Resources are reallocated from consumer goods production to capital goods production', note: '' },
          { label: 'Current consumer goods output falls &#8212; present living standards decline', note: '' },
          { label: 'The economy was initially producing inside its PPF due to unemployed resources', note: '' },
          { label: 'Capital stock expands &#8212; productive capacity of the economy increases', note: '' },
          { label: 'Policymakers decide to prioritise capital goods investment to accelerate long-run growth', note: '' }
        ],
        correctOrder: [3, 5, 1, 2, 4, 0],
        exp: '<strong>The correct sequence:</strong><br>1. Economy is inside PPF (unemployed resources &#8212; context).<br>2. Policy decision to prioritise capital investment.<br>3. Resources reallocated from consumer to capital goods production (movement along PPF).<br>4. Consumer goods output falls &#8212; opportunity cost paid in present living standards.<br>5. Capital stock accumulates &#8212; productive capacity grows.<br>6. Future PPF shifts outward.<br><br>This sequence captures the essential inter-temporal trade-off: sacrifice present consumption to expand future productive potential. It is the PPF illustration of the investment-growth mechanism, and the logic underpinning development strategies from post-war Japan to modern China.'
      }

    ]
  };

})();
