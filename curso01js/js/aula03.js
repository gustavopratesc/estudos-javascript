// ARRAYS 

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
var test = Array(10)
test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"
let meses = ['jan', 'fev', 'mar', 'abr']

// ADICIONAR no final da lista use push = empurre

produtos.push('Açúcar', 'Farinha')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final da lista use pop = estourar

produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

// ADICIONAR NO INICIO da lista unshift

produtos.unshift('Uva', 'Maçã')

// REMOVER do INICIO da lista do shift

produtos.shift()

// REMOVER um item de uma posição especifica splice
// splice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// Posição inicial, quantos remover
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// VER TAMANHO DO ARRAY length comprimento

// meses.lenght
// meses1.length
// meses2.length

// spreed operator ...
// serve para adicionar informações a um a variavel com array especifico
let teste = [...produtos, 'Ovo', 'Pera']
