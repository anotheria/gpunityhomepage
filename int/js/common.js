$(window).scroll(function() {
    if ($(window).scrollTop() > 40) {
        $("#header").addClass("top-nav-collapse");
    } else {
        $("#header").removeClass("top-nav-collapse");
    }
});