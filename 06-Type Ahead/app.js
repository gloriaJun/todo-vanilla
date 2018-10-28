const appModel = (function () {
  return {
    endpoint: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    data() {
    },
  }
})();

const appView = (function () {
  return {
  }
})();

const appController = (function () {
  return {
    init() {
      console.log(appModel.endpoint);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
