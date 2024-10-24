// comentario em linha

/* Comentario em bloco */


// Criar variaveis use let, const ou var

let produto = 'Arroz'
let quant = 2
let preco_unitario = 4.99
let preco_total = quant * preco_unitario
document.write(`O preço total R$ ${preco_total}<br>`)
//console.log(new Intl.NumberFormat('pt-BR').format(preco_total))

document.write(`Preço total ${preco_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}<hr>`)

// Criar constantes NÃO PODE MODIFICAR O VALOR

const nome = 'Gustavo Prates Caetano'
const peso = 66.5
const altura = 1.70
const imc = peso / (altura * altura)

document.write(`O imc é ${imc.toFixed(2)}<br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let nota_final = nota1 + nota2 + nota3

document.write(`A nota final é ${nota_final}<br>`)


let compra = 1999.99
let desconto = 145.42
let compra_com_desconto = compra - desconto

document.write(compra_com_desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})+ '<br>')