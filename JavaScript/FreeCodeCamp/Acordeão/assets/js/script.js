const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id // Pega o id do article.
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active') // Remove o ativo dos outros botões.
            e.target.classList.add('active') // Adiciona o ativo a eles.
        })
        // Esconde os outros articles.
        articles.forEach(function(article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})