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




    $('.tab-header').each(function (element) {
        var slider_width,
            tab_width,
            left_position,
            $active,
            $content,
            $links = $(this).find('.tab-list'),
            $currentTab = $(this).find('a.on')

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        //$active.addClass('on');
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



    $("input[type='file']").change(function () {
        //input file 태그.
        var file = this;
        //파일 경로.
        var filePath = file.value;
        //전체경로를 \ 나눔.
        var filePathSplit = filePath.split('\\');
        // //전체경로를 \로 나눈 길이.
        var filePathLength = filePathSplit.length;
        // //마지막 경로를 .으로 나눔.
        var fileNameSplit = filePathSplit[filePathLength - 1].split('.');
        // //파일명 : .으로 나눈 앞부분
        var fileName = fileNameSplit[0];
        // //파일 확장자 : .으로 나눈 뒷부분
        var fileExt = fileNameSplit[1];
        // //파일 크기
        var fileSize = file.files[0].size;

        $(file).parent().find('.file_url').text(fileName + "." + fileExt);

        //console.log('파일 경로 : ' + filePath);
        //console.log('파일명 : ' + fileName);
        //console.log('파일 확장자 : ' + fileExt);
        //console.log('파일 크기 : ' + fileSize);
    });

    $('.drop').click(function () {
        $(this).parent().toggleClass('on');
    })
});