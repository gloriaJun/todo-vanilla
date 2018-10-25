const PLAYING = 'playing';

function playing(event) {
  const el = document.querySelector(`div[data-key='${event.keyCode}']`);
  if (!el) return;

  const elAudio = el.querySelector('audio');
  if (!elAudio) return;

  el.classList.add(PLAYING);
  elAudio.currentTime = 0;
  elAudio.play();
}

document.addEventListener('keydown', playing);
  // let { key } = ev;
  // let el = document.getElementById(keySounds[key.toLowerCase()]);
  // const oldClassName = el.className;
  //
  // el.className += ' playing';
  // setTimeout(function() {
  //   el.className = oldClassName;
  // }, 100);
  //
  // let audio = el.querySelector('audio');
  // audio.play();
