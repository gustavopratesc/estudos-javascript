/*for (let i = 0; i <= 10; i++) {
   console.log(`O número de 1 a 10 é ${i}`)
    
}
let contador = 1
while (contador <= 10) {
    console.log("Contador: " + contador)
    contador++
}*/
/*for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(`O número par é ${index}`)
    }
    
}
for (let i = 1; i <= 100; i++) {
    console.log(`Numeros de 1 a 100: ${i}`)
    
}
let numero = 1
while (numero <= 10) {
    console.log(`5 x ${numero} = ${5 * numero}`)
    numero++
}
let numeros = [3, 7, 9, 12, 15]
for (let i = 0; i < numeros.length; i++) {
    console.log(`Os números ${numeros[i]}`)
    
}
let palavra = "javascript"; 
let vogais = "aeiou"; 
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {  
        contador++;
    }
}

console.log(`A palavra "${palavra}" tem ${contador} vogal(is).`);
*/

while (true) { 
    let numero = Math.floor(Math.random() * 10) + 1; 
    console.log(`Número gerado: ${numero}`);
    
    if (numero === 7) { 
        console.log("Número 7 encontrado! Encerrando o loop...");
        break; 
    }
}

