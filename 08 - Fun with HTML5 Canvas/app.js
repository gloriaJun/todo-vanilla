const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const canvas = document.getElementById('draw');
  const ctx = canvas.getContext('2d');

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;

  return {
    draw(e) {
      if (!isDrawing) return;

      const {
        offsetX,
        offsetY
      } = e;

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      // start from
      ctx.moveTo(lastX, lastY);
      // start to
      ctx.lineTo(offsetX, offsetY);
      // change line width
      ctx.stroke();

      [lastX, lastY] = [offsetX, offsetY];

      // set hue for hsl
      hue++;
      if (hue >= 360) {
        hue = 0;
      }

      // set line width
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      ctx.lineWidth = direction ? ++ctx.lineWidth : --ctx.lineWidth;
    },
    drawStart(e) {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    },
    drawStop() {
      isDrawing = false;
    },
  }
})();

const appController = (function () {
  return {
    init() {
      const canvas = document.getElementById('draw');
      canvas.addEventListener('mousemove', appView.draw);
      canvas.addEventListener('mousedown', appView.drawStart);
      canvas.addEventListener('mouseup', appView.drawStop);
      canvas.addEventListener('mouseout', appView.drawStop);

    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
