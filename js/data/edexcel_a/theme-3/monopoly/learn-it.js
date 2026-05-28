window.ECONOS_TOPIC = {
  id: 'monopoly',
  topicNum: '4.5',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Monopoly',
  estTime: '10-12 minutes',
  goal: 'Lock in the monopoly model – sources of power, profit maximisation, welfare loss, and when monopoly may be beneficial.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'A monopoly is a single supplier with no close substitutes. It is a price-maker that restricts output to raise price above marginal cost – creating a deadweight welfare loss. But monopoly can sometimes fund dynamic efficiency through R&D, and natural monopoly requires public intervention.',
    doInThis: 'Work through 8 cards covering the definition and sources of monopoly power, profit maximisation, welfare analysis, natural monopoly, competition policy, and a full 25-mark essay scaffold.',
    outcomes: [
      'Define monopoly and identify the main sources of monopoly power',
      'Draw the monopoly profit-maximisation diagram and identify the profit and DWL areas',
      'Compare monopoly to perfect competition on price, output, and welfare',
      'Evaluate the case for and against monopoly including Schumpeterian arguments'
    ],
    tip: 'Monopoly: MR = MC (profit max). Price: read off demand curve at Q*. P > MC → allocative inefficiency. DWL triangle between competitive and monopoly equilibrium. Compare to PC outcome where P = MC.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'monopoly_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Monopoly: the big picture',
      lede: 'A single seller behind barriers. Restricts output, lifts price, captures surplus – but the story is not all bad.',
      branches: [
        { tone: 'blue',   label: 'Price-maker, not taker',     sub: 'Faces the market demand curve. MR lies below AR – selling more requires cutting price on all units.' },
        { tone: 'amber',  label: 'Output restricted, P > MC',  sub: 'Profit max at MR = MC produces less than the competitive level. The mark-up is the source of welfare loss.' },
        { tone: 'rose',   label: 'Deadweight loss',            sub: 'A triangle of surplus destroyed by under-supply. Plus a transfer of consumer surplus into monopoly profit.' },
        { tone: 'purple', label: 'The Schumpeter defence',     sub: 'Supernormal profits may fund R&D and innovation. Natural monopolies can serve markets at lower cost than rivals could.' }
      ],
      body: 'A <strong>pure monopoly</strong> is a market with a single seller producing a good with no close substitutes. In practice, monopoly power exists on a spectrum – the CMA defines a firm as having "monopoly" position if it has over 25% market share.<br><br>Key features:<br>• Price-maker (not price-taker): faces the downward-sloping market demand curve – must lower price to sell more<br>• MR < AR: to sell one more unit, must reduce price on all existing units → MR < P<br>• Barriers to entry: prevent competition from eroding supernormal profit<br>• Profit maximisation: produce where MR = MC; charge price from demand curve at that quantity',
      keyTerms: [
        { term: 'Pure monopoly', def: 'Single seller; no close substitutes. In practice, CMA uses 25% market share as indicative threshold.' },
        { term: 'Price-maker', def: 'A firm that faces a downward-sloping demand curve – can set price (but faces a trade-off with quantity).' },
        { term: 'MR < AR', def: 'Monopolist must lower price to sell more – each additional sale reduces revenue on existing sales, so MR < price.' }
      ],
      examEdge: 'The difference between price-taker (P = MR) and price-maker (MR < P) is fundamental. Price-takers produce where P = MC; price-makers produce where MR = MC but charge P > MC. This gap (P − MC) is the source of monopoly\'s allocative inefficiency – and is the focus of all welfare analysis.'
    },
    {
      id: 'monopoly_2',
      template: 'mechanisms',
      diagramKey: 'monopolySupernormalProfit',
      title: 'The Monopoly Diagram',
      intro: 'The monopoly diagram is the most important in Theme 3 – every market structure essay needs it or a variant of it.',
      steps: [
        { label: 'Draw the framework', text: 'P axis vertical; Q axis horizontal. Draw downward-sloping demand (AR) curve. Draw MR curve: same y-intercept, twice the slope (for linear demand). Draw MC curve (U-shaped or typically upward-sloping for simplicity). Draw AC curve (U-shaped, above MC, MC crosses at min AC).' },
        { label: 'Find profit-maximising output', text: 'Q* where MR = MC. Draw vertical line up from Q* to the demand curve.' },
        { label: 'Find price', text: 'P* is read off the demand (AR) curve at Q*. Mark this on the price axis. P* > MC at Q*.' },
        { label: 'Identify profit and DWL', text: 'Profit rectangle: (P* − AC at Q*) \xd7 Q*. Shade above AC, below P*. DWL triangle: between competitive output (where MC = Demand) and monopoly output Q*, bounded by demand and MC.' }
      ],
      examEdge: 'Common errors: (1) MR curve not drawn – always include it. (2) Profit read off incorrectly – AC at Q*, not at AC\'s minimum. (3) DWL triangle wrong – it is between Q* and the competitive quantity where MC intersects demand. Mark the competitive output point explicitly for full marks.'
    },
    {
      id: 'monopoly_3',
      template: 'framing',
      title: 'Sources of Monopoly Power',
      body: 'Monopoly power is maintained by <strong>barriers to entry</strong> – obstacles that prevent new firms from competing away supernormal profits. Key sources:<br><br>• <strong>Natural barriers:</strong> economies of scale (natural monopoly); control of essential resources (DeBeers diamonds); high sunk costs (aircraft manufacturing).<br>• <strong>Legal barriers:</strong> patents (20-year protection); copyright; operating licences (aviation, banking). Explicitly created by government to incentivise innovation.<br>• <strong>Strategic barriers:</strong> predatory pricing (price below cost to drive rivals out); limit pricing (set price just below rivals\' average cost to deter entry); brand proliferation; exclusive dealing contracts.<br>• <strong>Incumbency advantages:</strong> network effects (Facebook, WhatsApp – value rises with users); switching costs (consumers locked in by data/habits).',
      keyTerms: [
        { term: 'Barriers to entry', def: 'Obstacles preventing new firms from entering a profitable market – sustain supernormal profits in long run.' },
        { term: 'Network effects', def: 'Value of the product rises as more people use it – creates self-reinforcing monopoly (social media, payments networks).' },
        { term: 'Predatory pricing', def: 'Setting price below cost to drive out rivals – illegal if used to acquire or maintain monopoly position.' }
      ],
      examEdge: 'Network effects are the most important source of modern monopoly power. WhatsApp: all your contacts are on it → switching to a rival costs you access to your social network (switching cost). Facebook, Instagram, TikTok, Google Search all benefit from network effects → entrenched market positions that even better products struggle to dislodge. This is why Big Tech attracts antitrust scrutiny.'
    },
    {
      id: 'monopoly_4',
      template: 'framing',
      diagramKey: 'monopolyDwl',
      title: 'Welfare Analysis: Monopoly vs Competition',
      body: 'Comparing monopoly to perfect competition reveals the welfare cost of monopoly power:<br><br>Under perfect competition: P = MC = AC at efficient output Q_c<br>Under monopoly: P_m > MC, Q_m < Q_c<br><br><strong>Welfare effects:</strong><br>• Consumer surplus falls: higher price and lower quantity → large CS loss<br>• Producer surplus rises: supernormal profit is part of consumer surplus transferred to producer<br>• Deadweight welfare loss: the triangle between Q_m and Q_c bounded by demand and MC – neither consumer nor producer gets this surplus; it is destroyed<br>• Net social welfare: competition CS > monopoly CS + monopoly PS (because of DWL)',
      keyTerms: [
        { term: 'Deadweight loss from monopoly', def: 'Triangle of welfare destroyed by monopoly restriction of output – neither consumer nor producer receives this potential surplus.' },
        { term: 'Consumer surplus transfer', def: 'Part of the consumer surplus reduction is transferred to the monopolist as supernormal profit – redistribution, not destruction.' },
        { term: 'Net welfare loss', def: 'The DWL triangle – unambiguous welfare reduction from monopoly. The CS-to-PS transfer is distributional.' }
      ],
      examEdge: 'The distinction between CS transferred to monopolist (redistribution) and CS destroyed (DWL) is a sophisticated analytical point. Economists are concerned primarily about the DWL (efficiency loss); politicians and consumers are also concerned about the transfer (equity/fairness). Both arguments justify competition policy, but for different reasons.'
    },
    {
      id: 'monopoly_5',
      template: 'paired',
      title: 'Case For and Against Monopoly',
      left: {
        label: 'Case AGAINST monopoly',
        points: [
          'P > MC → allocative inefficiency → DWL',
          'P > minimum AC → may not be productively efficient',
          'X-inefficiency: no competitive pressure → management slack',
          'Transfer of CS to producer → equity concern',
          'Innovation may be stifled: monopoly can rest on market position rather than innovating'
        ]
      },
      right: {
        label: 'Case FOR monopoly (or tolerance)',
        points: [
          'Natural monopoly: one firm more efficient than competition (lower AC at scale)',
          'Schumpeterian: supernormal profit funds R&D → dynamic efficiency (pharmaceuticals, tech)',
          'Global competitiveness: domestic "champion" may need scale to compete internationally',
          'Cross-subsidy: profitable core subsidises loss-making socially valuable services (Royal Mail universal service)',
          'Short-run losses may be tolerated for long-run consumer benefit (Amazon building logistics network)'
        ]
      },
      examEdge: 'The strongest "case for" monopoly is natural monopoly (economies of scale) and Schumpeterian dynamics (R&D). The strongest "case against" is static welfare loss (DWL) and X-inefficiency. Top essays weigh these against each other with reference to the specific industry – pharmaceutical (strong case for, patent) vs water (natural monopoly but regulated, not justified in creating excess profit).'
    },
    {
      id: 'monopoly_6',
      template: 'framing',
      diagramKey: 'naturalMonopolyDiagram',
      title: 'Natural Monopoly and Regulation',
      body: '<strong>Natural monopoly</strong> occurs when the market can be served most cheaply by a single firm (LRAC still falling at the market output level). Breaking it up into competing firms would raise average costs for all – each small firm on the high part of its LRAC curve.<br><br><strong>Regulation options:</strong><br>• <em>Average cost pricing:</em> force P = AC → normal profit; more output than profit-max. Not perfectly allocatively efficient (P > MC) but achieves normal profit.<br>• <em>Marginal cost pricing:</em> force P = MC → allocatively efficient but may be below AC → loss → requires public subsidy to sustain.<br>• <em>RPI-X price cap:</em> cap annual price rises → maintains profit incentive while limiting exploitation.<br>• <em>Nationalisation:</em> public ownership; price set by government at social optimum.',
      keyTerms: [
        { term: 'Average cost pricing', def: 'Regulate P = AC → zero economic profit; more output than profit-max; reduces (but does not eliminate) allocative inefficiency.' },
        { term: 'Marginal cost pricing', def: 'Regulate P = MC → allocatively efficient; may require subsidy if MC < AC (decreasing costs industry).' },
        { term: 'Two-part tariff', def: 'Fixed connection charge (recovers FC) plus usage charge at MC → achieves both cost recovery and allocative efficiency.' }
      ],
      examEdge: 'The two-part tariff is an elegant regulatory solution: charge a standing charge (recovers fixed costs) then P = MC for each unit. Achieves both allocative efficiency AND cost recovery. Examples: electricity/gas standing charges + unit rates; mobile phone plans (fixed monthly + per-call rates). Mention this as a solution to the natural monopoly dilemma.'
    },
    {
      id: 'monopoly_7',
      template: 'framing',
      title: 'Competition Policy and Monopoly',
      body: '<strong>UK competition policy</strong> under the Competition and Markets Authority (CMA):<br><br>• Merger control: block/approve mergers that substantially reduce competition (25% market share threshold)<br>• Market investigations: investigate markets that appear not to be working well (e.g. energy market, auditing, funeral services)<br>• Anticompetitive practices: investigate predatory pricing, exclusive dealing, market sharing agreements<br>• Enforcement: fines up to 10% of global revenue; require divestiture; impose behavioural remedies<br><br><strong>Effectiveness:</strong> CMA blocked Microsoft/Activision (2023, reversed on appeal); Google/Fitbit allowed with conditions; Meta/Giphy forced divestiture. Competition policy has become more active post-2020 in addressing tech platform power.',
      keyTerms: [
        { term: 'CMA', def: 'Competition and Markets Authority – UK regulator for mergers, markets, and anticompetitive practices.' },
        { term: 'Structural remedy', def: 'Require divestiture of assets or business units – restores competition by changing market structure.' },
        { term: 'Behavioural remedy', def: 'Impose conditions on firm behaviour (e.g. must supply rivals on fair terms) – preserves market structure but constrains conduct.' }
      ],
      examEdge: 'Structural vs behavioural remedies: structural (break up the firm, force divestiture) is cleaner and more durable – competition is embedded in market structure. Behavioural (conditions on conduct) is less disruptive but requires ongoing monitoring and is vulnerable to regulatory capture. CMA generally prefers structural remedies where possible. This distinction matters for essays on competition policy.'
    },

    /* ----- Barriers to Entry (merged content) ----- */
    {
      id: 'barriers_entry_2',
      template: 'cause',
      diagramKey: 'mesBarrierDiagram',
      title: 'Structural (innocent) barriers to entry',
      causes: [
        { head: 'Economies of scale', body: 'Incumbents produce at large scale → low AC. Entrants start small → high AC. Entrant cannot match incumbent prices without making a loss until it reaches scale – by which time it may have failed. Natural monopoly is the extreme case.' },
        { head: 'High sunk costs', body: 'Sunk costs are irrecoverable if the firm exits. A firm considering entry faces the risk: if unsuccessful, sunk costs are lost. This risk asymmetry (incumbent has already paid; entrant must commit anew) deters entry. Examples: aircraft R&D, brand building, specialist equipment.' },
        { head: 'Ownership of key resources', body: 'Control of an essential input prevents entry. De Beers: historically controlled 80%+ of global rough diamond supply. OPEC controls oil reserves. UK spectrum licences: limited by physics – only a few firms can hold mobile spectrum.' },
        { head: 'Product uniqueness', body: 'If the incumbent\'s product cannot be replicated (unique knowledge, accumulated experience, first-mover advantage) → entrants cannot offer an equivalent substitute. Regulatory approval processes (pharmaceutical trials) create a time-cost barrier.' }
      ],
      examEdge: 'Sunk costs vs fixed costs: fixed costs can be recovered when exiting (sell machinery, sub-let premises). Sunk costs cannot be recovered (spent on R&D, advertising, regulatory approval). Only sunk costs create entry barriers – if costs are all recoverable, entry is costless and the market is contestable. This distinction is tested in barrier analysis.'
    },
    {
      id: 'barriers_entry_3',
      template: 'cause',
      diagramKey: 'limitPricingDiagram',
      title: 'Strategic (deliberate) barriers to entry',
      causes: [
        { head: 'Predatory pricing', body: 'Incumbent prices below cost to drive out or deter new entrants, then raises price once threat is eliminated. Illegal under competition law but difficult to prove intent. Example: alleged predatory pricing by Standard Oil (1900s). Modern concern: Amazon Marketplace pricing.' },
        { head: 'Limit pricing', body: 'Set price just below the level at which an entrant could make a profit – not necessarily below incumbent\'s own cost. Legitimate but deliberate deterrence. Sacrifices some short-run profit to maintain long-run market position.' },
        { head: 'Excessive brand proliferation', body: 'Fill product space with variants to deny entrant a market niche. Breakfast cereal market: established brands cover every segment – health, indulgent, children\'s. New entrant struggles to find viable niche.' },
        { head: 'Exclusive dealing contracts', body: 'Lock suppliers or retailers into exclusive arrangements. Prevents entrants from accessing distribution channels or inputs. Example: exclusive retail agreements, paying for shelf space (slotting fees).' }
      ],
      examEdge: 'Predatory pricing is the most legally contested strategic barrier. The test (EU case law): price below average variable cost is presumed predatory; below average total cost may be predatory if it is part of a strategy to eliminate competition. Firms must show legitimate commercial justification for below-cost pricing.'
    },
    {
      id: 'barriers_entry_4',
      template: 'cause',
      title: 'Legal and regulatory barriers',
      causes: [
        { head: 'Patents', body: '20-year exclusive right to exploit an invention. Creates a legal monopoly as reward for innovation. Pharmaceutical patents: firms spend £1-2bn developing a drug; patent allows 10+ years of monopoly pricing to recover costs before generics enter.' },
        { head: 'Copyright', body: 'Protects creative works (books, software, music, film) for author\'s life + 70 years. Creates monopoly over specific expression. Enables Disney to sustain revenue from 80-year-old characters.' },
        { head: 'Operating licences', body: 'Government issues limited licences to operate in regulated industries: aviation (airport slots), banking (banking licence), radio spectrum, gambling. Licence creates a legal barrier – new entrants cannot simply set up without regulatory approval.' },
        { head: 'Regulatory compliance costs', body: 'High compliance costs (health and safety, environmental, data protection) disadvantage small entrants relative to large incumbents who have already built compliance infrastructure. Regulatory burden is regressive for market structure.' }
      ],
      examEdge: 'Patent system is the deliberate policy trade-off: 20 years of legal monopoly to incentivise £billions of R&D. Without it, no private firm would invest in pharmaceutical research (rivals would copy immediately). After patent expiry, generic entry → price falls dramatically (generic drugs 90% cheaper than branded). The system is designed to balance static and dynamic efficiency.'
    },
    {
      id: 'barriers_entry_5',
      template: 'framing',
      diagramKey: 'networkEffectDiagram',
      title: 'Network effects as entry barriers',
      body: 'A <strong>network effect</strong> occurs when the value of a product increases as more people use it. Network effects create powerful entry barriers because:\n\n• An entrant starts with zero users – its product is less valuable than the incumbent\'s\n• New users join the incumbent (higher value) not the entrant (lower value)\n• The incumbent\'s network advantage compounds over time\n• Result: "winner-take-all" markets dominated by the first platform to achieve critical mass\n\n<strong>Examples:</strong> WhatsApp (switching means losing contacts), LinkedIn (professional network → switching costs high), Windows (software ecosystem). Network effects explain why tech monopolies are more durable than traditional monopolies – competitors face an almost insurmountable chicken-and-egg problem.',
      keyTerms: [
        { term: 'Network effect', def: 'Value of the product or service increases with the number of users – creates self-reinforcing incumbency advantage.' },
        { term: 'Winner-take-all', def: 'Markets where network effects cause one dominant platform to capture most or all users.' },
        { term: 'Switching cost', def: 'Cost (financial, effort, social) of switching from one product to a rival – locks consumers in and reinforces network effect.' }
      ],
      examEdge: 'Competition authorities are increasingly focused on network effects as a structural barrier in digital markets. The CMA Digital Markets Unit (DMU) is specifically tasked with making tech markets more competitive. The challenge: traditional remedies (break-up, behavioural conditions) may not work if network effects mean any separately owned piece has less value. This is unresolved policy frontier.'
    },
    {
      id: 'barriers_entry_7',
      template: 'paired',
      title: 'Evaluation: barriers and competition policy',
      left: {
        label: 'Why some barriers are justified',
        points: [
          'Patents and copyright incentivise innovation – without barriers, no private R&D',
          'Natural barriers from scale economies are not artificial – they reflect true cost structure',
          'High sunk costs reward firms that took risks in new market development',
          'Some barriers protect consumers (safety licensing for banks, medicines)',
          'International competition: domestic champion may need scale to compete against subsidised foreign rivals'
        ]
      },
      right: {
        label: 'When barriers should be challenged',
        points: [
          'Strategic barriers (predatory pricing, exclusive dealing) are anticompetitive – prohibit under competition law',
          'Network effects may justify interoperability requirements (force platforms to be open)',
          'Excess patent protection beyond innovation incentive costs consumers',
          'Regulatory compliance barriers may be disproportionate – reduce for small entrants',
          'Data barriers (access to user data gives incumbents advantage) – data access mandates for entrants'
        ]
      },
      examEdge: 'The policy response should match the type of barrier: structural barriers (scale economies) → regulate the firm but do not break it up. Legal barriers (patents, licences) → time-limit and scope carefully. Strategic barriers (predatory pricing, foreclosure) → prohibition and fines. Network effects → interoperability mandates, data portability. Each barrier type requires a specific policy tool.'
    },

    /* ----- Price Discrimination (merged content) ----- */
    {
      id: 'price_discrimination_1',
      template: 'framing',
      title: 'Price discrimination: the big picture',
      lede: 'Same good, different prices. A way for firms with market power to capture surplus that single pricing leaves on the table.',
      branches: [
        { tone: 'blue',   label: 'Three conditions',        sub: 'Market power, ability to segment buyers by willingness to pay, and prevention of arbitrage. All three must hold.' },
        { tone: 'green',  label: 'Three degrees',           sub: 'First (perfect, charge each consumer\'s max), second (by quantity or version), third (by group: students, peak/off-peak).' },
        { tone: 'purple', label: 'Surplus transfer',        sub: 'Consumer surplus shifts to producer. Some consumers gain access at lower prices; others pay more than before.' },
        { tone: 'amber',  label: 'Welfare: ambiguous',      sub: 'Output may rise (reducing DWL) but distribution worsens. Whether this is "good" depends on whose welfare you weight.' }
      ],
      body: '<strong>Price discrimination</strong> occurs when a firm charges different prices to different consumers (or consumer groups) for the same good or service, where the price difference is NOT justified by cost differences.<br><br><strong>Three conditions required:</strong><br>1. <strong>Market power</strong> – must be a price-setter, not a price-taker<br>2. <strong>Market segmentation</strong> – must identify groups with different willingness to pay (different PED)<br>3. <strong>Prevention of arbitrage</strong> – must prevent resale between segments (or discrimination collapses)',
      keyTerms: [
        { term: 'Price discrimination', def: 'Charging different prices to different consumers for the same good, where differences are not cost-based.' },
        { term: 'Consumer surplus', def: 'Difference between what consumers are willing to pay and what they actually pay – price discrimination transfers this to the producer.' },
        { term: 'Arbitrage', def: 'Buying in the cheap market and reselling in the expensive market – firms must prevent this for discrimination to work.' }
      ],
      examEdge: 'The key phrase is "not justified by cost differences." Charging more for first-class rail travel that costs more to operate is NOT price discrimination – it reflects higher costs. Charging more for the same train ticket on peak services IS price discrimination – the marginal cost of carrying one more passenger is near zero regardless of time. Always check: is the price difference cost-based or demand-based?'
    },
    {
      id: 'price_discrimination_4',
      template: 'framing',
      diagramKey: 'thirdDegreePd',
      title: 'Third-degree price discrimination',
      body: '<strong>Third-degree price discrimination:</strong> the firm charges different prices to identifiable groups of consumers who have different price elasticities of demand. The most common and most examinable form.<br><br><strong>Pricing rule:</strong> charge higher price to the group with lower PED (less price-sensitive) and lower price to the group with higher PED (more price-sensitive). Profit-maximising condition: MR<sub>A</sub> = MR<sub>B</sub> = MC.<br><br><strong>Classic examples:</strong><br>• Rail: peak (inelastic business travellers) vs off-peak (elastic leisure travellers)<br>• Cinema: adult vs student/senior tickets<br>• Pharmaceuticals: same drug priced higher in USA (inelastic, insured) vs India (elastic, price-sensitive)<br>• International price discrimination: textbooks cheaper in developing markets<br>• Age-based pricing: gym memberships, insurance',
      keyTerms: [
        { term: 'Third-degree discrimination', def: 'Identifiable consumer groups charged different prices based on their different price elasticities of demand.' },
        { term: 'MRₐ = MRₙ = MC', def: 'Profit-maximising condition: equalise marginal revenue across all market segments, set equal to marginal cost.' },
        { term: 'Elasticity-based pricing', def: 'Lower PED group → higher price; higher PED group → lower price. The firm extracts more surplus from less elastic demand.' }
      ],
      examEdge: 'The MR = MR = MC rule is the key analytical framework. In a two-segment market: draw two demand curves (steep for inelastic, flat for elastic); draw corresponding MR curves; find where each MR = MC. The inelastic segment gets higher price, elastic segment gets lower price. Total output is higher than single-price monopoly, and revenue is higher.'
    },
    {
      id: 'price_discrimination_5',
      template: 'diagnose',
      title: 'Welfare effects: third-degree discrimination',
      intro: 'Third-degree discrimination has ambiguous welfare effects – analysis depends on whether the discriminating firm serves both segments or only the high-price segment.',
      rows: [
        { label: 'Scenario', colA: 'Discrimination enables entry to new segment', colB: 'Discrimination replaces single-price monopoly' },
        { label: 'Output effect', colA: 'Total output INCREASES – firm now serves the elastic (low-price) group that it would not serve under a single monopoly price. Additional consumer surplus created.', colB: 'Total output change is ambiguous – depends on demand elasticities. May increase, decrease, or remain the same relative to single-price monopoly.' },
        { label: 'Welfare verdict', colA: 'Likely welfare-improving: consumers in the new segment gain surplus they would not otherwise have. High-price consumers lose some surplus but net effect is positive.', colB: 'Likely welfare-reducing for consumers: consumer surplus redistributed to producer; some consumer groups pay higher prices than under single pricing. Efficiency unclear.' }
      ],
      footer: 'The welfare verdict on price discrimination hinges on the output effect. If discrimination increases output (new segments served), it can improve welfare. If it merely redistributes surplus from consumers to producers without increasing output, it reduces consumer welfare.',
      examEdge: 'Pharmaceutical price discrimination is the key real-world case. Selling the same drug at high prices in the USA and low prices in India: the US consumer pays more (welfare loss for them), but if the Indian price covers MC, Indian consumers gain access to drugs they would otherwise not afford. Net welfare effect: likely positive globally.'
    },
    {
      id: 'price_discrimination_6',
      template: 'paired',
      title: 'Price discrimination: for and against',
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
      examEdge: 'The strongest argument FOR price discrimination is the cross-subsidy case: rail operators use peak business fares (inelastic demand, higher price) to subsidise off-peak rural services (elastic demand, lower price). Without peak pricing, rural routes would close. This shows that the welfare effect depends entirely on how the discriminatory profit is used.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Monopoly',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('monopoly'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers monopoly power, pricing, profit, and welfare effects',
    shortNames: [
      'Monopoly definition','Price maker','Profit max','Welfare loss','Natural monopoly',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A pure monopoly is defined as a market where:',
        opts: [
          'The top four firms control 80% of output',
          'One firm supplies the entire market',
          'Two firms dominate pricing',
          'There are no barriers to entry'
        ],
        ans:  1,
        exp:  'A pure monopoly exists when a single firm is the sole supplier of a good with no close substitutes, typically protected by high barriers to entry.'
      },
      {
        type: 'mcq',
        q:    'Unlike a perfectly competitive firm, a monopolist faces a:',
        opts: [
          'Perfectly elastic demand curve',
          'Downward-sloping demand curve',
          'Perfectly inelastic demand curve',
          'Horizontal marginal revenue curve'
        ],
        ans:  1,
        exp:  'A monopolist is the only seller, so it faces the whole market demand curve, which slopes downward. To sell more, it must lower price for all units.'
      },
      {
        type: 'mcq',
        q:    'For a monopolist with a downward-sloping demand curve, Marginal Revenue is:',
        opts: [
          'Equal to price',
          'Greater than price',
          'Less than price',
          'Equal to zero at all outputs'
        ],
        ans:  2,
        exp:  'Because the monopolist must reduce price on all units to sell one more, MR falls more steeply than AR (price). Therefore MR < P (AR) at every positive output.'
      },
      {
        type: 'numeric_input',
        q:    'A monopolist sells 50 units at £20 each. TC = £800. Calculate supernormal profit.',
        answer: 200,
        tolerance: 0,
        unit: '£',
        hint: 'Supernormal profit = TR − TC.',
        workingSteps: ['TR = £20 × 50 = £1,000','Profit = £1,000 − £800 = £200']
      },
      {
        type: 'mcq',
        q:    'A natural monopoly occurs when:',
        opts: [
          'The government grants one firm an exclusive licence',
          'Long-run average costs fall across the entire market demand range',
          'One firm patents a product',
          'Barriers to entry are created by brand loyalty'
        ],
        ans:  1,
        exp:  'A natural monopoly arises when the scale economies are so large that one firm can supply the whole market at lower average cost than two or more firms could – the market can only support one efficient supplier.'
      },
      {
        type: 'categorise',
        q:    'Categorise each as either a barrier to entry or an efficiency argument for monopoly.',
        categories: ['Barrier to entry','Efficiency argument'],
        items: [
          { item: 'Patent protection',              category: 'Barrier to entry' },
          { item: 'Economies of scale',             category: 'Efficiency argument' },
          { item: 'High sunk costs',                category: 'Barrier to entry' },
          { item: 'R&D investment funded by profit',category: 'Efficiency argument' },
          { item: 'Predatory pricing',              category: 'Barrier to entry' },
          { item: 'Natural monopoly cost savings',  category: 'Efficiency argument' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect in a monopoly market.',
        pairs: [
          { cause: 'Monopolist sets P > MC',              effect: 'Allocative inefficiency / deadweight loss' },
          { cause: 'High barriers to entry persist',      effect: 'Supernormal profit maintained long run' },
          { cause: 'Monopolist faces no competition',     effect: 'Less incentive for productive efficiency' },
          { cause: 'Supernormal profit reinvested',       effect: 'Dynamic efficiency through R&D' },
          { cause: 'Government regulates price at P=MC',  effect: 'Deadweight loss eliminated' },
          { cause: 'Monopolist price discriminates',      effect: 'Consumer surplus transferred to producer' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Patent','Brand loyalty','Perfect information','High sunk costs'],
        ans:  2,
        exp:  'Patents, brand loyalty, and high sunk costs are all barriers to entry that protect monopoly power. Perfect information is a condition of perfect competition – its presence undermines monopoly power.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify at which output the monopolist maximises profit (MR = MC).',
        tableHeaders: ['Output','Price (£)','TR (£)','MR (£)','TC (£)','MC (£)'],
        tableData: [
          ['1','50','50','–','30','–'],
          ['2','45','90','40','52','22'],
          ['3','40','120','30','69','17'],
          ['4','35','140','20','92','23'],
          ['5','30','150','10','120','28']
        ],
        opts: ['Output = 2','Output = 3','Output = 4','Output = 5'],
        ans:  1,
        exp:  'At output 3, MR = 30 and MC = 17, so MR > MC. At output 4, MR = 20 and MC = 23, so MC > MR. Profit is maximised between 3 and 4; conventionally the firm produces 3 units (last unit where MR ≥ MC).'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct definition.',
        pairs: [
          { a: 'Deadweight loss',       b: 'Loss of welfare because output is below the competitive level' },
          { a: 'Price maker',           b: 'Firm that can set its own price along the demand curve' },
          { a: 'X-inefficiency',        b: 'Internal cost inefficiency from lack of competitive pressure' },
          { a: 'Supernormal profit',    b: 'Revenue above all costs including normal profit' },
          { a: 'Natural monopoly',      b: 'Single firm can supply at lower AC than multiple firms' },
          { a: 'Regulatory capture',    b: 'Regulator acts in interest of firm rather than consumers' }
        ]
      }
    ]
  };

})();

