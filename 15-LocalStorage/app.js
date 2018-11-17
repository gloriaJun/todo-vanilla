const appModel = (function () {
  const KEY = 'items';
  let items = [];

  return {
    addItem(item) {
      items.push(item);
      this.setItemsToStorage(items);
      return items;
    },
    setItemDone(index, done) {
      items[index].done = done;
      this.setItemsToStorage(items);
    },
    setItemsToStorage(items) {
      localStorage.setItem(KEY, JSON.stringify(items));
    },
    loadItems() {
      items = JSON.parse(window.localStorage.getItem(KEY));
      return items;
    },
  }
})();

const appView = (function () {
  const itemsList = document.querySelector('.plates');

  return {
    init() {
      const items = appModel.loadItems();
      this.renderList(items, itemsList);
    },
    addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]')).value;
      const items = appModel.addItem({
        text,
        done: false,
      });
      appView.renderList(items, itemsList);
      this.reset();
    },
    renderList(plates = [], platesList) {
      platesList.innerHTML = plates.map((plate, i) => {
        return `
         <li>
          <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
          <label for="item${i}">${plate.text}</label>
        </li>
        `
      }).join('');
    },
    checkedItem(e) {
      if (!e.target.matches('input')) return;
      const { target: checkbox } = e;
      appModel.setItemDone(checkbox.dataset.index, checkbox.checked);
    },
  }
})();

const appController = (function () {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');

  return {
    init() {
      appView.init();
      addItems.addEventListener('submit', appView.addItem);
      itemsList.addEventListener('click', appView.checkedItem);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
