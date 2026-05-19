/* ============================================================
   ECONOS — Quiz content for: Collusion and Cartels
   10 questions covering cartel theory, the prisoner's dilemma,
   OPEC, competition policy, and tacit collusion mechanisms.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'collusion_cartels_main',
    topicId:  'collusion_cartels_main',
    title:    'Collusion and Cartels',
    subtitle: 'Theme 3.14 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering explicit and tacit collusion, the prisoner\'s dilemma and cartel instability, OPEC as a real-world case study, competition law tools including leniency programmes, and evaluation of when cartels are most harmful. Mixed formats designed for the analysis and evaluation marks Edexcel examiners reward.',
    shortNames: {
      'framing':     'Collusion has many faces',
      'instability': 'Why cartels break down',
      'opec':        'OPEC case study',
      'tacit':       'Tacit mechanisms',
      'policy':      'Competition law',
      'evaluation':  'Not all cartels equal'
    },

    questions: [

      /* 1 — elastic_sort: classify collusion types */
      { type: 'elastic_sort',
        stem: 'Classify each example as <strong>explicit collusion</strong> or <strong>tacit collusion</strong>.',
        categories: ['explicit', 'tacit'],
        categoryLabels: ['Explicit collusion (cartel)', 'Tacit collusion'],
        goods: [
          { icon: '🤝', label: 'Three supermarket chains meet secretly to fix the retail price of dairy products', note: '', ans: 'explicit' },
          { icon: '⛽', label: 'Petrol retailers in a town raise pump prices in parallel within hours of each other, without communicating', note: '', ans: 'tacit' },
          { icon: '🛢️', label: 'OPEC member nations agree output quotas to keep world oil prices above competitive levels', note: '', ans: 'explicit' },
          { icon: '🏦', label: 'High-street banks routinely adjust mortgage rates within days of a rival\'s announcement, matching the new rate', note: '', ans: 'tacit' },
          { icon: '✈️', label: 'Airlines operating the same route secretly agree to divide passengers 50/50 and charge identical fares', note: '', ans: 'explicit' },
          { icon: '🛒', label: 'A dominant supermarket announces a price rise on branded goods; rivals follow within a week without any contact', note: '', ans: 'tacit' }
        ],
        exp: '<strong>Explicit collusion</strong> requires a "meeting of minds" — a specific agreement to coordinate (secret meetings, written quotas, phone calls). It is illegal under the Competition Act 1998 and can attract CMA fines of up to 10% of global turnover plus criminal prosecution of individuals. <strong>Tacit collusion</strong> involves parallel behaviour without formal agreement — price leadership, follow-the-leader pricing. It is legal but may be investigated by the CMA if it harms consumers. The legal distinction matters: parallel pricing alone cannot be prosecuted; communication must be proven. This is why explicit cartel evidence is so valuable to competition authorities.'
      },

      /* 2 — mcq: why firms collude */
      { type: 'mcq',
        stem: 'Which market conditions make collusion <strong>most stable</strong>?',
        opts: [
          'Few firms, homogeneous product, high barriers to entry, stable demand',
          'Many firms, differentiated products, low barriers to entry, volatile demand',
          'Few firms, differentiated products, low barriers to entry, rapidly growing demand',
          'Many firms, homogeneous product, high barriers to entry, declining demand'
        ],
        ans: 0,
        exp: 'Collusion is most stable when: (1) <strong>few firms</strong> — easier to coordinate and monitor; (2) <strong>homogeneous product</strong> — easier to agree a common price; (3) <strong>high barriers to entry</strong> — no new entrants undercut the cartel price; (4) <strong>stable demand</strong> — easier to detect cheating from unexpected output fluctuations. This is why OPEC (13 oil producers, identical commodity) can sustain some coordination, whereas a cartel among 50 differentiated restaurant chains would collapse immediately. Many firms, differentiated products, and volatile demand all make detection of cheating harder and coordination more difficult — cartel conditions deteriorate.'
      },

      /* 3 — diagram_interp: prisoner's dilemma payoff matrix */
      { type: 'diagram_interp',
        stem: 'Two oil producers, Alpha and Beta, each choose between <strong>honouring their quota</strong> and <strong>cheating</strong>. The payoff matrix shows annual profits (&#163;m) for (Alpha, Beta).',
        svg: '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><rect x="10" y="10" width="400" height="260" fill="#F8FAFC" rx="6"/><text x="215" y="35" fill="#0B1426" font-size="12" text-anchor="middle" font-weight="700">BETA</text><text x="155" y="55" fill="#0B1426" font-size="11" text-anchor="middle">Honour quota</text><text x="285" y="55" fill="#0B1426" font-size="11" text-anchor="middle">Cheat</text><text x="50" y="120" fill="#0B1426" font-size="12" text-anchor="middle" font-weight="700">A</text><text x="50" y="135" fill="#0B1426" font-size="11" text-anchor="middle">L</text><text x="50" y="150" fill="#0B1426" font-size="11" text-anchor="middle">P</text><text x="50" y="165" fill="#0B1426" font-size="11" text-anchor="middle">H</text><text x="50" y="185" fill="#0B1426" font-size="11" text-anchor="middle">A</text><text x="50" y="205" fill="#0B1426" font-size="11" text-anchor="middle">Cheat</text><text x="50" y="175" fill="#0B1426" font-size="11" text-anchor="middle">Honour</text><rect x="100" y="65" width="130" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><rect x="230" y="65" width="160" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><rect x="100" y="155" width="130" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><rect x="230" y="155" width="160" height="90" fill="none" stroke="#CBD5E1" stroke-width="1.5"/><text x="165" y="115" fill="#1FB574" font-size="15" text-anchor="middle" font-weight="700">(80, 80)</text><text x="310" y="115" fill="#EC2D68" font-size="15" text-anchor="middle" font-weight="700">(20, 120)</text><text x="165" y="205" fill="#EC2D68" font-size="15" text-anchor="middle" font-weight="700">(120, 20)</text><text x="310" y="205" fill="#F5B800" font-size="15" text-anchor="middle" font-weight="700">(50, 50)</text></svg>',
        caption: 'Payoffs are annual profits (&#163;m) shown as (Alpha, Beta). Green = cooperative outcome; amber = Nash equilibrium; red = exploited player.',
        question: 'What is the <strong>Nash equilibrium</strong> of this game, and why does it arise?',
        opts: [
          '(Honour, Honour) — both earn &#163;80m because they maximise joint profit',
          '(Cheat, Cheat) — both earn &#163;50m because cheating is the dominant strategy regardless of what the other does',
          '(Honour, Cheat) or (Cheat, Honour) — the equilibrium alternates because both prefer to be the single cheater',
          'There is no Nash equilibrium because both players keep changing strategy'
        ],
        ans: 1,
        exp: 'The Nash equilibrium is <strong>(Cheat, Cheat) = &#163;50m each</strong>. Cheating is a <strong>dominant strategy</strong>: if Beta honours, Alpha earns &#163;120m by cheating vs &#163;80m by honouring — cheat is better. If Beta cheats, Alpha earns &#163;50m by cheating vs &#163;20m by honouring — still better to cheat. Identical logic applies to Beta. So both cheat regardless of what the other does. The Nash equilibrium (&#163;50m, &#163;50m) is collectively suboptimal — both would be better off at (&#163;80m, &#163;80m) — but neither can unilaterally improve by switching. This is the prisoner\'s dilemma at the heart of all cartel analysis.'
      },

      /* 4 — chain: cartel instability sequence */
      { type: 'chain',
        stem: 'Place the events in the correct logical order from cartel formation to competitive outcome.',
        items: [
          { label: 'All members cheat simultaneously, total output rises, price falls to competitive level', note: '' },
          { label: 'Members set output quotas and price at monopoly level P* — all earn share of monopoly profit', note: '' },
          { label: 'Cartel collapses — all members earn competitive (normal) profit', note: '' },
          { label: 'Each member recognises that individually cheating raises their own profit above their quota share', note: '' },
          { label: 'Firms in an oligopoly form an explicit cartel agreement', note: '' },
          { label: 'Individual members secretly produce above quota while others honour the agreement', note: '' }
        ],
        correctOrder: [4, 1, 3, 5, 0, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Firms form an explicit cartel agreement.<br>2. Members set quotas and price at P* — shared monopoly profit.<br>3. Each member sees the individual gain from cheating (prisoner\'s dilemma incentive).<br>4. Individual members secretly produce above quota.<br>5. All cheat simultaneously — output rises, price falls.<br>6. Cartel collapses to competitive profit.<br><br>This sequence illustrates the <em>prisoner\'s dilemma embedded in every cartel</em>. The individually rational choice (cheat) produces the collectively irrational outcome (competitive profit for all). Strong exam answers identify this as a dominant strategy and use the payoff matrix framework.'
      },

      /* 5 — multi_select: OPEC dynamics */
      { type: 'multi_select',
        stem: 'Which of the following statements about OPEC are <strong>correct</strong>? Select all that apply.',
        opts: [
          'OPEC controls approximately 40% of world oil supply and 80% of proven reserves',
          'Saudi Arabia acts as a "swing producer", adjusting its own output to compensate for members who exceed their quotas',
          'All OPEC members consistently honour their production quotas, making the cartel uniquely stable',
          'Non-OPEC producers such as US shale operators and Russia are not bound by OPEC quotas and produce freely',
          'In 2020, OPEC+ failed to agree output cuts during the COVID-19 demand collapse, triggering a price war',
          'OPEC was founded in 1960 and has 13 member countries including Saudi Arabia, UAE, Iraq, and Iran'
        ],
        correct: [0, 1, 3, 4, 5],
        exp: 'Options A, B, D, E, and F are all correct. The incorrect statement is C — in reality, <strong>OPEC members frequently exceed their quotas</strong> (classic cheating behaviour from the prisoner\'s dilemma). Saudi Arabia acts as swing producer <em>because</em> other members cheat — it adjusts its own output to compensate for others\' excess production and maintain the cartel price. The 2020 OPEC+ collapse (option E) is a perfect real-world demonstration of cartel instability: when Saudi Arabia and Russia failed to agree cuts during the COVID demand shock, Saudi Arabia launched a price war that crashed oil to $20/barrel — damaging all parties, exactly as the prisoner\'s dilemma predicts.'
      },

      /* 6 — diagnostic_pair: evaluating competition policy */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the effectiveness of competition policy in tackling cartels."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Maya', badge: 'Candidate A',
            answer: 'Competition policy uses two main tools: <strong>leniency programmes</strong> and <strong>fines/prosecution</strong>. Leniency (the "immunity" programme) is clever game theory: by giving the first cartel member to confess full immunity, it turns the prisoner\'s dilemma against the cartel. Members face a new dilemma — confess first or risk being exposed by a rival. Over 50% of EU cartel cases are now initiated by leniency applicants. However, leniency only breaks up existing cartels; it does nothing to prevent formation. Fines (up to 10% of global turnover, plus criminal prosecution of individuals in the UK) aim to deter through expected cost exceeding expected gain. But deterrence depends on the probability of detection — if detection is low, even large fines may not deter. The 2001 UK vitamins cartel (&#163;750m EU fines) shows leniency working well. Evaluation: competition policy is more effective at cartel detection than prevention, and is better suited to explicit cartels than tacit collusion — the latter is very difficult to prosecute without evidence of direct communication.'
          },
          { name: 'Daniel', badge: 'Candidate B',
            answer: 'Competition policy can be effective at tackling cartels. The CMA can impose large fines on companies that break the law. There is also a leniency programme where the first firm to tell the authorities gets immunity from fines. This means companies might decide to confess because they don\'t want to be caught and have to pay the fine. However, competition policy has limitations because it is hard to find evidence of a cartel when the meetings are secret. Tacit collusion is also very difficult to prosecute because the companies have not actually agreed anything. Overall, competition policy is quite effective but needs to be improved to deal with new challenges like digital markets.'
          }
        ],
        ans: 0,
        exp: '<strong>Maya</strong> gives the stronger answer. She uses the game theory framework (prisoner\'s dilemma, dominant strategy) to explain WHY leniency works — not just describing what it does. She quantifies (50% of EU cases, 10% fine cap, &#163;750m vitamins case) and distinguishes the detection vs prevention limitation, and explicit vs tacit collusion as a key boundary. Daniel identifies the right tools and limitations but stays at the descriptive level — the analytical framework (why leniency changes the payoff structure) is missing. Maya accesses Level 4; Daniel Level 2–3. The phrase "turns the prisoner\'s dilemma against the cartel" is the kind of analytical insight examiners reward at the top of the mark scheme.'
      },

      /* 7 — odd_one_out: tacit collusion mechanisms */
      { type: 'odd_one_out',
        stem: 'Three of these are mechanisms that facilitate <strong>tacit collusion</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '📋', label: 'Most-favoured-nation clause: promise to give any buyer the lowest price offered to any customer', note: '' },
          { icon: '📢', label: 'Price leadership: dominant firm announces price change and rivals follow without communication', note: '' },
          { icon: '💰', label: 'Leniency programme: first firm to confess a cartel receives full immunity from fines', note: '' },
          { icon: '⛽', label: 'Transparent pricing: public price lists enable rivals to instantly detect any deviation from the collusive price', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>leniency programme</strong>. This is a <em>competition policy tool designed to break up cartels</em> — it is the opposite of a tacit collusion mechanism. Most-favoured-nation (MFN) clauses, price leadership, and transparent pricing all facilitate tacit collusion without explicit agreement. MFN clauses remove the incentive to discount selectively. Price leadership coordinates prices through a dominant firm\'s signal. Transparent pricing enables instant retaliation against cheating. The leniency programme exploits the prisoner\'s dilemma to destabilise cartel cooperation — it is the CMA\'s most powerful cartel-breaking tool, not a collusion mechanism.'
      },

      /* 8 — para_fill: cartel instability */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'The prisoner\'s dilemma explains why cartels are inherently unstable.',
        para: 'In a cartel, each member has agreed to restrict [1] to keep the market price above the competitive level. However, each firm faces a [2] strategy: if it secretly increases output while rivals honour their quotas, it earns more [3] than its quota share allows. Because this reasoning applies to [4] member, rational individual behaviour leads to all firms cheating simultaneously, which raises total market output and drives the price [5]. The cartel [6], and all members earn only [7] profit — a worse outcome than if all had honoured the agreement.',
        blanks: [
          { id: 1, opts: ['output', 'price', 'employment', 'investment'], ans: 0 },
          { id: 2, opts: ['dominant', 'cooperative', 'mixed', 'passive'], ans: 0 },
          { id: 3, opts: ['profit', 'revenue', 'output', 'market share'], ans: 0 },
          { id: 4, opts: ['every', 'no', 'one', 'the largest'], ans: 0 },
          { id: 5, opts: ['down', 'up', 'sideways', 'above cost'], ans: 0 },
          { id: 6, opts: ['collapses', 'expands', 'stabilises', 'merges'], ans: 0 },
          { id: 7, opts: ['normal (competitive)', 'monopoly', 'supernormal', 'abnormal'], ans: 0 }
        ],
        exp: '(1) <strong>Output</strong>: cartel restricts supply to raise price. (2) <strong>Dominant</strong>: cheating is the dominant strategy — better regardless of what others do. (3) <strong>Profit</strong>: the cheater sells more units at still-high price → earns more. (4) <strong>Every</strong>: all members face identical incentives — this is what makes it a prisoner\'s dilemma rather than an isolated defection. (5) <strong>Down</strong>: total output rises → price falls back toward the competitive level. (6) <strong>Collapses</strong>: the enforcement mechanism breaks down. (7) <strong>Normal (competitive)</strong>: Nash equilibrium (cheat, cheat) gives competitive profit — collectively worse than (cooperate, cooperate) = monopoly profit.'
      },

      /* 9 — data_table: cartel fines */
      { type: 'data_table',
        stem: 'The table shows selected cartel cases and competition authority fines.',
        headers: ['Case', 'Jurisdiction', 'Product', 'Fine', 'Leniency applicant?'],
        rows: [
          ['Vitamins cartel', 'EU/UK', 'Vitamins B, C, E', '&#163;750m (EU)', 'Yes — Roche (immunity)'],
          ['Airfreight cartel', 'EU', 'Air cargo surcharges', '&#8364;776m', 'Yes — Lufthansa (immunity)'],
          ['CMA roofing felt', 'UK', 'Roofing felt', '&#163;3.6m', 'No'],
          ['Ophthalmology drugs', 'EU', 'Eye treatment drugs', '&#8364;76m', 'No'],
          ['Trucks cartel', 'EU', 'Heavy trucks', '&#8364;2.93bn', 'Yes — MAN (immunity)']
        ],
        question: 'Which conclusion is <strong>most strongly supported</strong> by the data?',
        opts: [
          'Leniency programmes have been central to detecting major cartel cases, and the first applicant consistently avoids fines while other members pay heavily',
          'The largest fines are always imposed on the leniency applicant because they are deemed most culpable for running the cartel',
          'Cartels are only found in manufacturing industries — services such as air cargo are immune from cartel behaviour',
          'The CMA and EU Commission impose identical fines in equivalent cases, showing fully harmonised competition policy'
        ],
        ans: 0,
        exp: 'The data strongly support option A. In the three cases with leniency applicants (vitamins, airfreight, trucks), the first applicant (Roche, Lufthansa, MAN) received immunity — &#163;0 in fines — while other members paid substantial penalties. The trucks cartel (&#8364;2.93bn) is the largest antitrust fine in EU history and was uncovered through the leniency programme. Option B is wrong — leniency applicants receive immunity, not the highest fines. Option C is wrong — the airfreight case shows services can form cartels. Option D is wrong — the data show different fines across jurisdictions and cases. The pattern across all three leniency cases is consistent: first mover gets immunity, others pay.'
      },

      /* 10 — mcq: evaluation — which cartel is most harmful */
      { type: 'mcq',
        stem: 'Which of the following cartels would economists consider <strong>most harmful</strong> to consumer welfare, and why?',
        opts: [
          'A cartel among producers of an essential, inelastic-demand good (e.g., insulin) with high barriers to entry and no substitutes — sustained price rises cause large welfare losses with no substitute available',
          'A short-lived cartel among firms in a declining industry with many substitutes and low barriers to entry — the cartel quickly collapses and consumers can switch',
          'A research joint venture between two firms sharing R&D costs, exempted under EU block exemption rules — generates innovation that benefits consumers',
          'A crisis cartel coordinating supply during a national emergency — permitted under competition law and generates social benefits'
        ],
        ans: 0,
        exp: 'The insulin-type cartel is most harmful because: (1) <strong>inelastic demand</strong> — consumers cannot reduce consumption even as prices rise significantly → large welfare loss; (2) <strong>essential good</strong> — the harm is concentrated on those who must buy, often low-income or sick patients; (3) <strong>high barriers to entry</strong> — no competitive pressure to erode the supernormal profit; (4) <strong>no substitutes</strong> — consumers cannot escape the cartel price. The other options either involve cartels that are short-lived (B), generate genuine consumer benefits (C), or are legally permitted and welfare-improving in specific circumstances (D). The EU block exemption framework (option C and D) acknowledges that not all inter-firm coordination is harmful — which is why evaluation of cartels requires examining elasticity, substitutes, necessity of the good, and duration.'
      }

    ]
  };

})();
