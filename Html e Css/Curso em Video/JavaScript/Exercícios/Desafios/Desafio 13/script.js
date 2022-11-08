function Notas() {
    let nome = document.getElementById("nome_aluno").value
    let nota1 = Number(document.getElementById("primeira_nota").value)
    let nota2 = Number(document.getElementById("segunda_nota").value)
    let nota3 = Number(document.getElementById("terceira_nota").value)
    let nota4 = Number(document.getElementById("quarta_nota").value)
    let média = (nota1 + nota2 + nota3 + nota4) / 4
    let aprovado = 6
    let reprovado = 3

    document.querySelector('#texto').innerHTML += (`Analisando a situação de ${nome}`)

    if(média < 3) {
        document.querySelector('#resultado').innerHTML += (`<p> Com as notas ${nota1}, ${nota2}, ${nota3} e ${nota4} a <strong> média é ${média}</strong></p>`)
        document.querySelector('#resultado').innerHTML += (`<p> Com a média abaixo de ${reprovado.toFixed(1).replace(".",",")}, o aluno está <span class="reprovado">REPROVADO</span></p>`)

    } else {
        if(média > 3 && média < 6) {
            document.querySelector('#resultado').innerHTML += (`<p> Com as notas ${nota1}, ${nota2}, ${nota3} e ${nota4} a <strong> média é ${média}</strong></p>`)
            document.querySelector('#resultado').innerHTML += (`<p> Com a média entre ${reprovado.toFixed(1).replace(".",",")} e ${aprovado.toFixed(1).replace(".",",")}, o aluno está de <span class="recuperação">RECUPERAÇÃO</span></p>`)
            
        } else {
            document.querySelector('#resultado').innerHTML += (`<p> Com as notas ${nota1}, ${nota2}, ${nota3} e ${nota4} a <strong> média é ${média}</strong></p>`)
            document.querySelector('#resultado').innerHTML += (`<p> Com a média acima de ${aprovado.toFixed(1).replace(".",",")}, o aluno está <span class="aprovado">APROVADO</span></p>`)
        }   
    } 
    document.getElementById("nome_aluno").value = ""
    document.getElementById("primeira_nota").value = ""
    document.getElementById("segunda_nota").value = ""
    document.getElementById("terceira_nota").value = ""
    document.getElementById("quarta_nota").value = ""
}