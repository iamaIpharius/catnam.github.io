$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
    margin: 20,
   	loop: true,
  	responsiveClass:true,
  	responsiveRefreshRate: 15,

    responsive : {
      0:{
            items:1,
            dots:false,
        },
      780:{
            items:2,
        },
        1500:{
              items:3,
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
    $(".img").click(function(){
    $("#modal-callback").addClass("opened")
    $(".modal-overlay").addClass("opened")
    $("body").addClass("hidden")
    $(this).clone().appendTo("#modal-callback");
  });
  $("#close-button-callback").click(function(){
    $(this).next().remove()
    $("#modal-callback").removeClass("opened")
    $(".modal-overlay").removeClass("opened")
    $("body").removeClass("hidden")
  });
  $(".modal-overlay").click(function(){
    $("#close-button-callback").next().remove()
    $(this).removeClass("opened")
    $("body").removeClass("hidden")
    $("#modal-callback").removeClass("opened")
  });
});
