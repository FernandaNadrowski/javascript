var listaNumeros = []

function adicionar() {
    var campo = document.getElementById('txtn')
    if (campo.value.length == 0 || campo.value < 1 || campo.value > 100) { 
        alert('Adicione um número')
    } else {
        listaNumeros.push(document.getElementById('txtn').value) // acrescentar
        console.log(listaNumeros)
        atualizarQuadro()
    }
   
}

function atualizarQuadro() {
    var quadro = document.getElementById('quadroconteudo')
    quadro.innerHTML = '';

    for (var i = 0; i < listaNumeros.length; i++) {
            var item = document.createElement('option')
            item.text = `Valor ${listaNumeros[i]} adicionado`
            item.value = `${listaNumeros[i]}` 
            quadro.appendChild(item)
    }
}


function finalizar() {
    var resultado = document.getElementById('telaFinal')
    
   resultado.innerHTML = `Ao todo, temos ${listaNumeros.length} números cadastrados.`

    var listaNumeroOrdenada = listaNumeros.sort();
    resultado.innerHTML = resultado.innerHTML + `<br> O maior valor informado foi ${listaNumeroOrdenada[listaNumeroOrdenada.length-1]}.`
    resultado.innerHTML = resultado.innerHTML + `<br> O menor valor informado foi ${listaNumeroOrdenada[0]}.`

    var resSoma = somar(listaNumeros);
    resultado.innerHTML = resultado.innerHTML + `<br> Somando todos os valores, temos ${resSoma}.`
    
    var resMedia = calcularMedia(listaNumeros);
    resultado.innerHTML = resultado.innerHTML + `<br> A média dos valores digitados é ${resMedia}.`

}

function somar(lista) {
    var resultadoSoma = 0;

    for (var i = 0; i < lista.length; i++) {
        resultadoSoma = resultadoSoma + Number(lista[i])
    }

    return resultadoSoma;
}

function calcularMedia(lista) {
    var resultadoSoma = 0;

    for (var i = 0; i < lista.length; i++) {
        resultadoSoma = resultadoSoma + Number(lista[i])
    }

    return resultadoSoma / lista.length;
}


/*
function soma (n 1, n2) {
    return n1 +n2
}

console.log(soma(2))
*/