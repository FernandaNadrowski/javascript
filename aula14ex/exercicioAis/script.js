function imprimir() {
    var mensagemTela = document.getElementById('mensagem').value;
    var resultadoTela = document.getElementById('resultado')

    console.log(mensagemTela);

    resultadoTela.innerHTML = ''
    for ( var i = 0; i < mensagemTela ; i++) {
        resultadoTela.innerHTML = resultadoTela.innerHTML + ` i = ${i}` + `<br>`
    }
}
