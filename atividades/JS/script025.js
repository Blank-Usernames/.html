function calcularMedia() {
    let n1 = Number(document.querySelector('#nota1').value)
    let n2 = Number(document.querySelector('#nota2').value)
    let n3 = Number(document.querySelector('#nota3').value)

    let valorMedia = ((n1 + n2 + n3)/3).toFixed(1)

    resultadoMedia = document.querySelector('#resultadoMedia')
    resultadoMedia.innerHTML = `<p class="mediatext">Média: ${valorMedia}</p>`

    if(valorMedia >= 6) {
        resultadoMedia.innerHTML += `<p>Status: Aprovado!</p>`
        resultadoMedia.style.color = "green"
    }else{
        resultadoMedia.innerHTML += `<p>Status: Reprovado!</p>`
        resultadoMedia.style.color = "red"
    }
}