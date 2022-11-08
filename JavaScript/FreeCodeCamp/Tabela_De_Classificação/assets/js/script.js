let jogadores = []
let percorrer = []

function Pessoas(nome, link) {
  return {nome, link, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
}

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadores(jogadores) {
  let tabelaJogo = document.getElementById("tabelaJogadores")
  let elemento = ""

  for (let i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>"+"<img class='fotoJogadores' src=" + jogadores[i].link + ">" + "</td>"
    elemento += "<td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento +=
      "<td><button class='buttons' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento +=
      "<td><button class='buttons' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento +=
      "<td><button class='buttons' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento +=
      "<td><button class='buttons' onClick='resetarPontos(" + i + ")'>Resetar</button></td></tr>"
  }
  tabelaJogo.innerHTML = elemento
}

function adicionarVitoria(i) {
  let jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function adicionarEmpate(i) {
  let jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function adicionarDerrota(i) {
  let jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function resetarPontos() {
  jogadores.forEach((elemento) => {
    elemento.vitorias = 0
    elemento.empates = 0
    elemento.derrotas = 0
    elemento.pontos = 0
    exibeJogadores(jogadores)
  })
}

function add(){
  const nomePessoa = document.getElementById("nome").value
  const link = document.getElementById("linkFoto").value
  let linkJogador = "https://png.pngtree.com/png-vector/20190615/ourlarge/pngtree-mascot-gaming-esport-logo-with-buffalo-illustration-png-image_1501661.jpg"
  
  if (link.endsWith(".jpg") || link.endsWith(".png")) {
    linkJogador = link
  } else {
    alert("[ERRO] A imagem precisa ser no formato .jpg ou .png!!!")
  }

  const novaPessoa = new Pessoas(nomePessoa, linkJogador)

  jogadores.push(novaPessoa)
  percorrer.push(novaPessoa)
  exibeJogadores(percorrer)

  nome.value = ''
  linkFoto.value = ''
}