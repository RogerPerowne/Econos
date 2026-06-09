/* ============================================================
   ECONOS – Role of Central Banks (Edexcel A 4.4.3)
   6 cards · interactive-first build
   Built from the ChatGPT → Claude mockup pipeline.
   What central banks do: the big picture, implementing monetary policy,
   banker to the government, banker to the banks (lender of last resort),
   regulating the banking industry, and the whole story.

   New HTML visual:
     - centralBankHub (Card 1 — the four core functions, 2x2 hub)
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'role-of-central-banks',
  topicNum: '4.4.3',
  theme: 'Theme 4 \xb7 A Global Perspective',
  title: 'Role of Central Banks',
  estTime: '18 min',
  goal: 'Explain the four core functions of a central bank — monetary policy, banker to the government, banker to the banks and regulation — and evaluate how they keep the system stable',

  intro: {
    heroKey: 'heroGlobe',
    summary: 'A central bank sits at the heart of the financial system. It is not an ordinary bank that serves the public — it manages the system around the banks, shaping money, credit, confidence and stability. This deck works through its four core functions. Monetary policy uses the policy interest rate (and tools like asset purchases) to influence borrowing, spending, aggregate demand and inflation through the transmission mechanism. As banker to the government it holds accounts, processes payments and manages the national debt. As banker to the banks it provides reserves and routine liquidity, and acts as lender of last resort in a crisis to stop panic spreading. And through regulation it supervises banks, sets capital and liquidity rules and protects financial stability. The thread throughout: the central bank manages the plumbing of the whole economy, which is why its credibility and independence matter so much.',
    doInThis: 'Set out the four core functions of a central bank. Explain how monetary policy works through the transmission mechanism. Explain its role as banker to the government and to the banks. Explain lender of last resort and the liquidity/solvency distinction. Explain banking regulation, then evaluate the trade-offs.',
    outcomes: [
      'Name the four core central-bank functions',
      'Explain the monetary-policy transmission chain',
      'Explain banker to the government',
      'Explain lender of last resort',
      'Explain banking regulation',
      'Evaluate central-bank trade-offs'
    ],
    tip: 'Start by naming the function, then explain the mechanism — how it affects inflation, confidence or stability.',
    stages: [
      { num: 1, name: 'Learn',  sub: '6 cards \xb7 18 min', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply in exam-style questions', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'See your progress and next steps', state: 'locked' }
    ]
  },

  cards: [
    /* ============ CARD 1 – The big picture ============ */
    {
      id: 'rocb-big-picture',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 6',
      title: 'Role of central banks — the big picture',
      lede: 'A central bank sits at the heart of the financial system — shaping money, credit, confidence and stability.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'A central bank is <strong>not an ordinary bank</strong> — it manages the system around the banks.' },

      visualKey: 'centralBankHub',
      visualLabel: 'THE FOUR CORE FUNCTIONS',
      visualEmoji: '\u{1F517}',

      causesLabel: 'WHY IT MATTERS',
      causesEmoji: '\u{1F517}',
      causesStyle: 'icon-top',
      causes: [
        { tone: 'green', icon: '\u{1F4C9}', head: 'Stable prices', body: 'Keeps inflation low and steady.' },
        { tone: 'green', icon: '\u{1F4B5}', head: 'Confidence in money', body: 'People trust the currency.' },
        { tone: 'green', icon: '\u{1F3E6}', head: 'Safer banks', body: 'Reduces the risk of bank failure.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'A steadier economy', body: 'Supports growth, jobs and stability.' }
      ],

      pairLabel: 'Commercial bank vs Central bank',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue', icon: '\u{1F3E6}', iconStyle: 'circle', label: 'Commercial bank',
        points: ['Serves the public', 'Takes deposits and makes loans', 'Aims to make a profit']
      },
      right: {
        tone: 'amber', icon: '\u{1F3DB}️', iconStyle: 'circle', label: 'Central bank',
        points: ['Banker to government and banks', 'Manages the whole system', 'Aims for stability, not profit']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Most countries give their central bank a major role in controlling inflation and keeping the banking system stable.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'The central bank manages money, credit and confidence — the plumbing of the whole financial system.' },
      examEdge: { title: 'EXAM EDGE', text: 'Start by naming the function, then explain how it affects inflation, confidence or stability across the economy.' }
    },

    /* ============ CARD 2 – Implementing monetary policy ============ */
    {
      id: 'rocb-monetary-policy',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 6',
      title: 'Implementing monetary policy',
      lede: 'Central banks use policy tools to influence borrowing, spending, inflation and the wider economy.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The key exam move is to explain the <strong>transmission chain</strong> — not just to name interest rates.' },

      causesPosition: 'top',
      causesLabel: 'THE MAIN TOOLS',
      causesEmoji: '\u{1F517}',
      causesCols: 2,
      causes: [
        { tone: 'blue', icon: '\u{1F4B2}', head: 'Policy interest rate', body: 'Higher rates discourage borrowing and spending; lower rates do the opposite.' },
        { tone: 'purple', icon: '\u{1F4B8}', head: 'Asset purchases (QE)', body: 'Balance-sheet tools can support policy alongside rates.' }
      ],

      flowTitle: 'THE TRANSMISSION CHAIN',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'blue', icon: '\u{1F4B2}', title: 'Rate changes', sub: 'The central bank sets it.' },
        { tone: 'blue', icon: '\u{1F501}', title: 'Borrowing & saving', sub: 'Incentives shift.' },
        { tone: 'blue', icon: '\u{1F6D2}', title: 'Spending & investment', sub: 'Consumers and firms respond.' },
        { tone: 'blue', icon: '\u{1F4CA}', title: 'Aggregate demand', sub: 'Rises or falls.' },
        { tone: 'blue', icon: '\u{1F4C8}', title: 'Inflation & output', sub: 'Adjust over time.' }
      ],

      causes2Label: 'WHAT IT TRIES TO STABILISE',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'green', icon: '\u{1F4C9}', head: 'Inflation', body: 'Keep it near the target.' },
        { tone: 'green', icon: '\u{1F4C8}', head: 'Growth', body: 'Support steady output.' },
        { tone: 'green', icon: '\u{1F477}', head: 'Employment', body: 'Underpin jobs and activity.' }
      ],

      pairLabel: 'Rates rise vs Rates fall',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'rose', icon: '⏫', iconStyle: 'circle', label: 'Rates rise',
        points: ['Borrowing costs more', 'Saving is rewarded', 'Demand and inflation cool']
      },
      right: {
        tone: 'green', icon: '⏬', iconStyle: 'circle', label: 'Rates fall',
        points: ['Borrowing is cheaper', 'Saving is less attractive', 'Demand and inflation rise']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Monetary policy works with time lags — the full effect on inflation is rarely immediate.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Monetary policy works by changing financial conditions, then demand — and only then inflation and output.' },
      examEdge: { title: 'EXAM EDGE', text: 'Always trace the chain: rate → borrowing and spending → aggregate demand → inflation and growth.' }
    },

    /* ============ CARD 3 – Banker to the government ============ */
    {
      id: 'rocb-banker-government',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 6',
      title: 'Banker to the government',
      lede: 'Governments need a bank too — for payments, debt management, reserves and credibility.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'The central bank supports the government’s finances — but that is <strong>not the same as setting fiscal policy</strong>.' },

      causesPosition: 'top',
      causesLabel: 'WHAT THIS FUNCTION INVOLVES',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Holds accounts', body: 'Keeps the government’s main accounts.' },
        { tone: 'blue', icon: '\u{1F4B3}', head: 'Processes payments', body: 'Runs the payment systems for the state.' },
        { tone: 'blue', icon: '\u{1F4DC}', head: 'Manages debt', body: 'Issues and settles government bonds.' },
        { tone: 'blue', icon: '\u{1F4A1}', head: 'Advises & supports', body: 'Provides analysis and operational support.' }
      ],

      flowTitle: 'HOW THE MONEY FLOWS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F465}', title: 'Households & firms', sub: 'Pay taxes.' },
        { tone: 'green', icon: '\u{1F3DB}️', title: 'Government account', sub: 'Held at the central bank.' },
        { tone: 'green', icon: '\u{1F4DC}', title: 'Bonds sold', sub: 'When spending exceeds tax.' },
        { tone: 'green', icon: '\u{1F4B8}', title: 'Spending & repayments', sub: 'Flow back out.' }
      ],

      causes2Label: 'DEBT MANAGEMENT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2Cols: 3,
      causes2: [
        { tone: 'amber', icon: '\u{1F4B8}', head: 'Government borrows', body: 'To cover any deficit.' },
        { tone: 'amber', icon: '\u{1F4DC}', head: 'Issues bonds', body: 'Gilts sold to investors.' },
        { tone: 'amber', icon: '\u{1F3E6}', head: 'Bank facilitates', body: 'Manages the auctions and flows.' }
      ],

      causes3Label: 'WHY IT MATTERS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'green', icon: '\u{1F4B3}', head: 'Smooth payments', body: 'The state pays reliably.' },
        { tone: 'green', icon: '\u{1F91D}', head: 'Market credibility', body: 'Investors trust the system.' },
        { tone: 'green', icon: '\u{1F4CA}', head: 'Orderly financing', body: 'Debt is raised without disruption.' },
        { tone: 'rose',  icon: '⚠️', head: 'Independence', body: 'It must not just print money for the state.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The Treasury chooses tax and spending; the central bank typically helps manage payments, debt operations and reserve management.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'As banker to the government, the central bank keeps public finances flowing smoothly and credibly.' },
      examEdge: { title: 'EXAM EDGE', text: 'Be precise: the central bank manages the government’s banking, not its day-to-day tax and spending decisions.' }
    },

    /* ============ CARD 4 – Banker to the banks ============ */
    {
      id: 'rocb-lender-last-resort',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 6',
      title: 'Banker to the banks — lender of last resort',
      lede: 'The central bank sits behind the banking system — supplying reserves, settling payments and stepping in during a panic.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Lender of last resort means emergency liquidity support when <strong>confidence breaks</strong>.' },

      causesPosition: 'top',
      causesLabel: 'BANKER TO THE BANKS',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue', icon: '\u{1F3E6}', head: 'Reserve accounts', body: 'Banks hold reserves at the central bank.' },
        { tone: 'blue', icon: '\u{1F4B3}', head: 'Payment settlement', body: 'Payments between banks are settled.' },
        { tone: 'blue', icon: '\u{1F4A7}', head: 'Routine liquidity', body: 'Provides short-term funding day to day.' }
      ],

      flowTitle: 'WHEN A CRISIS HITS',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'rose', icon: '\u{1F633}', title: 'Depositors panic', sub: 'A run begins.' },
        { tone: 'rose', icon: '\u{1F4A7}', title: 'Liquidity squeeze', sub: 'The bank runs short of cash.' },
        { tone: 'rose', icon: '\u{1F3E6}', title: 'Central bank lends', sub: 'Emergency funds.' },
        { tone: 'green', icon: '\u{1F91D}', title: 'Confidence stabilised', sub: 'The panic is contained.' }
      ],

      causes2Label: 'WHAT LENDER OF LAST RESORT MEANS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'blue', icon: '\u{1F4A7}', head: 'Liquidity, not bailout', body: 'Short-term cash, not a gift.' },
        { tone: 'blue', icon: '\u{1F6D1}', head: 'Stops contagion', body: 'Prevents one failure spreading.' },
        { tone: 'blue', icon: '\u{1F91D}', head: 'Supports confidence', body: 'Reassures savers and markets.' },
        { tone: 'rose', icon: '\u{1F3B2}', head: 'Moral hazard', body: 'Rescue hopes can invite risk.' }
      ],

      pairLabel: 'Liquidity problem vs Solvency problem',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'amber', icon: '\u{1F4A7}', iconStyle: 'circle', label: 'Liquidity problem',
        points: ['Short of cash right now', 'But fundamentally sound', 'Lending can fix it']
      },
      right: {
        tone: 'rose', icon: '\u{1F4C9}', iconStyle: 'circle', label: 'Solvency problem',
        points: ['Assets cannot cover liabilities', 'The bank is fundamentally weak', 'Lending only delays failure']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The aim is to prevent a temporary liquidity problem turning into a wider banking panic.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'As lender of last resort, the central bank lends to solvent but illiquid banks to stop panic spreading.' },
      examEdge: { title: 'EXAM EDGE', text: 'Distinguish liquidity from solvency — last-resort lending should rescue the illiquid, not prop up the insolvent.' }
    },

    /* ============ CARD 5 – Regulating the banking industry ============ */
    {
      id: 'rocb-regulation',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 5 of 6',
      title: 'Regulating the banking industry',
      lede: 'Central banks often help supervise banks, reduce risk and protect financial stability.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Without regulation, banks can take risks that threaten the <strong>whole system</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE REGULATION TOOLKIT',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue',   icon: '\u{1F4CA}', head: 'Capital requirements', body: 'Hold a buffer to absorb losses.' },
        { tone: 'green',  icon: '\u{1F4A7}', head: 'Liquidity rules', body: 'Keep enough cash for withdrawals.' },
        { tone: 'amber',  icon: '\u{1F4C8}', head: 'Stress tests', body: 'Check banks can withstand shocks.' },
        { tone: 'purple', icon: '\u{1F441}️', head: 'Supervision', body: 'Monitor conduct and risk.' },
        { tone: 'blue',   icon: '\u{1F310}', head: 'Macroprudential', body: 'Watch risks across the whole system.' },
        { tone: 'rose',   icon: '\u{1F4CB}', head: 'Crisis planning', body: 'Plan how to resolve a failure.' }
      ],

      causes2Label: 'WHAT REGULATION TRIES TO PREVENT',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F3B2}', head: 'Excessive risk', body: 'Reckless bets with others’ money.' },
        { tone: 'rose', icon: '\u{1F3E6}', head: 'Bank runs', body: 'Panicked withdrawals.' },
        { tone: 'rose', icon: '\u{1F517}', head: 'Contagion', body: 'One failure toppling others.' },
        { tone: 'rose', icon: '\u{1F4A5}', head: 'Systemic crisis', body: 'A collapse of the whole system.' }
      ],

      causes3Label: 'THE TRADE-OFF',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3Cols: 2,
      causes3: [
        { tone: 'green', icon: '\u{1F6E1}️', head: 'Why it can be good', body: 'A safer, more stable system that protects savers and the economy.' },
        { tone: 'rose',  icon: '\u{1F4C9}', head: 'Why it can be costly', body: 'Compliance costs and tighter lending can hold back credit and growth.' }
      ],

      pairLabel: 'Microprudential vs Macroprudential',
      pairEmoji: '\u{1F517}',
      left: {
        tone: 'blue', icon: '\u{1F3E6}', iconStyle: 'circle', label: 'Microprudential',
        points: ['Focus on each bank', 'Safety and soundness', 'Individual resilience']
      },
      right: {
        tone: 'purple', icon: '\u{1F310}', iconStyle: 'circle', label: 'Macroprudential',
        points: ['Focus on the whole system', 'System-wide risks', 'Stability of the network']
      },

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'Regulation is a public good — even if a single regulated bank carries some private cost.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Regulation makes the banking system safer, but it carries compliance costs and can tighten lending.' },
      examEdge: { title: 'EXAM EDGE', text: 'Evaluate regulation as reducing systemic risk against the cost of weaker credit growth and compliance.' }
    },

    /* ============ CARD 6 – The whole story ============ */
    {
      id: 'rocb-whole-story',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 6 of 6',
      title: 'The whole story',
      lede: 'Strong answers connect each central-bank function to the wider goals of stability, confidence and economic performance.',
      ledeStyle: 'plain',

      tip: { icon: '\u{1F512}', tone: 'green', text: 'Four core roles — <strong>one institution holding the system together</strong>.' },

      causesPosition: 'top',
      causesLabel: 'THE CENTRAL-BANK MAP',
      causesEmoji: '\u{1F517}',
      causes: [
        { tone: 'blue',   icon: '\u{1F4C8}', head: 'Monetary policy → prices', body: 'Steers inflation toward target.' },
        { tone: 'purple', icon: '\u{1F3DB}️', head: 'Banker to government → finance', body: 'Keeps public finances orderly.' },
        { tone: 'green',  icon: '\u{1F3E6}', head: 'Banker to banks → confidence', body: 'Backstops the banking system.' },
        { tone: 'rose',   icon: '\u{1F6E1}️', head: 'Regulation → stability', body: 'Protects financial stability.' }
      ],

      flowTitle: 'HOW TO WRITE IT',
      flowEmoji: '\u{1F517}',
      flow: [
        { tone: 'green', icon: '\u{1F50D}', title: 'Identify the role', sub: 'Which function?' },
        { tone: 'green', icon: '\u{1F517}', title: 'Explain the mechanism', sub: 'How it works.' },
        { tone: 'green', icon: '\u{1F4CA}', title: 'Link to the goal', sub: 'Inflation, confidence, stability.' },
        { tone: 'green', icon: '⚖️', title: 'Evaluate limits', sub: 'Lags and trade-offs.' }
      ],

      causes2Label: 'COMMON ERRORS',
      causes2Emoji: '\u{1F517}',
      causes2Style: 'icon-top',
      causes2: [
        { tone: 'rose', icon: '\u{1F500}', head: 'Confusing the banks', body: 'Central vs commercial bank.' },
        { tone: 'rose', icon: '\u{1F517}', head: 'Skipping the chain', body: 'Jumping straight to inflation.' },
        { tone: 'rose', icon: '\u{1F4A7}', head: 'Liquidity vs solvency', body: 'Treating them as the same.' },
        { tone: 'rose', icon: '⚖️', head: 'Ignoring trade-offs', body: 'No evaluation of the costs.' }
      ],

      causes3Label: 'QUICK JUDGEMENTS',
      causes3Emoji: '\u{1F517}',
      causes3Style: 'icon-top',
      causes3: [
        { tone: 'blue', icon: '⏳', head: 'Policy works with lags', body: 'Effects take time to arrive.' },
        { tone: 'blue', icon: '\u{1F91D}', head: 'Credibility matters', body: 'Trust makes policy work.' },
        { tone: 'blue', icon: '\u{1F3B2}', head: 'Rescue risks hazard', body: 'Last resort can invite risk.' },
        { tone: 'blue', icon: '\u{1F4C9}', head: 'Safety vs lending', body: 'Regulation can restrain credit.' }
      ],

      bottomTip: { icon: 'ℹ️', tone: 'blue', text: 'The central bank uses four functions to pursue one goal: a stable, confident financial system.' },

      conclusionPosition: 'end',
      conclusion: { title: 'BIG IDEA', text: 'Every central-bank function ties back to the same goal — keeping money, credit and confidence stable.' },
      examEdge: { title: 'EXAM EDGE', text: 'Top answers move beyond definition — they explain the mechanism and then judge the likely impact.' }
    }
  ]
};
