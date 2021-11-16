
function crearForm() {
    let form = document.createElement(`form`);
    form.setAttribute(`id`, `formulario`);

    let inputText = document.createElement(`input`);
    inputText.setAttribute(`type`, `text`);
    inputText.setAttribute(`name`, `Text`);
    inputText.setAttribute(`id`, `text`);
    inputText.setAttribute(`class`, `input`);
    inputText.setAttribute(`value`, `0`);

    let inputSumar = document.createElement(`input`);
    inputSumar.setAttribute(`type`, `button`);
    inputSumar.setAttribute(`name`, `Sumar`);
    inputSumar.setAttribute(`id`, `sumar`);
    inputSumar.setAttribute(`class`, `input`);
    inputSumar.setAttribute(`value`, `Sumar`);

    let inputInicializar = document.createElement(`input`);
    inputInicializar.setAttribute(`type`, `button`);
    inputInicializar.setAttribute(`name`, `Inicializar`);
    inputInicializar.setAttribute(`id`, `inicializar`);
    inputInicializar.setAttribute(`class`, `input`);
    inputInicializar.setAttribute(`value`, `Inicializar`);

    
    document.body.appendChild(form);
    form.appendChild(inputText);
    form.appendChild(inputSumar);
    form.appendChild(inputInicializar);

    const btn = document.querySelector(`.input`);
    btn.setAttribute(`style`, `margin: 20px;`);

    const idformulario = document.getElementById(`formulario`);
    
    const idtext = document.getElementById(`text`);
    const idsumar = document.getElementById(`sumar`);
    const idinicializar = document.getElementById(`inicializar`);

    idsumar.onclick = suma10;
    idinicializar.onclick = inicializar;

    function suma10(){
        idtext.value = parseInt(idtext.value) + 10;
    }
    
    function inicializar(){
        idtext.value = 0;
    }
    
}


