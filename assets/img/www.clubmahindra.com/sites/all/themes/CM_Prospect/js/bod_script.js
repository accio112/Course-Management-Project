jQuery(document).ready(function() {
    jQuery(".gradientBG_slide").mouseenter(function(){
        jQuery(".gradientBG_slide").slideDown("faster");
    });

    /* Code added by Netra */
    var slider = jQuery('.bx-client-slide').bxSlider({
        mode: 'horizontal'
    });
    jQuery('.board-directors-list-sec .col_4').on("click", function (e) {
	//alert('testing');
        jQuery('#board-directors-details').modal('show');
        var count = jQuery(this).index();
        jQuery('.modal-content').css("opacity", "0")
        e.preventDefault();
        setTimeout(function () {
            jQuery('.modal-content').css("opacity", "1")
            slider.reloadSlider({
                startSlide: count,
                controls: true,
                pager: false,
                touchEnabled: true,
                adaptiveHeight: true,
                infiniteLoop: false,
                hideControlOnEnd: true,
                touchEnabled: false
            });
        }, 200);
        /* Code added by Netra */
    })
	
	jQuery('.board-directors-list-sec .col_12').on("click", function (e) {
        jQuery('#board-directors-details').modal('show');
        var count = jQuery(this).index();
        jQuery('.modal-content').css("opacity", "0")
        e.preventDefault();
        setTimeout(function () {
            jQuery('.modal-content').css("opacity", "1")
            slider.reloadSlider({
                startSlide: count,
                controls: true,
                pager: false,
                touchEnabled: true,
                adaptiveHeight: true,
                infiniteLoop: false,
                hideControlOnEnd: true,
                touchEnabled: false
            });
        }, 200);
        /* Code added by Netra */
    })
	
	
	;
});
