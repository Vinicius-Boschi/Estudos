Algoritmo "preco"
//  
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/02/2021
Var
// Seção de Declarações das variáveis 
   preco:Real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Informe o preço: ")
   leia(preco)
   se preco < 10.0 entao
      escreva("Barato!")
   fimse
   se (preco > 40.0) e (preco <= 100.0) entao
      escreva("Preço Bom!")
   fimse
   se preco > 100.0 entao
      escreva("Caro!")
   fimse

Fimalgoritmo