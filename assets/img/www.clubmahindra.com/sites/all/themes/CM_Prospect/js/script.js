function findPos(e) {
    var t = 0,
        r = 0;
    if (i = 0, e.offsetParent)
        do t += e.offsetLeft, r += e.offsetTop; while (e = e.offsetParent);
    return [t, r]
}

function showpop(e, t) {
    var r = findPos(e),
        o = document.getElementById(t);
    "joinTheClub" == t && (o.style.top = r[1] + 22 + "px", o.style.left = r[0] + -320 + "px", jQuery("#joinClubs").addClass("selectedLink"), jQuery("#joinCaret").hide()), "megamenu2" == t && (o.style.top = r[1] + 22 + "px", o.style.left = r[0] + -272 + "px", jQuery("#moreresorts").addClass("selectedLink"), jQuery("#selCaret").hide()), "megamenu" == t && (o.style.top = r[1] + 22 + "px", o.style.left = r[0] + -150 + "px"), "notification" == t && (panelWidth = jQuery("#bookingPanel").width(), jQuery("#" + t).width(panelWidth), o.style.top = r[1] + 27 + "px", objWidth = jQuery("#mailNotify").width(), o.style.left = r[0] - panelWidth + objWidth + "px"), o.style.display = "block"
}

function hidepop(e, t) {
    var r = document.getElementById(t);
    r.style.display = "none"
}

function calloutclose(e) {
    document.getElementById(e).style.display = "none", jQuery("#megamenu2").length && (jQuery("#moreresorts").removeClass("selectedLink"), jQuery("#selCaret").show()), jQuery("#joinTheClub").length && (jQuery("#joinClubs").removeClass("selectedLink"), jQuery("#joinCaret").show())
}

function moreOption(e, t) {
    "block" == document.getElementById(t).style.display ? (document.getElementById(t).style.display = "none", document.getElementById(e).className = "", document.getElementById("home1").className = "sel") : (document.getElementById(t).style.display = "block", document.getElementById(e).className = "selTab", document.getElementById("home1").className = "")
}
var mouse_is_inside = !1;
jQuery(document).ready(function(e) {
    jQuery("#clickclose").click(function() {
        jQuery("#open,#black_overlay").hide()
    }), jQuery('a[href*="http://"]:not([href*="http://www.clubmahindra.com"])').attr("rel", "nofollow"), jQuery('a[href*="https://"]:not([href*="http://www.clubmahindra.com"])').attr("target", "_blank");
    var t = jQuery(".resorttab li.sel a").text();
    jQuery("#resTab").text(t), jQuery("#accordion").accordion({
        heightStyle: "content",
        collapsible: !0,
        active: !1,
        activate: function(e, t) {
            jQuery.isEmptyObject(t.newHeader.offset()) || (jQuery("html:not(:animated), body:not(:animated)").animate({
                scrollTop: t.newHeader.offset().top - 60
            }, "slow"), jQuery(t.newHeader.removeClass("arrow_acc")))
        }
    });
    var r = (window.location.origin, jQuery("#year_of_birth").val().length);
    jQuery("#year_of_birth").on("keypress, keydown", function(e) {
        return 37 != e.which && 39 != e.which && (this.selectionStart < r || this.selectionStart == r && 8 == e.which) ? !1 : void 0
    });
    var r = jQuery("#joinCLubMahindra #year_of_birth").val().length;
    jQuery("#joinCLubMahindra #year_of_birth").on("keypress, keydown", function(e) {
        return 37 != e.which && 39 != e.which && (this.selectionStart < r || this.selectionStart == r && 8 == e.which) ? !1 : void 0
    }), jQuery("#top-right-menu-ul li.first a, #top-right-menu-ul li.last a").click(function() {
        jQuery(this).attr("target", "_blank")
    }), jQuery("#Join_club1").click(function(e) {
        e.preventDefault(), jQuery("#join_the_club_new").show(), jQuery(window).scrollTop(jQuery("#join_the_club_new").offset().top - 100)
    }), jQuery("#viewtravel").click(function(e) {
        e.preventDefault(), jQuery("#travel").show(), jQuery(window).scrollTop(jQuery("#travel").offset().top - 100)
    }), jQuery("#Join_club2").click(function(e) {
        e.preventDefault(), jQuery("#jointheclub2").show(), jQuery(window).scrollTop(jQuery("#jointheclub2").offset().top - 100)
    });
    var o = jQuery(".resorttab li").length;
    6 > o && (jQuery(".resorttab li").css("padding-left", "70px"), jQuery("#about-resort").css("padding-left", "0px")), 5 > o && (jQuery(".resorttab li").css("padding-left", "130px"), jQuery("#about-resort").css("padding-left", "0px")), jQuery(".resorttab li a").click(function() {}), jQuery("#banner").length && jQuery("#banner").slick({
        autoplay: !0,
        autoplaySpeed: 5e3
    }), jQuery("#megamenu,#joinTheClub").hover(function() {
        mouse_is_inside = !0
    }, function() {
        mouse_is_inside = !1
    }), jQuery("#megamenu").hover(function() {
        jQuery("#megamenu").show()
    }, function() {
        jQuery("#megamenu").hide(), jQuery("ul.megaMenuList > li").removeClass("sel"), jQuery("#locationvalue").hide(), jQuery("#loc_bol").css("font-weight", "normal"), jQuery("#parent_203").addClass("sel"), jQuery("#parent_204").removeClass("sel"), jQuery("#parent_202").removeClass("sel"), jQuery("#parent_205").removeClass("sel"), jQuery("#parent_206").removeClass("sel"), jQuery("#moreResorts").removeClass("selTab")
    }), jQuery("#megamenu2").hover(function() {
        jQuery("#megamenu2").show()
    }, function() {
        jQuery("#megamenu2").hide(), jQuery("ul.megaMenuList > li").removeClass("sel"), jQuery("#locationvalue2").hide(), jQuery("#loc_bol").css("font-weight", "normal"), jQuery("#parent_2203").addClass("sel"), jQuery("#parent_2204").removeClass("sel"), jQuery("#parent_2202").removeClass("sel"), jQuery("#parent_2205").removeClass("sel"), jQuery("#parent_2206").removeClass("sel"), jQuery("#moreresorts").removeClass("selectedLink"), jQuery("#selCaret").show()
    }), jQuery("body").mouseup(function() {
        mouse_is_inside || (jQuery("#megamenu").hide(), jQuery("#moreResorts").removeClass("selTab"))
    }), jQuery(window).resize(function() {
        jQuery("#megamenu,#joinTheClub,#notification").hide(), jQuery("#moreResorts").removeClass("selTab")
    }), jQuery("#holidayCarousel").length && jQuery("#holidayCarousel").slick({
        dots: !1,
        variableWidth: !0,
        infinite: !0,
        centerMode: !0,
        slidesToShow: 1,
        centerPadding: "0px"
    }), jQuery(".minimize").click(function() {
        jQuery("#bookingSummary").hide(), jQuery("#bookingSummaryHide").removeClass("dN")
    }), jQuery(".maximize").click(function() {
        jQuery("#bookingSummary").show(), jQuery("#bookingSummaryHide").addClass("dN")
    }), navigator.sayswho = function() {
        var e, t = navigator.userAgent,
            r = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(r[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE " + (e[1] || "")) : "Chrome" === r[1] && (e = t.match(/\bOPR\/(\d+)/), null != e) ? "Opera " + e[1] : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && r.splice(1, 1, e[1]), r.join(" "))
    }();
    var a = navigator.sayswho,
        s = a.split(" ");
    "Chrome" == s[0] && s[1] < 40 && jQuery("#le12").show(), "Firefox" == s[0] && s[1] < 39 && jQuery("#le12").show(), "Safari" == s[0] && s[1] < 4 && jQuery("#le12").show(), "MSIE" == s[0] && s[1] < 10 && jQuery("#le12").show(), jQuery(window).load(function() {});
    var n = {
        faqCont: jQuery("#faq-cont")
    };
    n.faqCont.on("click", ".faq", function(e) {
        var t = jQuery(this).parent().prev().find(".faq");
        jQuery(t).length > 0 && jQuery("html, body").animate({
            scrollTop: t.offset().top
        }, 2e3), e.preventDefault();
        var r = jQuery(this),
            o = r.parents(".faq-span"),
            a = n.faqCont.find(".faq-span.active"),
            s = "",
            l = "",
            i = a.find(".faq.active");
        if (childSpanAns = o.find(".faq-anwser"), a.length > 0 && !o.hasClass("active")) a.removeClass("active"), s = a.find(".faq-ans-cont"), s.css({
            height: 0
        }), i.removeClass("active");
        else if (o.hasClass("active")) return l = o.find(".faq-ans-cont"), l.css({
            height: 0
        }), o.removeClass("active"), r.removeClass("active"), !1;
        l = o.find(".faq-ans-cont"), l.css({
            height: childSpanAns.outerHeight()
        }), o.addClass("active"), r.addClass("active")
    })
}), igevt = function() {
    jQuery(this).scrollTop() > 1 ? (jQuery("header").addClass("sticky"),
            //jQuery("img.logo").attr("src", "http://www.clubmahindra.com/sites/all/themes/CM_Prospect/images/logo_sml.png"),
          //  setTimeout(function(){ }, 500),
            jQuery("ul.globalNavLft li a").addClass("trans"), jQuery("ul.globalNavRit li a").addClass("trans"), jQuery("#logoContr").addClass("logoContr"),
            jQuery("#navContr").addClass("navContr"), jQuery(".moreContrOuter").addClass("trans"), 
            jQuery(".globalSrc").addClass("globalSrcH")) : (jQuery("header").removeClass("sticky"),
           // jQuery("img.logo").attr("src", "http://www.clubmahindra.com/sites/all/themes/CM_Prospect/images/logo.png"),
            jQuery("ul.globalNavLft li a").removeClass("trans"), jQuery("ul.globalNavRit li a").removeClass("trans"),
                    jQuery("#logoContr").addClass("new"),
            jQuery("#logoContr").removeClass("logoContr"), jQuery("#navContr").removeClass("navContr"),
            jQuery(".moreContrOuter").removeClass("trans"), jQuery(".globalSrc").removeClass("globalSrcH"))
}, window.addEventListener("scroll", igevt, !1);
