const clickAdicionar = document.querySelector('#buttonAdicionar')

clickAdicionar.addEventListener('click', () => {
    document.querySelector('.estilosDiv').classList.remove("classe1","classe2","classe3","classe4","classe5")
    const classes = ["classe1", "classe2", "classe3", "classe4", "classe5"];
    const classeAleatoria = classes[Math.floor(Math.random() * classes.length)];
    
    document.querySelector('.estilosDiv').classList.add(classeAleatoria);
})

const clickRemover = document.querySelector('#buttonRemover')

clickRemover.addEventListener('click', () => {
    document.querySelector('.estilosDiv').classList.remove("classe1","classe2","classe3","classe4","classe5")
})