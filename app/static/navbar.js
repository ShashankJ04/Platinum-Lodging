let prev = 0, now = 0;
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
window.addEventListener('orientationchange', function () {
  var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
  document.body.style.display = 'none';
  setTimeout(function () {
    document.body.style.display = originalBodyStyle;
  }, 10);
  window.location.reload();
});
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener('touchmove', preventDefault, wheelOpt);
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
window.addEventListener('scroll', function (event) {
  now = window.pageYOffset;
  if (now > prev) {
    document.getElementById("NV__header").classList.add("NV__hidden");
    document.querySelector("#NV__nav__company").classList.add("NV__hide");
    document.querySelector("#NV__nav__list").classList.add("NV__hide");
    document.querySelector("#NV__nav__buttons").classList.add("NV__hide-b");
  }
  else {
    document.getElementById("NV__header").classList.remove("NV__hidden");
    document.querySelector("#NV__nav__company").classList.remove("NV__hide");
    document.querySelector("#NV__nav__list").classList.remove("NV__hide");
    document.querySelector("#NV__nav__buttons").classList.remove("NV__hide-b");
    document.querySelector("#NV__expand").classList.add("NV__active");
    document.querySelector("#NV__expand1").classList.add("NV__active");
    document.querySelector("#NV__expand2").classList.add("NV__active");
    document.querySelector("#NV__expand3").classList.add("NV__active");
  }
  prev = now;
});
let exp = 0;
function expand() {
  document.getElementById("NV__header").classList.toggle("NV__expand");
  document.querySelector("#NV__expand").classList.toggle("NV__clicked");
  document.querySelector("#NV__expand1").classList.toggle("NV__clicked");
  document.querySelector("#NV__expand2").classList.toggle("NV__clicked");
  document.querySelector("#NV__expand3").classList.toggle("NV__clicked");
  document.querySelector("#NV__nav__list").classList.toggle("NV__clicked");
  if (exp === 0) {
    disableScroll();
    exp = 1;
  }
  else {
    enableScroll();
    exp = 0;
  }
}