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

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  // 해당 이벤트가 발생한 엘리먼트가 this에 담겨져있다.
  this.classList.remove(PLAYING);
}

/**
 * add event
 */
const elKeys = document.querySelectorAll('.key');
elKeys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playing);
