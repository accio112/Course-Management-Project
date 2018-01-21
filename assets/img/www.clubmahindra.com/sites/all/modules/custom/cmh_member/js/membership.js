jQuery(document).ready(function(e) {
var GetAddress = window.location.origin;
var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
jQuery('#newclose').on("click", function (e) {
 jQuery('#overlay1').hide();
     jQuery('#overlay1,#pop_thankyou').hide();
	 /* location.reload();*/ 
	jQuery(".name").val('');
	jQuery(".email").val('');
	jQuery(".city").val('');
	jQuery('#contrycode1').prop('readonly',false);
	jQuery("#contrycode1").val('');
	jQuery(".mobile").val('');
	jQuery(".year_of_birth").val('19');
});
      jQuery("#city").on('blur',function(e){
	  	  var city = jQuery.trim(jQuery("#city").val());

jQuery("#contrycode1").val('');


	jQuery.ajax({
                /*url: 'http://172.16.25.76/clubmahindra_prospect/getCountryCode',*/
		url: GetAddress+'/getCountryCode',
                type: 'POST',		
		data: {city:city},
                success: function(data) {

			jQuery.trim(data);
			
			
			var isNumeric = jQuery.isNumeric( data );  
			if(isNumeric){
			 jQuery("#contrycode1").val(data);
			 jQuery('#contrycode1').prop('readonly',true);
			 jQuery('#mobiles').focus();
			}else{
			jQuery('#contrycode1').focus();
			jQuery('#contrycode1').prop('readonly',false);			
			}	
			}
		   
		  
	  });
	  e.preventDefault();
	  });

});   
