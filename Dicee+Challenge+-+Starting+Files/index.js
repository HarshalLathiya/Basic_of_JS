var randomNumber1 = Math.floor(Math.random() * 6) + 1;// To genrate 1-6 randomNumber

var varDiceImage = "dice" + randomNumber1 + ".png";//dicee1.png - dicee6.png

var randomImageSource = "images/" + varDiceImage;//Image + source name

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//For second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;// To genrate 1-6 randomNumber

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";//dicee1.png - dicee6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "play 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
}
else { 
    document.querySelector("h1").innerHTML = "Draw!";
}