var textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".title .letter",
  translateY: [-200, 0],
  easing: "easeOutExpo",
  duration: 1500,
  delay: (el, i) => 3500 + 50 * i,
});

TweenMax.to(".container", 2, {
  top: "50vh",
  ease: Expo.easeInOut,
  delay: 0.5,
});

TweenMax.to(".container", 2, {
  scale: "1",
  top: "25vh",
  ease: Expo.easeInOut,
  delay: 3,
});

TweenMax.staggerFrom(
  ".navbar > div",
  1.6,
  {
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
    delay: 3,
  },
  0.08
);
TweenMax.staggerFrom(
  ".site-menu > div",
  1,
  {
    opacity: 0,
    y: -100,
    ease: Power2.easeOut,
    delay: 2.5,
  },
  0.2
);

TweenMax.staggerFrom(
  ".info, .buy-now-cta, .prev-imgs > div, .marquee",
  1,
  {
    opacity: 0,
    y: 100,
    ease: Power2.easeOut,
    delay: 4,
  },
  0.1
);
