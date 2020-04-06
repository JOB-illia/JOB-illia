$(document).ready(function () {
    $('.header__row-burger').on('click', function () {
        $(this).toggleClass('header__row-burger--open');
        $('.header__nav').slideToggle();
    });
    let videoURL = $('.video__container iframe').attr('src');
    $('.play').on('click', function () {
        let addedURL = '?rel=0&showinfo=0&autoplay=1';
        let allURL = videoURL + addedURL;
        $('.video__container iframe').attr('src', allURL);
        $('.video__container').addClass('video__container--clickPlayStart');
        $('.play, .video__bg').css('display', 'none');
    })
});