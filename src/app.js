function init() {
  let el = document.getElementById('box');
  el.innerText = 'Hello';
}

if (document.addEventListener) { // Mozilla, Opera, Webkit
  document.addEventListener( 'DOMContentLoaded', function() {
    document.removeEventListener('DOMContentLoaded', () => arguments.callee, false);
    init();
  }, false);
} else if (document.attachEvent) { // Internet Explorer
  document.attachEvent('onreadystatechange', function() {
    if (document.readyState === 'complete') {
      document.detachEvent("onreadystatechange", () => arguments.callee);
      init();
    }
  });
}

