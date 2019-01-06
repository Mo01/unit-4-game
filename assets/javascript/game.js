window.onload = function what() {
//generate random number
var minNumber = 39;
var maxNumber = 99;
var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(randomNumber);
document.getElementById("score").innerHTML = randomNumber;


}
