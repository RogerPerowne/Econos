(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);

  if (params.get('screenshot') === '1') {
    document.body.classList.add('screenshot-mode');
  } else if (params.get('preview') === 'center-panel') {
    document.body.classList.add('preview-center');
  }
}());
