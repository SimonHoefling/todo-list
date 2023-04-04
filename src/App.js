import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, title: "Shopping"},
        {id: 2, title: "Doing Laundry"},
        {id: 3, title: "Watching TV"}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    let todos = this.state.todos;
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }

    todos.unshift({id: (maxId + 1), title: "Next Todo"});
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo-List</h1>
        <button onClick={this.addTodo}>Add List Item</button>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
