var listaFilmes = ["Yesterday", "A chegada", "Escola do Rock"];

listaFilmes.push("Harry Potter");
listaFilmes.push("Homem de Ferro 3");
listaFilmes.push("Homem de Ferro 2");
listaFilmes.push("Homem de Ferro 1");

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}