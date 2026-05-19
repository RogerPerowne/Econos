/* ============================================================
   ECONOS — Quiz content for: International Competitiveness
   10 questions covering unit labour costs, price and non-price
   competitiveness, the UK productivity puzzle, and supply-side
   policies to improve competitiveness.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'intl_competitiveness_main',
    topicId:  'intl_competitiveness_main',
    title:    'International Competitiveness',
    subtitle: 'Theme 4.6 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering unit labour costs, price and non-price competitiveness, the UK productivity puzzle, the link between competitiveness and the current account, and supply-side policies. Includes calculation, diagnostic pair, and data table questions in Edexcel A-level style.',
    shortNames: {
      'intl_competitiveness_1': 'Defining competitiveness',
      'intl_competitiveness_2': 'Unit labour costs',
      'intl_competitiveness_3': 'Non-price factors',
      'intl_competitiveness_4': 'UK productivity puzzle',
      'intl_competitiveness_5': 'Policies to improve competitiveness',
      'intl_competitiveness_6': 'Competitiveness and the current account',
      'intl_competitiveness_7': 'Price vs non-price'
    },

    questions: [

      /* 1 — MCQ: unit labour cost definition */
      { type: 'mcq',
        stem: 'A firm\'s wage rate rises by 6% and its labour productivity rises by 2%. What happens to its <strong>unit labour cost (ULC)</strong> and price competitiveness?',
        opts: [
          'ULC rises by approximately 4% (wages outpace productivity), reducing price competitiveness',
          'ULC falls because the productivity improvement offsets the wage rise, improving price competitiveness',
          'ULC is unchanged because any wage rise is automatically offset by the economy-wide inflation rate',
          'ULC rises by 6% because only the wage rate, not productivity, determines unit labour costs'
        ],
        ans: 0,
        exp: '<strong>Unit Labour Cost (ULC)</strong> = Wage Rate ÷ Labour Productivity. If wages rise 6% and productivity rises 2%, the ULC rises by approximately 6% &#8722; 2% = <strong>4%</strong>. (More precisely: (1.06/1.02 &#8722; 1) &#215; 100 &#8776; 3.9%.) This means it now costs the firm ~4% more labour cost per unit of output produced. The firm becomes less <strong>price competitive</strong> &#8212; either it absorbs the cost (reducing profit margins) or passes it on in higher prices (losing market share). The key insight: wage growth <em>per se</em> does not reduce competitiveness if matched by productivity growth. Germany sustains high wages because German workers\' output per hour is also high &#8212; keeping ULC competitive.'
      },

      /* 2 — Calculation: ULC and competitiveness */
      { type: 'calculation',
        context: 'Country A: average wage &#163;30/hour; output per worker-hour = 15 units. Country B: average wage &#163;8/hour; output per worker-hour = 5 units.',
        working: [
          'ULC = Wage rate ÷ Labour productivity (units per hour)',
          'Country A: ULC = £30 ÷ 15 = £2.00 per unit',
          'Country B: ULC = £8 ÷ 5 = £1.60 per unit',
          'ULC comparison: Country B has lower ULC by £0.40 per unit (20% lower)',
          'Despite much lower wages, Country B\'s cost advantage is modest — productivity gap narrows the wage differential'
        ],
        stem: 'Which country has the lower <strong>unit labour cost</strong> and what is the difference?',
        opts: [
          { ped: 'Country B: ULC = &#163;1.60/unit vs Country A: &#163;2.00/unit — Country B has 20% lower ULC', typ: 'A: £30÷15=£2.00; B: £8÷5=£1.60. Difference = £0.40/unit (20% lower)', rev: 'Despite wages being 73% lower in B, the ULC advantage is only 20% because productivity is also lower' },
          { ped: 'Country A: because its workers are more productive at 15 units/hour', typ: 'Confused productivity per worker with cost per unit — higher productivity raises output but does not guarantee lower ULC', rev: 'ULC depends on the ratio of wage to productivity, not productivity alone' },
          { ped: 'Country B: ULC = &#163;0.53/unit — dividing wage by wage ratio', typ: 'Divided £8 by some version of the wage comparison rather than by productivity', rev: 'ULC = wage rate ÷ output per hour. Country B: £8 ÷ 5 = £1.60 per unit' },
          { ped: 'Both countries have equal ULC because productivity differences perfectly offset wage differences', typ: 'Not correct — the productivity gap (3:1) is smaller than the wage gap (3.75:1), leaving B with lower ULC', rev: 'Calculate both: A = £2.00, B = £1.60. They are not equal.' }
        ],
        ans: 0,
        exp: '<strong>Country A:</strong> ULC = &#163;30 ÷ 15 = <strong>&#163;2.00 per unit</strong>. <strong>Country B:</strong> ULC = &#163;8 ÷ 5 = <strong>&#163;1.60 per unit</strong>. Country B has a 20% ULC advantage despite wages being 73% lower — because its productivity is also 67% lower. This illustrates why low-wage countries\' cost advantage is often smaller than the raw wage comparison suggests. As developing economies grow, wages tend to rise faster than productivity (a feature of the Lewis model of development) &#8212; gradually eroding their price competitiveness. This drives the sequential shift of labour-intensive manufacturing from Japan &#8594; South Korea &#8594; China &#8594; Vietnam &#8594; Bangladesh as wage growth outpaces productivity in each successive location.'
      },

      /* 3 — Elastic sort: price vs non-price competitiveness */
      { type: 'elastic_sort',
        stem: 'Classify each factor as a driver of <strong>price competitiveness</strong> or <strong>non-price competitiveness</strong>.',
        categories: ['price', 'nonprice'],
        categoryLabels: ['Price competitiveness', 'Non-price competitiveness'],
        goods: [
          { icon: '💰', label: 'Unit labour costs: wage growth contained relative to productivity improvements', note: '', ans: 'price' },
          { icon: '🔬', label: 'R&D investment producing innovative products that buyers prefer at the same or higher prices', note: '', ans: 'nonprice' },
          { icon: '💱', label: 'Currency depreciation making exported goods cheaper in foreign currency terms', note: '', ans: 'price' },
          { icon: '⭐', label: 'Reputation for quality and reliability that sustains premium pricing (e.g. German engineering)', note: '', ans: 'nonprice' },
          { icon: '🛤️', label: 'Investment in transport and digital infrastructure reducing logistics costs for exporters', note: '', ans: 'price' },
          { icon: '🎓', label: 'Highly skilled workforce producing complex, differentiated products difficult for rivals to replicate', note: '', ans: 'nonprice' }
        ],
        exp: '<strong>Price competitiveness</strong> factors reduce the cost or price of exported goods: lower ULC, currency depreciation, better infrastructure reducing logistics costs. <strong>Non-price competitiveness</strong> factors enable firms to win orders at the same or higher prices through quality, innovation, and brand: R&D-driven product differentiation; quality reputation (Germany\'s engineering brand); skilled workforce enabling complex, hard-to-replicate products. For a high-wage economy like the UK, competing on price with emerging markets is not sustainable in the long run &#8212; the strategic focus must be non-price competitiveness in high-value sectors. Germany\'s consistent current account surplus despite high wages is the benchmark: non-price factors can dominate.'
      },

      /* 4 — Multi-select: UK productivity puzzle */
      { type: 'multi_select',
        stem: 'Which of the following are offered as explanations for the <strong>UK productivity puzzle</strong> since 2008?',
        opts: [
          '"Zombie firms" kept alive by ultra-low interest rates, preventing resource reallocation to more productive firms',
          'Bank credit allocated primarily to property and financial services rather than productive business investment',
          'UK underinvestment in vocational education and apprenticeships creating skills shortages in technical sectors',
          'Excessive public sector spending crowding out private investment through higher interest rates',
          'Post-Brexit uncertainty reducing business investment in long-term capital and technology',
          'UK workers\' intrinsic unwillingness to improve productivity due to cultural factors'
        ],
        correct: [0, 1, 2, 4],
        exp: 'Options A, B, C, and E are all offered as serious explanations in the economics literature. <strong>Zombie firms</strong> (A): kept alive by near-zero interest rates, they absorbed labour and capital that could have moved to high-productivity uses. <strong>Credit misallocation</strong> (B): banks preferred property lending (lower regulatory capital requirements, rising collateral values) over riskier business lending. <strong>Skills gaps</strong> (C): the UK has relatively weak vocational education compared to Germany; persistent engineering, digital, and construction skill shortages constrain output per worker. <strong>Post-Brexit investment uncertainty</strong> (E): multiple studies (LSE, UK in a Changing Europe) find ~15-25% reduction in business investment intentions linked to Brexit uncertainty. Option D is contested and not a mainstream explanation &#8212; real interest rates were at historic lows after 2008. Option F is not an economic explanation &#8212; no evidence supports it.'
      },

      /* 5 — Diagnostic pair: policy to improve competitiveness */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate supply-side policies to improve the UK\'s international competitiveness."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Asel', badge: 'Candidate A',
            answer: 'Supply-side policies to improve UK competitiveness include investment in <strong>infrastructure</strong>, <strong>education and skills</strong>, and <strong>R&D incentives</strong>. Infrastructure investment (e.g. HS2 phase 1, National Grid upgrade) reduces logistics costs and connectivity, directly lowering ULC for firms dependent on transport networks. However, the impact is subject to long time lags &#8212; HS2 took 15 years from proposal to first operation. Education and skills investment (STEM, apprenticeships, T-levels) addresses structural skill shortages in engineering and digital that constrain non-price competitiveness; effects take 10-20 years to appear in productivity data. R&D tax credits and innovation clusters (Cambridge, Oxford) incentivise the product differentiation needed to compete on non-price grounds rather than cost alone. Key evaluation: these policies are supply-side in nature and take 5-20 years to show results &#8212; unlike monetary policy (12-18 month lag) or depreciation (immediate price effect). This makes competitiveness policy inherently a long-term structural commitment, not a short-run fix. The UK\'s productivity gap relative to the G7 (18% below average) suggests these policies have been insufficient or too slowly implemented.'
          },
          { name: 'Tom', badge: 'Candidate B',
            answer: 'The government can improve competitiveness by investing in education so workers are more productive, building better infrastructure such as roads and railways, and giving tax incentives to companies who invest in research. These policies would help UK businesses become more competitive because they would be able to produce better goods and services at lower costs. However these policies take a long time to work and can be expensive. The government might not have enough money to fund all these policies especially if it has a large budget deficit. Currency depreciation could also be used to improve competitiveness in the short term. Overall a combination of supply-side policies and exchange rate management would be most effective.'
          }
        ],
        ans: 0,
        exp: '<strong>Asel</strong> gives the stronger answer. She names specific policies with specific examples (HS2, National Grid, T-levels, Cambridge cluster), analyses the transmission mechanism for each (how infrastructure reduces ULC; how skills investment addresses specific shortages), and critically the evaluation is <em>comparative</em>: she explicitly contrasts the 10-20 year lag of supply-side policies with the 12-18 month lag of monetary policy &#8212; a direct answer to the "evaluate" instruction. She quantifies the productivity gap (18% below G7). Tom identifies the same policies but at description level &#8212; no mechanisms, no specific examples, no timeframe comparison. The budget constraint point is valid but undeveloped. Asel accesses Level 4; Tom Level 2. The key move is the time-lag comparison &#8212; it directly addresses the policy evaluation question.'
      },

      /* 6 — Para fill: competitiveness and current account */
      { type: 'para_fill',
        stem: 'Complete the paragraph linking competitiveness to the current account.',
        anchor: 'Declining international competitiveness directly worsens the current account balance.',
        para: 'If UK [1] labour costs rise faster than productivity, UK exports become more [2] in foreign currency terms, reducing export [3]. Simultaneously, cheaper foreign imports may displace domestic production, increasing [4]. The current account deficit therefore [5]. If the competitiveness decline is structural &#8212; driven by persistent [6] weakness &#8212; the deficit becomes self-reinforcing rather than cyclical, requiring supply-side rather than [7] policy to correct.',
        blanks: [
          { id: 1, opts: ['unit', 'total', 'average', 'marginal'], ans: 0 },
          { id: 2, opts: ['expensive', 'cheap', 'attractive', 'elastic'], ans: 0 },
          { id: 3, opts: ['volumes', 'subsidies', 'tariffs', 'reserves'], ans: 0 },
          { id: 4, opts: ['imports', 'exports', 'investment', 'savings'], ans: 0 },
          { id: 5, opts: ['widens', 'narrows', 'reverses', 'stabilises'], ans: 0 },
          { id: 6, opts: ['productivity', 'demand', 'currency', 'trade'], ans: 0 },
          { id: 7, opts: ['demand-management', 'supply-side', 'fiscal', 'trade'], ans: 0 }
        ],
        exp: '(1) <strong>Unit</strong> labour costs &#8212; ULC = wage rate ÷ productivity; rising ULC is the direct price competitiveness measure. (2) <strong>Expensive</strong> &#8212; higher ULC translates into higher export prices in foreign currency terms, losing market share. (3) <strong>Volumes</strong> &#8212; export volumes fall as buyers switch to cheaper foreign alternatives. (4) <strong>Imports</strong> &#8212; as domestic goods become relatively expensive, consumers and firms substitute towards imports. (5) <strong>Widens</strong> &#8212; falling exports + rising imports = widening current account deficit. (6) <strong>Productivity</strong> &#8212; structural productivity weakness (like the UK\'s post-2008 puzzle) makes the deficit structural rather than cyclical. (7) <strong>Demand-management</strong> &#8212; demand restraint (higher interest rates, fiscal austerity) reduces the deficit cyclically but does not address the underlying competitiveness problem; supply-side reform is required.'
      },

      /* 7 — Odd one out: non-price competitiveness */
      { type: 'odd_one_out',
        stem: 'Three of these help explain Germany\'s strong export performance despite relatively <strong>high wages</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '⚙️', label: 'World-leading engineering quality and brand reputation (Volkswagen, Siemens, BASF)', note: '' },
          { icon: '🎓', label: 'Dual vocational training system producing highly skilled technical workers in manufacturing', note: '' },
          { icon: '💶', label: 'Euro membership, which prevents independent depreciation to achieve short-run price competitiveness gains', note: '' },
          { icon: '🔬', label: 'High R&D spending (3.1% of GDP) sustaining product innovation and differentiation', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>Euro membership</strong>. While euro membership is a feature of the German economy, it is not a factor that <em>explains</em> Germany\'s strong exports &#8212; in fact, it <em>prevents</em> Germany from using currency depreciation as a competitiveness tool. Germany\'s export success despite high wages must therefore be explained entirely by non-price factors &#8212; which is precisely the point. Options A, C (R&D), and B (vocational training) are the genuine explanations: engineering quality and brand command price premiums; dual vocational training produces the skilled workers who build high-quality complex products; R&D investment generates the product innovation that creates market niches. Germany is the benchmark counter-example for any answer that claims high wages necessarily harm export performance.'
      },

      /* 8 — Data table: Global Competitiveness Index */
      { type: 'data_table',
        stem: 'The table shows selected WEF Global Competitiveness Index rankings.',
        headers: ['Country', 'Overall rank (2023)', 'Infrastructure', 'Skills', 'Innovation'],
        rows: [
          ['Switzerland', '1', '4', '2', '1'],
          ['USA', '3', '13', '3', '2'],
          ['Germany', '4', '9', '8', '3'],
          ['UK', '8', '24', '7', '8'],
          ['China', '28', '36', '44', '24']
        ],
        question: 'What does the data suggest about the UK\'s competitive strengths and weaknesses?',
        opts: [
          'The UK has relative strengths in skills and innovation (ranked 7th and 8th) but a significant weakness in infrastructure (ranked 24th), suggesting infrastructure is the binding constraint on UK competitiveness',
          'The UK is the most competitive country in the table since it ranks 8th overall &#8212; higher than China',
          'China will never become competitive because its infrastructure and skills ranks are both poor',
          'The UK should focus on competing with Switzerland by copying its entire economic model'
        ],
        ans: 0,
        exp: 'The data reveal a clear pattern for the UK: <strong>relative strengths</strong> in skills (7th) and innovation (8th), consistent with the UK\'s higher education system and financial/tech services. But a significant <strong>relative weakness</strong> in infrastructure (24th) &#8212; far behind Germany (9th) and the USA (13th). This suggests that infrastructure is where the UK loses most ground competitively and where policy could yield the highest marginal return. The skills and innovation scores support the view that the UK should compete on non-price grounds in high-value sectors. China\'s relatively low scores (Option C) should not be dismissed &#8212; China has been rapidly improving its competitiveness ranking and its infrastructure investment is the largest in human history (Belt and Road Initiative). Rankings are a snapshot, not a destiny.'
      },

      /* 9 — Chain: low productivity to current account deficit */
      { type: 'chain',
        stem: 'Arrange the following steps in the correct causal order from weak productivity growth to a wider current account deficit.',
        items: [
          { label: 'UK export volumes fall as foreign buyers switch to cheaper or better-quality foreign alternatives', note: '' },
          { label: 'UK labour productivity growth is persistently below G7 average', note: '' },
          { label: 'Current account goods deficit widens as imports rise relative to exports', note: '' },
          { label: 'UK unit labour costs rise relative to international competitors', note: '' },
          { label: 'UK exported goods become less price-competitive in global markets', note: '' },
          { label: 'Domestic consumers substitute away from UK-made goods towards cheaper imports', note: '' }
        ],
        correctOrder: [1, 3, 4, 0, 5, 2],
        exp: '<strong>The correct sequence:</strong><br>1. UK productivity growth falls behind G7 average.<br>2. With wages still rising, ULC rises relative to competitors.<br>3. UK export prices rise relative to foreign alternatives &#8212; losing price competitiveness.<br>4. Foreign buyers reduce demand for UK exports &#8212; volumes fall.<br>5. Domestic consumers substitute towards cheaper imports &#8212; import volumes rise.<br>6. Current account goods deficit widens.<br><br>This chain connects the UK\'s post-2008 productivity puzzle to its chronic goods deficit (&#8722;&#163;180bn in 2023). Strong exam answers make every link explicit and note the distinction between the cyclical and structural components: the goods deficit is partly cyclical (strong domestic demand pulling in imports) but increasingly structural (persistent competitiveness weakness). Policy must address the structural source &#8212; which requires supply-side reform, not demand management.'
      },

      /* 10 — MCQ: policy to improve competitiveness */
      { type: 'mcq',
        stem: 'Which of the following supply-side policies would <strong>most directly</strong> improve the UK\'s long-run non-price international competitiveness?',
        opts: [
          'Sustained increase in public and private R&D investment, university-business partnerships, and innovation cluster development to produce differentiated high-value goods and services that command premium prices in global markets',
          'A 25% devaluation of sterling to reduce UK export prices in foreign currency terms, immediately boosting UK competitiveness in all traded goods sectors',
          'Imposition of import tariffs to protect domestic industries from foreign competition, giving UK firms time to improve productivity without competitive pressure',
          'A significant reduction in the National Living Wage to lower unit labour costs and enable UK firms to compete on price with emerging market manufacturers'
        ],
        ans: 0,
        exp: '<strong>R&D investment and innovation cluster development</strong> (option A) most directly improves <em>non-price</em> competitiveness &#8212; the ability to win orders through quality, uniqueness, and innovation rather than price. This is the appropriate long-run strategy for a high-wage economy. Option B (devaluation) improves <em>price</em> competitiveness in the short run but does not address the underlying productivity problem &#8212; and generates imported inflation that may erode the competitive gain. Option C (tariffs) reduces competitive pressure, potentially reducing rather than improving productivity (rent-seeking, complacency). Option D (lower NLW) reduces price competitiveness costs but is not a viable strategy &#8212; competing with Bangladesh on wages is not an option for the UK, and the empirical evidence suggests NLW increases have not significantly reduced employment while delivering gains for low-paid workers. The examiner\'s expected answer is A, but a top-band essay would acknowledge the complementary short-run role of B.'
      }

    ]
  };

})();
