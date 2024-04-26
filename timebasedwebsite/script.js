let quickNotes = document.getElementById('quicknotes');
let changeButton = document.getElementById('changebutton');
let changeDelete = document.getElementById('changedelete');
let matterStyle = document.getElementById('matter');
//////matter border color 
// background changing hourly 
var t = new Date().getHours();
if (t < 9) {
    document.body.style.backgroundColor="#8FB9A8";
    document.body.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    
} else if (t < 11) {
    document.body.style.backgroundColor="#FEFAD4";
    document.body.style.color="#765D96";
    quickNotes.style.borderColor = "#765D96";
    changeButton.style.color="#765D96";
    changeDelete.style.color="#765D96";
} else if (t < 14){
    document.body.style.backgroundColor="#FCD0BA";
    document.body.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white"; 
} else if (t < 17){
    document.body.style.backgroundColor="#F0B7A7";
    document.body.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white"; 
} else if (t < 19){
    document.body.style.backgroundColor="#AB6C82";
    document.body.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
} else if (t < 22){
    document.body.style.backgroundColor="#685d79";
    document.body.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
} else {
    document.body.style.backgroundColor="#475C7A";;
    document.body.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="white";
}

////add notes
(function() {

    var fruitList = document.querySelector('#fruitList');
    var fruitInput = document.querySelector('.fruitInput');
    var addFruitButton = document.querySelector('.addFruitButton');
    var removeFruits = document.querySelector('.removeFruits');
    // Add fruits
  
    // Store fruits
    function storestate() {
      localStorage.fruitList = fruitList.innerHTML;
    };
    // Retrieve stored fruits from localStorage
    function retrievestate() {
  
      if (localStorage.fruitList) {
        fruitList.innerHTML = localStorage.fruitList;
      }
    }
    retrievestate();
  
    // Remove fruit storage
    function removeStorage() {
      localStorage.clear(fruitList);
      fruitList.innerHTML = ''; // removes HTML
    }
  
    function addFruit() {
      if (fruitInput.value) {
  
        var li = document.createElement('li');
        li.className = 'fruit-item';
        li.innerHTML = fruitInput.value;
        li.contentEditable = 'true';
        fruitList.append(li);
        fruitInput.value = ''; // Reset input field
      }
      storestate();
  
    }
    // Clear all fruits
    removeFruits.onclick = removeStorage;
    //Add fruit
    addFruitButton.onclick = addFruit;
  
  })();


// clock starts here
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
  ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
  ctx.fillStyle = "transparant";
  ctx.fill();
}
// shape starts here
function drawClock() {
    drawFace(ctx, radius);
  }
  function drawFace(ctx, radius) {
    const grad = ctx.createRadialGradient(0, 0 ,radius * 1, 0, 0, radius * 1.05);
    grad.addColorStop(0, 'white');
    grad.addColorStop(1, 'white');
    grad.addColorStop(0.5, 'white');
  
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
  
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    if (t < 9) {
    ctx.fillStyle = '#8FB9A8';
} else if (t < 11) {
    ctx.fillStyle = '#FEFAD4';
} else if (t < 14) {
    ctx.fillStyle = '#FCD0BA';
} else if (t < 17) {
    ctx.fillStyle = '#F0B7A7';
} else if (t < 19) {
    ctx.fillStyle = '#AB6C82';
} else if (t < 22) {
    ctx.fillStyle = '#685d79';
} else {
    ctx.fillStyle = '#475C7A';
} 
    ctx.fill();
  }

// number starts here
  function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
}
function drawNumbers(ctx, radius) {
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(let num = 1; num < 13; num++){
    let ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

// hand starts here
function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }
  
  function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  
  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
// finally starts here
setInterval(drawClock, 1000);


// Countdown starts here
let home = new Date("May 12, 2024 00:00:00");

// GET TODAY'S DATE
let today = new Date();

// CONVERT TO NUMERICAL REPRESENTATION (getTime())
let homeTime = home.getTime();
console.log(homeTime);

let currentTime = today.getTime();
console.log(currentTime);

// SCALE DOWN TO DAYS
let msLeft = homeTime - currentTime;
console.log(msLeft);

let secondsLeft = msLeft / 1000;

let minutesLeft = secondsLeft / 60;

let hoursLeft = minutesLeft / 60;

let daysLeft = hoursLeft / 24;

let element = document.getElementById("replaceMe");

element.innerHTML = Math.ceil(daysLeft);

///change placeholder color


///mother///
let mother = new Date("May 12, 2024 00:00:00");
let today2 = new Date();
let motherTime = mother.getTime();
console.log(motherTime);
let currentTime2 = today2.getTime();
console.log(currentTime2);
// SCALE DOWN TO DAYS
let msLeft2 = motherTime - currentTime2;
console.log(msLeft2);

let secondsLeft2 = msLeft2 / 1000;

let minutesLeft2 = secondsLeft2 / 60;

let hoursLeft2 = minutesLeft2 / 60;

let daysLeft2 = hoursLeft2 / 24;

let element2 = document.getElementById("replaceMe2");

element2.innerHTML = Math.ceil(daysLeft2);


///birthday///
let birthday = new Date("Auguest 10, 2024 00:00:00");
let today3 = new Date();
let bdTime = birthday.getTime();
console.log(bdTime);
let currentTime3 = today3.getTime();
console.log(currentTime3);
// SCALE DOWN TO DAYS
let msLeft3 = bdTime - currentTime3;
console.log(msLeft3);

let secondsLeft3 = msLeft3 / 1000;

let minutesLeft3 = secondsLeft3 / 60;

let hoursLeft3 = minutesLeft3 / 60;

let daysLeft3 = hoursLeft3 / 24;

let element3 = document.getElementById("replaceMe3");

element3.innerHTML = Math.ceil(daysLeft3);



///school///
let school = new Date("Auguest 26, 2024 00:00:00");
let today4 = new Date();
let schoolTime = school.getTime();
console.log(schoolTime);
let currentTime4 = today4.getTime();
console.log(currentTime4);
// SCALE DOWN TO DAYS
let msLeft4 = schoolTime - currentTime4;
console.log(msLeft4);

let secondsLeft4 = msLeft4 / 1000;

let minutesLeft4 = secondsLeft4 / 60;

let hoursLeft4 = minutesLeft4 / 60;

let daysLeft4 = hoursLeft4 / 24;

let element4 = document.getElementById("replaceMe4");

element4.innerHTML = Math.ceil(daysLeft4);





//////我也不知道我要干什么 相死
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document
    .querySelector(".calendar-current-date");
 
const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");
 
// Array of month names
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
// Function to generate the calendar
const manipulate = () => {
 
    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();
 
    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
 
    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();
 
    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();
 
    // Variable to store the generated calendar HTML
    let lit = "";
 
    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
 
    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
 
        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
 
    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }
 
    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;
 
    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}

let currentMonthcolor = document.getElementById("calendar-dates");

 
manipulate();
 
// Attach a click event listener to each icon
prenexIcons.forEach(icon => {
 
    // When an icon is clicked
    icon.addEventListener("click", () => {
 
        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
 
        // Check if the month is out of range
        if (month < 0 || month > 11) {
 
            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());
 
            // Set the year to the new year
            year = date.getFullYear();
 
            // Set the month to the new month
            month = date.getMonth();
        }
 
        else {
 
            // Set the date to the current date
            date = new Date();
        }
 
        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});


