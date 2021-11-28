//= components/jquery.magnific-popup.js

$('.adventure-menu__burger').click(function () {
    $('.adventure-menu__burger').toggleClass('adventure-burger__active'),
        $('.adventure-nav').toggleClass('adventure-nav__active'),
        $('body').toggleClass('adventure-look');
});

$('.adventure-news__box-foto').magnificPopup({
    type: 'image'
});