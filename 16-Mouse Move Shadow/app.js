const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 500; // 100px;

  const calcDestination = (a, b) => {
    return  (a / b * walk) - (walk / 2);
  };

  return {
    mouseMove(e) {
      const {
        offsetWidth: width,
        offsetHeight: height,
      } = hero;
      let {
        offsetX: x,
        offsetY: y,
        target,
      } = e;

      // 마우스가 text 위에 위치하는 경우
      if (this !== target) {
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
      }

      const xWalk = calcDestination(x, width);
      const yWalk = calcDestination(y, height);

      text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, .7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, .7),
        ${yWalk}px ${xWalk}px 0 rgba(0, 255, 0, .7),
        ${yWalk * -1 }px ${xWalk}px 0 rgba(0, 0, 255, .7)
      `;
    },
  }
})();

const appController = (function () {
  const hero = document.querySelector('.hero');

  return {
    init() {
      hero.addEventListener('mousemove', appView.mouseMove)
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
