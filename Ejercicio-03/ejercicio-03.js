document.addEventListener("DOMContentLoaded", function() {
    let operacionElevada = " Resultado 1 =" + (10**3) + " Resultado 2 =" +(10**-3);
    operacionElevada = "<span style='color:red;'><b>"+operacionElevada+"</b><span/>"
    document.getElementById("resultado").innerHTML += operacionElevada; 
})
