function passouMouse() {
    document.querySelector('.button').innerHTML = "<p>Passou o mouse</p>"
}

let count = 0
let number = 1

function clicouMouse() {
    count += 1
    number.innerHTML = count
    document.querySelector('.button').innerHTML = "<p>Clicou com o mouse ("+count+") vezes!</p>"
}

function tirouMouse() {
    document.querySelector('.button').innerHTML = "<p>Tirou o mouse</p>"
}