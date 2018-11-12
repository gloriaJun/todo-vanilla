const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const pressed = [];
  const secretCode = 'wesbos';
  const secretCodeLength = secretCode.length;

  return {
    keyUp(e) {
      pressed.push(e.key);
      pressed.splice(-secretCodeLength- 1, pressed.length - secretCodeLength);

      if(pressed.join('').includes(secretCode)) {
        console.log('Ding Ding!!!');
        cornify_add();
      }
      console.log(pressed);
    },
  }
})();

const appController = (function () {
  return {
    init() {
      document.addEventListener('keyup', appView.keyUp)
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
