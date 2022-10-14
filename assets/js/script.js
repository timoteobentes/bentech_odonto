$(".Main").hide();

setTimeout(function() {
    $(".start").fadeOut(800);
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

const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menu.addEventListener("click", function() {
    nav.classList.toggle("visible");
})

function removeNav() {
    nav.classList.remove("visible");
}