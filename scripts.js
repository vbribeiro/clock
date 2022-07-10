function relogio () {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    let total = hora + ":" + minutos + ":" + segundos;
    
    document.getElementById('card--show').value = total;
    console.log(total);
};

let timer = setInterval(relogio, 1000);