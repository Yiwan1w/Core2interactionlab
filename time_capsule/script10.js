///Play Music datouerzi
var audio10 = document.getElementById("audio10");
var img10 = document.getElementById("cartoon10");

function play() {
  audio10.play();
}

function stop() {
  audio10.pause();
}

img10.addEventListener('onclick', play);
img10.addEventListener('mouseover', play);
img10.addEventListener('mouseout', stop);