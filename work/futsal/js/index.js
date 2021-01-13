$(function () {
    $('.customDate').datepicker({
        format: 'yyyy-mm-dd',
        autoHide: true
    });
    $("#checkall").click(function () {
        if ($("#checkall").prop("checked")) {
            $("input[name=chk]").prop("checked", true);
        } else {
            $("input[name=chk]").prop("checked", false);
        }
    });
    var fileTarget = $('.filebox .upload-hidden');
    fileTarget.on('change', function () {
        // 값이 변경되면 
        if (window.FileReader) { // modern browser 
            var filename = $(this)[0].files[0].name;
        } else { // old IE 
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
        } 
        // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename);
    });

})

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