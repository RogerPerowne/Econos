/* ============================================================
   ECONOS — Link It · It Depends On station data
   Negative Externalities: evaluate a Pigouvian tax claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Negative Externalities',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether a Pigouvian tax actually achieves its stated objective.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 4,

  scenarios: [
    {
      id: 'pigouvian-tax-effectiveness',
      claim: {
        icon:   '💸',
        prompt: 'Policy claim',
        text:   'A Pigouvian tax is the most effective policy to correct negative externalities from industrial pollution.'
      },
      factors: [
        {
          id:    'mec-accuracy',
          icon:  '🔍',
          label: 'Accuracy of the MEC estimate',
          why:   'The tax must equal the MEC at Q* to achieve the social optimum. In practice, measuring MEC requires valuing non-market goods — health damage, biodiversity loss, climate impacts — with significant uncertainty. A tax set too low leaves overproduction continuing; too high, it suppresses output below Q* unnecessarily.'
        },
        {
          id:    'ped',
          icon:  '📉',
          label: 'Price elasticity of demand',
          why:   'If demand is price inelastic (as with industrial steel, PED ≈ −0.15), a tax raises price substantially but reduces output and pollution only a little. The overproduction is barely corrected, and the tax is mostly passed to buyers as higher prices. The policy works best where demand is more elastic.'
        },
        {
          id:    'leakage',
          icon:  '🌍',
          label: 'Risk of carbon / pollution leakage',
          why:   'If polluting firms can relocate to countries with laxer standards, domestic output and pollution fall but global emissions may not. The externality is geographically displaced rather than corrected. The tax\'s effectiveness depends critically on whether international coordination or border carbon adjustment prevents this leakage.'
        },
        {
          id:    'political',
          icon:  '🗣️',
          label: 'Political feasibility and regulatory capture',
          why:   'Governments often set Pigouvian taxes below the true MEC to avoid political unpopularity. Powerful industry lobbying can weaken the tax before or after implementation, leaving a rate too low to correct the externality. The theoretical optimum and the politically deliverable rate may diverge significantly.'
        },
        {
          id:    'certainty',
          icon:  '🎯',
          label: 'Certainty of the environmental outcome',
          why:   'A tax sets a price on pollution but not a quantity ceiling — firms can always pollute more by paying more tax. Regulation (emission standards, bans) sets a hard limit directly. Where the environmental outcome must be guaranteed, regulation produces greater certainty than a tax.'
        },
        {
          id:    'monitoring',
          icon:  '📡',
          label: 'Ease of monitoring and enforcement',
          why:   'A Pigouvian tax requires accurate measurement of each firm\'s pollution output. For diffuse externalities — agricultural runoff, noise, particulate drift — monitoring may be technically difficult or costly. Where pollution cannot be reliably measured, a tax is impractical relative to blanket emission standards.'
        },
        {
          id:    'irreversibility',
          icon:  '⚠️',
          label: 'Irreversibility or severity of the harm',
          why:   'A tax allows firms to continue causing harm as long as they pay. Where external damage is catastrophic (toxic soil contamination, species extinction), allowing continued harm in exchange for revenue may be unacceptable. Command-and-control bans may be the only appropriate instrument.'
        },
        {
          id:    'revenue-use',
          icon:  '♻️',
          label: 'How the tax revenue is used',
          why:   'If Pigouvian tax revenue is recycled into green investment, compensation for affected third parties or lower taxes elsewhere, the net welfare gain is amplified — the "double dividend". If revenue disappears into general spending unrelated to the externality, the efficiency argument for the tax weakens.'
        }
      ],
      modelRanking: ['mec-accuracy', 'ped', 'leakage'],
      judgement: '"Whether a Pigouvian tax is the \'most effective\' policy depends primarily on whether the MEC can be accurately measured — a miscalibrated tax will under- or over-correct the externality. Where demand is price inelastic, the tax raises consumer prices substantially while doing little to reduce overproduction. And where production can relocate to unregulated economies, the tax corrects the domestic market failure without reducing global externalities."'
    }
  ]
};
