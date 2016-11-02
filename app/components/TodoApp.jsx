var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'play with Paopao'
        },
        {
          id: 2,
          text: 'wash the dish'
        },
        {
          id: 3,
          text: 'penguin pu'
        },
        {
          id: 4,
          text: 'resume'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
