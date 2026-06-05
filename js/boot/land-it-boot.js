/* Land It boot – single LandRouter.start() call, lifted out of
   land.html's inline <script> for tighter CSP. */
document.addEventListener('DOMContentLoaded', function () {
  LandRouter.start();
});
