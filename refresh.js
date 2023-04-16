var randomNumber=Math.floor(Math.random()*6)+1;

var randomImg="Alea_" + randomNumber + ".png";

var randomImgSource =randomImg;

var imge1=document.querySelectorAll("img")[0];

imge1.setAttribute("src",randomImgSource);



var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImg1="Alea_" + randomNumber1 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImg1);

if(randomNumber<randomNumber1)
document.querySelector("h2").innerHTML="Player 2 wins! ✨";

else if(randomNumber>randomNumber1)
document.querySelector("h2").innerHTML="✨ Player 1 wins!";

else
document.querySelector("h2").innerHTML="Draw!"


