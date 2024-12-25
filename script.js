document.getElementById('all').addEventListener('click', function() {
  toggleActiveButton('all');
  filterTasks('all');
});

document.getElementById('uk').addEventListener('click', function() {
  toggleActiveButton('uk');
  filterTasks('uk');
});

document.getElementById('international').addEventListener('click', function() {
  toggleActiveButton('international');
  filterTasks('international');
});

document.getElementById('high').addEventListener('click', function() {
  toggleActiveButton('high');
  filterTasks('high');
});

document.getElementById('medium').addEventListener('click', function() {
  toggleActiveButton('medium');
  filterTasks('medium');
});

const taskList = [
  { id: 1, category: 'UK', priority: 'High', applicationId: 'A123', waitingTime: '5 mins', applicant: 'John Doe' },
  { id: 2, category: 'International', priority: 'Medium', applicationId: 'A124', waitingTime: '10 mins', applicant: 'Jane Smith' },
  { id: 3, category: 'UK', priority: 'High', applicationId: 'A125', waitingTime: '3 mins', applicant: 'Alice Brown' },
  { id: 4, category: 'International', priority: 'Medium', applicationId: 'A126', waitingTime: '7 mins', applicant: 'Bob White' },
];

function toggleActiveButton(id) {
  const allFilterBtns = document.querySelectorAll('.filter-btn, .priority-btn');
  allFilterBtns.forEach(btn => btn.classList.remove('active'));

  const activeBtn = document.getElementById(id);
  activeBtn.classList.add('active');
}

function filterTasks(filter) {
  let filteredTasks = taskList;
  if (filter !== 'all') {
    filteredTasks = taskList.filter(task => task.category.toLowerCase() === filter.toLowerCase() || task.priority.toLowerCase() === filter.toLowerCase());
  }

  renderTasks(filteredTasks);
}

function renderTasks(tasks) {
  const taskContainer = document.querySelector('.task-list');
  taskContainer.innerHTML = '';  

  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    
    taskElement.innerHTML = `
      <div class="task-header">
        <h3>Application ID: ${task.applicationId}</h3>
        <span>${task.priority}</span>
      </div>
      <div class="task-info">
        <p><strong>Category:</strong> ${task.category}</p>
        <p><strong>Waiting Time:</strong> ${task.waitingTime}</p>
        <p><strong>Applicant:</strong> ${task.applicant}</p>
      </div>
    `;
    taskContainer.appendChild(taskElement);
  });
}
renderTasks(taskList);
