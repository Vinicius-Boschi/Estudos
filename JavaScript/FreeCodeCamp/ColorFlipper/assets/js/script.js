const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    // Pega um número entre 0 - 3.
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber] // Muda a cor do fundo da pagina.
    color.textContent = colors[randomNumber] // Coloca o texto da cor na tela.
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length) // Sorteia os números de forma aleatória e mostra ele na tela. E o Math.floor serve pros números ficarem inteiros e não quebrados.
}