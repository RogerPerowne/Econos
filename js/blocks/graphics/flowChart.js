/* js/blocks/graphics/flowChart.js
   ───────────────────────────────────────────────────────────────────────────
   flowChart — nodes + directed links with NAMED TOPOLOGIES.

   Schema
   ------
     {
       topology: "linear" | "branching" | "parallel" | "loop",
       nodes: [
         { id, label, body?, tone?, shape? }
       ],
       links?: [
         { from, to, label? }
       ]
     }

   Topologies
   ----------
   linear:    A → B → C → D  (left-to-right chain, arrows between nodes)
   branching: A decision node (diamond) fans out via labelled paths that may
              merge back to a final node.
   parallel:  One source fans out to several nodes then merges to one.
   loop:      A → B → C → A  (chain with an explicit return arc shown as a
              styled "back" arrow row beneath).

   Desktop: horizontal / branched layouts.
   @container narrow (≤ 520px): vertical stack — nodes stacked top-to-bottom,
   arrows point down. Branches become indented sub-lists.

   Delegates ALL element markup to window.ECONOS_GFX. Registers B.flowChart.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var G = window.ECONOS_GFX;
  var B = window.ECONOS_BLOCKS;
  if (!U || !G || !B) {
    if (window.console) console.warn('[flowChart] deps not loaded');
    return;
  }

  /* ── helpers ────────────────────────────────────────────────────────────── */

  /* Build a lookup map from node id → node object. */
  function buildNodeMap(nodes) {
    var map = {};
    (nodes || []).forEach(function (n) {
      if (n && n.id) map[n.id] = n;
    });
    return map;
  }

  /* Render a single node from the map by id. Falls back gracefully. */
  function renderNode(id, nodeMap) {
    var n = nodeMap[id] || { id: id, label: id };
    return G.node({
      label: n.label || '',
      body: n.body || '',
      tone: n.tone,
      shape: n.shape || 'rect'
    });
  }

  /* Wrap a node in its flow-chart wrapper div. */
  function nodeWrap(id, nodeMap, extraClass) {
    var cls = 'gfx-fc__node' + (extraClass ? ' ' + extraClass : '');
    return '<div class="' + cls + '">' + renderNode(id, nodeMap) + '</div>';
  }

  /* Arrow with an optional label shown beneath it. */
  function arrowStep(label) {
    var labelHtml = label
      ? '<span class="gfx-fc__link-label">' + G.escape(label) + '</span>'
      : '';
    return (
      '<div class="gfx-fc__arrow-wrap">' +
      G.arrow() +
      labelHtml +
      '</div>'
    );
  }

  /* ── linear ─────────────────────────────────────────────────────────────── */

  function buildLinear(nodes, links) {
    var nodeMap = buildNodeMap(nodes);
    /* Build an ordered sequence from links if supplied, otherwise use
       nodes in declaration order. */
    var seq = resolveLinearSequence(nodes, links);
    /* Build link-label lookup: "from->to" -> label */
    var linkLabels = buildLinkLabels(links);

    var parts = [];
    seq.forEach(function (id, i) {
      if (i > 0) {
        var prevId = seq[i - 1];
        var lbl = linkLabels[prevId + '->' + id] || '';
        parts.push(arrowStep(lbl));
      }
      parts.push(nodeWrap(id, nodeMap));
    });

    return (
      '<div class="gfx-fc__linear gfx-flow-row">' +
      parts.join('') +
      '</div>'
    );
  }

  /* If links form an ordered chain (A→B, B→C …) use that order; otherwise
     fall back to nodes declaration order. */
  function resolveLinearSequence(nodes, links) {
    if (!Array.isArray(links) || links.length === 0) {
      return (nodes || []).map(function (n) { return n.id; });
    }
    /* Find a topological start: a node that never appears as a link target. */
    var targets = {};
    links.forEach(function (l) { if (l && l.to) targets[l.to] = true; });
    var allIds = (nodes || []).map(function (n) { return n.id; });
    var start = allIds.find(function (id) { return !targets[id]; });
    if (!start) return allIds; // fallback: can't determine start

    /* Walk the chain. */
    var fromMap = {};
    links.forEach(function (l) { if (l && l.from) fromMap[l.from] = l; });
    var seq = [start];
    var current = start;
    var safety = allIds.length + 2;
    while (safety-- > 0) {
      var link = fromMap[current];
      if (!link || !link.to) break;
      seq.push(link.to);
      current = link.to;
    }
    return seq;
  }

  /* ── branching ──────────────────────────────────────────────────────────── */
  /* Topology: one "decision" node (first in declaration order, or first node
     with shape "diamond") fans out via labelled links. Paths may optionally
     converge at a shared "merge" node (the node that appears as target of
     multiple links). Everything else is a branch body node. */

  function buildBranching(nodes, links) {
    var nodeMap = buildNodeMap(nodes);
    var allIds = (nodes || []).map(function (n) { return n.id; });
    var linkArr = Array.isArray(links) ? links : [];

    /* Decision: first diamond or first node. */
    var decisionId = allIds.find(function (id) {
      return nodeMap[id] && nodeMap[id].shape === 'diamond';
    }) || allIds[0];

    /* Merge node: appears as target of 2+ links. */
    var targetCount = {};
    linkArr.forEach(function (l) {
      if (l && l.to) targetCount[l.to] = (targetCount[l.to] || 0) + 1;
    });
    var mergeId = null;
    Object.keys(targetCount).forEach(function (id) {
      if (targetCount[id] >= 2 && id !== decisionId) mergeId = id;
    });

    /* Branch links: those FROM the decision node. */
    var branchLinks = linkArr.filter(function (l) { return l && l.from === decisionId; });

    /* For each branch, collect intermediate nodes between decision and merge. */
    var fromMap = {};
    linkArr.forEach(function (l) { if (l && l.from) fromMap[l.from] = (fromMap[l.from] || []); fromMap[l.from].push(l); });

    /* Build HTML: decision node on top, branch columns in a row, optional merge. */
    var decisionHtml = nodeWrap(decisionId, nodeMap, 'gfx-fc__decision');

    var branchesHtml = branchLinks
      .map(function (bl) {
        /* Walk from branch target until we reach mergeId or a dead end. */
        var branchNodes = [];
        var cur = bl.to;
        var safety = allIds.length + 2;
        while (safety-- > 0 && cur && cur !== mergeId) {
          branchNodes.push(cur);
          /* Follow the first outgoing link that doesn't go to a processed node. */
          var nextLinks = (fromMap[cur] || []).filter(function (l) {
            return branchNodes.indexOf(l.to) === -1;
          });
          cur = nextLinks.length ? nextLinks[0].to : null;
        }

        var branchLinkLabels = buildLinkLabels(linkArr);
        var innerParts = [];
        /* Arrow from decision into the first branch node (with label). */
        /* The label for this branch comes from bl.label. */
        innerParts.push(arrowStep(bl.label || ''));
        branchNodes.forEach(function (bid, i) {
          innerParts.push(nodeWrap(bid, nodeMap, 'gfx-fc__branch-node'));
          if (i < branchNodes.length - 1) {
            var nextId = branchNodes[i + 1];
            var lbl = branchLinkLabels[bid + '->' + nextId] || '';
            innerParts.push(arrowStep(lbl));
          }
        });
        return '<div class="gfx-fc__branch-col">' + innerParts.join('') + '</div>';
      })
      .join('');

    var mergeHtml = mergeId
      ? (
          '<div class="gfx-fc__merge-row">' +
          arrowStep('') +
          nodeWrap(mergeId, nodeMap, 'gfx-fc__merge-node') +
          '</div>'
        )
      : '';

    return (
      '<div class="gfx-fc__branching">' +
      '<div class="gfx-fc__decision-wrap">' + decisionHtml + '</div>' +
      '<div class="gfx-fc__branches">' + branchesHtml + '</div>' +
      mergeHtml +
      '</div>'
    );
  }

  /* ── parallel ───────────────────────────────────────────────────────────── */
  /* Topology: first node fans out to all "parallel" nodes, then all converge
     to the last node. Source = first, sink = last, parallel = middle nodes. */

  function buildParallel(nodes, links) {
    var nodeMap = buildNodeMap(nodes);
    var allIds = (nodes || []).map(function (n) { return n.id; });
    var linkArr = Array.isArray(links) ? links : [];
    var linkLabels = buildLinkLabels(linkArr);

    /* Source: node that never appears as a target. */
    var targets = {};
    linkArr.forEach(function (l) { if (l && l.to) targets[l.to] = true; });
    var sourceId = allIds.find(function (id) { return !targets[id]; }) || allIds[0];

    /* Sink: node that never appears as a source. */
    var sources = {};
    linkArr.forEach(function (l) { if (l && l.from) sources[l.from] = true; });
    var sinkId = allIds.slice().reverse().find(function (id) { return !sources[id]; }) || allIds[allIds.length - 1];

    /* Parallel nodes: everything else. */
    var parallelIds = allIds.filter(function (id) { return id !== sourceId && id !== sinkId; });

    var parallelNodesHtml = parallelIds
      .map(function (pid) {
        var outLabel = linkLabels[sourceId + '->' + pid] || '';
        var inLabel = linkLabels[pid + '->' + sinkId] || '';
        return (
          '<div class="gfx-fc__parallel-branch">' +
          arrowStep(outLabel) +
          nodeWrap(pid, nodeMap, 'gfx-fc__parallel-node') +
          arrowStep(inLabel) +
          '</div>'
        );
      })
      .join('');

    /* If no explicit parallel node links, show simple fan arrows without labels. */
    if (!parallelNodesHtml) {
      parallelNodesHtml = '<div class="gfx-fc__parallel-branch">' + arrowStep('') + '</div>';
    }

    return (
      '<div class="gfx-fc__parallel">' +
      '<div class="gfx-fc__parallel-source">' + nodeWrap(sourceId, nodeMap) + '</div>' +
      '<div class="gfx-fc__parallel-lanes">' + parallelNodesHtml + '</div>' +
      '<div class="gfx-fc__parallel-sink">' + nodeWrap(sinkId, nodeMap) + '</div>' +
      '</div>'
    );
  }

  /* ── loop ───────────────────────────────────────────────────────────────── */
  /* Topology: A→B→C→A — the forward chain is shown normally; the return arc
     is shown as a separate "back" row below with an arrow labelled "↩" or
     using the link label. */

  function buildLoop(nodes, links) {
    var nodeMap = buildNodeMap(nodes);
    var allIds = (nodes || []).map(function (n) { return n.id; });
    var linkArr = Array.isArray(links) ? links : [];
    var linkLabels = buildLinkLabels(linkArr);

    /* The back-link is the one whose target is the start (first node). */
    var startId = allIds[0];
    var backLink = linkArr.find(function (l) { return l && l.to === startId; });
    var backFromId = backLink ? backLink.from : allIds[allIds.length - 1];

    /* Forward chain: all nodes except the back-link-source→start edge. */
    var forwardIds = resolveLinearSequence(nodes, linkArr.filter(function (l) {
      return !(l && l.from === backFromId && l.to === startId);
    }));

    var forwardParts = [];
    forwardIds.forEach(function (id, i) {
      if (i > 0) {
        var prevId = forwardIds[i - 1];
        var lbl = linkLabels[prevId + '->' + id] || '';
        forwardParts.push(arrowStep(lbl));
      }
      forwardParts.push(nodeWrap(id, nodeMap));
    });

    var backLabel = backLink ? (backLink.label || '') : '';
    var backArrowHtml =
      '<div class="gfx-fc__loop-back">' +
      '<span class="gfx-fc__loop-back-label">' + G.escape(backLabel || '↩ repeat') + '</span>' +
      '<span class="gfx-arrow gfx-fc__loop-arrow" aria-hidden="true">←</span>' +
      '</div>';

    return (
      '<div class="gfx-fc__loop">' +
      '<div class="gfx-fc__loop-forward gfx-flow-row">' + forwardParts.join('') + '</div>' +
      backArrowHtml +
      '</div>'
    );
  }

  /* ── shared utility ─────────────────────────────────────────────────────── */

  function buildLinkLabels(links) {
    var map = {};
    (links || []).forEach(function (l) {
      if (l && l.from && l.to) {
        map[l.from + '->' + l.to] = l.label || '';
      }
    });
    return map;
  }

  /* ── main renderer ──────────────────────────────────────────────────────── */

  B.flowChart = function flowChart(block) {
    var topology = block.topology || 'linear';
    var nodes = Array.isArray(block.nodes) ? block.nodes : [];
    var links = Array.isArray(block.links) ? block.links : [];

    var innerHtml;
    if (topology === 'branching') {
      innerHtml = buildBranching(nodes, links);
    } else if (topology === 'parallel') {
      innerHtml = buildParallel(nodes, links);
    } else if (topology === 'loop') {
      innerHtml = buildLoop(nodes, links);
    } else {
      /* default: linear */
      innerHtml = buildLinear(nodes, links);
    }

    return (
      '<div class="gfx-root gfx-fc gfx-fc--' + G.escape(topology) + '" data-overflow-watch>' +
      innerHtml +
      '</div>'
    );
  };
})();
