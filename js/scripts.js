$(document).ready(function() {
  var currentList;

  $("form#lists").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#inputtedNewList").val();
    var newList = {name: inputtedListName, tasks:[]};
    console.log(newList)
    $("div#new-lists ul").append("<li><span>" + newList.name + "</span></li>");
    currentList = newList;

    $("input#inputtedNewList").val("");

    $("#new-lists ul li").last().click(function(){
      $("#new-tasks").show();
      $("#inputtedTaskName").text("<h4>" + newList.name + "</h4>");
      currentList = newList;
      $("#new-tasks ul").empty();
      currentList.tasks.forEach(function(task) {
        $("#new-tasks ul").append("<li>" + task.name + "</li>");
      })
    });
  });

  $("form#tasks").submit(function(event) {
    alert('im submitting');
    event.preventDefault();

    var inputtedTask = $("input#inputtedTaskName").val();
    var newTask = {name: inputtedTask };
    console.log(newTask);
    $("div#new-tasks ul").append("<li>" + newTask.name + "</li>");

    $("input#inputtedTaskName").val("");
    currentList.tasks.push(newTask);
  });
});
