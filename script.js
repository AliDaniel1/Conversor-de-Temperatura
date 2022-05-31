var Temperatura = document.getElementById("Temperatura");
var Resultado = document.getElementById("Resultado");

function CelsiusaFarenheit(){
    T = parseInt(Temperatura.value);

    let Respuesta = (T * 1.8) + 32;
    Resultado.innerHTML = `${Respuesta}°F`;
}

function FarenheitaCelsius(){
    T = parseInt(Temperatura.value);

    let Respuesta = (T - 32) * (5/9);
    Resultado.innerHTML = `${Respuesta}°C`;
}