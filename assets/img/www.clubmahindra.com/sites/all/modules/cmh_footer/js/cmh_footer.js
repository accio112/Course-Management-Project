/**
 * @file
 * The JS file for Availability page.
 *
 */
( function(footer){
  Drupal.behaviors.footer = {
		attach: function (context, settings){
                   var GetAddress = window.location.origin;
                   var base_path = settings.cmh_footer.settings.base_url;
      /*to get states on change of contact type*/
      footer('#contact_type').change(function(){
        var contact_type_val = footer(this).val();
        footer.ajax({
          type:'post',
          data:'contact_type=' + contact_type_val,
          url: base_path +'/get_office_states',
          async:false,
          dataType: 'json',
          success:function(data){
            footer("#contact_state").empty();
            footer("#contact_city").empty();
						var newOption = footer('<option value="0">City / Location</option>');
						footer('#contact_city').append(newOption);
						footer.each(data, function (index,item) {
						footer("#contact_state").append("<option value=" + index + ">" + item + "</option>")
            });
			var foption = jQuery('#contact_state' + ' option:first');
			var soptions = jQuery('#contact_state' + ' option:not(:first)').sort(function(a, b) {
			return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			});
			jQuery('#contact_state').html(soptions).prepend(foption); 	
          }
        });
      });
      
      /*to get the cities on change of state*/
      footer('#contact_state').change(function(){
        var contact_state_val = footer(this).val();
        var contact_type_val = footer('#contact_type').val();
        footer.ajax({
          type:'post',
          data:'contact_state=' + contact_state_val + '&contact_type=' + contact_type_val,
          url:  base_path +'/get_office_cities',
          async:false,
          dataType: 'json',
          success:function(data){
            footer("#contact_city").empty();
            footer.each(data, function (index,item) {
                 footer("#contact_city").append("<option value=" + index + ">" + item + "</option>")
            });
			var foption = jQuery('#contact_city' + ' option:first');
			var soptions = jQuery('#contact_city' + ' option:not(:first)').sort(function(a, b) {
			return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			});
			jQuery('#contact_city').html(soptions).prepend(foption); 	
          }
        });
      });
      
      footer('#contact_city').change(function(){
        var contact_city_val = footer(this).val();
        var contact_state_val = footer('#contact_state').val();
        var contact_type_val = footer('#contact_type').val();
        footer.ajax({
          type:'post',
          data:'contact_city=' + contact_city_val +'&contact_state=' + contact_state_val + '&contact_type=' + contact_type_val,
          url: base_path +'/get_offices',
          async:false,
          success:function(data){ 
		  //alert(data);
            footer(".adressescount").html('');
            footer(".adressescount").html(data);
          }
        });
      });
      
    }	
	};
}(jQuery));	
