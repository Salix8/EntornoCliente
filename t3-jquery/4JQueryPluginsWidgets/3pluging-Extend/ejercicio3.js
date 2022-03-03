$(document).ready(function(){

    $("#boton").on("click", function() {
      $("#parrafo1").fontCustomizer({
        size: "35px",
        font: "impact"
      });
    });
});


jQuery.fn.fontCustomizer = function(fontParams) {
    //Defino unas opciones por defecto
    var font = {
      size: "25px",
      fontFamily: "Verdana",
   }

   jQuery.extend(font, fontParams);

    this.each(function(){
       elem = $(this);
       elem.css("font-family", font.fontFamily);
       elem.css("font-size", font.size);
    })
    return this;
};