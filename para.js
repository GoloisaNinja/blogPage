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


// var $animation_elements = $('.tile');
// var $window = $(window);
//
//
// function check_if_in_view() {
//   var window_height = $window.height() / 2
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
//   var window_middle = (window_bottom_position - window_top_position)
//
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $element.outerHeight()
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
//     var element_middle = (element_bottom_position - element_top_position)
//
//     //check to see if this current container is within viewport
//     if (element_middle = window_height) {
//       $element.addClass('in-view');
//     } else {
//       $element.removeClass('in-view')
//     }
//   });
// }
//
// $window.on('scroll', check_if_in_view);
// $window.on('scroll resize', check_if_in_view);


function testInView($el){
    var wTop = $(window).scrollTop() - 50;
    var wBot = wTop + $(window).height() + 50;
    var eTop = $el.offset().top;
    var eBot = eTop + $el.height();
    return ((eBot <= wBot) && (eTop >= wTop));
}
function setInView(){
    $(".tile").each(function(){//testing EVERY div (you might want to be more specific in your implementation)
        var $zis = $(this);
        $zis.removeClass("in-view");
        if(testInView($zis) && event) {
           $zis.addClass("in-view");
        }
    });
}
$(document).scroll(function(){
    setInView();
});
$(document).resize(function(){
    setInView();
});
$(document).ready(function(){
    setInView();
});
