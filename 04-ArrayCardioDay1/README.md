## Exercise 4: Array Cardio Day 1
- Array 프로토타입 함수를 이용해서 리스트에서 원하는 결과 추출하기.

## Today I Learn
#### console.table()
`console.table()`을 사용하면 결과를 table 형태로 콘솔창에 출력해준다.

#### Array.sort()
###### 오름차순
```javascript
let arr = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
];

// 숫자 정렬
arr.sort((a, b) => {
  return a.age - b.age;
});

// object 정렬
arr.sort((a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});
```

###### 내림차순
```javascript
let arr = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
];

// 숫자 정렬
arr.sort((a, b) => {
  return b.age - a.age;
});

// object 정렬
arr.sort((a, b) => {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
});
```

#### split
문자열을 split해서 아래와 같이 split된 값을 변수에 담을 수 있다.
```javascript
const str = 'Blair, Tony';
const [first, last] = str.split(', ');
```
