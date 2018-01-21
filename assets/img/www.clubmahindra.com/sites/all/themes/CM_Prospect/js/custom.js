jQuery('document').ready(function() {
    jQuery( "#top-right-menu-ul .menu-340 a" ).click(function() {
       dataLayer.push({
        'category':'Members logins',
        'action':'jQuery(this).attr("href")',
        'label':'membersbetaredirect',
        'event':'membersbeta'
        });
    });
    jQuery('#city1').bind('autocompleteSelect', function(event,node){
        jQuery(".confirm-city").val(jQuery(node).data('autocompleteValue'));
    });
    jQuery('#city').bind('autocompleteSelect', function(event,node){
        jQuery(".confirm-city").val(jQuery(node).data('autocompleteValue'));
    });
    jQuery('#mmRight').on('click','div div ul li a',function(){
       var lp =jQuery(this).html();
       var submenu = jQuery('#mmLeft').find('.sel a').html();
       var strSubmenu = submenu.replace(/(<\?[a-z]*(\s[^>]*)?\?(>|$)|<!\[[a-z]*\[|\]\]>|<!DOCTYPE[^>]*?(>|$)|<!--[\s\S]*?(-->|$)|<[a-z?!\/]([a-z0-9_:.])*(\s[^>]*)?(>|$))/gi, ''); 
        dataLayer.push({
           'event':'GAEvent',
           'eventCategory':'Our 44 Resorts',
           'eventAction':strSubmenu.trim() + " Drop down resort " + lp,
           'eventLabel':location.pathname
        });  
        console.log(strSubmenu.trim());
        console.log(location.pathname);
    });
    jQuery('#resort-search-search-form--2').on('click','ul li div',function(){
        var resortName = jQuery(this).html();
        dataLayer.push({
            'event':'GAEvent',
            'eventCategory':'Search our Resorts',
            'eventAction':resortName,
            'eventLabel':location.pathname
        });
        console.log(location.pathname);
      });
});
jQuery(function() {
  jQuery('.jcarousel-view--terrain--block-4 .field-content a img').each(
  function() {
    var img = jQuery(this);
    var liContent = jQuery(this).parent().parent().parent().parent();
    var theight= jQuery(liContent).find('.views-field-view-node').css('height');
      if(img.data('src') && !img.data('loaded')) {
        // make src value like data-src
        img.attr('src', img.data('src')).data('loaded', true);
      }
     // console.log('heigt',theight);
      jQuery(liContent).find('.views-field-field-resort-slider-images').css('margin-top','-'+theight);
    });
});

