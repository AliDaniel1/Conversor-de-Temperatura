var Temperatura = document.getElementById("Temperatura");
var Resultado = document.getElementById("Resultado");

CelsiusaFarenheit = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = Number(((T * 1.8) + 32).toFixed(2));
    Resultado.innerHTML = `${Respuesta}°F`;
}

FarenheitaCelsius = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = Number(((T - 32) * (5/9)).toFixed(2));
    Resultado.innerHTML = `${Respuesta}°C`;
}

CelsiusaKelvin = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = Number((T + 273.15).toFixed(2));
    Resultado.innerHTML =`${Respuesta}°K`;
}

KelvinaCelsius = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = Number((T - 273.15).toFixed(2));
    Resultado.innerHTML =`${Respuesta}°C`;
}

KelvinaFarenheit = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = Number((T - 273.15) * 1.8 + 32).toFixed(2);
    Resultado.innerHTML =`${Respuesta}°F`;
}

FarenheitaKelvin = ()=>{
    T = parseInt(Temperatura.value);

    let Respuesta = Number(((T - 32) * 5/9 + 273.15).toFixed(2));
    Resultado.innerHTML =`${Respuesta}°K`;
}
