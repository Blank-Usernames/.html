const btnOpenModal = document.querySelector('#modalOpen')
btnOpenModal.addEventListener('click',btnModal)

const btnCloseModal = document.querySelector('#modalClose')
btnCloseModal.addEventListener('click',btnModal)

function btnModal() {
        const modalTrailer = document.querySelector('.modalTrailer')
        const modalDisplay = modalTrailer.style.display

        if(modalDisplay == 'block'){
            modalTrailer.style.display = 'none'
        }else{
            modalTrailer.style.display = 'block'
        }
    }