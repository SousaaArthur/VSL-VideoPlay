var video = document.querySelector(".video-player");
var barraProgresso = document.getElementById("barra-progresso");

video.addEventListener("timeupdate", function() {
  var porcentagem = (video.currentTime / video.duration) * 100;
  barraProgresso.value = porcentagem;

  if (video.currentTime === video.duration) {
    console.log("O vídeo terminou!");
  }
});

let btnPause = document.querySelector('.btn-pause')
let btnPlay = document.querySelector('.btn-play')

video.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    btnPause.style.opacity = "0"
    btnPlay.style.opacity = "1"
  } else {
    video.pause();
    btnPause.style.opacity = "1"
    btnPlay.style.opacity = "0"
  }
});