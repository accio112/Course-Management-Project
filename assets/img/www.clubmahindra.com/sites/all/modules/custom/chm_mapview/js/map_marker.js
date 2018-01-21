function initMap(res) {      
     var secheltLoc = new google.maps.LatLng(21.7679, 78.8718),
        markers,
            myMapOptions = {
             zoom: 4,
            center: secheltLoc,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        },       
        map = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);
       if(jQuery(window).width() <= 767){
               map.setZoom(2);
                }
       var markerData=res;
    function initMarkers(map, markerData) {
        var newMarkers = [],
            marker;

        for(var i=0; i<markerData.length; i++) {
            var lat= markerData[i].field_geo_location_lat;
            var lon= markerData[i].field_geo_location_lon;
            var homeLatLng = new google.maps.LatLng(lat,lon);
                                 
            marker = new google.maps.Marker({
                            position: homeLatLng,
                            map: map,
                            icon:Drupal.settings.basePath +'sites/all/themes/CM_Prospect/images/mandala.png'
                        });
           
            boxText = getHtml(markerData[i]),
            //these are the options for all infoboxes
            infoboxOptions = {
                content: boxText,
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-120, -155),
                zIndex: null,
                
            };
			
			// add a click listener to the marker
			google.maps.event.addListener(marker, 'click', function() {
			// reference clicked marker
			var curMarker =  this;
			// loop through all markers
			jQuery.each(markers, function(index, marker) {
			// if marker is not the clicked marker, close the marker
			if(marker !== curMarker) {
			marker.infobox.close();
			}
			});
			});
			
            newMarkers.push(marker);
            //define the text and style for all infoboxes
           
            //Define the infobox
            newMarkers[i].infobox = new InfoBox(infoboxOptions);
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    newMarkers[i].infobox.open(map, this);
                    
                    map.panTo(markerData[i].homeLatLng);
                }
            })(marker, i));
        }
        return newMarkers;
    }
     var listener = google.maps.event.addListener(map, "zoom_changed", function() {
      if (map.getZoom() < 2) map.setZoom(2); 
     });
    markers = initMarkers(map, res);
   }
   
    jQuery(document).ready( function () {
      var direction_html = jQuery('#edit-field-directions-tid').html();
	  var terrain_html = jQuery('#edit-field-terrain-tid').html();
	  var holiday_html = jQuery('#edit-field-holiday-type-tid').html();
	jQuery('#views-exposed-form-resort-list-view-all-page').after('<div class="app-loader"></div>');
	jQuery('#edit-field-directions-tid, #edit-field-terrain-tid, #edit-field-holiday-type-tid').change(function() {
	
      var direction = jQuery('#edit-field-directions-tid').val();
	  var terrain = jQuery('#edit-field-terrain-tid').val();
	  var holiday = jQuery('#edit-field-holiday-type-tid').val();
	  var changed_id = jQuery(this).attr("id");
  
	   jQuery.ajax({
                        url: Drupal.settings.basePath +"map-resorts-filters-update",
                            method: 'POST',
                            data: { directions: direction, terrain : terrain, holiday:holiday, changed_id : changed_id },
                            success : function(data) {
							if(data.directions)
							  jQuery('#edit-field-directions-tid').html(data.directions);
							if(data.terrain)
							  jQuery('#edit-field-terrain-tid').html(data.terrain);
							if(data.holiday)
							  jQuery('#edit-field-holiday-type-tid').html(data.holiday);
							 if(data.holiday == 'All' || data.terrain == 'All' || data.directions == 'All') {
							 jQuery('#edit-field-directions-tid').html(direction_html);
							 jQuery('#edit-field-terrain-tid').html(terrain_html);
							 jQuery('#edit-field-holiday-type-tid').html(holiday_html);
							 }
                       jQuery(".app-loader").html('');
                  },
                      beforeSend : function() {
                      jQuery(".app-loader").html('<div class="ajax-progress ajax-progress-throbber">&nbsp;</div>');
                  }
                      });
	  
    });

          map_data=JSON.parse(jQuery('#map_canvas').attr('map-data'));
         
	  initMap(map_data)
          jQuery("#map-view select").on('change', (function(e) {
                 e.preventDefault();
                 e.stopPropagation();
                  jQuery.post("map-update", jQuery('#views-exposed-form-resort-list-view-all-page').serialize(),
                    function(data) {
                        map_data=JSON.parse(data);
                        initMap(map_data);
                    });
              

            }));
         
    });
     function getHtml(result){
         var contentString = '<div id="content" style="width:480px; font-family: Calibri, Arial; !important">';
             contentString += '<div id="siteNotice"></div>';
             contentString += '<div class="col_12 blogPages" >';
             contentString +=        '<a href="'+result.path+'"><h2>'+result.title+'</h2></a>';
             contentString += ' </div>';
	     contentString += '<div class="col_3">';
             contentString +=    '<img src="'+result.image_url+'">';
             contentString += '</div>';
             contentString += '<div class="col_9 pL10  font_sm" >';
             contentString +=   '<p">'+result.field_display_address_value+'</p>';
             if(result.field_location_mobile_value)
               contentString +=   '<p class="mT5"><b>Mobile:</b> '+result.field_location_mobile_value+'</p>';
             if(result.field_location_phone_value)
               contentString +=   '<p><b>Tel:</b>'+result.field_location_phone_value+'.</span> </p>';
             if(result.field_location_email_value){
                contentString +=   '<p>';
                contentString +=   '<b>Email:</b> <a href="mailto:'+result.field_location_email_value+'">';
                contentString +=     result.field_location_email_value+'</a>';
                contentString +=     '</p> ';
             }
             contentString += '</div>';
             contentString += '</div>';
      return contentString;
    }
