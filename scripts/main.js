// Tabs
$(document).ready(function() {
    $('.tabs__list-link').on('click', function(e) {
        e.preventDefault();
        var item = $(this).closest('.tabs-list__item'),
            contentItem = $('.design__list-item'),
            itemPosition = item.index();

        contentItem.eq(itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');

    });

    // screen__menu
    $('.hamburger__menu-link').on('click', function(e) {
        e.preventDefault()
        var menu = $('.screen__menu'),
            menuButton = $('.screen__menu-btn__link'),
            item = $('.screen__menu-item');

        menu.fadeIn(300),
            item.on('click', function(e) {
                menu.fadeOut(300);
            });
        menuButton.on('click', function(e) {
            menu.fadeOut(300);
        });
    });

    // Headpiece
    $('.wrapper').delay(2500).fadeIn(2500),
        $('.index').fadeIn(2000).delay(2000).fadeOut();


});