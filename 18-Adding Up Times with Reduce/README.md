## Exercise 18 - Adding Up Times with Reduce

## Today I Learn
#### Array 변환
querySelectorAll로 가져온 경우에 prototype에 `map, reduce ...`와 같은 Array 내장함수가 포함되어 있지 않다.
해당 내장함수를 사용하려면 아래와 같이 변환하여 사용하면 된다. 
```javascript
  const timeNodes = [...document.querySelectorAll('[data-time]')];
  // const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```

