
$(document).ready(function(){
  $.fn.eliminar = function() {
    return this.each(function(){
       elem = $(this);
       elem.fadeOut(250, function(){
          $(this).hide(250);
       });
    });  
  };

  $("#botonparpadear").click(function(){
    $(".parpadear").eliminar();
 })
});


