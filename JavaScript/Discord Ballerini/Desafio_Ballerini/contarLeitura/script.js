function count() {
    let phrase = document.querySelector(".paragraph").value
    let res = document.querySelector(".res")
    let words = phrase.split(' ').length

    res.innerHTML = `Este parágrafo tem ${phrase.length} letras, ${words} palavras`
}