$(document).ready(function(){
   $(".my-slider").slick({
     infinite: true,
     slidesToScroll: 1,
     variableWidth: true,
     prevArrow:$("#prev"),
     nextArrow:$("#next"),
   });
   $(".my-slider").on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
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
