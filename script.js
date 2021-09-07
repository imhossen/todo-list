const displayLocalStorageCard = () => {
    const tasks = getTask();
    for (const task in tasks) {
        displayTask(task);
    }

}
const addItem = () => {
    const text = document.getElementById('text').value;
    // Input Validation
    if (!text) {
        return;
    }
    // add to local storage
    addTaskToStorage(text);
    // Display Task
    displayTask(text);
    // clear
    document.getElementById('text').value = '';
}
const displayTask = text => {
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerText = text;
    ul.appendChild(li);
}
const getTask = () => {
    const task = localStorage.getItem('task');
    let taskObj;
    if (task) {
        taskObj = JSON.parse(task);
    }
    else {
        taskObj = {};
    }
    return taskObj;
}
const addTaskToStorage = text => {
    const task = getTask();
    if (task[text]) {
        task[text] = task[text] + 1;
    }
    else {
        task[text] = 1;
    }
    const taskStringified = JSON.stringify(task);
    localStorage.setItem('task', taskStringified)
}
const emptyTask = () => {
    document.getElementById('tasks').textContent = '';
    localStorage.removeItem('task')
}
displayLocalStorageCard();