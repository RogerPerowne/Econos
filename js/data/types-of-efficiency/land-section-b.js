window.ECONOS_LAND_SECTION_B = {
  topic:        'Types of Efficiency',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK energy market efficiency: competitive vs regulated segments',
        tags:        ['Ofgem price cap', 'static vs dynamic efficiency', 'energy retail competition', 'nationalisation debate'],
        defaultOpen: true,
        paragraphs: [
          'The UK energy market consists of two distinct segments with very different competitive structures. Electricity generation is partly competitive &#8212; multiple generators including renewable operators, nuclear plants, and gas peakers compete to sell power into the wholesale market. Energy retail &#8212; supplying homes and businesses &#8212; was deregulated in 1996 and initially featured dozens of competing suppliers. By 2024, following the collapse of over 30 smaller retailers during the 2021&#8211;22 energy price shock, the market had re-consolidated around six large suppliers with over 80% of the domestic market.',
          'Ofgem introduced a domestic energy price cap in 2019, initially designed to prevent overcharging of disengaged consumers in a market where switching had become rarer than predicted. Following the energy price shock, the cap became the mechanism by which the government shielded consumers from the full force of wholesale price rises &#8212; a form of allocative intervention that prioritised affordability over market signals. Critics argued the cap undermined productive efficiency by preventing the price signals that would incentivise energy conservation and fuel switching, while supporters argued it prevented market power exploitation by oligopolistic retailers with limited competitive pressure.',
          'The dynamic efficiency question is contested. Some economists argue that the regulated retail energy market &#8212; with guaranteed customer bases and price cap protection &#8212; reduces the incentive to invest in smart metering, demand response technology, and renewable infrastructure that would benefit consumers in the long run. Others point to the dramatic growth in renewable generation capacity (offshore wind costs down 70% since 2015) as evidence that competitive generation markets, not retail regulation, drive dynamic efficiency in the energy sector. The nationalisation debate (Labour&#39;s Great British Energy initiative) revolves around whether public ownership would improve productive efficiency through scale and coordination or reduce it through reduced competitive discipline.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Pharmaceutical industry: static vs dynamic efficiency trade-off',
        tags:        ['patent monopoly', 'R&#38;D incentive', '&#163;1.3bn development cost', 'generic price fall 80&#8211;90%'],
        defaultOpen: false,
        paragraphs: [
          'The pharmaceutical industry presents the clearest real-world example of the trade-off between static and dynamic efficiency. Static efficiency requires P = MC &#8212; pricing drugs at or near their marginal production cost, which for many established drugs is very low (generic HIV antiretrovirals cost less than &#163;100 per year to produce). Dynamic efficiency requires investment in R&#38;D that creates the next generation of treatments &#8212; at an average cost of &#163;1.3 billion per approved drug and a failure rate of over 90% in clinical trials. These two requirements are in direct conflict: static efficiency demands low prices that cannot recover development costs; dynamic efficiency demands high prices that restrict access.',
          'The patent system resolves this trade-off by granting a 20-year statutory monopoly that allows drug developers to charge prices far above marginal cost during the patent term &#8212; earning supernormal profits that recover R&#38;D costs and provide the commercial incentive to invest in the next innovation. On patent expiry, generic manufacturers enter and prices typically fall by 80&#8211;90%, approaching the competitive equilibrium. The system sacrifices static efficiency (P &gt; MC, deadweight loss, restricted access) to preserve dynamic efficiency (innovation incentive). Approximately 18&#8211;20% of pharmaceutical revenue is reinvested in R&#38;D &#8212; among the highest R&#38;D intensity of any industry.',
          'Schumpeter&#39;s &#8220;creative destruction&#8221; argument supports this arrangement: temporary monopoly profits are the reward for successful innovation and the source of funding for future R&#38;D. Without the patent barrier, the commercial incentive to invest in risky, expensive drug development collapses &#8212; a dynamic efficiency failure that would harm consumers far more in the long run than the static efficiency loss from patent pricing. However, critics argue that pharmaceutical firms use patent profits to fund marketing and &#8220;me-too&#8221; drugs (minor variants of existing compounds) rather than genuine innovation, and that the patent system is manipulated through evergreening to extend effective monopoly periods beyond the intended 20 years.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Privatisation and efficiency: BT and the UK telecoms market',
        tags:        ['BT privatisation 1984', 'X-efficiency gains', 'Ofcom regulation', 'productive efficiency'],
        defaultOpen: false,
        paragraphs: [
          'British Telecom (BT) was privatised in 1984 &#8212; one of the earliest and most studied UK privatisations. At the time of privatisation, BT operated as a public sector monopoly: labour productivity was estimated to be 30&#8211;40% below the level achievable under competitive conditions, and capital investment in network modernisation had been chronically below the efficient level due to public expenditure constraints. Advocates of privatisation argued that private ownership, profit motive, and eventual market competition would eliminate X-inefficiency and drive productive efficiency improvement.',
          'Post-privatisation evidence is mixed but broadly supportive of efficiency gains. BT&#39;s labour productivity increased substantially through the 1990s, driven by headcount reductions and network automation &#8212; from approximately 250,000 employees in 1984 to around 90,000 in the mid-1990s. However, critics noted that these gains reflected primarily redundancy-driven downsizing rather than genuine productivity improvement, and that BT retained significant monopoly power over the local loop (the final connection to homes and businesses) that limited the competitive pressure supposed to drive efficiency. Ofcom was required to mandate network access (unbundling the local loop) before genuine retail competition developed.',
          'The dynamic efficiency question is more contested. BT&#39;s investment in fibre broadband infrastructure has lagged behind several European comparators with stronger regulatory obligations or public investment in fibre. Proponents of renationalisation argue that private BT&#39;s underinvestment in infrastructure reflects the tension between short-run profit maximisation and long-run network investment &#8212; a form of dynamic inefficiency that public ownership and patient capital could resolve. The debate mirrors the broader question of whether privatisation improves or worsens dynamic efficiency in natural monopoly industries where competitive pressure is inherently limited.'
        ]
      }
    ]
  },

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
        stem:   'Explain the difference between productive and allocative efficiency.',
        tips: [
          'Define each type precisely with the correct condition: productive = minimum AC (MC = AC); allocative = P = MC.',
          'Explain what each means for resource use: productive = no technical waste; allocative = resources match consumer preferences.',
          'Note where each is achieved: perfect competition achieves both in long-run equilibrium.',
          'Give an example of each type of failure &#8212; monopoly fails both.'
        ],
        modelAnswer: 'Productive efficiency occurs when a firm produces its output at the lowest possible average cost &#8212; at the minimum point of its long-run average cost (LRAC) curve. The condition is MC = AC: marginal cost equals average cost only at the minimum of the AC curve. Productive efficiency means no technical waste &#8212; the firm is extracting maximum output from its inputs. In long-run equilibrium, perfect competition forces productive efficiency because free entry erodes supernormal profit until price falls to minimum AC, at which point firms producing above or below this output are making losses and exit. Allocative efficiency requires price to equal marginal cost (P = MC). At this point, the price consumers pay for the last unit &#8212; reflecting the marginal value they place on it &#8212; exactly equals the marginal cost of producing it &#8212; the opportunity cost of the resources used. Resources are therefore allocated to their highest-value use: no output produced is valued below its cost, and no mutually beneficial trade is foregone. Perfect competition achieves P = MC because each firm is a price-taker (P = MR), and the profit-maximising condition MR = MC therefore gives P = MC. A monopoly fails both: it produces below minimum AC (productively inefficient) and sets P &gt; MC (allocatively inefficient), creating a deadweight welfare loss. Extract B illustrates this: patent monopoly pricing far above marginal cost is allocatively inefficient &#8212; the defining static cost of the pharmaceutical patent system.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract B, examine the trade-off between static and dynamic efficiency in the pharmaceutical industry.',
        tips: [
          'Define static efficiency (productive + allocative, at a point in time) and dynamic efficiency (innovation over time).',
          'Explain why they are in conflict in pharmaceuticals: P = MC would fund no R&#38;D; high prices create access barriers.',
          'Use the data: &#163;1.3bn average development cost, 18&#8211;20% R&#38;D intensity, 80&#8211;90% price fall on patent expiry.',
          'Explain the Schumpeterian argument: supernormal profits as the reward and funding source for innovation.',
          'Consider the criticism: me-too drugs, evergreening, marketing vs genuine innovation.',
          'Reach a balanced assessment of whether the trade-off is well-calibrated.'
        ],
        modelAnswer: 'Static efficiency refers to productive and allocative efficiency at a given point in time: specifically, the condition that P = MC (allocative efficiency) and that output is at minimum AC (productive efficiency). Dynamic efficiency refers to the capacity to innovate over time &#8212; investing in R&#38;D, new products, and processes that shift the production possibility frontier outward and improve consumer welfare in the long run. Extract B establishes these two objectives as directly in conflict in pharmaceuticals. Static efficiency demands P = MC: drugs priced at marginal cost (which for many established drugs is very low &#8212; generic HIV antiretrovirals cost under &#163;100 per year to manufacture) would maximise current access. But at P = MC, no firm can recover &#163;1.3 billion in average R&#38;D costs &#8212; a figure compounded by a clinical trial failure rate above 90%. Static efficiency pricing would therefore eliminate the commercial incentive to invest in new drugs entirely, collapsing dynamic efficiency. The pharmaceutical patent system resolves this by granting a 20-year monopoly that allows P &gt; MC pricing during the patent term. The extract confirms that 18&#8211;20% of revenue is reinvested in R&#38;D &#8212; exceptionally high by any industrial standard &#8212; funded by patent-protected pricing. This is the Schumpeterian argument: temporary monopoly profits are the prize for successful innovation and the source of funding for the next generation of treatments. The system&#39;s validation is visible in the data: on patent expiry, prices fall by 80&#8211;90% as generics enter &#8212; confirming that the monopoly was temporary and that the long-run outcome is closer to competitive pricing. However, Extract B&#39;s criticism is important: pharmaceutical firms may use patent profits to fund marketing and &#8220;me-too&#8221; incremental variants rather than genuine breakthrough innovation, and evergreening extends effective monopoly periods beyond the intended 20 years. If these practices are widespread, the dynamic efficiency justification for static efficiency sacrifice is weakened. On balance, the pharmaceutical trade-off appears broadly well-designed &#8212; the patent system produces both the innovations and the eventual generic access &#8212; but requires vigilant regulation against strategic abuses that extend barriers without generating further innovation.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which perfect competition is more efficient than monopoly. Refer to the extracts and your own knowledge.',
        tips: [
          'Assess each type of efficiency in turn: productive, allocative, dynamic, X-efficiency.',
          'Perfect competition: achieves productive and allocative efficiency in long-run equilibrium; may lack dynamic efficiency due to normal profit constraint.',
          'Monopoly: fails productive (excess capacity, P &gt; min AC) and allocative (P &gt; MC) efficiency; may achieve dynamic efficiency (Schumpeter, Extract B); suffers X-inefficiency (Extract C analogy).',
          'Use extracts: Extract B for dynamic efficiency trade-off; Extract C for X-efficiency in regulated vs competitive markets; Extract A for allocative efficiency implications of price caps.',
          'Consider the Schumpeterian counter-argument: monopoly supernormal profits fund the R&#38;D that dynamic efficiency requires.',
          'Conclude: perfect competition is superior on static criteria; monopoly may have dynamic efficiency advantages &#8212; but the overall verdict depends on weighting and context.'
        ],
        modelAnswer: '<p>Whether perfect competition is more efficient than monopoly depends critically on which type of efficiency is prioritised. Across the four main types &#8212; productive, allocative, dynamic, and X-efficiency &#8212; the verdict is mixed and context-dependent, not a simple ranking in favour of either market structure.</p><p>On productive efficiency, perfect competition is superior. In long-run equilibrium, free entry drives price down to minimum average cost, forcing all firms to produce at the technically efficient output level (MC = AC). A monopolist, by contrast, operates at profit-maximising output where MR = MC &#8212; typically producing below MES, leading to excess capacity and average costs above the minimum. Extract C illustrates this with BT at privatisation: the public sector telecommunications monopoly operated with labour productivity 30&#8211;40% below competitive levels &#8212; a direct productive inefficiency that market competition and privatisation partially corrected.</p><p>On allocative efficiency, perfect competition is again superior. Each firm in perfect competition is a price-taker (MR = P), so the profit-maximising condition MR = MC gives P = MC &#8212; the condition for allocative efficiency. Resources are allocated to match consumer preferences with no deadweight welfare loss. Monopoly sets MR = MC where MR is below the demand curve, giving P &gt; MC and a deadweight loss triangle &#8212; output below the socially optimal level. Extract B illustrates this starkly: pharmaceutical patent pricing far above marginal cost is explicitly an allocatively inefficient outcome, generating restricted access and deadweight welfare loss as the deliberate cost of the innovation incentive.</p><p>On dynamic efficiency, monopoly may outperform. Perfect competition firms earn only normal profit in long-run equilibrium &#8212; insufficient to fund large-scale R&#38;D. Monopolists earn supernormal profits that can be invested in innovation. Schumpeter&#39;s argument &#8212; supported by Extract B&#39;s data showing pharmaceutical R&#38;D intensity of 18&#8211;20% of revenue &#8212; is that temporary monopoly profits are the prize for innovation and the mechanism by which it is funded. Extract A&#39;s reference to offshore wind cost reductions of 70% since 2015 in competitive generation markets complicates this: some competitive markets do achieve strong dynamic efficiency when competitive pressure itself incentivises innovation. The verdict on dynamic efficiency is therefore contested and industry-specific.</p><p>On X-efficiency, perfect competition is superior. Competitive pressure forces firms to minimise internal slack &#8212; overstaffing, managerial complacency, and wasteful practices are eliminated as conditions of survival. Monopolists face no such pressure and can allow costs to rise above the technically possible minimum, as BT&#39;s pre-privatisation performance demonstrates (Extract C). In conclusion, perfect competition is unambiguously superior on productive, allocative, and X-efficiency criteria. Monopoly&#39;s only legitimate advantage &#8212; and it is a real one &#8212; is dynamic efficiency in industries (like pharmaceuticals) where R&#38;D costs are enormous and innovation is the primary source of long-run consumer welfare. The appropriate policy response is therefore not to choose between market structures but to preserve competitive discipline on static efficiency while protecting the dynamic incentives that specific industries require &#8212; through patents, regulated competition, or targeted public investment where markets fail to deliver sufficient innovation.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define all four types of efficiency precisely before evaluating each market structure against them',
    'Use the pharmaceutical trade-off (Extract B) to show that the static vs dynamic efficiency conflict is real and policy-relevant',
    'Reference X-efficiency and BT/privatisation (Extract C analogy) &#8212; competitive pressure eliminates slack that monopoly tolerates',
    'Acknowledge Schumpeter&#39;s point: monopoly supernormal profits fund R&#38;D &#8212; a genuine advantage in innovation-intensive industries',
    'Conclude conditionally: perfect competition wins on static criteria; monopoly may win on dynamic efficiency; the overall verdict depends on which matters most in context'
  ]
};
