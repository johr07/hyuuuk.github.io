$(function () {
    $.datepicker.regional['ko'] = {
        dateFormat: 'yy-mm-dd', //Input Display Format 변경
        //showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        showMonthAfterYear: true, //년도 먼저 나오고, 뒤에 월 표시
        yearSuffix: ".", //달력의 년도 부분 뒤에 붙는 텍스트
        monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], //달력의 월 부분 텍스트
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], //달력의 월 부분 Tooltip 텍스트
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //달력의 요일 부분 텍스트
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], //달력의 요일 부분 Tooltip 텍스트
    };
    $.datepicker.setDefaults($.datepicker.regional['ko']);

    $('.calender').datepicker();



    $(".heart").click(function () {
        $(this).toggleClass("on");
    });
    $('.topMove').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });



    $('input[type=range]').rangeslider({
        polyfill: false
    });




    $('.btn_bell').click(function () {
        $('.bell_pop').toggleClass('on');
    });

    $('.btn_chet2').click(function () {
        $('.chet_pop2').toggleClass('on');
    });

    $('.btn_close1').click(function () {
        $('.side02').removeClass('on');
    });

    $('.btn_close2').click(function () {
        $('.chet_pop2').removeClass('on');
    });

    $('.btn_close_pop1').click(function () {
        $('.main_popup').removeClass('on');
    });

    $('.btn_more').click(function () {
        $(this).parent('.side0').toggleClass('on');
    });



    $('.tab-header').each(function (element) {
        var slider_width,
            tab_width,
            left_position,
            $active,
            $content,
            $links = $(this).find('.tab-list'),
            $currentTab = $(this).find('a.on')

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('on');
        $content = $($active[0].hash);
        $links.not($active).each(function () {
            $(this.hash).hide();
        });
        $(this).on('click', 'a', function (e) {
            $active.removeClass('on');
            $content.hide();
            $active = $(this);
            $content = $(this.hash);
            $active.addClass('on');
            $content.show();
            e.preventDefault();
        });
    });
});

function openPopup(id, callback) {
    var thisPopup = $('#popup-' + id);
    thisPopup.after('<div class="popup_overlay"></div>')
    thisPopup.fadeIn(200);
    $('html, body').css({
        overflow: 'hidden'
    });
    $('.popup_overlay').fadeIn(100);

    // $(document).mouseup(function (e) {
    //     if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
    //         $('.popup').fadeOut(100);
    //         $('.popup_overlay').fadeOut(200, function () {
    //             $('.popup_overlay').remove();
    //         });
    //         $('html, body').removeAttr('style');
    //     };
    // });
    $(document).on("click", function (e) {
        if ($('.popup').is(e.target)) {
            $('.popup').fadeOut(100);
            $('.popup_overlay').fadeOut(200, function () {
                $('.popup_overlay').remove();
            });
            $('html, body').removeAttr('style');
        }
    });
};

function closePopup() {
    $('.popup').fadeOut(100);
    $('.popup_overlay').fadeOut(200, function () {
        $('.popup_overlay').remove();
    });
    $('html, body').removeAttr('style');
};


