
$(document).ready(function() {
    var wow = new WOW
        ({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null
        }
    );
    wow.init();

    $('.js-effects__media').hover(function() {
        $('.effects__face_before').stop().fadeOut(1000)
        $('.effects__face_after').stop().fadeIn(1000)
    }, function() {
        $('.effects__face_after').stop().fadeOut(1000)
        $('.effects__face_before').stop().fadeIn(1000)
    });
});
