const hideScreen1=[".screen1__content",".mouse",".mousewheel"];
let pos=0, position=0, count=0;
function Scroll(dir){
    if(window.innerWidth<1000){
        switch(dir){
            case 1:
                if(count!==6){ count++;
                    switch(count){
                        case 1:position=-62;break;
                        case 2:position=-131;break;
                        case 3:position=-200;break;
                        case 4:position=-269;break;
                        case 5:position=-338;break;
                        default:position=-400;break;
                    }
                    document.getElementById("header").classList.add("mode0");
                    document.getElementById("scrollable").style.left=(position.toString()).concat("%");
                    document.getElementById("scroll__left").classList.remove("deactivate");
                    document.getElementById("scroll__left").classList.add("activate");
                    if(position===-400)
                    {
                        document.getElementById("scroll__right").classList.add("deactivate");
                        document.getElementById("scroll__right").classList.remove("activate");
                    } 
                }
            break;
            default:
                if(count!==0){ count--;
                    switch(count){
                        case 1:position=-62;break;
                        case 2:position=-131;break;
                        case 3:position=-200;break;
                        case 4:position=-269;break;
                        case 5:position=-338;break;
                        default:position=0;break;
                    }
                    document.getElementById("header").classList.add("mode0");
                    document.getElementById("scrollable").style.left=(position.toString()).concat("%");
                    document.getElementById("scroll__right").classList.remove("deactivate");
                    document.getElementById("scroll__right").classList.add("activate");
                    if(position===0)
                    {
                        document.getElementById("scroll__left").classList.add("deactivate");
                        document.getElementById("scroll__left").classList.remove("activate");
                    } 
                }
            break;
        }
    }
    else{
        switch(dir){
            case 1:
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
            break;
            default:
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
            break;
        }
    }
}
function smoothScroll(elementId) {
  console.log(elementId);
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}
let touchstartX = 0, touchendX = 0, touchstartY = 0, touchendY = 0;
function checkDirection() {
    document.getElementById("screen3__panel1").classList.remove("card__active");
    document.getElementById("screen3__panel2").classList.remove("card__active");
    document.getElementById("screen3__panel3").classList.remove("card__active");
    document.getElementById("screen3__panel4").classList.remove("card__active");
    document.getElementById("screen3__panel5").classList.remove("card__active");
    if (touchstartX-touchendX>100) { if(count<6)count++;}
    if (touchstartX-touchendX<-100) { if(count>0)count--;}
     switch(count){
          case 0:position=0;break;
          case 1:position=-62;document.getElementById("screen3__panel1").classList.add("card__active");break;
          case 2:position=-131;document.getElementById("screen3__panel2").classList.add("card__active");break;
          case 3:position=-200;document.getElementById("screen3__panel3").classList.add("card__active");break;
          case 4:position=-269;document.getElementById("screen3__panel4").classList.add("card__active");break;
          case 5:position=-338;document.getElementById("screen3__panel5").classList.add("card__active");break;
          default:position=-400;break;
      }
      document.getElementById("header").classList.add("mode0");
      document.getElementById("scrollable").style.left=(position.toString()).concat("%");
}
document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
});
document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  if(window.pageYOffset>1100&&window.pageYOffset<2200&&(Math.abs(touchstartY-touchendY)<200))
  checkDirection();
});
function load(){//HEADER
  //window.location.reload();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  //setInterval(function() {
  //  window.location.reload();
  //}, 450000);
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
