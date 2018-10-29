const appModel = (function () {
  return {
    people: [
      {name: 'Wes', year: 1988},
      {name: 'Kait', year: 1986},
      {name: 'Irv', year: 1970},
      {name: 'Lux', year: 2015},
    ],

    comments: [
      {text: 'Love this!', id: 523423},
      {text: 'Super good', id: 823423},
      {text: 'You are the best', id: 2039842},
      {text: 'Ramen is my fav food ever', id: 123523},
      {text: 'Nice Nice Nice!', id: 542328},
    ],
  };
})();

const appView = (function () {
  return {
  }
})();

const appController = (function () {
  return {
    init() {
      const {
        people,
        comments,
      } = appModel;

      const date = new Date();
      const year = date.getFullYear();
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      console.log(people.some(obj => year - obj.year >= 19));
      // Array.prototype.every() // is everyone 19 or older?
      console.log(people.every(obj => year - obj.year >= 19));

      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      console.log(comments.find(obj => obj.id === 823423));

      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      console.log(comments.findIndex(obj => obj.id === 823423));
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});

