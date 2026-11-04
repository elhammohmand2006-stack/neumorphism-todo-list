const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  // create the new task (li)
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  // create the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // put them together and add to the list
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // clear the input
  taskInput.value = "";
});