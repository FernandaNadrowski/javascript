var valores = [8, 1, 7, 4, 2, 9]
valores.sort() // esse é para deixar os valores em ordem

/* console.log(valores) essa é a maneira de mostrar simples e tudo de uma vez */

/* aqui é o exemplo de como fazer mas que fica trabalhoso:

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


AQUI é o jeito mais inteligente e prático:

for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
