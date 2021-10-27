var Escolha = ''

function selectCara() {
    Escolha = 'Cara'
}

function selectCoroa() {
    Escolha = 'Coroa'
}

function play() {
    if (0.5 >= Math.random() && Escolha === '' ){document.getElementById('result').innerHTML = "Deu cara!"}
    else if (0.5 <= Math.random() && Escolha === ''){document.getElementById('result').innerHTML = "Deu coroa!"}
    else if (0.5 >= Math.random() && Escolha === 'Cara' ){document.getElementById('result').innerHTML = "Deu cara! Você venceu! :D"}
    else if (0.5 <= Math.random() && Escolha === 'Cara' ){document.getElementById('result').innerHTML = "Deu coroa. Você perdeu D;"}
    else if (0.5 <= Math.random() && Escolha === 'Coroa' ){document.getElementById('result').innerHTML = "Deu coroa! Você venceu! :D"}
    else if (0.5 >= Math.random() && Escolha === 'Coroa' ){document.getElementById('result').innerHTML = "Deu cara. Você perdeu D;"}
}
