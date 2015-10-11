(function(){
  function ViewModel(){
    var self = this;

    self.todoList = ko.observableArray();
    self.todoSummary = ko.observable('');
    self.addTodo = function(){
      var todo = {
        summary: self.todoSummary()
      };

      self.todoList.push(todo);
      self.todoSummary(''); //入力欄を空にする
    };
  }

  ko.applyBindings(new ViewModel());
})();
