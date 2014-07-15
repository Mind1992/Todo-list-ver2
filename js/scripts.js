$(document).ready(function() {
  $("form#lists").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#inputtedNewList").val();
    var newList = {name: inputtedListName, tasks:[]};

    $("div#new-lists ul").append("<li><span>" + newList.name + "</span></li>");

    $("input#inputtedNewList").val("");


  $("form#tasks").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#inputtedTaskName").val();
    var newTasks = {task: inputtedTask };
    console.log(newTasks);
    $("div#new-tasks ul").append("<li>" + newTasks.task + "</li>");

    $("input#inputtedTaskName").val("");
    newList.tasks.push(newTasks.task);


  $("#new-lists ul").last().click(function(){
    $("#new-tasks ul").show();
      });
    });
  });
});
