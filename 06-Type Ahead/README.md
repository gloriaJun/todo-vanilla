## Exercise 6: Ajax Type Ahead
- api로부터 데이터를 받아서 사용자가 입력한 문자에 일치하는 결과를 필터링하여 출력한다.

## Today I Learn
#### Fetch API
`Fetch API`는 네트워크로부터 리소스를 가져오기 위한 유틸리티 함수이다.
fetch() 함수는 URL 을 인자로 받고 응답을 처리하기 위한 promise 를 반환한다.
응답을 처리할 때 Response 객체를 이용할 수 있다.

```javascript
fetch('http://hanur.me/users')
.then(res => res.json())
.then(data => data.filter(item => item.isRequired));
```

- [fetch API](https://opentutorials.org/course/3281/20562)
- [Javascript Fetch API](https://medium.com/@kkak10/javascript-fetch-api-e26bfeaad9b6)

#### 천 단위 콤마찍기
```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
```
