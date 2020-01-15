$(document).ready(function() {
  // menu toggle class when scrolling
  $(document).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $(".menu").addClass("fixed-menu");
    } else {
      $(".menu").removeClass("fixed-menu");
    }

    //get document scroll position
    var position = $(document).scrollTop();
    //get header height
    var header = $(".menu").outerHeight();

    //check active section
    $(".section").each(function(i) {
      $(".section .bar span")
        .delay(500)
        .queue(function() {
          $(this).css("width", $(this).attr("data-power") + "%");
        });
      if ($(this).position().top <= position + header) {
        $("a.active").removeClass("active");
        $("a")
          .eq(i)
          .addClass("active");
      }
    });
  });
});
