/*for (let i = 0; i <= 10; i++) {
    console.log("For vai imprimir os números de 1 a 10: " + i)    
}
let soma = 0
for (let i = 0; i <= 100; i++) {
    if (i <= 100) {
        soma += i
    }
    
}
console.log(`O resultado da soma é ${soma}`)

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("O número " + i + " é par");
    } else {
        console.log("O número " + i + " é ímpar");
    }
}
let tabuada = 1
while (tabuada <= 10) {
    console.log(tabuada * 7)
    tabuada++
}*/
for (let index = 1; index <= 10; index++) {
    console.log("Numeros de 1 a 10: " + index)
    
}
let numero = 0
while (numero <= 100) {
    console.log(`O numero deve estar ate 100: ${numero}`)
    numero++
}
let n = 1
do {
    console.log(`Contagem regressiva! ${n}`)
    n++
} while (n <= 10);

let tabuada = 5
for (let index = 1; index <= 10; index++) {
    console.log(`Tabuada do 5: ${5 * index}`)
   
}

let numeroPar = 2
while (numeroPar <= 20) {
    console.log(`Os números pares são: ${numeroPar}`)
    numeroPar += 2 // <- Incrementa de 2 em 2 para pegar so numeros pares
}

let numerofatorial = 5;         // Número cujo fatorial será calculado
let resultado = 1;      // Inicializa o resultado como 1
let contador = numerofatorial;  // O contador começa do número fornecido

while (contador > 1) {  // Loop enquanto o contador for maior que 1
    resultado *= contador;  // Multiplica o resultado pelo contador atual
    contador--;             // Decrementa o contador
}

console.log(`O fatorial de ${numerofatorial} é: ${resultado}`);
