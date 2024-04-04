///Play Music datouerzi
var audio2 = document.getElementById("audio2");
var img2 = document.getElementById("cartoon2");

function play() {
  audio2.play();
}

function stop() {
  audio2.pause();
}

img2.addEventListener('onclick', play);
img2.addEventListener('mouseover', play);
img2.addEventListener('mouseout', stop);
