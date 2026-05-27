/* ============================================================
   ECONOS – Land It · Section B data for Monopoly
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Monopoly',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  /* ── Context pack: 3 extracts, collapsible ─────────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK pharmaceutical pricing and the patent monopoly',
        tags:        ['patent monopoly', 'Advanz Pharma', 'CMA', 'dynamic efficiency'],
        defaultOpen: true,
        paragraphs: [
          'Patent protection grants pharmaceutical companies temporary monopoly rights over newly developed drugs, typically for 20 years from the date of filing. The rationale is to reward the large, risky investment in research and development: the industry average cost of bringing a new drug to market is estimated at over &#163;1 billion, with many compounds failing at late clinical stages. Without patent protection, rivals could immediately copy a successful drug and undercut the innovating firm on price, removing the incentive to invest in the first place. In this sense, the patent monopoly trades short-run consumer welfare for long-run dynamic efficiency.',
          'However, patent monopolies can generate significant harm. The CMA&#39;s 2022 investigation into Advanz Pharma found that the company had increased the NHS price of liothyronine &#8212; a thyroid medication &#8212; from &#163;4.46 per pack in 2007 to &#163;258.19 per pack by 2019, despite the drug having been off-patent for decades and facing no branded alternative. The CMA concluded that this constituted an excessive and unfair price, amounting to an abuse of a dominant market position. Advanz was fined &#163;21.9 million and ordered to reduce prices. The case highlighted how the absence of patent protection does not guarantee competitive pricing when barriers to entry from regulatory hurdles, supply chain control, and switching costs persist.',
          'The pharmaceutical sector illustrates the fundamental tension at the heart of monopoly analysis: the same firm that captures consumer surplus through high prices may also be the firm investing in life-saving innovation. UK life sciences contributed &#163;94.2 billion to the economy in 2022 and employed over 280,000 people. Blanket condemnation of pharmaceutical monopoly power risks discouraging the investment that generates tomorrow&#39;s treatments. The challenge for policymakers is to distinguish legitimate patent returns from exploitative abuse.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Google&#39;s dominance of the UK search market',
        tags:        ['Google', 'search monopoly', 'CMA Digital Markets Unit', 'network effects'],
        defaultOpen: false,
        paragraphs: [
          'Google accounted for approximately 93% of UK internet search queries in 2023, making it the dominant platform in a market that is central to digital advertising and, by extension, to the commercial viability of much of the online economy. The CMA&#39;s Digital Markets Unit (DMU), established in 2021, identified Google&#39;s search dominance as a strategic market status requiring enhanced regulatory scrutiny. The CMA found that Google benefited from powerful network effects &#8212; more users generate more search data, which improves algorithm quality, attracting more users in a self-reinforcing cycle &#8212; and from exclusive default search agreements with smartphone manufacturers and browsers, including a reported payment of approximately &#36;18 billion per year to Apple to remain the default search engine on iPhones worldwide.',
          'Advertisers have little choice but to use Google Search if they want to reach the majority of UK internet users at the moment of search intent. The CMA found evidence that Google&#39;s text advertising prices had risen significantly above competitive levels without corresponding improvements in quality, and that search advertising margins were substantially higher than in comparable competitive digital markets. The DMU proposed that Google be designated as having Strategic Market Status, which would allow the regulator to impose specific conduct requirements &#8212; such as interoperability mandates and restrictions on self-preferencing &#8212; without requiring lengthy case-by-case abuse proceedings.',
          'Google disputes that its dominance harms consumers, arguing that its search engine is free, continuously improving, and faces competition from social media platforms, Amazon&#39;s product search, and emerging AI-powered search tools. The company also points to its significant investment in AI research &#8212; including UK-based DeepMind &#8212; as evidence of the dynamic efficiency benefits of scale. The debate reflects the wider tension in digital markets between static efficiency concerns (high advertising prices, foreclosure of rivals) and dynamic efficiency arguments (continued innovation driven by the returns to market leadership).'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Natural monopoly and regulation: the case of Thames Water',
        tags:        ['Thames Water', 'natural monopoly', 'Ofwat', 'RPI-X', 'regulatory failure'],
        defaultOpen: false,
        paragraphs: [
          'Thames Water is the UK&#39;s largest water and sewage company, serving around 16 million customers across London and the Thames Valley. As a natural monopoly &#8212; one where the long-run average cost of a single supplier falls across the full range of market demand, making duplication of the pipe network economically irrational &#8212; it operates as a regulated monopoly under the oversight of Ofwat, the economic regulator for the water sector in England and Wales. Ofwat uses a form of price-cap (RPI-X) regulation: it sets maximum prices for five-year regulatory periods, allowing the company to recover its costs and earn a permitted return on capital (4.19% weighted average cost of capital for 2020&#8211;25) while creating an incentive to cut costs beyond the efficiency target.',
          'The Thames Water case has exposed significant limitations of the regulatory model. By 2023, the company had accumulated debts of approximately &#163;14 billion &#8212; much of it the result of private equity owners extracting &#163;2.7 billion in dividends since privatisation while underinvesting in infrastructure. Ofwat&#39;s 2023 assessment found that Thames Water had failed to meet numerous performance commitments, including reducing sewage overflow into rivers, improving customer service, and controlling leakage. The company was placed under enhanced monitoring, and its financial distress raised the prospect of a special administration regime &#8212; effectively temporary renationalisation &#8212; as shareholders proved unable to provide additional equity.',
          'The Thames Water crisis illustrates both the risks of regulatory failure and the structural difficulty of regulating a natural monopoly. Ofwat&#39;s price-cap model created incentives for underinvestment: private owners could maximise short-term returns by cutting maintenance and loading the balance sheet with debt, knowing that customers have no alternative supplier. Critics argue that the model of private ownership of monopoly infrastructure is fundamentally flawed when the public interest requires long-term capital investment that reduces short-term returns. Supporters of private ownership counter that public ownership historically produced chronic underinvestment and deteriorating infrastructure quality, and that the solution is stronger regulation rather than renationalisation.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────────── */
  question: {
    id:       'q1',
    title:    'Extended response using the context pack',
    subtitle: 'Refer to the extracts where directed, and bring in your own knowledge.',
    marks:    25,

    parts: [
      {
        id:     'q1a',
        letter: 'a',
        marks:  5,
        type:   'freetext',
        stem:   'Explain the main sources of monopoly power, using examples from the context pack.',
        tips: [
          'Identify at least three distinct sources of monopoly power (barriers to entry).',
          'For each, explain the economic mechanism that creates and sustains market power.',
          'Use specific examples from the extracts to ground each source (patents, network effects, natural monopoly infrastructure).',
          'Do not simply list &#8212; each point needs an explanation of how it prevents rivals from entering.'
        ],
        modelAnswer: 'Monopoly power arises from barriers to entry &#8212; factors that prevent or deter rival firms from entering a market and competing away supernormal profits. There are several distinct sources. First, legal barriers such as patent protection grant the innovating firm temporary exclusive rights to produce a product. Extract A illustrates this in pharmaceuticals: a 20-year patent allows the pioneering firm to charge prices significantly above marginal cost, recovering its research and development costs before generic competition arrives. Even after patents expire, as the Advanz case shows, regulatory barriers and supply chain control can sustain market power. Second, network effects create natural dominance in platform markets. Extract B shows how Google&#39;s 93% share of UK search is reinforced by a self-reinforcing cycle: more users generate more data, which improves the algorithm, attracting more users. Once a network achieves critical mass, rivals cannot replicate this advantage even with superior technology, because users are locked into the dominant platform. This is reinforced by exclusive default agreements with device manufacturers &#8212; paying Apple approximately &#36;18 billion per year to remain the default search engine &#8212; which foreclose potential entry points for competitors. Third, high fixed costs and economies of scale create natural monopoly, as illustrated by Thames Water in Extract C. The cost of duplicating water infrastructure across London is prohibitive, so a single supplier can serve the whole market at lower average cost than any combination of rivals. This structural barrier requires no anti-competitive behaviour by the incumbent &#8212; the market itself selects for a single firm.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine whether Google&#39;s dominance of the UK search market is harmful to consumers and the wider economy.',
        tips: [
          'Set up the analysis: what harms does economic theory predict from monopoly? (P &gt; MC, deadweight welfare loss, X-inefficiency, barriers to entry).',
          'Apply each harm to Google&#39;s position using evidence from Extract B.',
          'Present the counter-arguments from Extract B (free product, continuous improvement, dynamic efficiency, AI investment).',
          'Assess the strength of both sides &#8212; is the harm to advertisers different from harm to search users?',
          'Reach a balanced conclusion on whether Google&#39;s dominance is harmful on balance.'
        ],
        modelAnswer: 'Economic theory predicts that monopoly causes harm through several channels: prices above marginal cost (allocative inefficiency), a deadweight welfare loss as some consumers are priced out, X-inefficiency from reduced competitive pressure, and barriers that foreclose entry by potentially more efficient rivals. The question is how well these theoretical harms map onto Google&#39;s actual dominance of the UK search market. The clearest evidence of harm is in the advertising market. Google&#39;s 93% share of UK search means advertisers who wish to reach consumers at the point of search intent have no viable alternative. Extract B reports that the CMA found advertising prices had risen significantly above competitive levels without corresponding quality improvements, and that search advertising margins were substantially higher than in comparable competitive markets. This is consistent with monopoly pricing &#8212; P &gt; MC in the advertising market &#8212; with the deadweight welfare loss falling on advertisers who are priced out and on smaller competitors who are denied the scale of advertising market they need to grow. The CMA&#39;s concern about Google&#39;s exclusive default agreements &#8212; payments to Apple to foreclose rivals&#39; distribution channels &#8212; represents a classic exclusionary barrier to entry, suggesting the dominance is actively maintained rather than simply the product of superior quality. However, the case for harm is more complicated from the search user&#39;s perspective. Google Search is free at the point of use, continuously improved, and widely regarded as the highest-quality search engine available. Users do not pay a price for search results, so the standard P &gt; MC analysis does not apply directly to them &#8212; the &#8220;price&#8221; they pay is their data, not money, which complicates welfare measurement. Extract B also notes Google&#39;s investment in AI research, including DeepMind, as a dynamic efficiency argument: the returns from market leadership may fund innovation that benefits consumers in the long run. On balance, the evidence suggests that Google&#39;s dominance is more clearly harmful in the advertising market than in the user-facing search market. The CMA&#39;s proposed designation of Strategic Market Status is a proportionate response &#8212; seeking to constrain exclusionary behaviour and create conditions for competition without attempting to break up a firm whose scale may be a precondition for the very innovation that consumers benefit from.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss whether the benefits of monopoly ever outweigh its costs. Refer to the extracts and your own knowledge.',
        tips: [
          'Define monopoly costs clearly: P &gt; MC (allocative inefficiency), deadweight welfare loss, X-inefficiency, barriers to entry.',
          'Define monopoly benefits: economies of scale, dynamic efficiency (Schumpeter), natural monopoly efficiency, cross-subsidisation.',
          'Use Extract A (pharmaceutical patent) for the dynamic efficiency case.',
          'Use Extract C (Thames Water) for the natural monopoly and regulatory failure case.',
          'Use Extract B (Google) for the network effects and innovation argument.',
          'Evaluate the conditions under which benefits outweigh costs &#8212; consider industry type, regulatory framework, and time horizon.',
          'Reach a clear, conditional judgement.'
        ],
        modelAnswer: 'Monopoly generates both well-documented costs and potential benefits. Standard economic analysis focuses on the costs &#8212; but a sophisticated answer must take the benefits seriously and evaluate the conditions under which they might outweigh the harms. The costs of monopoly are rooted in the profit-maximisation condition MR = MC combined with a downward-sloping demand curve, which means the monopolist sets price above marginal cost (P &gt; MC). At this output, some consumers who value the good above its marginal cost are priced out, creating a deadweight welfare loss &#8212; resources that could have generated net benefit to society go unallocated. The monopolist also has weaker incentives to minimise costs in the absence of competitive pressure, potentially leading to X-inefficiency: slack management, bloated cost structures, and slower adoption of productivity-enhancing technologies. High barriers to entry allow supernormal profits to persist in the long run rather than being competed away, transferring consumer surplus permanently to the producer and potentially worsening income distribution. The Thames Water case in Extract C illustrates these costs starkly: private equity owners extracted &#163;2.7 billion in dividends while the company accumulated &#163;14 billion in debt and failed its infrastructure investment targets &#8212; a textbook example of X-inefficiency and asset-stripping enabled by monopoly position and inadequate regulatory oversight. However, monopoly can also generate significant benefits. The most important is dynamic efficiency &#8212; the argument associated with Joseph Schumpeter that large firms with market power invest more in research and development because they can appropriate the returns through monopoly pricing during the innovation period. Extract A provides the clearest illustration: pharmaceutical companies require patent monopoly to justify the &#163;1 billion-plus cost of bringing a new drug to market. Without this protection, generic rivals could immediately undercut the innovator, destroying the incentive to invest in life-saving innovation. The UK life sciences sector, contributing &#163;94.2 billion to GDP and 280,000 jobs, represents a concrete benefit that must be weighed against the consumer harm from high drug prices. Completely eliminating pharmaceutical monopoly power &#8212; through price controls or compulsory licensing &#8212; would reduce current prices at the cost of future innovation. Natural monopoly presents a second category of benefit. Where economies of scale mean a single firm can supply the market more cheaply than multiple competitors &#8212; as with water infrastructure or electricity distribution networks &#8212; monopoly is productively efficient: it minimises average costs. Forced competition would mean either duplicating infrastructure wastefully or having several firms operating at suboptimal scale. The problem with natural monopoly is not that a single firm exists, but that it may exploit its position without regulation. The solution, as in the water and energy sectors, is regulated monopoly rather than breaking up the firm. Third, in platform markets characterised by network effects &#8212; as illustrated by Google in Extract B &#8212; a dominant firm may provide a higher-quality product precisely because of its scale. Google&#39;s search algorithm improves with more user data; DeepMind&#39;s AI research benefits from the financial resources of an extremely profitable parent company. Some concentration in such markets may therefore be both inevitable and beneficial, even if it requires regulatory safeguards to prevent exclusionary behaviour. Whether the benefits of monopoly outweigh its costs depends critically on three factors: the nature of the industry, the quality of regulation, and the time horizon of analysis. In innovative industries with high R&#38;D costs &#8212; pharmaceuticals, semiconductors, AI &#8212; the dynamic efficiency benefits of temporary monopoly can plausibly outweigh the static allocative inefficiency, particularly if the innovation period is well-calibrated by patent law. In natural monopoly industries, monopoly is productively efficient provided regulation is effective &#8212; the Thames Water case shows the costs when regulation fails. In markets without strong dynamic efficiency or scale economy justifications &#8212; such as the Advanz case of an off-patent generic drug &#8212; monopoly power generates harm that is difficult to justify. On balance, the case &#8220;for&#8221; monopoly is strongest where innovation or natural scale economies are present and where robust regulation constrains exploitative behaviour; the case against is most powerful where neither condition holds.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Apply the MR = MC profit-maximisation diagram explicitly, not just as background knowledge',
    'Distinguish static efficiency costs (deadweight welfare loss, P &gt; MC) from dynamic efficiency benefits (innovation, R&#38;D)',
    'Use all three extracts &#8212; each represents a different type of monopoly with different implications',
    'Reach a conditional judgement that identifies the specific circumstances under which monopoly may be justified'
  ]
};
