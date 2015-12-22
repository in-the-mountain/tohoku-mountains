'jQuery' in window && (function($){
    'use strict';
    
    //current
    $(function () {
        var url = window.location.href;
        var filename = url.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1];
        $('#results').text(filename);

    });
    






})(jQuery);