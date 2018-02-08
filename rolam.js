$(document).ready(function () {
    $('.nyil').on('click', gord);
    $(window).scroll(el);

    function gord() {
        $('.menu-box').slideToggle();
    }
    function el() {
        $('.menu-box').hide();
    }
    var timeout;
    var current = 0;
    var container = $('.slideContainer');
    var slides = container.find('.slide');

    function start() {
        timeout = window.setTimeout(showNext, 2000);
    }
    function stop(){
        clearTimeout(timeout);
    }

    function showNext() {
        slides.eq(current).removeClass('active');
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        slides.eq(current).addClass('active');
        start();
    }
    start();
    $('.slide').mouseenter(stop);
    $('.slide').mouseleave(start);

});
