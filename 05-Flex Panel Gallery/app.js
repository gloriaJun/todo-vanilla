const appView = (function () {
  return {
    toggleOpen() {
      this.classList.toggle('open');
    },
    toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    },
  }
})();

const appController = (function () {
  return {
    init() {
      const panels = document.querySelectorAll('.panel');
      panels.forEach(panel => {
        panel.addEventListener('click', appView.toggleOpen);
        panel.addEventListener('transitionend', appView.toggleActive);
      });
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
