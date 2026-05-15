window.ECONOS_TOPIC = {
  id: 'govt_failure',
  topicNum: '1.20',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Government Failure',
  estTime: '9-11 minutes',
  goal: 'Lock in the causes and types of government failure — and why intervention intended to correct market failure can sometimes make things worse.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Government intervention is justified by market failure — but intervention is not costless. Government failure occurs when intervention produces a worse outcome than the market would have, due to information problems, political incentives, unintended consequences, or regulatory capture.',
    doInThis: 'Work through 7 cards covering the definition of government failure, information problems, regulatory capture, the law of unintended consequences, short-termism, intervention vs market failure comparison, and the case for minimal intervention.',
    outcomes: [
      'Define government failure and distinguish it from market failure',
      'Identify the main causes of government failure with examples',
      'Explain regulatory capture and the principal-agent problem in government',
      'Evaluate when market failure is worse than government failure — and vice versa'
    ],
    tip: 'Government failure occurs when the costs of intervention (including unintended consequences) exceed the costs of the market failure it was designed to correct. Intervention is not automatically better than the market.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'govt_failure_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Government failure: the big picture',
      lede: 'Intervention designed to fix market failure can make things worse — and recognising when is the heart of evaluation.',
      branches: [
        { tone: 'green',  label: 'The core idea',         sub: 'A net welfare loss <em>from</em> intervention. The comparator is realistic government, not a perfect one.' },
        { tone: 'amber',  label: 'Causes',                sub: 'Information failures, conflicting objectives, administrative cost, political short-termism.' },
        { tone: 'rose',   label: 'Regulatory capture',    sub: 'Regulators end up serving the industry they\'re meant to regulate — distorted policy, weak enforcement.' },
        { tone: 'purple', label: 'Unintended consequences', sub: 'Rent controls → housing shortages. Drug bans → black markets. Subsidies → dependence. The classic exam material.' },
        { tone: 'blue',   label: 'Reducing failure',      sub: 'Better information, transparency, sunset clauses, cost-benefit analysis, independent regulators.' }
      ],
      body: '<strong>Government failure</strong> occurs when government intervention in markets produces a net welfare loss — either because it creates new inefficiencies, has large unintended consequences, or corrects the market failure poorly. The result is an outcome worse than the uncorrected market.<br><br>Government failure does not mean all intervention is wrong — just that intervention has costs as well as benefits and should be subject to rigorous evaluation. The relevant comparison is not "market outcome vs perfect government" but "market outcome vs realistic government intervention."<br><br>Market failure + government failure = a case for choosing the lesser of two evils.',
      keyTerms: [
        { term: 'Government failure', def: 'When government intervention creates welfare losses that exceed (or could exceed) the market failure it was designed to correct.' },
        { term: 'Net welfare loss', def: 'Total cost of intervention (deadweight loss, unintended consequences, fiscal cost) exceeds the welfare gain from correcting the market failure.' },
        { term: 'Second-best theory', def: 'When one market failure exists, correcting it through imperfect intervention may produce a second-best outcome worse than doing nothing.' }
      ],
      examEdge: 'Examiners often set essays asking "evaluate government intervention to correct a market failure." High-band answers argue: intervention is justified in principle (market failure exists) but may fail in practice (information problems, unintended consequences, political incentives). The second paragraph always needs government failure analysis.'
    },
    {
      id: 'govt_failure_2',
      template: 'cause',
      diagramKey: 'govtFailureDiagram',
      title: 'Causes of Government Failure',
      causes: [
        { head: 'Information failure', body: 'Governments face the same information problems as markets — or worse. Setting optimal taxes, subsidies, or production targets requires knowing the MEC or MEB, which is inherently uncertain. Incorrect information → wrong policy level → under- or over-correction.' },
        { head: 'Political incentives (short-termism)', body: 'Politicians on 4-5 year election cycles prefer visible short-run benefits over long-run welfare gains. Infrastructure investment, climate policy, and pension reform all have costs now and benefits later — systematically under-prioritised.' },
        { head: 'Regulatory capture', body: 'Regulators are "captured" by the industries they regulate — they adopt the industry\'s perspective and protect incumbent firms rather than consumers. Energy regulators, financial regulators, pharmaceutical approvals all face this risk.' },
        { head: 'Unintended consequences', body: 'Complex markets produce unexpected reactions to interventions. Biofuel mandates (intended to reduce CO2) caused food price spikes by diverting crops. Rent controls caused housing shortages. Sugar tax caused reformulation (intended) but also smaller portion sizes (unintended).' },
        { head: 'Spending inefficiency', body: 'Government production lacks profit motive and competitive pressure → productive inefficiency. NHS procurement, defence contracts, and public IT projects have a poor track record of cost and time overruns.' }
      ],
      examEdge: 'Hayek\'s knowledge problem applies to government just as it does to central planning: no government can perfectly know all the information needed to set optimal policy. This is not an argument against all intervention — just for humility about what intervention can achieve. Use this framing for evaluation.'
    },
    {
      id: 'govt_failure_3',
      template: 'framing',
      title: 'Regulatory Capture',
      body: '<strong>Regulatory capture</strong> occurs when a regulatory body, set up to act in the public interest, ends up advancing the commercial or political interests of the industry it regulates. The regulator is "captured" by the regulated.<br><br><strong>Mechanisms:</strong><br>• <em>Revolving door:</em> regulators are recruited from industry → sympathetic to industry perspective; often return to industry after regulatory stint.<br>• <em>Information asymmetry:</em> industry has better knowledge of its costs and technology than the regulator — can manipulate regulatory decisions.<br>• <em>Concentrated interest vs diffuse public:</em> industry has strong incentive to lobby intensively; consumers have weak individual incentive to counter-lobby.<br><br><strong>Examples:</strong> Financial services regulation (pre-2008 FSA captured by banks); energy regulation; pharmaceutical approvals.',
      keyTerms: [
        { term: 'Regulatory capture', def: 'Regulatory body that is supposed to protect the public ends up serving the industry it regulates.' },
        { term: 'Revolving door', def: 'Movement of individuals between roles in government regulation and roles in the industries being regulated — creates conflicts of interest.' },
        { term: 'Concentrated vs diffuse interest', body: 'Industry has high per-firm benefit from favourable regulation → intensive lobbying. Each consumer has tiny interest → weak counter-lobbying. Asymmetry tilts regulation toward industry.' }
      ],
      examEdge: 'Pre-2008 financial crisis: FSA\'s "light-touch" regulation was a form of regulatory capture. Banks convinced regulators that self-regulation was sufficient. Result: excessive risk-taking → 2008 crash → £137bn taxpayer bank bailout. Post-crisis: tighter regulation (FPC, PRA), but risk of recapture always present.'
    },
    {
      id: 'govt_failure_4',
      template: 'mechanisms',
      title: 'Unintended Consequences',
      intro: 'Government interventions regularly produce significant unintended consequences — the "law of unintended consequences."',
      steps: [
        { label: 'Biofuels mandate', text: 'US and EU mandated fuel ethanol from crops (positive externality of lower CO2). Unintended: increased demand for corn/rapeseed → food prices rose globally → food riots in developing countries (2007-08). Cure worse than disease for the poorest.' },
        { label: 'Right to buy (UK housing)', text: 'Council tenants given right to buy at discounts — aimed at increasing homeownership. Unintended: council housing stock reduced from 6.5m (1979) to 2m (2020); councils lacked funds to build replacements; housing shortage worsened.' },
        { label: 'Cobra effect', text: 'Colonial India: British government paid bounty for dead cobras to reduce population. Unintended: Indians bred cobras to collect the bounty → cobra population rose. When scheme cancelled, breeders released farmed cobras → worse than before.' },
        { label: 'Sugary drink tax (smaller cans)', text: 'Sugar levy incentivised manufacturers to reduce can sizes to stay under 5g/100ml threshold. Consumers paid more per litre for smaller portions — higher unit cost, smaller quantity. Unintended redistributive effect.' }
      ],
      examEdge: 'The cobra effect is the canonical exam example of perverse incentives and unintended consequences. It illustrates a general principle: when you target a metric (cobra count → bounty), agents game the metric (breed cobras). Goodhart\'s Law: "When a measure becomes a target, it ceases to be a good measure." Apply to any performance target in government policy.'
    },
    {
      id: 'govt_failure_5',
      template: 'paired',
      title: 'Market Failure vs Government Failure',
      left: {
        label: 'When market failure is severe (intervention justified)',
        points: [
          'Public goods: market provides zero; any government provision is better than none',
          'Large externalities: climate change, pandemics, nuclear risks — market price signals radically understate true costs',
          'Severe information asymmetry: patients cannot evaluate medical quality; financial products are complex',
          'Natural monopoly: market provides at P > MC; regulation or public provision improves welfare'
        ]
      },
      right: {
        label: 'When government failure dominates (caution or restraint)',
        points: [
          'Marginal externalities: intervention costs may exceed the modest welfare gain from correction',
          'Fast-moving markets: government regulation too slow to keep up with technology (social media, crypto)',
          'Complex supply chains: intervention in one part distorts others (biofuel → food prices)',
          'High political risk: policy reversal, regulatory capture, or short-termism undermines long-run welfare'
        ]
      },
      examEdge: 'The comparison is never "perfect market vs perfect government" — it is "imperfect market vs imperfect government." For climate change: market failure is massive, global, irreversible → intervention justified despite government failure risk. For small local noise externality: market failure is modest → negotiated private solution (Coase) preferred over costly regulation.'
    },
    {
      id: 'govt_failure_6',
      template: 'framing',
      title: 'Government Failure in Practice',
      body: '<strong>HS2 (High Speed Rail):</strong> Major infrastructure investment. Costs have risen from £37.5bn (2010 estimate) to £100bn+. Phase 2 (Manchester/Leeds) cancelled 2023. Illustrates: optimism bias in government project appraisal, information failures, and political difficulty of cancelling committed projects even when costs escalate.<br><br><strong>PFI (Private Finance Initiative):</strong> Government attempted to bring private sector discipline to public infrastructure. Result: expensive long-term contracts; many projects had to be renationalised. Government failure: poor contract design, underestimated corporate bargaining power, information asymmetry between public sector client and private provider.',
      keyTerms: [
        { term: 'Optimism bias', def: 'Systematic tendency to underestimate costs and overestimate benefits in government project appraisal.' },
        { term: 'PFI', def: 'Private Finance Initiative — government contracts private firms to build and operate public infrastructure; rents facility back. Often more expensive than direct public provision.' },
        { term: 'Sunk cost fallacy', def: 'Continuing investment in a failing project because past spending cannot be recovered — rational exit is politically difficult.' }
      ],
      examEdge: 'HS2 is a live exam case study. Points to make: (1) large infrastructure projects systematically overrun costs (reference Flyvbjerg\'s research on "megaproject paradox"); (2) political commitment makes rational abandonment difficult (sunk cost fallacy in politics); (3) even failed projects can produce some benefit — the Manchester leg\'s cancellation may have caused more harm than completing it at higher cost.'
    },
    {
      id: 'govt_failure_7',
      template: 'framing',
      title: 'Reducing Government Failure',
      body: 'Government failure is not inevitable — better institutional design reduces its likelihood:<br><br>• <strong>Independent regulatory agencies:</strong> Arm\'s-length from political control (Bank of England independence for monetary policy; OBR for fiscal forecasting; Competition and Markets Authority). Reduces short-termism and political capture.<br>• <strong>Sunset clauses:</strong> automatic expiry of regulations forces reassessment — prevents vested interests from making temporary measures permanent.<br>• <strong>Cost-benefit analysis:</strong> rigorous appraisal before intervention (Treasury Green Book). Forces explicit accounting of costs including unintended consequences.<br>• <strong>Pilot schemes:</strong> test policy at small scale before full rollout — reduces scale of unintended consequence risk.',
      keyTerms: [
        { term: 'Independent regulator', def: 'Agency insulated from political interference — reduces short-termism and regulatory capture.' },
        { term: 'Cost-benefit analysis', def: 'Systematic comparison of all costs and benefits of an intervention — required before major UK government spending decisions.' },
        { term: 'OBR', def: 'Office for Budget Responsibility — independent UK body forecasting public finances; reduces government\'s ability to manipulate its own fiscal projections.' }
      ],
      examEdge: 'Bank of England independence (granted 1997) is the most successful institutional reform to reduce government failure in economic policy: central bank sets interest rates free from electoral cycle pressure → lower and more stable inflation than before. It demonstrates that delegating decisions to independent bodies with clear mandates can significantly reduce government failure in key policy areas.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'gf-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: government failure',
      question: 'Evaluate the view that government failure makes government intervention in markets more harmful than the market failures it is designed to correct. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define government failure and explain how it can turn intended corrections into new sources of welfare loss.',
          hint: 'Government failure: when government intervention produces a worse outcome than the market failure it addresses. Types: information failure (government doesn\'t know optimal intervention level), unintended consequences (policy produces side-effects), short-termism (political cycle incentivises policies with visible short-run benefits), regulatory capture (regulator serves industry, not consumers). The question is whether government failure is so pervasive that intervention makes things worse on balance.',
          model: 'Government failure occurs when state intervention in markets creates welfare losses that exceed the gains from correcting the original market failure. Sources include information asymmetries (governments cannot accurately measure externalities or elasticities), unintended consequences (policies produce side-effects that offset intended benefits), short-termism driven by electoral cycles, and regulatory capture (regulated industries influencing their overseers). The question of whether government failure makes intervention more harmful than the market failure it targets is fundamentally empirical — and the answer depends on the type of market failure, the quality of governance, and the design of the intervention.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How government failure creates new welfare losses',
          prompt: 'Explain the main sources of government failure with concrete examples.',
          hint: 'Information problem: government sets carbon tax too low → insufficient abatement. Or too high → over-correction → unnecessary output reduction. UK government failed to estimate optimal Green Investment Bank subsidy rates accurately. Unintended consequences: minimum wage → if set above MWC in competitive market, can cause unemployment. Agricultural subsidies (CAP) → raised food prices, discouraged efficient farming, cost EU €55bn/year. Short-termism: UK government\'s 13 changes to investment incentives 2010-22 → business uncertainty → reduced investment.',
          model: 'Government failure takes several concrete forms. The information problem is most fundamental: setting a carbon tax requires estimating the marginal external cost of carbon, which involves substantial uncertainty (estimates range from $50 to over $200 per tonne). Systematic underestimation leaves market failure uncorrected; overestimation creates an efficiency cost in the other direction. Unintended consequences are documented in many UK interventions: the Help to Buy scheme, designed to address housing affordability, increased house prices by stimulating demand without increasing supply — potentially worsening the problem. The EU Common Agricultural Policy spent €55bn annually subsidising farming, raising food prices for consumers, reducing agricultural efficiency, and benefiting landowners (who captured most subsidy value) more than farming communities. Regulatory capture is a further source: financial services regulators became closely aligned with the banks they regulated, contributing to failures in pre-2008 risk oversight.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — The scale of market failure that justifies intervention',
          prompt: 'Explain why major market failures (climate change, public goods, monopoly) often still justify intervention despite government failure risks.',
          hint: 'The benchmark for intervention is not "zero government failure" but "government failure < market failure costs". Climate change: market failure is very large (existential externality) → even imperfect carbon pricing may still be net positive. Public goods: market provides zero (free rider problem) → any government provision is welfare-improving vs zero. Natural monopoly: without regulation, monopoly profits indefinitely at DWL cost → imperfect regulation (RPI-X price cap) still better than unregulated monopoly. Market failures are often very large — imperfect government intervention may still reduce net welfare loss.',
          model: 'The welfare case for government intervention does not require government to be perfectly efficient — it requires government intervention to produce less welfare loss than the uncorrected market failure. For large market failures, this bar is often met even with imperfect intervention. Climate change represents the starkest example: uncorrected externality from carbon emissions risks catastrophic and irreversible global welfare losses — even a carbon tax set at 50% of the optimal level would still generate enormous net welfare benefit relative to doing nothing. Public goods (national defence, pandemic preparedness) produce zero output in free markets due to the free-rider problem — any government provision is better than none. Natural monopoly regulation (water, energy) may be imperfect — Ofwat famously failed to ensure adequate infrastructure investment by water companies — but unregulated water monopoly pricing would impose higher consumer prices and less investment, not more. The bar for intervention is not perfection but improvement over the unregulated baseline.'
        },
        {
          type: 'counter',
          label: 'Counter — Cases where government intervention has clearly made things worse',
          prompt: 'Present concrete cases where government failure exceeded the market failure being addressed.',
          hint: 'UK agriculture 1960s-70s: government ran National Coal Board and steel industry at huge losses through subsidised over-production. Ford/British Leyland: £billions in government support delayed necessary restructuring, prolonged inefficiency. EU agriculture: CAP costs exceeded benefits for decades. UK financial regulation pre-2008: FSA regulatory capture contributed to financial crisis (more severe than original market failure would have been). Soviet central planning: attempt to replace market allocation with government allocation produced catastrophic welfare losses — the ultimate government failure case. These are not marginal failures but cases of systematic, large-scale government failure exceeding the market failures being addressed.',
          model: 'There are documented cases where government intervention has clearly produced worse outcomes than the market failures being addressed. The British Leyland nationalisation consumed £billions in government subsidies during the 1970s without producing viable industries — the eventual restructuring was more disruptive than earlier market exit would have been. The EU Common Agricultural Policy\'s subsidy regime created overproduction (butter mountains, wine lakes), environmental damage from intensive farming, and high food prices for consumers — welfare losses that arguably exceeded the market failures (rural income support, food security) the policy aimed to address. Most dramatically, Soviet-style central planning — the extreme case of replacing market allocation with government allocation — produced sustained welfare losses relative to market economies that were only fully revealed with the collapse of the Soviet system. In financial regulation, the UK Financial Services Authority\'s light-touch approach pre-2008 was itself a form of regulatory capture that contributed to the severity of the financial crisis.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Institutional quality and the design of intervention determine outcomes',
          prompt: 'Weigh government failure against market failure with reference to institutional quality and the type of market failure.',
          hint: 'Key judgement: government failure is not a fixed quantity — it depends on institutional quality, governance, and policy design. Better institutions (independent regulators, evidence-based policy, RPI-X price caps, BoE independence) reduce government failure substantially. The view that government failure always dominates requires that all governments fail equally regardless of design — which is contradicted by cross-country evidence. Nordic model: high-trust, well-governed states achieve low government failure with substantial intervention. The case against intervention is strongest in contexts with weak institutions, poor information, and complex systems (industrial policy in developing countries).',
          model: 'The extent of government failure is not a fixed characteristic of all intervention — it depends critically on institutional quality, policy design, and governance capacity. The Bank of England\'s operational independence (1997) reduced monetary policy government failure dramatically: removing interest rate decisions from electoral cycle pressure improved both the quality and credibility of policy. RPI-X regulation for utilities introduced performance incentives that reduced the regulatory capture and inefficiency of earlier nationalised industries. Cross-country evidence shows that well-governed states (Scandinavian countries, New Zealand, Germany) achieve substantial welfare gains from intervention with relatively low government failure costs — their institutions produce informed, disciplined policy rather than politically-distorted, captured, or uninformed intervention. The case that government failure always exceeds market failure is therefore too strong: it applies most clearly where governance is weak, information is poor, and the systems being regulated are complex. Where institutions are strong and market failures are large, well-designed intervention typically produces net welfare gains.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a nuanced judgement: government failure is a real and important constraint, but it does not universally make intervention harmful — institutional quality and market failure size determine the net outcome.',
          hint: 'Government failure is real and should constrain the design and ambition of intervention. But the view that it always makes intervention worse than the market failure is too strong: for major market failures (climate, public goods, natural monopoly) with strong institutions, net intervention benefits are likely positive. The prescription is not to abandon intervention but to design it well — use independent regulators, evidence-based policy, transparent incentives, and outcome evaluation.',
          model: 'Government failure is a genuine and important constraint that should inform the design and ambition of all market interventions. The documented cases of industrial policy failure, regulatory capture, and unintended consequences show that intervention is not automatically welfare-improving — the quality of implementation matters enormously. However, the strong view that government failure makes intervention consistently more harmful than market failure is not supported by the evidence. For major market failures — climate externalities, public goods, natural monopoly, and financial system stability — the costs of uncorrected market failure are so large that even imperfect government intervention typically delivers net welfare gains. The prescription is not to abandon intervention but to design it with institutional safeguards against the sources of government failure: independent regulators, evidence-based policy design, transparent performance incentives, and systematic outcome evaluation. Government failure and market failure coexist — the task of good economic policy is to minimise both simultaneously.'
        }
      ]
    }
  ]
};
