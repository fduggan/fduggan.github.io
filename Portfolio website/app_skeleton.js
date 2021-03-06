/*
 * 1. Fetch data from the database
 * 2. Add data to the database
 * 3. Delete data from the database
 */

var newTodoInput;
window.onload = function(){
// Display the todo items.
todoDB.open(refreshTodos); /* refreshTodos is calling it back*/

// Get references to the todo input element
 newTodoInput = document.getElementById('TODO');
}

function addTodo() {
  // Get the todo text.
  var text = newTodoInput.value;

  // Create the todo item.
  todoDB.createTodo(text, function(todo) {
    refreshTodos();
  });

  // Reset the input field.
  newTodoInput.value = '';
};

  // Update the list of todo items. /*fill in the blanks*/
function refreshTodos() {
  todoDB.fetchTodos(function(todos) {
    //todoList is the parent element that holds all your todos
    var todoList = document.getElementById('list');
    todoList.innerHTML = ''; /* clears everything*/

    for(var i = 0; i < todos.length; i++) {
      // Read the todo items backwards (most recent first).
      var todo = todos[(todos.length - 1 - i)];

      //Create the todo-item text and checkbox

      //...

      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.setAttribute("data-id", todo.timestamp);

      //...
      var task = todo.text;
      var newSpan = document.createElement("span");
      newSpan.innerHTML = task;

      var newDiv = document.createElement("div");

      newDiv.appendChild(checkbox);
      newDiv.appendChild(newSpan);
      
      todoList.appendChild(newDiv);

      // Setup an event listener for the checkbox.
      checkbox.addEventListener('click', function(e) {
        var id = parseInt(e.target.getAttribute('data-id'));

        todoDB.deleteTodo(id, refreshTodos);
      });
    }

  });
}
