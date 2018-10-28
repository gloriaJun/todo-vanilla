## Exercise 5: Flex Panel Gallery
- 이미지를 배치하고 클릭하면 애니메이션 효과와 함께 펼쳐진다.

## Today I Learn
#### Flex
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- all items to be 100% width, via flex-basis 
```
flex: 1 100%;
/* `flex: 1 100%`는 아래와 같이 풀어서 표현할 수 있다. 
flex-grow: 1;
flex-basis: 100%;
*/
```

#### transform - translate 
- 요소를 현재의 위치를 기준으로 이동시킨다.
- [transform 속성 : 요소의 표시 위치를 이동시키는 translate](https://www.tabmode.com/homepage/transform-translate.html)


#### toggle
`classList.toggle()`을 이용하면 엘리먼트의 class name을 제어할 수 있다.
```
toggle( String [, force] )
한개의 인수만 있을 때 : 클래스 값을 변환한다. 즉 클래스가 존재한다면 지우고 false를 반환하며, 존재하지 않다면 그것을 추가하고 true를 반환한다.
두번째 인수가 있을 때 : 두번째 인수가 true로 평가되면 특정 클래스 값을 추가하고 false로 평가되면 지운다.
```
- [Element.classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)  
