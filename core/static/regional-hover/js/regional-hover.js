$(function() {
   $(".states").hover(function() {
           state_name = this.id;
      $("#div-"+state_name).toggle();
   });
});


/*
Was working on 5/30/2021

$('.states').mouseover(function() { // pull class from hover
        $("div.state-cards").hide(); // hide all mydiv
        myvar = this.id;
        $('#div-'+myvar).show(); //
});
*/