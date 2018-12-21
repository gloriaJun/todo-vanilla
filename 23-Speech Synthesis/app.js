const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const textarea = document.querySelector('textarea[name="text"]');
  const msg = new SpeechSynthesisUtterance(textarea.value);
  const synth = speechSynthesis;
  let voices = [];

  return {
    drawVoiceListComboBox() {
      voices = synth.getVoices().filter(voice => voice.lang.includes('en-'));

      const voicesDropdown = document.querySelector('[name="voice"]');
      let fragment = document.createDocumentFragment();
      voices.forEach(voice => {
        let option = document.createElement('option');
        const {lang, name} = voice;

        option.innerText = `${name}(${lang})`;
        option.value = name;

        fragment.appendChild(option);
      });
      voicesDropdown.appendChild(fragment);
    },
    selectVoice() {
      const selected = this.value;
      msg.voice = voices.find(voice => voice.name === selected);
      appView.speakVoice();
    },
    setOptions() {
      msg[this.name] = this.value;
      appView.speakVoice();
    },
    speakVoice() {
      synth.speak(msg);
    },
    stopVoice() {
      synth.cancel();
    },
  }
})();

const appController = (function () {
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  return {
    init() {
      speechSynthesis.addEventListener('voiceschanged', appView.drawVoiceListComboBox);
      voicesDropdown.addEventListener('change', appView.selectVoice);
      options.forEach(option => option.addEventListener('change', appView.setOptions));
      speakButton.addEventListener('click', appView.speakVoice);
      stopButton.addEventListener('click', appView.stopVoice);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
