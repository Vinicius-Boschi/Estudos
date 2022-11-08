function read() {

    let name = document.querySelector(".txtName").value
    let age = document.querySelector(".txtAge").value
    let lang = document.querySelector(".txtLang").value           
    let res = document.querySelector(".res")

    res.innerHTML = `Olá, seu nome é <span class='resName'>${name}</span>, você tem <span class='resAge'>${age}</span> anos e está estudando <span class='resLang'>${lang}</span>, correto?`

    document.querySelector(".txtName").value = ""
    document.querySelector(".txtAge").value = ""
    document.querySelector(".txtLang").value = ""
}