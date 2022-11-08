function converter() {
    var dist = prompt('Digite uma distância em metros (m)')
    var km = dist / 1000 
    var hm = dist / 100
    var dam = dist / 10
    var dm = dist / 0.1
    var cm = dist / 0.01
    var mm = dist / 0.001
  document.getElementById('distanciaId').innerHTML = 'A distância de ' + dist + ' metros, corresponde a...'
  document.querySelector('#resultadoId').innerHTML += km.toFixed(3).replace(".",",") + ' quilômetros (KM) <br> '
  document.querySelector('#resultadoId').innerHTML += hm.toFixed(3).replace(".",",") + ' hectômetros (Hm) <br>'
  document.querySelector('#resultadoId').innerHTML += dam.toFixed(3).replace(".",",") + ' decâmetros (Dam) <br>'
  document.querySelector('#resultadoId').innerHTML += dm.toFixed(1).replace(".",",") + ' decímetros (dm) <br>'
  document.querySelector('#resultadoId').innerHTML += cm.toFixed(0) + ' centímetros (cm) <br>'
  document.querySelector('#resultadoId').innerHTML += mm.toFixed(0) + ' milímetros (mm) ' 
}   