function contar() {
    
    var campoInicio =  document.getElementById('txti').value;
    var campoFim = document.getElementById('txtf').value;
    var campoPasso = document.getElementById('txtp').value;
    
    var campoInicioNumero =  Number(campoInicio);
    var campoFimNumero = Number(campoFim);
    var campoPassoNumero = Number(campoPasso);

    var resultado = document.getElementById('resposta');

    if (campoInicio == '' || campoFim == '' || campoPasso == '') {
        alert('ERRO: Verificar dados.');
    } else {
        resultado.innerHTML = '';
        for (var i = campoInicioNumero; i <= campoFimNumero; i = i + campoPassoNumero ) {
            console.log('valor do i: ' + i);
            resultado.innerHTML = resultado.innerHTML + ' ' + i;
        }
        resultado.innerHTML = resultado.innerHTML + 'BANDEIRA'; 

    }

    

}