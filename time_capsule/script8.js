///Play Music datouerzi
var audio8 = document.getElementById("audio8");
var img8 = document.getElementById("cartoon8");

function play() {
  audio8.play();
}

function stop() {
  audio8.pause();
}

img8.addEventListener('onclick', play);
img8.addEventListener('mouseover', play);
img8.addEventListener('mouseout', stop);