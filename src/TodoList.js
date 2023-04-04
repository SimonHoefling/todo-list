import React, { Component } from 'react';
import Panel from './panel';

class TodoList extends Component {
  render () {
    console.log("Hello from TodoList.js");
    return (
    <Panel title="Todos">
      <ul className='App-todo'>
        {this.props.todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.id}: {todo.title}</li>
          )
        })}
      </ul>
  </Panel>
  )
  }
}

export default TodoList;
