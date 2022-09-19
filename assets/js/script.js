$(".Main").hide();

setTimeout(function() {
    $(".start").hide();
    $(".Main").show();
}, 3000);

$(".start").show();

$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});