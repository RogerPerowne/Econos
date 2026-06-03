/* Service worker registration. Lifted out of every shell's inline
   <script> block so script-src can drop 'unsafe-inline' on the
   shells that ship a tighter CSP. */
if ('serviceWorker' in navigator) {
  // updateViaCache:'none' forces the browser to revalidate /sw.js against
  // the origin on every update check, instead of trusting GitHub Pages'
  // max-age=600 HTTP cache on the worker script itself. Without it a
  // CACHE_NAME bump (or the migration off an old cache-first worker) can
  // sit stuck behind the HTTP cache. Must match index.html's registration.
  navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' });
}
