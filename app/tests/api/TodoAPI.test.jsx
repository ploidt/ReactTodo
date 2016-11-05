var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach (() => {
    localStorage.removeItem('todos');
  });

  it('should exist' , () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodo', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 14924,
        text: 'test the file',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage', () => {
      var todos = [{
        id: 14924,
        text: 'test the file',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodo' , () => {
    var todos = [{
      id: 1,
      text: 'test the file',
      completed: true
    },{
      id: 2,
      text: 'test the file2',
      completed: false
    },{
      id: 3,
      text: 'test the file3',
      completed: true
    }];

    it('should return all item if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return only uncompleted item if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all item when searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return only item that contain searchText keyword', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'File3');

      expect(filteredTodos[0].id).toBe(3);
    });
  });
});
