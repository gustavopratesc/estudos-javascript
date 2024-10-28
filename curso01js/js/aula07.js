/* Arquivo JS aula 09 DOM + alterar CSS */

let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 07 manipular CSS'
//titulo.innerHTML = 'aula manipular CSS'
    let imagem = document.querySelector('#foto')
    imagem.setAttribute('src', '../images/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png')
    imagem.setAttribute('width', '250px')

    /* MANIPULAR CSS */
 // TEM VARIAS FORMAS
// document.querySelector('h1').style.color = "red";
 //titulo.style.color = "red"
 //tulo.style.backgroundColor = "black"
 titulo.style.width = "250px"
 //titulo.style.borderRadius = "5px"
 titulo.style.padding = "10px"
 

 //let box = document.querySelectorAll('.sessao2')
 //box[0].setAttribute('class', 'azul')
 //box[0].removeAttribute('class')

let tela = document.querySelector('main')

let btnDark = document.querySelector('#iescuro')
let btnLight = document.querySelector('#iclaro')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault()
    console.log('modo dark')
    tela.classList.add('modoEscuro');
    tela.classList.remove('modoClaro');

}

function modoLight() {

    console.log('modo claro')
    tela.classList.remove('modoEscuro');
    tela.classList.add('modoClaro');
}