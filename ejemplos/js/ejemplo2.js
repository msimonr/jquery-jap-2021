$(document).ready(function() {

    $('#hide').click(function() {
        $('img').hide();
    });
    $('#show').click(function() {
        $('img').show();
    });
    $('#toggle').click(function() {
        $('img').toggle();
    });
    $('#fadeOut').click(function() {
        $('img').fadeOut();
    });
    $('#fadeIn').click(function() {
        $('img').fadeIn();
    });
    $('#slideUp').click(function() {
        $('img').slideUp();
    });
    $('#slideDown').click(function() {
        $('img').slideDown();
    });
    $('#cadena').click(function() {
        $('img').show(1000).hide(2000).slideDown(1000);
    });
});