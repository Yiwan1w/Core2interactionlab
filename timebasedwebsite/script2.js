let quickNotes = document.getElementById('quicknotes');
let changeButton = document.getElementById('changebutton');
let changeDelete = document.getElementById('changedelete');
let matterStyle = document.getElementById('matter');
let matterStyle2 = document.getElementById('matter2');
let matterStyle3 = document.getElementById('matter3');
let matterStyle4 = document.getElementById('matter4');
let matterStyle5 = document.getElementById('matter5');
let matterStyle6 = document.getElementById('matter6');
let leftPart = document.getElementById('leftpart');
let midPart = document.getElementById('midpart');
let JJJ =  document.getElementById('JJJ');
let III = document.getElementById('III');
//////matter border color 
// background changing hourly 
var t = new Date().getHours();
if (t < 9) {
    ////document.body.style.backgroundColor="#8FB9A8";
    ////document.body.style.color="white";
    JJJ.style.color="#8FB9A8";
    III.style.color="#8FB9A8";
    midPart.style.backgroundColor="#8FB9A8";
    leftPart.style.backgroundColor="#8FB9A8";
    leftPart.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="#8FB9A8";
    matterStyle2.style.borderColor="#8FB9A8";
    matterStyle3.style.borderColor="#8FB9A8";
    matterStyle4.style.borderColor="#8FB9A8";
    matterStyle5.style.borderColor="#8FB9A8";
    matterStyle6.style.borderColor="#8FB9A8";
    
} else if (t < 11) {
    JJJ.style.color="#ffe7c2";
    III.style.color="#ffe7c2";
    midPart.style.backgroundColor="#ffe7c2";
    leftPart.style.backgroundColor="#ffe7c2";
    leftPart.style.color="white";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="#ffe7c2";
    matterStyle2.style.borderColor="#ffe7c2";
    matterStyle3.style.borderColor="#ffe7c2";
    matterStyle4.style.borderColor="#ffe7c2";
    matterStyle5.style.borderColor="#ffe7c2";
    matterStyle6.style.borderColor="#ffe7c2";
} else if (t < 14){
   //// III.style.color="#FCD0BA";
   JJJ.style.color="#FCD0BA";
   III.style.color="#FCD0BA";
   midPart.style.backgroundColor="#FCD0BA";
   leftPart.style.backgroundColor="#FCD0BA";
   leftPart.style.color="white";
   quickNotes.style.borderColor = "white";
   changeButton.style.color="white";
   changeDelete.style.color="white";
   matterStyle.style.borderColor="#FCD0BA";
   matterStyle2.style.borderColor="#FCD0BA";
   matterStyle3.style.borderColor="#FCD0BA";
   matterStyle4.style.borderColor="#FCD0BA";
   matterStyle5.style.borderColor="#FCD0BA";
   matterStyle6.style.borderColor="#FCD0BA";
} else if (t < 17){
    ///document.body.style.backgroundColor="#F0B7A7";
    JJJ.style.color="#F0B7A7";
    III.style.color="#F0B7A7";
    leftPart.style.backgroundColor="#F0B7A7";
    leftPart.style.color="white";
    midPart.style.backgroundColor="#F0B7A7";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="#F0B7A7";
    matterStyle2.style.borderColor="#F0B7A7";
    matterStyle3.style.borderColor="#F0B7A7";
    matterStyle4.style.borderColor="#F0B7A7";
    matterStyle5.style.borderColor="#F0B7A7";
    matterStyle6.style.borderColor="#F0B7A7s";
} else if (t < 19){
    JJJ.style.color="#AB6C82";
    leftPart.style.backgroundColor="#AB6C82";
    leftPart.style.color="white";
    midPart.style.backgroundColor="#AB6C82";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="#AB6C82";
    matterStyle2.style.borderColor="#AB6C82";
    matterStyle3.style.borderColor="#AB6C82";
    matterStyle4.style.borderColor="#AB6C82";
    matterStyle5.style.borderColor="#AB6C82";
    matterStyle6.style.borderColor="#AB6C82";
} else if (t < 22){
    ////document.body.style.backgroundColor="#685d79";
    ///document.body.style.color="white";
    JJJ.style.color="#685d79";
    III.style.color="#685d79";
    leftPart.style.backgroundColor="#685d79";
    leftPart.style.color="white";
    midPart.style.backgroundColor="#685d79";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="#685d79";
    matterStyle2.style.borderColor="#685d79";
    matterStyle3.style.borderColor="#685d79";
    matterStyle4.style.borderColor="#685d79";
    matterStyle5.style.borderColor="#685d79";
    matterStyle6.style.borderColor="#685d79";
} else {
    ///document.body.style.backgroundColor="#475C7A";;
    ///document.body.style.color="white";
    JJJ.style.color="#475C7A";
    III.style.color="#475C7A";
    leftPart.style.backgroundColor="#475C7A";
    leftPart.style.color="white";
    midPart.style.backgroundColor="#475C7A";
    quickNotes.style.borderColor = "white";
    changeButton.style.color="white";
    changeDelete.style.color="white";
    matterStyle.style.borderColor="#475C7A";
    matterStyle2.style.borderColor="#475C7A";
    matterStyle3.style.borderColor="#475C7A";
    matterStyle4.style.borderColor="#475C7A";
    matterStyle5.style.borderColor="#475C7A";
    matterStyle6.style.borderColor="#475C7A";
}

function myFunction() {
    var x = document.getElementById("infor");
    if (x.style.display === "fixed") {
      x.style.display = "fixed";
    } else {
      x.style.display = "none";
    }
  }
let inforBar = document.getElementById("infor");

function onFunction(){
    if (inforBar.style.display === "none") {
        inforBar.style.display = "block";
      } else {
        inforBar.style.display = "none";
      }
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
    ctx.fillStyle = '#ffe7c2';
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
if (t < 9) {
    element.style.color = '#8FB9A8';
} else if (t < 11) {
    element.style.color= '#ffe7c2';
} else if (t < 14) {
    element.style.color= '#FCD0BA';
} else if (t < 17) {
    element.style.color= '#F0B7A7';
} else if (t < 19) {
    element.style.color= '#AB6C82';
} else if (t < 22) {
    element.style.color= '#685d79';
} else {
    element.style.color= '#475C7A';
} 
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
if (t < 9) {
    element2.style.color = '#8FB9A8';
} else if (t < 11) {
    element2.style.color= '#ffe7c2';
} else if (t < 14) {
    element2.style.color= '#FCD0BA';
} else if (t < 17) {
    element2.style.color= '#F0B7A7';
} else if (t < 19) {
    element2.style.color= '#AB6C82';
} else if (t < 22) {
    element2.style.color= '#685d79';
} else {
    element2.style.color= '#475C7A';
} 

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
if (t < 9) {
    element3.style.color = '#8FB9A8';
} else if (t < 11) {
    element3.style.color= '#ffe7c2';
} else if (t < 14) {
    element3.style.color= '#FCD0BA';
} else if (t < 17) {
    element3.style.color= '#F0B7A7';
} else if (t < 19) {
    element3.style.color= '#AB6C82';
} else if (t < 22) {
    element3.style.color= '#685d79';
} else {
    element3.style.color= '#475C7A';
} 


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
if (t < 9) {
    element4.style.color = '#8FB9A8';
} else if (t < 11) {
    element4.style.color= '#ffe7c2';
} else if (t < 14) {
    element4.style.color= '#FCD0BA';
} else if (t < 17) {
    element4.style.color= '#F0B7A7';
} else if (t < 19) {
    element4.style.color= '#AB6C82';
} else if (t < 22) {
    element4.style.color= '#685d79';
} else {
    element4.style.color= '#475C7A';
} 
/////newyear

///school///
let newyear = new Date("January 1, 2025 00:00:00");
let today5 = new Date();
let newyearTime = newyear.getTime();
console.log(schoolTime);
let currentTime5 = today5.getTime();
console.log(currentTime4);
// SCALE DOWN TO DAYS
let msLeft5 = newyearTime - currentTime5;
console.log(msLeft4);

let secondsLeft5 = msLeft5 / 1000;

let minutesLeft5 = secondsLeft5 / 60;

let hoursLeft5 = minutesLeft5 / 60;

let daysLeft5 = hoursLeft5 / 24;

let element5 = document.getElementById("replaceMe5");

element5.innerHTML = Math.ceil(daysLeft5);
if (t < 9) {
    element5.style.color = '#8FB9A8';
} else if (t < 11) {
    element5.style.color= '#ffe7c2';
} else if (t < 14) {
    element5.style.color= '#FCD0BA';
} else if (t < 17) {
    element5.style.color= '#F0B7A7';
} else if (t < 19) {
    element5.style.color= '#AB6C82';
} else if (t < 22) {
    element5.style.color= '#685d79';
} else {
    element5.style.color= '#475C7A';
} 



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


const dateInput = document.querySelector('.dateSelector');

        // Function to save the date to localStorage
        function saveDateToLocalStorage() {
            // Get the value of the date input
            const dateValue = dateInput.value;

            // Store the date value in localStorage
            localStorage.setItem('selectedDate', dateValue);
        }

        // Function to retrieve the date from localStorage
        function getDateFromLocalStorage() {
            // Retrieve the date value from localStorage
            const savedDate = localStorage.getItem('selectedDate');

            // If a date was found in localStorage
            if (savedDate) {
                // Set the value of the date input to the retrieved date
                dateInput.value = savedDate;
            }
        }

        // Call the function to retrieve the date from localStorage
        getDateFromLocalStorage();

        // Event listener to save the date when the input changes
        dateInput.addEventListener('change', saveDateToLocalStorage);
   
        
// Countdown starts here
document.querySelector('.dateSelector').addEventListener("change", function(){
    var input = this.value;
    
    // 存储选择的日期到localStorage
    localStorage.setItem("home", input);
    
    // 调用函数来更新倒计时
    updateCountdown();
});

function updateCountdown() {
    // 从localStorage获取存储的日期字符串
    var storedDateStr = localStorage.getItem("home");
    
    // 将字符串转换为Date对象
    var home = new Date(storedDateStr);
    
    // 获取当前日期
    let today = new Date();
    
    // CONVERT TO NUMERICAL REPRESENTATION (getTime())
    let homeTime = home.getTime();
    let currentTime = today.getTime();
    
    // SCALE DOWN TO DAYS
    let msLeft = homeTime - currentTime;
    let secondsLeft = msLeft / 1000;
    let minutesLeft = secondsLeft / 60;
    let hoursLeft = minutesLeft / 60;
    let daysLeft = hoursLeft / 24;
    
    // 四舍五入到最接近的整数
    let daysLeftRounded = Math.ceil(daysLeft);
    
    // 更新页面上的倒计时显示
    let element = document.querySelector(".replaceMe");
    element.innerHTML = daysLeftRounded;
    if (t < 9) {
        element.style.color = '#8FB9A8';
    } else if (t < 11) {
        element.style.color= '#ffe7c2';
    } else if (t < 14) {
        element.style.color= '#FCD0BA';
    } else if (t < 17) {
        element.style.color= '#F0B7A7';
    } else if (t < 19) {
        element.style.color= '#AB6C82';
    } else if (t < 22) {
        element.style.color= '#685d79';
    } else {
        element.style.color= '#475C7A';
    } 
}

// 页面加载时调用一次，以初始化倒计时显示
updateCountdown();

///////再来一次
document.addEventListener('DOMContentLoaded', function() {
  // Load tasks from local storage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Display tasks
  tasks.forEach(function(task) {
      addTaskToList(task);
  });

  // Add task
  window.addTask = function() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          tasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          addTaskToList(taskText);
          taskInput.value = '';
      }
  };

  // Delete task
  window.deleteTask = function(taskIndex) {
      tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.getElementById('taskList').innerHTML = '';
      tasks.forEach(function(task) {
          addTaskToList(task);
      });
  };

  // Helper function to add task to the list
  function addTaskToList(taskText) {
      const taskList = document.getElementById('taskList');

      const li = document.createElement('ul');
      li.innerHTML = `
          ${taskText}
          <button class="delete-btn" onclick="deleteTask(${tasks.indexOf(taskText)})">Delete</button>
      `;
      taskList.appendChild(li);
  }
});
