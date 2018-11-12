const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  // const site = document.querySelector('div.site-wrap');
  const sliderImages = document.querySelectorAll('.slide-in');

  return {
    checkSlider(e) {
      sliderImages.forEach(img => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        // bottom of the image
        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    },
  }
})();

const appController = (function () {
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  return {
    init() {
      document.addEventListener('scroll', debounce(appView.checkSlider), 2000);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
