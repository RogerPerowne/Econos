/* js/blocks/graphics/venn.js
   ───────────────────────────────────────────────────────────────────────────
   venn — two- or three-set Venn diagram with labelled intersections.

   Schema
   ------
     {
       sets:          [ { label, tone } ],            // 2 or 3 items
       intersections: [ { label, of: [setIndex…] } ]  // each of[] names the
                                                       // sets that overlap;
                                                       // length 2 = pairwise,
                                                       // length 3 = centre (3-set only)
     }

   Desktop: overlapping translucent CSS circles, absolutely positioned inside
   a fixed-aspect stage. Set labels sit near each circle's outer pole.
   Intersection labels sit in the overlap zone, vertically centred.

   @container gfx (max-width: 520px): circles shrink + stack horizontally
   (2-up or triangular still drawn at 60% scale), and all intersection labels
   are listed below the diagram as toned chips — no cramped overlap text.

   Delegates ALL element markup to window.ECONOS_GFX (toneClass, escape).
   Registers B.venn.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[venn] deps not loaded');
    return;
  }

  /* Fallback tones for sets when the author omits tone. */
  var FALLBACK_TONES = ['blue', 'green', 'amber'];

  /* ── geometry ──────────────────────────────────────────────────────────────
     All positions are % of the stage (100 × 56 viewBox).
     Two-set:   circles side-by-side, overlapping ~35% of their diameter.
     Three-set: equilateral triangle arrangement.
     ─────────────────────────────────────────────────────────────────────── */

  /* Circle centres as [cx, cy] in percent of stage W/H. */
  var TWO_CENTRES = [
    [33, 50],   // left
    [67, 50]    // right
  ];

  var THREE_CENTRES = [
    [50, 22],   // top
    [30, 72],   // bottom-left
    [70, 72]    // bottom-right
  ];

  /* Intersection label positions (% of stage) for each combination. */
  /* Two-set: single pairwise overlap at centre. */
  var TWO_INTERSECT = {
    '0,1': [50, 50]
  };

  /* Three-set: three pairwise overlaps + one centre triple. */
  var THREE_INTERSECT = {
    '0,1': [40, 48],   // top ∩ bottom-left
    '0,2': [60, 48],   // top ∩ bottom-right
    '1,2': [50, 76],   // bottom-left ∩ bottom-right
    '0,1,2': [50, 58]  // all three
  };

  /* ── helpers ───────────────────────────────────────────────────────────── */

  function setLabel(label, toneClass, dataPos) {
    /* data-venn-pos is read by CSS to steer the label into the right corner. */
    return (
      '<span class="gfx-venn__set-label ' + toneClass + '" data-venn-pos="' + dataPos + '">' +
      G.escape(label) +
      '</span>'
    );
  }

  function intersectLabel(label, key) {
    return (
      '<span class="gfx-venn__ix-label" data-venn-ix="' + G.escape(key) + '">' +
      G.escape(label) +
      '</span>'
    );
  }

  /* Resolve the tone for an intersection from its constituent set indices. */
  function intersectTone(ofArr, sets) {
    /* Use the tone of the first named set as the intersection's accent. */
    var idx = ofArr && ofArr.length ? ofArr[0] : 0;
    var s = sets[idx];
    return s && s.tone ? s.tone : FALLBACK_TONES[idx % FALLBACK_TONES.length];
  }

  /* ── renderer ──────────────────────────────────────────────────────────── */

  B.venn = function venn(block) {
    var sets = Array.isArray(block.sets) ? block.sets.slice(0, 3) : [];
    var intersections = Array.isArray(block.intersections) ? block.intersections : [];
    var n = sets.length < 2 ? 2 : sets.length;  // floor at 2, cap at 3
    n = Math.min(n, 3);

    var is3 = n === 3;
    var centres = is3 ? THREE_CENTRES : TWO_CENTRES;
    var ixMap   = is3 ? THREE_INTERSECT : TWO_INTERSECT;

    /* ── circles ─────────────────────────────────────────────────────────── */
    var circlesHtml = sets
      .slice(0, n)
      .map(function (s, i) {
        var tc = G.toneClass(s && s.tone, FALLBACK_TONES[i % FALLBACK_TONES.length]);
        var cx = centres[i][0];
        var cy = centres[i][1];
        return (
          '<div class="gfx-venn__circle ' + tc + '" ' +
          'style="left:' + cx + '%;top:' + cy + '%;" ' +
          'data-venn-set="' + i + '">' +
          '</div>'
        );
      })
      .join('');

    /* ── set labels ──────────────────────────────────────────────────────── */
    /* Positions: 2-set → left pole / right pole. 3-set → top / bl / br. */
    var twoLabelPos  = ['left', 'right'];
    var threeLabelPos = ['top', 'bottom-left', 'bottom-right'];
    var labelPositions = is3 ? threeLabelPos : twoLabelPos;

    var setLabelsHtml = sets
      .slice(0, n)
      .map(function (s, i) {
        if (!s || !s.label) return '';
        var tc = G.toneClass(s.tone, FALLBACK_TONES[i % FALLBACK_TONES.length]);
        return setLabel(s.label, tc, labelPositions[i]);
      })
      .join('');

    /* ── intersection labels (stage overlay) ─────────────────────────────── */
    var ixOverlayHtml = intersections
      .map(function (ix) {
        if (!ix || !Array.isArray(ix.of) || !ix.label) return '';
        var key = ix.of.slice().sort(function (a, b) { return a - b; }).join(',');
        var pos = ixMap[key];
        if (!pos) return '';
        return intersectLabel(ix.label, key);
      })
      .join('');

    /* ── narrow-mode list (sets + labelled overlaps) ─────────────────────────
       On a narrow container the overlapping circles can't stay legible, so we
       drop them entirely and show a clean stacked list instead: the sets as
       tone chips, then each intersection labelled with the sets it spans
       ("Micro ∩ Macro → Market failure"). Toggled by @container in venn.css. */
    var setChipsHtml = sets.slice(0, n)
      .map(function (s, i) {
        if (!s || !s.label) return '';
        var tc = G.toneClass(s.tone, FALLBACK_TONES[i % FALLBACK_TONES.length]);
        return '<li class="gfx-venn__chip gfx-venn__chip--set ' + tc + '">' +
          G.escape(s.label) + '</li>';
      })
      .join('');

    var ixChipsHtml = intersections
      .map(function (ix) {
        if (!ix || !ix.label) return '';
        var tc = G.toneClass(intersectTone(ix.of, sets), 'slate');
        var ofLabels = (Array.isArray(ix.of) ? ix.of : [])
          .map(function (idx) { return sets[idx] && sets[idx].label ? G.escape(sets[idx].label) : ''; })
          .filter(Boolean).join(' ∩ ');
        return '<li class="gfx-venn__chip ' + tc + '">' +
          (ofLabels ? '<span class="gfx-venn__chip-of">' + ofLabels + '</span>' : '') +
          '<span class="gfx-venn__chip-label">' + G.escape(ix.label) + '</span>' +
          '</li>';
      })
      .join('');

    var mobileHtml =
      '<div class="gfx-venn__mobile">' +
        (setChipsHtml ? '<div class="gfx-venn__mlabel">Sets</div>' +
          '<ul class="gfx-venn__chips gfx-venn__chips--sets" role="list">' + setChipsHtml + '</ul>' : '') +
        (ixChipsHtml ? '<div class="gfx-venn__mlabel">Overlaps</div>' +
          '<ul class="gfx-venn__chips gfx-venn__chips--ix" role="list">' + ixChipsHtml + '</ul>' : '') +
      '</div>';

    return (
      '<div class="gfx-root gfx-venn gfx-venn--' + n + 'set" data-overflow-watch>' +
      '<div class="gfx-venn__stage">' +
      circlesHtml +
      setLabelsHtml +
      ixOverlayHtml +
      '</div>' +
      mobileHtml +
      '</div>'
    );
  };
})();
