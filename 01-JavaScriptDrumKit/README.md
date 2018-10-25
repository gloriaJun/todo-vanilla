## Exercise 1: JavaScript Drum Kit
- 화면에 출력된 알파벳을 누르면 해당 알파벳에 해당하는 사운드가 출력된다 

## Today I Learn ?
###### audio 재생하기
```html
<audio id="audio" src="public/sounds/boom.wav"></audio>
<script>
  const audio = document.querySelector('audio');
  // play 시작 지점을 설정 
  audio.currentTime = 0; 
  // 오디오를 재생
  audio.play();
</script>
```
[HTML5 Audio 태그 사용 예제보기](https://webisfree.com/2017-09-07/html5-audio-%ED%83%9C%EA%B7%B8-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C%EB%B3%B4%EA%B8%B0)

#### keycode 확인하기
키보드의 특정 키를 입력받아서 처리하는 경우에는 문자로 비교하기보다는 keyCode를 이용하여 비교한다.        
[http://keycode.info/](http://keycode.info/)에서 확인하고자 하는 키를 입력하면 해당 키에 대한 키코드 값을 확인할 수 있다.

#### HTML data-* Attributes
- `data-*` attributes는 페이지 또는 어플리케이션에서 사용자의 데이타를 저장하기 위해서 사용한다.      
[HTML data-* Attributes](https://www.w3schools.com/tags/att_global_data.asp)

#### css의 transition이 완료되면 transitionend 이벤트가 발생한다.
만약, 특정 엘리먼트에 대해 트랜지션 이벤트가 완료되면 어떠한 작업을 수행하고자 하면, 아래와 같이 이벤트를 등록하여 구현하면 된다.
```javascript
const el = document.querySelectorAll('.key');
el.addEventListener('transitionend', func);
```
[transitionend 이벤트](http://www.w3bai.com/ko/jsref/event_transitionend.html)
