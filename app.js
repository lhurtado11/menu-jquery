// This is where the magic happens
$(document).ready(function() {
    //detectar mouse sobre el elemento
    $("a").hover(function() {
      $(this).css("color","#EA178C");
      },
     function() {
      $(this).css("color","");
      });

})