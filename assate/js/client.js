$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,   
    autoplayTimeout: 3000,
    smartSpeed: 400,
    center: true,
    dots:true,
    navText: ['&#8592;', '&#8594;'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})