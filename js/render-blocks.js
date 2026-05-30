(function () {
  'use strict';

  const VALID_TONES = new Set(['green', 'amber', 'blue', 'purple', 'rose', 'slate']);
  const BLOCK_RENDERERS = {};

  function isDevMode() {
    try {
      return (
        window.localStorage.getItem('econosDev') === '1' ||
        new URLSearchParams(window.location.search).get('dev') === '1'
      );
    } catch (err) {
      void err;
      return false;
    }
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }

  function toneClass(tone, fallback) {
    const safeTone = VALID_TONES.has(tone) ? tone : fallback;
    return `econ-tone--${safeTone}`;
  }

  function renderIcon(icon, shape) {
    if (!icon) return '';
    const iconHtml = window.ECONOS_ICONS && window.ECONOS_ICONS[icon]
      ? window.ECONOS_ICONS[icon]
      : escapeHtml(icon);
    const iconShape = shape === 'square' ? 'icon-square' : 'icon-disc';
    return `<span class="${iconShape}" aria-hidden="true">${iconHtml}</span>`;
  }

  function safeGridCols(cols) {
    if (Number.isInteger(cols) && cols > 0 && cols <= 6) {
      return `repeat(${cols}, minmax(0, 1fr))`;
    }
    if (typeof cols === 'string' && /^[\w\s().,%/-]+$/.test(cols)) {
      return cols;
    }
    return 'repeat(2, minmax(0, 1fr))';
  }

  function safeGap(gap) {
    if (typeof gap === 'string' && /^[\w\s().,%/-]+$/.test(gap)) {
      return gap;
    }
    if (Number.isFinite(gap)) return `${gap}px`;
    return 'var(--econ-gap)';
  }

  function safeSpan(value) {
    const span = Number(value);
    if (Number.isInteger(span) && span > 0 && span <= 6) return span;
    return 1;
  }

  function blockStyle(block) {
    const styles = [];
    const colSpan = safeSpan(block.colSpan || block.span);
    const rowSpan = safeSpan(block.rowSpan);
    if (colSpan > 1) styles.push(`--econ-col-span:${colSpan}`);
    if (rowSpan > 1) styles.push(`--econ-row-span:${rowSpan}`);
    return styles.length ? ` style="${styles.join(';')}"` : '';
  }

  function renderBlock(block) {
    if (!block || typeof block !== 'object') return '';
    const renderer = BLOCK_RENDERERS[block.type];
    if (!renderer) {
      if (isDevMode()) console.warn('[Econos blocks] Unknown block type:', block.type);
      return '';
    }
    return renderer(block);
  }

  function renderBlockWrapper(block) {
    const html = renderBlock(block);
    if (!html) return '';
    return `<div class="econ-block" data-block-type="${escapeAttr(block.type)}"${blockStyle(block)}>${html}</div>`;
  }

  BLOCK_RENDERERS.sectionHeader = function sectionHeader(block) {
    const label = escapeHtml(block.label || '');
    const icon = renderIcon(block.icon, 'disc');
    const rule = block.rule === false ? '' : '<span class="econ-section__rule" aria-hidden="true"></span>';
    return `<div class="econ-section"><span class="econ-section__label">${icon}${label}</span>${rule}</div>`;
  };

  BLOCK_RENDERERS.calloutStrip = function calloutStrip(block) {
    const tone = toneClass(block.tone, 'blue');
    return `<div class="calloutStrip ${tone}" data-overflow-watch>${renderIcon(block.icon, 'disc')}<div class="calloutStrip__text text-fit-1">${escapeHtml(block.text || '')}</div></div>`;
  };

  BLOCK_RENDERERS.tip = BLOCK_RENDERERS.calloutStrip;

  BLOCK_RENDERERS.heroVisual = function heroVisual(block) {
    const visual = block.svgKey && window.ECONOS_ICONS && window.ECONOS_ICONS[block.svgKey]
      ? window.ECONOS_ICONS[block.svgKey]
      : '';
    const styles = [];
    if (Number.isFinite(block.height)) styles.push(`--hero-visual-height:${block.height}px`);
    const styleAttr = styles.length ? ` style="${styles.join(';')}"` : '';
    const caption = block.caption
      ? `<div class="hero-visual__caption text-fit-1">${escapeHtml(block.caption)}</div>`
      : '';
    if (!visual && isDevMode()) console.warn('[Econos blocks] Unknown heroVisual svgKey:', block.svgKey);
    return `<figure class="hero-visual"${styleAttr} data-overflow-watch><div class="hero-visual__media">${visual}</div>${caption}</figure>`;
  };

  /* Opt-in tone cycling on grid children — when `cycleTones: true` is set on
     a grid, any child without an explicit `tone` gets assigned one from the
     six-tone rotation in array order. Lets a 5-tile rainbow be written as
     `{ children: [{type:'tile',head:'…'}, …] }` without per-tile `tone:` keys.
     Children with their own `tone` are left alone. Default behaviour
     (no `cycleTones`) is unchanged. */
  const GRID_TONE_CYCLE = ['green', 'amber', 'blue', 'purple', 'rose', 'slate'];

  function applyGridToneCycle(children) {
    return children.map(function (child, i) {
      if (!child || typeof child !== 'object') return child;
      if (child.tone) return child;
      const next = Object.assign({}, child);
      next.tone = GRID_TONE_CYCLE[i % GRID_TONE_CYCLE.length];
      return next;
    });
  }

  BLOCK_RENDERERS.grid = function grid(block) {
    let children = Array.isArray(block.children) ? block.children : [];
    if (block.cycleTones === true) children = applyGridToneCycle(children);
    const style = `--econ-grid-cols:${safeGridCols(block.cols)};--econ-grid-gap:${safeGap(block.gap)}`;
    return `<div class="econ-grid" style="${style}">${children.map(renderBlockWrapper).join('')}</div>`;
  };

  BLOCK_RENDERERS.tile = function tile(block) {
    const tone = toneClass(block.tone, 'slate');
    const icon = renderIcon(block.icon, 'square');
    const body = block.body
      ? `<div class="econ-tile__body text-fit-1" data-overflow-watch>${escapeHtml(block.body)}</div>`
      : '';
    return `<article class="econ-tile ${tone}" data-overflow-watch><div class="econ-tile__top">${icon}<h3 class="econ-tile__head text-fit-1">${escapeHtml(block.head || '')}</h3></div>${body}</article>`;
  };

  BLOCK_RENDERERS.bigIdea = function bigIdea(block) {
    return `<div class="big-idea text-fit-1" data-overflow-watch>${escapeHtml(block.text || '')}</div>`;
  };

  BLOCK_RENDERERS.examEdge = function examEdge(block) {
    const title = escapeHtml(block.title || 'Exam edge');
    return `<aside class="exam-edge" data-overflow-watch><div class="exam-edge__title">${title}</div><div class="exam-edge__text text-fit-1">${escapeHtml(block.text || '')}</div></aside>`;
  };

  BLOCK_RENDERERS.warning = function warning(block) {
    return `<aside class="warning" data-overflow-watch>${renderIcon(block.icon || '!', 'disc')}<div class="warning__text text-fit-1">${escapeHtml(block.text || '')}</div></aside>`;
  };

  const VALID_DENSITIES = new Set(['airy', 'standard', 'compact', 'exam']);

  function renderBlocks(card) {
    const blocks = card && Array.isArray(card.blocks) ? card.blocks : [];
    const html = blocks.map(renderBlockWrapper).join('');
    if (isDevMode()) window.setTimeout(scanRenderedBlocks, 0);

    // ── Card-level metadata that drives layout ────────────────────────────
    // density → [data-density] attribute (matches css/econ-tokens.css selectors)
    const densityAttr = card && VALID_DENSITIES.has(card.density)
      ? ` data-density="${escapeAttr(card.density)}"`
      : '';
    // layoutPreset → extra class econ-preset--<value>
    const presetClass = card && typeof card.layoutPreset === 'string' && card.layoutPreset
      ? ` econ-preset--${escapeAttr(card.layoutPreset)}`
      : '';

    // ── Dev-mode notes for non-rendering build-guidance fields ────────────
    if (isDevMode()) {
      if (card && card.preserveMockupLayout) {
        console.info('[Econos blocks] preserveMockupLayout is set on card:', card.id || card.title || card);
      }
      if (card && card.layoutLock) {
        console.info('[Econos blocks] layoutLock is set on card:', card.id || card.title || card);
      }
    }

    // ── Card chrome (step label / title / lede) ───────────────────────────
    // The legacy template renderers each emit these themselves; the block
    // path must do the same so a migrated card keeps its heading. Authored
    // content is trusted (ledes may contain <strong> etc.), so not escaped —
    // matching the existing templates.
    const chrome =
      (card && card.stepLabel ? `<div class="card__step-label">${card.stepLabel}</div>` : '') +
      (card && card.title ? `<h1 class="card__title">${card.title}</h1>` : '') +
      (card && card.lede ? `<p class="card__lede">${card.lede}</p>` : '');

    return `${chrome}<div class="econ-blocks${presetClass}" data-render-blocks="1"${densityAttr}>${html}</div>`;
  }

  function overflowSummary() {
    return Array.from(document.querySelectorAll('[data-overflow-watch], .econ-section__label')).map((node) => ({
      type: (node.closest('[data-block-type]') && node.closest('[data-block-type]').getAttribute('data-block-type')) || node.className,
      overflow: node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth,
      scrollHeight: node.scrollHeight,
      clientHeight: node.clientHeight,
      scrollWidth: node.scrollWidth,
      clientWidth: node.clientWidth,
    }));
  }

  function scanRenderedBlocks() {
    if (!isDevMode()) return [];
    const summary = overflowSummary();
    summary.forEach((item, index) => {
      const node = document.querySelectorAll('[data-overflow-watch], .econ-section__label')[index];
      if (item.overflow && node) {
        node.classList.add('overflow-warning');
        console.warn('[Econos blocks] Overflow detected:', item);
      } else if (node) {
        node.classList.remove('overflow-warning');
      }
    });
    return summary.filter((item) => item.overflow);
  }

  if (isDevMode() && typeof MutationObserver === 'function') {
    const observer = new MutationObserver(() => window.requestAnimationFrame(scanRenderedBlocks));
    window.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
      scanRenderedBlocks();
    });
  }

  window.ECONOS_BLOCKS = BLOCK_RENDERERS;
  /* Shared helpers for component modules in js/blocks/*.js (loaded after this
     file). Lets later block renderers reuse escaping, tone mapping, icons,
     spans and recursive child rendering without duplicating logic. */
  window.ECONOS_BLOCK_UTILS = {
    escapeHtml: escapeHtml,
    escapeAttr: escapeAttr,
    toneClass: toneClass,
    renderIcon: renderIcon,
    renderChild: renderBlockWrapper,
    blockStyle: blockStyle,
    safeGridCols: safeGridCols,
    safeGap: safeGap,
    safeSpan: safeSpan,
    isDevMode: isDevMode,
    VALID_TONES: VALID_TONES
  };
  window.renderBlocks = renderBlocks;
  window.EconosDebug = window.EconosDebug || {};
  window.EconosDebug.inspectCard = function inspectCard() {
    return {
      dev: isDevMode(),
      blocks: Array.from(document.querySelectorAll('[data-block-type]')).map((node) => ({
        type: node.getAttribute('data-block-type'),
        overflow: node.querySelector('.overflow-warning') != null || node.classList.contains('overflow-warning'),
      })),
      overflow: isDevMode() ? scanRenderedBlocks() : [],
    };
  };
})();
