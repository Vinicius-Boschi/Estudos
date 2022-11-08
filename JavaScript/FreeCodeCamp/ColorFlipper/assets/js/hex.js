const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    let hexColor = "#" // Vai adicionar o # na frente de todo código das cores.
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()] // Vai pegar todo código das cores que foi gerado aleatoriamente pela função.
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}