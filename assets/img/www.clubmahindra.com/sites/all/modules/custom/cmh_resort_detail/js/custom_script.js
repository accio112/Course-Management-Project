// JavaScript Document

jQuery(document).ready(function(e) {
 /*start for weather functionality*/
 
 /*05/10/2015*/
                var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
		var namweather = jQuery("#nameweather").text();
		namweather=namweather.trim();
		var namweathertext = namweather.length;
		//alert(namweathertext);
		if(namweathertext > 11){
		jQuery('#nameweather').css("fontSize", 36);
		jQuery('#nameweather').addClass('mT5');
		}
/*05/10/2015*/
 
		var city;
		
		var icon_display = jQuery.trim(jQuery("#hidden3").val());
		/*var hidden1 = jQuery.trim(jQuery("#hidden2").val());
		alert(hidden1);*/
			var icon_display = jQuery.trim(jQuery("#hidden3").val());
		/*var hidden1 = jQuery.trim(jQuery("#hidden2").val());
		alert(hidden1);*/
		
		if(icon_display == 'chancerain' || icon_display == 'rain'  || icon_display == 'fog'  )  
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').addClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').removeClass('weathercloudy');
		jQuery('#bgimg').removeClass('weatherstorm');
		}
		
		else if(icon_display == 'clear' )
		{
		jQuery('#bgimg').addClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').removeClass('weathercloudy');
		jQuery('#bgimg').removeClass('weatherstorm');
		}
		else if(icon_display == 'partlycloudy' || icon_display == 'mostlycloudy' || icon_display == 'cloudy')
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weatherstorm');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').addClass('weathercloudy');
		}
		
		else if(icon_display == 'chancetstorms' || icon_display == 'tstorms'  )
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').addClass('weatherstorm');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weathercloudy');
		}
		
		else if(icon_display == 'snow' || icon_display == 'chancesnow'  )
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').addClass('weathersnow');
		jQuery('#bgimg').removeClass('weatherstorm');
		jQuery('#bgimg').removeClass('weathercloudy');

		}

		jQuery("#txtdate").datepicker({
		minDate: 0,
		maxDate: jQuery("#hiddendate").val(), 
	
    onSelect: function(dateText, inst) {
		var d = new Date(dateText);
		var d1= jQuery.datepicker.formatDate("yy-mm-dd", d);
		var city = jQuery.trim(jQuery("#hidden1").val());
		var nid = jQuery.trim(jQuery("#hidden2").val());
		
		jQuery.ajax
        ({
              url: base_path+"/resortweather1",
			  type: "POST",
			  //dataType: "json",
              data: {newDate : d1 , newCity : city, Nid : nid},
              success: function(data)
              {
				//alert(data);
				var icon_val = jQuery(data).filter('#hidden3').val();
				//alert(icon_val);
				var date1 = jQuery(data).find('#date1').text();
				
				jQuery('#date1').html(date1);
				
				var number_date_1 = jQuery(data).find('#number_date1').attr('src');
				//alert(number_date_1);
				
				jQuery('#number_date1').attr('src', number_date_1);

				var temp_date1 = jQuery(data).find('#temp_date1').text();
				jQuery('#temp_date1').html(temp_date1);
				
				var date2 = jQuery(data).find('#date2').text();
				jQuery('#date2').html(date2);
				
				var number_date_2 = jQuery(data).find('#number_date2').attr('src');
				
				jQuery('#number_date2').attr('src', number_date_2);
				
				var temp_date2 = jQuery(data).find('#temp_date2').text();
				jQuery('#temp_date2').html(temp_date2);
				
				var date3 = jQuery(data).find('#date3').text();
				jQuery('#date3').html(date3);
				
				var number_date_3 = jQuery(data).find('#number_date3').attr('src');
				jQuery('#number_date3').attr('src', number_date_3);

				var temp_date3 = jQuery(data).find('#temp_date3').text();
				jQuery('#temp_date3').html(temp_date3);
				
				var date4 = jQuery(data).find('#date4').text();
				jQuery('#date4').html(date4);
				
				var number_date_4 = jQuery(data).find('#number_date4').attr('src');
				jQuery('#number_date4').attr('src', number_date_4);

				var temp_date4 = jQuery(data).find('#temp_date4').text();
				jQuery('#temp_date4').html(temp_date4);
				
				var date5 = jQuery(data).find('#date5').text();
				jQuery('#date5').html(date5);
				
				var number_date_5 = jQuery(data).find('#number_date5').attr('src');
				jQuery('#number_date5').attr('src', number_date_5);

				var temp_date5 = jQuery(data).find('#temp_date5').text();
				jQuery('#temp_date5').html(temp_date5);
				
				var date6 = jQuery(data).find('#date6').text();
				jQuery('#date6').html(date6);
				
				var number_date_6 = jQuery(data).find('#number_date6').attr('src');
				jQuery('#number_date6').attr('src', number_date_6);

				var temp_date6 = jQuery(data).find('#temp_date6').text();
				jQuery('#temp_date6').html(temp_date6);
				
				var date7 = jQuery(data).find('#date7').text();
				jQuery('#date7').html(date7);
				
				var number_date_7 = jQuery(data).find('#number_date7').attr('src');
				jQuery('#number_date7').attr('src', number_date_7);

				var temp_date7 = jQuery(data).find('#temp_date7').text();
				jQuery('#temp_date7').html(temp_date7);
				
		
	if(icon_val == 'chancerain' || icon_val == 'rain')  
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').addClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').removeClass('weathercloudy');
		jQuery('#bgimg').removeClass('weatherstorm');
		}
		
		else if(icon_val == 'clear' )
		{
		jQuery('#bgimg').addClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').removeClass('weathercloudy');
		jQuery('#bgimg').removeClass('weatherstorm');
		}
		else if(icon_val == 'partlycloudy' || icon_val == 'mostlycloudy'  )
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weatherstorm');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').addClass('weathercloudy');
		}
		
		else if(icon_val == 'chancetstorms' || icon_val == 'tstorms'  )
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weathersnow');
		jQuery('#bgimg').addClass('weatherstorm');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').removeClass('weathercloudy');


		}
		
		else if(icon_val == 'snow' || icon_val == 'chancesnow'  )
		{
		jQuery('#bgimg').removeClass('weatherclearsky');
		jQuery('#bgimg').removeClass('weatherlightrain');
		jQuery('#bgimg').addClass('weathersnow');
		jQuery('#bgimg').removeClass('weatherstorm');
		jQuery('#bgimg').removeClass('weathercloudy');

		}
					data2 = jQuery(data).find('#2');
				jQuery('#2').html(data2);
				
			   data= jQuery(data).find('#1');
				jQuery('#1').html(data);
				
              },
			  error: function(XMLHttpRequest, textStatus, errorThrown) { 
			alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }       
         });
    }
});

   /*starts for fancybox popup*/
   jQuery('.fancybox-thumbs').fancybox({
    closeBtn  : true,
	titleShow : true,
	nextClick : false, 
	arrows: false,
	maxWidth  : 950,
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
	
	/*For airlines and getting there only*/
	
	var option = jQuery('.controlSelector2 input[type="radio"]:checked').attr('id');
		   jQuery.ajax({
			type: "GET",
			url: base_path+"/operating_airlines",
			data:{option:option},
			success: function( response ) {
				jQuery(".airlinesdetail").html(response);
			}
		});
		
		/*Default button for radio button getting there*/
		var gettingoption = jQuery('.controlSelector input[type="radio"]:checked').attr('id');
		   jQuery.ajax({
			type: "GET",
			url: base_path+"/getting_there_details",
			data:{gettingoption:gettingoption},
			success: function( response ) {
				jQuery(".boxHeight1").html(response);
			}
		});
		
		/*Below code for Airlines details*/
	
	   jQuery('.controlSelector2 input[type=radio][name=route]').change(function() {
   	    var option = jQuery('input[type="radio"]:checked').attr('id');
		
		  jQuery.ajax({
			type: "GET",
			url: base_path+"/operating_airlines",
			data:{option:option},
			success: function( response ) {
				jQuery(".airlinesdetail").html(response);
			}
		});
    });
	
  /*Below code for getting there details*/
	jQuery('.gettingthere').change(function() {
   	    var gettingoption = jQuery('.controlSelector input[type="radio"]:checked').attr('id');
		   jQuery.ajax({
			type: "GET",
			url: base_path+"/getting_there_details",
			data:{gettingoption:gettingoption},
			success: function( response ) {
				jQuery(".boxHeight1").html(response);
			
			}
		});
    });
});

