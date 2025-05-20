function imc() {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const resultado = document.querySelector('#resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1)
        if (valorImc < 18.5){
            tipoImc = '"Abaixo do peso ideal"'
        }else{
            if (valorImc > 18.5 && valorImc < 25) {
                tipoImc = '"Peso ideal"'
            }else{
                if (valorImc < 25) {
                    tipoImc = '"Acima do peso ideal"'
                }else{
                    if (valorImc < 30) {
                        tipoImc = '"Sobrepeso"'  
                    }else{
                        if (valorImc < 35) {
                            tipoImc = '"Obesidade"'
                        }else{
                            tipoImc = '"Obesidade Extrema"'
                        }
                    }
                }
            }
        }
        campoResultado.innerHTML = `${nome} seu IMC é de ${valorImc} e você está com ${tipoImc}`
    }else{
        campoResultado.innerHTML = "Preencha todos os campos"
    }
}