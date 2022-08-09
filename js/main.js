$(function () {
  $(".slider, .slider-bg__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".scrollto a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        //  duration: 370, // по умолчанию «400»
        // easing: "linear", // по умолчанию «swing»
      }
    );

    return false;
  });
});
