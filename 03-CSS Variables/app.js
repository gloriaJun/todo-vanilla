const hl = document.querySelector('h2 > span.hl');
const space = document.getElementById('spacing');
const spaceSizing = space.getAttribute('data-sizing');
const blur = document.getElementById('blur');
const blurSizing = blur.getAttribute('data-sizing');
const color = document.getElementById('base');
const image = document.querySelector('img');

function init() {
  const hex = color.value;
  hl.style.color = hex;
  image.style.cssText = `
    border: ${space.value}${spaceSizing} solid ${hex};
    filter: blur(${blur.value}${blurSizing});
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  init();

  // add event
  space.addEventListener('change', (e) => {
    image.style.border = `${e.target.value}${spaceSizing} solid ${color.value}`;
  });
  blur.addEventListener('change', (e) => {
    image.style.filter = `blur(${e.target.value}${blurSizing})`;
  });
  color.addEventListener('change', (e) => {
    const hex = e.target.value;
    hl.style.color = hex;
    image.style.borderColor = hex;
  });
});
