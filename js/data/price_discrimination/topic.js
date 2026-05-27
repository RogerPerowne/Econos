window.ECONOS_TOPIC = {
  id: 'price_discrimination',
  topicNum: '3.11',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Price Discrimination',
  estTime: '9-11 minutes',
  goal: 'Lock in the three degrees of price discrimination, the conditions required, the welfare effects, and how to evaluate whether it is good or bad for consumers.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'Price discrimination occurs when a firm charges different prices for the same good to different consumers or groups, not justified by cost differences. It transfers consumer surplus to producers and can simultaneously increase output – creating complex welfare effects.',
    doInThis: 'Work through 7 cards covering the definition and conditions, first-degree (perfect), second-degree (quantity/versioning), third-degree (group), welfare analysis, real-world examples, and evaluation.',
    outcomes: [
      'State the three conditions necessary for price discrimination',
      'Distinguish the three degrees of price discrimination with examples',
      'Analyse the welfare effects of third-degree price discrimination',
      'Evaluate whether price discrimination is beneficial or harmful overall'
    ],
    tip: 'Price discrimination requires: market power (price-setter), ability to segment markets (identify groups with different PED), and prevention of arbitrage (resale between groups). Without all three, discrimination fails.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'price_discrimination_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Price discrimination: the big picture',
      lede: 'Same good, different prices. A way for firms with market power to capture surplus that single pricing leaves on the table.',
      branches: [
        { tone: 'blue',   label: 'Three conditions',        sub: 'Market power, ability to segment buyers by willingness to pay, and prevention of arbitrage. All three must hold.' },
        { tone: 'green',  label: 'Three degrees',           sub: 'First (perfect, charge each consumer\'s max), second (by quantity or version), third (by group: students, peak/off-peak).' },
        { tone: 'purple', label: 'Surplus transfer',        sub: 'Consumer surplus shifts to producer. Some consumers gain access at lower prices; others pay more than before.' },
        { tone: 'amber',  label: 'Welfare: ambiguous',      sub: 'Output may rise (reducing DWL) but distribution worsens. Whether this is "good" depends on whose welfare you weight.' }
      ],
      body: '<strong>Price discrimination</strong> occurs when a firm charges different prices to different consumers (or consumer groups) for the same good or service, where the price difference is NOT justified by cost differences.<br><br>Key insight: a standard monopolist charges one price and loses potential profit from consumers willing to pay more (consumer surplus above the price) and from consumers who would buy at a lower price. Price discrimination allows the firm to capture more of the consumer surplus as producer surplus.<br><br><strong>Three conditions required:</strong><br>1. <strong>Market power</strong> – must be a price-setter, not a price-taker<br>2. <strong>Market segmentation</strong> – must identify groups with different willingness to pay (different PED)<br>3. <strong>Prevention of arbitrage</strong> – must prevent resale between segments (or discrimination collapses)',
      keyTerms: [
        { term: 'Price discrimination', def: 'Charging different prices to different consumers for the same good, where differences are not cost-based.' },
        { term: 'Consumer surplus', def: 'Difference between what consumers are willing to pay and what they actually pay – price discrimination transfers this to the producer.' },
        { term: 'Arbitrage', def: 'Buying in the cheap market and reselling in the expensive market – firms must prevent this for discrimination to work.' }
      ],
      examEdge: 'The key phrase is "not justified by cost differences." Charging more for first-class rail travel that costs more to operate is NOT price discrimination – it reflects higher costs. Charging more for the same train ticket on peak services IS price discrimination – the marginal cost of carrying one more passenger is near zero regardless of time. Always check: is the price difference cost-based or demand-based?'
    },
    {
      id: 'price_discrimination_2',
      template: 'framing',
      diagramKey: 'firstDegreePd',
      title: 'First-Degree Price Discrimination',
      body: '<strong>First-degree (perfect) price discrimination:</strong> the firm charges every consumer exactly their maximum willingness to pay (their reservation price). Every unit sold at a different price equal to the marginal benefit to that consumer.<br><br><strong>Welfare effects:</strong><br>• Producer captures <em>all</em> consumer surplus – zero consumer surplus remains<br>• BUT: output is higher than standard monopoly – firm produces up to Q<sub>c</sub> (the competitive output), because it is profitable to sell even the last unit at a price just above MC<br>• Result: no deadweight welfare loss (output is allocatively efficient) but all welfare goes to the producer<br>• Allocatively efficient (P = MC for last unit) but distributionally very unequal<br><br><strong>Real-world approximations:</strong> haggling markets, salary negotiations, some professional services (lawyer fees), personalised pricing algorithms.',
      keyTerms: [
        { term: 'First-degree discrimination', def: 'Every consumer charged their exact maximum willingness to pay – zero consumer surplus.' },
        { term: 'Reservation price', def: 'The maximum a consumer is willing to pay for a unit – first-degree discrimination extracts this entirely.' },
        { term: 'Personalised pricing', def: 'Digital economy version of first-degree discrimination – using data and algorithms to set individual prices.' }
      ],
      examEdge: 'First-degree discrimination is "allocatively efficient" in the sense that there is no deadweight loss – all mutually beneficial trades occur. But "efficient" here does not mean "good for consumers." All surplus goes to the producer – it is the maximum possible wealth transfer from consumers to producers. This is a crucial distinction: efficiency and equity are completely different criteria.'
    },
    {
      id: 'price_discrimination_3',
      template: 'framing',
      title: 'Second-Degree Price Discrimination',
      body: '<strong>Second-degree price discrimination:</strong> the firm charges different prices based on quantity purchased or product version, not directly on consumer identity. All consumers face the same price schedule – they self-select into categories.<br><br><strong>Forms:</strong><br>• <strong>Block pricing:</strong> higher price for first units, lower for additional units (e.g., energy tariffs: first 100 kWh at 30p, next 200 at 20p)<br>• <strong>Quantity discounts:</strong> bulk buyers pay lower unit prices (supermarket multipack deals)<br>• <strong>Versioning / product differentiation:</strong> basic vs premium product versions at different prices (software: basic vs pro; airline: economy vs business)<br><br>Second-degree discrimination exploits the fact that high-volume buyers have higher price sensitivity – offering them lower unit prices extracts more revenue than a flat price. The firm does not need to identify individual consumers – the pricing schedule does the sorting.',
      keyTerms: [
        { term: 'Second-degree discrimination', def: 'Different prices by quantity or version – consumers self-select rather than being directly identified.' },
        { term: 'Block pricing', def: 'Different prices for different quantities of the same good – unit price falls with volume.' },
        { term: 'Versioning', def: 'Offering different product versions (basic/premium) at different prices to segment consumers by willingness to pay.' }
      ],
      examEdge: 'Versioning (premium vs economy products) is technically second-degree discrimination only if the cost difference is small relative to the price gap. Airlines: business class seat costs marginally more to provide than economy, but charges 3–4x the price – the premium far exceeds the cost difference, so this is price discrimination. Contrast with genuine product differentiation where higher price fully reflects higher cost.'
    },
    {
      id: 'price_discrimination_4',
      template: 'framing',
      diagramKey: 'thirdDegreePd',
      title: 'Third-Degree Price Discrimination',
      body: '<strong>Third-degree price discrimination:</strong> the firm charges different prices to identifiable groups of consumers who have different price elasticities of demand. The most common and most examinable form.<br><br><strong>Pricing rule:</strong> charge higher price to the group with lower PED (less price-sensitive) and lower price to the group with higher PED (more price-sensitive). Profit-maximising condition: MR<sub>A</sub> = MR<sub>B</sub> = MC.<br><br><strong>Classic examples:</strong><br>• Rail: peak (inelastic business travellers) vs off-peak (elastic leisure travellers)<br>• Cinema: adult vs student/senior tickets<br>• Pharmaceuticals: same drug priced higher in USA (inelastic, insured) vs India (elastic, price-sensitive)<br>• International price discrimination: textbooks cheaper in developing markets<br>• Age-based pricing: gym memberships, insurance',
      keyTerms: [
        { term: 'Third-degree discrimination', def: 'Identifiable consumer groups charged different prices based on their different price elasticities of demand.' },
        { term: 'MRₐ = MRₙ = MC', def: 'Profit-maximising condition: equalise marginal revenue across all market segments, set equal to marginal cost.' },
        { term: 'Elasticity-based pricing', def: 'Lower PED group → higher price; higher PED group → lower price. The firm extracts more surplus from less elastic demand.' }
      ],
      examEdge: 'The MR = MR = MC rule is the key analytical framework. In a two-segment market: draw two demand curves (steep for inelastic, flat for elastic); draw corresponding MR curves; find where each MR = MC. The inelastic segment gets higher price, elastic segment gets lower price. Total output is higher than single-price monopoly, and revenue is higher. This diagram approach is essential for the highest-mark answers.'
    },
    {
      id: 'price_discrimination_5',
      template: 'diagnose',
      title: 'Welfare Effects: Third-Degree Discrimination',
      intro: 'Third-degree discrimination has ambiguous welfare effects – analysis depends on whether the discriminating firm serves both segments or only the high-price segment.',
      rows: [
        { label: 'Scenario', colA: 'Discrimination enables entry to new segment', colB: 'Discrimination replaces single-price monopoly' },
        { label: 'Output effect', colA: 'Total output INCREASES – firm now serves the elastic (low-price) group that it would not serve under a single monopoly price. Additional consumer surplus created.', colB: 'Total output change is ambiguous – depends on demand elasticities. May increase, decrease, or remain the same relative to single-price monopoly.' },
        { label: 'Welfare verdict', colA: 'Likely welfare-improving: consumers in the new segment gain surplus they would not otherwise have. High-price consumers lose some surplus but net effect is positive.', colB: 'Likely welfare-reducing for consumers: consumer surplus redistributed to producer; some consumer groups pay higher prices than under single pricing. Efficiency unclear.' }
      ],
      footer: 'The welfare verdict on price discrimination hinges on the output effect. If discrimination increases output (new segments served), it can improve welfare. If it merely redistributes surplus from consumers to producers without increasing output, it reduces consumer welfare.',
      examEdge: 'Pharmaceutical price discrimination is the key real-world case. Selling the same drug at high prices in the USA and low prices in India: the US consumer pays more (welfare loss for them), but if the Indian price covers MC, Indian consumers gain access to drugs they would otherwise not afford. Net welfare effect: likely positive globally – this is why international price discrimination in pharmaceuticals is often defended on access grounds.'
    },
    {
      id: 'price_discrimination_6',
      template: 'paired',
      title: 'Price Discrimination: For and Against',
      left: {
        label: 'Arguments in favour',
        points: [
          'Can increase total output – serves market segments that single-price monopoly would exclude',
          'Cross-subsidy: high prices from inelastic consumers subsidise access for elastic (poorer) consumers',
          'Pharmaceutical example: funds R&D via high prices in rich markets; enables access in poor markets',
          'May enable firms to cover high fixed costs that justify production at all (natural monopoly case)',
          'Rail pricing: peak fares fund off-peak/rural services that would otherwise be unviable'
        ]
      },
      right: {
        label: 'Arguments against',
        points: [
          'Transfers consumer surplus to producers – income redistribution away from consumers',
          'Requires market power – only possible when competition is already restricted',
          'Consumer groups with inelastic demand (often lower-income, less mobile) pay highest prices',
          'Requires costly segmentation and enforcement – resources wasted on discrimination machinery',
          'Dynamic concern: high prices in protected markets reduce pressure to cut costs or innovate'
        ]
      },
      examEdge: 'The strongest argument FOR price discrimination is the cross-subsidy case: rail operators use peak business fares (inelastic demand, higher price) to subsidise off-peak rural services (elastic demand, lower price). Without peak pricing, rural routes would close. This shows that the welfare effect depends entirely on how the discriminatory profit is used – evaluating price discrimination requires knowing what the firm does with the extra profit.'
    },
    {
      id: 'price_discrimination_7',
      template: 'framing',
      title: 'Digital Economy and Price Discrimination',
      body: 'Digital technology has dramatically expanded firms\' ability to price discriminate:<br><br>• <strong>Data collection:</strong> browsing history, purchase history, location data allow near-perfect identification of willingness to pay – approaching first-degree discrimination<br>• <strong>Dynamic pricing:</strong> airlines, hotels, ride-sharing adjust prices in real-time based on demand (Uber surge pricing) and individual data<br>• <strong>Personalised offers:</strong> Amazon, streaming services show different prices or promotions to different users<br>• <strong>Arbitrage prevention:</strong> digital goods (software, streaming) cannot be resold – perfect arbitrage prevention<br><br>Policy concern: consumers may be unaware they are being individually priced. EU GDPR and CMA focus on data-driven pricing as a potential consumer harm. The CMA has opened investigations into personalised pricing practices.',
      keyTerms: [
        { term: 'Dynamic pricing', def: 'Real-time price adjustment based on current demand conditions and individual user data – digital form of price discrimination.' },
        { term: 'Personalised pricing', def: 'Individual-level pricing based on collected data about willingness to pay – approximates first-degree discrimination.' },
        { term: 'Algorithmic pricing', def: 'Automated price-setting using machine learning – enables discrimination at scale without human intervention.' }
      ],
      examEdge: 'Digital price discrimination is the contemporary frontier of competition policy. The CMA and EU are grappling with whether algorithmic pricing is a new form of predatory or discriminatory behaviour. Key issue: is personalised pricing a normal commercial response to different consumer preferences, or is it exploitative extraction of data-revealed willingness to pay? The policy response is still evolving – this uncertainty is itself an exam-worthy evaluation point.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
