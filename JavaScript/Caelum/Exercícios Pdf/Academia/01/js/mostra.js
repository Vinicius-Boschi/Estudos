function mostra(mensagem){
    var tag = document.createElement("p")
    tag.innerHTML = mensagem
    document.body.appendChild(tag)
}