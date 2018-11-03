const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// clearing
console.clear();

// Regular
console.log('hello');

// Interpolated
console.log('hello I am %s string!!', 'aaa');

// Styled
console.log('%c I am some great ext', 'color: white;font-size: 20px; background:blue;');

// warning!
console.warn('It\'s warning');

// Error :|
console.error('It\'s error');

// Info
console.info('It\'s info');

// Testing
console.assert(1 !== 1, 'It\' wrong from test');

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');


// timing
console.time('fetching data');
// doing something
console.timeEnd('fetching data');

console.table(dogs);
