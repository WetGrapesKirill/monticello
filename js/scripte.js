$(function () {
    $('.btn-6')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });
    $('[href=#]').click(function () { return false });
});
$(document).ready(function () {
    console.log("ready!");

    let mySwiper = new Swiper('.swiper-container', {
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next-go',
            prevEl: '.swiper-button-prev-go',
        },
    });

});
function initMap() { } // now it IS a function and it is in global
$(() => {
    initMap = function () {
        // your code like...
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.665557, lng: -73.823681 },
            zoom: 16,
            mapTypeControl: false,
            disableDefaultUI: true
        });
        // and other stuff...
    }
    initMap();
})
