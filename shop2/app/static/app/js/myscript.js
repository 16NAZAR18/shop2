$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        300: {
            items: 2,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: false,
            autoplay: true,
        },
        800: {
            items: 4,
            nav: true,
            loop: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})
