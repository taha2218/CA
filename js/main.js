

//Animations

gsap.to('.landing-container',2,{opacity:1});
gsap.to('.head0',1,{delay:1.5,opacity:1,x:0,ease: "circ.out"});
gsap.to('.head1',1,{delay:1.5,opacity:1,x:0,ease: "circ.out"});

//Animations

//Slider for Services

new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    draggable: true,
    responsive: [
        {
        // screens greater than >= 775px
        breakpoint: 100,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '1',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 450,
        settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
        },
        {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
        }
    ]
});

// Slider for Services 