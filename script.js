function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const amPm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas === 0 ? 12 : horas;
    horas = String(horas).padStart(2, '0');
    visor.childNodes[0].textContent = `${horas}:${minutos} `;
    periodo.textContent = amPm;

    const diasSemana = [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY'
    ];

    const meses = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ];

    const diaSemana = diasSemana[agora.getDay()];
    const mes = meses[agora.getMonth()];
    const dia = agora.getDate();

    dataAtual.textContent = `${diaSemana} ${mes} ${dia}`;
}