createNewTask = function() {
 myBox = document.querySelector("#a");
 myPriority = document.querySelector("#priority");
 myUl = document.querySelector("#task");
 myLi = document.createElement("li");
  myLi.classlist.add(myPriority.value);
 myIn = document.createElement("input");
  myIn.type = "checkbox";
 myText = document.createTextNode(myBox.value);
  myUl.appendChild(myLi);
  myLi.appendChild(input);
  myLi.appendChild(myText);
 }
