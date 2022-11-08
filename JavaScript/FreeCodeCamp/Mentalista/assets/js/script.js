let numeroSecreto = parseInt(Math.random() * 11) 

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value)
  let resultado = document.querySelector("#resultado")

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns, você acertou o número!" 
    resultado.style.backgroundColor = 'green'

  } else if (chute > 10 || chute < 0) {
    alert("Digite um número de 0 a 10!")

  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "Número errado. Seu palpite foi muito baixo."
    resultado.style.backgroundColor = 'red'

  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "Número errado. Seu palpite foi muito alto."
    resultado.style.backgroundColor = 'red'
  }
  valor.value = ''
  valor.focus()
}