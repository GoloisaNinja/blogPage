var event = ('ontouchstart' in window);
// ? 'click' : 'hover';

// $('.design-section figure').on(event, function () {
//     $(this).toggleClass('tile');
// });

// var topofDiv = $(".test").offset().top; //gets offset of header
// $(window).scroll(function(){
//     if($(window).scrollTop() > topofDiv){
//        $(".tile").toggleClass('hover');
//     }
//
// });


//Cache reference to window and animation items
var $animation_elements = $('.tile');
var $window = $(window);

$window.on('scroll', check_if_in_view);

$window.on('scroll resize', check_if_in_view);

$window.trigger('scroll');

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position) && event) {
      $element.toggleClass('hover');
    }
  });
}
