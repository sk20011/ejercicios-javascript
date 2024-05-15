document.addEventListener('DOMContentLoaded', function() {
    let operacionMatematica = " Resultado = " + (10 + 5 * 2) + " Resultado 2 = " + ((10 + 5) * 2) + " Resultado 3 = " + (10 + (5*3));
    operacionMatematica = "<span style= 'color:red;'><b>"+ operacionMatematica + "</b> </span>"
    document.getElementById("resultado").innerHTML += operacionMatematica;

})

