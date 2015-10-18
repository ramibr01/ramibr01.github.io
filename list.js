create = function() {
 var list = document.createElement("li");
 var t = document.createTextNode("hello");
 list.appendChild(t);
 document.getElementById("c").appendChild(list);
 }
