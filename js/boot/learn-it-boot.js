/* Learn It boot – loads the topic's learn-it.js (the rich card
   data file that publishes window.ECONOS_TOPIC) then /js/app.js,
   the IIFE that renders into #app-root. Lifted out of learn-it.html's
   inline <script> so the CSP can drop script-src 'unsafe-inline'. */
document.addEventListener('DOMContentLoaded', function () {
  TopicLoader.loadDataThenScript('learn-it.js', '/js/app.js', 'Learn It');
});
