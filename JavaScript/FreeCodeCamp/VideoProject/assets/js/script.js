const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", function() {
    if(!btn.classList.contains("slide")) { // Se tiver a classe slide pausa o video.
        btn.classList.add("slide") // Adiciona a classe ao botão.
        video.pause() // Pausa o video.
    } else { // Se n]ao tiver, toca o video.
        btn.classList.remove("slide") // Remove a classe.
        video.play() // Toca o video.
    }
})

// preloader

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader")
})