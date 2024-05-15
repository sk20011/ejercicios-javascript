document.addEventListener("DOMContentLoaded", function(){
    let pi = 3.14;
    let entradaRadio = Number.parseInt(prompt("Introduzca el valor de la radio"))
    let resultadoCircunferencia = (pi * entradaRadio ** 2);
    resultadoCircunferencia = "<span style= 'color: red;'><b>"+ resultadoCircunferencia+"</b></span>"
    document.getElementById("resultada").innerHTML += resultadoCircunferencia;
})
