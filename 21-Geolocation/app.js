const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');

  return {
    render() {
      navigator.geolocation.watchPosition((position) => {
        const { coords } = position;
        console.log(coords, coords.latitude, coords.longitude, coords.speed, coords.heading);
        speed.textContent = coords.speed;
        arrow.style.transform = `rotate(${coords.heading}deg)`;
      }, (error) => {
        console.log(error);
      });
    },
  }
})();

const appController = (function () {
  return {
    init() {
      appView.render();
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
