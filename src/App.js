import React, { Component } from 'react';
import AddForm from './AddForm';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'first' },
      { id: 2, content: 'second' },
    ]
  }

  handleDeleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  };

  handleAddTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.handleDeleteTodo} />
        <AddForm addTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default App;
