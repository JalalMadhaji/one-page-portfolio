$(document).ready(function() {
  // handle the loading screen
  setTimeout(function() {
    $("#loading_wrap").remove();
    $("body").css({ height: "unset", overflowY: "scroll" });
  }, 5000);
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
    // handle the go to the top button
    $(document).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $("#go-back").css({ opacity: ".3", cursor: "pointer" });
            $("#go-back").on("mouseover", function() {
                if ($(window).scrollTop() > 600) {
                    $(this).css({ opacity: ".7", cursor: "pointer" });
                } else {
                    $("#go-back").css({ opacity: "0", cursor: "default" });
                }
            });
            $("#go-back").on("mouseout", function() {
                if ($(window).scrollTop() > 600) {
                    $(this).css({ opacity: ".3", cursor: "pointer" });
                } else {
                    $(this).css({ opacity: "0", cursor: "default" });
                }
            });
        } else {
            $("#go-back").css({ opacity: "0", cursor: "default" });
        }
    });
  });

  // handle the nav bar in small devices
  let menu = document.querySelector(".menu nav");
  let bars = document.getElementById("bars");

  bars.addEventListener("click", function(e) {
    // console.log(e.target);
    $(".menu nav").toggleClass("open-nav");
  });
  $(window).resize(function() {
    $(".menu nav").removeClass("open-nav");
    $(".menu").css("width", "100%");
  });
  $(".menu nav li").each(function(i) {
    $("a")
      .eq(i)
      .click(function() {
        $(".menu nav").removeClass("open-nav");
      });
  });
});
