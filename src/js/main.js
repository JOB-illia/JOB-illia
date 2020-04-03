$(document).ready(function () {
    $('.header__row-burger').on('click', function () {
        $(this).toggleClass('header__row-burger--open');
        $('.header__nav').slideToggle();
    });

});