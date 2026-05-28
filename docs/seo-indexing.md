# SEO indexing — how new pages reach Google + Bing automatically

Every push to `main` deploys to GitHub Pages via `.github/workflows/ci.yml`. The same workflow tells the major search engines about the new URLs. This document is the playbook for what happens automatically, what needs a one-off setup, and what the realistic limits are.

---

## What ships automatically on every deploy

| Step | Where | What it does |
|---|---|---|
| 1. Build sitemap | `vite.config.js` (`topic-routes` plugin) | Writes `dist/sitemap.xml` from `js/topics.js` + standalone routes. Regenerated on every `npm run build`. |
| 2. Append article URLs to sitemap | `vite.config.js` (`article-routes` plugin) | Walks every Markdown source under `articles/sources/**/*.md`. Each article's `<lastmod>` uses the frontmatter `modified` date (falls back to `published`, then today). |
| 3. Build RSS feed | `vite.config.js` (`article-routes` plugin) | Writes `dist/articles/feed.xml` — articles newest-first by `published` date. Submit this in Search Console as a second sitemap source; Google uses RSS updates as a recrawl signal. |
| 4. Emit IndexNow key file | `vite.config.js` (`topic-routes` plugin) | Writes `dist/<key>.txt` (key body) so IndexNow can verify host ownership when we ping. |
| 5. Smoke-test live URLs | CI deploy step | Curls `/`, `/learn/<topic>`, `/sitemap.xml`, `/articles/feed.xml` — fails the deploy if any returns non-200. |
| 6. Ping IndexNow | CI deploy step | POSTs every URL in the live sitemap to `api.indexnow.org/IndexNow`. Picked up by Bing, Yandex, Seznam (and Google if/when they consume the protocol). Step is `continue-on-error: true` so an IndexNow outage can't break the deploy. |

Net effect: a new article hitting `main` is **fully indexed on Bing within minutes** and surfaced in the sitemap + RSS feed Google polls.

---

## What needs a one-off manual setup (10 minutes, do once)

### Google Search Console

Google does **not** support general-purpose programmatic indexing. Their Indexing API is officially restricted to `JobPosting` and `BroadcastEvent` schema types — submitting other content types is a ToS violation that gets accounts throttled.

What Google supports instead:

1. **Verify ownership of `econos.co.uk`** in [Google Search Console](https://search.google.com/search-console/). The cleanest method is the DNS TXT record (works for the whole domain). The HTML-file method works too (drop the file in `public/`, push, Google fetches it once).
2. **Submit two sitemap sources** under Sitemaps:
    - `https://econos.co.uk/sitemap.xml`
    - `https://econos.co.uk/articles/feed.xml`
3. **For the first batch of articles**: use URL Inspection → Request indexing on each URL. This is the only manual step that meaningfully accelerates first-time discovery on Google. After the first round, Google's crawler picks up sitemap changes automatically — usually within 24–48 hours for a healthy domain.

After that, the build pipeline does the rest: every deploy refreshes the sitemap, the RSS feed shows new articles newest-first, and Google's scheduled recrawls catch them.

### Bing Webmaster Tools (optional, takes 5 minutes more)

Bing powers ~10% of UK search and the bar to rank there is much lower. Same drill:

1. Verify the domain in [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Submit the sitemap.
3. Done — Bing's index will absorb the IndexNow pings going forward and crawl the sitemap regularly.

---

## What does NOT work (so we don't waste effort)

- **Google Indexing API for articles.** Officially restricted to JobPosting / BroadcastEvent. Submitting other types violates ToS — don't.
- **Sitemap ping URLs.** Google deprecated `?ping=sitemap` URLs in mid-2023. They're a no-op. Bing and Yandex still accept them but IndexNow is the modern replacement.
- **Submitting articles as JobPosting structured data.** Google's algorithmic anti-spam catches schema misuse and de-ranks the whole domain.
- **Spamming Disavow / Removal tools.** Negative SEO tactics; reserved for legitimate cleanup cases. Don't touch.

---

## What earns indexing AND ranking (the long game)

Indexing only gets the page **into** Google. To rank on the first page for the high-intent queries we're targeting (e.g. "what is inflation a level economics"):

1. **Internal linking.** Every article already funnels into its `/learn/<topic>` page. Cross-link articles to each other on related topics ("see also: GDP explained"). Google reads internal-link clusters as topic-authority signals.
2. **Backlinks.** A single link from a school's revision page, a Reddit thread, or a teacher's blog is worth more than 100 internal links. After launch, post the GDP and inflation articles on r/6thForm and the Student Room A-level subforum — genuinely useful, not spammy.
3. **Schema.org structured data.** Already shipping `Article` + `FAQPage` JSON-LD on every article. The `faq:` block in frontmatter is what unlocks Google's FAQ rich snippets — directly raises click-through rate.
4. **Core Web Vitals.** Already strong on Econos (static HTML articles, fonts preloaded, no JS hydration on article pages). Check Search Console → Core Web Vitals quarterly; chase reds.
5. **Recency.** Bumping `modified:` in frontmatter when you revise an article is a real ranking signal — the sitemap `<lastmod>` reflects it, and Google's freshness scoring picks it up.

---

## Rotating the IndexNow key

The key is hard-coded in `vite.config.js` and at the top of the CI workflow's IndexNow step. To rotate (e.g. if leaked, though it's intentionally public):

1. Generate a new key:
    ```sh
    node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
    ```
2. Replace the constant in both files.
3. The next build emits the new `<key>.txt`; the next deploy uses the new key on its IndexNow ping. IndexNow's host-verification step fetches the new key file and accepts it.

---

## Verifying it works

After deploy:

```sh
# Sitemap fresh?
curl -s https://econos.co.uk/sitemap.xml | grep -c '<url>'

# RSS feed published?
curl -s https://econos.co.uk/articles/feed.xml | grep -c '<item>'

# IndexNow key file reachable?
curl -s https://econos.co.uk/f50a6f1a73f22cc3dd6b52af512f63c0.txt
```

Then in Google Search Console → URL Inspection → enter a new article URL → check "Last crawled". Allow 24–48 hours for a new URL to surface there.
