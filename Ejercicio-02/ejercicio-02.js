/*Área del círculo: 3.14 * r ** 2, con r igual a 10 -> ¿cómo podemos hacer un programa que reciba el radio r como dato y devuelva el área de la circunferencia? */

    let pi = 3.14;
    let entradaRadio = Number.parseInt(prompt("Introduzca el valor de la radio"))
    let resultadoCircunferencia = (pi * entradaRadio ** 2);
    resultadoCircunferencia = "<span style= 'color: red;'><b>"+ resultadoCircunferencia+"</b></span>"
    document.getElementById("resultada").innerHTML += resultadoCircunferencia;
