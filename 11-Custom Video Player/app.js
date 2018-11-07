const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipBtns = player.querySelectorAll('button[data-skip]');

const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  return {
    togglePlay() {
      video.paused ? video.play() : video.pause();
    },
    updateButton() {
      toggle.textContent= this.paused ? '►' : '❚ ❚';
    },
    skip() {
      const { dataset: { skip }} = this;
      video.currentTime += parseFloat(skip);
    },
    range() {
      video[this.name] = this.value;
    },
    progress() {
      const progressBar = player.querySelector('.progress__filled');
      progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
    },
    scrub(e) {
      video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
    },
  }
})();

const appController = (function () {
  return {
    init() {
      video.addEventListener('click', appView.togglePlay);
      video.addEventListener('play', appView.updateButton);
      video.addEventListener('pause', appView.updateButton);
      video.addEventListener('timeupdate', appView.progress);

      toggle.addEventListener('click', appView.togglePlay);

      skipBtns.forEach(btn => btn.addEventListener('click', appView.skip));
      ranges.forEach(range => range.addEventListener('change', appView.range));
      ranges.forEach(range => range.addEventListener('mouseover', appView.range));

      let mousedown = false;
      progress.addEventListener('click', appView.scrub);
      progress.addEventListener('mousemove', (e) => mousedown && appView.scrub(e));
      progress.addEventListener('mouseup', () => mousedown = false);
      progress.addEventListener('mousedown', () => mousedown = true);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
