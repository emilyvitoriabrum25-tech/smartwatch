const visor = document.querySelector('.bloco-horario h2');
function atualizarRelogio() {
    let agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    visor.textContent = horas + ":" + minutos;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);
