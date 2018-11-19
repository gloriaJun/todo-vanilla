const appModel = (function () {
  const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
  ];
  const strip = (name) => {
    return name.replace(/^(a|an|the)\s/i, '').trim();
  };

  return {
    getBands() {
      return bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
    },
  }
})();

const appView = (function () {
  const bands = document.querySelector('#bands');

  return {
    render() {
      const list = appModel.getBands();
      bands.innerHTML = list.map(name => `<li>${name}</li>`).join('');
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
