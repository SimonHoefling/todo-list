import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

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

  addTodo(title) {
    let todos = this.state.todos;
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }

    todos.push({id: (maxId + 1), title: title});
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo-List</h1>
        <TodoAdd onAdd={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
