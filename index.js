const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('h1');
  taskItem.innerText = taskText;

  const completeButton = document.createElement('button');
  completeButton.innerText =  'Complete';
  completeButton.onclick = function () {
    completeTask(taskItem);
  };

  taskItem.appendChild(completeButton);
  taskList.insertBefore(taskItem, taskList.firstChild);
  taskInput.value = '';
}

function completeTask(taskItem) {
  taskItem.classList.toggle('completed');
  if (taskItem.classList.contains('completed')) {
    setTimeout(function () {
      taskList.removeChild(taskItem);
    }, 500); 
  }
}