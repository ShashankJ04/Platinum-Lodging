gsap.registerPlugin(ScrollTrigger);
gsap.to(hideScreen1,{ scrollTrigger:{ trigger:".screen1__content" , start:"bottom center", scrub:1},opacity:0});
gsap.from(".title__in2",{autoAlpha:0});
gsap.to(".title__in2",{ scrollTrigger:{ trigger:".screen2" , start:"top center", end:"top center", scrub:5},autoAlpha:1,yPercent:-20});
gsap.to(".screen2__gallery__primary",{ scrollTrigger:{ trigger:".screen2__gallery__primary" , start:"top bottom", scrub:1},yPercent:-50});
gsap.to(".screen2__gallery__secondary",{ scrollTrigger:{ trigger:".screen2__gallery__primary" , start:"top bottom", scrub:1},yPercent:-100});
gsap.from(".title__in3",{autoAlpha:0});
gsap.to(".title__in3",{ scrollTrigger:{ trigger:".screen3" , start:"top center", end:"top top", scrub:5},autoAlpha:1,yPercent:-20});
gsap.to(".screen3__panel__img1",{ scrollTrigger:{ trigger:".screen3" , start:"top bottom", scrub:2},yPercent:-40});
gsap.to(".screen3__panel__img2",{ scrollTrigger:{ trigger:".screen3" , start:"top bottom", scrub:4},yPercent:-40});
gsap.to(".screen3__panel__img3",{ scrollTrigger:{ trigger:".screen3" , start:"top bottom", scrub:6},yPercent:-40});
gsap.to(".screen3__panel__img4",{ scrollTrigger:{ trigger:".screen3" , start:"top bottom", scrub:8},yPercent:-40});
gsap.to(".screen3__panel__img5",{ scrollTrigger:{ trigger:".screen3" , start:"top bottom", scrub:10},yPercent:-40});
gsap.from(".screen4__card",{autoAlpha:0});
gsap.from(".title__in4",{autoAlpha:0});
gsap.to(".title__in4",{ scrollTrigger:{ trigger:".screen4" , start:"top center", end:"top top", scrub:5},autoAlpha:1,yPercent:-10});
gsap.to("#card1",{ scrollTrigger:{ trigger:".screen4" , start:"top bottom", end:"top top", scrub:1},autoAlpha:1,yPercent:-50});
gsap.to("#card2",{ scrollTrigger:{ trigger:".screen4" , start:"top bottom", end:"top top", scrub:2},autoAlpha:1,yPercent:-50});
gsap.to("#card3",{ scrollTrigger:{ trigger:".screen4" , start:"top bottom", end:"top top", scrub:3},autoAlpha:1,yPercent:-50});
gsap.to("#card4",{ scrollTrigger:{ trigger:".screen4" , start:"top bottom", end:"top top", scrub:4},autoAlpha:1,yPercent:-50});
gsap.to("#card5",{ scrollTrigger:{ trigger:".screen4" , start:"top bottom", end:"top top", scrub:5},autoAlpha:1,yPercent:-50});
gsap.to("#card6",{ scrollTrigger:{ trigger:".screen4" , start:"top bottom", end:"top top", scrub:6},autoAlpha:1,yPercent:-50});
gsap.from(".title__in5",{autoAlpha:0});
gsap.to(".title__in5",{ scrollTrigger:{ trigger:".screen5" , start:"top center", end:"top top", scrub:5},autoAlpha:1,yPercent:-20});
gsap.from(".title__in5h",{autoAlpha:0});
gsap.to(".title__in5h",{ scrollTrigger:{ trigger:".screen5" , start:"top center", end:"top top", scrub:5},autoAlpha:1,yPercent:-20});
gsap.from(".title__in6",{autoAlpha:0});
gsap.to(".title__in6",{ scrollTrigger:{ trigger:".screen6" , start:"top center", end:"top top", scrub:2},autoAlpha:1,yPercent:-20});