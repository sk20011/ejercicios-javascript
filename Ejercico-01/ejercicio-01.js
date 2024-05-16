/*Calcula el resultado de las expresiones:
Este apartado tiene operaciones numéricas que hay que calcular. Dependiendo de las prioridades o el orden de las operaciones el resultado puede variar.

Operaciones combinadas: 10 + 5 * 2 y (10 + 5) * 2 y 10 + (5 * 2) -> ¿qué observas? */

document.addEventListener('DOMContentLoaded', function() {
    let operacionMatematica = " Resultado = " + (10 + 5 * 2) + " Resultado 2 = " + ((10 + 5) * 2) + " Resultado 3 = " + (10 + (5*3));
    operacionMatematica = "<span style= 'color:red;'><b>"+ operacionMatematica + "</b> </span>"
    document.getElementById("resultado").innerHTML += operacionMatematica;

})

