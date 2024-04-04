///Play Music datouerzi
var audio7 = document.getElementById("audio7");
var img7 = document.getElementById("cartoon7");

function play() {
  audio7.play();
}

function stop() {
  audio7.pause();
}

img7.addEventListener('onclick', play);
img7.addEventListener('mouseover', play);
img7.addEventListener('mouseout', stop);