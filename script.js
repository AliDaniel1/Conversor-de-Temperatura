var Temperatura = document.getElementById("Temperatura");
var Resultado = document.getElementById("Resultado");

CelsiusaFarenheit = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = (T * 1.8) + 32;
    Resultado.innerHTML = `${Respuesta}°F`;
}

FarenheitaCelsius = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = (T - 32) * (5/9);
    Resultado.innerHTML = `${Respuesta}°C`;
}

CelsiusaKelvin = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = T + 273.15;
    Resultado.innerHTML =`${Respuesta}°K`;
}

KelvinaCelsius = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = T - 273.15;
    Resultado.innerHTML =`${Respuesta}°C`;
}

KelvinaFarenheit = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = (T - 273.15) * 1.8 + 32;
    Resultado.innerHTML =`${Respuesta}°F`;
}

FarenheitaKelvin = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = (T - 32) * 5/9 + 273.15;
    Resultado.innerHTML =`${Respuesta}°K`;
}