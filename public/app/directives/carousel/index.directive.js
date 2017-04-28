
app.directive('carousel', function ($timeout) {
    return {
        restrict: 'EA', 
        link: function (scope, element, attr) {   
            $timeout(function(){     
                if ($.isFunction($.fn['themePluginCarousel'])) {  
                    $(element[0]).each(function() {
                        var $this = $(this),
                            opts;

                        var pluginOptions = theme.fn.getOptions(attr.pluginOptions);
                        if (pluginOptions)
                            opts = pluginOptions;

                        $this.themePluginCarousel(opts);
                    });  
                } 
            });

        }
    };
});




 