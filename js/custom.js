$(document).ready(function() {
    // Control tab About
    $(".about-tab-content").hide();
    $(".about-tab-content:first").show();

    $(".about .tab-control ul li").click(function(event) {
        $(".about .tab-control ul li").removeClass("active");
        $(this).addClass("active");
        $(".about-tab-content").hide();
        var activeTab = $(this).attr("data");
        $("#" + activeTab).fadeIn();
    });

    // Control tab Project
    $(".project-tab-content").hide();
    $(".project-tab-content:first").show();

    $(".project .tab-control ul li").click(function(event) {
        $(".project .tab-control ul li").removeClass("active");
        $(this).addClass("active");
        $(".project-tab-content").hide();
        var activeTab = $(this).attr("data");
        $("#" + activeTab).fadeIn();
    });

    // Control tab Design
    $(".design-tab-content").hide();
    $(".design-tab-content:first").show();

    $(".design .tab-control ul li").click(function(event) {
        $(".design .tab-control ul li").removeClass("active");
        $(this).addClass("active");
        $(".design-tab-content").hide();
        var activeTab = $(this).attr("data");
        $("#" + activeTab).fadeIn();
    });

    // Control tab News
    $(".news-tab-content").hide();
    $(".news-tab-content:first").show();

    $(".news .tab-control ul li").click(function(event) {
        $(".news .tab-control ul li").removeClass("active");
        $(this).addClass("active");
        $(".news-tab-content").hide();
        var activeTab = $(this).attr("data");
        $("#" + activeTab).fadeIn();
    });

    // Slide các mục thiết kế
    var price = $("#owl-price");
    var status = $("#owlStatus");
    price.owlCarousel({
        navigation: true
    });

    var owl = $("#owl-demo");
    var status = $("#owlStatus");
    owl.owlCarousel({
        navigation: true
    });

    // Menu responsive
    $(".toggle-menu").click(function() {
        $(".content-menu").slideToggle();
    });

    // Detail content project
    $(".project-tab-content li a").click(function(e) {
        $(".details").hide();
        var geturl = $(this).attr("href");
        $(geturl).slideToggle("slow");
        e.preventDefault();
    });

    // button close
    $(".close-detail i").click(function() {
        $(".details").slideUp("400");
        $("html, body").animate({
            scrollTop: $(".project-tab-container").offset().top
        }, 500);
    });
});
