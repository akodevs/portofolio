
app.directive('animate', function ($timeout) {
    return {
        restrict: 'EA', 
        link: function (scope, element, attr) { 
            if ($.isFunction($.fn['themePluginAnimate'])) {  
                var opts;  
                
                var pluginOptions = theme.fn.getOptions(attr);  
                if (pluginOptions)
                    opts = pluginOptions;

                console.log(opts)

                $(element[0]).themePluginAnimate(opts); 
            }
        }
    };
});