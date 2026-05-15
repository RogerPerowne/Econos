window.ECONOS_TOPIC = {
  id: 'barriers_entry',
  topicNum: '3.9',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Barriers to Entry',
  estTime: '9-11 minutes',
  goal: 'Lock in the types of entry barriers, how they sustain supernormal profit, and their implications for competition policy.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'Barriers to entry are the key determinant of whether supernormal profits persist in the long run. Understanding their sources — structural, strategic, or legal — determines the appropriate competition policy response.',
    doInThis: 'Work through 7 cards covering structural barriers (scale, sunk costs, resources), strategic barriers (predatory pricing, limit pricing, brand proliferation), legal barriers, network effects, and evaluation of barriers as competition policy targets. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'Classify barriers to entry as structural, strategic, or legal',
      'Explain how each type of barrier sustains supernormal profit',
      'Distinguish sunk costs from fixed costs and explain why sunk costs deter entry',
      'Evaluate competition policy tools for reducing barriers to entry'
    ],
    tip: 'Without barriers to entry, supernormal profit attracts entry → prices fall → normal profit. Barriers PREVENT this self-correcting mechanism. The higher and more durable the barrier, the more persistently supernormal profit can be sustained.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'barriers_entry_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Barriers to entry: the big picture',
      lede: 'Without barriers, supernormal profit gets competed away. With them, market structure — and consumer outcomes — can change for decades.',
      branches: [
        { tone: 'green',  label: 'Why barriers matter',   sub: 'Barriers determine how long supernormal profit persists — the central concept linking market structure to performance.' },
        { tone: 'blue',   label: 'Structural barriers',   sub: 'Innocent: scale economies, sunk costs, control of key resources. Built into the technology of the industry.' },
        { tone: 'amber',  label: 'Strategic barriers',    sub: 'Deliberate: predatory pricing, limit pricing, brand proliferation. Incumbents create them to deter entrants.' },
        { tone: 'purple', label: 'Legal and network',     sub: 'Patents, licences, and network effects can be even more durable than cost-based barriers — and harder to dismantle.' }
      ],
      body: 'In competitive markets, supernormal profit attracts new entrants → supply increases → price falls → profit eroded. <strong>Barriers to entry</strong> prevent this process — allowing incumbent firms to sustain supernormal profit in the long run.<br><br>The height of the entry barrier determines the persistence of supernormal profit. High barriers (natural monopoly, strong patents) → permanent supernormal profit. Low barriers (modest scale economies, weak brand) → profit competed away over time.<br><br>Barriers to entry are therefore the central concept in determining market structure: the higher the barriers, the more concentrated and less competitive the market.',
      keyTerms: [
        { term: 'Barriers to entry', def: 'Obstacles that prevent new firms from entering a profitable market — sustain incumbents\' supernormal profit.' },
        { term: 'Incumbent advantage', def: 'Established firm\'s cost, brand, network, or scale advantages over potential entrants.' },
        { term: 'Contestability', def: 'The ease of entry and exit — high contestability means barriers are low and even a monopoly must price competitively.' }
      ],
      examEdge: 'Barriers to entry are not just about preventing entry — they also affect the incumbent\'s behaviour. Knowing that entry is blocked, a monopolist need not price competitively. Knowing that entry is possible (contestable market), even a dominant firm will price near AC. The threat of entry disciplines incumbent behaviour even without actual entry.'
    },
    {
      id: 'barriers_entry_2',
      template: 'cause',
      diagramKey: 'mesBarrierDiagram',
      title: 'Structural (Innocent) Barriers to Entry',
      causes: [
        { head: 'Economies of scale', body: 'Incumbents produce at large scale → low AC. Entrants start small → high AC. Entrant cannot match incumbent prices without making a loss until it reaches scale — by which time it may have failed. Natural monopoly is the extreme case.' },
        { head: 'High sunk costs', body: 'Sunk costs are irrecoverable if the firm exits. A firm considering entry faces the risk: if unsuccessful, sunk costs are lost. This risk asymmetry (incumbent has already paid; entrant must commit anew) deters entry. Examples: aircraft R&D, brand building, specialist equipment.' },
        { head: 'Ownership of key resources', body: 'Control of an essential input prevents entry. De Beers: historically controlled 80%+ of global rough diamond supply. OPEC controls oil reserves. UK spectrum licences: limited by physics — only a few firms can hold mobile spectrum.' },
        { head: 'Product uniqueness', body: 'If the incumbent\'s product cannot be replicated (unique knowledge, accumulated experience, first-mover advantage) → entrants cannot offer an equivalent substitute. Regulatory approval processes (pharmaceutical trials) create a time-cost barrier.' }
      ],
      examEdge: 'Sunk costs vs fixed costs: fixed costs can be recovered when exiting (sell machinery, sub-let premises). Sunk costs cannot be recovered (spent on R&D, advertising, regulatory approval). Only sunk costs create entry barriers — if costs are all recoverable, entry is costless and the market is contestable. This distinction is tested in barrier analysis.'
    },
    {
      id: 'barriers_entry_3',
      template: 'cause',
      diagramKey: 'limitPricingDiagram',
      title: 'Strategic (Deliberate) Barriers to Entry',
      causes: [
        { head: 'Predatory pricing', body: 'Incumbent prices below cost to drive out or deter new entrants, then raises price once threat is eliminated. Illegal under competition law but difficult to prove intent. Example: alleged predatory pricing by Standard Oil (1900s). Modern concern: Amazon Marketplace pricing.' },
        { head: 'Limit pricing', body: 'Set price just below the level at which an entrant could make a profit — not necessarily below incumbent\'s own cost. Legitimate but deliberate deterrence. Sacrifices some short-run profit to maintain long-run market position.' },
        { head: 'Excessive brand proliferation', body: 'Fill product space with variants to deny entrant a market niche. Breakfast cereal market: established brands cover every segment — health, indulgent, children\'s. New entrant struggles to find viable niche.' },
        { head: 'Exclusive dealing contracts', body: 'Lock suppliers or retailers into exclusive arrangements. Prevents entrants from accessing distribution channels or inputs. Example: exclusive retail agreements, paying for shelf space (slotting fees).' }
      ],
      examEdge: 'Predatory pricing is the most legally contested strategic barrier. The test (EU case law): price below average variable cost is presumed predatory; below average total cost may be predatory if it is part of a strategy to eliminate competition. Firms must show legitimate commercial justification for below-cost pricing.'
    },
    {
      id: 'barriers_entry_4',
      template: 'cause',
      title: 'Legal and Regulatory Barriers',
      causes: [
        { head: 'Patents', body: '20-year exclusive right to exploit an invention. Creates a legal monopoly as reward for innovation. Pharmaceutical patents: firms spend £1-2bn developing a drug; patent allows 10+ years of monopoly pricing to recover costs before generics enter.' },
        { head: 'Copyright', body: 'Protects creative works (books, software, music, film) for author\'s life + 70 years. Creates monopoly over specific expression. Enables Disney to sustain revenue from 80-year-old characters.' },
        { head: 'Operating licences', body: 'Government issues limited licences to operate in regulated industries: aviation (airport slots), banking (banking licence), radio spectrum, gambling. Licence creates a legal barrier — new entrants cannot simply set up without regulatory approval.' },
        { head: 'Regulatory compliance costs', body: 'High compliance costs (health and safety, environmental, data protection) disadvantage small entrants relative to large incumbents who have already built compliance infrastructure. Regulatory burden is regressive for market structure.' }
      ],
      examEdge: 'Patent system is the deliberate policy trade-off: 20 years of legal monopoly to incentivise £billions of R&D. Without it, no private firm would invest in pharmaceutical research (rivals would copy immediately). After patent expiry, generic entry → price falls dramatically (generic drugs 90% cheaper than branded). The system is designed to balance static and dynamic efficiency.'
    },
    {
      id: 'barriers_entry_5',
      template: 'framing',
      diagramKey: 'networkEffectDiagram',
      title: 'Network Effects as Entry Barriers',
      body: 'A <strong>network effect</strong> occurs when the value of a product increases as more people use it. Network effects create powerful entry barriers because:\n\n• An entrant starts with zero users — its product is less valuable than the incumbent\'s\n• New users join the incumbent (higher value) not the entrant (lower value)\n• The incumbent\'s network advantage compounds over time\n• Result: "winner-take-all" markets dominated by the first platform to achieve critical mass\n\n<strong>Examples:</strong> WhatsApp (switching means losing contacts), LinkedIn (professional network → switching costs high), Windows (software ecosystem). Network effects explain why tech monopolies are more durable than traditional monopolies — competitors face an almost insurmountable chicken-and-egg problem.',
      keyTerms: [
        { term: 'Network effect', def: 'Value of the product or service increases with the number of users — creates self-reinforcing incumbency advantage.' },
        { term: 'Winner-take-all', def: 'Markets where network effects cause one dominant platform to capture most or all users.' },
        { term: 'Switching cost', def: 'Cost (financial, effort, social) of switching from one product to a rival — locks consumers in and reinforces network effect.' }
      ],
      examEdge: 'Competition authorities are increasingly focused on network effects as a structural barrier in digital markets. The CMA Digital Markets Unit (DMU) is specifically tasked with making tech markets more competitive. The challenge: traditional remedies (break-up, behavioural conditions) may not work if network effects mean any separately owned piece has less value. This is unresolved policy frontier.'
    },
    {
      id: 'barriers_entry_6',
      template: 'diagnose',
      title: 'Barriers by Industry: Examples',
      intro: 'Barrier height varies dramatically across industries — this determines market structure.',
      rows: [
        { label: 'Industry', colA: 'Commercial aviation (aircraft manufacturing)', colB: 'Taxi services' },
        { label: 'Key barriers', colA: 'Massive sunk R&D costs (£10-20bn per new aircraft model); regulatory certification (10+ years); supply chain lock-in; incumbency reputation; scale economies at global level. Result: Boeing-Airbus duopoly.', colB: 'Low sunk costs (car is recoverable asset); minimal regulatory barrier (driving licence); low scale economies. Easy entry — Uber proved this by rapidly scaling globally.' },
        { label: 'Competition implications', colA: 'Very high barriers → persistent supernormal profit; CMA/EU scrutiny; difficult for new entrants (COMAC China supported by state for 20+ years still marginal). Competition policy focus: behaviour of the duopoly.', colB: 'Low barriers → highly contestable → competitive pricing → normal profit. Platform competition (Uber vs Bolt) adds strategic layer but lower barriers than manufacturing.' }
      ],
      footer: 'The contrast between high-barrier (aircraft) and low-barrier (taxis) industries illustrates how barrier height determines market structure. Competition policy is most needed in high-barrier industries — low-barrier markets self-correct via entry.',
      examEdge: 'Uber disrupted the taxi market by entering with a new technology platform that made it highly contestable — eliminating the dispatch and taxi licensing barriers (where legal). The incumbents (black cabs, local taxi firms) could not prevent Uber\'s entry despite regulatory resistance. This demonstrates that digital technology can reduce barriers in industries previously thought protected.'
    },
    {
      id: 'barriers_entry_7',
      template: 'paired',
      title: 'Evaluation: Barriers and Competition Policy',
      left: {
        label: 'Why some barriers are justified',
        points: [
          'Patents and copyright incentivise innovation — without barriers, no private R&D',
          'Natural barriers from scale economies are not artificial — they reflect true cost structure',
          'High sunk costs reward firms that took risks in new market development',
          'Some barriers protect consumers (safety licensing for banks, medicines)',
          'International competition: domestic champion may need scale to compete against subsidised foreign rivals'
        ]
      },
      right: {
        label: 'When barriers should be challenged',
        points: [
          'Strategic barriers (predatory pricing, exclusive dealing) are anticompetitive — prohibit under competition law',
          'Network effects may justify interoperability requirements (force platforms to be open)',
          'Excess patent protection beyond innovation incentive costs consumers',
          'Regulatory compliance barriers may be disproportionate — reduce for small entrants',
          'Data barriers (access to user data gives incumbents advantage) — data access mandates for entrants'
        ]
      },
      examEdge: 'The policy response should match the type of barrier: structural barriers (scale economies) → regulate the firm but do not break it up. Legal barriers (patents, licences) → time-limit and scope carefully. Strategic barriers (predatory pricing, foreclosure) → prohibition and fines. Network effects → interoperability mandates, data portability. Each barrier type requires a specific policy tool.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'be-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: barriers to entry',
      question: 'Evaluate the view that barriers to entry are always harmful to consumers and should be removed by government. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define barriers to entry and explain why they are generally seen as harmful. Introduce the key exception: some barriers may have welfare benefits.',
          hint: 'Barriers to entry sustain supernormal profit for incumbents by preventing competitive entry. Standard welfare case: barriers → less competition → higher prices, lower output, allocative inefficiency. But some barriers incentivise innovation (patents) or reflect genuine cost structures (natural monopoly) — the view that they are ALWAYS harmful requires challenge.',
          model: 'Barriers to entry are features of markets that prevent potential rivals from entering when incumbents earn supernormal profits. In a competitive market, supernormal profit would attract entry → prices fall → profit erodes → consumers benefit. Barriers short-circuit this self-correcting mechanism, allowing incumbent firms to sustain prices above competitive levels. The prima facie case for removing them is strong: consumers pay higher prices, output is restricted, and dynamic efficiency may suffer. However, the claim that barriers are always harmful is too strong — some barriers incentivise innovation, and the appropriate policy response depends critically on the type and source of the barrier.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How barriers harm consumers: static inefficiency',
          prompt: 'Explain the allocative and productive inefficiency that arises from barriers sustaining monopoly power.',
          hint: 'Barriers → monopoly power → P > MC (allocative inefficiency), DWL. Supernormal profit persisted → no X-efficiency pressure. Price set above MC by extent of market power. Real-world: pharmaceutical prices (insulin in US at 10× UK price where competition is higher), broadband prices in areas with cable monopoly.',
          model: 'When barriers to entry sustain market power, firms can price above marginal cost — producing allocative inefficiency and a deadweight welfare loss. Consumers pay more than is socially optimal, and output is restricted below the efficient level. Without competitive pressure, incumbents also face reduced incentives for cost efficiency (X-inefficiency): Leibenstein\'s research found firms in protected markets carried 20-30% excess costs. The pharmaceutical industry illustrates this starkly: where patent protection is strongest, drug prices diverge most sharply from marginal cost — insulin in the US costs approximately 10 times the UK price partly because of weaker competitive constraint. This static efficiency loss is the foundational case for reducing barriers.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — The innovation argument for barriers: patents and sunk costs',
          prompt: 'Explain why some barriers are necessary incentives for investment and innovation.',
          hint: 'Patents: without patent protection, innovators cannot recover R&D sunk costs → private R&D would be below social optimum (positive externality problem). Patent protection enables innovation that benefits consumers long-term — even though it creates short-run monopoly. Schumpeterian dynamic efficiency: large profits attract creative destruction — long-run consumer benefit. Natural monopoly: scale economies are structural, not created by government — removing them by forcing multiple firms destroys cost efficiency.',
          model: 'The most important exception to the "barriers are always harmful" view is the patent system. Innovation involves high upfront sunk costs (pharmaceutical R&D averaging £1-2bn per drug) that are justified only if the innovator can earn supernormal profit during the patent period. Without patent protection, the public-good nature of knowledge (non-rival, non-excludable) means rivals could free-ride on the innovator\'s investment — causing private R&D to fall below the socially optimal level. The patent barrier creates a temporary monopoly, but the consumer benefits from the innovation it incentivises. Similarly, natural monopoly barriers reflect genuine cost structures: a single water or rail network has lower average costs than two competing networks — forcing entry by requiring a duplicate network would raise costs and consumer prices. Here, the barrier serves productive efficiency, not exploitation.'
        },
        {
          type: 'counter',
          label: 'Counter — Strategic barriers vs structural: different policy implications',
          prompt: 'Distinguish between strategic barriers (always harmful, should be removed) and structural barriers (require regulation, not removal).',
          hint: 'Strategic barriers (predatory pricing, exclusive dealing, limit pricing) are deliberately erected by incumbents and have no welfare justification — competition law should prohibit. Structural barriers (scale economies, sunk costs) are often welfare-improving in themselves — removing them would raise costs. Natural monopoly: better to regulate price than to force competition. Key distinction for policy: type of barrier determines appropriate response.',
          model: 'The policy question is better framed as: which barriers should be removed, and which regulated rather than eliminated? Strategic barriers — predatory pricing, exclusive dealing contracts, excessive brand proliferation — are erected by incumbents specifically to prevent competition and have no social welfare justification. These should be prohibited under competition law, as they damage consumers without any countervailing benefit. However, structural barriers (economies of scale, sunk costs) reflect genuine cost structures and often cannot be "removed" without destroying productive efficiency. A natural monopoly (water infrastructure) broken into competing networks would have higher average costs — consumers would be worse off. The appropriate response here is price regulation (Ofwat, Ofgem) rather than forced entry. Patent barriers fall in between: time-limited patent protection is welfare-improving; excessive patent terms or patent evergreening (pharmaceutical industry) extend monopoly beyond what innovation incentive requires and should be challenged.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Dynamic vs static efficiency trade-off',
          prompt: 'Weigh the dynamic efficiency gains from barriers (innovation) against the static costs (DWL, higher prices).',
          hint: 'A* move: the trade-off between static and dynamic efficiency is the key evaluation framework. Removing all barriers maximises static efficiency but may destroy dynamic efficiency (innovation incentives). Optimal policy balances both. Schumpeter: temporary monopoly profit is the engine of innovation (creative destruction) — the monopolist today is the innovator of yesterday. Counter: in digital markets, incumbent advantage can be so durable that Schumpeterian competition never arrives (Facebook network effect barrier).',
          model: 'The deepest evaluation turns on the dynamic vs static efficiency trade-off. Removing all barriers would maximise static allocative efficiency — P = MC, maximum consumer surplus in the short run. But it would likely reduce dynamic efficiency: without the prospect of supernormal profit, firms invest less in R&D, product development, and the risky investment that drives long-run growth. Schumpeter\'s creative destruction framework suggests that temporary monopoly profit is the reward for innovation — and that competition occurs between successive innovations (iPhone competing with Android) rather than within a single product. This Schumpeterian logic is strongest in high-innovation industries (pharmaceuticals, technology). However, it is weaker in digital platform markets where network effects create winner-takes-all outcomes that lock out Schumpeterian competition entirely — Facebook has faced no serious competitor for social networking for over a decade. In these cases, the dynamic efficiency argument fails, and interventions (interoperability mandates, data portability) are more justified.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a nuanced judgement: barriers are not always harmful — the type and source of the barrier determines whether removal or regulation is the appropriate response.',
          hint: 'Strategic barriers: remove (prohibit). Natural monopoly structural barriers: regulate, not remove. Patent barriers: time-limit carefully. Network effect barriers: interoperability requirements. The blanket claim "always harmful" fails because it ignores the innovation incentive and cost-structure arguments.',
          model: 'The view that barriers to entry are always harmful and should always be removed is too broad. Strategic barriers — predatory pricing, exclusive dealing, deliberate foreclosure — have no welfare justification and should be prohibited by competition authorities. But structural and legal barriers are more nuanced: natural monopoly barriers reflect cost realities where forced competition would be wasteful, and patent barriers provide essential innovation incentives without which private R&D would fall below the socially optimal level. The appropriate policy is to match the response to the barrier type: prohibit strategic barriers, regulate natural monopolies, time-limit patents carefully, and require interoperability where network effects create irreversible lock-in. The blanket removal of all barriers would maximise short-run static efficiency but at the cost of long-run dynamic efficiency — ultimately trading future innovation for lower prices today.'
        }
      ]
    }
  ]
};
