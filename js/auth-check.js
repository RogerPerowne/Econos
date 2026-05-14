(function () {
  if (localStorage.getItem('econosAuth') !== '1') {
    window.location.replace('login.html');
  }
})();
