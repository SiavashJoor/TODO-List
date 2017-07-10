// Problem : User cannot interact with the web
// Solution : Add interactivity to the web by JavaScript

// Identify parts of the list
 function ListElement() {
  
     
 }

// Resolving Add button problem
var addButton = document.getElementById("add-button")
var inputText = document.getElementById("new-task")
var TODOlist = document.getElementById("incomplete-tasks")

var addEvent = function(){
   var li = document.createElement("li")

   var label = document.createElement("label")
       label.textContent = inputText.value;
       
   var listCheck = document.createElement("input")
       listCheck.type = "checkbox"
       
   var buttonEdit = document.createElement("button")
       buttonEdit.textContent = "Edit"
       buttonEdit.className = "edit"

   var buttonDelete = document.createElement("button")
       buttonDelete.textContent = "Delete"
       buttonDelete.className = "delete"
     
       li.appendChild(listCheck)
       li.appendChild(label)
       li.appendChild(buttonEdit)
       li.appendChild(buttonDelete)
       TODOlist.appendChild(li)
}
addButton.onclick = addEvent;

// Have Edit button and Delete button with each element of the list
 var editEvent = function() {
     alert("hi")
     
 }
buttonEdit.onclick = editEvent;
// Resolving Edit button problem
// Resolving Delete button problem
