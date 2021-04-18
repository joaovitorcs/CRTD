let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 1000;
let cronometro;


function iniciarContador() {
    reiniciarContador();
    cronometro = setInterval(function temporizador() {
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
            if (minutos == 60) {
                minutos = 0;
                horas++;
            }
        }
    
        let resultado = ``;
        function formatarResultado() {
            
    
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
        }
    
        formatarResultado();
        
        document.getElementById('contador').innerHTML = resultado;
    }, milissegundos);
};

function pausarContador() {
    clearInterval(cronometro);
};

function pararContador() {
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById('contador').innerHTML = '00:00:00';
};

function reiniciarContador() {
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById('contador').innerHTML = '00:00:00';
};

