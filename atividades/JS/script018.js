function inserirNome() {
    inputNomes = document.querySelector('#inputNome').value

    let nomeUsuarios = document.createElement('p')
    nomeUsuarios.innerHTML = inputNomes
    document.querySelector('#submitName').appendChild(nomeUsuarios);

    document.querySelector('#inputNome').value = ""
}