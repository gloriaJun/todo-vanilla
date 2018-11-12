## Exercise 13 - Slide in on Scroll
- 문서를 스크롤 하면 해당 이미지가 애니메이션 되어 출력되는 이벤트

## Today I Learn
#### throttling && debounce
- 과다한 이벤트 로직 실행으로 인한 불필요한 로직 수행을 방지하기 위해 사용되는 함수이다.
- https://hyunseob.github.io/2016/04/24/throttle-and-debounce/

###### throttling
- 매 밀리세컨드마다 최대 한 번만 호출될 수 있도록 Throttle된 함수를 만듬
- ex) 주로 스크롤을 움직일 때 사용 

###### debounce
- 마지막 호출 이후 일정 밀리세컨드 이후로 지연된 호출을 하도록 debounce된 함수를 만듬
- ex) 주로 ajax 검색 시에 사용됨
