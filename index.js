/** @format */

window.addEventListener("load", () => {
  const container = document.querySelector(".container");
  const addBtn = document.querySelector(".add-task-btn");
  const input = document.querySelector(".add-task");

  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please Add Your Task");
      return;
    }

    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    container.appendChild(listItem);

    const newTask = document.createElement("div");
    newTask.classList.add("new-task");
    listItem.appendChild(newTask);

    const nt = document.createElement("input");
    nt.classList.add("nt");
    newTask.appendChild(nt);
    nt.type = "text";
    nt.value = task;
    nt.setAttribute("readonly", "readonly");

    const btns = document.createElement("div");
    btns.classList.add("btns");
    newTask.appendChild(btns);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "EDIT";
    btns.appendChild(editBtn);
    console.log(editBtn);

    input.value = "";

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (editBtn.innerHTML == "EDIT") {
        nt.removeAttribute("readonly");
        nt.focus();
        editBtn.innerText = "SAVE";
      } else {
        nt.setAttribute("readonly", "readonly");
        editBtn.innerText = "EDIT";
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("clear");
    deleteBtn.textContent = "DELETE";
    btns.appendChild(deleteBtn);
    console.log(deleteBtn);

    deleteBtn.addEventListener("click", (event) => {
      event.preventDefault();
      listItem.remove(nt);
      return;
    });
  });
});
