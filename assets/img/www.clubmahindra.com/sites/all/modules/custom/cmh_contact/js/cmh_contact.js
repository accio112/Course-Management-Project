jQuery(document).ready(function(e) {
   var GetAddress = window.location.origin;
   var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');

    var foption = jQuery('#feedback_country' + ' option:first');
		var soptions = jQuery('#feedback_country' + ' option:not(:first)').sort(function(a, b) {
		return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
		});
		jQuery('#feedback_country').html(soptions).prepend(foption);    

    /*for reset Button*/
	jQuery("#reset_feedback").click(function(e){
	document.getElementById("feed_back_form").reset();
	//stateDropDown.html('<option value="">State</option>');
	stateDropDown.html(renderedTemplate);
	jQuery('#feedback_city').show();
	cityDropDown.html('<option value="">City</option>');
	jQuery(".placeholder").removeClass("error");
	jQuery(".input").removeClass("error");
	jQuery('sup').hide();
	
	var foption = jQuery('#feedback_state' + ' option:first');
	var soptions = jQuery('#feedback_state' + ' option:not(:first)').sort(function(a, b) {
	return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
	});
	jQuery('#feedback_state').html(soptions).prepend(foption); 	
                  
	   e.preventDefault();
	  });
      /*Ends for reset Button*/
      

	//alert('hello Nitesh');
	var UIElms = {
            bodyClass: jQuery('.other-pages'),
            awardSldr: jQuery('#award-sldr'),
            resortSldr: jQuery('#resort-slider-list'),
            resortRoomSldr: jQuery('#resort-room-slider-list'),
            resortFacilitySldr: jQuery('#resort-facility-slider-list'),
            resortActivitySldr: jQuery('#resort-acitivity-slider-list'),
            resortLocalStorySlider: jQuery('#resort-local-story-slider-list'),
            resortChefSlider: jQuery('#resort-chef-slider-list'),
            siteFullHeader: jQuery('#ste-hdr-band'),
            secondarySubNav: jQuery('#sec-sub-nav'),
            subNav: jQuery('#sub-nav'),
            letUsCont: jQuery('#letus-call-you-cont'),
            carBox: jQuery('.car-box'),
            tellUsMore: jQuery('.tell-us-more'),
            tellUsMoreCont: jQuery('.tell_us_more_flds_cont'),
            continueBtn: jQuery('.continue-btn'),
            letusCallForm: jQuery('.let-us-call-form'),
            mapCont: jQuery('.map-cont'),
            mapOverlay: jQuery('#map-overlay'),
            directionOpts: jQuery('.direction-options'),
            holiodayOpts: jQuery('.holiday-options'),
            terrainOpts: jQuery('.terrain-options'),
            callSubmitBtn: jQuery('.call-submit-btn'),
            inputPlaceHolder: jQuery('.placeholder'),
            articleRow: jQuery('.article-row'),
            destinationListPage: jQuery('.destination-list-page'),
            resortSliderLdr: jQuery('#resort-slider-ldr'),
            sexifiedReviews: jQuery('#sexified-review'),
            travelListOptions: jQuery('#travel_option_list'),
            flexiListOpts: jQuery('#flexi_option_list'),
            adults: jQuery('#adults'),
            kids: jQuery('#kids'),
            calc: jQuery('#calc'),
            calcSugg: jQuery('#calc-suggs'),
            resortDtlPage: jQuery('.resort-detail-page'),
            resortMemberReviewCont: jQuery('#member-revw-cont'),
            showMoreRevw: jQuery('#show-mr-revw'),
            resortMapBtn: jQuery('#resort-map-btn'),
            memberReviewSec: jQuery('#resort-member-review-sec'),
            mapActBtn: jQuery('#map-act-btn'),
            addrAnc: jQuery('.address'),
            overlay: jQuery('#overlay'),
            overlayWrap: jQuery('#overlay-wrap'),
            faqCont: jQuery('#faq-cont'),
            feedBackCont: jQuery('#feed-back-cont'),
            feedBackTypeOpts: jQuery('#feed_back_type_opts'),
            feedBackRefererCont: jQuery('#feed_back_referer_cont'),
            refererBuilder: jQuery('#referer_builder_cont'),
            refererBtnBox: jQuery('.reference-btn-box'),
            referenceContTemp: jQuery('#reference-cont-template'),
            feedBackForm: jQuery('#feed_back_form'),
            dropdownTmpl: jQuery('#dropdown-template'),
            feedBackForm: jQuery('#feed_back_form'),
            contactFlds: jQuery('.contact-flds'),
            contactType: jQuery('#contact_type'),
            contactState: jQuery('#contact_state'),
            contactCity: jQuery('#contact_city'),
            addrCont: jQuery('.address-cont'),
            pollForm: jQuery('.poll-form'),
            calcStep3: jQuery('#calc-step3'),
            calcStep4: jQuery('#calc-step4'),
            letUsCallBtn: jQuery('.become-a-member'),
            redeemGV: jQuery('.redeem-holiday-voucher'),
            resortMapCont: jQuery('#resort-map-cont'),
            knwMrCont: jQuery('.knw-mr-cont'),
            resortListCont: jQuery('#resort-list-cont'),
            navBtn: jQuery('.nav-btn'),
            searchBarCont: jQuery('#search-bar-cont'),
            searchBar: jQuery('#search-bar'),
            searchFld: jQuery('#search_fld'),
            searchForm: jQuery('#search-form'),
            responsiveResTabs: jQuery('#res-res-tabs'),
            resTopNav: jQuery('#res-top-nav'),
            resFtrNav: jQuery('.res-ftr-nav-cont'),
            subNavPages: jQuery('#sub-nav-pages'),
            mainCont: jQuery('#main'),
            filterOptsCont: jQuery('#filter-opts-cont'),
            filterOpts: jQuery('#filter-opts'),
            resTagsCont: jQuery('#res-tags-cont'),
            pagerCont: jQuery('#resort-pager'),
            resortMapInfo: jQuery('#resort-map-info'),
            findAccord: jQuery('#find-accord'),
            sightAccord: jQuery('#sightseeing-accord'),
            accordCont: jQuery('.accord-cont'),
            filterSearchBar: jQuery('#filter-search-bar')
        };
		
		if (window._CountryList) {
            var countryList = window._CountryList.Records;
			//alert(countryList);
        }
		//UIElms.feedBackCont.on('change', '.country', function() {
		//alert('hello Nitesh1');
		var cat_id1=jQuery(".country option:selected").val();
		//alert (cat_id);
          	//var obj = jQuery(this);
            	//val = obj.val();
				
                cityDropDown = jQuery('.feedback_city', UIElms.feedBackCont);
                valArr = cat_id1.split('_');
                //valArr = cat_id.substring(7);
				//alert(valArr);
                id = parseInt(valArr[1]);
                country = _.findWhere(countryList, {
                    'country_id': id
					
                });
		states = country['states'],
		optionTemplate = _.template(UIElms.dropdownTmpl.html()),
		renderedTemplate = '<option value="">State</option>',
		stateDropDown = UIElms.feedBackCont.find('.feedback_state');
		countryId = id;
		//alert(countryId);
            	_.each(states, function(row) {
                renderedTemplate += optionTemplate({
                    'name': row.state_name,
                    'id': row.state_id
                })
            });
			
            stateDropDown.html(renderedTemplate);
            //alert(stateDropDown.html(renderedTemplate));
			var foption = jQuery('#feedback_state' + ' option:first');
			var soptions = jQuery('#feedback_state' + ' option:not(:first)').sort(function(a, b) {
			return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			});
			jQuery('#feedback_state').html(soptions).prepend(foption); 	
           cityDropDown.html('<option value="">City</option>');
		  
     	    //});
	 UIElms.feedBackCont.on('change', '.feedback_state', function() {
            var obj = jQuery(this),
                val = obj.val(),
                valArr = val.split('_'),
                id = parseInt(valArr[1]),
                country = _.findWhere(countryList, {
                    'country_id': countryId
                }),
				
                states = country['states'],
                state = _.findWhere(states, {
                    'state_id': id
					
                }),
                cities = state['cities'],
                optionTemplate = _.template(UIElms.dropdownTmpl.html()),
                renderedTemplate = '<option value="">City</option>',
                cityDropDown = UIElms.feedBackCont.find('.feedback_city');
            _.each(cities, function(row) {
                renderedTemplate += optionTemplate({
                    'name': row.city_name,
                    'id': row.city_id
                })
            });
            cityDropDown.html(renderedTemplate);
			var foption = jQuery('#feedback_city' + ' option:first');
			var soptions = jQuery('#feedback_city' + ' option:not(:first)').sort(function(a, b) {
			return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			});
			jQuery('#feedback_city').html(soptions).prepend(foption);
			
			
        });
		
	//code for onclick
	jQuery('.country').change(function(){
	var state_name=jQuery(".country option:selected").val();
		
          //  var obj = jQuery(this);
            //   val = obj.val();
				//alert(valArr_state);
				valArr_state = state_name.split('_');
                
                id_state = parseInt(valArr_state[1]);
				//alert(id_state);
             jQuery.ajax({
                /*url:'http://172.16.25.76/clubmahindra_prospect/state_data',*/
		url: base_path +'/state_data',
                type:'GET',                
				data:{cat_id123:id_state},
				//jQuery('.feedback_city').hide();
           success:function(response) {
		  //alert(response);
			//jQuery('.feedback_city').hide();
			
			 jQuery('.feedback_state').html("");
			jQuery('.feedback_state').html(response); 
			//alert(jQuery(this).find('option:selected').attr('id'));
			//var state_name=jQuery(response).filter('.feedback_state').attr('id');
			var state_name=jQuery(response).find('option:selected').attr('id');
			valArr_state_name=state_name.split('_');
		    id_state_name = parseInt(valArr_state_name[1]);
			  
			 if ( id_state_name == 934){ //compare for international
			jQuery('.feedback_city').hide();
			var state_name_test=jQuery(response).find('option:selected').attr('id');
			 //alert (state_name_test);
			 drop_down_city(state_name_test);
			}
	        else{
			jQuery('.feedback_city').show();
			stateDropDown.html(renderedTemplate);
			cityDropDown.html('<option value="">City</option>');
			//jQuery('#feedback_city').show();
			 //var state_name_test=jQuery(response).find('option:selected').attr('id');
			 //alert (state_name_test);
			 //drop_down_city(state_name_test);
			var foption = jQuery('#feedback_state' + ' option:first');
			var soptions = jQuery('#feedback_state' + ' option:not(:first)').sort(function(a, b) {
			return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			});
			jQuery('#feedback_state').html(soptions).prepend(foption);
			} 
			//alert(countryList);
			//alert(countryList);
            }
            }); 
       });	 
	 
		//end of onclick function
		//function 
		function drop_down_city(state_name_test){
		 valArr_city=state_name_test.split('_');
		 id_city = parseInt(valArr_city[1]);
				
				 jQuery.ajax({
                /*url:'http://172.16.25.76/clubmahindra_prospect/city_data',*/
		url:base_path +'/city_data',
                type:'POST',                
				data:{id_city:id_city},
				
           success:function(response) {
		
		
		 jQuery('.feedback_city').html("");
			jQuery('.feedback_city').html(response); 
			
            }
            });  
		
		}
//on click function for city

   jQuery('.feedback_state').on('change', function()
   {
   var city_name=jQuery(this).find('option:selected').attr('id');
    drop_down_city(city_name);
  // end on click function for city
});
//end of the onchnage function for state 		
});
 
/*function reset_feedbackdata() {
           var isChecked = jQuery("input[name=feedback_type]:checked").val('');
		   var name = jQuery("#feedback_name").val('');
		   var mailing_addr = jQuery("#mailing_addr").val('');
		   var feedback_email = jQuery("#feedback_email").val('');
		   var feedback_country = jQuery("#feedback_country").val('');
		   var feedback_state = jQuery("#feedback_state").val('');
		   var feedback_city = jQuery("#feedback_city").val('');
		   var feedback_zipCode = jQuery("#zip_code").val('');
		   var feedback_contactNo = jQuery("#contact_no").val('');
		   var feedback_subject = jQuery("#feedback_subject").val('');
		   var feedback_reason = jQuery("#why").val('');
		  
}*/
(function ($) {
  Drupal.behaviors.Feedbackform = {
    attach: function (context, settings) {
        /*jQuery("#edit-ymessage").focus(function() {
            if (this.value === this.defaultValue) {
                this.value = '';
            }
        })
        jQuery("#edit-ymessage").blur(function() {
              if (this.value === '') {
                  this.value = this.defaultValue;
              }
        });*/
        
        jQuery("#submit_feedback").click(function(e){
		//alert('hi');
		var flag_check = true;
           var isChecked = jQuery("input[type='radio'][name='feedback_type']:checked").val();
           var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
           var name = jQuery.trim(jQuery("#feedback_name").val());
		   var mailing_addr = jQuery.trim(jQuery("#mailing_addr").val());
		   var feedback_email = jQuery.trim(jQuery("#feedback_email").val());
		   var feedback_country = jQuery.trim(jQuery("#feedback_country").val());
		   var feedback_state = jQuery.trim(jQuery("#feedback_state").val());
		  // var feedback_state = document.getElementById('#feedback_country');
		   var feedback_city = jQuery.trim(jQuery("#feedback_city").val());
		   var feedback_zipCode = jQuery.trim(jQuery("#zip_code").val());
		   var feedback_contactNo = jQuery.trim(jQuery("#contact_no").val());
		   var feedback_alternateNo = jQuery.trim(jQuery("#alternate_no").val());
		   var feedback_subject = jQuery.trim(jQuery("#feedback_subject").val());
		   var feedback_reason = jQuery.trim(jQuery("#why").val());
		   //var stateValue = jQuery('#feedback_state').val();
		   
		   //alert(feedback_state);
		   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		   var mobilerule=/^([7-9][0-9]{9})$/;
		   var zipRegex = /^\d{6}$/;
		   
		   
		jQuery("#feedback_name").focus(function() {
            if (this.value === this.defaultValue) {
                this.value = '';
            }
        });
        jQuery("#feedback_name").blur(function() {
              if (this.value === '') {
                  this.value = this.defaultValue;
              }
        });
		if(!isChecked) {
			 //alert(isChecked);
		     jQuery('sup').show();
		      //return false;
			  flag_check = false
		    }
		else{
			 jQuery('sup').hide();
			 flag_check = true;
		}
			
		if((name == 'Full name' || name == '')){
                jQuery("#feedback_name").addClass("error");
                jQuery("#feedback_name").focus();
              //  return false;
            }
			else{
			 jQuery("#feedback_name").removeClass("error");
			}
			
			if((feedback_email == 'Email id' || feedback_email == '')){
                jQuery("#feedback_email").addClass("error");
                jQuery("#feedback_email").focus();
               // return false;
            }
			else if(!emailReg.test(feedback_email)){
                jQuery("#feedback_email").addClass("error");
                jQuery("#feedback_email").focus();
               // return false;
            }
			else {
			jQuery("#feedback_email").removeClass("error");
			}
			
			
			if((feedback_contactNo == 'Contact number' || feedback_contactNo == '' || !mobilerule.test(feedback_contactNo))){
                jQuery("#contact_no").addClass("error");
                jQuery("#contact_no").focus();
               }
			else{
			 jQuery("#contact_no").removeClass("error");
			}
		
			if( !mobilerule.test(feedback_alternateNo) && feedback_alternateNo != ''){
                jQuery("#alternate_no").addClass("error");
                jQuery("#alternate_no").focus();
               }
			   else{
				jQuery("#alternate_no").removeClass("error");
			  }
			if((mailing_addr == 'Mailing address' || mailing_addr == '')){
                jQuery("#mailing_addr").addClass("error");
                jQuery("#mailing_addr").focus();
                
            }
			else{
			 jQuery("#mailing_addr").removeClass("error");
			}
			
			var countryname = jQuery("#feedback_country option:selected").text();
			var stateName = jQuery("#feedback_state option:selected").text();
			var cityName = jQuery("#feedback_city option:selected").text();
			var feedback_subjecttxt = jQuery("#feedback_subject option:selected").text();
			
			if((countryname == 'Country' || feedback_country == '')){
                jQuery("#feedback_country").addClass("error");
                jQuery("#feedback_country").focus();
               // return false;
            }
			else{
			 jQuery("#feedback_country").removeClass("error");
			}
			
			if((stateName == 'State' || feedback_state == '')){
                jQuery("#feedback_state").addClass("error");
                jQuery("#feedback_state").focus();
               // return false;
            }
			else{
			 jQuery("#feedback_state").removeClass("error");
			}
			
			if((cityName == 'State' || feedback_city == '')){
                jQuery("#feedback_city").addClass("error");
                jQuery("#feedback_city").focus();
               // return false;
            }
			else{
			 jQuery("#feedback_city").removeClass("error");
			}
			
			
			if((feedback_zipCode == 'Zip Code' || feedback_zipCode == '')){
                jQuery("#zip_code").addClass("error");
                jQuery("#zip_code").focus();
               // return false;
            }
			else if (!zipRegex.test(feedback_zipCode)){
			          jQuery("#zip_code").addClass("error");
                      jQuery("#zip_code").focus();
				
			}
			else{
			 jQuery("#zip_code").removeClass("error");
			}
			
			if((feedback_subjecttxt == 'Subject' || feedback_subjecttxt == '')){
                jQuery("#feedback_subject").addClass("error");
                jQuery("#feedback_subject").focus();
               // return false;
            }
			else{
			 jQuery("#feedback_subject").removeClass("error");
			}
			
			if((feedback_reason == 'Feedback' || feedback_reason == '')){
			
                jQuery("#why").addClass("error");
                jQuery("#why").focus();
              //  return false;
            }
			else{
			 jQuery("#why").removeClass("error");
			}
			
			
		    var errorField = jQuery('#feed_back_form').find('.error');
			
			if (errorField.length > 0) {
			return false;
			}
			//alert(GetAddress);
			if (errorField.length == 0 && flag_check == true) {
		        jQuery.ajax({
                /*url: 'http://172.16.25.76/clubmahindra_prospect/feedback-data',*/
                  url: base_path +'/feedback-data',
                   type: 'POST',
		dataType: "json",
                data: {feedback_type: isChecked, feedback_name: name, feedback_mailing_addr: mailing_addr, name:name, email:feedback_email,country:feedback_country,state:feedback_state,city:feedback_city,zip_code:feedback_zipCode ,contactno:feedback_contactNo,alternateno:feedback_alternateNo,subject:feedback_subject,message:feedback_reason },
                success: function(data) {
				//alert(data);
				jQuery('.feedbacckStatus').show();
				
				//setTimeout(function(){ window.location.href = GetAddress + "/feedback"; }, 5000);
				setTimeout(function(){ window.location.href = base_path +"/feedback"; }, 5000);
				//window.location.href = "http://localhost/clubmahindra_prospect/feedback";
						/*jQuery('#feedback_name').val('');
						jQuery('#mailing_addr').val('');
						jQuery('#feedback_email').val('');
						jQuery('#feedback_country').show('India_47');
						jQuery('#feedback_state').val('');
				        jQuery('#feedback_city').val('');
						jQuery('#zip_code').val('');
						jQuery('#contact_no').val('');
						jQuery('#alternate_no').val('');
						jQuery('#feedback_subject').val('');
						jQuery('#why').val('');*/
			}
         });
		 }
        e.preventDefault();
       });
    }
  };
})(jQuery);


/*function reset_feedbackdata() {
           var isChecked = jQuery("input[name=feedback_type]:checked").val('');
		   var name = jQuery("#feedback_name").val('');
		   var mailing_addr = jQuery("#mailing_addr").val('');
		   var feedback_email = jQuery("#feedback_email").val('');
		   var feedback_country = jQuery("#feedback_country").val('');
		   var feedback_state = jQuery("#feedback_state").val('');
		   var feedback_city = jQuery("#feedback_city").val('');
		   var feedback_zipCode = jQuery("#zip_code").val('');
		   var feedback_contactNo = jQuery("#contact_no").val('');
		   var feedback_subject = jQuery("#feedback_subject").val('');
		   var feedback_reason = jQuery("#why").val('');
		  
}*/
