var Cara
var Coroa

function selectCara() {
    Cara = true
    Coroa = false
}

function selectCoroa() {
    Coroa = true
    Cara = false
}

function selectPlay(){
if (0.5 >= Math.random() && Cara === true){
    playCara()
}

else if (0.5 <= Math.random() && Coroa ===true){
    playCoroa()
}
}

function playCara() {
    if (0.5 >= Math.random()){
        alert("Deu cara! Você venceu! :D")
}
        else {
            alert("Deu coroa. Você perdeu D;")
}
}


function playCoroa() {
    if (0.5 <= Math.random()){
        alert("Deu coroa! Você venceu! :D")
}
        else {
            alert("Deu cara. Você perdeu D;")
}
}
