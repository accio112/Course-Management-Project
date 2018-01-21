jQuery(document).ready(function(e) {
   /*starts for fancybox popup*/
   jQuery('.fancybox-thumbs-rooms').fancybox({
	closeBtn  : true,
	nextClick : true,                
	titleShow : true,
	maxWidth  : 600,
	helpers : {
	title : {
	type : 'inside'
	},
	overlay : {
            			
				locked: false
        			},
						thumbs : {
							width  : 50,
							height : 50
						}
	}
	});
	 
});

