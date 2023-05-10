function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente!`) 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 5) {
            // bebe menino
            img.setAttribute('src', 'bebemenino.png')
            } else if ( idade >= 5 && idade < 15) {
                //menino
                img.setAttribute('src', 'menino.png')
            } else if (idade >=15 && idade < 36) {
                //jovem homem
                img.setAttribute('src', 'homemjovem.png')

            } else if (idade >=36 && idade < 55) {
                //homem adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'homemidoso.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 5) {
                // bebe menina
                img.setAttribute('src', 'bebemenina.png')
                } else if ( idade >= 5 && idade < 15) {
                    //menina 
                    img.setAttribute('src', 'menina.png')
                } else if (idade >=15 && idade < 36) {
                    //jovem mulher
                    img.setAttribute('src', 'mulherjovem.png')
    
                } else if (idade >=36 && idade < 55) {
                    //mulher adulta
                    img.setAttribute('src', 'mulher.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'mulheridosa.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}

