// LEFT DICE MATH
var DRL = Math.floor( Math.random() * 6 ) +1;
function displayLeft() {
    document.getElementById("dump").innerHTML= `Left number: ${DRL} `;
};
// RIGHT DICE MATH
var DRR = Math.floor( Math.random() * 6 ) +1;
function displayRight() {
    document.getElementById("dump2").innerHTML= `Right number: ${DRR}`;
};
// DICE GAME
var winner = "" 
function playgame(){
    displayLeft();
    displayRight();
    if( DRL > DRR){
        document.getElementById("dump3").innerHTML="LEFTY WINS";
    }else if(DRR>DRL){
        document.getElementById("dump3").innerHTML="RIGHTY WINS";
    }else{
        document.getElementById("dump3").innerHTML="DRAWs";
    };
};


// for the life of me i cant find on the web how to properly reset this button.
//tried using type="reset". still no good
document.getElementById("redo").addEventListener("click", () => {
    document.getElementById("dump").innerHTML = "0";
    document.getElementById("dump2").innerHTML = "0";
    document.getElementById("dump3").innerHTML = "Try again ehh?";
});
