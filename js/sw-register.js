/* Service worker registration. Lifted out of every shell's inline
   <script> block so script-src can drop 'unsafe-inline' on the
   shells that ship a tighter CSP. */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
