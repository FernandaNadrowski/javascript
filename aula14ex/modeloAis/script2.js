function contar() {

    if (document.getElementById('txti').value == '' || document.getElementById('txtf').value == '' || document.getElementById('txtp').value == '') {
        alert('ERRO: Verificar dados.');
    } else {
        for (var i = Number(document.getElementById('txti').value); i <= Number(document.getElementById('txtf').value); i = i + Number(document.getElementById('txtp').value) ) {
            console.log('valor do i: ' + i);
            document.getElementById('resposta').innerHTML = document.getElementById('resposta').innerHTML + ' ' + i;
        }
    }
}