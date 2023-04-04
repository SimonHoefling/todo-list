import React, { Component } from 'react';
import './App.css';
import Panel from './panel';

class TodoAdd extends Component {

  constructor(props) {
    super(props);

    this.onTodoAdd = this.onTodoAdd.bind(this);
  }

  onTodoAdd() {
    this.props.onAdd("I am the new Todo");
  }

  render() {
    console.log("Hellor from TodoAdd.js");
    return (
      <Panel title="Add Todo-Item">
        <button onClick={this.onTodoAdd}>Add</button>
      </Panel>
    )
  }
}

export default TodoAdd;
