doneTask = function() {
 if (this.checked) {
     this.parentNode.classList.add("done");
 } else {
     this.parentNode.classlist.remove("done");
}

createNewTask = function() {
 var newLi
 text = document.querySelector("#textbox");
 list = document.querySelector("#list");
 priorityValue = document.querySelector("#priority").value;
 myLi = document.createElement("#li");
  myLi.classList.add(priority.value);
 myIn = document.createElement("input");
  myIn.type = ("checkbox");
  myIn.onclick.doneTask;
 myLi.appendChild(myIn);
 t = document.createTextNode(taskText);
 myLi.appendChild(t);
 list.appendChild(myLi);
}


