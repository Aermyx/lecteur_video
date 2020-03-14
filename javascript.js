var video = document.querySelector(".video");
var btnPlay = document.querySelector(".play_block");
var btnPause = document.querySelector(".pause_block");
var btnStop = document.querySelector(".stop_block");

btnPlay.addEventListener("click",function(){
    video.play();
    btnPause.src = "https://imgur.com/Us8Tqmc.png";
    btnPlay.src = "https://imgur.com/C1zPEYA.png";
    btnStop.src = "https://imgur.com/3OAnFiS.png";
});

btnPause.addEventListener("click",function(){
    video.pause();
    btnPlay.src = "https://imgur.com/H4GywUm.png";
    btnPause.src = "https://imgur.com/C1zPEYA.png";
});

btnStop.addEventListener("click",function(){
    video.currentTime = 0;
    video.pause();
    btnPlay.src = "https://imgur.com/H4GywUm.png";
    btnPause.src = "https://imgur.com/C1zPEYA.png";
});

var coin1 = document.querySelector(".coin_01");
var coin2 = document.querySelector(".coin_02");
var coin3 = document.querySelector(".coin_03");
var coinAudio1 = new Audio('sounds/coins.mp3');
var coinAudio2 = new Audio('sounds/coins.mp3');
var coinAudio3 = new Audio('sounds/coins.mp3');

coin1.addEventListener("click",function(){
    coinAudio1.play();
    coin1.style.visibility = "hidden";
});

coin2.addEventListener("click",function(){
    coinAudio2.play();
    coin2.style.visibility = "hidden";
});

coin3.addEventListener("click",function(){
    coinAudio3.play();
    coin3.style.visibility = "hidden";
});