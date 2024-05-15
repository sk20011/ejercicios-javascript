document.addEventListener("DOMContentLoaded", function(){
    let base = Number.parseInt(prompt(" Introduzca la base del Triángulo: "));
    let altura = Number.parseInt(prompt(" Introduzca la altura del Triángulo: "));
    let operacionTriangulo = base * altura / 2;
    operacionTriangulo = "<span style='color:red;'><b><br>"+operacionTriangulo+"</b></br><style/ span>";
    document.getElementById("resultado").innerHTML += operacionTriangulo;
    
})
