// Scroolspy

let spy = new Gumshoe('nav a');

// Burger
$('.burger').on('click', function (event){

    $('.navigation-bar').slideToggle('200');
    $('.toggle-open').toggleClass('open');
    $('.toggle-close').toggleClass('close');
})

// Navbar
$(document).ready(function(){

    $(window).bind('scroll', function() {
        let navHeight = $('header').height();

        if ($(window).scrollTop() > navHeight){

            $('header').addClass('fixed');

        } else {
            $('header').removeClass('fixed');
        }
    });
});



// Scroll to TOP
let btn = $('.scrollup');

$(window).scroll(function() {

    if ($(window).scrollTop() > 500){
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});




//Click
btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '500');
});

// Animação
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1500,
    reset: true
});

ScrollReveal().reveal('.col, .aboutus-img, .img-col', { origin: 'left'});
ScrollReveal().reveal('.aboutus-content, .home-image',  { origin: 'right'});
ScrollReveal().reveal('.produto-item, .brand-wrapper, .newsletter-wrapper ',  { interval: 100});