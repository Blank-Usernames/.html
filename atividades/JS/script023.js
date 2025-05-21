function mudarEstilo() {
    let verificarEstilo = document.querySelector('select[name="selecionarCor"]').value
    let quadrado = document.querySelector('#square')

    if(verificarEstilo == 'vermelho') {
        quadrado.style.backgroundColor = "#D12121"
        quadrado.style.border = "5px solid #721313"
    }else{
        if(verificarEstilo == 'azul') {
            quadrado.style.backgroundColor = "#111CB9"
            quadrado.style.border = "5px solid #060B55"
        }else{
            if(verificarEstilo == 'verde') {
                quadrado.style.backgroundColor = "#1AAA32"
                quadrado.style.border = "5px solid #065524"
            }else{
                if(verificarEstilo == 'amarelo') {
                    quadrado.style.backgroundColor = "#DADD09"
                    quadrado.style.border = "5px solid #555406"
                }else{
                    quadrado.style.backgroundColor = "lightgray"
                    quadrado.style.border = "none"
                }
            }
        }
    }
}