$(document).ready(function () {




    //   active menubar

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {

            $(".navbar").addClass("active-nav");
        } else {

            $(".navbar").removeClass("active-nav")
        }

        if (scrolling > 550) {

            $(".scroll-btn").fadeIn(1000)

        } else {

            $(".scroll-btn").fadeOut(1000)

        }

    });

    //    scroll-btn start

    $(".scroll-btn").click(function () {

        $("html,body").animate({

            scrollTop: "0px"
        }, 1500)

    });


    //   active nav-bar

    $(".navbar .navbar-nav .nav-item").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });


    //    banner-slick

    $(".banner-slider").slick({


        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2400,

    });


    //   about venobox

    $(".venobox").venobox({

        spinner: "three-bounce",
        spinColor: "rgba(226, 62, 56, 0.67)"

    });



    //   gallery venobox

    $(".lightbox").venobox({

        spinner: "wave",
        spinColor: "rgba(28, 27, 54, 0.67)",
        overlayColor: "rgba(226, 62, 56, 0.41)"

    });


    //   testi slick slider

    $(".testi-slider").slick({

        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
    }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
    },
        ]

    });


    //    funfact-counter up

    $(".counter").counterUp({

        time: 1800,
    });

    $(".brand-slider").slick({

        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,

                }
    }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,

                }
    },
        ]

    });


//    //smooth scroll and active menu button code
//    $('.navbar .navbar-nav .nav-item a').on('click', function () {
//        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//            if (target.length) {
//                html_body.animate({
//                    scrollTop: target.offset().top - 0
//                }, 1500 );
//                return false;
//            }
//        }
//    });


});
