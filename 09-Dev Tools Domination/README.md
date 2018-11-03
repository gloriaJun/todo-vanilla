## Exercise 9: Dev Tools Domination
- 개발자 도구를 이용해서 디버깅하기

## Today I Learn
#### console.assert
앞의 주어진 조건문을 수행하여 true가 리턴되지 않으면 assert가 발생한다.
```javascript
console.assert(1 !== 1, 'It\' wrong from test');
/*
Assertion failed: It' wrong from test
(anonymous) @ app.js:31
*/
```

#### console.dir
아규먼트로 주어진 엘리먼트에 대한 정보를 출력한다.
```javascript
const p = document.querySelector('p');
console.dir(p);
```

#### console.group
`console.group()`과 `console.groupEnd()` 사이에 수행한 내용을 grouping 하여 콘솔에 출력한다.
```javascript
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
})
/*
Snickers
 This is Snickers
 Snickers is 2 years old
hugo
  This is hugo
  Snickers is 8 years old
*/
```

#### console.count
아규먼트로 전달된 내용을 카운팅한다.
```javascript
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
/*
Wes: 1
Wes: 2
Steve: 1
Wes: 3
Wes: 4
Steve: 2
*/
```

#### console.time
수행 시간을 측정한다.
```javascript
console.time('fetching data');
// doing something
console.timeEnd('fetching data');
/*
fetching data: 0.008056640625ms
*/
```
