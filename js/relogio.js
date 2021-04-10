function relogio() {
    let horario = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let resultado = ``;

    if (horas < 10) {
        resultado += `0${horas}:`;
    } else {
        resultado += `${horas}:`;
    }

    if (minutos < 10) {
        resultado += `0${minutos}:`;
    } else {
        resultado += `${minutos}:`;
    }

    if (segundos < 10) {
        resultado += `0${segundos}`;
    } else {
        resultado += `${segundos}`;
    }

    document.getElementById('contador').innerHTML = resultado;
}

let iniciarRelogio = setInterval (relogio, 1000);

relogio();