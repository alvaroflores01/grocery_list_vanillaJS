// DOM Selectors
const inputTask = document.querySelector('#inputTask');
const createBtn = document.querySelector('#createBtn');
const clearBtn = document.querySelector('#clearBtn');
const tasksListDiv = document.querySelector('#taskListDiv');

// Variables & Arrays
let tasksList = []; //handled in State
// Functions
function clearList() {
    tasksList = [];
    tasksListDiv.innerHTML = ''
};
function addTask() {   
    const task = inputTask.value;
    if (task === '') return; // prevents sending empty string
    tasksList.push(task);
    //creates 'p' element for each task 
    const newP = document.createElement('p');
    newP.classList.add('taskText');
    const taskText = document.createTextNode(task);
    newP.appendChild(taskText);
    tasksListDiv.appendChild(newP);
    //resets input text after being added. 
    inputTask.value = '';   
};

//Event Listeners // 
    //add tasks e.listeners (click and enter key) then adds task
createBtn.addEventListener('click', () => {
    addTask();
});
inputTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addTask();
    }  
});
    //clear button: resets taskList Array and clears HTML
clearBtn.addEventListener('click', () => {
    clearList();
});
    //toggles completed css class on click
tasksListDiv.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
})
    //removes task if double clicked
tasksListDiv.addEventListener('dblclick', (e) => {
    e.target.remove();
    //finds index of e.target in array and deletes it.
    const index = tasksList.indexOf(`${e.target}`)
    tasksList.splice(index, 1);
})
