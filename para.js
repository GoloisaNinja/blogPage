var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';

$('.design-section figure').on(event, function () {
    $(this).toggleClass('tile');
});
