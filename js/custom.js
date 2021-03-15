$(document).ready(function () {

    //    active nav-bar

    $(".navbar .navbar-nav .nav-item").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });


    //    banner-slick
    
    $(".banner-slider").slick({
        
        
        infinite:true,
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2400,
        
    })




});
