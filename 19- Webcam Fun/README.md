## Exercise 19 - Webcam Fun

## Today I Learn

#### navigator.mediaDevices.getUserMedia
- https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia
- 사용자의 미디어 장치 사용을 위한 메소드

```javascript
const video = document.querySelector('video');
// Prefer camera resolution nearest to 1280x720.
const constraints = { audio: true, video: { width: 1280, height: 720 } }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
}); // always check for errors at the end.
```

#### putImageData()
- canvas의 이미지 픽셀 데이타를 가져와서 조작할 수 있다.
- https://www.w3schools.com/tags/canvas_putimagedata.asp
```javascript
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(10,10,50,50);

function copy()
{
var imgData=ctx.getImageData(10,10,50,50);
ctx.putImageData(imgData,10,70);
}
```


