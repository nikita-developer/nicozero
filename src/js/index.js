
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
        $('.effects__face_before').fadeOut();
        $('.effects__face_after').fadeIn();
        console.log(1);
    }, function() {
        $('.effects__face_after').fadeOut();
        $('.effects__face_before').fadeIn();
        console.log(2);
    });
});
