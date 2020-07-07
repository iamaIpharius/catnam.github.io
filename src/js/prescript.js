$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
    margin: 20,
   	loop: true,
  	responsiveClass:true,
  	responsiveRefreshRate: 15,
    autoWidth:true,
    responsive : {
      0:{
            items:1,
            nav:true
        },
      1000:{
            items:3,
            nav:true,
        }
    },
   });
   var audio = $("#sound")[0];
    $("#play").click(function() {
      audio.play();
    });
    $("#pause").click(function() {
      audio.pause();
    });
});
