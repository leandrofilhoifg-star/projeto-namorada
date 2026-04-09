function atualizarTudo(){
    const agora = new Date();
    //----Parte 1: RELOGIO DE ACESSO----
    const opcoes = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    document.getElementById('data-footer').innerHTML = "Acesso em:" + dataFormatada;

    //----Parte 2: CONTADOR NAMORO----
    const dataInicio = new Date('2024-06-11T00:00:00');
    const diferenca = agora - dataInicio;

    //Calculos matematico
    const segundosTotais = Math.floor(diferenca / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    //Aproximação de meses
    const anos = Math.floor(diasTotais / 365.25);
    const meses = Math.floor((diasTotais % 365.25) / 30.44);
    const dias = Math.floor((diasTotais % 365.24) % 30.44);
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    const contadorTexto = `${anos} ano, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById('contador-namoro').innerHTML = "Tempo de nossa história:" + contadorTexto;
}
//Atualiza a cada 1 segundo
setInterval(atualizarTudo, 1000);
atualizarTudo();