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
    var container = $('.slide-container');
    var slides = container.find('.slide');
    function start() {
        timeout = window.setTimeout(showNext, 3000);
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
    $('h1').on('click', pop);
    function pop() {
        if ($('.mailTel').is(':hidden')) {
            $('.mailTel').slideDown('slow');
        } else {
            $('.mailTel').slideUp('slow');
        }

    }
    var time= +1;
    function reklam() {
        $('.reklam').animate({fontSize: "24px"}, 2000);
        $('.reklam').animate({fontSize: "20px"}, 2000);
        for (var i = 0; i < time; i++) {
            reklam();
        }
    }
    reklam();

});
