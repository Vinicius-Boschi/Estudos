var area = document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = 'Entrou!'
    area.style.background = 'blue'
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'black'
}

//Serve para fazer uma função de clique, para poder clicar em um espaço ou botão e ele fazer uma ação.