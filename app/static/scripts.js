const hideScreen1=[".screen1__content",".mouse",".mousewheel"];
var pos=0;
function rightScroll(){
    if(pos!==-100){
    pos-=20;
    document.getElementById("header").classList.add("mode0");
    document.getElementById("scrollable").style.left=(pos.toString()).concat("%");
    document.getElementById("scroll__left").classList.remove("deactivate");
    document.getElementById("scroll__left").classList.add("activate");
    if(pos===-100)
    {
        document.getElementById("scroll__right").classList.add("deactivate");
        document.getElementById("scroll__right").classList.remove("activate");
    }
    }
}
function leftScroll(){
    if(pos!==0){
    pos+=20;
    document.getElementById("header").classList.add("mode0");
    document.getElementById("scrollable").style.left=(pos.toString()).concat("%");
    document.getElementById("scroll__right").classList.remove("deactivate");
    document.getElementById("scroll__right").classList.add("activate");
    if(pos===0){
        document.getElementById("scroll__left").classList.add("deactivate");
        document.getElementById("scroll__left").classList.remove("activate");
    }
    }
}
function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}
function load(){//HEADER
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  setInterval(function() {
    window.location.reload();
  }, 450000);
  var prev=0,now=0;
  window.addEventListener('scroll', function(event){
    now=window.pageYOffset;
    if(now>prev){
      document.getElementById("header").classList.add("mode0");
      if(window.scrollY==0){
        document.getElementById("header").classList.remove("mode1");
        document.getElementById("user-nav").classList.remove("mode1");
        document.getElementById("user-nav__logo").classList.remove("mode1");
      }
    }
    else{
        if(window.scrollY==0){
            document.getElementById("header").classList.remove("mode1");
            document.getElementById("user-nav").classList.remove("mode1");
            document.getElementById("user-nav__logo").classList.remove("mode1");
        }
        else{
            document.getElementById("header").classList.add("mode1");
            document.getElementById("user-nav").classList.add("mode1");
            document.getElementById("user-nav__logo").classList.add("mode1");
      }
      document.getElementById("header").classList.remove("mode0");
    }
    prev=now;
  });
  start_roll();
  setInterval(start_roll,36000);
}
function start_roll(){
  setTimeout(rolling0,0000);
  setTimeout(rolling1,12000);
  setTimeout(rolling2,24000);
}
function rolling0(){
  document.getElementById("roll3").classList.remove("show");
  document.getElementById("roll1").classList.add("show");
  document.getElementById("comm3").classList.remove("show");
  document.getElementById("comm1").classList.add("show");
}
function rolling1(){
  document.getElementById("roll1").classList.remove("show");
  document.getElementById("roll2").classList.add("show");
  document.getElementById("comm1").classList.remove("show");
  document.getElementById("comm2").classList.add("show");
}
function rolling2(){
  document.getElementById("roll2").classList.remove("show");
  document.getElementById("roll3").classList.add("show");
  document.getElementById("comm2").classList.remove("show");
  document.getElementById("comm3").classList.add("show");
}
