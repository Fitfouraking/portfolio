$(document).ready(function() {
  $('#about').hide();
  $('#portfolio').hide();
  $('#contact').hide();
  // Switch section
  $('.aboutme').on("click", function() {
    $('#welcome').hide();
    $('#portfolio').hide();
    $('#contact').hide();
    $('#about').show();
    });
  $('.portfolio').on("click", function() {
    $('#welcome').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#portfolio').show();
    });
  $('.contact').on("click", function() {
    $('#welcome').hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('#contact').show();
    });
  $('.navbar-brand').on("click", function() {
    $('#about').hide();
    $('#portfolio').hide();
    $('#contact').hide();
    $('#welcome').show();
    });
});

// fadeOut('500', function() {
//       $('#about').show();
