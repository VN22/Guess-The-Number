"use-strict";

//Variable declarations and initializations
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore =0;

//Utility function: Takes element and sets its content to message
const setContent=function(element,message){
    document.querySelector(element).textContent=message;
}

//Check button functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //If user does not enter number but still presses Check button
  if (!guess) {
  //0 is a falsy value, results in false due to type coercion
    setContent(".message","No number!!🚫");
  } 
  //If the user guesses the right number
  else if (guess === secretNumber) {
    setContent(".message" ,"You guessed the number!!🏆");
    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector(".number").style.width='30rem';
    setContent(".number",secretNumber);
    if (score > highScore) {
      highScore = score;
      setContent(".highscore",highScore);
    }
  } 

  else{
    //Checks if user has not yet exhausted 20 attempts to guess the number
    if(score>1){
      setContent(".message",guess>secretNumber? "Too high!!📈":"Too low!!📉");
      score--;
      setContent(".score",score);
      }
      else{
          setContent(".message","You lost the game!!👎");
          setContent(".score", 0);
      }
  }});

//Again button functionality
document.querySelector(".again").addEventListener("click",function(){
  score=20;
  secretNumber=Math.trunc(Math.random() * 20) + 1;
  setContent(".message","Start guessing...");
  document.querySelector(".guess").value="";
  setContent(".number","?");
  setContent(".score",score);
  document.querySelector('body').style.backgroundColor="#222";
  document.querySelector(".number").style.width='15rem';
});