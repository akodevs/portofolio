
app.directive('parallax', function ($timeout) {
    return {
        restrict: 'EA', 
        link: function (scope, element, attr) {   
            $timeout(function(){     
                if ($.isFunction($.fn['themePluginParallax'])) {  
                    $(element[0]).each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = theme.fn.getOptions(attr.pluginOptions);
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginParallax(opts);
                    });  
                } 
            });

        }
    };
});




 