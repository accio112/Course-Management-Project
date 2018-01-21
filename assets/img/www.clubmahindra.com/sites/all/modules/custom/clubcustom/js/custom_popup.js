jQuery(document).ready(function()
{
var autocomplete = new google.maps.places.Autocomplete(jQuery("#address1")[0], {});
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
    });
    jQuery("#btnShowSimple").click(function(e)
    {
        ShowDialog(false);
        e.preventDefault();
    });

    jQuery("#btnShowModal").click(function(e)
    {
        ShowDialog(true);
        e.preventDefault();
    });

    jQuery("#btnClose").click(function(e)
    {
        HideDialog();
        e.preventDefault();
    });

    jQuery("#btnSubmit").click(function(e)
    {
        var brand = jQuery("#brands input:radio:checked").val();
        jQuery("#output").html("<b>Your favorite mobile brand: </b>" + brand);
        HideDialog();
        e.preventDefault();
    });

});

function ShowDialog(modal)
{
    jQuery("#overlay").show();
    jQuery("#dialog").fadeIn(300);
    if (modal)
    {
        jQuery("#overlay").unbind("click");
    }
    else
    {
        jQuery("#overlay").click(function(e)
        {
            HideDialog();
        });
    }
}

function HideDialog()
{
    jQuery("#overlay").hide();
    jQuery("#dialog").fadeOut(300);
}

