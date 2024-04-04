///Play Music datouerzi
var audio4 = document.getElementById("audio4");
var img4 = document.getElementById("cartoon4");

function play() {
  audio4.play();
}

function stop() {
  audio4.pause();
}

img4.addEventListener('onclick', play);
img4.addEventListener('mouseover', play);
img4.addEventListener('mouseout', stop);
