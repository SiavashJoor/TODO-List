// Problem : User cannot interact with the website. In fact site seems one way
// Solution : Add interactivity to the web using JavaScript

// Add button to transfer input to TODO list
var TODOlist = document.getElementById("incomplete-tasks");

var addClick = function() {
   textField = document.getElementById("new-task");
   li = document.createElement("li");
   label = document.createElement("label")            
      label.textContent = textField.value;
 inputMain = document.createElement("input")
      inputMain.type = "checkbox"
  inputEdit = document.createElement("input")
     inputEdit.type = "text"
  buttonEdit = document.createElement("button")
     buttonEdit.className = "edit"
     buttonEdit.textContent = "Edit"
  buttonDelete = document.createElement("button")
     buttonDelete.className = "delete"
     buttonDelete.textContent = "Delete"
          li.appendChild(inputMain) 
          li.appendChild(label)
          li.appendChild(inputEdit)         // Structuring The Body Of TODO
          li.appendChild(buttonEdit)
          li.appendChild(buttonDelete)  
      TODOlist.appendChild(li)
} 
var addButton = document.getElementById("add-button")
    addButton.onclick = addClick;

// Edit TODO  selected elements
  // Check the box
  var editClick = function() {
    
    if( inputMain.checked === true) {
        alert("Hi")
    }

 }
  buttonEdit.onclick = editClick;


  // Push the edit button
  // Turn the input type to 'text'
  // Press the key
  // Turn the input type to 'checkbox'

// Delete TODO selected elements
  // Promp : ask if it is wanted to be completely deleted or transfer to Completed list
  // Notifcation with checkboxes pop-up
  // Answer : Completed List
     // Transfer to the completed list
  // Answer : Recyble bin
     // Delete it


// Edit completed list


// Delete completed list