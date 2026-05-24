/* ============================================================
   ECONOS — Link It · Read the Extract station data
   Economic Systems: market vs command vs mixed economy
   ============================================================ */

window.ECONOS_LINK_EXTRACT = {
  topic:   'Economic Systems',
  backUrl: TopicLoader.buildUrl('link_chain.html'),
  nextUrl: TopicLoader.buildUrl('link_depends.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 2,

  eyebrow:     'Read the Extract',
  instruction: 'Read the passage carefully, then use economic systems theory to interpret each question. Connect evidence from the extract to the concepts of efficiency, equity and the role of the price mechanism.',

  passage: {
    title: 'Extract: Comparing economic systems — North Korea, Cuba and the UK',
    source: 'Adapted from: World Bank Development Indicators (2022); OECD Health Statistics; UN Human Development Report',
    text: 'North Korea operates one of the world\'s last command economies: the state owns all productive resources, sets prices, and directs labour allocation through central plans. GDP per capita is estimated at under $1,800 (2022), and chronic food shortages persist despite fertile agricultural land. Economists attribute this to the knowledge problem: central planners cannot process the dispersed, constantly changing information needed for efficient resource allocation. Meanwhile, South Korea — which shared the same territory and institutions in 1945 — operates a mixed market economy with a GDP per capita over $31,000.<br><br>Cuba presents a more complex case. Its command economy has produced outcomes that rival high-income mixed economies in specific sectors: life expectancy of 78 years (vs 79 in the UK), an infant mortality rate of 4 per 1,000 births (lower than the US at 5.4), and near-universal literacy. However, Cuba\'s GDP per capita is approximately $9,500, and access to consumer goods, information, and economic choice remains tightly restricted. The Cuban government argues that prioritising healthcare and education over GDP growth reflects a different set of social objectives.<br><br>The UK\'s mixed economy combines market allocation for most goods with substantial state provision of healthcare (NHS), education, social housing, and welfare. The UK government accounts for approximately 45% of GDP through public spending, positioning it between pure market and command systems.'
  },

  questions: [
    {
      id: 'es-extract-q1',
      question: 'The extract contrasts North Korea and South Korea. What does this comparison reveal about the productive efficiency of command vs market economies?',
      options: [
        'It proves that market economies always outperform command economies on all metrics, because prices efficiently allocate resources in every context',
        'It suggests market economies tend to achieve higher productive efficiency (more output per input) because price signals and profit incentives direct resources where they generate the most value — whereas central planning suffers from Hayek\'s knowledge problem',
        'The comparison is invalid because North and South Korea have different natural resources, populations and cultures — making any economic system comparison meaningless',
        'Command economies outperform market economies on equity (equal distribution), while market economies outperform on efficiency — so neither system is clearly superior'
      ],
      correct: 1,
      explanation: 'The North/South Korea comparison is one of the strongest natural experiments in economics: two countries that shared the same territory, people and starting point in 1945, diverging only in economic system. The outcome — a 17-fold GDP per capita difference — strongly suggests that market economies generate higher productive efficiency. The mechanism is Hayek\'s knowledge problem: price signals process millions of pieces of dispersed information automatically, allocating resources to their highest-value use. Command planners cannot replicate this without prices. However, note this is not definitive proof — other factors (geopolitical isolation, sanctions, different institutions) contribute to North Korea\'s poverty. Good economics acknowledges correlation vs causation.'
    },
    {
      id: 'es-extract-q2',
      question: 'Cuba\'s healthcare outcomes (life expectancy 78, infant mortality 4/1,000) rival high-income countries despite a much lower GDP per capita. What does this suggest about the equity-efficiency trade-off in different economic systems?',
      options: [
        'Cuba\'s results prove that command economies are superior to market economies, because they can achieve better social outcomes at lower cost',
        'Cuba\'s healthcare results show that command economies can deliberately direct resources toward equity objectives (healthcare, education) that market economies may under-provide — but at the cost of lower overall GDP growth and restricted consumer choice',
        'The Cuban government\'s healthcare statistics are unreliable — governments that control information also control reported data, so these figures should be dismissed',
        'Cuba\'s outcomes show that equity and efficiency are complementary, not in conflict — healthier workers are more productive, so healthcare investment always raises GDP'
      ],
      correct: 1,
      explanation: 'Cuba\'s case is genuinely instructive: command economies can achieve specific equity targets by directing resources regardless of profitability. A market system might under-provide rural healthcare (too unprofitable), but a command system can mandate it. The cost is lower overall GDP — fewer consumer goods, restricted information and choice. This is the equity-efficiency trade-off: market economies tend to be more efficient (higher total output) but may produce unequal outcomes; command economies can mandate equity but at the cost of productive efficiency. Cuba\'s mixed performance — excellent healthcare, low GDP — illustrates this trade-off empirically. Good exam answers acknowledge both sides.'
    },
    {
      id: 'es-extract-q3',
      question: 'The UK government accounts for approximately 45% of GDP through public spending. What does this suggest about the UK\'s economic system, and what is the economic justification for this level of state involvement?',
      options: [
        'The UK is effectively a command economy because the state controls nearly half of economic activity through spending',
        'The UK is a mixed economy: market mechanisms allocate most resources, but the state intervenes to correct market failures — providing public goods (defence), merit goods (NHS, education), redistributing income through welfare, and regulating externalities',
        'The 45% figure shows that the UK government is inefficiently large — a pure market economy would achieve the same outcomes at lower cost, since taxes reduce incentives to work and invest',
        'The 45% figure means the UK is more socialist than capitalist — the majority of GDP is controlled by private firms, but the government\'s 45% share represents the dominant force in the economy'
      ],
      correct: 1,
      explanation: 'The UK is the textbook mixed economy: price signals allocate resources in most markets (supermarkets, housing, labour, financial services) while the state intervenes where markets fail. The 45% of GDP in public spending reflects a deliberate choice to correct specific market failures: the NHS corrects for the public good elements of healthcare and the information gap between patients and providers; free education corrects for positive externalities and present bias in investment decisions; welfare transfers correct for distributional market failure; defence and policing provide pure public goods the market would under-supply. The justification is not that markets fail everywhere — but that they fail in specific, identifiable ways, and those failures justify targeted state intervention.'
    }
  ]
};
