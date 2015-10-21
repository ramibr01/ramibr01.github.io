create = function() {
 myBox = document.querySelector("#a");
 myPriority = document.querySelector("#priority");
 myUl = document.createElement("ul");
  myUl = document.querySelector("#task");
 myLi = document.createElement("li");
  myLi.classlist.add(myPriority.value);
  myText = document.createTextNode(myBox.value);
 myIn = document.createElement("input");
  myIn.type = "checkbox";
  myUl.appendChild(myLi);
  myLi.appendChild(input);
  myLi.appendChild(myText);
 }
