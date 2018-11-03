## Exercise 10: Hold Shift and Check Checkboxes
- shift 버튼을 클릭하고 체크박스를 체크하면 사이에 있는 리스트가 모두 체킹된다.

## Today I Learn
#### event.shiftKey
이벤트가 발생했을 때에 shiftKey가 눌려져있었는 지 여부에 대해 리턴한다.
```javascript
document.getElementById('checkbox').addEventListener('click', function(e) {
  console.log(e.shiftKey)
});
```

