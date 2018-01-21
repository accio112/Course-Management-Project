jQuery(document).ready(function(e) {
var GetAddress = window.location.origin;
var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
jQuery('#newclose').on("click", function (e) {
 //jQuery('#overlay').hide();
     jQuery('#overlay,#pop_thankyou').hide();
	/*  location.reload();*/ 
	jQuery(".name").val('');
	jQuery(".email").val('');
	jQuery(".city").val('');
	jQuery("#countrycode").prop('readonly',false);	
	jQuery("#countrycode").val('');
	jQuery(".mobile").val('');
	jQuery(".year_of_birth").val('19');
});
jQuery('#Join_club1').click(function(e){
	e.preventDefault();
	//jQuery('#viewtravel').hide();
	jQuery('#join_the_club_new').show();
	jQuery(window).scrollTop(jQuery('#join_the_club_new').offset().top -100);
	});

      jQuery("#city").on('blur',function(e){
	  	  var city = jQuery.trim(jQuery("#city").val());


jQuery("#countrycode").val('');

	jQuery.ajax({
                url: base_path +'/getCountryCode',
                type: 'POST',		
				data: {city:city},
                success: function(data) {
				jQuery.trim(data);
			

			var isNumeric = jQuery.isNumeric( data );  
			if(isNumeric){
			 jQuery("#countrycode").val(data);
			 jQuery('#countrycode').prop('readonly',true);
			jQuery('#mobile').focus();
			}else{
			jQuery('#countrycode').focus();
			jQuery('#countrycode').prop('readonly',false);			
			}	

             }
		   
		  
	  });
	  e.preventDefault();
	  });

});   