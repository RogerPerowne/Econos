/* ============================================================
   ECONOS – Link It · It Depends On station data
   Information Gaps: evaluate a mandatory disclosure claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Information Gaps',
  backUrl:     TopicLoader.routes.link('intro'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether mandatory APR disclosure actually corrects the information gap.',
  nextUrl:     TopicLoader.routes.link('judge'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.routes.link('context') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.routes.link('chain') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.routes.link('extract') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.routes.link('depends') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.routes.link('judge') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'bnpl-disclosure-effectiveness',
      claim: {
        icon:   '💳',
        prompt: 'Policy claim',
        text:   'Mandatory cost disclosure best corrects info gaps in UK BNPL.'
      },
      factors: [
        {
          id:    'salience',
          icon:  '👁️',
          label: 'Salience and prominence of the disclosure',
          why:   'Research shows that burying APR in terms and conditions has minimal impact on consumer behaviour. The disclosure must be prominent at the point of decision to shift demand back to D_rational. FCA rules requiring APR on the checkout page – not just in T&Cs – are more effective than generic financial product warnings that consumers ignore.'
        },
        {
          id:    'present-bias',
          icon:  '⏱️',
          label: 'Present bias and consumer behavioural barriers',
          why:   'Consumers with present bias discount future repayment costs – even when disclosed. Seeing "APR: 43.7%" means little to a consumer focused on paying £0 today. Disclosure corrects information gaps but does not correct cognitive biases. A more effective intervention may be to require providers to display the total cost in £ terms (e.g. "this will cost you £X more than paying now") to make the future cost concrete.'
        },
        {
          id:    'financial-literacy',
          icon:  '📚',
          label: 'Consumer financial literacy',
          why:   'APR is a technically complex concept: many consumers cannot convert APR into monthly cost or compare it with alternatives. If financial literacy is low, disclosure of APR may not change behaviour – consumers still choose the cheapest-seeming option. Financial education or simplified disclosure formats (total cost in £) may be needed alongside APR disclosure.'
        },
        {
          id:    'competitive-market',
          icon:  '🏪',
          label: 'Degree of competition among BNPL providers',
          why:   'If multiple BNPL providers compete, APR disclosure enables price comparison – driving providers to reduce hidden costs or improve transparency voluntarily. In a competitive market, disclosure is more effective because consumers can credibly switch to lower-cost alternatives. If one provider dominates (market power), disclosure reduces harm but does not restore competition.'
        },
        {
          id:    'alternative-policies',
          icon:  '⚖️',
          label: 'Effectiveness of alternative corrective policies',
          why:   'Mandatory disclosure is one of three approaches: (1) disclosure (FCA 2024 BNPL regulation), (2) interest rate caps (preventing the market failure at source), and (3) affordability checks (requiring lenders to verify ability to repay). Rate caps reduce harm but may restrict credit supply to creditworthy borrowers. Affordability checks are more targeted but add friction to low-value BNPL transactions.'
        },
        {
          id:    'enforcement',
          icon:  '🚔',
          label: 'FCA enforcement capacity and penalties',
          why:   'Disclosure requirements only deter non-compliance if enforcement is credible. FCA enforcement actions against BNPL providers have been rare – in part because the market was unregulated until 2024. Without credible penalties, providers may minimise disclosure without fully complying. Enforcement capacity directly determines whether D shifts back toward D_rational.'
        },
        {
          id:    'product-design',
          icon:  '🎨',
          label: 'BNPL product design and checkout flow',
          why:   'Dark patterns in checkout design (pre-checked BNPL boxes, small APR text, emphasis on "pay nothing today") actively suppress the salience of cost information. Even with mandatory disclosure, design that buries APR can render the requirement ineffective. Regulators may need to mandate specific design standards – not just content – to prevent circumvention of disclosure intent.'
        },
        {
          id:    'substitute-credit',
          icon:  '💰',
          label: 'Availability of lower-cost credit alternatives',
          why:   'Disclosure is more effective when consumers have credible lower-cost alternatives (credit unions, 0% credit cards, deferred salary). If BNPL is the only accessible credit for a consumer, disclosure of high APR may not change behaviour – because alternatives are inaccessible. Financial inclusion policy (credit union expansion) complements disclosure by making low-cost alternatives available.'
        }
      ],
      modelRanking: ['salience', 'present-bias', 'financial-literacy'],
      judgement: '"Mandatory APR disclosure corrects the information gap only if consumers can process and act on the information. The primary conditions are: salience (APR must appear prominently at checkout, not in T&Cs), financial literacy (consumers must understand what APR means in £ cost terms), and the availability of credible alternatives (so consumers can switch away from high-cost BNPL). Where these conditions hold, disclosure shifts D left toward D_rational; where present bias is strong and alternatives are scarce, more interventionist policies (interest caps, affordability checks) are needed."'
    }
  ]
};
