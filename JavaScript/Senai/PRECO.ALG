Algoritmo "preco"
//  
//  
// Descri??o   : Aqui voc? descreve o que o programa faz! (fun??o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/02/2021
Var
// Se??o de Declara??es das vari?veis 
   preco:Real

Inicio
// Se??o de Comandos, procedimento, fun??es, operadores, etc... 
   escreval("Informe o pre?o: ")
   leia(preco)
   se preco < 10.0 entao
      escreva("Barato!")
   fimse
   se (preco > 40.0) e (preco <= 100.0) entao
      escreva("Pre?o Bom!")
   fimse
   se preco > 100.0 entao
      escreva("Caro!")
   fimse

Fimalgoritmo