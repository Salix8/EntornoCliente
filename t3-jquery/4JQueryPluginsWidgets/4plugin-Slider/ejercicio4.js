$.fn.carrusel = function(){
    elem = $('.slider div:gt(0)').hide();
    elem = setInterval(function(){
      $('.slider div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('.slider');}, 2000);
};

$(document).ready(function(){
    
    $(".slider").carrusel();
   
})