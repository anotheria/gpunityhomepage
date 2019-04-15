$(window).scroll(function() {
    if ($(window).scrollTop() > 40) {
        $("#header").addClass("top-nav-collapse");
    } else {
        $("#header").removeClass("top-nav-collapse");
    }
});

function goToByScroll(id){
    // Reove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
        'slow');
}

$(".scroll-links a").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("id"));
});