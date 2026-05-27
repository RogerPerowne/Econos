---
# SEO / publishing metadata - fill all fields before publishing
title: "<Article title - sentence case, includes target keyword, under 60 chars>"
meta_description: "<140-155 chars. Mirrors the friction + payoff. Includes the keyword. Reads like a teacher, not a tagline.>"
slug: "<kebab-case-slug>"             # e.g. monopoly-explained-a-level-economics
target_keyword: "<primary keyword>"   # e.g. "monopoly a level economics"
secondary_keywords:                   # 3-6 long-tail / People Also Ask variants
  - "<keyword 2>"
  - "<keyword 3>"
theme: "<Theme 1 | Theme 2 | Theme 3 | Theme 4>"
spec_points: ["<e.g. 3.4.4>"]         # Edexcel A spec references
exam_board: "Edexcel A"
word_count_target: 1500               # 1,200-2,000 typical
internal_links:                       # Topics on the SPA this article should link into
  - topic_id: "<id from js/topics.js>"
    anchor: "<anchor text used in the body>"
    url: "/learn.html?topic=<id>"
external_sources:                     # Real, citable; no invented stats
  - "<URL or 'Edexcel 2019 Paper 1 Q3'>"
author: "Roger Perowne"
last_reviewed: "YYYY-MM-DD"
status: "draft | needs-roger-review | ready-to-publish | live"
---

# <Article title>

<!--
HOUSE RULES (delete this comment block when drafting)
- UK English everywhere. Behaviour, specialisation, labour, organisation.
- Short hyphens only ( - ). Never en dash ( - ) or em dash ( - ).
- Teacher voice, examples first then theory. Sentence-case headers.
- No bullet soup - prose by default, bullets only for genuine lists.
- UK names in worked examples (Priya, Tom, Aisha) - never Bob/Alice.
- UK firms in cases (Sainsbury's, Greggs, Octopus Energy, Thames Water).
- No invented stats. If a number isn't sourced, don't write it.
- No AI tells: "in today's fast-paced world", "let's dive in", "it's worth noting".
- Lead with the friction - what students typically get wrong.
-->

## The friction

<!-- 100-150 words. One concrete example of what students/examiners regularly get
wrong on this topic. Reference a real past paper or examiner report observation
where possible. End on the promise the article delivers. -->


## What [topic] actually is

<!-- 300-500 words. Define key terms tightly. If a diagram is central, describe it
in prose now (axes, curves, what shifts what) and commission an SVG later via the
econos-visual-diagram skill. Tighter than the textbook, not looser. -->


## The mechanism chain

<!-- 200-400 words. The Econos signature - the causal chain examiners want to see,
step by step. Use arrows in prose ("higher interest rate -> dearer mortgages ->
disposable income falls -> consumption falls -> AD shifts left") rather than
bullets, where possible. This is the section that gets students to Level 3 KAA. -->


## A worked example

<!-- 300-500 words. One real UK example, fully analysed.
Strong candidates: SDIL (sugar drinks levy), Scottish MUP for alcohol,
EU ETS, 2021 Uber Supreme Court ruling, NMW changes, Bank of England rate
decisions, Thames Water debt, Octopus Energy entry into the Big Six, HS2.
Walk the mechanism chain from the previous section through this concrete case.
Name real firms, real dates, real numbers (sourced). -->


## Evaluation - the "however"

<!-- 200-300 words. Context, limitations, counter-arguments. Magnitude, time lag,
elasticity, assumption checks, distributional effects, behavioural responses.
This is where 25-mark essays earn their top band. Avoid generic "it depends" -
say what it depends ON. -->


## What examiners actually want

<!-- 100-150 words. A short, almost callout-style 2-3 sentence summary of the
exact move that earns the marks. Quote the assessment objective if relevant
(AO1 knowledge, AO2 application, AO3 analysis, AO4 evaluation). Should read
like a teacher leaning over a student's shoulder. -->


## Practise this

<!-- ~50 word soft CTA. Point at the matching Econos topic page. Example:
"Practise this with Econos's monopoly quiz - 10 MCQs free, no signup needed.
Or work the full Learn It -> Link It -> Land It sequence to see the mechanism
chain applied to a 25-mark essay." Link to /learn.html?topic=<id>. -->


---

<!--
Self-review checklist - tick before flipping status to ready-to-publish.

Voice and style
- [ ] UK English throughout (spellcheck against -ise/-our/-re forms)
- [ ] Zero en or em dashes - only short hyphens
- [ ] Sentence-case headers, no Title Case
- [ ] Prose-heavy, bullets only where genuinely a list
- [ ] No "In today's fast-paced world" / "Let's dive in" / "It's worth noting"
- [ ] No fictional quotes attributed to real people
- [ ] No invented statistics - every number has a source in external_sources

Editorial structure
- [ ] Friction opens the piece (not the definition)
- [ ] Mechanism chain is a chain, not a list of facts
- [ ] Worked example is UK, named, dated
- [ ] Evaluation says what it depends ON, not just "it depends"
- [ ] Examiner section names the AO or mark scheme phrasing

SEO hygiene
- [ ] Primary keyword in title, H1, first 100 words, and meta description
- [ ] Secondary keywords appear at least once each, used naturally
- [ ] Slug is kebab-case, < 60 chars, includes primary keyword
- [ ] Meta description 140-155 chars, written for clicks not algorithms
- [ ] At least 2 internal links to existing Econos topic pages
- [ ] External sources are real, citable (Edexcel/ONS/IFS/BoE preferred)

Hand-off
- [ ] Flagged anything needing Roger's expert eye in `status: needs-roger-review`
-->
