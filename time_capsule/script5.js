///Play Music datouerzi
var audio5 = document.getElementById("audio5");
var img5 = document.getElementById("cartoon5");

function play() {
  audio5.play();
}

function stop() {
  audio5.pause();
}

img5.addEventListener('onclick', play);
img5.addEventListener('mouseover', play);
img5.addEventListener('mouseout', stop);