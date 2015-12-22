'jQuery' in window && (function($){
    'use strict';
    
    //current
    $(function(){
        var url = window.location.pathname;
        $('nav li a[href="'+url+'"]').parent().addClass('current');
    });






})(jQuery);