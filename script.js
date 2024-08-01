// Step 1: Setup Event Listener for Page Load  
document.addEventListener('DOMContentLoaded', function() {  
    // Step 2: Select DOM Elements  
    const addButton = document.getElementById('add-task-btn');  
    const taskInput = document.getElementById('task-input');  
    const taskList = document.getElementById('task-list');  
    
    // Step 3: Create the addTask Function  
    function addTask() {  
 // Retrieve and trim the value from the task input field  
 const taskText = taskInput.value.trim();  
    
   if (taskText!== '') {  
   const taskListItem = document.createElement('li');  
    
   // Set its textContent to taskText  
   taskListItem.textContent = taskText;  
    
   
   const removeButton = document.createElement('button');  
   removeButton.textContent = 'Remove';  
   removeButton.className = 'emove-btn';  
    
   // Assign an onclick event to the remove button  
   removeButton.onclick = function() {  
     taskList.removeChild(taskListItem);  
   };  
    
   // Append the remove button to the li element  
   taskListItem.appendChild(removeButton);  
    
   // Append the li to taskList  
   taskList.appendChild(taskListItem);  
    
   // Clear the task input field  
   taskInput.value = '';  
    } else {  
   alert('Please enter a task');  
    }  
    }  
    
    // Step 4: Attach Event Listeners  
    addButton.addEventListener('click', addTask);  
    
    taskInput.addEventListener('keypress', function(event) {  
    if (event.key === 'Enter') {  
   addTask();  
    }  
    });  
    
    // Step 5: Invoke addTask on DOMContentLoaded  
    addTask();  
  });


  // Step 1: Setup Event Listener for Page Load  
document.addEventListener('DOMContentLoaded', function() {  
    // Step 2: Select DOM Elements  
    const addButton = document.getElementById('add-task-btn');  
    const taskInput = document.getElementById('task-input');  
    const taskList = document.getElementById('task-list');  
    
    // Step 3: Load Tasks from Local Storage  
    function loadTasks() {  
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  
    storedTasks.forEach(taskText => addTask(taskText, false));  
    }  
    
    // Step 4: Create the addTask Function  
    function addTask(taskText, save = true) {  
    // Retrieve and trim the value from the task input field  
    const taskTextTrimmed = taskText.trim();  
    
    // Check if taskText is not empty  
    if (taskTextTrimmed!== '') {  
   // Create a new li element  
   const taskListItem = document.createElement('li');  
   taskListItem.textContent = taskTextTrimmed;  
    
// Create a new button element for removing the task  
   const removeButton = document.createElement('button');  
   removeButton.textContent = 'Remove';  
   removeButton.className = 'emove-btn';  
    
     
   removeButton.onclick = function() {  
     taskList.removeChild(taskListItem);  
     removeTaskFromStorage(taskTextTrimmed);  
   };  
    
   
   taskListItem.appendChild(removeButton);  
    
    
   taskList.appendChild(taskListItem);  
    
    
   taskInput.value = '';  
    
   // Save tasks to Local Storage if save is true  
   if (save) {  
     saveTasksToStorage(taskTextTrimmed);  
   }  
    } else {  
   alert('Please enter a task');  
    }  
    }  
    
    // Step 5: Save Tasks to Local Storage  
    function saveTasksToStorage(taskText) {  
   const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  
    storedTasks.push(taskText);  
    localStorage.setItem('tasks', JSON.stringify(storedTasks));  
    }  
    
    // Step 6: Remove Task from Local Storage  
    function removeTaskFromStorage(taskText) {  
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');  
    const index = storedTasks.indexOf(taskText);  
    if (index!== -1) {  
   storedTasks.splice(index, 1);  
   localStorage.setItem('tasks', JSON.stringify(storedTasks));  
    }  
    }  
    
    // Step 7: Attach Event Listeners  
    addButton.addEventListener('click', function() {  
    addTask(taskInput.value);  
    });  
    
    taskInput.addEventListener('keypress', function(event) {  
    if (event.key === 'Enter') {  
   addTask(taskInput.value);  
    }  
    });  
    
    // Step 8: Load Tasks from Local Storage  
    loadTasks();  
  });
  
  