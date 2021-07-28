// slider

$(function(){
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    aroow: true,
    dots: true,
    centerMode: true,
    centerPadding: "50px"
  });
});

// fadein

$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});

// rotate

function fadeAnime(){

  $('.rotateTrigger').each(function(){ 
    var elemPos = $(this).offset().top-20;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('rotateY');
    }else{
    $(this).removeClass('rotateY');
    }
    });
}

  $(window).scroll(function (){
    fadeAnime('rotateY');
  });

  // openbtn 

  $(".openbtn1").click(function () {
    $(this).toggleClass('active');
});