let servicos = document.getElementsByClassName('caixa_servico')
let doces = document.getElementsByClassName('doces')

let rolagem_da_pagina = 0

function aparecerServicos(){

    rolagem_da_pagina = scrollY

    if(rolagem_da_pagina >= 1050){
        doces[0].classList.remove('invis')
        doces[0].classList.add('visi')

        doces[1].classList.remove('invis')
        doces[1].classList.add('visi')

        doces[2].classList.remove('invis')
        doces[2].classList.add('visi')
    }
    
    if(rolagem_da_pagina >= 2300){
        servicos[0].classList.remove('invis')
        servicos[0].classList.add('visi')

        servicos[1].classList.remove('invis')
        servicos[1].classList.add('visi')

        servicos[2].classList.remove('invis')
        servicos[2].classList.add('visi')

        servicos[3].classList.remove('invis')
        servicos[3].classList.add('visi')
    }

}