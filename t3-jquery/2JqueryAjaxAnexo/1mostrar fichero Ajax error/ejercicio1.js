$(document).ready(()=>{

    alert("Hola estoy bien linqueado")

    $("#btn").click(()=>{

        $.ajax({

            url: "texto.txt",

            success: (response)=>{

                $("#container").text(response)
            },

            error: (response)=>{
                alert(`No se ha podido cargar al archivo`);
            }
        });
    });
})


