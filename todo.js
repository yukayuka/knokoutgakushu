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
    self.canAddTodo = ko.computed(function(){
      return self.todoSummary().length > 0;
    });

    //削除機能を追加
    self.deleteTodo = function(todo){
      self.todoList.remove(todo);
    };
  }

  ko.applyBindings(new ViewModel());
})();
