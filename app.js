function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if(username === "admin" && password === "12345"){

        window.location.href = 'home.html';
        return false;
    }
    else{
        alert("Invalid credentials! Please try again.");
        return false;
    }
}





let completedCount = 0;

// Function to fetch and load tasks from the API (limit to 15 unchecked tasks)
function loadTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');

            // Filter out only the tasks that are not completed
            const uncheckedTasks = tasks.filter(task => !task.completed).slice(0, 15);

            uncheckedTasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                
                taskItem.innerHTML = `
                    <span>${task.title}</span>
                    <div>
                        <input type="checkbox" class="form-check-input me-2" onclick="markAsCompleted(this)">
                        <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
                    </div>
                `;

                taskList.appendChild(taskItem);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Function to handle marking a task as completed
function markAsCompleted(checkbox) {
    return new Promise((resolve, reject) => {
        if (checkbox.checked) {
            completedCount++;
            resolve();
        } else {
            completedCount--;
            reject();
        }

        // Check if 5 tasks are completed
        if (completedCount === 5) {
            alert("Congrats. 5 Tasks have been Successfully Completed");
        }
    }).catch(() => {
        console.log("Task unchecked");
    });
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();  // Remove the task item from the list
}

// Load tasks when the page loads
window.onload = loadTasks;