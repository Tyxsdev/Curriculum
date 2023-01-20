const spans = document.querySelectorAll('.clickable');
const divs = document.querySelectorAll('.hidden');
const closeSymbol = document.querySelectorAll('.material-symbols-outlined');

function mostrarMas(e){
   divs.forEach(div => div.style.display='block');
}
spans.forEach(span => span.addEventListener('click', mostrarMas));

function cerrar(e){
    divs.forEach(div => div.style.display='none');
}

closeSymbol.forEach(x => x.addEventListener('click', cerrar));