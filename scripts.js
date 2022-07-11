function relogio () {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    if (hora < 10) {
        hora = "0" + hora;
    } else if (minutos < 10) {
        minutos = "0" + minutos;
    } else if (segundos < 10) {
        segundos = "0" + segundos;
    }

    let total = hora + ":" + minutos + ":" + segundos;
    
    document.getElementById('card--show').value = total;
    console.log(total);
};

let timer = setInterval(relogio, 1000);