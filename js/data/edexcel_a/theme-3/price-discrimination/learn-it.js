/* ============================================================
   ECONOS – Price Discrimination (Edexcel A 3.4.5d)
   5 cards · rebuilt v0.164.0. Cards 1–2 moved here from the
   Monopoly deck (which now ends the monopoly story at 7 cards);
   cards 3–5 are the "best of" the legacy PD deck, rebuilt onto
   the modern ad-interactive template (the old framing/diagnose/
   paired cards are deleted; the quiz pool below is preserved).

   Card patterns:
     1 Hub-and-spoke (conditions) + examples + pair
     2 Interactive 3-panel diagram (priceDiscPanels, kinked total)
     3 Spectrum (welfare verdict hinge) + pair (for/against)
     4 Tile grid (digital frontier) + evaluation
     5 Comparison table (the three degrees — stretch, beyond spec)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'price-discrimination',
  topicNum: '3.4.5',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Price Discrimination',
  estTime: '14 min',
  goal: 'State the conditions for third-degree price discrimination, build the multi-market diagram, and evaluate the costs and benefits for consumers and firms',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'Price discrimination is charging different prices for the same product where the difference is not justified by costs. This deck covers the exam core — third-degree discrimination: the four conditions, the multi-market diagram with its kinked combined demand, and the welfare verdict that hinges on whether output expands or surplus is merely transferred. Two extension cards cover the digital-economy frontier and the full three-degrees framework.',
    doInThis: 'State the four conditions. Build the two-market diagram and read the prices off each market’s own demand. Run the welfare argument both ways — access widened vs surplus extracted — and apply it to rail and pharmaceutical pricing. Then look at how data and algorithms are changing the game.',
    outcomes: [
      'State the conditions required for third-degree price discrimination',
      'Build the multi-market diagram and explain the kinked combined demand',
      'Explain why the inelastic group pays the higher price',
      'Evaluate the costs and benefits using the output-effect hinge',
      'Discuss how digital pricing is changing price discrimination'
    ],
    tip: 'The key phrase is "not justified by cost differences" — peak rail fares are price discrimination; first-class fares mostly are not.',
    stages: [
      { num: 1, name: 'Learn it', sub: '5 cards \xb7 14 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    /* ====================================================================
       CARD 1 – Third-degree price discrimination — the big picture
       (moved from Monopoly card 5)
       Pattern: Hub-and-spoke (conditions) + examples + pair
       ==================================================================== */
    {
      id: 'pd-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 1 of 5',
      title: 'Third-degree price discrimination — the big picture',
      lede: 'A firm with market power can charge different prices to different groups when their demand elasticities differ.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Charge a <strong>higher price where demand is less elastic</strong> and a lower price where demand is more elastic.' },

      visualKey: 'priceDiscHub',
      visualLabel: 'THE CORE IDEA',
      visualEmoji: '\u{1F3AF}',
      visualCaption: 'The same product, sold to two groups at different prices — because their demand differs.',

      causesFirst: true,
      causesLabel: 'THE FOUR CONDITIONS',
      causesEmoji: '✅',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'purple', icon: '\u{1F3F7}\u{FE0F}', head: 'Market power',    body: 'The firm must be a price maker.' },
        { tone: 'blue',   icon: '✂\u{FE0F}', head: 'Separable markets', body: 'Groups must be identifiable and kept apart.' },
        { tone: 'amber',  icon: '\u{1F4CA}', head: 'Different elasticities', body: 'Demand must differ between the groups.' },
        { tone: 'rose',   icon: '\u{1F6AB}', head: 'Prevent resale',   body: 'No arbitrage — cheap buyers can’t resell to others.' }
      ],

      causes2Label: 'COMMON EXAMPLES',
      causes2Emoji: '\u{1F30D}',
      causes2Style: 'icon-top',
      causes2Cols: 4,
      causes2: [
        { tone: 'green',  icon: '\u{1F686}', head: 'Rail tickets',   body: 'Peak vs off-peak fares.' },
        { tone: 'blue',   icon: '\u{1F3AC}', head: 'Cinema tickets', body: 'Student, adult and senior prices.' },
        { tone: 'purple', icon: '✈\u{FE0F}', head: 'Airline seats', body: 'Higher fares at busy times.' },
        { tone: 'amber',  icon: '\u{1F393}', head: 'Student deals',  body: 'Discounts on software and travel.' }
      ],

      pairLabel: 'Consumers vs the firm',
      pairEmoji: '⚖\u{FE0F}',
      left: {
        tone: 'blue',
        icon: '\u{1F465}',
        iconStyle: 'circle',
        label: 'Consumers',
        points: ['Some groups pay less than a single price', 'But others pay more', 'Access can widen for low-value users']
      },
      right: {
        tone: 'green',
        icon: '\u{1F3E2}',
        iconStyle: 'circle',
        label: 'The firm',
        points: ['Captures more consumer surplus as profit', 'Higher total revenue', 'Profit can fund investment']
      },

      bottomTip: { icon: 'ℹ\u{FE0F}', tone: 'blue', text: 'The price difference must not be cost-based: peak rail fares (same train, near-zero extra cost) are price discrimination; first-class fares mostly reflect real cost differences.' },

      conclusion: { title: 'Big idea', text: 'Price discrimination splits one market into several to capture more consumer surplus as profit.' },
      examEdge: 'State the <strong>conditions first</strong>, then explain how the firm sets a higher price in the less elastic market.'
    },

    /* ====================================================================
       CARD 2 – Price discrimination — the diagrams
       (moved from Monopoly card 6)
       Pattern: Interactive 3-panel diagram (priceDiscPanels, pd-1..pd-3)
       ==================================================================== */
    {
      id: 'pd-diagrams',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 2 of 5',
      title: 'Price discrimination — the diagrams',
      lede: 'The firm allocates output across markets so that marginal revenue is equalised, then charges each market its own price.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The more <strong>inelastic</strong> market ends up with the higher price.' },

      interactiveDiagram: {
        svgKey: 'priceDiscPanels',
        label: 'THE DIAGRAM STORY — two markets, then the kinked total',
        emoji: '\u{1F4CA}',
        wide: true,
        maxWidth: '760px',
        layers: ['pd-1', 'pd-2', 'pd-3'],
        views: [
          {
            label: 'Market A — inelastic',
            tone: 'amber',
            head: 'Panel 1 — the inelastic market',
            body: 'Start with one group. In Market A, set <strong>MR_A = MC</strong>. The steep (inelastic) demand gives a <strong>high price, P_A</strong> on few units.',
            show: ['pd-1']
          },
          {
            label: 'Market B — elastic',
            tone: 'green',
            head: 'Panel 2 — the elastic market',
            body: 'Same product, same <strong>MC</strong> (the dashed red line carries it across). In Market B the flat (elastic) demand gives a <strong>low price, P_B</strong> on many units — so P_A &gt; P_B.',
            show: ['pd-1', 'pd-2']
          },
          {
            label: 'The combined market',
            tone: 'blue',
            head: 'Panel 3 — add them up: the kinked total',
            body: 'The combined demand is the <strong>horizontal sum</strong> of A and B — so it <strong>kinks</strong> at the price where Market B’s buyers enter. The summed MR kinks at the same price, and total output sits where <strong>summed MR = MC</strong>: Q_total = Q_A + Q_B.',
            analysis: 'The same product carries the same MC, yet the price differs purely because elasticity differs — the firm charges more to the group least able to walk away. The kink is the visual proof that the total market is just the two groups stacked sideways.',
            show: ['pd-1', 'pd-2', 'pd-3']
          }
        ]
      },

      causesFirst: true,
      causesLabel: 'HOW TO READ IT',
      causesEmoji: '\u{1F3AF}',
      causesStyle: 'icon-top',
      causesCols: 4,
      causes: [
        { tone: 'blue',   icon: '✂\u{FE0F}', head: 'Split the markets', body: 'Draw a panel for each group of buyers.' },
        { tone: 'purple', icon: '\u{1F4CC}', head: 'Equalise MR = MC', body: 'The same MC level applies in every market.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Read each price',  body: 'Go up to each market’s own AR for its price.' },
        { tone: 'green',  icon: '➕', head: 'Add them up', body: 'The combined demand is the horizontal sum — kinked where the second group enters.' }
      ],

      causes3Label: 'WHAT IT IMPLIES',
      causes3Emoji: '\u{1F4A1}',
      causes3Style: 'icon-top',
      causes3Cols: 4,
      causes3: [
        { tone: 'rose',   icon: '\u{1F4C8}', head: 'Inelastic pays more', body: 'Less able to switch → charged a premium.' },
        { tone: 'green',  icon: '\u{1F4C9}', head: 'Elastic pays less',   body: 'Price-sensitive buyers get a lower price.' },
        { tone: 'blue',   icon: '\u{1F465}', head: 'Wider access',        body: 'Low-value users may still be served.' },
        { tone: 'amber',  icon: '\u{1F4B0}', head: 'Higher total profit', body: 'Captures more of the consumer surplus.' }
      ],

      bottomTip: { icon: 'ℹ\u{FE0F}', tone: 'blue', text: 'The markets must be kept separate — if cheap buyers could resell to expensive ones, the strategy collapses.' },

      conclusion: { title: 'Big idea', text: 'Same product, same MC — but different elasticities give different prices.' },
      examEdge: 'Draw separate market panels sharing <strong>one MC level</strong>, and show each price coming from that market’s own demand.'
    },

    /* ====================================================================
       CARD 3 – Costs, benefits and the welfare verdict
       ("best of" the legacy welfare + for/against cards)
       Pattern: The output-effect hinge + for/against pair
       ==================================================================== */
    {
      id: 'pd-welfare',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 3 of 5',
      title: 'Costs, benefits and the welfare verdict',
      lede: 'Is price discrimination good or bad? The honest answer is: it depends on one thing — whether total output expands, or surplus is merely transferred.',
      ledeStyle: 'plain',

      tip: { icon: '⚖\u{FE0F}', tone: 'amber', text: 'The whole evaluation hinges on the <strong>output effect</strong>. Find it first; everything else follows.' },

      causesPosition: 'top',
      causesLabel: 'THE HINGE — what happens to output?',
      causesEmoji: '\u{1F4CF}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'green', icon: '\u{1F513}', head: 'Output expands → likely welfare gain', body: 'Discrimination lets the firm serve a group it would not serve at one price — new consumers gain access to the product (and surplus) they would otherwise not have.' },
        { tone: 'rose',  icon: '\u{1F501}', head: 'Pure transfer → consumers lose', body: 'If output barely changes, discrimination just converts consumer surplus into producer profit — some groups simply pay more for the same thing.' }
      ],

      flowTitle: 'TWO CASES THAT DECIDE EXAM ANSWERS',
      flowEmoji: '\u{1F30D}',
      flowSep: '→',
      flow: [
        { tone: 'green',  icon: '\u{1F48A}', title: 'Pharmaceuticals', sub: 'High US prices fund R&D; low prices in poorer countries widen access. Output (and access) expands — defensible.' },
        { tone: 'blue',   icon: '\u{1F686}', title: 'Rail cross-subsidy', sub: 'Peak business fares subsidise off-peak and rural services that would otherwise close.' },
        { tone: 'rose',   icon: '\u{1F3AB}', title: 'Captive-market pricing', sub: 'Higher prices for buyers who cannot switch, with no new access created — pure extraction.' }
      ],

      pairLabel: 'FOR AND AGAINST',
      pairEmoji: '⚖\u{FE0F}',
      left: {
        tone: 'green',
        icon: '✅',
        iconStyle: 'circle',
        label: 'In favour',
        points: [
          'Can serve segments a single price would exclude',
          'Cross-subsidy: inelastic buyers fund access for elastic (often poorer) buyers',
          'Extra profit can fund R&D or cover high fixed costs'
        ]
      },
      right: {
        tone: 'rose',
        icon: '⚠\u{FE0F}',
        iconStyle: 'circle',
        label: 'Against',
        points: [
          'Transfers consumer surplus to producers',
          'Inelastic groups (often less mobile or lower-income) pay the most',
          'Requires market power — and may blunt the pressure to cut costs'
        ]
      },

      bottomTip: { icon: 'ℹ\u{FE0F}', tone: 'blue', text: 'The verdict also depends on what the firm <strong>does with the profit</strong> — funding R&D and rural routes reads very differently from funding dividends.' },

      conclusion: { title: 'Big idea', text: 'Price discrimination is neither good nor bad by definition — the output effect, and the use of the profit, decide the verdict case by case.' },
      examEdge: 'Structure the evaluation around the hinge: "if discrimination expands output/access (pharma, rail), welfare can rise; if it merely transfers surplus, consumers lose." One named case on each side earns the evaluation marks.'
    },

    /* ====================================================================
       CARD 4 – The digital frontier
       (rebuilt from the legacy digital-economy card)
       Pattern: Tile grid (digital tools) + policy pair
       ==================================================================== */
    {
      id: 'pd-digital',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 4 of 5',
      title: 'The digital frontier — pricing by algorithm',
      lede: 'Data and algorithms are pushing price discrimination towards its theoretical limit: a different price for every customer.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F916}', tone: 'green', text: 'Digital goods solve the hardest condition automatically: streams and software <strong>cannot be resold</strong>, so arbitrage prevention is perfect.' },

      causesLabel: 'THE DIGITAL TOOLKIT',
      causesEmoji: '\u{1F4BB}',
      causesStyle: 'icon-top',
      causesCols: 2,
      causes: [
        { tone: 'purple', icon: '\u{1F4CA}', head: 'Personalised pricing', body: 'Browsing, purchase and location data reveal individual willingness to pay — approaching a different price per person.' },
        { tone: 'amber',  icon: '⚡', head: 'Dynamic pricing', body: 'Airlines, hotels and ride-hailing reprice in real time as demand shifts — surge pricing is elasticity-reading at speed.' },
        { tone: 'blue',   icon: '\u{1F3AF}', head: 'Personalised offers', body: 'Different users see different promotions and bundles for the same product.' },
        { tone: 'green',  icon: '\u{1F512}', head: 'Perfect arbitrage prevention', body: 'Digital goods are tied to accounts — the resale condition holds by construction.' }
      ],

      pairLabel: 'THE POLICY QUESTION',
      pairEmoji: '\u{1F3DB}\u{FE0F}',
      left: {
        tone: 'blue',
        icon: '\u{1F4BC}',
        iconStyle: 'circle',
        label: 'Normal commerce?',
        points: [
          'Matching price to willingness to pay is what markets do',
          'Surge pricing rations scarce supply to those who value it most',
          'Discounts reach price-sensitive buyers who would otherwise not buy'
        ]
      },
      right: {
        tone: 'rose',
        icon: '\u{1F50D}',
        iconStyle: 'circle',
        label: 'Or exploitation?',
        points: [
          'Consumers may not know they are being individually priced',
          'Data asymmetry: the firm knows your maximum; you don’t know the going rate',
          'The CMA and EU are investigating personalised pricing as a consumer harm'
        ]
      },

      bottomTip: { icon: 'ℹ\u{FE0F}', tone: 'blue', text: 'This is first-degree discrimination escaping the textbook: charging each consumer their own maximum used to be impossible — data is making it operational.' },

      conclusion: { title: 'Big idea', text: 'Technology is converting the most extreme textbook case into everyday practice — and competition policy has not yet decided what to do about it.' },
      examEdge: 'A contemporary example (surge pricing, personalised offers) plus the unresolved policy question is a ready-made evaluation paragraph — the regulatory uncertainty is itself a point.'
    },

    /* ====================================================================
       CARD 5 – Stretch: the three degrees
       (compressed from the legacy first/second/third-degree cards)
       Pattern: Comparison tiles — beyond Edexcel A spec, kept as stretch
       ==================================================================== */
    {
      id: 'pd-three-degrees',
      template: 'ad-interactive',
      stepLabel: 'Learn: Card 5 of 5',
      title: 'Stretch: the three degrees of price discrimination',
      lede: 'The exam focuses on third-degree — but economists distinguish three forms, by how the firm sorts its buyers. Useful context, and a favourite of interviewers.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F4DA}', tone: 'blue', text: 'Beyond the Edexcel A spec — read for depth, not for the exam checklist.' },

      causesLabel: 'THE THREE DEGREES — sorted by how buyers are sorted',
      causesEmoji: '\u{1F522}',
      causesStyle: 'icon-top',
      causesCols: 3,
      causes: [
        { tone: 'purple', icon: '1⃣', head: 'First degree — by individual', body: 'Every buyer pays their personal maximum. All consumer surplus captured; no deadweight loss — but every penny of it goes to the firm. Think haggling, auctions, algorithmic pricing.' },
        { tone: 'blue',   icon: '2⃣', head: 'Second degree — by quantity or version', body: 'One price schedule; buyers self-select. Block tariffs, bulk discounts, basic-vs-premium versions. The firm never needs to identify anyone.' },
        { tone: 'green',  icon: '3⃣', head: 'Third degree — by group', body: 'Identifiable groups with different elasticities pay different prices: students, peak/off-peak, country pricing. The exam case — cards 1–3.' }
      ],

      bottomTip: { icon: '\u{1F4A1}', tone: 'amber', text: 'First-degree is <strong>allocatively efficient</strong> (every mutually beneficial trade happens) yet maximally unequal — the cleanest proof that efficiency and fairness are different questions.' },

      conclusion: { title: 'Big idea', text: 'The three degrees differ by sorting mechanism: per person, per quantity, per group. The economics — extract surplus by matching price to willingness to pay — is the same.' },
      examEdge: 'If a question mentions versioning or bulk discounts, you can name second-degree discrimination for precision — but the analytical framework examiners reward is the third-degree diagram.'
    }
  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0, preserved
   through the v0.164.0 rebuild. Rides along with the Learn It
   data under the same window.ECONOS_QUIZ global.
   ============================================================ */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Price Discrimination',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('price-discrimination'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers conditions, three degrees, and welfare effects of price discrimination',
    shortNames: [
      'Conditions','1st degree','2nd degree','3rd degree','Consumer surplus',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Which of the following is NOT a condition required for price discrimination?',
        opts: [
          'The firm must have market power',
          'Markets must be separable',
          'There must be different price elasticities of demand',
          'The product must be homogeneous and identical in all markets'
        ],
        ans:  3,
        exp:  'Price discrimination requires market power, separable markets (to prevent resale), and different PEDs. It does not require homogeneous products – the product is the same but sold at different prices to different groups.'
      },
      {
        type: 'mcq',
        q:    'First-degree price discrimination involves:',
        opts: [
          'Charging different prices to different consumer groups',
          'Charging lower prices for bulk purchases',
          'Charging each consumer their maximum willingness to pay',
          'Charging different prices at different times of day'
        ],
        ans:  2,
        exp:  'First-degree (perfect) price discrimination charges each individual consumer their maximum reservation price, capturing all consumer surplus. It is largely theoretical but approximated by auction markets.'
      },
      {
        type: 'mcq',
        q:    'An example of third-degree price discrimination is:',
        opts: [
          'Selling bulk packs at a lower unit price',
          'Auctioning a painting to the highest bidder',
          'Student rail discounts versus standard adult fares',
          'Surge pricing on a ride-hailing app'
        ],
        ans:  2,
        exp:  'Third-degree price discrimination charges different prices to different identifiable groups (students vs adults, peak vs off-peak). Students have more elastic demand, so lower prices extract more revenue from them.'
      },
      {
        type: 'mcq',
        q:    'Why must a price-discriminating firm prevent resale between markets?',
        opts: [
          'To protect intellectual property rights',
          'To stop consumers in the cheap market reselling to those in the expensive market',
          'Because resale is illegal under competition law',
          'To prevent government price regulation'
        ],
        ans:  1,
        exp:  'If consumers could buy cheap and resell, all buyers would access the low price, destroying the firm\'s ability to charge higher prices in the other segment and eliminating its extra profit.'
      },
      {
        type: 'numeric_input',
        q:    'A firm charges Group A £20 (sells 100 units) and Group B £12 (sells 150 units). Without discrimination it would charge £15 (sell 200 units). Calculate the revenue gain from discrimination.',
        answer: 800,
        tolerance: 10,
        unit: '£',
        hint: 'Revenue with discrimination − revenue without discrimination.',
        workingSteps: ['With PD: (100×£20)+(150×£12) = £2,000+£1,800 = £3,800','Without PD: 200×£15 = £3,000','Gain = £3,800−£3,000 = £800']
      },
      {
        type: 'categorise',
        q:    'Categorise each example by degree of price discrimination.',
        categories: ['1st degree','2nd degree','3rd degree'],
        items: [
          { item: 'Online auction: each bidder pays their maximum bid',      category: '1st degree' },
          { item: 'Buy 3 for price of 2 deal',                              category: '2nd degree' },
          { item: 'Student discount at cinema',                              category: '3rd degree' },
          { item: 'Personalised pricing via algorithm',                      category: '1st degree' },
          { item: 'Lower unit cost for larger gas usage',                    category: '2nd degree' },
          { item: 'Off-peak rail fares versus peak fares',                   category: '3rd degree' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect regarding price discrimination.',
        pairs: [
          { cause: 'Firm charges high price to inelastic group',    effect: 'Revenue from that group increases' },
          { cause: 'Firm charges low price to elastic group',       effect: 'More sales made to price-sensitive consumers' },
          { cause: 'First-degree PD perfectly practised',           effect: 'All consumer surplus transferred to producer' },
          { cause: 'Resale prevented between markets',              effect: 'Price discrimination remains profitable' },
          { cause: 'Third-degree PD in pharmaceutical market',      effect: 'Lower prices in developing countries increase access' },
          { cause: 'Consumer cannot be identified by group',        effect: 'Third-degree price discrimination not possible' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which of the following is the odd one out?',
        opts: ['Student rail discounts','Peak/off-peak cinema tickets','Single price set by competitive firm','Senior citizen discount'],
        ans:  2,
        exp:  'Student discounts, peak/off-peak tickets, and senior discounts are all examples of third-degree price discrimination. A single competitive price involves no price discrimination.'
      },
      {
        type: 'data_table',
        q:    'A firm sells in two markets. Use the data to calculate total revenue with price discrimination.',
        tableHeaders: ['Market','Price (£)','Quantity','TR (£)'],
        tableData: [
          ['Adult','30','80','?'],
          ['Student','18','60','?'],
          ['Total (with PD)','–','140','?'],
          ['Single price','24','140','?']
        ],
        opts: ['£3,360','£3,480','£3,600','£3,720'],
        ans:  1,
        exp:  'Adult TR = 30×80=£2,400; Student TR = 18×60=£1,080. Total with PD = £2,400+£1,080 = £3,480. Single price: 24×140=£3,360. PD earns £120 more.'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Consumer surplus',          b: 'Difference between what consumers pay and their willingness to pay' },
          { a: 'Market segmentation',       b: 'Dividing consumers into groups with different demand elasticities' },
          { a: 'Price elasticity of demand',b: 'Sensitivity of quantity demanded to price changes' },
          { a: 'Resale prevention',         b: 'Condition needed to maintain price discrimination' },
          { a: '2nd degree PD',             b: 'Lower unit prices for higher quantities purchased' },
          { a: 'Dynamic pricing',           b: 'Real-time price adjustment based on demand conditions' }
        ]
      }
    ]
  };

})();
