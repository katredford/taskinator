var buttonEl = document.querySelector("#save-task");
var tasksToDoEL = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "this is a new task.";
    tasksToDoEL.appendChild(listItemEl);
});