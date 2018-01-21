(function(jQuery) {
    jQuery(function() {
        var jcarousel = jQuery('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = jQuery(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }
 
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                jQuery('.jcarousel-view--terrain--block-4 .field-content a img').each(
                function() {
                  var img = jQuery(this);
                  var liContent = jQuery(this).parent().parent().parent().parent();
                  var theight= jQuery(liContent).find('.views-field-view-node').css('height');
                    if(img.data('src') && !img.data('loaded')) {
                      // make src value like data-src
                      img.attr('src', img.data('src')).data('loaded', true);
                    }
                    console.log('heigt',theight);
                    jQuery(liContent).find('.views-field-field-resort-slider-images').css('margin-top','-'+theight);
                  });
            })
            .jcarousel({
                wrap: 'circular'
            });

        jQuery('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        jQuery('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        jQuery('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                jQuery(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                jQuery(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
