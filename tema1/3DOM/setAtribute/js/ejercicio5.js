
function cambiarAtt() {
    let inputHTML = `<input class="input" type="text" value="">`;
    document.body.innerHTML += inputHTML;


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

