const primerSpan = document.querySelectorAll('span');
const primerDiv = document.querySelector('.primer-div');
const segundoDiv = document.querySelector('.segundo-div');
const tercerDiv = document.querySelector('.tercer-div');
const divs = document.querySelectorAll('div');
const closeSymbol = document.querySelectorAll('.material-symbols-outlined');

function mostrarMas(e){
    let contenido = e.target.textContent;
    if (contenido === 'Hospital San Antonio'){
        primerDiv.style.display = 'block';
    } else if (contenido === 'PEP Solutions'){
        segundoDiv.style.display = 'block';
    } else if (contenido === 'Floyd bar'){
        tercerDiv.style.display = 'block';
    }
}

primerSpan.forEach(span => span.addEventListener('click', mostrarMas))

function cerrar(e){
    divs.forEach(div => div.style.display='none');
}

closeSymbol.forEach(x => x.addEventListener('click', cerrar));