const appModel = (function () {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  return {
    data: (query) => {
      const re = new RegExp(query, 'i');
      return fetch(endpoint)
        .then(res => res.json())
        .then(data => data.filter(obj => re.test(obj.city) || re.test(obj.state)));
    },
  }
})();

const appView = (function () {
  const el = document.querySelector('ul.suggestions');

  return {
    render(query, list) {
      let html = [];
      list.forEach(item => {
        html.push(`<li>
          ${item.city}, ${item.state}
          <span class="population">${item.population}</span>
        </li>`)
      });
      el.innerHTML = html.join('');
    },
  }
})();

const appController = (function () {
  return {
    init() {
      document.querySelector('input.search')
        .addEventListener('input', this.search);
    },
    search() {
      const { value: query } = this;
      appModel.data(query).then(data => appView.render(query, data));
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
