$(document).ready(()=>{

    $(`#checkbox`).click(function(){
        if ($(`#checkbox`).prop(`checked`)) {
            var suma = parseInt($(`#num1`).val()) + parseInt($(`#num2`).val());
            $(`#contenedor`).append(`<input type="text" id="suma" value="${suma}">`);
            console.log(suma)
        }else {
            $(`#suma`).remove();
        }
    })
    
})