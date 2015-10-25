createNewTask = function() {
 var newLi
 text = document.querySelector("#textbox");
 list = document.querySelector("#list");
 priority = document.querySelector("#priority").value;
 myLi = document.createElement("#li");
  myLi.classList.add(#priority.value);
 myIn = document.createElement("input");
  myIn.type = ("checkbox");
  myIn.onclick.doneTask;
 myLi.appendChild(myIn);
 t = document.createTextNode(taskText);
 myLi.appendChild(t);
 tasklist.appendChild(myLi);
}
