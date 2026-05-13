/* ============================================================
   ECONOS — Link It · It Depends On station data
   Inflation: evaluative judgement — pick & rank key factors
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:        'Causes of Inflation & Deflation',
  sessionLabel: 'Session 2 of 3: Link',
  backUrl:      'link_inflation_intro.html',
  eyebrow:      'It Depends On',
  instruction:  'Pick the three factors that most change the answer to this claim. Explain why each one matters, then check against the ideal evaluation.',
  nextUrl:      'link_inflation_intro.html',

  stations: [
    { id: 'context', label: 'Use the context',   href: 'link_inflation_context.html' },
    { id: 'chain',   label: 'Build the chain',   href: 'link_inflation_chain.html'   },
    { id: 'diagram', label: 'Diagram connector', href: 'link_inflation_diagram.html' },
    { id: 'depends', label: 'It depends on',     href: 'link_inflation_depends.html' },
    { id: 'judge',   label: 'Make the judgement' }
  ],
  currentStationIdx: 3,

  scenarios: [
    /* ── 1. Interest rates & inflation ── */
    {
      id: 'interest-rates-inflation',
      claim: {
        icon:   '🏦',
        prompt: 'Policy claim',
        text:   'Higher interest rates are the best way to reduce inflation.'
      },
      factors: [
        {
          id:    'cause-of-inflation',
          icon:  '🔍',
          label: 'Cause of inflation',
          why:   'Interest rate rises work by suppressing demand, so they are most effective against demand-pull inflation. If inflation is cost-push — driven by supply shocks — raising rates may deepen the recession without reducing the price level.'
        },
        {
          id:    'transmission-strength',
          icon:  '⚙️',
          label: 'Strength of the transmission mechanism',
          why:   'Higher rates only reduce inflation if households and firms actually cut spending in response. If borrowers are on fixed-rate mortgages or if corporate debt is long-term, the transmission from rate rises to lower AD is weak and slow.'
        },
        {
          id:    'household-debt',
          icon:  '💳',
          label: 'Household debt levels',
          why:   'Highly indebted households on variable-rate mortgages feel rate rises immediately in their disposable income, amplifying the demand effect. Low household debt reduces this channel, limiting the policy\'s bite.'
        },
        {
          id:    'inflation-expectations',
          icon:  '🔮',
          label: 'Inflation expectations',
          why:   'If expectations are de-anchored — workers and firms already pricing in persistent inflation — monetary policy must work much harder to restore credibility, often requiring deeper rate rises that risk a sharper recession.'
        },
        {
          id:    'time-lag',
          icon:  '⏱️',
          label: 'Time lag of monetary policy',
          why:   'The Bank of England estimates interest rate changes take 18–24 months to have their full effect on inflation. A temporary supply shock may have already reversed before the rate rise even takes effect, causing unnecessary economic damage.'
        },
        {
          id:    'global-supply-shocks',
          icon:  '🌍',
          label: 'Global supply shocks',
          why:   'Domestic monetary policy cannot address the root cause of globally driven cost-push inflation, such as energy price spikes or commodity shortages. Rate rises impose a domestic demand squeeze on a supply-side problem.'
        }
      ],
      modelRanking: ['cause-of-inflation', 'transmission-strength', 'inflation-expectations'],
      judgement: '"Whether higher interest rates are the \'best\' tool depends primarily on the cause of inflation: if inflation is demand-pull and inflation expectations remain anchored, rate rises can reduce AD effectively — but where inflation is cost-push or supply-driven, monetary tightening imposes output costs without addressing the underlying pressure."'
    },

    /* ── 2. Cost-push inflation & Bank of England ── */
    {
      id: 'cost-push-boe',
      claim: {
        icon:   '⚡',
        prompt: 'Policy claim',
        text:   'Cost-push inflation cannot be effectively controlled by the Bank of England.'
      },
      factors: [
        {
          id:    'source-of-shock',
          icon:  '🌐',
          label: 'Source of the supply shock',
          why:   'Externally driven cost-push inflation — from global energy prices, commodity markets, or geopolitical disruption — is largely outside the Bank\'s control. Domestically driven cost pressures (e.g. a wage-price spiral) are more amenable to monetary policy intervention.'
        },
        {
          id:    'wage-price-spiral',
          icon:  '🌀',
          label: 'Wage-price spiral risk',
          why:   'Even if the Bank cannot remove the original supply shock, it can prevent secondary effects: if workers demand compensating wage rises, raising rates can dampen demand enough to limit employers\' ability to grant them, breaking the spiral.'
        },
        {
          id:    'central-bank-credibility',
          icon:  '🏛️',
          label: 'Central bank credibility',
          why:   'A credible Bank of England with a strong track record of hitting the 2% target can use forward guidance to keep long-run inflation expectations anchored, reducing the inflationary impact of a supply shock even without directly removing it.'
        },
        {
          id:    'duration-of-shock',
          icon:  '📅',
          label: 'Duration of the supply shock',
          why:   'A temporary shock (e.g. a single bad harvest) may not require any monetary response, as inflation will self-correct. A persistent or structural supply disruption is harder to "look through" and may require intervention to prevent expectations de-anchoring.'
        },
        {
          id:    'exchange-rate-channel',
          icon:  '💱',
          label: 'Exchange rate channel',
          why:   'Higher interest rates attract capital inflows, strengthening sterling. A stronger pound directly reduces the sterling cost of imported energy and commodities — giving the Bank an indirect but meaningful lever over import-driven cost-push inflation.'
        },
        {
          id:    'fiscal-policy-coordination',
          icon:  '🏛️',
          label: 'Fiscal policy coordination',
          why:   'Government intervention — such as energy price subsidies or windfall taxes on energy firms — can directly offset supply-side cost increases in a way monetary policy cannot. If fiscal support is active, the Bank\'s task is correspondingly easier.'
        }
      ],
      modelRanking: ['source-of-shock', 'wage-price-spiral', 'exchange-rate-channel'],
      judgement: '"The effectiveness of the Bank of England against cost-push inflation depends critically on the source of the shock: while it cannot remove an external supply disruption, it can deploy the exchange rate channel to reduce import costs and tighten policy to prevent a wage-price spiral from embedding the shock as persistent inflation."'
    },

    /* ── 3. Cutting government spending & demand-pull inflation ── */
    {
      id: 'fiscal-cuts-demand-pull',
      claim: {
        icon:   '✂️',
        prompt: 'Policy claim',
        text:   'Cutting government spending is the most effective way to reduce demand-pull inflation.'
      },
      factors: [
        {
          id:    'fiscal-multiplier',
          icon:  '✖️',
          label: 'Size of the fiscal multiplier',
          why:   'The impact of spending cuts on AD depends on the multiplier. In an open economy with high imports, the multiplier is relatively small, meaning large cuts may be needed for a modest deflationary effect — risking significant output loss for limited price reduction.'
        },
        {
          id:    'composition-of-cuts',
          icon:  '📋',
          label: 'Composition of cuts',
          why:   'Cuts to public investment (e.g. infrastructure) can reduce LRAS as well as AD, making supply-side inflation worse in the long run. Cuts to transfer payments or current spending have a more direct disinflationary demand effect with fewer supply-side consequences.'
        },
        {
          id:    'monetary-policy-alternative',
          icon:  '🏦',
          label: 'Availability of monetary policy',
          why:   'In most cases the Bank of England is the primary instrument for managing demand-pull inflation through interest rates. Fiscal contraction is a slower, politically constrained tool — using it as the lead instrument suggests monetary policy is unavailable or has already been exhausted.'
        },
        {
          id:    'output-gap-size',
          icon:  '📊',
          label: 'Size of the positive output gap',
          why:   'Spending cuts are most effective when there is a large positive output gap — demand significantly exceeds productive capacity. If the economy is only slightly above trend, the deflationary impact of spending cuts may overshoot, causing unemployment.'
        },
        {
          id:    'political-feasibility',
          icon:  '🗳️',
          label: 'Political feasibility',
          why:   'Significant spending cuts require political capital and parliamentary support. Electoral cycles and distributional concerns can delay or dilute cuts, reducing their potency as an anti-inflationary tool precisely when speed is most important.'
        },
        {
          id:    'confidence-effects',
          icon:  '😟',
          label: 'Confidence and expectations effects',
          why:   'Sharp spending cuts can reduce consumer and business confidence, contracting private sector demand more than intended. This may amplify the disinflationary effect but also risk tipping the economy into deflation or recession beyond the target adjustment.'
        }
      ],
      modelRanking: ['monetary-policy-alternative', 'fiscal-multiplier', 'composition-of-cuts'],
      judgement: '"Cutting government spending can reduce demand-pull inflation, but its effectiveness depends first on whether monetary policy — a faster and more precisely calibrated tool — has already been deployed; if it has, the additional impact rests on the fiscal multiplier, which in an open economy may be too small to justify the output and employment costs of significant cuts."'
    }
  ]
};
