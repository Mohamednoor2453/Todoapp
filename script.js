const button =document.querySelector(".addtask")
const taskList = document.querySelector("#tasklist");



function addTask(){
  const input = document.querySelector("#taskitem").value
  const item = document.createElement("li")
  const checkBox = document.createElement("input")
  checkBox.type="checkbox"

  if (input.trim() !== ""){

    item.textContent = input;
    item.appendChild(checkBox)
    taskList.appendChild(item)
    removeTask(item, checkBox)

  }
  else{
    alert("you haven't input anything")

  }
  document.querySelector("#taskitem").value=""
}

button.addEventListener('click', addTask)

const btn = document.createElement("button")
btn.textContent = "remove Task"

function removeTask(item, checkBox){
    const btn = document.createElement("button");
    btn.textContent = "remove Task"
    item.appendChild(btn)

    btn.addEventListener('click', function(){
      if (checkBox.checked === true){
        taskList.removeChild(item);
      }
      else{
        alert("The task is not yet checked!")
      }
    })
}