$(function () {

    $('.motxt').each(function(){
        var more = $(this).children('.more_txt');
        var more_txt = more.text();
        var more_txt_short = more_txt.substring(0,42)+"...";
        var btn_more = $('<a href="javascript:void(0)" class="more fz20 fc777">더보기 <img src="img/img5.png" alt=""></a>');

        
        $(this).append(btn_more);
        
        if(more_txt.length >= 100){
            more.html(more_txt_short)
            
        }else{
            btn_more.hide()
        }
        
        btn_more.click(toggle_content);
        // 아래 bind가 안 되는 이유는??
        // btn_more.bind('click',toggle_content);

        function toggle_content(){
            if($(this).hasClass('short')){
                // 접기 상태
                $(this).html('더보기 <img src="img/img5.png" alt="">');
                more.html(more_txt_short)
                $(this).removeClass('short');
            }else{
                // 더보기 상태
                $(this).html('접기 <img src="img/img6.png" alt="">');
                more.html(more_txt);
                $(this).addClass('short');

            }
        }
    });

});