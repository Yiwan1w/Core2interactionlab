// Create a clock where each circle's position is mapped to their respective time component.

function updateTime() {
  
    let hourElem = document.getElementById("hour");
    let minutesElem = document.getElementById("minutes");
    let secondsElem = document.getElementById("seconds");
    
    let today = new Date();
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();
    
    let mappedHour = map(thisHour, 0, 23, 0, 100);
    console.log(mappedHour);
    hourElem.style.bottom = mappedHour + "vh";
    
    let mappedMinute = map(thisMinute, 0, 59, 0, 100);
    console.log(mappedMinute);
    minutesElem.style.bottom = mappedMinute + "vh";
    
    let mappedSecond = map(thisSecond, 0, 59, 0, 100);
    console.log(mappedSecond);
    secondsElem.style.bottom = mappedSecond + "vh";
      
    }
    
    setInterval(updateTime, 1000);
      
    
    // DON'T TOUCH THIS!
    function map(value, low1, high1, low2, high2){
      
      return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    
    }