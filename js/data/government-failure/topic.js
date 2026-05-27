window.ECONOS_TOPIC = {
  id: 'government-failure',
  topicNum: '4.2',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Government Failure',
  estTime: '9-11 minutes',
  goal: 'Lock in the causes and types of government failure – and why intervention intended to correct market failure can sometimes make things worse.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Government intervention is justified by market failure – but intervention is not costless. Government failure occurs when intervention produces a worse outcome than the market would have, due to information problems, political incentives, unintended consequences, or regulatory capture.',
    doInThis: 'Work through 7 cards covering the definition of government failure, its root causes, regulatory capture, the law of unintended consequences, how to compare market and government failure, real-world case studies, and how to reduce it.',
    outcomes: [
      'Define government failure and distinguish it from market failure',
      'Identify the main causes of government failure with examples',
      'Explain regulatory capture and the principal-agent problem in government',
      'Evaluate when market failure is worse than government failure – and vice versa'
    ],
    tip: 'Government failure occurs when the costs of intervention (including unintended consequences) exceed the costs of the market failure it was designed to correct. Intervention is not automatically better than the market.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ── Card 1: The Big Picture ─────────────────────────────────────── */
    {
      id: 'govt_failure_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Government failure: the big picture',
      tip: { icon: '🏛️', tone: 'blue', text: 'Government failure occurs when intervention creates a net welfare loss – either because it produces new inefficiencies, has large unintended consequences, or corrects market failure poorly. The cure can be worse than the disease.' },
      flowTitle: 'Five key areas covered in this topic',
      flowEmoji: '🗺️',
      flow: [
        { icon: '⚖️', tone: 'blue',   title: 'The core idea',              sub: 'Imperfect government vs imperfect market – both can fail. The relevant question is: which failure is less costly?' },
        { icon: '⚠️', tone: 'amber',  title: 'Causes of government failure', sub: 'Information problems, political short-termism, administrative inefficiency, and unintended consequences.' },
        { icon: '🔄', tone: 'rose',   title: 'Regulatory capture',          sub: 'Regulators end up serving the industry they regulate – weak enforcement, protected incumbents, consumer harm.' },
        { icon: '🐍', tone: 'purple', title: 'Unintended consequences',      sub: 'Interventions produce unexpected side-effects that can be as bad as – or worse than – the original market failure.' },
        { icon: '🏦', tone: 'green',  title: 'Reducing government failure',  sub: 'Independent regulators, sunset clauses, cost-benefit analysis, pilots, and transparency improve outcomes.' }
      ],
      tipLate: { icon: '🔑', tone: 'slate', text: 'The key principle: never compare a real market with a hypothetically perfect government. Compare the realistic costs of uncorrected market failure against the realistic costs of imperfect government intervention.' }
    },

    /* ── Card 2: Causes of Government Failure ────────────────────────── */
    {
      id: 'govt_failure_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'Causes of government failure',
      tip: { icon: '🔍', tone: 'amber', text: 'Government failure is not one thing. It arises from four distinct root causes, each of which can push intervention from welfare-improving to welfare-reducing.' },
      causesLabel: 'Four root causes',
      causesEmoji: '⚠️',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🧩', tone: 'blue', head: 'Information failure',
          body: 'Setting an optimal Pigouvian tax requires knowing the exact MEC – which is inherently uncertain. If the government overestimates the externality, the tax overshoots and creates a new deadweight loss on the left of the optimal point. <strong>Result:</strong> the correction is worse than the disease.'
        },
        {
          icon: '🗳️', tone: 'amber', head: 'Political short-termism',
          body: 'Elected politicians face 4–5 year cycles. Policies with costs now but benefits later – infrastructure, climate action, pension reform – are systematically under-prioritised. Policies with benefits now but costs later (fiscal spending) are over-used. The incentive is to time policy to the electoral cycle, not the economic optimum.'
        },
        {
          icon: '💸', tone: 'rose', head: 'Administrative costs and inefficiency',
          body: 'Government production lacks the profit motive and competitive pressure that drive productive efficiency. NHS procurement, public IT projects, and defence contracts routinely overrun on cost and time. These administrative costs are a deadweight burden that must be deducted from any welfare gain from intervention.'
        },
        {
          icon: '🔀', tone: 'purple', head: 'Unintended consequences',
          body: 'Complex systems react to interventions in unexpected ways. Biofuel mandates raised food prices. Rent controls created housing shortages. Right to Buy reduced social housing stock. The further an intervention is from the original externality, the higher the risk of cascading unintended effects.'
        }
      ],
      causes2Label: 'Why this matters for evaluation',
      causes2Emoji: '📝',
      causes2: [
        { icon: '📉', tone: 'rose',  head: 'Intervention can make things worse',    body: 'A welfare-improving intention does not guarantee a welfare-improving outcome. Always quantify the government failure risk.' },
        { icon: '⚖️', tone: 'amber', head: 'Costs must be weighed, not ignored',    body: 'Administrative costs, incentive distortions, and political biases are real costs. They must appear on the cost side of any CBA.' },
        { icon: '🏗️', tone: 'blue',  head: 'Institutional design matters',          body: 'Government failure is reduced by better institutions – independent bodies, transparency, clear mandates – not by avoiding all intervention.' }
      ],
      examEdge: 'Hayek\'s knowledge problem: no central authority can aggregate all the dispersed, local, tacit knowledge that millions of price signals process every second. This applies to government intervention just as it does to central planning – governments cannot set optimal quantities or prices without knowing what consumers and producers know individually. Cite Hayek in any government failure evaluation for a high-band analytical point.'
    },

    /* ── Card 3: Regulatory Capture ─────────────────────────────────── */
    {
      id: 'govt_failure_3',
      template: 'regulatory-capture-explorer',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Regulatory capture',
      tip: { icon: '🔄', tone: 'rose', text: 'Regulatory capture: a regulatory body set up to protect the public ends up serving the industry it regulates. The regulator is "captured" – it adopts the industry\'s perspective, weakens enforcement, and protects incumbent firms from competition.' },
      causesLabel: 'Real-world examples',
      causesEmoji: '📌',
      causes: [
        { icon: '⚡', tone: 'amber', head: 'UK energy – Ofgem', body: 'Energy regulator accused of being too close to the "Big Six" energy companies – slow to investigate overcharging, reluctant to force structural separation. Household bills remained high even as wholesale prices fell. Classic case of regulator protecting incumbents over consumers.' },
        { icon: '💰', tone: 'blue',  head: 'US finance – SEC and the 2008 crisis', body: 'The SEC and Federal Reserve adopted a "light-touch" approach to financial regulation in the 2000s, influenced by the finance industry\'s lobbying and the revolving door between Wall Street and Washington. Result: excessive leverage, mortgage mis-selling, and the 2008 financial crash. Taxpayer cost: $700bn TARP bailout.' },
        { icon: '💊', tone: 'purple', head: 'Pharmaceuticals – FDA and opioids', body: 'The US Food and Drug Administration approved OxyContin based on manufacturer-supplied evidence of low addiction risk. The drug was aggressively marketed. Result: the opioid crisis – 500,000+ US deaths from opioid overdose (1999–2019). The regulator failed to independently verify manufacturer claims.' }
      ],
      causes2Label: 'The two mechanisms',
      causes2Emoji: '⚙️',
      causes2: [
        { icon: '🚪', tone: 'rose',  head: 'Revolving door', body: 'Regulators are recruited from industry (bringing industry\'s perspective) and return to industry after their regulatory stint (creating incentive to be industry-friendly while in post). This is a structural conflict of interest built into regulatory design.' },
        { icon: '📊', tone: 'amber', head: 'Information asymmetry', body: 'Industry has far better information about its own costs, technology, and practices than the regulator. It can manipulate the data it provides, making independent oversight very difficult. The regulator becomes dependent on industry for information – and the information is strategically supplied.' }
      ],
      examEdge: 'The principal-agent problem in government: the public (principal) delegates power to the government (agent) which delegates power to the regulator (second agent). Each delegation creates agency slack – the agent may pursue their own interests rather than the principal\'s. Regulatory capture is the most extreme form of agency slack: the regulator has been captured by a third party. Pre-2008: the UK FSA was the principal (government) → regulator (agent) → banks (captured agent). Use the principal-agent framework to give structure to any regulatory capture argument.'
    },

    /* ── Card 4: Unintended Consequences ─────────────────────────────── */
    {
      id: 'govt_failure_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'The law of unintended consequences',
      tip: { icon: '🐍', tone: 'purple', text: 'Every intervention in a complex system changes the incentives of multiple actors simultaneously. Some of those changes produce outcomes the policy designer never intended – and sometimes these unintended consequences are larger than the intended ones.' },
      causesLabel: 'Four classic examples',
      causesEmoji: '⚡',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🏠', tone: 'blue', head: 'Rent controls',
          body: '<span style="font-size:10.5px;font-weight:800;color:#1E40AF;letter-spacing:0.04em;text-transform:uppercase;">Intended:</span> Make housing affordable for low-income tenants.<br><span style="font-size:10.5px;font-weight:800;color:#DC2626;letter-spacing:0.04em;text-transform:uppercase;">Unintended:</span> Landlords withdraw supply (lower return), tenants stay in properties too large or unsuitable (reduced mobility), housing quality falls (no investment incentive). Net result: worse housing outcomes for the people the policy was meant to help.'
        },
        {
          icon: '🐍', tone: 'amber', head: 'The cobra effect (colonial India)',
          body: '<span style="font-size:10.5px;font-weight:800;color:#92400E;letter-spacing:0.04em;text-transform:uppercase;">Intended:</span> Reduce cobra population – British government paid a bounty per dead cobra.<br><span style="font-size:10.5px;font-weight:800;color:#DC2626;letter-spacing:0.04em;text-transform:uppercase;">Unintended:</span> Indians bred cobras to collect the bounty. When the scheme was cancelled, breeders released their farmed snakes – cobra population ended up higher than before the policy.'
        },
        {
          icon: '🌽', tone: 'rose', head: 'US/EU biofuels mandate',
          body: '<span style="font-size:10.5px;font-weight:800;color:#9F1239;letter-spacing:0.04em;text-transform:uppercase;">Intended:</span> Reduce CO₂ emissions by mandating fuel ethanol from crops.<br><span style="font-size:10.5px;font-weight:800;color:#DC2626;letter-spacing:0.04em;text-transform:uppercase;">Unintended:</span> Increased demand for corn and rapeseed → food prices rose globally → food riots in developing countries (2007–08). The cure cost the world\'s poorest more than the climate benefit was worth.'
        },
        {
          icon: '🏚️', tone: 'purple', head: 'UK Right to Buy (1980)',
          body: '<span style="font-size:10.5px;font-weight:800;color:#5B21B6;letter-spacing:0.04em;text-transform:uppercase;">Intended:</span> Increase homeownership by giving council tenants discounted purchase rights.<br><span style="font-size:10.5px;font-weight:800;color:#DC2626;letter-spacing:0.04em;text-transform:uppercase;">Unintended:</span> Social housing stock fell from 6.5m (1979) to under 2m (2020). Councils lacked ring-fenced funds to replace sold stock. Waiting lists for social housing grew to 1.3m households by 2020.'
        }
      ],
      tipLate: { icon: '⚖️', tone: 'amber', text: 'Goodhart\'s Law: "When a measure becomes a target, it ceases to be a good measure." Agents game metrics rather than achieve the underlying goal. Apply to any government target: exam results, NHS waiting times, crime statistics, teacher assessments. The cobra effect is Goodhart\'s Law in 1898 India.' },
      examEdge: 'The general principle behind all unintended consequences: interventions change incentives, and agents respond to incentives – often not in the way the policymaker intended. For an exam question on rent controls or any price intervention, always include an analysis of unintended consequences (supply withdrawal, quality decline, black markets, informal sub-letting). This is what separates a Level 3 from a Level 4 answer.'
    },

    /* ── Card 5: Market Failure vs Government Failure ─────────────────── */
    {
      id: 'govt_failure_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Market failure vs government failure: making the call',
      tip: { icon: '⚖️', tone: 'blue', text: 'The central evaluation question: is the market failure large enough and clear enough to justify intervention despite government failure risks? There is no universal answer – it depends on the magnitude, certainty, and reversibility of each failure.' },
      comparison: {
        title: 'When does each failure dominate?',
        emoji: '⚖️',
        left:  { icon: '📉', tone: 'rose',  label: 'Strong case for intervention', caption: 'Market failure is large, well-evidenced, and irreversible. Government has good information and clear mandate. Externality is global (carbon). Public good: private provision is zero.' },
        right: { icon: '🏛️', tone: 'green', label: 'Weaker case for intervention', caption: 'Market failure is modest or uncertain. Government faces severe information problems. Political cycle distorts incentives. Regulatory capture risk is high. Private solutions exist.' }
      },
      keyPointsLabel: 'Three dimensions for the evaluation',
      keyPointsEmoji: '🔑',
      keyPoints: [
        { icon: '📏', tone: 'blue',   title: 'Magnitude',    headline: 'How large is each failure?', body: 'Climate change: market failure = catastrophic global risk. Government failure = imperfect carbon pricing. Market failure dominates → intervene. Local noise externality: small market failure, high regulation cost → don\'t intervene.' },
        { icon: '🎯', tone: 'amber',  title: 'Certainty',    headline: 'How well-evidenced is each?', body: 'Market failure is well-documented in academic literature. Government failure is often predictable from incentives. If the government cannot know the optimal policy level (MEC unknown), intervention risk is high.' },
        { icon: '↩️', tone: 'purple', title: 'Reversibility', headline: 'Can the harm be undone?',   body: 'Irreversible market failure (climate, species extinction) → stronger case for intervention despite government failure. Reversible market failure → wait-and-see or lighter-touch policy reduces government failure risk.' }
      ],
      flowBottomTitle: 'Four-step evaluation framework (25-mark essays)',
      flowBottomEmoji: '📝',
      flowBottom: [
        { icon: '📉', tone: 'rose',   title: 'Identify the market failure',   sub: 'Name it – negative externality, information asymmetry, public good, merit/demerit good. State the welfare loss.' },
        { icon: '🏛️', tone: 'blue',   title: 'Explain the intervention',      sub: 'State the mechanism – tax, subsidy, regulation, public provision. Show how it theoretically corrects the failure.' },
        { icon: '⚠️', tone: 'amber',  title: 'Evaluate government failure risk', sub: 'Information problems? Unintended consequences? Regulatory capture? Political short-termism? Be specific.' },
        { icon: '⚖️', tone: 'purple', title: 'Compare the two failures',       sub: 'Which is larger, more certain, less reversible? Apply this to the specific context to reach a clear conclusion.' }
      ]
    },

    /* ── Card 6: Government Failure in Practice ──────────────────────── */
    {
      id: 'govt_failure_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Government failure in practice',
      tip: { icon: '📌', tone: 'amber', text: 'Abstract causes become clearer through real cases. These four examples show how information problems, political incentives, and poor contract design each translate into documented welfare losses.' },
      causesLabel: 'Four case studies',
      causesEmoji: '🏗️',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🚄', tone: 'rose', head: 'HS2 – optimism bias and sunk-cost politics',
          body: '<strong>Failure type:</strong> information failure + political commitment trap.<br>Original 2010 cost estimate: £37.5bn. By 2023: £100bn+. Phase 2 (Birmingham–Manchester/Leeds) cancelled in 2023 with £25bn already spent. The project illustrates: (1) systematic optimism bias in infrastructure appraisal (Flyvbjerg\'s "megaproject paradox"); (2) the political difficulty of rational exit from committed projects (sunk cost fallacy applied to public spending).'
        },
        {
          icon: '🌾', tone: 'amber', head: 'EU Common Agricultural Policy – producer capture',
          body: '<strong>Failure type:</strong> regulatory capture + unintended consequences.<br>CAP guarantees prices above market levels for EU farmers. Cost: ~€55bn/year (30% of EU budget). Benefits: concentrated in large landowners. Consumers pay higher food prices. Developing-country farmers displaced by EU subsidised exports. A textbook case of producer capture of agricultural policy.'
        },
        {
          icon: '🏠', tone: 'blue', head: 'UK Help to Buy – demand stimulus without supply',
          body: '<strong>Failure type:</strong> unintended consequences + partial intervention.<br>Help to Buy equity loan scheme (2013–23) boosted demand for new homes by subsidising deposits. Since housing supply is highly inelastic (planning restrictions unchanged), the extra demand was largely absorbed into higher prices. Research: Help to Buy inflated new-build prices by c.6–8%. Developers captured most of the subsidy. The scheme was treating a symptom while ignoring the supply-side cause.'
        },
        {
          icon: '📄', tone: 'purple', head: 'PFI – information asymmetry and long-run costs',
          body: '<strong>Failure type:</strong> information failure + poor contract design.<br>Private Finance Initiative: government contracted private firms to build and operate public infrastructure, paying annual charges for 25–30 years. By 2018, PFI obligations totalled £200bn on assets worth £57bn. Firms had better information about long-run costs; government negotiators lacked the expertise to price contracts correctly. Many contracts had to be restructured or nationalised.'
        }
      ],
      causes2Label: 'Evaluation template',
      causes2Emoji: '📝',
      causes2: [
        { icon: '📊', tone: 'blue',  head: 'Compare costs vs benefits explicitly', body: 'State the size of the welfare gain from correcting market failure. Then state the documented cost of government failure (overrun, unintended effect, regulatory capture). Which is larger?' },
        { icon: '🔄', tone: 'amber', head: 'Consider changed circumstances',       body: 'Many interventions were correct in their original context. Government failure can occur when policy persists beyond its useful life – vested interests prevent rational adjustment. Ask: is the original market failure still present?' },
        { icon: '🌍', tone: 'rose',  head: 'Cross-country comparison',             body: 'If similar interventions produce worse outcomes in one country than another, the difference is likely institutional quality, not the principle of intervention. Use this to separate "government failure in principle" from "government failure in this context."' }
      ],
      lockIn: {
        title: 'Government failure ≠ markets always win',
        icon: '⚖️',
        items: [
          'Government failure is not an argument for zero intervention – it is an argument for better-designed intervention.',
          'Every documented government failure has a corresponding market failure that the intervention was trying to correct.',
          'The question is always comparative: is the market failure larger or smaller than the government failure?',
          'Strong institutions – independent regulators, transparent appraisal, sunset clauses – reduce government failure without eliminating intervention.'
        ]
      }
    },

    /* ── Card 7: Reducing Government Failure ────────────────────────── */
    {
      id: 'govt_failure_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Reducing government failure',
      tip: { icon: '🏦', tone: 'green', text: 'Government failure is not inevitable. Better institutional design reduces its probability and severity. The best way to improve outcomes is to change the incentive structure within which governments operate – not to avoid intervention altogether.' },
      causesLabel: 'Five institutional solutions',
      causesEmoji: '🏗️',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🏦', tone: 'blue', head: 'Independent regulatory agencies',
          body: 'Remove day-to-day decisions from electoral politics by delegating to bodies with clear statutory mandates. <strong>Examples:</strong> Bank of England (monetary policy), OBR (fiscal forecasting), CMA (competition), Ofsted (schools). Reduces short-termism and limits political capture. Works best when mandate is narrow, measurable, and transparent.'
        },
        {
          icon: '⏱️', tone: 'amber', head: 'Sunset clauses',
          body: 'Legislation or regulation with a built-in expiry date – forces reassessment at regular intervals. Prevents vested interests from making temporary measures permanent. Counteracts the natural tendency of bureaucracies to expand and regulations to accumulate. <strong>Example:</strong> US Regulatory Flexibility Act requires periodic review of regulations affecting small businesses.'
        },
        {
          icon: '📊', tone: 'green', head: 'Rigorous cost-benefit analysis',
          body: 'Mandate formal CBA before any major government intervention (UK: Treasury Green Book). Explicitly quantifies costs including administrative burden, unintended consequences, and deadweight losses. Forces decisionmakers to acknowledge uncertainty and assign probabilities to different outcomes. Reduces optimism bias in project appraisal.'
        },
        {
          icon: '🔬', tone: 'purple', head: 'Pilot schemes and randomised trials',
          body: 'Test policy at small scale before national rollout – limits the damage of unintended consequences. <strong>Example:</strong> Universal Credit was piloted in Ashton-under-Lyne before (slow) rollout, identifying IT and payment-gap problems. Randomised controlled trials in policy (Nudge Unit, HMRC) apply experimental discipline to government action.'
        },
        {
          icon: '🔎', tone: 'rose', head: 'Transparency and public accountability',
          body: 'Freedom of Information Act, published regulatory impact assessments, and independent audit (National Audit Office) allow civil society and media to scrutinise government decisions. Transparency reduces information asymmetry between government and public – and between regulators and the regulated. Sunlight is the best disinfectant for regulatory capture.'
        }
      ],
      tipLate: { icon: '🏆', tone: 'green', text: 'Bank of England independence (1997): the single most successful institutional reform in UK economic policy. By removing interest rate decisions from the Chancellor\'s desk, it eliminated the electoral cycle distortion that caused rates to be cut before elections and raised after. Result: inflation averaged 2.0% in the decade after independence vs 6.5% in the decade before.' },
      examEdge: 'Exam technique for 25-mark essays on intervention: the best responses evaluate both market failure (why intervention is justified in principle) AND government failure (why it may not work in practice), then assess which is more likely to dominate given the specific context. Conclude with institutional design: "the answer is not to avoid intervention but to design it better – independent agencies, CBA, pilots, and transparency all reduce government failure risk." This shows you understand the comparative economics, not just the market failure side.',
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};
