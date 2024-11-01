function somar() {
    
    let numero1 = parseFloat(document.querySelector("#numero1").value)
    let numero2 = parseFloat(document.querySelector("#numero2").value)

    let resultado = numero1 + numero2

    document.querySelector("#resultado").innerText = `Resultado soma: ${resultado}`
}

function subtrair() {

    let numero1 = parseFloat(document.querySelector("#numero1").value)
    let numero2 = parseFloat(document.querySelector("#numero2").value)

    let resultadosub = numero1 - numero2

    document.querySelector("#resultado").innerText = `Resultado subtração: ${resultadosub}`
}

function multiplicar() {

    let numero1 = parseFloat(document.querySelector("#numero1").value)
    let numero2 = parseFloat(document.querySelector("#numero2").value)

    let resultadomult = numero1 * numero2

    document.querySelector("#resultado").innerText = `Resultado multiplicação: ${resultadomult}`
}

function dividir() {

    let numero1 = parseFloat(document.querySelector("#numero1").value)
    let numero2 = parseFloat(document.querySelector("#numero2").value)

    let resultadodiv = numero1 / numero2

    document.querySelector("#resultado").innerText = `Resultado divisão: ${resultadodiv}`
}