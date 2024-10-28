
let tela = document.querySelector('#container')

let btnLight = document.querySelector('#ibranco')
let btnDark = document.querySelector('#ipreto')
let btnRed = document.querySelector('#ivermelho')
let btnOrange = document.querySelector('#ilaranja')
let btnBlue = document.querySelector('#iazul')
let btnGreen = document.querySelector('#iverde')

btnLight.addEventListener('click', modoClaro)
btnDark.addEventListener('click', modoEscuro)
btnRed.addEventListener('click', modoVermelho)
btnOrange.addEventListener('click', modoLaranja)
btnBlue.addEventListener('click', modoAzul)
btnGreen.addEventListener('click', modoVerde)

function modoClaro () {
    //tela.classlist.remove('#container')
    tela.className = '';
    tela.classList.add('fundoBranco');
    
}
function modoEscuro () {
    
    tela.className = '';
    tela.classList.add('fundoPreto')

}
function modoVermelho () {
    
    tela.className = '';
    tela.classList.add('fundoVermelho')
}
function modoLaranja () {
    
    tela.className = '';
    tela.classList.add('fundoLaranja')
}
function modoAzul () {
    
    tela.className = '';
    tela.classList.add('fundoAzul')
}
function modoVerde () {

    tela.className = '';
    tela.classList.add('fundoVerde')
}

console.log(tela);
console.log(btnLight, btnDark, btnRed, btnOrange, btnBlue, btnGreen);

