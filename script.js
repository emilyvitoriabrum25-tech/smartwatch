const visor = document.querySelector('h2');
const dataAtual = document.querySelector('.data-atual');
const diasSemana = [
    'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'
];

const meses = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    visor.innerHTML = `${horas}:${minutos} <span></span>`;
    const diaSemanaText = diasSemana[agora.getDay()];
    const mesText = meses[agora.getMonth()];
    const dia = agora.getDate();
    dataAtual.textContent = `${diaSemanaText} ${mesText} ${dia}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);