/*Área del triángulo: Encuentra el área de un triángulo con base 6 y altura 4. -> ¿Cómo harías una calculadora de áreas de triángulos? */

document.addEventListener("DOMContentLoaded", function(){
    let base = Number.parseInt(prompt(" Introduzca la base del Triángulo: "));
    let altura = Number.parseInt(prompt(" Introduzca la altura del Triángulo: "));
    let operacionTriangulo = base * altura / 2;
    operacionTriangulo = "<span style='color:red;'><b><br>"+operacionTriangulo+"</b></br><style/ span>";
    document.getElementById("resultado").innerHTML += operacionTriangulo;
    
})
