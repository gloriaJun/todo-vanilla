
const HOUR_DEG = 360/12;
const MIN_DEG = 360/(10 * 12);

function setHour(el, value) {
  const deg = (HOUR_DEG * value) + 90;
  const hour = el.querySelector('div.hour-hand');
  hour.style.cssText = ` transform: rotate(${deg}deg); transform-origin: 100% 0 0;`;
}

function setMin(el, value) {
  const deg = (MIN_DEG * value) + 90;
  const min = el.querySelector('div.min-hand');
  min.style.cssText = ` transform: rotate(${deg}deg); transform-origin: 100% 0 0;`;
}

function setSecond(el, value) {
  const deg = (MIN_DEG * value) + 90;
  const min = el.querySelector('div.second-hand');
  min.style.cssText = ` transform: rotate(${deg}deg); transform-origin: 100% 0 0;`;
}

document.addEventListener('DOMContentLoaded', () => {
  const clock = document.querySelector('div.clock-face');

  setInterval(function() {
    // get current time
    const date = new Date();
    // set hour
    const hour = date.getHours();
    setHour(clock, (hour > 12 ? hour - 12 : hour));
    setMin(clock, date.getMinutes());
    setSecond(clock, date.getSeconds());
  }, 1000);
});
