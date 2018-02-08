$(document).ready(function () {
    $('.nyil').on('click', gord);
    $(window).scroll(el);

    function gord() {
        $('.menu-box').slideToggle();
    }
    function el() {
        $('.menu-box').hide();
    }
    
});
