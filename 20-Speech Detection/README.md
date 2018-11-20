## Exercise 20-Speech Detection

## Today I Learn

#### contenteditable
- `contenteditable` 속성을 설정하면 해당 요소의 컨텐츠를 사용자가 편집할 수 있다.
- https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable
- http://webdir.tistory.com/324


#### SpeechRecognition
- 브라우저의에서의 음성인식을 위한 API 이다
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

###### `interimResults` 속성은 중간 결과를 반환할 지에 대한 여부를 설정한다. 기본 값은 false 이다.     
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
```

###### `lang` 속성을 이용하여 언어를 설정할 수 있다. 별도로 설정하지 않으면 시스템의 설정된 언어 설정을 따라간다.
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
```

###### 음성 인식 결과를 출력하기
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
// recognition.lang = 'en-US';


recognition.addEventListener('result', e => {
  console.log(e.results[0][0].transcript);
});

recognition.start();
```


