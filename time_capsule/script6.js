///Play Music datouerzi
var audio6 = document.getElementById("audio6");
var img6 = document.getElementById("cartoon6");

function play() {
  audio6.play();
}

function stop() {
  audio6.pause();
}

img6.addEventListener('onclick', play);
img6.addEventListener('mouseover', play);
img6.addEventListener('mouseout', stop);