## Exercise 21 - Geolocation
- 위치 정보를 받아와서 위치를 나침반을 이용하여 표시한다.
- Xcode의 simulator를 실행시켜서 테스트 해야한다.
- 브라우저 주소가 `https`로 시작해야한다.

## Today I Learn

#### navigator.geolocation 
- geolocation API를 아래와 같이 사용할 수 있다.
```javascript
navigator.geolocation.watchPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});
/**
* 37.785834 -122.406417
**/
```

- getCurrentPosition : 현재 사용자의 위치를 얻을 수 있다. 한 번만 위치를 확인한다.
- watchPosition : 위치 정보가 변경되는 경우에 여러 번 호출이 된다. 즉, 사용자의 위치를 연속적으로 모니터링 하는 경우에 사용

- https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation
- https://developers.google.com/web/fundamentals/native-hardware/user-location/?hl=ko
