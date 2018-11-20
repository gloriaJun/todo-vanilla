const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');

  const rgbInputs = document.querySelectorAll('.rgb input');


  return {
    render() {
      this.getVideo();
    },
    getVideo() {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      }).then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.onloadeddata = (e) => {
          video.play();
        }
      }).catch(error => {
        console.error(error);
      });
    },

    paintToCanvas() {
      const {
        videoWidth: width,
        videoHeight: height,
      } = video;

      canvas.width = width;
      canvas.height = height;

      return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);

        // mess with them
        // pixels = appView.redEffect(pixels);

        // pixels = appView.rgbSplit(pixels);
        // ctx.globalAlpha = 0.8;

        pixels = appView.greenScreen(pixels);

        // put then back
        ctx.putImageData(pixels, 0, 0);
      }, 100);
    },

    takePhoto() {
      // palyed the sound
      snap.currentTime = 0;
      snap.play();

      // take the data out of the canvas
      const data = canvas.toDataURL('image/jpeg')
      const link = document.createElement('a');
      link.href = data;
      link.setAttribute('download', 'handsome');
      // link.textContent = 'Download Image';
      link.innerHTML = `<img src=${data}>`;
      strip.insertBefore(link, strip.firstChild);
    },

    redEffect(pixels) {
      for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 100;  // red
        pixels.data[i + 1] -= 50;   // green
        pixels.data[i + 2] *= 0.5;  // blue
      }
      return pixels;
    },

    rgbSplit(pixels) {
      for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i -150] = pixels.data[i + 0];  // red
        pixels.data[i + 100] = pixels.data[i + 1];   // green
        pixels.data[i - 250] = pixels.data[i + 2];  // blue
      }
      return pixels;
    },

    greenScreen(pixels) {
      const levels = {};

      rgbInputs.forEach(input => {
        levels[input.name] = input.value;
      });

      for(let i = 0; i < pixels.data.length; i += 4) {
        let red = pixels.data[i + 0];
        let green = pixels.data[i + 1];
        let blue = pixels.data[i + 2];
        // let alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
          // take it out !
          pixels.data[i + 3] = 0;
        }
      }

      return pixels;
    },
  }
})();

const appController = (function () {
  const video = document.querySelector('.player');
  const button = document.querySelector('.controls button');

  return {
    init() {
      appView.render();

      // add event
      video.addEventListener('canplay', appView.paintToCanvas);
      button.addEventListener('click', appView.takePhoto);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
