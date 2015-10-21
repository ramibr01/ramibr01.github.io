createNewTask = function() {
 myUl = document.querySelector("#list")
  myLi = document.createElement("li");
  myLi.document.querySelector("#priority");
  myLi.classlist.add(myPriority.value);
 myIn = document.createElement("input");
  myIn.type = "checkbox";
 myText = document.createTextNode(myBox.value);
 myBox = document.querySelector("#textbox");
 myUl.appendChild(myLi);
 myLi.appendChild(myIn);
 myLi.appendChild(myText);
 }
