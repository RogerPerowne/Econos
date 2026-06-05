/* Link It boot – single LinkRouter.start() call, lifted out of
   link.html's inline <script> for tighter CSP. */
document.addEventListener('DOMContentLoaded', function () {
  LinkRouter.start();
});
