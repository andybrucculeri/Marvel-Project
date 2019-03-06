// init controller
//var controller = new ScrollMagic.Controller();

// create a scene
//new ScrollMagic.Scene({
//        offset: 50    // start this scene after scrolling for 50px
//    })
//    .setPin("#my-sticky-element") // pins the element for the the scene's duration
//    .addTo(controller); // assign the scene to the controller

(function() {

//       fetch('/https://gateway.marvel.com:443/v1/public/characters?apikey=1b13f3274f0d6f6d29c6c960c0378d08').then(resp => resp.json()).then((data) => {
//     // "Data" is the object we get from the API. See server.js for the function that returns it.
//     console.group('%cResponse from https://gateway.marvel.com:443/v1/public/characters?apikey=1b13f3274f0d6f6d29c6c960c0378d08', 'color: #F037A5; font-size: large');
//     console.log(data);
//     console.groupEnd();
//       });
  
  fetch('/characters')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
  
  })
  
    fetch('/creators')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /creators', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
  
  })  
  
  
  
//start scrollmagic simle demo 
  
  var controller = new ScrollMagic.Controller();
  
  // Parallax background
new ScrollMagic.Scene({
        triggerElement: "#parallax",
        triggerHook: "onEnter",
    })
    .duration('200%')
    .setTween("#parallax", {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
    })
    //.addIndicators() // for debugging purposes
    .addTo(controller);
	
new ScrollMagic.Scene({
        triggerElement: "#slidein",
        triggerHook: "onLeave",
    })
    .setPin("#slidein")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        triggerHook: "onLeave",
    })
    .setPin("#slidein2")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  /*
    var wh = window.innerHeight,
	$iphone = $('.iphone'),
	$innerS1 = $('.innerS1'),
	$innerS2 = $('.innerS2'),
	$innerS3 = $('.innerS3'),
	$innerS4 = $('.innerS4'),
	$screenHat = $('.screenHat'),
	$screenA = $('.screenA'),
	$screenB = $('.screenB'),
	$screenC = $('.screenC');

	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// Create scene
	$("section").each(function() {

		new ScrollMagic.Scene({
			triggerElement: this,
			duration: '50%'
		})
		.setPin(this)
		.addTo(ctrl);

	});


	// iPhone intro animation Timeline
	var iphoneIntroTl = new TimelineMax();
	iphoneIntroTl
		.from($iphone, 1, {yPercent: 50,xPercent: 100, ease: Power4.easeInOut})
		.to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');

	// iPhone back to stylesheet position
	new ScrollMagic.Scene({
		duration: '70%'
	})
	.setTween(iphoneIntroTl)
	.triggerElement($('body')[0])
	.addTo(ctrl);

	// Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat
    .to($screenHat, 1, {yPercent: -50, ease: Power4.easeOut})
    .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    .from($innerS2, 1, {autoAlpha: 0}, '-=0.3');

  new ScrollMagic.Scene({
    offset: wh*0.6,
    triggerElement: $('body')[0],
    duration: '80%'
  })
  .setTween(iphoneContentHat)
  .addIndicators()
  .addTo(ctrl);

	// Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl
    .to($screenA, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS3, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent1Tl)
  .addTo(ctrl);

	// Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl
    .to($screenB, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS4, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS3 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent2Tl)
  .addTo(ctrl);
  
  */

console.log('woot');
  })();