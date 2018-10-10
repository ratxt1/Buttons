import React, { Component } from 'react';
import './App.css';
// const data = require('./data.json')



class Button extends Component {
  render() {
    let type = this.props.buttons[this.props.type]

    return (
      <div>
        <button className={type.name}>{type.text}</button>
      </div>
    );
  }
}

export default ButtonCore
