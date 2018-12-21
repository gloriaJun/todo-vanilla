const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const msg = new SpeechSynthesisUtterance();
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const synth = speechSynthesis;
  let voices = [];

  return {
    render() {
      // this.drawVoiceListComboBox();
    },
    drawVoiceListComboBox() {
      voices = synth.getVoices().filter(voice => voice.lang === 'en-US');
      const voicesDropdown = document.querySelector('[name="voice"]');

      let fragment = document.createDocumentFragment();
      voices.forEach(voice => {
        console.log(voice);
        let option = document.createElement('option');
        const {lang, name} = voice;

        option.innerText = `${name}(${lang})`;
        option.setAttribute('data-lang', lang);
        option.setAttribute('data-name', name);

        fragment.appendChild(option);
      });
      voicesDropdown.appendChild(fragment);
    },
    selectVoice(event) {
      const selected = event.target.selectedOptions[0].getAttribute('data-name');

      msg.voice = voices.filter(voice => voice.name === selected)[0];

      appView.speakVoice();
    },
    speakVoice() {
      msg.pitch = options[0].value;
      msg.rate = options[1].value;
      msg.text = options[2].value;
      synth.speak(msg);
    },
    stopVoice() {
      // synth
    },
  }
})();

const appController = (function () {
  const voicesDropdown = document.querySelector('[name="voice"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  return {
    init() {
      appView.render();

      speechSynthesis.onvoiceschanged = appView.drawVoiceListComboBox;

      voicesDropdown.addEventListener('change', appView.selectVoice);
      speakButton.addEventListener('click', appView.speakVoice);
      stopButton.addEventListener('click', appView.stopVoice);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
