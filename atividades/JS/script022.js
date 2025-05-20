function converterReal() {
    const inputDolar = Number(document.querySelector('#inputDolar').value)

    if (inputDolar !== 0) {
        const dolarConvertido = (inputDolar * 5.67)
        resultado.innerHTML = `<p>US$ ${inputDolar.toFixed(2)} = R$ ${dolarConvertido.toFixed(2)}</p>`
        resultado.style.color = "green"
        resultado.style.fontWeight = "bold"
    }else{
        resultado.innerHTML = `<p>Por favor, digite um valor válido.</p>`
        resultado.style.color = "red"
        resultado.style.fontWeight = "bold"
    }
}