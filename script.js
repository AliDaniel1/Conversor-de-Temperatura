var Temperatura = document.getElementById("Temperatura");
var Resultado = document.getElementById("Resultado");

function CelsiusaFarenheit(){
    Temperatura = parseInt(Temperatura.value);

    let Respuesta = (Temperatura * 1.8) + 32;
    Resultado.innerHTML = Respuesta;
}

function FarenheitaCelsius(){
    Temperatura = parseInt(Temperatura.value);

    let Respuesta = (Temperatura - 32) * (5/9);
    Resultado.innerHTML = Respuesta;
}