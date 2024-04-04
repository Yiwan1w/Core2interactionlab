///Play Music datouerzi
var audio3 = document.getElementById("audio3");
var img3 = document.getElementById("cartoon3");

function play() {
  audio3.play();
}

function stop() {
  audio3.pause();
}

img3.addEventListener('onclick', play);
img3.addEventListener('mouseover', play);
img3.addEventListener('mouseout', stop);
