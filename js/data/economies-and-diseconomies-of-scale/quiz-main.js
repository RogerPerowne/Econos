(function () {

  window.ECONOS_QUIZ = {
    title:    'Long-Run Costs &amp; Economies of Scale',
    subtitle: 'Theme 3 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('long_run_costs_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers economies and diseconomies of scale, LRAC envelope curve, minimum efficient scale, and natural monopoly',
    shortNames: [
      'LRAC definition', 'Economies of scale sort', 'MES MCQ', 'Natural monopoly',
      'Diseconomies MCQ', 'Numeric MES', 'Cause & effect', 'Match pairs',
      'Odd one out', 'Data table'
    ],

    questions: [

      /* 1 – MCQ: LRAC and returns to scale */
      { type: 'mcq',
        stem: 'The <strong>long-run average cost (LRAC) curve</strong> is often described as an "envelope curve." This means:',
        opts: [
          'The LRAC is the minimum achievable average cost at each output level when all factors of production can be varied – it traces the lowest point of each possible short-run average cost curve',
          'The LRAC envelops the total cost of all fixed factors – it shows total fixed costs at every level of production',
          'The LRAC is always downward sloping – economies of scale mean costs always fall as output increases',
          'The LRAC is a straight horizontal line in the long run – all costs are variable and constant per unit'
        ],
        ans: 0,
        exp: 'In the long run, all factors of production are variable – firms can choose their optimal capital stock for each output level. The LRAC is constructed from many short-run ATC curves (each representing a different plant size). At each output level, the firm would choose the plant size with the lowest ATC → the LRAC traces the lowest achievable ATC at every output. This creates the characteristic U-shape: falling LRAC (economies of scale) → minimum efficient scale (MES) → rising LRAC (diseconomies of scale). In practice, many firms have a flat section (constant returns to scale) between MES and diseconomies.'
      },

      /* 2 – Elastic sort: internal vs external economies of scale */
      { type: 'elastic_sort',
        stem: 'Classify each economy of scale as <strong>internal</strong> (arising within the firm) or <strong>external</strong> (arising from industry growth).',
        categories: ['internal', 'external'],
        categoryLabels: ['Internal economies of scale', 'External economies of scale'],
        goods: [
          { icon: '🏭', label: 'A large manufacturer can afford to run dedicated production lines for each product', note: '', ans: 'internal' },
          { icon: '🎓', label: 'A growing tech cluster in a city produces a pool of specialised engineers all local firms can hire', note: '', ans: 'external' },
          { icon: '💰', label: 'A large supermarket can borrow at lower interest rates than a small corner shop', note: '', ans: 'internal' },
          { icon: '🚚', label: 'A developed road and port network serving a whole industry reduces logistics costs for all firms', note: '', ans: 'external' },
          { icon: '🔬', label: 'A large pharmaceutical firm spreads R&D costs across millions of units', note: '', ans: 'internal' },
          { icon: '⚙️', label: 'Industry suppliers invest in specialised tools and components as the industry grows – reducing prices for all', note: '', ans: 'external' }
        ],
        exp: '<strong>Internal economies</strong>: benefits arising from the firm\'s own growth – technical (specialisation, indivisibilities), purchasing (bulk buying), financial (lower borrowing rates for large firms), managerial (specialist managers), marketing (bulk advertising). <strong>External economies</strong>: benefits from industry/regional growth – skilled labour pool, specialised suppliers, knowledge spillovers, infrastructure. Silicon Valley, the City of London, and automotive clusters (e.g. Derby for Rolls-Royce) demonstrate external economies: firms benefit from locating near each other.'
      },

      /* 3 – MCQ: minimum efficient scale */
      { type: 'mcq',
        stem: 'The <strong>minimum efficient scale (MES)</strong> is:',
        opts: [
          'The lowest output level at which a firm exhausts all economies of scale and reaches minimum long-run average cost',
          'The maximum size a firm can achieve before diseconomies of scale set in',
          'The smallest firm size that is legally permitted to operate in a regulated industry',
          'The minimum output level a firm must produce to cover its fixed costs'
        ],
        ans: 0,
        exp: 'MES is the output level at which LRAC reaches its minimum – the point where all economies of scale have been exhausted and constant returns to scale begin (or diseconomies begin if there is no flat section). MES is significant for market structure: if MES is large relative to total market demand, only a few firms can operate efficiently (oligopoly/natural monopoly). If MES is small relative to demand, many firms can coexist efficiently (competitive market). UK water and electricity transmission have very high MES relative to market size → natural monopoly. UK restaurants have very low MES → highly competitive market.'
      },

      /* 4 – MCQ: natural monopoly */
      { type: 'mcq',
        stem: 'A <strong>natural monopoly</strong> occurs when:',
        opts: [
          'Economies of scale are so large relative to market demand that one firm can supply the entire market at a lower average cost than two or more competing firms – breaking up the market would raise costs',
          'A firm earns monopoly profits through patent protection or brand loyalty rather than superior efficiency',
          'A firm uses predatory pricing to drive all competitors out of a market and then raises prices',
          'Government ownership of an industry inevitably leads to monopoly conditions due to the absence of profit motive'
        ],
        ans: 0,
        exp: 'Natural monopoly: the LRAC is still falling at the output level of total market demand. If one firm supplies the whole market, LRAC is minimised. If two firms split the market, each operates at half the quantity → higher LRAC → higher costs → higher prices or losses. Breaking up a natural monopoly into competing firms would <strong>raise costs and prices</strong>. Examples: water mains networks, electricity transmission grids, rail track – duplicating these would be massively wasteful. The policy challenge: how to regulate natural monopolies (price = AC, RPI-X, profit caps) without the efficiency of competition.'
      },

      /* 5 – MCQ: diseconomies of scale */
      { type: 'mcq',
        stem: 'Which of the following is a common cause of <strong>diseconomies of scale</strong>?',
        opts: [
          'Managerial inefficiency – as firms grow very large, coordination problems, communication breakdowns, and bureaucracy increase costs per unit',
          'A firm running out of economies of scale at the minimum efficient scale – the LRAC curve always rises after MES',
          'External diseconomies – large firms attract more regulatory attention, raising compliance costs',
          'Factor price inflation – large firms bid up the prices of raw materials as they buy in bulk'
        ],
        ans: 0,
        exp: 'Diseconomies of scale arise when the LRAC rises as output increases – causes include: <strong>managerial diseconomies</strong> (span of control too wide, coordination becomes complex – "too many layers of management"); <strong>motivational diseconomies</strong> (workers in large firms feel less connected, reducing productivity – "X-inefficiency"); <strong>communication overload</strong> (decisions slow down in large hierarchies). Factor price inflation (Option D) would be an external diseconomy affecting the whole industry, not just one firm. The empirical question: at what size do diseconomies outweigh economies? Many modern firms (Amazon, Google) have not yet clearly reached diseconomies of scale.'
      },

      /* 6 – Numeric input: MES calculation */
      { type: 'numeric_input',
        stem: 'A steel firm\'s LRAC reaches its minimum at what output level?',
        context: 'LRAC data: 1m tonnes = £120; 2m = £90; 3m = £70; 4m = £60; <strong>5m = £60; 6m = £60</strong>; 7m = £65; 8m = £72. The firm has constant returns to scale between 5m and 6m tonnes.',
        answer: 5,
        tolerance: 0.1,
        unit: 'million tonnes',
        hint: 'MES is the lowest output at which LRAC reaches its minimum value.',
        workingSteps: [
          'LRAC falls from 4m to 5m: £60 = minimum LRAC',
          'LRAC stays at £60 at 6m (constant returns)',
          'LRAC rises at 7m: £65 > £60',
          'MES = 5m tonnes (first point of minimum LRAC)'
        ],
        exp: 'MES = <strong>5 million tonnes</strong> – the first output level at which LRAC reaches its minimum of £60. The firm has constant returns to scale between 5m and 6m (both at £60). Diseconomies set in at 7m tonnes (LRAC rises to £65). If total UK steel demand is 10m tonnes per year, two firms could both operate at MES (5m each), suggesting an oligopoly structure is efficient. If demand were only 6m tonnes, only one firm could reach MES – suggesting a natural monopoly tendency in small markets.'
      },

      /* 7 – Cause & effect: economies of scale and market structure */
      { type: 'cause_effect',
        stem: 'Match each economies-of-scale mechanism to its source.',
        pairs: [
          { cause: 'A large retailer buys 10 million units and negotiates a bulk discount', effect: 'Purchasing (buying) economies – lower input costs per unit' },
          { cause: 'A car manufacturer uses robots for assembly at high volume – justified at large scale', effect: 'Technical economies – indivisible capital reduces cost per unit at high output' },
          { cause: 'A large firm\'s CEO manages 50 product lines – same salary spread over more output', effect: 'Managerial economies – specialist management costs spread over higher output' },
          { cause: 'A startup pays 8% interest on loans; Amazon pays 3% for equivalent credit', effect: 'Financial economies – large firms are lower-risk borrowers' },
          { cause: 'A large firm runs one TV advert reaching 30 million customers; unit marketing cost falls', effect: 'Marketing economies – advertising cost spread over more customers/units' },
          { cause: 'A pharmaceutical company spends £1bn on R&D shared across 100 million tablets', effect: 'Risk-bearing economies – R&D cost per unit falls at large scale' }
        ],
        exp: 'Internal economies of scale by type: <strong>purchasing</strong> (bulk buying power); <strong>technical</strong> (indivisible capital – you can\'t run half a furnace); <strong>managerial</strong> (specialist managers); <strong>financial</strong> (lower borrowing rates for creditworthy large firms); <strong>marketing</strong> (fixed advertising spread over more units); <strong>risk-bearing</strong> (large firms can diversify R&D and spread failure risk). All reduce LRAC as output rises – moving down the LRAC curve. The most important for heavy industry: technical (large-scale plant); for tech: R&D spreading.'
      },

      /* 8 – Match pairs: long-run cost concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Economies of scale', b: 'LRAC falls as output increases – benefits from larger scale' },
          { a: 'Diseconomies of scale', b: 'LRAC rises as output increases – managerial/coordination problems' },
          { a: 'Constant returns to scale', b: 'LRAC unchanged as output increases – flat section of LRAC' },
          { a: 'Minimum Efficient Scale (MES)', b: 'Lowest output at which LRAC is minimised – fully exploits scale economies' },
          { a: 'Natural monopoly', b: 'Industry where one firm can supply total demand at lower cost than two firms' },
          { a: 'LRAC envelope curve', b: 'Minimum achievable ATC at each output, tracing lowest points of SRAC curves' }
        ],
        exp: 'Long-run cost vocabulary: <strong>economies of scale</strong> → falling LRAC; <strong>diseconomies</strong> → rising LRAC; <strong>CRS</strong> → flat LRAC (relevant for large-scale manufacturing where no further economies or diseconomies exist). MES determines minimum firm size for efficiency – and therefore how many firms a market can sustain. Natural monopoly is the extreme case where MES > total market demand. The envelope curve is the conceptual basis of the LRAC: it traces the minimum achievable cost at every output level when capital can be adjusted freely.'
      },

      /* 9 – Odd one out: internal economies of scale */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>internal economies of scale</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🚛', label: 'A large logistics firm negotiates bulk fuel contracts, reducing cost per delivery', note: '' },
          { icon: '🤖', label: 'A car manufacturer invests in automated welding robots – cost-effective only at high volume', note: '' },
          { icon: '🎓', label: 'A growing tech cluster creates a pool of specialised AI engineers all firms in the area can recruit', note: '' },
          { icon: '💰', label: 'A major supermarket chain borrows at 3% while small shops borrow at 8%', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>the tech cluster creating a specialised labour pool</strong>. This is an <strong>external economy of scale</strong> – it arises from the growth of the industry and region, not from the individual firm\'s growth. All firms in the cluster benefit, not just one large firm. The other three are internal economies (benefits from the individual firm\'s own growth): bulk fuel contracts (purchasing economies); automated robots at high volume (technical economies); lower borrowing rates (financial economies). Silicon Valley, the City of London, and pharmaceutical clusters (Cambridge) are classic examples of external economies.'
      },

      /* 10 – Data table: economies of scale in UK water industry */
      { type: 'data_table',
        stem: 'The table shows cost data for hypothetical water supply firms of different sizes.',
        headers: ['Annual output (m litres)', 'Total Annual Cost (£m)', 'Average Cost (£/1000 litres)', 'Type of returns'],
        rows: [
          ['100', '8.0', '80', 'Economies of scale'],
          ['500', '25.0', '50', 'Economies of scale'],
          ['1,000', '35.0', '35', 'Economies of scale'],
          ['2,000', '60.0', '30', 'Constant returns'],
          ['3,000', '90.0', '30', 'Constant returns'],
          ['4,000', '130.0', '32.5', 'Diseconomies begin']
        ],
        question: 'At what output is <strong>MES</strong> achieved, and what does the data suggest about market structure in water supply?',
        opts: [
          'MES achieved at 2 billion litres (£30/1000L). If a region\'s demand is 2–3 billion litres, a single firm can efficiently serve it – consistent with natural monopoly and justifying regulated private monopoly rather than fragmented competition',
          'MES is at 100m litres – the smallest firm already has the lowest cost and the market should be atomistically competitive',
          'MES is at 4 billion litres – so larger is always better and firms should keep expanding',
          'The data show water supply has no economies of scale – cost per unit is constant regardless of scale'
        ],
        ans: 0,
        exp: 'MES is achieved at <strong>2 billion litres</strong> (£30/1000L – minimum LRAC). The flat LRAC at 2–3 billion litres suggests constant returns to scale across this range. Diseconomies begin at 4 billion litres (LRAC rises to £32.5). If a region\'s total water demand is 2–3 billion litres, one firm can serve the entire market at minimum cost (£30/1000L). Two firms splitting the market at 1 billion each would face LRAC of £35 – higher costs and prices for consumers. This is the natural monopoly case for UK water: one regulated firm per region (e.g. Thames Water, Anglian Water) rather than competing firms duplicating expensive pipeline infrastructure.'
      }

    ]
  };

})();
