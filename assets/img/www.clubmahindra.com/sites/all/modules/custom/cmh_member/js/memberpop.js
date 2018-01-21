jQuery(document).ready(function(e) {
var GetAddress = window.location.origin;
var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
jQuery('#newclose').on("click", function (e) {
 //jQuery('#overlay').hide();
     jQuery('#overlay,#pop_thankyou').hide();
	  /*location.reload();*/ 
	jQuery(".name").val('');
	jQuery(".email").val('');
	jQuery(".city").val('');
	jQuery('#contrycode').prop('readonly',false);	
	jQuery("#contrycode").val('');
	jQuery(".mobile").val('');
	jQuery(".year_of_birth").val('19');
});
      jQuery("#city1").on('blur',function(e){
	  	  var city = jQuery.trim(jQuery("#city1").val());

jQuery("#contrycode").val('');


	jQuery.ajax({
                url: GetAddress +'/getCountryCode',
                type: 'POST',		
		data: {city:city},
                success: function(data) {

			jQuery.trim(data);
		
			
			
			var isNumeric = jQuery.isNumeric( data );  
			if(isNumeric){
			 jQuery("#contrycode").val(data);
			 jQuery('#contrycode').prop('readonly',true);
			jQuery('#mobiles1').focus();
			}else{
			jQuery('#contrycode').focus();
			jQuery('#contrycode').prop('readonly',false);			
			}	
			}
		   
		  
	  });
	  e.preventDefault();
	  });

});   
