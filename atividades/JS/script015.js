function somar() {
    let n1 = Number(document.querySelector('#valor1').value)
    let n2 = Number(document.querySelector('#valor2').value)

    let resultadoSoma = n1 + n2

    document.querySelector('#resultado').value = resultadoSoma
}