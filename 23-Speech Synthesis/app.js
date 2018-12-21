const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const msg = new SpeechSynthesisUtterance();
  const pitch = document.querySelector('input[name="pitch"]');
  const rate = document.querySelector('input[name="rate"]');
  const textarea = document.querySelector('textarea[name="text"]');
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
    speakVoice() {
      msg.pitch = pitch.value;
      msg.rate = rate.value;
      msg.text = textarea.value;
      synth.speak(msg);
    },
    stopVoice() {
      // synth
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
      speakButton.addEventListener('click', appView.speakVoice);
      stopButton.addEventListener('click', appView.stopVoice);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
