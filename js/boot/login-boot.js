/* Login form handler. Lifted out of login.html's inline <script>
   so script-src can drop 'unsafe-inline'.

   The credential check is intentionally client-side and demo-only —
   /login is a placeholder until a real auth backend lands. The
   localStorage flag is read by js/auth-check.js on every protected
   page. Do not pretend this is real auth; it is not. */
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var u = document.getElementById('username').value.trim();
  var p = document.getElementById('password').value;
  if (u === 'econos' && p === 'demo2024') {
    localStorage.setItem('econosAuth', '1');
    window.location.href = '/';
  } else {
    document.getElementById('error-msg').textContent = 'Incorrect username or password.';
  }
});
