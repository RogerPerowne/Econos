/* ============================================================
   ECONOS – Link It · Read the Extract station data
   Information Gaps: adverse selection and moral hazard
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Information Gaps',
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
  instruction: 'Read the passage carefully. Use asymmetric information concepts to interpret each question – distinguish between adverse selection (before the transaction) and moral hazard (after it).',

  passage: {
    title: 'Extract: Information failure in UK insurance and used car markets',
    source: 'Adapted from: Akerlof (1970); ABI UK Insurance Market Statistics (2022); Financial Conduct Authority Consumer Research',
    text: 'George Akerlof\'s 1970 paper "The Market for Lemons" showed that asymmetric information – where sellers know more about product quality than buyers – can cause markets to collapse. In the used car market, buyers cannot distinguish good cars from "lemons" (defective cars), so they offer only an average price. Sellers of good-quality cars find the average price too low and withdraw from the market. What remains is a pool of progressively worse cars – a classic adverse selection spiral.<br><br>A parallel problem affects UK private health insurance. Insurance companies cannot perfectly observe a buyer\'s health risk: applicants know far more about their own lifestyle and health history. Consequently, the sickest people are most willing to pay high premiums, skewing the insured pool toward high-risk individuals. The FCA estimates that 12% of UK motor insurance policies are sold to drivers who have provided inaccurate information – not all deliberately, but the effect is the same: the insured pool is riskier than the premium assumes.<br><br>Once insured, a second information problem emerges: moral hazard. An insured driver may drive less carefully than before, knowing the insurer bears the cost. A landlord with buildings insurance may delay maintenance, since the insurance covers fire or flood damage. The insurer cannot observe these post-contract behaviour changes.'
  },

  questions: [
    {
      id: 'ig-extract-q1',
      question: 'Akerlof\'s "Market for Lemons" describes which type of information failure, and what is the mechanism by which the market deteriorates?',
      options: [
        'Moral hazard – buyers of used cars take more risks after purchase because the cost of breakdown falls on the seller',
        'Adverse selection – asymmetric information causes buyers to offer only average prices, which drives high-quality sellers out of the market, leaving a pool of progressively worse cars',
        'Regulatory failure – the government has not required sellers to disclose vehicle quality, so the market produces the wrong mix of goods',
        'A negative externality – the seller\'s poor car imposes costs on other road users who are not party to the transaction'
      ],
      correct: 1,
      explanation: 'This is adverse selection: asymmetric information (sellers know quality, buyers don\'t) leads to market deterioration before the transaction occurs. Buyers rationally offer an average price reflecting the mix of good and bad cars. Good-car sellers find this unacceptable and exit. Now the pool is worse, the average price falls further, more good sellers exit – the market "unravels" toward only lemons. This is why Akerlof described information asymmetry as causing markets to fail, not just individual transactions.'
    },
    {
      id: 'ig-extract-q2',
      question: 'The FCA finding that "12% of motor insurance policies are sold to drivers who provided inaccurate information" – whether deliberately or not – describes what economic consequence?',
      options: [
        'The free rider problem – some drivers use roads without contributing to the costs their driving imposes',
        'A positive externality – careful drivers generate benefits for other road users that the insurance company does not capture',
        'Adverse selection – the insured pool is riskier than the average driver, because risky drivers have stronger incentives to insure, making premiums rise for all policyholders',
        'Moral hazard – insured drivers change their driving behaviour after taking out a policy'
      ],
      correct: 2,
      explanation: 'This is adverse selection in insurance: the people most likely to claim (high-risk drivers) are the most motivated to insure (and to shade the truth to get a lower premium), while low-risk drivers either don\'t bother or are priced out. The insured pool therefore contains a disproportionately high share of risky drivers relative to the general population. Insurers respond by raising premiums to reflect the actual (riskier) pool – which prices out more low-risk drivers and worsens the spiral. The 12% inaccuracy rate is the mechanism driving this selection effect.'
    },
    {
      id: 'ig-extract-q3',
      question: 'The extract describes two distinct information problems. Which correctly distinguishes adverse selection from moral hazard?',
      options: [
        'Adverse selection occurs after a contract is signed; moral hazard occurs before – when one party misrepresents information during the application',
        'Both adverse selection and moral hazard are forms of deliberate fraud – they differ only in whether the deception is financial or behavioural',
        'Adverse selection is a pre-contract problem (the wrong people enter the market because of hidden characteristics); moral hazard is a post-contract problem (behaviour changes because one party no longer bears the full cost of their actions)',
        'Adverse selection affects product markets like used cars; moral hazard only affects financial markets like insurance'
      ],
      correct: 2,
      explanation: 'The key distinction is timing relative to the contract. Adverse selection arises before the contract: asymmetric information about hidden characteristics (the car\'s quality, the driver\'s health risk) means the wrong people/products end up in the market. Moral hazard arises after the contract: once insured, an individual has reduced incentive to avoid the risk (the insurer now bears the cost). Both are information failures – the insurer cannot observe either the pre-existing characteristic or the post-contract behaviour change – but they require different policy solutions (screening/signalling for adverse selection; monitoring/co-payments for moral hazard).'
    }
  ]
};
