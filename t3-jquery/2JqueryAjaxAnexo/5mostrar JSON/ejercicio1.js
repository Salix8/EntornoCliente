$(document).ready(()=>{

    alert("Hola estoy bien linqueado")

    $("#btn").click(()=>{

        $.ajax({
            dataType: "json",
            url: url,
            data: data,
            success: success
          });
    });
})


