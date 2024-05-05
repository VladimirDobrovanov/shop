/******************************************************************** 
 jquery-fake-loader
 *Version:    2.0.0 - 2019
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
********************************************************************/
(function ($) {
    $.fakeLoader = function(options) {

        var settings = $.extend({
            targetClass:'fakeLoader',
            timeToHide: 4000,               
            bgColor: '#bbb753', 
            spinner:'spinner7'
        }, options);
 
        var spinner07 = '<div class="fl fl-spinner spinner7"><div class="fakeloader__container"><img src="img/fakeloader__gif.gif" alt="loader"></div></div>'; 

        var el = $('body').find('.' + settings.targetClass);

        el.each(function() {
            var a = settings.spinner;
            
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }
        });

        el.css({
            'backgroundColor':settings.bgColor
        });

        setTimeout(function () {
            $(el).fadeOut();
        }, settings.timeToHide);
    }; 
}(jQuery));


$(document).ready(function() {
    $.fakeLoader();
});;



