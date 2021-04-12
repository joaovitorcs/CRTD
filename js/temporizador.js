let contar;
let horasStyle = document.getElementById('horas');
let minutosStyle = document.getElementById('minutos');
let segundosStyle = document.getElementById('segundos');
let resultado = document.getElementById('contador');

function verificarHoras(n) {
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

function iniciarContador() {
    let horas = document.getElementById('horas').value;
    let minutos = document.getElementById('minutos').value;
    let segundos = document.getElementById('segundos').value;

    console.log(segundos)

    
    contar = setInterval(function temporizador() {

        if (verificarSegundos(segundos)) {
            segundos = segundos - 1;
            if (segundos == 0 && minutos == 0 && horas == 0){
                clearInterval(contar);
            }
        }else if (!verificarSegundos(segundos)){
            segundosStyle.style.background = 'red'
        }
           
        if (verificarHoras(horas)) {
            if (minutos == -1 && horas > 0){
                horas--;
            }
        }else if(!verificarHoras(horas)){
            horasStyle.style.background = 'red'
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
        }else(
           minutosStyle.style.background = 'red'
        )

        resultado.innerHTML = `${horas}:${minutos}:${segundos}`;
        
    }, 1000)
}

