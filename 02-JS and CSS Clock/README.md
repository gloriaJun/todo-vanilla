## Exercise 2: JS and CSS Clock
- 현재의 시간을 읽어와서 시, 분, 초로 초침을 이용하여 표현한다.
- 시간의 흐름에 따라 초짐이 움직인다.

## Today I Learn
#### transform
- css3부터는 `transform`을 이용하여 회전, 기울기, 왜곡 등과 같은 효과를 줄 수 있다. 

###### 참고
- [transform-origin 속성](https://www.tabmode.com/homepage/transform-origin.html)
- [생활코딩 - 변형(transform)](https://opentutorials.org/course/2418/13684)
- [Transform예제](https://codepen.io/gloriaJun/pen/xyMrXW)

###### CSS transform 효과 관련 라이브러리
- [Hover.css](http://ianlunn.github.io/Hover/)
- [magic animation](https://github.com/miniMAC/magic)
- [CSShake](http://elrumordelaluz.github.io/csshake/#1)

###### 시계 바늘 움직이는 효과주기
기존의 선을 정각 12시로 맞추어 표시한다.
```
transform-origin: 100%;
transform: rotate(90deg);
```

초침이 자연스럽게 흐르는 효과를 주기위해서 아래와 같은 효과를 추가
```
transition: all 0.05s;
transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
```
> `transition-timing-function`은 특정 애니메이션을 실행할 때 가속할 지 또는 감속할 지를 정의하기 위한 속성이다.

[https://easings.net/ko](https://easings.net/ko)에서는 상황에 맞는 transition 효과를 예제를 보고 확인할 수 있게 도와준다.

