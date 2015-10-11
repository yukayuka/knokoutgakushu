function ViewModel(){
  var self = this;

  self.todoList = ko.observable('');
  self.todoSummary = ko.observable('');
  self.addTodo = function () {
    var todo = {
      summary: self.todoSummary()
    };
    self.todoList.push(todo);
    self.todoSummary('');
  };
}

ko.applyBindings(new ViewModel());
