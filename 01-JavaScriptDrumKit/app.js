const appModel = (function () {
  return {
    data: [
      { key: 65, keyText: 'A', soundText: 'CLAP' },
      { key: 83, keyText: 'S', soundText: 'HIHAT' },
      { key: 68, keyText: 'D', soundText: 'KICK' },
      { key: 70, keyText: 'F', soundText: 'OPENHAT' },
      { key: 71, keyText: 'G', soundText: 'BOOM' },
      { key: 72, keyText: 'H', soundText: 'RIDE' },
      { key: 74, keyText: 'J', soundText: 'SNARE' },
      { key: 75, keyText: 'K', soundText: 'TOM' },
      { key: 76, keyText: 'L', soundText: 'TINK' },
    ],
  }
})();

const appView = (function () {
  const PLAYING = 'playing';
  return {
    render(list) {
      const html = [];
      list.forEach(obj => {
        const soundText = obj.soundText;
        let str = `
        <div data-key="${obj.key}" class="key">
            <h2>${obj.keyText}</h2>
            <span>${soundText}</span>
            <audio src="public/sounds/${soundText.toLowerCase()}.wav"></audio>
        </div>
      `;
        html.push(str);
      });

      const el = document.getElementById('keys');
      el.innerHTML = html.join('\n');
    },
    playSound(event) {
      const el = document.querySelector(`div[data-key='${event.keyCode}']`);
      if (!el) return;

      const audio = el.querySelector('audio');
      if (!audio) return;

      el.classList.add(PLAYING);
      audio.currentTime = 0;
      audio.play();
    },
    removeClass(event) {
      if (event.propertyName !== 'transform') return;
      // 해당 이벤트가 발생한 엘리먼트가 this에 담겨져있다.
      this.classList.remove(PLAYING);
    },
  }
})();

const appController = (function () {
  return {
    init() {
      this.renderView();

      // add event
      const keys = document.querySelectorAll('.key');
      keys.forEach(key => key.addEventListener('transitionend', appView.removeClass));
      document.addEventListener('keydown', appView.playSound);
    },
    renderView() {
      appView.render(appModel.data);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
