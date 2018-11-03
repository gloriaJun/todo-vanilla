const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const checkboxs = document.querySelectorAll('.item > input[type=checkbox]');

  return {
    checked(event) {
      console.log(event.shiftKey, this);
    },
  }
})();

const appController = (function () {
  return {
    init() {
      const checkboxs = document.querySelectorAll('.item > input[type=checkbox]');
      checkboxs.forEach(check => check.addEventListener('click', appView.checked))
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
