(function () {
  'use strict';

  window.ECONOS_BLOCKS_DEMO_CARD = {
    id: 'blocks-demo',
    title: 'Composition-as-data demo',
    lede: 'A Phase 0 fixture card composed from starter blocks.',
    blocks: [
      { type: 'sectionHeader', icon: '1', label: 'Decompose the diagram' },
      {
        type: 'calloutStrip',
        tone: 'blue',
        icon: 'i',
        text: 'This fixture is intentionally not registered as a topic; it exists for local renderer checks only.',
      },
      {
        type: 'heroVisual',
        svgKey: 'fiscalDragChart',
        height: 230,
        caption: 'Hero visuals resolve through window.ECONOS_ICONS.',
      },
      {
        type: 'grid',
        cols: 3,
        gap: '12px',
        children: [
          {
            type: 'tile',
            tone: 'green',
            icon: '+',
            head: 'Consumption',
            body: 'Household spending rises and shifts aggregate demand to the right.',
          },
          {
            type: 'tile',
            tone: 'amber',
            icon: '!',
            head: 'Capacity check',
            body: 'If the economy is near full capacity, demand growth is more inflationary.',
          },
          {
            type: 'tile',
            tone: 'purple',
            icon: '*',
            head: 'Evaluation',
            body: 'The multiplier depends on leakages, confidence, and spare capacity.',
          },
        ],
      },
      {
        type: 'bigIdea',
        text: 'Composition-as-data lets later diagrams plug into the same card chrome without duplicating render paths.',
      },
      {
        type: 'examEdge',
        title: 'Exam edge',
        text: 'Connect each block to a diagram shift, then judge whether the final effect is mainly real output or inflation.',
      },
      {
        type: 'warning',
        text: 'This fixture must remain outside js/topics.js so it never appears as a real student topic.',
      },
    ],
  };
})();
