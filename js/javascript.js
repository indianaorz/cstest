$( document ).ready(function() {

  $('#menu').on( "click", function() {
    $('#navigation-bar').toggleClass("navigation-bar--hidden");
    $('#content').toggleClass("content--no-navigation");
  });

  $('#switch').on( "click", function() {
    
    $('#card-fade-through > .fade-through-example-white')
      .toggleClass("fade-through-white");
      
    $("#switch").addClass("button-click");
    
    setTimeout(function(){
      $("#switch").removeClass("button-click");
    }, 1000);
    
    //If top faded out, bring it back
    if($('#fade-through-example-top')
    .hasClass("fade-through-out")){
        fadeThrough($('#fade-through-example-bottom'), $('#fade-through-example-top'));

        rotate($("#wheelchair"),$("#hiking"));
    }
    //If the bottom is faded out, bring that back
    else{
        fadeThrough($('#fade-through-example-top'), $('#fade-through-example-bottom'));

        rotate($("#hiking"),$("#wheelchair"));
    }
  });

  function fadeThrough(elementFadeOut,elementFadeIn){
    elementFadeOut
      .addClass("fade-through-out")
      .removeClass("fade-through-in");

    elementFadeIn
      .addClass("fade-through-in")
      .removeClass("fade-through-out");
  }
  
  function rotate(elementRotateOut,elementRotateIn){
    elementRotateOut
      .addClass("rotate-out")
      .removeClass("rotate-in");

      elementRotateIn
      .addClass("rotate-in")
      .removeClass("rotate-out");
  }


});