$(document).ready(function() {
  // menu toggle class when scrolling
  $(document).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $(".menu").addClass("fixed-menu");
    } else {
      $(".menu").removeClass("fixed-menu");
    }
  });
});
