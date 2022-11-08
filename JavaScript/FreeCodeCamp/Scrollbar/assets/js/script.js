const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

// Navbar responsiva.

navToggle.addEventListener("click", function() {
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height // Mostra o height atual dos links.
    
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px` // Se for estritamente igual a 0 ele adiciona o height no navbar, fazendo com que ele mostre os links nele.
    } else {
        linksContainer.style.height = 0 // Se não ele recolhe tudo.
    }
})

// Navbar Fixa.

const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset // Quando descer a página a navbar fica fixa.
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }

    if (scrollHeight > 500) { // Se for maior que 500 o botão aparece.
        topLink.classList.add('show-link')
    } else { // Se for menor ele desaparece.
        topLink.classList.remove("show-link")
    }
})

// Links.

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // Default.
        e.preventDefault()
        // Vai até o item específico.
        const id = e.currentTarget.getAttribute("href").slice(1) // Pega o href dos links na lista.
        const element = document.getElementById(id)
        // Calcula o height.
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("fixed-nav")
        let position = element.offsetTop - navHeight// Quando clicar no link vai na posição certa da onde ele está.

        if (!fixedNav) {
            position = position - navHeight
        }

        if (navHeight > 82) {
            position = position + containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position
        })
        linksContainer.style.height = 0 // Reseta a posição, retraindo a navbar.
    })
})