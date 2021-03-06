
app.directive('isotope', function ($timeout) {
    return {
        restrict: 'EA', 
        link: function (scope, element, attr) {   
			$timeout(function(){  
	        	if ($.isFunction($.fn['themePluginSort'])) {  
					$(element[0]).each(function() { 

                        var $this = $(this),
                            opts;

                        var pluginOptions = theme.fn.getOptions(attr.pluginOptions);
                        if (pluginOptions)
                            opts = pluginOptions;
	   
						$this.themePluginSort(opts);
					});  
				}
			})
        }
    };
});




 