$(document).ready(function () {
    $(window).on('load', function () {
        $(".baoloading1").delay(1000).fadeOut(400);
        $(".baoloading").delay(1000).fadeOut(400);
        // $(".loading").removeClass("loading");
        // $(".loadingweb").removeClass("loadingweb");
    })
    $(".menuproduct__menuhover").click(function (e) {
        e.preventDefault();
        $(".menu1__black").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
        $(".slider__container").addClass("active-container");
        $(".menuproduct__container").css(
            {
                left: `-100%`,
                transition: `0.5s`,
            }
        );
    });
    $(".menu__black-bao").click(function (e) {
        e.preventDefault();
        $(".menu1__black").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
        $(".slider__container").removeClass("active-container");
        $(".menuproduct__container").css(
            {
                left: `0%`,
                transition: `1.2s`,
            }
        );
    });
    $(".left-clone").click(function (e) {
        e.preventDefault();
        $(".menu1__black").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
        $(".slider__container").removeClass("active-container");
        $(".menuproduct__container").css(
            {
                left: `0%`,
                transition: `1.2s`,
            }
        );

    });
    $(".menu-left").click(function (e) {
        $(".menu1__black").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
        $(".slider__container").addClass("active-container");
    })
    $(".--textboxdetail").flickity(
        {
            freeScroll: false,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
        }
    )

    $(".--textbox__product").flickity(
        {
            freeScroll: false,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
        }
    )
    $('.btn--next').on('click', function () {
        $carousel.flickity('next');
    });
    $('.btn--prive').on('click', function () {
        $carousel.flickity('previous');
    });
    var $carousel = $('.--textboxdetail').flickity({
        fullscreen: true,
    });

    $('.btnzoom').on('click', function () {
        $carousel.flickity('toggleFullscreen');
    });

    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            if ($(".menu__blue").height() * 2 < window.pageYOffset) {
                $(".menu__blue").addClass("active-blue");
            }
            else {
                $(".menu__blue").removeClass("active-blue");
            }
        }
        else {
            $(".menu__blue").removeClass("active-blue");
            console.log(slider)
        }
    });
});