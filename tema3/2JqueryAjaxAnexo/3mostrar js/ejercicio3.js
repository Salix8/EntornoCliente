$(document).ready(()=>{

    $("#btn").click(()=>{

        $.ajax({
            url: "script.js",
            dataType: 'script',
            success: (response)=>{
                $("#container").text(response)
            },
            error: ()=>{
                alert(`No se ha podido cargar al archivo`);
            }
        });
    });
})


