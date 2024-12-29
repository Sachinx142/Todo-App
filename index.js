// Selecting Elements
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Add event listener to the form
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing
    const taskText = todoInput.value.trim();
    if (taskText) {
        addTodo(taskText);
        todoInput.value = ""; // Clear input field
    }
});

// Function to Add a To-Do
function addTodo(taskText) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // Text input for the to-do
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = taskText;
    taskInput.setAttribute("readonly", true);

    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    // Update functionality for the edit button
    editButton.addEventListener("click", () => {
        if (editButton.textContent === "Edit") {
            taskInput.removeAttribute("readonly");
            taskInput.focus();
            editButton.textContent = "Save";
        } else {
            taskInput.setAttribute("readonly", true);
            editButton.textContent = "Edit";
        }
    });

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Remove task on delete button click
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(li);
    });

    // Append all elements to the list item
    li.appendChild(taskInput);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Append the list item to the to-do list
    todoList.appendChild(li);
}
