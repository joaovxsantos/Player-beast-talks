const audio = document.getElementById("audio")
const $b = document.querySelector("#switch")
const $c = document.querySelector("#switch2")

audio.onloadeddata = function(){
    let data = new Date(null);
    data.setSeconds(audio.duration);
    let duracao = data.toISOString().substr(12, 8);
    console.log("O som tem duração " + duracao);
}



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


function next() {
    audio.currentTime += 15
}

function back() {
    audio.currentTime -= 15
}