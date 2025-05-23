let names = ["Mario","Brandão","77"]

//console.log(names) - Exibir o array
//console.log(`Tamanho do Array: ${names.length}`) - Exibir a quantidade de items do array
//console.log(names[2]) - Exibir um item específico do array

/*for(let i = 0; i < names.length; i++) { - Exibir o conteúdo do array
    console.log(names[i])
}*/

let listaNomes = ['Guilherme','Bruno','Júnior','Richarlison']
for(let i = 0; i < listaNomes.length; i++) {
    let mensagem = `Boas vindas ${listaNomes[i]}`
    console.log(mensagem)
}

listaNomes.forEach((listaNomes) => {
    console.log(listaNomes)
})

listaNomes.push('Rodolfo')
console.log(listaNomes)

listaNomes.pop('Rodolfo')
console.log(listaNomes)

listaNomes.shift()
console.log(listaNomes)

let novoNome = 'Lucas'
listaNomes.splice(2, 0, novoNome)
console.log(listaNomes);