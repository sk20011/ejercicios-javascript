/*Área del triángulo: Encuentra el área de un triángulo con base 6 y altura 4. -> ¿Cómo harías una calculadora de áreas de triángulos? */
let contadorDeClicks = 0;
document.addEventListener("click", function() {
    contadorDeClicks++
    if(contadorDeClicks <=1){
        let operacionElevada = " Resultado 1 =" + (10**3) + " Resultado 2 =" +(10**-3);
        operacionElevada = "<span style='color:red;'><b>"+operacionElevada+"</b><span/>"
        document.getElementById("resultado").innerHTML += operacionElevada; 
    }
})
