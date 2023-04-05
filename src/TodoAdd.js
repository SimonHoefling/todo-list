import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Panel from './panel';

class TodoAdd extends Component {

  constructor(props) {
    super(props);

    this.onTodoAdd = this.onTodoAdd.bind(this);
    this.onTodoInputChange = this.onTodoInputChange.bind(this);

    this.state = {
      newTodo: ""
    }
  }

  onTodoAdd() {
    this.props.onAdd(this.state.newTodo);
  }

  onTodoInputChange(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {

    return (
      <Panel title="Add Todo-Item">
        <input type='text' onChange={this.onTodoInputChange} value={this.state.newTodo} />
        {(this.state.newTodo != "" ?(
          <button onClick={this.onTodoAdd}>Add Todo ({this.state.newTodo.length})</button>
        ) : null)}
      </Panel>
    )
  }
}

TodoAdd.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default TodoAdd;
