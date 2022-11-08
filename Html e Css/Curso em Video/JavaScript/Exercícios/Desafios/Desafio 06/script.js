function Calcular() {
    var celsius = document.getElementById("temperatura").value
    var k = parseInt(celsius) + 273.15
    var f = (9 / 5 * celsius) + 32
    document.querySelector('.temp').innerHTML += 'A temperatura de ' + celsius + '°C corresponde a...'
    document.querySelector('#resultado').innerHTML += k.toFixed(2).replace(".",",") + ' °K (Kelvin) <br>'
    document.querySelector('#resultado').innerHTML += f.toFixed(2).replace(".",",") + ' °F (Fahrenheit)'
}