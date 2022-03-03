$(document).ready(()=>{
    $("#btn").click(()=>{
        $.post( "script.php", {nombre: "Saul", apellidos: "Pacheco"}).done(function(data) {
            $("#container").html(data);
        })
    });

})