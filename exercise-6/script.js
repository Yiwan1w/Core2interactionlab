let box2 = document.getElementById('second');
let box3 = document.getElementById('third');
let box4 = document.getElementById('fourth');
let box5 = document.getElementById('fifth');
let box6 = document.getElementById('sixth');
let box7 = document.getElementById('seventh');
let box8 = document.getElementById('eighth');

let text = document.getElementById('name');

let borders = ['10px','5px','15px','20px','25px','2px','30px'];
let randomBorder1 = Math.floor(Math.random() * borders.length);
box2.style.borderWidth = borders[randomBorder1];
let randomBorder2 = Math.floor(Math.random() * borders.length);
box3.style.borderWidth = borders[randomBorder2];
let randomBorder3 = Math.floor(Math.random() * borders.length);
box4.style.borderWidth = borders[randomBorder3];
let randomBorder4 = Math.floor(Math.random() * borders.length);
box5.style.borderWidth = borders[randomBorder4];
let randomBorder5 = Math.floor(Math.random() * borders.length);
box6.style.borderWidth = borders[randomBorder5];
let randomBorder6 = Math.floor(Math.random() * borders.length);
box7.style.borderWidth = borders[randomBorder6];

let styles = ['dotted','dashed','solid','double'];
let randomStyle1 = Math.floor(Math.random() * styles.length);
box2.style.borderStyle = styles[randomStyle1];
let randomStyle3 = Math.floor(Math.random() * styles.length);
box4.style.borderStyle = styles[randomStyle3];
let randomStyle5 = Math.floor(Math.random() * styles.length);
box6.style.borderStyle = styles[randomStyle5];
let randomStyle7 = Math.floor(Math.random() * styles.length);
box8.style.borderStyle = styles[randomStyle7];

let colors = ['#98AFC7','$87AFC7','#2B547E','#728FCW','grey'];
let randomColor1 = Math.floor(Math.random() * colors.length);
box2.style.borderColor = colors[randomColor1];
let randomColor2 = Math.floor(Math.random() * colors.length);
box3.style.borderColor = colors[randomColor2];
let randomColor3 = Math.floor(Math.random() * colors.length);
box4.style.borderColor = colors[randomColor3];
let randomColor4 = Math.floor(Math.random() * colors.length);
box5.style.borderColor = colors[randomColor4];
let randomColor5 = Math.floor(Math.random() * colors.length);
box6.style.borderColor = colors[randomColor5];
let randomColor6 = Math.floor(Math.random() * colors.length);
box7.style.borderColor = colors[randomColor6];
let randomColor7 = Math.floor(Math.random() * colors.length);
box8.style.borderColor = colors[randomColor7];

let randomColor8 = Math.floor(Math.random() * colors.length);
text.style.color = colors[randomColor8];
