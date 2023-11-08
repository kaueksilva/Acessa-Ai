/**
* Init - Application Modules & jQuery Plugins
* @author Richard Santos <rsantos@tray.com.br>
*
*/
;(function($){

    if ($.fn.formComplete) {
        $('form.limpar').formComplete();
    }

    if ($.fn.colorApply) {
        $(document).colorApply();
    }

    if ($.fn.subMenus) {
        $('.menu-esquerdo-dinamico > ul').subMenus();
    }

})(jQuery);
