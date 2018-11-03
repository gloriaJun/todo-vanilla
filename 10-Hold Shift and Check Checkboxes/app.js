const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const checkboxes = document.querySelectorAll('.item > input[type=checkbox]');
  let lastChecked;

  return {
    checked(event) {
      let inBetween = false;
      // check if they had the shift key
      const { checked } = this;
      if (!!lastChecked && event.shiftKey && checked) {
        // loop
        checkboxes.forEach(checkbox => {
          if (checkbox === this || lastChecked === checkbox) {
            inBetween = !inBetween;
          }

          if (inBetween) {
            checkbox.checked = checked;
          }
        })
      }

      lastChecked = this;
    },
  }
})();

const appController = (function () {
  return {
    init() {
      const checkboxes = document.querySelectorAll('.inbox > .item > input[type=checkbox]');
      checkboxes.forEach(check => check.addEventListener('click', appView.checked))
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
