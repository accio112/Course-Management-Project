jQuery(document).ready(function(){
    jQuery('.banner-wrapper #joinClubs ,.banner-wrapper #join_the_club_new ,.banner-wrapper #joinClub ,.resort-banner-wrapper #joinClub , .resort-banner-wrapper #joinClubs ,.resort-banner-wrapper #join_the_club_new').click(function(){
        if(jQuery(window).width() <= 767){
        jQuery('body,html').animate({scrollTop : jQuery('section#jointheclub2 , section#join_the_club_new , section#join_the_club_new ').offset().top - 60},600);
    }
    });
});