const appView = (function () {
  return {
    changeStyle() {
      const {
        name,
        value,
        dataset,
      } = this;
      document.documentElement.style.setProperty(`--${name}`, `${value}${dataset.sizing || ''}`);
    },
  }
})();

const appController = (function () {
  return {
    init() {
      // add event
      const inputs = document.querySelectorAll('div.controls > input');
      console.log(inputs);
      inputs.forEach(input => input.addEventListener('change', appView.changeStyle));
      // inputs.forEach(input => input.addEventListener('mousemove', appView.changeStyle));
    }
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
