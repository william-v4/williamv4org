document.getElementById("logo").onclick() = function() {
    document.getElementById("dropdowncontents").innerHTML = '<img src="williamv4net.png" style="width: 4%;" >';
}
var billboard = document.getElementById("billboard")
var mood = Math.random(0,5)
if (mood = 0) {
    billboard.innerHTML = '<div class="level"><div class="level-item"><h1>OPEN</h1></div><div class="level-item"><h1>SUS</h1></div><div class="level-item"><h1>dynamic</h1></div><div class="level-item"><h1>COMMUNITY</h1></div>'
}
if (mood = 1) {
    billboard.innerHTML = '<div class="level"><div class="level-item"><h1 style="color: 005BBC;">STAY</h1><br><h1 style="color: ffd700;">STRONG</h1></div><div class="level-item"><h1>Glory to Ukraine</h1></div></div>'
}
if (mood = 2) {
    billboard.innerHTML = '<h1>very SUS indeed</h1>'
}
if (mood = 3) {
    billboard.innerHTML = '<div class="level"><div class="level-item"><img src="amogus.webp"></div><div class="level-item"><h1 style="font-size: 64pt;">></h1></div><div class="level-item"><img src="amogusingame"></div></div><br><a href="./amogusisbetter">learn why</a>'
}
// document.getElementById('multiverse').onclick = function() {
//     document.getElementById('')
// }