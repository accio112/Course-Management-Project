jQuery(document).ready(function(e) {
                var GetAddress = window.location.origin;
                var base_path = jQuery("#site_baseUrl_cmh_contact").attr('href');
		jQuery('.fin-tabs li a').click(function(e) {
		   var cat_id = jQuery(this).attr('id');
 jQuery('.fin-tabs li a').removeClass('selectedCat');
 jQuery(this).addClass('selectedCat');
 var timestamp =  Math.random();
		jQuery.ajax({
                url:base_path+'/get_financial_data',
                type:'GET',
                data:{term_id:cat_id,timestamp:timestamp},
                success:function(data) {
					jQuery('#dateReportsContainer').html(data);
					 var defaultYear = jQuery('#defaultYear').val();
					  jQuery('.ddl_year option[value='+ defaultYear +']').attr('selected','selected');
					   jQuery(".ddl_year").change(function(){
								var termid=jQuery('.ddl_year option');
								var tid = jQuery(".ddl_year").val(); 
                                                            

								jQuery('#defaultYear').val();
								jQuery('.allreportsList').hide();
                                                                   //reportsListContainer


								if(jQuery('#reports_'+tid).length > 0){
									jQuery('#reports_'+tid).show();
								}else{

var report = 'reports_'+tid;
		  var elm = '<div style="display: block;" id="'+report+'" class="allreportsList col_12 mT10 mB10 pL0">	 <p style="clear:both">No Record found</p></div>';
								

  jQuery(elm).appendTo('.reportsListContainer');                                                                

                                                                 
								}
						});
                }                
            });
        e.preventDefault();
			
		});
				
		
});