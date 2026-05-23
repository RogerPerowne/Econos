(function () {

  window.ECONOS_QUIZ = {
    id:       'economic_systems_main',
    topicId:  'economic_systems_main',
    title:    'Economic Systems',
    subtitle: 'Theme 1.4 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the free market economy, the price mechanism as allocator, command economy advantages and failures, the mixed economy rationale, transition economies, and Hayek\'s knowledge problem. Mixed formats &#8212; sort, para fill, diagnostic pair, data table &#8212; designed for the evaluation marks Edexcel rewards.',
    shortNames: {
      'economic_systems_1': 'Free market',
      'economic_systems_2': 'Free market pros/cons',
      'economic_systems_3': 'Command economy',
      'economic_systems_4': 'Command pros/cons',
      'economic_systems_5': 'Mixed economy',
      'economic_systems_6': 'Price mechanism',
      'economic_systems_7': 'Transition economies'
    },

    questions: [

      /* 1 &#8212; MCQ: invisible hand */
      { type: 'mcq',
        stem: 'Adam Smith\'s concept of the <strong>invisible hand</strong> suggests that:',
        opts: [
          'Individuals pursuing their own self-interest unintentionally promote society\'s interest &#8212; price signals coordinate decentralised decisions without central direction',
          'A visible government hand is needed in all markets to ensure that resources are allocated efficiently and equitably',
          'The invisible hand guarantees optimal outcomes in all markets, including those with externalities, public goods, and information asymmetries',
          'Free markets always produce a more equal distribution of income than command economies'
        ],
        ans: 0,
        exp: 'The invisible hand is Adam Smith\'s metaphor for how price signals coordinate millions of decentralised decisions &#8212; as if guided by an unseen hand &#8212; without requiring central direction. Crucially, the invisible hand works only when prices reflect all costs and benefits. Market failures (externalities, public goods, information asymmetries, monopoly) break the invisible hand mechanism: prices no longer accurately signal true social costs and benefits. This is precisely why Theme 1 moves from free markets to market failure. The invisible hand is not a guarantee of equity &#8212; it reflects ability to pay, not need.'
      },

      /* 2 &#8212; Elastic sort: price mechanism functions */
      { type: 'elastic_sort',
        stem: 'Match each scenario with the function of the price mechanism it best illustrates.',
        categories: ['signal', 'incentive', 'ration'],
        categoryLabels: ['Signalling', 'Incentive', 'Rationing'],
        goods: [
          { icon: '&#128200;', label: 'Rising house prices indicate that housing is scarce relative to demand, prompting developers to build more', note: '', ans: 'signal' },
          { icon: '&#128176;', label: 'Higher oil prices attract new producers into exploration and increase global oil supply', note: '', ans: 'incentive' },
          { icon: '&#128722;', label: 'During a shortage of concert tickets, rising prices ensure only those willing to pay the market price obtain a ticket', note: '', ans: 'ration' },
          { icon: '&#127807;', label: 'Falling wheat prices tell farmers to reduce wheat production and switch to more profitable crops', note: '', ans: 'signal' },
          { icon: '&#128202;', label: 'Profit opportunities in electric vehicle manufacturing attract capital and entrepreneurship into the sector', note: '', ans: 'incentive' },
          { icon: '&#9981;', label: 'Rising energy prices during a gas shortage reduce consumption by pricing out lower-value uses', note: '', ans: 'ration' }
        ],
        exp: '<strong>Signalling</strong>: prices convey information about relative scarcity &#8212; rising prices signal scarcity; falling prices signal surplus. <strong>Incentives</strong>: rising prices increase profit margins, attracting more resources into the market; falling prices squeeze margins, driving resources out. <strong>Rationing</strong>: when demand exceeds supply, rising prices allocate available supply to those who value it most highly (or can pay most). All three functions must operate simultaneously for the price mechanism to allocate resources efficiently &#8212; market failures disrupt one or more functions.'
      },

      /* 3 &#8212; MCQ: Hayek's knowledge problem */
      { type: 'mcq',
        stem: 'Friedrich Hayek\'s <strong>"knowledge problem"</strong> is best described as:',
        opts: [
          'No central authority can possess the dispersed, local, and tacit knowledge that millions of price signals aggregate &#8212; making central planning inevitably inferior to market allocation',
          'Consumers lack the information to make rational decisions, so government must intervene to correct information failures in all markets',
          'Firms in free markets withhold information from consumers to maximise profits, requiring mandatory disclosure regulation',
          'The problem that governments do not have enough economists to analyse all available economic data when setting policy'
        ],
        ans: 0,
        exp: 'Hayek argued that the essential information needed for efficient resource allocation (local knowledge of preferences, production possibilities, opportunity costs) is dispersed across millions of individuals and cannot be centrally gathered or processed. The price mechanism aggregates this dispersed knowledge into a single signal (the price). Central planners &#8212; like Soviet Gosplan &#8212; cannot replicate this information system. The result is chronic misallocation: shortages, surpluses, and wrong goods produced. This insight is the most powerful economic critique of command economies and is directly relevant to contemporary debates about government vs market.'
      },

      /* 4 &#8212; Multi-select: advantages of command economy */
      { type: 'multi_select',
        stem: 'Which of the following are <strong>potential advantages</strong> of a command economy compared to a free market?',
        opts: [
          'Resources can be directed to social priorities (healthcare, education, defence) regardless of ability to pay',
          'Greater equality of income and wealth distribution through state wage and price setting',
          'Capacity to mobilise resources rapidly in national emergencies such as wartime',
          'Prices accurately signal all social costs and benefits, enabling optimal resource allocation',
          'Consumer sovereignty &#8212; citizens receive exactly the goods and services they prefer',
          'Avoidance of speculative boom-bust cycles driven by financial markets'
        ],
        correct: [0, 1, 2, 5],
        exp: 'The potential advantages of command economies are A, B, C, and F. Option D is <strong>incorrect</strong>: command economies remove the price mechanism, so prices cannot signal true social costs &#8212; this is precisely the problem. Option E is <strong>incorrect</strong>: consumer sovereignty is typically absent in command economies; citizens receive what planners decide. The Soviet Union achieved rapid industrialisation in the 1930s&#8211;50s through resource mobilisation (advantage C) and virtually eliminated homelessness and mass poverty (advantages A, B), but collapsed under the weight of misallocation, innovation stagnation, and consumer goods shortages by the 1980s.'
      },

      /* 5 &#8212; Para fill: mixed economy */
      { type: 'para_fill',
        stem: 'Complete the paragraph about the rationale for a mixed economy.',
        anchor: 'All real-world economies are mixed &#8212; the debate is about the degree of intervention.',
        para: 'A mixed economy combines [1] market allocation with government [2]. The rationale is that markets [3] most goods and services efficiently, but fail in specific, well-defined areas. Where markets fail &#8212; due to [4], public goods, or information asymmetries &#8212; government intervention can improve [5] efficiency. The UK is an example: [6] provision for most goods; NHS and state education as areas of public provision; regulated utilities; and a [7] tax system to redistribute income.',
        blanks: [
          { id: 1, opts: ['private', 'public', 'central', 'collective'], ans: 0 },
          { id: 2, opts: ['intervention', 'ownership', 'production', 'subsidy'], ans: 0 },
          { id: 3, opts: ['allocate', 'restrict', 'nationalise', 'control'], ans: 0 },
          { id: 4, opts: ['externalities', 'profits', 'competition', 'wages'], ans: 0 },
          { id: 5, opts: ['allocative', 'productive', 'dynamic', 'technical'], ans: 0 },
          { id: 6, opts: ['private', 'state', 'collective', 'cooperative'], ans: 0 },
          { id: 7, opts: ['progressive', 'regressive', 'flat', 'indirect'], ans: 0 }
        ],
        exp: '(1) <strong>Private</strong> market allocation &#8212; most goods produced by private firms responding to price signals. (2) Government <strong>intervention</strong> &#8212; taxes, subsidies, regulation, public provision. (3) Markets <strong>allocate</strong> most goods efficiently &#8212; the comparative advantage of markets. (4) <strong>Externalities</strong> &#8212; the leading cause of market failure. (5) <strong>Allocative</strong> efficiency &#8212; ensuring resources go to their highest social value use. (6) <strong>Private</strong> provision &#8212; supermarkets, housing, etc. (7) <strong>Progressive</strong> taxation &#8212; higher earners pay higher rates, reducing inequality.'
      },

      /* 6 &#8212; Data table: comparing systems */
      { type: 'data_table',
        stem: 'The table shows indicators for three economies in a given year.',
        headers: ['Indicator', 'Economy A (market-led)', 'Economy B (state-led)', 'Economy C (mixed)'],
        rows: [
          ['Gini coefficient (0 = equal)', '0.41', '0.28', '0.35'],
          ['GDP per capita (&#163;000)', '52', '18', '44'],
          ['Public expenditure (% GDP)', '18%', '55%', '38%'],
          ['Innovation index (1-100)', '78', '34', '65'],
          ['Consumer goods availability', 'High', 'Low&#8211;medium', 'High']
        ],
        question: 'Which interpretation is <strong>most consistent</strong> with economic theory on the trade-offs between economic systems?',
        opts: [
          'Economy A achieves higher income per capita and innovation but at the cost of greater inequality; Economy B achieves more equality but lower income and innovation; Economy C sits between the two on most indicators',
          'Economy B\'s high public expenditure is the primary cause of its low GDP per capita; cutting state spending would automatically raise income per capita to Economy A\'s level',
          'The Gini coefficient is the best measure of economic success; Economy B is therefore the most successful economy',
          'Economy A\'s high innovation index proves that free markets always produce more innovation than any degree of state intervention'
        ],
        ans: 0,
        exp: 'The data illustrate the classic trade-off: Economy A (free market) generates higher income and innovation (market incentives, decentralised decisions) but at the cost of greater inequality (Gini 0.41). Economy B (command/state-led) achieves greater equality but lower income and innovation &#8212; consistent with theory on the knowledge problem and incentive failures of central planning. Economy C (mixed) achieves intermediate outcomes on all indicators. Option B is oversimplified: public expenditure is not the only cause of low income; institutional quality, incentives, and historical factors also matter. Option C applies a single value judgement. Option D overstates the case &#8212; "always" is not supported by the data or theory.'
      },

      /* 7 &#8212; multi_select: evaluating economic systems */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>economic systems and the role of the price mechanism</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'The price mechanism efficiently aggregates dispersed local knowledge, as Hayek argued, but this advantage holds only for private goods with well-defined property rights — it breaks down for public goods (non-excludable, non-rival) and goods with significant externalities, where the price signal systematically misfires',
          'The invisible hand refers to the way free markets coordinate individual decisions without central planning',
          'While command economies achieved notable successes in rapid industrialisation (the USSR\'s GDP grew roughly sevenfold between 1928 and 1970), their failure to generate consumer goods diversity and to match price signals with actual preferences ultimately led to chronic shortages and systemic collapse — suggesting that resource mobilisation without price-based allocation is sustainable in the short run but not the long run',
          'Free markets tend to produce inequality because they reward ability to pay rather than need',
          'The shift from command to market economy in Russia demonstrates that the sequencing of liberalisation matters as much as the direction: rapid privatisation without establishing property rights and competitive institutions produced oligarchic capture and a 45% GDP collapse, whereas China\'s gradualist approach generated growth with stability',
          'Mixed economies are better than both pure free markets and pure command economies'
        ],
        correct: [0, 2, 4],
        exp: '<strong>Options A, C, and E are genuine evaluation moves.</strong> Option A identifies precisely when the invisible hand mechanism fails — it qualifies Hayek\'s argument by specifying the conditions under which price signals misfire (public goods, externalities). This is evaluation by scoping the claim. Option C uses evidence (USSR industrialisation data) to reach a qualified temporal conclusion: resource mobilisation is viable short-run but unsustainable long-run without price allocation — this is evaluation through evidence to a direction. Option E draws a specific policy lesson from the Russia-China comparison: sequencing matters as much as the goal — this uses cross-country evidence to reach a directive conclusion. <strong>Option B</strong> defines the invisible hand — description only. <strong>Option D</strong> describes a consequence of free markets with no weighing, qualification, or evaluative direction. <strong>Option F</strong> asserts a verdict without any analysis of conditions, evidence, or trade-offs — it is a conclusion without argument.'
      },

      /* 8 &#8212; Odd one out: price mechanism functions */
      { type: 'odd_one_out',
        stem: 'Three of these describe how the price mechanism <strong>allocates resources efficiently</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#128200;', label: 'Rising oil prices signal scarcity and incentivise producers to expand supply', note: '' },
          { icon: '&#128722;', label: 'High prices ration scarce goods to consumers who value them most', note: '' },
          { icon: '&#127968;', label: 'Rent controls set maximum rents below the equilibrium, preventing the price mechanism from clearing the housing market', note: '' },
          { icon: '&#128202;', label: 'Profit opportunities in a growing market attract new firms, expanding supply', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>rent controls</strong>. Rent controls are an intervention that <em>prevents</em> the price mechanism from operating &#8212; they set a ceiling below equilibrium, creating a persistent excess demand (housing shortage). The other three describe the price mechanism working: oil price rises signal scarcity (signalling function); high prices ration scarce goods (rationing function); profit opportunities attract new entrants (incentive function). Rent controls illustrate a case where government intervention disrupts the price mechanism, leading to market failure of a different kind.'
      },

      /* 9 &#8212; MCQ: transition economies */
      { type: 'mcq',
        stem: 'Russia\'s rapid privatisation and price liberalisation in the early 1990s ("shock therapy") led to which of the following outcomes?',
        opts: [
          'GDP fell by approximately 45% between 1990 and 1998; oligarchs acquired state assets cheaply; many citizens experienced sharp declines in living standards',
          'Rapid, stable economic growth as free market incentives immediately raised productivity and innovation across the economy',
          'A smooth transition to a well-functioning market economy with strong property rights and competitive markets by 1995',
          'Inflation fell to zero as price liberalisation removed all distortions from the Soviet planning system'
        ],
        ans: 0,
        exp: 'Russia\'s shock therapy is the cautionary tale of transition economics. GDP fell approximately <strong>45% between 1990 and 1998</strong> &#8212; a depression deeper than the US in the 1930s. The rapid privatisation allowed politically connected individuals (oligarchs) to acquire state assets at below-market prices. Institutional prerequisites for market functioning &#8212; property rights, contract law, competitive markets, financial regulation &#8212; were absent. China\'s gradualist approach (maintaining state control while gradually introducing market elements from 1978) achieved faster growth with more stability, suggesting the sequencing and speed of liberalisation matter enormously.'
      },

      /* 10 &#8212; Chain: from price signal to resource reallocation */
      { type: 'chain',
        stem: 'A new technology significantly reduces the cost of producing solar panels. Place the following events in the correct order of the price mechanism\'s response.',
        items: [
          { label: 'Investment and entrepreneurship flow into solar panel manufacturing as profits attract entry', note: '' },
          { label: 'Solar panel supply increases substantially; prices fall further toward the new lower cost level', note: '' },
          { label: 'Production costs for solar panels fall significantly due to the technological improvement', note: '' },
          { label: 'Falling solar panel prices signal to consumers that solar energy has become more affordable', note: '' },
          { label: 'Demand for solar panels rises as more consumers and businesses switch from conventional energy', note: '' },
          { label: 'Resources (labour, capital) shift toward solar manufacturing and away from fossil-fuel energy production', note: '' }
        ],
        correctOrder: [2, 3, 4, 0, 1, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Technology reduces production costs (initial supply-side shock).<br>2. Lower costs signal to consumers that solar is cheaper &#8212; signalling function.<br>3. Demand rises as affordability improves.<br>4. Profit opportunities attract investment and new entrants &#8212; incentive function.<br>5. Supply increases further; prices fall more.<br>6. Resources reallocate from fossil fuels to solar &#8212; the price mechanism solving the "what to produce" question automatically.<br><br>This sequence illustrates all three functions (signalling, incentive, rationing/reallocation) operating simultaneously and without central coordination &#8212; Smith\'s invisible hand in action.'
      }

    ]
  };

})();
