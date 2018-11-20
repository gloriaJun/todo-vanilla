const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const words = document.querySelector('.words');
  let p;

  function createParagraph() {
    let p = document.createElement('p');
    words.appendChild(p);
    return p;
  }

  return {
    render() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;
      // recognition.lang = 'en-US';

      p = createParagraph();

      recognition.addEventListener('result', this.getResult);
      // if end, restart
      recognition.addEventListener('end', recognition.start);

      recognition.start();
    },
    getResult(e) {
      // get result of recognition
      const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      p.textContent = transcript;
      if (e.results[0].isFinal) {
        p = createParagraph();
      }
    },
  }
})();

const appController = (function () {
  return {
    init() {
      appView.render();
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
