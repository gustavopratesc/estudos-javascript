/*Aula 10 funções ou metodos JS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelector('box')

/*Funções sem parametros e sem retorno (procedure) */

function olaMundo() {
    document.write('Ola mundo sem retorno<br>')
}

/* Funções sem parametros e com retorno (function) */

function olaMundo2() {
    return 'Ola mundo com retorno<br>'
}

// Chamar A função = executar ela

olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Testando mensagem'

/* Funções com parametros e sem retorno (procedure) */
function somar(numero1, numero2) {
    document.write((numero1 + numero2) + "<br>")
}


/*Funçoes com parametros e com retorno (function) */
function somar2(c, d) {
    return c + d
}

// chamar a função = executar ela 

somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

// Funções anonima = não tem nome 
// pode ou não ter parametros
// pode ou nao ter retorno

titulo.addEventListener('click', function()
{
    console.log('ciclou no titulo')
})

// Arrow functions ES6 2015 em diante

const olaMundoArrow = () => document.write("Olá MUNDO!!!!!!")

// Nao precisa usar a palavra function
// nao se usa nome na função
/* Não precisa usar a palavra return 
não precisa colocar {} se for se uma instrução */

const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p> '

olaMundoArrow()
document.write(olaMundo2Arrow())