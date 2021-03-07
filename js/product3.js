$(document).ready(function () {
    $(window).on('load', function () {
        $(".loading").delay(1000).fadeOut(400);
        $(".loadingweb").delay(1000).fadeOut(400);
        // $(".loading").removeClass("loading");
        // $(".loadingweb").removeClass("loadingweb");
    })
    $(".menuproduct__menuhover").click(function (e) {
        e.preventDefault();
        $(".menu__black1").addClass("active");
        $(".menu__black-bao").addClass("active-bao");
        console.log("asdas");
    });
    $(".menu__black-bao").click(function (e) {
        e.preventDefault();
        $(".menu__black1").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
    });
    $(".left-clone").click(function (e) {
        e.preventDefault();
        $(".menu__black1").removeClass("active");
        $(".menu__black-bao").removeClass("active-bao");
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



