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
}

// 页面加载时调用一次，以初始化倒计时显示
updateCountdown();

