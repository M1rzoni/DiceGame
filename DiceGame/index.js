var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");


var arrayImg = [
    './images/dice6.png',
    './images/dice5.png',
    './images/dice4.png',
    './images/dice3.png',
    './images/dice2.png',
    './images/dice1.png'
];


function randomImg(){

    var img = Math.floor(Math.random() * arrayImg.length);
    return arrayImg[img]
}

function setRandomImg(){
    var img1src = randomImg();
    var img2src = randomImg();

    img1.src = img1src;
    img2.src = img2src;

    if (img1src > img2src){
        document.querySelector("h1").innerHTML = "Player 1 Win!"
    }else if(img1src < img2src){
        document.querySelector("h1").innerHTML = "Player 2 Win!"
        }else{
            document.querySelector("h1").innerHTML = "It's Tie"
        }

}

window.onload = function(){
    setRandomImg();
}