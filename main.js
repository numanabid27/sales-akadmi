$('.owl-carousel.blogs').owlCarousel({
    loop:false,
    margin:30,
    dots:false,
    nav:false,
    stagePadding: 70,
    responsive:{
        0:{
            items:1,
           
        },
        
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
