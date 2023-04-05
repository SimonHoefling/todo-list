import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./panel.css"

class Panel extends Component {
  render() {
    console.log("Hello from the Panel.js");
    return (
      <div className='panel-container'>
        <div className='panel-top-container'>
          <h1 className='panel-heading'>{this.props.title}</h1>
        </div>
        <div className='panel-bottom-container'>
          <h4 className='panel-text'>{this.props.children}</h4>
        </div>
      </div>
    );
  }
}
Panel.propTypes = {
  // The title of the pannel is required
  title: PropTypes.string.isRequired
}

export default Panel;
