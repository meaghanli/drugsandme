
var $animationSpeed = 500;

$(document).ready(function(){
  $("#title-me").hover(function(){
      $('#title-me-button').animate({
        marginTop:'+=9px',
        marginLeft:'+=9px'
      }, $animationSpeed);
      $("#title-me-collapse").removeClass("hidden");
      $("#title-me-collapse").animate({
        opacity: 1
      }, $animationSpeed);
    },function(){
      $('#title-me-button').animate({
        marginTop:'-=9px',
        marginLeft:'-=9px'
      }, $animationSpeed);
      $("#title-me-collapse").animate({
        opacity: 0
      }, $animationSpeed, function(){
        $("#title-me-collapse").addClass("hidden");
    });
  });

  $("#title-drugs").hover(function(){
      $('#title-drugs-button').animate({
        marginTop:'+=9px',
        marginLeft:'+=9px'
      }, $animationSpeed);
      $("#title-drugs-collapse").removeClass("hidden");
      $("#title-drugs-collapse").animate({
        opacity: 1
      }, $animationSpeed);
    },function(){
      $('#title-drugs-button').animate({
        marginTop:'-=9px',
        marginLeft:'-=9px'
      }, $animationSpeed);
      $("#title-drugs-collapse").animate({
        opacity: 0
      }, $animationSpeed, function(){
        $("#title-drugs-collapse").addClass("hidden");
      });
  });

  // $(".title-collapse div").hover(function(){
  //   var $backgroundColor = $(this).css("background-color");
  //   console.log("light: " + $backgroundColor + ", dark: " + $(this).darken() );
  //   console.log(this);
  //   $(this).animate({
  //     opacity: 1,
  //     backgroundColor: "rgb(105, 171, 176)"
  //   }, $animationSpeed);
  // }, function(){});

});