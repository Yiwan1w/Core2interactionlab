///Play Music datouerzi
var audio9 = document.getElementById("audio9");
var img9 = document.getElementById("cartoon9");

function play() {
  audio9.play();
}

function stop() {
  audio9.pause();
}

img9.addEventListener('onclick', play);
img9.addEventListener('mouseover', play);
img9.addEventListener('mouseout', stop);