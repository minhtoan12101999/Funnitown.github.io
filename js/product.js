$(document).ready(function () {
    $(window).on('load', function () {
        $(".baoloading1").delay(1000).fadeOut(400);
        $(".baoloading").delay(1000).fadeOut(400);
        // $(".loading").removeClass("loading");
        // $(".loadingweb").removeClass("loadingweb");
    })
    $(".menuproduct__menuhover").click(function (e) {
        e.preventDefault();
        $(".menu__black1").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `-100%`,
                transition: `0.5s`,
            }
        );
    });
    $(".menu__black-bao").click(function (e) {
        e.preventDefault();
        $(".menu__black1").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `0%`,
                transition: `1.2s`,
            }
        );
    });
    $(".left-clone").click(function (e) {
        e.preventDefault();
        $(".menu__black1").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
        $(".menuproduct__container").css(
            {
                left: `0%`,
                transition: `1.2s`,
            }
        );
    });
    $(".menu-left").click(function (e) {
        e.preventDefault();
        $(".menu__black1").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
    });


    $(".--textbox__product").flickity(
        {
            cellSelector: ".--textbox__product-item",
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: false,
            pageDots: false,
            wrapAround: true,
        }
    )
    $(".--next").on('click', function () {
        $(this).closest(".--textbox__product").flickity('next');
    });
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            let slider = $(".productt").height();
            if (slider - $(".menu__blue").height() < window.pageYOffset) {
                $(".menu__blue").addClass("active-blue");
            }
            else {
                $(".menu__blue").removeClass("active-blue");
            }
        }
        else {
            console.log("lẹn");
            $(".menu__blue").removeClass("active-blue");
        }
    });
})
// let nut = document.querySelectorAll(".--next");
// let text = document.querySelectorAll(".--textbox__product");
// console.log(Array.from(text));
// var a = Array.from(text);
// nut.forEach(function (e, index) {
//     e.addEventListener("click", function (event) {
//         var seach = a[index].getAttribute('class');
//         var array = [];
//         array.push(seach.split(" "));
//         array.forEach(function (x, y) {
//             console.log(e.getAttribute("class"));
//         })
//     })
// });



