import React, { Component } from 'react';
import "./button.css"

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <h1 className="button-heading">Ich bin ein Button</h1>
        <button>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;
