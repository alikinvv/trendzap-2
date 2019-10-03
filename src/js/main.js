$('.item-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.item-nav',
    infinite: false
});

$('.item-nav').slick({
    slidesToShow: 1,
    centerMode: true,
    asNavFor: '.item-main',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    vertical: true
});

if ($('.fits__model').length > 0) {
    const ps = new PerfectScrollbar('.fits__model', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}

if ($('nav.links').length > 0) {
    const ps = new PerfectScrollbar('nav.links', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}

if ($('.checkboxes').length > 0) {
    const pss = new PerfectScrollbar('.checkboxes', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}

$('body').on('click', 'a[data-modal], div[data-modal]:not(.modal)', (e) => {
    $('.modal').removeClass('active');
    $('.modals').addClass('active');
    $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').addClass('active');
});

$('body').on('click', '.modal__close', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modal[data-modal="success"] .btn', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modals', (e) => {
    if ($(e.target).is('.modals')) {
        $('.modals').removeClass('active');
        $('.modal').removeClass('active');
    }
});

$('input[name="phone"]').mask('+0 (000) 000-00-00');

$('body').on('blur', 'input', (e) => {
    if ($(e.currentTarget).val() === '') {
        $(e.currentTarget).removeClass('active');
    } else {
        $(e.currentTarget).addClass('active');
    }
});

$('body').on('click', '.toggle', (e) => {
    if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active').next().slideUp(200);
    } else {
        $(e.currentTarget).addClass('active').next().slideDown(200);
    }
});

$('body').on('click', '.filter-button', (e) => {
    $(e.currentTarget).toggleClass('active').parent().find('.sidebar').slideToggle();
});

if ($('#price-slider').length > 0) {
    var priceSlider = document.getElementById('price-slider');
    var input0 = document.getElementById('input-with-keypress-0');
    var input1 = document.getElementById('input-with-keypress-1');
    var inputs = [input0, input1];

    noUiSlider.create(priceSlider, {
        start: [0, 55290],
        connect: true,
        range: {
            'min': 0,
            'max': 55290
        }
    });

    priceSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });
}

$('body').on('click', '.tabs__nav a', (e) => {
    $('.tabs__nav a').removeClass('active');
    $('.tabs__body').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.tabs__body[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

if ($(window).width() >= 1200) {
    let height = 125;
    if ($('.view').length > 0) {
        height = $('.view').outerHeight() + 50;
    }
    $("#sticker").sticky({
        topSpacing: 20,
        bottomSpacing: $('.copyright').outerHeight() + $('.footer').outerHeight() + height
    });
    
}

$('body').on('click', '.catalog__more', (e) => {
    $(e.currentTarget).hide();
    $(e.currentTarget).next('ul.full').slideDown(200);
});

$('body').on('click', '.add__controls .minus', (e) => {
    if (parseInt($(e.currentTarget).parent().find('.add__count span').text()) > 1) {
        $(e.currentTarget).parent().find('.add__count span').text(parseInt($(e.currentTarget).parent().find('.add__count span').text()) - 1);
    }
});

$('body').on('click', '.add__controls .plus', (e) => {
    if (parseInt($(e.currentTarget).parent().find('.add__count span').text()) > 0) {
        $(e.currentTarget).parent().find('.add__count span').text(parseInt($(e.currentTarget).parent().find('.add__count span').text()) + 1);
    }
});

$('body').on('click', '.fits__toggle', (e) => {
    if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active');
        $(e.currentTarget).parent().parent().find('.full').slideUp(200);
    } else {
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).parent().parent().find('.full').slideDown(200);
    }
});

$('body').on('click', '.fits__nav a', (e) => {
    $('.fits__nav a').removeClass('active');
    $('.fits__tab').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.fits__tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

$('body').on('click', '.add-cart', (e) => {
    $(e.currentTarget).hide().parent().find('.add__controls').show();
});