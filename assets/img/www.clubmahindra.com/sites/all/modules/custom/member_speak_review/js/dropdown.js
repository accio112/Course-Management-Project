jQuery(document).ready(function() {
    jQuery('#resorts').children('optgroup').children().unwrap();
    var nid = jQuery.trim(jQuery("#resorts").val());
    var resortnameid = jQuery.trim(jQuery("#resortname").val());
    var i = jQuery("#resorts option[value='" + resortnameid + "']").index();
    if (i >= 0)
    {
        jQuery('#resorts')[0].selectedIndex = i;
    }
    jQuery('#resorts').on('change', function() {
        var alias = jQuery.trim(jQuery("#resorts").val());
        var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
       // var nid = jQuery.trim(jQuery("#resorts").val());
       // jQuery('#overlay1').show();
        /*jQuery.ajax({
            url: "http://www.clubmahindra.com/membership/member_speak",
            data: {newnid: nid},
            type: "POST",
            success: function(html)
            { */
	if(alias=='All' || alias=='all') { 
	    window.location.replace(base_path+"/membership/member-reviews");
	} else {
            window.location.replace(base_path+"/" + alias);
        }
              /*  window.location.replace("http://www.clubmahindra.com/membership/resort_" + nid);

                jQuery('#overlay1').hide();
                if (html) {
                    jQuery("#replaceThisContainer").html(html);
                    //  jQuery('div#loadmoreajaxloader').hide(); 
                    var show_more_len = jQuery('.show_more').length;
                    if (show_more_len > 1)
                    {
                        jQuery('.show_more:gt(0)').hide();
                    }
                    var xtywe = jQuery('.1').length;
                    if (xtywe < 6) {
                        jQuery('.show_more_main').hide();
                    }
                } else {
                    jQuery('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
                }
            }
        }); */


    });

});
