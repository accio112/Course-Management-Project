(function($) {

    /**
     * Find Drupal Node ID based on <body> element classes.
     *
     * @return Node ID or false
     **/

    Drupal.behaviors.clubcustom = {
        attach: function(context, settings) {
	  jQuery('.close_icon.fR').click(function() {  
          var address1value = jQuery('#address1').attr('value');
          jQuery('#address1').val(address1value);
        });
            location1 = '';
            var geocoder = '';
            var base_path = settings.clubcustom.settings.base_url;    
            function calculateRoute(from, to,request) {
			    
                var directionsService = new google.maps.DirectionsService();
                var directionsDisplay = new google.maps.DirectionsRenderer();
                /*if(request=='click'){
					var map = new google.maps.Map(document.getElementById('map_canvas_tooltip'), {
						zoom: 7,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					});
				}else{*/
				    var map = new google.maps.Map(document.getElementById('map_canvas'), {
						zoom: 2,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					});
					
				var listener = google.maps.event.addListener(map, "zoom_changed", function() {
				    if(jQuery('#print_button').length > 0) {
					  if (map.getZoom() < 2) map.setZoom(2); 
					}
					else {
					  if (map.getZoom() < 1) map.setZoom(1); 
					}
 				});
				//}
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById('distance_direct'));

                var request = {
                    origin: from,
                    destination: to,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            }
            jQuery("#get_route").on('click', (function(e) {
			var iframe_url = '<iframe src="' + base_path+'/'+'maps-directions-view?nid=' + Drupal.settings.resortNid + '&start_address=' + jQuery('#address1').val() +'" width="100%" height="525px"></iframe>';
			jQuery('#iframe-map-view-content').html(iframe_url);
                 //jQuery('#distance_direct').empty();
                //calculateRoute(jQuery('#address1').val(), jQuery('#address2').val(),'click');
                ShowDialog(false);

            }));
            if(jQuery('#address1').val() !== undefined) {
             window.onload = calculateRoute(jQuery('#address1').val(), jQuery('#address2').val(),'load');
            }
        }
    };

})(jQuery);

