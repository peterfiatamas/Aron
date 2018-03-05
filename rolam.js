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
        timeout = window.setTimeout(showNext, 3000);
          $('.stop').html('');
    }

    function stop() {
        clearTimeout(timeout);
        $('.stop').html('Stop');
    }
    /*function moz() {
        $('#bubi').css('left', e.pageX + 20);
        $('#bubi').css('top', e.pageY + 15);
    }*/

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
    $('.diak').mouseenter(stop);
    $('.diak').mouseleave(start);
   //$('.slide').mousemove(moz);

    $('.angol').on('click', fut);
    $('.magyar').on('click', megintfut);

    function fut() {
        $('.magyarSzoveg').css('display', 'none');
        $('.angolSzoveg').css('display', 'block');
    }
    function megintfut() {
        $('.magyarSzoveg').css('display', 'block');
        $('.angolSzoveg').css('display', 'none');
    }

});
