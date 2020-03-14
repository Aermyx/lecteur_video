var video = document.querySelector(".video");
var btnPlay = document.querySelector(".play_block");
var btnPause = document.querySelector(".pause_block");
var btnStop = document.querySelector(".stop_block");

btnPlay.addEventListener("click",function(){
    video.play();
    btnPause.src = "https://imgur.com/Us8Tqmc.png";
    btnPlay.src = "https://imgur.com/C1zPEYA.png";
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

var coin = document.querySelector(".coin");
var coinAudio = new Audio('coins.mp3');

coin.addEventListener("click",function(){
    coinAudio.play();
    coin.style.display = none;
});