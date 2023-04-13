import React, { Component } from 'react';
import Panel from './panel';
import PropTypes from 'prop-types';
import './TodoList.css';

class TodoList extends Component {
  render () {
    return (
    <Panel title="Todos">
      <ul className='App-todo'>
        {this.props.todos.map((todo) => {
          return (
            <li className='list-item' key={todo.id}>{todo.id}: {todo.title}</li>
          )
        })}
      </ul>
  </Panel>
  )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
