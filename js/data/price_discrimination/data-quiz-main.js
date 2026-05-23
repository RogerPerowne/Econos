/* ============================================================
   ECONOS — Quiz content for: Price Discrimination
   10 questions covering conditions, three degrees, welfare
   effects, and digital economy applications.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'price_discrimination_main',
    topicId:  'price_discrimination_main',
    title:    'Price Discrimination',
    subtitle: 'Theme 3.11 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions on the three conditions for price discrimination, the three degrees (perfect, quantity-based, group-based), welfare effects, and how digital technology is expanding discriminatory pricing. Covers rail pricing, pharmaceutical access, and algorithmic pricing.',
    shortNames: {
      'price_discrimination_1': 'What is price discrimination?',
      'price_discrimination_2': 'First degree',
      'price_discrimination_3': 'Second degree',
      'price_discrimination_4': 'Third degree',
      'price_discrimination_5': 'Welfare effects',
      'price_discrimination_6': 'For and against',
      'price_discrimination_7': 'Digital economy'
    },

    questions: [

      /* 1 — MCQ: three conditions */
      { type: 'mcq',
        stem: 'Which combination of conditions is <strong>necessary</strong> for a firm to practise price discrimination successfully?',
        opts: [
          'Market power (price-setting ability), ability to segment consumers by willingness to pay, and prevention of arbitrage between segments',
          'A horizontal demand curve, identical costs across all consumer groups, and government permission to vary prices',
          'At least four distinct consumer groups, at least two competing firms, and zero marginal cost of production',
          'Perfect information about all consumers\' incomes, an inelastic supply curve, and a large advertising budget'
        ],
        ans: 0,
        exp: 'All three conditions in Option A are necessary and sufficient. <strong>Market power</strong>: a price-taker (perfectly competitive firm) has no ability to set price &#8212; it must accept the market price. Without pricing power, discrimination is impossible. <strong>Market segmentation</strong>: the firm must identify groups (or individuals) with different willingness to pay (different PED). Without this, it cannot know what to charge whom. <strong>Prevention of arbitrage</strong>: if consumers in the cheap segment can resell to those in the expensive segment, the price differential collapses. Without arbitrage prevention, discrimination is unstable. All three must hold simultaneously &#8212; failing any one makes discrimination ineffective.'
      },

      /* 2 — Elastic sort: degrees of discrimination */
      { type: 'elastic_sort',
        stem: 'Sort each example into the correct degree of price discrimination: <strong>first</strong>, <strong>second</strong>, or <strong>third</strong>.',
        categories: ['first', 'second', 'third'],
        categoryLabels: ['First degree (perfect)', 'Second degree (quantity/version)', 'Third degree (group-based)'],
        goods: [
          { icon: '&#9992;', label: 'UK rail: peak-time commuter fares (inelastic) priced far above off-peak leisure fares (elastic)', note: '', ans: 'third' },
          { icon: '&#128267;', label: 'Software pricing: basic (free), standard (&#163;10/month), professional (&#163;30/month) &#8212; customers self-select', note: '', ans: 'second' },
          { icon: '&#127968;', label: 'An estate agent negotiates a unique commission rate with each individual client based on property value and urgency', note: '', ans: 'first' },
          { icon: '&#127891;', label: 'Student railcard giving 1/3 off fares for those who can prove student status', note: '', ans: 'third' },
          { icon: '&#128722;', label: 'Supermarket: 3 for 2 promotion &#8212; higher unit price for single purchase, lower unit price for bulk buy', note: '', ans: 'second' },
          { icon: '&#128657;', label: 'Dynamic pricing algorithm sets each user a unique ticket price based on their browsing and purchase history', note: '', ans: 'first' }
        ],
        exp: '<strong>First degree</strong>: each consumer charged their exact willingness to pay &#8212; estate agent negotiation (unique price per client) and algorithmic personalised pricing (individual pricing based on revealed preferences). <strong>Second degree</strong>: price varies by quantity or product version, with consumers self-selecting &#8212; software versioning (basic/standard/pro) and supermarket bulk deals (3-for-2). <strong>Third degree</strong>: identifiable consumer groups charged different prices based on their PED &#8212; peak vs off-peak rail (time-based group segmentation) and student railcard (verifiable status). The key distinction between first and third: first-degree targets individuals; third-degree targets groups.'
      },

      /* 3 — Para fill: third degree mechanics */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining the profit-maximising rule for third-degree price discrimination.',
        anchor: 'A rail operator sells tickets to two groups: business travellers and leisure travellers.',
        para: 'Business travellers have [1] price elasticity of demand &#8212; they must travel regardless of price. Leisure travellers have [2] price elasticity &#8212; they will switch to other transport or not travel if prices rise. The profit-maximising rule requires the firm to set [3] equal across all segments, each equal to marginal cost. This means setting a [4] price for the business (inelastic) segment and a [5] price for the leisure (elastic) segment. The rail operator must prevent [6] between segments &#8212; for example, by requiring ticket-holders to show a form of ID that proves they are the named purchaser, to stop cheap-ticket holders from [7] tickets to business travellers.',
        blanks: [
          { id: 1, opts: ['lower (inelastic)', 'higher (elastic)', 'unit', 'perfectly elastic'], ans: 0 },
          { id: 2, opts: ['higher (elastic)', 'lower (inelastic)', 'zero', 'negative'], ans: 0 },
          { id: 3, opts: ['marginal revenue', 'average revenue', 'average cost', 'total revenue'], ans: 0 },
          { id: 4, opts: ['higher', 'lower', 'uniform', 'subsidised'], ans: 0 },
          { id: 5, opts: ['lower', 'higher', 'cost-reflective', 'regulated'], ans: 0 },
          { id: 6, opts: ['arbitrage', 'collusion', 'entry', 'exit'], ans: 0 },
          { id: 7, opts: ['reselling', 'advertising', 'subsidising', 'donating'], ans: 0 }
        ],
        exp: '(1) <strong>Lower (inelastic)</strong>: business travellers\' demand is price-inelastic &#8212; they must travel and have little price sensitivity. (2) <strong>Higher (elastic)</strong>: leisure travellers have more flexible choices &#8212; their demand is more price-elastic. (3) <strong>Marginal revenue</strong>: the profit-maximising rule is MR_A = MR_B = MC &#8212; equalise MR across segments, set equal to MC. (4) <strong>Higher</strong>: the inelastic segment is charged more &#8212; lower PED means the firm can raise price with minimal quantity loss. (5) <strong>Lower</strong>: the elastic segment is charged less &#8212; to attract and retain price-sensitive consumers. (6) <strong>Arbitrage</strong>: resale between segments would collapse the price differential. (7) <strong>Reselling</strong>: named tickets (like Advance fares on UK rail) prevent holders from reselling to higher-paying travellers, preserving the segmentation.'
      },

      /* 4 — Multi-select: welfare effects */
      { type: 'multi_select',
        stem: 'Which of the following statements about the welfare effects of <strong>third-degree price discrimination</strong> are correct?',
        opts: [
          'If discrimination enables a firm to serve a market segment it would not otherwise enter, total output increases and welfare may improve',
          'Consumer surplus always increases under third-degree price discrimination compared with a single-price monopoly',
          'The high-price segment (inelastic demand) loses consumer surplus compared with a single-price monopoly',
          'Deadweight welfare loss is necessarily eliminated when a firm practises price discrimination',
          'If discrimination only redistributes surplus between segments without increasing total output, the welfare effect is ambiguous or negative for consumers',
          'First-degree (perfect) discrimination eliminates the DWL entirely but transfers all consumer surplus to the producer'
        ],
        correct: [0, 2, 4, 5],
        exp: 'Options A, C, E, and F are correct. (A) If discrimination enables a firm to enter a new segment (e.g. sell a drug at low prices in developing markets it would not serve at the high Western price), total output rises and welfare may improve. (C) The high-price inelastic group is always worse off &#8212; they pay more than under a single monopoly price. (E) If discrimination merely redistributes output between segments without increasing the total, consumer welfare falls overall (more CS transferred to producer, no new trades created). (F) First-degree discrimination is allocatively efficient (no DWL &#8212; all mutually beneficial trades occur) but extracts all CS as producer surplus &#8212; a massive distributional concern. Options B and D are wrong: CS does not always increase (the inelastic group loses), and DWL is not necessarily eliminated by third-degree discrimination.'
      },

      /* 5 — Odd one out: conditions for discrimination */
      { type: 'odd_one_out',
        stem: 'Three of these features <strong>support</strong> price discrimination in the UK rail market. Which is the <strong>ODD ONE OUT</strong>?',
        items: [
          { icon: '&#9992;', label: 'Business travellers have inelastic demand; leisure travellers have elastic demand &#8212; different PED by group', note: '' },
          { icon: '&#128203;', label: 'Named Advance tickets that cannot be resold or transferred &#8212; preventing arbitrage', note: '' },
          { icon: '&#128641;', label: 'National Rail is a price-taker facing intense competition from identical rival train operators on every route', note: '' },
          { icon: '&#128260;', label: 'Rail operators can identify groups: peak tickets require no proof; off-peak tickets are time-restricted; railcards require age/status verification', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the description of National Rail as a <strong>price-taker</strong>. Rail operators are decidedly <em>not</em> price-takers &#8212; they are route monopolists (or near-monopolists) facing the downward-sloping market demand curve on each route. This market power is the first condition for price discrimination. Options A, B, and D all support price discrimination: different PED across groups (condition 2 &#8212; market segmentation); non-transferable named tickets (condition 3 &#8212; arbitrage prevention); and ability to identify and verify group membership (a practical requirement for condition 2). Without market power (the monopolist condition), there is no ability to set price above MC and no basis for discrimination &#8212; price-takers have no pricing discretion.'
      },

      /* 6 — Calculation: profit under discrimination */
      { type: 'calculation',
        context: 'A rail operator faces two market segments. <strong>Business:</strong> demand P_B = 120 &#8722; 2Q_B; <strong>Leisure:</strong> demand P_L = 80 &#8722; 2Q_L. Marginal cost = &#163;20 (constant, same for both segments).',
        working: [
          'Step 1: find MR for each segment',
          'Business: TR_B = (120 &#8722; 2Q_B)Q_B → MR_B = 120 &#8722; 4Q_B',
          'Leisure: TR_L = (80 &#8722; 2Q_L)Q_L → MR_L = 80 &#8722; 4Q_L',
          'Step 2: set MR = MC for each segment',
          'Business: 120 &#8722; 4Q_B = 20 → Q_B = 25; P_B = 120 &#8722; 2(25) = &#163;70',
          'Leisure: 80 &#8722; 4Q_L = 20 → Q_L = 15; P_L = 80 &#8722; 2(15) = &#163;50',
          'Step 3: profit',
          'Profit = (P_B &#8722; MC)Q_B + (P_L &#8722; MC)Q_L = (70&#8722;20)&#215;25 + (50&#8722;20)&#215;15 = 1,250 + 450 = &#163;1,700'
        ],
        stem: 'What is the rail operator\'s total <strong>profit</strong> from third-degree price discrimination across both segments?',
        opts: [
          { ped: '&#163;1,700', typ: 'Business profit: (70&#8722;20)&#215;25 = &#163;1,250. Leisure profit: (50&#8722;20)&#215;15 = &#163;450. Total = &#163;1,700.', rev: 'Set MR = MC in each segment separately; read price from each demand curve' },
          { ped: '&#163;1,250', typ: 'Counted business segment only; missed leisure segment', rev: 'Sum profits from both segments' },
          { ped: '&#163;2,000', typ: 'Used competitive output (Q where P = MC) instead of profit-maximising output in each segment', rev: 'Profit max requires MR = MC, not P = MC' },
          { ped: '&#163;900', typ: 'Charged a single price of &#163;60 (average of 70 and 50) to both segments', rev: 'Third-degree discrimination sets optimal separate prices in each segment &#8212; do not average' }
        ],
        ans: 0,
        exp: '<strong>Business segment:</strong> MR_B = MC → 120 &#8722; 4Q_B = 20 → Q_B = 25. P_B = 120 &#8722; 50 = <strong>&#163;70</strong>. Profit_B = (70 &#8722; 20) &#215; 25 = <strong>&#163;1,250</strong>.<br><strong>Leisure segment:</strong> MR_L = MC → 80 &#8722; 4Q_L = 20 → Q_L = 15. P_L = 80 &#8722; 30 = <strong>&#163;50</strong>. Profit_L = (50 &#8722; 20) &#215; 15 = <strong>&#163;450</strong>.<br><strong>Total profit = &#163;1,700</strong>. The business segment generates more than 2.7&#215; the leisure segment\'s profit because of its higher price and lower price elasticity. This ratio illustrates why businesses pay such significantly more for peak rail travel.'
      },

      /* 7 — Data table: digital price discrimination */
      { type: 'data_table',
        stem: 'The table shows examples of digital pricing practices and their characteristics.',
        headers: ['Firm / Platform', 'Practice', 'Degree of discrimination', 'Arbitrage prevention method'],
        rows: [
          ['Amazon', 'Prices change multiple times per day based on demand and user browsing', 'Approaching first-degree', 'Digital goods; personalised offers hard to compare'],
          ['Uber', 'Surge pricing: fares rise when demand exceeds supply (e.g., New Year\'s Eve)', 'Third-degree (time/location)', 'Trip is non-transferable; dynamic in real time'],
          ['Netflix', 'Different subscription tiers: Basic (&#163;4.99), Standard (&#163;10.99), Premium (&#163;17.99)', 'Second-degree (versioning)', 'Account-level streaming limits; password-sharing crackdown'],
          ['Trainline / rail operators', 'Advance tickets: named traveller, non-refundable, non-transferable', 'Third-degree (peak/off-peak)', 'Named tickets; ID checks at some barriers']
        ],
        question: 'Which interpretation of the digital pricing data is most accurate?',
        opts: [
          'Digital platforms use varied forms of price discrimination, with technology enabling more granular segmentation and stronger arbitrage prevention than traditional markets',
          'All four firms practise identical first-degree price discrimination by charging each consumer their exact reservation price',
          'Digital price discrimination always benefits consumers because technology enables firms to offer lower prices to price-sensitive users',
          'Surge pricing and subscription tiers are both forms of third-degree discrimination &#8212; both involve identifying separate groups with different price elasticities'
        ],
        ans: 0,
        exp: 'Option A correctly identifies that digital platforms use a <em>range</em> of discrimination forms with digital technology enabling better segmentation and arbitrage prevention. Amazon approaches first-degree (individual-level algorithmic pricing); Uber uses dynamic third-degree (time and location segmentation); Netflix uses second-degree (versioning/self-selection); rail uses third-degree (peak/off-peak). Technology advantages: real-time price adjustment, personalisation at scale, non-transferable digital access. Option B is wrong &#8212; Netflix versioning is second-degree, not first. Option C is wrong &#8212; inelastic-demand consumers (Option C\'s "benefit" ignores the high-price group who pay more). Option D is wrong &#8212; Netflix versioning is second-degree (self-selection), not third-degree (identifiable groups).'
      },

      /* 8 — multi_select: evaluation of pharmaceutical price discrimination */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on whether price discrimination between high-income and low-income countries is beneficial for global welfare. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Pharmaceutical companies charge higher prices in wealthy markets because demand is inelastic there, and lower prices in developing markets because demand is elastic.',
          'Price discrimination is welfare-improving only if it genuinely increases total output: for HIV/AIDS antiretrovirals, charging $300 in developing markets (above MC) while charging $10,000+ in the USA means previously excluded patients gain access &#8212; a net output expansion. If the low price merely diverts existing supply without increasing total production, the welfare case collapses.',
          'Price discrimination is unfair because it means people in rich countries pay more for the same drug than people in poor countries.',
          'Even where pharmaceutical discrimination expands access, welfare depends critically on what happens to the discriminatory profit: if it funds genuine R&D for neglected tropical diseases, the dynamic efficiency gain may outweigh the static welfare cost to high-price consumers; if it funds share buybacks, the justification weakens considerably &#8212; making the welfare verdict empirically contingent rather than theoretically determinate.',
          'Pharmaceutical price discrimination always benefits global welfare because it allows firms to recover R&D costs while providing access to treatments in developing countries.',
          'The welfare case for pharmaceutical discrimination is weakened by arbitrage risk: if parallel imports are not legally prevented (via patent law or TRIPS waivers), cheap exports from low-price markets will undermine the high price in wealthy markets, causing firms to either raise prices universally or exit developing markets &#8212; meaning the long-run availability of access pricing depends on the legal architecture surrounding intellectual property.'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Option A</strong> is description of the mechanism &#8212; accurate but entirely analytical framework with no evaluative judgement about whether the outcome is good or bad, conditional or unconditional. <strong>Option B</strong> is strong evaluation: it identifies the precise condition under which discrimination is welfare-improving (output expansion) and shows when it fails (mere diversion). Using the HIV/AIDS case as evidence to illustrate the condition makes this concrete and directional. <strong>Option C</strong> is a one-sided equity observation with no economic framework &#8212; it does not engage with the efficiency-access trade-off that constitutes the analytical core of this question. <strong>Option D</strong> is evaluation: it introduces the dynamic efficiency dimension (R&D incentives), qualifies the case with an empirical condition (what happens to profit), and explicitly states the verdict is contingent rather than categorical. This is genuine higher-order evaluation. <strong>Option E</strong> overclaims universality &#8212; it ignores the conditions under which discrimination fails (no output expansion, profit not reinvested) and is therefore one-sided analysis rather than evaluation. <strong>Option F</strong> is evaluation: it identifies a structural risk (arbitrage undermining the pricing architecture) and traces the long-run consequences for developing country access, reaching a conclusion about the dependency of the policy on legal complementary institutions.'
      },

      /* 9 — Chain: third-degree discrimination mechanism */
      { type: 'chain',
        stem: 'A software company introduces student pricing (&#163;6/month) alongside standard pricing (&#163;14/month). Place the steps in the correct logical order from initial decision to market outcome.',
        items: [
          { label: 'Company verifies student status using a university email address or ISIC card &#8212; preventing arbitrage', note: '' },
          { label: 'Company identifies that students have higher PED (elastic demand) than professionals (inelastic demand)', note: '' },
          { label: 'Total revenue and profit increase: company gains new student subscribers without reducing revenue from professionals', note: '' },
          { label: 'Company sets student price (&#163;6) where MR = MC for the elastic segment; professional price (&#163;14) where MR = MC for the inelastic segment', note: '' },
          { label: 'Student subscribers who wanted the software but could not afford &#163;14 now gain access at &#163;6', note: '' },
          { label: 'Company recognises market power &#8212; it is the only provider of this specific software', note: '' }
        ],
        correctOrder: [5, 1, 3, 0, 2, 4],
        exp: '<strong>The correct sequence:</strong><br>1. Company recognises market power &#8212; condition 1 (price-maker status) confirmed.<br>2. PED difference identified between students and professionals &#8212; condition 2 (segmentation) established.<br>3. MR = MC rule applied separately in each segment &#8212; profit-maximising prices set.<br>4. Arbitrage prevention implemented (student verification) &#8212; condition 3 satisfied.<br>5. Revenue and profit increase &#8212; discrimination achieves commercial objective.<br>6. Students gain access at &#163;6 &#8212; potential welfare benefit of output expansion.<br><br>This sequence also shows the welfare effect: new student subscribers who were excluded at &#163;14 gain access at &#163;6 &#8212; the output-expansion welfare benefit. Whether this offsets the transfer from existing consumers depends on the numbers involved and what the company does with the extra profit.'
      },

      /* 10 — MCQ: first-degree efficiency */
      { type: 'mcq',
        stem: 'First-degree (perfect) price discrimination is described as <strong>allocatively efficient</strong>. Why?',
        opts: [
          'The monopolist produces up to the competitive output level (where P = MC for the last unit), eliminating the deadweight welfare loss &#8212; all mutually beneficial trades occur',
          'First-degree discrimination guarantees the lowest possible prices for all consumers, maximising consumer surplus',
          'The monopolist produces less output than a perfectly competitive market, but at a higher quality level that compensates consumers for the higher average price',
          'Allocative efficiency requires P = min AC, which first-degree discrimination achieves by spreading fixed costs over the maximum possible output'
        ],
        ans: 0,
        exp: 'Under first-degree discrimination, the monopolist charges each consumer exactly their reservation price (maximum willingness to pay). This means it is profitable to sell every unit where a consumer\'s valuation exceeds MC &#8212; including units that would not be sold under standard monopoly pricing (where a single price means the DWL triangle is lost). The firm extends output all the way to Q_c (where the demand curve meets MC), so P = MC for the <em>last unit sold</em> &#8212; allocative efficiency achieved. However, "allocatively efficient" here does not mean "good for consumers": all consumer surplus is extracted by the monopolist as producer surplus. This is why efficiency and equity are different criteria &#8212; first-degree discrimination is efficient in the Pareto sense but extremely redistributive.'
      }

    ]
  };

})();
