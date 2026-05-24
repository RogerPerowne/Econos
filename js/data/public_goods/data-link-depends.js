/* ============================================================
   ECONOS — Link It · It Depends On station data
   Public Goods: evaluate the state provision claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Public Goods',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether state taxation provision is truly the only effective solution.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 4,

  scenarios: [
    {
      id: 'public-goods-provision',
      claim: {
        icon:   '🌊',
        prompt: 'Policy claim',
        text:   'State provision financed by general taxation is the only effective solution to the under-provision of public goods.'
      },
      factors: [
        {
          id:    'degree-non-excludable',
          icon:  '🚧',
          label: 'Degree of non-excludability',
          why:   'Pure public goods (defence, lighthouse) are completely non-excludable — no private revenue stream is possible. But some quasi-public goods (roads, parks) are partially excludable through technology (toll booths, entrance fees). For quasi-public goods, a mix of user charges and state subsidy may be more efficient than full taxation-funded provision — market mechanisms partially apply.'
        },
        {
          id:    'local-vs-national',
          icon:  '📍',
          label: 'Whether the public good is local or national',
          why:   'National public goods (defence, coastguard) cannot be provided at community level — they require national taxation. Local public goods (street lighting, local flood defence, park maintenance) can sometimes be funded by local levies or community contributions, especially in small, homogeneous communities with shared interests. Provision level and funding source must match the scale of the public good.'
        },
        {
          id:    'cost-benefit',
          icon:  '💰',
          label: 'Accuracy of cost-benefit analysis for provision level',
          why:   'Government must decide Q* — the socially optimal provision level — without market price signals. This requires cost-benefit analysis (CBA), which involves valuing non-market benefits (flood damage avoided, lives saved). If CBA is inaccurate (either over- or understating benefits), the government provides the wrong Q — an example of government information failure compounding the market failure.'
        },
        {
          id:    'government-failure',
          icon:  '⚠️',
          label: 'Risk of government failure in provision decisions',
          why:   'State provision is not guaranteed to achieve Q*. Political pressures may lead to overproduction of visible public goods (flood defences near marginal constituencies) and underproduction of less visible ones. Regulatory capture (building contractors influencing contract awards) can inflate costs. These government failure risks mean taxation-funded provision is efficient in principle but may be inefficient in practice.'
        },
        {
          id:    'crowding-out',
          icon:  '🏢',
          label: 'Crowding out of private sector alternatives',
          why:   'State provision financed by taxation may crowd out private or community-based alternatives that existed before. If local communities fund modest flood barriers voluntarily but are then told the state will provide, voluntary contribution collapses. A mixed model (state co-funding with community contribution) may maintain both incentives and civic engagement.'
        },
        {
          id:    'technology',
          icon:  '💻',
          label: 'Technology enabling partial excludability',
          why:   'New technology can convert non-excludable goods into quasi-public goods. GPS-enabled road pricing makes roads excludable. Smart metering makes park access recordable. Where technology enables excludability, market provision becomes more feasible — reducing the case for full state taxation funding. The public goods boundary is partly a technological question.'
        },
        {
          id:    'international',
          icon:  '🌍',
          label: 'Cross-border public goods requiring international coordination',
          why:   'Some public goods have spillover effects across national boundaries (clean air, global climate, international security). No single national government can compel contribution from foreign free riders. International public goods require treaty-based coordination (Paris Agreement, NATO) — pure state provision at national level solves the domestic free rider problem but not the international one.'
        },
        {
          id:    'merit',
          icon:  '🎓',
          label: 'Distinction between public goods and merit goods',
          why:   'Pure public goods (flood defences) require taxation because of non-excludability. Merit goods (healthcare, education) may be provided publicly for different reasons (equity, positive externalities) but are technically excludable. Conflating the two leads to incorrect policy analysis — the public goods case for state provision is stronger and more absolute than the merit goods case.'
        }
      ],
      modelRanking: ['degree-non-excludable', 'cost-benefit', 'government-failure'],
      judgement: '"State taxation provision is effective when the good is truly non-excludable (no revenue stream possible for private firms) and when the government can accurately estimate Q* through cost-benefit analysis. The case weakens when the good is quasi-public (partial excludability), when government failure in provision is likely (CBA inaccuracy, political distortion), or when community-level provision is feasible for local public goods. The public goods case for state provision is strongest for national goods like coastal flood defence where no private mechanism can compel contribution."'
    }
  ]
};
