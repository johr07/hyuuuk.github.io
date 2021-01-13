$(function () {
    $('.menu a').on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('on');
        e.preventDefault();
    });
    $('.btnOpen').click(function () {
        $('.menu').addClass('on');
    });
    $('.btnClose').click(function () {
        $('.menu').removeClass('on');
    });
    $(window).on('scroll', function () {
        findPosition();
    });

    function findPosition() {
        $('.con').each(function () {
            if (($(this).offset().top - $(window).scrollTop()) < 20) {
                $('.menu a').removeClass('on');
                $('.menu').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('on');
            }
        });
    }

    findPosition();
});