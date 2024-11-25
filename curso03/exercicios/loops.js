for (let i = 1; i <= 10; i++) {
    console.log("Numero: " + i)
}
let contador = 1
while (contador <= 10) {
    console.log("Contagem: " + contador)
    contador++
}
let numero = 1
do {
    console.log(`Numero: ${numero}`)
    numero++
} while (numero <= 10);
let animais = ["cachorro", "gato", "passaro"]
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}
animais.forEach(function(animal){
    console.log(animal)
})
