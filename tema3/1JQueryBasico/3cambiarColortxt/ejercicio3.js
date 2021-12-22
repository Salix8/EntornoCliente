$(document).ready(()=>{

    $(`input[name=colores]`).change(function(){
        $(`#texto`).css(`color`, $(this).val());
    })


})