/*
	jCustomPlaceholder.v0.1.js copyright Tony Bispo Pinheiro aka Tony Pine
*/

(function($) {

    // methods and settings var
    var settings, methods = {

        init: function(options) {

            // Se o navegador suporta 'placeholder' nao executa
            if (Modernizr.input.placeholder) {
                return false;
            }

            //defaults settings
            settings = $.extend({
                'activeClass': 'placeholderAtivo'
            }, options);

            return this.each(function() {
                var $this = $(this);

                if ($this.val() === '') {
                    $this.val($this.attr('placeholder')).addClass(settings.activeClass);
                }

                $this.bind('focus.tooltip', methods.focusIn);
                $this.bind('blur.tooltip', methods.focusOut);

            });
        },
        focusIn: function() {
            var $this = $(this);
            if ($this.val() == $this.attr('placeholder')) {
                $this.removeClass();
                $this.val('');
            } else {
                $this.select();
            }
        },
        focusOut: function() {
            if ($(this).val() === '') {
                $(this).addClass(settings.activeClass).val($(this).attr('placeholder'));
            }
        }
    };

    $.fn.customPlaceholder = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.customPlaceholder');
        }

    };

})(jQuery);​