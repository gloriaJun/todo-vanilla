## Exercise 3: CSS Variables
- 이미지에 포토샵과 같은 효과를 주는 CSS 스타일을 적용하기

## Today I Learn
#### dataset
```html
<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
```
위와 같이 정의된 경우 `data-*`로 정의된 값은 아래의 변수에 저장되어 있다.
```javascirpt
document.getElementById('blur').dataset
// DOMStringMap {sizing: "px"}
```

#### CSS Variables
[CSS Variables](https://www.w3schools.com/css/css3_variables.asp)
custom 속성 값을 `var(custom-name, value)`를 이용하여 정의할 수 있다.
```
:root {
    --spacing: 10px;
    --blur: 10px;
    --color: #ffc600;
}

img {
    border: var(--spacing) solid var(--color);
    filter: blur(var(--blur));
}
h2 > .hl {
    color: var(--color);
}
```

해당 설정된 CSS Variables 값을 자바스크립트에서는 아래와 같이 수정할 수 있다.
```javascript
document.documentElement.style.setProperty('--spacing', '20px');
```

위와 같이 javascript를 이용하여 스타일 속성을 수정하면 아래와 같이 html 요소에 동적으로 적용되는 것을 확인할 수 있다.
```html
<html lang="en" style="--spacing:188px; --blur:24px; --base:#ff2a5e;">
  <!-- 중략 -->
</html>
```
