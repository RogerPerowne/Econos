window.ECONOS_TOPIC = {
  id: 'government-failure',
  topicNum: '4.2',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Government Failure',
  estTime: '9-11 minutes',
  goal: 'Lock in the causes and types of government failure – and why intervention intended to correct market failure can sometimes make things worse.',
  intro: {
    heroKey: 'heroGovFailure',
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
        { icon: '⚠️', tone: 'amber',  title: 'Causes of government failure', sub: 'Distorted price signals, unintended consequences, excessive administrative costs, and information gaps.' },
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
      tip: { icon: '🔍', tone: 'amber', text: 'Government failure is not one thing. Edexcel names <strong>four</strong> root causes – distortion of price signals, unintended consequences, excessive administrative costs, and information gaps – each of which can push intervention from welfare-improving to welfare-reducing.' },
      causesLabel: 'The four causes Edexcel names',
      causesEmoji: '⚠️',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🔄', tone: 'blue', head: 'Distortion of price signals',
          body: 'Taxes, subsidies and price controls override the information that free-market prices carry, so resources are misallocated. A subsidy props up output the market would shrink; a price cap removes the shortage signal that would otherwise attract new supply; rent controls below the market rent kill the signal to build. That misallocation is a welfare loss <em>on top of</em> any administrative cost.'
        },
        {
          icon: '🔀', tone: 'amber', head: 'Unintended consequences',
          body: 'Complex systems react to interventions in unexpected ways. Biofuel mandates raised food prices. Rent controls created housing shortages. Right to Buy reduced social-housing stock. The further an intervention is from the original externality, the higher the risk of cascading side-effects.'
        },
        {
          icon: '💸', tone: 'rose', head: 'Excessive administrative costs',
          body: 'Running an intervention is rarely cheap. Ofgem\'s energy price cap costs tens of millions a year to administer; the Soft Drinks Industry Levy needs HMRC collection machinery; large public IT projects (Universal Credit, NHS systems) have over-run by billions per NAO reports. These costs are a deadweight burden netted off any welfare gain.'
        },
        {
          icon: '🧩', tone: 'purple', head: 'Information gaps',
          body: 'Setting an optimal Pigouvian tax requires knowing the exact MEC – which is inherently uncertain. Overestimate the externality and the tax overshoots, creating a fresh deadweight loss; underestimate it and the failure persists. Governments cannot know the optimum any more precisely than the data allows.'
        }
      ],
      causes2Label: 'The four spec causes – and one strategic pattern to watch',
      causes2Emoji: '🧭',
      causes2Style: 'tinted-flat',
      causes2: [
        { icon: '🗓️', tone: 'amber', head: 'Political short-termism (evaluation add-on)', body: '<strong>Not one of Edexcel\'s four named causes – but the most reliable evaluation move.</strong> Elected governments face 4–5 year cycles, so policies with costs now and benefits later (infrastructure, climate, pension reform) are systematically under-prioritised, while benefits-now-costs-later policies are over-used. <strong>UK examples:</strong> pension reform repeatedly deferred; net-zero commitments softened ahead of elections; HS2 scope cut after sunk costs were spent; chronic infrastructure under-investment relative to peer economies. Cite this whenever the question is about <em>why</em> the government chose a sub-optimal policy.' }
      ],
      causes3Label: 'Why this matters for evaluation',
      causes3Emoji: '📝',
      causes3: [
        { icon: '📉', tone: 'rose',  head: 'Intervention can make things worse',    body: 'A welfare-improving intention does not guarantee a welfare-improving outcome. Always quantify the government failure risk.' },
        { icon: '⚖️', tone: 'amber', head: 'Costs must be weighed, not ignored',    body: 'Administrative costs, incentive distortions, and political biases are real costs. They must appear on the cost side of any CBA.' },
        { icon: '🏗️', tone: 'blue',  head: 'Institutional design matters',          body: 'Government failure is reduced by better institutions – independent bodies, transparency, clear mandates – not by avoiding all intervention.' }
      ],
      examEdge: 'Underpinning the price-signal and information causes is <strong>Hayek\'s knowledge problem</strong>: no central authority can aggregate the dispersed, tacit knowledge that millions of prices process every second – so governments cannot set optimal quantities or prices any more than a central planner could. Cite Hayek for a high-band analytical point.'
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
        { icon: '💊', tone: 'purple', head: 'Pharma – FDA and opioids', body: 'The US Food and Drug Administration approved OxyContin based on manufacturer-supplied evidence of low addiction risk. The drug was aggressively marketed. Result: the opioid crisis – 500,000+ US deaths from opioid overdose (1999–2019). The regulator failed to independently verify manufacturer claims.' }
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
        left:  { icon: '📉', tone: 'rose',  label: 'Strong case for intervention', caption: 'Market failure is large, well-evidenced and irreversible. Government has clear information and mandate. Externality is global (carbon).' },
        right: { icon: '🏛️', tone: 'green', label: 'Weaker case for intervention', caption: 'Market failure is modest or uncertain. Government faces severe information problems, political cycles distort incentives, capture risk is high.' }
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
      tip: { icon: '📌', tone: 'amber', text: 'Abstract causes become clearer through real cases. Four show how information problems, political incentives, and poor contract design produce documented welfare losses – and one (Bank of England independence) shows how institutional design can <em>reduce</em> government failure. Top answers cite both sides.' },
      causesLabel: 'Five case studies – four failures and one institutional success',
      causesEmoji: '🏗️',
      causesStyle: 'numbered-rows',
      causesCols: 1,
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
        },
        {
          icon: '🏦', tone: 'green', head: 'Bank of England independence (1997) – design that works',
          body: '<strong>Counter-example: institutional design reducing government failure.</strong><br>Before 1997, the Chancellor set interest rates – and was widely accused of cutting rates before elections and raising them after, creating a political business cycle. The 1997 reform handed rate-setting to an independent Bank of England with a clear 2% CPI inflation target. <strong>Result:</strong> CPI averaged ~2.0% over 1997–2007 vs ~6.5% across 1987–96. The reform addressed three causes at once – political short-termism, regulatory capture, and information gaps (transparent MPC minutes). Cite it whenever the question is "can government failure be designed away?"'
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
      causesStyle: 'numbered-rows',
      causesCols: 1,
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

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Government Failure',
    subtitle: 'Theme 1 &middot; Topic 4.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('govt_failure_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers government failure types, unintended consequences, regulatory capture, political incentives, and cost-benefit limitations',
    shortNames: [
      'Definition MCQ', 'Types categorise', 'Regulatory capture', 'Political incentives MCQ',
      'Unintended consequences', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: definition */
      { type: 'mcq',
        stem: 'Which statement best defines <strong>government failure</strong>?',
        opts: [
          'Government intervention that causes resource misallocation – making the situation worse than the market outcome it was designed to correct',
          'A government that loses a democratic election after economic mismanagement',
          'Any situation in which the government fails to achieve all of its stated policy objectives',
          'A government that fails to collect enough tax revenue to fund public services'
        ],
        ans: 0,
        exp: '<strong>Government failure</strong> occurs when government intervention in markets produces outcomes that are <em>worse</em> than the market failure it was intended to correct – a net welfare loss from intervention. Types include: imperfect information (governments don\'t know the correct tax/subsidy level); unintended consequences (intervention has side effects not anticipated); regulatory capture (regulated industries influence regulators); policy myopia (short-run political incentives distort long-run decisions); bureaucratic inefficiency (public agencies are less efficient than private firms). The existence of market failure does not automatically justify intervention – government failure must also be assessed.'
      },

      /* 2 – Categorise: types of government failure */
      { type: 'categorise',
        stem: 'Sort each example into the correct type of government failure.',
        categories: ['Information failure', 'Unintended consequences', 'Regulatory capture', 'Political myopia'],
        items: [
          { text: 'A carbon tax set too low fails to reach the social optimum because the government cannot measure the true marginal external cost', category: 'Information failure' },
          { text: 'Rent controls reduce housing supply as landlords withdraw properties rather than rent at controlled prices', category: 'Unintended consequences' },
          { text: 'The banking regulator is staffed by former bankers who are reluctant to impose strict capital requirements on their old employers', category: 'Regulatory capture' },
          { text: 'A government cuts infrastructure investment before an election to show a short-term budget surplus', category: 'Political myopia' },
          { text: 'Agricultural subsidies designed to support small farmers are disproportionately captured by large agribusiness', category: 'Unintended consequences' },
          { text: 'A government overestimates the social benefit of a new HS2-style railway, investing far more than the net present value justifies', category: 'Information failure' }
        ],
        exp: '<strong>Information failure</strong>: government cannot know the correct values for taxes, subsidies, or cost-benefit calculations. <strong>Unintended consequences</strong>: intervention produces unexpected side effects – often because price controls suppress the market\'s signalling function. <strong>Regulatory capture</strong>: regulated industries gain influence over their regulators – Stigler (1971): regulation serves the regulated industry, not consumers. <strong>Political myopia</strong>: democratic incentives create short time horizons – politicians favour policies with quick visible benefits and delayed costs.'
      },

      /* 3 – MCQ: regulatory capture */
      { type: 'mcq',
        stem: '<strong>Regulatory capture</strong> best describes a situation where:',
        opts: [
          'Regulated firms or industries gain sufficient influence over their regulators that regulation serves the industry\'s interests rather than consumers\' or society\'s',
          'A government regulator takes control of a private firm to prevent its collapse',
          'A foreign government captures a regulatory agency through diplomatic pressure',
          'Strict regulation prevents new firms from entering a market, protecting incumbents from competition'
        ],
        ans: 0,
        exp: 'Regulatory capture (Stigler, 1971): over time, regulatory agencies may be "captured" by the industries they regulate through: <strong>revolving door</strong> (regulators come from or go to the industry – shared professional culture); <strong>lobbying</strong> (regulated industries have concentrated interest and high resources to influence regulators); <strong>information advantage</strong> (industry provides much of the data regulators use – can shape how it is presented). The captured regulator then sets regulations that protect incumbent firms, restrict entry, or allow prices above competitive levels – harming consumers. Examples: US financial regulators pre-2008, energy regulation in network industries.'
      },

      /* 4 – MCQ: unintended consequences of rent control */
      { type: 'mcq',
        stem: 'A government imposes rent controls (a price ceiling below equilibrium) to help low-income tenants. What is the most likely <strong>unintended consequence</strong>?',
        opts: [
          'The supply of rental housing falls as landlords withdraw properties or convert them to other uses – the policy intended to help tenants worsens the long-run housing shortage',
          'Demand for rental housing falls as controlled rents are too low to attract quality tenants',
          'Landlords increase investment in their properties because controlled rents guarantee stable income',
          'Rent controls eliminate the housing shortage by ensuring all willing tenants can find accommodation at affordable rents'
        ],
        ans: 0,
        exp: 'Rent control creates excess demand (more tenants want flats at controlled price than landlords supply). Unintended consequences: <strong>supply reduction</strong> (landlords withdraw from the market, convert to AirBnB or owner-occupation – rational response to below-market return); <strong>quality deterioration</strong> (landlords have no incentive to maintain properties since they cannot raise rents); <strong>misallocation</strong> (sitting tenants remain in properties too large for their needs since they lose the subsidy if they move); <strong>black market rents</strong> (informal payments above controlled price). In the long run, rent control can make the housing shortage it was designed to alleviate significantly worse.'
      },

      /* 5 – MCQ: political myopia */
      { type: 'mcq',
        stem: 'Which example best illustrates <strong>government failure from political short-termism</strong>?',
        opts: [
          'A government delays increasing the state pension age before an election, imposing higher future costs on taxpayers rather than current voters',
          'A government invests in infrastructure with a 50-year payback – rational long-run decision-making',
          'A central bank raises interest rates to control inflation despite political pressure to keep rates low',
          'A government consults extensively with economists before setting the carbon tax rate'
        ],
        ans: 0,
        exp: 'Political myopia arises from the electoral cycle: politicians face re-election every 4-5 years, incentivising decisions with short-run visible benefits and long-run hidden costs. Delaying pension age reform imposes costs on future taxpayers (not today\'s voters) and avoids unpopular announcements before elections. Other examples: pre-election spending booms (Nordhaus political business cycle); under-investment in maintenance (visible costs now, failure costs later); slow action on climate change (costs now, benefits in 50+ years). This creates a systematic bias in democratic systems toward present consumption at the expense of future investment.'
      },

      /* 6 – Cause & effect: government failure mechanisms */
      { type: 'cause_effect',
        stem: 'Match each intervention to its government failure consequence.',
        pairs: [
          { cause: 'Agricultural subsidies introduced to support family farms', effect: 'Large agribusiness captures most of the subsidy through scale advantages; inequality worsens' },
          { cause: 'Government estimates social cost of carbon and sets tax accordingly', effect: 'If estimate is wrong, tax is too high or too low – missing the social optimum in either direction' },
          { cause: 'Financial regulator staffed primarily by former bankers', effect: 'Regulatory capture – reluctance to impose capital requirements that reduce bank profitability' },
          { cause: 'Government bails out failing banks in a crisis', effect: 'Future moral hazard – banks take more risk knowing bailout is likely' },
          { cause: 'Government sets minimum wage above market equilibrium', effect: 'Unintended unemployment among low-skill workers if demand for labour is elastic' },
          { cause: 'Government invests in infrastructure based on optimistic projections', effect: 'Optimism bias leads to cost overruns and lower returns than projected' }
        ],
        exp: 'Government failure takes many forms: <strong>distributional capture</strong> (subsidies benefit wrong groups); <strong>information failure</strong> (wrong tax rate); <strong>regulatory capture</strong> (regulated industry gains influence); <strong>moral hazard from intervention</strong> (bailout guarantees increase risk-taking); <strong>labour market unintended consequences</strong> (minimum wage employment effects – debated empirically); <strong>optimism bias</strong> (public sector tendency to underestimate costs and overestimate benefits – identified by HM Treasury as a systematic problem in UK public investment appraisal).'
      },

      /* 7 – Match pairs: government failure vocabulary */
      { type: 'match_pairs',
        stem: 'Match each term to its definition.',
        pairs: [
          { a: 'Government failure', b: 'Intervention that worsens resource allocation compared to the market outcome' },
          { a: 'Regulatory capture', b: 'Regulated industry gains influence over its regulator – regulation serves the industry' },
          { a: 'Unintended consequences', b: 'Intervention produces unexpected side effects that undermine its goals' },
          { a: 'Political myopia', b: 'Electoral incentives create short time horizons – long-run costs deferred to future governments' },
          { a: 'Optimism bias', b: 'Systematic tendency to underestimate costs and overestimate benefits in public project appraisal' },
          { a: 'Cost-benefit analysis', b: 'Technique to evaluate public investment by weighing all social costs against all social benefits' }
        ],
        exp: 'Government failure vocabulary: the core concept is that intervention can make things worse, not just better – the market failure justification for intervention must be weighed against government failure risks. Each type has a different mechanism: regulatory capture → incentive alignment failure; unintended consequences → price mechanism suppressed or circumvented; political myopia → time horizon distortion; optimism bias → information distortion. CBA is the tool designed to overcome these biases – but is itself subject to measurement problems and can be manipulated by interested parties.'
      },

      /* 8 – Odd one out: government failure examples */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>government failure</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🏠', label: 'Rent controls cause a long-run housing shortage as landlords exit the market', note: '' },
          { icon: '🌾', label: 'EU agricultural subsidies benefit large agribusiness more than small family farms they were designed to help', note: '' },
          { icon: '💊', label: 'The NHS provides healthcare free at the point of use – eliminating the private market that would underprovide due to positive externalities', note: '' },
          { icon: '🏦', label: 'Bank bailouts create moral hazard – banks take excessive risk knowing the government will rescue them', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>the NHS providing free healthcare</strong>. This is an example of successful government intervention correcting a market failure (positive externality of healthcare, information asymmetry between doctors and patients, merit good undervaluation). It is not government failure – it is the government achieving its intended social outcome. The other three are government failures: rent controls causing supply reduction (unintended consequence); agricultural subsidies captured by large firms (distributional failure); bank bailouts creating moral hazard (intervention generating new market failure).'
      },

      /* 9 – Data table: UK public project cost overruns */
      { type: 'data_table',
        stem: 'The table shows UK public infrastructure project cost overruns – a measure of optimism bias.',
        headers: ['Project', 'Initial budget (£bn)', 'Final cost (£bn)', 'Overrun (%)'],
        rows: [
          ['HS2 (2012 estimate)', '32.7', '88+ (2024 est.)', '+169%'],
          ['Hinkley Point C (2016)', '18.0', '32+ (2024 est.)', '+78%'],
          ['Crossrail / Elizabeth Line', '14.8', '18.9', '+28%'],
          ['Scottish Parliament Building', '0.04', '0.41', '+925%'],
          ['London 2012 Olympics', '2.4', '8.9', '+271%']
        ],
        question: 'What do the data most strongly suggest about government decision-making?',
        opts: [
          'Systematic optimism bias in public project appraisal – initial cost estimates consistently understate final costs, suggesting government failure through information distortion in project approval decisions',
          'Public projects are always more expensive than private projects – government should never invest in infrastructure',
          'The cost overruns prove all these projects were mistakes that should have been cancelled at the planning stage',
          'Overruns only occur in UK projects – international evidence shows government project appraisal is accurate in other countries'
        ],
        ans: 0,
        exp: 'The consistent pattern of cost overruns (all projects exceeded initial budget, some dramatically) is consistent with the "optimism bias" identified by HM Treasury and behavioural economist Bent Flyvbjerg: project promoters systematically underestimate costs and overestimate benefits in initial appraisals – either through genuine cognitive bias or strategic misrepresentation to secure approval. This is a specific form of government failure in public investment. Options B and C are too strong – many overrun projects still generate positive NPV. Option D is wrong: Flyvbjerg\'s global study found overruns are universal, with an average 45% overrun in large infrastructure projects worldwide.'
      },

      /* 10 – Multi-select: evaluation of government failure argument */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the government failure argument?',
        opts: [
          'Government failure occurs when intervention makes resource allocation worse than the market outcome',
          'The government failure argument does not justify abandoning intervention where market failure is severe – it justifies improving intervention design (better information, independent regulation, long-term institutions) rather than simply removing government from the market',
          'Government failure is always worse than market failure',
          'The symmetry of the market failure/government failure argument cuts both ways: just as market failure does not automatically justify intervention, government failure does not automatically justify deregulation – the relevant question is which specific intervention, designed how, in which institutional context, produces the best outcome',
          'Political myopia is a type of government failure',
          'Delegating policy to independent institutions (central bank for monetary policy, independent regulators for utilities) partially addresses political myopia and regulatory capture government failures – but creates new accountability problems, since democratically unelected bodies make consequential distributive decisions'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: directly challenges the inference from government failure to "no intervention" – argues the appropriate response is better intervention design, reaching a qualified conclusion. D: applies the symmetry of the argument – government failure is the mirror image of market failure, but neither automatically resolves the policy question; the answer depends on context and institutional design. F: evaluates independent institutions as a partial solution to government failure while identifying a new accountability trade-off – a two-sided evaluation reaching a design implication. A and E are descriptions; C is an unsupported overclaim.'
      }

    ]
  };

})();

