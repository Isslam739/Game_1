let player_1 = true;
let player_2 = false;
var divs = document.querySelectorAll("div");
var reset = document.getElementById("btn").onclick = reset
for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = run;
}

function run() {
  if (player_1) {
    this.textContent = "X";
    player_1 = false;
    player_2 = true;
  } else {
    this.textContent = "O";
    player_1 = true;
    player_2 = false;
  }
}
function reset(){
  for (i=0;i<divs.length;i++){
    divs[i].textContent = ""
  }
}