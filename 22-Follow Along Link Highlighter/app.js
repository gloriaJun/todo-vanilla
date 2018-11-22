const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  let highlight;

  return {
    render() {
      highlight = document.createElement('span');
      highlight.classList.add('highlight');
      document.body.append(highlight);
    },
    highlightLink(e) {
      const linkCoords = this.getBoundingClientRect();
      console.log(this, linkCoords);

      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
      };

      highlight.style.cssText = `
        width: ${coords.width}px;
        height: ${coords.height}px;
        transform: translate(${coords.left}px, ${coords.top}px)
      `;
    },
  }
})();

const appController = (function () {
  // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
  const links = document.querySelectorAll('a[href]');

  return {
    init() {
      appView.render();

      links.forEach(link => link.addEventListener('mouseenter', appView.highlightLink));
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
