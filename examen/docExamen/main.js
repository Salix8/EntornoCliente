$(document).ready(()=>{

    $(`#viajePekin`).click(function(){
        if ($(`#viajePekin`).prop(`checked`)) {
            $(`#contenedor`).append(`
                <form id="formulario2" action="#">
                    <div>
                        <label for="">Nombre: </label>
                        <input type="text" id="nombre" placeholder="Nombre" name="nombre" />
                    </div>
                    <div>
                        <label for="">Correo: </label>
                        <input type="text" id="email" placeholder="Correo" name="correo" />
                    </div>
                    <button id="btn">Enviar</button>
                </form>
            `);
        }

        $("form").on("click", function() {
            $.ajax({
                url: `script.php`,
                type: "GET",
                data: {nombre: $(`#nombre`).val(), correo: $(`#email`).val()},
                success: function(data) {
                    $("#container").html(data)
                },
                error: (response)=>{
                    $("#container").html(`No se ha podido cargar al archivo ha habido un error`);
                }
            });
        });
    })


    $(`#mostrarImagenes`).click(function(){
        if ($(`#mostrarImagenes`).prop(`checked`)) {
            $(`#imagen`).removeClass(`displayNone`);
            $(`#imagen`).addClass(`displayBlock`);
        }
    })

    $(`#imagen`).mouseover(function(){
        $(`#imagen`).slideUp()
        $(`#imagen`).show("highlight", 500);
        $(`#imagen`).animate({ width: "+=200" }, "slow");
        $(`#imagen`).animate({ height: "+=200" }, "slow");
        $(`#imagen`).animate({ width: "-=200" }, "slow");
        $(`#imagen`).animate({ height: "-=200" }, "slow");
        $(`#imagen`).hide("fade", 400)
        
    })
    
})