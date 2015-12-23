'jQuery' in window && (function($){
    'use strict';
    
    //current
    $(function(){
        var url = window.location.pathname;
        $('nav li a[href="'+url+'"]').parent().addClass('current');
    });
    
    //scroll
    $(function(){
        $('a[href^=#]').click(function() {
            var speed = 300;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });







})(jQuery);