// Pause carousel on HOVER

$('#myCarousel').hover(function () { 
    $(this).carousel('pause') 
  }, function () { 
    $(this).carousel('cycle') 
})

AOS.init({
  duration: 1200,
})


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});