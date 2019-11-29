var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';

$('.tile').on(event, function () {
    $(this).toggleClass('hover');
});
