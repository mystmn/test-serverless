/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('nav').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('nav').addClass("scrolled");
        $('nav').hide();
    }else{
        $('nav').removeClass("scrolled");
    }
}

if($('nav').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}