
function cambiarAtt() {
    /*let inputHTML = `<input class="input" type="text" value="">`;
    document.body.innerHTML += inputHTML;*/

    let input = document.createElement(`input`);
    input.setAttribute(`type`, `text`);
    input.setAttribute(`class`, `input`);
    input.setAttribute(`value`, `Esto no quedara asi`);
    
    document.body.appendChild(input);

    const btn = document.querySelector(`.input`);
    btn.setAttribute(`value`, `Esto no quedara asi`);

    setTimeout(cambiartipo1,4000);

    function cambiartipo1() {
        btn.setAttribute(`type`, `button`);
        setTimeout(cambiartipo2, 4000);
    }

    function cambiartipo2() {
        btn.setAttribute(`type`, `color`);
    }
}
