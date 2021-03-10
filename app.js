// This is where the magic happens
$(document).ready(function() {
   
    $("a").hover(function() {
      $(this).css("color","#EA178C");
      },
     function() {
      $(this).css("color","");
      }
    );

    $('a').on('click', function() {
      $('a').removeClass('active');
    });

    $('a').on('click', function() {
     $(this).addClass('active')
    });
    
})