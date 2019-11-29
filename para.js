var event = ('ontouchstart' in window);
// ? 'click' : 'mouseenter mouseleave';

// $('.tile').on(event, function () {
//    $(this).toggleClass('hover');
// });

var topofDiv = $(".tile").offset().top; //gets offset of header
$(window).scroll(function(){
    if($(window).scrollTop() > topofDiv && event){
       $(this).toggleClass('tile');
    }
    
});
