const appModel = (function () {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  let cities = [];

  return {
    loadData: () => {
      fetch(endpoint)
        .then(res => res.json())
        .then(data => cities.push(...data));
    },
    filter: (query) => {
      const re = new RegExp(query, 'i');
      return cities.filter(obj => re.test(obj.city) || re.test(obj.state));
    },
  }
})();

const appView = (function () {
  const el = document.querySelector('ul.suggestions');

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return {
    render(query, list) {
      // 위의 코드를 아래와 같이 수정 가능
      let html = list.map(item => {
        const re = new RegExp(query, 'gi');
        const city = item.city.replace(re, `<span class="hl">${query}</span>`);
        const state = item.state.replace(re, `<span class="hl">${query}</span>`);
        return `
          <li>
            <span class="name">${city}, ${state}</span>
            <span class="population">${numberWithCommas(item.population)}</span>
          </li>`;
        }).join('');
      el.innerHTML = html;
    },
  }
})();

const appController = (function () {
  return {
    init() {
      // load data from api
      appModel.loadData();

      // add event
      const input = document.querySelector('input.search');
      input.addEventListener('change', this.search);
      input.addEventListener('keyup', this.search);
    },
    search() {
      const { value: query } = this;
      appView.render(query, appModel.filter(query));
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
