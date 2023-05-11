$("intro").children().fadeIn();
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('#about-me').children().fadeIn();
  } else {
    $('#about-me').children().fadeOut();
  }
});