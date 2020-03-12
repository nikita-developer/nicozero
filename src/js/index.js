
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

    $('.js-effects__hover').hover(function() {
        $('.effects__face_before').stop().fadeOut(1000)
        $('.effects__face_after').stop().fadeIn(1000)
    }, function() {
        $('.effects__face_after').stop().fadeOut(1000)
        $('.effects__face_before').stop().fadeIn(1000)
    });

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 600);

    $('.support__name').click(function () {
        $(this).next('.support__description').slideToggle()
        $(this).children('.support__indikator').toggleClass('support__indikator_active')
    })

    $('.support__btn').click(function () {
        $('html').animate({
            scrollTop: $('.face__box_scroll .order').offset().top
        });
    })
});
