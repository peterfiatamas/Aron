$(document).ready(function () {
    $('.video').on('click', pop);
    $('.nyil').on('click', le);



    function le() {
        if ($('.menu-box').is(':hidden')) {
            $('.menu-box').show('slide');
        } else {
            $('.menu-box').hide('slide');
        }
    }


    function pop() {
        $('.silencio').slideToggle();
    }
});
