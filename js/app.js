// ********************************************************
// NAV BAR
// 
$(function () {
    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();
    $('.nav .toggle-nav').click(function (e) {
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("nav").addClass("scrolling");
    }
    else {
        $("nav").removeClass("scrolling");
    }
});