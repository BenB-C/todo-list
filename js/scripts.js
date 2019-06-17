// user interface logic //
$(document).ready(function() {
  $("#some-form").submit(function(event) {
    event.preventDefault();



    var someInputVar = $("#some-input").val(); // Don't forget it's a string without parseInt()
    var someOutputVar = someInputVar;

    $("#output").text(someOutputVar);
    $("#output").show();
  });
});
// business logic //
function ToDoList(){
  this.tasks = [],
  this.currentId = 0
}

ToDoList.prototype.addTask = function (task){
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.findTask = function(id) {
  for (var i=0; i < this.tasks.length; i++){
    if (this.tasks[i]){
      if (this.tasks[i].id === id){
        return this.tasks[i];
      }
    }
  };
  return false;
}

ToDoList.prototype.deleteTask = function(id) {
  for (var i=0; i < this.tasks.length; i++){
    if (this.tasks[i]){
      if (this.tasks[i].id === id){
        return this.tasks[i];
      }
    }
  };
  return false;
}
