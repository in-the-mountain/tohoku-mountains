'jQuery' in window && (function($){
    'use strict';
    
    //current
    //表示中のurlを取得して指定したセレクタの中に同じurlのリンクがあったときにクラスを付与するというもの
    $(function(){
        var url = window.location.pathname;
        $('nav li a[href="'+url+'"]').parent().addClass('current');
    });
    
    //scroll
    //#で始まるリンクをクリックするとアンカーを設定しているid要素までの位置を取得してアニメーションするというもの
    $(function(){
        $('a[href^=#]').click(function() {
            var speed = 300;
            var href= $(this).attr("href");
            //#だけのリンクの時はhtmlタグをセレクタとする
            var target = $(href === "#" || href === "" ? 'html' : href);
            var position = target.offset().top;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });
    //roll-over
    $(function(){
        $('a img').hover(function(){
            $(this).attr('src', $(this).attr('src').replace('_o', '_h'));
        }, function(){
                $(this).attr('src', $(this).attr('src').replace('_h', '_o'));
        });
    });






})(jQuery);