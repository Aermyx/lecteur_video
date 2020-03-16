
// BOUTON PLAY PAUSE STOP

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


// COINS

var coin1 = document.querySelector(".coin_01");
var coin2 = document.querySelector(".coin_02");
var coin3 = document.querySelector(".coin_03");
var coinAudio1 = new Audio('sounds/coins.mp3');
var coinAudio2 = new Audio('sounds/coins.mp3');
var coinAudio3 = new Audio('sounds/coins.mp3');

coin1.addEventListener("click",function(){
    coinAudio1.play();
    coin1.classList.add("animationCoin");
});

coinAudio1.addEventListener("ended",function(){
    coin1.classList.remove("animationCoin");
});

coin2.addEventListener("click",function(){
    coinAudio2.play();
    coin2.classList.add("animationCoin");
});

coinAudio2.addEventListener("ended",function(){
    coin2.classList.remove("animationCoin");
});

coin3.addEventListener("click",function(){
    coinAudio3.play();
    coin3.classList.add("animationCoin");
});

coinAudio3.addEventListener("ended",function(){
    coin3.classList.remove("animationCoin");
});


// BARRE DE PROGRESSION

var progression = document.querySelector(".progression");

video.addEventListener('timeupdate', function(){
  progression.style.width = video.currentTime*100/video.duration + "%";
});


// ÉVÈNEMENT DE FIN

var tuyau = document.querySelector(".tuyau");
var star = document.querySelector(".divStar");

video.addEventListener("ended",function(){
    tuyau.classList.add("transitionTuyau");
    star.classList.add("animationStar");
    btnPlay.src = "https://imgur.com/H4GywUm.png";
    btnPause.src = "https://imgur.com/C1zPEYA.png";
    btnStop.src="https://imgur.com/C1zPEYA.png";
});

tuyau.addEventListener("transitionend",function(){
    tuyau.classList.remove("transitionTuyau");
});

star.addEventListener("animationend",function(){
    star.classList.remove("animationStar");
});