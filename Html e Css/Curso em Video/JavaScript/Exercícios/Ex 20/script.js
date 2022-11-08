let num = [5, 8, 2, 9, 3]
//num[5] = 6 // Adiciona o valor na próxima casa, se ela não tiver criada o JavaScript cria pra você, se já tiver ele altera.

num.push(7) // Ele adiciona o número na próxima casa vazia, se você não quiser colocar aonde o número vai entrar.

num.sort() // Ele coloca os números em ordem crescente

console.log(`Nosso vetor é o: ${num}`)

console.log(`O vetor tem ${num.length} posições`) // O .length serve para mostrar quantas casas/posições tem o array

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // Serve para achar o valor dentro da variável

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}