var a = document.getElementsByClassName("imgg")[1]
var audio = document.getElementById("audio")

function go(){
    audio.play()
}

function next(){
    audio.currentTime += 15
}

function back(){
    audio.currentTime -=15
}