/* Learn It boot — loads the topic data file then app.js, which is
   the IIFE that reads window.ECONOS_TOPIC and renders into
   #app-root. Lifted out of learn.html's inline <script> so the
   CSP can drop script-src 'unsafe-inline'. */
document.addEventListener('DOMContentLoaded', function () {
  TopicLoader.loadDataThenScript('topic.js', '/js/app.js', 'Learn It');
});
