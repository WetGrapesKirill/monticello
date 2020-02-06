export default function () {

    document.getElementById("burger").addEventListener("click", ToggleHeight);
    function ToggleHeight() {
        document.getElementById("navigation").classList.toggle("nav__active");
    }

    document.getElementById("burger").addEventListener("click", TransformButton);
    function TransformButton() {
        document.querySelector('.nav__btn-element').classList.toggle("nav__btn-element--active")
    }

    $('a[href*="#"]').not('.header__circle').on('click', function (e) {
        e.preventDefault()

        $('html,body').animate({ scrollTop: $(this.hash).offset().top },
            Math.pow(Math.abs(window.scrollY - $(this.hash).offset().top), 2 / 3) * 5);

        if (window.matchMedia('(max-width: 991px)').matches) {
            $('#navigation').toggleClass("nav__active");
            $('.nav__btn-element').toggleClass('nav__btn-element--active');
        }

    })

    $('.header__circle').on('click', function (e) {
        e.preventDefault()

        $('html,body').animate({ scrollTop: $(this.hash).offset().top },
            Math.pow(Math.abs(window.scrollY - $(this.hash).offset().top), 2 / 3) * 5);
    });


}    
