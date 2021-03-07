$(document).ready(function () {
    $(window).on('load', function () {
        $(".baoloading1").delay(1000).fadeOut(400);
        $(".baoloading").delay(1000).fadeOut(400);
    })
    VanillaTilt.init(document.querySelector(".bannerimg img"), {
        max: 5,
        speed: 400
    });
    VanillaTilt.init(document.querySelectorAll(".bannerimg img"));
    $(".menuproduct__menuhover").click(function (e) {
        e.preventDefault();
        $(".menu1__black").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `-100%`,
                transition: `0.5s`,
            }
        );
    });
    $(".menu__black-bao").click(function () {
        $(".menu1__black").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `0%`,
                transition: `1.2s`,
            }
        );
    })
    $(".left-clone").click(function () {
        $(".menu1__black").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `0%`,
                transition: `1.2s`,
            }
        );
    })
    $(".menu-left").click(function (e) {
        e.preventDefault();
        $(".menu1__black").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `-100%`,
                transition: `0.5s`,
            }
        );
    })
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            if ($(".menu__blue").height() * 3 < window.pageYOffset) {
                $(".menu__blue").addClass("active-blue");
            }
            else {
                $(".menu__blue").removeClass("active-blue");
            }
        }
        else {
            $(".menu__blue").removeClass("active-blue");
        }
    });
});