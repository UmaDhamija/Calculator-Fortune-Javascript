// Calculator
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", calculateHalf);
function calculateHalf(){
  var input = document.getElementById("half-input").value;
  if (input){
    alert("Half of " + input + " is " + input/2 + ".");
  }
  else{
    alert("Input a number!");
  }

}
//Write a function called fortune that will take one argument
// (your visitor's name) and prints a random "fortune cookie style"
// fortune into an element of your page.

var fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", fortune);

function fortune() {
   var name = document.getElementById("fortune-input").value;
   var fortune = ["you will have a beautiful day today!", "you will be content with your job.", "you will find the love of your life today.", "if you're going through a tough time, keep your head up. It'll get better soon!", "someone is thinking of you and will contact you soon!", "you will meet the person you will marry today!"];
   var randomFortune = fortune[Math.floor(Math.random() * fortune.length)];
   document.getElementById("fortune-output").innerHTML = (name + ", " + randomFortune);
}

// Write a function called restyle that applies new CSS styles
// to the fortune text in a random manner. Modify at least three CSS properties.
// var fortuneStyle = document.getElementById("fortune-output-style");
// fortuneStyle.addEventListener("click", restyle);
var output = document.getElementById("fortune-output");
output.addEventListener("mouseover", restyle);

function restyle(){
  var color = ["orange", "pink", "blue", "purple"];
  output.style.color = color[Math.floor(Math.random()*color.length)];
  output.style.fontSize = "70px";
  output.style.border = "ridge";

}
