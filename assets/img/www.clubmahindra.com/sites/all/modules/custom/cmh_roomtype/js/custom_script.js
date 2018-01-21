// JavaScript Document
//var mouse_is_inside = false;
jQuery(document).ready(function(e) {
   /*starts for fancybox popup*/
   jQuery('.fancybox-thumbs').fancybox({
	closeBtn  : true,
	nextClick : true,                
	titleShow : true,
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

    /*Ends for fancybox popup*/
	 
});

