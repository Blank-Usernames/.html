function calcularDesconto() {
    let valorProduto = Number(document.querySelector('#valorProduto').value)
    let valorPorcentagem = Number(document.querySelector('#valorPorcentagem').value)

    if(valorProduto !== 0) {
        let valorDesconto = (valorProduto * (valorPorcentagem/100)).toFixed(2)
        let valorResultado = (valorProduto - valorDesconto).toFixed(2)

        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = `<p>Valor do desconto: R$ ${valorDesconto}<p> <p>Preço final com desconto: R$ ${valorResultado}</p>`
        resultado.style.color = "black"
    }else{
        resultado.innerHTML = `<p>Porfavor, insira um valor de produto</p>`
        resultado.style.color = "red"
    }
}