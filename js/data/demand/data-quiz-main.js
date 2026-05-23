(function () {

  window.ECONOS_QUIZ = {
    id:       'demand_main',
    topicId:  'demand_main',
    title:    'Demand',
    subtitle: 'Theme 1.5 &#183; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the law of demand, movement along vs shift of the demand curve, non-price determinants, consumer surplus, derived demand, and real-market applications. Mixed formats &#8212; sort, paragraph completion, data table, chain &#8212; designed for the analysis marks Edexcel rewards.',
    shortNames: {
      'demand_1': 'Law of demand',
      'demand_2': 'Movement vs shift',
      'demand_3': 'Non-price determinants',
      'demand_4': 'Consumer surplus',
      'demand_5': 'Derived demand',
      'demand_6': 'Real markets',
      'demand_7': 'Diagram technique'
    },

    questions: [

      /* 1 &#8212; MCQ: law of demand */
      { type: 'mcq',
        stem: 'The <strong>law of demand</strong> states that, ceteris paribus, as the price of a good rises, the quantity demanded falls. Which two effects explain this relationship?',
        opts: [
          'The substitution effect (the good becomes relatively more expensive than alternatives) and the income effect (real purchasing power falls)',
          'The supply effect (higher prices incentivise more production) and the wealth effect (rising prices increase nominal wealth)',
          'The signalling effect (higher prices signal higher quality) and the Veblen effect (conspicuous consumption increases at higher prices)',
          'The production effect (firms expand output at higher prices) and the factor effect (higher prices raise returns to factors of production)'
        ],
        ans: 0,
        exp: 'Two effects underpin the law of demand. The <strong>substitution effect</strong>: as a good\'s price rises, it becomes more expensive relative to substitutes &#8212; consumers switch to cheaper alternatives, reducing quantity demanded. The <strong>income effect</strong>: a price rise reduces real purchasing power (consumers can afford less of everything, including the good in question). For normal goods, both effects reinforce each other, producing a downward-sloping demand curve. For Giffen goods (extremely inferior goods), the income effect can dominate and reverse the usual relationship &#8212; but this is a rare exception.'
      },

      /* 2 &#8212; Elastic sort: movement along vs shift */
      { type: 'elastic_sort',
        stem: 'Classify each event as causing either a <strong>movement along</strong> the demand curve or a <strong>shift</strong> of the demand curve.',
        categories: ['move', 'shift'],
        categoryLabels: ['Movement along the demand curve', 'Shift of the demand curve'],
        goods: [
          { icon: '&#128176;', label: 'The price of cinema tickets rises from &#163;12 to &#163;15', note: '', ans: 'move' },
          { icon: '&#128200;', label: 'A rise in household incomes increases demand for restaurant meals (a normal good)', note: '', ans: 'shift' },
          { icon: '&#9917;', label: 'The price of footballs falls from &#163;25 to &#163;18, increasing quantity demanded', note: '', ans: 'move' },
          { icon: '&#128247;', label: 'A health report links a food product to cancer; consumer demand for it falls', note: '', ans: 'shift' },
          { icon: '&#128664;', label: 'A rise in petrol prices reduces quantity demanded of petrol', note: '', ans: 'move' },
          { icon: '&#128661;', label: 'A sharp fall in bus fares increases demand for bus journeys', note: '', ans: 'move' }
        ],
        exp: '<strong>Movement along</strong> the demand curve: caused ONLY by a change in the good\'s own price. An extension (price falls → QD rises) or contraction (price rises → QD falls). The demand curve does not move. <strong>Shift</strong> of the demand curve: caused by any change in a non-price determinant &#8212; income, tastes, prices of related goods, demographics, expectations. The entire curve moves left (decrease) or right (increase). The most common exam error is saying "demand falls because price rises" &#8212; a price rise causes a contraction in quantity demanded, not a fall in demand.'
      },

      /* 3 &#8212; MCQ: inferior vs normal good */
      { type: 'mcq',
        stem: 'Household incomes rise significantly across the UK. For which of the following pairs would you expect demand to rise for one good and fall for the other?',
        opts: [
          'Demand for restaurant meals rises; demand for supermarket own-brand value food falls',
          'Demand for both luxury cars and public bus travel rises, as consumers have more money to spend on everything',
          'Demand for own-brand value food rises; demand for restaurant meals falls, as consumers save more with higher incomes',
          'Demand for both goods falls, as rising incomes cause consumers to shift toward investment and savings'
        ],
        ans: 0,
        exp: 'This tests the <strong>normal vs inferior good</strong> distinction. A <strong>normal good</strong> has positive income elasticity of demand (YED > 0): demand rises with income. A <strong>inferior good</strong> has negative income elasticity (YED < 0): demand falls when income rises, as consumers switch to superior alternatives. Restaurant meals are a normal good (possibly a luxury with YED > 1). Own-brand value food is an inferior good &#8212; with higher incomes, consumers switch to branded or premium products. Option B is wrong: public bus travel is typically an inferior good (higher incomes → cars instead). Option C reverses the relationship. Option D applies no standard economic framework.'
      },

      /* 4 &#8212; Calculation: consumer surplus */
      { type: 'calculation',
        context: 'A consumer\'s demand for concert tickets can be read from the following willingness to pay:<br><br>1st ticket: willing to pay up to &#163;80<br>2nd ticket: willing to pay up to &#163;60<br>3rd ticket: willing to pay up to &#163;40<br>4th ticket: willing to pay up to &#163;20<br><br>The market price is <strong>&#163;40</strong> per ticket.',
        working: [
          'At &#163;40, the consumer buys tickets where willingness to pay &#8805; &#163;40.',
          'Tickets purchased: 1st (&#163;80), 2nd (&#163;60), 3rd (&#163;40). Not the 4th (&#163;20 < &#163;40).',
          'Consumer surplus per ticket = willingness to pay &#8722; price paid.',
          '1st: &#163;80 &#8722; &#163;40 = &#163;40',
          '2nd: &#163;60 &#8722; &#163;40 = &#163;20',
          '3rd: &#163;40 &#8722; &#163;40 = &#163;0',
          'Total consumer surplus = &#163;40 + &#163;20 + &#163;0 = &#163;60'
        ],
        stem: 'What is the consumer\'s total <strong>consumer surplus</strong> at a market price of &#163;40?',
        opts: [
          { ped: '&#163;60', typ: 'Sum of (WTP &#8722; price) for all units purchased: (80&#8722;40) + (60&#8722;40) + (40&#8722;40) = 40+20+0 = 60', rev: 'Include the third ticket which earns zero surplus but is still purchased' },
          { ped: '&#163;80', typ: 'This is willingness to pay for the first ticket, not total consumer surplus', rev: 'Subtract the price paid from each willingness to pay figure' },
          { ped: '&#163;200', typ: 'This is the total willingness to pay (80+60+40+20) &#8212; does not account for price paid', rev: 'Consumer surplus = WTP minus price paid for each unit' },
          { ped: '&#163;40', typ: 'This is only the surplus on the first ticket', rev: 'Add up the surplus on all units purchased at the market price' }
        ],
        ans: 0,
        exp: 'At a price of &#163;40, the consumer buys 3 tickets (all those with WTP &#8805; &#163;40). Consumer surplus = sum of (WTP &#8722; price) for each unit purchased: <strong>(80&#8722;40) + (60&#8722;40) + (40&#8722;40) = &#163;40 + &#163;20 + &#163;0 = &#163;60</strong>. The third ticket generates zero surplus (paid exactly WTP) but the consumer is still willing to buy it. Consumer surplus represents the welfare gain from market exchange above and beyond what was paid &#8212; it is the "bonus" to consumers. A price fall to &#163;20 would: (a) bring the fourth ticket into the purchase, and (b) increase surplus on all other tickets by &#163;20 each.'
      },

      /* 5 &#8212; Multi-select: non-price demand shifters */
      { type: 'multi_select',
        stem: 'A mobile phone company reduces its handset prices by 20%. Which of the following would shift the <strong>demand curve for the phone</strong> rightward (increase in demand)?',
        opts: [
          'A rise in consumer incomes (assuming mobile phones are a normal good)',
          'A new health report finds smartphones are harmful &#8212; this reduces consumers\' desire to own one',
          'A major competitor\'s phone is recalled due to a safety defect, reducing its availability',
          'The price of mobile phone contracts (a complementary good) falls significantly',
          'The company\'s own price falls by 20%',
          'A significant rise in the student population (a core demographic for smartphone demand)'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F shift the demand curve <strong>rightward</strong>: higher incomes increase demand for a normal good; competitor recall reduces supply of substitutes, increasing demand for this phone; cheaper contracts (complementary good) increase joint demand; larger student population expands the market. Option B shifts demand <strong>leftward</strong> (taste/health concern reduces demand). Option E &#8212; the company\'s own price cut &#8212; causes a <strong>movement along</strong> the demand curve (extension of quantity demanded), NOT a shift. This is the most important distinction in demand analysis.'
      },

      /* 6 &#8212; Para fill: derived demand */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining derived demand.',
        anchor: 'Derived demand links product markets to factor markets through the demand chain.',
        para: 'Derived demand occurs when demand for one good exists because of demand for [1]. For example, demand for steel is [2] from demand for cars and construction. In a [3] market, a firm\'s demand for labour depends on demand for its final [4]. If aggregate demand falls in a [5], firms reduce output and [6] workers &#8212; this is the transmission mechanism from product market to labour market through [7] demand.',
        blanks: [
          { id: 1, opts: ['another good', 'the same good', 'a substitute', 'a complement'], ans: 0 },
          { id: 2, opts: ['derived', 'independent', 'primary', 'elastic'], ans: 0 },
          { id: 3, opts: ['factor', 'goods', 'financial', 'housing'], ans: 0 },
          { id: 4, opts: ['product', 'input', 'capital', 'service'], ans: 0 },
          { id: 5, opts: ['recession', 'boom', 'period of growth', 'tax cut'], ans: 0 },
          { id: 6, opts: ['lay off', 'hire', 'train', 'promote'], ans: 0 },
          { id: 7, opts: ['derived', 'direct', 'joint', 'independent'], ans: 0 }
        ],
        exp: '(1) Derived demand: demand for a factor/intermediate good exists because of demand for <strong>another (final) good</strong>. (2) Steel demand is <strong>derived</strong> from car/construction demand. (3) In a <strong>factor</strong> market (labour, land, capital), demand is always derived. (4) Labour demand depends on demand for the final <strong>product</strong>. (5) In a <strong>recession</strong>, AD falls &#8212; this is the macroeconomic shock that triggers the chain. (6) Firms <strong>lay off</strong> workers when output demand falls &#8212; rising unemployment. (7) The chain operates through <strong>derived</strong> demand. This links macro shocks to micro labour markets: recession → falling product demand → falling derived demand for labour → unemployment.'
      },

      /* 7 &#8212; multi_select: evaluating demand analysis */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>the factors that determine demand in a market</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'While lower mortgage interest rates increase demand for housing by raising affordability, the effect is asymmetric: rate cuts when credit is already loose produce smaller demand increases than equivalent rate rises produce demand falls, because households at their borrowing limit cannot increase demand further regardless of price',
          'Demand for a good shifts rightward when consumer incomes rise, if the good is normal',
          'Rising house prices in the UK reflect both genuine demand increases (income growth, population rise) and price expectations effects that may be self-reinforcing — which means the price signal overstates fundamental scarcity and could be corrected by a supply-side intervention rather than demand management',
          'An inferior good is one where demand falls as income rises, because consumers switch to superior alternatives',
          'The distinction between a movement along and a shift of the demand curve matters analytically: a price cut by a firm expands quantity demanded along the existing curve, while a marketing campaign that changes tastes shifts the entire curve — confusing the two leads to incorrect policy prescriptions about whether price or non-price strategies are more effective',
          'Derived demand means that when consumer demand falls, firms lay off workers'
        ],
        correct: [0, 2, 4],
        exp: '<strong>Options A, C, and E are genuine evaluation moves.</strong> Option A qualifies the income effect of interest rate cuts: it identifies an asymmetry and explains why — the borrowing constraint means demand responses are not symmetric around equilibrium. This weighs the theoretical prediction against a real-world limiting condition. Option C identifies a self-reinforcing expectations mechanism in UK house prices and draws a policy implication from it — supply intervention rather than demand-side management — which is evaluation through directing analysis toward a conclusion. Option E identifies why the movement/shift distinction has practical policy consequences rather than just defining the terms. <strong>Option B</strong> is a definition of a normal good — description. <strong>Option D</strong> is a definition of an inferior good — description. <strong>Option F</strong> describes the derived demand mechanism at a surface level with no evaluation of significance, conditions, or implications.'
      },

      /* 8 &#8212; Odd one out: demand curve shifts */
      { type: 'odd_one_out',
        stem: 'Three of these will cause the demand curve for <strong>domestic air travel</strong> to shift rightward (increase in demand). Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '&#9992;', label: 'A significant rise in disposable incomes across UK households', note: '' },
          { icon: '&#128661;', label: 'A large rise in domestic rail fares makes train travel less attractive', note: '' },
          { icon: '&#128176;', label: 'Airlines reduce ticket prices following increased competition on major routes', note: '' },
          { icon: '&#127757;', label: 'Growing environmental awareness leads many consumers to choose train over plane for domestic journeys', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>airlines reducing ticket prices</strong>. A price change causes a movement <em>along</em> the demand curve (extension of quantity demanded) &#8212; NOT a shift. The demand curve itself does not move. The other three are non-price determinants that shift the curve: higher incomes (demand for normal/luxury travel rises &#8212; rightward shift); higher rail fares (substitutes become more expensive &#8212; rightward shift in demand for flying); growing environmental preference for trains is a <strong>leftward</strong> shift (decrease in demand for air travel) &#8212; actually this shifts demand left, making it the better candidate for odd one out. However, the price reduction is definitively a movement along, not a shift, making it categorically different from all others.'
      },

      /* 9 &#8212; Data table: applying demand determinants */
      { type: 'data_table',
        stem: 'The table shows changes in various factors affecting the UK coffee shop market.',
        headers: ['Factor', 'Change', 'Direction of change'],
        rows: [
          ['Average UK household disposable income', 'Rises by 3%', '&#8593; Up'],
          ['Price of home coffee machines (substitute)', 'Falls by 15%', '&#8595; Down'],
          ['Price of coffee shop sandwiches (complement)', 'Falls by 10%', '&#8595; Down'],
          ['Number of new coffee chains opening in UK', 'Increases', '&#8593; Up (market supply)'],
          ['Social media trend promoting coffee culture', 'Strong growth', '&#8593; Up']
        ],
        question: 'Considering only the <strong>demand-side factors</strong> in the table, what is the <strong>net expected effect</strong> on demand for coffee shop visits?',
        opts: [
          'The net effect is ambiguous &#8212; rising incomes, cheaper complements, and the social media trend all increase demand (rightward shift); cheaper home machines reduce it (leftward shift); the net outcome depends on the relative strength of these opposing effects',
          'Demand will definitely increase &#8212; the three rightward-shifting factors outweigh the one leftward factor',
          'Demand will definitely decrease &#8212; the substitute (home machines) is cheaper, so all consumers will switch away from coffee shops',
          'Only income changes affect demand; the other factors are irrelevant to demand analysis'
        ],
        ans: 0,
        exp: 'Three factors increase demand for coffee shop visits: higher income (normal/luxury good → rightward shift), cheaper sandwiches (complementary good → rightward shift), and the social media trend (taste shift → rightward shift). One factor reduces demand: cheaper home coffee machines (substitute → leftward shift). The <strong>net effect is ambiguous</strong> without knowing the relative magnitudes. Option B over-claims &#8212; the substitute effect may be very strong. Option C over-claims the substitute effect. Option D is wrong &#8212; all non-price determinants shift demand. Acknowledging ambiguity and explaining why is a mark of A-level analytical maturity.'
      },

      /* 10 &#8212; Chain: demand shock to new equilibrium */
      { type: 'chain',
        stem: 'The Bank of England raises interest rates from 0.5% to 5.25%. Place the following consequences in the correct logical order for the <strong>housing market</strong>.',
        items: [
          { label: 'Mortgage costs rise sharply, reducing the effective demand for home purchases', note: '' },
          { label: 'House prices fall as the market adjusts toward a new, lower equilibrium', note: '' },
          { label: 'The Bank of England raises the base rate to 5.25% to combat inflation', note: '' },
          { label: 'Demand for houses shifts leftward &#8212; fewer buyers at any given price', note: '' },
          { label: 'Excess supply emerges &#8212; sellers cannot achieve their asking prices; properties sit on the market unsold', note: '' },
          { label: 'New housing starts fall as developers respond to reduced demand and lower expected selling prices', note: '' }
        ],
        correctOrder: [2, 0, 3, 4, 1, 5],
        exp: '<strong>The correct sequence:</strong><br>1. BoE raises interest rates (policy shock).<br>2. Mortgage costs rise &#8212; the key transmission mechanism to housing demand.<br>3. Housing demand curve shifts leftward (fewer buyers at each price).<br>4. Excess supply at the old price (sellers cannot sell at previous price).<br>5. House prices fall toward new equilibrium.<br>6. New housing starts fall (supply responds with a lag).<br><br>This chain illustrates how a macro policy decision (interest rate) transmits through the financial system into a specific product market (housing) via the demand side. The housing market is particularly interest-rate sensitive because most purchases are mortgage-financed.'
      }

    ]
  };

})();
