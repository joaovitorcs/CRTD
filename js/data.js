function data() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let resultado = ``;

    if (dia < 10) {
        resultado += `0${dia}/`;
    } else {
        resultado += `${dia}/`;
    }

    if (mes < 10) {
        resultado += `0${mes + 1}/`;
    } else {
        resultado += `${mes + 1}/`;
    }

    resultado += `${ano}`
    document.getElementById('contador').innerHTML = resultado;
    
}