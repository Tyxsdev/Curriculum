const spans = document.querySelectorAll('.mostrar');
const arrayOfSpans = Array.from(spans);
const divs = document.querySelectorAll('div');
const arrayOfDivs = Array.from(divs);
const closeSymbol = document.querySelectorAll('.material-symbols-outlined');

function mostrarMas(e){
    for (let i = 0; i < arrayOfSpans.length; i++){
            if (arrayOfSpans[i].textContent === e.target.textContent){
                console.log(arrayOfSpans[i]);
                console.log(arrayOfDivs[i]);
                arrayOfDivs[i].style.display = 'block';
                break;
            }
        }
}

spans.forEach(span => span.addEventListener('click', mostrarMas))

function cerrar(e){
    for (let i = 0; i < arrayOfDivs.length; i++){
        if (arrayOfDivs[i].contains(e.target)){
            arrayOfDivs[i].style.display='none'
        }
    }
}

closeSymbol.forEach(x => x.addEventListener('click', cerrar));