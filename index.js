console.log("this is a test");




// THE NEW WAY

// RED

document.getElementById("red").addEventListener("mouseover", func);
function func(){
  alert("FIRE! DOUBLE CLICK TO PICK THE FIRE STARTER");
  document.getElementById("red").removeEventListener("mouseover", func)
};
function redToggle(){
  var img1 = "images/pokeball.png";
  var img2 = "images/charmander.png";
  var imgElement = document.getElementById("red");
  imgElement.src = (imgElement.src = img1 )? img2 : img1;
};
console.log("y u no toggle");

// BLUE
document.getElementById("blue").addEventListener("mouseover", func1);
function func1(){ 
   alert("WATER! DOUBLE CLICK TO PICK THE WATER STARTER");
   document.getElementById("blue").removeEventListener("mouseover", func1)
};
function blueToggle(){
  var img1 = "images/pokeball.png";
  var img2 = "images/squertle.png";
  var imgElement = document.getElementById("blue");
  imgElement.src = (imgElement.src = img1 )? img2 : img1 ;
}

// GREEN
document.getElementById("green").addEventListener("mouseover", func2);
function func2(){ 
   alert("GRASS! DOUBLE CLICK TO PICK THE GREEN STARTER");
   document.getElementById("green").removeEventListener("mouseover", func2)
};
function greenToggle(){
  var img1 = "images/pokeball.png";
  var img2 = "images/bulbasaur.png";
  var imgElement = document.getElementById("green");
  imgElement.src = (imgElement.src = img1 )? img2 : img1;
}











