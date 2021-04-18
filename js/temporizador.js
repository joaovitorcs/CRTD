let contar;
let horasStyle = document.getElementById('horas');
let minutosStyle = document.getElementById('minutos');
let segundosStyle = document.getElementById('segundos');

alert("Contagem regressiva! Digite as horas, minutos e segundos.")

function verificarHoras(n) { // verificando se o numero inserido está no intervalo determinado
    if (n >= 0 && n <= 10) {
        return true;
    } else {
        return false;
    }
}

function verificarMinutos(n) {
    if (n >= 0 && n <= 59) {
        return true;
    } else {
        return false;
    }
}

function verificarSegundos(n) {
    if (n >= 0 && n <= 59) {
        return true;
    } else {
        return false;
    }
}

function zerarContador(){
    clearInterval(contar)
}

function iniciarContador() {
    zerarContador();
    horasStyle.style.background = '#fff';
    minutosStyle.style.background = '#fff'
    segundosStyle.style.background = '#fff';
    let horas = document.getElementById('horas').value;
    let minutos = document.getElementById('minutos').value;
    let segundos = document.getElementById('segundos').value;

    contar = setInterval(function temporizador() {
        if (verificarSegundos(segundos) && verificarMinutos(minutos) && verificarHoras(horas)) {
            segundos = segundos - 1;
            if (segundos == 0 && minutos == 0 && horas == 0){
                zerarContador();
            }
        }else if (!verificarSegundos(segundos)){
            alert('Valor Inválido! tente um valor entre 0 e 59')
            segundosStyle.style.background = '#ec5353'
            zerarContador();
            segundos = 0;
        }
           
        if (verificarHoras(horas)) {
            if (minutos == -1 && horas > 0){
                horas--;
            }
        }else if(!verificarHoras(horas)){
            alert('Valor Inválido! tente um valor entre 0 e 10')
            horasStyle.style.background = '#ec5353'
            zerarContador();
            horas = 0;
        }
        
        if (verificarMinutos(minutos)) {
            if (segundos == -1) {
                segundos = 59;
                minutos--
                if (horas == 1 && minutos == -1) {
                    minutos = 59;
                    horas--;
                }

                if (horas > 1 && minutos == -1) {
                    horas--;
                    minutos = 59;
                }
            }
        }else if (!verificarMinutos(minutos)){
            alert('Valor Inválido! tente um valor entre 0 e 59')
            minutosStyle.style.background = '#ec5353'
            zerarContador();
            minutos = 0;
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
        // resultado.innerHTML += `${horas}:${minutos}:${segundos}`;
        document.getElementById('contador').innerHTML = resultado;
        
    }, 1000)
}

