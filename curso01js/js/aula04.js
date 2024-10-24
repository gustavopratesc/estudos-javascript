// OBJETOS EM JAVASCRIPT

// CRIAR OBJETO

let pessoa = {
    nome : "Gustavo",
    idade : 20,
    peso : 66,
    altura : 1.70,
    doador : false,

}

let produtos = {
    descricao : [],
    preco : [],

}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010],

}

// COMO ACESSAR UMA PROPRIEDADE USANDO .

pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

// ACESSAR PROPRIEDADE USANDO ['']

pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

// OPERAÇÃO IMC = PESO / (ALTURA * ALTURA)

let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(X)
// limita o numero de casas decimais
console.log(`IMC ${imc.toFixed(2)}`)

// ALTERAR/ATUALIZAR O VALOR DA PROPRIEDADE
 produtos.descricao = ['Arroz']
 produtos.preco = ['4.99']

// USANDO spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão']
produtos.preco = [...produtos.preco, '9.99']

