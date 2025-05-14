function verificarIdade() {
    let idade = Number(document.querySelector('#inputIdade').value)

    if (idade >= 16) {
        document.querySelector('#verificado').innerHTML = "Você pode votar!"
        document.querySelector('#verificado').style.color = "green"
    }else{
        document.querySelector('#verificado').innerHTML = "Você ainda não pode votar!"
        document.querySelector('#verificado').style.color = "red"
    }
}