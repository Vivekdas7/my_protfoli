// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4200,
    margin:10,
    nav:true,
    navText:["<i class='arrow-left'></i>",
            "<i class='arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
    
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})