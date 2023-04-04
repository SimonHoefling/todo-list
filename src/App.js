import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        "Einkaufen",
        "Wäsche waschen",
        "Sport machen"
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todo-Liste</h1>
        <ul className='App-todo'>
          {this.state.todos.map((todo) => {
            return (
              <li>{todo}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
