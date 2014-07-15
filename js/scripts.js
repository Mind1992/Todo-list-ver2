$(document).ready(function() {
  $("form#lists").submit(function(event) {
  event.preventDefault();

  var inputtedListName = $("input#inputtedNewList").val();
  var newList = {name: inputtedListName };
  console.log(newList);
  $("div#new-lists ul").append("<li>" + newList.name + "</li>");

  $("input#inputtedNewList").val("");

  });
});
