import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Panel from './panel';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  up() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  down() {
    this.setState({
      counter: this.state.counter - 1
    })
  }


  render() {
    return (
      <div className="App">
        <h2>Klickzähler</h2>
        <p>{this.state.counter}</p>
        <button className='trigger-btn' onClick={this.up}>Klick für + 1</button>
        <button className='trigger-btn' onClick={this.down}>Klick für -1</button>
      </div>
    );
  }
}

export default App;
