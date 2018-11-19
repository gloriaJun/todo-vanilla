const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const timeNodes = [...document.querySelectorAll('[data-time]')];
  // const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

  return {
    render() {
      const totalSeconds = timeNodes.reduce((total, node) => {
        const { dataset: { time }} = node;
        const [mins, secs] = time.split(':').map(parseFloat);
        return total + (mins * 60) + secs;
      }, 0);
      // const seconds = timeNodes
      //   .map(node => node.dataset.time)
      //   .map(record => {
      //     const [mins, secs] = record.split(':').map(parseFloat);
      //     return (mins * 60) + secs;
      //   })
      //   .reduce((total, seconds) => total + seconds);
      const hours = Math.floor(totalSeconds / 3600);
      let seconds = totalSeconds % 3600;

      const mins = Math.floor(seconds / 60);
      seconds = seconds % 60;
      console.log(hours, mins, seconds);
      console.log(`${hours}:${mins}:${seconds}`);
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
