/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Government Failure: unintended consequences and regulatory capture
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Government Failure',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully. Each case illustrates a different type of government failure. Identify the specific mechanism causing the failure in each example.',

  passage: {
    title: 'Extract: Three cases of government failure in UK policy',
    source: 'Adapted from: NAO Housing Report (2019); IPPR Biofuels Review (2014); CMA Energy Market Investigation (2016)',
    text: '<strong>Case A: UK planning restrictions and housing.</strong> UK planning law requires developers to obtain planning permission before building. The intention was to protect green spaces and architectural character. However, the number of new homes completed annually has fallen chronically short of estimated housing demand – approximately 300,000 homes per year – since the 1970s. By restricting land supply, planning permission created an unintended effect: house prices have risen faster than wages for 30 consecutive years, reducing homeownership rates among under-35s from 65% in 1990 to 38% today.<br><br><strong>Case B: EU biofuel subsidies and food prices.</strong> The EU mandated that 10% of transport fuel must come from biofuels by 2020 to reduce carbon emissions. This created large subsidies for biofuel crop production. An unintended consequence emerged: farmland shifted from food crops to biofuel crops, reducing global food supply. The UN Food and Agriculture Organisation estimated that biofuel mandates contributed to a 75% rise in global food prices between 2005 and 2008, disproportionately affecting the world\'s poorest consumers.<br><br><strong>Case C: Energy market regulation and tacit collusion.</strong> The UK energy market is regulated by Ofgem. During the 2010s, Ofgem approved "simpler" tariff structures to make comparison easier for consumers. However, by limiting the number of tariffs each company could offer, the regulation inadvertently aligned energy firms\' pricing strategies – making it easier for companies to match each other\'s prices without explicit collusion. The CMA found in 2016 that consumers were overpaying by £1.4bn per year.'
  },

  questions: [
    {
      id: 'gf-extract-q1',
      question: 'Case A (planning restrictions) illustrates which type of government failure?',
      options: [
        'Regulatory capture – house builders have lobbied planners to restrict supply and keep prices high, benefiting existing homeowners at the expense of first-time buyers',
        'Unintended consequences – a policy designed to protect green spaces has inadvertently restricted housing supply, causing prices to rise and affordability to worsen for younger generations',
        'Information failure by government – planners do not know how many homes are needed, so they approve too few permissions',
        'Short-termism – governments build too few houses before elections because voters dislike construction noise and disruption'
      ],
      correct: 1,
      explanation: 'Case A is the classic unintended consequences failure. The policy goal (protecting green space and character) was legitimate, but the restriction on land supply created a side effect that the planners did not intend: a chronic housing shortage. Because planning permission is scarce, land with permission commands a premium – raising house prices beyond what market wages support. This is government failure because the intervention (planning restriction) generated a cost (housing unaffordability) that exceeded or overshadowed the intended benefit (environmental protection). Note: regulatory capture is also plausible here – homeowners benefit from restricted supply – making it a good exam evaluation point.'
    },
    {
      id: 'gf-extract-q2',
      question: 'Case B (biofuel subsidies) illustrates which mechanism of government failure, and what was the key unintended consequence?',
      options: [
        'Short-termism – governments subsidised biofuels to win votes in agricultural regions, without considering long-run food supply effects',
        'Unintended consequences – the subsidy shifted land from food to fuel crops, reducing global food supply and contributing to a 75% rise in food prices, harming the world\'s poorest consumers',
        'Regulatory capture – biofuel firms lobbied the EU to mandate their product, capturing the regulatory process',
        'Information failure – the EU did not know that biofuel production required agricultural land, so the subsidy was poorly targeted'
      ],
      correct: 1,
      explanation: 'The EU biofuel mandate is a textbook unintended consequence: the intended effect (cutting transport carbon emissions) was achieved, but an unintended effect (displacing food crop land) caused a separate market failure – a food price spike. The government failed to account for the cross-market linkage between energy and food markets. This shows that well-intentioned intervention can create new market failures elsewhere – a key evaluation point in any government failure answer. Note the distributional dimension: carbon reduction benefits are diffuse and global, while the food price harm fell hardest on the world\'s poorest – an equity argument that complicates cost-benefit analysis.'
    },
    {
      id: 'gf-extract-q3',
      question: 'Case C (energy tariff regulation) is an example of which specific type of government failure?',
      options: [
        'Unintended consequences – the regulation reduced tariff complexity but inadvertently facilitated tacit price collusion, costing consumers £1.4bn per year',
        'Regulatory capture – energy firms lobbied Ofgem to limit tariffs, knowing fewer tariffs would make price comparison easier and reduce competitive pressure',
        'Information failure – Ofgem did not know that energy firms were colluding, so it could not prevent the collusion from occurring',
        'Government monopoly – by limiting tariffs, Ofgem effectively nationalised the pricing decision, eliminating competitive pressure'
      ],
      correct: 0,
      explanation: 'Case C is another unintended consequence – but with a twist: the regulation made the market less competitive, not more. By limiting each firm to a small number of tariffs, Ofgem made it easy for firms to observe and match each other\'s prices. Explicit collusion (price-fixing agreements) is illegal under competition law, but tacit collusion (independently matching prices because the structure makes it rational to do so) is harder to prosecute. The simplified tariff regulation created exactly the structural conditions for tacit collusion. The regulatory intervention that was meant to help consumers ended up costing them £1.4bn per year – a stark illustration of how government failure can worsen the problem it intended to solve.'
    }
  ]
};
