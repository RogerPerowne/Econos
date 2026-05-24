/* ============================================================
   ECONOS — Link It · It Depends On station data
   Government Intervention in Markets: evaluate a binding rent cap
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Government Intervention in Markets',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a binding rent cap actually improves welfare for tenants.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'rent-cap-effectiveness',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'A binding rent cap best protects low-income tenants in tight cities.'
      },
      factors: [
        {
          id:    'pes',
          icon:  '🏗️',
          label: 'Long-run price elasticity of supply (PES) of housing',
          why:   'In the short run, the rental stock is largely fixed (PES is low) and a cap mainly transfers surplus from landlords to sitting tenants. In the long run, supply is much more elastic — landlords sell flats to owner-occupiers, convert to short-term lets, or stop building new rentals altogether. Berlin\'s 2020 cap saw new listings fall by around 50% within a year. The higher long-run PES is, the larger the eventual shortage and the more new tenants are locked out.'
        },
        {
          id:    'time-horizon',
          icon:  '⏳',
          label: 'Time horizon used to judge the policy',
          why:   'Almost every empirical study of rent control finds short-run gains for sitting tenants and long-run losses for the wider rental market — including new entrants, mobile workers and households trying to move within the city. If the policy is judged over one or two years it can look like a clear success; judged over a decade it tends to shrink the rental stock and lower quality. Which horizon you privilege largely determines your verdict.'
        },
        {
          id:    'rationing',
          icon:  '🎟️',
          label: 'How the shortage is rationed in practice',
          why:   'With a binding cap, Q_d > Q_s and something other than price must allocate the limited supply. If allocation is by waiting list or key money, capped flats can drift to better-connected or higher-income tenants — the LSE evidence in the extract. The policy then fails on its own distributional terms: it protects existing tenants but does not reliably reach the lowest-income renters it was designed for. Means-tested housing benefit or direct provision can plausibly target need more accurately.'
        },
        {
          id:    'quality',
          icon:  '🔧',
          label: 'Landlord response on quality and maintenance',
          why:   'When sellers cannot raise the headline price, they restore margins by cutting quality. San Francisco evidence cited in the extract shows roughly an 8% fall in maintenance spending per flat after rent stabilisation was tightened. The contractual rent is lower, but the real product is also worse — undermining the welfare gain the cap is supposed to deliver and pushing some tenants into substandard housing.'
        },
        {
          id:    'alternatives',
          icon:  '💷',
          label: 'Availability of better-targeted alternatives',
          why:   'A rent cap is only "most effective" if it dominates the realistic alternatives. Housing benefit or universal credit can transfer income to low-income tenants without suppressing supply; building more social housing tackles the underlying shortage directly; land-use reform raises long-run supply elasticity by allowing more building. If any of these reach low-income tenants more reliably and with less DWL, the cap loses its claim to being the most effective tool.'
        },
        {
          id:    'enforcement',
          icon:  '👮',
          label: 'Enforcement against black markets and side payments',
          why:   'A cap only protects tenants if the legal price is the price actually paid. In practice, severe shortages create black-market premia, illegal sub-letting and key-money payments that erode the cap\'s benefit — and weak enforcement makes things worse, as landlords charge above the cap to those willing or able to pay. The effectiveness of the policy therefore depends heavily on the regulator\'s capacity to monitor and enforce.'
        },
        {
          id:    'coverage',
          icon:  '🗺️',
          label: 'Coverage of the cap (which flats, which areas)',
          why:   'A cap that exempts new-build flats (as Berlin\'s did initially) protects existing tenants without choking off new construction; a blanket cap dampens building. Similarly, a city-wide cap can push landlord activity to neighbouring uncapped areas, raising rents there. The narrower and better-targeted the coverage, the lower the supply distortion — but also the smaller the scope of tenant protection.'
        },
        {
          id:    'demand-driver',
          icon:  '📈',
          label: 'What is actually driving the rent rise',
          why:   'If rents are rising because demand is genuinely outpacing a fixed supply (population growth, new jobs, tight planning), the underlying problem is a shortage of housing — a cap mainly disguises this and may worsen it. If rents are rising because a small number of landlords have local market power, a cap can offset the monopoly distortion and raise welfare. Diagnosing the cause of the price rise is therefore essential before judging whether a cap is the right tool.'
        }
      ],
      modelRanking: ['pes', 'rationing', 'alternatives'],
      judgement: '"Whether a binding rent cap is the \'most effective\' way to protect low-income tenants depends primarily on the long-run price elasticity of supply of housing — where PES is high (as the Berlin evidence suggests), the cap shrinks the rental stock and pushes the shortage onto new entrants. Effectiveness then depends on how the resulting shortage is rationed: if non-price rationing channels capped flats to well-connected rather than low-income tenants, the policy fails on its own distributional terms. And the cap only dominates the alternatives if better-targeted instruments — housing benefit, social housing, planning reform — would do worse than the supply distortion the cap creates."'
    }
  ]
};
