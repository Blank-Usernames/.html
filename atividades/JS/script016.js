function mostrarMidia() {
    let inFilme = document.querySelector('#inputFilme').value
    let inMusica = document.querySelector('#inputMusica').value
    let inJogo = document.querySelector('#inputJogo').value

    document.querySelector('#mostrar').style.display = "block"
    document.querySelector('#mostrar').innerHTML = "<p><strong>Filme: </strong>"+inFilme+"</p><p><strong>Música: </strong>"+inMusica+"</p><p><strong>Jogo: </strong>"+inJogo+"</p>"
}