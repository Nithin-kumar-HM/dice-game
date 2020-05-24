var randamnumber1=Math.floor(Math.random()*6)+1;

var diceNumber="dice" + randamnumber1 + ".png";

var randomImageSource="images/" +diceNumber;

var dices = document.querySelectorAll("img")[0];
dices.setAttribute("src",randomImageSource);

//////////////////second dice//////////////////////////////

var randamnumber2=Math.floor(Math.random()*6)+1;

var diceNumbe2 = "dice" +randamnumber2+ ".png";

var  randomImageSource2 = "images/"+diceNumbe2;

var dices2 =document.querySelectorAll("img")[1];
dices2.setAttribute("src",randomImageSource2);

/////////Game Condition//////////////////////

if(randamnumber1 >randamnumber2)
{
  document.querySelector("h1").innerHTML="Play 1 Wins!🏆";
}else if (randamnumber1 < randamnumber2)
 {
  document.querySelector("h1").innerHTML="Player 2 Wins!🏆";
}else{
  document.querySelector("h1").innerHTML="Draw!"
}
///////////////////////////////////////////////////////////////
