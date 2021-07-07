var timer = 0;
var elementCount = 0;
var firstPos = 0;
var lastPos = 0;

$(document).on("scroll", function(){
   if ($(document).scrollTop() > 80){
       $(".primary-nav").addClass("shrink bg-black");
   } else {
       $(".primary-nav").removeClass("shrink bg-black");
   }
});

$(function() {
  initialiseSlider();
  $("#next").click(function() {
    slideRight();
  });

  $("#previous").click(function() {
    slideLeft();
  });
});

function initialiseSlider() {
  $("div.slider").each(function(value) {
    elementCount += 1;
    var position = -100 * value;
    $(this).css("left", position + "%");
  });

  if (elementCount === 1)
    $("#next").hide();
}

function slideRight() {
  $("div.slider").each(function(value) {
    $(this).addClass("zoomout");
    var position = parseInt($(this)[0].style.left) + 100;

    if (value === 0)
      firstPos = position;

    $(this).css("left", position + "%");
    timer = setTimeout(removeZoom, 1000);
  });

  console.log(firstPos);

  if (firstPos !== ((elementCount - 1) * 100)) {
    $("#next").show();
    $("#previous").show();
  } else
    $("#next").hide();
}

function slideLeft() {
  $("div.slider").each(function(value) {
    $(this).addClass("zoomout");
    var position = parseInt($(this)[0].style.left) - 100;

    if (value === (elementCount - 1))
      lastPos = position;

    $(this).css("left", position + "%");
    timer = setTimeout(removeZoom, 1000);
  });

  console.log(lastPos);

  if (lastPos !== ((elementCount - 1) * -100)) {
    $("#previous").show();
    $("#next").show();
  } else
    $("#previous").hide();
}

function removeZoom() {
  $("div.slider").each(function() {
    $(this).removeClass("zoomout");
  });
}