//= components/jquery.magnific-popup.js

$('.adventure-menu__burger').click(function () {
    $('.adventure-menu__burger').toggleClass('adventure-burger__active'),
        $('.adventure-nav').toggleClass('adventure-nav__active'),
        $('body').toggleClass('adventure-look');
    $('.adventure-nav').toggleClass('adventure-nav-active');
});

$('.adventure-news__box-foto').magnificPopup({
    type: 'image'
});

const adventureLike = document.querySelectorAll('.adventure-like');
adventureLike.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('adventure-like--active');
    });

});