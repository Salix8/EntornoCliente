

function contarEnlaces() {
  let numEnlaces = document.getElementsByTagName(`a`).length;
  alert(numEnlaces);
}

function mostrarHref() {
  let referenciasEnlaces = document.getElementsByTagName(`href`);
  for (let i = 0; i < referenciasEnlaces.length; i++) {
    alert( referenciasEnlaces[i]);
  }
}