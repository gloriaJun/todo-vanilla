const appModel = (function () {
  return {
    inventors: [
      {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
      {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
      {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
      {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
      {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
      {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
      {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
      {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
      {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
      {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
      {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
      {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
    ],
    people: [
      'Beck, Glenn',
      'Becker, Carl',
      'Beckett, Samuel',
      'Beddoes, Mick',
      'Beecher, Henry',
      'Beethoven, Ludwig',
      'Begin, Menachem',
      'Belloc, Hilaire',
      'Bellow, Saul',
      'Benchley, Robert',
      'Benenson, Peter',
      'Ben-Gurion, David',
      'Benjamin, Walter',
      'Benn, Tony',
      'Bennington, Chester',
      'Benson, Leana',
      'Bent, Silas',
      'Bentsen, Lloyd',
      'Berger, Ric',
      'Bergman, Ingmar',
      'Berio, Luciano',
      'Berle, Milton',
      'Berlin, Irving',
      'Berne, Eric',
      'Bernhard, Sandra',
      'Berra, Yogi',
      'Berry, Halle',
      'Berry, Wendell',
      'Bethea, Erin',
      'Bevan, Aneurin',
      'Bevel, Ken',
      'Biden, Joseph',
      'Bierce, Ambrose',
      'Biko, Steve',
      'Billings, Josh',
      'Biondo, Frank',
      'Birrell, Augustine',
      'Black, Elk',
      'Blair, Robert',
      'Blair, Tony',
      'Blake, William',
    ],
    data: [
      'car',
      'car',
      'truck',
      'truck',
      'bike',
      'walk',
      'car',
      'van',
      'bike',
      'walk',
      'car',
      'van',
      'car',
      'truck'
    ],
  };
})();

const appView = (function () {
  return {
    render() {
    },
    filter(list) {
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      return list.filter(obj => obj.year > 1500 && obj.year < 1600);
    },
    map(list) {
      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      return list.map(obj => `${obj.first} ${obj.last}`)
    },
    sortByYear(list) {
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      return list.sort((obj1, obj2) => obj1.year - obj2.year);
    },
    reduce(list) {
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      return list.reduce((sum, obj) => {
        return sum + (obj.passed - obj.year);
      }, 0);
    },
    sortByLived(list) {
      // 5. Sort the inventors by years lived
      return list.sort((obj1, obj2) =>
          (obj2.passed - obj2.year) - (obj1.passed - obj1.year));
    },
    sortPeople(list) {
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      return list.sort((v1, v2) =>
          v1.split(',')[1] - v2.split(',')[1]);
    },
    reduceCar(list) {
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      return list.reduce((result, key) => {
        result[key] = result.hasOwnProperty(key) ? ++result[key] : 1;
        return result;
      }, {});
    },
  }
})();

const appController = (function () {
  return {
    init() {
      const {
        inventors,
        people,
        data,
      } = appModel;

      console.log(appView.filter(inventors));
      console.log(appView.map(inventors));
      console.log(appView.sortByYear(inventors));
      console.log(appView.reduce(inventors));
      console.log(appView.sortByLived(inventors));

      console.log(appView.sortPeople(people));

      console.log(appView.reduceCar(data));
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});

