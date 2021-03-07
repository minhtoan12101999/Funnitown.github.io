$(document).ready(function () {
    $(window).on('load', function () {
        $(".baoloading").delay(1000).fadeOut(400);
        $(".baoloading1").delay(1000).fadeOut(400);
    })
    $(".slider__menuhover").click(function (e) {
        e.preventDefault();
        $(".menu__black1").addClass("active");
        $(".slider__menu").addClass("active-menu-hover");
        $(".slider__black-bao").addClass("active-bao");
        $(".homepage").addClass("active-main");
        $(".slider__container").addClass("active-container");
    });
    $(".slider__black-bao").click(function (e) {
        e.preventDefault();
        $(".slider__black-bao").removeClass("active-bao");
        $(".slider__menu").removeClass("active-menu-hover");
        $(".menu__black1").removeClass("active");
        $(".slider__container").removeClass("active-container");
        $(".homepage").removeClass("active-main");
    });
    $(".left-clone").click(function (e) {
        e.preventDefault();
        $(".slider__black-bao").removeClass("active-bao");
        $(".slider__menu").removeClass("active-menu-hover");
        $(".slider__container").removeClass("active-container");
        $(".homepage").removeClass("active-main");
        $(".menu__black1").removeClass("active");



    });
    $(".menu-left").click(function (e) {
        e.preventDefault();
        $(".menu__black1").addClass("active");
        $(".slider__black-bao").addClass("active-bao");
        $(".slider__container").addClass("active-container");
    });
    //start menublue
    var mobile = setTimeout(function () {
        $(".mobi").addClass("mole");
    }, 3000);
    $(document).scroll(function () {
        clearTimeout(mobile);
        if (window.pageYOffset > 1) {
            $(".mobi").css(
                {
                    left: `-100%`,
                }
            );
            console.log(window.pageYOffset);
        }
        else if (window.pageYOffset <= 1) {
            $(".mobi").css(
                {
                    left: `0%`,
                }
            )
        }
    });
    //end
    //scroll 3 gạch
    var menuthreee = setTimeout(function () {
        $(".menu3gach").addClass("menuthree");
    }, 3500);
    $(document).scroll(function () {
        clearTimeout(menuthreee);
        if (window.pageYOffset > $(".menumobile").height()) {
            $(".menu3gach").addClass("menuthree");
            console.log(window.pageYOffset);
        }
        else if (window.pageYOffset < $(".menumobile").height()) {
            $(".menu3gach").removeClass("menuthree");
        }
    })
    $(document).scroll(function () {
        clearTimeout(menuthreee);
        if (window.pageYOffset > $(".slider__item-text").height()) {
            $(".menu3gach").removeClass("menuthree");
            console.log(window.pageYOffset);
        }

    })
    $(".menu3gach").click(function () {
        $(".menu__black1").addClass("active");
        $(".slider__black-bao").addClass("active-bao");
        $(".slider__container").addClass("active-container");
    })
    //end

    $(".slider__item-wrap").flickity(
        {
            cellSelector: ".slider__item",
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: false,
            pageDots: false,
            wrapAround: true,
        }
    );
    //bắt sự kiện 
    // $(document).scroll(function () {
    //     let slider = $(".slider").height();
    //     if (slider - $(".menu__blue").height() < window.pageYOffset) {
    //         $(".blue__container").addClass("active-blue");

    //     }
    //     else {
    //         $(".blue__container").removeClass("active-blue");
    //     }
    // })
    $(".menu-left").click(function () {
        $(".menu__black1").addClass("active");
    })





    // bắt sự kiện srocll lên xuống 
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            let slider = $(".slider").height();
            if (slider - $(".menu__blue").height() < window.pageYOffset) {
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
let backtotop = document.querySelector(".text-right");
backtotop.addEventListener("click", function () {
    window.scrollTo(
        {
            top: -document.body.offsetHeight,
            behavior: 'smooth',
        }
    )
})