$(document).ready(function(){
   $(".my-slider").slick({
     infinite: true,
     slidesToScroll: 1,
     variableWidth: true,
     lazyLoad: 'ondemand',
     prevArrow:$("#prev"),
     nextArrow:$("#next"),
   });
   var audio = $("#sound")[0];
    $("#play").click(function() {
      audio.play();
    });
    $("#pause").click(function() {
      audio.pause();
    });
  //   $(".img").click(function(){
  //   $("#modal-callback").addClass("opened")
  //   $(".modal-overlay").addClass("opened")
  //   $("body").addClass("hidden")
  //   $(this).clone().appendTo("#modal-callback");
  // });
  // $("#close-button-callback").click(function(){
  //   $("#modal-callback").removeClass("opened")
  //   $(".modal-overlay").removeClass("opened")
  //   $("body").removeClass("hidden")
  //   setTimeout(function(){
  //     $("#close-button-callback").next().remove()
  //   }, 500)
  // });
  // $(".modal-overlay").click(function(){
  //   $(this).removeClass("opened")
  //   $("body").removeClass("hidden")
  //   $("#modal-callback").removeClass("opened")
  //   setTimeout(function(){
  //     $("#close-button-callback").next().remove()
  //   }, 500)
  // });
});
