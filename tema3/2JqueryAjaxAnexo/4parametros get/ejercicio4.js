$(document).ready(()=>{
    
    var str = $( "form" ).serialize();
    $( "#results" ).text( str );

    $("#btn").click(()=>{
        $.get( "script.php", {usuario: "pepe", clave: "hola"}).done(function(data) {        
            
            
        })
    });

})