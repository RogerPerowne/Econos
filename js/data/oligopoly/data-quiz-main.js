/* ============================================================
   ECONOS — Quiz content for: Oligopoly
   10 questions covering characteristics, strategic
   interdependence, kinked demand, non-price competition,
   and evaluation of oligopoly performance.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'oligopoly_main',
    topicId:  'oligopoly_main',
    title:    'Oligopoly',
    subtitle: 'Theme 3.13 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions on oligopoly &#8212; the dominant real-world market structure. Covers strategic interdependence, the kinked demand curve model and price rigidity, non-price competition, the competition-to-collusion spectrum, and the welfare evaluation of oligopoly behaviour.',
    shortNames: {
      'oligopoly_1': 'Characteristics',
      'oligopoly_2': 'Strategic interdependence',
      'oligopoly_3': 'Kinked demand curve',
      'oligopoly_4': 'Kinked demand: strengths and limits',
      'oligopoly_5': 'Non-price competition',
      'oligopoly_6': 'Competition to collusion',
      'oligopoly_7': 'Market performance'
    },

    questions: [

      /* 1 — MCQ: concentration ratio */
      { type: 'mcq',
        stem: 'The UK supermarket sector has a four-firm concentration ratio (CR4) of approximately 70%. What does this tell us about market structure?',
        opts: [
          'The four largest supermarkets (Tesco, Sainsbury\'s, Asda, Morrisons) together hold about 70% of grocery sales &#8212; a highly concentrated oligopoly',
          'Each of the four largest supermarkets holds exactly 17.5% market share, indicating a perfectly balanced competitive market',
          'Seventy per cent of UK consumers only shop at one supermarket, indicating extreme brand loyalty and near-monopoly conditions',
          'A CR4 of 70% means the market is perfectly competitive because 30% of the market is held by other firms'
        ],
        ans: 0,
        exp: 'A <strong>four-firm concentration ratio</strong> (CR4) measures the combined market share of the four largest firms. CR4 &#8776; 70% for UK groceries means the top four hold approximately 70% of sales &#8212; a clear oligopoly. It does not imply equal shares: Tesco alone holds approximately 27%, Sainsbury\'s &#8776; 15%, Asda &#8776; 13%, Morrisons &#8776; 9%. An alternative measure is the <strong>Herfindahl-Hirschman Index (HHI)</strong>: the sum of squared market shares. HHI above 2,500 indicates high concentration (used by the CMA in merger assessments). CR4 above 60% is typically treated as indicative of oligopoly in competition policy analysis.'
      },

      /* 2 — Elastic sort: strategic interdependence reactions */
      { type: 'elastic_sort',
        stem: 'The kinked demand model assumes firms react differently to price rises and price cuts. Sort each rival reaction into the correct scenario.',
        categories: ['rise', 'cut'],
        categoryLabels: ['Rival reaction to a PRICE RISE', 'Rival reaction to a PRICE CUT'],
        goods: [
          { icon: '&#9650;', label: 'Rival holds its price steady &#8212; exploiting your higher price to attract your customers', note: '', ans: 'rise' },
          { icon: '&#9660;', label: 'Rival immediately matches the cut &#8212; refusing to let you gain market share at its expense', note: '', ans: 'cut' },
          { icon: '&#128200;', label: 'Raising firm loses significant market share to rivals who remain cheaper', note: '', ans: 'rise' },
          { icon: '&#128201;', label: 'Cutting firm gains few extra customers &#8212; all rivals have also lowered their prices', note: '', ans: 'cut' },
          { icon: '&#128683;', label: 'Demand above current price is elastic &#8212; large customer loss from small price increase', note: '', ans: 'rise' },
          { icon: '&#128200;', label: 'Demand below current price is inelastic &#8212; small customer gain from price reduction', note: '', ans: 'cut' }
        ],
        exp: 'The kinked demand model\'s asymmetric assumption: <strong>rivals do NOT follow price rises</strong> (they sit tight and poach your customers &#8212; you lose a lot of sales &#8594; elastic demand above current price). <strong>Rivals DO match price cuts</strong> (they refuse to lose market share &#8594; you gain few extra customers &#8594; inelastic demand below current price). Combining these creates the "kink" at the current price P*: elastic above, inelastic below. The kink generates a vertical gap in the MR curve, explaining why moderate cost changes do not alter the profit-maximising price &#8212; the price rigidity result.'
      },

      /* 3 — Diagram interpretation: kinked demand */
      { type: 'diagram_interp',
        stem: 'The kinked demand curve diagram is shown. At price P*, demand is elastic above and inelastic below the kink.',
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="270" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="270" x2="400" y2="270" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="288" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="40" x2="200" y2="130" stroke="#2563EB" stroke-width="2.5"/><line x1="200" y1="130" x2="360" y2="260" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="260" fill="#2563EB" font-size="12" font-weight="700">D (kinked)</text><circle cx="200" cy="130" r="5" fill="#2563EB"/><line x1="80" y1="40" x2="130" y2="200" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/><line x1="200" y1="200" x2="360" y2="260" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/><line x1="130" y1="200" x2="130" y2="270" stroke="#2563EB" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="200" y1="200" x2="200" y2="130" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><line x1="130" y1="200" x2="200" y2="200" stroke="#0B1426" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/><text x="165" y="215" fill="#0B1426" font-size="9" text-anchor="middle">MR gap</text><line x1="200" y1="235" x2="360" y2="260" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/><line x1="200" y1="200" x2="200" y2="235" stroke="#EC2D68" stroke-width="3"/><line x1="80" y1="230" x2="360" y2="175" stroke="#1FB574" stroke-width="2.5"/><text x="363" y="175" fill="#1FB574" font-size="12" font-weight="700">MC</text><line x1="55" y1="130" x2="200" y2="130" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="4,3"/><text x="42" y="134" fill="#F5B800" font-size="11" text-anchor="end" font-weight="700">P*</text><line x1="200" y1="130" x2="200" y2="270" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="4,3"/><text x="200" y="288" fill="#F5B800" font-size="11" text-anchor="middle" font-weight="700">Q*</text></svg>',
        caption: 'The kinked demand curve at P*, Q*. The vertical red segment on MR shows the "gap" &#8212; a discontinuity caused by the kink. MC passes through the gap.',
        question: 'Why does MC passing through the vertical gap in MR explain <strong>price rigidity</strong> in oligopoly?',
        opts: [
          'As long as MC stays within the MR gap (moving up or down due to cost changes), the profit-maximising output remains Q* and the profit-maximising price remains P* &#8212; moderate cost shocks do not change the price',
          'The MC curve passing through the gap means the firm is making zero economic profit &#8212; it has no incentive to change price because it cannot improve its position',
          'The MR gap means the firm cannot calculate marginal revenue accurately, so it keeps price constant out of uncertainty rather than for profit-maximising reasons',
          'MC cutting through the MR gap indicates perfect competition: P = MC is achieved when MC intersects MR at Q*'
        ],
        ans: 0,
        exp: 'The vertical <strong>gap in MR</strong> exists because of the kink in demand &#8212; the marginal revenue of the elastic segment (above P*) is higher than the MR of the inelastic segment (below P*), creating a discontinuity at Q*. As long as MC passes through this gap (i.e., MC anywhere between the top and bottom of the gap), profit maximisation gives the same output Q* and price P*. A rise in costs (MC shifts up, stays within gap): no price change. A fall in costs (MC shifts down, stays within gap): no price change. Only if MC shifts <em>outside</em> the gap does the profit-maximising price change. This explains observed price stickiness in petrol retail, supermarkets, and telecoms.'
      },

      /* 4 — Multi-select: non-price competition forms */
      { type: 'multi_select',
        stem: 'Which of the following are examples of <strong>non-price competition</strong> in UK oligopolistic markets?',
        opts: [
          'Tesco Clubcard loyalty scheme rewarding repeat purchases with personalised vouchers',
          'Supermarkets cutting the price of a staple product (bread, milk) by 10%',
          'Apple releasing a new iPhone model with improved camera and battery specifications',
          'Sky offering a bundled package of broadband, TV, and mobile on one monthly contract',
          'A petrol retailer reducing pump prices to match a rival\'s new lower price',
          'Coca-Cola\'s global advertising campaigns emphasising brand lifestyle associations'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F are <strong>non-price competition</strong>. Tesco Clubcard (A): loyalty programme &#8212; builds customer lock-in through data-driven personalisation without changing list prices. Apple iPhone release (C): product development &#8212; competing on specification and brand rather than price. Sky bundle (D): bundling &#8212; packaging multiple services to increase switching costs and reduce exposure to price competition. Coca-Cola advertising (F): brand investment &#8212; competing on brand association and loyalty. Options B and E are <strong>price competition</strong>: cutting the price of bread or matching a rival\'s pump price are direct price moves. Oligopolists prefer non-price competition precisely because price cuts invite retaliation (kinked demand &#8212; rivals match cuts) while non-price moves are harder to immediately replicate.'
      },

      /* 5 — Para fill: game theory and prisoner's dilemma */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining why oligopolists may choose collusion even though it is illegal.',
        anchor: 'The prisoner\'s dilemma helps explain collusive tendencies in oligopoly.',
        para: 'In the [1] dilemma, two firms independently choosing whether to compete or collude face a situation where the [2] outcome (both compete, driving down prices) is the Nash equilibrium even though both firms would prefer to [3] and earn higher profits. This is because each firm has a [4] strategy to compete: if the rival colludes, the competing firm gains market share; if the rival competes, the competing firm at least avoids being undercut. The result is that markets may tend towards competitive pricing even when firms would collectively prefer [5] prices. However, in <strong>repeated</strong> games (where firms interact over many periods), cooperation can be sustained through [6] strategies &#8212; for example, matching any defection with retaliation &#8212; making tacit [7] a stable equilibrium.',
        blanks: [
          { id: 1, opts: ['prisoner\'s', 'Nash', 'Bertrand', 'Cournot'], ans: 0 },
          { id: 2, opts: ['Nash equilibrium', 'collusion', 'monopoly', 'cooperative'], ans: 0 },
          { id: 3, opts: ['collude', 'compete', 'exit', 'merge'], ans: 0 },
          { id: 4, opts: ['dominant', 'cooperative', 'mixed', 'sequential'], ans: 0 },
          { id: 5, opts: ['higher', 'lower', 'competitive', 'regulated'], ans: 0 },
          { id: 6, opts: ['tit-for-tat', 'advertising', 'merger', 'entry'], ans: 0 },
          { id: 7, opts: ['collusion', 'competition', 'entry', 'regulation'], ans: 0 }
        ],
        exp: '(1) <strong>Prisoner\'s</strong>: the classic game theory model of strategic interaction with a dominance trap. (2) <strong>Nash equilibrium</strong>: the self-enforcing outcome where no player can improve by unilaterally changing strategy &#8212; even if it is collectively suboptimal. (3) <strong>Collude</strong>: joint monopoly pricing is the collectively preferred outcome; competition is the individually dominant strategy. (4) <strong>Dominant</strong>: a dominant strategy is the best response regardless of what the rival does &#8212; compete always beats collude against any rival choice. (5) <strong>Higher</strong>: collusion raises prices above the competitive Nash equilibrium. (6) <strong>Tit-for-tat</strong>: cooperate until a rival defects, then retaliate in kind &#8212; the strategy that can sustain cooperation in repeated games. (7) <strong>Collusion</strong>: tacit collusion (without explicit agreement) can be stable in repeated interactions.'
      },

      /* 6 — Diagnostic pair: oligopoly welfare */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Assess the view that oligopoly is harmful for consumer welfare."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Layla', badge: 'Candidate A',
            answer: 'The welfare verdict on oligopoly depends on which tendency dominates in a specific market. <strong>Case against</strong>: oligopolists with significant market power set P &gt; MC (allocative inefficiency), reduce output, and transfer consumer surplus to supernormal profit. Tacit collusion &#8212; without explicit agreement &#8212; can mimic monopoly pricing (UK banking: interest rate convergence; petrol retailing: near-simultaneous price moves). X-inefficiency is possible when high barriers reduce competitive discipline. <strong>Case for</strong> (or against the "always harmful" view): competitive oligopoly (e.g., the 2015&#8211;17 UK supermarket price war triggered by Aldi/Lidl entry) produces near-competitive prices. Schumpeterian dynamics: oligopolists\' supernormal profits fund substantial R&D &#8212; pharmaceutical oligopolists (AstraZeneca, GSK) invest billions in drug development. The inverted-U hypothesis suggests intermediate concentration may be <em>optimal</em> for innovation. The CMA can address excessive concentration through merger control and market investigations. <strong>Overall</strong>: the "harmful" assessment is not predetermined. The outcome depends on whether rivalry (supermarket price war) or coordination (banking fees) dominates &#8212; which is itself determined by sunk costs, product homogeneity, frequency of interaction, and regulatory environment.'
          },
          { name: 'Marcus', badge: 'Candidate B',
            answer: 'Oligopoly can be harmful for consumers because the few large firms can work together to keep prices high. This is called collusion and it is illegal if done formally. However, firms can also collude informally or "tacitly" without breaking the law. When prices are above the competitive level, consumers pay more and the firms make extra profit. This reduces consumer surplus. However, oligopoly might not be harmful because the large firms can invest in research and development, creating better products. Also, the firms do compete on things like advertising and loyalty schemes which gives consumers more choice. Overall, oligopoly has both good and bad effects on consumers, so it is not always harmful.'
          }
        ],
        ans: 0,
        exp: '<strong>Layla</strong> gives the stronger answer. She applies a conditional framework &#8212; which tendency (competition vs coordination) dominates depends on market conditions &#8212; and supports each argument with specific evidence: the 2015&#8211;17 UK supermarket price war (competitive oligopoly outcome), banking/petrol tacit collusion (harmful coordination), AstraZeneca/GSK R&D investment (dynamic efficiency). She names the inverted-U hypothesis for a sophisticated evaluation point and identifies the CMA\'s role. Marcus covers the same broad territory (collusion harms, R&D benefits, non-price competition) but at a generic level without evidence or named concepts beyond "tacit collusion." Marcus accesses Level 2&#8211;3; Layla Level 4&#8211;5.'
      },

      /* 7 — Calculation: Herfindahl-Hirschman Index */
      { type: 'calculation',
        context: 'A market has four firms with market shares of <strong>40%, 30%, 20%, and 10%</strong>. The <strong>Herfindahl-Hirschman Index (HHI)</strong> is calculated as the sum of the squared market shares (using percentages). Competition authorities typically regard HHI &gt; 2,500 as indicating a highly concentrated market.',
        working: [
          'Step 1: square each market share',
          '40&#178; = 1,600',
          '30&#178; = 900',
          '20&#178; = 400',
          '10&#178; = 100',
          'Step 2: sum the squared shares',
          'HHI = 1,600 + 900 + 400 + 100 = 3,000'
        ],
        stem: 'What is the HHI for this market, and what does it indicate about market concentration?',
        opts: [
          { ped: 'HHI = 3,000 &#8212; highly concentrated; CMA would scrutinise any proposed merger', typ: 'HHI = 40&#178; + 30&#178; + 20&#178; + 10&#178; = 1,600 + 900 + 400 + 100 = 3,000. Above 2,500 threshold.', rev: 'HHI = sum of squared market shares; compare to 2,500 threshold' },
          { ped: 'HHI = 100 &#8212; perfectly competitive; no concentration concern', typ: 'Added the shares (40 + 30 + 20 + 10 = 100) rather than squaring and summing', rev: 'HHI requires squaring each share before summing &#8212; do not just add the shares' },
          { ped: 'HHI = 2,500 &#8212; exactly at the threshold; inconclusive', typ: 'Used the threshold value instead of calculating from the given shares', rev: 'Calculate HHI from the data; threshold is used for interpretation, not calculation' },
          { ped: 'HHI = 6,000 &#8212; extreme concentration; should be broken up immediately', typ: 'Doubled the correct HHI by counting each share twice', rev: 'Each share is squared and summed once only' }
        ],
        ans: 0,
        exp: 'HHI = 40&#178; + 30&#178; + 20&#178; + 10&#178; = 1,600 + 900 + 400 + 100 = <strong>3,000</strong>. This exceeds the CMA\'s threshold of 2,500 for high concentration. A post-merger HHI above 2,500 with a delta (increase in HHI from the merger) above 150 triggers detailed CMA scrutiny. For context: a pure monopoly (one firm, 100%) gives HHI = 10,000; four perfectly equal firms (25% each) gives HHI = 2,500; ten equal firms (10% each) gives HHI = 1,000. The HHI is more sensitive than CR4 to the distribution of shares &#8212; it penalises concentration more heavily when one firm is dominant.'
      },

      /* 8 — Odd one out: examples of non-price competition */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of the <strong>advertising arms race</strong> phenomenon in UK oligopoly. Which is the <strong>ODD ONE OUT</strong>?',
        items: [
          { icon: '&#128722;', label: 'The big four supermarkets each spend hundreds of millions on TV and print advertising annually, with none gaining significant net market share', note: '' },
          { icon: '&#128241;', label: 'UK mobile networks (EE, Vodafone, O2, Three) all heavily advertise network coverage and deals, broadly maintaining similar market shares', note: '' },
          { icon: '&#128663;', label: 'Aldi enters the UK market with a dramatically lower-cost structure, forces incumbents to cut prices, triggering a genuine price war in groceries', note: '' },
          { icon: '&#127866;', label: 'UK beer brands (Heineken, Carlsberg, AB InBev) all sponsor major sports events simultaneously, each roughly maintaining its existing share of consumer attention', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>Aldi\'s entry triggering a price war</strong>. This is an example of <em>price competition</em> driven by a genuine structural change (low-cost entry by a discount retailer with a different business model) &#8212; not an advertising arms race. The advertising arms race occurs when oligopolists simultaneously increase advertising spending to compete for market share, but none gains net customers because rivals also increase spending. The result: higher costs for all, same market shares, wasted resources. The supermarkets, mobile networks, and beer brands all illustrate this &#8212; matched advertising investments with broadly stable market shares. Aldi\'s price competition represents a fundamentally different competitive dynamic.'
      },

      /* 9 — Data table: Bertrand vs Cournot */
      { type: 'data_table',
        stem: 'The table compares predicted outcomes under different oligopoly models.',
        headers: ['Model', 'Competition variable', 'Predicted price', 'Predicted output', 'Consumer welfare'],
        rows: [
          ['Perfect competition', 'Price', 'P = MC', 'Socially optimal (Q_c)', 'Maximum'],
          ['Bertrand (identical products)', 'Price', 'P = MC', 'Same as PC', 'Same as PC'],
          ['Cournot (quantity competition)', 'Quantity', 'P between MC and P_m', 'Between Q_c and Q_m', 'Intermediate'],
          ['Cartel / collusion', 'Joint maximisation', 'P = P_m (monopoly)', 'Q_m (restricted)', 'Minimum (monopoly level)']
        ],
        question: 'Which conclusion is best supported by the data in the table?',
        opts: [
          'The form of competition (price vs quantity) matters as much as market structure: Bertrand duopoly achieves the competitive outcome, while Cournot duopoly does not &#8212; both have two firms',
          'Oligopoly always produces worse consumer welfare than perfect competition, regardless of the competitive model used',
          'Cartel outcomes are always identical to Cournot outcomes because both involve firms restricting output',
          'The number of firms is the only determinant of price and output in oligopoly markets'
        ],
        ans: 0,
        exp: 'Option A is most consistent with the table. Bertrand competition (two firms, competing on price, identical products) achieves P = MC &#8212; the same outcome as perfect competition &#8212; despite only two firms. Cournot competition (two firms, competing on quantity) achieves an intermediate outcome &#8212; better for consumers than monopoly/cartel, worse than competition. Same market structure (duopoly), different outcomes depending on <em>how</em> firms compete. This is the Bertrand paradox &#8212; market structure (number of firms) is an unreliable guide to outcomes. Option B is wrong &#8212; Bertrand oligopoly achieves the competitive outcome. Option C is wrong &#8212; Cournot gives an intermediate outcome, not monopoly pricing. Option D is contradicted by the Bertrand/Cournot comparison (same number of firms, different outcomes).'
      },

      /* 10 — Chain: price war and resolution */
      { type: 'chain',
        stem: 'A dominant UK supermarket decides to cut prices on 500 key products. Place the sequence of events in the correct order from initial price cut to long-run market outcome.',
        items: [
          { label: 'Rival supermarkets match the price cuts to protect their market shares &#8212; all firms now have lower margins', note: '' },
          { label: 'One supermarket decides to cut prices on key products, breaking from a period of stable (implicitly collusive) pricing', note: '' },
          { label: 'Firms invest in non-price competition (loyalty schemes, store renovations) as the route to differentiation that avoids further price wars', note: '' },
          { label: 'All supermarkets\' profits decline as margins are squeezed; the price war is costly for all incumbents', note: '' },
          { label: 'The market stabilises at lower prices than before the price war but above MC; firms re-establish price stability (tacit collusion resumes at the new lower price level)', note: '' },
          { label: 'Consumer welfare increases in the short run: lower prices across the market; more output sold', note: '' }
        ],
        correctOrder: [1, 0, 3, 5, 4, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Price cut initiated &#8212; one firm breaks from stable pricing.<br>2. Rivals match the cut &#8212; kinked demand prediction: firms follow price cuts.<br>3. All margins squeezed &#8212; price war is costly industry-wide.<br>4. Consumer welfare rises short-term &#8212; lower prices and more sales.<br>5. Market re-stabilises &#8212; tacit collusion resumes at new lower price level.<br>6. Firms switch to non-price competition &#8212; safer competitive tool (rivals cannot immediately replicate quality/loyalty).<br><br>This sequence captures the UK supermarket experience of 2014&#8211;17: Aldi/Lidl entry triggered genuine price competition, the big four matched cuts, margins were squeezed, and the long-run response was a shift toward loyalty (Clubcard+), own-label quality, and store experience &#8212; all forms of non-price competition. The CMA monitored throughout for tacit collusion concerns.'
      }

    ]
  };

})();
