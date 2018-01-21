jQuery(document).ready(function(e) {
    var GetAddress = window.location.origin;
    var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
      jQuery("#btndnd").click(function(e){
	  	  var call_recieved_frm1 = jQuery.trim(jQuery("#call_recieved_frm1").val());
		  var call_recieved_on1 = jQuery.trim(jQuery("#call_recieved_on1").val());
		  var call_recieved_frm2 = jQuery.trim(jQuery("#call_recieved_frm2").val());
		  var call_recieved_on2 = jQuery.trim(jQuery("#call_recieved_on2").val());
		  //alert(call_recieved_frm1 + '--' + call_recieved_on1);
		  var mobilerule=/^(0?[0-9]{10})$/;
		  
		  if(call_recieved_frm1 == '' ){
		  jQuery("#call_recieved_frm1").addClass("error");
		  jQuery("#call_recieved_frm1").focus();
           return false;
		  }
		  else if(call_recieved_on1 == '') {
		  jQuery("#call_recieved_on1").addClass("error");
          jQuery("#call_recieved_on1").focus();
           return false;
		  }
		  else if(!mobilerule.test(call_recieved_frm1)) {
		        jQuery("#call_recieved_frm1").addClass("error");
                jQuery("#call_recieved_frm1").focus();
                return false;
		  }
		  else if(!mobilerule.test(call_recieved_on1)) {
		        jQuery("#call_recieved_on1").addClass("error");
                jQuery("#call_recieved_on1").focus();
                return false;
		  }
		  if (call_recieved_frm2 != '') {
		       if(!mobilerule.test(call_recieved_frm2)){
				jQuery("#call_recieved_frm2").addClass("error");
                jQuery("#call_recieved_frm2").focus();
                return false;
				}
		  }
		  
		  if (call_recieved_on2 != '') {
		       if(!mobilerule.test(call_recieved_on2)){
				jQuery("#call_recieved_on2").addClass("error");
                jQuery("#call_recieved_on2").focus();
                return false;
				}
		  }
		  
		  jQuery.ajax({
                url:  base_path +'/DND-data',
                type: 'GET',
				data: {callreceivedfrom1:call_recieved_frm1,callreceivedon1:call_recieved_on1,callreceivedfrom2:call_recieved_frm2,callreceivedon2:call_recieved_on2},
                success: function(data) {
				//alert(data);
				jQuery('#thankyou').show();
				jQuery('.holidayTable').hide();
				jQuery('#btndnd').hide();
				setTimeout(function(){ window.location.href = base_path +"/contact-us/dnd-registry"; }, 5000);
				 jQuery('#call_recieved_frm1').val('');
				 jQuery('#call_recieved_on1').val('');
				 jQuery('#call_recieved_frm2').val('');
				 jQuery('#call_recieved_on2').val('');
				/*if(data == 'success'){
				     alert('suceess!');
				}*/
            }
	  });
	  e.preventDefault();
	  });
})(jQuery);


/*function reset_feedbackdata() {
           var isChecked = $("input[name=feedback_type]:checked").val('');
		   var name = $("#feedback_name").val('');
		   var mailing_addr = $("#mailing_addr").val('');
		   var feedback_email = $("#feedback_email").val('');
		   var feedback_country = $("#feedback_country").val('');
		   var feedback_state = $("#feedback_state").val('');
		   var feedback_city = $("#feedback_city").val('');
		   var feedback_zipCode = $("#zip_code").val('');
		   var feedback_contactNo = $("#contact_no").val('');
		   var feedback_subject = $("#feedback_subject").val('');
		   var feedback_reason = $("#why").val('');
		  
}*/
