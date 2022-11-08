const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "assets/image/person-1.jpg",
        text: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    },

    {
        id: 2,
        name: "anna johnson",
        job: "web developer",
        img: "assets/image/person-2.jpg",
        text: 
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."
    },

    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "assets/image/person-3.jpg",
        text: 
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },

    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "assets/image/person-4.jpg",   
        text: 
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages."
    },
]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// Defini o início.
let currentItem = 0

// Carrega o item inicial.
window.addEventListener('DOMContentLoaded', function() {
    showPerson()
})

// Mostra as pessoas baseado no item.
function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// Mostra as próximas pessoas.
nextBtn.addEventListener("click", function() {
    currentItem++
    if (currentItem > reviews.lenght - 1) {
        currentItem = 0
    }
    showPerson()
})

// Volta as pessoas que foram passadas.
prevBtn.addEventListener("click", function() {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})

// Mostra as pessoas de forma aleatória.
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(showPerson())
    showPerson()
})