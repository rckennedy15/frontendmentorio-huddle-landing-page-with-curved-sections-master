// starts initial animations on page load
$(document)
  .ready(function() {
    $(".section1__head")
      .addClass("anim-fade-in");
    setTimeout(() => {
      $(".section1__body .button")
        .addClass("anim-fade-in");
    }, 1300);
    $(".section1__body")
      .addClass("anim-left");

    setTimeout(() => {
      $(".screen-mockups")
        .addClass("anim-fade-in");
    }, 2300);
  });

// every time you scroll, checks if elements are in viewport
// and then triggers animations
$(window)
  .on('scroll', function() {
    if (isScrolledIntoView($(".brag__item1"))) {
      $(".brag__item1")
        .addClass("anim-left");
    }
    if (isScrolledIntoView($(".brag__item2"))) {
      $(".brag__item2")
        .addClass("anim-right");
    }
    if (isScrolledIntoView($(".grow-together"))) {
      $(".grow-together__img")
        .addClass("anim-left");
      $(".grow-together__text")
        .addClass("anim-left");
    }
    if (isScrolledIntoView($(".flowing-conversations"))) {
      $(".flowing-conversations__img")
        .addClass("anim-right");
      $(".flowing-conversations__text")
        .addClass("anim-right");
    }
    if (isScrolledIntoView($(".your-users"))) {
      $(".your-users__img")
        .addClass("anim-left");
      $(".your-users__text")
        .addClass("anim-left");
    }
    if (isScrolledIntoView($(".cta__content"))) {
      setTimeout(() => {
        $(".cta__content .button")
          .addClass("anim-fade-in");
      }, 1300);
      $(".cta__content")
        .addClass("anim-left");
    }
  });

// checks if element is scrolled into the viewport
function isScrolledIntoView(elem) {
  var docViewTop = $(window)
    .scrollTop();
  var docViewBottom = docViewTop + $(window)
    .height();

  var elemTop = $(elem)
    .offset()
    .top;
  var elemBottom = elemTop + $(elem)
    .height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function makeHidden(elem) {
  $(elem)
    .addClass("is-hidden");
}
