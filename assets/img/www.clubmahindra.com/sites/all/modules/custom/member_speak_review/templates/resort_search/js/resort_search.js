(function (jQuery) {
  Drupal.behaviors.programmeSearch = {
    attach: function (context) {
     jQuery('#edit-autocomplete-field--2').focus(
        function(){
          jQuery(this).val('');
      });
      jQuery("#edit-autocomplete-field--2", context).bind('autocompleteSelect', function(event, node) {
	var key = jQuery(node).data('autocompleteValue');
        var label = jQuery(node).text();
 	clevertap.event.push("Resort Searched - Home Page", {
		  "Keyword":label,
		  "Landing Page":key
		});
        // If matches found...
       if (key != '0') {
          // Set the value of this field.
          jQuery(this).val(label);
          // Redirect user to entity path.
          window.location = Drupal.settings.basePath + key;
        }
        else {
          // If no matches, reset.
          jQuery(this).val('');
          jQuery(this).focus();
        }
      });
    }
  };
})(jQuery);
