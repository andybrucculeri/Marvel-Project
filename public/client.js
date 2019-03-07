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
  
      fetch('/series')
    .then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /series', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
  
  })  

  
  //ajax attempt 
  
   // var url = '../series.json';
    var series = '';
  
   $.ajax({
    type:'GET',
    url: './series.json',
    data: series,
    async: true,
    dataType:'json',
    error: function(series, white){ console.log('Your ajax call failed. Sorry fam.'); },
    success:function(series){
      console.log('series ajax call success');
      console.log(series[0].startYear);
  
  // charts.js demo
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["3-D Man", "Absorbing Man", "Agent Zero", "2012", "2013", "2014", "2015"],
        datasets: [{
            label: "Number of Stories Each Character is In",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [21, 96, 25, 2, 20, 30, 45],
                }]
            },
    
    // Configuration options go here
    options: {}
          });
  
      } //close success
  }); //close ajax
  
  
//start scrollmagic simple demo 
  
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
	
var fromLeftTimeline = new TimelineMax();
var fromLeftFrom = TweenMax.from("#left", 1, {
    x: -500
});
var fromLeftTo = TweenMax.to("#left", 1, {
    x: 0
});
fromLeftTimeline
    .add(fromLeftFrom)
    .add(fromLeftTo);
	
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 200,
    })
    .setTween(fromLeftTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  // Fade in
var fadeInTimeline = new TimelineMax();
var fadeInFrom = TweenMax.from("#opacity", 1, {
    autoAlpha: 0
});
var fadeInTo = TweenMax.to("#opacity", 1, {
    autoAlpha: 1
});
fadeInTimeline
    .add(fadeInFrom)
    .add(fadeInTo);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 200,
    })
    .setTween(fadeInTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
 
//Fly in from the left
var fromBottomTimeline = new TimelineMax();
var fromBottomFrom = TweenMax.from("#bottom", 1, {
    y: 300
});
var fromBottomTo = TweenMax.to("#bottom", 1, {
    y: 0
});
fromBottomTimeline
    .add(fromBottomFrom)
    .add(fromBottomTo);
 
new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        offset: 200,
    })
    .setTween(fromBottomTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

console.log('client js working');
  })();