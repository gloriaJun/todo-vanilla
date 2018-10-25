const keySounds = Object.freeze({
  a: 'clap',
  s: 'hihat',
  d: 'kick',
  f: 'openhat',
  g: 'boom',
  h: 'ride',
  j: 'snare',
  k: 'tom',
  l: 'tink',
});

document.addEventListener('keypress', function(ev) {
  let { key } = ev;
  let el = document.getElementById(keySounds[key.toLowerCase()]);
  const oldClassName = el.className;

  el.className += ' playing';
  setTimeout(function() {
    el.className = oldClassName;
  }, 100);

  let audio = el.querySelector('audio');
  audio.play();
});
