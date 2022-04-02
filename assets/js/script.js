$(document).ready(function () {

  // Counter
  $('.counter-digit').counterUp({
    delay: 10,
    time: 2000
  });


 


  // Advisor carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 10,
    items: 1,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    autoplay: true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   600: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 5
    //   }
    // }

  });


  $(function () {
    jQuery('[data-vbg]').youtube_background();
  });


  $(".progress-bar").loading();



});