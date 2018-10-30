const appModel = (function () {
  return {
    dogs: [
      {name: 'Snickers', age: 2},
      {name: 'hugo', age: 8}
    ],
  }
})();

const appView = (function () {
  return {
    makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
  }
})();

const appController = (function () {
  return {
    init() {
      document.getElementById('keyword').addEventListener('click', appView.makeGreen);

      // Regular

      // Interpolated

      // Styled

      // warning!

      // Error :|

      // Info

      // Testing

      // clearing

      // Viewing DOM Elements

      // Grouping together

      // counting

      // timing

    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
