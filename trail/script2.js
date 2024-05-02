// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Load saved list items from localStorage when the page loads
window.onload = function() {
    var savedTasks = JSON.parse(localStorage.getItem('todoTasks'));
    if (savedTasks) {
      savedTasks.forEach(function(taskText) {
        createTaskElement(taskText);
      });
    }
  };
  
  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
      alert("You must write something!");
      return;
    }
    
    // Create the list item and save it to localStorage
    createTaskElement(inputValue);
  
    // Clear input field
    document.getElementById("myInput").value = "";
  }
  
  // Function to create a new list item
  function createTaskElement(taskText) {
    var li = document.createElement("li");
    var t = document.createTextNode(taskText);
    li.appendChild(t);
  
    document.getElementById("myUL").appendChild(li);
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    // Save updated list of tasks to localStorage
    saveTasksToLocalStorage();
  }
  
  // Save the list of tasks to localStorage
  function saveTasksToLocalStorage() {
    var tasks = [];
    var listItems = document.querySelectorAll("#myUL li");
    listItems.forEach(function(li) {
      tasks.push(li.textContent);
    });
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }
