var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
