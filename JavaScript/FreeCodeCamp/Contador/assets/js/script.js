let count = 0
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn") 

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList // Pega a classe do botão e mostra cada uma dela quando clicado nos botões.

        if (styles.contains('decrease')) {
            count-- // Irá diminuir o número que está na tela, se for menor que 0 ele irá adicionar o - na frente.
            value.textContent = count // Retorna o valor que foi definido pelo count.
        } else if (styles.contains('increase')) {
            count++ // Irá aumentar o número.
            value.textContent = count
        } else {
            count = 0
        }
        
        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
        value.textContent = count
    })
})