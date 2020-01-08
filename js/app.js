const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const titlet = intro.querySelector(".title");
const text = document.querySelector(".title");
const strText = text.textContent;
const splitText = strText.split();
text.textContent = "";
const heartText = intro.querySelector(".heart");
const armText = intro.querySelector(".hand");
const waistText = intro.querySelector(".waist");
const feetLeftText = intro.querySelector(".feet");
const lootText = intro.querySelector(".loot");
const navT = document.querySelector(".navbar-toggler");


navT.addEventListener("click",()=>{
navT.classList.toggle("nav-open");

});





const bgimg = document.querySelector(".bgimg");
//title_Glow_IN
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
//glow_End
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9500,
  triggerElement: intro,
  triggerHook: 0
})
  //.addIndicators()
  .setPin(intro)
  .addTo(controller);
//!textAnimation config
//*default duration
let dd = 500;
//*title
let tod = 1000;
//*heart
let hid = dd;
let hio = 1200;
let hod = dd;
let hoo = 2000;
//*arm
let aid = dd;
let aio = 2300;
let aod = dd;
let aoo = 3000;
//*waist
let wid = dd;
let wio = 5000;
let wod = dd;
let woo = 5700;
//*feetLeft
let flid = dd;
let flio = 7500;
let flod = dd;
let floo = 8200;
//*loot
let lid = dd;
let lio = 8900;
//!Config End
//!
//!Text Animation
const titleAnim = TweenMax.fromTo(titlet, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: tod,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(titleAnim)
  .addTo(controller);
//*heartText Animation
const heartTextAnim = TweenMax.fromTo(
  heartText,
  3,
  { opacity: 0 },
  { opacity: 1 }
);


let scene3 = new ScrollMagic.Scene({
  duration: hid,
  triggerElement: intro,
  triggerHook: 0,
  offset: hio
})
   .on('start',() => { bgimg.classList.toggle("bgimg2");  })
  .setTween(heartTextAnim)
  .addTo(controller);
  

const heartTextAnimOut = TweenMax.fromTo(
  heartText,
  3,
  { opacity: 1 },
  { opacity: 0, immediateRender: false }
);

let scene4 = new ScrollMagic.Scene({
  duration: hod,
  triggerElement: intro,
  triggerHook: 0,
  offset: hoo
})
  .setTween(heartTextAnimOut)
  .addTo(controller);


//*armText Animation
const armTextAnim = TweenMax.fromTo(armText, 3, { opacity: 0 }, { opacity: 1 });

let scene5 = new ScrollMagic.Scene({
  duration: aid,
  triggerElement: intro,
  triggerHook: 0,
  offset: aio
})
.on('start',() => { bgimg.classList.toggle("bgimg3");  })
  .setTween(armTextAnim)
  .addTo(controller);

const armTextAnimOut = TweenMax.fromTo(
  armText,
  3,
  { opacity: 1 },
  { opacity: 0, immediateRender: false }
);

let scene6 = new ScrollMagic.Scene({
  duration: aod,
  triggerElement: intro,
  triggerHook: 0,
  offset: aoo
})
  .setTween(armTextAnimOut)
  .addTo(controller);

//*waistText Animation
const waistTextAnim = TweenMax.fromTo(
  waistText,
  3,
  { opacity: 0 },
  { opacity: 1 }
);

let scene7 = new ScrollMagic.Scene({
  duration: wid,
  triggerElement: intro,
  triggerHook: 0,
  offset: wio
})
.on('start',() => { bgimg.classList.toggle("bgimg4");  })
  .setTween(waistTextAnim)
  .addTo(controller);

const waistTextAnimOut = TweenMax.fromTo(
  waistText,
  3,
  { opacity: 1 },
  { opacity: 0, immediateRender: false }
);

let scene8 = new ScrollMagic.Scene({
  duration: wod,
  triggerElement: intro,
  triggerHook: 0,
  offset: woo
})
  .setTween(waistTextAnimOut)
  .addTo(controller);

//*feetLeftText Animation
const feetLeftTextAnim = TweenMax.fromTo(
  feetLeftText,
  3,
  { opacity: 0 },
  { opacity: 1 }
);

let scene9 = new ScrollMagic.Scene({
  duration: flid,
  triggerElement: intro,
  triggerHook: 0,
  offset: flio
})
.on('start',() => { bgimg.classList.toggle("bgimg5");  })
  .setTween(feetLeftTextAnim)
  .addTo(controller);

const feetLeftTextAnimOut = TweenMax.fromTo(
  feetLeftText,
  3,
  { opacity: 1 },
  { opacity: 0, immediateRender: false }
);

let scene10 = new ScrollMagic.Scene({
  duration: flod,
  triggerElement: intro,
  triggerHook: 0,
  offset: floo
})
  .setTween(feetLeftTextAnimOut)
  .addTo(controller);

//*lootText Animation
const lootTextAnim = TweenMax.fromTo(
  lootText,
  3,
  { opacity: 0 },
  { opacity: 1 }
);

let scene13 = new ScrollMagic.Scene({
  duration: lid,
  triggerElement: intro,
  triggerHook: 0,
  offset: lio
})
.on('start',() => { bgimg.classList.toggle("bgimg6");  })
  .setTween(lootTextAnim)
  .addTo(controller);
//!Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
