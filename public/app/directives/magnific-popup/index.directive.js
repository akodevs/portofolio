

app.directive('magnificPopup', function ($timeout) {
    return {
        restrict: 'EA', 
        link: function (scope, element, attr) {   
			$timeout(function(){    
 				if(attr.target == undefined) { 
		          	$(element).magnificPopup({ 
		    			type: 'iframe',
						mainClass: 'my-mfp-zoom-in' 
					});  
		         } else {
		         	$(element).click(function() {
		          		$.magnificPopup.open({
					        items: {
					            src: attr.target
					        },
					        type: 'inline', 
							fixedContentPos: false,
							fixedBgPos: true, 
							overflowY: 'auto', 
							closeBtnInside: true,
							preloader: false, 
							midClick: true,
							removalDelay: 300,
							mainClass: 'my-mfp-zoom-in'
					    });
		          	});
		         }
			});

        }
    };
});




 