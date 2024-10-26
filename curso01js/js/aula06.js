/*Arquivo JS aula 07 DOM */

// DOM = Document Object Model
// Arvore com elementos desde o browser, a janela do Broeser, o documento e cada elemento html que formam os conteudos
/*
navigator
window
    location
    document -> html -> head e body
    history
*/

// Para manipular o DOM precisamos
// indicar quall objeto usar, depois
// chamar um metodo(função) para selecionar ele, seus dados, trazer informações, etc.

//.querySelector() <-- para chamar o primeiro elemento com o mesmo ID ou class
//.querySelectorAll() <-- para chamar todos os elementos
// Selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('h1')

//let caixa = document.querySelectorAll('')

//.textContent

//propriedade ou atributo textContent serve para acessar ou alterar o conteudo de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)

titulo.textContent = 'Mudar o texto para o usuario'

// .querySelectorAll()
// selecionar todos elementos com base na tag #id ou .class

let testando = document.querySelectorAll('.box')
//console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)

//testando[0].textContent = 'texto qualquer'
