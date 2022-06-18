
//Pegando os elementos
const audio = document.getElementById("audio")
const $b = document.querySelector("#switch")
const $c = document.querySelector("#switch2")
const barra = document.querySelector("progress")




//Fazendo os eventos com os elementos
$b.addEventListener("click", function(){
    $c.style = "display: inline-block"
    $b.style = "display: none"
    audio.play()}
)
$c.addEventListener("click", function(){
    $c.style = "display: none"
    $b.style = "display: inline-block"
    audio.pause()}
)


audio.addEventListener("timeupdate", function(){
    barra.style.width = Math.floor((audio.currentTime/audio.duration) * 100) + "%"
    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(audio.currentTime))
})

//Funçoes

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    let campoHoras = Math.floor(campoMinutos / 60)
    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos
    }
    if(campoMinutos < 10){
        campoMinutos = "0" + campoMinutos;
    }
    if(campoHoras < 10){
        campoHoras = "0" + campoHoras;
    }

    if(campoMinutos>=60){
        
        campoMinutos = "0" + Math.floor(campoMinutos % 60)
        
    }

    return campoHoras + ":" + campoMinutos + ":" + campoSegundos;
}




function next() {
    audio.currentTime += 150
}

function back() {
    audio.currentTime -= 15
}