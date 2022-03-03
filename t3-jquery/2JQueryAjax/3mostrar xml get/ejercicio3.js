$(document).ready(()=>{

    alert("Hola estoy bien linqueado")

    $("#btn").click(()=>{
        $.get( "archivo.xml", function(xml) {
            $(xml).find("Libro").each(function() {
                var autor   = $(this).find("Autor").text(), 
                    titulo = $(this).find("Titulo").text();

                $("#container").append(`<li>${autor} --> ${titulo}</li>`);
            })
          });
    });

})


