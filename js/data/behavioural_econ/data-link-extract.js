/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Behavioural Economics: nudges, sugar tax and bounded rationality
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Behavioural Economics',
  backUrl: TopicLoader.routes.link('chain'),
  nextUrl: TopicLoader.routes.link('diagram'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.routes.link('diagram') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: -1,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully, then use behavioural economics concepts to interpret each question. Connect what the extract says to specific theories you have studied.',

  passage: {
    title: 'Extract: The UK Soft Drinks Industry Levy and the architecture of choice',
    source: 'Adapted from: HM Treasury (2016–2018); PHE Sugar Reduction Programme; Thaler & Sunstein (2008)',
    text: 'When the UK introduced the Soft Drinks Industry Levy (SDIL) in 2018, manufacturers faced a choice: pay the tax on high-sugar drinks or reformulate to avoid it. Within two years, 50% of drinks previously subject to the levy had been reformulated – without any reduction in consumer choice. Meanwhile, NHS England\'s \'sugar smart\' defaults in hospital cafeterias – placing water at eye level and moving high-sugar drinks below the counter – reduced high-sugar drink sales by 15% without any price change or compulsion. Economists at the IFS noted that UK households consistently underestimate the long-run health costs of high-sugar consumption: a phenomenon they attribute to present bias and optimism bias. Unlike a Pigouvian tax, which assumes consumers respond rationally to price signals, the SDIL operates partly through the supply side – changing what manufacturers produce rather than leaving correction entirely to consumer demand.'
  },

  questions: [
    {
      id: 'be-extract-q1',
      question: 'The extract states that UK households "consistently underestimate the long-run health costs of high-sugar consumption." Which behavioural economics concepts explain this?',
      options: [
        'Herd behaviour – households copy each other\'s consumption patterns, creating a cascade of underestimation',
        'Present bias and optimism bias – people overweight immediate pleasure relative to future health costs, and irrationally believe bad health outcomes will not happen to them',
        'The sunk cost fallacy – consumers continue high-sugar consumption because they have already paid for previous purchases',
        'Loss aversion – consumers fear giving up sugary drinks more than they value the health gain'
      ],
      correct: 1,
      explanation: 'Present bias means consumers give excessive weight to immediate pleasure (the taste of a sugary drink now) relative to future costs (long-run health damage). Optimism bias means they systematically underestimate the probability that bad health outcomes will affect them personally. Both biases lead to choices that diverge from the individual\'s own long-run interest – a core behavioural economics critique of the standard rational agent model. This is why the IFS economists attribute the underestimation to behavioural bias, not ignorance of health information.'
    },
    {
      id: 'be-extract-q2',
      question: 'The NHS\'s "sugar smart" defaults – placing water at eye level and high-sugar drinks below the counter – are an example of which policy approach?',
      options: [
        'A Pigouvian tax – the NHS is pricing the health externality of high-sugar drinks into the choice',
        'A regulation – the NHS is banning high-sugar drinks from its cafeterias to protect consumer welfare',
        'A nudge – the choice architecture is altered to make the healthier option the default, without removing choice or adding a financial incentive',
        'An information provision policy – consumers are given additional health data to help them make more rational choices'
      ],
      correct: 2,
      explanation: 'A nudge (Thaler & Sunstein, 2008) alters the architecture of choice to make a desired behaviour the default, without restricting options or using price incentives. Placing water at eye level exploits status quo bias and salience – people tend to choose what they see first and what is most accessible. The consumer can still buy a high-sugar drink (it\'s below the counter), but the default has been shifted. The 15% reduction in sales shows the nudge worked – through architecture, not prices or prohibition.'
    },
    {
      id: 'be-extract-q3',
      question: 'The extract contrasts the SDIL with a "Pigouvian tax, which assumes consumers respond rationally to price signals." What does this contrast reveal about the SDIL\'s underlying logic?',
      options: [
        'The SDIL treats sugar as a public good that the free market under-provides',
        'The SDIL is based on the assumption that consumers are perfectly rational and respond to price signals exactly as standard theory predicts',
        'The SDIL operates partly through behavioural channels: by incentivising manufacturers to reformulate (supply-side nudge), it reduces sugar intake without relying on consumers to overcome their own present bias',
        'The SDIL is primarily designed to raise government revenue, with health improvement as an unintended side effect'
      ],
      correct: 2,
      explanation: 'The SDIL\'s genius (and its departure from standard Pigouvian logic) is that it targets the supply side rather than demanding that consumers overcome their present bias through price signals. By making the levy apply at the manufacturer level, the government gave producers a strong financial incentive to reformulate – so 50% of affected drinks were changed. The consumer never had to make the "rational choice"; the product itself changed. This is a practical acknowledgement that behavioural biases are hard to overcome with prices alone, and that supply-side intervention can bypass the behavioural problem entirely.'
    }
  ]
};
